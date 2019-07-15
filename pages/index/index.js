const app = getApp()

Page({
  data: {
    members: [
      {
        id : 1,
        name: '雨雨'
      },
      {
        id: 2,
        name: '苏苏'
      },
      {
        id: 3,
        name: '哈哈'
      },
      {
        id: 4,
        name: '嘻嘻'
      },
      {
        id: 5,
        name: '呵呵'
      },
      {
        id: 6,
        name: '兔兔'
      }

    ],
    //多选数量
    count: 2,
    //选中项的数组
    selecteds: []
  },
  click: function (e) {
    let id = e.currentTarget.dataset.id;
    let array = this.data.selecteds;
    if (this.isInArray(id, array) == true) {
      console.log('id:' + id +'已经被选中')
    } else {
      //如果数组的长度大于或等于count，则删除数组第一个 并把后面的id添加到数组中
      if (array.length >= this.data.count) {
        //移除数组左边第一位
        array.shift();
      } 
      array.push(id)
    }

    this.setData({
      selecteds: array
    })
  },
  //判断元素是否在数组中
  isInArray: function (value, array) {
    for (var i = 0; i < array.length; i++) {
      if (value == array[i]) {
        return true;
      }
    }
    return false;
  },
  //动态设置选中项的值
  countInput: function (e) {
    this.setData({
      count: e.detail.value
    })
  }
})
