# Portfolio Backend

This is the Node.js backend for the portfolio website. It provides API endpoints for the contact form and other features.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update the `.env` file with your configuration:
- Set up your email credentials
- Configure the frontend URL
- Set the port if needed

## Development

Run the development server:
```bash
npm run dev
```

## Production

Build and start the production server:
```bash
npm start
```

## API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Sends an email when the contact form is submitted
  - Required fields: name, email, subject, message

### Health Check
- **GET** `/health`
  - Returns server status

## Deployment

This backend is designed to be deployed on Vercel:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set up environment variables in Vercel dashboard:
- Copy all variables from `.env` file
- Update URLs for production

## Environment Variables

- `PORT`: Server port (default: 3000)
- `FRONTEND_URL`: Frontend application URL
- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP server port
- `SMTP_SECURE`: Use SSL/TLS
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `SMTP_FROM`: Sender email address
- `CONTACT_EMAIL`: Recipient email address 