import React from 'react'
import "../../list.css"

const List1: React.FC = () => {
    return (

        <ol className={"list-container"}>
            <li>Elden Ring</li>
            <li>Hollow Knight</li>
            <li>Sekiro: Shadows Die Twice</li>
            <li>Valorant</li>
            <li>Celeste</li>
        </ol>
    )
}

export default List1;