import React from 'react'
import { Box, Button, ButtonGroup, Grid, Typography,styled } from '@mui/material'

const Wrapper = styled(Grid)`
  padding: 20px;
  margin: 20px;


`

const DishCard = ({data,first,second,third,handleRank1,handleRank2,handleRank3}) => {
  return (
    <Box >
        <Grid container lg={12} sm={12} md={12} xs={12} style={{padding:'0 10px 10px 140px', textAlign:'center'}}>

            {
                data.length > 0
                      ? data.map((item) => (
                          <Wrapper item lg={3} md={3} sm={4} xs={12} key={item.id} style={{border:'1px solid gray',textAlign: 'center'}}>
                              <Grid item>
                                    <img src={item.image} alt="dish-img" style={{width: '220px',padding:'10px'}}/>
                                    <h2 style={{textAlign: 'center'}}>{item.dishName}</h2>
                                    <Typography>{item.description}</Typography>
                              </Grid>
                              <Box>
                                <ButtonGroup>
                                    <Button
                                        style={{
                                          background: item.id === first ? "orange" : "white",
                                        }}
                                        onClick={() => handleRank1(item.id)}
                                        >
                                        1
                                    </Button>
                                    <Button
                                        style={{
                                          background: item.id === second ? "orange" : "white",
                                        }}
                                        onClick={() => handleRank2(item.id)}
                                        >
                                        2
                                    </Button>
                                    <Button
                                        style={{
                                          background: item.id === third ? "orange" : "white",
                                        }}
                                        onClick={() => handleRank3(item.id)}
                                        >
                                        3
                                    </Button>
                                  </ButtonGroup>  
                              </Box>
                          </Wrapper>
                      ))
                  : null
              }          
        </Grid>

    </Box>
  )
}

export default DishCard;