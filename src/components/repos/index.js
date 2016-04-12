import React, { Component } from 'react';

class Repos extends Component {
  constructor (props) {
    super(props);

    this.state = {
      repos: null
    }
  }

  componentWillMount() {
    fetch("https://api.github.com/users/atakangktepe/repos")
      .then((response) => response.json())
      .then((repos) => {this.setState({ repos })})
      .catch(err => {console.error(this.props.url, err.toString())})
  }

  render() {
    let postList;
    if (this.state.repos) {
      postList = this.state.repos.map((repo) => {
       return (
         <div key={repo.id}>
           <a href={repo.html_url}>
           {repo.name}
           </a>
         </div>
       )
     });
   } else {
     return <div> loading </div>
   }

    return (
      <div>
        <h1>Repositories</h1>
        {postList}
      </div>
    )
  }
}

export default Repos;
