Page({
  data: {
    curStart: 0
  },

  onLoad: function (params) {
    let params_id = params.id

    this.setData({
      params_id
    })

    switch(this.data.params_id){
      case '正在上映的电影-北京':
        wx.request({
          url: 'https://douban.uieee.com/v2/movie/in_theaters?count=100',
          header: {
            'content-type': 'application/xml'
          },
          success: (res) => {
            this.setData({
              moreData: res.data,
              curStart: this.data.curStart + 20
            })
          }
        })

        break;
      case '即将上映的电影':
        wx.request({
          url: 'https://douban.uieee.com/v2/movie/coming_soon?count=100',
          header: {
            'content-type': 'application/xml'
          },
          success: (res) => {
            this.setData({
              moreData: res.data,
              curStart: this.data.curStart + 20
            })
          }
        })

        break;
      case '豆瓣电影Top250':
        wx.request({
          url: 'https://douban.uieee.com/v2/movie/top250?count=100',
          header: {
            'content-type': 'application/xml'
          },
          success: (res) => {
            this.setData({
              moreData: res.data,
              curStart: this.data.curStart + 20
            })
          }
        })

        break;
      default:
        console.log('default')
        break;
    }
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.params_id
    })
  },

  scroll() {
    console.log('more')
    let nextUrl = ''

    switch(this.data.params_id){
      case '正在上映的电影-北京':
        nextUrl = `https://douban.uieee.com/v2/movie/in_theaters?start={curStart}&count=20`
        break;
      case '即将上映的电影':
        nextUrl = 'https://douban.uieee.com/v2/movie/coming_soon?start={curStart}&count=20'
        break;
      case '豆瓣电影Top250':
        nextUrl = 'https://douban.uieee.com/v2/movie/top250?start={curStart}&count=20'
        break;
      default:
        console.log('default')
        break;
    }
  }
})
