import React from "react";
var moment = require('moment');

const UserInfo = (props) => {
    const momentDate = new Date(props.userInfo.answer.date)
    var momentObj = moment(momentDate)
    var momentString = momentObj.format("MMM D, YYYY");

    return (
        <p> by {props.userInfo.answer.answerer_name},  {momentString} </p>
    )
}


export default UserInfo;