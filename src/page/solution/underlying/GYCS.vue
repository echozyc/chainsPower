<template>
  <div class="Wrap">
    <shellWrap :content="content">
      <img src="../../../assets/img/cishan_fangan.png" alt="" slot="solutionImg">
    </shellWrap>
  </div>
</template>
<script>
  import shellWrap from '../../../components/shellWrap'
  export default {
    name: 'GYCS',

    data() {
      return {
        content: {

          text1: '区块链上存储的数据，高度可靠且不可篡改，天然适合用在社会公益场景。公益流程中的相关信息，如捐赠项目、募集明细、资金流向、受助人反馈等，均可以存放于区块链上，' +
          '在满足项目参与者隐私保护及其他相关法律法规要求的前提下，有条件地进行公开公示，方便公众和社会监督，助力社会公益的健康发展。',

          compare: {
            title1: '传统公益慈善系统',
            left: {
              p1: '受助人提交的信息审核不够严格',
              p3:'钱款的募集和使用过程难以透明公开',
              p4:'多层级服务操作，成本高',
            },
            title2: '区块链公益慈善系统',
            right: {
              p1: '受助人信息真实有效',
              p3:'数据公开透明增强信任',
              p4:'去中心化运作， 降低交易成本',
            }
          },

          advantageTitle: '区块链公益慈善系统优势',
          advantage: {
            an1: {
              p1: '受助人信息真实有效：',
              p2: '受助人的信息将在调研机构核查后，利用身份认证组件记入区块链，保证受助人的个人信息和捐赠申请真实有效；\n'
            },
            an2: {
              p1: '信息透明增强信任：',
              p2: '将捐赠人和受捐项目直接关联，每笔款项流通都被储存在链上，各方均可进行查看监督，对每一笔捐赠都了如指掌，保证公益项目的公开性和透明性，' +
              '这样我们就可以知道所捐助的每一笔款项的对应接收人是谁、是如何使用的、一共发放了几次、救助效果如何等等，可以点对点的查询和追溯相关的责任人；\n'
            },
            an3: {
              p1: '降低交易成本：',
              p2: '不需要第三方机构参与，使用区块链技术的民间公益组织将大大降低经营成本。管理成本也将降低。此外，可以通过直接在区块链中记录交易数据来实现管理；\n'
            },
          },

          scenesTitle: '区块链公益慈善系统应用场景',
          scenesText: '区块链技术可以没有慈善公益，但，慈善公益，却不能没有区块链这种“传递价值”的技术来为自己背书。当区块链技术真正应用在慈善项目上，相信会为这个行业带来新的活力和生机。',
          scenes: {
            lists: {
              an1: {
                img: require('../../../assets/img/cishan_ico_1.png'),
                p1: '链上公益',
              },
              an2: {
                img: require('../../../assets/img/cishan_ico_2.png'),
                p1: '数字公益',
              },
              an3: {
                img: require('../../../assets/img/cishan_ico_3.png'),
                p1: '智慧公益',
              },
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
