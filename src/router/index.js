import Vue from 'vue'
import VueRouter from 'vue-router'
// 官方文件

import Home from '@/components/HelloWorld'  //Home 就是HelloWorld.vue 喔 ＠代表src
import Page from '@/components/pages/page'
import child from '@/components/pages/child'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'
import Menu from   '@/components/pages/menu'
// 自定義的分頁元件

Vue.use(VueRouter)

export default new VueRouter({
    // mode:'history',  
    //可以將路由中#移除，但必須提醒若將#移除就不是前端模擬路由。而是後端切換路由，因此後端路徑也必須重新配置
    linkActiveClass:'active',  //標籤className替換
    routes: [
        {
            path: '/index',    //對應的虛擬路徑
            name: 'home',     //元件呈現的名稱
            component: Home,  //對應元件
        },
        {
            path: '/page',    //對應的虛擬路徑
            // name: '分頁',     //元件呈現的名稱
            // component: Page,  //對應元件
            components:{
                default:Page,
                menu:Menu,
            },
            children:[
                {
                    path: '',         //如果沒有填入入境，元件child1預設會是主頁
                    name: 'child 1',    
                    component: child    
                }, 
                {
                    path: 'child2',      
                    name: 'child 2',     
                    component: child2    
                }, 
                {
                    path: 'child3',      
                    name: 'child 3',     
                    component: child3    
                }, 
            ]    
        },
    ]
});