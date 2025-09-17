# my-ai-cli

> 一个简洁的终端 AI 聊天界面，基于 React 和 Ink 构建

## 功能特点

- 🤖 简洁的终端聊天界面
- ⚡ 基于 React + Ink 的现代终端 UI
- 🎨 彩色文本和表情符号支持
- ⏰ 实时消息时间戳
- 🔄 加载状态显示
- 🛠 易于集成后端 API

## 安装

```bash
# 本地开发
npm install

# 构建项目
npm run build

# 全局安装（可选）
npm install --global .
```

## 使用方法

```bash
# 启动聊天界面
npm start

# 或者使用自定义助手名称
npm start -- --name=小智

# 如果全局安装了
my-ai-cli --name=小智
```

## 快捷键

- `回车` - 发送消息
- `退格` - 删除字符
- `Ctrl+C` - 退出程序

## API 集成

在 `source/app.js` 的 `handleSendMessage` 函数中，你可以替换模拟代码为真实的 API 调用：

```javascript
// 替换这部分模拟代码
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message })
});
const data = await response.json();
```

## 开发

```bash
# 开发模式（自动重新构建）
npm run dev

# 运行测试
npm test

# 代码检查
npm run test
```
