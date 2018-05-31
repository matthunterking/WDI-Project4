import React from 'react';

const SortBar = ({ handleChange, data }) => {
  return(
    <div className="columns">
      <div className="field column is-5">
        <div className="control">
          <div className="select">
            <select onChange={handleChange} name="searchGender" value={data.searchGender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="">All</option>
            </select>
          </div>
          <div className="select">
            <select onChange={handleChange} name="searchAge" value={data.searchAge}>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-50">35-50</option>
              <option value="50+">50+</option>
              <option value="">I don&apos;t mind</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
