// pages/mzf_tabBar/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    shoplist: [],
    page: 1,
    pageSize: 5,
    total: 50,

    isloading: false,

    staticShopList: [
      {
        id: 1,
        name: "叉烧店",
        addr: "叉烧路1号",
        number: '11111111111',
        icon: "/images/mzftabBar/shoplist/1.png"
      },
      {
        id: 2,
        name: "牛肉面店",
        addr: "牛肉路1号",
        number: '11222222222',
        icon: "/images/mzftabBar/shoplist/2.png"
      },
      {
        id: 3,
        name: "烧猪店",
        addr: "烧猪路1号",
        number: '11333333333',
        icon: "/images/mzftabBar/shoplist/3.png"
      },
      {
        id: 4,
        name: "猪脚店",
        addr: "猪脚路4号",
        number: '11444444444',
        icon: "/images/mzftabBar/shoplist/4.png"
      },
      {
        id: 5,
        name: "白切鸡店",
        addr: "白切鸡路1号",
        number: '11555555555',
        icon: "/images/mzftabBar/shoplist/5.png"
      }
    ],

    staticShopList2: [
      {
        id: 6,
        name: "烤鸭店",
        addr: "鸭路1号",
        number: '11666666666',
        icon: "/images/mzftabBar/shoplist/1.png"
      }
    ]
  },

  //cb: 回调函数
  getShopList(cb) {
    this.setData({
      isloading: true
    })
    console.log("start loading")
    wx.showLoading({
      title: 'loading',
    })

    this.setData({
      shoplist: [...this.data.shoplist, ...this.data.staticShopList]
    })
    console.log(this.data.shoplist)

    wx.hideLoading()
    this.setData({
      isloading: false
    })
    console.log("finish loading")
    
    //如果传了cb，就调用运行
    cb && cb()


    // wx.request({
    //   url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
    //   method: 'GET',
    //   data: {
    //     _page: this.data.page
    //   },
    //   success: (res) => {
    //     console.log(res.data)
    //   }
    // })
    // console.log(this.data.staticGridList)
    // wx.hideLoading()
  },

  getShopList2() {
    this.setData({
      isloading: true
    })
    wx.showLoading({
      title: 'loading',
    })
    console.log(this.data.shoplist)
    this.setData({
      shoplist: [...this.data.shoplist, ...this.data.staticShopList2]
    })
    console.log(this.data.shoplist)
    wx.hideLoading()
    this.setData({
      isloading: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData ({
      query: options
    })
    if (this.data.isloading) return
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    //重置信息
    console.log("onpulldown")
    this.setData({
      page: 1,
      shoplist: []
    })
    this.getShopList(() => {
      wx.stopPullDownRefresh()
      console.log("callback")
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("reachBottom")

    if (this.data.page * this.data.pageSize >= this.data.total) {
      //没有数据了
      return wx.showToast({
        "title": '没有数据了！',
        "icon": 'none'
      })
    }  

    this.setData({
      page: this.data.page + 1
    })

    console.log("call getShopList")
    this.getShopList2()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }

})