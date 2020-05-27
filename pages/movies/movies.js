Page({
  data: {
    wrapperShow: true
  },

  onLoad() {
    this._initMoviesData()
  },

  // 初始化电影数据
  _initMoviesData() {
    // moviesData = {
    //   in_theaters: {},
    //   coming_soon: {},
    //   top250: {}
    // }

    let moviesData = {}

    // 正在热映
    setTimeout(() => {
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=3',
        header: {
          'content-type': 'application/xml'
        },
        success: (res) => {
          moviesData.in_theaters = res.data

          this.setData({
            moviesData
          })
        }
      })
    }, 1000)

    // 即将上映
    setTimeout(() => {
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/coming_soon?start=0&count=3',
        header: {
          'content-type': 'application/xml'
        },
        success: (res) => {
          moviesData.coming_soon = res.data

          this.setData({
            moviesData
          })
        }
      })
    }, 400)

    // TOP 250
    setTimeout(() => {
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/top250?start=0&count=3',
        header: {
          'content-type': 'application/xml'
        },
        success: (res) => {
          moviesData.top250 = res.data

          this.setData({
            moviesData
          })
        }
      })
    }, 1)
  },

  toMore(event) {
    let id = event.currentTarget.dataset.id

    wx.navigateTo({
      url: '../movies-more/movies-more?id=' + id
    })
  },

  toDetail(event) {
    let id = event.currentTarget.dataset.id

    wx.navigateTo({
      url: `../movie-detail/movie-detail?id=${id}`
    })
  },

  searchCancel(e) {
    this.setData({
      wrapperShow: true
    })
  },

  bindfocus() {
    this.setData({
      wrapperShow: false
    })
  },

  bindconfirm(e) {
    let text = e.detail.value

    wx.request({
      // GET /v2/movie/search?q=张艺谋 GET /v2/movie/search?tag=喜剧
      url: 'https://douban.uieee.com/v2/movie/search?q=' + text,
      header: {
        'content-type': 'application/xml'
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          searchData: res.data
        })
      }
    })
  }
})
