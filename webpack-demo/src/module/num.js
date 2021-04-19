// 九九乘法表
let html = `<ul>`;
for (let i = 1; i <= 9; i++) {
    html += `<li>`
    for (let j = 1; j <= i; j++) {
        html += `<span>${j+'x'+i+ '='+ i*j}</span>`
    }
    html += `</li>`;
}
html += `</ul>`;

document.querySelector('#num').innerHTML = html;