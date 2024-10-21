import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import Profile from './profile'

const MainContent = () => {
    return <div>
      <Profile/>
        <Flex vertical gap="2.3rem">
            {/* <Banner/> */}
        </Flex>
    </div>
}

export default MainContent