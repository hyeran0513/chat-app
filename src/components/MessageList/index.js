import React from "react";
import styled from "styled-components";

const MessageList = ({ messages }) => {
  return (
    <MessageListContainer>
      {messages.map((message) => (
        <MessageBox isUser={message.isUser}>User: {message.text}</MessageBox>
      ))}
    </MessageListContainer>
  );
};

const MessageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MessageBox = styled.div`
  padding: 20px;
  background: ${(props) => (props.isUser ? "#2979ff" : "#f6f5f7")};
  color: ${(props) => (props.isUser ? "#fff" : "#333")};
  border-radius: ${(props) =>
    props.isUser ? "10px 10px 0 10px" : "10px 10px 10px 0"};
  margin: 5px 0;
  max-width: 60%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
`;

export default MessageList;
