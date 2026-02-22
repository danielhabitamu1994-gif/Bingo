const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, "🎰 Play Bingo", {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Play Bingo",
                        web_app: {
                            url: process.env.URL
                        }
                    }
                ]
            ],
            resize_keyboard: true
        }
    });
});
