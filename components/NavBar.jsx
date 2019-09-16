import React from 'react';
import Link from 'next/link';

import Button from './Button';

const NavBar = () => {
  return (
    <nav>
      <img src="/static/img/logo.png" alt="Find a social" />
      <div className="nav-links">
        <Link href="#">
          <a className="nav-link mr-link">PRICING</a>
        </Link>
        <Link href="#">
          <a className="nav-link mr-link">FEATURES</a>
        </Link>
        <Link href="#">
          <a className="nav-link">PRODUCT</a>
        </Link>
      </div>
      <div className="sign">
        <Link href="#">
          <a className="nav-link">SIGN IN</a>
        </Link>
        <Button title="GET STARTED" />
      </div>

      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
        }

        .sign {
          display: flex;
          margin-left: auto;
          align-items: center;
        }

        .sign > .nav-link {
          margin-right: 25px;
        }

        .nav-links {
          display: flex;
          margin-left: 97px;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-family: 'Barlow-Medium';
          font-weight: bold;
          font-size: 16px;
        }

        .mr-link {
          margin-right: 64px;
        }

        img {
          width: 154px;
          height: 47px;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
