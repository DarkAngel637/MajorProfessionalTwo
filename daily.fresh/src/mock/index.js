const Mock = require('mockjs')
const fs = require('fs')

const types = ['水果鲜花', '蔬菜豆制品', '肉禽蛋', '水产海鲜', '速食冻品', '粮油调味', '乳品烘培', '休闲食品', '酒水饮品', '餐饮熟食'];
// mock商品列表
const goodsList = Mock.mock({
    "list|100":[{
        "id": '@id',
        "type|+1": types,
        "price": '@float(3, 100, 2, 2)',
        "img": '@Image(200x200, @color)',
        "title": "@ctitle",
        "desc": "@ctitle(20, 30)",
        "checked": 'true',
        "num": 0,
        "sales": '@integer(100, 3000)'
    }]
})

fs.writeFileSync('goodsList.json', JSON.stringify(goodsList));

fs.writeFileSync('types.json', JSON.stringify(types));
