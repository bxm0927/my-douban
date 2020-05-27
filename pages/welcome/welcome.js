//获取应用实例
var app = getApp()
Page({
  data: {},

  start: function() {
    // wx.redirectTo({
    //   url: '../news-list/news-list'
    // })
    wx.switchTab({
      url: '../movies/movies'
    })
  }
})
