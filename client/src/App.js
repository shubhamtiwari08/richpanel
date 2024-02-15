 
import {  Route, Routes } from 'react-router';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ConnectFacebook from './Pages/ConnectFacebook';
import ConnectedFacebook from './Pages/ConnectedFacebook';
import Conversation from './Pages/Conversation';
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">
   


 
      <Routes>
         <Route path='/' element={<Landing/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/connect-facebook' element={<ConnectFacebook/>}/>
         <Route path='/connect-facebook/connected' element={<ConnectedFacebook/>}/>
         <Route path='/connect-facebook/connected/messages' element={<Conversation/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
