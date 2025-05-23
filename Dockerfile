# Dockerfile
# Use the official Node.js image with Alpine
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the app on port 3000
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]