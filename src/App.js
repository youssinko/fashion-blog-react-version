
import Main from './components/main';
import Nav from './components/Nav';
import { Route , Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    
    <div className="App">
       
        <Main />
        {/* <Routes>
          <Route>
          <Route path = "/woman" element ={<Main />} />
          <Route path="/men" element={<Main />} />
          <Route path="/tips" element={<Main />} />
          </Route>
        </Routes> */}
    </div>
    
  );
}

export default App;
