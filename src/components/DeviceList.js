import { observer } from 'mobx-react-lite'
import React from 'react'
import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '..'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const { device } = useContext(Context)
    console.log(device)
    return (
        <Row className='d-flex'>
            {device._devices.map(device =>
                <DeviceItem device={device} />)}
        </Row>
    )
})

export default DeviceList
