<template>
  <div class="Wrap">
    <shellWrap :content="content">
      <img src="../../../assets/img/anquan_fangan.png" alt="" slot="solutionImg">
    </shellWrap>
  </div>
</template>
<script>
  import shellWrap from '../../../components/shellWrap'
  export default {
    name: 'XXAQ',

    data() {
      return {
        content: {

          text1: '区块链技术利用区块形成链进行数据存储，用密码学机制保障数据的存储和传输安全，利用加密算法、共识算法保证数据不被篡改和伪造，' +
          '这些突出的安全特性，可以有效防御中间人攻击(身份窃取)、数据篡改和DDoS三大安全威胁，使数据和隐私安全获得颠覆性提升。',

          compare: {
            title1: '传统信息安全加密系统',
            left: {
              p1: '对称式加密方式',
              p3:'传统数据修改其他人无法感知',
              p4:'一场DDoS攻击可以毁了一个大型企业',
            },
            title2: '区块链信息安全加密系统',
            right: {
              p1: '对称加密与非对称式加密技术相结合',
              p3:'数据篡改“一发动全身”',
              p4:'分布式拒绝服务（DDoS）',
            }
          },

          advantageTitle: '区块链信息安全加密系统优势',
          advantage: {
            an1: {
              p1: '用户身份认证保护：',
              p2: '非对称式公私钥加密技术采用两套密钥系统，比对称式加密更安全，区块链则可以构建一个全新的身份管理系统，商务密邮采用的身份标识算法，让篡改难以隐匿，从而有效防范身份伪造；\n'
            },
            an2: {
              p1: '数据完整性保护：',
              p2: '区块链利用哈希算法存储数据，数据区块之间互为连结，某一处数据篡改，都会引起区块序列值的变更，再庞大的网络，也能轻易找到篡改来源；\n'
            },
            an3: {
              p1: '有效阻止DDoS攻击：',
              p2: '区块链的节点分散，每个节点都具备完整的区块链信息，而且可以对其他节点的数据有效性进行验证，因此针对区块链的DDoS攻击将会更难展开。即便攻击者攻破某个节点，剩余节点也可以正常维持整个区块链系统；\n'
            },
          },

          scenesTitle: '区块链信息安全加密系统应用场景',
          scenesText: '基于区块链技术，通过将虚拟产品拟物化、拟人化，结合区块链的不可篡改性和永久所有权的特点，提高玩家的互动性、趣味性，提高游戏产品的价值。',
          scenes: {
            lists: {
              an1: {
                img: require('../../../assets/img/anquan_ico_1.png'),
                p1: '私密信息系统',
              },
              an2: {
                img: require('../../../assets/img/anquan_ico_2.png'),
                p1: '加密存证<br>系统',
              },
              an3: {
                img: require('../../../assets/img/anquan_ico_3.png'),
                p1: '数字签名',
              },
              an4: {
                img: require('../../../assets/img/anquan_ico_4.png'),
                p1: '登录认证',
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
