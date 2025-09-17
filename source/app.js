import React, {useState, useEffect} from 'react';
import {Box, Text, useInput, useApp} from 'ink';

export default ({name = 'AI助手'}) => {
	const [messages, setMessages] = useState([
		{
			id: 1,
			type: 'assistant',
			content: `你好！我是${name}，有什么可以帮助你的吗？`,
			timestamp: new Date()
		}
	]);
	const [currentInput, setCurrentInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const {exit} = useApp();

	// 处理用户输入
	useInput((input, key) => {
		if (key.return) {
			// 回车发送消息
			if (currentInput.trim()) {
				handleSendMessage(currentInput.trim());
				setCurrentInput('');
			}
		} else if (key.backspace || key.delete) {
			// 退格删除
			setCurrentInput(prev => prev.slice(0, -1));
		} else if (key.ctrl && input === 'c') {
			// Ctrl+C 退出
			exit();
		} else if (input && !key.ctrl && !key.meta) {
			// 普通字符输入
			setCurrentInput(prev => prev + input);
		}
	});

	// 发送消息处理
	const handleSendMessage = async (message) => {
		// 添加用户消息
		const userMessage = {
			id: Date.now(),
			type: 'user',
			content: message,
			timestamp: new Date()
		};
		
		setMessages(prev => [...prev, userMessage]);
		setIsLoading(true);

		try {
			// 这里是你的后端 API 调用接口
			// const response = await fetch('/api/chat', {
			//   method: 'POST',
			//   headers: { 'Content-Type': 'application/json' },
			//   body: JSON.stringify({ message })
			// });
			// const data = await response.json();
			
			// 模拟 API 响应（你可以替换为真实的 API 调用）
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			const assistantMessage = {
				id: Date.now() + 1,
				type: 'assistant',
				content: `我收到了你的消息："${message}"。这是一个模拟回复，你可以在这里集成你的后端 API。`,
				timestamp: new Date()
			};
			
			setMessages(prev => [...prev, assistantMessage]);
		} catch (error) {
			const errorMessage = {
				id: Date.now() + 1,
				type: 'error',
				content: '抱歉，发生了错误，请稍后重试。',
				timestamp: new Date()
			};
			setMessages(prev => [...prev, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	// 格式化时间
	const formatTime = (timestamp) => {
		return timestamp.toLocaleTimeString('zh-CN', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});
	};

	return (
		<Box flexDirection="column" padding={1}>
			{/* 标题栏 */}
			<Box borderStyle="round" paddingX={2} paddingY={1} marginBottom={1}>
				<Text bold color="cyan">🤖 {name} - 终端聊天界面</Text>
			</Box>

			{/* 聊天消息区域 */}
			<Box flexDirection="column" marginBottom={1} minHeight={10}>
				{messages.map(message => (
					<Box key={message.id} marginBottom={1}>
						<Box marginRight={2} minWidth={12}>
							<Text color={
								message.type === 'user' ? 'green' : 
								message.type === 'error' ? 'red' : 'blue'
							}>
								[{formatTime(message.timestamp)}]
							</Text>
						</Box>
						<Box flexDirection="column" flexGrow={1}>
							<Text color={
								message.type === 'user' ? 'green' : 
								message.type === 'error' ? 'red' : 'white'
							}>
								{message.type === 'user' ? '👤 你: ' : 
								 message.type === 'error' ? '❌ 错误: ' : '🤖 助手: '}
								{message.content}
							</Text>
						</Box>
					</Box>
				))}
				
				{/* 加载状态 */}
				{isLoading && (
					<Box marginBottom={1}>
						<Box marginRight={2} minWidth={12}>
							<Text color="yellow">[等待中...]</Text>
						</Box>
						<Text color="yellow">🤖 助手正在思考...</Text>
					</Box>
				)}
			</Box>

			{/* 输入区域 */}
			<Box borderStyle="single" paddingX={1}>
				<Text color="gray">输入消息: </Text>
				<Text color="white">{currentInput}</Text>
				<Text color="gray">█</Text>
			</Box>

			{/* 帮助信息 */}
			<Box marginTop={1}>
				<Text dimColor>
					提示: 输入消息后按回车发送 | Ctrl+C 退出
				</Text>
			</Box>
		</Box>
	);
};
