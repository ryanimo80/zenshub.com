# Deployment Guide - ZensHub Website

This guide provides instructions for deploying the ZensHub website to various hosting platforms.

## 🚀 Build for Production

First, build the project for production:

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## 📦 Deployment Options

### 1. Vercel (Recommended)

Vercel provides the easiest deployment experience:

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Or connect GitHub repository**:
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically deploy on every push

### 2. Netlify

1. **Drag and Drop**:
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deployment area

2. **Git Integration**:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### 3. GitHub Pages

1. **Add GitHub Pages dependency**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

1. **Upload to S3**:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

2. **Configure CloudFront** for CDN and HTTPS

### 5. Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```

3. **Deploy**:
   ```bash
   firebase deploy
   ```

## 🔧 Environment Variables

Create a `.env` file for production:

```env
VITE_APP_TITLE=ZensHub
VITE_APP_DESCRIPTION=Mobile Android Development Experts
VITE_CONTACT_EMAIL=hello@zenshub.com
VITE_CONTACT_PHONE=+84 123 456 789
```

## 📊 Performance Optimization

### 1. Image Optimization

- Use WebP format for images
- Implement lazy loading
- Optimize image sizes

### 2. Code Splitting

The build already includes code splitting. Consider adding:

```javascript
// Dynamic imports for better performance
const LazyComponent = lazy(() => import('./components/LazyComponent'))
```

### 3. Caching

Configure caching headers:

```
# Cache static assets
*.js, *.css, *.png, *.jpg, *.webp: 1 year
*.html: 1 hour
```

## 🔍 SEO Configuration

### 1. Meta Tags

All meta tags are already configured in `index.html`

### 2. Sitemap

The sitemap is automatically generated in `public/sitemap.xml`

### 3. Robots.txt

Configured in `public/robots.txt`

### 4. Google Analytics

Add Google Analytics tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security

### 1. HTTPS

Ensure HTTPS is enabled on your hosting platform

### 2. Security Headers

Add security headers:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

### 3. Environment Variables

Never commit sensitive information to version control

## 📱 Mobile Optimization

The website is already optimized for mobile devices with:

- Responsive design
- Touch-friendly interactions
- Optimized images
- Fast loading times

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

## 📈 Monitoring

### 1. Performance Monitoring

- Google PageSpeed Insights
- WebPageTest
- Lighthouse

### 2. Error Tracking

Consider adding error tracking:

```bash
npm install @sentry/react
```

### 3. Analytics

- Google Analytics
- Hotjar for user behavior
- Google Search Console

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**: Check TypeScript errors
2. **Images Not Loading**: Verify image paths
3. **Styling Issues**: Check CSS imports
4. **Performance Issues**: Optimize bundle size

### Support

For deployment issues, check:
- Hosting platform documentation
- Build logs
- Browser console errors

---

**Note**: Always test the production build locally before deploying:

```bash
npm run build
npm run preview
```

