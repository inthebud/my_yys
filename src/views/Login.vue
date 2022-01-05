<template>
    <div class="login">
        <div class="login-content">
            <p class="login-title">登录管理员账号</p>
            <div class="form-group">
                <input type="text" @keyup.enter="login"  class="userName" v-model="id" placeholder="管理员ID">
                <div class="icon1"></div>
            </div>
            <div class="form-group">
                <input type="text"  @keyup.enter="login" class="password" v-model="pwd" placeholder="密码">
                <div class="icon2"></div>
            </div>
            <button class="btn" id="btn" @click="login">登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                id:'',
                pwd:'',
                isLogin:false
            }
        },
        methods:{
            login(){
                //验证ID是否是六位数字
                if (/^\d{6}$/.test(this.id)){
                    var users = this.$store.state.users;
                    var me = users.find((user)=>(user.id===Number(this.id)));
                    //验证id是否存在
                    //验证密码是否正确
                    if (me!==undefined && Number(this.pwd)===me.password){
                        localStorage.setItem('isLogin','true');
                        localStorage.setItem('myId',me.id);
                        this.$router.push('/home/all');
                    }
                    else {
                        alert('请输入正确的ID和密码')
                    }

                }else{
                    console.log(this.id+'+'+this.pwd);
                    alert("请输入六位数ID")
                }
            },
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration:none ;
    }
    button{
        border: none;
        outline: none;
        cursor: pointer;
    }
    /* WebKit browsers */
    input::-webkit-input-placeholder {
        color: #C0C0C0;
        font-size: 20px;
    }
    /* Mozilla Firefox 4 to 18 */
    input:-moz-placeholder {
        color: #C0C0C0;
        font-size: 20px;
    }
    /* Internet Explorer 10+ */
    input:-ms-input-placeholder {
        color: #C0C0C0;
        font-size: 20px;
    }
    .login{
        margin: 0 auto;
        background-image: url("../assets/images/logins.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
        width: 468px;
        height: 264px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .login-content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        width: 400px;
        height: 200px;
        font-size: 26px;
        display: flex;
        flex-direction:column;
        justify-content: center;
    }
    .login-title{
        color: #fff0b5;
        font-weight: bold;
    }
    .userName,.password{
        font-size: 22px;
        border-style: none;
        outline: none;
    }
    .btn{
        /*display: block;*/
        font-size: 22px;
        margin: 10px auto;
        background-color: white;
        width: 100px;
        opacity: 0.8;
    }
    .btn:active{
        opacity: 0.6;
    }
</style>