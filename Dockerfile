FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the TypeScript code to dist/
RUN npm run build

# Expose app port (e.g., 3000)
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
