import React from 'react';
const Button = props => {
  return (
    <>
      <button className="button">{props.title}</button>
      <style jsx>{`
        .button {
          height: ${props.height ? props.height : '40px'};
          width: ${props.width ? props.width : '126px'};
          border-radius: ${props.borderRadius ? props.borderRadius : '4px'};
          background-color: #F32855;
          color: #FFF;
          font-family: "Barlow-Medium";
          font-weight: bold;
          border-color: transparent;
          font-size: 14px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Button;
