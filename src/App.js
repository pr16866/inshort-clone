
import Info from "./components/header/info";
import Nav from "./components/navbar/nav";
import {Box,makeStyles} from "@material-ui/core"
import News from "./components/articles/news";
import Category from "./components/category/category";
import {
 
  BrowserRouter as Router,
  
} from "react-router-dom";
const usestyle = makeStyles((theme) => ({
  container: {
    marginTop: 110,
    width: "59%",
    margin: "0px auto",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
  
}));
function App() {
  

 
  const classes = usestyle();
  return (
    <div>
      <Router>
      <Nav  />
      <Category />
      <Box className={classes.container}>
        <Info />
        <News />
      </Box>
       </Router>
    </div>
  );
}

export default App;
