# Step 1: Build the application
FROM node:20.19 AS build

WORKDIR /usr/src/app

COPY . .

RUN yarn install --production=false

RUN yarn build

# Step 2: Create the production image
FROM node:20.19-slim

WORKDIR /usr/src/app

# Copy only the necessary build artifacts from the build stage
COPY --from=build /usr/src/app .


# Install runtime dependencies
RUN apt-get update -y && apt-get install -y libnss3 && rm -rf /var/lib/apt/lists/*

# Start the application
CMD ["yarn", "start"]
