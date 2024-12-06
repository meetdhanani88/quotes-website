# Running the Project

Follow these steps to run the project in development mode:

## Prerequisites

Make sure you have the following installed on your machine:

1. [Node.js](https://nodejs.org/) (LTS version recommended)
2. [npm](https://www.npmjs.com/) (comes with Node.js)

To check if they are installed, run:
```bash
node -v
npm -v
```

## Steps to Run the Project

1. **Clone the Repository**
   If you haven’t already, clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Dependencies**
   Install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Run in Development Mode**
   Start the project in development mode:
   ```bash
   npm run dev
   ```

   This will start a development server, and the application will be accessible at `http://127.0.0.1:5173/` or as specified in the project.

4. **Make Changes**
   Any changes you make in the source code will automatically reflect in the browser, thanks to Hot Module Replacement (HMR).

## Troubleshooting

- If you encounter any errors, try deleting the `node_modules` folder and reinstalling dependencies:
  ```bash
  rm -rf node_modules
  npm install
  ```
- Ensure your Node.js and npm versions meet the project’s requirements.
