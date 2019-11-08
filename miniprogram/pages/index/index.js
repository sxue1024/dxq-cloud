const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    school: '未选择'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let school_info = wx.getStorageSync('school_info')
    if (school_info) {
      this.setData({
        school: school_info.school
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toLost() {
    app.checkIfSelectedSchool()
    if (wx.getStorageSync('school_info')){
      wx.navigateTo({
        url: '/pages/square/lost/lost',
      })
    }
  },
  toFind() {
    app.checkIfSelectedSchool()
    if (wx.getStorageSync('school_info')){
      wx.navigateTo({
        url: '/pages/square/find/find',
      })
    }
  },
  toWeek(){
    wx.navigateTo({
      url: '/pages/index/week/week',
    })
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  selectSchool() {
    wx.navigateTo({
      url: '/pages/index/school/school',
    })
  }
})