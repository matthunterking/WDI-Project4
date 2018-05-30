import React from 'react';

const MessageSent = ({ handleSentClick }) => {

  return (
    <div>
      <h1>Message Sent!!!</h1>
      <button onClick={handleSentClick}>Close</button>
    </div>
  );
};

export default MessageSent;
