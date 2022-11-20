import './App.css';

import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    <div className="App">
      <header></header>
      <main>
        {
          code ? 
          <Dashboard code={code} /> :
          <Login />
        }
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
