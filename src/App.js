// import logo from './logo.svg';
import './Appa.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// let name = "Harry3";
function App() {
//   return (

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
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
       </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}
export default App;

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
