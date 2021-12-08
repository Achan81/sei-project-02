import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Nav from './components/common/Nav'

import CharacterIndex from './components/characters/CharacterIndex'
import CharacterShow from './components/characters/CharacterShow'
import ProfileCompare from './components/characters/ProfileCompare'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
  
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/characters/:characterId">
          <CharacterShow />  
        </Route>

        <Route path="/characters">
          <CharacterIndex />
        </Route>

        <Route path="/ProfileCompare">
          <ProfileCompare />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}


export default App
