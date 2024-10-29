# Step 1: Build the React application
# Use an official Node.js image as the build stage
FROM node:18 as build

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the static files
# Use a lightweight server to serve the built files
FROM node:18-alpine as production

# Install serve to serve static files
RUN npm install -g serve

# Copy build files from the previous stage
COPY --from=build /app/build /app/build

# Expose the port Railway will use
EXPOSE 3000

# Command to serve the build directory
CMD ["serve", "-s", "build", "-l", "3000"]
