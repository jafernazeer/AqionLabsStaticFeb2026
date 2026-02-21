# AqionLabs Website

Aqionlabs website built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

## 📦 Deploying to Hostinger

Hostinger requires a specific folder structure for React apps. We have included a script to automate this.

1. **Generate the Deployment File:**
   Run the following command in your terminal:
   ```bash
   sh generate_deploy_zip.sh
   ```

2. **Upload to Hostinger:**
   - Go to your Hostinger Control Panel > File Manager.
   - Navigate to the `public_html` folder.
   - Click "Upload" and select the `hostinger_deploy.zip` file created in step 1.
   - Right-click the uploaded zip file and select "Extract" (Extract into `public_html` or current directory).
   - Ensure the `index.html` file is directly inside `public_html`.

## 🐙 Saving to GitHub

To save your code to a new GitHub repository:

1. **Initialize Git:**
   Run the helper script:
   ```bash
   sh setup_github.sh
   ```

2. **Push to GitHub:**
   - Create a new repository at [github.com/new](https://github.com/new).
   - Copy the commands under "…or push an existing repository from the command line".
   - It will look something like this:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```

## 🛠 Project Structure

- `src/` (conceptually root): Source code
- `components/`: Reusable UI components (Navbar, Footer)
- `pages/`: Page components corresponding to routes
- `data.ts`: Static content for Services and Products
- `public/`: Static assets (images, favicon) and `.htaccess` for Hostinger
