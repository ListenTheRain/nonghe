<template>
    <div class="container-fluid" style="margin-left:5%;margin-right:5% ">
      <div class="row">
        <div id="myCarousel" class="carousel slide" style="height: 480px;overflow: hidden">
          <!-- 轮播（Carousel）指标 -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <!-- 轮播（Carousel）项目 -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="../../../static/images/m1.jpg" alt="First slide">
              <div class="carousel-caption">标题 1</div>
            </div>
            <div class="item">
              <img src="../../../static/images/m2.jpg" alt="Second slide">
              <div class="carousel-caption">标题 2</div>
            </div>
            <div class="item">
              <img src="../../../static/images/m3.jpg" alt="Third slide">
              <div class="carousel-caption">标题 3</div>
            </div>
            <div class="item">
              <img src="../../../static/images/m1.jpg" alt="Fourth slide">
              <div class="carousel-caption">标题 4</div>
            </div>
          </div>
          <!-- 轮播（Carousel）导航 -->
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="row col-lg-12 col-md-12 col-xs-12 col-sm-12" style="background-color:#169f14;height: 50px;margin-top: 10px;">
        <h3 class="col col-md-2">政策补贴</h3>
        <ul class="pull-right">
          <li><a href="#">农机购置补贴政策 </a>|</li>
          <li><a href="#">设施农用地支持政策</a> |</li>
          <li><a href="#">种植业结构调整政策</a> |</li>
          <li><a href="#">畜牧良种补贴政策</a> |</li>
          <li><a href="#"><span class="glyphicon glyphicon-chevron-left"></span><span class="glyphicon glyphicon-chevron-left"></span></a></li>
        </ul>
      </div>
      <div class="row" style="padding-bottom: 0px;padding-left: 0">
        <div class="col col-md-3 col-xs-3 col-lg-3 col-sm-3" style="padding-left: 0;padding-right: 0">
          <img src="../../../static/images/z1.jpg" class="img-responsive" alt="" style="height: 100%">
        </div>
        <div class="col col-md-6 col-xs-6 col-lg-6 col-sm-6" style="border:1px solid #a9a9a9;">
          <h4><strong>政策指南：</strong></h4>
          <ul class="butie" style="line-height: 27px;overflow: hidden;">
            <li>
              <a href="#">云南省2017年草原生态保护补助奖励政策实施方案
            </a>
            </li>
            <li><a href="#">2017年1月9日，中共中央、国务院印发《关于加强耕地保护和改进占补平衡的意见》。
            </a></li>
            <li><a href="#">
              2017年1月19日，中国农业部下发《农业部办公厅关于做好2017年海洋伏季休渔工作的通知》。
            </a></li>
            <li><a href="#">2017年1月23日，发布了《农业部关于2017年农业品牌推进年工作的通知》，确定2017年为农业品牌推进年。
            </a></li>
            <li><a href="">22月6日，农业部印发《2017年畜牧业工作要点》。
            </a></li>
            <li><a href="#">2017年2月7日，中共中央办公厅、国务院办公厅印发了《关于划定并严守生态保护红线的若干意见》。。
            </a></li>
            <li><a href="#">2017年2月6日，国家发展改革委印发了《关于深入推进农业供给侧结构性改革的实施意见》
            </a></li>
          </ul>
        </div>
        <div class="col col-md-3 col-xs-3 col-lg-3 col-sm-3 " style="padding-right: 0">
          <h4><strong>搜索热点：</strong></h4>
          <ul class="redian" style="overflow: hidden;line-height: 34px">
            <li>
              <a href="#">关于开展云南省2018年第一批农业机械购置补贴产品自主投档工作的通知。
              </a>
            </li>
            <li><a href="#">云南省农业厅办公室关于召开全省农机化 暨农机购置补贴工作会议的通知。云南省2017年农机购置补贴信息公开第三次核查情况通报
            </a></li>
            <li><a href="#">
              云南省农业厅关于做好2017年农机购置补贴政策落实延伸绩效管理考核工作的通知
            </a></li>
            <li><a href="#">关于认真做好2017年农机技术推广与购置补贴省对下转移支付绩效跟踪工作的通知
            </a></li>
          </ul>
        </div>
      </div>
      <!--<hr class="hr" style=" height:3px;border:none;border-top:5px ridge   #1c7430;margin-left: 0" />-->
      <div class="row" style="padding-bottom:20px;margin-top: 10px;border-top:1px solid #a9a9a9;border-bottom:1px solid #a9a9a9; ">
        <div class="col col-md-8" style="padding-left:0">
          <div class="button-group-lg" style="padding-bottom: 0;border: 2px #1c7430;/*border:1px solid #a9a9a9;*//*background-color: #449d44*/">
            <a href="#" class="btn btn-success btn-lg">合作社运营</a>
            <a href="#" class="btn btn-success btn-lg">实用农技</a>
          </div>
          <!--<div class="col col-md-4" style="padding-left: 0">-->
            <!--<img src="../../../static/images/nongji.png" alt="" class="img-responsive">-->
          <!--</div>-->
          <div class="col">
            <ul class="nongji" style="line-height: 35px;font-size: 16px;padding-left: 20px">
              <li><a href="">没想到桔子皮养猪还有这个效果 <span class="pull-right">2018-01-27</span></a></li>
              <li><a href="">收割机停放与保管要做到“10防” <span class="pull-right">2018-01-27</span></a></li>
              <li><a href="">冬季草莓如何避免僵化果 <span class="pull-right">2018-01-27</span></a></li>
              <li><a href="">2018春季果树科学家施肥指导意见 <span class="pull-right">2018-01-27</span></a></li>
              <li><a href="">小麦纹枯病防治技术 <span class="pull-right">2018-01-27</span></a></li>
              <li><a href="">秸秆还田的方法和注意事项 <span class="pull-right">2018-01-27</span></a></li>
              <li><a href="">2018养芦花鸡赚钱吗？成本利润和养殖前景如何？技术有哪些？（附鸡苗价格）<i class="pull-right">2018-01-27</i></a></li>
              <li><a href="">更多>></a></li>
            </ul>
          </div>
        </div>
        <div class="col col-md-4" style="margin-right: 0">
          <span class="btn btn-success btn-lg" style="/*width: 100%;background-color:#449d44*/ ">三农服务</span>
          <img src="../../../static/images/nongji .jpg" alt="" class="img-responsive">
          <ul class="fuwu">
            <li class="pull-left"><a href="#">农事指导&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
            <li><a href="#">农业保险&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
            <li><a href="#">实用技术&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
            <li><a href="#">科技服务&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
            <li><a href="#">培训就业&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
          </ul>
        </div>
      </div>
      <div class="containrt-fluid">
        <div class="row" style="height: 100px;background-image: url('../../../static/images/nongyec.png');background-size:100%"></div>
        <div style="height: 2px;width: 100%"></div>
        <div class="row">
        <div class="col col-md-2" style="padding-left: 0">
          <!--<span class="btn btn-success btn-lg" style="/*width: 100%*/;background-color: #449d44">农业小知识</span>-->
          <img src="../../../static/images/nonghe.jpg" alt="" class="img-responsive">
          <!--<ul id="zhishi">-->
            <!--<li><a href="#">土壤最基本的肥力要素是什么？</a></li>-->
            <!--<li><a href="#">降雨量如何换算成每亩降水量？</a></li>-->
            <!--<li><a href="#">什么叫光合作用？反应方程式是什么？</a></li>-->
            <!--<li><a href="#">什么是作物的生物产量？经济产量？</a></li>-->
          <!--</ul>-->
        </div>
        <div class="col col-md-5">
          <span class="btn btn-success btn-lg" style="/*width: 100%;*/background-color: #449d44">农合观点</span>
          <ul id="guandian">
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">中国农业已迈入高成本时代，如何提升竞争力？ </a></li>
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">农村住宅基地“三权分置”改革将带来哪些红利？ </a></li>
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">2018农业怎么发展？农民地怎么种？太详细了！ </a></li>
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">农村，我们是深情拥抱，还是装模作样的怀念？</a></li>
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">相信这两个字，农庄路上不走错路、不掉大坑 </a></li>
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">秸秆还田的方法和注意事项 </a></li>
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">乡村振兴怎么做？韩长赋：让农民说了算</a></li>
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">更多>> </a></li>
          </ul>
        </div>
        <div class="col col-md-5" style="padding-right: 0">
          <span class="btn btn-success btn-lg" style="/*width: 100%*/;background-color: #449d44">农合学院</span>
          <ul id="xueyuan">
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">【农合学院视频】合作社如何申报示范社 </a></li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">如何做好合作社团队组建工作及动员入社？ </a></li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">2018农业怎么发展？农民地怎么种？太详细了！ </a></li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">教你巧用农合app提高作业运营效率</a></li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">【视频】合作社运营模式与盈利诀窍大揭秘 </a></li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">【视频】新农人如何创办运营合作社 </a></li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">【视频】看村支书如何玩转合作社</a></li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">【视频】最新下发的2000万农业补贴去哪拿</a></li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">更多>> </a></li>
          </ul>
        </div>
      </div>
        <div style="height: 10px;background-color: #449d44" class="row"></div>
        <div class="row" style="margin-top: 20px" id="img">
          <div class="col col-md-3" >
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/nongji.png" class="img-responsive" alt="">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/t1.jpg" class="img-responsive" alt="">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/640.jpg" class="img-responsive" alt="">
          </div>
          <!--<Show></Show>-->
        </div>
        <div class="row" style="margin-top: 20px">
          <div class="col col-md-5" style="padding-left: 0">
            <h3 style="background-color: #449d44;color: white;padding: 10px 10px"><hr class="hr pull-left" style="width: 15%;border-top:3px solid #eee;margin-left: 2%;margin-right: 2%;margin-top: 10px"><span style="float: left">社会化服务</span><hr class="hr pull-left" style="width: 25%;border-top:3px solid #eee;margin-left: 2%;margin-right: 2%;margin-top: 10px">更多&nbsp;></h3>
            <div class="col col-md-5" id="shehuihua">
              <p><a href="#">依托政府涉农部门的农业社会化服务  </a></p>
              <p><a href="#">农口以外部门提供的农业社会化服务  </a></p>
              <p><a href="#">村集体提供的农业社会化服务     </a></p>
              <p><a href="#">农民专业合作社提供的农业社会化服务 </a></p>
              <p><a href="#">龙头企业提供的农业社会化服务    </a></p>
              <p><a href="#">不同民间服务主体提供的农业社会化服务</a></p>
              <p><a href="#">农村金融机构提供的农业社会化服务。 </a></p>

            </div>
            <div class="col col-md-7" style="padding-left: 0;padding-right: 0;">
             <h4 style="color: #f8f8f8;background-color: #72e0e0;padding-top: 5px;padding-bottom: 5px">中农新型农业社会化服务社服务体系</h4>
              <img src="../../../static/images/shehui.jpg" class="img-responsive" id="tixi" alt="" style="z-index: 0">
              <ul  style="z-index: 100" hidden="hidden" id="tixishow">
                <li>农资直供: 为社员提供肥料、种子、农药、农机、农膜等农用物资的直接供应，减少中间环节，节本增效。

                </li>
                <li>土地托管: 为社员提供机耕、机播、打药、机收等全托管或半托管服务。
                </li>
                <li>农技指导: 为社员提供从种到收全程保姆式农业技术指导服务。
                </li>
                <li>农业金融: 为社员提供农资贷、种植贷、农机贷等涉农金融服务。
                </li>
                <li>农机配套: 为社员提供农业机械的购买、租赁等配套服务。
                </li>
                <li>粮食收购: 为社员提供粮食烘干、仓储、收购、深加工等产业延伸服务。
                </li>
              </ul>
            </div>
          </div>
          <div class="col col-md-7" style="padding-right: 0">
            <h3 style="background-color: #449d44;color: white;padding: 10px 10px"><hr class="hr pull-left" style="width: 20%;border-top:3px solid #eee;margin-left: 2%;margin-right: 2%;margin-top: 10px"><span style="float: left">农业快讯</span><hr class="hr pull-left" style="width: 40%;border-top:3px solid #eee;margin-left: 2%;margin-right: 2%;margin-top: 10px">更多&nbsp;></h3>
            <div class="col col-md-6" id="shehuihua">
              <p><a href="#">依托政府涉农部门的农业社会化服务  </a></p>
              <p><a href="#">农口以外部门提供的农业社会化服务  </a></p>
              <p><a href="#">村集体提供的农业社会化服务     </a></p>
              <p><a href="#">农民专业合作社提供的农业社会化服务 </a></p>
              <p><a href="#">龙头企业提供的农业社会化服务    </a></p>
              <p><a href="#">不同民间服务主体提供的农业社会化服务</a></p>
              <p><a href="#">农村金融机构提供的农业社会化服务。 </a></p>

            </div>
            <div class="col col-md-6" style="padding-left: 0;padding-right: 0;">
              <h4 style="color: #f8f8f8;background-color: #72e0e0;padding-top: 5px;padding-bottom: 5px">中农新型农业社会化服务社服务体系</h4>
              <img id="kuaixun" src="../../../static/images/shehui.jpg" class="img-responsive" alt="">
              <ul style="z-index: 100" hidden="hidden" id="kuaixunshow">
                <li>农资直供: 为社员提供肥料、种子、农药、农机、农膜等农用物资的直接供应，减少中间环节，节本增效。

                </li>
                <li>土地托管: 为社员提供机耕、机播、打药、机收等全托管或半托管服务。
                </li>
                <li>农技指导: 为社员提供从种到收全程保姆式农业技术指导服务。
                </li>
                <li>农业金融: 为社员提供农资贷、种植贷、农机贷等涉农金融服务。
                </li>
                <li>农机配套: 为社员提供农业机械的购买、租赁等配套服务。
                </li>
                <li>粮食收购: 为社员提供粮食烘干、仓储、收购、深加工等产业延伸服务。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" style="margin: 0 0;padding: 0 0;height: 10px;background-color: #449d44"></div>
        <div class="row">
          <div class="col col-md-3">
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0">
            <img id="play" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0">
            <img id="play1" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0">
            <img id="play2" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0">
            <img id="play3" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
          </div>
        </div>
      </div>
      <div class="row" style="margin: 0 0;padding: 0 0;height: 10px;background-color: #449d44"></div>

    </div>
