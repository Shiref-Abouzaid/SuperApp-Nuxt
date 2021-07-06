<template>
    <section class="store">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page" >{{ $t("subnav.store") }}</li>
                </ol>
            </nav>

            <app-main-categories :categories="subCategories"></app-main-categories>

            <app-hot-offers></app-hot-offers>

            <section class="like">
                <div class="head">
                    <h2>{{ $t("store.main_header") }}</h2>
                    <nuxt-link :to="'/' + locale + '/services/store/' + $route.params.subCatId + '/' + $route.params.id + '/more-products'">{{ $t("store.more") }}</nuxt-link>
                </div>

                <div class="products">
                    <app-slider-product :products="likeProducts"></app-slider-product>
                </div>

            </section>

            <section class="popular">
                <div class="head">
                    <h2>{{ $t("store.sub_header") }}</h2>
                    <nuxt-link :to="'/' + locale + '/services/store/' + $route.params.subCatId + '/' + $route.params.id + '/more-products'">{{ $t("store.more") }}</nuxt-link>
                </div>

                <div class="products">
                    <app-slider-product :products="popularProducts"></app-slider-product>
                </div>

            </section>

            <section class="vendors">
                <div class="head">
                    <h2>{{ $t("store.vendor_header") }}</h2>
                    <nuxt-link to="more-vendors">{{ $t("store.more") }}</nuxt-link>
                </div>

                <!-- <app-slider-product></app-slider-product> -->
                <div class="popular-vendors">
                    <app-vendor-slider :vendors="vendors"></app-vendor-slider>
                </div>

            </section>

        </div>
    </section>
</template>

<script>
import axios from "axios";
import MainCategories from '~/components/Categories/StoreMainCategories';
import HotOffers from '~/components/Product/StoreSliderOffer';
import SliderProduct from '~/components/Product/StoreSliderProduct';
import VendorSlider from '~/components/Vendor/StoreSliderVendor'

