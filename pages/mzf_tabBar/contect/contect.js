// pages/mzf_tabBar/contect/contect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],

    staticColorList: [
      [17, 10, 90],
      [27, 10, 91],
      [37, 10, 92],
      [47, 10, 93],
      [57, 10, 94],
      [67, 10, 95],
      [77, 10, 96],
      [87, 10, 97],
      [97, 10, 98],
      [7, 10, 99]
    ],

    isloading: false
  },

  getColors() {
    this.setData({
      isloading: true
    })
    console.log("start loading")
    wx.showLoading({
      title: 'loading',
    })
    // wx.request({
    //   url: 'https://xx',
    //   method: 'GET',
    //   success: ({data: res}) => {
    //     console.log(res)
    //   },
    //   complete: () => {
    //     wx.hideLoading()
    //   }
    // })
    console.log(this.data.colorList)
    this.setData({
      colorList: [...this.data.colorList, ...this.data.staticColorList]
    })
    console.log(this.data.isloading)
    console.log(this.data.colorList)
    wx.hideLoading()
    this.setData({
      isloading: false
    })
    console.log("finish loading")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (this.data.isloading) return
    this.getColors()
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
    if (this.data.isloading) return

    this.getColors()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})