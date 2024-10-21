import React from 'react'
import Information from './Profile/Information'
import Skill from './Profile/Skill'
import WorkExperince from './Profile/WorkExperince'
import { Flex, Image } from 'antd'
import portfolio from '../assets/img/portfolio.jpg'

const Profile = () => {
  return (
    <div>
      <Flex>
        <Image src={portfolio} preview={false} width={'100%'}></Image>
        <div className='content-name'>PORTFOLIO</div>
      </Flex>
        <Information/>
        <Skill/>
        <WorkExperince/>
    </div>
  )
}

export default Profile