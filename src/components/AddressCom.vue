<template>
    <div class="addressBox">
        <!----------------------------进度条------------------------------>
        <div class="progressBar">
            <!--进度条-->
            <div class="line">
                <span></span>
            </div>
            <!--四个圆-->
            <div class="ball">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </div>
            <!--文字描述-->
            <div class="desc">
                <span class="text">地址确认</span>
                <span class="text">查看订单</span>
                <span class="text">支付</span>
                <span class="text">订单确认</span>
            </div>
        </div>
        <!----------------------------配送地址------------------------------>
        <div class="title">
            <span class="name">配送地址</span>
        </div>
        <ul class="address">
            <li class="addressList" v-for="(item,index) in filterAddressData" @click="curIndex=index">
                <div class="contentBox" :class="{'activeClass':index==curIndex}">
                    <h4 class="name" v-text="item.userName"></h4>
                    <p class="address" v-text="item.streetName"></p>
                    <p class="mobile" v-text="item.tel"></p>
                    <p class="remark" v-text="item.isDefault?'默认地址':''"></p>
                    <p class="setRemark" v-if="index==curIndex&&!item.isDefault" @click="setDefault(index)">设为默认</p>
                    <svg class="icon editBtn" aria-hidden="true" v-show="index==curIndex">
                        <use xlink:href="#icon-icons-"></use>
                    </svg>
                    <svg class="icon deleteBtn" aria-hidden="true" v-show="index==curIndex">
                        <use xlink:href="#icon-shanchu"></use>
                    </svg>
                </div>
            </li>
            <li class="addressList">
                <div class="contentBox">
                    <div class="cross">
                        <div class="vLine"></div>
                        <div class="hLine"></div>
                    </div>
                    <div class="desc">添加新地址</div>
                </div>
            </li>
        </ul>
        <div class="more" @click="more">
            <span class="text">更多</span>
            <span class="moreIcon">&gt;</span>
        </div>
        <!----------------------------配送方式------------------------------>
        <div class="title">
            <span class="name">配送方式</span>
        </div>
        <ul class="type">
            <li class="typeList" :class="{'activeClass':shippingMethod=='free'}" @click="shippingMethod='free'">
                <div class="name">标准配送</div>
                <div class="fee">Free</div>
            </li>
            <li class="typeList" :class="{'activeClass':shippingMethod=='notFree'}" @click="shippingMethod='notFree'">
                <div class="name">高级配送</div>
                <div class="fee">180</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "addressBox",
        data(){
            return{
                addressData:[
                    {
                        "addressId":"100001",
                        "userName":"小花",
                        "streetName":"上海市浦东新区",
                        "postCode":"2100001",
                        "tel":"13910201256",
                        "isDefault":true
                    },
                    {
                        "addressId":"100002",
                        "userName":"小军",
                        "streetName":"上海市静安区淮海路",
                        "postCode":"220001",
                        "tel":"13910201687",
                        "isDefault":false
                    },
                    {
                        "addressId":"100003",
                        "userName":"小江",
                        "streetName":"北京市朝阳区区",
                        "postCode":"230001",
                        "tel":"15210201298",
                        "isDefault":false
                    },
                    {
                        "addressId":"100004",
                        "userName":"小王",
                        "streetName":"江苏省苏州市吴江区",
                        "postCode":"2400001",
                        "tel":"1389523674",
                        "isDefault":false
                    },
                    {
                        "addressId":"100005",
                        "userName":"小夏",
                        "streetName":"浙江省杭州市",
                        "postCode":"250001",
                        "tel":"17010201256",
                        "isDefault":false
                    }
                ],
                limitedNum:2,
                curIndex:0,
                shippingMethod:'free',
                children:{
                    name:"小花",
                    age:12,
                    sex:'女'
                }
            }
        },
        computed:{
            filterAddressData:function(){
                return this.addressData.slice(0,this.limitedNum);
            }
        },
        methods:{
            more(){
                this.limitedNum=this.addressData.length;
            },
            setDefault(index){
                this.addressData.map((item,i)=>{
                    if(i==index){
                        this.$set(item,'isDefault',true);
                    }else{
                        this.$set(item,'isDefault',false);
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    ul,li{
        margin:0;
        padding:0;
        list-style:none;
        a{
            text-decoration:none;
        }
    }
    .addressBox{
        width:100%;
        height:100%;
        .progressBar{
            position:relative;
            width:100%;
            height:50px;
            margin:50px 0 0 0;
            .line{
                width:100%;
                height:3px;
                background:#ccc;
                span{
                    position:absolute;
                    display:inline-block;
                    width:25%;
                    height:3px;
                    background:orange;
                }
            }
            .ball{
                position:absolute;
                width:100%;
                height:16px;
                top:-7px;
                .circle{
                    position:absolute;
                    display:inline-block;
                    width:16px;
                    height:16px;
                    border-radius:50%;
                    background:#ccc;
                    &:nth-child(1){
                        left:12.5%;
                        background:orange;
                    }
                    &:nth-child(2){
                        left:37.5%;
                    }
                    &:nth-child(3){
                        left:62.5%;
                    }
                    &:nth-child(4){
                        left:87.5%;
                    }
                }
            }
            .desc{
                position:absolute;
                width:100%;
                height:20px;
                top:-35px;
                .text{
                    position:absolute;
                    display:inline-block;
                    width:80px;
                    height:20px;
                    line-height:20px;
                    text-align:center;
                    &:nth-child(1){
                        left:calc(~"12.5% - 32px");
                    }
                    &:nth-child(2){
                        left:calc(~"37.5% - 32px");
                    }
                    &:nth-child(3){
                        left:calc(~"62.5% - 32px");
                    }
                    &:nth-child(4){
                        left:calc(~"87.5% - 32px");
                    }
                }
            }
        }
        .title{
            position:relative;
            width:100%;
            height:30px;
            border-top:1px solid #ccc;
            .name{
                position:absolute;
                width:80px;
                height:30px;
                left:calc(~"50% - 40px");
                top:-17px;
                line-height:30px;
                text-align:center;
                background:#fff;
            }
        }
        .address{
            width:100%;
            padding:10px 0 10px 20px;
            overflow:hidden;
            box-sizing:border-box;
            .addressList{
                float:left;
                width:25%;
                height:150px;
                padding-right:20px;
                margin:10px 0;
                box-sizing:border-box;
                &:last-child{
                    .contentBox{
                        &:hover{
                            border:1px solid #ccc;
                        }
                    }
                }
                .contentBox{
                    position:relative;
                    width:100%;
                    height:100%;
                    padding:10px 20px;
                    border:1px solid #ccc;
                    box-sizing:border-box;
                    cursor:pointer;
                    &:hover{
                        border:2px dashed orange;
                    }
                    &.activeClass{
                        border:2px solid orange;
                        &:hover{
                            border:2px solid orange;
                        }
                    }
                    .cross{
                        position:absolute;
                        width:60px;
                        height:60px;
                        top:25px;
                        left:calc(~"50% - 30px");
                        background:#fff;
                        cursor:pointer;
                        .vLine{
                            position:absolute;
                            width:100%;
                            height:2px;
                            top:29px;
                            left:0;
                            background:gray;
                        }
                        .hLine{
                            position:absolute;
                            width:2px;
                            height:100%;
                            left:29px;
                            top:0;
                            background:gray;
                        }
                    }
                    .desc{
                        position:absolute;
                        display:block;
                        width:100%;
                        height:20px;
                        line-height:20px;
                        text-align:center;
                        bottom:25px;
                        left:0;
                    }
                    .name{
                        margin:10px 0;
                    }
                    .address{
                        margin:0;
                        padding:0;
                    }
                    .remark,.setRemark{
                        color:orange;
                        font-size:14px;
                    }
                    .editBtn,.deleteBtn{
                        position:absolute;
                        right:10px;
                    }
                    .editBtn{
                        top:10px;
                    }
                    .deleteBtn{
                        bottom:15px;
                    }
                }
            }
        }
        .more{
            width:50px;
            height:30px;
            line-height:30px;
            color:orange;
            font-size:14px;
            margin:0 auto 20px;
            text-align:center;
            cursor:pointer;
            .text{
                display:inline-block;
            }
            .moreIcon{
                display:inline-block;
                transform:rotate(90deg);
                -ms-transform:rotate(90deg);
                -o-transform:rotate(90deg);
                -moz-transform:rotate(90deg);
                -webkit-transform:rotate(90deg);
            }
            .text,.moreIcon{
                height:30px;
                line-height:30px;
            }
        }
        .type{
            display:flex;
            justify-content:center;
            width:100%;
            height:80px;
            overflow:hidden;
            text-align:center;
            .typeList{
                float:left;
                width:200px;
                height:100%;
                margin-right:20px;
                padding:10px;
                box-sizing:border-box;
                border:1px solid #ccc;
                &.activeClass{
                    border:2px solid orange;
                    &:hover{
                        border:2px solid orange;
                    }
                }
                .name,.fee{
                    width:100%;
                    height:30px;
                    line-height:30px;
                    text-align:center;
                }
            }
        }
    }
</style>