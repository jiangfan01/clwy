<template>
  <div class="box">
    <!--        搜索和轮播图开始-->
    <header class="header">
      <div class="search">
        <i class="fa fa-search" aria-hidden="true"></i>
        <span>请输入需要的商品</span>
      </div>
      <div class="carousel">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://images.canon4ever.com/20160421160124_54979.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://images.canon4ever.com/20160421161950_52113.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </header>
    <!--        搜索和轮播图结束-->
    <!--        推荐商品开始-->
    <section class="shop-recommend">
      <div class="recommend">
        <p>3DS|| 日版</p>
        <span>任天堂掌上游戏机</span>
        <img src="assets/img/test.png" alt="" />
      </div>
      <div class="recommend">
        <p class="font-green">HHKB pro2</p>
        <span>静电容机械键盘</span>
        <img src="assets/img/test.png" alt="" />
      </div>
      <div class="recommend">
        <p class="font-blue">美国 iRobot</p>
        <span>只能扫地机器人</span>
        <img src="assets/img/test.png" alt="" />
      </div>
    </section>
    <!--        推荐商品结束-->
    <!--        商品列表开始-->
    <section class="shop-list">
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>红米手机3 高配全网通版</h1>
          <p>
            指纹识别 / 全网通双卡双待 / 金属机身 / 4100 mAh大电池 /
            3G内存+32GB容量 / 最高支持128GB扩展
          </p>
          <span>899元 起</span>
        </div>
      </div>
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>九号平衡车</h1>
          <p>
            年轻人的酷玩具 / 骑行遥控两种玩法 / 22公里超长续航 / 轻、小、便携 /
            重心驱动 / 15重安全保障
          </p>
          <span>1999元 起</span>
        </div>
      </div>
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>Apple iPhone 6s Plus</h1>
          <p>64G 玫瑰金色 移动联通电信4G手机</p>
          <span>6399元 起</span>
        </div>
      </div>
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>Kindle Paperwhite</h1>
          <p>
            全新升级版6英寸护眼非反光电子墨水触控显示屏 wifi 电子书阅读器 黑色
          </p>
          <span>958元 起</span>
        </div>
      </div>
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>Kindle 6英寸</h1>
          <p>
            全新Kindle电子书阅读器 (入门版)—
            升级外观设计，电子墨水显示屏，专注阅读，舒适护眼，内置WIFI
          </p>
          <span>499元 起</span>
        </div>
      </div>
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>3DSll 日版 Nintendo 任天堂掌上游戏机（测试用）</h1>
          <p>New 3DS LL 白色</p>
          <span>0.01元</span>
        </div>
      </div>
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>PlayStation 4 (PS 4)</h1>
          <p>
            电脑娱乐游戏主机
            新型号（黑色）徘徊在牛A和牛C之间的游戏主机!1209版上市！更低功耗
            更强功能 全新体验！
          </p>
          <span>2399元</span>
        </div>
      </div>
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>美国艾罗伯特（iRobot）</h1>
          <p>扫擦套餐 智能扫地擦地机器人吸尘器组合</p>
          <span>4899元 起</span>
        </div>
      </div>
      <div class="shop">
        <div class="shop-pic">
          <img src="assets/img/test.png" alt="" />
        </div>
        <div class="shop-info">
          <h1>2016年新款树莓派3代B型</h1>
          <p>Raspberry Pi Model 3 B</p>
          <span>318元 起</span>
        </div>
      </div>
    </section>
    <!--        商品列表结束-->
    <!--    底部导航栏开始-->
    <footer class="footer">
      <a href="">
        <div class="footer-list">
          <div class="shopping">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>商城</span>
          </div>
        </div>
      </a>
      <a href="categories.html">
        <div class="footer-list">
          <div class="classify">
            <i class="fa fa-map-o" aria-hidden="true"></i>
            <span>分类</span>
          </div>
        </div>
      </a>
      <a href="">
        <div class="footer-list">
          <div class="shop-cars">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>购物车</span>
          </div>
        </div>
      </a>
      <a href="">
        <div class="footer-list">
          <div class="serve">
            <i class="fa fa-user" aria-hidden="true"></i>
            <span>服务</span>
          </div>
        </div>
      </a>
    </footer>
    <!--    底部导航结束-->
  </div>
</template>
