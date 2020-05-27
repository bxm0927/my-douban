
# :mortar_board: 我的豆瓣

![](https://user-gold-cdn.xitu.io/2020/5/27/17254f6d98265f04?w=414&h=894&f=png&s=329804)

## :book: 技术栈

- `微信小程序`：一种无需下载即可使用的内嵌在微信中的 APP，用户扫一扫或者搜一下即可打开应用。
- `Flex 布局`：大量使用 `flex` 布局，结合 `rpx` 响应式单位，适配移动端全屏幕尺寸
- `Sass(Scss)`：`css` 预编译处理器 `sass --watch a.scss:a.wxss`
- `ES6`：`ECMAScript` 新一代语法，模块化、解构赋值、`Promise`、`Class` 等方法非常好用
- `Moment.js`：时间日期格式化插件

## :closed_book: 收获

1. 熟悉了微信小程序 `MINA` 框架，这个框架为小程序的运行提供了丰富的组件和API、响应的数据绑定、模板机制、数据缓存等
2. 复用 `template`，更好的封装 UI 和业务逻辑
3. 体会到了微信小程序与目前火热的 MVVM 框架的共同特性：组件、数据绑定、淡化 DOM ...


## :pushpin: TODO

1. 微信官方 API 非常不稳定，经常废弃一些 API，所以要经常维护代码
2. 利用豆瓣提供的接口可以实现很多电影相关功能，本案例只使用了其中几个
3. 由于没有配置 https 等原因，本案例并未上线
4. 以后有空根据这个小程序做出对应微信公众号


## :pencil: 实现细节

主要页面：启动页、新闻列表页、新闻详情页、电影详情页、电影搜索页

**启动页**

主要是熟悉微信小程序的目录结构、文件类型

使用微信提供的响应式单位 `rpx`

使用 `flex` 弹性盒子布局

微信小程序 `<View>` `<Image>` 组件的应用，类似 HTML 的 `<div>` 和 `<img>`

**电影页**

抽象出嵌套的 `<template>`，模板化实现界面

调用[豆瓣API](https://developers.douban.com/wiki/?title=movie_v2)请求网络数据

```
wx.request()
```

电影搜索页是调用豆瓣接口来完成搜索的

**新闻列表页**

使用了微信小程序提供的 `<swiper>` 轮播图组件

熟悉 `MINA` 框架在其各个生命周期时的任务

使用 `<template>` 模板化编程(*注意：不是模块化，因为不能注入js逻辑*)，类似 MVVM 框架中的组件

**新闻详情页**

使用自定义属性 `data-` 实现点击不同文章跳转到不同详情页的功能

```
let id = event.currentTarget.dataset.id

wx.navigateTo({
  url: `../news-detail/news-detail?id=${id}`
})

// 接受
console.log(params.id)
```

使用微信小程序提供的 `Storage` 缓存机制，对收藏功能进行缓存

```
wx.setStorageSync(key, data)
wx.getStorageSync(key)
wx.removeStorageSync(key)
wx.clearStorageSync()
```

使用界面交互反馈 API `showToast` `showActionSheet` 完成收藏、分享交互效果

使用音乐播放控制 API 实现音乐播放，播放等状态在 `app.js` 的 `globalData`内集中管理，类似 Vue 中的 Vuex

理解了微信小程序中的页面私有data、全局globalData、缓存机制Storage 在存储状态及数值时的优势与劣势


## :four_leaf_clover: License

The code is available under the [MIT license](https://opensource.org/licenses/MIT).
