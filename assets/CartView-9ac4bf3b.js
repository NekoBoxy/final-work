import{C as S,a as N}from"./CFooter-545ed25d.js";import{_ as F,m as P,T as b,r as u,o as v,a as y,b as a,e as t,F as w,f as I,w as g,t as m,l as C,q as T,n,p as V,h as B}from"./index-794b2c2c.js";import{a as h}from"./axios-bff3f665.js";import{u as E}from"./cart-6f19b253.js";const U={components:{CNavbar:S,CFooter:N},data(){return{step:"",carts:null,total:0,final_total:0,orderId:""}},methods:{...P(E,["updateNum"]),async getCart(){const e=await h({method:"get",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/cart"});this.carts=e.data.data.carts,this.final_total=e.data.data.final_total,this.total=e.data.data.total},async updateCart(e,l,_){await h({method:"put",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/cart/${e}`,data:{data:{product_id:l,qty:_}}}),await this.getCart()},async deleteCart(e,l){await h({method:"delete",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/cart/${e}`,data:{data:{id:l}}}),await this.getCart(),await this.updateNum()},checkMobilePhone(e){return/^09[0-9]{8}$/.test(e)?!0:"需要正確的電話號碼"},async handleCouponSubmit(e){await h({method:"post",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/coupon",data:{data:{code:e.code}}}).catch(l=>{alert(l.response.data.message)}),this.$refs.couponForm.resetForm(),await this.getCart()},async handleConfirmSubmit(){new b(this.$refs["profile-tab"]).show(),this.$router.push({path:"/cart",query:{step:"profile"}}),document.documentElement.scrollTop=0},async handleProfileSubmit(e){const l=await h({method:"post",url:"https://vue3-course-api.hexschool.io/v2/api/catboxy/order",data:{data:{user:{email:e.email,name:e.name,tel:e.mobilePhone,address:e.address},message:e.message}}}).catch(x=>{alert(x.response.data.message)});this.orderId=l.data.orderId,this.$refs.profileForm.resetForm(),await this.getCart(),await this.updateNum(),new b(this.$refs["pay-tab"]).show(),this.$router.push({path:"/cart",query:{step:"pay",orderId:this.orderId}}),document.documentElement.scrollTop=0},async handlePaySubmit(){await h({method:"post",url:`https://vue3-course-api.hexschool.io/v2/api/catboxy/pay/${this.orderId}`}).catch(l=>{alert(l.response.data.message)}),this.$refs.payForm.resetForm(),new b(this.$refs["success-tab"]).show(),this.$router.push({path:"/cart",query:{step:"success"}}),document.documentElement.scrollTop=0}},async mounted(){this.getCart(),this.step=this.$route.query.step,this.step==="profile"?new b(this.$refs["profile-tab"]).show():this.step==="pay"?(new b(this.$refs["pay-tab"]).show(),this.orderId=this.$route.query.orderId):this.step==="success"?new b(this.$refs["success-tab"]).show():new b(this.$refs["confirm-tab"]).show()}},o=e=>(V("data-v-f2b93cda"),e=e(),B(),e),j={class:"container"},M={class:"row"},D={class:"col"},z={class:"nav nav-tabs",id:"myTab",role:"tablist"},A={class:"nav-item",role:"presentation"},L={class:"nav-link active",id:"confirm-tab",ref:"confirm-tab","data-bs-toggle":"tab","data-bs-target":"#confirm-tab-pane",type:"button",role:"tab","aria-controls":"confirm-tab-pane","aria-selected":"true"},G={class:"nav-item",role:"presentation"},H={class:"nav-link",id:"profile-tab",ref:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile-tab-pane",type:"button",role:"tab","aria-controls":"profile-tab-pane","aria-selected":"false"},J={class:"nav-item",role:"presentation"},K={class:"nav-link",id:"pay-tab",ref:"pay-tab","data-bs-toggle":"tab","data-bs-target":"#pay-tab-pane",type:"button",role:"tab","aria-controls":"pay-tab-pane","aria-selected":"false"},O={class:"nav-item",role:"presentation"},Q={class:"nav-link",id:"success-tab",ref:"success-tab","data-bs-toggle":"tab","data-bs-target":"#success-tab-pane",type:"button",role:"tab","aria-controls":"success-tab-pane","aria-selected":"false"},R={class:"tab-content",id:"myTabContent"},W={class:"tab-pane fade show active",id:"confirm-tab-pane",role:"tabpanel","aria-labelledby":"confirm-tab",tabindex:"0"},X=o(()=>t("div",{class:"my-3"},[t("h5",null,"確認訂單資訊")],-1)),Y={class:"row"},Z={class:"col-12"},tt={class:"table"},st=o(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"table-pc"},"資料序"),t("th",{scope:"col",class:"table-pc"},"商品圖片"),t("th",{scope:"col"},[t("span",{class:"table-mobile"},"品名"),t("span",{class:"table-pc"},"商品名稱")]),t("th",{scope:"col",class:"table-pc"},"原價"),t("th",{scope:"col"},"單價"),t("th",{scope:"col"},[t("span",{class:"table-mobile"},"數量"),t("span",{class:"table-pc"},"數量 / 單位")]),t("th",{scope:"col"},[t("span",{class:"table-mobile"},"金額"),t("span",{class:"table-pc"},"金額小計")]),t("th",{scope:"col"},"取消")])],-1)),et={scope:"row",class:"table-pc"},at={class:"table-pc"},ot=["src"],lt=["title"],ct=["title"],it={class:"table-pc"},nt={class:"d-flex d-lg-none mb-3",style:{"min-width":"110px"}},dt=["onBlur","onUpdate:modelValue"],rt={class:"input-group mb-3 d-none d-lg-flex",style:{"max-width":"150px"}},bt=["onBlur","onUpdate:modelValue"],mt={class:"input-group-text table-pc"},pt=["onClick"],ht={class:"row"},ut={class:"row"},_t=o(()=>t("label",{for:"staticTotal",class:"col-12 col-md-4 col-lg-3 col-form-label"},"訂單金額小計：",-1)),ft={class:"col-12 col-md-8 col-lg-9"},vt={class:"mb-3"},yt=["value"],gt={class:"row"},xt=o(()=>t("label",{for:"code",class:"col-12 col-md-4 col-lg-3 col-form-label"},"使用優惠碼：",-1)),wt={class:"col-12 col-sm-6 col-md-3 col-lg-4 mb-3"},Ct=o(()=>t("div",{class:"col-12 col-sm-6 col-md-5 col-lg-5 mb-3"},[t("button",{type:"submit",class:"btn btn-primary"}," 套用優惠碼 ")],-1)),Tt={class:"row"},$t=o(()=>t("label",{for:"staticTotal",class:"col-12 col-md-4 col-lg-3 col-form-label"},"您的優惠折扣：",-1)),kt={class:"col-12 col-md-8 col-lg-9"},qt={class:"mb-3"},St=["value"],Nt={class:"row"},Ft=o(()=>t("label",{for:"staticTotal",class:"col-12 col-md-4 col-lg-3 col-form-label"},"折扣後訂單總金額：",-1)),Pt={class:"col-12 col-md-8 col-lg-9"},It={class:"mb-3"},Vt=["value"],Bt={class:"text-end"},Et={class:"tab-pane fade",id:"profile-tab-pane",role:"tabpanel","aria-labelledby":"profile-tab",tabindex:"0"},Ut=o(()=>t("div",{class:"my-3"},[t("h5",null,"填寫收件資訊")],-1)),jt={class:"row"},Mt={class:"col-12 justify-content-center"},Dt={class:"mb-3"},zt=o(()=>t("label",{for:"name",class:"form-label"},"收件人姓名",-1)),At={class:"mb-3"},Lt=o(()=>t("label",{for:"mobilePhone",class:"form-label"},"收件人手機號碼",-1)),Gt={class:"mb-3"},Ht=o(()=>t("label",{for:"email",class:"form-label"},"Email",-1)),Jt={class:"mb-3"},Kt=o(()=>t("label",{for:"address",class:"form-label"},"收件人地址",-1)),Ot={class:"mb-3"},Qt=o(()=>t("label",{for:"message",class:"form-label"},"留言",-1)),Rt=o(()=>t("div",{class:"text-end"},[t("button",{type:"submit",class:"btn btn-primary"}," 送出訂單 ")],-1)),Wt={class:"tab-pane fade",id:"pay-tab-pane",role:"tabpanel","aria-labelledby":"pay-tab",tabindex:"0"},Xt=o(()=>t("div",{class:"my-3"},[t("h5",null,"填寫信用卡資訊")],-1)),Yt={class:"row"},Zt={class:"col-12 justify-content-center"},ts={class:"mb-3"},ss=o(()=>t("label",{for:"creditCard",class:"form-label"},"信用卡號",-1)),es=o(()=>t("div",{class:"row"},[t("div",{class:"col-md-12"},[t("label",{for:"firstName",class:"form-label"},"持卡人姓名")])],-1)),as={class:"row"},os={class:"mb-3 col-md-6"},ls={class:"mb-3 col-md-6"},cs=o(()=>t("div",{class:"row"},[t("div",{class:"col-md-12"},[t("label",{for:"month",class:"form-label"},"有效期限")])],-1)),is={class:"row"},ns={class:"mb-3 col-md-6"},ds={class:"mb-3 col-md-6"},rs={class:"mb-3"},bs=o(()=>t("label",{for:"security",class:"form-label"},"安全碼",-1)),ms=o(()=>t("div",{class:"text-end"},[t("button",{type:"submit",class:"btn btn-primary"}," 付款 ")],-1)),ps=o(()=>t("div",{class:"tab-pane fade",id:"success-tab-pane",role:"tabpanel","aria-labelledby":"success-tab",tabindex:"0"},[t("div",{class:"my-3"},[t("h5",null,"完成訂購")]),t("div",null,"交易已完成，您可於三至五分鐘後至電子信箱收取訂單資訊郵件。"),t("div",null,"謝謝您的購買與支持，小幫手正快馬加鞭包裝與出貨中。"),t("div",null,"關於訂單若有任何需求，請洽0800-000-000，將由專人為您服務。")],-1));function hs(e,l,_,x,r,d){const $=u("CNavbar"),c=u("v-field"),f=u("v-form"),i=u("error-message"),k=u("CFooter");return v(),y(w,null,[a($),t("div",j,[t("div",M,[t("div",D,[t("ul",z,[t("li",A,[t("button",L,"確認訂單",512)]),t("li",G,[t("button",H,"收件資訊",512)]),t("li",J,[t("button",K,"付款資訊",512)]),t("li",O,[t("button",Q,"完成訂購",512)])]),t("div",R,[t("div",W,[X,t("div",Y,[t("div",Z,[t("table",tt,[st,t("tbody",null,[(v(!0),y(w,null,I(r.carts,(s,q)=>(v(),y("tr",{key:s.id},[t("th",et,m(q+1),1),t("td",at,[t("img",{src:s.product.imageUrl,style:{"object-fit":"cover",height:"150px","max-width":"150px"},alt:"",srcset:""},null,8,ot)]),t("td",null,[t("div",{class:"table-mobile text-truncate",style:{width:"100px"},title:s.product.title},m(s.product.title),9,lt),t("div",{class:"table-pc text-truncate",style:{width:"250px"},title:s.product.title},m(s.product.title),9,ct)]),t("td",it,m(s.product.origin_price),1),t("td",null,m(s.product.price),1),t("td",null,[t("div",nt,[C(t("input",{min:"1",type:"number",class:"form-control",onBlur:p=>d.updateCart(s.id,s.product.id,s.qty),"onUpdate:modelValue":p=>s.qty=p},null,40,dt),[[T,s.qty]])]),t("div",rt,[C(t("input",{min:"1",type:"number",class:"form-control",onBlur:p=>d.updateCart(s.id,s.product.id,s.qty),"onUpdate:modelValue":p=>s.qty=p},null,40,bt),[[T,s.qty]]),t("span",mt,m(s.product.unit),1)])]),t("td",null,m(s.total)+" 元",1),t("td",null,[t("button",{type:"button",class:"btn btn-danger btn-sm",onClick:p=>d.deleteCart(s.id,s.product.id)},"刪除",8,pt)])]))),128))])])])]),t("div",ht,[a(f,{onSubmit:d.handleCouponSubmit,ref:"couponForm",class:"col"},{default:g(()=>[t("div",ut,[_t,t("div",ft,[t("div",vt,[t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"staticTotal",value:`${r.total} 元`},null,8,yt)])])]),t("div",gt,[xt,t("div",wt,[a(c,{id:"code",name:"code",type:"text",class:"form-control",placeholder:"請輸入優惠碼"})]),Ct]),t("div",Tt,[$t,t("div",kt,[t("div",qt,[t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"staticTotal",value:r.final_total!==r.total?`${parseInt(100*r.final_total/r.total,10)} ％`:"無"},null,8,St)])])]),t("div",Nt,[Ft,t("div",Pt,[t("div",It,[t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"staticTotal",value:`${r.final_total} 元`},null,8,Vt)])])]),t("div",Bt,[t("button",{type:"button",class:"btn btn-primary",onClick:l[0]||(l[0]=(...s)=>d.handleConfirmSubmit&&d.handleConfirmSubmit(...s))},"下一步")])]),_:1},8,["onSubmit"])])]),t("div",Et,[Ut,t("div",jt,[t("div",Mt,[a(f,{onSubmit:d.handleProfileSubmit,ref:"profileForm",class:"col"},{default:g(({errors:s})=>[t("div",Dt,[zt,a(c,{id:"name",name:"name",type:"text",class:n(["form-control",{"is-invalid":s.name}]),placeholder:"請輸入姓名",rules:"required"},null,8,["class"]),a(i,{name:"name",class:"invalid-feedback"})]),t("div",At,[Lt,a(c,{id:"mobilePhone",name:"mobilePhone",type:"text",class:n(["form-control",{"is-invalid":s.mobilePhone}]),placeholder:"請輸入手機號碼",rules:d.checkMobilePhone},null,8,["class","rules"]),a(i,{name:"mobilePhone",class:"invalid-feedback"})]),t("div",Gt,[Ht,a(c,{id:"email",name:"email",type:"email",class:n(["form-control",{"is-invalid":s.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["class"]),a(i,{name:"email",class:"invalid-feedback"})]),t("div",Jt,[Kt,a(c,{id:"address",name:"address",type:"text",class:n(["form-control",{"is-invalid":s.address}]),placeholder:"請輸入地址",rules:"required"},null,8,["class"]),a(i,{name:"address",class:"invalid-feedback"})]),t("div",Ot,[Qt,a(c,{id:"message",name:"message",class:"form-control",cols:"30",rows:"10",rules:"required",as:"textarea"})]),Rt]),_:1},8,["onSubmit"])])])]),t("div",Wt,[Xt,t("div",Yt,[t("div",Zt,[a(f,{onSubmit:d.handlePaySubmit,ref:"payForm",class:"col"},{default:g(({errors:s})=>[t("div",ts,[ss,a(c,{id:"creditCard",name:"creditCard",type:"text",class:n(["form-control",{"is-invalid":s.creditCard}]),placeholder:"請輸入信用卡號",rules:{required:!0,regex:/^\d{4}-\d{4}-\d{4}-\d{4}$/}},null,8,["class"]),a(i,{name:"creditCard",class:"invalid-feedback"})]),es,t("div",as,[t("div",os,[a(c,{id:"firstName",name:"firstName",type:"text",class:n(["form-control",{"is-invalid":s.firstName}]),placeholder:"請輸入姓氏",rules:"required"},null,8,["class"]),a(i,{name:"firstName",class:"invalid-feedback"})]),t("div",ls,[a(c,{id:"lastName",name:"lastName",type:"text",class:n(["form-control",{"is-invalid":s.lastName}]),placeholder:"請輸入名字",rules:"required"},null,8,["class"]),a(i,{name:"lastName",class:"invalid-feedback"})])]),cs,t("div",is,[t("div",ns,[a(c,{id:"month",name:"month",type:"text",class:n(["form-control",{"is-invalid":s.month}]),placeholder:"請輸入月份",rules:"required"},null,8,["class"]),a(i,{name:"month",class:"invalid-feedback"})]),t("div",ds,[a(c,{id:"year",name:"year",type:"text",class:n(["form-control",{"is-invalid":s.year}]),placeholder:"請輸入年份",rules:"required"},null,8,["class"]),a(i,{name:"year",class:"invalid-feedback"})])]),t("div",rs,[bs,a(c,{id:"security",name:"security",type:"text",class:n(["form-control",{"is-invalid":s.security}]),placeholder:"請輸入安全碼",rules:"required"},null,8,["class"]),a(i,{name:"security",class:"invalid-feedback"})]),ms]),_:1},8,["onSubmit"])])])]),ps])])])]),a(k)],64)}const ys=F(U,[["render",hs],["__scopeId","data-v-f2b93cda"]]);export{ys as default};
