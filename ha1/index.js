require('http').createServer((_,res)=>{
  res.end(JSON.stringify('hello world'));
}).listen(3000);
