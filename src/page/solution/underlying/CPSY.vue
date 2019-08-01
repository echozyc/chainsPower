<template>
  <div class="Wrap">
    <shellWrap :content="content">
      <img src="../../../assets/img/suyuan_fangan.png" alt="" slot="solutionImg">
    </shellWrap>
  </div>
</template>
<script>
  import shellWrap from '../../../components/shellWrap'
  export default {
    name: 'CPSY',

    data() {
      return {
        content: {

          text1: '区块链溯源系统，结合区块链技术特点，将溯源信息上链，完整、安全、永久的保存在去中心化的数据库中；使用一物一码帮助企业快速构建良好的供应链生态体系，' +
          '将产品—溯源码—区块链信息绑定在一起，从源头解决消费信任问题，用户可以在线验证查询溯源，下单获取商品溯源代币，实现区块链防伪，线下验货、线上溯源的设想，' +
          '同时溯源信息不可篡改，交易信息加密保存，保护用户隐私。',

          compare: {
            title1: '传统溯源系统',
            left: {
              p1: '随着背书主体的增加，协作难度大',
              p2:'中心化数据库，信息被更改可能性高',
              p3:'信息孤岛问题，各系统之间信息核对繁琐复杂',
              p4:'溯源条码具有可复制性',
              p5:'用户个人信息泄漏严重'
            },
            title2: '区块链溯源系统',
            right: {
              p1: '去中心化系统，降低了信任背书的难度',
              p2:'区块链技术的不可篡改，让交易可追溯',
              p3:'产供销各方共同维护数据源，且公开透明',
              p4:'基于区块链、物联网、智能防伪等多维度技术',
              p5:'区块链的匿名性和多层层验证，信息安全'
            }
          },

          advantageTitle: '区块链溯源系统优势',
          advantage: {
            an1: {
              p1: '去中心化：',
              p2: '区块链去中心化，降低了信任背书的难度，能组织到更多的供应链参与方，补充和共同维护更多的商品数据，提高用户的信任度；\n'
            },
            an2: {
              p1: '信息不可篡改：',
              p2: '溯源信息作为产品信息的一部分，不可篡改，永久保存到区块链上；\n'
            },
            an3: {
              p1: '打破信息孤岛：',
              p2: '产、供、销各方共同维护数据源，且公开透明，确保参与各方及时发现运行过程中的问题，及对应的解决办法，有助于提升供应链管理效率；\n'
            },
            an4: {
              p1: '多维度追溯：',
              p2: '链接产、供、销三端，线下扫码写入，线上扫码查询、区块链浏览器查询，方便操作，可以快捷验证，多维度的技术，溯源信息更可信；\n'
            },
            an5: {
              p1: '保护用户隐私：',
              p2: '区块链在匿名性的基础上，还通过多种加密、验证方式等多种技术手段，有效地保护用户的个人隐私，安全性更高，提高其信任感；\n',
            }
          },

          scenesTitle: '区块链溯源系统应用场景',
          scenesText: '区块链溯源结合了多种技术，包括区块链、防伪等多种技术。区块链的优势在于它的分布式记账、时间戳和共识机制。',
          scenes: {
            lists: {
              an1: {
                img: require('../../../assets/img/suyuan_ico_1.png'),
                p1: '生产溯源',
              },
              an2: {
                img: require('../../../assets/img/suyuan_ico_2.png'),
                p1: '流通溯源',
              },
              an3: {
                img: require('../../../assets/img/suyuan_ico_3.png'),
                p1: '农产品/<br>食品溯源',
              },
              an4: {
                img: require('../../../assets/img/suyuan_ico_4.png'),
                p1: '权证确权',
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
