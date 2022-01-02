import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from "../index";
import { useState } from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/constants";

const Auth = observer(() => {
    const {user}=useContext(Context)
    const location = useLocation()
    const history=useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(Email, Password)
            } else {
                data = await registration(Email, Password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
       
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? " Authorization form" : "Registration form"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Insert e-mail'
                        value={Email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Insert password'
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ? <div>
                            Do not have account? <NavLink to={REGISTRATION_ROUTE}>Registrate!</NavLink>
                        </div> :
                            <div>
                                Do you have an account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
                            </div>
                        }

                        <Button
                            variant={'outline-success'}
                            onClick={click}
                        >
                            {isLogin ? 'LogIn' : "Registrate"}
                        </Button>
                    </Row>
                </Form>
            </Card>

        </Container>
    )
})

export default Auth
