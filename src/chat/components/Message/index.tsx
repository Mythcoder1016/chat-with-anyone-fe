import React, { createRef } from 'react';
import Avatar from '../Avatar';

import lessModule from './index.module.less'

const Message: React.FC<MessageType> = ({ data }) => {
	
	const messageRef = createRef<HTMLDivElement>()

	const { type, message, avatarUrl, username } = data

	const component = <div
		className={ type === 'send' ? lessModule.messageWrapperRight : lessModule.messageWrapperLeft }
		>
		<Avatar src={avatarUrl}/>
		<div className={lessModule.innerWrapper}>
			<span className={lessModule.username}>{username}</span>
			<div className={lessModule.messageWrapper}>
				<div className={lessModule.message} ref={messageRef}>{message}</div>
			</div>
		</div>
	</div>
	return component
}

export default Message