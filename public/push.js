var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BPyV9wnmT0E-tSZV56pExxtrQ-AlMxDRcMB7oBe4_qoSX1jEFTiOhYzGF5cgIBcWQx4AT2ZfB1MeJalQiUIgNa4",
    "privateKey": "Ct51b6Mt60fP5PTQfPlUKF2O7xf6MnAb53TbWHi-Pgo"
};
 
 
webPush.setVapidDetails(
    'mailto:oktapadita@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cieS-N6aAqM:APA91bGFnZ74S0VD3h04W8iRQEruRTue2kRQbVBuxt6ChMTyhr5gBm-UTM67sckbUCPhml9CgNha-xmeNivG6kw_LjBNMqgXNuozxUzOVhbOZAsie-0j-HYy2rP6dvB8GK8kNPJIQOLs",
    "keys": {
        "p256dh": "BOumN24QvNDc7v6bxumUwXvKrAR4CHjfjF5BMaPjSouVy7qYBcyocjcsxMZSjf9HTw1A3V4xUZOU/D5/R0omIqo=",
        "auth": "zaykHj3bQu7fC/pSXU7/zQ=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '724864040148',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);