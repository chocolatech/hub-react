import React, { Component } from 'react';
import './App.css';
import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';
import { helper } from './helpers/http';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], username:'chocolatech' };
  }

  getRepos() {
    const ENDPOINT = '/users/senssei/repos';
    helper((body) => this.setState({ data: body }), ENDPOINT);
  }

  componentDidMount() {
    this.getRepos();
  }
  render() {
    return (
      <React.Fragment>
        <Search username={this.state.username}/>
        <RepoList data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
