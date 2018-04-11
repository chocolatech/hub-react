import React from 'react';

export const ListItem = (props) => {
    return (      
        <tr>
            <td>{props.name}</td>
            <td>{props.repo}</td>
        </tr>
    );
}
