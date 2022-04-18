(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),i=(t(0),t(90)),o=["components"],s={id:"api-user-delete",title:"User API | DELETE User",sidebar_label:"DELETE User"},l={unversionedId:"api/user/api-user-delete",id:"api/user/api-user-delete",isDocsHomePage:!1,title:"User API | DELETE User",description:"API Summary",source:"@site/docs/api/user/api-user-delete.md",slug:"/api/user/api-user-delete",permalink:"/docs/api/user/api-user-delete",version:"current",sidebar_label:"DELETE User",sidebar:"docs-api",previous:{title:"User API | Update or Create",permalink:"/docs/api/user/api-user-update-or-create"},next:{title:"Area API | GET Area",permalink:"/docs/api/area/api-area-get-id"}},c=[{value:"API Summary",id:"api-summary",children:[]},{value:"API details",id:"api-details",children:[{value:"Response",id:"response",children:[]},{value:"Error reporting",id:"error-reporting",children:[]}]},{value:"Response Fields for User deleted",id:"response-fields-for-user-deleted",children:[]}],p={rightToc:c};function u(e){var r=e.components,t=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"api-summary"},"API Summary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Endpoint"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},Object(i.b)("a",{parentName:"strong",href:"https://api.feedback.house/api/common/user/v1/users/:id"},"https://api.feedback.house/api/common/user/v1/users/:id"))))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Method"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"DELETE"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Format"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"JSON"))))),Object(i.b)("h2",{id:"api-details"},"API details"),Object(i.b)("p",null,"This endpoint allows delete ",Object(i.b)("inlineCode",{parentName:"p"},"user"),"."),Object(i.b)("p",null,"Given the id of user, the api will delete it and return the id."),Object(i.b)("h3",{id:"response"},"Response"),Object(i.b)("p",null,"This API will return a objectId."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "OK",\n  "user": "ObjectId",\n}\n')),Object(i.b)("p",null,"When no user is found the api return an error object with informations about it"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "error": {\n    "data": "ObjectId",\n    "message": "User not found",\n  },\n  "status": "ERROR",\n  "user": null\n')),Object(i.b)("h3",{id:"error-reporting"},"Error reporting"),Object(i.b)("p",null,"Example for a response with errors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "error": {\n    "data": "fake_id",\n    "message": "Invalid id",\n  },\n  "status": "ERROR",\n  "user": null,\n}\n')),Object(i.b)("h2",{id:"response-fields-for-user-deleted"},"Response Fields for User deleted"),Object(i.b)("h4",{id:"id-unique"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," ","[Unique]"),Object(i.b)("p",null,"Unique ID for this User. If user succeeded deleted, the api will return the User id."))}u.isMDXComponent=!0},90:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return t?a.a.createElement(m,s(s({ref:r},c),{},{components:t})):a.a.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);