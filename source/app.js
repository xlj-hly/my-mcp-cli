import React, {useState} from 'react';
import {Box, Text, useInput, useApp} from 'ink';

// 导入模块化组件
import AsciiArt from './components/AsciiArt.js';
import WelcomeTips from './components/WelcomeTips.js';
import ChatMessage from './components/ChatMessage.js';
import WarningBox from './components/WarningBox.js';
import InputArea from './components/InputArea.js';
import StatusBar from './components/StatusBar.js';

export default ({name = 'AI助手'}) => {
	const [messages, setMessages] = useState([
		{
			id: 1,
			role: 'assistant',
			content: `你好！有什么可以帮助你的吗？`,
		},
	]);
	const [input, setInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const {exit} = useApp();

	useInput((input, key) => {
		if (key.ctrl && input === 'c') exit();
	});

	const handleSubmit = async value => {
		if (!value.trim()) return;

		const userMsg = {id: Date.now(), role: 'user', content: value};
		setMessages(prev => [...prev, userMsg]);
		setInput('');
		setIsLoading(true);

		try {
			// 替换为API 调用
			await new Promise(resolve => setTimeout(resolve, 1000));
			const aiMsg = {
				id: Date.now() + 1,
				role: 'assistant',
				content: `收到你的消息："${value}"。\r\n这里集成后端 API 来获取真实的 AI 回复。`,
			};
			setMessages(prev => [...prev, aiMsg]);
		} catch {
			const errorMsg = {
				id: Date.now() + 1,
				role: 'assistant',
				content: '抱歉，出现了错误，请重试。',
			};
			setMessages(prev => [...prev, errorMsg]);
		}
		setIsLoading(false);
	};

	return (
		<Box flexDirection="column" height="100%">
			{/* ASCII 艺术标题 */}
			<AsciiArt name={name} />

			{/* 欢迎提示 */}
			<WelcomeTips />

			{/* 对话历史 */}
			<Box flexDirection="column" flexGrow={1} paddingX={1}>
				{messages.map(msg => (
					<Box key={msg.id} marginBottom={2}>
						<ChatMessage message={msg} />
					</Box>
				))}

				{/* 思考状态 */}
				{isLoading && (
					<Box marginBottom={2}>
						<Text color="cyan">✦ 思考中...</Text>
					</Box>
				)}

				{/* 警告信息 */}
				<WarningBox name={name} show={messages.length > 1} />
			</Box>

			{/* 输入区域 */}
			<InputArea value={input} onChange={setInput} onSubmit={handleSubmit} />

			{/* 状态栏 */}
			<StatusBar name={name} />
		</Box>
	);
};
