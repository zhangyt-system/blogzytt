<template>
  <div class="hello">
    <el-button class='write-style' type='primary' @click='toWriteClick'>写文章</el-button>
    <div class=''>进入js的学习</div>
    <div class='timeline-entry-list'>
      <div class='home-desc'>最近发表</div>
       <ul >
            <li v-for='item in articleList' :key='item.id'><articleWrapped /></li>
        </ul>
    </div>
  </div>
</template>

<script>
import articleWrapped from "../components/Home/articleWrapped.vue";
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components:{
    articleWrapped
  },
  methods:{
    toWriteClick(){
      console.log(123);
      console.log(this.$router);
      this.$router.push('/write')
    }
  },
  data(){
    return{
      articleList:[
        {
          id:1,
          title:'送pico！沸点养鱼计划，集卡兑换豪礼',
          description:'只需每天动动小手发发沸点，就可 100% 领取 2022 掘金新版周边，甚至还有机会获得 Pico VR 一体机等惊喜豪礼哦！'
        },
        {
          id:2,
          title:'送pico！沸点养鱼计划，集卡兑换豪礼',
          description:'只需每天动动小手发发沸点，就可 100% 领取 2022 掘金新版周边，甚至还有机会获得 Pico VR 一体机等惊喜豪礼哦！'
        },
        {
          id:3,
          title:'送pico！沸点养鱼计划，集卡兑换豪礼',
          description:'只需每天动动小手发发沸点，就可 100% 领取 2022 掘金新版周边，甚至还有机会获得 Pico VR 一体机等惊喜豪礼哦！'
        },
        {
          id:4,
          title:'送pico！沸点养鱼计划，集卡兑换豪礼',
          description:'只需每天动动小手发发沸点，就可 100% 领取 2022 掘金新版周边，甚至还有机会获得 Pico VR 一体机等惊喜豪礼哦！'
        },
        {
          id:5,
          title:'送pico！沸点养鱼计划，集卡兑换豪礼',
          description:'只需每天动动小手发发沸点，就可 100% 领取 2022 掘金新版周边，甚至还有机会获得 Pico VR 一体机等惊喜豪礼哦！'
        },
        {
          id:6,
          title:'送pico！沸点养鱼计划，集卡兑换豪礼',
          description:'只需每天动动小手发发沸点，就可 100% 领取 2022 掘金新版周边，甚至还有机会获得 Pico VR 一体机等惊喜豪礼哦！'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-entry-list {
    margin:0 auto;
    border-radius: 2px;
    width: 700px;
    border: 1px solid green;
    height:100vh;
}
.home-desc{
    margin:13px;
    font-size:13px;
    color:#999;
}
ul{
  list-style:none;
}
.write-style{
  margin:0 0 1vh 70vw;
}
</style>
