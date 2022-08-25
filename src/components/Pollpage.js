import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DishCard from "./DishCard";

import { Box, Button, Typography } from '@mui/material';

const Pollpage = () => {

  const [data, setData] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  useEffect(() => {
    try {
      axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
        .then(res => {
          setData(res.data);
        });
    } catch (error) {
      console.log(error.massage);
    }
  }, []);

  const handleRank1 = (e) => {
    if (e !== second && e !== third) {
      localStorage.setItem("rank1", e);
      setFirst(e);
    }
  };
  const handleRank2 = (e) => {
    if (e !== first && e !== third) {
      localStorage.setItem("rank2", e);
      setSecond(e);
    }
  };
  const handleRank3 = (e) => {
    if (e !== second && e !== first) {
      localStorage.setItem("rank3", e);
      setThird(e);
    }
  };

  return (
    <>
      <Typography style={{textAlign: 'center', fontSize:'40px', fontWeight:'600'}}>Choose Top Three Favourite Dishes</Typography>
      {
      first !== null && second !== null && third !== null ? 
        <Link to={'/results'} style={{textDecoration:'none'}}>
          <Box style={{textAlign: 'center'}}>
            <Button variant='contained'>
              Submit
            </Button>
          </Box>
        </Link>
       : 
        <div></div>
      }
      <Box style={{marginTop:'30px'}}>
        <DishCard
          data={data}
          first={first}
          second={second}
          third={third}
          handleRank1={handleRank1}
          handleRank2={handleRank2}
          handleRank3={handleRank3}
        />
      </Box>
    </>
  );
}

export default Pollpage;