<?php

namespace App\Libs\OuterAPI\TelegramAPI;

use App\Models\TelegramChat;
use Exception;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TelegramAPI
{
    protected $api_key; // Тут нельзя сразу присвоить значение из env

    /**
     * Меню для телеграмма. Перед использованием закодировать в json_encode.
     * @var array
     */
    public static $telegram_menu = [
        'keyboard' => [
            [['text' => 'Статистика сайт-краулеров', 'callback_data' => 'get_site_crawlers_logs']],
            [['text' => 'На сайт']]
        ],
        'resize_keyboard' => true, // Сделать кнопки компактными
        'one_time_keyboard' => false // Не скрывать после нажатия
    ];


    public function __construct($api_key)
    {
        $this->api_key = $api_key;
    }

    public function get_api_key()
    {
        return $this->api_key;
    }

    /**
     * Обрабатывает входящие данные от бота.
     * @param string $data
     * @return void
     * @throws \Exception
     */
    public function process_incoming_data($data)
    {
        // пример того, что будет в $data:
        /*
            [
                "update_id"=>290801414,
                "message"=> [
                    "message_id" => 2,
                    "from" => [
                        "id" => 501749226,
                        "is_bot" => false,


                        "first_name" => "Николай",
                        "last_name" => "Аникеев",
                        "username" => "anikeev_nikolas",
                        "language_code" => "en"
                    ],
                    "chat" => [
                        "id" => 501749226,
                        "first_name" => "Николай",
                        "last_name" => "Аникеев",
                        "username" => "anikeev_nikolas",
                        "type" => "private"
                    ],
                    "date" => 1777392755,
                    "text" => "test"
                ]
            ]
         */

        $chat_username = $data['message']['chat']['username'];
        $chat_id = $data['message']['chat']['id'];


        // ==== Привязать id чата к записи TelegramChat по имени ====

        // 1. Найти, есть ли вообще чат с таким именем.
        $telegram_chat = TelegramChat::where('user_name', "@$chat_username")->first();

        if ($telegram_chat == null)
            // пока что если нет user_id, то и смысла записывать нет.
            throw new Exception("Телеграм чат не найден в базе. chat_username: $chat_username , chat_id: $chat_id");


        // 2. Записать id чата, если не тот.
        if ($telegram_chat->chat_id != $chat_id) {
            $telegram_chat->update(['chat_id' => $chat_id]);
        }

        // ---- Привязать id чата к записи TelegramChat по имени ----

        // ДАЛЕЕ ОБРАБОТАТЬ ЗАПРОС ПОЛЬЗОВАТЕЛЯ

        $text = $data['message']['text'];
        $user = $telegram_chat->user;

        // ==== Далее обработать что же хотел пользователь ====
        switch ($text) {
            case "/start":
                $this->send_menu($chat_id);
                break;


            case "На сайт":
                $menu = [
                    'inline_keyboard' => [
                        [['text' => 'Открыть сайт', 'url' => 'https://wisswan.tech']]
                    ]
                ];
                $this->send_menu($chat_id, $menu, "Вот ваша ссылка");
                break;


            case "Статистика сайт-краулеров":
                // Лять, а ведь краулеров может быть более одного. А если выведу все их логи, то это будет то ещё полотно текста.
                $logs = $user->site_crawler_logs()->with('crawler')->limit(24)->get();
                $resposne = '';
                foreach ($logs as $log){
                    $resposne .= $log . "\n";
                }
                
                $this->send_message($chat_id, $resposne);
                break;


            default:
                // Какой-то другой пользовательский ввод.
                break;
        }
        // ---- Далее обработать что же хотел пользователь ----
    }


    /**
     * Посылает сообщение через бота.
     * @param string | int $chat_id - @username | id чата Telegram
     * @param string $text - Посылаемый текст
     * @return \Illuminate\Http\Client\Response
     */
    public function send_message($chat_id, string $text)
    {
        $url = "https://api.telegram.org/bot{$this->api_key}/sendMessage";

        $params = [
            'chat_id' => $chat_id, // chat_id or @username
            'text' => $text,
            'parse_mode' => 'HTML',
        ];

        $response = Http::post($url, $params);
        
        if (isset($response["error_code"])){
            Log::info("Telegram error_code. ");
            Log::info($response);
        }
        
        return $response;
    }

    /**
     * Посылает чат меню для пользователя в телеграм.
     * @param string | int $chat_id - @username | id чата Telegram
     * @return \Illuminate\Http\Client\Response
     */
    public function send_menu($chat_id, $menu = null, $text = "Вывожу ваше меню")
    {
        $menu = $menu ?? self::$telegram_menu;
        $url = "https://api.telegram.org/bot{$this->api_key}/sendMessage";

        $params = [
            'chat_id' => $chat_id, // chat_id or @username
            'text' => $text,
            'parse_mode' => 'HTML',
            'reply_markup' => json_encode($menu),
        ];

        $response = Http::post($url, $params);

        if (isset($response["error_code"])){
            Log::info("Telegram error_code. ");
            Log::info($response);
        }

        return $response;
    }
}