import React from 'react';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './source/app.js';

test('renders chat interface with default name', t => {
	const {lastFrame} = render(<App />);
	const output = lastFrame();
	
	t.true(output.includes('AI助手 - 终端聊天界面'));
	t.true(output.includes('你好！我是AI助手'));
});

test('renders chat interface with custom name', t => {
	const {lastFrame} = render(<App name="小智" />);
	const output = lastFrame();
	
	t.true(output.includes('小智 - 终端聊天界面'));
	t.true(output.includes('你好！我是小智'));
});

test('shows input prompt', t => {
	const {lastFrame} = render(<App />);
	const output = lastFrame();
	
	t.true(output.includes('输入消息:'));
	t.true(output.includes('提示: 输入消息后按回车发送'));
});
