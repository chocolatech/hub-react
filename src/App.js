import React, { Component } from 'react';
import './App.css';
import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';

class App extends Component {
  data = [{ "name": "kot", "repo": "serious repo", "id": 1 }, { "name": "kitku", "repo": "less serious repo", "id": 2 }];

  render() {
    return (
      <React.Fragment>
        <Search />
        <RepoList />
      </React.Fragment>
    );
  }
}

export default App;
