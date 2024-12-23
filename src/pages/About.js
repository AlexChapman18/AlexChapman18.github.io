// ---- Imports ----
// Styles
import './About.scss';

// Components
import Layout from '../components/Layout'

// Images
import bio_pic from '../images/Alex_holiday.png'
import GraduationCap from "../icons/GraduationCap";
import School from "../icons/School";

function About() {
  return (
    <Layout>
      <div className='about-container'>
        <div className='biography'>
          <div className='biography-text'>
            <h1 className='biography-text-title section-title'>Biography</h1>
            <h2 className='biography-text-subTitle section-subtitle'>Masters Computer Science Student at The University of Sheffield</h2>
            <p className='biography-text-paragraph section-text'>
              I’m a 4th year Masters Computer Science student at the University of Sheffield, passionate in software development and live events production. Outside of my degree, I have undertaken a variety of both personal and group projects, applying and improving my knowledge. Some examples can be seen on my projects page.</p>
            <p className='biography-text-paragraph section-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet facilisis magna etiam tempor. Euismod elementum nisi quis eleifend. Mauris augue neque gravida in fermentum. In metus vulputate eu scelerisque felis imperdiet proin. At auctor urna nunc id cursus metus aliquam eleifend. Enim blandit volutpat maecenas volutpat. Sit amet nisl purus in mollis nunc sed id. Sit amet nisl purus in mollis nunc sed id. Sit amet nisl purus in mollis nunc sed id.
            </p>
          </div>
          <div className='biography-image'>
            <img className='biography-image-image' src={bio_pic} alt="Alex_Holiday"  loading="lazy" />
            <div className='biography-image-blank'></div>
          </div>
        </div>
        <hr className='lineSeparator'/>
        <div className='IE'>
          <div className='IE-Interests'>
            <h1 className='IE-Interests-title section-title'>Interests</h1>
            <ul className='IE-Interests-list section-text'>
              <li>Live Events Production</li>
              <li>Programming Projects</li>
              <li>Gaming</li>
              <li>Geocaching</li>
            </ul>
          </div>
          <hr className='lineSeparator IE-separator'/>
          <div className='IE-Education'>
            <h1 className='IE-Education-title section-title'>Education</h1>
            <div className='IE-Education-education'>
              <div className='IE-Education-education-university'>
                <div className='IE-Education-education-university-icon'>
                  <GraduationCap></GraduationCap>
                </div>
                <div className='IE-Education-education-university-text'>
                  <p className='section-text'>Masters in Computer Science, 2025</p>
                  <p className='section-subtext'>The University of Sheffield</p>
                </div>
              </div>
              <div className='IE-Education-education-ALevels'>
                <div className='IE-Education-education-ALevels-icon'>
                  <School className='IE-Education-education-ALevels-icon'></School>
                </div>
                {/*<div className='IE-Education-education-ALevels-text'>*/}
                  <p className='section-text'>A-levels, 2020</p>
                  <p className='section-subtext'>Computer Science, Maths, Physics, <br />Further Maths (AS-Level)</p>
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
        <hr className='lineSeparator'/>
        <div className='experience'>
          <h1 className='experience-title section-title'>Experience</h1>
          <p className='experience-text section-text'>
          Having worked in the live events industry for the past 4 years, I have gained significant hands-on experience being both a stage manager and team member in excess of 100 individual events, ranging from gigs and club nights to awards ceremonies at the Sheffield Uni. External to the university, I have also worked as the head lighting engineer for a 3-day rock festival at the O2 Academy Sheffield.          </p>
        </div>
        <hr className='lineSeparator'/>
        <div className='skills'>
          <h1 className='skills-title section-title'>Skills</h1>
          <p className='skills-text section-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim</p>
        </div>
        <hr className='lineSeparator bottom-seperator'/>
      </div>
    </Layout>
  );
}

export default About;