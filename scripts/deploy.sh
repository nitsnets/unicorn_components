if [ ! -f "dist/package.json" ]; then
  echo "Project is not built."
  npm run build
fi

echo "Starting deployment process."
cd dist
npm publish