import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Main from './Pages/Main';

const App = (props) => {
  return(
    <div className="main">
      <Router>
        <Main/>
      </Router>
    </div>
  )
}

export default App;
