# 🚀 Quick Deploy to Hostinger - 5 Minutes

## Step-by-Step Guide

### 1️⃣ Build Your App (2 minutes)

Open terminal/command prompt in your project folder:

```bash
npm install
npm run build
```

✅ This creates a `dist` folder with your website files.

---

### 2️⃣ Login to Hostinger (30 seconds)

1. Go to: https://hpanel.hostinger.com
2. Login with your Hostinger account
3. Click on your hosting plan

---

### 3️⃣ Upload Files (2 minutes)

**Method 1: File Manager (Easiest)**

1. In hPanel, click **"File Manager"**
2. Open the **`public_html`** folder
3. **Delete** any existing files (like `index.html`, `default.php`)
   - ⚠️ Keep `cgi-bin` folder if present
4. Click **"Upload"** button (top right)
5. Select **ALL files** from your `dist` folder:
   - ✅ `index.html`
   - ✅ `assets` folder
   - ✅ `.htaccess` file (from project root)
   - ✅ Any other files in `dist`

6. Wait for upload to complete ✅

---

### 4️⃣ Configure SPA Routing (30 seconds)

1. In File Manager, check if **`.htaccess`** file exists in `public_html`
2. If NOT present:
   - Upload the `.htaccess` file from your project root folder
3. If already present:
   - Make sure it contains the React Router rewrite rules (see DEPLOYMENT_GUIDE.md)

---

### 5️⃣ Test Your Website (30 seconds)

1. Open your domain in browser: `https://yourdomain.com`
2. Test navigation:
   - ✅ Home
   - ✅ About
   - ✅ Pricing
   - ✅ Contact
   - ✅ Login

3. Refresh page on different routes - should work! ✅

---

## ✅ DONE! Your website is LIVE! 🎉

---

## 🔧 Troubleshooting

### Problem: Blank page
**Fix**: Check browser console (F12) for errors. Re-upload files.

### Problem: 404 on refresh
**Fix**: Upload `.htaccess` file to `public_html`

### Problem: CSS not loading
**Fix**: 
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check if `assets` folder uploaded correctly

---

## 🔒 Enable SSL (HTTPS) - RECOMMENDED

1. In hPanel → **SSL**
2. Click **"Install SSL"** (Free)
3. Enable **"Force HTTPS"**
4. Wait 5 minutes ✅

---

## 📱 What Files to Upload?

Upload **EVERYTHING** from the `dist` folder:

```
dist/
├── index.html          ← Main file
├── assets/            ← All CSS, JS files
│   ├── index-abc123.js
│   ├── index-xyz789.css
│   └── ...
└── vite.svg           ← Icon (if present)

Also upload from project root:
├── .htaccess          ← IMPORTANT for routing!
```

---

## 🎯 Final Checklist

- [ ] Ran `npm run build`
- [ ] Uploaded all `dist` files to `public_html`
- [ ] Uploaded `.htaccess` file
- [ ] Tested website in browser
- [ ] All pages work (Home, About, Pricing, Contact, Login)
- [ ] Page refresh works on all routes
- [ ] Enabled SSL (HTTPS)

---

## 💡 Pro Tips

1. **Always build locally before uploading**
2. **Don't edit files directly on server**
3. **Keep backup of your `dist` folder**
4. **Clear browser cache when testing**

---

## 📞 Need Help?

- Hostinger Live Chat: 24/7 available in hPanel
- Check `DEPLOYMENT_GUIDE.md` for detailed instructions

---

**Happy Deploying! 🚀**
