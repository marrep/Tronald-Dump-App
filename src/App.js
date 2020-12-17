import React from "react";
import styled from "styled-components/macro";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import useHooks from "./hooks/useHooks";
import Navigation from "./Navigation";
import Quotes from "./Quotes";
import SavedQuotes from "./SavedQuotes";

export default function App() {
  const {
    deleteQuotes,
    getNewQuoteNow,
    saveThisQuote,
    savedQuotes,
    quotes,
  } = useHooks();

  return (
    <Wrapper>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/quotes">
          <Quotes
            quotes={quotes}
            getNewQuoteNow={getNewQuoteNow}
            saveThisQuote={saveThisQuote}
          />
        </Route>
        <Route exact path="/savedquotes">
          <SavedQuotes savedQuotes={savedQuotes} deleteQuotes={deleteQuotes} />
        </Route>
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  time {
    font-weight: bold;
  }

  blockquote {
    font-size: 1.5em;
    text-align: center;
  }
`;
