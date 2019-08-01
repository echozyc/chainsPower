<template>
  <div class="Wrap">
    <shellWrap :content="content">
      <img src="../../../assets/img/wulianwang_fangan.png" alt="" slot="solutionImg">
    </shellWrap>
  </div>
</template>
<script>
  import shellWrap from '../../../components/shellWrap'
  export default {
    name: 'WLW',

    data() {
      return {
        content: {

          text1: '区块链去中心化的架构直接颠覆了物联网旧有的中心架构，不但大大减轻中心计算的压力，而且释放了物联网组织结构的更多可能，为创新提供了更多空间。其次，' +
          '记录的准确性和不可篡改性也让隐私安全变得有据可循，而且在安全方面更易于防御和处理，在一些架构中，分布式区块链物联网节点不会被传统的DDOS所攻击。最后，' +
          '由于公信力的存在，主体参与物联网的协同变得更为容易。',

          compare: {
            title1: '传统物联网系统',
            left: {
              p1: '缺乏设备与设备之间相互信任的机制',
              p3:'记录和存储物联网的信息量大运营成本高',
              p4:'多层级服务繁琐操作',
              p5:'中心化数据库被攻击后损失难以估量',
            },
            title2: '区块链+物联网系统',
            right: {
              p1: '去中心化、去信任化，建立强信任',
              p3:'降低物联网的运营成本',
              p4:'高效且智能的网络运行机制',
              p5:'有效提高了数据库安全防护',
            }
          },

          advantageTitle: '区块链+物联网系统优势',
          advantage: {
            an1: {
              p1: '建立信任：',
              p2: '区块链分布式的网络结构，使得设备之间保持共识，无需与中心进行验证，这样即使一个或多个节点被攻破，整体网络体系的数据依然是可靠、安全的；\n'
            },
            an2: {
              p1: '降低成本：',
              p2: '区块链技术可以充分利用分布在不同位置的数以亿计闲置设备的计算力、存储容量和带宽,用于交易处理,大幅度降低计算和储存的成本；\n'
            },
            an3: {
              p1: '加速交易：',
              p2: '区块链技术与车联网的结合可以消除节点之间的审核环节，直接为联系双方搭建沟通的桥梁，为企业降低运营成本，提高运营效率。将设定时间从几天缩短到接近瞬间；\n'
            },
            an4: {
              p1: '数据安全：',
              p2: '分布式的网络结构提供一种机制，使得设备之间保持共识，无需与中心进行验证，这样即使一个或多个节点被攻破，整体网络体系的数据依然是可靠、安全的。\n'
            },
          },

          scenesTitle: '区块链+物联网系统应用场景',
          scenesText: '通过一种算法手段将对原始信息进行转换，信息的接收者能够通过秘钥对密文进行解密从而得到原文的过程。',
          scenes: {
            lists: {
              an1: {
                img: require('../../../assets/img/youxi_ico_1.png'),
                p1: '工业制造',
              },
              an2: {
                img: require('../../../assets/img/youxi_ico_2.png'),
                p1: '联网汽车',
              },
              an3: {
                img: require('../../../assets/img/youxi_ico_3.png'),
                p1: '公共技术<br>设施',
              },
              an4: {
                img: require('../../../assets/img/youxi_ico_4.png'),
                p1: '零售',
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