export default {
    components: {
        appMainCategories: MainCategories,
        appHotOffers: HotOffers,
        appSliderProduct: SliderProduct,
        appVendorSlider: VendorSlider
    },
    data() {
        return {
            subCategories: [],
            hotOffers: [],
            likeProducts: [
                {
                    id:1,
                    vendor_details:{
                        image_url:'https://i.ibb.co/0DR1JQw/index.png',
                    },
                    sale_price:"199",
                    name:'Laptop Table And Cup Holder - 60x40Cm - Black',
                    short_description:'Laptop Desk, Astory Portable Laptop Bed Tray Table Notebook Stand Reading Holder with Foldable Legs & Cup Slot for Eating Breakfast, Reading Book, Watching Movie on Bed/Couch/Sofa-',
                    stock_status:"12",
                    regular_price:"220",
                    image_url:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/99/071012/1.jpg?9230"
                },
                {
                    id:2,
                    vendor_details:{
                        image_url:'https://i.ibb.co/0DR1JQw/index.png',
                    },
                    sale_price:"300",
                    name:'Oppo A15 - 6.52-inch 32GB/3GB Dual SIM 4G Mobile Phone - Mystery Blue',
                    short_description:'Smart bar enables you to switch between apps, transfer files, reply messages, or take screenshots when playing a game or watching a video.',
                    stock_status:"12",
                    regular_price:"350",
                    image_url:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/46/787712/1.jpg?6023"
                },
                {
                    id:3,
                    vendor_details:{
                        image_url:'https://i.ibb.co/0DR1JQw/index.png',
                    },
                    sale_price:"299",
                    name:'BLACK+DECKER DCM25N-B5 Coffee',
                    short_description:'Auto off once brewing is complete',
                    stock_status:"12",
                    regular_price:"499",
                    image_url:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/95/727302/1.jpg?6245"
                },
                {
                    id:1,
                    vendor_details:{
                        image_url:'https://i.ibb.co/0DR1JQw/index.png',
                    },
                    sale_price:"199",
                    name:'Laptop Table And Cup Holder - 60x40Cm - Black',
                    short_description:'Laptop Desk, Astory Portable Laptop Bed Tray Table Notebook Stand Reading Holder with Foldable Legs & Cup Slot for Eating Breakfast, Reading Book, Watching Movie on Bed/Couch/Sofa-',
                    stock_status:"12",
                    regular_price:"220",
                    image_url:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/99/071012/1.jpg?9230"
                },
            ],
            popularProducts: [
                {
                    id:1,
                    vendor_details:{
                        image_url:'https://i.ibb.co/0DR1JQw/index.png',
                    },
                    sale_price:"199",
                    name:'Laptop Table And Cup Holder - 60x40Cm - Black',
                    short_description:'Laptop Desk, Astory Portable Laptop Bed Tray Table Notebook Stand Reading Holder with Foldable Legs & Cup Slot for Eating Breakfast, Reading Book, Watching Movie on Bed/Couch/Sofa-',
                    stock_status:"12",
                    regular_price:"220",
                    image_url:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/99/071012/1.jpg?9230"
                },
                {
                    id:2,
                    vendor_details:{
                        image_url:'https://i.ibb.co/0DR1JQw/index.png',
                    },
                    sale_price:"300",
                    name:'Oppo A15 - 6.52-inch 32GB/3GB Dual SIM 4G Mobile Phone - Mystery Blue',
                    short_description:'Smart bar enables you to switch between apps, transfer files, reply messages, or take screenshots when playing a game or watching a video.',
                    stock_status:"12",
                    regular_price:"350",
                    image_url:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/46/787712/1.jpg?6023"
                },
                {
                    id:3,
                    vendor_details:{
                        image_url:'https://i.ibb.co/0DR1JQw/index.png',
                    },
                    sale_price:"299",
                    name:'BLACK+DECKER DCM25N-B5 Coffee',
                    short_description:'Auto off once brewing is complete',
                    stock_status:"12",
                    regular_price:"499",
                    image_url:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/95/727302/1.jpg?6245"
                },
                {
                    id:1,
                    vendor_details:{
                        image_url:'https://i.ibb.co/0DR1JQw/index.png',
                    },
                    sale_price:"199",
                    name:'Laptop Table And Cup Holder - 60x40Cm - Black',
                    short_description:'Laptop Desk, Astory Portable Laptop Bed Tray Table Notebook Stand Reading Holder with Foldable Legs & Cup Slot for Eating Breakfast, Reading Book, Watching Movie on Bed/Couch/Sofa-',
                    stock_status:"12",
                    regular_price:"220",
                    image_url:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/99/071012/1.jpg?9230"
                },
            ],
            vendors: [],
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale'];
        },
        currCode() {
            return this.$store.getters["currency/code"];
        },
    },
    async fetch() {
        console.log('store fetch');

        try {

            let subCategoriesData = await axios.get(
                "/categories/parent/" + this.$route.params.subCatId
            );
            this.subCategories = subCategoriesData.data.data;
            console.log('subcategories >> ', this.subCategories);

            let hotOffersData = await axios.get("/products/hot-offers/category/" + this.$route.params.id);
            console.log("hot offers >> ", hotOffersData.data.data);
            this.hotOffers = hotOffersData.data.data;

            let likeProductsData = await axios.get(
                "/products/products-you-may-like/category/" + this.$route.params.id
            );
            this.likeProducts = likeProductsData.data.data
            console.log('like products >> ', this.likeProducts);

            let popularProductsData = await axios.get(
            "/products/popular/category/" + this.$route.params.id
            );
            this.popularProducts = popularProductsData.data.data;
            console.log('popular products >> ', this.popularProducts);

            let vendorsData = await axios.get("/users/vendors");
            this.vendors = vendorsData.data.data;
            console.log('vendors >> ', this.vendors);

        } catch (error) {
            console.log('error >> ', error);
        }
    },
    mounted() {
        console.log(this.$route)
    },
    watch: {
        currCode(oldCurr, newCurr) {
            console.log('curr changed > ', oldCurr, newCurr);
            this.likeProducts = [];
            this.popularProducts = [];
            this.$fetch();
        }
    },
}
</script>
