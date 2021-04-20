const Mock = require('mockjs');
const fs = require('fs');

const data = Mock.mock({
    "list|10-30": [{
        id: '@id',
        name: '@cname',
        "price|10-30": 20,
        "num|100-300": 100,
        location: '@city'
    }]
})

fs.writeFileSync('data.json', JSON.stringify(data));