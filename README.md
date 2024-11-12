# Skite

This is a web application built with **React.js**, **TypeScript**, **React Query**, **Formik**, **Yup**, and **Tailwind CSS**. The app is designed to provide both an **Admin Dashboard** and a **Customer Shop**.

## Tech Stack
- **React.js**: A JavaScript library for building user interfaces. ⚛️
- **TypeScript**: A superset of JavaScript that adds static types. 🦕
- **React Query**: A data-fetching and caching library for React. 🔍
- **Formik**: A library for handling forms in React. 📝
- **Yup**: A JavaScript schema builder for validation. ✅
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development. 🌊

## Setup

To set up and run the application locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/sigitfrank/skite.git
    ```

2. Navigate to the project directory:
    ```bash
    cd skite
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Copy **.env.example** to **.env**:

5. Start the development server:
    ```bash
    npm run dev
    ```

   The app should now be running on [http://localhost:5173](http://localhost:5173).

## How to Use

The application consists of two main parts:

### 1. Admin Dashboard
- The admin dashboard is accessible from the root of the application: **`/`**.
- It provides tools for managing products and viewing reports.

### 2. Customer Shop
- The customer side of the app is accessible from **`/shop`**.
- It allows users to browse products, view product details, see invoice and orders.

## Features

- **Admin Dashboard**: Manage products and see sales reports.
- **Customer Shop**: Browse products, view details, and see invoice.
- **Form Validation**: Built using **Formik** and **Yup** to handle form submissions and validation.
- **Data Fetching**: Leveraging **React Query** for efficient data fetching and state management.
- **Responsive Design**: The app is built with **Tailwind CSS** for a responsive and modern user interface.

## Folder Structure

The project follows **Atomic Design principles**, which means the structure is broken down into smaller, reusable, and maintainable pieces. Here's the folder structure for the project:

- **/assets**: Contains static files such as images, icons, or other resources that are used throughout the application.
- **/Components**: The heart of the Atomic Design methodology in the app. Components are organized into **Atoms**, **Molecules**, and **Organisms**:
  - **/Atoms**: These are the smallest UI building blocks.
  - **/Molecules**: Collections of atoms that form functional UI units.
  - **/Organisms**: More complex components that are composed of atoms and molecules.
  
- **/Helpers**: This folder contains custom utility functions or logic used throughout the app.

- **/Hooks**: Contains custom React hooks for encapsulating reusable logic.
  
- **/Lib**: Holds library-specific utilities. This is where React Query is declared.

- **/Routes**: Manages Pages interactions..

- **/Store**: This folder houses the relevant files for managing and sharing state across the app.

- **/Types**: Contains TypeScript type definitions and interfaces, ensuring type safety across the app.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Thanks:
- Expressing gratitude for the frontend test opportunity.