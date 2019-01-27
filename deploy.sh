#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

yarn build

cd dist

echo 'ysfscream.xyz' > CNAME

cd ..

echo '👍 Created! CNAME'

yarn deploy