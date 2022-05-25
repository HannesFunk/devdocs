"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[13240],{28132:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var o=t(87462),a=t(63366),l=(t(67294),t(3905)),s=t(13904),r=["components"],i={title:"NodeJS and Grunt"},d=void 0,u={unversionedId:"development/tools/nodejs",id:"development/tools/nodejs",title:"NodeJS and Grunt",description:"Moodle development tools require the installation and use of NodeJS, which is a JavaScript runtime environment available for most operating systems.",source:"@site/general/development/tools/nodejs.md",sourceDirName:"development/tools",slug:"/development/tools/nodejs",permalink:"/devdocs/general/development/tools/nodejs",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tools/nodejs.md",tags:[],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653469390,formattedLastUpdatedAt:"25/05/2022",frontMatter:{title:"NodeJS and Grunt"},sidebar:"tools",previous:{title:"PHP CodeSniffer",permalink:"/devdocs/general/development/tools/phpcs"}},p={},m=[{value:"Node Version Manager",id:"node-version-manager",level:2},{value:"Grunt",id:"grunt",level:2}],c={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,o.Z)({frontMatter:i},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Moodle development tools require the installation and use of ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"),", which is a JavaScript runtime environment available for most operating systems."),(0,l.kt)("p",null,"Moodle requires version 16.14 of NodeJS, which is otherwise known as ",(0,l.kt)("inlineCode",{parentName:"p"},"lts/gallium"),"."),(0,l.kt)("p",null,"Use of ",(0,l.kt)("a",{parentName:"p",href:"#node-version-manager"},"NVM")," for installation of NodeJS is highly recommended over direct installation."),(0,l.kt)("h2",{id:"node-version-manager"},"Node Version Manager"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"NVM")," is the Node Version Manager. Its purpose is to simplify the installation, and use different versions of NodeJS."),(0,l.kt)("p",null,"Moodle includes a ",(0,l.kt)("inlineCode",{parentName:"p"},".nvmrc")," which ",(0,l.kt)("inlineCode",{parentName:"p"},"nvm")," can use to select the correct version of NodeJS."),(0,l.kt)("p",null,"To use the correct version of NodeJS for the current version of Moodle, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"nvm install")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"nvm use")," commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ nvm install\nFound '/Users/nicols/Sites/public_html/sm/.nvmrc' with version <lts/gallium>\nv16.14.0 is already installed.\nNow using node v16.14.0 (npm v8.3.1)\n")),(0,l.kt)("h2",{id:"grunt"},"Grunt"),(0,l.kt)("p",null,"As part of its build stack, Moodle uses the ",(0,l.kt)("a",{parentName:"p",href:"https://gruntjs.com"},"Grunt")," task runner."),(0,l.kt)("p",null,"Grunt is composed of a set of tasks, defined within the Moodle code repository in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Gruntfile.js")," file, and a grunt CLI tool which must also be installed."),(0,l.kt)("p",null,"To install the grunt CLI tool you can install it globally using npm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g grunt-cli\n$ grunt stylelint\n")),(0,l.kt)("p",null,"You can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"npx")," command to install it on demand:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx grunt stylelint\n")))}v.isMDXComponent=!0}}]);