import React, { useState, useEffect } from "react";
import Typing from "react-type-animation";
import styled from "styled-components";
import MessageList from "../../components/MessageList";
import MessageForm from "../../components/MessageForm";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      { text: `당신이 입력한 메시지는 : "${message}"`, isUser: false },
    ]);
  };

  return (
    <MessageWrapper>
      <MessageContainer>
        <MessageHead>Chat App</MessageHead>

        <MessageBody>
          <MessageList messages={messages} />
        </MessageBody>

        <MessageFooter>
          <MessageForm onSendMessage={handleSendMessage} />
        </MessageFooter>
      </MessageContainer>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const MessageContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
`;

const MessageHead = styled.div`
  padding: 20px 0;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background-color: #f6f5f7;
`;

const MessageBody = styled.div`
  padding: 20px;
  max-height: 50vh;
  overflow: hidden;
  overflow-y: auto;
`;

const MessageFooter = styled.div``;

export default Home;
