<template>
  <div class="cart">
    <h1>购物车</h1>
    <ul class="basicInfo">
      <li>商品信息</li>
      <li>商品金额</li>
      <li>商品数量</li>
      <li>总金额</li>
      <li>编辑</li>
    </ul>
    <ul class="goodsInfo">
      <li v-for="(item,index) in productsData">
        <div class="left">
          <div class="choose">
            <div class="circle" :class="{'chooseActive':item.checked}" @click="choose(item)"></div>
          </div>
          <div class="detail">
            <img :src="item.productImg"/>
            <div class="desc">
              <div class="title" v-text="item.productName"></div>
              <div class="gift">
                <div class="name">赠送:</div>
                <ul>
                  <li v-for="i in item.parts" v-text="i.partsName">打火机</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="price">{{item.productPrice   | moneyFormat }}</div>
          <div class="qty">
            <span class="add" @click.prevent="changeMoney(item,-1)">-</span>
            <input class="num" type="text" value="1" v-model="item.productQuantity"/>
            <span class="reduce" @click.prevent="changeMoney(item,1)">+</span>
          </div>
          <div class="totalPrice">{{item.productPrice*item.productQuantity | moneyFormat}}</div>
          <div class="delete" @click="deleteList(index)">删除</div>
        </div>
      </li>
    </ul>
    <ul class="check">
      <li class="allCancel">
        <div class="choose">
          <div class="circle" :class="{'chooseActive':isChooseAll}"></div>
        </div>
        <div class="chooseTxt">
          <span class="chooseAll" @click="chooseAll">全选</span>
          <span class="cancelAll" @click="cancelAll">取消全选</span>
        </div>
      </li>
      <li class="totalAmount">
        <span>总金额：</span>
        <span class="amount">{{totalAmount | moneyFormat}}</span>
      </li>
      <li class="pay">
        <router-link :to="{name:'orderAddress'}">结账</router-link>
      </li>
    </ul>
    <div class="model" v-show="modelShow">
      <div class="mainBox">
        <span class="close" @click="modelShow=false">&times;</span>
        <h3>您确定删除此订单信息吗？</h3>
        <div class="btns">
          <div class="confirm" @click="confirm">确定</div>
          <div class="cancel" @click="modelShow=false;">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      productsData:[{
          "productId":"60000001",
          "productName":"一品梅香烟",
          "productPrice":19,
          "productQuantity":1,
          "productImg":require("./../assets/01.png"),
          "parts":[
              {
                  "partsId":"10001",
                  "partsName":"打火机"
              },{
                  "partsId":"10002",
                  "partsName":"火柴"
              }]
      },{
          "productId":"60000002",
          "productName":"五粮液美酒",
          "productPrice":80,
          "productQuantity":2,
          "productImg":require("./../assets/02.png"),
          "parts":[
              {
                  "partsId":"20001",
                  "partsName":"酒杯"
              }]
      }],
        totalAmount:0,
      isChooseAll:false,
      modelShow:false,
      itemIndex:-1
    }
  },
  filters:{
     moneyFormat:function(input){
        return "￥"+input.toFixed(2);
     }
  },
  methods:{
      choose(item){
          if(typeof item.checked=='undefined'){   //不存在checked字段时添加该字段并设为true
              this.$set(item,'checked',true);
          }else{     //存在该字段时取反
              item.checked=!item.checked;
              this.isChooseAll=false;
          }
          this.calculateTotalMoney();
      },
      chooseAll(){   //全选
          this.isChooseAll=true;
          this.productsData.map((item,i)=>{
              if(typeof item.checked =='undefined'){
                  this.$set(item,"checked",true);

              }else{
                  item.checked=true;
              }
          })
          this.calculateTotalMoney();
      },
      cancelAll(){   //取消全选
          this.isChooseAll=false;
          this.productsData.map((item,i)=>{
              if(typeof item.checked=='undefined'){
                  this.$set(item,'checked',false);
              }else{
                  item.checked=false;
              }
          });
          this.calculateTotalMoney();
      },
      changeMoney(item,type){   //增加、减少数量
          if(type==-1){
              if(item.productQuantity<=1){
                  item.productQuantity=1;
              }else{
                  item.productQuantity--;
              }
          }else{
              item.productQuantity++;
          }
          this.calculateTotalMoney();
      },
      deleteList(index){
          this.modelShow=true;
          this.itemIndex=index;
      },
      confirm(){
          this.productsData.map((list,i)=>{
              if(i==this.itemIndex){
                  this.productsData.splice(i,1);
              }
          })
          this.calculateTotalMoney();
          this.modelShow=false;
      },
      calculateTotalMoney(){
          this.totalAmount=0;
          this.productsData.map((list,i)=>{
              if(list.checked){
                  this.totalAmount+=list.productPrice*list.productQuantity;
              }
          });
      }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .cart{
    position:relative;
    width:100%;
    height:100%;
    h1{
      text-align:center;
      margin-top:0;
      padding-top:20px;
    }
    ul,li{
      margin:0;
      padding:0;
    }
    a{
      text-decoration:none;
    }
    li{
      list-style:none;
    }
    .basicInfo{
      overflow:hidden;
      li{
        float:left;
        height:50px;
        line-height:50px;
        width:15%;
        text-align:center;
        background:#6c6c6c;
        color:#fff;
        &:nth-child(1){
          width:40%;
        }
      }
    }
    .goodsInfo{
      li{
        border-bottom:1px solid #c0c0c0;
        overflow:hidden;
        .left{
          width:40%;
          height:80px;
          float:left;
          overflow:hidden;
          .choose{
            position:relative;
            width:50px;
            height:100%;
            float:left;
            .circle{
              position:absolute;
              width:20px;
              height:20px;
              top:calc(~"50% - 10px");
              left:calc(~"50% - 15px");
              border-radius:50%;
              border:1px solid #ccc;
              &.chooseActive{
                background:orange;
              }
            }
          }
          .detail{
            position:relative;
            width:calc(~"100% - 50px");
            height:100%;
            float:left;
            img{
              position:absolute;
              width:60px;
              height:60px;
              top:calc(~"100% -40px");
              padding:10px;
            }
            .desc{
              width:calc(~"100% - 70px");
              height:100%;
              padding:5px 10px;
              margin-left:80px;
              box-sizing:border-box;
              .title{
                height:30px;
                line-height:30px;
                font-weight:bold;
              }
              .gift{
                width:100%;
                height:calc(~"100% - 30px");
                overflow:hidden;
                font-size:14px;
                .name{
                  height:100%;
                  float:left;
                }
                ul{
                  margin-left:3px;
                  height:100%;
                  float:left;
                  li{
                    height:20px;
                    line-height:20px;
                    border:none;
                    color:gray;
                  }
                }
              }
            }
          }
        }
        .right{
          width:60%;
          height:80px;
          line-height:80px;
          float:left;
          font-size:0;
          user-select:none;
          .price,.qty,.totalPrice,.delete{
            display:inline-block;
            width:25%;
            height:100%;
            font-size:16px;
            text-align:center;
          }
          .qty{
            .add,.num,.reduce{
              display:inline-block;
              height:100%;
              width:30px;
              &.num{
                height:20px;
              }
            }
          }
        };
      }
    }
    .check{
      height:60px;
      overflow:hidden;
      .allCancel,.totalAmount,.pay{
        height:100%;
        float:left;
        &.allCancel{
          width:60%;
          .choose{
            position:relative;
            width:50px;
            height:100%;
            float:left;
            .circle{
              position:absolute;
              width:20px;
              height:20px;
              top:calc(~"50% - 10px");
              left:calc(~"50% - 15px");
              border-radius:50%;
              border:1px solid #ccc;
              &.chooseActive{
                background:orange;
              }
            }
          }
          .chooseTxt{
            display:flex;
            align-items:center;
            width:calc(~"100% - 50px");
            height:100%;
            float:left;
            .cancelAll{
              margin-left:15px;
            }
            .chooseAll,.cancelAll{
              cursor:pointer;
            }
          }
        }
        &.totalAmount,&.pay{
          width:20%;
          display:flex;
          align-items:center;
          justify-content: center;
          &.pay{
            background:red;
            color:#fff;
            a{
              display:flex;
              width:100%;
              height:100%;
              color:#fff;
              font-size:20px;
              align-items:center;
              justify-content: center;
            }
          }
          .amount{
            color:red;
          }
        }
      }
    }
    .delete,.add,.reduce,.pay,.circle{
      cursor:pointer;
    }
    .model{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.5);
      .mainBox{
        position:relative;
        width:300px;
        padding:20px 30px 30px;
        top:50%;
        left:50%;
        transform:translateX(-50%) translateY(-50%);
        background:#fff;
        animation:modelMove 1s ease;
        -webkit-animation:modelMove 1s ease;
        .close{
          position:absolute;
          top:10px;
          right:10px;
          font-size:20px;
          cursor:pointer;
        }
        .btns{
          width:100%;
          height:50px;
          overflow:hidden;
          margin-top:40px;
          .confirm,.cancel{
            float:left;
            height:100%;
            line-height:50px;
            text-align:center;
          }
          .confirm{
            width:calc(~"40% - 2px");
            height:calc(~"100% - 2px");
            margin-right:20%;
            border:1px solid red;
          }
          .cancel{
            width:40%;
            background:red;
            color:#fff;
          }
        }
      }
      @keyframes modelMove{
        from{
          top:60%;
        }
        to{
          top:50%;
        }
      }
    }
  }
</style>
