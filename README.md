# ez-eco.js
- __Made For Discord.js Discord bots__
- _**Make Sure To Install [quick.db](https://www.npmjs.com/package/quick.db) Before Using Package!**_
- Report Bugs, Errors, Problems In [Support Server](https://discord.gg/devs)

## Usage 📕
- __Get User Bal__
 ```js
const Discord = require('discord.js') // npm i discord.js
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot is ready.");
});

const ezeco = require('ez-eco.js')
client.on('message', async message => {
  if(message.content.toLowerCase().startsWith('bal')) {
    let user = message.mentions.users.first() || message.author;
    let data = await ezeco.wallet(message.guild.id, message.author.id, user.username);
   message.channel.send(data.money)
  }
})```
- __Transfer Amoney to user__
```js
client.on('message', async message => {
  if(message.content.toLowerCase().startsWith('pay')) {
    let user = message.mentions.users.first()
    if(!user) return message.channel.send(`Mention availd user to transfer money to him?`)
    let amount = message.content.slice(prefix.length).trim().split(/ +/);
    let data = await ezeco.pay(message.guild.id, user.id, amount[2], message.author.id)
      message.channel.send(data.money)
  }
})```
- __ Earn Money__
```js
client.on('message', async message => {
  if(message.content.toLowerCase().startsWith('work')) {
    let data = await ezeco.work(message.guild.id, message.author.id)
   return message.channel.send(data.money)
  }
})
```
## Why Ez-ECO
_Fast and use to use
_Note : This Package Is Using [Quick.db](https://www.npmjs.com/package/quick.db) (Database)_
- This Package Is Made With 💖 By ! Darkboy🍭#9966

