# Bangla Web Fonts CDN

![License](https://img.shields.io/badge/license-Open%20Source-green)
![Fonts](https://img.shields.io/badge/fonts-3-blue)
![Status](https://img.shields.io/badge/status-active-success)

Free Bangla Web Fonts CDN for beautiful Bengali typography on the web. Project by **Sadi Jubair**.

## 🌐 Website
**[fonts.sadi.com.bd](https://fonts.sadi.com.bd)**

## ✨ Features

- ⚡ **Lightning Fast** - Optimized web fonts with WOFF2 format
- 🌍 **GitHub CDN** - Reliable global content delivery via GitHub
- 💯 **Free & Open** - 100% free for personal and commercial use
- 🎨 **Beautiful Typography** - High-quality Bengali fonts
- 📱 **Responsive** - Works perfectly on all devices

## 🚀 Quick Start

### Method 1: HTML Link (Recommended)

Add this in the `<head>` section of your HTML:

```html
<link href="https://fonts.sadi.com.bd/fonts/bcc-purno/font.css" rel="stylesheet">
```

### Method 2: CSS Import

Import in your CSS file:

```css
@import url('https://fonts.sadi.com.bd/fonts/bcc-purno/font.css');
```

### Use the Font

Apply the font in your CSS:

```css
body {
  font-family: 'BCC Purno', sans-serif;
}

.bangla-text {
  font-family: 'BCC Purno', sans-serif;
}
```

## 📚 Available Fonts

### 1. BCC Purno
Modern and clean Bengali font
- **Formats:** WOFF2, WOFF
- **CDN:** `https://fonts.sadi.com.bd/fonts/bcc-purno/font.css`
- **Family:** `'BCC Purno', sans-serif`

### 2. Hadi
Elegant Bengali typography
- **Formats:** TrueType (TTF)
- **Variants:** Hadi, Hadi Rounded
- **CDN:** `https://fonts.sadi.com.bd/fonts/hadi/font.css`
- **Family:** `'Hadi', sans-serif`

### 3. July
Versatile font with multiple weights
- **Formats:** TrueType (TTF)
- **Weights:** Regular (400), Bold (700)
- **Styles:** Normal, Italic
- **CDN:** `https://fonts.sadi.com.bd/fonts/july/font.css`
- **Family:** `'July', sans-serif`

## 📁 Project Structure

```
bangla-web-fonts/
├── fonts/
│   ├── bcc-purno/
│   │   ├── BCC Purno.woff
│   │   ├── BCC Purno.woff2
│   │   └── font.css
│   ├── hadi/
│   │   ├── Hadi.ttf
│   │   ├── Hadi (Rounded).ttf
│   │   └── font.css
│   └── july/
│       ├── July-Regular.ttf
│       ├── July-Italic.ttf
│       ├── July-Bold.ttf
│       ├── July-Bold-Italic.ttf
│       └── font.css
├── assets/
│   ├── app.js
│   └── fonts.css
├── index.html
├── bcc-purno.html
├── hadi.html
├── july.html
└── README.md
```

## 🛠️ Development

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bangla-web-fonts.git
cd bangla-web-fonts
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository **Settings** → **Pages**
3. Select source: **Deploy from a branch**
4. Choose branch: **main** and folder: **/ (root)**
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/bangla-web-fonts/`

### Custom Domain Setup

1. Add a `CNAME` file in the root directory:
```
fonts.sadi.com.bd
```

2. Configure DNS at your domain provider:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `yourusername.github.io`

3. Enable HTTPS in GitHub Pages settings

## 📖 Usage Examples

### Basic Usage
```html
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.sadi.com.bd/fonts/july/font.css" rel="stylesheet">
  <style>
    body {
      font-family: 'July', sans-serif;
    }
  </style>
</head>
<body>
  <h1>বাংলা ওয়েব ফন্ট</h1>
  <p>আমি বাংলায় মাতি উল্লাসে</p>
</body>
</html>
```

### Multiple Fonts
```html
<link href="https://fonts.sadi.com.bd/fonts/bcc-purno/font.css" rel="stylesheet">
<link href="https://fonts.sadi.com.bd/fonts/july/font.css" rel="stylesheet">

<style>
  h1 { font-family: 'BCC Purno', sans-serif; }
  p { font-family: 'July', sans-serif; }
</style>
```

## 👨‍💻 Developer

**Sadi Jubair**
- Website: [fonts.sadi.com.bd](https://fonts.sadi.com.bd)
- Project: Bangla Web Fonts CDN

## 📄 License

This project is open source. Each font comes with its own license. Please refer to individual font folders for specific license details.

### Font Licenses
- **BCC Purno**: See font license file
- **Hadi**: See font license file
- **July**: See font license file

### Website Content
The website and documentation are available under open-source terms. Feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new Bengali fonts
- Improve documentation
- Report bugs
- Suggest features

Please ensure fonts are properly licensed for web distribution.

## 🙏 Acknowledgments

Special thanks to the original font creators and the Bengali typography community.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/bangla-web-fonts/issues)
- **Website**: [fonts.sadi.com.bd](https://fonts.sadi.com.bd)

---

<div align="center">
  
**Made with ❤️ by Sadi Jubair**

© 2026 Bangla Web Fonts CDN. All fonts respect their original licenses.

[Website](https://fonts.sadi.com.bd) • [GitHub](https://github.com/yourusername/bangla-web-fonts)

</div>
