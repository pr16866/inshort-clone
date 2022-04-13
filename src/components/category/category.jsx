import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";

const usestyle = makeStyles({
  nav: {
    position: "fixed",
    top: -17,
    zIndex: 999,
    display: "flex",
    left: -268,
  },
  ul: {
    width: "216px",
    height: "100vh",

    background: "#303036",
    textAlign: "center",
    paddingTop: "20px",
  },
  li: {
  
    height: "38px",
    width: "90%",
   
    fontSize: "18px",
    margin: "auto",
    lineHeight: "38px",
    listStyle: "none",
    borderRadius: "2px",
    marginTop: "3px",
    color: " #fff!important",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: 'rgb(255, 255, 255,0.2)',
    },
    '&:active': {
      backgroundColor: 'rgb(255, 255, 255,0.4)',
    }
  },
  icon: {
    textAlign: "center",
    height: "20px",
    marginTop: "25px",
    marginLeft: "20px",
    cursor: " pointer",
    borderRadius: "5px",
    
     padding: '5px',
    display: "flex",
    alignItems: "flex-start",
  },
  close: {
    color: "black",
  },
  button: {
    height: "32px",
    width: "75px",
    padding: "6px",
    textAlign: "center",
    border: "1px solid #808290",
    background: " #303036",
    color: "#fff!important",
    cursor: "pointer",
    fontSize: "14px",
  },
  language:{
    paddingBottom: '27px',
    borderBottom: '1px solid #808290',
  },
  spn:{
   fontSize: '17px',
    color: '#808290',

    margin: '10px 0 5px -122px',
    display: 'inline-block'
}
});
export default function Category() {
  const classes = usestyle();
const history = useHistory();
  
  
  const [toggle_icon, settoggle_icon] = useState(false);
  const iconfun = () => {
    let nav = document.getElementById("nav");
   

    if (nav.style.left === "-36px") {
      nav.style.left = "-268px";
      nav.style.transitionDuration = "0.5s";
      settoggle_icon(false);
    } else {
      nav.style.left = "-36px";
      nav.style.transitionDuration = "0.5s";
      settoggle_icon(true);
    }
  };
  let constant = [
    "All News",
    "India",
    "Business",
    "Sports",
    "World",
    "Politics",
    "Technology",
    "Startup",
    "Entertainment",
    "Miscellaneous",
    "Hatke",
    "Science",
    "Automobile",
  ];
  let query_const = [
    "all",
    "india",
    "business",
    "sports",
    "world",
    "politics",
    "technology",
    "startup",
    "entertainment",
    "miscellaneous",
    "hatke",
    "science",
    "automobile",
  ];
 
  return (
    <div>
      <nav id="nav" className={classes.nav}>
        <ul className={classes.ul}>
          <div className={classes.language}>
            <button className={classes.button}>English</button>
            <button className={classes.button}>Hindi</button>
          </div>
          <span className={classes.spn}>Categories</span>
          {constant.map((item, index) => {
            return (
              <>
                <li className={classes.li} key={index} onClick={()=>history.push(`?category=${query_const[index]}`)}>{item}</li>
              
              </>
            );
          })}
        </ul>

        <div className={classes.icon} onClick={iconfun}>
          {toggle_icon ? (
            <>
              <Close className={classes.close} />
              <span>Close</span>
            </>
          ) : (
            <>
              <Menu className={classes.close} />
              <span>Menu</span>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
