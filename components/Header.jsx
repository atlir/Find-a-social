import React, { useState } from 'react';

import NavBar from './NavBar';
import SearchInput from './SearchInput';
import Card from './Card';

import data from './data';

const Header = () => {
  const [searchQuery, setQuery] = useState('');

  const filteredData = data.filter(user =>
    searchQuery !== '' ? user.name === searchQuery : true
  );

  console.log(filteredData);

  return (
    <header>
      <NavBar />

      <div className="main-title">
        <h1>
          The easiest way to find <span className="tiktok-logo">Tik Tok</span>{' '}
          influencers
        </h1>
      </div>

      <div className="search">
        <h2>Search a database of over 1.5M tiktok accounts in seconds</h2>
        <SearchInput setQuery={setQuery} searchQuery={searchQuery} />
      </div>
      <p className="stats">See stats for your account</p>

      <div className="cards">
        {filteredData[1] !== undefined ? (
          <Card left userData={filteredData[1]} />
        ) : null}
        {filteredData[0] !== undefined ? (
          <Card middle userData={filteredData[0]} />
        ) : null}
        {filteredData[2] !== undefined ? (
          <Card right userData={filteredData[2]} />
        ) : null}
      </div>

      <style jsx>{`
        header {
          height: 800px;
          background-color: #000;
          border-radius: 0 0 100px 0;
          padding: 43px 136px 0 136px;
        }

        .cards {
          display: flex;
          margin-top: 100px;
        }

        .stats {
          font-family: 'Barlow-ExtraLight';
          opacity: 0.6;
          color: #fff;
          font-size: 14px;
          text-align: center;
        }

        .search {
          display: flex;
          margin: 17px auto 10px auto;
          height: 109px;
          width: 650px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .search h2 {
          font-family: 'Barlow-ExtraLight';
          color: #fff;
          font-size: 20px;
          margin: 0 0 24px 0;
        }

        .tiktok-logo {
          text-shadow: -2px -2px 0 #0ff, 2px 2px 0 #f00;
        }

        .main-title {
          margin-top: 91px;
          display: flex;
          justify-content: center;
          font-family: 'Barlow-ExtraBold';
          font-size: 32px;
          text-align: center;
          margin: 91px auto 0 auto;
          width: 738px;
        }

        .main-title > h1 {
          color: #fff;
          margin: 0;
        }
      `}</style>
    </header>
  );
};

export default Header;
