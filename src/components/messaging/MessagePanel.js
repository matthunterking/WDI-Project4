import React from 'react';

const MessagePanel = ({ messages, handleChange, handleSubmit }) => {

  return (
    <div>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <div className='columns'>
            <div className='column is-four-fifths'>
              <textarea className="textarea" onChange={handleChange} name="content" placeholder="message"/>
            </div>
            <div className='column is-one-fifth has-text-centered'>
              <button className="button submitButton">Send</button>
            </div>
          </div>
        </form>
      </div>
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
    </div>
  );
};

export default MessagePanel;
