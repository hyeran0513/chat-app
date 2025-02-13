import React from "react";
import styled from "styled-components";

const MessageList = () => {
  return (
    <>
      <MessageBox isSent>User: Hello</MessageBox>
      <MessageBox>AI: Hello</MessageBox>
    </>
  );
};

const MessageBox = styled.div`
  padding: 20px;
  background: ${(props) => (props.isSent ? "#2979ff" : "#f6f5f7")};
  color: ${(props) => (props.isSent ? "#fff" : "#333")};
  border-radius: ${(props) =>
    props.isSent ? "10px 10px 0 10px" : "10px 10px 10px 0"};
  margin: 5px 0;
  max-width: 60%;
  align-self: ${(props) => (props.isSent ? "flex-end" : "flex-start")};
`;

export default MessageList;
