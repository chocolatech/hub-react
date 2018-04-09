import React from 'react';

export const RepoList = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.repo}</td>
        </tr>
    );
}
