import React from 'react';
import { ListItem } from '../list-item/list-item.component'

export class RepoList extends React.Component {
    render() {
        const list = this.props.data.map(e => <ListItem name={e.name} repo={e.repo} key={e.id} />);
        return (

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Repo</th>
                    </tr></thead>
                <tbody>{list}</tbody>
            </table>

        );
    }
}
