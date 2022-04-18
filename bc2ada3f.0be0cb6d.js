(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{80:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return b}));var n=t(2),r=t(6),i=(t(0),t(91)),l=["components"],o={id:"api-area-update-or-create",title:"Area API | Update or Create",sidebar_label:"Update or Create"},s={unversionedId:"api/area/api-area-update-or-create",id:"api/area/api-area-update-or-create",isDocsHomePage:!1,title:"Area API | Update or Create",description:"API Summary",source:"@site/docs/api/area/api-area-update-or-create.md",slug:"/api/area/api-area-update-or-create",permalink:"/docs/api/area/api-area-update-or-create",version:"current",sidebar_label:"Update or Create",sidebar:"docs-api",previous:{title:"Area API | GET Data",permalink:"/docs/api/area/api-area-get"},next:{title:"Area API | Add Users to Area",permalink:"/docs/api/area/api-area-user-add"}},p=[{value:"API Summary",id:"api-summary",children:[]},{value:"API details",id:"api-details",children:[{value:"Batch Operations",id:"batch-operations",children:[]},{value:"Response and Error reporting",id:"response-and-error-reporting",children:[]}]},{value:"Idempotent Primary Keys",id:"idempotent-primary-keys",children:[]},{value:"Available Fields per Area",id:"available-fields-per-area",children:[]}],c={rightToc:p};function b(e){var a=e.components,t=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"api-summary"},"API Summary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Endpoint"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},Object(i.b)("a",{parentName:"strong",href:"https://api.feedback.house/api/planning/area/v1/update-or-create"},"https://api.feedback.house/api/planning/area/v1/update-or-create"))))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Method"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"POST"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Format"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"JSON"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Idempotent"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"YES"),", using primary keys")))),Object(i.b)("h2",{id:"api-details"},"API details"),Object(i.b)("p",null,"This endpoint supports creating or updating ",Object(i.b)("inlineCode",{parentName:"p"},"Areas"),". "),Object(i.b)("p",null,"Area is the smallest unit of a group of colleagues working with a single purpose. Traditionally ",Object(i.b)("inlineCode",{parentName:"p"},"Areas")," have a dedicated manager, however the platform supports areas without a manager.  "),Object(i.b)("p",null,"This API was intentionally designed with idea that it will first try find and update existing Areas and only when no existing Area is found a new one will be created. "),Object(i.b)("p",null,"This design allows this API to be regularly be called by your company. With this API you have a single endpoint that can handle multiple scenarios such as: Create new Area, update Area details (name for example), or even disable Area."),Object(i.b)("p",null,"When calling this API must design your code to pass the latest, most updated area information. If an existing Area is found, ",Object(i.b)("em",{parentName:"p"},"using the primary keys"),", the area will be updated. Only when no existing Area is found the API will create a new area."),Object(i.b)("h3",{id:"batch-operations"},"Batch Operations"),Object(i.b)("p",null,"This endpoint supports ",Object(i.b)("inlineCode",{parentName:"p"},"batch")," operations and as such expects ",Object(i.b)("strong",{parentName:"p"},"an array of areas")," (",Object(i.b)("em",{parentName:"p"},"in the format of an array of objects"),"). Each object must contain the Area details:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    areas: [\n     { "name": "Area 1", ... },\n     { "name": "Area 2", "address": "56, 3rd Ave, New York, NY 10003", ... },\n     { "name": "Area 3", "managers": ["507f1f77bcf86cd799439011"], "allowCandidatesApply": true, ... },\n     ...\n    ]\n}\n')),Object(i.b)("p",null,"If you need to create or update just one area you can call the API with just one area in the array object:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'areas: [ { "name": "area 1", "active": true, ... },]\n')),Object(i.b)("h3",{id:"response-and-error-reporting"},"Response and Error reporting"),Object(i.b)("p",null,"For each request the API will evaluate each area individually and will report errors per area. This means that this API can successfully create or update some areas while rejecting others."),Object(i.b)("p",null,"Response example for a request without errors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "message": "Created 10 | Updated 105 | Errors 0",\n    "data": [\n      {  "name": "Area 1", ... },\n      {  "name": "Area 2", ... },\n    ],\n    "errors": []\n}\n')),Object(i.b)("p",null,"Response example for a request ",Object(i.b)("strong",{parentName:"p"},"with errors"),". In the example bellow the ",Object(i.b)("inlineCode",{parentName:"p"},"area")," field was incorrectly set as ",Object(i.b)("inlineCode",{parentName:"p"},"areaname"),", since this field is required the API returned a error for this area."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "message": "Created 3 | Updated 2 | Errors 1",\n    "errors": [\n        {\n        "object": {\n            "name": "Area Name",\n            ...\n        },\n        "message": "Missing name field"\n    }\n}\n')),Object(i.b)("h2",{id:"idempotent-primary-keys"},"Idempotent Primary Keys"),Object(i.b)("p",null,"Primary keys fields define if areas will be updated or created. In simple terms: If one of the primary keys in the area payload is found in the area database the area will be updated. "),Object(i.b)("p",null,"New areas are created only when none of the provided keys is found."),Object(i.b)("p",null,"Primary key fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id")," - The associated unique Id of this Area."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"correlationID")," - The area employeeId in the context of your company. You can use any key here as long you can control it.")),Object(i.b)("p",null,"Notes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Primary keys are not required, however when no primary keys are defined a new area will be created upon each request."),Object(i.b)("li",{parentName:"ul"},"Calling a API with the same payload a second time (ie. same keys) will not create a new area, it will update the previously created area.")),Object(i.b)("h2",{id:"available-fields-per-area"},"Available Fields per Area"),Object(i.b)("p",null,"The only required field is ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and just when the id was not passed. So when is creating a new area, the name will be required; We strongly recommend that you use additional keys to control how areas are created, otherwise this can lead to duplicated areas."),Object(i.b)("h4",{id:"id-areaid"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," ","[AreaId]"),Object(i.b)("p",null,"Unique identification number for this Area. This field is option, if not provided a new unique field will be created.\nThis field is a ",Object(i.b)("em",{parentName:"p"},"primary key")," and should be used whenever this area needs to be updated."),Object(i.b)("h4",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name")," ","[String]"),Object(i.b)("p",null,"The area name. This field is required when id was not provided. "),Object(i.b)("h4",{id:"businessdivision-businessdivisionid"},Object(i.b)("inlineCode",{parentName:"h4"},"businessDivision")," ","[BusinessDivisionID]"),Object(i.b)("p",null,"Business Division that this Area Belongs. "),Object(i.b)("p",null,"Area can only belong to one Business Division. "),Object(i.b)("p",null,"This field is optional"),Object(i.b)("h4",{id:"active-truefalse"},Object(i.b)("inlineCode",{parentName:"h4"},"active")," ","[{",Object(i.b)("inlineCode",{parentName:"h4"},"true"),",",Object(i.b)("inlineCode",{parentName:"h4"},"false"),"}]"),Object(i.b)("p",null,"This field defines if the Area is active or not. Valid options are ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", ",Object(i.b)("inlineCode",{parentName:"p"},"false"),". "),Object(i.b)("p",null,"This field is not required, if not provided defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"active"),"."),Object(i.b)("h4",{id:"parent-areaid"},Object(i.b)("inlineCode",{parentName:"h4"},"parent")," ","[AreaId]"),Object(i.b)("p",null,"Parent Area that this Area belongs to. This allows creating complex hierarquies."),Object(i.b)("p",null,"Needs to be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"AreaId"),"."),Object(i.b)("p",null,"Note the API will test for circlular references, this means that a child cannot be a parent to another area, even in a nested chain."),Object(i.b)("h4",{id:"managers-userid"},Object(i.b)("inlineCode",{parentName:"h4"},"managers")," [","[UserId]","]"),Object(i.b)("p",null,"This field defines the Users that are responsible for this Area. "),Object(i.b)("p",null,"This field expects an array of users in the format ",Object(i.b)("inlineCode",{parentName:"p"},'managers: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]'),". "),Object(i.b)("h4",{id:"allowcandidatesapply-truefalse"},Object(i.b)("inlineCode",{parentName:"h4"},"allowCandidatesApply")," ","[{",Object(i.b)("inlineCode",{parentName:"h4"},"true"),",",Object(i.b)("inlineCode",{parentName:"h4"},"false"),"}]"),Object(i.b)("p",null,"If your company have the ATS module enable it will list this area as public places that candidates can apply to. "),Object(i.b)("p",null,"This field is not required, when not provided defaults ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h4",{id:"tags-string"},Object(i.b)("inlineCode",{parentName:"h4"},"tags")," [","[String]","]"),Object(i.b)("p",null,"Arbitrary tags associated with this Area. "),Object(i.b)("p",null,"Tags can also be expressed in key value format, when using ",Object(i.b)("inlineCode",{parentName:"p"},":"),". Tags that uses the format of ",Object(i.b)("inlineCode",{parentName:"p"},"key:value"),", enhancing reports and statics. Example: ",Object(i.b)("inlineCode",{parentName:"p"},"project:secret"),", ",Object(i.b)("inlineCode",{parentName:"p"},"status:new"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sap:yes")))}b.isMDXComponent=!0},91:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),c=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},b=function(e){var a=c(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(t),u=n,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||i;return t?r.a.createElement(m,o(o({ref:a},p),{},{components:t})):r.a.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);