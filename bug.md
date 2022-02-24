# 一直报错

在使用vue-cli脚手架创建项目的时候，在`cnpm create app`命令后，项目创建成功后通过`npm run serve`命令运行以后，控制台报错，`sockjs.js?9be2:1606 GET http://192.168.16.105:8080/sockjs-node/info?t=1574662800493 net::ERR_CONNECTION_TIMED_OUT`

![image-20220222214132367](C:\Users\tys\AppData\Roaming\Typora\typora-user-images\image-20220222214132367.png)

解决方法：

1）找到`/node_modules/sockjs-client/dist/sockjs.js`
2）在1605行，注释掉`self.xhr.send(payload);`这一行，然后就可以解决了

![image-20220222214354001](C:\Users\tys\AppData\Roaming\Typora\typora-user-images\image-20220222214354001.png)

# 使用element-ui时slot报错

![image-20220223202648676](C:\Users\tys\AppData\Roaming\Typora\typora-user-images\image-20220223202648676.png)

原因：

eslint的语法检查

解决方案：

1.在红线上加上这样一行代码，就可以了

<!-- eslint-disable-next-line -->

![image-20220223203655098](C:\Users\tys\AppData\Roaming\Typora\typora-user-images\image-20220223203655098.png)

2.在template开头就加上这样一行代码，下面就群不红线都没了

<!-- eslint-disable -->

![image-20220223203950071](C:\Users\tys\AppData\Roaming\Typora\typora-user-images\image-20220223203950071.png)

# 在vue里面使用setTimeout发现this失效

场景：

![image-20220224133504182](C:\Users\tys\AppData\Roaming\Typora\typora-user-images\image-20220224133504182.png)

![image-20220224133345947](C:\Users\tys\AppData\Roaming\Typora\typora-user-images\image-20220224133345947.png)

原因：在setTimeout函数中，this指向windows,而我们需要this指向vue实例App;

解决方法：

setTimeout的第一个参数的function用[箭头函数](https://so.csdn.net/so/search?q=箭头函数&spm=1001.2101.3001.7020)来代替

![image-20220224133521206](C:\Users\tys\AppData\Roaming\Typora\typora-user-images\image-20220224133521206.png)

**箭头函数本身没有执行作用域，是继承其父的执行上下文，所以箭头函数的this指向绑定其父的作用域**

完美解决！！
