var pageComponent=webpackJsonppageComponent([7],{225:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=o(i),d=n(1),c=o(d);n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11);var p=n(226),u=o(p),m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(s.default);c.default.register(m,u.default),t.default=m},226:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.lsNQG=void 0;var i,s=n(0),d=o(s),c=n(1),p=o(c);goog.loadModule(function(e){function t(e,t,o){var i=function(){a("article",null,null,"id","before-after"),a("h3"),s("How does it look like now (7.1)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_filter_label_items_old.jpg"),r("img"),r("p"),a("h3"),s("Changes for Lexicon 2.0 (7.2)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_filter_label_items_new.jpg"),r("img"),r("p"),a("table"),a("thead"),a("tr"),a("th"),s("Change"),r("th"),a("th"),s("Reason"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),s("① Filters are visible in a new bar under the management toolbar"),r("td"),a("td"),s("Lexicon wants that info to be directly visible."),r("td"),r("tr"),r("tbody"),r("table"),r("article"),a("article",null,null,"id","management-toolbar-with-creation-menu"),a("h4"),s("How to apply it?"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),s("_"),r("th"),a("th"),s("Action"),r("th"),a("th"),s("Mandatory"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("a",null,null,"href","#step-1"),s("1"),r("a"),r("td"),a("td"),s("Locate the code in your application"),r("td"),a("td"),s("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-2"),s("2"),r("a"),r("td"),a("td"),s("Add parameter "),a("code"),s("filterLabelItems"),r("code"),s(" to "),a("code"),s("clay:management-toolbar"),r("code"),s(" tag"),r("td"),a("td"),s("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-3"),s("3"),r("a"),r("td"),a("td"),s("Move the definitions into a Display Context"),r("td"),a("td"),s("✘"),r("td"),r("tr"),r("tbody"),r("table"),a("h3"),s("[1] Locate the code in your application "),l("a",null,null,"id","step-1"),r("h3"),a("p"),s("Locate the code responsible for rendering the "),a("strong"),s("management-toolbar"),r("strong"),s(" in your application. It should resemble something like the following snippet found in "),a("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/fe9dfcc0275660a0fe9aafb50ae6b169236f67cf/modules/apps/web-experience/asset/asset-tags-admin-web/src/main/resources/META-INF/resources/view.jsp#L28"),s("frontend-taglib-clay-sample/management-toolbars.jsp"),r("a"),s(":"),r("p"),d({code:'<clay:management-toolbar\n    creationMenu="<%= managementToolbarsDisplayContext.getCreationMenu() %>"\n    filterDropdownItems="<%= managementToolbarsDisplayContext.getFilterDropdownItems() %>"\n    searchActionURL="mySearchActionURL?key1=val1&key2=val2&key3=val3"\n    searchFormName="mySearchName"\n    searchInputName="mySearchInputName"\n    selectable="<%= true %>"\n    sortingOrder="desc"\n    viewTypeItems="<%= managementToolbarsDisplayContext.getViewTypeItems() %>"\n/>',mode:"text/html"},null,o),a("h3"),s("[2] Add parameter "),a("code"),s("filterLabelItems"),r("code"),r("h3"),a("p"),s("Start by adding the following imports to the imports section of your "),a("code"),s("init.jsp"),r("code"),s(" file:"),r("p"),d({code:'// Import the DropdownItemList utility class to create the filter items model\n<%@ page import="com.liferay.frontend.taglib.clay.servlet.taglib.util.LabelItemList" %>',mode:"text/html"},null,o),a("h4"),s("Implement the new parameter"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),s("Property"),r("th"),a("th"),s("Description"),r("th"),a("th"),s("Default"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("code"),s("closeable"),r("code"),r("td"),a("td"),s("To make the label closeable or not."),r("td"),a("td"),a("code"),s("false"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),s("label"),r("code"),r("td"),a("td"),s("Text of the label."),r("td"),a("td"),s("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),s("style"),r("code"),r("td"),a("td"),s("The style of the label. Options are "),a("code"),s("danger"),r("code"),s(", "),a("code"),s("info"),r("code"),s(", "),a("code"),s("secondary");r("code"),s(", "),a("code"),s("warning"),r("code"),s(", "),a("code"),s("success"),r("code"),s("."),r("td"),a("td"),a("code"),s("secondary"),r("code"),r("td"),r("tr"),r("tbody"),r("table"),d({code:'<clay:management-toolbar\n    disabled=<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>\n    filterItems="<%= assetTagsDisplayContext.getFilterItems() %>\n    filterLabelItems="<%=\n        new LabelItemList() {\n            {\n                add(\n                    labelItem -> {\n                        labelItem.setLabel("Filter 1");\n                    });\n\n                add(\n                    labelItem -> {\n                        labelItem.setLabel("Filter 2");\n                    });\n            }\n        };\n    %>"\n    namespace="<%= renderResponse.getNamespace() %>"\n    selectable="<%= true %>"\n    sortingOrder="<%= ParamUtil.getString(request, "orderByType", "asc") %>"\n    sortingURL="<%= assetTagsDisplayContext.getSortingURL() %>"\n    totalItems="<%= assetTagsDisplayContext.getTotalItems() %>"\n/>',mode:"text/html"},null,o),a("h3"),s("[3] Move the definitions into a Display Context "),l("a",null,null,"id","step-3"),r("h3"),a("div",null,null,"class","alert alert-info"),s("This step is "),a("em"),s("optional"),r("em"),s(" but "),a("strong"),s("recommended"),r("strong"),r("div"),a("p"),s("If your application already supports it (or even if it doesn't), consider moving the "),a("code"),s("Java"),r("code"),s(" portion that generates the navigation items model into a "),a("code"),s("*DisplayContext"),r("code"),s(" pattern to keep your jsps cleaner and server-free"),r("p"),d({code:'<clay:management-toolbar\n    disabled=<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>\n    filterItems="<%= assetTagsDisplayContext.getFilterItems() %>"\n    filterLabelItems="<%= assetTagsDisplayContext.getFilterLabelItems() %>"\n    namespace="<%= renderResponse.getNamespace() %>"\n    selectable="<%= true %>"\n    sortingOrder="<%= assetTagsDisplayContext.getSortingOrder() %>"\n    sortingURL="<%= assetTagsDisplayContext.getSortingURL() %>"\n    totalItems="<%= assetTagsDisplayContext.getTotalItems() %>"\n/>',mode:"text/html"},null,o),r("article"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};c(n.$$assignDefaults({content:i},e),null,o)}goog.module("lsNQG.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),a=o.elementOpen,r=o.elementClose,l=o.elementVoid,s=(o.elementOpenStart,o.elementOpenEnd,o.text),d=(o.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),c=p.default.getTemplate("lexiconMigrationGuide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="lsNQG.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(d.default);p.default.register(u,i),t.lsNQG=u,t.templates=i,t.default=i}},[225]);