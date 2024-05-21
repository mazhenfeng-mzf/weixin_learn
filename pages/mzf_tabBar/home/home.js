// pages/mzf_tabBar/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    staticSwiperList: [
      {
        id: 1,
        image: '/images/mzftabBar/swiper/1.jpg'
      }, 
      {
        id: 2,
        image: '/images/mzftabBar/swiper/2.png'
      }
    ],

    gridList: [],
    staticGridList: [
      {
        id: 1,
        name: "美食",
        icon: "/images/mzftabBar/grid/1.png"
      },
      {
        id: 2,
        name: "工作",
        icon: "/images/mzftabBar/grid/2.png"
      },
      {
        id: 3,
        name: "1",
        icon: "/images/mzftabBar/grid/3.png"
      },
      {
        id: 4,
        name: "1",
        icon: "/images/mzftabBar/grid/4.png"
      }
    ]
  },

  getSwiperList() {
    this.setData({
      swiperList: this.data.staticSwiperList
    })
    // wx.request({
    //   url: 'https://www.escook.cn/slides',
    //   method: 'GET',
    //   success: (res) => {
    //     console.log(res.data)
    //     console.log(1)
    //     this.setData({
    //       swiperList: res.data
    //     })
    //   }
    // })
  },


  getGridList() {
    this.setData({
      gridList: this.data.staticGridList
    })
    // wx.request({
    //   url: 'https://www.escook.cn/categories',
    //   method: 'GET',
    //   success: (res) => {
    //     console.log(res.data)
    //     this.setData({
    //       gridList: res.data
    //     })
    //   }
    // })
    // console.log(this.data.staticGridList)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList()
    this.getGridList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("onreachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})