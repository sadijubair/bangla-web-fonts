# Quick Reference Card - Bangla Web Fonts CDN

## 🔗 Font CDN Links

```html
<!-- BCC Purno -->
<link href="https://fonts.sadi.com.bd/fonts/bcc-purno/font.css" rel="stylesheet">

<!-- Hadi -->
<link href="https://fonts.sadi.com.bd/fonts/hadi/font.css" rel="stylesheet">

<!-- July -->
<link href="https://fonts.sadi.com.bd/fonts/july/font.css" rel="stylesheet">
```

## 🎨 CSS Usage

```css
/* BCC Purno */
.text-bcc-purno {
  font-family: 'BCC Purno', sans-serif;
}

/* Hadi */
.text-hadi {
  font-family: 'Hadi', sans-serif;
}

/* Hadi Rounded */
.text-hadi-rounded {
  font-family: 'Hadi Rounded', sans-serif;
}

/* July */
.text-july {
  font-family: 'July', sans-serif;
}

/* July with weights */
.text-july-regular {
  font-family: 'July', sans-serif;
  font-weight: 400;
}

.text-july-bold {
  font-family: 'July', sans-serif;
  font-weight: 700;
}

.text-july-italic {
  font-family: 'July', sans-serif;
  font-style: italic;
}
```

## 📦 Complete HTML Template

```html
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>বাংলা ওয়েব ফন্ট</title>
  
  <!-- Load Bangla Fonts -->
  <link href="https://fonts.sadi.com.bd/fonts/july/font.css" rel="stylesheet">
  
  <style>
    body {
      font-family: 'July', sans-serif;
      line-height: 1.6;
    }
    
    h1, h2, h3 {
      font-weight: 700;
    }
  </style>
</head>
<body>
  <h1>বাংলা ওয়েব ফন্ট</h1>
  <p>আমি বাংলায় মাতি উল্লাসে, করি বাংলায় হাহাকার</p>
</body>
</html>
```

## 🚀 Git Commands

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/yourusername/bangla-web-fonts.git
git branch -M main
git push -u origin main

# Daily workflow
git add .
git commit -m "Update fonts"
git push

# Check status
git status

# View history
git log --oneline
```

## 🌐 DNS Configuration

### A Records (Recommended)
```
Type: A
Name: fonts (or @)
Value: 185.199.108.153

Type: A
Name: fonts (or @)
Value: 185.199.109.153

Type: A
Name: fonts (or @)
Value: 185.199.110.153

Type: A
Name: fonts (or @)
Value: 185.199.111.153
```

### CNAME Record
```
Type: CNAME
Name: fonts
Value: yourusername.github.io
```

## 🧪 Testing Locally

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📊 File Paths

```
Website:     https://fonts.sadi.com.bd
Homepage:    https://fonts.sadi.com.bd/index.html
BCC Purno:   https://fonts.sadi.com.bd/bcc-purno.html
Hadi:        https://fonts.sadi.com.bd/hadi.html
July:        https://fonts.sadi.com.bd/july.html
```

## 🔍 Font Information

| Font | Family Name | Formats | Weights | Styles |
|------|------------|---------|---------|--------|
| BCC Purno | 'BCC Purno' | WOFF2, WOFF | 100-900 | Normal |
| Hadi | 'Hadi' | TTF | 400 | Normal |
| Hadi Rounded | 'Hadi Rounded' | TTF | 400 | Normal |
| July | 'July' | TTF | 400, 700 | Normal, Italic |

## 📝 Import Methods

### Method 1: HTML Link (Recommended)
```html
<link href="https://fonts.sadi.com.bd/fonts/bcc-purno/font.css" rel="stylesheet">
```

### Method 2: CSS @import
```css
@import url('https://fonts.sadi.com.bd/fonts/bcc-purno/font.css');
```

### Method 3: JavaScript
```javascript
const link = document.createElement('link');
link.href = 'https://fonts.sadi.com.bd/fonts/bcc-purno/font.css';
link.rel = 'stylesheet';
document.head.appendChild(link);
```

## 🎯 Common Use Cases

### Entire Page
```css
body {
  font-family: 'July', sans-serif;
}
```

### Headings Only
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'BCC Purno', sans-serif;
}
```

### Specific Elements
```css
.bengali-text {
  font-family: 'Hadi', sans-serif;
}
```

### Multiple Fonts
```css
h1 { font-family: 'BCC Purno', sans-serif; }
h2 { font-family: 'Hadi', sans-serif; }
p { font-family: 'July', sans-serif; }
```

## 🛠️ Troubleshooting

### Font not loading?
1. Check browser console (F12)
2. Verify URL is correct
3. Clear browser cache (Ctrl+F5)
4. Check internet connection

### CORS error?
- GitHub Pages handles CORS automatically
- Ensure files are properly deployed

### DNS not working?
- Wait 24-48 hours for propagation
- Use `nslookup fonts.sadi.com.bd` to check
- Verify DNS settings at provider

## 📞 Quick Links

- **Website:** https://fonts.sadi.com.bd
- **GitHub:** https://github.com/yourusername/bangla-web-fonts
- **Issues:** https://github.com/yourusername/bangla-web-fonts/issues
- **Docs:** [README.md](README.md)
- **Deploy:** [DEPLOYMENT.md](DEPLOYMENT.md)

---

**Developer:** Sadi Jubair  
**Project:** Bangla Web Fonts CDN  
**Version:** 1.0.0

---

Print this card or bookmark it for quick reference! 📌
