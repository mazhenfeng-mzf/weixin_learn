// pages/mzf/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: 'sadasdas',
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNum: Math.random().toFixed(2) * 10,
    args: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("收到参数:", options)
    this.setData({
      args: options
    })
    console.log(this.data.args)
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

  gotoBack() {
    wx.navigateBack()
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})