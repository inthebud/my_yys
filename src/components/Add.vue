<template>
    <div class="add-container">
        <h2 class="title">添加新式神</h2>
        <el-form ref="formRef" :model="form" label-width="120px">
            <el-form-item label="式神名称">
                <el-input v-model="form.name" class="add-input"></el-input>
            </el-form-item>
            <el-form-item label="头像地址">
                <el-input v-model="form.url" class="add-input"></el-input>
            </el-form-item>
            <el-form-item label="稀有度">
                <el-select v-model="form.level" class="add-input" placeholder="请选择稀有度">
                    <el-option label="SP" value="sp"></el-option>
                    <el-option label="SSR" value="ssr"></el-option>
                    <el-option label="SR" value="sr"></el-option>
                    <el-option label="R" value="r"></el-option>
                    <el-option label="N" value="n"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="攻击">
                <el-input v-model="form.baseDamage" class="add-input"></el-input>
            </el-form-item>
            <el-form-item label="生命">
                <el-input v-model="form.life" class="add-input"></el-input>
            </el-form-item>
            <el-form-item label="上线时间">
                <el-col :span="11">
                    <el-date-picker
                            v-model="form.date1"
                            type="date"
                            placeholder="Pick a date"
                            style="width: 100%"
                    ></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="式神类型" >
                <el-checkbox-group v-model="form.type" class="type-group">
                    <el-checkbox label="输出" name="type"></el-checkbox>
                    <el-checkbox label="治疗" name="type"></el-checkbox>
                    <el-checkbox label="护盾" name="type"></el-checkbox>
                    <el-checkbox label="拉条" name="type"></el-checkbox>
                    <el-checkbox label="打火" name="type"></el-checkbox>
                    <el-checkbox label="控制" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data(){
            return {
                form:{
                    name: '',
                    url:'',
                    level:'',
                    baseDamage:'',
                    life:'',
                    date1: '',
                    type: [],
                },
            }
        },
        methods:{
            onSubmit(){
                console.log(this.form);
                this.$store.commit('add',this.form);
                console.log(this.$store.state.allRoles);
            }
        },

        mounted(){
        }
    }
</script>

<style scoped>
    .add-container{
        text-align: left;
    }
    .title{
        text-align: center;
        margin-bottom: 20px;
    }
    .add-input{
        width: 232px;
    }
.type-group{
    /*text-align: left;*/
}
</style>