<script>
import logo from "../../assets/img/material-symbols_image.png"
export default {
  data: () => ({
    logo: logo,
  })
}
</script>
<template>
  <header id="header">
      <div class="container">
        <div class="row">
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