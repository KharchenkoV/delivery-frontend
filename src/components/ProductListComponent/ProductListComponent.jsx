import React, { useEffect, useState } from 'react'
import Product from '../ProductComponent/ProductComponent'
import { Grid, Toolbar } from '@mui/material'
import ProductService from '../../services/product.service'
import './style.css'
const ProductListComponent = ({ addToBucket }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ProductService.getAllProducts().then(
            res => {
                setProducts(res.data)
            }).catch(
                e => {
                    console.log(e)
                })
    }, [])
    return (
        <main className='content'>
            <Toolbar >
                <Grid container justify="center" spacing={4}>
                    {products.map(product => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} addToBucket={addToBucket} />
                        </Grid>
                    ))}
                </Grid>
            </Toolbar>
        </main>
    )
}

export default ProductListComponent