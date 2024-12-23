// ---- Imports ----
// Styles
import './Projects.scss';

// Components
import Layout from '../components/Layout'
import IndividualProject from "../components/Project";

// Images
import UnPhoneLightingRemote from '../images/UnPhone-Lighting-Remote.png'
import sACNToPixelmesh from '../images/sACN-To-Pixelmesh.png'
import MinecraftTosACN from '../images/Minecraft-To-sACN.png'
import AdventOfCode from '../images/Advent-Of-Code.jpg'
import GrassLanders from '../images/Grass-Landers.png'
import SpaceCraft from '../images/SpaceCraft.png'


// ---- About ----
function About() {
  return (
    <Layout>
      <div className='projects-container'>
        <h1 className='projects-title section-title'>Projects</h1>
        <hr className='central-row-divider top-row-divider'/>
        <div className='projects-grid'>
          <IndividualProject
            title='UnPhone Lighting Remote'
            text='A compact, battery-powered IoT device designed to wirelessly control the RGB LED strips at the Foundry live events venue in the University of Sheffield&apos;s Student Union. This device offers a variety of effects and colors, allowing users to tailor the lighting to their needs, all managed via the unPhone.'
            image={UnPhoneLightingRemote}
            git='https://github.com/AlexChapman18/UnPhone-Foundry-Light-Controller'
            youtube='https://youtu.be/TNZxqrxVWRk'
            tool1='C++'
            tool2='IOT'
            tool3='Art-Net'
          ></IndividualProject>
          <div className='mid-column-divider column-divider'></div>
          <hr className='mid-row-divider row-divider'/>
          <IndividualProject
            title='Lighting Video-Wall Controller'
            text='This program acts as a bridge between lighting devices and video-wall controllers. It converts lighting control packets into a format the video-wall controller can understand, outputting the result as a video signal via HDMI. This enables more synchronized video and lighting during events.'
            image={sACNToPixelmesh}
            git='https://github.com/AlexChapman18/sACN-To-Pixelmesh'
            youtube='https://youtu.be/qS68SA1V0hA'
            tool1='Java'
            tool2='Networking'
            tool3='sACN'
          ></IndividualProject>
        </div>

        <hr className='central-row-divider'/>

        <div className='projects-grid'>
        <IndividualProject
            title='Spacecraft Scene'
            text='This program uses modern OpenGL to render a dynamic spacecraft scene, featuring hierarchical scene graphs for easy animation and object positioning. It provides interactive controls for both a spotlight and a point light source, allowing for precise lighting adjustments. Finally, custom textures were used throughout, to enhance the spacecraft aesthetic.'
            image={SpaceCraft}
            git=''
            youtube='https://youtu.be/Rr4XtydU3oQ?si=4u-90s1G0cf65myK'
            tool1='Java'
            tool2='OpenGL'
            tool3='Shaders'
          ></IndividualProject>
          <div className='mid-column-divider column-divider'></div>
          <hr className='mid-row-divider row-divider'/>
          <IndividualProject
            title='Advent Of Code'
            text='Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like.". I participate in this annual challenge for enjoyment, competing with friends for fun, whilst improving my programming and problem solving skills.'
            image={AdventOfCode}
            git='https://github.com/AlexChapman18/Advent-of-code-2022'
            youtube=''
            tool1='Haskell'
            tool2='Java'
            tool3='Python'
          ></IndividualProject>
        </div>

        <hr className='central-row-divider'/>

        <div className='projects-grid'>
          <IndividualProject
            title='Grass Landers'
            text='Grass Landers is a multiplayer sprite-based game currently in development. The aim of this project is to learn and practice server-client networking and work with OpenGL. So far, a client can connect to the server and load/render the game map. The next stage involves refactoring for improved readability and adding multi-client support.'
            image={GrassLanders}
            git='https://github.com/AlexChapman18/Grass-Landers.git'
            youtube=''
            tool1='Java'
            tool2='OpenGL'
            tool3='Networking'
          ></IndividualProject>
          <div className='mid-column-divider column-divider'></div>
          <hr className='mid-row-divider row-divider'/>
          <IndividualProject
            title='Minecraft To Lighting'
            text='A modded Minecraft client that outputs sACN packets to control lighting fixtures via in-game commands. This project was created solely for fun, with no larger purpose. It helped improve my skills in Java and networking while allowing me to enjoy playing video games.'
            image={MinecraftTosACN}
            git='https://github.com/AlexChapman18/Minecraft-To-sACN.git'
            youtube='https://youtu.be/P5lE6-vAPsU?si=HgN7iDyYY9yvcoOu'
            tool1='Java'
            tool2='Networking'
            tool3='sACN'
          ></IndividualProject>
        </div>

        <hr className='central-row-divider'/>
      </div>
    </Layout>
  );
}

export default About;