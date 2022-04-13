import React, { useEffect, useState } from 'react';
import { makeStyles,Button } from '@material-ui/core';
import { getnews } from '../../service/api';
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from 'react-router-dom';
import Newscard from './News_card.jsx';


const usestyle = makeStyles({
  button: {
    width: "130px",
    left: "50%",
    marginLeft: "-65px",
    borderRadius: "3px",
    marginTop: "32px",
    marginBottom: "32px",
    padding: "6px 10px!important",
    textAlign: "center",
    fontWeight: "400",
    position: "relative",
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
    "&:hover": {
        boxShadow: "0 0 20px rgb(0 0 0 / 35%)",
        background:"white",
    },
  },
});




export default function News() {
    const classes = usestyle();
    const { search } = useLocation();
    const name = new URLSearchParams(search).get("category");
    
    const [allnews, setallnews] = useState([]);
    const [page, setpage] = useState(0);
    
  
    useEffect(() => {
        
        dailynews();
        
    },[name]);

    const dailynews = async() => {
     
    
        let res = await getnews(name ? name : "all");
        console.log(res.data.data);
        // setallnews(...allnews,[...res.data]);
        // setallnews([...allnews,...res.data.data]);
        setallnews(res.data.data);
        
        
    }
    
    return (
    //   <InfiniteScroll
    //     dataLength={allnews ? allnews.length : ""}
    //     next={() => setpage(page + 1)}
    //     hasMore={true}
    //   >
    <>
        {allnews &&
          allnews.map((item, index) => {
            return <Newscard key={index} pernews={item} />;
          })}
        <Button className={classes.button} onClick={dailynews}>
          Read More
            </Button>
            </>
   
    );
}
