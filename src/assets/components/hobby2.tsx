import React from "react"
import List2 from "./list2.tsx"
import Table2 from "./table2.tsx"
import Form2 from "./form2.tsx"

const Hobby2: React.FC = () => {
    return (
        <div>
            <p>
                My name is Ayush and my favorite hobby is playing Table Tennis. I enjoy playing casually and I am looking
                to join a competitive team at WPI.
            </p>
            <div>
                <img src="public/TableTennis.jpg" width="640" alt="Table Tennis Screenshot"/>
            </div>
            <h2>The current Table Tennis Exec:</h2>
            <List2/>
            <br/>
            <Table2/>
            <br/>
            <Form2/>
        </div>
    )
}

export default Hobby2