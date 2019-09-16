import React from 'react';

import Button from './Button';

const SearchInput = props => {
  const { searchQuery, setQuery } = props;

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Enter keywords e.g. Canada, Fashion, Football"
        value={searchQuery}
        onChange={e => setQuery(e.target.value)}
      />
      <Button
        title="SEARCH"
        width="210px"
        height="60px"
        borderRadius="0 4px 4px 0"
      />

      <style jsx>{`
        .search-input {
          display: flex;
          width: 650px;
        }

        .search-input input {
          width: 100%;
          border-radius: 3.9px 0 0 3.9px;
          border: 2px solid #f32855;
          border-right: none;
          background: transparent;
          font-family: 'Barlow-Medium';
          font-size: 16px;
          color: #cacfd1;
          padding: 18px;
        }
      `}</style>
    </div>
  );
};

export default SearchInput;
