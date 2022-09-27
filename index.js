// server
var http = requre('http');
http.createserver(function(req,res){
    res.writehead(200, ('content-type' : 'text/html'));
    res.end('Hello World');
    .listen(8080)
}