#!/bin/bash

# 1. Install dependencies (just in case)
echo "Installing dependencies..."
npm install

# 2. Build the project
echo "Building the website for production..."
npm run build

# 3. Create the ZIP file from the dist folder
# Hostinger expects the contents of public_html, which matches our 'dist' folder.
echo "Creating hostinger_deploy.zip..."
if [ -d "dist" ]; then
  cd dist
  # Zip all contents of dist recursively
  zip -r ../hostinger_deploy.zip .
  cd ..
  echo "--------------------------------------------------------"
  echo "SUCCESS! created 'hostinger_deploy.zip'"
  echo "--------------------------------------------------------"
  echo "Please upload 'hostinger_deploy.zip' to the Hostinger screen."
else
  echo "Error: Build failed. 'dist' directory not found."
fi
