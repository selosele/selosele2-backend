# Use the official Node.js image as the base image
FROM node:16.14.2

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build NestJS application (assuming the build output goes to /dist)
RUN npm run build

# Set the working directory to the build directory
WORKDIR /app/dist

# Expose the port that the application will run on
EXPOSE 3000

# Command to run the application
CMD ["node", "main.js"]
