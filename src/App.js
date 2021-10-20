import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main';

const App = (props) => {
  return(
    <div className="main">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App;
