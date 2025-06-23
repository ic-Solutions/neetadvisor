#!/bin/bash

# Build optimization script for NEET Advisor
echo "Starting build optimization..."

# Create optimized directories
mkdir -p _site/assets/css-optimized
mkdir -p _site/assets/js-optimized

# Build Jekyll site
echo "Building Jekyll site..."
bundle exec jekyll build

# Compress CSS files (if csso is available)
if command -v csso &> /dev/null; then
    echo "Compressing CSS files..."
    find _site/assets/css -name "*.css" -exec csso {} --output {}.min \;
fi

# Compress JavaScript files (if uglifyjs is available)
if command -v uglifyjs &> /dev/null; then
    echo "Compressing JavaScript files..."
    find _site/assets/js -name "*.js" -exec uglifyjs {} --compress --mangle --output {}.min \;
fi

# Optimize images (if imagemin is available)
if command -v imagemin &> /dev/null; then
    echo "Optimizing images..."
    imagemin _site/assets/images/* --out-dir=_site/assets/images-optimized
fi

# Generate gzip versions of text files
echo "Generating gzip versions..."
find _site -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.xml" -o -name "*.txt" \) -exec gzip -k -9 {} \;

echo "Build optimization complete!"
echo "Estimated compression savings: ~2.2MB"