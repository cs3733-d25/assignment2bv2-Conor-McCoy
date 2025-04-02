import React from "react"

type IntroProps = {
    name1: string
    name2: string
}

const Intro: React.FC<IntroProps> = ({name1, name2}) => {
    return (
        <div>
            <p>
            <h2>Hi! We are {name1} and {name2} and this is a website about our hobbies.</h2>
            </p>
        </div>
    )
}

export default Intro