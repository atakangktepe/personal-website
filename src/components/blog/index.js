import React, { Component } from 'react';

export default class Blog extends Component {
  constructor (props) {
    super(props);

    this.state = {
      posts: null
    }
  }

  componentWillMount() {
    fetch("http://atakan.work/blog/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((posts) => {this.setState({ posts })})
      .catch(err => {console.error(this.props.url, err.toString())})
  }

  render() {
    let postList;
    if (this.state.posts) {
      postList = this.state.posts.map((post) => {
       return (
         <div key={post.id}>
           <h3>
             <a href={post.link} dangerouslySetInnerHTML={{__html: post.title.rendered}}>
             </a>
           </h3>
           <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered.substring(0, 150) + '...' }}> 
           </p>
         </div>
       )
     });
   } else {
     return <div> loading </div>
   }

    return (
      <div>
        <h1>From The Blogs</h1>
        {postList}
      </div>
    )
  }
}
