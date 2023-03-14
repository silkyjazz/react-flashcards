import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/home.js";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Study from "./pages/study";
import Cards from "./pages/cards";
import Decks from "./pages/decks";
import Create from "./pages/createDeck";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  console.log("======= line 27 app.js ===headers has===", headers)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
            <Route exact path="/" element={<Home />} />
            {/* get decks by user ID */}
            <Route path="/:username/decks" element={<Decks />} />

            {/* <Route path="/:username/createDeck" element={<Create />} /> */}
            {/* get cards by deck ID */}
            {/* card modification using modal instead of a new page */}
            <Route path="/:deckId/cards" element={<Cards />} />
            <Route path="/:deckId/study" element={<Study />} />

            {/* FOR TESTING  */}
            {/* <Route exact path='/study' element={<Study/>} /> */}
            {/* <Route path="/create" element={<Create />} /> */}
            {/* <Route  path="/cards" element={<Cards/>} /> */}
            {/* <Route  path="/decks" element={<Decks/>} /> */}

            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
