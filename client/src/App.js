import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import ProfilePage from './components/Profile/Profile';
import { REQUEST_GET_ALL_USER } from './store/user/user.type';

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type: REQUEST_GET_ALL_USER})
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/user/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
