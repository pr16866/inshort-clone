import React,{useState} from 'react'
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";


const usestyle = makeStyles({
  heder: {
    background: "white",
    height: 70,
    display: "flex",
    justifyContent: "center",
    zIndex: 8,
  },
  logo: {
    height: 55,
    margin: "auto",
    paddingRight: 70,
  },
  menu: {
    color: "black",
    cursor: "pointer",
    position: "relative",
    top: -98,
    left: 228,
    width: 30,
    height: 30,
  },
  menu1: {
    color: "black",
    cursor: "pointer",

    position: "relative",
    top: -105,
    left: 221,

    width: 30,
    height: 30,
  },
  open: {
    position: "fixed",
    left: "0px",
    zIndex: "999",
    transitionDuration: "1s",
  },
  close: {
    position: "fixed",
    left: "-216px",
    zIndex: "999",
    transitionDuration: "1s",
  },
});

export default function Nav() {
    const logo =
      "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
    const classes = usestyle();
    const [navigate, setnavigate] = useState(true);
    const nav = () => {
        if (navigate) {
            
            setnavigate(false);
        }
        else {
            setnavigate(true);
        }
       
    }
    return (
      <div>
        <AppBar className={classes.heder} onClick={nav}>
          <Toolbar>
            <img src={logo} alt="" className={classes.logo} />
          </Toolbar>
        </AppBar>
        
      </div>
    );
}
