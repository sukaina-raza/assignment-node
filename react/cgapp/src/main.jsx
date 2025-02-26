import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header/header.jsx'




const Main = () => {
  return (
    <main className="main">
      <h1> HELLO WORLD</h1>
      <p>This is my main content</p>
      <button onClick={() => alert("Button Clicked!")}>Click Me</button>
    </main>
  );
};

export default Main;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
