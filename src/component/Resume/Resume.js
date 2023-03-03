import React from 'react'

import './Resume.css';

const Resume = () => {
  document.body.style = 'background: red;';

  return (
    <>
      <div>
          <div>Robert Ju</div>
          <div>
            <ul>
              <li>phone</li>
              <li>mail</li>
              <li>linkedin</li>
              <li>github</li>
              <li>website</li>
            </ul>
          </div>
          <p>M.S. in Computer Science, National Tsing Hua University, 2021</p>
          <p>B.S. in Computer Science and Engineering, National Taiwan Ocean University 2019</p>
          <p>M.S. in Computer Science, National Tsing Hua University</p>
      </div>

      <div>
        Experience
      </div>

      <div>
        Projects
      </div>
    </>
  )
}

export default Resume