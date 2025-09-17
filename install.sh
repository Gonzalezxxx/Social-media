#!/bin/bash

echo "🚀 Installing YouTube Report Dashboard dependencies..."

# Use yarn if available, otherwise npm
if command -v yarn &> /dev/null; then
    echo "📦 Using Yarn package manager..."
    yarn install
else
    echo "📦 Using npm package manager..."
    npm install --no-audit --progress=false
fi

echo "✅ Dependencies installed successfully!"
echo ""
echo "🎯 To start the development server:"
echo "   npm run dev"
echo ""
echo "🏗️  To build for production:"
echo "   npm run build"
echo ""
echo "📋 Project is ready!"