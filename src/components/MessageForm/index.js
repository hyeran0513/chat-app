import React, { useState } from "react";
import styled from "styled-components";

const MessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <MessageFormContainer onSubmit={handleSubmit}>
      <SearchBox>
        <SearchInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력해 주세요."
        />
      </SearchBox>

      <SearchButton type="submit">Send</SearchButton>
    </MessageFormContainer>
  );
};

const MessageFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 20px;
  border-top: 1px solid #d7d7d7;
`;

const SearchBox = styled.div`
  flex: 1;
  padding: 0 10px;
  height: 34px;
  background-color: #f6f5f7;
  border: 1px solid #f6f5f7;
  border-radius: 30px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  background-color: inherit;

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
