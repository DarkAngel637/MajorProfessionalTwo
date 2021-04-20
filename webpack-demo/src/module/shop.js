import axios from 'axios';

axios.get('/shop/list').then(res=>{
    if (res.data.code === 0){
        let html = `<ul>`;
        html += res.data.data.map(item=>{
            return `<li>
                <span>${item.name}</span>
                <span>${item.num}</span>
                <span>${item.price}</span>
                <span>${item.location}</span>    
            </li>`
        }).join(" ");
        html += '</ul>'
        document.body.innerHTML += html;
    }else{
        alert(res.data.msg)
    }
})