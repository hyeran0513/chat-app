import React, { useState, useEffect } from "react";
import Typing from "react-type-animation";
import styled from "styled-components";
import MessageList from "../../components/MessageList";
import MessageForm from "../../components/MessageForm";

const Home = () => {
  const [message, setMessage] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

  return (
    <MessageWrapper>
      <MessageContainer>
        <MessageHead>Chat App</MessageHead>

        <MessageBody>
          <MessageList />
        </MessageBody>

        <MessageFooter>
          <MessageForm />
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 20px;
`;

const MessageFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 20px;
  border-top: 1px solid #d7d7d7;
`;

export default Home;
