(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{72:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return o})),n.d(i,"metadata",(function(){return l})),n.d(i,"rightToc",(function(){return d})),n.d(i,"default",(function(){return b}));var s=n(2),t=n(6),a=(n(0),n(91)),r=["components"],o={id:"api-business-division-update-or-create",title:"Business Division API | Update or Create",sidebar_label:"Update or Create"},l={unversionedId:"api/business-division/api-business-division-update-or-create",id:"api/business-division/api-business-division-update-or-create",isDocsHomePage:!1,title:"Business Division API | Update or Create",description:"API Summary",source:"@site/docs/api/business-division/api-business-division-update-or-create.md",slug:"/api/business-division/api-business-division-update-or-create",permalink:"/developer-portal/docs/api/business-division/api-business-division-update-or-create",version:"current",sidebar_label:"Update or Create",sidebar:"docs-api",previous:{title:"Business Division API | GET Business Division",permalink:"/developer-portal/docs/api/business-division/api-business-division-get-id"},next:{title:"Business Division API | Add Users to Business Division",permalink:"/developer-portal/docs/api/business-division/api-business-division-user-add"}},d=[{value:"API Summary",id:"api-summary",children:[]},{value:"API details",id:"api-details",children:[{value:"Batch Operations",id:"batch-operations",children:[]},{value:"Response and Error reporting",id:"response-and-error-reporting",children:[]}]},{value:"Idempotency Primary Keys",id:"idempotency-primary-keys",children:[]},{value:"Available Fields per Business Division",id:"available-fields-per-business-division",children:[]}],u={rightToc:d};function b(e){var i=e.components,n=Object(t.a)(e,r);return Object(a.b)("wrapper",Object(s.a)({},u,n,{components:i,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"api-summary"},"API Summary"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Endpoint"),Object(a.b)("th",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"th"},Object(a.b)("a",{parentName:"strong",href:"https://api.feedback.house/api/planning/business-division/v1/update-or-create"},"https://api.feedback.house/api/planning/business-division/v1/update-or-create"))))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Method"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},"POST"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Format"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},"JSON"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Idempotent"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},"YES"),", using primary keys")))),Object(a.b)("h2",{id:"api-details"},"API details"),Object(a.b)("p",null,"This endpoint supports creating or updating Business Divisions. This API was intentionally designed with idea that it will first try find and update existing Business Divisions and only when no existing Business Division is found a new one will be created. "),Object(a.b)("p",null,"This design allows this API to be regularly be called by your company. With this API you have a single endpoint that can handle multiple scenarios such as: Create new Business Division, update Business Division details (name for example), or even disable existing Business Division."),Object(a.b)("p",null,"When calling this API must design your code to pass the latest, most recent business division information. If an existing Business Division is found, ",Object(a.b)("em",{parentName:"p"},"using the primary keys"),", the business division will be updated. Only when no existing Business Division is found the API will create a new business division."),Object(a.b)("h3",{id:"batch-operations"},"Batch Operations"),Object(a.b)("p",null,"This endpoint supports ",Object(a.b)("inlineCode",{parentName:"p"},"batch")," operations and as such expects ",Object(a.b)("strong",{parentName:"p"},"an array of business divisions")," (",Object(a.b)("em",{parentName:"p"},"in the format of an array of objects"),"). Each object must contain the Business Division details:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    businessDivisions: [\n     { "name": "Business Division 1", ... },\n     { "name": "Business Division 2", "address": "56, 3rd Ave, New York, NY 10003", ... },\n     { "name": "Business Division 3", "managers": ["507f1f77bcf86cd799439011"], "allowCandidatesApply": true, ... },\n     ...\n    ]\n}\n')),Object(a.b)("p",null,"If you need to create or update just one business division you can call the API with just one business division in the array object:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  businessDivisions: [ { "name": "business division 1", "active": true, ... },]\n}\n')),Object(a.b)("h3",{id:"response-and-error-reporting"},"Response and Error reporting"),Object(a.b)("p",null,"For each request the API will evaluate each business division individually and will report errors per business division. This means that this API can successfully create or update some business divisions while rejecting others."),Object(a.b)("p",null,"Response example for a request without errors:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "message": "Created 10 | Updated 105 | Errors 0",\n    "errors": []\n}\n')),Object(a.b)("p",null,"Response example for a request ",Object(a.b)("strong",{parentName:"p"},"with errors"),". In the example bellow the ",Object(a.b)("inlineCode",{parentName:"p"},"business division")," field was incorrectly set as ",Object(a.b)("inlineCode",{parentName:"p"},"businessDivisionName"),", since this field is required the API returned a error for this business division."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "message": "Created 3 | Updated 2 | Errors 1",\n    "errors": [\n        {\n        "object": {\n            "businessDivisionName": "Business Division Name",\n            ...\n        },\n        "message": "Missing name field"\n    }\n}\n')),Object(a.b)("h2",{id:"idempotency-primary-keys"},"Idempotency Primary Keys"),Object(a.b)("p",null,"Primay keys fields define if business divisions will be updated or created. In simple terms: If one of the primary keys in the business division payload is found in the business division database the business division will be updated. "),Object(a.b)("p",null,"New business divisions are created only when none of the provided keys is found."),Object(a.b)("p",null,"Primary key fields:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"businessDivisionId")," - The associated unique Id of this Business Division."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"correlationId")," - The business division employeeId in the context of your company. You can use any key here as long you can control it.")),Object(a.b)("p",null,"Notes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Primary keys are not required, however when no primary keys are defined a new business division will be created upon each request."),Object(a.b)("li",{parentName:"ul"},"Calling a API with the same payload a second time (ie. same keys) will not create a new business division, it will update the previously created business division.")),Object(a.b)("h2",{id:"available-fields-per-business-division"},"Available Fields per Business Division"),Object(a.b)("p",null,"The only required fields are ",Object(a.b)("inlineCode",{parentName:"p"},"name")," and one of the primary key fields; We strongly recommend that you use additional keys to control how business divisions are created, otherwise this can lead to duplicated business divisions."),Object(a.b)("h4",{id:"id-business-divisionid"},Object(a.b)("inlineCode",{parentName:"h4"},"id")," ","[Business DivisionId]"),Object(a.b)("p",null,"Unique identifcation number for this Business Division. This field is option, if not provied a new unique field will be created.\nThis field is a ",Object(a.b)("em",{parentName:"p"},"primary key")," and should be used whenever this business division needs to be updated."),Object(a.b)("h4",{id:"correlationid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"correlationId")," ","[String]"),Object(a.b)("p",null,"The business division employeeId in the context of your company. You can use any key here as long you can control it."),Object(a.b)("h4",{id:"name-string"},Object(a.b)("inlineCode",{parentName:"h4"},"name")," ","[String]"),Object(a.b)("p",null,"The business division name. This field is required.  "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This field will also be used as ",Object(a.b)("strong",{parentName:"p"},"primary key")," to detect if business divisions will be created or updated.")))}b.isMDXComponent=!0},91:function(e,i,n){"use strict";n.d(i,"a",(function(){return b})),n.d(i,"b",(function(){return m}));var s=n(0),t=n.n(s);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,s,t=function(e,i){if(null==e)return{};var n,s,t={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=t.a.createContext({}),u=function(e){var i=t.a.useContext(d),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},b=function(e){var i=u(e.components);return t.a.createElement(d.Provider,{value:i},e.children)},p={inlineCode:"code",wrapper:function(e){var i=e.children;return t.a.createElement(t.a.Fragment,{},i)}},c=t.a.forwardRef((function(e,i){var n=e.components,s=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=u(n),c=s,m=b["".concat(r,".").concat(c)]||b[c]||p[c]||a;return n?t.a.createElement(m,o(o({ref:i},d),{},{components:n})):t.a.createElement(m,o({ref:i},d))}));function m(e,i){var n=arguments,s=i&&i.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=c;var o={};for(var l in i)hasOwnProperty.call(i,l)&&(o[l]=i[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var d=2;d<a;d++)r[d]=n[d];return t.a.createElement.apply(null,r)}return t.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);