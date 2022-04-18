(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{334:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-admin-b6fab668ba416d490ff305f0c709270a.png"},335:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-saml-apps-dfd55f4657e6847badcfcdcc20b45805.png"},336:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-saml-step1-sso-c7b1523843bef599dd4da908437bae37.png"},337:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-saml-step2-idp-c8925a6b5d3366e012a27961d940d574.png"},338:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-saml-step3-custom-app-fbf0e41e041564e482cc87e5e2fc3697.png"},339:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-saml-step4-sp-0d2b8f4931dba2f9fd930997a7d69355.png"},340:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-saml-on-everyone-c815ffb8ba994fc8f608235e27a9a8b4.png"},341:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/login-saml-feedback-c605a70406936bf53e19400c60a519a5.png"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),i=(n(0),n(91)),r=["components"],l={id:"single-sign-on-gmail",title:"Setup Single Sign On for Corporate Gmail",sidebar_label:"Corporate Gmail"},c={unversionedId:"single-sign-on-gmail",id:"single-sign-on-gmail",isDocsHomePage:!1,title:"Setup Single Sign On for Corporate Gmail",description:"Using Single-Sign-On is extremely recommend since they provide better user experience and increase security.",source:"@site/docs/single-sign-on-gmail.md",slug:"/single-sign-on-gmail",permalink:"/developer-portal/docs/single-sign-on-gmail",version:"current",sidebar_label:"Corporate Gmail",sidebar:"docs",previous:{title:"Setup Single Sign On",permalink:"/developer-portal/docs/single-sign-on-getting-started"},next:{title:"Security Guidelines",permalink:"/developer-portal/docs/security/security-guidelines"}},s=[{value:"Go inside Google Admin Apps",id:"go-inside-google-admin-apps",children:[]},{value:"Feedback Logo with name + icon",id:"feedback-logo-with-name--icon",children:[]},{value:"Feedback Logo with only icon",id:"feedback-logo-with-only-icon",children:[]}],p={rightToc:s};function b(e){var t=e.components,l=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Using Single-Sign-On is extremely recommend since they provide better user experience and increase security.")),Object(i.b)("h2",{id:"go-inside-google-admin-apps"},"Go inside Google Admin Apps"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://admin.google.com/ac/apps"},"https://admin.google.com/ac/apps")),Object(i.b)("p",null,Object(i.b)("img",{alt:"google_admin",src:n(334).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click on Saml Apps")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://admin.google.com/AdminHome?hl=en#AppsList:serviceType=SAML_APPS"},"https://admin.google.com/AdminHome?hl=en#AppsList:serviceType=SAML_APPS")),Object(i.b)("p",null,Object(i.b)("img",{alt:"saml_apps",src:n(335).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click on ",Object(i.b)("inlineCode",{parentName:"li"},"+")," button to create a new SAML App")),Object(i.b)("p",null,Object(i.b)("img",{alt:"saml-step1",src:n(336).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click on ",Object(i.b)("inlineCode",{parentName:"li"},"Setup my own custom app"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"saml-step2",src:n(337).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Download IDP metadata, option 2 (it will be the xml used inside Feedback House)")),Object(i.b)("p",null,Object(i.b)("img",{alt:"saml-step",src:n(338).default})),Object(i.b)("p",null,"Application Name: Feedback House\nDescription: Feedback House"),Object(i.b)("p",null,"You can get use one of the following icons for Feedback House Application:"),Object(i.b)("h2",{id:"feedback-logo-with-name--icon"},"Feedback Logo with name + icon"),Object(i.b)("img",{src:"/img/saml-logo-19.png",width:"200"}),Object(i.b)("h2",{id:"feedback-logo-with-only-icon"},"Feedback Logo with only icon"),Object(i.b)("img",{src:"/img/saml-logo-20.png",width:"200"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Configure Service Provider")),Object(i.b)("p",null,Object(i.b)("img",{alt:"saml-step4",src:n(339).default})),Object(i.b)("p",null,"ACS URL: ",Object(i.b)("a",{parentName:"p",href:"https://graphql.feedback.house/saml2/login/callback"},"https://graphql.feedback.house/saml2/login/callback"),"\nEntity ID ",Object(i.b)("a",{parentName:"p",href:"https://graphql.feedback.house/saml2/metadata"},"https://graphql.feedback.house/saml2/metadata"),"\nName ID Basic Information Primary Email\nName ID Format EMAIL"),Object(i.b)("h1",{id:"enable-saml-to-everybody"},"Enable SAML to everybody"),Object(i.b)("p",null,Object(i.b)("img",{alt:"saml-on-everyone",src:n(340).default})),Object(i.b)("h1",{id:"add-idp-xml-metadata-to-your-feedback-house-organization"},"Add IDP xml metadata to your Feedback House organization"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://yourcompany.feedback.house/home/company/settings/data"},"https://yourcompany.feedback.house/home/company/settings/data"),"\n",Object(i.b)("img",{alt:"saml-feedbackhouse",src:n(341).default})))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);