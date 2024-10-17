
import React,{useState,useEffect} from 'react';
import { BallTriangle } from 'react-loader-spinner';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import About from './component/About';
import Services from './component/Services';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {

  const [loading, setLoading] = useState(false);

useEffect(() => {
 setLoading(true)
 setTimeout(() => {
  setLoading(false)
 }, 1000);
}, [2000]);
  return (
    <div className="App">
      {
  loading ? <div className='bg-slate-900 h-[100vh] flex justify-center items-center'>
    <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  arialabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
  />
  </div>
  :
  <div className="bg-slate-900">
  
<Navbar/>
<Banner/>
<About/>
<Services/>
<Projects/>
<Contact/>
<Footer/>


   </div>
}
    </div>
  );
}

export default App;
