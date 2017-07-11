# 本地预览

事先安装 Ruby 和 Bundler。

创建本地预览，将 `_config.yml` 和 `Gemfile` 复制到项目根目录，然后运行

```bash
bundle install
bundle exec jekyll serve
```

以后注意跟 GitHub Pages server 保持一致，更新 gem：

```bash
bundle update
```
