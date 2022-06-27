require('./apiUrls');
require('./client');
import './common.css';
import {
    host
} from './api.js';
const jweixin = require('jweixin-module');
// 获取用户信息
const getUserInfo = (
    callback = () => {
        return;
    },
    type = true
) => {
    if (window.localStorage.getItem('userWxdetail') && type) {
        callback(JSON.parse(window.localStorage.getItem('userWxdetail')).data);
    } else {
        client.get(host + 'api/user/userinfo', res => {
            if (res.code == 200) {
                let params = {
                    type: 'object',
                    data: res.data,
                };
                if (res.data.avatar == '' || res.data.avatar == null) {
                    res.data.avatar = 'https://oss.canxingtv.com/wl/file/20220421144852670-1411165589.png';
                }
                window.localStorage.setItem('userWxdetail', JSON.stringify(params));
                callback(res.data);
            }
        });
    }
};

// 弹出登录
const openSignUp = (data = {
    color: '#fff',
    bgc: '#262525',
    title: '登录/注册',
    des: '如果您的手机号尚未注册，登录成功即自动注册',
    isClose: false
}) => {
    console.log(window.location.search);
    const dom = document.createElement('div');

    const str = `
    <div id="signUp" style=" width: 100%,height: 100vh;position: fixed; top: 0;left: 0;right: 0;bottom: 0;z-index: 9998;">
     <iframe src="./signUp.html${window.location.search}" frameborder="0"  style="width: 100%;height: 100%;"></iframe>
    </div>
    `;
    dom.innerHTML = str;
    window.frames['SignUpData'] = data;
    document.body.appendChild(dom);
    // $('body').append(str)
};

// 弹出登录
const openSignUpNB = mobilePhone => {
    const dom = document.createElement('div');
    const str = `
    <div id="signUp" style=" width: 100%,height: 100vh;position: fixed; top: 0;left: 0;right: 0;bottom: 0;z-index: 9998;">
     <iframe src="./signUpNB.html${window.location.search}" frameborder="0"  style="width: 100%;height: 100%;"></iframe>
    </div>
    `;
    dom.innerHTML = str;
    window.frames['mobilePhone'] = mobilePhone;
    document.body.appendChild(dom);
    // $('body').append(str)
};

// 关闭登录 callback == 关闭弹窗回调函数
const closeSignUp = (
    callback = () => {
        return;
    }
) => {
    callback();
    window.parent.$('#signUp').remove();
};
// 关闭登录 callback == 关闭弹窗回调函数
const closeSignUpNB = (
    callback = () => {
        return;
    }
) => {
    callback();
    window.parent.$('#signUp').remove()
};

// 显示页面加载loading
const showLoading = (time = 50000) => {
    var str = ` 
    <div class="loading_box">
        <img class="loading_img" src="https://oss.canxingtv.com/wl/file/20220421145445259-1763220528.png" alt="">

    </div>
     `;
    $('.loading_box').remove();
    $('body').append(str);
    setTimeout(function () {
        $('.loading_box').fadeOut();
    }, time);
};
// 关闭 loading
const hideLoading = () => {
    $('.loading_box').hide();
};
const timeToDate = date => {
    // 转换时间
    date = date.replace(/-/g, '/');
    var dats = date;
    date = parseInt(new Date(date).getTime() / 1000)

    //获取js 时间戳
    var time = new Date().getTime();
    // 获取零点时间
    var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime() / 1000; //今天凌晨
    var yestday = new Date(today - 24 * 3600).getTime();

    time = parseInt((time - date * 1000) / 1000);
    var date = new Date(parseInt(date) * 1000);
    // 格式化月
    let mouth = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
    // 格式化天
    let day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
    // 格式化小时
    let hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
    //  格式化分钟
    let minute = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();

    dats = parseInt(new Date(dats).getTime() / 1000)

    console.log(dats, today, yestday, time, 60 * 60 * 24)
    console.log(dats > yestday, 60 * 60 * 24)

    if (dats >= today && time < 60 * 1) {
        //1分钟内
        return '刚刚';
    } else if (dats >= today && time >= 60 * 1 && time < 60 * 60 * 24) {
        //今天
        return '今天 ' + hour + ':' + minute;
    } else
    if (dats < today && dats > yestday) {
        //昨天
        return '昨天 ' + hour + ':' + minute;
    } else {
        return mouth + '-' + day + '' + ' ' + hour + ':' + minute;
    }

};

