(this.webpackJsonpbeholdjeremy=this.webpackJsonpbeholdjeremy||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),r=c(8),s=c.n(r),n=(c(13),c(7)),o=c(2),j=(c(14),c.p+"static/media/Resume.999b3454.pdf"),l=c(3),d=[{id:330475743,name:"NoteHub",domain:["web dev","dbms"],topics:["php","mysql","bootstrap"],description:"A college Notes Managments System to organize & view notes with detailed validation and an Admin to approve uploaded documents."},{id:330475742,name:"binUp - Google Dev Challenge",domain:["app dev"],topics:["flutter","dart"],description:"An app that seeks to manage waste as well empower the impoverished by connecting waste generators with artists from poorer neighbourhoods. "},{id:330475741,name:"coffeeReads MVP1",domain:["startup","web dev"],topics:["react"],description:"An app that favours budding authors by teaser-testing snippets of the book to users who then give genuine reviews and help them build traction"},{id:4,name:"Breakout Replica",domain:["game dev"],topics:["canvas api","html-css-javascript"],description:"A replica of the Breakout game, built from scratch to begin and delve into development with the Canvas API"}],h=c.p+"static/media/home1.c46d561d.jpg",b=(c(15),c(0));function p(e){var t=Object(a.useState)(null),c=Object(l.a)(t,2),i=(c[0],c[1]),r=Object(a.useState)(!1),s=Object(l.a)(r,2),n=(s[0],s[1]),o=Object(a.useState)([]),j=Object(l.a)(o,2),p=j[0],u=j[1];Object(a.useEffect)((function(){fetch("https://api.github.com/users/jeremytinkers/repos").then((function(e){return e.json()})).then((function(e){n(!0),u(e)}),(function(e){n(!0),i(e)}))}),[]);var O=p.concat(d);O.sort((function(e,t){return e.id>t.id?-1:1})),localStorage.setItem("fullProjectData",JSON.stringify(O));var g=Object(a.useState)("All"),x=Object(l.a)(g,2),m=x[0],f=x[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{id:"homeContent",children:[Object(b.jsx)("img",{className:"homeImage",src:h,alt:"Jeremy Picture"}),Object(b.jsxs)("div",{className:"aboutMe",children:[Object(b.jsxs)("h2",{children:["About Me ",Object(b.jsx)("span",{children:"\ud83c\uddf4\ud83c\uddf2 \ud83c\uddee\ud83c\uddf3"})," "]}),Object(b.jsxs)("div",{id:"aboutPara",children:[Object(b.jsxs)("p",{children:[" ","Born and bred in"," ",Object(b.jsx)("strong",{id:"mct",children:Object(b.jsxs)("div",{class:"tooltipCard",children:[Object(b.jsx)("a",{href:"https://www.google.com/search?q=Muscat&rlz=1C1JZAP_enIN878IN878&sxsrf=AOaemvKJOT8q7ZimZSUvFiZpLfEDaOmjpg%3A1640192319042&ei=P1nDYaOKAoXmsAevqYfwBA&ved=0ahUKEwjjpajE8Pf0AhUFM-wKHa_UAU4Q4dUDCA4&uact=5&oq=Muscat&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyBwguELEDEEMyBAgAEEMyBAguEEMyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBwgAELEDEEM6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6CAgAEOQCELADOgoILhDIAxCwAxBDOhAILhDHARCjAhDIAxCwAxBDOhAILhDHARCvARDIAxCwAxBDOgYIABAHEB46BwguELEDEAo6CgguEMcBEK8BEApKBAhBGABKBAhGGAFQ7AFY6QRgpg5oAXACeACAAYcCiAHuA5IBAzItMpgBAKABAcgBE8ABAQ&sclient=gws-wiz",target:"_blank",children:"\u0645\u0633\u0642\u0637"}),Object(b.jsx)("span",{class:"tooltipCardtext",children:"Muscat"})]})})," ","dunes, behold another culturally bewildered"," ",Object(b.jsx)("strong",{id:"cok",children:Object(b.jsxs)("div",{class:"tooltipCard",children:[Object(b.jsxs)("a",{href:"https://www.google.com/search?q=kerala&rlz=1C1JZAP_enIN878IN878&oq=kerala&aqs=chrome.0.69i59j46i67i433j0i67i131i433l2j46i131i433i512j0i20i131i263i433i512j0i131i433i512j46i175i199i512j0i3l2.3048j0j7&sourceid=chrome&ie=UTF-8",target:"_blank",children:[" ","\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d3f"]}),Object(b.jsx)("span",{class:"tooltipCardtext",children:"Malayali"})]})}),"!"]}),Object(b.jsxs)("p",{children:["I like to be called Jeremy and am currently a"," ",Object(b.jsx)("strong",{children:"3rd year CS Undergrad"})," at"," ",Object(b.jsx)("a",{href:"https://www.nitt.edu/",target:"_blank",children:Object(b.jsx)("strong",{children:"NIT-T"})})," ","with a deep passion for building products with the user in focus."]}),Object(b.jsxs)("p",{children:["I'm currently on the lookout for ",Object(b.jsx)("strong",{children:"internships"})," in the ",Object(b.jsx)("strong",{children:"SWE/PM"})," space(preferably startups)"," "]})]})]})]}),Object(b.jsxs)("div",{id:"homeEnd",children:[Object(b.jsx)("p",{children:" Looking for expertise in a particular skill?"}),Object(b.jsxs)("form",{action:"/projectDashboard/"+m,children:[Object(b.jsx)("label",{for:"search",children:"Search"}),Object(b.jsx)("input",{onChange:function(e){f(e.target.value)},id:"search",type:"text",placeholder:"Ex: C++, Dart",required:!0}),Object(b.jsx)("span",{className:"caret"})]})]})]})}function u(e){return Object(b.jsxs)("div",{className:"projectCard",children:[e.project.html_url?Object(b.jsxs)("h2",{children:[e.project.name," ",Object(b.jsx)("a",{href:e.project.html_url,target:"_blank",children:Object(b.jsx)("i",{class:"fa fa-github fa-lg"})})]}):Object(b.jsx)("h2",{children:e.project.name}),e.project.html_url?Object(b.jsx)("a",{id:"projectLink",href:e.project.html_url,target:"_blank",children:"Link"}):Object(b.jsx)("p",{id:"projectLink",children:"Currently Private"}),Object(b.jsx)("h4",{children:"Description: "}),Object(b.jsx)("p",{children:e.project.description}),Object(b.jsx)("div",{id:"cardTags",children:e.project.topics.map((function(e){return Object(b.jsx)("p",{children:e})}))})]})}function O(e,t){if("all"===e.toLowerCase())return t;var c=[];if("c++"===e.toLowerCase()||"c-plus-plus"===e.toLowerCase()){for(var a=0;a<t.length;a++)(t[a].topics.includes("c-plus-plus")||t[a].topics.includes("c++"))&&c.push(t[a]);return c}for(var i=0;i<t.length;i++)t[i].topics.includes(e.toLowerCase())&&c.push(t[i]);return c}function g(e){var t=JSON.parse(localStorage.getItem("fullProjectData")),c=Object(o.g)().tag,i=c||"All",r=!O(i.toLowerCase(),t).length,s=Object(a.useState)(r),n=Object(l.a)(s,2),j=n[0],d=n[1],h=Object(a.useState)(i),p=Object(l.a)(h,2),g=p[0],x=p[1],m=Object(a.useState)(O(g,t)),f=Object(l.a)(m,2),A=f[0],v=f[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{id:"mainProjectContent",children:[Object(b.jsx)("p",{children:"Search for a particular skill \ud83d\udd0e"}),Object(b.jsx)("input",{onKeyDown:function(e){13===e.keyCode&&(O(g,t).length?d(!1):d(!0),v(O(g,t)))},id:"projectSInput",type:"text",onChange:function(e){x(e.target.value)},placeholder:"Enter a Tool/TechStack Tag",value:g}),Object(b.jsx)("button",{id:"buttonProject",onClick:function(e){v(t),d(!1)},children:"View All Projects"}),Object(b.jsx)("div",{id:"projectsGridParent",children:j?Object(b.jsx)("p",{children:"No matching project. :( "}):Object(b.jsx)("div",{id:"projectsGrid",children:A.map((function(e){return Object(b.jsx)(u,{project:e},e.id)}))})})," "]})," "]})}var x=function(){return Object(b.jsxs)(n.a,{children:[Object(b.jsx)("div",{id:"navParent",children:Object(b.jsxs)("div",{id:"navbar",children:[Object(b.jsxs)("h1",{id:"navbarHeading",children:[" ",Object(b.jsx)("a",{href:"/",children:"Jeremiah Thomas"})," "]}),Object(b.jsxs)("nav",{children:[Object(b.jsx)("a",{href:"/projectDashboard",children:"Projects"}),Object(b.jsxs)("div",{class:"tooltip",children:[Object(b.jsx)("a",{href:j,download:"Resume.pdf",children:Object(b.jsx)("i",{class:"fa fa-file fa-sm"})}),Object(b.jsx)("span",{class:"tooltiptext",children:"Resume"})]}),Object(b.jsx)("a",{href:"https://github.com/jeremytinkers",target:"_blank",children:Object(b.jsx)("i",{class:"fa fa-github fa-lg"})}),Object(b.jsx)("a",{href:"https://wa.me/917306266838",target:"_blank",children:Object(b.jsx)("i",{class:"fa fa-whatsapp fa-lg"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/jeremiahthomas14/",target:"_blank",children:Object(b.jsx)("i",{class:"fa fa-linkedin fa-lg"})})]})]})}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/projectDashboard/:tag",element:Object(b.jsx)(g,{})}),Object(b.jsx)(o.a,{path:"/projectDashboard",element:Object(b.jsx)(g,{})}),Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(p,{})})]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.a714aad0.chunk.js.map