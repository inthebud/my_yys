import { createStore } from 'vuex'

export default createStore({
  state: {
    users:[
      {id:111222,password:222111},
      {id:666888,password:888666},
    ],
    allRoles:[
      {name:'少羽大天狗',level:'sp',type:'输出',baseDamage:499,life:502,url:require('../assets/head_portrait/sydtg.png'),createAt:20200102},
      {name:'炼狱茨木童子',level:'sp',type:'输出',baseDamage:497,life:504,url:require('../assets/head_portrait/lycmtz.png'),createAt:20200101},
      {name:'稻荷神御馔津',level:'sp',type:'控制,拉条',baseDamage:496,life:505,url:require('../assets/head_portrait/dhsyzj.png'),createAt:20200101},
      {name:'苍风一目连',level:'sp',type:'输出',baseDamage:495,life:506,url:require('../assets/head_portrait/cfyml.png'),createAt:20200101},
      {name:'赤影妖刀姬',level:'sp',type:'输出',baseDamage:494,life:507,url:require('../assets/head_portrait/cyydj.png'),createAt:20200101},
      {name:'御怨般若',level:'sp',type:'控制',baseDamage:493,life:508,url:require('../assets/head_portrait/yybr.png'),createAt:20200101},
      {name:'骁浪荒川之主',level:'sp',type:'输出',baseDamage:493,life:508,url:require('../assets/head_portrait/xlhczz.png'),createAt:20200101},
      {name:'烬天玉藻前',level:'sp',type:'输出',baseDamage:493,life:508,url:require('../assets/head_portrait/jtyzq.png'),createAt:20200101},
      {name:'鬼王酒吞童子',level:'sp',type:'拉条,输出',baseDamage:493,life:508,url:require('../assets/head_portrait/gwjttz.png'),createAt:20200101},
      {name:'天剑韧心鬼切',level:'sp',type:'输出',baseDamage:493,life:508,url:require('../assets/head_portrait/tjrxgq.png'),createAt:20200101},
      {name:'聆海金鱼姬',level:'sp',type:'治疗,输出',baseDamage:493,life:508,url:require('../assets/head_portrait/lhjyj.png'),createAt:20200101},
      {name:'浮世青行灯',level:'sp',type:'打火,输出',baseDamage:493,life:508,url:require('../assets/head_portrait/fsqxd.png'),createAt:20200101},
      {name:'待宵姑获鸟',level:'sp',type:'输出',baseDamage:493,life:508,url:require('../assets/head_portrait/dxghn.png'),createAt:20200101},
      {name:'麓铭大岳丸',level:'sp',type:'输出',baseDamage:493,life:508,url:require('../assets/head_portrait/lmdyw.png'),createAt:20200101},
      {name:'初翎山风',level:'sp',type:'输出',baseDamage:493,life:508,url:require('../assets/head_portrait/clsf.png'),createAt:20200101},
      {name:'缚骨清姬',level:'sp',type:'输出', baseDamage:500,life:501,url:require('../assets/head_portrait/fgqj.png'), createAt:20200103},
      {name:'夜溟彼岸花',level:'sp',type:'输出',baseDamage:493,life:508,url:require('../assets/head_portrait/ymbah.png'),createAt:20200101},
      {name:'蝉冰雪女',level:'sp',type:'控制',baseDamage:498,life:503,url:require('../assets/head_portrait/cbxn.png'),createAt:20200101},
      {name:'空相面灵气',level:'sp',type:'输出,拉条',baseDamage:493,life:508,url:require('../assets/head_portrait/kxmlq.png'),createAt:20200101},
      {name:'绘世花鸟卷',level:'sp',type:'治疗',baseDamage:493,life:508,url:require('../assets/head_portrait/hshnj.png'),createAt:20200101},
      {name:'因幡辉夜姬',level:'sp',type:'打火',baseDamage:493,life:508,url:require('../assets/head_portrait/yfhyj.png'),createAt:20200101},
      {name:'大天狗',level:'ssr',type:'输出',baseDamage:399,life:401,url:require('../assets/head_portrait/dtg.png'),createAt:20200103},
      {name:'酒吞童子',level:'ssr',type:'输出',baseDamage:398,life:402,url:require('../assets/head_portrait/jttz.png'),createAt:20200102},
      {name:'荒川之主',level:'ssr',type:'输出',baseDamage:398,life:402,url:require('../assets/head_portrait/hczz.png'),createAt:20200102},
      {name:'炎魔',level:'ssr',type:'控制',baseDamage:398,life:402,url:require('../assets/head_portrait/ym.png'),createAt:20200102},
      {name:'两面佛',level:'ssr',type:'输出，控制',baseDamage:398,life:402,url:require('../assets/head_portrait/lmf.png'),createAt:20200102},
      {name:'小鹿男',level:'ssr',type:'控制',baseDamage:398,life:402,url:require('../assets/head_portrait/xln.png'),createAt:20200102},
      {name:'茨木童子',level:'ssr',type:'输出',baseDamage:398,life:402,url:require('../assets/head_portrait/cmtz.png'),createAt:20200102},
      {name:'青行灯',level:'ssr',type:'打火，输出',baseDamage:398,life:402,url:require('../assets/head_portrait/qxd.png'),createAt:20200102},
      {name:'妖刀姬',level:'ssr',type:'输出',baseDamage:398,life:402,url:require('../assets/head_portrait/ydj.png'),createAt:20200102},
      {name:'一目连',level:'ssr',type:'护盾',baseDamage:397,life:403,url:require('../assets/head_portrait/yml.png'),createAt:20200101},
      {name:'龙夜叉姬',level:'ssr',type:'输出',baseDamage:397,life:403,url:require('../assets/head_portrait/lycj.png'),createAt:20200101},
      {name:'云外镜',level:'ssr',type:'拉条,输出',baseDamage:397,life:403,url:require('../assets/head_portrait/ywj.png'),createAt:20200101},
      {name:'鬼童丸',level:'ssr',type:'输出',baseDamage:397,life:403,url:require('../assets/head_portrait/gtw.png'),createAt:20200101},
      {name:'缘结神',level:'ssr',type:'治疗,拉条',baseDamage:397,life:403,url:require('../assets/head_portrait/yjs.png'),createAt:20200101},
      {name:'铃鹿御前',level:'ssr',type:'输出,控制',baseDamage:397,life:403,url:require('../assets/head_portrait/llyq.png'),createAt:20200101},
      {name:'紧那罗',level:'ssr',type:'输出,治疗',baseDamage:397,life:403,url:require('../assets/head_portrait/jnl.png'),createAt:20200101},
      {name:'千姬',level:'ssr',type:'打火,输出',baseDamage:397,life:403,url:require('../assets/head_portrait/qj.png'),createAt:20200101},
      {name:'帝释天',level:'ssr',type:'输出,控制',baseDamage:397,life:403,url:require('../assets/head_portrait/dst.png'),createAt:20200101},
      {name:'阿修罗',level:'ssr',type:'输出',baseDamage:397,life:403,url:require('../assets/head_portrait/axl.png'),createAt:20200101},
      {name:'桃花妖',level:'sr',type:'治疗',baseDamage:297,life:303,url:require('../assets/head_portrait/thy.png'),createAt:20200101},
      {name:'雪女',level:'sr',type:'控制',baseDamage:297,life:303,url:require('../assets/head_portrait/xn.png'),createAt:20200101},
      {name:'鬼使白',level:'sr',type:'输出',baseDamage:297,life:303,url:require('../assets/head_portrait/gsb.png'),createAt:20200101},
      {name:'鬼使黑',level:'sr',type:'输出',baseDamage:297,life:303,url:require('../assets/head_portrait/gsh.png'),createAt:20200101},
      {name:'孟婆',level:'sr',type:'控制',baseDamage:297,life:303,url:require('../assets/head_portrait/mp.png'),createAt:20200101},
      {name:'犬神',level:'sr',type:'输出',baseDamage:297,life:303,url:require('../assets/head_portrait/qs.png'),createAt:20200101},
      {name:'骨女',level:'sr',type:'输出',baseDamage:297,life:303,url:require('../assets/head_portrait/gn.png'),createAt:20200101},
      {name:'鬼女红叶',level:'sr',type:'输出',baseDamage:297,life:303,url:require('../assets/head_portrait/gnhy.png'),createAt:20200101},
      {name:'跳跳哥哥',level:'sr',type:'治疗',baseDamage:297,life:303,url:require('../assets/head_portrait/ttgg.png'),createAt:20200101},
      {name:'傀儡师',level:'sr',type:'输出',baseDamage:297,life:303,url:require('../assets/head_portrait/kls.png'),createAt:20200101},
      {name:'海坊主',level:'sr',type:'输出，治疗',baseDamage:297,life:303,url:require('../assets/head_portrait/hfz.png'),createAt:20200101},
      {name:'判官',level:'sr',type:'输出',baseDamage:297,life:303,url:require('../assets/head_portrait/pg.png'),createAt:20200101},
      {name:'镰鼬',level:'sr',type:'拉条',baseDamage:299,life:301,url:require('../assets/head_portrait/ly.png'),createAt:20200103},
      {name:'化鲸',level:'sr',type:'输出',baseDamage:298,life:302,url:require('../assets/head_portrait/hj.png'),createAt:20200102},
      {name:'铁鼠',level:'r',type:'增伤',baseDamage:199,life:201,url:require('../assets/head_portrait/ts.png'),createAt:20200103},
      {name:'座敷童子',level:'r',type:'打火',baseDamage:198,life:202,url:require('../assets/head_portrait/zftz.png'),createAt:20200102},
      {name:'虫师',level:'r',type:'治疗',baseDamage:197,life:203,url:require('../assets/head_portrait/cs.png'),createAt:20200101},
      {name:'帚神',level:'n',type:'输出',baseDamage:99,life:101,url:require('../assets/head_portrait/zs.png'),createAt:20200103},
      {name:'灯笼鬼',level:'n',type:'打火',baseDamage:98,life:102,url:require('../assets/head_portrait/dlg.png'),createAt:20200102},
      {name:'唐纸伞妖',level:'n',type:'护盾',baseDamage:97,life:103,url:require('../assets/head_portrait/tzsy.png'),createAt:20200101}
    ]
  },
  mutations: {
    add(state,newRole){
      state.allRoles.unshift(newRole)
    }
  },
  actions: {
  },
  modules: {
  }
})
