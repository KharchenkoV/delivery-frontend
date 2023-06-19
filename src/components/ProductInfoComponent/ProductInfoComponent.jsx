import React, { useEffect, useState } from 'react'
import ProductService from '../../services/product.service'
import './style.css'
import { useParams } from 'react-router-dom'

const ProductInfoComponent = () => {
    const [product, setProduct] = useState()
    let { id } = useParams()
    useEffect(() => {
        console.log(id)
        ProductService.getProductById(id)
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            }).catch(error => {
                console.log(error)
            })
    }, [id])
    return (
        <main>
            <div className="container-md mb-3" style={{backgroundColor: 'white', marginTop: 25, padding: 15}}>
                <div className="row row-cols-1 row-cols-md-2 gx-md-5 align-items-md-center">
                    <div className="section__images col col-md-6 d-none d-md-block mt-5">
                        <div className='p-0 bg-transparent border-0'>
                            <img
                                src={product?.picture}
                                alt='product'
                                className="img-fluid rounded-3"
                            /></div>
                    </div>
                    <div className="section__description col col-md-6 mt-md-5">
                        <div
                            className="price-block d-flex justify-content-start align-items-center my-4"
                        >
                            <span className="fw-bold fs-1">&#x20b4;{product?.price}</span>
                        </div>

                        <h2 className="fw-bold">{product?.title}</h2>
                        <p className="text-secondary my-3 fs-6">
                            {product?.description}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductInfoComponent