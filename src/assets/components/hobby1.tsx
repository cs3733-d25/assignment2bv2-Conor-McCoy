import React from "react"
import List1 from "./list1.tsx"
import Table1 from "./table1.tsx"
import Form1 from "./form1.tsx"

const Hobby1: React.FC = ()=> {
    return (
        <div>
            <p>Hello, I am Conor! One of my favorite hobbies is playing video games. I enjoy playing both single-player and multiplayer games on PC. My favorite game genres are Souls-Likes, Platformers, and First-Person Shooters.</p>
            <div id="ER">
                <img src="public/ER.png" width="640" alt ="Elden Ring Screenshot"/>
            </div>

            <h2>Some of my favorite games:</h2>
            <List1/>
            <br/>
            <Table1/>
            <br/>
            <h2>Your Favorite Games:</h2>
            <Form1/>
        </div>
    )
}

export default Hobby1