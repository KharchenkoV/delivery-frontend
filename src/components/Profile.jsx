import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserService from '../services/user.service'

const Profile = () => {
    const [user, setUser] = useState()
    const {id} = useParams()

    useEffect(() => {
        UserService.getUserById(id).then(res => {
            setUser(res.data)
            console.log(res.data)
        }).catch(e => {
            console.log(e)
        })
    }, [id])
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <section style={{ backgroundColor: '#eee' }} >
                <div class="container py-5">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        class="rounded-circle img-fluid" style={{ width: '150px' }} />
                                    <h5 class="my-3">{`${user?.firstname} ${user?.lastname}`}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Повне ім'я</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{`${user?.firstname} ${user?.lastname}`}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Пошта</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{user?.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Телефон</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{user?.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </Container>
    )
}

export default Profile