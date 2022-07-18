import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './title';
import img from './6.jpeg';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>可视化简历平台</div>
          <div>这是 Electron + React </div>
          <Title text="配置完成" styles={{ background: 'red' }} />
          <img src={img} />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
