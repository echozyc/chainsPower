<template>
  <div class="Wrap">
    <shellWrap :content="content">
      <img src="../../../assets/img/rengongzhineng_fangan.png" alt="" slot="solutionImg">
    </shellWrap>
  </div>
</template>
<script>
  import shellWrap from '../../../components/shellWrap'
  export default {
    name: 'DSJRGZN',

    data() {
      return {
        content: {

          text1: '基于区块链的人工智能在用户设备注册、授权、确权、价值交换等方面使用智能合约的方式，提升安全性。各种人工智能模块通过区块链实现链接，人与人工智能，甚至人工智能之间进行信息交换和甚至价值交换。人工智能亦可以在链上学习，推进人工智能的演进。\n' +
          '\n' +
          '<br><br>创建基于区块链技术的海量数据分析平台，利用区块链去中心化的特性，搭建了智能化的大数据平台，追踪、分析、集成与关联数据功能，为用户提供更为明智的商业决策参考等，同时打造智能合约与代币模式利于企业实现价值传递，实现企业成长，增强实力。\n',

          compare: {
            title1: '传统大数据人工智能系统',
            left: {
              p1: '大数据行业中企业众多而弱小',
              p3:'数据孤岛现象严重',
              p4:'大数据技术和产品同业务结合深度不够',
              p5:'大数据体量并不足以撑起应用',
            },
            title2: '区块链+大数据人工智能系统',
            right: {
              p1: '大数据公链的搭建，形成数据共享开放平台',
              p3:'将身份和数据在大数据链中存储，打破数据壁垒',
              p4:'搭建数据信息需求与供应匹配平台',
              p5:'数据链的搭建将扩大数据挖掘范围',
            }
          },

          advantageTitle: '区块链+大数据人工智能系统优势',
          advantage: {
            an1: {
              p1: '大数据公链开放平台：',
              p2: '通过创建大数据链的搭建，形成有机的数据共享机制，打造了一个责权清晰、流动充足、价值整合的生态系统，共建共享大数据链开放平台；\n'
            },
            an2: {
              p1: '打破信息孤岛：',
              p2: '将身份和数据在大数据链中自由、安全的流转，打破数据壁垒，进行高效的数据共享，实现数据价值的有效应用；\n'
            },
            an3: {
              p1: '搭建数据需求与供应匹配平台：',
              p2: '搭建数据信息需求与供应匹配平台，方便数据需求方与持有方进行业务匹配；\n'
            },
            an4: {
              p1: '扩大数据挖掘范围：',
              p2: '数据链的搭建将扩大数据挖掘范围，提供更大的数据挖掘平台；'
            },
          },

          scenesTitle: '区块链+大数据人工智能系统应用场景',
          scenesText: '在信息化和智能化的科技进程中，大数据、人工智能、区块链这些关键技术的突破性发展将极大的推动经济和社会的进步，为我们的生产和生活带来翻天覆地的变化。',
          scenes: {
            lists: {
              an1: {
                img: require('../../../assets/img/rengongzhineng_ico_1.png'),
                p1: '智能仓储<br>人工协同',
              },
              an2: {
                img: require('../../../assets/img/rengongzhineng_ico_2.png'),
                p1: '人工智能支<br>持的业务流',
              },
              an3: {
                img: require('../../../assets/img/youxi_ico_3.png'),
                p1: '批量高效的<br>梳理处理',
              },
              an4: {
                img: require('../../../assets/img/youxi_ico_4.png'),
                p1: '数据挖掘<br>及处理',
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
