import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart, addToFav, removeToFav } from '../redux/action';
import FavoriteTwoToneIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ProductCard(props) {
  const { title, price, image, desc, id, type } = props

  const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 350, margin: "10px", padding: "10px", backgroundColor: "#f9f4d9", borderRadius: "10px" }}>
      <CardActionArea>
        <img style={{display:'flex',justifyContent:"center",marginLeft:"35px",borderRadius:"10px"}} src={image} height="240px" width="240px"></img>
        <CardContent>
          <Typography gutterBottom variant="h6" fontWeight="bolder" component="div">{title}</Typography>
          <Typography variant="body5" color="text.secondary">{desc}</Typography>
          <Typography variant="h6" color="text.secondary" style={{ fontWeight: "bold", color: "green" }}>Price :{price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          (type) ?
            <Button variant="outlined" size="small" color="error" onClick={() => dispatch(removeToFav(id))}>
              <DeleteOutlineIcon />
            </Button>
            :
            <Button variant="outlined" size="small" color="error" onClick={() => dispatch(addToFav(props))}>
              <FavoriteTwoToneIcon />
            </Button>
        }
        <Button variant="outlined" size="small" onClick={() => dispatch(addToCart(props))}>
          <ShoppingCartOutlinedIcon />
        </Button>


      </CardActions>
    </Card>
  );
}