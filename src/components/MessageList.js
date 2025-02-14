import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const MessageList = ({ messages, onEndTyping }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ListContainer>
      {messages.map((message) => (
        <Message key={message.id} isUser={message.isUser}>
          {message.isTyping ? (
            <TypeAnimation
              sequence={[
                `${message.isUser ? "User" : "AI"}: ${message.text}`,
                () => onEndTyping(message.id),
              ]}
              speed={50}
              repeat={0}
              cursor={false}
            />
          ) : (
            `${message.isUser ? "User" : "AI"}: ${message.text}`
          )}
        </Message>
      ))}
      <div ref={messagesEndRef} />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  padding: 10px 20px;
  background: ${(props) => (props.isUser ? "#2979ff" : "#f6f5f7")};
  color: ${(props) => (props.isUser ? "#fff" : "#333")};
  border-radius: ${(props) =>
    props.isUser ? "10px 10px 0 10px" : "10px 10px 10px 0"};
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
`;

export default MessageList;
