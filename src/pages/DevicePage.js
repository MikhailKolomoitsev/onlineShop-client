import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { fetchDevice } from '../http/deviceAPI'

const Device = () => {
    const [device, setdevice] = useState({ info: [] })

    const {id} = useParams()
    
    useEffect(() => {
        fetchDevice(id).then(data=>setdevice(data))
    }, [])
    return (
        <Container className="mt-3">
            <Row>

                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL+device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 250, height: 240,
                                backgroundSize: "cover",
                                fontSize: 64
                            }}
                        >
                            {device.raiting}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-columnt align-items-center justify-content-center"
                        style={{width:300, height: 300, fontSize:32, border: '3px solid lightgrey'}}
                    >
                        <h3>Price from: {device.price} ₴</h3>
                        <Button variant={"outline-success"}>Add to chart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3" >
                <h2>Characteristics</h2>
                {device.info.map((item, index) =>
                    <Row key={item.id} style={{background: index%2===0?'lightgrey':'transparent'}}>
                        {item.title}: {item.description}
                    </Row>
                        )}
            </Row>
        </Container>
    )
}

export default Device