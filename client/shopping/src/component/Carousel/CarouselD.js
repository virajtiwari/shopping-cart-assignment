import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export function Example({carouselItem})
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                carouselItem.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item({item})
{
    console.log(item)
    return (
        <Paper>
                       <img src={item?.bannerImageUrl} alt={item?.bannerImageAlt}/>

        </Paper>
    )
}