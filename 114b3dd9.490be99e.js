(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),i=(n(0),n(91)),b=["components"],l={id:"api-user-get",title:"User API | GET Users",sidebar_label:"GET Users"},s={unversionedId:"api/user/api-user-get",id:"api/user/api-user-get",isDocsHomePage:!1,title:"User API | GET Users",description:"API Summary",source:"@site/docs/api/user/api-user-get.md",slug:"/api/user/api-user-get",permalink:"/developer-portal/docs/api/user/api-user-get",version:"current",sidebar_label:"GET Users",sidebar:"docs-api",previous:{title:"API List",permalink:"/developer-portal/docs/api-list"},next:{title:"User API | GET User Data",permalink:"/developer-portal/docs/api/user/api-user-get-id"}},o=[{value:"API Summary",id:"api-summary",children:[]},{value:"API Pagination",id:"api-pagination",children:[{value:"Iterative",id:"iterative",children:[]},{value:"Informative",id:"informative",children:[]}]},{value:"API details",id:"api-details",children:[{value:"Response",id:"response",children:[]},{value:"Error reporting",id:"error-reporting",children:[]}]},{value:"Response Fields for each User",id:"response-fields-for-each-user",children:[]}],p={rightToc:o};function c(e){var t=e.components,n=Object(r.a)(e,b);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"api-summary"},"API Summary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Endpoint"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},Object(i.b)("a",{parentName:"strong",href:"https://api.feedback.house/api/common/user/v1/users"},"https://api.feedback.house/api/common/user/v1/users"))))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Method"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"GET"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Format"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"JSON"))))),Object(i.b)("h2",{id:"api-pagination"},"API Pagination"),Object(i.b)("p",null,"This api always return a object that contains pagination information like those below. This object will have fields iterative and informative.\nIf you don't pass values for ",Object(i.b)("inlineCode",{parentName:"p"},"skip")," or ",Object(i.b)("inlineCode",{parentName:"p"},"limit"),", it will assume ",Object(i.b)("inlineCode",{parentName:"p"},"skip: 0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"limit: 100")," by default."),Object(i.b)("h3",{id:"iterative"},"Iterative"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"skip"),Object(i.b)("td",{parentName:"tr",align:null},"Specify a number for record return")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"limit"),Object(i.b)("td",{parentName:"tr",align:null},"Specify a threshold for record return")))),Object(i.b)("h3",{id:"informative"},"Informative"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"totalCount"),Object(i.b)("td",{parentName:"tr",align:null},"Total count of records")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"hasPreviousPage"),Object(i.b)("td",{parentName:"tr",align:null},"If has a previous page of records")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"hasNextPage"),Object(i.b)("td",{parentName:"tr",align:null},"If has a next page of records")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "pageInfo": Object {\n    "hasNextPage": false,\n    "hasPreviousPage": false,\n    "limit": 100,\n    "skip": 0,\n    "totalCount": 7,\n  },\n')),Object(i.b)("h2",{id:"api-details"},"API details"),Object(i.b)("p",null,"This endpoint allows querying and retrieving ",Object(i.b)("inlineCode",{parentName:"p"},"user")," data."),Object(i.b)("p",null,"Given the size of your company you may need to paginate this API in other to retrive all resources."),Object(i.b)("h3",{id:"response"},"Response"),Object(i.b)("p",null,"This API will return multiple ",Object(i.b)("inlineCode",{parentName:"p"},"users")," in ",Object(i.b)("strong",{parentName:"p"},"an array of users")," (",Object(i.b)("em",{parentName:"p"},"in the format of an array of objects"),")."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    users: [\n         { "name": "User 1", "emails": ["user1@yourcompany.com"], ... },\n         { "name": "User 2", "emails": ["user2@yourcompany.com","anotheru@company.com"], ... },\n         { "name": "User 3", "emails": ["user3@yourcompany.com"], "gender": "MALE", ... },\n         ...\n    ]\n}\n')),Object(i.b)("p",null,"When no users are found the array will be empty"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},"{\n  users: []\n}\n")),Object(i.b)("h3",{id:"error-reporting"},"Error reporting"),Object(i.b)("p",null,"Example for a response with errors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "ERROR",\n  "message": "Invalid search query"\n}\n')),Object(i.b)("h2",{id:"response-fields-for-each-user"},"Response Fields for each User"),Object(i.b)("h4",{id:"id-unique"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," ","[Unique]"),Object(i.b)("p",null,"Unique ID for this user. This field is a ",Object(i.b)("em",{parentName:"p"},"primary key")," and should be used whenever this user needs to be updated."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This field can and should be used as ",Object(i.b)("strong",{parentName:"p"},"primary key")," to detect if users will be created or updated when using the Update or create API ",Object(i.b)("a",{parentName:"p",href:"./api-user-update-or-create"},"User Update or Create"))),Object(i.b)("h4",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name")," ","[String]"),Object(i.b)("p",null,"The user full name. This field is required."),Object(i.b)("h4",{id:"emails-string"},Object(i.b)("inlineCode",{parentName:"h4"},"emails")," [","[String]","]"),Object(i.b)("p",null,"Emails associated with this user. Users can have multiple emails. This field expects an array in the format ",Object(i.b)("inlineCode",{parentName:"p"},'emails: ["email1@yourcompany.com","email2@yourcompany.com"]'),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This field can and should be used as ",Object(i.b)("strong",{parentName:"p"},"primary key")," to detect if users will be created or updated when using the Update or create API ",Object(i.b)("a",{parentName:"p",href:"./api-user-update-or-create"},"User Update or Create"))),Object(i.b)("h4",{id:"title-string"},Object(i.b)("inlineCode",{parentName:"h4"},"title")," ","[String]"),Object(i.b)("p",null,"The user job post title."),Object(i.b)("h4",{id:"active-truefalse"},Object(i.b)("inlineCode",{parentName:"h4"},"active")," ","[{",Object(i.b)("inlineCode",{parentName:"h4"},"true"),",",Object(i.b)("inlineCode",{parentName:"h4"},"false"),"}]"),Object(i.b)("p",null,"This field defines if the user is active or not. Valid options are ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("p",null,"This field is not required, if not provided it will be set to ",Object(i.b)("inlineCode",{parentName:"p"},"active"),"."),Object(i.b)("h4",{id:"groups-groupid"},Object(i.b)("inlineCode",{parentName:"h4"},"groups")," [","[GroupId]","]"),Object(i.b)("p",null,"Groups that this user belongs to.\nThis field expects an array in the format ",Object(i.b)("inlineCode",{parentName:"p"},'groups: ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439011"]'),"."),Object(i.b)("p",null,"Needs to be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"GroupID")),Object(i.b)("h4",{id:"businessdivision-businessdivisionid"},Object(i.b)("inlineCode",{parentName:"h4"},"businessDivision")," ","[BusinessDivisionID]"),Object(i.b)("p",null,"This field defines the Business Division of user. This needs to be a valid Business Division ID."),Object(i.b)("h4",{id:"manager-userid"},Object(i.b)("inlineCode",{parentName:"h4"},"manager")," ","[UserId]"),Object(i.b)("p",null,"This field defines the user manager."),Object(i.b)("p",null,"For each request the API will attempt to find the manager using the provided key."),Object(i.b)("h4",{id:"phonenumbers-string"},Object(i.b)("inlineCode",{parentName:"h4"},"phoneNumbers")," [","[String]","]"),Object(i.b)("p",null,"This field defines phones number for this user."),Object(i.b)("p",null,"This field expects an array of strings in the format ",Object(i.b)("inlineCode",{parentName:"p"},'phoneNumbers: ["+55 11 976231232", "11 9999999999", "999999999"]'),"."),Object(i.b)("p",null,"Note: Phone number logic is not strictly enforced. This API will try, in a best effort basis, format numbers to appropriate values."),Object(i.b)("h4",{id:"birthdate"},Object(i.b)("inlineCode",{parentName:"h4"},"birthDate")),Object(i.b)("p",null,"This field defines the user birth date, format is ",Object(i.b)("inlineCode",{parentName:"p"},"YYYY/MM/DD"),"."),Object(i.b)("h4",{id:"admissiondate"},Object(i.b)("inlineCode",{parentName:"h4"},"admissionDate")),Object(i.b)("p",null,"This field defines de user admission date, format is ",Object(i.b)("inlineCode",{parentName:"p"},"YYYY/MM/DD"),"."),Object(i.b)("h4",{id:"demissiondate"},Object(i.b)("inlineCode",{parentName:"h4"},"demissionDate")),Object(i.b)("p",null,"This field defines date when the user left the company."),Object(i.b)("h4",{id:"area-areaid"},Object(i.b)("inlineCode",{parentName:"h4"},"area")," ","[AreaId]"),Object(i.b)("p",null,"This field defines the Area that this user belongs. This fields expects a valid ",Object(i.b)("inlineCode",{parentName:"p"},"AreaID")),Object(i.b)("h4",{id:"gender-malefemaleother"},Object(i.b)("inlineCode",{parentName:"h4"},"gender")," ","[{",Object(i.b)("inlineCode",{parentName:"h4"},"MALE"),",",Object(i.b)("inlineCode",{parentName:"h4"},"FEMALE"),",",Object(i.b)("inlineCode",{parentName:"h4"},"OTHER"),"}]"),Object(i.b)("p",null,"Gender of the user. Valid options are ",Object(i.b)("inlineCode",{parentName:"p"},"MALE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"FEMALE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"OTHER"),"."),Object(i.b)("p",null,"This field is not required, however when not provided it will be defined to a internal ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," valid."),Object(i.b)("h4",{id:"tags-string"},Object(i.b)("inlineCode",{parentName:"h4"},"tags")," [","[String]","]"),Object(i.b)("p",null,"Arbitrary tags associated with this user."),Object(i.b)("p",null,"Tags can also be expressed in key value format, when using ",Object(i.b)("inlineCode",{parentName:"p"},":"),". Tags that uses the format of ",Object(i.b)("inlineCode",{parentName:"p"},"key:value"),", enhancing reports and statics. Example: ",Object(i.b)("inlineCode",{parentName:"p"},"project:secret"),", ",Object(i.b)("inlineCode",{parentName:"p"},"status:new"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sapuser:yes")))}c.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,m=c["".concat(b,".").concat(u)]||c[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);