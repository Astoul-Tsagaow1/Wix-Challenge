import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {
      opacity: 0,
      x:0
  },
  visible: {
    opacity: 1,
    y: '5vh',
    transition:{
      type:'spring',
      delay:0.5
    }
  }
}
const Styles = makeStyles({
  root: {
    maxWidth: 400,
    margin:10,
    fontSize: 40,
  },
  media: {
    height: 200,
  }, 

});

export default function displayCarList(props) {
  const classes = Styles();

  console.log(props.ListOfCars);
    const getCarList = arrayOfcars  => {
        return arrayOfcars.map((car,i) => {
          return ( 
             <Card key={i}className={classes.root} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={car.img_url }
                title={car.model}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {car.make} || {car.model}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button  variant="contained" size="large"  color="primary">
             {`${car.price}$`}
              </Button>
              <Button size="large" variant="contained" color="primary">
              {car.year}
              </Button>
            </CardActions>
          </Card>
       
          );
        });
      };
    return (    
      <motion.div variants={containerVariants} initial="hidden" animate='visible' style={{width:'100%'}}>
      <Box display='flex'  flexWrap="wrap" justifyContent="center" >
         {getCarList(props.ListOfCars)}
      </Box>
        
       </motion.div>
    )
}
// horsepower: 201
// id: 1
// img_url: "http://ts2.mm.bing.net/th?id=OIP.M7656c6f6aaa4d51c3ddee4b1192adeeeH0&pid=15.1"
// make: "acura"
// model: "ilx"
// price: 31890
// year: 2016