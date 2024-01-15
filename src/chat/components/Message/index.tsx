import React, { useEffect, createRef } from 'react';
import Avatar from '../Avatar';

import lessModule from './index.module.less'

const Message: React.FC<MessageType> = ({ data }) => {
	
	const messageRef = createRef<HTMLDivElement>()

	const { type, message, avatarUrl, username } = data

	useEffect(() => {
		console.log(messageRef.current?.getBoundingClientRect());
		
	}, [])

	const component = <div
		className={ type === 'send' ? lessModule.messageWarpperRight : lessModule.messageLeft }
		>
		<Avatar />
		<div className={lessModule.innerWrapper}>
			<span className={lessModule.username}>{username}</span>
			<div className={lessModule.message} ref={messageRef}>{message}</div>
		</div>
	</div>
	return component
}

export default Message