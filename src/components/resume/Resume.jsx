import React from 'react'

import './resume.css';
// import cap from '../../assets/images/cap.jpg'
import phone from '../../assets/images/phone.jpg'
import mail from '../../assets/images/mail.jpg'
import linkedin from '../../assets/images/linkedin.jpg'
import github from '../../assets/images/github.jpg'
import locate from '../../assets/images/location.jpg'
// import web from '../../assets/images/web.jpg'

const Resume = () => {
  return (
    <div id='resume'>
        <div id='name'>歡迎使用下方資訊與我聯絡！</div>
        <div id='contact_info'>
          <span className='contact_item'><img src={phone} width={10} alt="" /> (+886) 972435608</span> 
          <span className='contact_item'><img src={locate} width={10} alt="" /> Taipei, Taiwan</span>
          <span className='contact_item'><img src={mail} width={10} alt="" />&thinsp; juroberttyb@gmail.com</span>
          <span className='contact_item'><img src={github} width={10} alt="" /> <a href='https://github.com/juroberttyb'>Github</a></span>
          <span className='contact_item'><img src={linkedin} width={10} alt="" /> <a href='https://www.linkedin.com/in/robert-ju-5b66081a9/'>LinkedIn</a></span>
        </div>

      {/* <div id='summary' className='block'>
        <center>
          <p>
            歡迎使用上方資訊與我聯絡！
          </p>
        </center>
      </div> */}

    </div>
  )
}

export default Resume
