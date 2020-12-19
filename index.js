
 const TELEGRAM_BOT_TOKEN=  '1400698822:AAFYh1IJhFoDTFgFOqavxAsh7cD5uNhFb4E'
const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

const chatIds=[]

const CronJob = require('cron').CronJob;
const job = new CronJob('0/10 * * * * *', function() {
  console.log('You will see this message every  10 second');
chatIds.forEach((chatId)=>{
    bot.sendMessage(chatId,'salom')
})

}, null, true );






bot.on('text', (msg) => msg.reply.text(    msg.text));

bot.on(['/start'],(msg)=>{
    let chatId=msg.chat.id
    if(!chatIds.includes(chatId)){
        chatIds.push(chatId)
        msg.reply.text('Boshladik!')
        job.start();
    }
})






bot.on(['/stop'],(msg)=>{
    let chatId=msg.chat.id
   chatIds.pop(chatId)
})




bot.on('text', (msg) => msg.reply.text( "HTML HyperText Markup Language"+ mtext ));


bot.start();

