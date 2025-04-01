import React from 'react'

const Form1: React.FC = () => {
    return (
        <form>
            <label htmlFor="favGame">What is your favorite video game?</label>
            <br/>
            <input type="text" id="favGame"/>
            <br/> <br/>
            <label htmlFor="howLong">How long have you been playing this game?</label>
            <br/>
            <input type="text" id="howLong"/>
            <br/> <br/>
            What platform do you play video games on?
            <br/>
            <input type="checkbox" id="PC"/>
            <label htmlFor="PC">PC</label>
            <br/>
            <input type="checkbox" id="Console"/>
            <label htmlFor="Console">Console</label>
            <br/>
            <input type="checkbox" id="Mobile"/>
            <label htmlFor="Mobile">Mobile</label>
            <br/>
            <input type="checkbox" id="None"/>
            <label htmlFor="None">None</label>

            <br/><br/>
            Please select your favorite game genre:
            <br/>
            <input type="radio" id="rpg" name="fav_genre"/>
            <label htmlFor="rpg">Role-Playing Game (RPG)</label>
            <br/>
            <input type="radio" id="act-adv" name="fav_genre"/>
            <label htmlFor="act-adv">Action-Adventure</label>
            <br/>
            <input type="radio" id="shooters" name="fav_genre"/>
            <label htmlFor="shooters">Shooters</label>
            <br/>
            <input type="radio" id="survival" name="fav_genre"/>
            <label htmlFor="survival">Survival</label>

            <br/>
            <input type="radio" id="platformer" name="fav_genre"/>
            <label htmlFor="platformer">Platformer</label>
            <br/>
            <input type="radio" id="strategy" name="fav_genre"/>
            <label htmlFor="strategy">Strategy</label>
            <br/>
            <input type="radio" id="fighting" name="fav_genre"/>
            <label htmlFor="fighting">Fighting</label>
            <br/>
            <input type="radio" id="other" name="fav_genre"/>
            <label htmlFor="other">Other (enter in comments)</label>
            <br/> <br/>
            <label htmlFor="comments">Comments:</label>
            <br/>
            <textarea rows={2} cols={40} id="comments"></textarea>
            <br/> <br/>

            <label htmlFor="experience">What is your level of experience with video games?</label>
            <br/>
            <select name="experience" id="experience">
                <option value="none">None</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>

            <br/> <br/> <br/>
            <hr/>
            <button type="submit" id="submitbutton">Submit</button>
        </form>
    )
}

export default Form1