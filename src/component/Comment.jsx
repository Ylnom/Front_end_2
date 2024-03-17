import React, {Component} from "react";
export class Comment extends Component{
    render(){
        return(
            <div className="ui container comment">
            <a href="" className="avatar">
                <img src='' alt="avatar"></img>
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
    </div>
        )
    }
}
export default Comment