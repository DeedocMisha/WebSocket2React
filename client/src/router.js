import { createRouter,createWebHashHistory } from "vue-router";
import MaIne from "./components/MaIn.vue";
import Chat from "./components/INdex.vue";
import side from "./components/SideBar.vue";

export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {path: '/',name:'home' ,component:MaIne},
        {path: '/chat',name:'chat' ,component:Chat},

    ]
})
