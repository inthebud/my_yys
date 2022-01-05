<template>
    <div>
        <h3>N式神</h3>
        <MainSearch @getName="getMyName"></MainSearch>
        <List :myFilterRoles="filterRoles"></List>
        <div class="block" style="margin: 20px">
            <el-pagination
                    layout="prev, pager, next"
                    :total="totalColumn"
                    @current-change="getCurrentPage"
                    @prev-click="prevPage"
                    @next-click="nextPage"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import MainSearch from './MainSearch.vue'
    import List from './List'
    export default {
        name: "n",
        components:{
            MainSearch,
            List
        },
        data(){
            return{
                myNRoles:[],
                mySearchName:'',
                mySelectedType: '',
                currentPage:1,
                totalColumn:0
            }
        },
        mounted(){
            let myAllRoles = this.$store.state.allRoles;
            this.myNRoles = myAllRoles.filter(r=>r.level==='n');
            this.totalColumn = this.myNRoles.length;
        },
        methods:{
            getMyName(searchName,selectedType){
                this.mySearchName=searchName;
                this.mySelectedType=selectedType;
            },
            getCurrentPage(x){
                this.currentPage=x;
            },
            prevPage(x){
                console.log(x)
            },
            nextPage(x){
                this.currentPage=x
            }
        },
        computed:{
            filterRoles(){
                let{mySearchName,myNRoles,mySelectedType,currentPage} = this;
                let arr=[...myNRoles];
                if(mySearchName.trim()){
                    arr =myNRoles.filter(r=>r.name.indexOf(mySearchName)!==-1);
                }
                if(mySelectedType.trim()){
                    arr = myNRoles.filter(r=>r.type.indexOf(mySelectedType)!==-1)
                }
                let showList = [];
                for (var index= 0;index<10;index++){
                    if (arr[(currentPage-1)*10+index]) {
                        showList[index]=arr[(currentPage-1)*10+index]
                    }else break
                }
                // console.log(arr);
                // console.log('currentPage:'+currentPage);
                // console.log(showList);
                return showList;
            }
        }
    }
</script>

<style scoped>

</style>