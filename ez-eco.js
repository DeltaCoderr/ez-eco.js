const db = require('quick.db')
module.exports = {
    wallet: async function (guild, user, name) {
            let bal = db.get(`bal_${guild}_${user}`)
        let data = {
        money: `${name} have ${bal || '0'}$.`
        }
 return data;
    },
    
    pay: async function(guild, user, amount, author) {
if(!amount) {
    let data = {
        money: 'Please Type the amount of moeny you want to transfer.'
    }
    return data;
}
if(isNaN(amount)) {
let data = {
    money: 'Specify an amount to pay'
}
return data;
}
if(amount.includes('-', '.')) {
    let data = {
        money: 'You cant pay someone negative money'
    }
    return data;
}
let userbal = db.get(`bal_${guild}_${author}`)
if(userbal < amount) {
    let data = {
        money: 'You dont have that much money'
    }
    return data;
}

db.subtract(`bal_${guild}_${author}`, amount)
db.add(`bal_${guild}_${user}`, amount)
let data = {
    money: `You have payed <@${user}> ${amount}$`
}
return data;
} ,
addmoney: async function(guild, user, amount) {
if(isNaN(amount)) {
    let data = {
        money: 'Specify an amount to pay'
    }
    return data;    
}
if(amount.includes('-', '.')) {
    let data = {
        money: 'You cant add someone negative money'
    }
    return data;
}
db.add(`bal_${guild}_${user}`, amount)
},
delmoney: async function(guild, user, amount) {
    if(isNaN(amount)) {
        let data = {
            money: 'Specify an amount to remove'
        }
        return data;    
    }
    if(amount.includes('-', '.')) {
        let data = {
            money: 'You cant remove someone negative money'
        }
        return data;
    }
    let userbal = db.get(`bal_${guild}_${user}`)
    if(userbal < amount) {
        let data = {
            money: 'User doesn`t have that much money to remove.'
        }
        return data;

    }
      db.subtract(`bal_${guild}_${user}`, amount)
    },
    work: async function(guild, user) {
        let jobs = [
            'clown',
            'Developer',
            'designer',
            'taxi',
            'Framer'
        ]
 const randomjob = jobs[Math.floor(Math.random() * jobs.length)];

        let randommoney = Math.floor(Math.random() * 1000)        
        console.log(randommoney)
    db.add(`bal_${guild}_${user}`, randommoney)
         let data = {
        money: `You worked as ${randomjob} and earned ${randommoney}`
    }
    return data;
    },
    chatearn: async function(guild, answer) {
/// coming soon on v2.
    }
 }
