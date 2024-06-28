import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import restaurantData from "./data/data";
import {Button, FormGroup, FormLabel, FormText, InputGroup, ModalFooter, ModalTitle} from "react-bootstrap";
import RestaurantList from "./components/RestaurantList";
import {FaChevronRight, FaPlus, FaSearch, FaUpload} from "react-icons/fa";
import RestaurantForm from "./components/RestaurantForm";
function App() {
  const [restaurants, setRestaurant] = useState(restaurantData);
  const [showForm, setShowForm] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleEdit = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowForm(true);
  }

  const handleDelete = (id) => {
    setRestaurant(restaurants.filter(restaurant => restaurant.id !== id));
  }

  const handleSave = (restaurant) => {
    if (restaurant.id) {
      // Update existing restaurant
      setRestaurant(
          restaurants.map((r) =>
              r.id === restaurant.id ? restaurant : r
          )
      );
    } else {
      // Add new restaurant
      const newRestaurant = {
        id:restaurants.length + 1,
        manager: restaurant.manager,
        address: restaurant.address,
        lastUpdate: restaurant.lastUpdate,
      };
      setRestaurant([...restaurants, newRestaurant]);
    }
    setShowForm(false);
  }

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedRestaurant(null);
  }
  return (
      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-light fw-bold " style={{backgroundColor: "#0077b6"}}>
          <a className="navbar-brand text-white p-3">THUY LOI UNIVERSITY</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02" style={{marginLeft: "38rem"}}>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link text-white" href="#">Management <span className="sr-only"></span></a>
              </li>
            </ul>
            <form className="d-flex form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
              <button className="btn btn-outline-light my-2 my-sm-0 m-2" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <ModalTitle className="d-flex align-items-center">
          <Button className="w-25 m-3" onClick={() => setShowForm(true)}>
            <FaPlus style={{marginRight:"5px"}}></FaPlus>Add New
          </Button>
          <Button className="w-25"><FaUpload style={{marginRight:"5px"}}></FaUpload>Export to File<FaChevronRight></FaChevronRight>
          </Button>
          <InputGroup style={{marginLeft:"4rem", marginRight:"2rem"}}>
            <input className="fs-6 form-control" type="search" placeholder="Search"/>
            <Button><FaSearch></FaSearch></Button>
          </InputGroup>
          <FormText className="text-primary" style={{marginRight:"2rem"}}>Result: {restaurants.length}</FormText>
        </ModalTitle>
        <RestaurantList restaurants={restaurants} onEdit={handleEdit} onDelete={handleDelete}></RestaurantList>
        <RestaurantForm
            show={showForm}
            handleClose={handleFormClose}
            handleSave={handleSave}
            restaurant={selectedRestaurant}
        />
        <div className="d-flex justify-content-between mt-1">
          <div>Showing {restaurants.length} out of {restaurantData.length} entries</div>
          <ul className="pagination">
            <li className="page-item disabled"><a className="page-link">Previous</a></li>
            <li className="page-item"><a className="page-link">1</a></li>
            <li className="page-item"><a className="page-link">2</a></li>
            <li className="page-item active"><a className="page-link">3</a></li>
            <li className="page-item"><a className="page-link">4</a></li>
            <li className="page-item"><a className="page-link">5</a></li>
            <li className="page-item"><a className="page-link">Next</a></li>
          </ul>
        </div>
        <ModalFooter className="d-flex justify-content-start fs-5 p-3" style={{backgroundColor: "#0077b6"}}>
          <FormGroup className="text-white">
            <FormLabel className="fw-bold">THUY LOI UNIVERSITY</FormLabel>
            <FormText>
              <div className="text-white">Address: 175 Tay Son, Dong Da</div>
              <div className="text-white">Phone: 0977038592 - Fax: 0978196226</div>
              <div className="text-white">Email: 2251172466@e.tlu.edu.vn</div>
            </FormText>
          </FormGroup>
        </ModalFooter>
      </div>
  );
}

export default App;
