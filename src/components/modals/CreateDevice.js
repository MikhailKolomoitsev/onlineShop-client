import React, { useEffect } from 'react' //rafce
import { createDevice, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI'
import { useState } from 'react'
import { useContext } from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const CreateDevice = observer( ({ show, onHide }) => {
    const { device } = useContext(Context)

    const [name, setname] = useState('')
    const [price, setprice] = useState(0)
    const [file, setfile] = useState(null)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const deleteInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const selectFile = e => {
        setfile(e.target.files[0])
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }
    const addDevice = () => {
        const formData = new FormData() //Form data because we upload file
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add the New Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className=''>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle
                            className='mr-2'>
                            {device.selectedType.name || "Choose type"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device._types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}>
                                    {type.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle
                            className='mr-2'>{device.selectedBrand.name || "Choose brand"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device._brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setname(e.target.value)}
                        className='mt-3'
                        placeholder='Insert name'
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setprice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Insert price'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Upload picture'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr></hr>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {info.map(i =>
                        <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e)=>changeInfo("title", e.target.value, i.number)}
                                    placeholder='Name of the property'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e)=>changeInfo("description", e.target.value, i.number)}
                                    placeholder='Desc of the property'
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => deleteInfo(i.number)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>)}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateDevice
