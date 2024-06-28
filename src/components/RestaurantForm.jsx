import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function RestaurantForm({ show, handleClose, handleSave, restaurant }) {
    const [form, setForm] = useState({ id: '', manager: '', address: '', lastUpdate: '2024' });
    const [error, setError] = useState({ manager: '', address: '' });

    useEffect(() => {
        if (restaurant) {
            setForm(restaurant);
        } else {
            setForm({ id: '', manager: '', address: '', lastUpdate: '2024' });
        }
    }, [restaurant]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let errorMessage = '';

        if (name === 'manager') {
            if (value.trim().length === 0) {
                errorMessage = 'Manager field cannot be empty';
            } else if (value.length > 30) {
                errorMessage = 'Cannot enter more than 30 characters';
            }
        }

        if (name === 'address') {
            if (value.trim().length === 0) {
                errorMessage = 'Address field cannot be empty';
            } else if (value.length > 50) {
                errorMessage = 'Cannot enter more than 50 characters';
            }
        }

        setError({ ...error, [name]: errorMessage });
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error.manager && !error.address) {
            handleSave(form);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="formManager" className="mb-3">
                        <Form.Label>Manager</Form.Label>
                        <Form.Control
                            type="text"
                            name="manager"
                            value={form.manager}
                            onChange={handleChange}
                            required
                        />
                        {error.manager && <p style={{ color: 'red' }}>{error.manager}</p>}
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                        />
                        {error.address && <p style={{ color: 'red' }}>{error.address}</p>}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" disabled={!!error.manager || !!error.address}>
                        {restaurant ? 'Save Changes' : 'Add Restaurant'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default RestaurantForm;
