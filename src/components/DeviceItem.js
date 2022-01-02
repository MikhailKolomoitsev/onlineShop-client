import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/constants'

const DeviceItem = ({ device }) => {
    const history = useHistory()
    return (
        <Col
            md={3}
            className='mt-3'
            onClick={()=>history.push(DEVICE_ROUTE+'/'+device.id)}
        >
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                {/* <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                        background: `url(${process.env.REACT_APP_API_URL + device.img}) no-repeat center center`,
                        width: 150, height: 150,
                        backgroundSize: "contain",
                    }}
                >
                </div> */}
                <Image
                    variant="top"
                    src={process.env.REACT_APP_API_URL + device.img}
                    style={{width:150, maxHeight:150, }}
                />
                <div className='d-flex justify-content-between align-items-center mt-1 text-black-50'>
                    <div>{device.brand}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image src={star} width={18} height={18} />
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: 20 }}>{device.name}</p>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem
