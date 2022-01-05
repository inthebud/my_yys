<template>
    <div class="main-content">
        <div>
            <img :src="currentRole.url" alt="">
            <div class="name">{{currentRole.name}}</div>
        </div>
        <el-descriptions title="" :column='1' class="roleMessage" border>
            <el-descriptions-item label="稀有度">{{currentRole.level}}</el-descriptions-item>
            <el-descriptions-item label="类型">{{currentRole.type}}</el-descriptions-item>
            <el-descriptions-item label="攻击">{{currentRole.baseDamage}}</el-descriptions-item>
            <el-descriptions-item label="生命">{{currentRole.life}}</el-descriptions-item>
            <el-descriptions-item label="上线日期">{{currentRole.createAt}}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
    export default {
        name: "Role",
        props:['roleIndex'],
        data(){
            return{
                currentRole:{}
            }
        },
        mounted(){
            this.currentRole=this.$store.state.allRoles[this.$route.query.roleIndex];
        }
    }
</script>

<style scoped>
    .name{
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }
    .roleMessage{
    font-size: 20px;
    width: 300px;
    margin: 20px auto;
}
</style>