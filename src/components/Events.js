import React from 'react'
import { Box } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
//import { CardActions } from '@mui/material'
import { Button } from '@mui/material'
//import { date } from 'assert-plus'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Bottom from './Bottom';

const data = [
    {
    title:"Food donation program",
    description:"focus of this year's campaign . For 2022 , the world blood day slogan will be 'give blood andkeep the world breathing'",
    date: "2021-09-12",
    time:"7:21 AM",
    location:"mangalbazar, lalitpur",
    joins:12,
    img:"https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2019/03/Social-work.jpg"
    },
    {
        title:"Clothes donation program",
        description:"focus of this year's campaign . For 2022 , the world blood day slogan will be 'give blood andkeep the world breathing'",
        date: "2021-09-15",
        time:"7:21 AM",
        location:"Basantapur",
        joins:12,
        img:"https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2019/03/Social-work.jpg"
        }
]

export const Events = () => {
    return (
      <div style={{display:"flex", flexDirection:'column'}}>
          <Typography style={{textAlign:"center",
           fontSize:'30px',
           fontWeight:"bold",
           fontFamily:'Roboto',
           color:"green",
           margin:"22px 0 30px 0",
            textDecoration:"underline", 
            textDecorationThickness:"2px",
            textUnderlineOffset:"8px",
          }}> Latest Event</Typography>
          <div style={{display:"flex", flexDirection:'column', justifyContent:"center", justifyItems:"center"}}>
                {
                    data.map(e => {
                       return <EventCard d={e}/>;
                    })
                }
                {/* mapping through every event */}
          </div>
      </div>
    )
}


const EventCard = (props) => {
    return (
        <React.Fragment>
           
      <Box sx={{ minWidth: 275 , margin:"20px auto", backgroundColor:"blue"}}>

        <Card sx={{display:"flex", maxWidth:"60vw", backgroundColor:"#f3f2f2"}} >
        <Box sx={{
        width: 300,
        height: 275,
        backgroundImage:`url(${props.d.img})`,
        backgroundSize:'cover'
        }}/>
        <CardContent>
            
      <Typography sx={{fontSize:25,}} >
        {props.d.title}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.d.description}
      </Typography>
      <Typography >
        <CalendarTodayIcon fontSize="small" color="success" />
        {` `+ props.d.date}
      </Typography>
      <Typography >
          <AccessTimeIcon fontSize="small"  color="success"/>
        {` `+ props.d.time}
      </Typography>
      <Typography>
          <LocationOnIcon fontSize="small"  color="success"/>
        {` `+ props.d.location}
      </Typography>
      <Typography>
        {"join members : "}{props.d.joins}
      </Typography>
      <br/> 
      <Bottom name="Join" />
      {/* <Button size="small" sx={{ backgroundColor: "#21b6ae", color:"black"}}>Join</Button> */}
    </CardContent>
        </Card>
      </Box>
      </React.Fragment>
    )
}

export default Events


// '&:hover': {
//     backgroundColor: 'primary.main',
//     opacity: [0.9, 0.8, 0.7],
//   },