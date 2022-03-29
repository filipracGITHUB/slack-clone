import React from "react";
import styled from "styled-components";

function Message({ message, user, timestamp, userImage }) {
  let unix_timestamp = timestamp;

  const date = new Date(unix_timestamp * 1000);

  const hours = date.getHours();

  const minutes = "0" + date.getMinutes();

  const seconds = "0" + date.getSeconds();

  const formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  console.log(date);

  return (
    <MessageContainer>
      <img src={userImage} />
      <MessageInfo>
        <h4>
          {user} <span>{formattedTime}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
