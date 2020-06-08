var fetch = require('node-fetch');
var expect = require('chai').expect;

//mocha -t 100000 ./demo05/promise.aws.js

//    redis-cli -h 127.0.0.1 -p 6379 -a Credit2016Admin set targetUrlTest http://192.168.0.100:8403
//    redis-cli -h 127.0.0.1 -p 6379 -a Credit2016Admin set appLogin http://192.168.0.100:8403/app-token/api/authenticate

//    redis-cli -h 127.0.0.1 -p 6379 -a Credit2016Admin set targetUrlTest https://webapp.91cpct.com
//    redis-cli -h 127.0.0.1 -p 6379 -a Credit2016Admin set appLogin https://webapp.91cpct.com/app-token/api/authenticate

//

//stage-api/








describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/app_node/list", {
          "headers": {
              "accept": "*/*",
                  "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
                  "cache-control": "no-cache",
                  "content-type": "application/json",
                  "pragma": "no-cache",
                  "request-origion": "SwaggerBootstrapUi",
                  "x-requested-with": "XMLHttpRequest",
                  "cookie": "SL_G_WPT_TO=zh-CN; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1"
          },
          "referrer": "http://192.168.0.100:8090/doc.html",
              "referrerPolicy": "no-referrer-when-downgrade",
              "body": "{\n\t\"country\": \"\",\n\t\"current\": 1,\n\t\"customerId\": 0,\n\t\"mobilephone\": \"\",\n\t\"nodeId\": 0,\n\t\"nodeLevel\": 0,\n\t\"nodeName\": \"\",\n\t\"size\": 10,\n\t\"status\": 0\n}",
              "method": "POST",
              "mode": "cors"
      }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});



describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/gcConfig/selectConfigList?typeKey=transfer", {
          "headers": {
              "accept": "application/json, text/plain, */*",
                  "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
                  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiXSwib3JnYW5pemF0aW9uIjoiYWRtaW4iLCJleHAiOjE1OTA5OTgwNzUsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6Imd6RE9EWnBRZzh2ckNZV0Vja1FEeU1KLTY4WSIsImNsaWVudF9pZCI6InRlc3RfY2xpZW50In0.64Q5hidt9_F6fKBGVFdDA1_XluGGTIQKG5wWpeFsY4s",
                  "cache-control": "no-cache",
                  "pragma": "no-cache",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-origin",
                  "cookie": "Idea-d1852ee0=bca816b3-a9ff-4e76-aab6-b962adb8bc1c; SL_GWPT_Show_Hide_tmp=undefined; SL_G_WPT_TO=zh-CN; SL_wptGlobTipTmp=undefined; Admin-Token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiXSwib3JnYW5pemF0aW9uIjoiYWRtaW4iLCJleHAiOjE1OTA5OTgwNzUsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6Imd6RE9EWnBRZzh2ckNZV0Vja1FEeU1KLTY4WSIsImNsaWVudF9pZCI6InRlc3RfY2xpZW50In0.64Q5hidt9_F6fKBGVFdDA1_XluGGTIQKG5wWpeFsY4s"
          },
          "referrer": "http://localhost:9527/",
              "referrerPolicy": "no-referrer-when-downgrade",
              "body": null,
              "method": "POST",
              "mode": "cors"
      }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});


describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/app_node/see/5", {
          "headers": {
              "accept": "*/*",
                  "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
                  "cache-control": "no-cache",
                  "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "pragma": "no-cache",
                  "request-origion": "SwaggerBootstrapUi",
                  "x-requested-with": "XMLHttpRequest",
                  "cookie": "SL_G_WPT_TO=zh-CN; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1"
          },
          "referrer": "http://192.168.0.100:8090/doc.html",
              "referrerPolicy": "no-referrer-when-downgrade",
              "body": null,
              "method": "GET",
              "mode": "cors"
      }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});

describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/gcCustomer/gcCustomerList", {
      "headers": {
        "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiXSwib3JnYW5pemF0aW9uIjoiYWRtaW4iLCJleHAiOjE1OTA5ODY1NTUsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6ImFGd0RaQTlTZVNlbjU5ZEc1bF8xSnZZMmF5USIsImNsaWVudF9pZCI6InRlc3RfY2xpZW50In0.v6whqt1Nj_Okmv-etmt4BW44ViGj6jjG3WJCwT5EwrA",
            "cache-control": "no-cache",
            "content-type": "application/json;charset=UTF-8",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "Idea-d1852ee0=bca816b3-a9ff-4e76-aab6-b962adb8bc1c; SL_GWPT_Show_Hide_tmp=undefined; SL_G_WPT_TO=zh-CN; SL_wptGlobTipTmp=undefined; Admin-Token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiXSwib3JnYW5pemF0aW9uIjoiYWRtaW4iLCJleHAiOjE1OTA5ODY1NTUsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6ImFGd0RaQTlTZVNlbjU5ZEc1bF8xSnZZMmF5USIsImNsaWVudF9pZCI6InRlc3RfY2xpZW50In0.v6whqt1Nj_Okmv-etmt4BW44ViGj6jjG3WJCwT5EwrA"
      },
      "referrer": "http://localhost:9527/",
          "referrerPolicy": "no-referrer-when-downgrade",
          "body": "{\"current\":1,\"customerId\":null,\"mobilephone\":\"\",\"size\":10}",
          "method": "POST",
          "mode": "cors"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});

describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/appCustomer/appCustomerInDetailList", {
      "headers": {
        "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "request-origion": "SwaggerBootstrapUi",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "SL_G_WPT_TO=zh-CN; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1"
      },
      "referrer": "http://192.168.0.100:8090/doc.html",
          "referrerPolicy": "no-referrer-when-downgrade",
          "body": "{\n\t\"current\": 1,\n\t\"size\": 10\n}",
          "method": "POST",
          "mode": "cors"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});


describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/appCustomer/appAssets", {
      "headers": {
        "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            "pragma": "no-cache",
            "request-origion": "SwaggerBootstrapUi",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "SL_G_WPT_TO=zh-CN; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1"
      },
      "referrer": "http://192.168.0.100:8090/doc.html",
          "referrerPolicy": "no-referrer-when-downgrade",
          "body": null,
          "method": "POST",
          "mode": "cors"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});


describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/appDevice/deviceDetail/1", {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        "pragma": "no-cache",
        "request-origion": "SwaggerBootstrapUi",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "SL_G_WPT_TO=zh-CN; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1"
      },
      "referrer": "http://192.168.0.100:8090/doc.html",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": null,
      "method": "GET",
      "mode": "cors"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});

describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/appDevice/appDeviceList", {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "request-origion": "SwaggerBootstrapUi",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "SL_G_WPT_TO=zh-CN; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1"
      },
      "referrer": "http://192.168.0.100:8090/doc.html",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "{\n\t\"binding\": 0,\n\t\"current\": 1,\n\t\"deviceNumber\": \"\",\n\t\"runStatus\": 0,\n\t\"size\": 10\n}",
      "method": "POST",
      "mode": "cors"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});

describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/gcCustomer/gcCusDevInDetailList", {"credentials":"include","headers":{"accept":"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8", "content-type":"application/json;charset=UTF-8"},"referrer":"http://192.168.0.100/","referrerPolicy":"no-referrer-when-downgrade","body":"{\"current\":1,\"size\":10,\"customerId\":10,\"deviceNumber\":\"\",\"page\":1}","method":"POST","mode":"cors"}).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});


describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/gcCustomer/gcCusDevInDetailList", {"credentials":"include", "headers":{"accept":"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8", "content-type":"application/json;charset=UTF-8"},"referrer":"https://gridcloud.91cpct.com/","referrerPolicy":"no-referrer-when-downgrade","body":"{\"current\":1,\"size\":10,\"customerId\":null,\"deviceNumber\":\"\",\"page\":1}","method":"POST","mode":"cors"}).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});

describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/organization/user?uniqueId=admin", {
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
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});



describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
    it('异步请求应该包含000000', function() {
        return fetch("http://192.168.0.100:8333/app-token/api/authenticate", {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "pragma": "no-cache",
                "request-origion": "SwaggerBootstrapUi",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "http://192.168.0.100:8070/doc.html",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "{\n\"country\": \"+86\",\t\n\"password\": \"aac41e037079cdb631fbc6fd6d31dddf\",\n\"mobilephone\": \"18423232323\"\n}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

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




