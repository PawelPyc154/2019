(this.webpackJsonptest6=this.webpackJsonptest6||[]).push([[5],{169:function(e,t,a){},170:function(e,t,a){e.exports=a.p+"static/media/ID1_bk.0579a73f.png"},171:function(e,t,a){e.exports=a.p+"static/media/ID2_bp.48a15456.png"},172:function(e,t,a){e.exports=a.p+"static/media/ID3_bu.e60f57cf.png"},173:function(e,t,a){e.exports=a.p+"static/media/ID4_bz.091ad3d7.png"},174:function(e,t,a){e.exports=a.p+"static/media/ID5_b.228bef56.png"},175:function(e,t,a){e.exports=a.p+"static/media/ID6_ca.089208a3.png"},176:function(e,t,a){e.exports=a.p+"static/media/ID1_bk@2x.3468e43a.png"},177:function(e,t,a){e.exports=a.p+"static/media/ID2_bp@2x.1909a4a6.png"},178:function(e,t,a){e.exports=a.p+"static/media/ID3_bu@2x.300036e0.png"},179:function(e,t,a){e.exports=a.p+"static/media/ID4_bz@2x.f663e829.png"},180:function(e,t,a){e.exports=a.p+"static/media/ID5_b@2x.d1ad26ac.png"},181:function(e,t,a){e.exports=a.p+"static/media/ID6_ca@2x.a312332d.png"},182:function(e,t,a){e.exports=a.p+"static/media/Layer_12.9b707d79.png"},183:function(e,t,a){e.exports=a.p+"static/media/Layer_13.5b1d50ec.png"},337:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(46),c=a(78),s=a(63),l=(a(169),a(170)),o=a(171),u=a(172),m=a(173),d=a(174),p=a(175),f=a(176),g=a(177),E=a(178),x=a(179),h=a(180),b=a(181),v=function(){return r.a.createElement("section",{className:"OpeningHouse"},r.a.createElement("figure",null,r.a.createElement("div",null,r.a.createElement("a",{href:f},r.a.createElement("img",{src:l,alt:""})),r.a.createElement("a",{href:g},r.a.createElement("img",{src:o,alt:""})),r.a.createElement("a",{href:E},r.a.createElement("img",{src:u,alt:""})),r.a.createElement("a",{href:x},r.a.createElement("img",{src:m,alt:""})),r.a.createElement("a",{href:h},r.a.createElement("img",{src:d,alt:""})),r.a.createElement("a",{href:b},r.a.createElement("img",{src:p,alt:""})))),r.a.createElement("article",null,r.a.createElement("h3",null,"OPENING HOURS"),r.a.createElement("div",null,r.a.createElement("p",null,"MONDAY - FRIDAY"),r.a.createElement("p",null,"9:00 - 22:00")),r.a.createElement("div",null,r.a.createElement("p",null,"SATURDAY - SUNDAY "),r.a.createElement("p",null,"10:00 - 21:00"))))},y=a(86),I=a(80),O=a(81),D=a(182),_=a(183);t.default=function(){var e={firstSection:{name:"about",text:"we create delicious memories",image:y},history:{title:"history",name:"WONDERFUL STORY OF OUR TOWN",text:"Renome it is renowned restaurant delights the senses with elegant ambiance, gracious service and delectable menus in the heart of Manhattan\u2019s. The distinctive setting boasts contemporary furnishings and finishes atop the restaurant\u2019s grand modern architecture. Renome offers the Bellecour room for private dining where guests enjoy creative foods and sumptuous late night desserts. Is one of the few Manhattan restaurants to have a coveted 3-star Michelin rating.",image:I,image2:O},goals:{title:"goals",name:"WHAT WE WANT TO ACHIEVE",text:"Our guests come for all occasions \u2013 a drink after work, a quick bite before a movie, a business dinner and much more. Our goal is to satisfy the needs of every visitor to our restaurant every day improving the quality of our services.",image:D,image2:_}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{data:e.firstSection}),r.a.createElement(c.a,{data:e.history}),r.a.createElement(s.a,{data:e.goals}),r.a.createElement(v,null))}},45:function(e,t,a){"use strict";var n=a(14),r=a(1);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=Object(r.useState)(0),i=Object(n.a)(a,2),c=i[0],s=i[1],l=Object(r.useState)(!1),o=Object(n.a)(l,2),u=o[0],m=o[1];return Object(r.useEffect)((function(){c>-t?window.addEventListener("scroll",(function(){e.current&&s(e.current.getBoundingClientRect().y-window.innerHeight)})):m(!0)}),[c]),u}},46:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(47);t.a=function(e){var t=e.data,a=t.name,n=t.text,i=t.image;return r.a.createElement("section",{className:"firstSection",style:{background:"url(".concat(i,")")}},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,a),r.a.createElement("span",null,n))))}},47:function(e,t,a){},63:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(3),c=a(9),s=a(45);a(64);t.a=function(e){var t=e.data,a=t.title,l=t.name,o=t.text,u=t.image,m=t.image2,d=t.link,p=Object(n.useRef)(null),f={firstImage:{start:{x:0,transition:{duration:1}},end:{x:"-2000px",transition:{duration:0}}},secondImage:{start:{x:0,transition:{duration:1}},end:{x:"2000px",transition:{duration:0}}},article:{start:{opacity:1,y:0,transition:{duration:1}},end:{opacity:0,y:"1000px",transition:{duration:0}}}};return r.a.createElement(c.a.section,{className:"article",ref:p,animate:Object(s.a)(p)?"start":"end"},r.a.createElement("figure",null,r.a.createElement(c.a.img,{src:u,variants:f.firstImage}),r.a.createElement(c.a.img,{src:m,variants:f.secondImage})),r.a.createElement(c.a.article,{variants:f.article},r.a.createElement("h2",null,a),r.a.createElement("span",null,l),r.a.createElement("p",null,o),d?r.a.createElement(i.b,{to:d},"..."):null))}},64:function(e,t,a){},78:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(9),c=a(3),s=a(45);a(79);t.a=function(e){var t=e.data,a=t.title,l=t.name,o=t.text,u=t.image,m=t.image2,d=t.link,p=Object(n.useRef)(null),f={firstImage:{start:{x:0,transition:{duration:1,ease:"linear"}},end:{x:"2000px",transition:{duration:0,ease:"linear"}}},secondImage:{start:{x:0,transition:{duration:1,ease:"linear"}},end:{x:"-2000px",transition:{duration:0,ease:"linear"}}},article:{start:{opacity:1,y:0,transition:{duration:.5}},end:{opacity:0,y:"1000px",transition:{duration:0}}}};return r.a.createElement(i.a.section,{className:"Article2",ref:p,animate:Object(s.a)(p,1)?"start":"end"},r.a.createElement("figure",null,r.a.createElement(i.a.img,{src:u,variants:f.firstImage}),r.a.createElement(i.a.img,{src:m,variants:f.secondImage})),r.a.createElement(i.a.article,{variants:f.article},r.a.createElement("h2",null,a),r.a.createElement("span",null,l),r.a.createElement("p",null,o),d?r.a.createElement(c.b,{to:d},"..."):null))}},79:function(e,t,a){},80:function(e,t,a){e.exports=a.p+"static/media/Layer_1.6e810c26.png"},81:function(e,t,a){e.exports=a.p+"static/media/Layer_3.1297ab70.png"},86:function(e,t,a){e.exports=a.p+"static/media/Layer_19.5fb559af.png"}}]);
//# sourceMappingURL=5.ebfd534f.chunk.js.map