import React from "react";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="items">
        <span className="title">ABOUT ME</span>
        <img height={200} width={200} src="/profile.jpeg" alt="profile" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          neque! Unde quisquam cum laudantium voluptatum fugiat suscipit!
          Voluptate, omnis saepe. At explicabo optio eaque asperiores,
        </p>
      </div>
      <div className="items">
        <span className="title">CATEGORIES</span>
        <ul className="sidebarLists">
          <li className="slItem">Life</li>
          <li className="slItem">Music</li>
          <li className="slItem">Style</li>
          <li className="slItem">Sports</li>
          <li className="slItem">Tech</li>
          <li className="slItem">Cinema</li>
        </ul>
      </div>
      <div className="items">
        <span className="title">FOLLOW US</span>
        <ul className="sidebarSocials">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </ul>
      </div>
    </div>
  );
}
