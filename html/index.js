
      function check(form){
          var username=document.getElementById("username").value;
          var password=document.getElementById("password").value;
          if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(username) && !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(username)){
              alert('用户名不符合规范');
              return false;
          }//验证用户名格式


          if(!/^[A-Za-z0-9!@#$%^&*?~]{6,10}$/.test(password)){
              alert('密码格式错误！');
              return false;
          }//验证密码格式

      }
