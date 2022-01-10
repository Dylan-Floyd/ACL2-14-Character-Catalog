import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterDetail from './views/Characters/CharacterDetail';
import CharacterList from './views/Characters/CharacterList';
import Home from './views/Home/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <CharacterDetail />
      </Route>
      <Route exact path="/characters">
        <CharacterList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
