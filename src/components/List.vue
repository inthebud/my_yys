<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <div class="btn-add">
            <el-button type="primary" size="small" @click="add">添加</el-button>
        </div>
        <el-table :data="myFilterRoles" style="width: 100%">
            <el-table-column type="expand" >
                <template v-slot:default="props">
                    <el-form label-position="left" style="padding-left: 60px" inline class="demo-table-expand">
                        <el-form-item label="式神名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="式神类型">
                            <span>{{ props.row.type }}</span>
                        </el-form-item>
                        <el-form-item label="攻击" >
                            <span>{{ props.row.baseDamage}}</span>
                        </el-form-item>
                        <el-form-item label="生命">
                            <span>{{ props.row.life }}</span>
                        </el-form-item>
                        <el-form-item label="上线日期">
                            <span>{{ props.row.createAt }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="式神" align="center">
                <template v-slot:default="adress">
                    <div style="text-align: center">
                        <el-image
                                class = 'head_portrait'
                                style="width: 100px; height: 100px"
                                :src="adress.row.url"
                                fit="cover"
                        ></el-image>
                        <p>{{adress.row.name}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="type" label="类型" align="center"/>
            <el-table-column prop="baseDamage" label="攻击" align="center" sortable/>
            <el-table-column prop="life" label="生命" align="center" sortable/>
            <el-table-column prop="createAt" label="上线时间" align="center" sortable/>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: "list",
        props: ['myFilterRoles'],
        data(){
            return {

            }
        },
        methods:{
            add(){
                this.$router.push('add')
            }
        }
    }
</script>

<style scoped>
    li{
        text-align: left;
    }
    p{
        padding: 0;
        margin: 0;
    }
    .btn-add{
        text-align: right;
        margin-bottom: 10px;
    }
    .head_portrait{
        border-radius: 50%;
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width:90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 100%;
    }
</style>