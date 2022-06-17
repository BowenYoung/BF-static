## 这是什么？

这是一个自定义聊天机器人。效果可以参考我的博客页面：[关于-Bowenの破站](https://bowenyoung.cn/about/)

## 如何使用

### 博客页面配置

```markdown
{% raw %}
<!DOCTYPE HTML>
<html>
<body>
<link href="https://npm.elemecdn.com/bf-static/libs/botui/botui.css" rel="stylesheet">
</br>
<div class="botui-app-container" id="bowenbot" style="min-height: 0px; padding: 2px 6px 4px; background-color: rgba(255, 255, 255, 0.5); border-radius: 10px;">
		<center>与 <你的昵称> 对话中. . .</center>
		<bot-ui>
		</bot-ui>
	</div>
<script src="https://npm.elemecdn.com/bf-static/libs/botui/botui.js"></script>
<script src="/js/bot_custom.js"></script>
</br>
</br>
</br>
</body>
</html>
{% endraw %}
```

其中`/js/bot_custom.js`是你需要在博客根目录js文件夹下新建的js文件。

## 自定义对话信息

在你新建的js文件（`/js/bot_custom.js`）中配置属于你的机器人对话信息。格式可以参考此目录下的[bot_custom.js](https://npm.elemecdn.com/bf-static/libs/botui/bot_custom.js)

注意！如果含有中文需要使用UTF-8编码格式，否则可能出现中文乱码！