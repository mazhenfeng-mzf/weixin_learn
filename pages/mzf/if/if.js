// pages/mzf/if/if.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 1,
    arr1: ['苹果','香蕉'],

    userList: [
      {id: 1, name: "小红"},
      {id: 2, name: "小黄"},
      {id: 3, name: "小白"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("收到参数:", options)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  gotoBack() {
    wx.navigateBack()
  }

})