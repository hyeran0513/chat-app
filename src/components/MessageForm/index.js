import React from "react";
import styled from "styled-components";

const MessageForm = () => {
  return (
    <>
      <SearchBox>
        <SearchInput />
      </SearchBox>

      <SearchButton>Send</SearchButton>
    </>
  );
};

const SearchBox = styled.div`
  flex: 1;
  padding: 0 10px;
  height: 34px;
  border: 1px solid #333;
  border-radius: 30px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  min-width: 90px;
  height: 34px;
  background: #2979ff;
  color: #fff;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
`;

export default MessageForm;
