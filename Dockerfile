FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (cache optimization)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy application code
COPY server.js .

# App runs on port 3000
EXPOSE 3000

# Start app
CMD ["npm", "start"]
