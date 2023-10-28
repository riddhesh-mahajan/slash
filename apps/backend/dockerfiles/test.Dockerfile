# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy your JavaScript file into the container
COPY dockerfiles/app.js .

# Specify the command to run when the container starts
CMD ["node", "app.js"]
