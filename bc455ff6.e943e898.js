(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{80:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return l})),r.d(a,"metadata",(function(){return c})),r.d(a,"rightToc",(function(){return o})),r.d(a,"default",(function(){return d}));var t=r(2),n=r(6),i=(r(0),r(90)),s=["components"],l={id:"api-area-user-add",title:"Area API | Add Users to Area",sidebar_label:"Add Users to Area"},c={unversionedId:"api/area/api-area-user-add",id:"api/area/api-area-user-add",isDocsHomePage:!1,title:"Area API | Add Users to Area",description:"API Summary",source:"@site/docs/api/area/api-area-user-add.md",slug:"/api/area/api-area-user-add",permalink:"/docs/api/area/api-area-user-add",version:"current",sidebar_label:"Add Users to Area",sidebar:"docs-api",previous:{title:"Area API | Update or Create",permalink:"/docs/api/area/api-area-update-or-create"},next:{title:"Area API | Remove Users from Area",permalink:"/docs/api/area/api-area-user-remove"}},o=[{value:"API Summary",id:"api-summary",children:[]},{value:"API details",id:"api-details",children:[{value:"Batch Operations",id:"batch-operations",children:[]},{value:"Response and Error reporting",id:"response-and-error-reporting",children:[]}]},{value:"Primary Keys",id:"primary-keys",children:[]},{value:"Available Fields per Area",id:"available-fields-per-area",children:[]}],b={rightToc:o};function d(e){var a=e.components,r=Object(n.a)(e,s);return Object(i.b)("wrapper",Object(t.a)({},b,r,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"api-summary"},"API Summary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Endpoint"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},Object(i.b)("a",{parentName:"strong",href:"https://api.feedback.house/api/planning/area/v1/user-add"},"https://api.feedback.house/api/planning/area/v1/user-add"))))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Method"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"POST"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Format"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"JSON"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Idempotent"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"YES"),", using primary keys")))),Object(i.b)("h2",{id:"api-details"},"API details"),Object(i.b)("p",null,"This endpoint will ",Object(i.b)("strong",{parentName:"p"},"add")," existing ",Object(i.b)("inlineCode",{parentName:"p"},"Users")," to existing ",Object(i.b)("inlineCode",{parentName:"p"},"Areas"),". "),Object(i.b)("p",null,"Area is the smallest unit of a group of colleagues working with a single purpose. "),Object(i.b)("p",null,"This API was intentionally designed with idea that it will be able to be called multiple times. So user will be only included to a Area only once, regardless of the number of calls you make to this APIs."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: This API will enforce the payload received. This means that if ",Object(i.b)("inlineCode",{parentName:"p"},"AreaId")," and ",Object(i.b)("inlineCode",{parentName:"p"},"UserId")," are both correct the user will be transferred to the new Area, regardless of any other previous setting.")),Object(i.b)("h3",{id:"batch-operations"},"Batch Operations"),Object(i.b)("p",null,"This endpoint supports ",Object(i.b)("inlineCode",{parentName:"p"},"batch")," operations and as such expects ",Object(i.b)("strong",{parentName:"p"},"an array of areas")," (",Object(i.b)("em",{parentName:"p"},"in the format of an array of objects"),"). "),Object(i.b)("p",null,"Each object must contain the expected user or users to be included. This means that you can use this API to update multiple distinctive areas. This behavior is optional and not required."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    areaUsersAdd: [\n        {\n            "areaId": "997f1f77bcf86cd799439011",\n            "users": ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439012"]\n        },\n        {  \n            "areaId": "997f1f77bcf86cd799439011",\n            "users": ["507f1f77bcf86cd799439014", "507f1f77bcf86cd799439016"] \n        },\n        {\n            "areaId": "997f1f77bcf86cd799439012", \n            "users": ["507f1f77bcf86cd799439011"] \n        },\n        ...\n    ]\n}\n')),Object(i.b)("p",null,"If you need to add just one user you can call the API with just one area in the array object:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    areaUsersAdd: [ \n        { \n            "areaId": "997f1f77bcf86cd799439011", \n            "users": ["507f1f77bcf86cd799412345"]\n        }\n    ]\n}\n')),Object(i.b)("h3",{id:"response-and-error-reporting"},"Response and Error reporting"),Object(i.b)("p",null,"For each request the API will evaluate each ",Object(i.b)("inlineCode",{parentName:"p"},"Area")," individually and will report errors per area. This means that this API can successfully create or update some areas while rejecting others."),Object(i.b)("p",null,"Response example for a request without errors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "message": "Update 10 | Errors 0",\n    "data": [\n        {\n            "areaId": "997f1f77bcf86cd799439011",\n            "users": ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439012"]\n        },\n        {  \n            "areaId": "997f1f77bcf86cd799439011",\n            "users": ["507f1f77bcf86cd799439014", "507f1f77bcf86cd799439016"] \n        },\n        {\n            "areaId": "997f1f77bcf86cd799439012", \n            "users": ["507f1f77bcf86cd799439011"] \n        },\n        ...\n    ],\n    "errors": []\n}\n')),Object(i.b)("p",null,"Response example for a request ",Object(i.b)("strong",{parentName:"p"},"with errors"),". In the example bellow the required field ",Object(i.b)("inlineCode",{parentName:"p"},"users")," field is missing."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "message": "Updated 2 | Errors 1",\n    "errors": [\n        {\n        "object": {\n            "areaID": "997f1f77bcf86cd799439011",\n            ...\n        },\n        "message": "Missing users"\n    }\n}\n')),Object(i.b)("h2",{id:"primary-keys"},"Primary Keys"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"areadId")," field define which ",Object(i.b)("inlineCode",{parentName:"p"},"Areas")," will be updated with new users."),Object(i.b)("p",null,"Primary key fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"areaId")," - The associated unique Id of this Area.")),Object(i.b)("p",null,"Notes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AreaId")," is required, calling this API with ",Object(i.b)("inlineCode",{parentName:"li"},"AreaID")," will result in errors"),Object(i.b)("li",{parentName:"ul"},"Calling a API with the same payload a second time (ie. same keys) will ",Object(i.b)("strong",{parentName:"li"},"not")," duplicate users in the area.")),Object(i.b)("h2",{id:"available-fields-per-area"},"Available Fields per Area"),Object(i.b)("h4",{id:"areaid-areaid"},Object(i.b)("inlineCode",{parentName:"h4"},"areaId")," ","[AreaId]"),Object(i.b)("p",null,"Unique identification number for this Area. "),Object(i.b)("p",null,"This field is required."),Object(i.b)("h4",{id:"users-userid"},Object(i.b)("inlineCode",{parentName:"h4"},"users")," [","[UserId]","]"),Object(i.b)("p",null,"This field defines the ",Object(i.b)("inlineCode",{parentName:"p"},"Users")," that will be included in this Area. "),Object(i.b)("p",null,"This field expects an array of users in the format ",Object(i.b)("inlineCode",{parentName:"p"},'users: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]'),". "))}d.isMDXComponent=!0},90:function(e,a,r){"use strict";r.d(a,"a",(function(){return d})),r.d(a,"b",(function(){return f}));var t=r(0),n=r.n(t);function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){i(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),b=function(e){var a=n.a.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},d=function(e){var a=b(e.components);return n.a.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=b(r),u=t,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return r?n.a.createElement(f,l(l({ref:a},o),{},{components:r})):n.a.createElement(f,l({ref:a},o))}));function f(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);