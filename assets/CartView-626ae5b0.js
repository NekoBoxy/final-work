import{C as j,a as I}from"./CFooter-12d2ee92.js";import{_ as z,m as S,T as f,r as g,o as u,a as p,b as t,e as a,s as F,F as w,f as k,l as L,w as x,u as V,n,t as m,q,x as T,p as B,h as M,i as r}from"./index-067b362a.js";import{a as y}from"./axios-bff3f665.js";import{u as E}from"./cart-fd8588df.js";const U={components:{CNavbar:j,CFooter:I},data(){return{showStep:!1,showLike:!1,isCartLoaded:!1,currentStep:1,step:"",carts:[],total:0,final_total:0,orderId:"",recentProducts:[]}},methods:{...S(E,["updateNum"]),...S(V,["setLoader"]),async getProducts(){try{this.setLoader(!0);const l=(await y({method:"get",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/products"})).data.products.filter(_=>_.id!==this.id);this.recentProducts=[l[0],l[1],l[2]],this.setLoader(!1)}catch(s){alert(s.response.data.message)}},async handleProductClick(s){await this.$router.push(`/product/${s.id}`),await this.$router.go()},async getCart(){try{this.setLoader(!0);const s=await y({method:"get",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/cart"});this.carts=s.data.data.carts,this.final_total=Math.ceil(s.data.data.final_total),this.total=s.data.data.total,this.setLoader(!1)}catch(s){const l=s.response.data.message;alert(l)}},async updateCart(s,l,_){try{this.qty=Math.abs(parseInt(_,10)),this.qty=this.qty===0?1:this.qty,this.carts=this.carts.map(v=>(v.id===s&&(v.qty=this.qty),v)),this.setLoader(!0),await y({method:"put",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/cart/${s}`,data:{data:{product_id:l,qty:this.qty}}}),await this.getCart(),this.setLoader(!1)}catch(v){alert(v.response.data.message)}},async deleteCart(s,l){try{this.setLoader(!0),await y({method:"delete",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/cart/${s}`,data:{data:{id:l}}}),await this.getCart(),this.carts.length===0&&(this.showLike=!0,await this.getProducts()),await this.updateNum(),this.setLoader(!1)}catch(_){alert(_.response.data.message)}},checkMobilePhone(s){return/^09[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"},async handleCouponSubmit(s){try{this.setLoader(!0),await y({method:"post",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/coupon",data:{data:{code:s.code}}}),this.$refs.couponForm.resetForm(),await this.getCart(),this.setLoader(!1)}catch(l){alert(l.response.data.message),this.$refs.couponForm.resetForm(),this.setLoader(!1)}},async handleConfirmSubmit(){this.setLoader(!0),this.showLike=!1,new f(this.$refs["profile-tab"]).show(),this.$router.push({path:"/cart",query:{step:"profile"}}),document.documentElement.scrollTop=0,this.setLoader(!1),this.currentStep=2},async handleProfileSubmit(s){try{this.setLoader(!0);const l=await y({method:"post",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/order",data:{data:{user:{email:s.email,name:s.name,tel:s.mobilePhone,address:s.address},message:s.message}}});this.orderId=l.data.orderId,this.$refs.profileForm.resetForm(),await this.getCart(),await this.updateNum(),new f(this.$refs["pay-tab"]).show(),this.$router.push({path:"/cart",query:{step:"pay",orderId:this.orderId}}),document.documentElement.scrollTop=0,this.setLoader(!1),this.currentStep=3}catch(l){alert(l.response.data.message)}},async handlePaySubmit(){try{this.setLoader(!0),this.showLike=!0,await y({method:"post",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/pay/${this.orderId}`}),this.$refs.payForm.resetForm(),new f(this.$refs["success-tab"]).show(),this.$router.push({path:"/cart",query:{step:"success"}}),document.documentElement.scrollTop=0,await this.getProducts(),this.setLoader(!1),this.currentStep=4}catch(s){alert(s.response.data.message)}}},async mounted(){this.setLoader(!0),this.step=this.$route.query.step,this.step==="profile"?(this.showStep=!0,new f(this.$refs["profile-tab"]).show(),this.currentStep=2):this.step==="pay"?(this.showStep=!0,new f(this.$refs["pay-tab"]).show(),this.orderId=this.$route.query.orderId,this.currentStep=3):this.step==="success"?(this.showStep=!0,this.showLike=!0,new f(this.$refs["success-tab"]).show(),await this.getProducts(),this.currentStep=4):(await this.getCart(),this.isCartLoaded=!0,this.carts.length===0?(this.showLike=!0,await this.getProducts()):this.showStep=!0,new f(this.$refs["confirm-tab"]).show(),this.currentStep=1),this.setLoader(!1)}},o=s=>(B("data-v-972540a0"),s=s(),M(),s),D={class:"wrapper"},R={key:0},A={class:"container container-steps d-flex justify-content-center"},Z={class:"progress-container"},G={class:"container"},H={class:"row"},J={class:"col"},K={class:"nav nav-tabs",id:"myTab",role:"tablist",style:{display:"none"}},O={class:"nav-item",role:"presentation"},Q={class:"nav-link active",id:"confirm-tab",ref:"confirm-tab","data-bs-toggle":"tab","data-bs-target":"#confirm-tab-pane",type:"button",role:"tab","aria-controls":"confirm-tab-pane","aria-selected":"true"},W={class:"nav-item",role:"presentation"},X={class:"nav-link",id:"profile-tab",ref:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile-tab-pane",type:"button",role:"tab","aria-controls":"profile-tab-pane","aria-selected":"false"},Y={class:"nav-item",role:"presentation"},tt={class:"nav-link",id:"pay-tab",ref:"pay-tab","data-bs-toggle":"tab","data-bs-target":"#pay-tab-pane",type:"button",role:"tab","aria-controls":"pay-tab-pane","aria-selected":"false"},et={class:"nav-item",role:"presentation"},st={class:"nav-link",id:"success-tab",ref:"success-tab","data-bs-toggle":"tab","data-bs-target":"#success-tab-pane",type:"button",role:"tab","aria-controls":"success-tab-pane","aria-selected":"false"},at={class:"tab-content mb-3",id:"myTabContent"},ot={class:"tab-pane fade show active",id:"confirm-tab-pane",role:"tabpanel","aria-labelledby":"confirm-tab",tabindex:"0"},lt={key:0},it=o(()=>t("div",{class:"my-3 d-flex justify-content-center"},[t("h5",null,"確認訂單資訊")],-1)),ct={class:"row d-flex justify-content-center"},rt={class:"col-12 col-md-8"},nt={class:"table table-main"},dt=o(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"table-pc"},"商品圖片"),t("th",{scope:"col"},[t("span",{class:"table-mobile"},"品名"),t("span",{class:"table-pc"},"商品名稱")]),t("th",{scope:"col",class:"table-pc"},"原價"),t("th",{scope:"col"},"單價"),t("th",{scope:"col"},[t("span",{class:"table-mobile"},"數量"),t("span",{class:"table-pc"},"數量 / 單位")]),t("th",{scope:"col"},[t("span",{class:"table-mobile"},"金額"),t("span",{class:"table-pc"},"金額小計")]),t("th",{scope:"col"},"取消")])],-1)),ht={class:"align-items-center"},ut={class:"table-pc",style:{width:"200px"}},pt=["title"],mt=["title"],_t={class:"table-pc"},bt={class:"d-flex d-lg-none mb-3",style:{"max-width":"90px","min-width":"60px"}},ft=["onBlur","onUpdate:modelValue"],yt={class:"input-group mb-3 d-none d-lg-flex",style:{"max-width":"150px","min-width":"110px"}},vt=["onBlur","onUpdate:modelValue"],gt={class:"input-group-text table-pc"},wt=["onClick"],xt={class:"row d-flex justify-content-center"},Ct={class:"col-12 col-md-8"},kt={class:"row"},Lt={class:"col-12"},St=o(()=>t("label",{for:"staticTotal",class:"col-form-label"},"訂單小計：",-1)),Ft={class:"d-inline-block px-2"},qt=["value"],Tt={class:"col-12"},$t=o(()=>t("label",{for:"code",class:"col-form-label"},"優惠碼：",-1)),Pt={class:"d-inline-block px-2",style:{"max-width":"230px","min-width":"150px"}},Nt=o(()=>t("button",{type:"submit",class:"btn btn-primary",style:{display:"table-cell","vertical-align":"bottom"}}," 套用 ",-1)),jt={class:"col-12"},It=o(()=>t("label",{for:"staticTotal",class:"col-form-label"},"享有折扣：",-1)),zt={class:"d-inline-block px-2"},Vt=["value"],Bt={class:"col-12"},Mt=o(()=>t("label",{for:"staticTotal",class:"col-form-label"},"折扣後小計：",-1)),Et={class:"d-inline-block px-2"},Ut=["value"],Dt={class:"text-end"},Rt={key:1,class:"container"},At={class:"row"},Zt=o(()=>t("div",{class:"col-12 d-flex justify-content-center mb-3 mt-3"},[t("h5",null,[r("購物車內沒有東西，帶個花花草草回家吧 "),t("i",{class:"bi bi-emoji-kiss"})])],-1)),Gt={class:"col-12 d-flex justify-content-center mb-4"},Ht=o(()=>t("button",{type:"button",class:"btn btn-primary"},"去逛逛吧",-1)),Jt={class:"tab-pane fade",id:"profile-tab-pane",role:"tabpanel","aria-labelledby":"profile-tab",tabindex:"0"},Kt=o(()=>t("div",{class:"my-3 d-flex justify-content-center"},[t("h5",null,"填寫收件資訊")],-1)),Ot={class:"row d-flex justify-content-center"},Qt={class:"col-12 col-md-8 justify-content-center"},Wt={class:"mb-3"},Xt=o(()=>t("label",{for:"name",class:"form-label"},[r("收件人姓名 "),t("span",{class:"fw-light",style:{color:"#FF0000","font-size":"0.8rem"}},"*必填")],-1)),Yt={class:"mb-3"},te=o(()=>t("label",{for:"mobilePhone",class:"form-label"},[r("收件人手機號碼 "),t("span",{class:"fw-light",style:{color:"#FF0000","font-size":"0.8rem"}},"*必填")],-1)),ee={class:"mb-3"},se=o(()=>t("label",{for:"email",class:"form-label"},[r("Email "),t("span",{class:"fw-light",style:{color:"#FF0000","font-size":"0.8rem"}},"*必填")],-1)),ae={class:"mb-3"},oe=o(()=>t("label",{for:"address",class:"form-label"},[r("收件人地址 "),t("span",{class:"fw-light",style:{color:"#FF0000","font-size":"0.8rem"}},"*必填")],-1)),le={class:"mb-3"},ie=o(()=>t("label",{for:"message",class:"form-label"},"留言",-1)),ce=o(()=>t("div",{class:"text-end"},[t("button",{type:"submit",class:"btn btn-primary"}," 送出訂單 ")],-1)),re={class:"tab-pane fade",id:"pay-tab-pane",role:"tabpanel","aria-labelledby":"pay-tab",tabindex:"0"},ne=o(()=>t("div",{class:"my-3 d-flex justify-content-center"},[t("h5",null,"填寫信用卡資訊")],-1)),de={class:"row d-flex justify-content-center"},he={class:"col-12 col-md-8 justify-content-center"},ue={class:"mb-3"},pe=o(()=>t("label",{for:"creditCard",class:"form-label"},[r("信用卡號 "),t("span",{class:"fw-light",style:{color:"#FF0000","font-size":"0.8rem"}},"*必填")],-1)),me=o(()=>t("div",{class:"row"},[t("div",{class:"col-md-12"},[t("label",{for:"firstName",class:"form-label"},[r("持卡人姓名 "),t("span",{class:"fw-light",style:{color:"#FF0000","font-size":"0.8rem"}},"*必填")])])],-1)),_e={class:"row"},be={class:"mb-3 col-md-6"},fe={class:"mb-3 col-md-6"},ye=o(()=>t("div",{class:"row"},[t("div",{class:"col-md-12"},[t("label",{for:"month",class:"form-label"},[r("有效期限 "),t("span",{class:"fw-light",style:{color:"#FF0000","font-size":"0.8rem"}},"*必填")])])],-1)),ve={class:"row"},ge={class:"mb-3 col-md-6"},we={class:"mb-3 col-md-6"},xe={class:"mb-3"},Ce=o(()=>t("label",{for:"security",class:"form-label"},[r("安全碼 "),t("span",{class:"fw-light",style:{color:"#FF0000","font-size":"0.8rem"}},"*必填")],-1)),ke=o(()=>t("div",{class:"text-end"},[t("button",{type:"submit",class:"btn btn-primary"}," 付款 ")],-1)),Le=o(()=>t("div",{class:"tab-pane fade",id:"success-tab-pane",role:"tabpanel","aria-labelledby":"success-tab",tabindex:"0"},[t("div",{class:"my-3 d-flex justify-content-center"},[t("h5",null,"完成訂購")]),t("div",{class:"d-flex justify-content-center"},[t("p",null,[r(" 交易已完成，"),t("br"),r(" 謝謝您的購買與支持，小幫手正快馬加鞭包裝與出貨中。"),t("br"),r(" 關於訂單若有任何需求或疑問，請洽 0800-000-000，將由專人為您服務。 ")])])],-1)),Se={key:1,class:"container"},Fe={class:"row"},qe={class:"col"},Te=o(()=>t("div",{class:"row"},[t("div",{class:"col d-flex justify-content-center"},[t("h5",null,"你可能會喜歡……")])],-1)),$e={class:"row justify-content-center mb-3"},Pe=["onClick"],Ne=["src"],je={class:"q-card-title"},Ie={class:"row justify-content-between"},ze={class:"col-auto text-start"},Ve=o(()=>t("div",{class:"col-auto text-end"},[t("svg",{width:"13",height:"22",viewBox:"0 0 13 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z",fill:"#F8FBF9"})])],-1));function Be(s,l,_,v,i,d){const $=g("CNavbar"),c=g("v-field"),C=g("v-form"),P=g("RouterLink"),h=g("error-message"),N=g("CFooter");return u(),p(w,null,[t("div",D,[a($),i.showStep?(u(),p("div",R,[t("div",A,[t("div",Z,[t("div",{id:"progress",class:"progress",style:F({width:`${(i.currentStep-1)*33.3}%`})},null,4),(u(),p(w,null,k(4,e=>t("div",{class:n(["circle",{active:i.currentStep===e}]),key:e},m(e),3)),64))])])])):L("",!0),t("div",G,[t("div",H,[t("div",J,[t("ul",K,[t("li",O,[t("button",Q,"確認訂單",512)]),t("li",W,[t("button",X,"收件資訊",512)]),t("li",Y,[t("button",tt,"付款資訊",512)]),t("li",et,[t("button",st,"完成訂購",512)])]),t("div",at,[t("div",ot,[i.carts.length>0&&i.isCartLoaded?(u(),p("div",lt,[it,t("div",ct,[t("div",rt,[t("table",nt,[dt,t("tbody",ht,[(u(!0),p(w,null,k(i.carts,e=>(u(),p("tr",{key:e.id},[t("td",ut,[t("div",{style:F([{height:"100px","background-size":"cover","background-position":"center"},{"background-image":`url(${e.product.imageUrl})`}])},null,4)]),t("td",null,[t("div",{class:"table-mobile text-truncate",style:{width:"100px"},title:e.product.title},m(e.product.title),9,pt),t("div",{class:"table-pc text-truncate",style:{width:"250px"},title:e.product.title},m(e.product.title),9,mt)]),t("td",_t,m(e.product.origin_price),1),t("td",null,m(e.product.price),1),t("td",null,[t("div",bt,[q(t("input",{min:"1",type:"number",class:"form-control",step:"1",onBlur:b=>d.updateCart(e.id,e.product.id,e.qty),"onUpdate:modelValue":b=>e.qty=b},null,40,ft),[[T,e.qty,void 0,{number:!0}]])]),t("div",yt,[q(t("input",{min:"1",type:"number",class:"form-control",step:"1",onBlur:b=>d.updateCart(e.id,e.product.id,e.qty),"onUpdate:modelValue":b=>e.qty=b},null,40,vt),[[T,e.qty,void 0,{number:!0}]]),t("span",gt,m(e.product.unit),1)])]),t("td",null,m(e.total)+" 元",1),t("td",null,[t("button",{type:"button",class:"btn btn-danger btn-sm",onClick:b=>d.deleteCart(e.id,e.product.id)},"刪除",8,wt)])]))),128))])])])]),t("div",xt,[t("div",Ct,[a(C,{onSubmit:d.handleCouponSubmit,ref:"couponForm"},{default:x(()=>[t("div",kt,[t("div",Lt,[St,t("div",Ft,[t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"staticTotal",value:`${i.total} 元`},null,8,qt)])]),t("div",Tt,[$t,t("div",Pt,[a(c,{id:"code",name:"code",type:"text",class:"form-control",placeholder:"請輸入優惠碼"})]),Nt]),t("div",jt,[It,t("div",zt,[t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"staticTotal",value:i.final_total!==i.total?`${parseInt(100*i.final_total/i.total,10)} ％`:"無"},null,8,Vt)])]),t("div",Bt,[Mt,t("div",Et,[t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"staticTotal",value:`${i.final_total} 元`},null,8,Ut)])]),t("div",Dt,[t("button",{type:"button",class:"btn btn-primary",onClick:l[0]||(l[0]=(...e)=>d.handleConfirmSubmit&&d.handleConfirmSubmit(...e))},"下一步")])])]),_:1},8,["onSubmit"])])])])):i.carts.length===0&&i.isCartLoaded?(u(),p("div",Rt,[t("div",At,[Zt,t("div",Gt,[a(P,{to:"/products"},{default:x(()=>[Ht]),_:1})])])])):L("",!0)]),t("div",Jt,[Kt,t("div",Ot,[t("div",Qt,[a(C,{onSubmit:d.handleProfileSubmit,ref:"profileForm",class:"col"},{default:x(({errors:e})=>[t("div",Wt,[Xt,a(c,{id:"name",name:"name",type:"text",class:n(["form-control",{"is-invalid":e.name}]),placeholder:"請輸入姓名",rules:"required"},null,8,["class"]),a(h,{name:"name",class:"invalid-feedback"})]),t("div",Yt,[te,a(c,{id:"mobilePhone",name:"mobilePhone",type:"tel",class:n(["form-control",{"is-invalid":e.mobilePhone}]),placeholder:"請輸入手機號碼",rules:d.checkMobilePhone},null,8,["class","rules"]),a(h,{name:"mobilePhone",class:"invalid-feedback"})]),t("div",ee,[se,a(c,{id:"email",name:"email",type:"email",class:n(["form-control",{"is-invalid":e.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["class"]),a(h,{name:"email",class:"invalid-feedback"})]),t("div",ae,[oe,a(c,{id:"address",name:"address",type:"text",class:n(["form-control",{"is-invalid":e.address}]),placeholder:"請輸入地址",rules:"required"},null,8,["class"]),a(h,{name:"address",class:"invalid-feedback"})]),t("div",le,[ie,a(c,{id:"message",name:"message",class:"form-control",cols:"30",rows:"10",rules:"required",as:"textarea"})]),ce]),_:1},8,["onSubmit"])])])]),t("div",re,[ne,t("div",de,[t("div",he,[a(C,{onSubmit:d.handlePaySubmit,ref:"payForm",class:"col"},{default:x(({errors:e})=>[t("div",ue,[pe,a(c,{id:"creditCard",name:"creditCard",type:"text",class:n(["form-control",{"is-invalid":e.creditCard}]),placeholder:"9999-9999-9999-9999",rules:{required:!0,regex:/^\d{4}-\d{4}-\d{4}-\d{4}$/}},null,8,["class"]),a(h,{name:"creditCard",class:"invalid-feedback"})]),me,t("div",_e,[t("div",be,[a(c,{id:"firstName",name:"firstName",type:"text",class:n(["form-control",{"is-invalid":e.firstName}]),placeholder:"請輸入姓氏",rules:"required"},null,8,["class"]),a(h,{name:"firstName",class:"invalid-feedback"})]),t("div",fe,[a(c,{id:"lastName",name:"lastName",type:"text",class:n(["form-control",{"is-invalid":e.lastName}]),placeholder:"請輸入名字",rules:"required"},null,8,["class"]),a(h,{name:"lastName",class:"invalid-feedback"})])]),ye,t("div",ve,[t("div",ge,[a(c,{id:"month",name:"month",type:"text",class:n(["form-control",{"is-invalid":e.month}]),placeholder:"請輸入月份",rules:"required"},null,8,["class"]),a(h,{name:"month",class:"invalid-feedback"})]),t("div",we,[a(c,{id:"year",name:"year",type:"text",class:n(["form-control",{"is-invalid":e.year}]),placeholder:"請輸入年份",rules:"required"},null,8,["class"]),a(h,{name:"year",class:"invalid-feedback"})])]),t("div",xe,[Ce,a(c,{id:"security",name:"security",type:"text",class:n(["form-control",{"is-invalid":e.security}]),placeholder:"請輸入安全碼",rules:"required"},null,8,["class"]),a(h,{name:"security",class:"invalid-feedback"})]),ke]),_:1},8,["onSubmit"])])])]),Le])])])]),i.showLike?(u(),p("div",Se,[t("div",Fe,[t("div",qe,[Te,t("div",$e,[(u(!0),p(w,null,k(i.recentProducts,e=>(u(),p("div",{class:"col-12 col-md-4 col-lg-4 col-xxl-4 g-4",style:{display:"flex","align-items":"stretch"},key:e.id},[t("div",{class:"card",style:{width:"100%",cursor:"pointer"},onClick:b=>d.handleProductClick(e)},[t("img",{src:e.imageUrl,class:"card-img-top",alt:"anotherImg"},null,8,Ne),t("div",je,[t("div",Ie,[t("div",ze,[t("span",null,m(e.title),1)]),Ve])])],8,Pe)]))),128))])])])])):L("",!0)]),a(N)],64)}const Re=z(U,[["render",Be],["__scopeId","data-v-972540a0"]]);export{Re as default};
