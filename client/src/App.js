import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { home, createDeck, decks, study, cards } from './pages'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/:userId/decks' component={decks} />
          <Route exact path='/:userId/createDeck' component={createDeck} />
          <Route exact path='/:deckId/study' component={study} />
          <Route exact path='/:deckId/cards' component={cards} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
