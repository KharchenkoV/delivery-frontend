
import { Button, Container, TextField, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import './style.css'
import OrderService from '../../services/order.service';
import { useNavigate } from 'react-router-dom';

const BucketComponent = ({ bucket, addToBucket, deleteFromBucket, deleteAllProductFromBucket, cleanBucket }) => {
    const navigate = useNavigate()

    const createOrder = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const address = data.get('address')
        console.log(address)
        const orderCreateDto = {
            orderDetailsDtoList: [],
            address: address
        }
        for (const product of bucket.bucketDetailsList) {
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
            <Toolbar sx={{ backgroundColor: 'white', mt: 10, borderRadius: 3 }}>
                <h2 className='text-center'>Ваш кошик пустий, щоб добавити щось перейдіть на сторінку меню!</h2>
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

            <Typography variant="h4" sx={{ padding: 4.5 }}>Загальна сума: {bucket.sum}</Typography>
            <div className='cartDetails'>
                <Button size="large" type="button" variant="contained" color="secondary" onClick={() => cleanBucket()}>Очистити кошик</Button>
                <Button data-bs-toggle="modal" data-bs-target="#exampleModal" size="large" type="button" variant="contained" color="primary"
                >Замовити</Button>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Добавити адресу для замовлення</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id='bucketform' onSubmit={createOrder}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="address"
                                    label="Адреса"
                                    name="address"
                                    autoComplete="address"
                                    autoFocus
                                />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <Button sx={{ mr: 3 }} size="large" type="button" variant="contained" color="secondary" data-bs-dismiss="modal">Закрити</Button>
                            <Button size="large" type="submit" form="bucketform" variant="contained" color="primary">Купити</Button>
                        </div>
                    </div>
                </div>
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