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
      <div className='container mt-4'>
        <div className='biography-container'>
          <div>
            <h1 className='fs-1 fw-bold'>Biography</h1>
            <h2 className='biography-subtitle'>Masters Computer Science Student at The University of Sheffield</h2>
            <p>
              I’m a 4th year Masters Computer Science student at the University of Sheffield, passionate in software development and live events production. Outside of my degree, I have undertaken a variety of both personal and group projects, applying and improving my knowledge. Some examples can be seen on my projects page.
            </p>
            <p>
              In my free time, I volunteer as a Live Events Video and Lighting Technician at the Sheffield Students' Union. This allows me to combine my love for live music, especially Drum and Bass, with the creative challenge of designing engaging visual displays that both myself and the audience can enjoy.
              In addition, I’m an avid gamer and often enjoy gaming sessions with friends. Some of my top picks include: <a href="https://www.minecraft.com/">Minecraft</a>, <a href="https://store.steampowered.com/app/553850/HELLDIVERS_2/">Helldivers II</a> and <a href="https://store.steampowered.com/app/620/Portal_2/">Portal 2</a>.
            </p>
          </div>
          <img className='biography-image  rounded-circle border border-5 border-primary' src={bio_pic} alt="Alex_Holiday" loading="lazy" />
        </div>
        <hr className="horizontal-linebreak bg-dark opacity-25" />
        <div className='mt-4 IE-container'>
          <div className="container">
            <h1 className='fw-bold'>Interests</h1>
            <ul>
              <li>Live Events Production</li>
              <li>Programming Projects</li>
              <li>Gaming</li>
              <li>Geocaching</li>
              <li>Skiing</li>
            </ul>
          </div>
          <hr className="horizontal-linebreak bg-dark opacity-25 IE-linebreak" />
          <div className="container">
            <h1 className='fw-bold'>Education</h1>
            <div>
              <div className='education-grid'>
                <div className='education-icon'>
                  <GraduationCap></GraduationCap>
                </div>
                <p className='education-title mt-auto mb-0'>Masters in Computer Science, 2025</p>
                <p className='education-content section-subtext mb-0'>The University of Sheffield</p>
              </div>
              <div className='education-grid'>
                <div className='education-icon'>
                  <School></School>
                </div>
                <p className='education-title mt-auto mb-0'>A-levels, 2020</p>
                <p className='education-content section-subtext mb-0'>Computer Science, Maths, Physics, <br />Further Maths (AS-Level)</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="horizontal-linebreak bg-dark opacity-25" />
        <div className='experience'>
          <h1 className='experience-title section-title mb-0'>Experience</h1>
          <p className='experience-text section-text'>
            Having worked in the live events industry for the past 4 years, I have gained significant hands-on experience being both a stage manager and team member in excess of 100 individual events, ranging from gigs and club nights to awards ceremonies at the Sheffield Uni. External to the university, I have also worked as the head lighting engineer for a 3-day rock festival at the O2 Academy Sheffield.
          </p>
        </div>
        <hr className="horizontal-linebreak bg-dark opacity-25" />
        <div className='skills'>
          <h1 className='skills-title section-title mb-0'>Skills</h1>
          <p className='skills-text section-text'>
            With a diverse background, having worked in both the live events and software development industries, I have developed a strong skill set in stage management, team collaboration, and technical operations. My expertise includes software testing and verification, web development with Ruby on Rails, proficiency in Python and Java programming, and a diverse knowledge in system networking. Additionally, I have extensive experience with Git version control, including techniques like branching, rebasing, cherry-picking, and repository management.
          </p>
        </div>
        <hr className="horizontal-linebreak bg-dark opacity-25" />
      </div>
    </Layout >
  );
}

export default About;