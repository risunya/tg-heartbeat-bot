import { Bot } from "grammy";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
declare const process: {
  env: {
    BOT_TOKEN: string;
  };
};
export const prisma = new PrismaClient();
export const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) =>
  ctx.reply(
    "Привет!\n\nЕсли ты попал в наш бот, значит ты давно ищешь аналог процессного менеджера прямо в телеграм. Мы предоставляем возможность добавлять до 2 ботов по бесплатной подписке.\n\nДля нас важно:\nМинимизировать ваше участие\nМаксимизировать информативность показанных метрик\nСделать бота по-настоящему удобным"
  )
);
bot.on("message", (ctx) => ctx.reply("Got another message!"));
bot.start();
