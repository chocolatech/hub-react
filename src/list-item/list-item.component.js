import React from 'react';

export const ListItem = (props) => {
    return (      
        <tr>
            <td>{props.id}</td>
            <td>{props.repo}</td>
        </tr>
    );
}
