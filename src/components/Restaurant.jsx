import React from 'react';
import { Button } from 'react-bootstrap';
import { FaEye, FaPencilAlt, FaTimes } from 'react-icons/fa';
function Restaurant({restaurant, onEdit, onDelete}) {
    return (
        <tr key={restaurant.id}>
            <td>
                <Button><FaEye/></Button>
                <Button onClick={() => onEdit(restaurant)}><FaPencilAlt/></Button>
                <Button onClick={() => onDelete(restaurant.id)}><FaTimes/></Button>
            </td>
            <td>{restaurant.id}</td>
            <td>{restaurant.manager}</td>
            <td>{restaurant.address}</td>
            <td>{restaurant.lastUpdate}</td>
        </tr>
    );
}

export default Restaurant;