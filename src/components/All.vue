<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <h3>全部式神</h3>
        <MainSearch @getName="getMyName"></MainSearch>
        <div class="btn-add">
            <el-button type="primary" size="small" @click="add">添加</el-button>
        </div>
        <div class="roles-wrap clearfix">
            <div class="role"  v-for="(role ,index) in filterRoles" :key="role.name">
                <router-link :to="{path:'role',query: {roleIndex: index}}">
                    <el-image
                            class = 'head_portrait'
                            style="width: 100px; height: 100px"
                            :src="role.url"
                            fit="cover"
                    ></el-image>
                    <span class="name">{{role.name}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    //三级路由
    import MainSearch from './MainSearch.vue'
    export default {
        name: "All",
        components:{
            MainSearch,
        },
        data(){
            return{
                myAllRoles:[],
                mySearchName:'',
                mySelectedType: '',
                currentPage:1,
                totalColumn:0
            }
        },
        mounted(){
            this.myAllRoles = this.$store.state.allRoles;
            this.totalColumn = this.myAllRoles.length
        },
        methods:{
            getMyName(searchName,selectedType){
                this.mySearchName=searchName;
                this.mySelectedType=selectedType;
            },
            add(){
                this.$router.push('add')
            },
        },
        computed:{
            filterRoles(){
                let{mySearchName,myAllRoles,mySelectedType} = this;
                let arr=[...myAllRoles];
                if(mySearchName.trim()){
                    arr =myAllRoles.filter(r=>r.name.indexOf(mySearchName)!==-1);
                }
                if(mySelectedType.trim()){
                    arr = myAllRoles.filter(r=>r.type.indexOf(mySelectedType)!==-1)
                }
                return arr
            }
        }
    }
</script>

<style scoped>
    .roles-wrap{
        background-color: white;
        padding-left: 14px;
    }
    .roles-wrap::after {
        content: "";
        clear: both;
        display: table;
    }
    .role{
        float: left;
        width: 100px;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        padding: 15px;
    }
    .role:hover{
        background-color: #e9eef3;
    }
    a{
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
    .head_portrait{
        display: block;
    }
    .name{
        display: block;
        padding-top: 10px;
    }
    .btn-add{
        text-align: right;
        margin-bottom: 10px;
    }
</style>