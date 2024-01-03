# Use the official Node.js runtime as the base image
FROM node:18 as build

ARG VITE_GRAPHQL_API_ENDPOINT
ARG PORT

ENV VITE_GRAPHQL_API_ENDPOINT=$VITE_GRAPHQL_API_ENDPOINT
ENV PORT=$PORT

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY yarn.lock ./

# Copy the entire application code to the container
COPY . .

# Install dependencies
RUN yarn && yarn run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# COPY --from=build /app/dist /site

# Keep original nginx config
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf_orig
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the Nginx server
EXPOSE 80
EXPOSE $PORT

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
