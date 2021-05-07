const Mock = require('mockjs')
const fs = require('fs')

// mock商品列表
const goodsList = Mock.mock({
    "list|20":[{
        "id": '@id',
        "price": '@float(3, 100, 2, 2)',
        "img": '@Image(200x200, @color)',
        "title": "@ctitle",
        "desc": "@ctitle(20, 30)",
        "num": 0
    }]
})

fs.writeFileSync('goodsList.json', JSON.stringify(goodsList));


