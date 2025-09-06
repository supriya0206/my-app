// import logo from './logo.svg';
import About from './components/About';
import './Appa.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes, Route,
} from "react-router-dom";


function App() {
  const [ mode, setMode] = useState('light'); // wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null); // object

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  // }

   const toggleMode = ()=>{ // cls
    removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+ cls)
     if(mode === 'light'){
     setMode('dark') ;
     document.body.style.backgroundColor = '#083051ff'
     showAlert("Dart mode has been enabled", "succcess")
    //  document.title='TextUtils-Dark Mode';
  }
     else{
     setMode('light');
     document.body.style.backgroundColor = 'white'
     showAlert("Light mode has been enabled", "succcess")
    //  document.title='TextUils-Light Mode';
}
  }
  return (
    <>
   {/* <Navbar title = "TextUtils" aboutText="About TextUtils" /> */}
   {/* <Navbar/> */}

   <Router>
   <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} />
   <div className="container my-3">
    <Routes>
    
    {/* /user --> component 1 
    /user/home --> component 2*/}
          <Route exact path="/about" element={<About mode={mode} />}/>
           <Route exact path="/" element={<TextForm showAlert={showAlert} heading = " Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"  mode={mode}/>}/> 
           
           {/* <TextForm showAlert={showAlert} heading = "Enter the text to analyze below"  mode={mode}/>  */}
           </Routes> 
    
    </div>
     </Router> 
    
    </>
  );
}
export default App;
  // "homepage": "http://supriya0206.github.io/my-app",
{/* <TextForm showAlert={showAlert} heading = "Enter the text to analyze below"  mode={mode}/>  */}

//   return (
// let name = "Harry3";
//  <>
//  <nav>
//   <li>Home</li>
//   <li>About</li>
//   <li>Contact</li>
// </nav>
// <div classNameName = "container">
//   <h1>Hello {name}</h1>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum recusandae sapiente eum quos eaque necessitatibus error optio ab nemo. Est doloremque impedit rerum. Magnam culpa incidunt odio illo officia quisquam at nobis, quo iure.</p>
// </div>
//  </>
  // );

// import logo from './logo.svg';
// import './App.css';

// function App(){
//   return(
//     <div className="App">
//       <headr className="App-header">
//         <img src={logo} className= "App-logo" alt="logo"/>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//           Learn React With Harry
//         </a>
//       </headr>
//     </div>
//   );
// }
// export default App;