const isBigIphone = () => {
    // 判断是刘海屏的手机底部加padding
    if (/iphone/gi.test(window.navigator.userAgent)) {
        // console.log(store);
        /* iPhone X、iPhone XS */
        var x = window.screen.width === 375 && window.screen.height === 812;
        /* iPhone XS Max */
        var xsMax = window.screen.width === 414 && window.screen.height === 896;
        /* iPhone XR */
        var xR = window.screen.width === 414 && window.screen.height === 896;
        if (x || xsMax || xR) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const footer = currentIndex => {
    getUserInfo();
    let list = [{
            name: '首页',
            ischange: 'https://img.singschool.cn/wl/file/20201009155111646-1957429993.png',
            nochange: 'https://img.singschool.cn/wl/file/20201009155057104-1793300710.png',
        },
        {
            name: '发现',
            ischange: 'https://img.singschool.cn/wl/file/20210419112810008-902354403.png',
            nochange: 'https://img.singschool.cn/wl/file/20210419112750090-1031016354.png',
            src: '/audioPlayer/found/index',
        },
        {
            name: '我的',
            ischange: 'https://img.singschool.cn/wl/file/20201009155410642-474966717.png',
            nochange: 'https://img.singschool.cn/wl/file/20201009155347968-115585972.png',
        },
    ];
    let str = '';
    list.forEach((item, index) => {
        str += `<div class="footer_item" data-index='${index}'>
                      <div class="icon">
                          <img class="img" src="${index == currentIndex ? item.ischange : item.nochange}">
                      </div>
                      <div class="txt ${index == currentIndex ? 'active' : ''}">${item.name}</div>
                  </div> `;
    });
    let res = `
            <div id="footer" style="height: ${isBigIphone() ? '0.8rem' : '0.52rem'};">
               ${str}
            </div>
            `;
    if (isBigIphone()) {
        $('body').css({
            'padding-bottom': '0.8rem',
            'box-sizing': 'border-box'
        });
    } else {
        $('body').css({
            'padding-bottom': '0.52rem',
            'box-sizing': 'border-box'
        });
    }
    $('body').append(res);
    $('body').on('click', '.footer_item', function () {
        let index = $(this).data('index');
        if (index == 0) {
            let url = `/videoPage/index/index`;
            jweixin.miniProgram.navigateTo({
                url,
            });
        } else if (index == 1) {} else if (index == 2) {
            let url = `/audioPlayer/found/index`;
            jweixin.miniProgram.navigateTo({
                url,
            });
        } else {
            let url = `/videoPage/mine/mine`;
            jweixin.miniProgram.navigateTo({
                url,
            });
        }
    });
};

function changeNum(num) {
    if (!num) return 0;
    return num > 9999 ? Math.floor(num / 1000) / 10 + 'w' : num;
}

function ChangeDateFormat(val) {
    if (val != null) {
        var datetime = new Date(val);
        //月份为0-11，所以+1，月份小于10时补个0

        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1; //js从0开始取
        var date = datetime.getDate();
        var hour = datetime.getHours();
        var minutes = datetime.getMinutes();
        var second = datetime.getSeconds();

        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (second < 10) {
            second = "0" + second;
        }
        var time = year + "-" + month + "-" + date; //2015-11-4 

        return time;
    }
    return "";
}

function imageChange(url) {
    console.log(url)
    if (url.indexOf('img.singschool.cn') != -1) {
        var index = url.lastIndexOf("?");
        url = url.substring(index + 1, url.length);
        console.log('七牛图片', url.match(/(?=\/w\/)(\S*)(?=\/h)/))
        return url
    } else {

    }
}

function sendPageTop() {
    let element = document.getElementsByClassName('page')[0]
    let system = client.UA();
    var oA = document.createElement('p');
    oA.style = "height:5vh"
    if (system == 'android') {
        element.prepend(oA)
    } else if (system == 'ios') {
        element.prepend(oA)
    }
    // element.appendHTML(`<p style="height:5vh"></p>`)
}

function timeDistance(date3) {
    var days = Math.floor(date3 / (24 * 3600 * 1000))
    //计算出小时数  
    var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数  
    var hours = Math.floor(leave1 / (3600 * 1000))
    //计算相差分钟数  
    var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数  
    var minutes = Math.floor(leave2 / (60 * 1000))
    //计算相差秒数  
    var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数  
    var seconds = Math.round(leave3 / 1000)
    let status = {}
    return [days, hours, minutes, seconds]
    // alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")  
}
export {
    timeDistance,
    changeNum,
    imageChange,
    ChangeDateFormat,
    getUserInfo,
    openSignUp,
    closeSignUp,
    showLoading,
    hideLoading,
    openSignUpNB,
    closeSignUpNB,
    timeToDate,
    footer,
    sendPageTop,
    isBigIphone
};