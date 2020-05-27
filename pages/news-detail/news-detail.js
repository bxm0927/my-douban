let articleDB = require('../../data/article.js')
let app = getApp()

Page({
  data: {
    musicFlag: false
  },

  onLoad(params) {
    let params_id = params.id

    this.setData({
      params_id,
      articleDetail: articleDB.articleData[params_id]
    })

    this._initFav(params_id)
    this._initMusic()
  },

  // 收藏功能初始化
  _initFav(params_id) {
    let allKey = wx.getStorageSync('__fav__')

    if (allKey) {
      this.setData({
        favFlag: allKey[params_id]
      })
    } else {
      allKey = {}
      allKey[params_id] = false
      wx.setStorageSync('__fav__', allKey)
    }
  },

  // 收藏开关
  toggleFav() {
    let allKey = wx.getStorageSync('__fav__')
    let thisKey = allKey[this.data.params_id]

    thisKey = !thisKey
    allKey[this.data.params_id] = thisKey

    wx.setStorageSync('__fav__', allKey)

    this.setData({
      favFlag: thisKey
    })

    wx.showToast({
      title: thisKey ? '收藏成功' : '取消收藏',
      icon: 'success',
      duration: 2000
    })
  },

  // 分享
  share() {
    wx.showActionSheet({
      itemList: ['分享到QQ', '分享到微信', '分享到朋友圈'],
      itemColor: '#405f80',
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },

  // 音乐初始化
  _initMusic() {
    if (app.globalData.musicFlag) {
      this.setData({
        musicFlag: true
      })
    }

    wx.onBackgroundAudioPlay(() => {
      app.globalData.musicFlag = true
      this.setData({
        musicFlag: true
      })
    })

    wx.onBackgroundAudioPause(() => {
      app.globalData.musicFlag = false
      this.setData({
        musicFlag: false
      })
    })

    wx.onBackgroundAudioStop(() => {
      app.globalData.musicFlag = false
      this.setData({
        musicFlag: false
      })
    })
  },

  // 音乐
  music() {
    if (app.globalData.musicFlag) {
      wx.pauseBackgroundAudio()

      app.globalData.musicFlag = false
      this.setData({
        musicFlag: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
        title: '许巍 - 此时此刻',
        coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
      })

      app.globalData.musicFlag = true
      this.setData({
        musicFlag: true
      })
    }



    // 微信小程序入门与实战音乐素材
    // 许巍：此时此刻 （官方示例，如果其他音乐接口被封请使用官方默认歌曲）
    // http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46
    // http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000

    // 谭咏麟：朋友
    // http://ws.stream.qqmusic.qq.com/C100002I8eGJ28BI17.m4a?fromtag=38
    // http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000

    // 齐秦，夜夜夜夜
    // http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38
    // http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000

    // 李宗盛，鬼迷心窍
    // http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38
    // http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000

    // 万晓利，女儿情
    // http://ws.stream.qqmusic.qq.com/C100004HLusI2lLjZy.m4a?fromtag=38
    // http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000

    // 老狼，恋恋风尘
    // http://ws.stream.qqmusic.qq.com/C100002mWVx72p8Ugp.m4a?fromtag=38
    // http://y.gtimg.cn/music/photo_new/T002R150x150M000001VaXQX1Z1Imq.jpg?max_age=2592000


    // 张国荣，沉默是金
    // http://ws.stream.qqmusic.qq.com/C100000Zn0vS4fKKo8.m4a?fromtag=38
    // http://y.gtimg.cn/music/photo_new/T002R150x150M000003at0mJ2YrR2H.jpg?max_age=2592000
  }
})
