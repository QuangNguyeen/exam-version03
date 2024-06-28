import React from 'react';
import { Table, Button } from 'react-bootstrap';
import {FaEye, FaPencilAlt, FaTimes} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
function RestaurantList({restaurants, onEdit, onDelete}) {
    return (
        <div className="table-responsive container mt-2">
            <Table striped bordered hover>
                <thead>
                <tr className="bg-primary text-white">
                    <th style={{width:"13.5%"}}>Action</th>
                    <th>Numerical</th>
                    <th>Manager</th>
                    <th>Address</th>
                    <th>Last Update</th>
                </tr>
                </thead>
                <tbody>
                {restaurants.map((restaurant) => (
                    <tr key={restaurant.id}>
                        <td style={{width:"13.5%"}}>
                            <Button className="m-1"><FaEye/></Button>
                            <Button className="m-1" onClick={() => onEdit(restaurant)}><FaPencilAlt/></Button>
                            <Button className="m-1" onClick={() => onDelete(restaurant.id)}><FaTimes/></Button>
                        </td>
                        <td>{restaurant.id}</td>
                        <td>{restaurant.manager}</td>
                        <td>{restaurant.address}</td>
                        <td>{restaurant.lastUpdate}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default RestaurantList;