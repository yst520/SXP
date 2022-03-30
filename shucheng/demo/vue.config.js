module.exports = {
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        public: '0.0.0.0:8080',
        disableHostCheck: true,
        port: 8080, // 启动端口
        open: true, // 项目构建成功之后，自动弹出页面
    }
}