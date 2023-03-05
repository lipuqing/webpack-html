import './test.less'
// import {
//     changeNum,
//     getUserInfo,
//     openSignUpNB,
//     openSignUp,
//     showLoading,
//     hideLoading,
//     footer,
// } from '../../common/common'
import {
    apiUrls
} from '../../common/apiUrls'
(function () {
    'use strict'
    window.readystate = function () {
        console.log('readystate')
        $().ready(function () {
            console.log('ready')
        })
    }
    window.onload = function () {
        console.log('onload')
        $().ready(function () {
            console.log('ready')
            cf.showLoading()
        })
    }

})()