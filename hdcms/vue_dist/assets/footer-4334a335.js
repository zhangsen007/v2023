import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";import{o as u,c as d,G as p,F as f,h as R,a8 as E,u as o,S as a,R as r,V as _,X as m,a as y}from"./@vue-c4263cf4.js";import{R as n}from"./index-e009af10.js";const v={},h={class:"hd-button"};function g(e,s){return u(),d("button",h,[p(e.$slots,"default",{},void 0,!0)])}const b=l(v,[["render",g],["__scopeId","data-v-0106e0e6"]]),$=["value"],I=f({__name:"formInput",props:{modelValue:{}},setup(e){const s=e;return R(()=>{setTimeout(()=>{document.querySelectorAll("input").forEach(t=>t.removeAttribute("readonly"))},500)}),(t,c)=>(u(),d("input",{type:"text",class:"hd-input",readonly:"",value:s.modelValue,onInput:c[0]||(c[0]=i=>t.$emit("update:modelValue",i.target.value))},null,40,$))}});const B=l(I,[["__scopeId","data-v-7b47edd2"]]),S={},k={class:"flex gap-2 justify-center mt-5"},O=y("a",{href:"/",class:"text-xs text-gray-700"},"网站首页",-1);function G(e,s){const t=E("router-link");return u(),d("div",k,[e.$route.name!=("RouteEnum"in e?e.RouteEnum:o(n)).LOGIN?(u(),a(t,{key:0,to:{name:("RouteEnum"in e?e.RouteEnum:o(n)).LOGIN},class:"text-xs text-gray-700"},{default:r(()=>[_(" 用户登录 ")]),_:1},8,["to"])):m("",!0),e.$route.name!=("RouteEnum"in e?e.RouteEnum:o(n)).REGISTER?(u(),a(t,{key:1,to:{name:("RouteEnum"in e?e.RouteEnum:o(n)).REGISTER},class:"text-xs text-gray-700"},{default:r(()=>[_(" 会员注册 ")]),_:1},8,["to"])):m("",!0),e.$route.name!=("RouteEnum"in e?e.RouteEnum:o(n)).FORGOT_PASSWORD?(u(),a(t,{key:2,to:{name:("RouteEnum"in e?e.RouteEnum:o(n)).FORGOT_PASSWORD},class:"text-xs text-gray-700"},{default:r(()=>[_(" 找回密码 ")]),_:1},8,["to"])):m("",!0),O])}const F=l(S,[["render",G]]);export{F,B as _,b as a};