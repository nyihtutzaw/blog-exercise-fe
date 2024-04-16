# Base image
FROM nginx:alpine

# Copy built Next.js application
COPY .next /usr/share/nginx/html

# Expose port (adjust if needed)
EXPOSE 80

# Configure default server block
CMD ["nginx", "-g", "daemon off;"]