// ----- Imports -----
import './Footer.scss';

// Icons
import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";
import Mail from "../icons/Mail";
import YouTube from "../icons/YouTube";
import WrittenByHuman from "../icons/WrittenByHuman";

const Footer = () => {
  return (
    <div className={'footer-container mx-auto'}>
      <div className={'d-flex justify-content-between h-50'}>
        <LinkedIn link={'https://linkedin.com/in/alex-chapman-8aa194221'}></LinkedIn>
        <GitHub link={'https://github.com/AlexChapman18'}></GitHub>
        <Mail link={'mailto:alex.d.chapman@outlook.com'}></Mail>
        <YouTube link={'https://youtube.com/@agent2153?si=7UgNKrEC7La6xFzW'}></YouTube>
      </div>
      <div className={'d-flex justify-content-center h-75 pt-2'}>
        <WrittenByHuman link={'https://notbyai.fyi/'}></WrittenByHuman>
      </div>
    </div>
  );
}

export default Footer;