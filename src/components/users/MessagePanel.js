import React from 'react';

const MessagePanel = ({ messages, handleChange, handleSubmit }) => {

  return (
    <div>
      <div>
        {messages.map(message =>
          <div key={message._id} className="box">
            <article className="media">
              <div className="media-left">
                <div style={{ backgroundImage: `url(${message.from.image})`}} className="messageprofile"/>
              </div>
              <div className="media-content">
                <div className="content">
                  <div>
                    <strong>{message.from.name}</strong>
                    <br />
                    <p>{message.content}</p>
                    <p>{message.sentAtRelative}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

        )}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} name="content" placeholder="message"/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MessagePanel;
