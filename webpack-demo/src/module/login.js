import axios from 'axios';

const html = `
<div>
    <li>
        <label class="iconfont icon-yonghuming"/>
        <input id="username" type="text" maxlength="10"/>
    </li>
    <li>
        <label class="iconfont icon-mima"/>
        <input id="password" type="password" maxlength="6"/>
    </li>
    <li>
        <label class="iconfont icon-mima1"/>
        <input id="code" type="text" maxlength="10"/>
    </li>
    <button id="submit">登录</button>
</div>`;

const container = document.createElement('div');
container.innerHTML = html;
document.body.appendChild(container);

window.onload = function () {
    console.log('onload')
    document.querySelector('button').addEventListener('click', () => {
        let userName = document.querySelector('#username').value,
            password = document.querySelector('#password').value,
            code = document.querySelector('#code').value;
        if (userName && password && code) {
            axios.post('/user/login', {
                userName,
                password,
                code
            }).then(res=>{
                if (res.data.code === 0){
                    alert('登录成功')
                }else{
                    alert(res.data.msg);
                }
            })
        }
    });
}