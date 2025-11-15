# Images Directory

This directory is where you should place all images for the Kwik Stop website.

## 📁 Folder Structure

Place your images in this directory (`public/images/`). Files in the `public` directory are served statically and can be accessed directly from the root URL.

## 🖼️ Required Images

### Stop Sign Image
- **File name**: `stop-sign.png`
- **Location**: `/public/images/stop-sign.png`
- **Access URL**: `/images/stop-sign.png`
- **Description**: The stop sign icon used throughout the website (navigation, hero section, sections headers)
- **Recommended size**: 400x400px or larger
- **Format**: PNG with transparency preferred

## 📸 Store Photos

You can add your store photos here. Suggested file names:

- `store-front.jpg` or `store-front.png` - Store exterior photo
- `store-interior.jpg` or `store-interior.png` - Store interior photo
- `beverages.jpg` or `beverages.png` - Beverages section photo
- `beer-section.jpg` - Beer section photo
- `products.jpg` - Products display photo
- `store-exterior-1.jpg`, `store-exterior-2.jpg` - Multiple exterior photos
- `store-interior-1.jpg`, `store-interior-2.jpg` - Multiple interior photos

### Photo Guidelines

1. **File Formats**: JPG, PNG, or WebP
2. **Recommended Size**: 
   - Width: 1200px - 2000px
   - Height: 800px - 1200px
   - Aspect Ratio: 4:3 or 16:9
3. **File Size**: Optimize images to under 500KB for faster loading
4. **Naming Convention**: Use lowercase, hyphens for spaces (e.g., `store-front.jpg`)

## 🎨 Using Your Images

Once you add images to this directory, they will be automatically used in the website. The website code will:

1. First try to load images from `/images/` directory
2. Fall back to placeholder images if local images are not found

## 📝 Example Usage

After adding an image like `store-front.jpg`:

- Access it in code: `/images/store-front.jpg`
- Or use Next.js Image component:
  ```tsx
  <Image src="/images/store-front.jpg" alt="Store Front" width={600} height={400} />
  ```

## 🚀 Image Optimization Tips

1. **Compress Images**: Use tools like TinyPNG or ImageOptim to reduce file size
2. **Use WebP**: Modern format with better compression (optional)
3. **Responsive Images**: The website will automatically optimize images for different screen sizes
4. **Lazy Loading**: Images load as users scroll (already implemented)

## 📂 Current Image Structure

```
public/
  └── images/
      ├── stop-sign.png          (required)
      ├── store-front.jpg        (optional)
      ├── store-interior.jpg     (optional)
      ├── beverages.jpg          (optional)
      └── ...                    (add more as needed)
```

## ⚠️ Important Notes

- **Don't delete this README file** - it helps organize your images
- Images in `public/images/` are publicly accessible
- Keep file names descriptive and lowercase
- Remove unused images to keep the site fast

## 🔄 Updating Images

When you update an image:
1. Replace the old file with the new one (keep the same filename)
2. The website will automatically use the new image
3. You may need to clear your browser cache to see changes immediately

## 📱 Mobile Optimization

The website automatically optimizes images for mobile devices, but it's best to:
- Use high-quality images (they'll be compressed automatically)
- Keep aspect ratios consistent
- Test on mobile devices after adding new images

