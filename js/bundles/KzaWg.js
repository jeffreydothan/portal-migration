var pageComponent=webpackJsonppageComponent([12],{136:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),d=o(i),u=n(1),s=o(u);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11);var c=n(137),p=o(c),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(d.default);s.default.register(f,p.default),t.default=f},137:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.KzaWg=void 0;var i,d=n(0),u=o(d),s=n(1),c=o(s);goog.loadModule(function(e){function t(e,t,o){var i=function(){r("article",null,null,"id","before-after"),r("h3"),d("How does it look like now (7.0)"),a("h3"),r("p"),r("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/add_menu_old.png"),a("img"),a("p"),r("h3"),d("Changes for Lexicon 2.0 (7.1)"),a("h3"),r("p"),r("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/add_menu_new.png"),a("img"),a("p"),r("table"),r("thead"),r("tr"),r("th"),d("Change"),a("th"),r("th"),d("Reason"),a("th"),a("tr"),a("thead"),r("tbody"),r("tr"),r("td"),d("① The "),r("strong"),d("add menu is moved into the Management Toolbar"),a("strong"),a("td"),r("td"),d("_"),a("td"),a("tr"),a("tbody"),a("table"),a("article"),r("article",null,null,"id","steps"),r("h3"),d("How to apply it?"),a("h3"),r("table"),r("thead"),r("tr"),r("th"),d("_"),a("th"),r("th"),d("Action"),a("th"),r("th"),d("Mandatory"),a("th"),a("tr"),a("thead"),r("tbody"),r("tr"),r("td"),r("a",null,null,"href","#step-1"),d("1"),a("a"),a("td"),r("td"),d("Locate the code in your application"),a("td"),r("td"),d("✔"),a("td"),a("tr"),r("tr"),r("td"),r("a",null,null,"href","#step-2"),d("2"),a("a"),a("td"),r("td"),d("Move the add menu into the management toolbar"),a("td"),r("td"),d("✔"),a("td"),a("tr"),a("tbody"),a("table"),r("h4"),d("[1] Locate the code in your application "),l("a",null,null,"id","step-1"),a("h4"),r("p"),d("Locate the code responsible for rendering the "),r("strong"),d("add menu"),a("strong"),d(" in your application. It should resemble something like the following snippet found in "),r("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/master/modules/apps/web-experience/fragment/fragment-web/src/main/resources/META-INF/resources/view.jsp#L119-L127"),d("fragment-web/view.jsp"),a("a"),d(":"),a("p"),u({code:'<c:if test="<%= fragmentDisplayContext.isShowAddButton(FragmentActionKeys.ADD_FRAGMENT_COLLECTION) %>">\n    <portlet:renderURL var="addFragmentCollectionURL">\n        <portlet:param name="mvcRenderCommandName" value="/fragment/edit_fragment_collection" />\n    </portlet:renderURL>\n\n    <liferay-frontend:add-menu inline="<%= true %>">\n        <liferay-frontend:add-menu-item title=\'<%= LanguageUtil.get(request, "add-collection") %>\' url="<%= addFragmentCollectionURL.toString() %>" />\n    </liferay-frontend:add-menu>\n</c:if>',mode:"text/html"},null,o),r("p"),d("Locate the code responsible for rendering the "),r("strong"),d("management toolbar"),a("strong"),d(" in your application. It should resemble something like the following snippet found in "),r("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/master/modules/apps/web-experience/fragment/fragment-web/src/main/resources/META-INF/resources/view.jsp#L28-L32"),d("fragment-web/view.jsp"),a("a"),d(":"),a("p"),u({code:'<liferay-frontend:management-bar\n    disabled="<%= fragmentDisplayContext.isDisabledFragmentCollectionsManagementBar() %>"\n    includeCheckBox="<%= true %>"\n    searchContainerId="fragmentCollections"\n>\n    ...\n</liferay-frontend:management-bar>',mode:"text/html"},null,o),r("h4"),d("[2] Move the add menu into the management toolbar "),l("a",null,null,"id","step-2"),a("h4"),r("p"),d("Move the part in charge of the search into the "),r("code"),d("liferay-frontend:management-bar"),a("code"),d(" section, right after the last of the "),r("code"),d("liferay-frontend-management-bar-buttons"),a("code"),d(" item like it's shown in the following snippet."),a("p"),u({code:'<liferay-frontend:management-bar-buttons>\n    ...\n\n    <c:if test="<%= fragmentDisplayContext.isShowAddButton(FragmentActionKeys.ADD_FRAGMENT_COLLECTION) %>">\n        <portlet:renderURL var="addFragmentCollectionURL">\n            <portlet:param name="mvcRenderCommandName" value="/fragment/edit_fragment_collection" />\n        </portlet:renderURL>\n\n        <liferay-frontend:add-menu inline="<%= true %>">\n            <liferay-frontend:add-menu-item title=\'<%= LanguageUtil.get(request, "add-collection") %>\' url="<%= addFragmentCollectionURL.toString() %>" />\n        </liferay-frontend:add-menu>\n    </c:if>\n</liferay-frontend:management-bar-buttons>',mode:"text/html"},null,o),a("article"),r("article",null,null,"id","who-has-it-ready"),r("h3"),d("Who has done it already?"),a("h3"),r("table"),r("thead"),r("tr"),r("th"),d("LPS"),a("th"),r("th"),d("Pull Request"),a("th"),r("th"),d("Master"),a("th"),a("tr"),a("thead"),r("tbody"),r("tr"),r("td"),r("a",null,null,"href","https://issues.liferay.com/browse/LPS-77502"),d("LPS-77502"),a("a"),a("td"),r("td"),r("a",null,null,"href","https://github.com/brianchandotcom/liferay-portal/pull/54812"),d("https://github.com/brianchandotcom/liferay-portal/pull/54812"),a("a"),a("td"),r("td"),d("✘"),a("td"),a("tr"),a("tbody"),a("table"),a("article"),r("input",null,null,"type","hidden","value",e.page.title),a("input"),r("input",null,null,"type","hidden","value",e.site.title),a("input")};s(n.$$assignDefaults({content:i},e),null,o)}goog.module("KzaWg.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,a=o.elementClose,l=o.elementVoid,d=(o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,c.default.getTemplate("ElectricCode.incrementaldom","render")),s=c.default.getTemplate("lexiconMigrationGuide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="KzaWg.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(u.default);c.default.register(p,i),t.KzaWg=p,t.templates=i,t.default=i}},[136]);