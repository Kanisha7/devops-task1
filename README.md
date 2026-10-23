

\# DevOps Task 1: Node.js CI/CD with Docker



\## Project Overview

This project demonstrates a simple Node.js application with automated testing and Docker image publishing using GitHub Actions.



\## Technologies Used

\- Node.js

\- Jest

\- Docker

\- GitHub Actions

\- Docker Hub

\- Git and GitHub



\## Application

The application runs on port 3000 and returns the message:



`Hello from DevOps Task 1!`



\## Automated Testing

Jest is used to test the application's HTTP response. GitHub Actions automatically runs the tests when code is pushed to the master branch or a pull request targets master.



\## Docker

A Dockerfile packages the Node.js application into a Docker image.



The GitHub Actions workflow builds the image and pushes it to Docker Hub when code is pushed to master.



\## Docker Hub Image

\- Repository: `kanishamanikandan/devops-task1`

\- Tag: `latest`



\## What I Learned

\- Creating and testing a Node.js application

\- Writing automated tests with Jest

\- Creating a Dockerfile

\- Automating CI workflows with GitHub Actions

\- Building and publishing Docker images to Docker Hub

\- Managing GitHub repository secrets securely



