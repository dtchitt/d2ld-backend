# Stage 1: Build the TypeScript application
FROM node:lts AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Setup the production image
FROM node:lts
WORKDIR /usr/src/app
# Only copy necessary files and the build from the previous stage
COPY --from=builder /usr/src/app/package*.json ./
# Install only production dependencies
RUN npm install --only=production
COPY --from=builder /usr/src/app/dist/ dist/
# Set the environment variable for the port (useful for documentation)
ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/index.js"]
