import { observer } from 'mobx-react-lite'
import React from 'react'//rafce
import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'

const Admin = observer( () => {
    const [BrandVisible, setBrandVisible] = useState(false)
    const [TypeVisible, setTypeVisible] = useState(false)
    const [DeviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button
                variant={'outline-dark'}
                className='mt-3'
                onClick={()=>setTypeVisible(true)}
            >Add type</Button>
            <Button
                variant={'outline-dark'}
                className='mt-3'
                onClick={()=>setBrandVisible(true)}
            >Add brand</Button>
            <Button
                variant={'outline-dark'}
                className='mt-3'
                onClick={()=>setDeviceVisible(true)}
            >Add device</Button>
            <CreateType show={TypeVisible} onHide={ ()=>setTypeVisible(false)}/>
            <CreateBrand show={BrandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={DeviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    )
})

export default Admin
