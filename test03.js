//用户登录

//加载模块
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
var http=require("http");

//创建服务器
var server=http.createServer(function(request,response){
    var url=request.url;
    switch(url){
        case '/show': //显示登录界面
            show(request,response); //执行show（）
            break;
        case '/login':
            login(request,response);//处理请求
            break;
        default:
            response.writeHead(404,{});
            break;
    }
});
//启动服务器,监听端口8888
server.listen(8888,function(){
    console.log("服务器启动，监听8888端口：");
});

//显示登录页面的方法
function show(request,response){
     response.writeHead(200,{
         'Content-type':'text/html'
     })
     response.write('<!DOCTYPE html>');
     response.write('<html lang="en">');
     response.write('<head>');
     response.write('<meta charset="UTF-8">');
        response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        response.write('<title>用户登录</title>');
        response.write('</head>');
        response.write('<body>');
            response.write('<form action="login" method="post">');
                response.write('用户名：<input type="text" name="username"><br>');
                response.write('密码：  <input type="password" name="password"><br>');
                response.write('<input type="submit",value="登录">');
                response.write('</form>');
                response.write('</body>');
                response.write('</html>');
    response.end();            
} 
//处理登录请求
function login(request,response){
     var params="";
     request.on('data',function(part){
         params+=part;
     });
     request.on('end',function(){
         console.log(params);
     })
}
