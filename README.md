# Blutech Solutions API Integration Project

This project fetches product data from an API endpoint and displays it in a table format.

### API Integration

- Fetched product data from the API endpoint.
- Endpoint: http://3.88.1.181:8000/products/public/catalog

### UI Presentation

- Displayed the fetched data in a tabular format on the UI.

## Installation and Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>

   ```

2. Install dependencies:
   bash

   ```
   yarn install
   ```

3. Start the development server:
   bash

   ```
   yarn run dev
   ```

4. Open your browser and navigate to:
   http://localhost:5173

## Project Structure

- `src/`: Contains the source code of the project.
  - `components/`: Reusable UI components.
  - `lib/context/`: API Context for state management.
  - `styles/`: CSS Styles.
  - `services/`: API service for fetching data.
  - `App.jsx`: Main application component.
  - `index.jsx`: Entry point of the application.

## Technologies Used

- **Vite**: For fast and optimized development.
- **React**: For building the user interface.
- **Typescript**: For type safety.

---
