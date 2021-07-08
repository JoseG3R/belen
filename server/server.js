const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');

const routes=require('./src/routes/routes');

const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();


app.set('port', process.env.PORT||9000);
const dbOptions={
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'estudiantes'
}


//middlewares ---------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000'],
    methods: ["GET","POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    key:"userId",
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24 * 7,
    }
}))
//routes --------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welocome to mi app')
});
app.use('/api',routes )

// server running ------------------------------------
app.listen(app.get('port'),()=>{
    console.log('server running on port', app.get('port'));
}) 