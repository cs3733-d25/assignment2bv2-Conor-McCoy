import React from "react"

const Form2: React.FC = () => {
    return (
        <form>
            <label>Name:</label>
            <br/>
            <input type="text"/>
            <br/> <br/>
            <label>Discord:</label>
            <br/>
            <input type="text"/>
            <br/> <br/>
            <label>Interested in Casual Play?</label>
            <input type="checkbox"/>
            <br/>
            <label>Interested in Competitive Play?</label>
            <input type="checkbox"/>
            <br/>
            <label>Joined discord and MyWPI?</label>
            <input type="checkbox"/>
            <br/> <br/>
            <label>Experience:</label>
            <br/>
            <label>None</label>
            <input className="button" type="radio" name="experience" value="none"/>
            <br/>
            <label>Low</label>
            <input className="button" type="radio" name="experience" value="low"/>
            <br/>
            <label>Medium</label>
            <input className="button" type="radio" name="experience" value="medium"/>
            <br/>
            <label>High</label>
            <input className="button" type="radio" name="experience" value="high"/>
            <br/> <br/>
            <label>What meeting can you attend?</label>
            <br/>
            <select>
                <option>Tuesday</option>
                <option>Saturday</option>
                <option>Sunday</option>
            </select>
            <br/> <br/>
            <label>Comments:</label>
            <input type="text"/>
            <br/> <br/>
            <button>Submit</button>
        </form>
    )
}

export default Form2