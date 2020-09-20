exports.signIn = function(req, res, next){
  var args = req.method == 'POST' ? req.body : req.query
  if(args.user_id == 'xiecp' && args.pwd == '123'){
    req.session.user_info = {
      user_id: args.user_id, 
      full_name: '谢超平',
      } 
    res.json({result : true, msg: '', data: req.session.user_info })
  } else {
    res.json({result : false, msg: '用户名或密码错误'})  
  }
}

exports.signOut = function(req, res, next){
  req.session.destroy(function(err){
    if(err){
      res.json({result: false, msg : 'fail'})  
    } else {
      res.json({result: true, msg : 'success'})  
    }
  })  
}

exports.currentUser = function(req, res, next){
  if(req.session.user_info){
    res.json({result: true, msg: '', data: req.session.user_info})
  } else {
    res.json({result: false, msg: ''})
  }
}
