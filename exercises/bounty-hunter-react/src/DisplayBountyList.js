import React from "react"
import { withProvider } from "./GlobalProvider";

const DisplayBountyList = (props) => {
    const mappedBounties = props.bountyTargets.map(target => 
        <div key={target._id}>
            <h1>{target.firstName} {target.lastName}</h1>
            <h2>Alive? {target.living ? "Yes" : "No"}</h2>
            <h2>Type: {target.type}</h2>
            <h2>Bounty Amount: ${target.bounty}</h2>
            <button onClick={() => props.deleteBounty(target._id)}>Remove Bounty</button>
            {/* <button onClick={() => props.handleEdit(target._id)}>Edit Bounty</button> */}
        </div>
    )
    console.log(props.bountyTargets)
    return (
        <div className="display-bounty-list">
            {mappedBounties}
        </div>
    )
}

export default withProvider(DisplayBountyList)