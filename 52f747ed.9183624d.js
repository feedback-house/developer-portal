(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),l=n(97),o=n.n(l),s=n(92),c=n(129),g=n.n(c),u=n(130),m=n.n(u),d=n(323),h=n(342),p=n(324),f=n.n(p),v=n(30),E=n.n(v),k=n(325),b=n.n(k),y=n(114),w=n.n(y);var A=function(e,t){var n=e.renderer.rules.heading_open;e.renderer.rules.heading_open=function(e,a,r,i){i.slugger||(i.slugger=new w.a);var l=i.slugger,o=e[a+1];if(o.content){var s=function(e,t){return void 0===t&&(t=new w.a),t.slug(e)}(t&&"function"==typeof t?t(o.content):o.content,l);return"<h"+e[a].hLevel+'><a class="anchor" aria-hidden="true" id="'+s+'"></a><a href="#'+s+'" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>'}return n(e,a,r,i)}},C={js:"jsx",html:"markup",sh:"bash",md:"markdown"},O=function(){function e(e){var t={langPrefix:"hljs css language-",highlight:function(t,n){if(e.highlight&&e.highlight.hljs&&e.highlight.hljs(m.a),"text"===(n=n||e.highlight&&e.highlight.defaultLang))return t;if(n)try{if(!0===e.usePrism||e.usePrism&&e.usePrism.length>0&&-1!==e.usePrism.indexOf(n)){var a=C[n]||n;try{return E()([a]),f.a.highlight(t,f.a.languages[a],a)}catch(i){if("MODULE_NOT_FOUND"===i.code){var r=b.a.yellow("Warning: "+b.a.red(a)+" is not supported by prismjs.\nPlease refer to https://prismjs.com/#languages-list for the list of supported languages.");console.log(r)}else console.error(i)}}if(m.a.getLanguage(n))return m.a.highlight(n,t).value}catch(i){console.error(i)}try{return m.a.highlightAuto(t).value}catch(i){console.error(i)}return""},html:!0};e.markdownOptions&&(t=g.a.merge({},t,e.markdownOptions));var n=new d.a(t);n.use(A,e.slugPreprocessor),n.use(h.a),e.markdownPlugins&&e.markdownPlugins.forEach((function(e){n.use(e)})),this.md=n}return e.prototype.toHtml=function(e){return this.md.render(e).replace(/<pre><code>/g,'<pre><code class="hljs">')},e}(),B=null,N=function(e,t){B||(B=new O(e)),B.toHtml(t)},S=function(e){var t=Object(s.a)().siteConfig,n=e.container;return r.a.createElement(n,null,e.source?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:N(t,e.source)}}):r.a.Children.map(e.children,(function(e){return"string"==typeof e?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:N(t,e)}}):e})))};S.defaultProps={container:"div"};var P=S,j=function(e){return r.a.createElement(P,{source:e.children})},_=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.renderBlock=function(e){var t=Object.assign({},{imageAlign:"left"},e),n=o()("blockElement",this.props.className,{alignCenter:"center"===this.props.align,alignRight:"right"===this.props.align,fourByGridBlock:"fourColumn"===this.props.layout,imageAlignSide:t.image&&("left"===t.imageAlign||"right"===t.imageAlign),imageAlignTop:t.image&&"top"===t.imageAlign,imageAlignRight:t.image&&"right"===t.imageAlign,imageAlignBottom:t.image&&"bottom"===t.imageAlign,imageAlignLeft:t.image&&"left"===t.imageAlign,threeByGridBlock:"threeColumn"===this.props.layout,twoByGridBlock:"twoColumn"===this.props.layout}),a=("top"===t.imageAlign||"left"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt),i=("bottom"===t.imageAlign||"right"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt);return r.a.createElement("div",{className:n,key:t.title},a,r.a.createElement("div",{className:"blockContent"},this.renderBlockTitle(t.title),r.a.createElement(j,null,t.content)),i)},n.renderBlockImage=function(e,t,n){return e?r.a.createElement("div",{className:"blockImage"},t?r.a.createElement("a",{href:t},r.a.createElement("img",{src:e,alt:n})):r.a.createElement("img",{src:e,alt:n})):null},n.renderBlockTitle=function(e){return e?r.a.createElement("h2",null,r.a.createElement(j,null,e)):null},n.render=function(){return r.a.createElement("div",{className:"gridBlock"},this.props.contents.map(this.renderBlock,this))},t}(r.a.Component);_.defaultProps={align:"left",contents:[],layout:"twoColumn"};var I=_,x=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e,t=o()("container",this.props.className,{darkBackground:"dark"===this.props.background,highlightBackground:"highlight"===this.props.background,lightBackground:"light"===this.props.background,paddingAll:this.props.padding.indexOf("all")>=0,paddingBottom:this.props.padding.indexOf("bottom")>=0,paddingLeft:this.props.padding.indexOf("left")>=0,paddingRight:this.props.padding.indexOf("right")>=0,paddingTop:this.props.padding.indexOf("top")>=0});return e=this.props.wrapper?r.a.createElement("div",{className:"wrapper"},this.props.children):this.props.children,r.a.createElement("div",{className:t,id:this.props.id},e)},t}(r.a.Component);x.defaultProps={background:null,padding:[],wrapper:!0};var L=x,H=function(e){var t=Object(s.a)().siteConfig,n=e.language,a=void 0===n?"":n,i=t.baseUrl,l=t.docsUrl,o=l?l+"/":"",c=a?a+"/":"",g=function(e){return""+i+o+c+e},u=function(e){return r.a.createElement("div",{className:"homeContainer"},r.a.createElement("div",{className:"homeSplashFade"},r.a.createElement("div",{className:"wrapper homeWrapper"},e.children)))},m=function(){return r.a.createElement("h2",{className:"projectTitle"},t.title,r.a.createElement("small",null,t.tagline))},d=function(e){return r.a.createElement("div",{className:"section promoSection"},r.a.createElement("div",{className:"promoRow"},r.a.createElement("div",{className:"pluginRowBlock"},e.children)))},h=function(e){return r.a.createElement("div",{className:"pluginWrapper buttonWrapper"},r.a.createElement("a",{className:"button",href:e.href,target:e.target},e.children))};return r.a.createElement(u,null,r.a.createElement("div",{className:"inner"},r.a.createElement(m,{siteConfig:t}),r.a.createElement(d,null,r.a.createElement(h,{href:g("getting-started.html")},"Getting Started"),r.a.createElement(h,{href:g("single-sign-on-getting-started.html")},"Single Sign On"),r.a.createElement(h,{href:g("api-getting-started.html")},"API Documentation"))))};t.default=function(e){var t=e.language,n=void 0===t?"":t,a=Object(s.a)().siteConfig,i=a.baseUrl,l=function(e){return r.a.createElement(L,{padding:["bottom","top"],id:e.id,background:e.background},r.a.createElement(I,{align:"center",contents:e.children,layout:e.layout}))},o=function(){return r.a.createElement(l,{id:"try"},[{content:"Developers can leverage multiple APIs to automate the user life cycle.</br></br>Check API Documentation [**API Getting Started**](/docs/api-getting-started)",image:i+"img/undraw_code_review.svg",imageAlign:"left",title:"API Integration"}])},c=function(){return r.a.createElement(l,{background:"dark"},[{content:"Create and integrate your own modules into the Feedback House platform.</br></br>Access millions of users and benefit from a fully engagement ecosystem.",image:i+"img/undraw_note_list.svg",imageAlign:"right",title:"Coming soon! Create your Own Modules"}])},g=function(){return r.a.createElement(l,{background:"light"},[{content:"Single Sign On is an important security feature that automatically authenticate your users using credentials from your company.</br></br>Feedback House supports multiple login strategies, that can be even used simultaneously.</br></br>Check the [**Single Sign On**](/docs/single-sign-on-getting-started.html) documentation.",image:i+"img/undraw_youtube_tutorial.svg",imageAlign:"right",title:"Single Sign On"}])};return r.a.createElement("div",null,r.a.createElement(H,{siteConfig:a,language:n}),r.a.createElement("div",{className:"mainContainer"},r.a.createElement(g,null),r.a.createElement(o,null),r.a.createElement(c,null)))}}}]);