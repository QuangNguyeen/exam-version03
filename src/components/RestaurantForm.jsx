import React, {useEffect} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
function RestaurantForm({show, handleClose, handleSave, restaurant}) {
    const [form, setForm] = useState({id:'', manager:'', address:'', lastUpdate:'2024'});

    useEffect(() => {
        if(restaurant){
            setForm(restaurant)
        }else{
            setForm({id:'', manager:'', address:'', lastUpdate:'2024'});
        }
    }, [restaurant]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave(form);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
            </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId = "formManager" className="mb-3">
                            <Form.Label>Manager</Form.Label>
                            <Form.Control type="text" name="manager" value={form.manager} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" value={form.address} onChange={handleChange} required/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            {restaurant ? 'Save Changes' : 'Add Restaurant'}
                        </Button>
                    </Modal.Footer>
                </Form>
        </Modal>
    );
}

export default RestaurantForm;