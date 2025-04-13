# Deploying to Vercel

This guide will help you deploy your Node.js backend to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. [Git](https://git-scm.com/downloads) installed on your computer
3. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Import your Git repository
   - Select the "backend" directory as the root directory
   - Click "Deploy"

3. **Configure Environment Variables**
   - In the Vercel project settings, go to "Environment Variables"
   - Add the following variables:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_SECURE=false
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-specific-password
     SMTP_FROM=your-email@gmail.com
     CONTACT_EMAIL=your-email@gmail.com
     FRONTEND_URL=https://your-frontend-url.vercel.app
     ```

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd backend
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy project
   - Configure environment variables when prompted

## Post-Deployment

1. **Test your API**
   - Visit `https://your-project.vercel.app/health` to check if the server is running
   - Test the contact form endpoint with a tool like Postman

2. **Update Frontend**
   - Update your frontend's API URL to point to your Vercel deployment
   - Example: `https://your-project.vercel.app/api/contact`

## Troubleshooting

- **Check Vercel logs** in the dashboard if deployment fails
- **Verify environment variables** are correctly set
- **Test locally** before deploying to ensure everything works

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Node.js on Vercel](https://vercel.com/docs/functions/serverless-functions/runtimes/node-js) 