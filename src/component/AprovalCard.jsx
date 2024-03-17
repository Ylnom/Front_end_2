import React from "react";
import '../App.css'
const ApprovalCard = () => {
    return(
        <div>
                <button type="button" className="btn btn-outline-success">Approve</button>
                <button type="button" className="btn btn-outline-danger">Reject</button>
        </div>
    )
}
export default ApprovalCard