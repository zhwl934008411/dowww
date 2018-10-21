(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{147:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("💎")]),t._v(" "),e("p",[t._v("以下步骤适用于 Windows 这边安装的 Visual Studio Code。")]),t._v(" "),e("p",[t._v("推荐使用 VSCode 的理由 > "),e("router-link",{attrs:{to:"/#为什么我极力推荐-visual-studio-code"}},[t._v("#为什么我极力推荐 Visual Studio Code")])],1)]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("下载安装 Visual Studio Code 在这里 > "),e("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code | Code editing.\nRedefined."),e("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("目前存在的一个问题是：VSCode 和 WSL 侧的工具链兼容性都很糟糕（除了 Node.js），都需要一定的配置才能丝滑工作。这也是一个当前微软 VSCode 各大语言插件组和 WSL 开发组都知道并在解决的问题（参考 "),e("a",{attrs:{href:"https://github.com/Microsoft/vscode-python/issues/67",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode Python 插件 Issue #67"),e("OutboundLink")],1),t._v("）。")]),t._v(" "),e("p",[t._v("由于 WSL 是一个 Runtime 环境，而 VSCode 只和 Windows 侧的组件进行沟通，因此当前一个比较好的解决方法是：在 Windows 侧手动创建一些脚本帮助 VSCode 和 WSL 侧安装的组件沟通。"),e("router-link",{attrs:{to:"/3-VSCode/3-3-Python.html"}},[t._v("详见 Python 配置板块。")])],1),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("为了方便参考，我使用的 Visual Studio Code 具体配置如下：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),e("p",[t._v("你可以在这里看到我的 Visual Studio Code 具体的样子 > "),e("router-link",{attrs:{to:"/3-VSCode/3-4-C_Cpp.html#前言"}},[t._v("C/C++ 开发 | 前言")]),t._v("。")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://i.loli.net/2018/10/17/5bc6e33f82174.png",alt:"Visual Studio Code",width:"40%"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"visual-studio-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Visual Studio Code")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("请注意，在 Windows 侧安装过程中务必：")]),t._v(" "),e("ol",[e("li",[t._v("安装至 C 盘（否则会有路径与访问权限的问题）")]),t._v(" "),e("li",[t._v("在「选择其他任务」界面勾选「其他」下的全部四个选项（为了后面在 WSL 中直接调用 "),e("code",[t._v("code")]),t._v(" 命令来打开 Visual Studio Code 打下基础。）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("字体：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"editor.fontFamily"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("\"'Fira Mono for Powerline', 'Segoe UI Emoji', Consolas, sans-serif\"")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("主题配色：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"workbench.colorTheme"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Material Theme"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("图标方案：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"workbench.iconTheme"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"material-icon-theme"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";s.default=n.exports}}]);