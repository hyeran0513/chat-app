import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <MessageListContainer>
      {messages.map((message, index) => (
        <MessageBox
          key={message.id}
          isUser={message.isUser}
          ref={index === messages.length - 1 && messagesEndRef}
        >
          {message.isUser ? "User" : "AI"}: {message.text}
        </MessageBox>
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
  padding: 10px 20px;
  background: ${(props) => (props.isUser ? "#2979ff" : "#f6f5f7")};
  color: ${(props) => (props.isUser ? "#fff" : "#333")};
  border-radius: ${(props) =>
    props.isUser ? "10px 10px 0 10px" : "10px 10px 10px 0"};
  margin: 5px 0;
  max-width: 60%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
`;

export default MessageList;
