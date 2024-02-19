import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const[mode,setMode] = useState('dark')
  const[btn,setBtn] = useState('Enable light Mode ')
  const toggleMode =() => {
    if(mode === 'dark') {
      setMode('light');
      setBtn('Enable dark Mode');
      document.body.style.backgroundColor ='white';
  }
  else{
    setMode('dark');
    setBtn(' Enable Lignt Mode');
    document.body.style.backgroundColor ='black';

    
    
  }
}
  return (
    <>
    <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} btn={btn} />
    <TextForm mode={mode}  heading = "Enter text here to analyse"/>
    {/* <About/> */}
    </>
  );
}

export default App;
