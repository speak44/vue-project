module.exports={
  // 如果是生产环境，就用上面的路径，如果是开发环境就用“/sisi”
  publicPath: process.env.NODE_ENV === 'production'
  ? 'cart/'
  : '/sisi',
  devServer:{
    // before(app){
    //   // app 是node 服务器的实例 express实例
    //   app.get('/api/courses', (req, res)=>{
    //     setTimeout(() => {
    //       res.json(
    //         [
    //           {name:'内容一',
    //           price:'1111',
    //           },
    //           {
    //             name:'内容二',
    //             price:'2222'
    //           }
    //         ]
    //       )         
    //     }, 1000);
    //   })
    // },
    proxy:'http://localhost:4040'
  }
}
