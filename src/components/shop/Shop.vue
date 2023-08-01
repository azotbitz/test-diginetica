<script>
import product from "../../assets/img/ic_baseline-photo-camera.png"
export default {
  data: () => ({
    range: [5500, 5500],
    select:'Popularity',
    options: [
      'Default',
      'Popularity',
      'Relevance',
      'Price: Low to High',
      'Price: High to Low',
    ],
    page:1,
    breadcrums: [
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_home',
      },
      {
        text: 'Clothing',
        disabled: false,
        href: 'breadcrumbs_clothing',
      },
      {
        text: 'T-Shirts',
        disabled: true,
        href: 'breadcrumbs_shirts',
      },
    ],
    min:5500,
    max:5500,
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
        name:'BLACK TEE',
        type: "Бренд",
        price:'18.00',
        src: product
      },
      {
        id:2,
        name:'WHITE TEE',
        type:"Бренд",
        price:'40.00',
        src: product
      },
      {
        id:3,
        name:'Zara limited...',
        type:"Бренд",
        price:'25.00',
        src: product
      },
      {
        id:4,
        name:'SKULL TEE',
        type:"Бренд",
        price:'30.00',
        src: product
      },
      {
        id:5,
        name:'MANGO WINTER',
        type:"Бренд",
        price:'50.00',
        src: product
      },
      {
        id:6,
        name:'SHIRT',
        type:"Бренд",
        price:'34.00',
        src: product
      },
      {
        id:7,
        name:'TRUCKER JACKET',
        type:"Бренд",
        price:'38.00',
        src: product
      },
      {
        id:8,
        name:'COATS',
        type:"Бренд",
        price:'25.00',
        src: product
      },{
        id:9,
        name:'MANGO WINTER',
        type:"Бренд",
        price:'50.00',
        src: product
      },
      {
        id:10,
        name:'SHIRT',
        type:"Бренд",
        price:'34.00',
        src: product
      },
      {
        id:11,
        name:'TRUCKER JACKET',
        type:"Бренд",
        price:'38.00',
        src: product
      },
      {
        id:12,
        name:'COATS',
        type:"Бренд",
        price:'25.00',
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
         class="col-md-2 col-sm-3 col-xs-12"
        >
        <v-card>
              <v-list
                  :items="items"></v-list>
        </v-card>

            <v-divider></v-divider>
            <v-card-title>Цена</v-card-title>
            <v-range-slider
              v-model="range"
              :height="10"
              class="align-center"
            ></v-range-slider>
            <v-divider></v-divider>
          <div class="my-brand">
            <v-card-title class="pb-0">Бренд</v-card-title>
            <button style="background-color: white">Очистить</button>
          </div>
          <div class="my-search">
            <input style="width: 100%" type="search" placeholder="Поиск">
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
        <div
          class="col-md-10 col-sm-9 col-xs-12"
        >
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in products">
              <div class="image-layer">
                  <img class="image-product" alt="product"
                    :src="pro.src"
                  />
              </div>
              <v-card-text style="padding-bottom: 16px; padding-top: 16px" class="brands">
              <div class="brand-s">{{pro.type}}</div>
                <span class="my-prop">
                Полное название товара в несколько строк для вида с обрывом в конце...</span>
            </v-card-text>
                    <v-card-title style="justify-content: flex-start; padding-left: 14px">{{pro.price}} </v-card-title>
              <div style="margin-top: 25px;
                          margin-left: 14px;">
              <v-btn href="#" style="padding: 16px;
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


