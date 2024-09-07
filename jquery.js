window.onload=function(){
        !(function () {

            const userAgent = navigator.userAgent

            // 验证是否为Android或iPhone

            const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)

            const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)

            // 如果是Android或iPhone，则跳转至移动站点

            if (android || iphone) {

                location.href = 'http://baidu.com'

            }

        })()
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/qq_42825887/article/details/129267877
    }
