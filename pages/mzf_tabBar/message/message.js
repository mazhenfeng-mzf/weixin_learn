// pages/mzf_tabBar/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "zs",
    mzfdata: 0,

    count: 11
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
    console.log("下拉刷新")
    this.setData({
      "mzfdata": 0
    })

    wx.stopPullDownRefresh()
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


  gotoContect() {
    wx.switchTab({
      url: '/pages/mzf_tabBar/contect/contect',
    })
  },
  navagateToListWithArgs() {
    wx.navigateTo({
      url: '/pages/mzf/list/list?name=ls',
    })
  },
  gotoBack() {
    wx.navigateBack()
  },


  xiaLaAdd1() {
    this.setData({
      "mzfdata": this.data.mzfdata+1
    })
  },

  syncCount(e) {
    console.log("syncCount, 收到参数:", e.detail)
    this.setData({
      count: e.detail.value
    })
  },

  getChildTest5() {
    const test5 = this.selectComponent('.customA')
    console.log("获取到 test5 模块实例: ", test5)
    // test5.setData({
    //   test5count: 0
    // })
    test5.addCount()
  }

})