import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import './style.css'
import { Link } from 'react-router-dom'

const ProductComponent = ({product, addToBucket}) => {
  return (
    <Card className='root'>
        <CardMedia className='media' image={product.picture} title={product.title}/>
        <CardContent>
            <div className='cardContent'>
                <Typography variant='h5' gutterBottom>
                    <Link to={`product/${product.id}`}>{product.title}</Link>
                </Typography>
                <Typography variant='h5'>
                    {product.price}&#x20b4;
                </Typography>
            </div>
            
        </CardContent>
        <CardActions disableSpacing className='cardActions'>
            <IconButton aria-label='Add to Card' onClick={() => addToBucket(product.id)}>
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default ProductComponent