// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/home.js'
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Study from './pages/study';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />     
          <Route exact path='/study' element={<Study/>} />
          {/* <Route exact path='/:userId/decks' component={decks} />
          <Route exact path='/:userId/createDeck' component={createDeck} />
     
          <Route exact path='/:deckId/cards' component={cards} /> */}
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
        <Footer />
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
