// components/test/test.js
Component({

  options: {
    styleIsolation: "isolated",
    pureDataPattern: /^_/
  },

  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0',
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        "_rgb.r": this.data._rgb.r + 5 > 255? 255: this.data._rgb.r + 5
      })
    },
    changeG() {
      this.setData({
        "_rgb.g": this.data._rgb.g + 5 > 255? 255: this.data._rgb.g + 5
      })
    },
    changeB() {
      this.setData({
        "_rgb.b": this.data._rgb.b + 5 > 255? 255: this.data._rgb.b + 5
      })
    },
    addCount() {
      if (this.data.count >= this.properties.max) return
      this.setData({
        "count": this.data.count + 1
      })
      this._showCount()
    },
    _showCount() {
      wx.showToast({
        title: 'count:'+this.data.count,
        icon: 'none'
      })
    },

    randomColor() {
      this.setData(
        {
          _rgb: {
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256)
          }
       }
      )
    }

  },

  observers: {
    '_rgb.**': function(newRgb) {
        this.setData({
          "fullColor": `${newRgb.r}, ${newRgb.g}, ${newRgb.b}`
        })
    }
  },

  lifetimes: {
    created() {
      console.log("created ~~~")
    },
    attached() {
      console.log("attached ~~~")
    }
  },
  pageLifetimes: {
    show() {
      console.log("show ~~~")
      this.randomColor()
    },
    hide() {
      console.log("hide ~~~")
    },
    resize() {
      console.log("resize ~~~")
    }
  }
})