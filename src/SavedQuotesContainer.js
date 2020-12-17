import React from "react";
import dayjs from "dayjs";
import styled from "styled-components/macro";

export default function SavedQuotesContainer({ data, deleteQuotes }) {
  return (
    <div>
      {data.map((moin) => (
        <BoxWrapper>
          <StyledX id={moin.id} onClick={deleteQuotes}>
            X
          </StyledX>
          <p>{dayjs(moin.date).format("DD, MMM. 'YYYY")}</p>
          <p>{moin.quote}</p>
        </BoxWrapper>
      ))}
    </div>
  );
}
const StyledX = styled.p`
  float: right;
  font-family: monospace;
  font-size: 2em;
  font-weight: 900;
`;

export const BoxWrapper = styled.div`
  padding: 1em;
  margin: 1em;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.26);
`;
