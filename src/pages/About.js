// ---- Imports ----
// Styles
import './About.scss';

// Components
import Layout from '../components/Layout'

// Images
import bio_pic from '../images/Alex_holiday.png'

function About() {
  return (
    <Layout>
      <div className='biography'>
        <div className='biography-text'>
          <h1 className='biography-text-title'>Biography</h1>
          <h2 className='biography-text-subTitle'>Masters Computer Science Student at The University of Sheffield</h2>
          <p className='biography-text-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
          <p className='biography-text-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet facilisis magna etiam tempor. Euismod elementum nisi quis eleifend. Mauris augue neque gravida in fermentum. In metus vulputate eu scelerisque felis imperdiet proin. At auctor urna nunc id cursus metus aliquam eleifend. Enim blandit volutpat maecenas volutpat. Sit amet nisl purus in mollis nunc sed id. Sit amet nisl purus in mollis nunc sed id. Sit amet nisl purus in mollis nunc sed id.
          </p>
        </div>
        <div className='biography-image'>
          <img className='biography-image-image' src={bio_pic} alt="Alex_Holiday" />
          <div className='biography-image-blank'></div>
        </div>
      </div>
    </Layout>
  );
}

export default About;