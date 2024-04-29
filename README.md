# Contact Us Form Project

This project implements a responsive "Contact Us" form using React. It features fields for user input including name, email, message, and a file upload option for CVs. It uses local storage to store form submissions and showcases them on a separate page.

## Features

- **React Functional Components**: Utilizes React functional components with hooks.
- **Form Handling**: Managed with React Hook Form for better performance and less boilerplate.
- **File Upload**: Integrates file upload functionality using the Fetch API.
- **Local Storage**: Uses the localStorage API to store form submissions.
- **Routing**: Uses React Router for navigating between the form submission and viewing submissions.
- **Responsive Design**: Ensures the form looks good on all devices using CSS.


## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed (version 12.x or later recommended)
- npm or Yarn as package managers

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/piyush-gpt/omniversity_intern.git
cd omniversity_intern
cd my-app
```

Install the required dependencies:
```bash
npm install
```
or
```bash
yarn install
```

## Usage

To start the development server:

```bash
npm start
```
or

```bash
yarn start
```

Navigate to http://localhost:3000 to view the app in your browser.


## Deploying on Vercel

### Prerequisites

- A Vercel account: If you do not already have an account, visit [Vercel](https://vercel.com) and sign up using your GitHub, GitLab, or Bitbucket account for easy integration.
- Your project on GitHub, GitLab, or Bitbucket: Vercel integrates directly with these services.

### Step 1: Import Your Project to Vercel

1. **Log in to Vercel**: After signing in, you'll be taken to the Vercel dashboard.
2. **Import Project**: Click on the "Add New" button, then click on "project" and select the repository where your this website is stored.
3. **Configure Your Project**: During the import process, Vercel automatically detects that you are running a React application and sets up the build settings for you. Typically, no configuration changes are necessary unless your project has specific build requirements.
   - **Build Command**: This is usually detected and filled out by Vercel. For a typical Create React App, it will use `npm run build`.
   - **Output Directory**: For a Create React App, this should be `build`.
   - **Environment Variables**: Set any necessary environment variables your application might need to run.
4. **Deploy**: After configuring your settings, click the "Deploy" button. Vercel will begin the deployment process, cloning your repository and building your project based on the settings provided.

### Step 2: Automatic Deployment on Push

- Every push to your repository (to branches like `main` or others you specify) will trigger a new deployment automatically.
- Vercel provides a unique URL for each deployment, as well as a consistent production URL.


### Step 3: Visit Your Deployed Application

- Visit the provided `.vercel.app` domain to see your live application.

### Additional Information

- **Vercel Documentation**: For more detailed instructions and troubleshooting, refer to the [Vercel Documentation](https://vercel.com/docs).
- **Manage Deployments**: View deployment history, revert to previous versions, and manage your live application directly from your Vercel dashboard.

### Conclusion

By following these steps, you can deploy and manage your "Contact Us" form application on Vercel, allowing it to be accessed worldwide with minimal setup. This process enhances your project’s visibility and accessibility, making it available to a broader audience.
