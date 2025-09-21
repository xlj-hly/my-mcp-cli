import React from 'react';
import {Box, Text} from 'ink';

const AsciiArt = ({name = 'AI助手'}) => {
	return (
		<Box paddingX={1} paddingY={1}>
			<Text color="yellow" bold>
				{`
  ▄▄▄       ██▓  
 ▒████▄    ▓██▒  
 ▒██  ▀█▄  ▒██▒  
 ░██▄▄▄▄██ ░██░  
  ▓█   ▓██▒░██░  
  ▒▒   ▓▒█░░▓    
   ▒   ▒▒ ░ ▒ ░  
   ░   ▒    ▒ ░  
       ░  ░ ░    
	   	       `}
			</Text>
		</Box>
	);
};

export default AsciiArt;
