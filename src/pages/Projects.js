// ---- Imports ----
// Styles
import './Projects.scss';

// Components
import Layout from '../components/Layout'
import IndividualProject from "../components/Project";

// Images
import UnPhoneLightingRemote from '../images/UnPhone-Lighting-Remote.png'
import sACNToPixelmesh from '../images/sACN-To-Pixelmesh.png'

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
            text='Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids. Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids.'
            image={UnPhoneLightingRemote}
            git='https://github.com/KushBharakhada/UnPhone-Foundry-Light-Controller'
            // git=''
            // YouTube='https://youtu.be/TNZxqrxVWRk'
            youtube=''
            tool1='IOT'
            tool2='C++'
            tool3='Art-Net'
          ></IndividualProject>
          <div className='mid-column-divider column-divider'></div>
          <hr className='mid-row-divider row-divider'/>
          <IndividualProject
            title='sACN To Pixelmesh'
            text='Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids. Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids.'
            image={sACNToPixelmesh}
            git=''
            youtube='https://youtu.be/TNZxqrxVWRk'
            tool1='Python'
            tool2='OpenCV'
            tool3='TensorFlow'
          ></IndividualProject>
        </div>
        <hr className='central-row-divider'/>
        <div className='projects-grid'>
          <IndividualProject
            title='UnPhone Lighting Remote'
            text='Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids. Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids.'
            image={UnPhoneLightingRemote}
            git='https://github.com/KushBharakhada/UnPhone-Foundry-Light-Controller'
            youtube='https://youtu.be/TNZxqrxVWRk'
            tool1='Python'
            tool2='OpenCV'
            tool3='TensorFlow'
          ></IndividualProject>
          <div className='mid-column-divider column-divider'></div>
          <hr className='mid-row-divider row-divider'/>
          <IndividualProject
            title='sACN To Pixelmesh'
            text='Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids. Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids.'
            image={sACNToPixelmesh}
            git='https://github.com/KushBharakhada/UnPhone-Foundry-Light-Controller'
            youtube='https://youtu.be/TNZxqrxVWRk'
            tool1='Python'
            tool2='OpenCV'
            tool3='TensorFlow'
          ></IndividualProject>
        </div>
        {/*<div className='projects-grid'>*/}
        {/*  <IndividualProject*/}
        {/*    title='UnPhone Lighting Remote'*/}
        {/*    text='Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids. Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids.'*/}
        {/*    image={UnPhoneLightingRemote}*/}
        {/*    git='https://github.com/KushBharakhada/UnPhone-Foundry-Light-Controller'*/}
        {/*    YouTube='https://youtu.be/TNZxqrxVWRk'*/}
        {/*    tool1='Python'*/}
        {/*    tool2='OpenCV'*/}
        {/*    tool3='TensorFlow'*/}
        {/*  ></IndividualProject>*/}
        {/*  <div className='column-divider'></div>*/}
        {/*  <IndividualProject*/}
        {/*    title='sACN To Pixelmesh'*/}
        {/*    text='Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids. Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids.'*/}
        {/*    image={sACNToPixelmesh}*/}
        {/*    git='https://github.com/KushBharakhada/UnPhone-Foundry-Light-Controller'*/}
        {/*    YouTube='https://youtu.be/TNZxqrxVWRk'*/}
        {/*    tool1='Python'*/}
        {/*    tool2='OpenCV'*/}
        {/*    tool3='TensorFlow'*/}
        {/*  ></IndividualProject>*/}
        {/*</div>*/}
        {/*<hr className='lineSeparator'/>*/}
        {/*        <div className='projects-grid'>*/}
        {/*  <IndividualProject*/}
        {/*    title='UnPhone Lighting Remote'*/}
        {/*    text='Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids. Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids.'*/}
        {/*    image={UnPhoneLightingRemote}*/}
        {/*    git='https://github.com/KushBharakhada/UnPhone-Foundry-Light-Controller'*/}
        {/*    YouTube='https://youtu.be/TNZxqrxVWRk'*/}
        {/*    tool1='Python'*/}
        {/*    tool2='OpenCV'*/}
        {/*    tool3='TensorFlow'*/}
        {/*  ></IndividualProject>*/}
        {/*  <div className='column-divider'></div>*/}
        {/*  <IndividualProject*/}
        {/*    title='sACN To Pixelmesh'*/}
        {/*    text='Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids. Solving sudokus using computer vision to extract boards from unprocessed input images and developing a backtracking algorithm to furthermore solve the grids.'*/}
        {/*    image={sACNToPixelmesh}*/}
        {/*    git='https://github.com/KushBharakhada/UnPhone-Foundry-Light-Controller'*/}
        {/*    YouTube='https://youtu.be/TNZxqrxVWRk'*/}
        {/*    tool1='Python'*/}
        {/*    tool2='OpenCV'*/}
        {/*    tool3='TensorFlow'*/}
        {/*  ></IndividualProject>*/}
        {/*</div>*/}
        {/*<hr className='lineSeparator'/>*/}
      </div>
    </Layout>
  );
}

export default About;