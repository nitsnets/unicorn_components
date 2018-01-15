
# The script should immediately exit if any command in the script fails.
set -e

# Go to the project root directory
cd $(dirname $0)/..

echo "Starting the build process."

echo "Preparing... "
rm -rf dist
# Replaces moment imports to make it bundler compatible
find . -name "*.ts" -type f -exec sed -i '' -e 's/import \* as moment from/import moment from/g' {} +
# Replaces components template and styles URL with the inline content
# And puts the result at ./tmp/
./node_modules/.bin/gulp inline
echo "Done!"

echo "Compiling, bundling and minifying project... "
# Compiles the comtent of ./tmp/ and puts the result at ./dist/
./node_modules/.bin/ngc -p tsconfig.app.json
# Bundles the content of ./dist/ and puts the result at ./dist/bundles/
./node_modules/.bin/rollup -c
#Minify the content of ./dist/bundles/unicorn.components.umd.js and puts the result at ./dist/bundles/unicorn.components.umd.min.js
./node_modules/.bin/uglifyjs dist/bundles/unicorn.components.umd.js --screw-ie8 --compress --mangle --comments --output dist/bundles/unicorn.components.umd.min.js
echo "Done!"

echo "Copying static files ..."
cp package.dist.json dist/package.json
cp -R src/styles dist/src/styles
echo "Done!"

echo "Undoing preparation... "
find . -name "*.ts" -type f -exec sed -i '' -e 's/import moment from/import \* as moment from/g' {} +
rm -rf tmp
echo "Done!"

echo "Build successfull."
