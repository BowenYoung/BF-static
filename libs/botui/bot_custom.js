        /*
         * BotUI回复配置
         */
        var botui = new BotUI("bowenbot");
        botui.message.bot({
            delay: 200,
            content: "欢迎来到我的博客👋👋👋"
        }).then(function() {
            return botui.message.bot({
                delay: 1000,
                content: "我是Bowen Young"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1000,
                content: "你也可以叫我BeaCox"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1000,
                content: "这个名字含义之一是Be a cox，做一个舵手"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1000,
                content: "意味着我不愿随波逐流，我更喜欢将方向掌握在自己手中"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1000,
                content: "Cox同时也取自我的偶像Kobe·Bean·Bryant·Cox，我想成为他那般优秀的人"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1000,
                content: "But I don't wanna be the next Kobe, I only wanna be BeaCox"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1000,
                content: "我是一个梦想成为（白帽）黑客的普通大学牲"
            })
        }).then(function() {
            return botui.action.button({
                delay: 1500,
                action: [{
                    text: "有点意思 😃",
                    value: "and"
                },
                {
                    text: "别废话我去看博客了！ 🙄",
                    value: "gg"
                }]
            })
        }).then(function(res) {
            if (res.value == "and") {
                other()
            }
            if (res.value == "gg") {
                return botui.message.bot({
                    delay: 1500,
                    content: "大哥这tm是惊喜啊！赶紧看！😚"
                })
            }
        });
         
        var other = function() {
            botui.message.bot({
                delay: 1500,
                content: "😘"
            }).then(function() {
                return botui.message.bot({
                    delay: 1500,
                    content: "信息安全专业的大学牲"
                })
            }).then(function() {
                return botui.message.bot({
                    delay: 1500,
                    content: "主攻Web安全/系统安全方向"
                })
            }).then(function() {
                return botui.message.bot({
                    delay: 1500,
                    content: "喜欢各种新奇好玩儿的事物"
                })
            }).then(function() {
                return botui.message.bot({
                    delay: 1500,
                    content: "还喜欢看NBA和F1，窝法氦镁烷！"
                })
            }).then(function() {
                return botui.message.bot({
                    delay: 1500,
                    content: "欢迎同好前来交流！"
                })
            }).then(function() {
                return botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "怎么会想到搭博客呢？ 🤔",
                        value: "next"
                    }]
                })
            }).then(function(res) {
                return botui.message.bot({
                    delay: 1500,
                    content: "（为了装B🤪）"
                })
            }).then(function() {
                return botui.message.bot({
                    delay: 1500,
                    content: "其实是偶然刷到了利用hexo搭建博客的视频"
                })
            }).then(function() {
                return botui.message.bot({
                    delay: 1500,
                    content: "另外就是为了能有一个渠道来分享我的学习经历以及生活🤓"
                })
            }).then(function() {
                return botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "怎么联系你？",
                        value: "next"
                    }]
                })
            }).then(function(res) {
                return botui.message.bot({
                    delay: 1500,
                    content: "评论区留言并填写邮箱或点击左侧挂件Gmail、Telegram图标"
                })
            }).then(function(res) {
                return botui.message.bot({
                    delay: 1500,
                    content: "接下来就看看我的博客吧！😉"
                })
            }).then(function(res) {
                return botui.message.bot({
                    delay: 1500,
                    content: "欢迎添加友链、RSS订阅"
                })
            });
        }