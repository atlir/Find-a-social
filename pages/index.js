import React from 'react';

// Components
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />

      <style jsx global>{`
        @font-face {
          font-family: 'Barlow-Medium';
          src: url(/static/fonts/Barlow-Medium.ttf);
        }

        @font-face {
          font-family: 'Barlow-ExtraBold';
          src: url(/static/fonts/Barlow-ExtraBold.ttf);
        }

        @font-face {
          font-family: 'Barlow-ExtraLight';
          src: url(/static/fonts/Barlow-ExtraLight.ttf);
        }

        @font-face {
          font-family: 'Barlow-Light';
          src: url(/static/fonts/Barlow-Light.ttf);
        }

        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;
