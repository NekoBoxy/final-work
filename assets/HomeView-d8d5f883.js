import{a as f}from"./axios-bff3f665.js";import{C as m,a as C}from"./CFooter-fe439047.js";import{_ as y,r as b,o as v,a as p,b as o,e as a,w as n,F as _,f as w,g as e,t as x,p as k,h as B,i as r}from"./index-68c1893e.js";import"./cart-bc32bbec.js";const F="/vue-final-work/assets/home004-704ebee9.png",L="/vue-final-work/assets/home002-62b50abb.png",j="/vue-final-work/assets/home001-4abae9cf.png",S="/vue-final-work/assets/nkut-050fab25.png",M="/vue-final-work/assets/nyryj-829e6f82.png",O="/vue-final-work/assets/jrsj-167353b7.png",A="/vue-final-work/assets/green-1080fb24.png",$="/vue-final-work/assets/jyrsj-e5268d2f.png";const G={data(){return{recentProducts:[]}},components:{CNavbar:m,CFooter:C},methods:{async handleProductClick(s){await this.$router.push(`/product/${s.id}`),await this.$router.go()},async handleCategoryClick(s){await this.$router.push({path:"/products",query:{category:s}}),await this.$router.go()},async getProducts(){const s=await f({method:"get",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/products"});this.recentProducts=[s.data.products[0],s.data.products[1],s.data.products[2]]}},async mounted(){this.getProducts()}},t=s=>(k("data-v-a51bcbd1"),s=s(),B(),s),I={class:"container"},N={class:"row"},P={class:"col-12 mx-auto"},E={id:"carouselExampleCaptions",class:"carousel slide carousel-fade","data-bs-ride":"carousel"},U={class:"carousel-inner"},V={class:"carousel-item active","data-bs-interval":"10000"},Z=t(()=>a("img",{src:F,class:"d-block w-100 carousel-img-cover",alt:"..."},null,-1)),q={class:"carousel-caption"},D={class:"row justify-content-between align-items-center carousel-text"},Q=t(()=>a("div",{class:"col-12 col-md-9 col-lg-10"},[a("span",null,"為生活注入自然的氣息")],-1)),R={class:"col-12 col-md-3 col-lg-2"},H=t(()=>a("button",{type:"button",class:"btn btn-primary"},"帶我回家",-1)),T={class:"carousel-item","data-bs-interval":"5000"},z=t(()=>a("img",{src:L,class:"d-block w-100 carousel-img-cover",alt:"..."},null,-1)),J={class:"carousel-caption"},K={class:"row justify-content-between align-items-center carousel-text"},W=t(()=>a("div",{class:"col-12 col-md-9 col-lg-10"},[a("span",null,"新春限定優惠，即日起輸入優惠碼 happyTUyear 全品項享八折優惠！")],-1)),X={class:"col-12 col-md-3 col-lg-2"},Y=t(()=>a("button",{type:"button",class:"button btn btn-primary"}," 帶我回家 ",-1)),aa={class:"carousel-item","data-bs-interval":"5000"},ta=t(()=>a("img",{src:j,class:"d-block w-100 carousel-img-cover",alt:"..."},null,-1)),sa={class:"carousel-caption"},da={class:"row justify-content-between align-items-center carousel-text"},ca=t(()=>a("div",{class:"col-12 col-md-9 col-lg-10"},[a("span",null,"塵世喧鬧中，尋一方心靈綠地")],-1)),oa={class:"col-12 col-md-3 col-lg-2"},ea=t(()=>a("button",{type:"button",class:"button btn btn-primary"}," 帶我回家 ",-1)),ia=e('<button class="carousel-control-prev" style="margin-bottom:78px;" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" data-v-a51bcbd1><svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a51bcbd1><g filter="url(#filter0_d_613_1336)" data-v-a51bcbd1><circle cx="42" cy="40" r="30" fill="#FEFDFC" fill-opacity="0.87" data-v-a51bcbd1></circle><path d="M33.75 40.1289C33.75 40.3021 33.7819 40.4661 33.8457 40.6211C33.9095 40.7669 34.0052 40.9036 34.1328 41.0312L44.9746 51.627C45.2207 51.873 45.5169 51.9961 45.8633 51.9961C46.1003 51.9961 46.3099 51.9414 46.4922 51.832C46.6836 51.7227 46.834 51.5723 46.9434 51.3809C47.0618 51.1986 47.1211 50.9889 47.1211 50.752C47.1211 50.4147 46.998 50.1185 46.752 49.8633L36.7988 40.1289L46.752 30.3945C46.998 30.1393 47.1211 29.8431 47.1211 29.5059C47.1211 29.2689 47.0618 29.0592 46.9434 28.877C46.834 28.6855 46.6836 28.5352 46.4922 28.4258C46.3099 28.3164 46.1003 28.2617 45.8633 28.2617C45.5169 28.2617 45.2207 28.3802 44.9746 28.6172L34.1328 39.2266C34.0052 39.3542 33.9095 39.4954 33.8457 39.6504C33.7819 39.7962 33.75 39.9557 33.75 40.1289Z" fill="#123025" fill-opacity="0.3" data-v-a51bcbd1></path></g><defs data-v-a51bcbd1><filter id="filter0_d_613_1336" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-a51bcbd1><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-a51bcbd1></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-a51bcbd1></feColorMatrix><feOffset dy="2" data-v-a51bcbd1></feOffset><feGaussianBlur stdDeviation="6" data-v-a51bcbd1></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-a51bcbd1></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.188235 0 0 0 0 0.145098 0 0 0 0.5 0" data-v-a51bcbd1></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_613_1336" data-v-a51bcbd1></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_613_1336" result="shape" data-v-a51bcbd1></feBlend></filter></defs></svg><span class="visually-hidden" data-v-a51bcbd1>Previous</span></button><button class="carousel-control-next" style="margin-bottom:78px;" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" data-v-a51bcbd1><svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a51bcbd1><g filter="url(#filter0_d_602_269)" data-v-a51bcbd1><circle cx="42" cy="40" r="30" fill="#FEFDFC" fill-opacity="0.87" data-v-a51bcbd1></circle><path d="M50.6074 39.1289C50.6074 38.9557 50.571 38.7962 50.498 38.6504C50.4342 38.4954 50.3385 38.3542 50.2109 38.2266L39.3828 27.6172C39.1367 27.3802 38.8359 27.2617 38.4805 27.2617C38.2526 27.2617 38.043 27.3164 37.8516 27.4258C37.6602 27.5352 37.5098 27.6855 37.4004 27.877C37.291 28.0592 37.2363 28.2689 37.2363 28.5059C37.2363 28.8431 37.3548 29.1393 37.5918 29.3945L47.5449 39.1289L37.5918 48.8633C37.3548 49.1185 37.2363 49.4147 37.2363 49.752C37.2363 49.9889 37.291 50.1986 37.4004 50.3809C37.5098 50.5723 37.6602 50.7227 37.8516 50.832C38.043 50.9414 38.2526 50.9961 38.4805 50.9961C38.8359 50.9961 39.1367 50.873 39.3828 50.627L50.2109 40.0312C50.3385 39.9036 50.4342 39.7669 50.498 39.6211C50.571 39.4661 50.6074 39.3021 50.6074 39.1289Z" fill="#123025" fill-opacity="0.3" data-v-a51bcbd1></path></g><defs data-v-a51bcbd1><filter id="filter0_d_602_269" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-a51bcbd1><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-a51bcbd1></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-a51bcbd1></feColorMatrix><feOffset dy="2" data-v-a51bcbd1></feOffset><feGaussianBlur stdDeviation="6" data-v-a51bcbd1></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-a51bcbd1></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.188235 0 0 0 0 0.145098 0 0 0 0.5 0" data-v-a51bcbd1></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_602_269" data-v-a51bcbd1></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_602_269" result="shape" data-v-a51bcbd1></feBlend></filter></defs></svg><span class="visually-hidden" data-v-a51bcbd1>Next</span></button>',2),la={class:"latest-area"},na={class:"container"},ra=t(()=>a("div",{class:"row"},[a("div",{class:"col-12 g-3 text-start"},[a("span",null,"最近新品")])],-1)),ba={class:"row justify-content-center"},va=["onClick"],pa=["src"],_a={class:"q-card-title"},ua={class:"row justify-content-between"},ha={class:"col text-start"},ga=t(()=>a("div",{class:"col text-end"},[a("svg",{width:"13",height:"22",viewBox:"0 0 13 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z",fill:"#F8FBF9"})])],-1)),fa={class:"container"},ma=t(()=>a("div",{class:"row"},[a("div",{class:"col-12 g-3 text-start"},[a("span",null,"產品分類")])],-1)),Ca={class:"row justify-content-center"},ya={class:"col-12 col-md-6 col-lg-4 col-xxl-5 g-4"},wa=e('<img src="'+S+'" class="card-img-top" alt="category-area-img" data-v-a51bcbd1><div class="q-card-title" data-v-a51bcbd1><div class="row justify-content-between" data-v-a51bcbd1><div class="col text-start" data-v-a51bcbd1><span data-v-a51bcbd1>盆栽</span></div><div class="col text-end" data-v-a51bcbd1><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a51bcbd1><path d="M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z" fill="#F8FBF9" data-v-a51bcbd1></path></svg></div></div></div>',2),xa=[wa],ka={class:"col-12 col-md-6 col-lg-4 col-xxl-5 g-4"},Ba=e('<img src="'+M+'" class="card-img-top" alt="category-area-img" data-v-a51bcbd1><div class="q-card-title" data-v-a51bcbd1><div class="row justify-content-between" data-v-a51bcbd1><div class="col text-start" data-v-a51bcbd1><span data-v-a51bcbd1>盆花</span></div><div class="col text-end" data-v-a51bcbd1><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a51bcbd1><path d="M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z" fill="#F8FBF9" data-v-a51bcbd1></path></svg></div></div></div>',2),Fa=[Ba],La={class:"col-12 col-md-6 col-lg-4 col-xxl-5 g-4 pb-3"},ja=e('<img src="'+O+'" class="card-img-top" alt="category-area-img" data-v-a51bcbd1><div class="q-card-title" data-v-a51bcbd1><div class="row justify-content-between" data-v-a51bcbd1><div class="col text-start" data-v-a51bcbd1><span data-v-a51bcbd1>花束</span></div><div class="col text-end" data-v-a51bcbd1><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a51bcbd1><path d="M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z" fill="#F8FBF9" data-v-a51bcbd1></path></svg></div></div></div>',2),Sa=[ja],Ma={class:"container pb-4"},Oa={class:"row align-items-center"},Aa={class:"col-12 col-md-6",style:{display:"flex","align-items":"stretch"}},$a={class:"context-area p-5",style:{width:"100%"}},Ga=t(()=>a("div",{class:"pb-2"},[r(" 自然孕育了我們，"),a("br"),r(" 但生活在水林叢林裡，"),a("br"),r(" 放眼望去都是沉重的顏色，"),a("br"),r(" 有多久沒有親近鮮花與綠植了？"),a("br")],-1)),Ia=t(()=>a("button",{class:"button btn btn-primary"}," 帶我回家 ",-1)),Na=t(()=>a("div",{class:"col-12 col-md-6",style:{display:"flex","align-items":"stretch"}},[a("img",{class:"img-fluid",style:{"object-fit":"cover"},src:A,alt:""})],-1)),Pa=e('<div class="container" data-v-a51bcbd1><div class="row" data-v-a51bcbd1><div class="col-12 col-md-6" style="display:flex;align-items:stretch;" data-v-a51bcbd1><img class="img-fluid" style="object-fit:cover;height:100%;" src="'+$+'" alt="" srcset="" data-v-a51bcbd1></div><div class="col-12 col-md-6" style="display:flex;align-items:stretch;" data-v-a51bcbd1><div class="context-area p-4" data-v-a51bcbd1><div data-v-a51bcbd1><h5 data-v-a51bcbd1>關於瑤草琪花</h5> 每一株植物都有著獨特的故事，<br data-v-a51bcbd1> 它們都是由專業的園藝師和花藝設計師細心培育而成。<br data-v-a51bcbd1> 我們致力於將這份熱愛和用心傳達給每一位顧客，<br data-v-a51bcbd1> 帶給您最美麗、最精緻、最獨特的作品。<br data-v-a51bcbd1> 無論您的需求為何，<br data-v-a51bcbd1> 我們都希望能為您提供最佳的選擇和最優質的服務。<br data-v-a51bcbd1></div></div></div></div></div><div class="QAArea" data-v-a51bcbd1><div class="container" data-v-a51bcbd1><div class="row" data-v-a51bcbd1><div class="col g-3 ps-3 pb-3 text-start" data-v-a51bcbd1><span data-v-a51bcbd1>常見問與答</span></div></div><div class="row" data-v-a51bcbd1><div class="col" data-v-a51bcbd1><div class="accordion" id="accordion1" data-v-a51bcbd1><div class="accordion-item" data-v-a51bcbd1><h2 class="accordion-header" id="headingOne" data-v-a51bcbd1><button class="accordion-button btn btn-outline-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1" data-v-a51bcbd1><span data-v-a51bcbd1>Q：請問運送方式？</span></button></h2><div id="collapse1" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion1" data-v-a51bcbd1><div class="accordion-body" data-v-a51bcbd1><span data-v-a51bcbd1>A：為了保護嬌嫩的花草們，我們全面採用黑貓宅急便運送，呵護每一株花草。若有折損請洽 0800-000-000，由專人為您服務。</span></div></div></div></div></div></div><div class="row" data-v-a51bcbd1><div class="col" data-v-a51bcbd1><div class="accordion" id="accordion2" data-v-a51bcbd1><div class="accordion-item" data-v-a51bcbd1><h2 class="accordion-header" id="headingOne" data-v-a51bcbd1><button class="accordion-button btn btn-outline-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2" data-v-a51bcbd1><span data-v-a51bcbd1>Q：請問怎麼付款呢？</span></button></h2><div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion2" data-v-a51bcbd1><div class="accordion-body" data-v-a51bcbd1><span data-v-a51bcbd1>A：瑤草琪花一律使用信用卡付款，讓您可以快速便捷的選購喜愛的花草。</span></div></div></div></div></div></div><div class="row" data-v-a51bcbd1><div class="col" data-v-a51bcbd1><div class="accordion" id="accordion3" data-v-a51bcbd1><div class="accordion-item" data-v-a51bcbd1><h2 class="accordion-header" id="headingOne" data-v-a51bcbd1><button class="accordion-button btn btn-outline-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3" data-v-a51bcbd1><span data-v-a51bcbd1>Q：網頁上沒有我喜歡的花束款式，可以客製嗎？要怎麼客製呢？價格多少？</span></button></h2><div id="collapse3" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion3" data-v-a51bcbd1><div class="accordion-body" data-v-a51bcbd1><span data-v-a51bcbd1>A：若有任何客製需求，歡迎來電或寄 email，與我們的花藝師一同討論出最符合您需求的花束款式。花藝師會依您的預算規畫並設計客製花束。</span></div></div></div></div></div></div><div class="row" data-v-a51bcbd1><div class="col" data-v-a51bcbd1><div class="accordion" id="accordion4" data-v-a51bcbd1><div class="accordion-item" data-v-a51bcbd1><h2 class="accordion-header" id="headingOne" data-v-a51bcbd1><button class="accordion-button btn btn-outline-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4" data-v-a51bcbd1><span data-v-a51bcbd1>Q：小編好棒棒，請問怎麼幫小編加雞腿呢？</span></button></h2><div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion4" data-v-a51bcbd1><div class="accordion-body" data-v-a51bcbd1><span data-v-a51bcbd1>A：您可以按下方 Octocat 替小編加雞腿唷：）</span></div></div></div></div></div></div></div></div>',2);function Ea(s,c,Ua,Va,u,i){const h=b("CNavbar"),l=b("RouterLink"),g=b("CFooter");return v(),p(_,null,[o(h),a("div",I,[a("div",N,[a("div",P,[a("div",E,[a("div",U,[a("div",V,[Z,a("div",q,[a("div",D,[Q,a("div",R,[o(l,{to:"/products"},{default:n(()=>[H]),_:1})])])])]),a("div",T,[z,a("div",J,[a("div",K,[W,a("div",X,[o(l,{to:"/products"},{default:n(()=>[Y]),_:1})])])])]),a("div",aa,[ta,a("div",sa,[a("div",da,[ca,a("div",oa,[o(l,{to:"/products"},{default:n(()=>[ea]),_:1})])])])])]),ia])])])]),a("div",la,[a("div",na,[ra,a("div",ba,[(v(!0),p(_,null,w(u.recentProducts,d=>(v(),p("div",{class:"col-12 col-md-6 col-lg-4 col-xxl-5 g-4",style:{display:"flex","align-items":"stretch"},key:d.id},[a("div",{class:"card",style:{width:"100%",cursor:"pointer"},onClick:Za=>i.handleProductClick(d)},[a("img",{src:d.imageUrl,class:"card-img-top",alt:"latest-area-img"},null,8,pa),a("div",_a,[a("div",ua,[a("div",ha,[a("span",null,x(d.title),1)]),ga])])],8,va)]))),128))])])]),a("div",fa,[ma,a("div",Ca,[a("div",ya,[a("div",{class:"card",style:{cursor:"pointer"},onClick:c[0]||(c[0]=d=>i.handleCategoryClick("盆栽"))},xa)]),a("div",ka,[a("div",{class:"card",style:{cursor:"pointer"},onClick:c[1]||(c[1]=d=>i.handleCategoryClick("盆花"))},Fa)]),a("div",La,[a("div",{class:"card",style:{cursor:"pointer"},onClick:c[2]||(c[2]=d=>i.handleCategoryClick("花束"))},Sa)])])]),a("div",Ma,[a("div",Oa,[a("div",Aa,[a("div",$a,[a("div",null,[Ga,a("div",null,[o(l,{to:"/products"},{default:n(()=>[Ia]),_:1})])])])]),Na])]),Pa,o(g)],64)}const Ha=y(G,[["render",Ea],["__scopeId","data-v-a51bcbd1"]]);export{Ha as default};