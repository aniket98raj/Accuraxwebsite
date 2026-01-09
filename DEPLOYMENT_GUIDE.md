# AccuraX - Hostinger Deployment Guide

This guide will help you deploy your AccuraX trading platform to Hostinger.

## Prerequisites

- Hostinger account with hosting plan (Premium or Business recommended)
- Node.js installed on your local machine (v18 or higher)
- Git (optional, but recommended)

## Deployment Steps

### Step 1: Build the Application Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Build the production version**:
   ```bash
   npm run build
   ```

   This will create a `dist` folder with all the optimized production files.

### Step 2: Prepare Files for Upload

After running the build command, you'll have a `dist` folder containing:
- `index.html`
- `assets/` folder (CSS, JS, images)
- Other static files

### Step 3: Upload to Hostinger

#### Option A: Using File Manager (Recommended for Beginners)

1. **Log in to Hostinger hPanel**:
   - Go to https://hpanel.hostinger.com
   - Log in with your credentials

2. **Navigate to File Manager**:
   - Click on "File Manager" in the hPanel
   - Navigate to `public_html` folder (or your domain's root folder)

3. **Clear existing files** (if any):
   - Delete default files like `index.html`, `default.php` if present
   - Keep the `cgi-bin` folder if it exists

4. **Upload your files**:
   - Click "Upload Files" button
   - Upload ALL files from your `dist` folder
   - Make sure the structure looks like this:
     ```
     public_html/
     ├── index.html
     ├── assets/
     │   ├── index-[hash].js
     │   ├── index-[hash].css
     │   └── [other files]
     └── vite.svg (if any)
     ```

#### Option B: Using FTP/SFTP (Recommended for Advanced Users)

1. **Get FTP credentials** from Hostinger hPanel:
   - Go to Files → FTP Accounts
   - Create or use existing FTP account

2. **Use an FTP client** (FileZilla, Cyberduck, etc.):
   - Host: Your domain or FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

3. **Upload files**:
   - Connect to your server
   - Navigate to `public_html`
   - Upload all files from `dist` folder

### Step 4: Configure for Single Page Application (SPA)

Since this is a React Router application, you need to configure URL rewrites:

1. **Create/Edit `.htaccess` file** in `public_html`:
   
   Upload the `.htaccess` file included in this project to your `public_html` folder.

2. **Verify the file contains** (it should already have this):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Step 5: Test Your Deployment

1. Visit your domain in a browser
2. Test all pages:
   - Homepage: `https://yourdomain.com/`
   - About: `https://yourdomain.com/about`
   - Pricing: `https://yourdomain.com/pricing`
   - Contact: `https://yourdomain.com/contact`
   - Login: `https://yourdomain.com/login`

3. Test navigation by clicking links
4. Test direct URL access (type URLs in browser)
5. Check mobile responsiveness

## Common Issues & Solutions

### Issue 1: Blank Page
**Solution**: Check browser console for errors. Make sure all files uploaded correctly.

### Issue 2: 404 Error on Page Refresh
**Solution**: Ensure `.htaccess` file is properly configured and uploaded.

### Issue 3: CSS/JS Not Loading
**Solution**: 
- Check if `assets` folder uploaded correctly
- Clear browser cache
- Verify file permissions (644 for files, 755 for folders)

### Issue 4: Images Not Loading
**Solution**: 
- All images are loaded from Unsplash CDN, so this shouldn't be an issue
- Check your internet connection
- Verify browser isn't blocking external images

## SSL Certificate (HTTPS)

1. Go to hPanel → SSL
2. Install free SSL certificate
3. Enable "Force HTTPS redirect"

## Performance Optimization

### Enable Compression (already configured in .htaccess):
- Gzip compression enabled for CSS, JS, HTML
- Browser caching configured

### CDN (Optional):
- Consider using Cloudflare for better performance
- Hostinger integrates with Cloudflare easily

## Custom Domain Setup

If using a custom domain:

1. **Point DNS to Hostinger**:
   - A Record: Points to your Hostinger IP
   - CNAME: www points to your domain

2. **Wait for DNS propagation** (up to 24-48 hours)

3. **Update domain in hPanel**:
   - Add domain in Domains section
   - Point to correct folder

## Updating Your Site

When you make changes:

1. Make changes to your code locally
2. Run `npm run build` again
3. Upload new files from `dist` folder
4. Clear browser cache and test

## Quick Deployment Checklist

- [ ] Built application with `npm run build`
- [ ] Uploaded all files from `dist` folder to `public_html`
- [ ] Uploaded `.htaccess` file
- [ ] Tested all pages and routes
- [ ] Enabled SSL certificate
- [ ] Configured custom domain (if applicable)
- [ ] Tested on mobile devices
- [ ] Cleared browser cache

## Support

If you encounter issues:
- Hostinger Live Chat: Available 24/7
- Hostinger Knowledge Base: https://support.hostinger.com
- Check browser console for JavaScript errors

## File Structure After Deployment

```
public_html/
├── .htaccess               # URL rewrite rules
├── index.html              # Main HTML file
├── vite.svg               # Favicon (if any)
└── assets/                # All JS, CSS, and static assets
    ├── index-[hash].js    # Main JavaScript bundle
    ├── index-[hash].css   # Main CSS bundle
    └── [other assets]
```

## Important Notes

1. **Never edit files directly on the server** - Always make changes locally and re-upload
2. **Keep a backup** of your `dist` folder before uploading new versions
3. **Test locally first** before deploying to production
4. **Monitor website analytics** to track performance and visitor behavior

---

**Deployment Complete! 🚀**

Your AccuraX trading platform should now be live on Hostinger!
