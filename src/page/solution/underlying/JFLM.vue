<template>
  <div class="Wrap">
    <shellWrap :content="content">
      <img src="../../../assets/img/lianmeng_fangan.png" alt="" slot="solutionImg">
    </shellWrap>
  </div>
</template>
<script>
  import shellWrap from '../../../components/shellWrap'
  export default {
    name: 'JFLM',

    data() {
      return {
        content: {

          text1: '区块链技术打破不同种类积分系统之间的壁垒，真正实现不同积分之间的互通互兑，资产流通。' +
          '连通更多的积分权益和场景权益，全面盘活“沉睡”积分，打造数字积分商业生态联盟，对行业、对企业、对消费者实现多赢。',

          compare: {
            title1: '传统积分系统',
            left: {
              p1: '中心化业务模式，缺失公信力',
              p3:'积分清算复杂，需消耗大量成本',
              p4:'积分主要在商家间流通，降低流通率',
              p5:'积分发行不够透明存在灰色地带',
            },
            title2: '区块链积分联盟系统',
            right: {
              p1: '去中心化业务模式，高公信力',
              p3:'共享账本，提升效率',
              p4:'链上发行，增强流通性',
              p5:'积分发行公开透明，可溯源',
            }
          },

          advantageTitle: '区块链积分联盟系统优势',
          advantage: {
            an1: {
              p1: '资产安全：',
              p2: '可以是去中心化的运作模式，基于区块链技术为用户提供多方记录，不可篡改，永不丢失的数据，流通全程记录并可追溯，杜绝欺诈盗刷，提高公信力；\n'
            },
            an2: {
              p1: '效率提升：',
              p2: '业务参与方共享区块链账本，降低对方系统间耦合性，提升业务效率，共同决策记账，方便对账结算；\n'
            },
            an3: {
              p1: '流通便利性：',
              p2: '积分权益上链发行应用，自由流通合并，增加丰富的应用场景，提高普通用户参与积分流转的积极性；\n'
            },
            an4: {
              p1: '公开透明：',
              p2: '积分权益上链发行，都是公开透明、可溯源的，智能合约的加入更是普通用户的强心剂，再也不用担心积分的实际发放问题；'
            },
          },

          scenesTitle: '区块链积分联盟系统应用场景',
          scenesText: '区块链技术的引入，能为积分通兑业务场景做底层的技术支撑，从根本上改善跨平台积分应用场景。',
          scenes: {
            lists: {
              an1: {
                img: require('../../../assets/img/lianmeng_ico_1.png'),
                p1: '商城消<br>费积分',
              },
              an2: {
                img: require('../../../assets/img/lianmeng_ico_2.png'),
                p1: '金融理<br>财积分',
              },
              an3: {
                img: require('../../../assets/img/lianmeng_ico_3.png'),
                p1: '连锁实体<br>店积分',
              },
              an4: {
                img: require('../../../assets/img/lianmeng_ico_4.png'),
                p1: '游戏积分',
              }
            }
          }







        }
      }
    },

    components: {
      shellWrap
    },


  }
</script>
<style scoped>

</style>
