import React from 'react'

import './Resume.css';

const Resume = () => {
  document.body.style = 'background: red;';

  return (
    <>
      <div id='resume_header' class='block'>
          <div id='basic_info'>
            <div id='name'>Robert Chu</div>
            <p>M.S., Computer Science, <a href='https://nthu-en.site.nthu.edu.tw/'>National Tsing Hua University</a>, 2021</p>
            <p>B.S., Computer Science and Engineering, <a href='https://english.ntou.edu.tw/?Lang=en'>National Taiwan Ocean University</a>, 2019</p>
          </div>
          <div id='contact'>
            <ul>
              <li>(+886)972435608</li>
              <li>juroberttyb@gmail.com</li>
              <li><a href='https://www.linkedin.com/in/robert-chu-5b66081a9/'>Robert Chu</a></li>
              <li><a href='https://github.com/juroberttyb'>juroberttyb</a></li>
              <li><a href='https://robertchu.xyz'>website</a></li>
            </ul>
          </div>
      </div>

      <div id='autobiography' class='block'>
        <div class='highlight'>Autobiography</div>
        <hr></hr>
        <div class='inner_block'>
          <p>I am a backend developer at Nabawan, whose founder is the co‑founder of <a href='https://17.live/en-US'>17LIVE</a>.</p>
          <p>At work, I use Go/Python/SQL/Docker/Kubernetes/GCP/Git on a daily basis.</p>
          <p>After work, I am building websites with HTML/CSS/Javascript/React.</p>
        </div>
      </div>

      <div id='experience' class='block'>
        <div class='highlight'>Experience</div>
        <hr></hr>
        <div class='inner_block'>
          <div class='block_item'>
            <div>
              <div class='highlight bold'>Backend Developer</div>, <div class='after_highlight'><a href='https://apps.apple.com/tw/app/clos-burgundy-dictionary/id1568106896'>Nabawan</a></div>,  <div class='after_highlight'>App Backend</div>
              <p>Go/Python/Gin/SQL/Docker/Compose/Kubernetes/Helm/GCP/Redis/PubSub/CICD/Git</p>
            </div>
            <div>
              <div class='duration'>May 2022 ‑ Present</div>
              <div class='location'>Taipei, Taiwan</div>
            </div>
          </div>
          <ul>
            <li>Develop a messaging API for users chatting in <a href='https://apps.apple.com/tw/app/mediatalk-dont-be-shy/id1599874400'>MediTalk</a></li>
            <li>Develop a user recommendation API for user matching in MediTalk</li>
            <li>Develop a job verification API with Sendgrid to allow users to display job titles in MediTalk</li>
            <li>Develop MediTalk as a microservice for users in <a href='https://apps.apple.com/tw/app/apen/id1434492280'>Apen</a>/<a href='https://apps.apple.com/tw/app/%E8%AD%B7%E7%90%86%E7%AB%99/id1523414575'>NStation</a>/<a href='https://apps.apple.com/us/app/%E8%97%A5%E5%B8%AB%E5%9C%88/id1661519539'>Phar</a>/<a href='https://apps.apple.com/au/app/%E9%9D%A0%E5%8C%97%E8%AD%A6%E5%AF%9F-%E8%AD%A6%E5%AF%9F%E7%99%BE%E7%A7%91%E5%85%A8%E6%9B%B8/id1637401189'>TWPD</a></li>
            <li>Develop a company scoring microservice for users to score their working environments in NStationv</li>
            <li>Develop a favorite collection API for users to collect favorite posts in Apen/NStation/Phar/TWPD</li>
            <li>Refactor backend of Apen to follow API/Service/Gateway/Store/Model best practice</li>
            <li>Integrate Google Login into the login API for users in MediTalk/<a href='https://apps.apple.com/tw/app/clos-burgundy-dictionary/id1568106896'>Clos</a></li>
            <li>ntegrate Google Play 3rd‑party payment into In‑App Purchase API for users to buy products in MediTalk/Clos</li>
            <li>Integrate Google Cloud Pub/Sub service into In‑App Purchase API for users to buy MediTalk/Clos subscriptions</li>
            <li>Integrate Google Cloud Logging service into backend for engineers to debug and monitor services</li>
            <li>Integrate Redis cache into services to improve http response time</li>
            <li>Write unit and integration tests to raise the coverage of the API package from 0% to 68%</li>
            <li>Automate continuous integration with docker compose and workflow on Github</li>
          </ul>
        </div>
        <div class='inner_block'>
          <div class='block_item'>
            <div>
              <div class='highlight bold'>Software Engineer</div>, <div class='after_highlight'><a href='http://www.gallopwave.com/en/'>Gallopwave</a></div>,  <div class='after_highlight'>Data Backend/DevOps</div>
              <p>Go/Python/Shell/Linux/Docker/GCP/CICD/Git</p>
            </div>
            <div>
              <div class='duration'>Aug 2021 ‑ Apr 2022</div>
              <div class='location'>Taipei, Taiwan</div>
            </div>
          </div>
          <ul>
            <li>Design and develop a <a href='https://drive.google.com/file/d/1uT08PYlLLETs8jVc3j8V9AnyabNsUCwv/view'>distributed architecture</a> to speed up data processing</li>
            <li>Develop a data generator to aggregate different data processing functions</li>
            <li>Troubleshooting network, OS, and application issues for development and production environments</li>
            <li>Automating infrastructure build‑outs and deployments for data storage and development environments</li>
            <li>Build and maintain tools and libraries for development, continuous integration, and system operations</li>
            <li>Design, build, and maintain a high‑availability development environment</li>
            <li>Perform regular maintenance and upgrades on production systems</li>
            <li>Own and maintain self‑hosted Linux servers</li>
            <li>Perform testing and evaluation across the production release</li>
            <li>Design and implement a git‑based code management strategy that supports multiple environments for development</li>
            <li>Debug, optimize code, and automate routine tasks</li>
            <li>Container creation, orchestration, and Linux server management</li>
          </ul>
        </div>
        <div class='inner_block'>
            <div class='block_item'>
            <div>
              <div class='highlight bold'>Software Engineer Intern</div>, <div class='after_highlight'><a href='http://www.rogersai.com/home_eng.html'>RogersAI</a></div>,  <div class='after_highlight'>App Backend</div>
            </div>
            <div>
              <div class='duration'>Jul 2020 ‑ Aug 2020</div>
            </div>
          </div>
        </div>
      </div>

      <div id='projects' class='block'>
        <div class='highlight'>Projects</div>
        <hr></hr>
        <div class='inner_block'>
          <div class='highlight'><a href='https://robertchu.xyz'>Personal Website</a></div>
          <p>A personal website built with React. This resume is built with HTML and CSS and is part of the website.</p>
        </div>
      </div>

      <div id='publication' class='block'>
        <div class='highlight'>Publication</div>
        <hr></hr>
        <div class='inner_block'>
          <div class='highlight'><a href='https://arxiv.org/pdf/2112.03690.pdf'>Low-rank tensor decomposition for compression</a></div>
          <p>The paper is published at AAAI‑22 workshop, cited by 5.</p>
        </div>
      </div>

      <p class='blank'>
        Experience, Google senior software engineer, Lead team of 6 engineers to mine Ethereum on company servers, Lead software engineer, 10 years experience, full-stack developer, Facebook, Meta, Amazon, Instagram, Microsoft senior backend developer, Tesla, Apple, IBM, OpenAI, LinkedIn principal engineer, reddit, Twitter, Binance, 
        Skills, react.js, vue.js, express.js, angular.js, nest.js, django, flask, fastapi, gin, laravel, ethereum, bitcoin, polygon, solana, cosmos, AI, GraphQL, blockchain, big data, tensorflow, php, ror, C, C#, Java, Spring boot, ASP.NET, ASP.CORE, ASP NET, Hadoop, PubSub, Message Queue, kafka
      </p>
    </>
  )
}

export default Resume