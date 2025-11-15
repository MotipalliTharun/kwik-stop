# Deploying Kwik Stop to Vercel

## Option 1: Using Vercel CLI (Fastest)

### Step 1: Login to Vercel
```bash
npx vercel login
```

### Step 2: Deploy
From the project root directory:
```bash
npx vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No**
- Project name: **kwik-stop** (or your preferred name)
- Directory: **./** (default)
- Override settings? **No**

### Step 3: Deploy to Production
```bash
npx vercel --prod
```

**Note:** Using `npx` doesn't require installing Vercel CLI globally. It will run directly.

## Option 2: Using GitHub Integration (Recommended for Continuous Deployment)

### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Kwik Stop website"

# Create a repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/kwik-stop.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**

## Option 3: Deploy via Vercel Dashboard (Without Git)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Click **"Browse"** and upload your project folder
4. Or drag and drop the project folder
5. Vercel will auto-configure everything
6. Click **"Deploy"**

## Project Configuration

The project is already configured with:
- ✅ `vercel.json` - Deployment settings
- ✅ `next.config.js` - Next.js configuration
- ✅ Build command: `npm run build`
- ✅ Output directory: `.next` (auto-detected)

## Notes

- All images in `/public/images/` will be automatically deployed
- The site will be available at: `https://kwik-stop.vercel.app` (or your custom domain)
- Automatic deployments on every push to main branch (if using GitHub integration)

## Environment Variables

Currently no environment variables are needed. If you add any in the future:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add your variables there

## Custom Domain

After deployment:
1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

