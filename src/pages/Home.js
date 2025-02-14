import React, { useState } from "react";
import styled from "styled-components";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";

const Home = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { id: Date.now(), text: message, isUser: true },
      {
        id: Date.now(),
        text: `입력한 메시지: "${message}"`,
        isUser: false,
        isTyping: true,
      },
    ];
    setMessages(newMessages);
  };

  const handleEndTyping = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, isTyping: false } : msg
      )
    );
  };

  return (
    <Wrapper>
      <Container>
        <Header>Chat App</Header>
        <Body>
          <MessageList messages={messages} onEndTyping={handleEndTyping} />
        </Body>
        <Footer>
          <MessageForm onSendMessage={handleSendMessage} />
        </Footer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
`;

const Header = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background: #f6f5f7;
`;

const Body = styled.div`
  padding: 20px;
  max-height: 50vh;
  overflow-y: auto;
`;

const Footer = styled.div``;

export default Home;
