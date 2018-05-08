import React, { Component } from 'react';
import './App.css';
// import { Search } from './search-bar/search.component';
import { RepoList } from './repo-list/repo-list.component';
// import { helper } from './helpers/http';
import { connect } from 'react-redux';
import {selectApiData} from './App.selectors';
import { bindActionCreators } from 'redux';
import {getAPIData} from './App.actions';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { data: [], username:'' };
  // }

  // getRepos = () => {
  //   const ENDPOINT = `/users/${this.state.username}/repos`;
  //   helper((body) => this.setState({ data: body }), ENDPOINT);
  // }

  // getUser = (value) => {
  //   this.setState({username: value})
  // }

  // handleEnter = (e) => {
  //   if(e.key === 'Enter'){
  //     this.getRepos();
  //   }
  // }

  componentWillMount() {
    this.props.actions.getAPIData('chocolatech');
  }

  render() {

    return (
      <React.Fragment>
        <RepoList data={this.props.data} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: selectApiData(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
