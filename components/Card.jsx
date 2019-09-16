import React from 'react';

const Card = props => {
  return (
    <>
      <div className="card">
        <div className="card-avatar">
          <img src={props.userData.imgUrl} className="user-avatar" alt="user" />
          <img
            src="/static/img/Icon-Crown.svg"
            className="avatar-crown"
            alt="Crown"
          />
        </div>
        <h3 className="user-name">{props.userData.name}</h3>
        <p className="tiktok-tag">@{props.userData.tag}</p>
        <p className="user-desc">{props.userData.desc}</p>
        <div className="stats">
          <div className="fol">
            {props.userData.fol}
            <span>FOLLOWING</span>
          </div>
          <div className="fans">
            {props.userData.fans} <span>FANS</span>
          </div>
          <div className="heart">
            {props.userData.hearts} <span>HEARTS</span>
          </div>
        </div>
        <div className="reports">
          <div>SEE REPORT</div>
        </div>
      </div>
      <style jsx>{`
        .card {
          height: 341px;
          width: 300px;
          background-color: #fff;
          box-shadow: 0 6px 20px 0 rgba(77, 89, 214, 0.08);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          bottom: 40px;
          padding: 0 30px 0 30px;
          margin: ${props.middle ? '21px' : '0'} ${
        props.left || props.middle ? 'auto' : '0'
      } 0
            ${props.right || props.middle ? 'auto' : '0'};
        }

        .card-avatar {
          display: flex;
          width: 300px;
          height: 50px;
          position: relative;
          bottom: 57px;
        }

        .card-avatar .avatar-crown {
          position: absolute;
          z-index: 10;
          width: 30px;
          height: 30px;
          top: 80px;
          right: 95px;
        }

        .user-name {
          text-align: center;
          font-family: 'Barlow-Medium';
          font-size: 22px;
          color: #2c2c2c;
          margin-bottom: 10px;
        }

        .user-avatar {
          height: 114px;
          width: 114px;
          border-radius: 50%;
          margin: 0 auto 0 auto;
          bottom: 53px;
          box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.35);
        }

        .user-desc {
          text-align: center;
          font-family: 'Barlow-Light';
          font-size: 15px;
        }

        .tiktok-tag {
          margin: 0;
          text-align: center;
          font-family: 'Barlow-Medium';
          font-weight: bold;
          color: #3f4145;
          opacity: 0.5;
        }

        .stats {
          display: flex;
          height: 46px;
          justify-content: space-between;
          margin-bottom: 33px;
        }

        .stats div {
          font-family: 'Barlow-Medium';
          font-size: 24px;
          color: #2c2c2c;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stats span {
          color: #3f4145;
          font-size: 12px;
          opacity: 0.5;
          font-weight: bold;
        }

        .reports {
          display: flex;
          justify-content: center;
        }

        .reports div {
          color #F32855;
          font-family: "Barlow-Medium";
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Card;
