"use strict";(self.webpackChunkcondmat_notes=self.webpackChunkcondmat_notes||[]).push([["5230"],{3115:function(e,t,r){r.d(t,{c:function(){return o}});var a=r(7294),n=r(2933);let s=["zero","one","two","few","many","other"];function l(e){return s.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'.concat(e,'".\nDocusaurus will fallback to the default (English) implementation.\nError: ').concat(t.message,"\n")),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error("For locale=".concat(r.locale,", a maximum of ").concat(r.pluralForms.length," plural forms are expected (").concat(r.pluralForms.join(","),"), but the message contains ").concat(a.length,": ").concat(e));let n=r.select(t);return a[Math.min(r.pluralForms.indexOf(n),a.length-1)]})(r,t,e)}}},9245:function(e,t,r){r.r(t),r.d(t,{default:()=>_});var a=r("5893"),n=r("7294"),s=r("2933"),l=r("2922"),c=r("4819"),o=r("3012"),u=r("6025"),h=r("3115"),i=r("1728"),m=r("6550"),d=r("7227"),p=r("322");let g=function(){let e=(0,d.Z)(),t=(0,m.k6)(),r=(0,m.TH)(),{siteConfig:{baseUrl:a}}=(0,s.Z)(),n=e?new URLSearchParams(r.search):null,l=(null==n?void 0:n.get("q"))||"",c=(null==n?void 0:n.get("ctx"))||"",o=(null==n?void 0:n.get("version"))||"",u=e=>{let t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:l,searchContext:c&&Array.isArray(p.Kc)&&p.Kc.some(e=>"string"==typeof e?e===c:e.path===c)?c:"",searchVersion:o,updateSearchPath:e=>{let r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{let a=new URLSearchParams(r.search);a.set("ctx",e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{let t=u(e);return"".concat(a,"search?").concat(t.toString())}}};var f=r("9235"),x=r("5528"),y=r("5658"),j=r("6810"),C=r("7303"),S=r("5792"),v=r("7591");let I={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var w=r("4969");function P(){let{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,s.Z)(),{selectMessage:r}=(0,h.c)(),{searchValue:l,searchContext:o,searchVersion:m,updateSearchPath:d,updateSearchContext:x}=g(),[y,j]=(0,n.useState)(l),[C,v]=(0,n.useState)(),P="".concat(e).concat(m),_=(0,n.useMemo)(()=>y?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"}),[y]);(0,n.useEffect)(()=>{d(y),y?(async()=>{v(await (0,f.a)(P,o,y))})():v(void 0)},[y,P,o]);let F=(0,n.useCallback)(e=>{j(e.target.value)},[]);(0,n.useEffect)(()=>{l&&l!==y&&j(l)},[l]);let[A,b]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{(async function e(){(!Array.isArray(p.Kc)||o||p.pQ)&&await (0,f.r)(P,o),b(!0)})()},[o,P]),(0,a.jsxs)(n.Fragment,{children:[(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,a.jsx)("title",{children:_})]}),(0,a.jsxs)("div",{className:"container margin-vert--lg",children:[(0,a.jsx)("h1",{children:_}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:(0,i.Z)("col",{[I.searchQueryColumn]:Array.isArray(p.Kc),"col--9":Array.isArray(p.Kc),"col--12":!Array.isArray(p.Kc)}),children:(0,a.jsx)("input",{type:"search",name:"q",className:I.searchQueryInput,"aria-label":"Search",onChange:F,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(p.Kc)?(0,a.jsx)("div",{className:(0,i.Z)("col","col--3","padding-left--none",I.searchContextColumn),children:(0,a.jsxs)("select",{name:"search-context",className:I.searchContextInput,id:"context-selector",value:o,onChange:e=>x(e.target.value),children:[p.pQ&&(0,a.jsx)("option",{value:"",children:(0,u.I)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),p.Kc.map(e=>{let{label:r,path:n}=(0,w._)(e,t);return(0,a.jsx)("option",{value:n,children:r},n)})]})}):null]}),!A&&y&&(0,a.jsx)("div",{children:(0,a.jsx)(S.Z,{})}),C&&(C.length>0?(0,a.jsx)("p",{children:r(C.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))}):(0,a.jsx)("p",{children:(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,a.jsx)("section",{children:C&&C.map(e=>(0,a.jsx)(R,{searchResult:e},e.document.i))})]})]})}function R(e){let{searchResult:{document:t,type:r,page:n,tokens:s,metadata:l}}=e,c=r===x.P.Title,u=r===x.P.Keywords,h=r===x.P.Description,i=h||u,m=c||i,d=r===x.P.Content,g=(c?t.b:n.b).slice(),f=d||i?t.s:t.t;!m&&g.push(n.t);let S="";if(p.vc&&s.length>0){let e=new URLSearchParams;for(let t of s)e.append("_highlight",t);S="?".concat(e.toString())}return(0,a.jsxs)("article",{className:I.searchResultItem,children:[(0,a.jsx)("h2",{children:(0,a.jsx)(o.Z,{to:t.u+S+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,y.C)(f,s):(0,j.o)(f,(0,C.m)(l,"t"),s,100)}})}),g.length>0&&(0,a.jsx)("p",{className:I.searchResultItemPath,children:(0,v.e)(g)}),(d||h)&&(0,a.jsx)("p",{className:I.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,j.o)(t.t,(0,C.m)(l,"t"),s,100)}})]})}let _=function(){return(0,a.jsx)(l.Z,{children:(0,a.jsx)(P,{})})}}}]);