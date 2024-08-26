import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Dashboard from './Dashboard';
import Category from './Category';
import Subcategory from './Subcategory';
import Products from './Products';

const Home = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'category':
        return <Category />;
      case 'subcategory':
        return <Subcategory />;
      case 'products':
        return <Products />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="homepage">
      <Navbar bg="purple" variant="dark" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <img src="./tablesprint_logo.png" alt="logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#user">
                <i className="bi bi-person" style={{ fontSize: '1.2rem' }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={3} lg={2} className="sidebar">
            <Nav className="flex-column">
              <Nav.Link 
                onClick={() => setActiveComponent('dashboard')} 
                className={`nav-item ${activeComponent === 'dashboard' ? 'active' : ''}`}
              >
                <i className="bi bi-house-door"></i> Dashboard
              </Nav.Link>
              <Nav.Link 
                onClick={() => setActiveComponent('category')} 
                className={`nav-item ${activeComponent === 'category' ? 'active' : ''}`}
              >
                <i className="bi bi-grid"></i> Category
              </Nav.Link>
              <Nav.Link 
                onClick={() => setActiveComponent('subcategory')} 
                className={`nav-item ${activeComponent === 'subcategory' ? 'active' : ''}`}
              >
                <i className="bi bi-list"></i> Subcategory
              </Nav.Link>
              <Nav.Link 
                onClick={() => setActiveComponent('products')} 
                className={`nav-item ${activeComponent === 'products' ? 'active' : ''}`}
              >
                <i className="bi bi-box"></i> Products
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={9} lg={10} className="main-content">
            {renderComponent()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;