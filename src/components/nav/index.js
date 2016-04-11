import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  constructor (props) {
    super(props);

    this.state = {
      navs: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About Me",
          link: "/about"
        },
        {
          name: "Portfolio",
          link: "/portfolio"
        },
        {
          name: "Experience",
          link: "/work-experience"
        },
        {
          name: "Blog",
          link: "/blog"
        }
      ]
    }
  }

  render() {
    return (
      <div className='nav'>
        {this.state.navs.map((nav) => {
          return <Link to={nav.link}>{nav.name}</Link>;
        })}
      </div>
    )
  }
}

export default Nav;
