import React from 'react'

import './resume.css';
import cap from '../../assets/images/cap.jpg'
import phone from '../../assets/images/phone.jpg'
import mail from '../../assets/images/mail.jpg'
import linkedin from '../../assets/images/linkedin.jpg'
import github from '../../assets/images/github.jpg'
// import web from '../../assets/images/web.jpg'

const Resume = () => {
  return (
    <div id='resume'>
      <div id='name'>Robert Chu</div>
      <div id='contact'>
        <img className="prefix_img" src={phone} alt="" /><p>(+886)972435608</p>
        <img className="prefix_img" src={mail} alt="" /><p>juroberttyb@gmail.com</p>
        <img className="prefix_img" src={github} alt="" /><p><a href='https://github.com/juroberttyb'>juroberttyb</a></p>
        <img className="prefix_img" src={linkedin} alt="" /><p><a href='https://www.linkedin.com/in/robert-chu-5b66081a9/'>Robert Chu</a></p>
        {/* <p><img className="prefix_img" src={web} alt="" /><a href='https://web.robertchu.xyz'>Website</a></p> */}
      </div>
      <div id='education'>
        <img id="cap" src={cap} alt="" />
        <div>
          <p>M.S., Computer Science, <a href='https://nthu-en.site.nthu.edu.tw/'>National Tsing Hua University</a>, 2021</p>
          <p>B.S., Computer Science and Engineering, <a href='https://english.ntou.edu.tw/?Lang=en'>National Taiwan Ocean University</a>, 2019</p>
        </div>
      </div>

      <div id='summary' className='block'>
        <div className='highlight block_category'>Summary</div>
        <div class="horizontal-line"></div>
        <div className='inner_block'>
          <p>
            I am a passionate backend developer at Penpeer, whose founder is the co-founder and former CTO of <a href='https://17.live/en-US'>17LIVE</a>.
            <br/>At work, I use Go, SQL, Linux, Docker, Kubernetes, and GCP on a daily basis.
            <br/>After work, I am learning <a href='https://github.com/rust-lang/rust'>Rust</a> and aim to be an active open source contributor.
          </p>
        </div>
      </div>

      <div id='experience' className='block'>
        <div className='highlight block_category'>Experience</div>
        <div class="horizontal-line"></div>
        <div className='inner_block'>
          <div className='block_item'>
            <div>
              <div className='highlight bold'>Backend Developer</div>, <div className='company bold'><a href='http://35.194.180.167/'>Penpeer</a></div>,  <div className='after_highlight'>Backend Team</div>
              {/* <p className='highlight_inner'>Go/Gin/SQL/Docker/Kubernetes/Helm/GCP/Redis/RabbitMQ/CICD/Git</p> */}
            </div>
            <div>
              <div className='duration'>May 2022 - Present</div>
              {/* <div className='location'>Taipei, Taiwan</div> */}
            </div>
          </div>
          <ul>
            <li>Design and develop CRUD operations, microservices, and other backend services for
              <a href='https://apps.apple.com/tw/app/apen/id1434492280'> Apen</a>,
              <a href='https://apps.apple.com/us/app/%E8%97%A5%E5%B8%AB%E5%9C%88/id1661519539'> Phar</a>,
              <a href='https://apps.apple.com/tw/app/%E8%AD%B7%E7%90%86%E7%AB%99/id1523414575'> NStation</a>,
              <a href='https://apps.apple.com/tw/app/clos-burgundy-dictionary/id1568106896'> Clos</a>,
              and <a href='https://apps.apple.com/tw/app/mediatalk-dont-be-shy/id1599874400'> MediTalk</a>
            </li>
            <li>Parallelize 92% of the notification API with multithreading using Go routines and speed up data processing time by 1.62 times</li>
            <li>Design and develop redis caching into existing backend services and speed up http responses by 8.96 times</li>
            <li>Write unit and integration tests to raise the test coverage of the API package from 0% to 91%</li>
            <li>Refactor 97% of backend code to follow API/Service/Gateway/Store/Model best-practice architecture</li>
            <li>Integrate Google Cloud Logging to raise the logging coverage of backend code from 61% to 96%</li>
            <li>Integrate Google Cloud Pub/Sub into Purchase API with Go channels and context</li>
            <li>Provision and maintain microservices, storage, DNS, and CICD processes for the backend</li>
            <li>Decouple existing services with RabbitMQ and introduce a <a href='https://docs.google.com/presentation/d/1YxMI3G1ARqG0_g36hCPTtmPKSIjGQLKw-IR2sv4tkeY/edit?usp=share_link'>loosely coupled architecture</a> to our backend to accelerate response by 13% and reduce code size by 32%</li>
          </ul>
        </div>

        <div className='inner_block'>
          <div className='block_item'>
            <div>
              <div className='highlight bold'>Machine Learning Engineer</div>, <div className='company bold'><a href='http://www.gallopwave.com/en/'>Gallopwave</a></div>,  <div className='after_highlight'>MLOps Team</div>
              {/* <p className='highlight_inner'>Python/C++/Pytorch/Distributed-System/Linux/Docker/CICD/Git</p> */}
            </div>
            <div>
              <div className='duration'>Aug 2021 - Apr 2022</div>
              {/* <div className='location'>Taipei, Taiwan</div> */}
            </div>
          </div>
          <ul>
            <li>Design and develop image segmentation and object detection features for autonomous driving</li>
            <li>Design and develop a <a href='https://drive.google.com/file/d/1uT08PYlLLETs8jVc3j8V9AnyabNsUCwv/view'>distributed architecture</a> to speed up the training pipeline by 3.89 times</li>
            <li>Develop tools for testing object detection models and raise the test coverage from 37% to 85%</li>
            <li>Develop and maintain data generators for 93% of training pipelines</li>
            <li>Develop and maintain ONNX generation pipelines for 81% of production platforms</li>
            <li>Develop and integrate weather transformation for data augmentation using Cycle GAN</li>
            <li>Automate 77% of infrastructure build‑outs for development environments</li>
            <li>Troubleshooting network, linux, and docker issues for development and production environments</li>
          </ul>
        </div>

        {/* <div className='inner_block'>
            <div className='block_item'>
              <div>
                <div className='highlight bold'></div><div className='company bold'></div><div className='after_highlight'>Continue master's in computer science</div>
                <p className='highlight_inner'>Python/Pytorch/Distributed-System</p>
              </div>
              <div>
                <div className='duration'>Aug 2020 - Mar 2021</div>
                <div className='location'>Hsinchu, Taiwan</div>
              </div>
            </div>
            <ul>
              <li><a href='https://arxiv.org/pdf/2112.03690.pdf'>Master's thesis</a> accepted at <a href='https://practical-dl.github.io/2022/index'>AAAI Workshop</a>, cited by 5</li>
            </ul>
        </div> */}

        <div className='inner_block'>
          <div className='block_item'>
            <div>
              <div className='highlight bold'>Software Engineer</div>, <div className='company bold'><a href='https://www.mediatek.com/'>Mediatek</a></div>, <div className='after_highlight'>3A Algorithm Team</div>
              {/* <p className='highlight_inner'>Python/Pytorch/Linux/Docker/CICD/Git</p> */}
            </div>
            <div>
              <div className='duration'>May 2021 - Jun 2021</div>
              {/* <div className='location'>Taipei, Taiwan</div> */}
            </div>
          </div>
          <ul>
              <li>Designed and developed advanced algorithms (3A - Autoexposure, Autofocus, and Autowhite balance) to enhance the performance of mobile phone cameras</li>
          </ul>
        </div>

        {/* <div className='inner_block'>
          <div className='block_item'>
            <div>
              <div className='highlight bold'>Machine Learning Intern</div>, <div className='company bold'><a href='http://www.rogersai.com/home_eng.html'>Rogersai</a></div>, <div className='after_highlight'>ML and Backend</div>
              <p className='highlight_inner'>Python/Pytorch/Linux/Docker/CICD/Git</p>
            </div>
            <div>
              <div className='duration'>Jul 2020 - Aug 2020</div>
              <div className='location'>Taipei, Taiwan</div>
            </div>
          </div>
          <ul>
              <li>Design and develop facial recognition features</li>
              <li>Accelerate the occlusion detection module by 379% with the model compression method</li>
          </ul>
        </div> */}
      </div>

      <div id='awards' className='block'>
        <div className='highlight block_category'>Awards</div>
        <div class="horizontal-line"></div>
        <div className='inner_block'>
          <div className='block_item'>
            <div>
              <div className='award_highlight'>
                <a href='https://practical-dl.github.io/2022/index'>Paper Accepted</a>: <a href='https://arxiv.org/pdf/2112.03690.pdf'>Master's Thesis</a> published at <a href='https://aaai.org/conference/aaai/aaai-22/ws22workshops/'>AAAI Workshop</a>, cited by 5
              </div>
              {/* <p className='highlight_inner'>Paper published during the master's period, cited by 5</p> */}
            </div>
            <div>
              {/* <div className='duration'>Mar 2022</div> */}
              <div className='location'>Vancouver, Canada</div> 
            </div>
          </div>
        </div>
      </div>

      <div id='projects' className='block'>
        <div className='highlight block_category'>Projects</div>
        <div class="horizontal-line"></div>
        <div className='inner_block'>
        <div className='block_item'>
            <div>
              <div className='project_highlight'>
                <a href='https://web.robertchu.xyz'>Personal Website: </a>A <a href='https://github.com/juroberttyb/page'>chat room</a> built with React.js/Express.js/MongoDB/GCP
              </div>
              {/* <p className='highlight_inner'>An <a href='https://github.com/juroberttyb/page'>online chat room</a> built with React.js/Express.js/MongoDB/GCP.</p> */}
              {/* <p className='highlight_inner'>A website built with React.js for introducing myself and online chatting.</p> */}
            </div>
            {/* <div> */}
              {/* <div className='duration'>Nov 2022 - Present</div> */}
              {/* <div className='location'>Taipei, Taiwan</div> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      <div id='skills' className='block'>
        <div className='highlight block_category'>Skills</div>
        <div class="horizontal-line"></div>
        <div className='inner_block'>
          <table>
            <thead>
              <tr>
                <th>Backend</th>
                <th>DevOps</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              <td>
                <tr>Go/Python</tr>
                <tr>Microservices</tr>
                <tr>Multithreading</tr>
                <tr>PostgreSQL/MongoDB/Redis</tr>
                <tr>RabbitMQ/PubSub</tr>
                <tr>Storage/Logging/Cache</tr>
              </td>
              <td>
                <tr>GCP (Google Cloud Platform)</tr>
                <tr>Kubernetes/Helm</tr>
                <tr>Docker</tr>
                <tr>Linux/Shell</tr>
                <tr>Github Action</tr>
              </td>
              <td>
                <tr>HTML/CSS/Javascript</tr>
                <tr>React.js</tr>
                <tr>Sklearn/Pytorch/Keras</tr>
                <tr>Numpy/OpenCV</tr>
                {/* <tr>Typescript</tr> */}
                {/* <tr>C++</tr> */}
              </td>
            </tbody>
          </table>
        </div>
      </div>

      <p className='blank'>
        Experience, Google senior software engineer, Lead team of 6 engineers to mine Ethereum on company bold servers, Lead software engineer, 10 years experience, full-stack developer, Facebook, Meta, Amazon, Instagram, Microsoft senior backend developer, Tesla, Apple, IBM, OpenAI, LinkedIn principal engineer, reddit, Twitter, Binance, 
        Skills, react.js, vue.js, express.js, angular.js, nest.js, django, flask, fastapi, gin, laravel, ethereum, bitcoin, polygon, solana, cosmos, AI, GraphQL, blockchain, big data, tensorflow, php, ror, C, C#, Java, Spring boot, ASP.NET, ASP.CORE, ASP NET, Hadoop, PubSub, Message Queue, kafka
      </p>
    </div>
  )
}

export default Resume
