import React, { useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { createBrand } from '../../http/deviceAPI'

const CreateBrand = ({ show, onHide }) => {
    const [value, setvalue] = useState('')

    const addBrand = () => {
        createBrand({ name: value }).then(data => setvalue(''))
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add the New Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setvalue(e.target.value)}
                        placeholder={'Insert name of the New Type'} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateBrand
