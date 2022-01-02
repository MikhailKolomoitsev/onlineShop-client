import React, { useContext } from 'react' //rafce snippet
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/constants";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'


const NavBar = observer(() => {
    const { user, device } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink
                    to={SHOP_ROUTE}
                    style={{ color: 'white' }}
                    onClick={() => {
                        device.setSelectedType({})
                        device.setSelectedBrand({})
                    }}
                >BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => {
                                history.push(ADMIN_ROUTE)
                            }}
                        >Admin pannel
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut() }
                            className='ml-2'
                        >Log-out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >Log-in
                        </Button>
                    </Nav>}
            </Container>
        </Navbar>
    )
})

export default NavBar
