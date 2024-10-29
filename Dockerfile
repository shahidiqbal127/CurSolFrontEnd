# Use Node 16.20.2 as the base image
FROM node:16.20.2

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 (or the port your app uses)
EXPOSE 3000

# Start the React app
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
