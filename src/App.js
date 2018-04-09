import React, { Component } from 'react';
import './App.css';
import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';

class App extends Component {
  data = [{ "name": "kot", "repo": "serious repo", "id": 1 }, { "name": "kitku", "repo": "less serious repo", "id": 2 }];

  render() {
    const list = this.data.map(e => <RepoList name={e.name} repo={e.repo} key={e.id} />);
    return (
      <React.Fragment>
        <Search />

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Repo</th>
            </tr></thead>
          <tbody>{list}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
