import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
 import {ToastContainer} from 'react-toastify'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/Log/login';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Navbar from './component/Nav/Navbar';

import Image from './component/Images/Image';
import AdminLayout from './Admin/Layout/AdminLayout';
import AgencyLayout from './Agency/Layout/AgencyLayout';
import AdminAgency from './Admin/Adminagency/AdminAgency';
import AdminGuide from './Admin/AdminGuide/AdminGuide';
import AgencyGuide from './Agency/AgencyGuide/AgencyGuide';
import AgencyPackage from './Agency/Agencypackage/AgencyPackage';
import Hotel from './Agency/Hotel/Hotel';
import Register from './component/Register/Register';
import Viewagency from './Admin/Adminagency/Viewagency';
import Viewguide from './Admin/AdminGuide/Viewguide';
import Viewpackage from './Agency/Agencypackage/Viewpackage';
import Viewhotel from './Agency/Hotel/Viewhotel';
import ViewGuide from './Agency/AgencyGuide/ViewGuide';
import AdminProfile from './Admin/UserProfile/Profile';
import Message from './Admin/Message/Messge';
import UpdateAgency from './Admin/Adminagency/UpdateAgency';
import UserLayout from './User/Layout/UserLayout';
import UpdatedGuide from './Admin/AdminGuide/UpdateGuide';
import UpdateHotel from './Agency/Hotel/UpdateHotel';
import Updateguide from './Agency/AgencyGuide/Updateguide';
import Updatepackage from './Agency/Agencypackage/UpadatePackage';
import Updateprofile from './Admin/UserProfile/Updateprofile';
import UserPackage from './User/UserPackage/UserPackage';
import UserGuide from './User/UserGuide/UserGuide';
import UserHotel from './User/UserHotel/UserHotel';
import UserAgency from './User/UserAgency/UserAgency';
import Adminregister from './component/AdminLog/Adminregister';
import AdminLogin from './component/AdminLog/AdminLogin';
import Agencyregister from './component/AgencyLog/Agencyregister';
import AgencyLogin from './component/AgencyLog/AgencyLogin';

import Logout from './component/Banner/Logout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ToastContainer/> 
          <BrowserRouter>
     <Routes> 
        <Route path='/' element={<Navbar/>}>
         <Route index element={<App/>}/>
         <Route path='About' element={<About/>}/>
       <Route path='Image' element={<Image/>}/>
         <Route path='Contact'element={<Contact/>}/>
         <Route path='Log' element={<Login/>}/> 
         <Route path='Register' element={<Register/>}/>
          <Route path='packege' element={<Updatepackage/>}/>
       </Route> 
        </Routes> 
        </BrowserRouter>  

        <BrowserRouter>
     <Routes> 
        <Route path='/admin' element={<AdminLayout/>}> 
         <Route path='Adminagency' element={<AdminAgency/>}/>
         <Route path='AdminGuide' element={<AdminGuide/>}/>  
         <Route path='Viewguide' element={<Viewguide/>}/>  
         <Route path='Image' element={<Image/>}/>
         <Route path='Viewagency'element={<Viewagency/>}/>
         <Route path='AdminProfile' element={<AdminProfile/>}/>
         <Route path='Message' element={<Message/>}/>
         {/* <Route path='Log' element={<Login/>}/> */}
         <Route path='updateagency/:id' element={<UpdateAgency/>}/> 
         <Route path='updateguide/:id' element={<UpdatedGuide/>}/> 
         <Route path='updateadmin/:id' element={<Updateprofile/>}/>
       </Route> 
        </Routes> 
        </BrowserRouter>  
         

         <BrowserRouter>
     <Routes> 
        <Route path='/agency' element={<AgencyLayout/>}>
         <Route path='AgencyGuide' element={<AgencyGuide/>}/>
         <Route path='AgencyPackage' element={<AgencyPackage/>}/>  
         <Route path='Hotel' element={<Hotel/>}/>
         <Route path='viewpackage'element={<Viewpackage/>}/>
         <Route path='viewhotel' element={<Viewhotel/>}/>
         <Route path='ViewGuide' element={<ViewGuide/>}/>
<Route path='updatehotel/:id' element={<UpdateHotel/>}/>
<Route path='updateguide/:id' element={<Updateguide/>}/>
<Route path='updatepackage/:id' element={<Updatepackage/>}/>
       </Route> 
        </Routes> 
        </BrowserRouter>   


<BrowserRouter>
<Routes>
  <Route path='/user' element={<UserLayout/>}>
    <Route path='userpackage' element={<UserPackage/>}/>
    <Route path='userguide' element={<UserGuide/>}/>
    <Route path='userhotel'element={<UserHotel/>}/>
    <Route path='useragency'element={<UserAgency/>}/>
  </Route>
  </Routes>
  </BrowserRouter>

<BrowserRouter>
<Routes>
  <Route path='/Adminregister' element={<Adminregister/>}>
  
  </Route></Routes>

  <Routes>
    <Route path='/AdminLogin' element={<AdminLogin/>}></Route> 
    </Routes>
    
    
    <Routes>
    <Route path='/Logout' element={<Logout/>}></Route> 
    </Routes>
    </BrowserRouter>

<BrowserRouter>
<Routes>
<Route path='/agencyregister' element={<Agencyregister/>}></Route> 
    </Routes>
    
    <Routes>
    <Route path='/AgencyLogin' element={<AgencyLogin/>}></Route> </Routes></BrowserRouter>
          
     
  </React.StrictMode>
);


reportWebVitals();
