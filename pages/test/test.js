Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    userPswd: "",
    inputTips: "****",
  },

  inputUserName: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  inputPassword: function (e) {
    this.setData({
      userPswd: e.detail.value
    })
  },
  btnLoginClick: function (e) {
    if (this.data.userName.lenght == 0) {
      this.setData({
        inputTips: '用户名不能为空！'
      })
    }
    else if (this.data.userPswd.lenght == 0) {
      this.setData({
        inputTips: "密码不能为空！"
      })
    }
    else {
      this.setData({
        inputTips: "UserName=" + this.data.userName + ", Password=" + this.data.userPswd
      })
    }
  },
  btnResetClick: function (e) {
    this.setData({
      userName: "",
      userPswd: "",
      inputTips: "重置成功",
    })
  },


  /*
  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  },
  tapName: function (event) {
    console.log(event)
    event.currentTarget.dataset.hi === "abc"
  },*/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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