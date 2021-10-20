import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login'
import AuthProvider from './context/AuthProvider';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import AboutUs from './components/AboutUs/AboutUs';
import OurDoctors from './components/OurDoctors/OurDoctors';
import ReadMore from './components/Home/Service/ReadMore/ReadMore';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <div className="App">
    <AuthProvider>
      
    <BrowserRouter>
            <Header />
             <Switch>
               <Route exact path="/">
                 <Home></Home>
               </Route>
               <Route  path="/home">
                 <Home></Home>
               </Route>
               <Route path="/about">
                 <AboutUs></AboutUs>
               </Route>
               <PrivateRouter path="/services/:serviceId">
                 <ReadMore></ReadMore>
               </PrivateRouter>
               <Route path="/doctors">
                 <OurDoctors></OurDoctors>
               </Route>
               <Route  path="/login">
                  <Login></Login>
                </Route>
                 <Route path="*">
                      <Notfound />
                 </Route>
             </Switch>
             <Footer></Footer>
         </BrowserRouter>
    </AuthProvider>
        
    </div>
  );
}

export default App;
