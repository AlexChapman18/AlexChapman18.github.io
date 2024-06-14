// ----- Imports -----
import './Footer.scss';


// Icons
import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";
import Mail from "../icons/Mail";
import YoutTube from "../icons/YouTube";
import WrittenByHuman from "../icons/WrittenByHuman";

const Footer = () => {
  return (
    <div className={'footer-container'}>
      <div className={'width-footer-container'}>
        <div className={'socials-icon-container'}>
          <LinkedIn link={'https://linkedin.com/in/alex-chapman-8aa194221'}></LinkedIn>
          <GitHub link={'https://github.com/AlexChapman18'}></GitHub>
          <Mail link={'mailto:alex.d.chapman@outlook.com'}></Mail>
          <YoutTube link={'https://youtube.com/@agent2153?si=7UgNKrEC7La6xFzW'}></YoutTube>
        </div>
        <div className={'WBH-icon-container'}>
          <WrittenByHuman link={'https://notbyai.fyi/'}></WrittenByHuman>
        </div>
      </div>
    </div>
  );
}

export default Footer