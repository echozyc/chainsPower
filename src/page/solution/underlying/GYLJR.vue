<template>
  <div class="Wrap">
    <shellWrap :content="content">
      <img src="../../../assets/img/jingrong_fangan.png" alt="" slot="solutionImg">
    </shellWrap>
  </div>
</template>
<script>
  import shellWrap from '../../../components/shellWrap'
  export default {
    name: 'GYLJR',

    data() {
      return {
        content: {

          text1: '传统供应链金融是将供应链上的核心企业以及与其相关的上下游企业看作一个整体，以核心企业为依托，以真实贸易为前提，运用自偿性贸易融资的方式，对供应链上下游企业提供的综合性金融产品和服务。\n' +
          '使用区块链技术构建“供应链金融”，基于不可篡改、可溯源的特性，用于真实贸易双方的交易背景，为金融机构提供贷前预审及贷后管理辅助功能，实现供应链金融体系的信用穿透，极大提高了资金的流转，为金融机构和实体经济全产业链上下游提供一站式融资管理服务。\n',

          compare: {
            title1: '传统供应链金融',
            left: {
              p1: '贸易的真实性不确定',
              p2:'中小企业融资难，成本高',
              p3:'传统票据等转让难度大',
              p4:'核心企业难自证，风控成本高',
            },
            title2: '区块链供应链金融',
            right: {
              p1: '交易合同等信息上链，防欺诈',
              p2:'链上发行通证，加速资金回流',
              p3:'通证流转得到多方共识，降低操作难度',
              p4:'去信任、可溯源、共识和去中心化的特性',
            }
          },

          advantageTitle: '区块链供应链金融优势',
          advantage: {
            an1: {
              p1: '建立P2P的强信任关系：',
              p2: '作为一种分布式账本技术，区块链采用分布式部署存储，数据不是由单一中心化机构统一维护，也不可能按照自己的利益来操控数据，因此具备\t\t较强的信任关系；\n'
            },
            an2: {
              p1: '建立透明供应链：',
              p2: '区块链保存完整数据，使得不同参与者使用一致的数据来源，而不是分散的数据，保证了供应链信息的可追溯性，实现供应链透明化；\n'
            },
            an3: {
              p1: '金融级别加密安全性：',
              p2: '由于对交易进行了加密，并具有不可改变的性质，所以分类账几乎不可能受到损害；\n'
            },
            an4: {
              p1: '个性化服务：',
              p2: '区块链本身的可编程性可以从本质上满足各类消费者的个性化需求；\n'
            },
            an5: {
              p1: '可审计性：',
              p2: '记录每次数据更改的身份信息，可以进行可靠的审计跟踪。',
            }
          },

          scenesTitle: '区块链供应链金融应用场景',
          scenesText: 'Santander InnoVentures Fund 预测，到2022年，使用区块链技术的银行可以每年节省高达200亿美元。而世界经济论坛也预测，到2017年全球GDP的10%可能会存储在区块链平台之上。',
          scenes: {
            lists: {
              an1: {
                img: require('../../../assets/img/jinrong_ico_1.png'),
                p1: '应收账款<br>融资',
              },
              an2: {
                img: require('../../../assets/img/jinrong_ico_2.png'),
                p1: '应付账款<br>融资',
              },
              an3: {
                img: require('../../../assets/img/jinrong_ico_3.png'),
                p1: '预付账款<br>融资',
              },
              an4: {
                img: require('../../../assets/img/jinrong_ico_4.png'),
                p1: '存货质押<br>融资',
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
