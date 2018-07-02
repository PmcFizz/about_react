exports.getCommonApi = function (app) {
  app.get('/api/shop/basic', function (req, res) {
    var result = {
      shopName: '大保健',
      id: 23341,
      address: '深圳市神秘区隐秘村404号',
      contact: 14733332222
    };
    res.send(result);
  });
  app.get('/api/ticket/list', function (req, res) {
    let result = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }]
    res.send(result)
  })
}


