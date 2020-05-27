let articleDB = require('../../data/article.js')

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },

  wrapperToDetail(event) {
    // currentTarget 始终是监听事件者（事件捕获的元素）
    // 而 target 是事件的真正发出者（点击的具体元素）
    let id = event.target.dataset.id

    wx.navigateTo({
      url: `../news-detail/news-detail?id=${id}`
    })
  },

  toDetail(event) {
    let id = event.currentTarget.dataset.id

    wx.navigateTo({
      url: `../news-detail/news-detail?id=${id}`
    })
  },

  onLoad: function () {
    this.setData({
      articleData: articleDB.articleData
    })
  }
})
