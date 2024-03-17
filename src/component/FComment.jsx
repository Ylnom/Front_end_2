import React from "react";
import ApprovalCard from "./AprovalCard";
import myImg from "../assets/Anhchua.jpg"
import '../App.css'
const FComment = (props) => {
    return(
        <div className="comment-card">
        <div className="ui container comment">
                <a href="" className="avatar">
                    <img src={myImg}  alt="avatar"></img>
                </a>
                <div className="content">
                    <a href="" className="author">
                        {props.author}
                    </a>
                </div>
                <div className="metadata">
                    <span className="date"> {props.timeAgo}</span>
                </div>
                <div className="text">{props.content}</div>
                <ApprovalCard></ApprovalCard>
        </div>
        </div>
    )
}
export default FComment