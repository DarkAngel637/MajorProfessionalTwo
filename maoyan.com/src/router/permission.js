import router from './index'

// 导航守卫

// 每次路由跳转之前
router.beforeEach((to, from, next)=>{
    console.log('from...', from);
    console.log('to...', to)
    if (to.path.includes('/detail')){
        next('/404');
    }else{
        next();
    }
})

// 每次路由跳转之后
router.afterEach((to, from)=>{
    console.log('路由跳转之后')
})