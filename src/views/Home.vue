    <template>
        <div class="bigBox">
            <el-container>
                <div class="userMsg">
                    <el-icon class="userIcon" size="16px" color="darkgray"><user /></el-icon>
                    <button class="userId">{{myId}}</button>
                    <button class="quit" @click="quit">退出</button>
                </div>
                <h1 class="headerText">阴阳师式神查询系统</h1>
                <el-header>
                    <div class="block">
                        <el-carousel height="150px" :autoplay=false>
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 class="small">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-header>
                <el-container>
                    <el-aside width="150px">
                        <el-menu
                                :router = true
                                default-active="1"
                                class="el-menu-demo"
                        >
                            <el-menu-item index="all">全部</el-menu-item>
                            <el-menu-item index="sp">SP</el-menu-item>
                            <el-menu-item index="ssr">SSR</el-menu-item>
                            <el-menu-item index="sr">SR</el-menu-item>
                            <el-menu-item index="r">R</el-menu-item>
                            <el-menu-item index="n">N</el-menu-item>
                        </el-menu>
                    </el-aside>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>



        </div>
    </template>
<script>
    import { User } from '@element-plus/icons'
    export default {
        name: "Home",
        data(){
            return{
                myId:'0'
            }
        },
        components:{
            User
        },
        methods:{
            quit(){
                localStorage.setItem('isLogin','false');
                this.$router.push('/login');
            }
        },
        mounted(){
            console.log(this.$route.params);
            // this.myId=this.$route.params.id;
            this.myId=localStorage.getItem('myId');
        }
    }

</script>



<style scoped>
    button{
        border: none;
        outline: none;
        cursor: pointer;
        background-color: white;
    }
    .bigBox{
        border: 1px solid #b3c0d1;
        margin: 0 auto;
        width: 1000px;
        position: relative;
    }
    .bigBox button{
        color: darkgray;
    }
    .userIcon{
        /*vertical-align: center;*/
    }
    .userMsg{
        display: flex;
        justify-content:flex-end;
        align-items: flex-end;
        height: 20px;
    }
    .userId{
        vertical-align: bottom;
        margin-right: 10px;
    }
    .headerText{
        text-align: center;
        margin-bottom: 20px;
    }
    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: var(--el-text-color-primary);
        text-align: center;
        height: 150px;
        padding: 0;
    }

    .el-aside {
        background-color: white;
        color: var(--el-text-color-primary);
        text-align: center;
    }

    .el-main {
        background-color: #e9eef3;
        color: var(--el-text-color-primary);
        text-align: center;
    }

     .el-container {
         /*height: 1000px;*/
         min-height: 1000px;
    }

     .el-menu-demo{
         border-bottom: 1px solid #e9eef3;
     }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(3) {
        /*background-color: #99a9bf;*/
        background-image: url("../assets/images/banner01.jpg");
    }

    .el-carousel__item:nth-child(4) {
        background-color: #d3dce6;
        background-image: url("../assets/images/banner02.jpg");
    }
    .el-carousel__item:nth-child(5) {
        background-color: #d3dce6;
        background-image: url("../assets/images/banner03.jpg");
    }
    .el-carousel__item:nth-child(6) {
        background-color: #d3dce6;
        background-image: url("../assets/images/banner04.jpg");
    }
</style>