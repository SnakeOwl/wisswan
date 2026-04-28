<?php

namespace App\Libs\OuterAPI\TelegramAPI;

class TelegramAPI
{
    protected $api_key; // Тут нельзя сразу присвоить значение из env

    public function __construct($api_key)
    {
        $this->api_key = $api_key;
    }


    /**
     * Обрабатывает входящие данные от бота.
     * @param mixed $data
     * @return void
     */
    public function process_incoming_data($data){
        // messages from Telegram bot come to here via POST
        // parse the request body
        // const { message } = await request.json();

        // // block with required variables
        // if (message == undefined
        //     || message.chat == undefined
        //     || message.chat.id == undefined
        //     || message.from == undefined
        //     || message.from.username == undefined) {
        //     return new Response("", {
        //         status: 200,
        //         statusText: "ok",
        //     });
        // }

        // /** @vars these vars need save to db */
        // const chatId = message.chat.id;
        // const userName = message.chat.username


        // // checking username in db
        // const record = await prisma.telegramUsers.findFirst({
        //     where: {
        //         userName: { equals: `@${userName}` }
        //     }
        // });

        // if (record == null) {
        //     // if has no record then creating
        //     await prisma.telegramUsers.create({
        //         data: {
        //             chatId,
        //             userName: `@${userName}`
        //         }
        //     });
        // } else if (record.chatId != chatId) {
        //     // if has record then updating
        //     await prisma.telegramUsers.update({
        //         data: {
        //             chatId
        //         },
        //         where: { id: record.id }
        //     });
        // }

    }

    /**
     * Посылает сообщение через бота.
     * @param mixed $message
     * @return void
     */
    public function send_message($message)
    {

    }
}