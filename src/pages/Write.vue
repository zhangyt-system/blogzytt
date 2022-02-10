<template>
    <div class="markdown">
        <el-input v-model='input' placeholder="请输入标题"></el-input>
        <Markdown v-model='markText'/>
        <el-button @click='submitText'>提交</el-button>
    </div>
</template>

<script>
    import Markdown from 'vue-meditor';
    
    export default {
        name: "Write",
        components: {
            Markdown
        },
        data(){
            return{
                input:'',
                markText:''
            }
        },
        methods:{
            submitText(){
                console.log('this.markText');
                console.log(this.markText);
                console.log(this.input);
            }
        }
    }
</script>

<style style>
    *{
        margin:0;
        padding:0;
    }
    .el-input{
        margin:10px;
    }
</style>
