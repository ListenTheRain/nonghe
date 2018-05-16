export default {
  creatCode:function () {
      var code = "";
      var codeLength = 4;//验证码的长度
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）
        code += " " + random[index];//根据索引取得随机数加到code上
      }
      return  code;//把code值赋给验证码
      // console.log(this.checkCode)
  },
validactorName:function (name,namedis) {
  if (name===''){
    return namedis='用户名不能为空！'
  }else{
    if(name.length>6){
      return namedis='用户名长度不能超过6位'
    }else {
      return  namedis=''
    }
  }
},
validactorNamePass: function (pass,passdis) {
  if (pass===''){
    return passdis='密码不能为空！'
  }else{
    if(pass.length<6||pass.length>15){
      return  passdis='密码长度不能小于6位且不能大于15位'
    }else {
      return  passdis=''
    }
  }
},
validactorNameaPass: function (apass,pass,apassdis) {
  if (apass!==pass) {
    return  apassdis = '两次输入密码不一致！请核对'
  }
},
validactorNameCkeckPass: function (checkCode,codedis,checkPass) {
  if(checkCode.length==0){
    return  codedis='请输入验证码！'
  }else{
    if ((checkCode)!==(checkPass)){
      return  codedis='验证码不正确！'
      this.$options.methods.creatCode()
    }else{
      //提交
    }
  }
}
}
