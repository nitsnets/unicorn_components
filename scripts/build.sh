# The script should immediately exit if any command in the script fails.
set -e

# Go to the project root directory
cd $(dirname $0)/..

echo "Starting the build process."

# Clean previous build result
echo "Cleaning previous build... "
rm -rf dist
echo "Done!"

# Compile the project
echo "Compiling project... "
ngc -p tsconfig.app.json
echo "Done!"

# Bundle it
echo "Bundling code... "
rollup -c
echo "Done!"

# And minify
echo "Minifying code... "
uglifyjs dist/bundles/unicorn.components.umd.js --screw-ie8 --compress --mangle --comments --output dist/bundles/unicorn.components.umd.min.js
echo "Done!"

echo "Build successfull."
