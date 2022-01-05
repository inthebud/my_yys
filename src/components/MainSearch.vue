<template>
    <div class="main_header">
        <div>
            <span>搜索：</span>
            <input type="text" class='search' v-model="searchName" placeholder="式神名称">
        </div>
        <div>
            <span>式神类型</span>
            <select v-model="selectedType" class="header_select">
                <option value="">所有类型</option>
                <option>输出</option>
                <option>治疗</option>
                <option>护盾</option>
                <option>拉条</option>
                <option>打火</option>
                <option>控制</option>
            </select>
        </div>

    </div>

</template>

<script>
    export default {
        name: "MainSearch",
        data(){
            return{
                searchName:'',
                selectedType:''
            }
        },
        beforeUpdate(){
            this.$emit('getName',this.searchName,this.selectedType);
        }
    }
</script>

<style scoped>
    .main_header{
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
    }
    .main_header>div{
        /*display: inline-block;*/
        /*width: 50%;*/
        /*text-align: left;*/
    }
    .header_select{
        /*width: 80%;*/
        color: darkgray;
        width: 180px;
        margin-left: 10px;
    }
</style>