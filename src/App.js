import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ComicPage from './pages/comic/ComicPage';
import NovelPage from './pages/novel/NovelPage';
import LastestPage from './pages/latest/LastestPage';
import MyListPage from './pages/mylist/MyListPage';

import LoginPage from './pages/login/LoginPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/comic" component={ComicPage} />
          <Route path="/novel" component={NovelPage} />
          <Route path="/latest" component={LastestPage} />
          <Route path="/my-list" component={MyListPage} />
          
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
