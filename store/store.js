// 在这个文件中，专门创建 Store 实例对象
import {action, observable} from 'mobx-miniprogram' 

//导出对象
//外界可以使用这个对象
export const store = observable({
  numA: 1,
  numB: 2,

  //get: 当前值是只读，这个值是根据numA和numB的值自动进行变化的
  get sum() {
    return this.numA + this.numB
  },

  // action: 来自mobx包，用于定义方法
  updateNumA: action(function (step) {
    this.numA += step
  }),
  updateNumB: action(function (step) {
    this.numB += step
  })




})