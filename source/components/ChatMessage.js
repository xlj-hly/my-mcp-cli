import React from 'react';
import {Box, Text} from 'ink';

const ChatMessage = ({message}) => {
	if (message.role === 'user') {
		// 用户输入框
		return (
			<Box>
				<Box borderStyle="round" paddingX={1} paddingY={0} borderColor="gray">
					<Text>{message.content}</Text>
				</Box>
			</Box>
		);
	}

	// AI 回复 - 使用 ✦ 符号
	return (
		<Box>
			<Text color="cyan">✦ {message.content}</Text>
		</Box>
	);
};

export default ChatMessage;
