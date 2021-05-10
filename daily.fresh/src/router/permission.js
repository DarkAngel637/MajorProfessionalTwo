import router from './index'

const whiteList = ['/main/profile'];

// 跳转前的守卫
router.beforeEach((to, from, next)=>{
    // 判断是否登陆
    let token = window.localStorage.getItem('token');
    if (token){
        next();
    }else{
        if (whiteList.includes(to.path)){
            next('/login');
        }else{
            next();
        }
    }
})

// 跳转后的守卫
router.afterEach((to, from)=>{

})