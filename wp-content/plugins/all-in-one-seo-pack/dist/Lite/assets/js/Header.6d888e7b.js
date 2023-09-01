import"./WpTable.8adff4c1.js";import"./default-i18n.ab92175e.js";import"./constants.e9426d11.js";import{_,r as i,o as t,c as r,d as c,w as h,f as l,T as $,e as w,t as f,x as L,n as M,h as p,a,g as k}from"./_plugin-vue_export-helper.2d9794a3.js";import"./index.02a5ed9a.js";import"./SaveChanges.bc66cd69.js";import{C as T,a as V,S as F}from"./LicenseKeyBar.bbba4d59.js";import{m as E,d as q,a as C,b as S}from"./vuex.esm-bundler.8589b2dd.js";import{U as D}from"./AnimatedNumber.1ae76b8e.js";import{S as P}from"./Caret.42a820e0.js";import{S as G}from"./LogoGear.55b490aa.js";import{S as O}from"./Logo.81e1a7f3.js";import{c as W}from"./index.fd0fcee8.js";const Y={components:{UtilAnimatedNumber:D},props:{percentage:Number},data(){return{fromNumber:0,number:0}},watch:{percentage:{deep:!0,handler(e){e!==this.number&&(this.fromNumber=this.number,this.number=e)}}},mounted(){this.number=this.percentage}},Z={class:"aioseo-percent-circle"},j={class:"aioseo-seo-site-score-svg",viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"},z=l("circle",{class:"aioseo-percent-circle-score__background",stroke:"#BFD6F7","stroke-width":"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,-1),I=["stroke-dasharray"],K={class:"aioseo-percent-circle-percent"};function Q(e,o,s,m,u,n){const d=i("util-animated-number");return t(),r("div",Z,[c($,{name:"fill-percent-circle"},{default:h(()=>[(t(),r("svg",j,[z,l("circle",{class:"aioseo-percent-circle-score__circle",stroke:"#005AE0","stroke-width":"2","stroke-dasharray":`${s.percentage},100`,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,8,I)]))]),_:1}),l("div",K,[l("div",null,[c(d,{number:u.number,"from-number":u.fromNumber},null,8,["number","from-number"]),w("% ")])])])}const B=_(Y,[["render",Q]]);const R={emits:["close"],components:{CorePercentCircle:B,SvgClose:P},props:{strings:Object,percentage:Number}},J={class:"aioseo-processing-popup"},X=l("br",null,null,-1);function ee(e,o,s,m,u,n){const d=i("core-percent-circle"),g=i("svg-close");return t(),r("div",J,[c(d,{percentage:s.percentage},null,8,["percentage"]),l("div",null,[l("strong",null,f(s.strings.header),1),X,w(f(s.strings.description),1)]),c(g,{onClick:o[0]||(o[0]=b=>e.$emit("close"))})])}const te=_(R,[["render",ee]]);const se={components:{SvgAioseoLogoGear:G,SvgClose:P},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO",this.$t.__("Free",this.$td)),url:this.$links.utmUrl("lite-upgrade-bar"),linkText:this.$t.sprintf(this.$t.__("upgrading to %1$s",this.$td),"Pro")}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a> <a href="%1$s" target="_blank" class="text-white upgrade-arrow">&rarr;</a></strong>',this.strings.url,this.strings.linkText)},upgradeText(){return this.$t.sprintf(this.$t.__("You're using %1$s. To unlock more features, consider %2$s",this.$td),this.strings.boldText,this.link)}},methods:{...E(["hideUpgradeBar"]),processHideUpgradeBar(){document.body.classList.remove("aioseo-has-bar"),this.hideUpgradeBar()}},mounted(){document.body.classList.add("aioseo-has-bar")}},ne={class:"aioseo-upgrade-bar"},oe={class:"upgrade-text"},ie=["innerHTML"];function re(e,o,s,m,u,n){const d=i("svg-aioseo-logo-gear"),g=i("svg-close");return t(),r("div",ne,[l("div",oe,[c(d),l("div",{innerHTML:n.upgradeText},null,8,ie)]),c(g,{onClick:n.processHideUpgradeBar},null,8,["onClick"])])}const ae=_(se,[["render",re]]);const ce={props:{hero:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fullWidth:Boolean,small:Boolean},computed:{classes(){let e=this.fluid?"aioseo-container-fluid ":"aioseo-container ";return e+=this.hero?"aioseo-hero ":"",e+=this.fullWidth?"full-width ":"",e+=this.small?"small ":"",e}}};function le(e,o,s,m,u,n){return t(),r("div",{class:M(n.classes)},[L(e.$slots,"default")],2)}const ue=_(ce,[["render",le]]),de={},pe={viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-notifications"},_e=l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V13.3333H7.13333C7.70833 14.325 8.775 15 10.0083 15C11.2417 15 12.3 14.325 12.8833 13.3333H15.8333V15.8333ZM11.675 11.6667H15.8333V4.16667H4.16667V11.6667H8.34167C8.34167 12.5833 9.09167 13.3333 10.0083 13.3333C10.925 13.3333 11.675 12.5833 11.675 11.6667Z",fill:"currentColor"},null,-1),ge=[_e];function me(e,o){return t(),r("svg",pe,ge)}const he=_(de,[["render",me]]);const fe={components:{CoreApiBar:T,CoreLicenseKeyBar:V,CorePercentCircle:B,CoreProcessingPopup:te,CoreUpgradeBar:ae,GridContainer:ue,SvgAioseoLogo:O,SvgCircleQuestionMark:W,SvgNotifications:he},mixins:[F],props:{fullWidth:Boolean,small:Boolean,pageName:String,actions:{type:Boolean,default(){return!0}},upgradeBar:{type:Boolean,default(){return!0}}},data(){return{activeScan:null,strings:{linkAssistantPopup:{header:this.$t.__("Link suggestions are being processed.",this.$td),description:this.$t.__("Depending on the number of posts being scanned, this process can take some time. You can safely leave this page and check back later.",this.$td)},searchStatisticsPopup:{header:this.$t.__("Search statistics are being fetched.",this.$td),description:this.$t.__("Depending on the amount of content on your site, this process can take some time. You can safely leave this page and check back later.",this.$td)}}}},computed:{...q(["settings","activeNotificationsCount","isUnlicensed","helpPanel"]),...C(["notifications","pong"]),...C("linkAssistant",["suggestionsScan"]),percentage(){switch(this.activeScan){case"linkAssistant":return this.suggestionsScan.percent;default:return null}},showPopup(){switch(this.activeScan){case"linkAssistant":return this.suggestionsScan.showProcessingPopup&&this.suggestionsScan.percent!==100;default:return null}},popupStrings(){switch(this.activeScan){case"linkAssistant":return this.strings.linkAssistantPopup;default:return null}}},methods:{...S(["toggleNotifications"]),...S("linkAssistant",["toggleProcessingPopup"]),debounce(e){let o;return(...s)=>{o&&cancelAnimationFrame(o),o=requestAnimationFrame(()=>{e(...s)})}},storeScroll(){document.documentElement.dataset.scroll=window.scrollY},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},checkForActiveScan(){this.$aioseo.page==="link-assistant"&&this.$addons.isActive("aioseo-link-assistant")&&!this.$addons.requiresUpgrade("aioseo-link-assistant")&&this.$addons.hasMinimumVersion("aioseo-link-assistant")&&(this.$route.name==="links-report"||this.$route.name==="overview")&&this.suggestionsScan.percent!==100&&(this.activeScan="linkAssistant")},toggleCirclePopup(){switch(this.activeScan){case"linkAssistant":return this.toggleProcessingPopup();default:return null}}},mounted(){this.storeScroll(),document.addEventListener("scroll",this.debounce(this.storeScroll),{passive:!0}),this.checkForActiveScan()}},ve={class:"aioseo-header"},ke={class:"aioseo-header-content"},$e=["href"],be={key:2,class:"spacer"},ye={key:3,class:"page-name"},Ce={key:4,class:"header-actions"},Se={key:0,class:"round number"};function we(e,o,s,m,u,n){const d=i("core-upgrade-bar"),g=i("core-license-key-bar"),b=i("core-api-bar"),y=i("svg-aioseo-logo"),A=i("core-percent-circle"),N=i("core-processing-popup"),U=i("svg-notifications"),x=i("svg-circle-question-mark"),H=i("grid-container");return t(),r("div",ve,[!e.$isPro&&e.settings.showUpgradeBar&&s.upgradeBar&&e.pong?(t(),p(d,{key:0})):a("",!0),e.$isPro&&e.isUnlicensed&&e.pong?(t(),p(g,{key:1})):a("",!0),e.pong?a("",!0):(t(),p(b,{key:2})),c(H,{"full-width":s.fullWidth,small:s.small},{default:h(()=>[l("div",ke,[e.isUnlicensed?(t(),r("a",{key:0,href:e.$links.utmUrl("header-logo"),target:"_blank"},[c(y)],8,$e)):a("",!0),e.isUnlicensed?a("",!0):(t(),p(y,{key:1})),s.pageName?(t(),r("span",be)):a("",!0),s.pageName?(t(),r("span",ye,f(s.pageName),1)):a("",!0),s.actions?(t(),r("div",Ce,[c($,{name:"fade-percent-circle"},{default:h(()=>[u.activeScan&&n.showPopup?(t(),p(A,{key:0,percentage:n.percentage,onClick:n.toggleCirclePopup},null,8,["percentage","onClick"])):a("",!0)]),_:1}),c($,{name:"fade-processing-popup"},{default:h(()=>[n.showPopup?(t(),p(N,{key:0,strings:n.popupStrings,percentage:n.percentage,onClose:n.toggleCirclePopup},null,8,["strings","percentage","onClose"])):a("",!0)]),_:1}),l("span",{class:"round",onClick:o[0]||(o[0]=k((...v)=>e.toggleNotifications&&e.toggleNotifications(...v),["stop"]))},[e.activeNotificationsCount?(t(),r("span",Se,f(e.activeNotificationsCount>9?"!":e.activeNotificationsCount),1)):a("",!0),c(U,{onClick:k(e.toggleNotifications,["stop"])},null,8,["onClick"])]),e.helpPanel.docs&&Object.keys(e.helpPanel.docs).length?(t(),r("span",{key:0,class:"round",onClick:o[1]||(o[1]=k((...v)=>n.toggleModal&&n.toggleModal(...v),["stop"]))},[c(x)])):a("",!0)])):a("",!0)])]),_:1},8,["full-width","small"])])}const qe=_(fe,[["render",we]]);export{qe as C,ue as G,ae as a,te as b};