import React from 'react';

const Messages = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>Messages!!</h1>
      {user.messages.map(message =>
        <div key={message._id} className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <div style={{ backgroundImage: `url(${message.from.image})`}} className="profilePicSmall"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <div>
                  <strong>{message.from.name}</strong>
                  <br />
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          </article>
        </div>

      )}
    </div>
  );
};

export default Messages;
