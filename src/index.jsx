import React from 'react';
import { render } from 'react-dom';

const App = (props) => (
  <div className="hello">Hello, React</div>
);

render(
  <App />,
  document.getElementById('app_root')
);
