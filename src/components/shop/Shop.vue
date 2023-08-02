<script>
import product from "../../assets/img/ic_baseline-photo-camera.png"
import sale from "../../assets/img/Shields.png"
import heat from '../../assets/img/BA.png'
export default {
  data: () => ({
    heat: heat,
    sale: sale,
    items: [
      { type: 'subheader', title: 'Название категории #1' },
      {
        title: 'Название категории #1',
        value: 1,
      },
      {
        title: 'Название категории #2',
        value: 2,
      },
      {
        title: 'Название категории #3',
        value: 3,
      }],
    products:[
      {
        id:1,
        type: "Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:2,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:3,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:4,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:5,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:6,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:7,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:8,
        type:"Бренд",
        price:'5990₽',
        src: product
      },{
        id:9,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:10,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:11,
        type:"Бренд",
        price:'5990₽',
        src: product
      },
      {
        id:12,
        type:"Бренд",
        price:'5990₽',
        src: product
      }
    ]
  }),
}
</script>
<template>
  <div>
    <div class="container">
      <div class="row">
        <div
         class="filters col-md-2 col-sm-3 col-xs-12"
        >
        <v-card>
              <v-list
                  :items="items"></v-list>
        </v-card>

            <v-divider></v-divider>
            <v-card-title>Цена</v-card-title>
          <div class="price-range">
            <input class="price-input" type="text" value="от 5 500 ₽"/>
            <input class="price-input" type="text" value="до 5 500 ₽"/>
          </div>
            <v-divider></v-divider>
          <div class="my-brand">
            <v-card-title class="pb-0">Бренд</v-card-title>
            <button style="background-color: white;
            border: none;
            color: #AAAAAA;
            text-decoration: underline;">Очистить</button>
          </div>
          <div class="my-search">
            <input style="width: 100%;
            border-radius: 4px;
            border: 1px solid #D5D5D5;
            background: #FFF;" type="search" value="Поиск">
          </div>
            <v-container class="pt-0" fluid="true">
              <v-checkbox checked label="Атрибут" hide-details dense></v-checkbox>
              <v-checkbox label="Атрибут" hide-details dense></v-checkbox>
              <v-checkbox label="Атрибут" hide-details dense></v-checkbox>
              <v-checkbox label="Атрибут" hide-details dense></v-checkbox>
              <v-checkbox label="Атрибут" hide-details dense></v-checkbox>
              <v-checkbox label="Атрибут" hide-details dense></v-checkbox>
            </v-container>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Размер</v-card-title>
            <v-container class="pt-0" fluid="true">
              <v-checkbox  label="XS" hide-details dense></v-checkbox>
              <v-checkbox  label="S" hide-details dense></v-checkbox>
              <v-checkbox  label="M" hide-details dense></v-checkbox>
              <v-checkbox  label="L" hide-details dense></v-checkbox>
              <v-checkbox  label="XL" hide-details dense></v-checkbox>
              <v-checkbox  label="XXL" hide-details dense></v-checkbox>
              <v-checkbox  label="XXXL" hide-details dense></v-checkbox>
            </v-container>

        </div>

        <div class="drawer-filter">
          <v-divider></v-divider>
          <h4>Название категории</h4>
        </div>

        <div
          class="col-md-10 col-sm-9 col-xs-12"
        >
          <div class="row">
            <div class="my-product col-md-3 col-sm-6 col-xs-6" :key="pro.id" v-for="pro in products">
              <div class="image-layer">
                <img class="hot" alt="hot_price" :src="heat"/>
                  <img class="image-product" alt="product"
                    :src="pro.src"
                  />
                <img class="sale-badge" alt="sale" :src="sale"/>
              </div>
              <v-card-text style="margin-bottom: 16px; margin-top: 16px" class="brands">
              <div class="brand-s">{{pro.type}}</div>
                <span class="my-prop">
                Полное название товара в несколько строк для вида с обрывом в конце...</span>
            </v-card-text>
              <div style="display: flex">
                    <v-card-title class="price">{{pro.price}}</v-card-title>
                <span style="margin-left: 10px;
                color: #aaa;
                text-decoration: line-through;">5 990 ₽</span>
              </div>
              <div class="buy">
              <v-btn href="#" style="padding: 10px;
              border-radius: 4px;
              border: 1px solid #7397F5;
              background: #FFF" outlined>Купить</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


