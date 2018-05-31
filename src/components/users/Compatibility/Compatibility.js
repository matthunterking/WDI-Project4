import React from 'react';

const Compatibility = ({ userinterests, currentuserinterests}) => {

  // {Object.values(user.interests).filter(interest => Object.values(this.state.currentUser.interests).includes(interest)).length*2}0% match

  return (
    <div>
      <p className='is-size-3 featuretext darktext'>
        {'❤️'.repeat(Object.values(userinterests).filter(interest => Object.values(currentuserinterests).includes(interest)).length)}
      </p>
    </div>
  );
};

export default Compatibility;
