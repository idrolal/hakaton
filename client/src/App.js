import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { REQUEST_GET_ALL_USER } from './store/user/user.type';

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type: REQUEST_GET_ALL_USER})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
