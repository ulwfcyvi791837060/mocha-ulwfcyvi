var fetch = require('node-fetch');
var expect = require('chai').expect;

describe('promise.test.js - 登录', function() {
  it('异步请求应该返回一个对象', function() {
    return fetch("https://webapp.91cpct.com/app-token/api/authenticate", {
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
      "body": "{\n\"country\": \"+86\",\t\n\"password\": \"123456\",\n\"mobilephone\": \"13530103824\"\n}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    }).then(function(res) {
        return res.json();
      }).then(function(json) {
      console.log(json);
        //期望
        expect(json).to.be.an('object');
      });
  });
});



describe('promise.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function() {
    return fetch("https://webapp.91cpct.com/app-token/api/authenticate", {
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
      "body": "{\n\"country\": \"+86\",\t\n\"password\": \"123456\",\n\"mobilephone\": \"13530103824\"\n}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    }).then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log(json);
      expect(json).to.be.an('object');
    });
  });
});
