import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyApp from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';


const App = () => (
  <MuiThemeProvider>
    <MyApp />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
