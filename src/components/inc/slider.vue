<template>
        <div class="container mt-5" style="background-color: #FFF;">
        <div class="columns is-gapless">
            <div class="column is-one-fifth pr-5">

                <!-- My Market -->
                <div class="sidebar-navbar" style="background-color: #FFF;">
                    <h2 class="ml-2" style="border-bottom: 2px solid #f3f3f3; padding: 10px 0px; margin-bottom: 10px; margin-right: 15px;"><strong>MY MARKETS</strong></h2>

                    <ul>

                        <a v-for="(cat, index) in categories" :key='index' :href="`https://availtrade.com/category/${cat.catgeory_slug}/heightolow`" style="color:black ;">
                            <li id="dropdown" class="evanyou">
                                <img :src="`https://availtrade.com/public/images/${cat.category_icon}`" /> <span style="line-height: 1.6 !important;">{{cat.category_name}}</span>                                
                            </li>
                        </a>
                       
                        <li>
                            <a href="https://availtrade.com/all-categories" style="color:black;" title="All Categories"><img src="https://availtrade.com/public/images/Image 15.png" /> All Categories</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Slider -->
            <div class="column is-two-quarters m-4">
                <div id="main-inner">
                    <div id="slider">
                        <!-- <span v-for="(slide, slideIndex) in sliders" :key="slideIndex"> -->
                        <!-- <img v-for="(slide, slideIndex) in sliders" :key="slideIndex" :src="`https://availtrade.com/public/images/${slide.slider_image ? slide.slider_image : ''}`" alt="" style="min-height: 423px!important;max-height: 423px!important;" /> -->
                        <img :src="`https://availtrade.com/public/images/${sliders[0] ? sliders[0].slider_image : ''}`" alt="" style="min-height: 423px!important;max-height: 423px!important;" />
                        <img :src="`https://availtrade.com/public/images/${sliders[1] ? sliders[1].slider_image : ''}`" alt="" style="min-height: 423px!important;max-height: 423px!important;" />
                        <img :src="`https://availtrade.com/public/images/${sliders[2] ? sliders[2].slider_image : ''}`" alt="" style="min-height: 423px!important;max-height: 423px!important;" />
                        <!-- </span> -->
                        
                    </div>
                </div>
            </div>

            <div class="column is-one-fifth m-4">
                <div>
                    <div style="background-color: #371777; padding: 10px; color: #FFF; text-align: center; font-size: 20px;">
                        Everything in one place
                    </div>
                    <span v-for="(product, prodIndex) in threeProducs" :key="prodIndex">
                        <div style="padding: 10px;">
                            <p class="is-size-5">{{str_limit(product.product_name, 20)}}</p>
                            <a :href="`https://availtrade.com/seccategory/${product.catgeory_slug}/heightolow`" class="button is-small is-info is-rounded mt-2" style="background-color: #371777;" title="">Source now</a>
                            <img :src="`https://availtrade.com/public/images/${product.products_image}`" class="is-pulled-right three-image" />
                        </div>
                        <hr class="divider" />
                    </span>

                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name:'app-slider',
    data(){
        return{
            categories: [],
            threeProducs: [],
            sliders: []
        }
    },
    methods:{
        async getCategories(){
            const res = await this.callApi('get', 'primarycategorylist');
            if(res.status == 200){
                this.categories = res.data;
            }
        },

        async leftThreeProducts(){
            const res = await this.callApi('get', 'homeleftthreeproduct');
            if(res.status == 200){
                this.threeProducs = res.data;
            }
        },
        async homeSlider(){
            const res = await this.callApi('get', 'homesliderlist');
            if(res.status == 200){
                this.sliders = res.data;
            }
        },
    },
    mounted(){
         this.homeSlider();
         this.getCategories();
         this.leftThreeProducts();
    }
}
</script>