var fetch = require('node-fetch');
var expect = require('chai').expect;

//mocha -t 100000 ./demo05/promise.local.js


describe('promise.test.js', function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8090/gcCustomer/gcDeviceInDetailList", {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "request-origion": "SwaggerBootstrapUi",
        "x-requested-with": "XMLHttpRequest"
      },
      "referrer": "http://192.168.0.100:8090/doc.html",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "{\n\t\"current\": 1,\n\t\"customerId\": 0,\n\t\"deviceNumber\": \"\",\n\t\"size\": 10\n}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});

describe('promise.test.js', function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8090/gcCustomer/gcCusNodeInDetailList", {
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
      "body": "{\n\t\"current\": 1,\n\t\"customerId\": 0,\n\t\"id\": 0,\n\t\"nodeName\": \"\",\n\t\"size\": 10\n}",
      "method": "POST",
      "mode": "cors"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});


describe('promise.test.js', function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8090/gcCustomer/gcCusDevInDetailList", {
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
      "body": "{\n\t\"current\": 1,\n\t\"customerId\": 0,\n\t\"deviceNumber\": \"\",\n\t\"size\": 10\n}",
      "method": "POST",
      "mode": "cors"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});


describe('promise.test.js', function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8090/gcCustomer/gcCusNodeInDetailList", {
      "credentials":"include","headers":{"accept":"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8",
        "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiXSwib3JnYW5pemF0aW9uIjoiYWRtaW4iLCJleHAiOjE1OTA2NTUyNTIsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6Im85Tk54UlNvTlcybWNvQkhKS0xGWW03Y21YQSIsImNsaWVudF9pZCI6InRlc3RfY2xpZW50In0.whlt9IDxS2GiY6_P2fCLAKcN1NB2gOHt5ga4WF3zwZM",
        "content-type":"application/json;charset=UTF-8"},"referrer":"https://gridcloud.91cpct.com/","referrerPolicy":"no-referrer-when-downgrade",
      "body":"{\"current\":1,\"size\":10,\"customerId\":null,\"id\":0,\"nodeName\":\"\"}","method":"POST","mode":"cors"
    }).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});


describe('promise.test.js', function() {
  it('异步请求应该包含000000', function() {
    return fetch("http://192.168.0.100:8090/gcCustomer/gcCusDevInDetailList", {"credentials":"include", "headers":{"accept":"application/json, text/plain, */*","accept-language":"zh-CN,zh;q=0.9,en;q=0.8","authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiXSwib3JnYW5pemF0aW9uIjoiYWRtaW4iLCJleHAiOjE1OTA2NTUyNTIsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6Im85Tk54UlNvTlcybWNvQkhKS0xGWW03Y21YQSIsImNsaWVudF9pZCI6InRlc3RfY2xpZW50In0.whlt9IDxS2GiY6_P2fCLAKcN1NB2gOHt5ga4WF3zwZM","content-type":"application/json;charset=UTF-8"},"referrer":"https://gridcloud.91cpct.com/","referrerPolicy":"no-referrer-when-downgrade","body":"{\"current\":1,\"size\":10,\"customerId\":null,\"deviceNumber\":\"\",\"page\":1}","method":"POST","mode":"cors"}).then(response => response.text()).then(response => {console.log(response);expect(response).to.have.string('000000')});

  });
});
