import React from "react"

const Table2: React.FC = () => {
    return (
        <table className="table-container">
            <caption><h2><u>Meeting Times:</u></h2></caption>
            <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Time</th>
            </tr>
            <tr>
                <td>3/25</td>
                <td>Tuesday</td>
                <td>6-8pm</td>
            </tr>
            <tr>
                <td>3/29</td>
                <td>Saturday</td>
                <td>3-6pm</td>
            </tr>
            <tr>
                <td>3/30</td>
                <td>Sunday</td>
                <td>3-6pm</td>
            </tr>
        </table>
    )
}

export default Table2