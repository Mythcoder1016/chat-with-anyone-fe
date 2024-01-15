import React from 'react';
import Message from '../Message'

const ScrollScreen: React.FC<ScrollScreenType> = (props) => {
	const { dataSource } = props;
	const message = dataSource.map((data, index) => {
		return <Message data={data} key={index}/>
	})
	
  return <div>
		{message}
  </div>
}

export default ScrollScreen