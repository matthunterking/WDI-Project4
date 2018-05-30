import React from 'react';

const SortBar = ({ handleChange, data }) => {
  return(
    <div className="columns">
      <div className="field column is-5">
        <input className="input" placeholder="Search" name="search" onChange={handleChange} value={data.search}/>
      </div>
      {!data.mapView && <div className="field column is-5">
        <div className="control">
          <div className="select">
            <select onChange={handleChange} name="sort" value={data.sort}>
              <option value="name|asc">Name (A - Z)</option>
              <option value="name|desc">Name (Z - A)</option>
              <option value="price|desc">Price (Hi - Lo)</option>
              <option value="price|asc">Name (Lo - Hi)</option>
            </select>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default SortBar;
