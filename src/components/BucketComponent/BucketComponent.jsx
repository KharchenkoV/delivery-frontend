
import { Button, Container, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import './style.css'
import OrderService from '../../services/order.service';
import { useNavigate } from 'react-router-dom';

const BucketComponent = ({ bucket, addToBucket, deleteFromBucket, deleteAllProductFromBucket, cleanBucket }) => {

    const navigate = useNavigate()

    const createOrder = () => {
        const orderCreateDto = {
            orderDetailsDtoList: [],
            address: "dfadsfadsfas"
        }
        for(const product of bucket.bucketDetailsList){
            const orderDetails = {
                productId: product.productId,
                productAmount: product.amount
            }
            orderCreateDto.orderDetailsDtoList.push(orderDetails)
        }
        OrderService.createOrder(orderCreateDto).then(() => {
            navigate('/')
            window.location.reload()
        }
        ).catch(error => {
            console.log(error)
        })
    }
    const EmptyCart = () => (
        <Container>
            <Toolbar>
                <Typography variant='subtitle1'>Ваш кошик пустий, щоб добавити щось перейдіть на сторінку меню!</Typography>
            </Toolbar>
        </Container>
    )
    const FilledCart = () => (
        <div className="shopping-cart">

            <div className="title">
                Кошик покупок
            </div>

            {bucket.bucketDetailsList?.map(product => (
                <div className="item" key={product.productId}>
                    <button className="buttons" onClick={() => deleteAllProductFromBucket(product.productId)}>
                        <CloseIcon className='delete-btn' />
                    </button>

                    <div className="image">
                        <img src={product.picture} alt="" width={75} height={75} />
                    </div>

                    <div className="description">
                        <span>{product.title}</span>
                    </div>

                    <div className="quantity">
                        <button className="plus-btn" type="button" name="button" onClick={() => addToBucket(product.productId)}>
                            <AddIcon />
                        </button>
                        <p style={{ display: 'inline-flex', padding: '15px', alignItems: 'center' }}>{product.amount}</p>
                        <button className="minus-btn" type="button" name="button" onClick={() => deleteFromBucket(product.productId)}>
                            <RemoveIcon />
                        </button>
                    </div>

                    <div className="total-price">&#x20b4;{product.sum}</div>
                </div>
            ))}

            <Typography variant="h4" sx={{padding: 4.5}}>Загальна сума: {bucket.sum}</Typography>
            <div className='cartDetails'>
                <Button  size="large" type="button" variant="contained" color="secondary" onClick={() => cleanBucket()}>Очистити кошик</Button>
                <Button  size="large" type="button" variant="contained" color="primary"
                    onClick={() => createOrder()}
                >Купити</Button>
            </div>


        </div>
    )
    return (
        <>
            {!bucket.amountProducts ? <EmptyCart /> : <FilledCart />}
        </>
    )
}

export default BucketComponent