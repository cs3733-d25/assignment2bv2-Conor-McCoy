import React from 'react'

const Table1: React.FC = () => {
    return (
        <table className="table-container">
            <caption><h2><u>Other Games I Enjoy:</u></h2></caption>
            <tr>
                <th><u>Game</u></th>
                <th><u>Genre</u></th>
                <th><u>Rating</u></th>
            </tr>
            <tr>
                <td>Lies of P</td>
                <td>Souls-Like</td>
                <td><i>9/10</i></td>
            </tr>
            <tr>
                <td>Hitman Trilogy</td>
                <td>Stealth</td>
                <td><i>8/10</i></td>

            </tr>
            <tr>
                <td>Enter the Gungeon</td>
                <td>Roguelike</td>
                <td><i>7.5/10</i></td>
            </tr>
            <tr>
                <td>Valheim</td>
                <td>Survival</td>
                <td><i>7/10</i></td>

            </tr>
        </table>
    )
}

export default Table1