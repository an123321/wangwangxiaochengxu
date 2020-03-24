// pages/movie/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    isShowLoading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("aaa");
    wx.setNavigationBarTitle({
      title: '正在上映的电影--北京',
    })
    wx.request({
      url: 'http://localhost:3000/in_theaters',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data);
        console.log(res.data);
        this.data.movies = res.data;
        this.setData({
          movies: this.data.movies,
          isShowLoading: false
        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000)
      },
      fail(res) {
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})