import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

  // 메시지 배열에 타이핑 중인 메시지가 있을 경우 currentTypingId를 설정
  useEffect(() => {
    if (currentTypingId === null) {
      const nextTypingMessage = messages.find(
        (msg) => !msg.isUser && msg.isTyping
      );

      if (nextTypingMessage) {
        setCurrentTypingId(nextTypingMessage.id);
      }
    }
  }, [messages, currentTypingId]);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const typingMessageId = Date.now();

    const newMessages = [
      ...messages,
      { id: Date.now(), text: message, isUser: true },
      {
        id: typingMessageId,
        text: `당신이 입력한 메세지는 : "${message}"`,
        isUser: false,
        isTyping: true,
      },
    ];

    setMessages(newMessages);
  };

  // 타이핑 종료 처리
  const handleEndTyping = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, isTyping: false } : msg
      )
    );

    setCurrentTypingId(null);
  };

  return (
    <Wrapper>
      <Container>
        <Header>Chat App</Header>
        <Body>
          <MessageList
            messages={messages}
            onEndTyping={handleEndTyping}
            currentTypingId={currentTypingId}
          />
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
  margin: 20px 0;
  padding: 0 20px;
  height: 50vh;
  overflow-y: auto;
`;

const Footer = styled.div``;

export default Home;
