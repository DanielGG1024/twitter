# 当发生错误时中止脚本
set -e

# cd 到构建输出的目录下 
cd dist

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://DanielGG1024.github.io
# git push -f git@github.com:DanielGG1024/DanielGG1024.github.io.git main

# 部署到 https://DanielGG1024.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/twitter-front-end-vue.git master:gh-pages


cd -
