import './main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Page from './Page';

function App() {
    return (
        <div className='app'>
          <Header />
          <Page />
        </div>
 
    )
}





const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App />);