import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Home, createDeck, decks, study, cards } from './pages'
import Home from './pages/Home.js'
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          {/* <Route exact path='/:userId/decks' component={decks} />
          <Route exact path='/:userId/createDeck' component={createDeck} />
          <Route exact path='/:deckId/study' component={study} />
          <Route exact path='/:deckId/cards' component={cards} /> */}
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
