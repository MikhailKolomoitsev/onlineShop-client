import React from 'react'
import { Card, Col, Image, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/constants'

const DeviceItem = ({ device }) => {
    let deviceStarsList = []
    for (let i = 0; i < device.rating; i++){
        deviceStarsList.push(i)
    }
    const history = useHistory()
    return (
        <Col
            md={3}
            className='mt-3'
            onClick={()=>history.push(DEVICE_ROUTE+'/'+device.id)}
        >
            <Card style={{
                width: 150,
                cursor: 'pointer',
                height: 275
            }} border={'light'} className='d-flex align-items-center flex-direction-column justify-content-between'>
                <div>
                    <Image
                    variant="top"
                    src={device.img}
                    style={{ width: 150, maxHeight: 150, }}
                />
                    <div className='d-flex justify-content-between align-items-center mt-1 text-black-50'>
                        <div className=''>
                            {deviceStarsList.map(i => <Image src={star} width={18} height={18} />)}
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: 14 }}>{device.name}</p>
                    </div></div>
                <Button >Add to Chart</Button>
            </Card>
        </Col>
    )
}

export default DeviceItem
