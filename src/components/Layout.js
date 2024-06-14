import './Layout.scss';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({children}) => {
 return (
  <div className={'flex-wrapper'}>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
 )
}

export default Layout