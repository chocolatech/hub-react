import React, { Component } from 'react';
import './App.css';
import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';

const data = [{ "name": "kot", "repo": "serious repo", "id": 1 }, { "name": "kitku", "repo": "less serious repo", "id": 2 }];

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Search />
        <RepoList data={data} />
      </React.Fragment>
    );
  }
}

export default App;
