const express = require('express');
const redis = require('redis')
const session = require('express-session') 
const bodyParser = require('body-parser')
const RedisStore = require('connect-redis')(session)
const auth_api = require('./routes/auth_views.js') 
let redisClient = redis.createClient({host: 'redis'})

const app = express();

app.set('view engine', 'pug')
app.use(express.static('public')) 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//app.all('*', function(req, res, next){
//  res.setHeader('Access-Control-Allow-Origin', '*');
//  next();  
//})


var sessionConf = {
  secret :'who is your daddy',
  store: new RedisStore({
     client: redisClient,
     ttl: 2600 
    }),
  resave: false,
  saveUninitialized: true,
  cookie: {
  }
}

if(app.get('env') === 'production'){
  app.set('trust proxy', 1)
  sess.cookie.secure = true
}

app.use(session(sessionConf))
app.use('/auth/api', auth_api, function(req, res){
  res.sendStatus(403)  
})

app.get('/', (req, res) => {
  res.render('index', {title: '首页'})
});

app.get('/play/:id', (req, res) => {
  res.render('play', {title: '播放', id: req.params.id})
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('aha, broke!')
})

var server = app.listen(8080, function(){
  console.log("Listening on port 8081")
})
