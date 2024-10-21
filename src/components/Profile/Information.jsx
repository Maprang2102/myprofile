import { Image } from 'antd'
import React from 'react'
import profile from '../../assets/img/IMG_8745.png'

const Information = () => {
  return (
    <div>Information<br/>
    <Image src={profile} style={{width:'250px'}}></Image><br/>
        ชื่อ บุณสิตา ปวงอาจ <br/>
        Name Boonsita Puangart<br/>
        Email : Boonsita.puangart@gmail.com<br/>
        Tel. : 088-9794675<br/>
        44/238-239 Phahonyothin, Anusawari, Bang Khen, Bangkok 10220
    </div>
  )
}

export default Information