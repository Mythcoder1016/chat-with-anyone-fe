import React, { useState } from 'react';
import { NavBar, TabBar, Button, Textarea } from '@arco-design/mobile-react';
import ScrollScreen from '../components/ScrollScreen'
import { getBasicInfo, buildData } from '../util';

import lessModule from './ChatPage.module.less';

const ChatPage: React.FC = () => {

  const [value, setValue] = useState<string>('')
  const [dataSource, setDataSource] = useState<DataSourceType[]>([])

  const sendMessage = () => {
    const data: DataSourceType = {
      type: 'send',
      message: value
    }
    const info = getBasicInfo('currentUser')
    const newData = buildData(data, info)
    setDataSource(dataSource.concat(newData as DataSourceType))
    setValue('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    setValue(value)
  }

  return (
    <div className="global-chat-warpper">
      <NavBar 
        fixed={true}
        title="用友股票"
        style={{ color: 'white', background: '#165dff' }}
        hasBottomLine={false}
      />
      <ScrollScreen dataSource={dataSource}/>
      <TabBar
        fixed={true}
        style={{background: '#F5FFFA'}}
        className={lessModule.bottomBar}
      >
        <Textarea
          className={lessModule.mainTextarea}
          autosize
          value={value}
          onInput={handleChange}
          rows={1}
          />
        <Button className={lessModule.sendBtn} onClick={sendMessage} shape='round'>发送</Button>
      </TabBar>
    </div>
  );
}

export default ChatPage;
