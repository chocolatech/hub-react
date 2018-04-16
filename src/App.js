import React, { Component } from 'react';
import './App.css';
import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';
import { helper } from './helpers/http';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  getRepos() {
    helper((body) => this.setState({ data: body }));
  }

  componentDidMount() {
    this.getRepos();
  }
  render() {
    return (
      <React.Fragment>
        <Search />
        <RepoList data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
