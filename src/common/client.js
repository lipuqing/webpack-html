import {
  openSignUp,
  getUserInfo
} from './common';
import {
  host
} from './api.js';
(function () {
  // const ele = document.createElement('script')
  // ele.setAttribute('type', 'text/javascript')
  // ele.setAttribute('src', 'https://oss.canxingtv.com/wl/file/20220420144614465-1921894146.js') // 在这里引入了a.js
  // document.body.appendChild(ele)
  let oldtime = '';
  let inner = {
    login() {
      if (client.UA() === 'wxh5') {
        let callback = encodeURIComponent(location.href); // home index
        let url = host + 'api/weixin/authorize?clientId=' + Date.now() + '&callback=' + callback;
        location.href = url;
        // localStorage.setItem('userToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIwMDAwMDAwMC1mZTUzLTQ4ZDEtOTMyNi0wMzIwOTgyMDAwMDAiLCJwcmltYXJ5c2lkIjoieHh4eHh4X1hYWF94eHh4eHgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIwMDAwMDAwMC1mZTUzLTQ4ZDEtOTMyNi0wMzIwOTgyMDAwMDAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9wb3N0YWxjb2RlIjoiREVGQVVMVCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwMjIvMTEvMTYgMTU6MTA6MzEiLCJuYmYiOjE1ODIyMTE0MzEsImV4cCI6MTY2ODYxMTQzMSwiaWF0IjoxNTgyMjExNDMxLCJpc3MiOiJodHRwczovL3NpbmdjaGluYS5jb20iLCJhdWQiOiJodHRwczovL3NpbmdjaGluYS5jb20ifQ.P5Ts9ceBSSmEGM0Tj8RYavjpD_r2UivT-Tgg3XbPFkg');
      } else if (client.UA() === 'mobileWeibo') { //client.UA() === 'mobileWeibo'
        // H5 游客设置 or Login with mobile / Iframe
        localStorage.setItem('userToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIwMDAwMDAwMC1mZTUzLTQ4ZDEtOTMyNi0wMzIwOTgyMDAwMDAiLCJwcmltYXJ5c2lkIjoieHh4eHh4X1hYWF94eHh4eHgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIwMDAwMDAwMC1mZTUzLTQ4ZDEtOTMyNi0wMzIwOTgyMDAwMDAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9wb3N0YWxjb2RlIjoiREVGQVVMVCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwMjIvMTEvMTYgMTU6MTA6MzEiLCJuYmYiOjE1ODIyMTE0MzEsImV4cCI6MTY2ODYxMTQzMSwiaWF0IjoxNTgyMjExNDMxLCJpc3MiOiJodHRwczovL3NpbmdjaGluYS5jb20iLCJhdWQiOiJodHRwczovL3NpbmdjaGluYS5jb20ifQ.P5Ts9ceBSSmEGM0Tj8RYavjpD_r2UivT-Tgg3XbPFkg');
        window.location.reload()
        // let callback = encodeURIComponent(location.href); // home index
        // let url = host + 'weibo/authorize?clientId=' + Date.now() + '&callback=' + callback;
        // location.href = url;
      } else if (client.UA() == 'android' || client.UA() == 'ios') {
        return;
      } else {
        // H5 游客设置 or Login with mobile / Iframe
        localStorage.setItem('userToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIwMDAwMDAwMC1mZTUzLTQ4ZDEtOTMyNi0wMzIwOTgyMDAwMDAiLCJwcmltYXJ5c2lkIjoieHh4eHh4X1hYWF94eHh4eHgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIwMDAwMDAwMC1mZTUzLTQ4ZDEtOTMyNi0wMzIwOTgyMDAwMDAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9wb3N0YWxjb2RlIjoiREVGQVVMVCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwMjIvMTEvMTYgMTU6MTA6MzEiLCJuYmYiOjE1ODIyMTE0MzEsImV4cCI6MTY2ODYxMTQzMSwiaWF0IjoxNTgyMjExNDMxLCJpc3MiOiJodHRwczovL3NpbmdjaGluYS5jb20iLCJhdWQiOiJodHRwczovL3NpbmdjaGluYS5jb20ifQ.P5Ts9ceBSSmEGM0Tj8RYavjpD_r2UivT-Tgg3XbPFkg');
        window.location.reload()
        return
      }
      inner.getUrlFrom();
    },
    getUserToken() {
      let token = localStorage.getItem('userToken');
      if (token) return token;
      return '';
      //return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIwMDAwMDAwMC1mZTUzLTQ4ZDEtOTMyNi0wMzIwOTgyMDAwMDAiLCJwcmltYXJ5c2lkIjoieHh4eHh4X1hYWF94eHh4eHgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIwMDAwMDAwMC1mZTUzLTQ4ZDEtOTMyNi0wMzIwOTgyMDAwMDAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9wb3N0YWxjb2RlIjoiREVGQVVMVCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwMjIvMTEvMTYgMTU6MTA6MzEiLCJuYmYiOjE1ODIyMTE0MzEsImV4cCI6MTY2ODYxMTQzMSwiaWF0IjoxNTgyMjExNDMxLCJpc3MiOiJodHRwczovL3NpbmdjaGluYS5jb20iLCJhdWQiOiJodHRwczovL3NpbmdjaGluYS5jb20ifQ.P5Ts9ceBSSmEGM0Tj8RYavjpD_r2UivT-Tgg3XbPFkg'
    },
    hideParams(name) {
      var loca = window.location;
      var baseUrl = loca.origin + loca.pathname;
      var query = loca.search.substr(1);
      var joinStr = '?';
      var obj = {};
      var arr = query.split('&');
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('=');
        obj[arr[i][0]] = arr[i][1];
      }
      delete obj[name];

      if (JSON.stringify(obj) === '{}') {
        joinStr = '';
      }
      var url =
        baseUrl +
        joinStr +
        JSON.stringify(obj)
        .replace(/[\"\{\}]/g, '')
        .replace(/\:/g, '=')
        .replace(/\,/g, '&');
      window.history.replaceState(null, '', url);
    },
    getUrlFrom() {
      let source = client.getQueryStringByName('utm_source');
      let content = client.getQueryStringByName('utm_content');
      let media = client.getQueryStringByName('utm_medium');
      let campaign = client.getQueryStringByName('utm_campaign');
      let term = client.getQueryStringByName('utm_term');
      let referral = client.getQueryStringByName('referral');
      let shareId = client.getQueryStringByName('shareId');
      let message = client.getQueryStringByName('message');
      let app_schema = 'utm_source=' + source + '&utm_content=' + content + '&utm_media=' + media + '&utm_campaign=' + campaign + '&utm_term=' + term + '&referral=' + referral + '&shareId=' + shareId + '&message=' + message;
      if (source + content + media + campaign + term + referral == '') return;
      if (token == "" || token == null) return;
      client.post(
        host + 'api/user/initutm', {
          source: source,
          media: media,
          campaign: campaign,
          appSchema: app_schema,
        },
        function () {}
      );
    },
  };

  var client = {
    UA: function () {
      var browser = {
        versions: (function () {
          var u = navigator.userAgent;
          var iosSlice = u.substring(u.indexOf('singchina-ios-version-') + 'singchina-ios-version-'.length);
          var androidSlice = u.substring(u.indexOf('singchina-Android-version-') + 'singchina-Android-version-'.length);
          return {
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            mini: u.indexOf('miniProgram') > -1, //是否微信 （2015-01-22新增）
            uc: u.indexOf('UCBrowser') > -1,
            safari: u.indexOf('Safari') > -1,
            AgentWeb: u.indexOf('AgentWeb') > -1,
            scAndroid: u.indexOf('singchina-Android') > -1,
            sciOS: u.indexOf('singchina-ios') > -1,
            mobileWeibo: u.toLocaleLowerCase().indexOf('weibo') > -1,
            iosVersion: u.indexOf('singchina-ios-version-') > -1 ? iosSlice.slice(0, iosSlice.indexOf('-')) : '0000',
            androidVersion: u.indexOf('singchina-Android-version-') > -1 ? androidSlice.slice(0, androidSlice.indexOf('-')) : '0000',
          };
        })(),
      };
      if (browser.versions.mini) {
        return 'wx';
      } else if (browser.versions.weixin) {
        return 'wxh5';
      } else if (browser.versions.mobileWeibo) {
        return 'mobileWeibo';
      } else if (browser.versions.scAndroid) {
        return 'android';
      } else if (browser.versions.sciOS) {
        return 'ios';
      } else {
        return 'h5';
      }
    },
    getQueryStringByName(name) {
      var result = location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
      if (result == null || result.length < 1) {
        return '';
      }
      return result[1];
    },
    getFromStringByName(name, from) {
      var result = from.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
      if (result == null || result.length < 1) {
        return '';
      }
      return result[1];
    },
    // toast (text, time = 3000) {
    //     var str =
    //         `
    //         <div class="toast_box">
    //              <p id="toast">${text}</p>
    //         </div>
    //          `;
    //     $(".toast_box").remove();
    //     $('body').append(str)
    //     $(".toast_box").fadeIn().find("span").html(text);
    //     setTimeout(function () {
    //         $(".toast_box").fadeOut();
    //     }, time)
    // },
    toast(text, time) {
      var str = ` 
                <div class="toast_box">
                     <p id="toast">${text}</p>
                </div>
                 `;
      $('.toast_box').remove();
      $('body').append(str);
      $('.toast_box').fadeIn().find('span').html(text);
      setTimeout(function () {
        $('.toast_box').fadeOut();
      }, time ? time : 3000);
    },
    hideParams: inner.hideParams,
    get: function (url, success, data = '', error) {
      this.request(url, 'GET', true, null, 'application/json', 'json', {}, data, success, error);
    },
    post: function (url, data, success, error) {
      this.request(url, 'POST', true, null, 'application/json', 'json', {}, data, success, error);
    },
    request: function (url, type, async, beforeSend, contentType, dataType, headers, data, success, error) {
      var hds = Object.assign({}, {
          Authorization: 'Bearer ' + inner.getUserToken(),
        },
        headers
      );
      $.ajax({
        url: url,
        type: type,
        async: async,
        beforeSend: beforeSend,
        contentType: contentType,
        dataType: dataType,
        headers: hds,
        data: data ? JSON.stringify(data) : data,
        success: success,
        error: function (xhr, y, z) {
          if (typeof error === 'function') {
            error.call(this, xhr, y, z);
          }
          console.log(xhr, 'try login');
          if (xhr.status === 401) {
            console.log(12312312312);
            localStorage.clear();
            inner.login();
          }
          if (xhr.responseJSON.code === 537) {
            client.toast(xhr.responseJSON.message, 3000);
            // alert(xhr.responseJSON.message);
            if (xhr.responseJSON.message.indexOf('游客') > -1 || xhr.responseJSON.message.indexOf('请完善手机号') > -1) {
              openSignUp();
            } else {
              // inner.login();
            }
          }
        },
      });
    },
    cityList: function (Province, City, Area) {
      var data = [];
      var province = PCAD.split('#');
      if (Province && Province != '') {
        //指定省
        let child = {};
        province.map(item => {
          if (item.split('$')[0] == Province) {
            (child.name = item.split('$')[0] == '-省份-' ? '全国' : item.split('$')[0]), (child.value = item.split('$')[0] == '-省份-' ? '全国' : item.split('$')[0]), (child.label = item.split('$')[0] == '-省份-' ? '全国' : item.split('$')[0]), (child.children = []);
            // 市
            if (City && City != '') {
              // 区
              if (Area && Area != '') {}
            }
          }
        });
        data.push(child);
      } else {
        //全部
        province.map(item => {
          let child = {};
          (child.name = item.split('$')[0] == '-省份-' ? '全国' : item.split('$')[0]), (child.value = item.split('$')[0] == '-省份-' ? '全国' : item.split('$')[0]), (child.label = item.split('$')[0] == '-省份-' ? '全国' : item.split('$')[0]), (child.children = []);
          data.push(child);
        });
        // if (City)
      }
      console.log(data);
      return data;
    },
    preventclick: function (msc, callback) {
      if (oldtime == '') {
        oldtime = new Date().getTime();
        return callback()
      } else {
        var newtime = new Date().getTime();
        if (newtime - oldtime > msc) {
          oldtime = new Date().getTime();
          return callback()
        } else {
          oldtime = new Date().getTime();
          client.toast('请不要连续重复点击！')
          return
        }
      }
    },
    bulidImage: {
      img: "",
      countHegight: function (length) {
        let top = 192,
          bottom = 210,
          img_box_h = 170,
          canvasHeight = 0;
        let hang = parseInt(length / 3);
        if (length % 3 != 0) {
          hang = hang + 1
        }
        canvasHeight = top + img_box_h * hang + bottom
        return canvasHeight
      },
      dpr: function () {
        // if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        //   return window.devicePixelRatio;
        // }
        return 1;
      },
      bulid: function (box, arr) {
        console.log('绘图')
        // 用户信息
        var userInfo = JSON.parse(localStorage.getItem('userWxdetail'));
        // 预加载
        var queue = new createjs.LoadQueue(false);
        // canvas
        var canvas = document.createElement("canvas");
        // canvas.style="background:linear-gradient(180deg, #FFF09D 0%, #FFE470 100%)"
        canvas.style.background = "linear-gradient(180deg, #FFF09D 0%, #FFE470 100%)"
        canvas.id = "imgCanvas"
        canvas.width = 375 * this.dpr(); //body.offsetWidth; //☜
        canvas.height = this.countHegight(arr.length) * this.dpr(); //默认使用Canvas生成，并显示到图片 
        var body = document.getElementsByClassName("page")[0];
        // var qrcodeDome = document.createElement("div");
        // qrcodeDome.id = "qrcodeDome";
        body.appendChild(canvas)
        // body.appendChild(qrcodeDome)
        // var qrcode = new QRCode('qrcodeDome', {
        //   text: 'www.baidu.com',
        //   width: 256,
        //   height: 256,
        //   colorDark: '#000000',
        //   colorLight: '#ffffff',
        //   correctLevel: QRCode.CorrectLevel.H
        // })
        // var canvas1 = $('#qrcodeDome canvas')[0];
        // $("canvas").css({
        //   "display":"none",
        //   "z-index":0,
        //   "background": 'linear-gradient(180deg, #FFF09D 0%, #FFE470 100%)'
        // })
        let ctx = canvas.getContext("2d"),
          returnImg = '';
        queue.loadManifest([{
            id: "logo",
            src: "https://oss.canxingtv.com/wl/file/20210729191041807-558054075.png" + '?time=' + new Date()
          },
          {
            id: "user", //userInfo.data.avatar + 
            src: 'https://oss.canxingtv.com/wl/file/20210730150328802-239404178.png?roundPic/radius/2500' + '&time=' + new Date() //"https://img.singschool.cn/wl/avatar/20210414143447349-1437032678.png?roundPic/radius/250"//'userInfo.data.avatar'
          },
          {
            id: 'scan',
            src: 'https://oss.canxingtv.com/wl/file/20210730150328802-239404178.png' + '?time=' + new Date()
          },
          {
            id: "zhiwen",
            src: "https://oss.canxingtv.com/wl/file/20210730135112533-5509081.png" + '?time=' + new Date()
          },
          {
            id: "user_dy",
            src: userInfo.data.avatar + '?time=' + new Date()
          },
        ], false, "images/");
        let that = this
        queue.on("complete", function (e) { send() });

        function send() {
          ctx.font = 'bold 30px "微软雅黑"';
          ctx.fillStyle = "#111";
          ctx.textAlign = "left";
          ctx.drawImage(queue.getResult("logo"), 287 * that.dpr(), 16 * that.dpr(), 68 * that.dpr(), 56 * that.dpr());
          ctx.save()
          ctx.stroke()
          ctx.drawImage(queue.getResult("user"), 20 * that.dpr(), 16 * that.dpr(), 56 * that.dpr(), 56 * that.dpr());
          ctx.save()
          ctx.stroke()
          ctx.font = 'bold 32px "PingFangSC-Semibold, PingFang SC"';
          ctx.fillStyle = "#442824";
          ctx.fillText(userInfo.data.nickName, 20 * that.dpr(), 108 * that.dpr());
          ctx.font = 'bold 22px "PingFangSC-Semibold, PingFang SC"';
          ctx.fillStyle = "#442824";
          ctx.fillText(`那${arr.length}首感动过我的好声音`, 20 * that.dpr(), 140 * that.dpr());
          ctx.save()
          ctx.stroke()
          let hang = 0,
            left = 20;
          // 选择歌曲列表
          for (let index = 0; index < arr.length; index++) {
            if (index % 3 == 0) {
              hang = hang + 176;
              left = 20
            } else {
              left = 20 + (index % 3) * 6 + 108 * (index % 3)
            }
            ctx.drawImage(queue.getResult("user_dy"), left * that.dpr(), hang * that.dpr(), 108 * that.dpr(), 108 * that.dpr());
            ctx.save()
            ctx.stroke()
            ctx.fillStyle = "#fff";
            ctx.fillRect(left * that.dpr(), (hang + 108) * that.dpr(), 108 * that.dpr(), 56 * that.dpr());
            ctx.font = 'bold 14px "PingFangSC-Semibold, PingFang SC"';
            ctx.fillStyle = "#442824";
            ctx.fillText(`以父之名${index}`, (left + 8) * that.dpr(), (hang + 129) * that.dpr());
            ctx.save()
            ctx.font = 'bold 12px "PingFangSC-Semibold, PingFang SC"';
            ctx.fillText(`周杰伦`, (left + 8) * that.dpr(), (hang + 152) * that.dpr());
            ctx.stroke()
          }
          // 指纹标语 zhiwen
          ctx.drawImage(queue.getResult("zhiwen"), 71 * that.dpr(), (hang + 220) * that.dpr(), 20 * that.dpr(), 20 * that.dpr());
          ctx.save()
          ctx.stroke()
          ctx.font = 'bold 14px "PingFangSC-Semibold, PingFang SC"';
          ctx.fillStyle = "#442824";
          ctx.fillText(`识别二维码，看看你的好声音歌单`, 95 * that.dpr(), (hang + 235) * that.dpr());
          ctx.drawImage(queue.getResult("scan"), 128 * that.dpr(), (hang + 264) * that.dpr(), 120 * that.dpr(), 120 * that.dpr());
          ctx.restore()
          ctx.save()
          ctx.stroke()
          ctx.closePath()

          that.img = canvas.toDataURL("image/png", 1)
        }
        queue.load()
      },
      load: function (url) {
        console.log('绘图下载', url)
      },
      longClick: function () {

      }
    },
  };



  let global = typeof window !== 'undefined' ? window : this;
  global.client = client;

  var token = client.getQueryStringByName('token')

  if (token != null) {
    setTimeout(function () {
      inner.hideParams('token');
    }, 300);
    setTimeout(() => {
      inner.getUrlFrom();
    }, 500);
    if (token) {
      localStorage.setItem('userToken', token);
      setTimeout(() => {
        getUserInfo(() => {
          inner.getUrlFrom();
        }, false);
      }, 300);
    }
  } else {
    inner.login();
  }
  let userInfo = JSON.parse(window.localStorage.getItem('userWxdetail'));
  if (userInfo) {
    if (client.UA() == 'mobileWeibo' && userInfo.data.platformId != 'WEIBO') {
      window.localStorage.clear();
      window.location.reload();
    }
    if (client.UA() == 'wxh5' && userInfo.data.platformId != 'WECHAT') {
      window.localStorage.clear();
      window.location.reload();
    }
  } else {
    setTimeout(() => {
      getUserInfo(() => {
        inner.getUrlFrom();
      });
    }, 300);
  }
})();

var _hmt = _hmt || [];
(function () {
  const ele = document.createElement('script');
  ele.setAttribute('type', 'text/javascript');
  ele.setAttribute('src', 'https://hm.baidu.com/hm.js?f3ddb67cd5bb61bdd59c4688371a7613'); // 在这里引入了a.js
  document.body.appendChild(ele);
})();