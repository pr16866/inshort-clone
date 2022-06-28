import React from 'react'
import { CardContent, Card, Grid, makeStyles,Typography, Button } from '@material-ui/core';
const usestyle = makeStyles((theme) => ({
  image: {
    height: "268px",
    width: "88%",
    borderRadius: "5px",
    objectFit: "cover",
    margin: "0 auto",
  },
  component: {
    marginBottom: 20,
    // width: "100vw !important",
    boxShadow: "0 2px 5px 0 rgb(0 0 0 /16%),0 2px 10px 0 rgba(0 0 0 /12%)",
  },
  container: {
    padding: 10,
    paddingBottom: "4px!important",
    
  },
  rightcontainer: {
    margin: "5px 0px 0 -25px",
    display: "flex",
    flexDirection: "coloum",

    [theme.breakpoints.down("sm")]: {
      margin: "5px 0",
      width: "120%",
    },
  },
  title: {
    color: "#44444d",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "27px",
  },
  author: {
    fontSize: 12,
    color: "#808290",
    lineHeight: "22px",
  },
  description: {
    lineHeight: "22px",
    color: "#44444d",
    marginTop: 5,
  },
  publisher: {
    fontSize: 12,
    marginBottom: 10,
    "^ > *": {
      textDecoration: "none",
      color: "#000",
      fontWeight: 900,
    },
  },
}));
export default function Newscard({ pernews }) {
  const classes = usestyle();
  let readmore = pernews.readMoreUrl? pernews.readMoreUrl: "";
  let index_w = readmore.indexOf('/');
  let index_m = readmore.indexOf('m');
  
    return (
      <Card className={classes.component}>
        <CardContent className={classes.container}>
          <Grid container>
            <Grid
              item
              lg={5}
              md={5}
              sm={5}
              xs={12}
              className={classes.rightcontainer}
            >
              <img
                src={pernews.imageUrl}
                alt="avtar"
                className={classes.image}
              />
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={12}>
              <Typography className={classes.title}>{pernews.title}</Typography>

              <Typography className={classes.author}>
                <b>Short</b> by {pernews.author}/{pernews.date}
              </Typography>
              <Typography className={classes.description}>
                {pernews.content}
              </Typography>
              <Typography className={classes.publisher}>
             
                <a href={pernews.readMoreUrl} target="_blank" rel="noreferrer">
                  {/* {pernews.readMoreUrl} */}
                  <Button color='primary'> Read More</Button>
                </a>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
}
