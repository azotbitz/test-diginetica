<script>
import logo from "../../assets/img/material-symbols_image.png"
import arrow from "../../assets/img/Mobile Icon.png"
import x from "../../assets/img/Search Icons.png"
export default {
  data: () => ({
    logo: logo,
    arrow: arrow,
    x: x,
  })
}
</script>
<template>
  <header id="header">
      <div class="container">
        <div class="row">
          <div class="my-drawer">
            <div style="padding-top: 8px" class="drawer-search">
              <img :src="arrow" alt="arrow"/>
              <input style="border: inherit; margin-left: 10%;" type="search" placeholder="Запрос"/>
              <img style="margin-left: -10%" :src="x" alt="close"/>
            </div>
            <button style="border-radius: 5px;
            background: #7397F5;
            padding: 8px" class="btn-primary">Найти</button>
          </div>
          <div class="left-sidebar col-sm-2 col-sm-3 col-xs-12">
            <div class="logo">
              <a class="logo-img" href="index.html"><img :src="logo" alt="logo"/></a>
              <h5 class="logo-name">Логотип</h5>
            </div>
            <div class="btn-group">
              <button class="my-btn">Каталог</button>
            </div>
          </div>
          <div class="search-header col-sm-7">
            <input class="my-input" type="search" placeholder="Поиск по 100 000 товаров"/>
          </div>
          <div class="rigth-side-header col-sm-3">
            <div class="shop-menu">
              <ul class="my-navbar">
                <li><a href="#">Информация о компании</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Полезные ссылки</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </header>
</template>