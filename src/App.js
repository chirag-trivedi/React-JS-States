import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Text from './components/Text';
import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div>
    <Content/>
    <Text/>
    </div>
  );
  }
}

export default App;
