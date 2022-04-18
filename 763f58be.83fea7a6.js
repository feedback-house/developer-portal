(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{73:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return o})),a.d(r,"metadata",(function(){return l})),a.d(r,"rightToc",(function(){return c})),a.d(r,"default",(function(){return p}));var t=a(2),n=a(6),i=(a(0),a(91)),s=["components"],o={id:"api-area-user-remove",title:"Area API | Remove Users from Area",sidebar_label:"Remove Users from Area"},l={unversionedId:"api/area/api-area-user-remove",id:"api/area/api-area-user-remove",isDocsHomePage:!1,title:"Area API | Remove Users from Area",description:"API Summary",source:"@site/docs/api/area/api-area-user-remove.md",slug:"/api/area/api-area-user-remove",permalink:"/docs/api/area/api-area-user-remove",version:"current",sidebar_label:"Remove Users from Area",sidebar:"docs-api",previous:{title:"Area API | Add Users to Area",permalink:"/docs/api/area/api-area-user-add"},next:{title:"Area API | DELETE Area",permalink:"/docs/api/area/api-area-delete"}},c=[{value:"API Summary",id:"api-summary",children:[]},{value:"API details",id:"api-details",children:[{value:"Batch Operations",id:"batch-operations",children:[]},{value:"Response and Error reporting",id:"response-and-error-reporting",children:[]}]},{value:"Primary Keys",id:"primary-keys",children:[]},{value:"Available Fields per Area",id:"available-fields-per-area",children:[]}],b={rightToc:c};function p(e){var r=e.components,a=Object(n.a)(e,s);return Object(i.b)("wrapper",Object(t.a)({},b,a,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"api-summary"},"API Summary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Endpoint"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},Object(i.b)("a",{parentName:"strong",href:"https://api.feedback.house/api/planning/area/v1/user-remove"},"https://api.feedback.house/api/planning/area/v1/user-remove"))))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Method"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"POST"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Format"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"JSON"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Idempotent"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"YES"),", using primary keys")))),Object(i.b)("h2",{id:"api-details"},"API details"),Object(i.b)("p",null,"This endpoint will ",Object(i.b)("strong",{parentName:"p"},"remove")," ",Object(i.b)("inlineCode",{parentName:"p"},"Users")," from ",Object(i.b)("inlineCode",{parentName:"p"},"Areas"),"."),Object(i.b)("p",null,"Area is the smallest unit of a group of colleagues working with a single purpose."),Object(i.b)("p",null,"This API was intentionally designed with idea that it will be able to be called multiple times."),Object(i.b)("h3",{id:"batch-operations"},"Batch Operations"),Object(i.b)("p",null,"This endpoint supports ",Object(i.b)("inlineCode",{parentName:"p"},"batch")," operations and as such expects ",Object(i.b)("strong",{parentName:"p"},"an array of areas")," (",Object(i.b)("em",{parentName:"p"},"in the format of an array of objects"),")."),Object(i.b)("p",null,"Each object must contain the expected user or users to be included. This means that you can use this API to update multiple distinctive areas. This behavior is optional and not required."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    areaUsersRemove: [\n     { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439012"] },\n     { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439014","507f1f77bcf86cd799439016"] },\n     { "areaId": "997f1f77bcf86cd799439012", "users": ["507f1f77bcf86cd799439011"] },\n     ...\n    ]\n}\n')),Object(i.b)("p",null,"If you need to remove just one user you can call the API with just one area in the array object:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n areaUsersRemove: [ { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011"] },]\n}\n')),Object(i.b)("h3",{id:"response-and-error-reporting"},"Response and Error reporting"),Object(i.b)("p",null,"For each request the API will evaluate each ",Object(i.b)("inlineCode",{parentName:"p"},"Area")," individually and will report errors per area. This means that this API can successfully update some areas while rejecting others. If some user dont belongs that area is trying to be removing, the api will return it."),Object(i.b)("p",null,"Response example for a request without errors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "areaId": "ObjectId",\n      "users": ["ObjectId", "ObjectId", "ObjectId"],\n      "usersNotUpdated": []\n    }\n  ],\n  "errors": [],\n  "message": "Updated 3 | Not Updated 0 | Errors 0",\n  "status": "OK"\n}\n')),Object(i.b)("p",null,"Response example for a request without errors but with user not updated:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "areaId": "ObjectId",\n      "users": ["ObjectId", "ObjectId", "ObjectId"],\n      "usersNotUpdated": ["ObjectId"]\n    }\n  ],\n  "errors": [],\n  "message": "Updated 3 | Not Updated 1 | Errors 0",\n  "status": "OK"\n}\n')),Object(i.b)("p",null,"Response example for a request ",Object(i.b)("strong",{parentName:"p"},"with errors"),". In the example bellow the required field ",Object(i.b)("inlineCode",{parentName:"p"},"users")," is missing."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [],\n  "errors": [\n    {\n      "data": {\n        "areaId": "ObjectId",\n        "users": []\n      },\n      "message": "Missing users"\n    }\n  ],\n  "message": "Updated 0 | Not Updated 0 | Errors 1",\n  "status": "ERROR"\n}\n')),Object(i.b)("h2",{id:"primary-keys"},"Primary Keys"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"areadId")," field define which ",Object(i.b)("inlineCode",{parentName:"p"},"Areas")," will be have users removed."),Object(i.b)("p",null,"Primary key fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"areaId")," - The associated unique Id of this Area.")),Object(i.b)("p",null,"Notes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AreaId")," is required, calling this API without ",Object(i.b)("inlineCode",{parentName:"li"},"areaId")," will result in errors"),Object(i.b)("li",{parentName:"ul"},"Calling a API with the same payload a second time (ie. same keys) will ",Object(i.b)("strong",{parentName:"li"},"not")," duplicate users in the area.")),Object(i.b)("h2",{id:"available-fields-per-area"},"Available Fields per Area"),Object(i.b)("h4",{id:"areaid-areaid"},Object(i.b)("inlineCode",{parentName:"h4"},"areaId")," ","[AreaId]"),Object(i.b)("p",null,"Unique identification number for this Area."),Object(i.b)("p",null,"This field is required."),Object(i.b)("h4",{id:"users-userid"},Object(i.b)("inlineCode",{parentName:"h4"},"users")," [","[UserId]","]"),Object(i.b)("p",null,"This field defines the ",Object(i.b)("inlineCode",{parentName:"p"},"Users")," that will be removed fromthis Area."),Object(i.b)("p",null,"This field expects an array of users in the format ",Object(i.b)("inlineCode",{parentName:"p"},'users: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]'),"."))}p.isMDXComponent=!0},91:function(e,r,a){"use strict";a.d(r,"a",(function(){return p})),a.d(r,"b",(function(){return m}));var t=a(0),n=a.n(t);function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var r=n.a.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},p=function(e){var r=b(e.components);return n.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},u=n.a.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=t,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return a?n.a.createElement(m,o(o({ref:r},c),{},{components:a})):n.a.createElement(m,o({ref:r},c))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);