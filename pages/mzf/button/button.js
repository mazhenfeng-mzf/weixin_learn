// pages/mzf/button/button.js
Page({

  btnTapHandler(e) {
    console.log(e)
    console.log(e.target.dataset.info)
  },

  changeCount() {
    this.setData({
      count: this.data.count + 1
    })
    console.log(this.data.count)
  },

  changeCountInfo(e) {
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
    console.log(this.data.count)
  },

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  }
})