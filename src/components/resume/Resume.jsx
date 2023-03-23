import React from 'react'

import './resume.css';
import cap from '../../assets/images/cap.jpg'
import phone from '../../assets/images/phone.jpg'
import mail from '../../assets/images/mail.jpg'
import linkedin from '../../assets/images/linkedin.jpg'
import github from '../../assets/images/github.jpg'
import web from '../../assets/images/web.jpg'

const Resume = () => {
  return (
    <div id='resume'>
      <div id='resume_header' className='block'>
          <div id='basic_info'>
            <div id='name'>Robert Chu</div>
            <div id='education'>
              <img id="cap" src={cap} alt="" />
              <div>
                <p>M.S., Computer Science, <a href='https://nthu-en.site.nthu.edu.tw/'>National Tsing Hua University</a>, 2021</p>
                <p>B.S., Computer Science and Engineering, <a href='https://english.ntou.edu.tw/?Lang=en'>National Taiwan Ocean University</a>, 2019</p>
              </div>
            </div>
          </div>
          <div id='contact'>
            <ul>
              <li><img className="prefix_img" src={phone} alt="" />(+886)972435608</li>
              <li><img className="prefix_img" src={mail} alt="" />juroberttyb@gmail.com</li>
              <li><a href='https://www.linkedin.com/in/robert-chu-5b66081a9/'><img className="prefix_img" src={linkedin} alt="" />Linkedin</a></li>
              <li><a href='https://github.com/juroberttyb'><img className="prefix_img" src={github} alt="" />Github</a></li>
              <li><a href='https://robertchu.xyz'><img className="prefix_img" src={web} alt="" />Website</a></li>
            </ul>
          </div>
      </div>



      <div id='autobiography' className='block'>
        <div className='highlight block_category'>Autobiography</div>
        <hr></hr>
        <div className='inner_block'>
          <p>I am a backend developer at Nabawan, whose founder is the co‑founder of <a href='https://17.live/en-US'>17LIVE</a>.</p>
          <p>At work, I use Go/Python/SQL/Docker/Kubernetes/GCP/Git on a daily basis.</p>
          <p>After work, I am building websites with HTML/CSS/Javascript/React.</p>
        </div>
      </div>



      <div id='experience' className='block'>
        <div className='highlight block_category'>Experience</div>
        <hr></hr>
        <div className='inner_block'>
          <div className='block_item'>
            <div>
              <div className='highlight bold'>Backend Developer</div>, <div className='after_highlight'><a href='https://apps.apple.com/tw/app/clos-burgundy-dictionary/id1568106896'>Nabawan</a></div>,  <div className='after_highlight'>App Backend Team</div>
              <p className='highlight_inner'>Go/Python/Gin/SQL/Docker/Compose/Kubernetes/Helm/GCP/Redis/PubSub/CICD/Git</p>
            </div>
            <div>
              <div className='duration'>May 2022 - Present</div>
              <p className='location'>Taipei, Taiwan</p>
            </div>
          </div>
          <ul>
            <li>Develop a messaging API for users to chat in <a href='https://apps.apple.com/tw/app/mediatalk-dont-be-shy/id1599874400'>MediTalk</a></li>
            <li>Develop a user recommendation API for users to meet new users in MediTalk</li>
            <li>Develop a job verification API with Sendgrid that allows users to display job titles in MediTalk</li>
            <li>Develop MediTalk as a microservice for users of other apps to use</li>
            <li>Develop a company scoring microservice for users to score their working environments</li>
            <li>Develop a favorite collection API for users to collect their favorite posts in <a href='https://apps.apple.com/tw/app/apen/id1434492280'>Apen</a>/<a href='https://apps.apple.com/tw/app/%E8%AD%B7%E7%90%86%E7%AB%99/id1523414575'>NStation</a>/<a href='https://apps.apple.com/us/app/%E8%97%A5%E5%B8%AB%E5%9C%88/id1661519539'>Phar</a>/<a href='https://apps.apple.com/au/app/%E9%9D%A0%E5%8C%97%E8%AD%A6%E5%AF%9F-%E8%AD%A6%E5%AF%9F%E7%99%BE%E7%A7%91%E5%85%A8%E6%9B%B8/id1637401189'>TWPD</a></li>
            <li>Refactor backend code to follow API/Service/Gateway/Store/Model best practice architecture</li>
            <li>Integrate Google Login into login API for users in MediTalk and <a href='https://apps.apple.com/tw/app/clos-burgundy-dictionary/id1568106896'>Clos</a></li>
            <li>Integrate Google Play 3rd-party payment into In-App Purchase API for users to buy products</li>
            <li>Integrate Google Cloud Pub/Sub service into In-App Purchase API for users to buy subscriptions</li>
            <li>Integrate Google Cloud Logging service into backend for engineers to debug and monitor services</li>
            <li>Develop and integrate Redis caching into services to improve http response time</li>
            <li>Write unit and integration tests to raise the test coverage of API package from 0% to 74%</li>
            <li>Automate continuous integration with docker compose and workflow on Github</li>
          </ul>
        </div>



        <div className='inner_block'>
          <div className='block_item'>
            <div>
              <div className='highlight bold'>MLOps Engineer</div>, <div className='after_highlight'><a href='http://www.gallopwave.com/en/'>Gallopwave</a></div>,  <div className='after_highlight'>Machine Learning DevOps</div>
              <p className='highlight_inner'>Go/Python/C++/Bash/Pytorch/Linux/Docker/GCP/CICD/Git</p>
            </div>
            <div>
              <div className='duration'>Aug 2021 ‑ Apr 2022</div>
              <div className='location'>Taipei, Taiwan</div>
            </div>
          </div>
          <ul>
            <li>Design and develop a <a href='https://drive.google.com/file/d/1uT08PYlLLETs8jVc3j8V9AnyabNsUCwv/view'>distributed architecture</a> to speed up ML training pipeline</li>
            <li>Develop tools for testing the robustness and correctness of ML models</li>
            <li>Develop and maintain ONNX generation pipelines for different production platforms</li>
            <li>Develop and maintain data generators for different training pipelines</li>
            <li>Troubleshooting network, OS, and application issues for development and production environments</li>
            <li>Automating infrastructure build‑outs for development environments</li>
            <li>Build and maintain tools and libraries for development and continuous integration</li>
            <li>Design, build, and maintain a high‑availability development environment</li>
            <li>Own and maintain self‑hosted Linux servers and containers</li>
            <li>Perform regular maintenance, upgrades, testing, and evaluation across production releases</li>
            <li>Design and implement a git‑based strategy to support multiple environments for development</li>
            {/* <li>Debug, optimize code, and automate routine tasks like data labeling and experiments</li> */}
          </ul>
        </div>



        <div className='inner_block'>
            <div className='block_item'>
            <div>
              <div className='highlight bold'>Algorithm Summer Intern</div>, <div className='after_highlight'><a href='http://www.rogersai.com/home_eng.html'>Rogersai</a></div>,  <div className='after_highlight'>Algorithm Team</div>
              <p className='highlight_inner'>Python/Pytorch/Linux/Docker/Git</p>
            </div>
            <div>
              <div className='duration'>Jul 2020 ‑ Aug 2020</div>
              <div className='location'>Taipei, Taiwan</div>
            </div>
          </div>
          {/* <ul>
            <li>Design and develop algorithms to accelerate human face detection</li>
            <li>Develop and integrate facial login into production releases</li>
          </ul> */}
        </div>
      </div>



      <div id='projects' className='block'>
        <div className='highlight block_category'>Projects</div>
        <hr></hr>
        <div className='inner_block'>
        <div className='block_item'>
            <div>
              <div className='highlight'><a href='https://robertchu.xyz'>Personal Website</a></div>
              <p className='highlight_inner'>A personal website built with React. This resume is part of the website.</p>
            </div>
            <div>
              <div className='duration'>Nov 2022 - Present</div>
              {/* <div className='location'>Taipei, Taiwan</div> */}
            </div>
          </div>
        </div>
      </div>



      <div id='awards' className='block'>
        <div className='highlight block_category'>Awards</div>
        <hr></hr>
        <div className='inner_block'>
          <div className='block_item'>
            <div>
              <div className='highlight'><a href='https://arxiv.org/pdf/2112.03690.pdf'>Paper</a> accepted at <a href='https://practical-dl.github.io/2022/index'>AAAI‑22 Workshop</a></div>
              <p className='highlight_inner'>The paper proposed a method for tensor compression, cited by 5.</p>
            </div>
            <div>
              <div className='duration'>Mar 2022</div>
              <div className='location'>Vancouver, Canada</div> 
            </div>
          </div>
        </div>
      </div>

      <p className='blank'>
        Experience, Google senior software engineer, Lead team of 6 engineers to mine Ethereum on company servers, Lead software engineer, 10 years experience, full-stack developer, Facebook, Meta, Amazon, Instagram, Microsoft senior backend developer, Tesla, Apple, IBM, OpenAI, LinkedIn principal engineer, reddit, Twitter, Binance, 
        Skills, react.js, vue.js, express.js, angular.js, nest.js, django, flask, fastapi, gin, laravel, ethereum, bitcoin, polygon, solana, cosmos, AI, GraphQL, blockchain, big data, tensorflow, php, ror, C, C#, Java, Spring boot, ASP.NET, ASP.CORE, ASP NET, Hadoop, PubSub, Message Queue, kafka
      </p>
    </div>
  )
}

export default Resume