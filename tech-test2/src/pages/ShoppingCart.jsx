import React from 'react';
import { Grid, Button, Stack, Container, Typography, Box } from '@mui/material'
import { List, ListItem, ListItemText} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';


function ShoppingCart() {


  const EmptyCart = () => {
    return (
      <Typography variant='body' sx={{padding: 2}}>No Items in Cart</Typography>
    )
  }

  return (
    <Container>
      <h1>Tech Test</h1>
      <p>Please see the instuctions.md flie in Visual Studio Code to complete this tech test</p>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h5">Items</Typography>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <Typography variant="h5">Shopping Cart</Typography>
            { true ? (<EmptyCart />) : (<></>)}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ShoppingCart;
