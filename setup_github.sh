#!/bin/bash

# Initialize git
echo "Initializing Git repository..."
git init

# Add all files
echo "Adding files..."
git add .

# Initial commit
echo "Committing files..."
git commit -m "Initial commit: AqionLabs Website"

# Rename branch to main
git branch -M main

echo "--------------------------------------------------------"
echo "Git repository initialized and files committed!"
echo "--------------------------------------------------------"
echo "NEXT STEPS:"
echo "1. Go to https://github.com/new and create a repository."
echo "2. Run the following commands (replace URL with your repo URL):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
echo "   git push -u origin main"
echo "--------------------------------------------------------"