</template>

<script>
    export default {
        name: "mid" ,
      components:{
          Show : require('@/components/pages/show.vue').default
      }
    };
    $(document).ready(function () {
    $("#tixi").mouseover(function () {
      $("#tixishow").removeAttr("hidden");
    });
      $("#tixi").mouseleave(function () {
        $("#tixishow").attr("hidden","hidden");
      });
      $("#kuaixun").mouseover(function () {
        $("#kuaixunshow").removeAttr("hidden");
      });
      $("#kuaixun").mouseleave(function () {
        $("#kuaixunshow").attr("hidden","hidden");
      });
    })
</script>

<style scoped>
  .pull-right{
   list-style: none;
   margin-right: 2px;
 }
  #play{
    cursor: pointer;
    transition: all 0.6s;
  }
  #img img{
    width: 500px;
    height: 100px;
  }
  #play:hover{
    transform: scale(1.4);
  }
  #play1{
    cursor: pointer;
    transition: all 0.6s;
  }
  #play1:hover{
    transform: scale(1.4);
  }
  #play2{
    cursor: pointer;
    transition: all 0.6s;
  }
  #play2:hover{
    transform: scale(1.4);
  }
  #play3{
    cursor: pointer;
    transition: all 0.6s;
  }
  #play3:hover{
    transform: scale(1.4);
  }
  #tixishow{
    border: 1px solid silver;
    position: absolute;
    background: #449d44;
    color: #f8f8f8;
    border-radius: 10px;
  }
  #kuaixunshow{
    border: 1px solid silver;
    position: absolute;
    background: #449d44;
    color: #f8f8f8;
    border-radius: 10px;
  }
  #shehuihua p a{
      margin-top: 20px;
    margin-bottom: 20px;
    color: black;
    font-size: 16px;
  }
 .pull-right li{
    float: left;
    color: #f8f8f8;
    font-size: 18px;
    margin-right: 20px;
    padding-top: 10px;
  }
 h3{
   color: #f8f8f8;
   margin-top: 10px;
 }
 a{
   /*text-decoration: none;*/
 }
 .pull-right li  a{
    color: #f8f8f8;
  }
 ul{
   list-style: none;
 }
  .butie{
   padding-left: 10px;
  }
  .butie li{
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .butie li a{
    color: black;
  }
  .redian li{
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .redian li a{
    color: black;
  }
  .redian{
    padding-left: 10px;
  }
  .nongji li{
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .nongji li a{
    color: black;
  }
  .fuwu li{
    float: left;
    margin-right: 60px;
    margin-top: 10px;
  }
  .fuwu li a{
    color: black;
    font-size: 14px;
    font-weight:bold;
  }
  .fuwu li a:hover{
    background-color: #4cae4c;
    border-radius: 5px;
    padding: 10px 10px;
    color: #f8f8f8;
  }
  #zhishi{
    line-height: 35px;
    font-size: 18px;
  }
  #guandian a{
    line-height: 35px;
    font-size: 18px;
    margin-top: 20px;
    color: black;
  }
  #xueyuan a{
    line-height: 35px;
    font-size: 16px;
    margin-top: 20px;
    color: black;
  }
</style>
