import{d,r as i,b as m,o as _,c as v,a as c,t as r}from"./index-CreXejSP.js";const g={class:"clock"},k=d({__name:"clock",setup(p){var l=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];const a=i({time:"",date:""}),u=()=>{const e=new Date;a.value.time=t(e.getHours(),2)+":"+t(e.getMinutes(),2)+":"+t(e.getSeconds(),2),a.value.date=t(e.getFullYear(),4)+"-"+t(e.getMonth()+1,2)+"-"+t(e.getDate(),2)+" "+l[e.getDay()]};function t(e,o){for(var n="",s=0;s<o;s++)n+="0";return(n+e).slice(-o)}return m(()=>{setInterval(u,1e3)}),(e,o)=>(_(),v("div",g,[c("h1",null,r(a.value.date),1),c("h1",null,r(a.value.time),1)]))}});export{k as default};
