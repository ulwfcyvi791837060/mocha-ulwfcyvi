// 先进入 node
var fetch = require('node-fetch');
var expect = require('chai').expect;

var getStackTrace = function () {
    var obj = {};
    Error.captureStackTrace(obj, getStackTrace);
    return obj.stack;
};
var log = console.log;
console.log = function () {
    var stack = getStackTrace() || ""
    var matchResult = stack.match(/\(.*?\)/g) || []
    var line = matchResult[1] || ""
    for (var i in arguments) {
    }
    if (typeof arguments[i] == 'object') {
        arguments[i] = JSON.stringify(arguments[i])
    }
    arguments[i] += '----' + line.replace("(", "").replace(")", "")
    log.apply(console, arguments)
};

//mocha -t 100000 ./demo05/promise.aws.js
//测试命令如下
// mocha select.organization.awsAndLocal.js

//iphone7 uuid  c59cacad1fc6b660ddfb2ab892935dbdb11215b8
//app下载地址 aws http://fir.hahamall.cn/gridlink
//aws  13028812873  a123456

//    redis-cli -h 127.0.0.1 -p 6379 -a Credit2016Admin set targetUrlTest http://192.168.0.100:8403
//    redis-cli -h 127.0.0.1 -p 6379 -a Credit2016Admin set appLogin http://192.168.0.100:8403/app-token/api/authenticate

//    redis-cli -h 127.0.0.1 -p 6379 -a Credit2016Admin set targetUrlTest https://webapp.91cpct.com
//    redis-cli -h 127.0.0.1 -p 6379 -a Credit2016Admin set appLogin https://webapp.91cpct.com/app-token/api/authenticate

//

//stage-api/

// cd /C/Users/Administrator/Desktop


describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
    console.log("line number");
    it('异步请求应该包含000000', function() {
        return

        fetch("http://192.168.0.100:8333/organization/user?uniqueId=admin", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
                "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrODYsMTM1MzAxMDM4MjQiLCJhdXRoIjoiIiwiZXhwIjoxNTkwODI0MTI4fQ.d_g14HXAznFZNCgpxeH_8nhEBUfTWPguGeMLn_mCO-DmCJrzlqQZpQSqmCYP5iTzMRWyb7IVuG9mjDtLpigQmQ",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://gridcloud.91cpct.com/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        }).then(response => {console.log(response.url);return response.text();}).then(response => {console.log(response);expect(response).to.have.string('000000')});


    });
});

function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}



