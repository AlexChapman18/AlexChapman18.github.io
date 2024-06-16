// ---- Imports ----
// Styles
import './Project.scss';

// Icons
import GitHub from "../icons/GitHub";
import YoutTube from "../icons/YouTube";

// ---- Project ----
const Project = ({title, text, image, git, YouTube, tool1, tool2, tool3}) => {
  return (
    <div className="project-container">
      <h2 className='project-title'>{title}</h2>
      <div className='project-content'>

        <img className='project-content-image' src={image} alt="Image of project" />

        <p className='project-content-text section-text'>{text}</p>

        <ul className='project-content-tools'>
          <li className='project-toolList-item'>{tool1}</li>
          <li className='project-toolList-item'>{tool2}</li>
          <li className='project-toolList-item'>{tool3}</li>
        </ul>

        <div className='project-links'>
          <a href={git} className='project-links-github'>
            <p className='project-links-github-text'>View GitHub</p>
            <GitHub link={''}></GitHub>
          </a>
          <a href={YouTube} className='project-links-youtube'>
            <p className='project-links-youtube-text'>View Video</p>
            <YoutTube link={''} className='project-links-youtube-icon'></YoutTube>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Project