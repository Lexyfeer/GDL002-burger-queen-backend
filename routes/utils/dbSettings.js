const mongoose = require('mongoose');
const fs = require('fs');

var certFileBuf = fs.readFileSync('config/mongocert.crt');

var dbName ="BurgerQueen";
var server= "14925089-c42a-456e-a117-f5fe9703d43d-0.4b2136ddd30a46e9b7bdb2b2db7f8cd0.databases.appdomain.cloud"
var user= "ibm_cloud_2acf15c7_cbf9_4997_9037_875fa4285c19"
var pass= "15bfe1cc256bf0497783c87e778986e08b587828b07ec275c250776407f3c94b"

// const connection = `mongodb://${user}:${password}@${host}:31329/portafolio?authSource=admin&replicaSet=replset`;

const DBConf = {
    URL: "mongodb://"+user+":"+pass+"@"+server+":30495/"+dbName+"?authSource=admin&replicaSet=replset",
    OPTIONS: {
        ssl: true,
        sslValidate: true,
        sslCA: certFileBuf,
        connectTimeoutMS: 600000,
        reconnectInterval: 610000,
        autoReconnect: true,
        poolSize: 10,
        useNewUrlParser: true 
    },
}

const isConnected = mongoose.connect(DBConf.URL, DBConf.OPTIONS, (err)=>{
    if (err) {
        console.log('Error connecting to database', dbName, err);
    } else {
        console.log('Connected to the database', dbName);
    }
});

module.exports = isConnected;