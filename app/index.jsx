import React from 'react';
import TwitterButton from './images/twitter-button.png'

const PreactApp = () => (
  <div className="preact">
    <div className="heading">Preact App</div>
    <a href="http://127.0.0.1:3001/login/twitter/">
      <img src={TwitterButton} alt="Twitter Login Button"/>
    </a>
  </div>
);

React.render(
  <PreactApp />,
  document.getElementById('app')
);
