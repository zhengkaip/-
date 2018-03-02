//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    city:"武汉市",
    imgUrls: [//轮播图图片
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    cateList: [//美食列表
      {
        'photo': "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3652661687,4210497541&fm=27&gp=0.jpg",
        'user': '凯凯',
        'commetText': '啊啊撒多爱的卡萨看的撒安康市打开的卡萨丁卡顿卡死打开的卡的刷卡卡萨丁卡机的卡萨是尼克斯',
        'cateImage': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      },
      {
        'photo': "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3652661687,4210497541&fm=27&gp=0.jpg",
        'user': '凯凯2',
        'commetText': '啊啊撒多爱的卡萨看的撒安康市打开的卡萨丁卡顿卡死打开的卡的刷卡卡萨丁卡机的卡萨是尼克斯',
        'cateImage': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      },
      {
        'photo': "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3652661687,4210497541&fm=27&gp=0.jpg",
        'user': '凯凯3',
        'commetText': '啊啊撒多爱的卡萨看的撒安康市打开的卡萨丁卡顿卡死打开的卡的刷卡卡萨丁卡机的卡萨是尼克斯',
        'cateImage': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      },
      {
        'photo': "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3652661687,4210497541&fm=27&gp=0.jpg",
        'user': '凯凯4',
        'commetText': '啊啊撒多爱的卡萨看的撒安康市打开的卡萨丁卡顿卡死打开的卡的刷卡卡萨丁卡机的卡萨是尼克斯',
        'cateImage': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }
    ],
    indicatorDots: true,//轮播是否显示面板指示点
    autoplay: true,//轮播是否自动播放
    interval: 3000,//轮播自动切换时间间隔
    duration: 1000,//轮播滑动动画时长
    circular: true//轮播是否采用衔接滑动
  },
  onLoad(){
    wx.getLocation({
      type: 'wgs84',
      success: (res)=> {
        var latitude = res.latitude
        var longitude = res.longitude
        this.requestCityName(latitude, longitude);
      }
    })
  },
  onShow(){
    wx.getStorage({
      key:"address",
      success: (res)=>{
        this.setData({
          city:res.data
        })
      }
    })
  },
  requestCityName(latitude, longitude){//获取当前城市
    wx.request({
      url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + "," + longitude + "&key=4YFBZ-K7JH6-OYOS4-EIJ27-K473E-EUBV7",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        this.setData({
          city: res.data.result.address_component.city
        })
      }
    })
  },
  toSearch(){
    wx.switchTab({
      url: '../search/search'
    })
  },
  toCitySelect(){
    wx.navigateTo({
      url: '../citySelect/citySelect'
    })
  }
})
