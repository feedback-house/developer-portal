(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return o})),n.d(i,"metadata",(function(){return b})),n.d(i,"rightToc",(function(){return l})),n.d(i,"default",(function(){return d}));var s=n(2),t=n(6),r=(n(0),n(90)),a=["components"],o={id:"api-business-division-user-add",title:"Business Division API | Add Users to Business Division",sidebar_label:"Add Users to Business Division"},b={unversionedId:"api/business-division/api-business-division-user-add",id:"api/business-division/api-business-division-user-add",isDocsHomePage:!1,title:"Business Division API | Add Users to Business Division",description:"API Summary",source:"@site/docs/api/business-division/api-business-division-user-add.md",slug:"/api/business-division/api-business-division-user-add",permalink:"/docs/api/business-division/api-business-division-user-add",version:"current",sidebar_label:"Add Users to Business Division",sidebar:"docs-api",previous:{title:"Business Division API | Update or Create",permalink:"/docs/api/business-division/api-business-division-update-or-create"},next:{title:"Business Division API | Remove Users from Business Division",permalink:"/docs/api/business-division/api-business-division-user-remove"}},l=[{value:"API Summary",id:"api-summary",children:[]},{value:"API details",id:"api-details",children:[{value:"Batch Operations",id:"batch-operations",children:[]},{value:"Response and Error reporting",id:"response-and-error-reporting",children:[]}]},{value:"Primary Keys",id:"primary-keys",children:[]},{value:"Available Fields per Business Division",id:"available-fields-per-business-division",children:[]}],u={rightToc:l};function d(e){var i=e.components,n=Object(t.a)(e,a);return Object(r.b)("wrapper",Object(s.a)({},u,n,{components:i,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"api-summary"},"API Summary"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Endpoint"),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},Object(r.b)("a",{parentName:"strong",href:"https://api.feedback.house/api/planning/business-division/v1/user-add"},"https://api.feedback.house/api/planning/business-division/v1/user-add"))))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Method"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"POST"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Format"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"JSON"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Idempotent"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"YES"),", using primary keys")))),Object(r.b)("h2",{id:"api-details"},"API details"),Object(r.b)("p",null,"This endpoint will ",Object(r.b)("strong",{parentName:"p"},"add")," existing ",Object(r.b)("inlineCode",{parentName:"p"},"Users")," to existing ",Object(r.b)("inlineCode",{parentName:"p"},"Business Divisions"),". "),Object(r.b)("p",null,"This API was intentionally designed with idea that it will be able to be called multiple times. So user will be only included to the Business Division only once, regardless of the number of calls you make to this APIs."),Object(r.b)("h3",{id:"batch-operations"},"Batch Operations"),Object(r.b)("p",null,"This endpoint supports ",Object(r.b)("inlineCode",{parentName:"p"},"batch")," operations and as such expects ",Object(r.b)("strong",{parentName:"p"},"an array of business division")," (",Object(r.b)("em",{parentName:"p"},"in the format of an array of objects"),"). "),Object(r.b)("p",null,"Each object must contain the expected user or users to be included. This means that you can use this API to update multiple distinctive Business Division. This behavior is optional and not required."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    businessDivisionUsersAdd: [\n     { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439012"] },\n     { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439014","507f1f77bcf86cd799439016"] },\n     { "businessDivisionId": "997f1f77bcf86cd799439012", "users": ["507f1f77bcf86cd799439011"] },\n     ...\n    ]\n}\n')),Object(r.b)("p",null,"If you need to add just one user you can call the API with just one Business Division in the array object:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  businesDivisionUsersAdd: [ { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011"] },]\n}\n')),Object(r.b)("h3",{id:"response-and-error-reporting"},"Response and Error reporting"),Object(r.b)("p",null,"For each request the API will evaluate each ",Object(r.b)("inlineCode",{parentName:"p"},"Business Divisions")," individually and will report errors per business division. This means that this API can successfully create or update some Business Division while rejecting others."),Object(r.b)("p",null,"Response example for a request without errors:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "message": "Update 10 | Errors 0",\n    "errors": []\n}\n')),Object(r.b)("p",null,"Response example for a request ",Object(r.b)("strong",{parentName:"p"},"with errors"),". In the example bellow the required field ",Object(r.b)("inlineCode",{parentName:"p"},"users")," field is missing."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "message": "Updated 2 | Errors 1",\n    "errors": [\n        {\n        "object": {\n            "businessDivisionId": "997f1f77bcf86cd799439011",\n            ...\n        },\n        "message": "Missing users field"\n    }\n}\n')),Object(r.b)("h2",{id:"primary-keys"},"Primary Keys"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"businessDivisionId")," field define which ",Object(r.b)("inlineCode",{parentName:"p"},"Business Divisions")," will be updated with new users."),Object(r.b)("p",null,"Primary key fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"businessDivisionId")," - The associated unique Id of this Business Division.")),Object(r.b)("p",null,"Notes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"businessDivisionId")," is required, calling this API without ",Object(r.b)("inlineCode",{parentName:"li"},"businessDivisionId")," will result in errors"),Object(r.b)("li",{parentName:"ul"},"Calling a API with the same payload a second time (ie. same keys) will ",Object(r.b)("strong",{parentName:"li"},"not")," duplicate users in the Business Division.")),Object(r.b)("h2",{id:"available-fields-per-business-division"},"Available Fields per Business Division"),Object(r.b)("h4",{id:"businessdivisionid-businessdivisionid"},Object(r.b)("inlineCode",{parentName:"h4"},"businessDivisionId")," ","[businessDivisionId]"),Object(r.b)("p",null,"Unique identification number for this Business Division. "),Object(r.b)("p",null,"This field is required."),Object(r.b)("h4",{id:"users-userid"},Object(r.b)("inlineCode",{parentName:"h4"},"users")," [","[UserId]","]"),Object(r.b)("p",null,"This field defines the ",Object(r.b)("inlineCode",{parentName:"p"},"Users")," that will be included in this Business Division. "),Object(r.b)("p",null,"This field expects an array of users in the format ",Object(r.b)("inlineCode",{parentName:"p"},'users: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]'),". "))}d.isMDXComponent=!0},90:function(e,i,n){"use strict";n.d(i,"a",(function(){return d})),n.d(i,"b",(function(){return m}));var s=n(0),t=n.n(s);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function a(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?a(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function b(e,i){if(null==e)return{};var n,s,t=function(e,i){if(null==e)return{};var n,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=t.a.createContext({}),u=function(e){var i=t.a.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},d=function(e){var i=u(e.components);return t.a.createElement(l.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return t.a.createElement(t.a.Fragment,{},i)}},p=t.a.forwardRef((function(e,i){var n=e.components,s=e.mdxType,r=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=u(n),p=s,m=d["".concat(a,".").concat(p)]||d[p]||c[p]||r;return n?t.a.createElement(m,o(o({ref:i},l),{},{components:n})):t.a.createElement(m,o({ref:i},l))}));function m(e,i){var n=arguments,s=i&&i.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=p;var o={};for(var b in i)hasOwnProperty.call(i,b)&&(o[b]=i[b]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<r;l++)a[l]=n[l];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);