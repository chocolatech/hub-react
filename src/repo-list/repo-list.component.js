import React from 'react';
import { ListItem } from '../list-item/list-item.component'

export class RepoList extends React.Component {
    render() {
        const list = this.props.data.map(e => <ListItem repo={e.name} key={e.id} id= {e.id} />);
        return (

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Repo</th>
                    </tr></thead>
                <tbody>{list}</tbody>
            </table>

        );
    }
}
