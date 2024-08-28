# Tablesprint

## Description

A web application for managing products, categories, and subcategories.

## Features

* User registration and authentication
* CRUD operations on products, categories, and subcategories
* Server-side rendering with React
* JWT-based authentication with cookies
* MySQL for data storage

## Prerequisites

* Node.js
* npm
* MySQL

## Installation

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/carnage111/tablesprint.git

2. Navigate to the project directory:
$ cd tablesprint

3. Create a `.env` file with the necessary variables:
$ PORT=5000
$ CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
$ CLOUDINARY_API_KEY=your-cloudinary-api-key
$ CLOUDINARY_API_SECRET=your-cloudinary-api-secret
$ JWT_SECRET=your-jwt-secret
$ MYSQL_HOST=localhost
$ MYSQL_USERNAME=your-mysql-username
$ MYSQL_PASSWORD=your-mysql-password
$ MYSQL_DATABASE_NAME=your-mysql-database-name

4. Install dependencies:
$ npm i

5. navigate to frontend and backend directories on seperate terminals
$ cd backend
$ cd frontend

6. Start the development server on both terminals: 
$ npm run dev

## Usage

### Register a User

1. Open postman or use thunderclient and create a request on this endpoint `http://localhost:5000/api/v1/user/register` to register an user.

### Example User

```json
{
  "name": "bobb",
  "email": "bobb@gmail.com",
  "password": "12345678",
  "confirmPassword": "12345678"
}
```

### Login

1. After registering, navigate to `http://localhost:5173/` in your browser.

2. Enter your registered email and password.

3. Click on the "Login" button.

### Dashboard

After logging in, you will be redirected to the dashboard. The dashboard has a left panel to cycle between categories, subcategories, and products.

### 1. Adding Categories, Subcategories, and products

1. Click on the add category/add subcategory/ add product button in respective components and add the necessary details to add the items

### 2. Editing and deleting

1. Click on the edit or delete icons in the action column to perform necessary actions.


## Screenshots

![Screenshot 1](https://github.com/carnage111/tablesprint/blob/main/images/dashboard.png)
![Screenshot 2](https://github.com/carnage111/tablesprint/blob/main/images/add_prod.png)
![Screenshot 3](https://github.com/carnage111/tablesprint/blob/main/images/device_responsive.png)

## License

This project is licensed under the MIT License.

## Author

The Carnage

---

Happy Coding!🚀