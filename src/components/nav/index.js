import React, { Component } from 'react';
import { Link } from 'react-router';
const navs = [
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
];

export default function Nav() {
  return (
    <div className='nav'>
      {navs.map((nav, i) => {
        return <Link to={nav.link} key={i}>{nav.name} </Link>;
      })}
    </div>
  )
};
