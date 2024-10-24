import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import login from "../pages/login.vue";
// @ts-ignore
import register from "../pages/register.vue";
// @ts-ignore
import home from "../pages/home/home.vue"
// @ts-ignore
import user from "../pages/user/user.vue"
// @ts-ignore
import community from "../pages/community/community.vue"
// @ts-ignore
import userInfo from "../pages/user/userInfo.vue"
// @ts-ignore
import concern from "../pages/concern.vue"
// @ts-ignore
import userPassword from "../pages/user/userPassword.vue"
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/login'
        }
        ,
        {
            path:'/login',
            component:login
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/home',
            component:home,
        },
        {
            path:'/user',
            component:user,
        },
        {
            path:'/community',
            component:community
        },
        {
            path:'/concern',
            component:concern,
        },
        {
            path:'/user/information',
            component:userInfo,
        },
        {
            path:'/user/changePassword',
            component:userPassword,
        }
    ]
})
//导航守卫
router.beforeEach((to,from,next)=>{
    if(to.path=='/login') return next();
    if(to.path=='/register') return next();
    const tokenStr = sessionStorage.getItem('token')
    if(!tokenStr) return next('/login')
    next()
})

export {router};