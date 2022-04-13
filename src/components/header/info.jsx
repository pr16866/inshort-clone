import React from 'react'
import { makeStyles,Box,Typography } from '@material-ui/core'
const usestyle = makeStyles(theme=>({
    container: {
        color: "#ffffff",
        background: "red",
        height: 48,
        display: "flex",
    alignItems: "center",
        marginBottom:30,
    [theme.breakpoints.down('md')]: {
     display:"none"
   }
    },
    text: {
        fontSize: 14,
        marginLeft: 50,
        fontWeight:300
    },
    logo: {
        height: 34,
        cursor:"pointer",
        '&:last-child': {
            margin:'0 50px 0 20px '
        }
    }
}))
export default function Info() {
    const classes = usestyle();
    const appleStore =
      "https://assets.inshorts.com/website_assets/images/appstore.png";
    const googleStore =
      "https://assets.inshorts.com/website_assets/images/playstore.png";
    return (
      <Box className={classes.container}>
        <Typography className={classes.text}>
          For the best experiance use <b>inshorts</b> app on your smartphone
        </Typography>
        <Box style={{marginLeft:"auto"}}>
          <img src={appleStore} alt="appleStore" className={classes.logo} />
          <img src={googleStore} alt="googleStore" className={classes.logo} />
        </Box>
      </Box>
    );
}
