import React from 'react';

const MessageSelection = ({ currentUser, handleSelection }) => {

  return (
    <div>
      {currentUser.acceptedMatchRequests.map(user =>
        <div key={user.userId.id}>
          <div className="columns"
            onClick={handleSelection}
          > 
            <div className="column is-one-quarter" >
              <img id={user.userId._id} src={user.userId.image} />
            </div>
            <div className="column is-one-half" >
              <p id={user.userId._id} className="is-size-4 darktext featureText">{user.userId.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageSelection;
