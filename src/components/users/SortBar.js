import React from 'react';

const SortBar = ({ handleChange, data }) => {
  return(
    <div className="columns">
      <div className="field column is-5">
        <div className="control">
          <div className="select">
            <select onChange={handleChange} name="search" value={data.search}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="">All</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
