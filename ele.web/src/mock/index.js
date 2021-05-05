const MockJS = require('mockjs');

const data = MockJS.mock({
    'list|20-30': [{
        id: '@id',
        title: '@ctitle(5,10)',
        description: '@ctitle(20,50)',
        img: MockJS.Random.image('200x200', '@color')
    }]
})

// 使用MockJS拦截
MockJS.mock('/shop/list', ()=>{
    return data.list;
})