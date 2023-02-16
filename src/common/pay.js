import '../../css/public/activity.less'
import {

} from '../../common/common'
import {
    apiUrls
} from '../../common/apiUrls'
const template = require('art-template/lib/template-web');
const jweixin = require('jweixin-module');
(function () {
    'use strict'
    window.onload = function () {
        setInterval(() => {
            getPrice()
        }, 1000)
        var orderNo, ctid = client.getQueryStringByName('ctid'),
            shareId = client.getQueryStringByName('shareId'),
            paychange = 'wx',
            price = (client.getQueryStringByName('ctprice') / 100).toFixed(2);
        getPrice()
        // if (window.client.getQueryStringByName('isopen') == 1) {
        //     $('#openInstall').css('display', 'none')
        // }
        $('#jumpH5').on('click', () => {
            window.location.href = "https://mp.weixin.qq.com/s/9r6fLwTfoSsWOQLjDdT-PQ"
        })
        // 获取用户信息并保持
        let token = localStorage.getItem("userToken");

        var headers = {
            "Content-Type": "application/json-patch+json",
            Authorization: "Bearer " + token,
        };
        $.ajax({
            url: apiUrls.host + "api/user/userinfo", //url路径
            type: "GET", //GET
            async: false, //或false,是否异步
            headers: headers,
            data: {
                //参数
            },
            timeout: 5000, //超时时间
            dataType: "json", //返回的数据格式：

            success: function (res, textStatus, jqXHR) {
                if (res.success) {
                    console.log(res.data)
                    if (res.data.accountId == '00000000-1111-1111-0000-000000000000') {
                        $('#iosnone').css('display', 'none')
                    }

                }
            },
            error: function (xhr, textStatus) {},
            complete: function () {},
        });

        $('#btn').on('click', () => {
            $('.model_box').css('display', 'none')
        })
        // 领取证书按钮事件
        $('#btn_img').on('click', () => {
            if (client.UA() == 'ios') {
                $('#scan').css('display', 'block')
                // 客服二维码 https://img.singschool.cn/wl/file/20201118153703791-2098457014.png
            } else {
                $('#mask').css('display', 'flex')
                // 显示价格
                $("#price").html(price)

                if (client.UA() == "mobileWeibo") {
                    $('.alipay').show()
                    $('.wxpay').hide()
                    paychange = "alipay"
                    $(".alipay #paywximg").attr('src', "https://img.singschool.cn/wl/file/20200512192005824-698966670.png");
                    $(".alipay #alipayimg").attr('src', "https://img.singschool.cn/wl/file/20200512192131842-18898057.png");
                
                }else{
                    $('.alipay').hide()
                    $('.wxpay').show()
                }
                if (client.UA() == 'wx') {
                    console.log('微信支付')
                } else if (client.UA() == 'wxh5') {
                    console.log('wxh5')
                } else if (client.UA() == 'android') {
                    console.log('android')
                    return
                    window.android.pay(this.$route.query.ctid, 3)
                } else if (client.UA() == 'mobileWeibo') {
                    console.log('mobileWeibo')
                } else {
                    console.log('h5支付')
                }
            }
        })
        // 跳转指南页面
        $("#guide").on('click', () => {
            window.location.href = window.location.origin + "/h5/pages/shortvideo/assistantwechat?isopen=1&type=payClass"
        })
        // 保存二维码按钮
        $("#btn_save").on('click', () => {
            if (client.UA() == 'ios') {
                // 发送二维码地址给IOS
                // 客服二维码 https://img.singschool.cn/wl/file/20201118153703791-2098457014.png
            } else {

            }
        })
        // 领取证书按钮事件
        $('#btn_img1').on('click', () => {
            console.log('去我得已购')
            window.location.href = 'https://mp.canxingtv.com/h5/pages/found/courseMain?ctid=66e038c1-6136-433d-9a07-e05f0e4fbd0f'
        })
        //close
        $('#close').on('click', () => {
            $('#mask').css('display', 'none')
        })
        // 展开
        $('#change').on('click', function () {
            let cls = $('#typeImg').attr("class");
            let nextDom = $('#change').next();
            if (cls == 'rotate') {
                $('#typeImg').removeClass('rotate')
                $('#typeImg').addClass('rotate1')
                nextDom.removeClass('noheight')
                nextDom.addClass('height')
            } else {
                $('#typeImg').removeClass('rotate1')
                $('#typeImg').addClass('rotate')
                nextDom.removeClass('height')
                nextDom.addClass('noheight')
            }
        })
        // 选择支付方式
        $('.model_mask>div').each(function () { // 勾选微信
            //https://img.singschool.cn/wl/file/20200511120447060-1856197503.png?imageMogr2/crop/!40x40a122a40
            //https://img.singschool.cn/wl/file/20200512192005824-698966670.png
            // 勾选支付宝
            // https://img.singschool.cn/wl/file/20200512192131842-18898057.png
            //https://img.singschool.cn/wl/file/20200512192005824-698966670.png
            // 切换  rotate1 向下  rotate 向左 
            //  支付宝  'height':'noheight'
            $(this).on('click', () => {
                let payInfo = $(this).data("name")
                if (payInfo == 'wx') {
                    paychange = $(this).data("name")
                    $("#alipayimg").attr('src', "https://img.singschool.cn/wl/file/20200512192005824-698966670.png");
                    $("#paywximg").attr('src', "https://img.singschool.cn/wl/file/20200511120447060-1856197503.png?imageMogr2/crop/!40x40a122a40");
                } else {
                    paychange = $(this).data("name")
                    $("#paywximg").attr('src', "https://img.singschool.cn/wl/file/20200512192005824-698966670.png");
                    $("#alipayimg").attr('src', "https://img.singschool.cn/wl/file/20200512192131842-18898057.png");
                }
            })
        })
        // 支付 
        $('#btn_gopay').on('click', () => {
            if (paychange == 'wx') {
                if (client.UA() == "android") {
                    window.android.pay(ctid, 3);
                } else {
                    if (client.UA() == "h5") {
                        courseAlipy("gowx");
                    } else {
                        buyCoures();
                    }
                }
            }

            if (paychange == 'alipay') {
                // if (client.UA() == 'wx' || client.UA() == 'wxh5') {
                //     courseAlipy()
                //     return
                // }
                if (client.UA() == "android") {
                    window.android.pay(ctid, 4);
                } else {
                    courseAlipy();
                }
            }

            gopay()
            if (paychange == 'wx') {
                if (client.UA() == 'android') {
                    window.android.pay(ctid, 3)
                } else {
                    if (client.UA() == 'h5') {
                        courseAlipy('gowx')
                    } else {
                        buyCoures()
                    }
                }
            } else {
                if (client.UA() == 'android') {
                    window.android.pay(ctid, 4)
                } else {
                    courseAlipy()
                }
            }

        })

        // 关闭遮罩  close_img
        $('#close_img').on('click', () => {
            $('#scan').css('display', 'none')
        })

        function gopay(e) {
            if (client.UA() == 'ios') {
                window.webkit.messageHandlers.searchCallBack.postMessage(
                    `payCourse:${ctid},${this.infoData.typeName}`
                )
                return
            }
            // if (
            //     client.UA() == 'wxh5' &&
            //     JSON.parse(window.localStorage.getItem('userWxdetail')).data
            //     .platformId != 'WECHAT'
            // ) {
            //     localStorage.clear()
            //     window.location.reload()
            //     return
            // }
        }
        // 支付宝支付
        function getPrice(e) {
            let url = `${apiUrls.host}api/entry`
            client.post(url, {
                paramData: {
                    ctid: ctid ? ctid : "66e038c1-6136-433d-9a07-e05f0e4fbd0f"
                },
                asmName: "获取指定课程包"
            }, res => {
                price = (res.result.resultData.CourseType[0].price / 100).toFixed(2)
                if (res.result.resultData.CourseType[0].isPayment) {
                    // 已经购买
                    $("#btn_img").css("display", "none")
                    $("#btn_img1").css("display", "block")
                    iframe()
                } else {
                    // 为购买
                    $("#btn_img").css("display", "block")
                    $("#btn_img1").css("display", "none")
                    // iframe()
                }
            })
        }
        // 弹出权益弹窗
        function iframe() {
            $("#iframe").css({
                'display': 'block',
                width: '100%',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                'z-index': '999'
            })
        }
        var testiframe = document.getElementById("iframe").contentWindow;
        var doc = testiframe.document;
        testiframe.addEventListener("click", function (e) {
            $('#iframe').remove()
        })
        // 支付宝支付
        function courseAlipy(e) {
            console.log('!!!!!!!!!!!alipay')
            let url = `${apiUrls.payclass}?themeId=${ctid}&shareId=${shareId ? shareId : ''}&payType=${e && e == 'gowx' ? 6 : 2}`;
            client.get(url, res => {
                console.log(res)
                if (res) {
                    orderNo = res.data.orderNo
                    if (e && e == 'gowx') {
                        const payData =
                            e && e == 'gowx' ?
                            res.data.payData.mwebUrl :
                            res.data.payData.url //mwebUrl
                        let ailtoken = `url=${encodeURIComponent(payData)}&orderNo=${res.data.orderNo
                            }&themeId=${client.getQueryStringByName('ctid')}&isopen=1`
                        console.log(ailtoken)
                        window.location.href = window.location.origin + `/h5/pages/pay/direct?${ailtoken}`
                        // jump(window.location.origin+`/h5/pages/pay/direct?${ailtoken}`)
                        return
                    }
                    if (res.data.payData.raw == null) {
                        const payData = e && e == 'gowx' ? 6 : res.data.payData.url //mwebUrl
                        let ailtoken = `url=${encodeURIComponent(payData)}&orderNo=${res.data.orderNo
                            }&themeId=${ctid}&isopen=1`
                        console.log(ailtoken)
                        window.location.href = window.location.origin + `/h5/pages/pay/direct?${ailtoken}`
                        // jump(window.location.origin+`/h5/pages/pay/direct?${ailtoken}`)
                    }
                }
            })
        }
        // 微信内部支付
        function buyCoures() {
            console.log('!!!!!!!!!!!wx', apiUrls.payclass)
            let url = `${apiUrls.payclass}?themeId=${ctid}&shareId=${shareId ? shareId : ''}&payType=${client.UA() == 'wxh5' ? 11 : 6}`;
            client.get(url, res => {
                console.log(res)
                orderNo = res.data.orderNo
                const payData = JSON.parse(res.data.payData.orderInfo)
                if (typeof WeixinJSBridge == 'undefined') {
                    if (document.addEventListener) {
                        document.addEventListener(
                            'WeixinJSBridgeReady',
                            onBridgeReady(payData),
                            false
                        )
                    } else if (document.attachEvent) {
                        document.attachEvent(
                            'WeixinJSBridgeReady',
                            onBridgeReady(payData)
                        )
                        document.attachEvent(
                            'onWeixinJSBridgeReady',
                            onBridgeReady(payData)
                        )
                    }
                } else {
                    onBridgeReady(payData)
                }
            })
        }
        // 微信支付API
        function onBridgeReady(params) {
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    appId: params.appId, //公众号名称，由商户传入
                    timeStamp: params.timeStamp + '', //时间戳，自1970年以来的秒数
                    nonceStr: params.nonceStr, //随机串
                    package: params.package,
                    signType: params.signType, //微信签名方式：
                    paySign: params.paySign, //微信签名
                },
                function (res) {
                    if (res.err_msg == 'get_brand_wcpay_request:ok') {
                        console.log('支付成功', orderNo)
                    } else {
                        console.log('支付失败', orderNo)
                    }
                }
            )
        }

    }

})()