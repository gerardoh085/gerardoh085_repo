import React from 'react';
import {Link} from 'react-router-dom';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/home.css';
import '../styles/Icon.css';
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Gerardo</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating.</p>
          <div className='Icons'>
            <a href='https://www.linkedin.com/in/gerardo-hernandez-macoto-129364176/' target={"_blank"}><FaLinkedin size={50}/></a>
            <a href="mailto:gerardoh085@gmail.com" target={"_blank"}><FaEnvelope size={50}/></a>
            <a href="https://github.com/gerardoh085" target={"_blank"}><FaGithubSquare size={50}/></a>            
          </div>
        </div>
      </div>
      <div className='skills'>
          <ol className='list'>
            <h1>Skills</h1>
            <li className='item'>
              <h2>Front-End</h2>
              <span>ReactJS, HTML, CSS, Flutter, NPM, BootStrap</span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span>NodeJS, MySQL</span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>Java, C/C++, Python, MATLAB, JavaScript, Dart</span>
            </li>
          </ol>
      </div>      
    </div>
  );
}

export default Home;
