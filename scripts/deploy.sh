yarn build
sudo rm docs/bundle.js docs/index.html
sudo mv dist/* docs
sudo rm -rf dist
git push origin master
