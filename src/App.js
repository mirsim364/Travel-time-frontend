import './App.css'
import Ban from './component/Banner/Ban';
import About from './component/About/About';
import Image from './component/Images/Image';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import UserPackage from './User/UserPackage/UserPackage';

function App() {
  return (
    <div>
    <div className='bg'>
      <Ban/>
     </div>
      <About/>
      {/* <Image/> */}
      <UserPackage/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
