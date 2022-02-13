// 簡易 server 建立
const http = require('http')

// console.log(http.Server())
// console.log(http.createServer())

let server = http.createServer((req, res) => {
  // console.log(req.url)
  if(req.url === '/'){
    res.write('wellcome')
    res.end()
    return
  }

  if(req.url === '/hello'){
    res.write('hello')
    res.end()
    return
  }

  if(req.url === '/redetion'){
    res.writeHead(302,{
      location:'/hello'
    })
    res.end()
    return
  }
  res.writeHead(404)
  res.end()
})

server.listen(5000)