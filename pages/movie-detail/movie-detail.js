Page({
  data: {},

  onLoad: function (params) {
    let params_id = params.id

    this._initMovieDetail(params_id)
  },

  // 初始化电影详情数据
  _initMovieDetail(id) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + id,
      header: {
        'content-type': 'application/xml'
      },
      success: (res) => {
        this.setData({
          detailData: res.data
        })
      }
    })
  }
})
