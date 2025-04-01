import React from "react"
import "../../list.css"

const List2: React.FC = () => {
    return (
        <ol className={"list-container"}>
            <li id="first">President: Aanan</li>
            <li>Vice President: Ayush</li>
            <li>Secretary: Siddharth</li>
            <li>Treasurer: Ryan</li>
            <li>Marketing: Ryan</li>
        </ol>
    )
}

export default List2