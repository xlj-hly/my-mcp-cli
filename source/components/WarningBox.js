import React from 'react';
import {Box, Text} from 'ink';

const WarningBox = ({name, show}) => {
	if (!show) return null;

	return (
		<Box
			borderStyle="round"
			borderColor="yellow"
			paddingX={1}
			paddingY={0}
			marginY={1}
		>
			<Text color="yellow">
				You are running {name} Code in your home directory. It is recommended to
				run in a project-specific directory.
			</Text>
		</Box>
	);
};

export default WarningBox;
