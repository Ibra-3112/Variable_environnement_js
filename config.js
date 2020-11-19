require('dotenv').config()

const app= {

    host: process.env.APP_HOST,
    port: process.env.APP_PORT
}

const db=  {

    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    adresse: process.env.DB_ADRESSE
}

console.log(app,db)
