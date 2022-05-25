"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[84236],{52277:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(87462),o=a(63366),s=(a(67294),a(3905)),l=a(13904),n=["components"],i={title:"Moodle 2.6.2",tags:["Release notes","Moodle 2.6"],sidebar_position:2,moodleVersion:"2.6.2"},d=void 0,p={unversionedId:"releases/2.6/2.6.2",id:"releases/2.6/2.6.2",title:"Moodle 2.6.2",description:"Release date: 10 March 2014",source:"@site/general/releases/2.6/2.6.2.md",sourceDirName:"releases/2.6",slug:"/releases/2.6/2.6.2",permalink:"/devdocs/general/releases/2.6/2.6.2",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.6/2.6.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.6",permalink:"/devdocs/general/tags/moodle-2-6"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653469390,formattedLastUpdatedAt:"25/05/2022",sidebarPosition:2,frontMatter:{title:"Moodle 2.6.2",tags:["Release notes","Moodle 2.6"],sidebar_position:2,moodleVersion:"2.6.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.6.1",permalink:"/devdocs/general/releases/2.6/2.6.1"},next:{title:"Moodle 2.6.3",permalink:"/devdocs/general/releases/2.6/2.6.3"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"UI changes",id:"ui-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 10 March 2014"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.6.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.6.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43733"},"MDL-43733")," - Auto-saved responses are used when a quiz attempt is submitted automatically"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43732"},"MDL-43732")," - Order and Paging controls are now more accessible"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43969"},"MDL-43969")," - Improved accessibility of shortform collapsing"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27414"},"MDL-27414")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/26/en/Random_Short-Answer_Matching_question_type"},"Random short answer matching question type")," now works again (with thanks to Jean-Michel V\xe9drine)")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40821"},"MDL-40821")," - Language menu in Clean shows language used")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43882"},"MDL-43882"),' - "Time spent waiting for the database" value added to performance info'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43439"},"MDL-43439")," - Behat now has an option to take screenshots on failure")),(0,s.kt)("h2",{id:"ui-changes"},"UI changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44425"},"MDL-44425")," - Skydrive, Box.net and Google Docs are renamed OneDrive, Box and Google Drive respectively to reflect these remote service name changes.")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256416"},"MSA-14-0004")," Incorrect filtering in Quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256417"},"MSA-14-0005")," Access issue in Feedback activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256418"},"MSA-14-0006")," Capability issue in Chat"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256419"},"MSA-14-0007")," Access issue in Wiki"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256420"},"MSA-14-0008")," Cross site scripting potential in Flowplayer"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256421"},"MSA-14-0009")," Identity information leak in Forum and Quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256422"},"MSA-14-0010")," Identity information leak in Alfresco Repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256423"},"MSA-14-0011")," Cross site request forgery potential in IMS enrolments"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256424"},"MSA-14-0012")," Access issue in Badges"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256425"},"MSA-14-0013")," Unfiltered data used in Assignment web services")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43598"},"MDL-43598")," - Mod chooser no longer causes a jump in scroll position when first used."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43664"},"MDL-43664")," - JavaScript no longer breaks on IE8"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40705"},"MDL-40705")," - Long course names are truncated in navigation menu"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40205"},"MDL-40205")," - Long block titles are truncated in Clean"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42882"},"MDL-42882")," - Performance improvement to missing root directory upgrade step"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40849"},"MDL-40849")," - Assignment marking guide screen fixed in Clean"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44217"},"MDL-44217")," - The link colour in Bootstrapbase (and Clean) is now WCAG compliant"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44029"},"MDL-44029")," - Quiz user overrides no longer deleted by group event handler"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44018"},"MDL-44018")," - Variant field of question_attempts is backed up by Moodle backup"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42928"},"MDL-42928")," - Scrolling is locked behind full-screen dialogues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43941"},"MDL-43941")," - Activity show/hide toggle fixed in hidden and orphaned sections"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43306"},"MDL-43306")," - Backup no longer introduces duplicate gradeitem sortorders when restoring")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.6.2"},"Notes de mise \xe0 jour de Moodle 2.6.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.6.2"},"Notas de Moodle 2.6.2"))))}h.isMDXComponent=!0}}]);