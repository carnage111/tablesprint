import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Image, Modal } from 'react-bootstrap';
import axios from 'axios';
import { TablesprintState } from '../contexts/TablesprintContext';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = TablesprintState();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  
  const [newCategory, setNewCategory] = useState({ category_name: '', category_sequence: '', image: null });
  const [editCategoryData, setEditCategoryData] = useState({ category_name: '', category_sequence: '', image: null, status: '' });
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      let config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      const response = await axios.get('http://localhost:5000/api/v1/category/', config);
      setCategories(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch categories');
      setLoading(false);
    }
  };

  const handleAddCategory = async () => {
    try {
      let formData = new FormData();
      formData.append('category_name', newCategory.category_name);
      formData.append('category_sequence', newCategory.category_sequence);
      formData.append('image', newCategory.image);

      let config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
      await axios.post('http://localhost:5000/api/v1/category/add', formData, config);
      setShowAddModal(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditCategory = async () => {
    try {
      let formData = new FormData();
      formData.append('category_name', editCategoryData.category_name);
      formData.append('category_sequence', editCategoryData.category_sequence);
      formData.append('image', editCategoryData.image);
      formData.append('status', editCategoryData.status);

      let config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
      await axios.put(`http://localhost:5000/api/v1/category/edit/${currentCategory.id}`, formData, config);
      setShowEditModal(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      await axios.delete(`http://localhost:5000/api/v1/category/delete/${deleteCategoryId}`, config);
      setShowDeleteModal(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container fluid>
      {/* Add Category Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter category name"
                value={newCategory.category_name}
                onChange={(e) => setNewCategory({ ...newCategory, category_name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category Sequence</Form.Label>
              <Form.Control 
                type="number"
                placeholder="Enter sequence"
                value={newCategory.category_sequence}
                onChange={(e) => setNewCategory({ ...newCategory, category_sequence: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control 
                type="file" 
                onChange={(e) => setNewCategory({ ...newCategory, image: e.target.files[0] })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Category Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter category name"
                value={editCategoryData.category_name}
                onChange={(e) => setEditCategoryData({ ...editCategoryData, category_name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category Sequence</Form.Label>
              <Form.Control 
                type="number"
                placeholder="Enter sequence"
                value={editCategoryData.category_sequence}
                onChange={(e) => setEditCategoryData({ ...editCategoryData, category_sequence: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control 
                type="file" 
                onChange={(e) => setEditCategoryData({ ...editCategoryData, image: e.target.files[0] })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control 
                as="select"
                value={editCategoryData.status}
                onChange={(e) => setEditCategoryData({ ...editCategoryData, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Category Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this category?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteCategory}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mb-3">
        <Col xs={12} md="auto" className='d-flex align-items-center'>
          <Image src="/category_logo.png" alt="Category Logo" width="30" className="me-2" style={{objectFit:'contain'}} />
          <h2 style={{marginBottom:"0"}}>Category</h2>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="position-relative">
            <Form.Control 
              type="text" 
              aria-label="Search categories" 
              className="pe-5"
            />
          </div>
        </Col>
        <Col xs={12} md="auto" className="mt-2 mt-md-0">
          <Button variant="primary" onClick={() => setShowAddModal(true)}>Add Category</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th className="align-middle">Id</th>
                <th className="align-middle">Category name</th>
                <th className="align-middle">Image</th>
                <th className="align-middle">Status</th>
                <th className="align-middle">Sequence</th>
                <th className="align-middle">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-bottom">
                  <td className="align-middle bg-light">{category.id}</td>
                  <td className="align-middle bg-light">{category.category_name}</td>
                  <td className="align-middle bg-light">
                    <img src={category.image} alt={category.name} width="50" className="mx-auto d-block"  />
                  </td>
                  <td className={`align-middle bg-light ${category.status === 'Active' ? 'text-success' : 'text-danger'}`}>
                    {category.status}
                  </td>
                  <td className="align-middle bg-light">{category.category_sequence}</td>
                  <td>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 me-2"
                      onClick={() => {
                        setCurrentCategory(category);
                        setEditCategoryData({
                          category_name: category.category_name,
                          category_sequence: category.category_sequence,
                          image: null,
                          status: category.status,
                        });
                        setShowEditModal(true);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                      variant="link"
                      className="p-0"
                      size="sm"
                      onClick={() => {
                        setDeleteCategoryId(category.id);
                        setShowDeleteModal(true);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
