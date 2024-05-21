const myBehavior = require('../../behaviors/my-behaviors')

// components/test5/test5.js
Component({
  //挂载behaviors
  behaviors: [myBehavior],

  /**
   * 组件的属性列表
   */
  properties: {
    test5count: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      this.setData({
        test5count: this.properties.test5count + 1
      })
      //事件绑定，将值同步给父组件
      this.triggerEvent("sync", {value: this.properties.test5count})
    }
  }
})