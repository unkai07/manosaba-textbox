# 🎭 魔法少女的魔女裁判文本框生成器 (Web版)

<div align="center">
<img width="2560" height="834" alt="hiro_1764147282492" src="https://github.com/user-attachments/assets/5567a1b8-ec5f-446c-9a2f-859abc20ea52" />
</div>

一个基于 Web 的自动化表情包生成工具，能够快速生成带有自定义文本的魔法少女的魔女裁判文本框图片。

本项目是 [Text_box-of-mahoushoujo_no_majosaiban](https://github.com/oplivilqo/Text_box-of-mahoushoujo_no_majosaiban) 的纯网页重制版，并参考 [nonebot-plugin-manosaba-memes](https://github.com/zhaomaoniu/nonebot-plugin-manosaba-memes) 实现了更多功能。

## ✨ 功能特色

### 1. 文本框生成
- 🎨 **多角色支持** - 内置全部角色，每个角色多个表情差分
- 🖼️ **背景选择** - 支持随机背景或指定背景 (1-16)
- 📄 **智能排版** - 自动换行，字体大小自适应，顶部对齐

<img width="813" height="455" alt="img" src="https://github.com/user-attachments/assets/e64d45c3-ea24-4550-8470-430891617617" />


### 2. 安安说
- 📒 **素描本生成** - 生成安安举着素描本的图片
- 🎭 **表情选择** - 支持害羞、生气、病娇、无语、开心等表情
- 📄 **高亮语法** - 使用 `【】` 包裹的洗脑文字会变为**紫色加粗** (例如：`【快说吾辈可爱】`)

<img width="813" height="571" alt="image" src="https://github.com/user-attachments/assets/7e2e7bc1-e12e-40c1-bdb4-3f98f31cfdf6" />


### 3. 我当时睡得可香了 (审判选项)
- ⚖️ **审判场景** - 生成魔女裁判时的选项界面
- 👥 **角色切换** - 樱羽艾玛和二阶堂希罗
- ➕ **多选项支持** - 支持添加任意数量的选项
- 🏷️ **多种类型** - 支持赞同、疑问、伪证、反驳以及魔女安息篇中所有魔法类型
- 📏 **自适应排版** - 选项文字自动居中且大小自适应

<img width="813" height="546" alt="image" src="https://github.com/user-attachments/assets/f5f54b34-c397-40f0-81fc-351dec1c3e1a" />


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


