import React from "react";

const ContestItem = ({item}) => {
    return (
        <div>
            <li>{item.site}</li>
            <li>{item.name}</li>
            <li>{item.url}</li>
            <text>Next</text>
        </div>
    )
}

export default ContestItem