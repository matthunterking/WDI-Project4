import React from 'react';

const Compatibility = ({ userinterests, currentuserinterests}) => {

  // {Object.values(user.interests).filter(interest => Object.values(this.state.currentUser.interests).includes(interest)).length*2}0% match
  console.log('user interest', userinterests);
  console.log('current interest', currentuserinterests);

  return (
    <div>
      <p>You are a match!</p>
    </div>
  );

};

export default Compatibility;
