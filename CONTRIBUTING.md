# Bangla Web Fonts CDN - Contributing Guide

Thank you for your interest in contributing to Bangla Web Fonts CDN!

## How to Contribute

### Adding New Fonts

1. **Font Requirements**
   - Must be a Bengali/Bangla font
   - Must have proper licensing for web distribution
   - Should be in web-optimized formats (WOFF2, WOFF, or TTF)

2. **Steps to Add a Font**
   - Create a new folder in `fonts/` directory with the font name (lowercase, hyphenated)
   - Add font files to the folder
   - Create a `font.css` file with proper @font-face declarations
   - Create an HTML page for the font (e.g., `font-name.html`)
   - Update `index.html` to include the new font
   - Update README.md with font information

3. **Font CSS Template**
```css
@font-face {
  font-family: 'Font Name';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  src: url('font-file.woff2') format('woff2'),
       url('font-file.woff') format('woff');
}
```

### Reporting Issues

- Use GitHub Issues to report bugs or suggest features
- Provide clear descriptions and examples
- Include browser/OS information if relevant

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-font`)
3. Make your changes
4. Test locally
5. Commit with clear messages
6. Push to your fork
7. Create a Pull Request

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help maintain a positive community

## Questions?

Open an issue or contact the maintainer.

---
Thank you for contributing to Bangla Web Fonts CDN!
