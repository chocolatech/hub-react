import React, { Component } from 'react';
import './App.css';
import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';
import { helper } from './helpers/http';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], username:'senssei' };
  }

  getRepos() {
    console.log('lol', this.state.username);
    const ENDPOINT = `/users/${this.state.username}/repos`;
    helper((body) => this.setState({ data: body }), ENDPOINT);
  }

  getUser = (value) => {
    this.setState({username: value})
  }

  componentDidMount() {
    this.getRepos();
  }
  render() {
    return (
      <React.Fragment>
        <Search username={this.state.username} onChange={this.getUser} onSubmit={this.getRepos}/>
        <RepoList data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
