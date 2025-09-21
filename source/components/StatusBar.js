import React from 'react';
import {Box, Text} from 'ink';

const StatusBar = ({name}) => {
	return (
		<Box justifyContent="space-between" paddingX={1} paddingBottom={1}>
			<Text dimColor>~ no sandbox (see /docs)</Text>
			<Text dimColor>{name}-coder-plus (99% context left)</Text>
		</Box>
	);
};

export default StatusBar;
