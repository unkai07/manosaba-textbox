<div align="center">

# 🎭 魔法少女的魔女裁判文本框生成器 (Web版)

<img width="1200" height="390" alt="preview" src="https://github.com/user-attachments/assets/6fb46a8d-4fc4-4d10-80a0-ed21fbb428bf" />

一个基于 Web 的自动化表情包生成工具，能够快速生成带有自定义文本的魔法少女的魔女裁判文本框图片。
本项目是 [Text_box-of-mahoushoujo_no_majosaiban](https://github.com/oplivilqo/Text_box-of-mahoushoujo_no_majosaiban) 的纯网页重制版，并参考 [nonebot-plugin-manosaba-memes](https://github.com/zhaomaoniu/nonebot-plugin-manosaba-memes) 实现了更多功能。

[灵感来源与代码参考](https://github.com/MarkCup-Official/Anan-s-Sketchbook-Chat-Box)

</div>

## ✨ 功能特色

### 1. 文本框生成
- 🎨 **多角色支持** - 内置全部角色，每个角色多个表情差分
- 🖼️ **背景选择** - 支持随机背景或指定背景 (1-16)
- � **智能排版** - 自动换行，字体大小自适应，顶部对齐

### 2. 安安说
- 📒 **素描本生成** - 生成安安举着素描本的图片
- 🎭 **表情选择** - 支持害羞、生气、病娇、无语、开心等表情
- � **高亮语法** - 使用 `【】` 包裹的洗脑文字会变为**紫色加粗** (例如：`吾辈【可爱】`)

### 3. 我当时睡的可香了 (审判选项)
- ⚖️ **审判场景** - 生成魔女裁判时的选项界面
- 👥 **角色切换** - 樱羽艾玛和二阶堂希罗
- ➕ **多选项支持** - 支持添加任意数量的选项
- 🏷️ **多种类型** - 支持赞同、疑问、伪证、反驳以及魔女安息篇中所有魔法类型
- 📏 **自适应排版** - 选项文字自动居中且大小自适应

### 通用特性
- ⚡ **即时预览** - 所有操作均在浏览器中实时渲染
- 💾 **一键下载** - 生成图片后可直接下载保存
- 📱 **响应式设计** - 适配各种屏幕尺寸

## 🛠️ 使用方法

### 本地运行

1. 克隆或下载本仓库。
2. 由于浏览器安全限制（CORS），直接打开 `index.html` 可能无法下载图片。建议使用本地服务器运行：
   - 如果安装了 Python：
     ```bash
     python3 -m http.server
     ```
   - 然后在浏览器访问 `http://localhost:8000/docs/`

### 在线部署

本项目是纯静态网页，可以直接部署到 GitHub Pages、Vercel、Netlify 等平台。
如果使用 GitHub Pages，请在设置中将 Source 设置为 `/docs` 目录。

## 👥 角色列表

- 樱羽艾玛
- 二阶堂希罗
- 橘雪莉
- 远野汉娜
- 夏目安安
- 月代雪
- 冰上梅露露
- 城崎诺亚
- 莲见蕾雅
- 佐伯米莉亚
- 黑部奈叶香
- 宝生玛格
- 紫藤亚里沙
- 泽渡可可

## 📄 许可证

本项目基于MIT协议传播，仅供个人学习交流使用，不拥有相关素材的版权。进行分发时应注意不违反素材版权与官方二次创造协定。
