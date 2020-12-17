import React from "react";
import styled from "styled-components/macro";
import dayjs from "dayjs";

export default function Quotes(quotes, getNewQuoteNow, saveThisQuote) {
  return (
    <div>
      <time>{dayjs(quotes.date).format("DD, MMM. 'YYYY")}</time>
      <blockquote>"{quotes.quote}"</blockquote>
      <TrumpButtons type="button" onClick={saveThisQuote}>
        save quotes
      </TrumpButtons>
      <TrumpButtons onClick={getNewQuoteNow}>get random quote</TrumpButtons>
    </div>
  );
}

const TrumpButtons = styled.button`
  display: block;
  background-color: #dc5539;
  color: white;
  font-size: 1em;
  width: 200px;
  margin: 10px;
  padding: 0.5em 2em;
  text-align: center;
`;
