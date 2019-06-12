import React from "react"
import { withProvider } from "./GlobalProvider"
import Bounty from "./Bounty"

const DisplayBountyList = (props) => {
    const mappedBounties = props.bountyTargets.map(target => 
        <Bounty 
            key={target._id}
            target={target}
        />
    )
    return (
        <div className="display-bounty-list">
            {mappedBounties}
        </div>
    )
}

export default withProvider(DisplayBountyList)