(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{3377:function(e,t,o){var content=o(4523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("66d2b43f",content,!0,{sourceMap:!1})},4522:function(e,t,o){"use strict";o(3377)},4523:function(e,t,o){var r=o(12)((function(i){return i[1]}));r.push([e.i,".o-footer[data-v-f07f9e68]{position:relative;padding:40px 16px 32px}@media print{.o-footer[data-v-f07f9e68]{display:none}}.o-footer__menu[data-v-f07f9e68]{display:inline-flex;flex-wrap:wrap;justify-content:center;width:100%}.o-footer__item[data-v-f07f9e68]{margin-right:8px;margin-bottom:8px;margin-left:8px;font-size:var(--font-size-xs)}.o-footer__item--strong[data-v-f07f9e68]{font-weight:700}.o-footer__link[data-v-f07f9e68]{color:var(--color-text-secondary)}@media only screen and (min-width:769px){.o-footer__link[data-v-f07f9e68]:hover{color:var(--color-text-primary)}}.o-footer__powerdby[data-v-f07f9e68]{display:flex;align-items:center;justify-content:center;margin-top:24px}.o-footer__powerdbyTitle[data-v-f07f9e68]{margin-right:8px;font-size:var(--font-size-xs);color:var(--color-text-secondary)}.o-footer--article[data-v-f07f9e68]{padding-bottom:104px}",""]),r.locals={},e.exports=r},5160:function(e,t,o){"use strict";o.r(t);o(15),o(10),o(11);var r=o(3),n=o(9),l=o(31),footer=o(577),m=o(178),c=o(78),f=o(25),h=["all","archives","archives-year-month","followers","followings","likes","menu-menuId","n-key","urlname","topic_preview","urlname-all","urlname-archives","urlname-archives-year-month","urlname-followers","urlname-followings","urlname-likes","urlname-m-key","urlname-magazines","urlname-menu-menuId","urlname-n-key","urlname-store","user_verification","urlname-topic_preview","notes-export-key"],d=["all","archives","archives-year-month","followers","followings","likes","menu-menuId","membership","n-key","urlname","topic_preview","urlname-all","urlname-archives","urlname-archives-year-month","urlname-followers","urlname-followings","urlname-likes","urlname-magazines","urlname-menu-menuId","urlname-membership","urlname-n-key","urlname-store","urlname-topic_preview"],_=["urlname-n-key","n-key","urlname-m-key","m-key"],w={url:"https://help-note.com/hc/ja",text:"よくある質問・noteの使い方"},v={url:"https://note.jp/n/nd65ead4182a6",text:"プライバシー",target:"_blank"},x={url:"/terms",text:"ご利用規約"},k=[{url:"/premium",text:"noteプレミアム"},{url:"https://pro.lp-note.com/",text:"note pro",target:"_blank",rel:"noopener",keepRel:!0},{url:"/biz?utm_source=note&utm_medium=footer&utm_campaign=note_footer",text:"法人向けサービス"},w,{url:"/magazine",text:"マガジン"},{url:"/users",text:"ユーザー"},{url:"".concat(n.defaultBaseUrl,"/hashtag"),text:"ハッシュタグ"},{url:"https://www.help-note.com/hc/ja/categories/4409699589529",text:"安心安全ガイドライン",target:"_blank"},v,x],y=[w,v,x,{url:"/terms/specified",text:"特商法表記"}],C=[{url:"https://note.jp/",text:"運営会社",target:"_blank"},{url:"https://note.jp/n/nc0fe1a230633",text:"採用情報",target:"_blank"}],O=[{url:"https://help-note.com/hc/ja/requests/new?ticket_form_id=360000081181",text:"フィードバック",target:"_blank",className:"o-footer__item--strong",rel:"nofollow"},{url:"https://docs.google.com/forms/d/e/1FAIpQLSdBit9KWT6oRc7higB2ZReRjqhgNeh19w83tixC1bMBAxZmXg/viewform",text:"クリエイターの推薦",target:"_blank",className:"o-footer__item--strong",rel:"nofollow"}],j=r.a.extend({components:{NtLinkFunctional:c.a,NtImage:f.a},computed:Object.assign(Object.assign(Object.assign({},Object(l.e)(footer.moduleName,["showFooter","isCreatorPage"])),Object(l.e)(m.moduleName,["isMySelfAndNoMembership"])),{moveUpFooter(){return _.includes(this.$route.name)},shouldShowCreatorMessage(){var{urlname:e}=this.$store.state.creator;return!1===["info","noteinc","notemag","events","notepro","notestore","noteeng"].includes(e)},forCreatorPageItems(){var{urlname:e}=this.$store.state.creator;if(!e)return[];var t=[{url:"/".concat(e,"/terms/specified"),text:"特商法表記",rel:"nofollow"}];return this.shouldShowCreatorMessage?[...t,{url:"/".concat(e,"/message"),text:"クリエイターへのお問い合わせ",rel:"nofollow"}]:t},isUserVerificationPage(){return"user_verification"===this.$route.name},items(){return this.isUserVerificationPage?y:this.isCreatorPage?[...k,...this.forCreatorPageItems,...O]:[...k,...C,...O]}}),watch:{$route(){this.updateShowFooter(),this.updateIsCreatorPage()}},created(){this.updateShowFooter(),this.updateIsCreatorPage()},methods:Object.assign(Object.assign({},Object(l.b)({setShowFooter:footer.FOOTER_ACTION_TYPES.SET_SHOW_FOOTER,setIsCreatorPage:footer.FOOTER_ACTION_TYPES.SET_IS_CREATOR_PAGE})),{updateShowFooter(){["index","magazines"].includes(this.$route.name)||(this.isMySelfAndNoMembership?this.setShowFooter(!0):this.setShowFooter(h.includes(this.$route.name)))},updateIsCreatorPage(){["index","magazines"].includes(this.$route.name)||this.setIsCreatorPage(d.includes(this.$route.name))}})}),S=(o(4522),o(5)),component=Object(S.a)(j,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.showFooter?o("footer",{staticClass:"o-footer",class:{"o-footer--article":e.moveUpFooter}},[o("ul",{staticClass:"o-footer__menu"},e._l(e.items,(function(t,i){return o("li",{key:i,staticClass:"o-footer__item",class:t.className},[o("nt-link-functional",{staticClass:"o-footer__link",attrs:{to:t.url,target:t.target,rel:t.rel,"keep-rel":t.keepRel}},[e._v("\n        "+e._s(t.text)+"\n      ")])],1)})),0),e._v(" "),e.$path.customDomain?o("div",{staticClass:"o-footer__powerdby"},[o("p",{staticClass:"o-footer__powerdbyTitle"},[e._v("\n      Powered by\n    ")]),e._v(" "),o("nt-link-functional",{staticClass:"o-footer__powerdbyLogo",attrs:{href:e.$path.currentNoteBaseUrl,target:"_blank"}},[o("nt-image",{attrs:{src:"~/assets/images/logo_powerdby_note_202212.svg",width:"54",height:"14",lazy:!0,alt:"note"}})],1)],1):e._e()]):e._e()}),[],!1,null,"f07f9e68",null);t.default=component.exports}}]);