# Deployment Guide - Bangla Web Fonts CDN

This guide will help you deploy your Bangla Web Fonts CDN to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Domain name (optional, for custom domain)

## Step 1: Initialize Git Repository

```bash
cd e:/WebDev/HTML/bangla-web-fonts
git init
git add .
git commit -m "Initial commit: Bangla Web Fonts CDN"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Repository name: `bangla-web-fonts`
4. Description: "Free Bangla Web Fonts CDN - Beautiful Bengali typography for the web"
5. Choose: **Public**
6. Do NOT initialize with README (we already have one)
7. Click "Create repository"

## Step 3: Push to GitHub

```bash
# Replace 'yourusername' with your GitHub username
git remote add origin https://github.com/yourusername/bangla-web-fonts.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 2-5 minutes for deployment

Your site will be live at: `https://yourusername.github.io/bangla-web-fonts/`

## Step 5: Configure Custom Domain (Optional)

### At GitHub:
1. In Pages settings, enter your custom domain: `fonts.sadi.com.bd`
2. Click **Save**
3. Check "Enforce HTTPS" (after DNS propagates)

### At Your Domain Provider:
Configure one of these options:

#### Option A: Using A Records (Recommended)
Add these A records pointing to your domain:
```
Type: A
Host: fonts (or @)
Value: 185.199.108.153

Type: A
Host: fonts (or @)
Value: 185.199.109.153

Type: A
Host: fonts (or @)
Value: 185.199.110.153

Type: A
Host: fonts (or @)
Value: 185.199.111.153
```

#### Option B: Using CNAME
```
Type: CNAME
Host: fonts
Value: yourusername.github.io
```

### Verify DNS:
Wait 5-30 minutes, then check:
```bash
nslookup fonts.sadi.com.bd
```

## Step 6: Test Your CDN

After deployment, test the fonts:

```html
<!DOCTYPE html>
<html lang="bn">
<head>
  <link href="https://fonts.sadi.com.bd/fonts/bcc-purno/font.css" rel="stylesheet">
  <style>
    body { font-family: 'BCC Purno', sans-serif; }
  </style>
</head>
<body>
  <h1>বাংলা ওয়েব ফন্ট টেস্ট</h1>
</body>
</html>
```

## Troubleshooting

### Fonts Not Loading?
- Check browser console for errors
- Verify file paths are correct
- Ensure CORS is enabled (GitHub Pages handles this automatically)
- Clear browser cache

### Custom Domain Not Working?
- Wait for DNS propagation (up to 48 hours)
- Verify DNS settings at your provider
- Check GitHub Pages settings
- Ensure CNAME file is in root directory

### 404 Errors?
- Ensure all files are pushed to GitHub
- Check file paths are correct
- Verify GitHub Pages is enabled

## Updating Your CDN

When you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically redeploy (takes 1-5 minutes).

## Performance Tips

1. **Use WOFF2 format** - Best compression and browser support
2. **Enable font-display: swap** - Prevents invisible text during font load
3. **Subset fonts** - Remove unused characters to reduce file size
4. **Use CDN caching** - GitHub Pages automatically caches static files

## Monitoring

- **GitHub Actions**: Check `.github/workflows/deploy.yml` for build status
- **Analytics**: Add Google Analytics or similar to track usage
- **Uptime**: Use services like UptimeRobot to monitor availability

## Support

- Issues: `https://github.com/yourusername/bangla-web-fonts/issues`
- Website: `https://fonts.sadi.com.bd`

---

## Quick Reference

### Font URLs
```
BCC Purno: https://fonts.sadi.com.bd/fonts/bcc-purno/font.css
Hadi:      https://fonts.sadi.com.bd/fonts/hadi/font.css
July:      https://fonts.sadi.com.bd/fonts/july/font.css
```

### Git Commands
```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "Your message"

# Push
git push

# Pull latest
git pull
```

---

**Congratulations!** Your Bangla Web Fonts CDN is now live! 🎉

Made with ❤️ by Sadi Jubair
