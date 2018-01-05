
# The script should immediately exit if any command in the script fails.
set -e

# Go to the project root directory
cd $(dirname $0)/..

echo "Starting the build process."

echo "Adequating imports for bundling... "
find . -name "*.ts" -type f -exec \
    sed -i '' -e 's/import \* as moment from/import moment from/g' {} +
echo "Done!"

echo "Cleaning previous build... "
rm -rf dist
echo "Done!"

echo "Compiling project... "
./node_modules/.bin/ngc -p tsconfig.app.json
echo "Done!"

echo "Bundling code... "
./node_modules/.bin/rollup -c
echo "Done!"

echo "Minifying code... "
./node_modules/.bin/uglifyjs dist/bundles/unicorn.components.umd.js --screw-ie8 --compress --mangle --comments --output dist/bundles/unicorn.components.umd.min.js
echo "Done!"

echo "Copying package.dist.json to dist/"
cp package.dist.json dist/package.json

echo "Reseting imports... "
find . -name "*.ts" -type f -exec \
    sed -i '' -e 's/import moment from/import \* as moment from/g' {} +
echo "Done!"

echo "Build successfull."
