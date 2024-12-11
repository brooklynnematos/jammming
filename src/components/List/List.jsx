import React from 'react';
import data from "./ListData.json";

function List(props) {
    // Filter the data based on the search input
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el; // Return all items if no input
        } else {
            return el.title.toLowerCase().includes(props.input.toLowerCase());
        }
    });

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>
                    <strong>{item.title}</strong> by {item.artist} ({item.album})
                </li>
            ))}
        </ul>
    );
}

export default List;
