import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IoIosSchool} from 'react-icons/io';
import {HiAcademicCap} from 'react-icons/hi';
import "../styles/Experience.css";
import {GiArchiveResearch} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import {AiFillCode} from 'react-icons/ai'

function Experience() {
  
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='September 2015 - June 2019'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<IoIosSchool><a href=""></a></IoIosSchool>}
        >
          <h3 className='vertical-timeline-element-title'>Bronx Leadership Academy II High School</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bronx, NY</h4>
          <p> 
            High School Diploma 
            <br/>
            Regents Diploma
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='February 2016 - Present'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<HiAcademicCap></HiAcademicCap>}
        >
          <h3 className='vertical-timeline-element-title'>Sponsers for Educational Opportunity (SEO) Scholars</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bronx, NY</h4>
          <p> 
            SEO Scholars sets the standard for academics, mentorship, positive peer pressure, provides a lifelong network, and 
            transforms public high school students into college graduates.
            Selected out of more than 1,000 applicants to participate in a rigorous eight-year academic program for first-generation and low-income students 
            from NYC public schools, completed 720+ hours of college-preparatory courses. 
            Attended 10+ college success workshops, networking events, and career readiness seminars to drive college 
            persistence and post-graduate success, and received one-on-one academic and personal support throughout college. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='August 2019 - Present'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<IoIosSchool></IoIosSchool>}
        >
          <h3 className='vertical-timeline-element-title'>Lehigh University</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bethlehem, PA</h4>
          <p> Pursuing a Bachelors of Science degree in Computer Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='June 2021 - August 2021'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<GiArchiveResearch></GiArchiveResearch>}
        >
          <h3 className='vertical-timeline-element-title'>Research Assistant</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bethlehem, PA</h4>
          <p> Through the Lehigh University Program, STEM Summer Institute, I was able to conduct research under a professor in the Electrical and computing Engineering Department. 
              The machine learning project focused on analyzing the Sparse Matrix Matrix Multiplication accelerator 
              we created against existing accelerators. I was tasked to analyze the accelerators performance and total cycle runtime and compare it
              with the existing accelerators. 
              <br/>
              <b>View poster below:</b>
              <br/>
              <Link to="/post1">
                  <span className='btn-poster'>Poster</span>  
              </Link>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='June 2022 - August 2022'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<GiArchiveResearch></GiArchiveResearch>}
        >
          <h3 className='vertical-timeline-element-title'>Research Assistant</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bethlehem, PA</h4>
          <p> Through the Lehigh University Program, STEM Summer Institute, I was able to become a research assistant.
            The research project focused on using Machine Learning for Advanced Microfabrication and Cell Manipulation. 
              
            <br/>
            <b>View poster below:</b>
            <br/>
            <Link to="/post2">
                <span className='btn-poster'>Poster</span>  
            </Link>
          </p>
        </VerticalTimelineElement>
        


        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='January 2023'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<AiFillCode></AiFillCode>}
        >
          <h3 className='vertical-timeline-element-title'>Hackathon: Hackrithmitic 2</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bethlehem, PA</h4>
          <p> 
          My teammates and I participated in a hackathon through <a href="https://devpost.com/" target={"_blank"}>devpost.com</a>.
          My team and I built a full stack web application, SkyScout, 
          to allow users to share feedback about airlines, receive 
          updates and posts, and a statistical graph based on 
          negative and positive reviews about their flights 
          for a math-themed hackathon.
          <br/>
          <b>View SkyScout Web Page below:</b>
          <br/>
          <a href="https://devpost.com/software/sky-scout" className='btn-poster' target={"_blank"}>
          SkyScout
          </a>
          </p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  )
}

export default Experience;
