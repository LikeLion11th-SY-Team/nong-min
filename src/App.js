import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './View/Login';
import LoginHandler from './Component/LoginHandler';

function App() {
  return (
    <div className="App">
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path="/login/oauth/callback/kakao" element={<LoginHandler/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
