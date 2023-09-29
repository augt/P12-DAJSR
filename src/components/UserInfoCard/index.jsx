import React from "react";
import UserInfoCardCSS from "./UserInfoCard.module.css";

function UserInfoCard({ dataPoint }) {
  return (
    <div className={UserInfoCardCSS.user_info_card_container}>
      <img src={`../${dataPoint.icon}.svg`} alt="" />
      <div>
        <div className={UserInfoCardCSS.user_info_card_amount}>
          {dataPoint.amount}
        </div>
        <div className={UserInfoCardCSS.user_info_card_name}>
          {dataPoint.name}
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
