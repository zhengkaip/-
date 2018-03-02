// pages/search/search.js
let myTime=null;
Page({
  data:{
    searchList: []
  },
  searchKey(e) {
    clearTimeout(myTime);//清除出发的定时器，减少请求次数
    myTime=setTimeout(()=>{
      let value = e.detail.value;
      wx.request({
        url: 'http://apis.map.qq.com/ws/place/v1/suggestion?keyword=' + value + "&key=4YFBZ-K7JH6-OYOS4-EIJ27-K473E-EUBV7",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          if (res.data.data){
            this.setData({
              searchList: res.data.data
            })
          }else{
            this.setData({
              searchList: []
            })
          }
        }
      })
    },500)
  },
  returnIndex() {
    wx.switchTab({
      url: '../index/index'
    })
  }
})
