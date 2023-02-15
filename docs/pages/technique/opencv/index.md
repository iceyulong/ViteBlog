### 简介
OpenCV 全称 Open Source Computer Vision ，是一个基于 BSD 许可（意味着它可以被用于商业应用）的开源跨平台计算机视觉库，由 C 函数和 C++ 类构成，并且提供了多个语言的接口。  
OpenCV提供了大量图像处理的功能，从图像显示，到像素操作，到目标检测等，大大简化了图形处理以及深度学习应用的开发过程。  
OpenCV.js 是 JavaScript 开发者与 OpenCV 计算机图形处理库之间的桥梁，起先仅仅是部分 JavaScript 开发者自行开发的 OpenCV 应用接口，其原理是借助一款 LLVM-to-Javascript 的编译器 —— Emscripten 将库底层 C++ 代码编译为可在浏览器运行的 asm.js 或者 WebAssembly ，后来该项目日趋完善，并于 2017 年并入整个 OpenCV 项目。
### 背景
Web 是最普遍存在的开放计算平台，凭借 HTML5 标准的普及，Web 应用程序能够使用 HTML5 视频标签播放在线视频，通过 WebRTC API 捕获网络摄像头视频，并通过 canvas API 访问视频帧的每个像素。随着可用的多媒体内容的丰富，Web 开发人员需要借助 JavaScript 实现各种图像和视觉处理算法，从而构建诸如 Web 虚拟现实（WebVR）和增强现实（WebAR）等创新的应用程序，这就要求在Web上有效地实现计算密集型视觉内核。  
此时，OpenCV.js 的出现使得 JavaScript 开发者可以高效便捷的使用 OpenCV 提供的图形处理算法，也就是说开发者仅凭借浏览器就能快速开发诸如图片风格美化、图像识别、OCR等功能的应用。
### 应用场景
人机互动、物体识别、图像分割、人脸识别、动作识别、运动跟踪、机器人、运动分析、机器视觉、结构分析、汽车安全驾驶等
### 基本概念
1. 矩阵
OpenCV.js 引入了新的变量类型 —— Mat类型，即矩阵类型，使用 let mat = new cv.Mat(); 来创建新的矩阵类型，OpenCV.js 读取的图像均使用该类型存储。
2. 图像的读取与写入
<yl-content>
OpenCV.js 可以将 img 或者 canvas 的内容读取为矩阵类型用以变换，同时也可以将处理好的图像作为 img 或者 canvas 的内容
</yl-content>
<yl-image :url="'../../../assets/images/pic1.jpg'">
</yl-image>
### 使用
1. 导入方式
![An image](../../../assets/images/pic1.jpg)