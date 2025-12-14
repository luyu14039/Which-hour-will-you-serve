# 🕯️ 漫宿回响：寻觅你命定的司辰 (Which Hour Will You Serve?)

> “世界不仅是它现在的样子，也是它过去的样子，更是它将被书写的样子。”

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/luyu14039/Which-hour-will-you-serve?style=social)](https://github.com/luyu14039/Which-hour-will-you-serve)
![License](https://img.shields.io/github/license/luyu14039/Which-hour-will-you-serve)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

**🎉 感谢 30,000+ 位访客的造访！愿辉光照亮你们的道路。**

**如果你喜欢这个项目，请给它一个 Star ⭐️！**

[在线体验 (Demo)](https://luyu14039.github.io/Which-hour-will-you-serve/)

</div>

这是一个基于 **《密教模拟器 (Cultist Simulator)》** 和 **《司辰之书 (Book of Hours)》** 世界观（秘密历史）的沉浸式互动网页应用。它不仅仅是一个心理测试，更是一次通往漫宿（Mansus）的灵魂朝圣。

![Homepage](public/images/readme/homepage.png)

## ✨ 核心特性 (Features)

### 1. 双重位面 (Dual Realms)
我们为您准备了两条通往真理的道路：
*   🌑 **密教模拟器模式 (Occult Mode)**: 沉浸于无形之术，通过晦涩、神秘的叙事抉择，寻找那位在漫宿中注视着你的 **司辰 (Hour)**。
*   🪞 **现世之镜模式 (Reality Mode)**: 剥去神秘的外衣，通过心理学维度的剖析，映射你灵魂在凡世的 **原型 (Archetype)**。

### 2. AI 命运书写 (AI Destiny Weaving) 🖋️
**（新功能！）** 测试结束后，您的命运不必止步于此。我们集成了 **DeepSeek-R1 (Reasoner)** 模型，为您实时生成独一无二的克苏鲁风格短篇小说。

![AI Novel Generation](public/images/readme/LLM-NVOEL.png)

*   **深度定制**: 系统会将您的**测试结果**（核心性相、守护司辰）与**历史抉择**（潜台词、欲望）编织进故事中。
*   **双重视角 (Dual Perspectives)**:
    *   👁️ **飞升者 (Protagonist)**: 以第一人称视角，体验从凡人一步步异化、飞升的狂喜与恐怖。
    *   🕵️ **旁观者 (Observer)**: **(新增)** 化身为无辜的侦探或邻居，以“无知之幕”下的视角，目睹不可名状的神性恐怖（Cosmic Horror）。

### 3. 复杂的神秘学算法
*   **性相权衡**: 追踪灯、铸、刃、冬、心、杯、蛾、启、秘史九大性相的流动。
*   **协同效应**: 算法不仅计算分数，还考量性相之间的相性，为您匹配最契合的司辰（如“双生巫女”、“赤红圣杯”或“轰雷之皮”）。

### 4. 极致的视听体验
*   **响应式设计**: 完美适配桌面端与移动端，随时随地开启飞升。
*   **动态交互**: 基于 Framer Motion 的卡片翻转、流光效果与平滑转场。
*   **结果分享**: 生成精美的结果卡片（支持长图保存），或直接复制生成的命运小说与好友分享。

## 📸 预览 (Gallery)

| 抉择时刻 | 揭示命运 |
|:---:|:---:|
| ![Selections](public/images/readme/selections.png) | ![Results](public/images/readme/results.png) |
| *沉浸式的叙事问答* | *精美的结果卡片与分析* |

## 🛠️ 技术栈 (Tech Stack)

*   **核心框架**: [React 19](https://react.dev/)
*   **构建工具**: [Vite](https://vitejs.dev/)
*   **语言**: [TypeScript](https://www.typescriptlang.org/)
*   **样式**: [Tailwind CSS](https://tailwindcss.com/)
*   **动画**: [Framer Motion](https://www.framer.com/motion/)
*   **AI 集成**: DeepSeek API (OpenAI Compatible)
*   **工具库**: 
    *   `html2canvas`: 生成结果分享图
    *   `qrcode.react`: 生成分享二维码
    *   `lucide-react`: 优雅的图标库

## 🚀 快速开始 (Quick Start)

如果你想在本地运行此项目：

1.  **克隆仓库**
    ```bash
    git clone https://github.com/luyu14039/Which-hour-will-you-serve.git
    cd Which-hour-will-you-serve
    ```

2.  **安装依赖**
    ```bash
    npm install
    ```

3.  **启动开发服务器**
    ```bash
    npm run dev
    ```

4.  打开浏览器访问 `http://localhost:xxxx`。

## 📜 版权与免责声明 (License & Disclaimer)

本项目为 **Weather Factory** 旗下游戏《密教模拟器》与《司辰之书》的同人二创作品。

*   **世界观与设定**: 归属于 [Weather Factory](https://weatherfactory.biz/)。
*   **图片素材**: 部分素材来源于游戏原作或网络，仅用于非商业交流与学习。
*   **开源说明**:
    *   本项目代码开源，欢迎大家自由使用、学习或进行二次创作。
    *   **严禁用于任何商业用途**（包括但不限于付费访问、广告盈利、商业通过等）。
    *   转载或基于本项目进行修改发布时，请务必保留原作者署名及本项目的 GitHub 链接。

---

*“虽然我们侍奉不同的神，但我们都渴望同一个太阳。”*
