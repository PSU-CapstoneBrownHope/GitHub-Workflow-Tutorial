# Base the image of off alpine linux with node
FROM node:alpine 

# Set the working directory
WORKDIR /usr/src/app

# Copy the source files into currnet working directory of the container
COPY src ./

# Install dependencies and build the application
RUN apk update && \
    npm install -g typescript && \
    tsc app.ts

# Run the application
CMD node app.js