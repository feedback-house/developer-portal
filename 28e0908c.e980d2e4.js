(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(90)),c=["components"],s={id:"api-getting-started",title:"Getting Started with Feedback House APIs"},o={unversionedId:"api-getting-started",id:"api-getting-started",isDocsHomePage:!1,title:"Getting Started with Feedback House APIs",description:"This document will help you with getting started with Feedback House APIs.",source:"@site/docs/api-getting-started.md",slug:"/api-getting-started",permalink:"/docs/api-getting-started",version:"current",sidebar:"docs-api",next:{title:"API List",permalink:"/docs/api-list"}},l=[{value:"Creating new API key",id:"creating-new-api-key",children:[]},{value:"API Usage Guidelines",id:"api-usage-guidelines",children:[]},{value:"APIs Keys Security",id:"apis-keys-security",children:[]},{value:"APIs Restrictions",id:"apis-restrictions",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document will help you with getting started with Feedback House APIs. "),Object(i.b)("h3",{id:"creating-new-api-key"},"Creating new API key"),Object(i.b)("p",null,"All APIs request must be authenticated with a API key. "),Object(i.b)("p",null,"In order to use APIs you first need to create a new API key. You can create API keys any time at your company API options page (",Object(i.b)("em",{parentName:"p"},"needs to be logged"),")."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Admin Panel")," > ",Object(i.b)("inlineCode",{parentName:"p"},"Permissions")," > ",Object(i.b)("inlineCode",{parentName:"p"},"APIs")," and generate a new API key. "),Object(i.b)("p",null,"In order to create APIs keys you need to have ",Object(i.b)("inlineCode",{parentName:"p"},"ADMIN")," privileges."),Object(i.b)("h3",{id:"api-usage-guidelines"},"API Usage Guidelines"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All API ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," and ",Object(i.b)("inlineCode",{parentName:"li"},"responses")," use JSON format"),Object(i.b)("li",{parentName:"ul"},"API backend servers IPs and Certificates change constantly, please don't cache neither sever IPs nor certificates"),Object(i.b)("li",{parentName:"ul"},"All requests must be encrypted using ",Object(i.b)("inlineCode",{parentName:"li"},"https"))),Object(i.b)("h3",{id:"apis-keys-security"},"APIs Keys Security"),Object(i.b)("p",null,"APIs keys are extremely powerful since they can create or read data from your company. Key should be stored and shared with extra care."),Object(i.b)("p",null,"API Guidelines:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don't share keys with third parties"),Object(i.b)("li",{parentName:"ul"},"Don't re-use keys - Access Keys, you can generate multiple keys"),Object(i.b)("li",{parentName:"ul"},"Only generate keys when needed"),Object(i.b)("li",{parentName:"ul"},"Disable unused keys")),Object(i.b)("h3",{id:"apis-restrictions"},"APIs Restrictions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Header and Payload Size limits: Any request, regardless of the endpoint used, must not exceed 10Mb. "),Object(i.b)("li",{parentName:"ul"},"Rate limit: You can't exceed 10 requests/second.")))}p.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,y=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(y,s(s({ref:t},l),{},{components:n})):a.a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);