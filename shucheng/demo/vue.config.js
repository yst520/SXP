module.exports={
    publicPath:'./',//部署应用包时的基本url
    outputDir:'dist',//输出文件路径
    assetsDir:'assets',//静态文件路径

    devServer:{
        open:true,//运行之后是否自动打开
        port:8080,//运行的端口号
        https:false,//是否进行网页检测 https还是http
        
        // 使用代理技术 更安全
        proxy:{
            '/api':{//设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'http://localhost:10001',
                ws:false,//sockjs是否需要代理
                changeOrigin:true,//允许跨域请求
                pathRewrite:{
                    '^/api': ''//重写路径
                }


            }
        }
    }

    

}