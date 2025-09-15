Here's a comprehensive README file for your React cloud deployment project:

# React Cloud Deployment Project

A React application with automated CI/CD pipeline deploying to AWS EC2 using GitHub Actions, Docker, and AWS services.

## 🚀 Features

- **React.js** frontend application
- **Docker** containerization
- **AWS EC2** deployment
- **GitHub Actions** CI/CD pipeline
- **Automated testing** and linting
- **SSL/TLS** secured deployment

## 📋 Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/) installed locally
- [AWS Account](https://aws.amazon.com/)
- [Docker Hub](https://hub.docker.com/) account
- SSH key pair for AWS EC2

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ShashmithaBan/React-cloud-deploy.git
cd React-cloud-deploy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_ENV=production
```

### 4. AWS Configuration

#### Create IAM User with permissions:
- AmazonEC2FullAccess
- AmazonS3FullAccess (if needed)
- IAMReadOnlyAccess

#### Generate SSH Key Pair in AWS:
1. Go to AWS EC2 Console
2. Navigate to "Key Pairs"
3. Create new key pair named `github-actions`
4. Download the private key (.pem file)

### 5. GitHub Secrets Setup

Go to your repository → Settings → Secrets → Actions → New repository secret:

Add these secrets:

| Secret Name | Value |
|-------------|-------|
| `AWS_ACCESS_KEY_ID` | Your AWS access key |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret key |
| `AWS_REGION` | `us-east-1` (or your preferred region) |
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_PASSWORD` | Your Docker Hub password/access token |
| `SSH_PRIVATE_KEY` | Content of your AWS .pem file |

### 6. Docker Hub Setup

1. Create a repository on Docker Hub named `react-docker-aws-deploy`
2. Generate an access token in Docker Hub settings

### 7. Local Development

```bash
# Start development server
npm start

# Run tests
npm test

# Run linting
npm run lint

# Build for production
npm run build
```

## 🛠️ CI/CD Pipeline

The GitHub Actions workflow includes:

1. **Test**: Runs unit tests on Ubuntu
2. **Lint**: Checks code quality and style
3. **Build & Push**: Builds Docker image and pushes to Docker Hub
4. **Deploy**: Deploys to AWS EC2 instance

### Workflow Triggers:
- Push to `main` branch
- Manual trigger from GitHub Actions

## 🌐 Deployment Architecture

```
GitHub → Docker Hub → AWS EC2
  │          │           │
  │          │           └── Ubuntu Server
  │          │                ├── Docker
  │          │                └── React App (port 80)
  │          │
  │          └── Docker Image Storage
  │
  └── Source Code & CI/CD
```

## 📁 Project Structure

```
React-cloud-deploy/
├── src/                 # React source code
├── public/              # Static files
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Multi-container setup
├── .github/
│   └── workflows/
│       └── deploy.yml   # CI/CD pipeline
├── nginx.conf          # Nginx configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Customization

### Update Docker Image Name
Edit in `.github/workflows/deploy.yml`:
```yaml
tags: your-docker-username/react-docker-aws-deploy:v1
```

### Change AWS Region
Update `AWS_REGION` secret in GitHub to your preferred region.

### Modify EC2 Instance Type
Edit in `.github/workflows/deploy.yml`:
```yaml
--instance-type t2.micro  # Change to t2.small, t3.micro, etc.
```

## 🚨 Troubleshooting

### Common Issues:

1. **InvalidKeyPair.NotFound**: Ensure SSH key exists in correct AWS region
2. **Docker permission denied**: EC2 instance needs docker group permissions
3. **Invalid AMI ID**: AMI IDs are region-specific
4. **Build failures**: Check Node.js version compatibility

### Debug Steps:

1. Check GitHub Actions logs for specific errors
2. Verify all secrets are correctly set in GitHub
3. Ensure AWS IAM user has proper permissions
4. Confirm Docker Hub repository exists and is accessible

## 📞 Support

If you encounter issues:

1. Check GitHub Actions workflow logs
2. Verify AWS EC2 instance status
3. Ensure all secrets are properly configured
4. Check Docker Hub repository accessibility



## 🙏 Acknowledgments

- React.js team
- GitHub Actions
- AWS EC2
- Docker team

---

**Happy Deployment! 🚀**

This setup will automatically deploy your React application to AWS EC2 whenever you push to the main branch, providing a fully automated CI/CD pipeline.
