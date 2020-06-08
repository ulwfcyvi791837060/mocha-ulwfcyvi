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
    return fetch("http://192.168.0.100:8333/business/appCustomer/updatePassword", {
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
              "body": "{\n\t\"country\": \"+86\",\n\t\"email\": null,\n\t\"mobilephone\": \"13530103824\",\n\t\"name\": \"\",\n\t\"password\": \"123456\"\n}",
              "method": "PUT",
              "mode": "cors"
      }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});




describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/gcCustomer/initSDVNUserDeduplication", {
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
    return fetch("http://192.168.0.100:8333/business/app_node/bindDevice", {
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
              "body": "{\n\t\"devNum\": \"N87CMQ4xHv6xjG9K\",\n\t\"nodeLevel\": 3,\n\t\"nodeName\": \"123456\",\n\t\"parentNode\": 4\n}",
              "method": "POST",
              "mode": "cors"
      }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});



describe(dateFormat("YYYY-mm-dd HH:MM:SS",new Date()), function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8333/business/app_node/appAddNode", {
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
              "body": "{\n\t\"nodeName\": \"123456\"\n}",
              "method": "POST",
              "mode": "cors"
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




