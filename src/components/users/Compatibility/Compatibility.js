import React from 'react';

const Compatibility = ({ userinterests, currentuserinterests}) => {

  return (
    <div>
      <p className='is-size-3 featuretext darktext'>
        {'❤️'.repeat(Object.values(userinterests).filter(interest => Object.values(currentuserinterests).includes(interest)).length)}
      </p>
    </div>
  );
};

export default Compatibility;
