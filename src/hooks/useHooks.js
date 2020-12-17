import { useEffect, useState } from "react";
import loadLocally from "../lib/loadLocally";
import saveLocally from "../lib/saveLocally";
import { v4 as uuidv4 } from "uuid";

export default function useHooks() {
  const [quotes, setQuotes] = useState({
    date: null,
    quote: null,
    id: null,
  });
  const [toggleGetQuote, setToggleGetQuote] = useState(false);
  const [savedQuotes, setSavedQuotes] = useState(
    loadLocally("savedQuotes") ?? []
  );

  function getQuotes() {
    return fetch("https://api.tronalddump.io/random/quote").then((res) =>
      res.json()
    );
  }

  useEffect(() => {
    getQuotes().then((quotes) =>
      setQuotes({
        date: quotes.appeared_at,
        quote: quotes.value,
      })
    );
  }, [toggleGetQuote]);

  function saveThisQuote() {
    setSavedQuotes([
      ...savedQuotes,
      { date: quotes.date, quote: quotes.quote, id: uuidv4() },
    ]);
    console.log(savedQuotes);
  }

  useEffect(() => {
    saveLocally("savedQuotes", savedQuotes);
  }, [savedQuotes]);

  function getNewQuoteNow() {
    setToggleGetQuote(!toggleGetQuote);
  }

  function deleteQuotes(event) {
    const index = savedQuotes.findIndex(
      (element) => element.id === event.target.id
    );
    console.log(index);
    setSavedQuotes([
      ...savedQuotes.slice(0, index),
      ...savedQuotes.slice(index + 1),
    ]);
  }

  return {
    deleteQuotes,
    getNewQuoteNow,
    saveThisQuote,
    savedQuotes,
    quotes,
  };
}
