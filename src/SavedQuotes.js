import React from "react";
import SavedQuotesContainer from "./SavedQuotesContainer";

export default function SavedQuotes(savedQuotes, deleteQuotes) {
  return (
    <div>
      <SavedQuotesContainer data={savedQuotes} deleteQuotes={deleteQuotes} />
    </div>
  );
}
