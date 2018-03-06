import notify from './Notification'


// notify('This is a Notification')

// var envMode = process.env.NODE_ENV

// console.log(envMode)


var inProduction = (process.env.NODE_ENV === 'production')

console.log(  inProduction )
