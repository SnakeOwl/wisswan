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
            [['text' => 'Статистика сайт-краулеров']],
            [['text' => 'Открыть сайт', 'url' => 'https://wisswan.tech']]
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
     * @param string $dataJSON
     * @return void
     * @throws \Exception
     */
    public function process_incoming_data($dataJSON)
    {
        Log::info('Telegram incoming data: ' . $dataJSON);
        $data = json_decode($dataJSON);

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
        if ($telegram_chat->chat_id == $chat_id) {
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

            case "Статистика сайт-краулеров":
                // Лять, а ведь краулеров может быть более одного. А если выведу все их логи, то это будет то ещё полотно текста.
                $logs = $user->site_crawler_logs()->with('crawler')->limit(24)->get();
                $resposne = '';
                
                foreach ($logs as $log) {
                    $resposne .= '<p>' . $log . '</p>';
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
     * @param int $chat_id - id чата Telegram
     * @param string $text - Посылаемый текст
     * @return \Illuminate\Http\Client\Response
     */
    public function send_message(int $chat_id, string $text)
    {
        $url = "https://telegram.org{$this->api_key}/sendMessage";

        $params = [
            'chat_id' => $chat_id,
            'text' => $text,
            'parse_mode' => 'HTML',
        ];

        return Http::post($url, $params);
    }

    /**
     * Посылает чат меню для пользователя в телеграм.
     * @param int $chat_id - id чата Telegram
     * @return \Illuminate\Http\Client\Response
     */
    public function send_menu(int $chat_id)
    {
        $menu = self::$telegram_menu;
        $url = "https://telegram.org{$this->api_key}/sendMessage";

        $params = [
            'chat_id' => $chat_id,
            'text' => "Ваше меню",
            'parse_mode' => 'HTML',
            'reply_markup' => json_encode($menu),
        ];

        return Http::post($url, $params);
    }
}