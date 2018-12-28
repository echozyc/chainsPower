<template>
  <div class="Wrap">
    <shellWrap :content="content">
      <img src="../../../assets/img/hetongcunzhng_fangan.png" alt="" slot="solutionImg">
    </shellWrap>
  </div>
</template>
<script>
  import shellWrap from '../../../components/shellWrap'
  export default {
    name: 'HTCZ',

    data() {
      return {
        content: {

          text1: '区块链在电子合同领域主要用于数据存证。区块链节点上产生的每一笔电子合同交易都会将包含“签署时间、签署主体、文件哈希值等”构成的数字指纹信息广播到区块链所有成员节点上，' +
          '由所有权威节点共同进行存证以及担保。信息一经存储，任何一方无法篡改，且数据在所有节点复制，不会丢失，从而满足电子证据司法存证的需求。在涉及电子合同纠纷时，数据信息可以从区块链取证，' +
          '以各运维的节点的数据为依据出具相应的审计报告、司法鉴定意见书和公证函，提高电子数据取证效率。',

          compare: {
            title1: '传统合同存证系统',
            left: {
              p1: '中心化数据库不可避免篡改',
              p3:'中心化存储节点单一',
              p4:'传输流转过程容易被篡改',
              p5:'过程时间长，成本高',
            },
            title2: '区块链合同存证系统',
            right: {
              p1: '智能防篡改',
              p3:'安全去中心化',
              p4:'高新的密码学技术加密防泄露',
              p5:'足不出户，线上操作',
            }
          },

          advantageTitle: '区块链合同存证系统优势',
          advantage: {
            an1: {
              p1: '智能防篡改：',
              p2: '存证一旦上链不可篡改，每份数据电文对应唯一的哈希指纹，通过区块链合同存证系统的智能合约存入区块链，一经篡改会被立即发现；\n'
            },
            an2: {
              p1: '安全去中心化：',
              p2: '区块链合同存证依托区块链技术，存储和存证服务高度去中心化，没有中心故障点，保证存证服务的安全与稳定；\n'
            },
            an3: {
              p1: '加密防泄露：',
              p2: '应用非对称加密算法，实现两个秘钥进行加密解密，可授权信息是否被公开；\n'
            },
            an4: {
              p1: '节省成本：',
              p2: '便捷的线上签约，签约双方无需面对面，彻底的解决传统合同存证的传达过程、调阅过程中的不便利；\n'
            },
          },

          scenesTitle: '区块链合同存证系统应用场景',
          scenesText: '区块链应用到鉴证证明后，无论是登记还是查询都非常方便，无需再奔走于各个部门之间。区块链的去中心化存储，保证没有一家机构可以任意篡改数据。区块链在鉴权证明领域的应用有版权保护、法务存证。',
          scenes: {
            lists: {
              an1: {
                img: require('../../../assets/img/cungzheng_ico_1.png'),
                p1: '著作权<br>保护',
              },
              an2: {
                img: require('../../../assets/img/cungzheng_ico_2.png'),
                p1: '仲裁存证',
              },
              an3: {
                img: require('../../../assets/img/cungzheng_ico_3.png'),
                p1: '电子发票',
              },
              an4: {
                img: require('../../../assets/img/cungzheng_ico_4.png'),
                p1: '互联网<br>金融',
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
