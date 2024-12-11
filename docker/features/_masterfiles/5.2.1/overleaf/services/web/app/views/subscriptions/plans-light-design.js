var pug = require("pug-runtime");function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Date, ExposedSettings, Object, URLSearchParams, bootstrap5Override, brandVariation, buildBaseAssetPath, buildCssPath, buildImgPath, buildJsPath, canDisplayAdminMenu, canDisplayAdminRedirect, canDisplaySplitTestMenu, canDisplaySurveyMenu, canRedirectToAdminDomain, countryCode, csrfToken, currentLngCode, currentUrl, currentUrlWithQueryParams, currentView, deferScripts, dictionariesRoot, enableUpgradeButton, entrypoint, entrypointScripts, entrypointStyles, fixedSizeDocument, formatCurrency, getCssThemeModifier, getLoggedInUserId, getSessionAnalyticsId, getSessionUser, getUserEmail, groupPlanModalDefaults, groupPlanModalOptions, groupPlans, hasAdminAccess, hasCustomLeftNav, hasFeature, hideFatFooter, highlighted, initialLocalizedGroupPrice, isActionBelowContent, isManagedAccount, itm_campaign, itm_content, itm_referrer, language, latamCountryBannerDetails, managingYourSubscription, mathJaxPath, metadata, moduleIncludes, nav, overleafGroupPlans, overleafIndividualPlans, plansConfig, projectDashboardReact, recommendedCurrency, scriptNonce, settings, showBrlGeoBanner, showInrGeoBanner, showLATAMBanner, showLanguagePicker, showThinFooter, splitTestInfo, splitTestVariants, suppressCookieBanner, suppressFooter, suppressGoogleAnalytics, suppressNavContentLinks, suppressNavbar, suppressNavbarRight, suppressRelAlternateLinks, suppressSkipToContent, title, translate, user, userRestrictions, userSettings, usersBestSubscription, websiteRedesignPlansVariant) {
      pug_mixins["quoteLargeTextCentered"] = pug_interp = function(quote, person, position, affiliation, link, pictureUrl, pictureAltAttr){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cblockquote class=\"quote-large-text-centered\"\u003E\u003Cdiv class=\"quote\"\u003E" + (null == (pug_interp = quote) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E";
if (pictureUrl) {
pug_html = pug_html + "\u003Cdiv class=\"quote-img\"\u003E\u003Cimg" + (pug.attr("src", pictureUrl, true, true)+pug.attr("alt", pictureAltAttr, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cfooter\u003E\u003Cdiv class=\"quote-person\"\u003E\u003Cstrong\u003E" + (pug.escape(null == (pug_interp = person) ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E";
if (person && position) {
pug_html = pug_html + "\u003Cdiv\u003E" + (pug.escape(null == (pug_interp = position) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if (affiliation) {
pug_html = pug_html + "\u003Cdiv\u003E" + (pug.escape(null == (pug_interp = affiliation) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
}
if (link) {
pug_html = pug_html + "\u003Cdiv class=\"quote-link\"\u003E" + (null == (pug_interp = link) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Ffooter\u003E\u003C\u002Fblockquote\u003E";
};








pug_mixins["collinsQuote1"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"card card-dark-green-bg\"\u003E";
var quote = 'Overleaf is indispensable for us. We use it in our research, thesis writing, project proposals, and manuscripts for publication. When it comes to writing, it’s our main tool.'
var quotePerson = 'Christopher Collins'
var quotePersonPosition = 'Associate Professor and Lab Director, Ontario Tech University'
var quotePersonImg = buildImgPath("advocates/collins.jpg")
pug_mixins["quoteLargeTextCentered"](quote, quotePerson, quotePersonPosition, null, null, quotePersonImg, quotePerson);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["collinsQuote2"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"card card-dark-green-bg\"\u003E";
var quote = 'We are writing collaboratively right up until the last minute. We are faced with deadlines all the time, and Overleaf gives us the ability to polish right up until the last possible second.'
var quotePerson = 'Christopher Collins'
var quotePersonPosition = 'Associate Professor and Lab Director, Ontario Tech University'
var quotePersonImg = buildImgPath("advocates/collins.jpg")
pug_mixins["quoteLargeTextCentered"](quote, quotePerson, quotePersonPosition, null, null, quotePersonImg, quotePerson);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["bennettQuote1"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"card card-dark-green-bg\"\u003E";
var quote = 'With Overleaf, we now have a process for developing technical documentation which has virtually eliminated the time required to properly format and layout documents.'
var quotePerson = 'Andrew Bennett'
var quotePersonPosition = 'Software Architect, Symplectic'
var quotePersonImg = buildImgPath("advocates/bennett.jpg")
pug_mixins["quoteLargeTextCentered"](quote, quotePerson, quotePersonPosition, null, null, quotePersonImg, quotePerson);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["eyebrow"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan class=\"mono-text\"\u003E\u003Cspan aria-hidden=\"true\"\u003E{\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan aria-hidden=\"true\"\u003E}\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
};


























































pug_mixins["bootstrap-js"] = pug_interp = function(bootstrapVersion){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate (entrypointScripts(bootstrapVersion === 5 ? 'bootstrap-5' : 'bootstrap-3'))
;(function(){
  var $$obj = (entrypointScripts(bootstrapVersion === 5 ? 'bootstrap-5' : 'bootstrap-3'));
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var file = $$obj[pug_index0];
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)+pug.attr("src", file, true, true)) + "\u003E\u003C\u002Fscript\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var file = $$obj[pug_index0];
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)+pug.attr("src", file, true, true)) + "\u003E\u003C\u002Fscript\u003E";
    }
  }
}).call(this);

};
pug_mixins["foot-scripts"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate entrypointScripts(entrypoint)
;(function(){
  var $$obj = entrypointScripts(entrypoint);
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var file = $$obj[pug_index1];
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)+pug.attr("src", file, true, true)+pug.attr("defer", deferScripts, true, true)) + "\u003E\u003C\u002Fscript\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var file = $$obj[pug_index1];
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)+pug.attr("src", file, true, true)+pug.attr("defer", deferScripts, true, true)) + "\u003E\u003C\u002Fscript\u003E";
    }
  }
}).call(this);

if ((settings.devToolbar.enabled)) {
// iterate entrypointScripts("devToolbar")
;(function(){
  var $$obj = entrypointScripts("devToolbar");
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var file = $$obj[pug_index2];
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)+pug.attr("src", file, true, true)+pug.attr("defer", deferScripts, true, true)) + "\u003E\u003C\u002Fscript\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var file = $$obj[pug_index2];
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)+pug.attr("src", file, true, true)+pug.attr("defer", deferScripts, true, true)) + "\u003E\u003C\u002Fscript\u003E";
    }
  }
}).call(this);

}
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml" + (pug.attr("class", pug.classes([(fixedSizeDocument ? 'fixed-size-document' : undefined)], [true]), false, true)+pug.attr("lang", (currentLngCode || 'en'), true, true)) + "\u003E";
metadata = metadata || {}
let bootstrap5PageStatus = 'disabled' // One of 'disabled', 'enabled', and 'queryStringOnly'
let bootstrap5PageSplitTest = '' // Limits Bootstrap 5 usage on this page to users with an assignment of "enabled" for the specified split test. If left empty and bootstrap5PageStatus is "enabled", the page always uses Bootstrap 5.
let isWebsiteRedesign = false
entrypoint = 'marketing'
entrypoint = 'pages/user/subscription/plans-v2/plans-v2-main'
var suppressRelAlternateLinks = true
metadata.canonicalURL = (settings.siteUrl ? settings.siteUrl : '') + '/user/subscription/plans'
pug_html = pug_html + "\u003Chead\u003E";
if ((metadata && metadata.title)) {
pug_html = pug_html + "\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = metadata.title + ' - ' + settings.appName + ', ' + translate("online_latex_editor")) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Cmeta" + (" name=\"twitter:title\""+pug.attr("content", metadata.title, true, true)) + "\u003E\u003Cmeta" + (" name=\"og:title\""+pug.attr("content", metadata.title, true, true)) + "\u003E";
}
else
if ((typeof(title) == "undefined")) {
pug_html = pug_html + "\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = settings.appName + ', '+ translate("online_latex_editor")) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Cmeta" + (" name=\"twitter:title\""+pug.attr("content", settings.appName + ', '+ translate("online_latex_editor"), true, true)) + "\u003E\u003Cmeta" + (" name=\"og:title\""+pug.attr("content", settings.appName + ', '+ translate("online_latex_editor"), true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = translate(title) + ' - ' + settings.appName + ', ' + translate("online_latex_editor")) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Cmeta" + (" name=\"twitter:title\""+pug.attr("content", translate(title), true, true)) + "\u003E\u003Cmeta" + (" name=\"og:title\""+pug.attr("content", translate(title), true, true)) + "\u003E";
}
if ((metadata && metadata.description)) {
pug_html = pug_html + "\u003Cmeta" + (" name=\"description\""+pug.attr("content", metadata.description, true, true)) + "\u003E\u003Cmeta" + (" itemprop=\"description\""+pug.attr("content", metadata.description, true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Cmeta" + (" name=\"description\""+pug.attr("content", translate("site_description"), true, true)) + "\u003E\u003Cmeta" + (" itemprop=\"description\""+pug.attr("content", translate("site_description"), true, true)) + "\u003E";
}
if ((metadata && metadata.image && metadata.image.fields)) {
pug_html = pug_html + "\u003Cmeta" + (" itemprop=\"image\""+pug.attr("content", metadata.image.fields.file.url, true, true)) + "\u003E\u003Cmeta" + (" name=\"image\""+pug.attr("content", metadata.image.fields.file.url, true, true)) + "\u003E";
}
else
if ((metadata && metadata.image_src)) {
pug_html = pug_html + "\u003Cmeta" + (" itemprop=\"image\""+pug.attr("content", metadata.image_src, true, true)) + "\u003E\u003Cmeta" + (" name=\"image\""+pug.attr("content", metadata.image_src, true, true)) + "\u003E";
}
else
if ((settings.overleaf)) {
pug_html = pug_html + "\u003Cmeta" + (" itemprop=\"image\""+pug.attr("content", buildImgPath('ol-brand/overleaf_og_logo.png'), true, true)) + "\u003E\u003Cmeta" + (" name=\"image\""+pug.attr("content", buildImgPath('ol-brand/overleaf_og_logo.png'), true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Cmeta itemprop=\"image\" content=\"\u002Fapple-touch-icon.png\"\u003E\u003Cmeta name=\"image\" content=\"\u002Fapple-touch-icon.png\"\u003E";
}
if ((metadata && metadata.keywords)) {
pug_html = pug_html + "\u003Cmeta" + (" name=\"keywords\""+pug.attr("content", metadata.keywords, true, true)) + "\u003E";
}
pug_html = pug_html + "\u003Cmeta" + (" itemprop=\"name\""+pug.attr("content", settings.appName + ", the Online LaTeX Editor", true, true)) + "\u003E";
if ((metadata && metadata.robotsNoindexNofollow)) {
pug_html = pug_html + "\u003Cmeta name=\"robots\" content=\"noindex, nofollow\"\u003E";
}
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:card\""+pug.attr("content", metadata && metadata.twitterCardType ? metadata.twitterCardType : 'summary', true, true)) + "\u003E";
if ((settings.social && settings.social.twitter && settings.social.twitter.handle)) {
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:site\""+pug.attr("content", "@" + settings.social.twitter.handle, true, true)) + "\u003E";
}
if ((metadata && metadata.twitterDescription)) {
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:description\""+pug.attr("content", metadata.twitterDescription, true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:description\""+pug.attr("content", translate("site_description"), true, true)) + "\u003E";
}
if ((metadata && metadata.twitterImage && metadata.twitterImage.fields)) {
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:image\""+pug.attr("content", metadata.twitterImage.fields.file.url, true, true)) + "\u003E\u003Cmeta" + (" name=\"twitter:image:alt\""+pug.attr("content", metadata.twitterImage.fields.title, true, true)) + "\u003E";
}
else
if ((settings.overleaf)) {
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:image\""+pug.attr("content", buildImgPath('ol-brand/overleaf_og_logo.png'), true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Cmeta name=\"twitter:image\" content=\"\u002Fapple-touch-icon.png\"\u003E";
}
if ((settings.social && settings.social.facebook && settings.social.facebook.appId)) {
pug_html = pug_html + "\u003Cmeta" + (" property=\"fb:app_id\""+pug.attr("content", settings.social.facebook.appId, true, true)) + "\u003E";
}
if ((metadata && metadata.openGraphDescription)) {
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:description\""+pug.attr("content", metadata.openGraphDescription, true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:description\""+pug.attr("content", translate("site_description"), true, true)) + "\u003E";
}
if ((metadata && metadata.openGraphImage && metadata.openGraphImage.fields)) {
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image\""+pug.attr("content", metadata.openGraphImage.fields.file.url, true, true)) + "\u003E";
}
else
if ((settings.overleaf)) {
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image\""+pug.attr("content", buildImgPath('ol-brand/overleaf_og_logo.png'), true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Cmeta property=\"og:image\" content=\"\u002Fapple-touch-icon.png\"\u003E";
}
if ((metadata && metadata.openGraphType)) {
pug_html = pug_html + "\u003Cmeta property=\"og:type\" metadata.openGraphType\u003E";
}
else {
pug_html = pug_html + "\u003Cmeta property=\"og:type\" content=\"website\"\u003E";
}
if ((metadata && metadata.openGraphVideo)) {
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:video\""+pug.attr("content", metadata.openGraphVideo, true, true)) + "\u003E";
}
if (!metadata || metadata.viewport !== false) {
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=yes\"\u003E";
}
if (settings.robotsNoindex) {
pug_html = pug_html + "\u003Cmeta name=\"robots\" content=\"noindex\"\u003E";
}
pug_html = pug_html + "\u003Cmeta name=\"apple-mobile-web-app-capable\" content=\"yes\"\u003E\u003Cmeta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\"\u003E\u003Clink rel=\"icon\" sizes=\"32x32\" href=\"\u002Ffavicon-32x32.png\"\u003E\u003Clink rel=\"icon\" sizes=\"16x16\" href=\"\u002Ffavicon-16x16.png\"\u003E\u003Clink rel=\"icon\" href=\"\u002Ffavicon.svg\" type=\"image\u002Fsvg+xml\"\u003E\u003Clink rel=\"apple-touch-icon\" href=\"\u002Fapple-touch-icon.png\"\u003E\u003Clink rel=\"mask-icon\" href=\"\u002Fmask-favicon.svg\" color=\"#046530\"\u003E";
if ((metadata && metadata.canonicalURL)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"canonical\""+pug.attr("href", metadata.canonicalURL, true, true)) + "\u003E";
}
pug_html = pug_html + "\u003Clink rel=\"manifest\" href=\"\u002Fweb.sitemanifest\"\u003E";
const bootstrapVersion = bootstrap5PageStatus !== 'disabled' && (bootstrap5Override || (bootstrap5PageStatus === 'enabled' && (bootstrap5PageSplitTest === '' || splitTestVariants[bootstrap5PageSplitTest] === 'enabled'))) ? 5 : 3
const ieeeStylesheetEnabled = splitTestVariants?.['ieee-stylesheet'] !== 'disabled'
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\""+pug.attr("href", buildCssPath(getCssThemeModifier(userSettings, brandVariation, ieeeStylesheetEnabled), bootstrapVersion), true, true)+" id=\"main-stylesheet\"") + "\u003E";
// iterate entrypointStyles(entrypoint)
;(function(){
  var $$obj = entrypointStyles(entrypoint);
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var file = $$obj[pug_index3];
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\""+pug.attr("href", file, true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var file = $$obj[pug_index3];
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\""+pug.attr("href", file, true, true)) + "\u003E";
    }
  }
}).call(this);

if ((typeof suppressRelAlternateLinks == "undefined")) {
if (settings.i18n.subdomainLang) {
// iterate settings.i18n.subdomainLang
;(function(){
  var $$obj = settings.i18n.subdomainLang;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var subdomainDetails = $$obj[pug_index4];
if (!subdomainDetails.hide) {
pug_html = pug_html + "\u003Clink" + (" rel=\"alternate\""+pug.attr("href", subdomainDetails.url + currentUrl, true, true)+pug.attr("hreflang", subdomainDetails.lngCode, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var subdomainDetails = $$obj[pug_index4];
if (!subdomainDetails.hide) {
pug_html = pug_html + "\u003Clink" + (" rel=\"alternate\""+pug.attr("href", subdomainDetails.url + currentUrl, true, true)+pug.attr("hreflang", subdomainDetails.lngCode, true, true)) + "\u003E";
}
    }
  }
}).call(this);

}
}
if ((entrypoint !== 'marketing')) {
pug_html = pug_html + "\u003Clink" + (" rel=\"preload\""+pug.attr("href", buildJsPath(currentLngCode + "-json.js"), true, true)+" as=\"script\""+pug.attr("nonce", scriptNonce, true, true)) + "\u003E";
}
if ((typeof suppressGoogleAnalytics == "undefined")) {
if ((typeof(ExposedSettings.gaTokenV4) != "undefined" || typeof(ExposedSettings.gaToken) != "undefined")) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)+" id=\"ga-loader\""+pug.attr("data-ga-token", ExposedSettings.gaToken, true, true)+pug.attr("data-ga-token-v4", ExposedSettings.gaTokenV4, true, true)+pug.attr("data-cookie-domain", ExposedSettings.cookieDomain, true, true)+pug.attr("data-session-analytics-id", getSessionAnalyticsId(), true, true)) + "\u003Evar gaSettings = document.querySelector('#ga-loader').dataset;\nvar gaid = gaSettings.gaTokenV4;\nvar gaToken = gaSettings.gaToken;\nvar cookieDomain = gaSettings.cookieDomain;\nvar sessionAnalyticsId = gaSettings.sessionAnalyticsId;\nif(gaid) {\n    var additionalGaConfig = sessionAnalyticsId ? { 'user_id': sessionAnalyticsId } : {};\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){\n        dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n    gtag('config', gaid, { 'anonymize_ip': true, ...additionalGaConfig });\n}\nif (gaToken) {\n    window.ga = window.ga || function () {\n        (window.ga.q = window.ga.q || []).push(arguments);\n    }, window.ga.l = 1 * new Date();\n}\nvar loadGA = window.olLoadGA = function() {\n    if (gaid) {\n        var s = document.createElement('script');\n        s.setAttribute('async', 'async');\n        s.setAttribute('src', 'https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=' + gaid);\n        document.querySelector('head').append(s);\n    } \n    if (gaToken) {\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n        })(window,document,'script','\u002F\u002Fwww.google-analytics.com\u002Fanalytics.js','ga');\n        ga('create', gaToken, cookieDomain.replace(\u002F^\\.\u002F, \"\"));\n        ga('set', 'anonymizeIp', true);\n        if (sessionAnalyticsId) {\n            ga('set', 'userId', sessionAnalyticsId);\n        }\n        ga('send', 'pageview');\n    }\n};\n\u002F\u002F Check if consent given (features\u002Fcookie-banner)\nvar oaCookie = document.cookie.split('; ').find(function(cookie) {\n    return cookie.startsWith('oa=');\n});\nif(oaCookie) {\n    var oaCookieValue = oaCookie.split('=')[1];\n    if(oaCookieValue === '1') {\n        loadGA();\n    }\n}\n\u003C\u002Fscript\u003E";
}
if (typeof(ExposedSettings.gaTokenV4) === "undefined") {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)) + "\u003Ewindow.gtag = function() { console.log(\"would send to GA4\", arguments) };\u003C\u002Fscript\u003E";
}
if (typeof(ExposedSettings.gaToken) === "undefined") {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)) + "\u003Ewindow.ga = function() { console.log(\"would send to GA\", arguments) };\u003C\u002Fscript\u003E";
}
}
pug_html = pug_html + "\u003Cmeta" + (" name=\"ol-csrfToken\""+pug.attr("content", csrfToken, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-baseAssetPath\""+pug.attr("content", buildBaseAssetPath(), true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-mathJaxPath\""+pug.attr("content", mathJaxPath, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-dictionariesRoot\""+pug.attr("content", dictionariesRoot, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-usersEmail\""+pug.attr("content", getUserEmail(), true, true)) + "\u003E\u003Cmeta name=\"ol-ab\" data-type=\"json\" content=\"{}\"\u003E\u003Cmeta" + (" name=\"ol-user_id\""+pug.attr("content", getLoggedInUserId(), true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-i18n\" data-type=\"json\""+pug.attr("content", {
				currentLangCode: currentLngCode
			}, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-ExposedSettings\" data-type=\"json\""+pug.attr("content", ExposedSettings, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-splitTestVariants\" data-type=\"json\""+pug.attr("content", splitTestVariants || {}, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-splitTestInfo\" data-type=\"json\""+pug.attr("content", splitTestInfo || {}, true, true)) + "\u003E";
if ((typeof settings.algolia != "undefined")) {
pug_html = pug_html + "\u003Cmeta" + (" name=\"ol-algolia\" data-type=\"json\""+pug.attr("content", {
					appId: settings.algolia.app_id,
					apiKey: settings.algolia.read_only_api_key,
					indexes: settings.algolia.indexes
				}, true, true)) + "\u003E";
}
pug_html = pug_html + "\u003Cmeta" + (" name=\"ol-isManagedAccount\" data-type=\"boolean\""+pug.attr("content", isManagedAccount, true, true)) + "\u003E";
// iterate userRestrictions || []
;(function(){
  var $$obj = userRestrictions || [];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var restriction = $$obj[pug_index5];
pug_html = pug_html + "\u003Cmeta" + (pug.attr("name", 'ol-cannot-' + restriction, true, true)+" data-type=\"boolean\" content") + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var restriction = $$obj[pug_index5];
pug_html = pug_html + "\u003Cmeta" + (pug.attr("name", 'ol-cannot-' + restriction, true, true)+" data-type=\"boolean\" content") + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cmeta" + (" name=\"ol-bootstrapVersion\" data-type=\"json\""+pug.attr("content", bootstrapVersion, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-recommendedCurrency\""+pug.attr("content", recommendedCurrency, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-groupPlans\" data-type=\"json\""+pug.attr("content", groupPlans, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-currencySymbols\" data-type=\"json\""+pug.attr("content", groupPlanModalOptions.currencySymbols, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-itm_content\""+pug.attr("content", itm_content, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-currentView\""+pug.attr("content", currentView, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-countryCode\""+pug.attr("content", countryCode, true, true)) + "\u003E\u003Cmeta" + (" name=\"ol-websiteRedesignPlansVariant\""+pug.attr("content", websiteRedesignPlansVariant, true, true)) + "\u003E\u003C\u002Fhead\u003E\u003Cbody" + (pug.attr("class", pug.classes([{
		'thin-footer': showThinFooter,
		'website-redesign': isWebsiteRedesign === true
	}], [true]), false, true)+" data-theme=\"default\"") + "\u003E";
if ((settings.recaptcha && settings.recaptcha.siteKeyV3)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)+pug.attr("src", "https://www.recaptcha.net/recaptcha/api.js?render=" + settings.recaptcha.siteKeyV3, true, true)+pug.attr("defer", deferScripts, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
if ((typeof suppressSkipToContent == "undefined")) {
pug_html = pug_html + "\u003Ca class=\"skip-to-content\" href=\"#main-content\"\u003E" + (pug.escape(null == (pug_interp = translate('skip_to_content')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
if ((typeof(suppressNavbar) == "undefined")) {
pug_html = pug_html + "\u003Cnav class=\"navbar navbar-default navbar-main website-redesign-navbar\"\u003E\u003Cdiv class=\"container-fluid\"\u003E\u003Cdiv class=\"navbar-header\"\u003E";
if ((typeof(suppressNavbarRight) == "undefined")) {
pug_html = pug_html + "\u003Cbutton" + (" class=\"navbar-toggle collapsed\""+" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main-collapse\""+pug.attr("aria-label", "Toggle " + translate('navigation'), true, true)) + "\u003E\u003Ci class=\"fa fa-bars\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E";
}
var enableUpgradeButton = projectDashboardReact && usersBestSubscription && usersBestSubscription.type === 'free'
if ((enableUpgradeButton)) {
pug_html = pug_html + "\u003Ca class=\"btn btn-primary pull-right me-2 visible-xs\" href=\"\u002Fuser\u002Fsubscription\u002Fplans\" event-tracking=\"upgrade-button-click\" event-tracking-mb=\"true\" event-tracking-label=\"upgrade\" event-tracking-trigger=\"click\" event-segmentation=\"{&quot;source&quot;: &quot;dashboard-top&quot;, &quot;project-dashboard-react&quot;: &quot;enabled&quot;, &quot;is-dashboard-sidebar-hidden&quot;: &quot;true&quot;, &quot;is-screen-width-less-than-768px&quot;: &quot;true&quot;}\"\u003E" + (pug.escape(null == (pug_interp = translate("upgrade")) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
if (settings.nav.custom_logo) {
pug_html = pug_html + "\u003Ca" + (" class=\"navbar-brand\""+" href=\"\u002F\""+pug.attr("aria-label", settings.appName, true, true)+pug.attr("style", pug.style('background-image:url("'+settings.nav.custom_logo+'")'), true, true)) + "\u003E\u003C\u002Fa\u003E";
}
else
if ((nav.title)) {
pug_html = pug_html + "\u003Ca" + (" class=\"navbar-title\""+" href=\"\u002F\""+pug.attr("aria-label", settings.appName, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = nav.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (" class=\"navbar-brand\""+" href=\"\u002F\""+pug.attr("aria-label", settings.appName, true, true)) + "\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
var canDisplayAdminMenu = hasAdminAccess()
var canDisplayAdminRedirect = canRedirectToAdminDomain()
var canDisplaySplitTestMenu = hasFeature('saas') && (canDisplayAdminMenu || (getSessionUser() && getSessionUser().staffAccess && (getSessionUser().staffAccess.splitTestMetrics || getSessionUser().staffAccess.splitTestManagement)))
var canDisplaySurveyMenu = hasFeature('saas') && canDisplayAdminMenu
if ((typeof(suppressNavbarRight) == "undefined")) {
pug_html = pug_html + "\u003Cdiv class=\"navbar-collapse collapse\" id=\"navbar-main-collapse\"\u003E\u003Cul class=\"nav navbar-nav navbar-right\"\u003E";
if ((canDisplayAdminMenu || canDisplayAdminRedirect || canDisplaySplitTestMenu)) {
pug_html = pug_html + "\u003Cli class=\"dropdown subdued\"\u003E\u003Ca class=\"dropdown-toggle\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\"\u003EAdmin\u003Cspan class=\"caret\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Cul class=\"dropdown-menu\"\u003E";
if (canDisplayAdminMenu) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca href=\"\u002Fadmin\"\u003EManage Site\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fadmin\u002Fuser\"\u003EManage Users\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fadmin\u002Fproject\"\u003EProject URL Lookup\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
if (canDisplayAdminRedirect) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug.attr("href", settings.adminUrl, true, true)) + "\u003ESwitch to Admin\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
if (canDisplaySplitTestMenu) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca href=\"\u002Fadmin\u002Fsplit-test\"\u003EManage Feature Flags\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
if (canDisplaySurveyMenu) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca href=\"\u002Fadmin\u002Fsurvey\"\u003EManage Surveys\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C!-- loop over header_extras--\u003E";
// iterate nav.header_extras
;(function(){
  var $$obj = nav.header_extras;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var item = $$obj[pug_index6];
if ((item.only_when_logged_in && getSessionUser())
				|| (item.only_when_logged_out && (!getSessionUser()))
				|| (!item.only_when_logged_out && !item.only_when_logged_in && !item.only_content_pages)
				|| (item.only_content_pages && (typeof(suppressNavContentLinks) == "undefined" || !suppressNavContentLinks))
){
	var showNavItem = true
} else {
	var showNavItem = false
}

if (showNavItem) {
if (item.dropdown) {
pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes(["dropdown",item.class], [false,true]), false, true)) + "\u003E\u003Ca class=\"dropdown-toggle\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\"\u003E" + (null == (pug_interp = translate(item.text)) ? "" : pug_interp) + "\u003Cspan class=\"caret\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Cul class=\"dropdown-menu\"\u003E";
// iterate item.dropdown
;(function(){
  var $$obj = item.dropdown;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var child = $$obj[pug_index7];
if (child.divider) {
pug_html = pug_html + "\u003Cli class=\"divider\"\u003E\u003C\u002Fli\u003E";
}
else
if (child.isContactUs) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca data-ol-open-contact-form-modal=\"contact-us\" href\u003E\u003Cspan event-tracking=\"menu-clicked-contact\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\"\u003E" + (pug.escape(null == (pug_interp = translate("contact_us")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E";
if (child.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([child.class], [true]), false, true)+pug.attr("href", child.url, true, true)+pug.attr("event-tracking", child.event, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\""+pug.attr("event-segmentation", child.eventSegmentation, true, true)) + "\u003E" + (null == (pug_interp = translate(child.text)) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = translate(child.text)) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var child = $$obj[pug_index7];
if (child.divider) {
pug_html = pug_html + "\u003Cli class=\"divider\"\u003E\u003C\u002Fli\u003E";
}
else
if (child.isContactUs) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca data-ol-open-contact-form-modal=\"contact-us\" href\u003E\u003Cspan event-tracking=\"menu-clicked-contact\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\"\u003E" + (pug.escape(null == (pug_interp = translate("contact_us")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E";
if (child.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([child.class], [true]), false, true)+pug.attr("href", child.url, true, true)+pug.attr("event-tracking", child.event, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\""+pug.attr("event-segmentation", child.eventSegmentation, true, true)) + "\u003E" + (null == (pug_interp = translate(child.text)) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = translate(child.text)) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([item.class], [true]), false, true)) + "\u003E";
if (item.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([item.class], [true]), false, true)+pug.attr("href", item.url, true, true)+pug.attr("event-tracking", item.event, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\"") + "\u003E" + (null == (pug_interp = translate(item.text)) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = translate(item.text)) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var item = $$obj[pug_index6];
if ((item.only_when_logged_in && getSessionUser())
				|| (item.only_when_logged_out && (!getSessionUser()))
				|| (!item.only_when_logged_out && !item.only_when_logged_in && !item.only_content_pages)
				|| (item.only_content_pages && (typeof(suppressNavContentLinks) == "undefined" || !suppressNavContentLinks))
){
	var showNavItem = true
} else {
	var showNavItem = false
}

if (showNavItem) {
if (item.dropdown) {
pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes(["dropdown",item.class], [false,true]), false, true)) + "\u003E\u003Ca class=\"dropdown-toggle\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\"\u003E" + (null == (pug_interp = translate(item.text)) ? "" : pug_interp) + "\u003Cspan class=\"caret\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Cul class=\"dropdown-menu\"\u003E";
// iterate item.dropdown
;(function(){
  var $$obj = item.dropdown;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var child = $$obj[pug_index8];
if (child.divider) {
pug_html = pug_html + "\u003Cli class=\"divider\"\u003E\u003C\u002Fli\u003E";
}
else
if (child.isContactUs) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca data-ol-open-contact-form-modal=\"contact-us\" href\u003E\u003Cspan event-tracking=\"menu-clicked-contact\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\"\u003E" + (pug.escape(null == (pug_interp = translate("contact_us")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E";
if (child.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([child.class], [true]), false, true)+pug.attr("href", child.url, true, true)+pug.attr("event-tracking", child.event, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\""+pug.attr("event-segmentation", child.eventSegmentation, true, true)) + "\u003E" + (null == (pug_interp = translate(child.text)) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = translate(child.text)) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var child = $$obj[pug_index8];
if (child.divider) {
pug_html = pug_html + "\u003Cli class=\"divider\"\u003E\u003C\u002Fli\u003E";
}
else
if (child.isContactUs) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca data-ol-open-contact-form-modal=\"contact-us\" href\u003E\u003Cspan event-tracking=\"menu-clicked-contact\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\"\u003E" + (pug.escape(null == (pug_interp = translate("contact_us")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E";
if (child.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([child.class], [true]), false, true)+pug.attr("href", child.url, true, true)+pug.attr("event-tracking", child.event, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\""+pug.attr("event-segmentation", child.eventSegmentation, true, true)) + "\u003E" + (null == (pug_interp = translate(child.text)) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = translate(child.text)) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([item.class], [true]), false, true)) + "\u003E";
if (item.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([item.class], [true]), false, true)+pug.attr("href", item.url, true, true)+pug.attr("event-tracking", item.event, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\"") + "\u003E" + (null == (pug_interp = translate(item.text)) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = translate(item.text)) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C!-- logged out--\u003E";
if (!getSessionUser()) {
pug_html = pug_html + "\u003C!-- register link--\u003E";
if (hasFeature('registration-page')) {
pug_html = pug_html + "\u003Cli class=\"primary\"\u003E\u003Ca" + (" href=\"\u002Fregister\" event-tracking=\"menu-clicked-register\" event-tracking-action=\"clicked\" event-tracking-trigger=\"click\" event-tracking-mb=\"true\""+pug.attr("event-segmentation", { page: currentUrl }, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = translate('sign_up')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C!-- login link--\u003E\u003Cli class=\"secondary\"\u003E\u003Ca" + (" href=\"\u002Flogin\" event-tracking=\"menu-clicked-login\" event-tracking-action=\"clicked\" event-tracking-trigger=\"click\" event-tracking-mb=\"true\""+pug.attr("event-segmentation", { page: currentUrl }, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = translate('log_in')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C!-- projects link and account menu--\u003E";
if (getSessionUser()) {
pug_html = pug_html + "\u003Cli class=\"secondary\"\u003E\u003Ca href=\"\u002Fproject\"\u003E" + (pug.escape(null == (pug_interp = translate('Projects')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"secondary dropdown\"\u003E\u003Ca class=\"dropdown-toggle\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\"\u003E" + (pug.escape(null == (pug_interp = translate('Account')) ? "" : pug_interp)) + "\u003Cspan class=\"caret\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Cul class=\"dropdown-menu\"\u003E\u003Cli\u003E\u003Cdiv class=\"subdued\"\u003E" + (pug.escape(null == (pug_interp = getSessionUser().email) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"divider hidden-xs hidden-sm\"\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fuser\u002Fsettings\"\u003E" + (pug.escape(null == (pug_interp = translate('Account Settings')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
if (nav.showSubscriptionLink) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca href=\"\u002Fuser\u002Fsubscription\"\u003E" + (pug.escape(null == (pug_interp = translate('subscription')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003Cli class=\"divider hidden-xs hidden-sm\"\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Cform method=\"POST\" action=\"\u002Flogout\"\u003E\u003Cinput" + (" name=\"_csrf\" type=\"hidden\""+pug.attr("value", csrfToken, true, true)) + "\u003E\u003Cbutton class=\"btn-link text-left dropdown-menu-button\"\u003E" + (pug.escape(null == (pug_interp = translate('log_out')) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fnav\u003E";
}
pug_html = pug_html + "\u003Cmain class=\"website-redesign\" id=\"main-content\"\u003E\u003Cdiv class=\"plans-page\"\u003E\u003Cdiv class=\"container\"\u003E";
if (showInrGeoBanner) {
pug_html = pug_html + "\u003Cdiv class=\"mb-5 notification notification-type-success text-center\"\u003E\u003Cdiv class=\"notification-content\"\u003E" + (null == (pug_interp = translate("inr_discount_offer_plans_page_banner", {flag: '🇮🇳'})) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
if (showBrlGeoBanner) {
pug_html = pug_html + "\u003Cdiv class=\"mb-5 notification notification-type-success text-center\"\u003E\u003Cdiv class=\"notification-content\"\u003E" + (null == (pug_interp = translate("brl_discount_offer_plans_page_banner", {flag: '🇧🇷'})) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
if (showLATAMBanner) {
pug_html = pug_html + "\u003Cdiv class=\"mb-5 notification notification-type-success text-center\"\u003E\u003Cdiv class=\"notification-content\"\u003E" + (null == (pug_interp = translate("latam_discount_offer_plans_page_banner", {flag: latamCountryBannerDetails.latamCountryFlag, country: latamCountryBannerDetails.country, currency: latamCountryBannerDetails.currency, discount: latamCountryBannerDetails.discount })) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-12\"\u003E\u003Ch1 class=\"text-center\"\u003E";
pug_mixins["eyebrow"](translate('plans_and_pricing_lowercase'));
pug_html = pug_html + (pug.escape(null == (pug_interp = translate('choose_your_plan')) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["btn_buy_individual"] = pug_interp = function(highlighted, eventTrackingKey, subscriptionPlan, period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes(["btn",(highlighted ? 'btn-primary' : 'btn-secondary')], [false,true]), false, true)+pug.attr("data-ol-start-new-subscription", subscriptionPlan, true, true)+pug.attr("data-ol-event-tracking-key", eventTrackingKey, true, true)+pug.attr("data-ol-item-view", period, true, true)) + "\u003E";
if ((period === 'monthly')) {
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("try_for_free")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("buy_now_no_exclamation_mark")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
};
pug_mixins["btn_buy_individual_free"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ((!getSessionUser())) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes(["btn",(highlighted ? 'btn-primary' : 'btn-secondary')], [false,true]), false, true)+" href=\"\u002Fregister\"") + "\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("try_for_free")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes(["btn","invisible",(highlighted ? 'btn-primary' : 'btn-secondary')], [false,false,true]), false, true)+" aria-hidden=\"true\"") + "\u003E\u003C\u002Fa\u003E";
}
};
pug_mixins["btn_buy_individual_collaborator"] = pug_interp = function(highlighted, eventTrackingKey, additionalEventSegmentation, period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn_buy_individual"](highlighted, eventTrackingKey, 'collaborator', period);
if ((period === 'monthly')) {
pug_mixins["additional_link_buy"](eventTrackingKey, additionalEventSegmentation, 'collaborator', period);
}
};
pug_mixins["btn_buy_individual_professional"] = pug_interp = function(highlighted, eventTrackingKey, additionalEventSegmentation, period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn_buy_individual"](highlighted, eventTrackingKey, 'professional', period);
if ((period === 'monthly')) {
pug_mixins["additional_link_buy"](eventTrackingKey, additionalEventSegmentation, 'professional', period);
}
};
pug_mixins["btn_buy_group_collaborator"] = pug_interp = function(highlighted, eventTrackingKey){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes(["btn",(highlighted ? 'btn-primary' : 'btn-secondary')], [false,true]), false, true)+" data-ol-start-new-subscription=\"group_collaborator\""+pug.attr("data-ol-event-tracking-key", eventTrackingKey, true, true)+" data-ol-item-view=\"annual\""+pug.attr("data-ol-has-custom-href", true, true, true)+" data-ol-location=\"table-header\"") + "\u003E\u003Cspan class=\"visible-mobile-and-tablet\"\u003E" + (pug.escape(null == (pug_interp = translate("customize")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"visible-desktop\"\u003E" + (pug.escape(null == (pug_interp = translate("customize_your_plan")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
};
pug_mixins["btn_buy_group_professional"] = pug_interp = function(highlighted, eventTrackingKey){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes(["btn",(highlighted ? 'btn-primary' : 'btn-secondary')], [false,true]), false, true)+" data-ol-start-new-subscription=\"group_professional\""+pug.attr("data-ol-event-tracking-key", eventTrackingKey, true, true)+" data-ol-item-view=\"annual\""+pug.attr("data-ol-has-custom-href", true, true, true)+" data-ol-location=\"table-header\"") + "\u003E\u003Cspan class=\"visible-mobile-and-tablet\"\u003E" + (pug.escape(null == (pug_interp = translate("customize")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"visible-desktop\"\u003E" + (pug.escape(null == (pug_interp = translate("customize_your_plan")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
};
pug_mixins["btn_buy_group_organization"] = pug_interp = function(highlighted, eventTrackingKey){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes(["btn",(highlighted ? 'btn-primary' : 'btn-secondary')], [false,true]), false, true)+" data-ol-start-new-subscription=\"group_organization\""+pug.attr("data-ol-event-tracking-key", eventTrackingKey, true, true)+" data-ol-item-view=\"annual\""+pug.attr("data-ol-has-custom-href", true, true, true)+" data-ol-location=\"table-header\" href=\"\u002Ffor\u002Fcontact-sales\" target=\"_blank\"") + "\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("contact_us_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
};
pug_mixins["btn_buy_student_free"] = pug_interp = function(highlighted){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ((!getSessionUser())) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes(["btn",(highlighted ? 'btn-primary' : 'btn-secondary')], [false,true]), false, true)+" href=\"\u002Fregister\"") + "\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("try_for_free")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
}
};
pug_mixins["btn_buy_student_student"] = pug_interp = function(highlighted, eventTrackingKey, additionalEventSegmentation, period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes(["btn",(highlighted ? 'btn-primary' : 'btn-secondary')], [false,true]), false, true)+" data-ol-start-new-subscription=\"student\""+pug.attr("data-ol-event-tracking-key", eventTrackingKey, true, true)+pug.attr("data-ol-item-view", period, true, true)+" data-ol-location=\"card\"") + "\u003E";
if ((period === 'monthly')) {
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("try_for_free")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("buy_now_no_exclamation_mark")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
if ((period === 'monthly')) {
pug_mixins["additional_link_buy"](eventTrackingKey, additionalEventSegmentation, 'student', period);
}
};
pug_mixins["additional_link_group"] = pug_interp = function(eventTrackingKey, additionalEventSegmentation, plan){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var buttonSegmentation = plan + '-link'
additionalEventSegmentation = additionalEventSegmentation || {}
var segmentation = { ...additionalEventSegmentation, button: buttonSegmentation, location: 'table-header' }
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-bg-ghost\""+" href=\"\u002Ffor\u002Fcontact-sales\" target=\"_blank\""+pug.attr("event-tracking", eventTrackingKey, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\""+pug.attr("event-segmentation", segmentation, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = translate("contact_us_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
};
pug_mixins["additional_link_buy"] = pug_interp = function(eventTrackingKey, additionalEventSegmentation, plan, period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var buttonSegmentation = plan + '-link'
additionalEventSegmentation = additionalEventSegmentation || {}
var segmentation = { ...additionalEventSegmentation, button: buttonSegmentation, location: 'table-header', period }
var itmCampaign = itm_campaign ? { itm_campaign } : {itm_campaign: 'plans'}
var itmReferrer = itm_referrer ? { itm_referrer } : {}
var qs = new URLSearchParams({planCode: plan, currency: recommendedCurrency, itm_content: 'card', ...itmCampaign, ...itmReferrer})
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-bg-ghost\""+pug.attr("href", `/user/subscription/new?${qs.toString()}`, true, true)+pug.attr("event-tracking", eventTrackingKey, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\""+pug.attr("event-segmentation", segmentation, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = translate("buy_now_no_exclamation_mark")) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
};
pug_mixins["plans_cta"] = pug_interp = function(tableHeadKey, highlighted, eventTrackingKey, additionalEventSegmentation, period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
switch (tableHeadKey){
case 'individual_free':
pug_mixins["btn_buy_individual_free"]();
  break;
case 'individual_collaborator':
pug_mixins["btn_buy_individual_collaborator"](highlighted, eventTrackingKey, additionalEventSegmentation, period);
  break;
case 'individual_professional':
pug_mixins["btn_buy_individual_professional"](highlighted, eventTrackingKey, additionalEventSegmentation, period);
  break;
case 'group_collaborator':
pug_mixins["btn_buy_group_collaborator"](highlighted, eventTrackingKey);
pug_mixins["additional_link_group"](eventTrackingKey, additionalEventSegmentation, 'group_collaborator');
  break;
case 'group_professional':
pug_mixins["btn_buy_group_professional"](highlighted, eventTrackingKey);
pug_mixins["additional_link_group"](eventTrackingKey, additionalEventSegmentation, 'group_professional');
  break;
case 'group_organization':
pug_mixins["btn_buy_group_organization"](highlighted, eventTrackingKey);
pug_html = pug_html + "\u003Csmall class=\"plans-table-th-content-additional-link invisible\" aria-hidden=\"true\"\u003E\u003C\u002Fsmall\u003E";
  break;
case 'student_free':
pug_mixins["btn_buy_student_free"](highlighted);
  break;
case 'student_student':
pug_mixins["btn_buy_student_student"](highlighted, eventTrackingKey, additionalEventSegmentation, period);
  break;
}
};
pug_mixins["table_short_feature_list_free"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate("one_collaborator")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
};
pug_mixins["table_short_feature_list_collaborator"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (null == (pug_interp = translate("x_collaborators_per_project", {collaboratorsCount: '10'})) ? "" : pug_interp) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate("all_premium_features")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
};
pug_mixins["table_short_feature_list_professional"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (null == (pug_interp = translate("unlimited_collabs_rt",{},["b"])) ? "" : pug_interp) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate("all_premium_features")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
};
pug_mixins["table_short_feature_list_group_collaborator"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate("up_to")) ? "" : pug_interp)) + " " + (null == (pug_interp = translate("x_collaborators_per_project", {collaboratorsCount: '10'})) ? "" : pug_interp) + "\u003C\u002Fli\u003E\u003Cli\u003E";
pug_mixins["table_head_group_total_per_year"]('collaborator');
pug_html = pug_html + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
};
pug_mixins["table_short_feature_list_group_professional"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate("unlimited_collaborators_in_each_project")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E";
pug_mixins["table_head_group_total_per_year"]('professional');
pug_html = pug_html + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
};
pug_mixins["table_short_feature_list_group_organization"] = pug_interp = function(additionalEventSegmentation){
var block = (this && this.block), attributes = (this && this.attributes) || {};
additionalEventSegmentation = additionalEventSegmentation || {}
var segmentation = { ...additionalEventSegmentation, button: 'group_organization-link', location: 'table-header-list', period: 'annual', currency: recommendedCurrency}
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate("best_choices_companies_universities_non_profits")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate("for_groups_or_site_wide")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca" + (" class=\"inline-green-link\""+" target=\"_blank\" href=\"\u002Ffor\u002Fcontact-sales\" event-tracking=\"plans-page-click\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\""+pug.attr("event-segmentation", segmentation, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = translate("also_available_as_on_premises")) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
};
pug_mixins["table_short_feature_list_student_student"] = pug_interp = function(showExtraContent){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (null == (pug_interp = translate("x_collaborators_per_project", {collaboratorsCount: '6'})) ? "" : pug_interp) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate("all_premium_features")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
if (showExtraContent) {
pug_html = pug_html + "\u003Cli\u003E \u003Cb\u003E" + (null == (pug_interp = translate("for_students_only")) ? "" : pug_interp) + "\u003C\u002Fb\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E";
};
pug_mixins["table_column_headers_row"] = pug_interp = function({maxColumn, tableHeadKeys, highlightedColKey, highlightedColTranslationKey}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Cth\u003E\u003C\u002Fth\u003E";
for (var i = 0; i < maxColumn; i++)
{
var tableHeadKey = tableHeadKeys[i]
var highlighted = highlightedColKey === tableHeadKey
var thClass = highlighted ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Cth" + (pug.attr("class", pug.classes([thClass], [true]), false, true)+" scope=\"col\"") + "\u003E\u003Cdiv class=\"plans-table-th\"\u003E";
if ((highlighted)) {
pug_html = pug_html + "\u003Cp class=\"plans-table-green-highlighted-text\"\u003E" + (pug.escape(null == (pug_interp = translate(highlightedColTranslationKey)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"plans-table-th-content\"\u003E";
if (tableHeadKey) {
switch (tableHeadKey){
case 'individual_free':
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("free")) ? "" : pug_interp));
  break;
case 'individual_collaborator':
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("standard")) ? "" : pug_interp));
  break;
case 'individual_professional':
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("professional")) ? "" : pug_interp));
  break;
case 'group_collaborator':
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("group_standard")) ? "" : pug_interp));
  break;
case 'group_professional':
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("group_professional")) ? "" : pug_interp));
  break;
case 'group_organization':
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("organization")) ? "" : pug_interp));
  break;
case 'student_free':
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("free")) ? "" : pug_interp));
  break;
case 'student_student':
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("student")) ? "" : pug_interp));
  break;
}
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
};




pug_mixins["gen_localized_price_for_plan_view"] = pug_interp = function(plan, view){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = formatCurrency(settings.localizedPlanPricing[recommendedCurrency][plan][view], recommendedCurrency, language, true)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
};
pug_mixins["currency_and_payment_methods"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"row plans-payment-methods text-centered\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E\u003Cp\u003E\u003Cb\u003E" + (pug.escape(null == (pug_interp = translate("all_prices_displayed_are_in_currency", { recommendedCurrency })) ? "" : pug_interp)) + "\u003C\u002Fb\u003E&nbsp;" + (pug.escape(null == (pug_interp = translate("subject_to_additional_vat")) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"plans-payment-methods-icons\"\u003E\u003Cimg" + (pug.attr("src", buildImgPath('/other-brands/logo_mastercard.svg'), true, true)+" aria-hidden=\"true\"") + "\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate('payment_method_accepted', { paymentMethod: 'Mastercard' })) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cimg" + (pug.attr("src", buildImgPath('/other-brands/logo_visa.svg'), true, true)+" aria-hidden=\"true\"") + "\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate('payment_method_accepted', { paymentMethod: 'Visa' })) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cimg" + (pug.attr("src", buildImgPath('/other-brands/logo_amex.svg'), true, true)+" aria-hidden=\"true\"") + "\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate('payment_method_accepted', { paymentMethod: 'Amex' })) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cimg" + (pug.attr("src", buildImgPath('/other-brands/logo_paypal.svg'), true, true)+" aria-hidden=\"true\"") + "\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate('payment_method_accepted', { paymentMethod: 'Paypal' })) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["plans_table"] = pug_interp = function(period, config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var maxColumn = config.maxColumn || 4
var tableHeadKeys = Object.keys(config.tableHead)
var highlightedColKey = tableHeadKeys[config.highlightedColumn.index]
var highlightedColTranslationKey  = config.highlightedColumn.text[period] === 'most_popular' ? 'most_popular_uppercase' : config.highlightedColumn.text[period] === 'saving_20_percent' ? 'saving_20_percent_no_exclamation' : config.highlightedColumn.text[period] 
pug_mixins["table_column_headers_row"]({maxColumn, tableHeadKeys, highlightedColKey, highlightedColTranslationKey});
pug_html = pug_html + "\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-price-row plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E";
for (const [tableHeadKey] of Object.entries(config.tableHead))
{
var highlighted =  highlightedColKey === tableHeadKey
var eventTrackingKey = config.eventTrackingKey
var additionalEventSegmentation = config.additionalEventSegmentation || {}
var tdClass = highlighted ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E\u003Cdiv class=\"plans-table-cell plans-table-cell-price\"\u003E";
switch (tableHeadKey){
case 'individual_free':
pug_mixins["table_head_price"]('free', period);
  break;
case 'individual_collaborator':
pug_mixins["table_head_price"]('collaborator', period);
  break;
case 'individual_professional':
pug_mixins["table_head_price"]('professional', period);
  break;
case 'group_collaborator':
pug_mixins["table_price_group_collaborator"]();
  break;
case 'group_professional':
pug_mixins["table_price_group_professional"]();
  break;
case 'group_organization':
pug_html = pug_html + "\u003Cdiv class=\"plans-table-comments-icon\"\u003E\u003Cdiv class=\"match-non-discounted-price-alignment\"\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Eforum\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
  break;
case 'student_free':
pug_mixins["table_head_price"]('free', period);
  break;
case 'student_student':
pug_mixins["table_head_price"]('student', period);
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-cta-mobile plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E";
for (const [tableHeadKey] of Object.entries(config.tableHead))
{
var highlighted =  highlightedColKey === tableHeadKey
var eventTrackingKey = config.eventTrackingKey
var additionalEventSegmentation = config.additionalEventSegmentation || {}
var tdClass = highlighted ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E\u003Cdiv class=\"plans-table-cell plans-table-cell-cta-mobile\"\u003E\u003Cdiv class=\"plans-table-btn-buy-container-mobile\"\u003E";
pug_mixins["plans_cta"](tableHeadKey, highlighted, eventTrackingKey, additionalEventSegmentation, period);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-short-feature-list plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E";
for (const [tableHeadKey, tableHeadOptions] of Object.entries(config.tableHead))
{
var highlighted =  highlightedColKey === tableHeadKey
var eventTrackingKey = config.eventTrackingKey
var additionalEventSegmentation = config.additionalEventSegmentation || {}
var tdClass = highlighted ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E\u003Cdiv class=\"plans-table-cell plans-table-cell-short-feature-list\"\u003E\u003Cdiv\u003E";
switch (tableHeadKey){
case 'individual_free':
pug_mixins["table_short_feature_list_free"]();
  break;
case 'individual_collaborator':
pug_mixins["table_short_feature_list_collaborator"]();
  break;
case 'individual_professional':
pug_mixins["table_short_feature_list_professional"]();
  break;
case 'group_collaborator':
pug_mixins["table_short_feature_list_group_collaborator"]();
  break;
case 'group_professional':
pug_mixins["table_short_feature_list_group_professional"]();
  break;
case 'group_organization':
pug_mixins["table_short_feature_list_group_organization"](additionalEventSegmentation);
  break;
case 'student_free':
pug_mixins["table_short_feature_list_free"]();
  break;
case 'student_student'	:
pug_mixins["table_short_feature_list_student_student"](tableHeadOptions.showExtraContent);
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-cta-desktop plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E";
for (const [tableHeadKey] of Object.entries(config.tableHead))
{
var highlighted =  highlightedColKey === tableHeadKey
var eventTrackingKey = config.eventTrackingKey
var additionalEventSegmentation = config.additionalEventSegmentation || {}
var tdClass = highlighted ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E\u003Cdiv class=\"plans-table-cell plans-table-cell-cta-desktop\"\u003E\u003Cdiv class=\"plans-table-btn-buy-container-desktop\"\u003E";
pug_mixins["plans_cta"](tableHeadKey, highlighted, eventTrackingKey, additionalEventSegmentation, period);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
// iterate config.features
;(function(){
  var $$obj = config.features;
  if ('number' == typeof $$obj.length) {
      for (var featuresSectionIndex = 0, $$l = $$obj.length; featuresSectionIndex < $$l; featuresSectionIndex++) {
        var featuresPerSection = $$obj[featuresSectionIndex];
var dividerColspan = Object.values(config.tableHead).length + 1
if (featuresPerSection.divider) {
pug_html = pug_html + "\u003Ctr class=\"plans-table-divider\"\u003E\u003Ctd" + (pug.attr("class", pug.classes([((config.highlightedColumn.index === Object.keys(config.tableHead).length - 1) ? 'plans-table-last-col-highlighted' : '')], [true]), false, true)+pug.attr("colspan", dividerColspan, true, true)) + "\u003E\u003Cdiv class=\"plans-table-cell-divider\"\u003E\u003Cdiv class=\"plans-table-cell-divider-content\"\u003E\u003Cb class=\"plans-table-divider-label\"\u003E" + (pug.escape(null == (pug_interp = translate(featuresPerSection.dividerLabel)) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003Ci" + (" class=\"material-symbols material-symbols-outlined icon-sm\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(featuresPerSection.dividerInfo), true, true)+" data-placement=\"top\"") + "\u003Ehelp\u003C\u002Fi\u003E\u003Cspan class=\"plans-table-divider-learn-more-container\"\u003E\u003Cspan\u003E(\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"plans-table-divider-learn-more-text\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(featuresPerSection.dividerInfo), true, true)+" data-placement=\"top\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("learn_more_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E)\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate(featuresPerSection.dividerInfo)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
// iterate featuresPerSection.items
;(function(){
  var $$obj = featuresPerSection.items;
  if ('number' == typeof $$obj.length) {
      for (var featureIndex = 0, $$l = $$obj.length; featureIndex < $$l; featureIndex++) {
        var feature = $$obj[featureIndex];
pug_html = pug_html + "\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-feature-row plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Cth" + (pug.attr("class", pug.classes([`${featuresSectionIndex === 0 && featureIndex === 0 ? 'plans-table-first-feature-header' : ''}`], [true]), false, true)+" event-tracking=\"plans-page-table\" event-tracking-trigger=\"hover\" event-tracking-ga=\"subscription-funnel\""+pug.attr("event-tracking-label", `${feature.feature}`, true, true)+" scope=\"row\"") + "\u003E\u003Cdiv class=\"plans-table-feature-name\"\u003E\u003Cdiv class=\"plans-table-feature-name-content\"\u003E";
if (feature.info) {
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate(feature.feature)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Ci" + (" class=\"material-symbols material-symbols-outlined icon-sm plans-table-feature-question-icon\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(feature.info), true, true)+" data-placement=\"right\"") + "\u003Ehelp\u003C\u002Fi\u003E\u003Cspan class=\"plans-table-feature-learn-more-container\"\u003E\u003Cspan\u003E(\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"plans-table-feature-learn-more-text\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(feature.info), true, true)+" data-placement=\"top\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("learn_more_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E)\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate(feature.info)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + (pug.escape(null == (pug_interp = translate(feature.feature)) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E";
// iterate Object.keys(feature.plans)
;(function(){
  var $$obj = Object.keys(feature.plans);
  if ('number' == typeof $$obj.length) {
      for (var planIndex = 0, $$l = $$obj.length; planIndex < $$l; planIndex++) {
        var plan = $$obj[planIndex];
var tableHeadOptions = Object.values(config.tableHead)[planIndex] || {}
var tdClass = planIndex === config.highlightedColumn.index ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E";
pug_mixins["table_cell"](feature, plan);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var planIndex in $$obj) {
      $$l++;
      var plan = $$obj[planIndex];
var tableHeadOptions = Object.values(config.tableHead)[planIndex] || {}
var tdClass = planIndex === config.highlightedColumn.index ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E";
pug_mixins["table_cell"](feature, plan);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var featureIndex in $$obj) {
      $$l++;
      var feature = $$obj[featureIndex];
pug_html = pug_html + "\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-feature-row plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Cth" + (pug.attr("class", pug.classes([`${featuresSectionIndex === 0 && featureIndex === 0 ? 'plans-table-first-feature-header' : ''}`], [true]), false, true)+" event-tracking=\"plans-page-table\" event-tracking-trigger=\"hover\" event-tracking-ga=\"subscription-funnel\""+pug.attr("event-tracking-label", `${feature.feature}`, true, true)+" scope=\"row\"") + "\u003E\u003Cdiv class=\"plans-table-feature-name\"\u003E\u003Cdiv class=\"plans-table-feature-name-content\"\u003E";
if (feature.info) {
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate(feature.feature)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Ci" + (" class=\"material-symbols material-symbols-outlined icon-sm plans-table-feature-question-icon\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(feature.info), true, true)+" data-placement=\"right\"") + "\u003Ehelp\u003C\u002Fi\u003E\u003Cspan class=\"plans-table-feature-learn-more-container\"\u003E\u003Cspan\u003E(\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"plans-table-feature-learn-more-text\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(feature.info), true, true)+" data-placement=\"top\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("learn_more_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E)\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate(feature.info)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + (pug.escape(null == (pug_interp = translate(feature.feature)) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E";
// iterate Object.keys(feature.plans)
;(function(){
  var $$obj = Object.keys(feature.plans);
  if ('number' == typeof $$obj.length) {
      for (var planIndex = 0, $$l = $$obj.length; planIndex < $$l; planIndex++) {
        var plan = $$obj[planIndex];
var tableHeadOptions = Object.values(config.tableHead)[planIndex] || {}
var tdClass = planIndex === config.highlightedColumn.index ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E";
pug_mixins["table_cell"](feature, plan);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var planIndex in $$obj) {
      $$l++;
      var plan = $$obj[planIndex];
var tableHeadOptions = Object.values(config.tableHead)[planIndex] || {}
var tdClass = planIndex === config.highlightedColumn.index ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E";
pug_mixins["table_cell"](feature, plan);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var featuresSectionIndex in $$obj) {
      $$l++;
      var featuresPerSection = $$obj[featuresSectionIndex];
var dividerColspan = Object.values(config.tableHead).length + 1
if (featuresPerSection.divider) {
pug_html = pug_html + "\u003Ctr class=\"plans-table-divider\"\u003E\u003Ctd" + (pug.attr("class", pug.classes([((config.highlightedColumn.index === Object.keys(config.tableHead).length - 1) ? 'plans-table-last-col-highlighted' : '')], [true]), false, true)+pug.attr("colspan", dividerColspan, true, true)) + "\u003E\u003Cdiv class=\"plans-table-cell-divider\"\u003E\u003Cdiv class=\"plans-table-cell-divider-content\"\u003E\u003Cb class=\"plans-table-divider-label\"\u003E" + (pug.escape(null == (pug_interp = translate(featuresPerSection.dividerLabel)) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003Ci" + (" class=\"material-symbols material-symbols-outlined icon-sm\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(featuresPerSection.dividerInfo), true, true)+" data-placement=\"top\"") + "\u003Ehelp\u003C\u002Fi\u003E\u003Cspan class=\"plans-table-divider-learn-more-container\"\u003E\u003Cspan\u003E(\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"plans-table-divider-learn-more-text\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(featuresPerSection.dividerInfo), true, true)+" data-placement=\"top\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("learn_more_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E)\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate(featuresPerSection.dividerInfo)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
// iterate featuresPerSection.items
;(function(){
  var $$obj = featuresPerSection.items;
  if ('number' == typeof $$obj.length) {
      for (var featureIndex = 0, $$l = $$obj.length; featureIndex < $$l; featureIndex++) {
        var feature = $$obj[featureIndex];
pug_html = pug_html + "\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-feature-row plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Cth" + (pug.attr("class", pug.classes([`${featuresSectionIndex === 0 && featureIndex === 0 ? 'plans-table-first-feature-header' : ''}`], [true]), false, true)+" event-tracking=\"plans-page-table\" event-tracking-trigger=\"hover\" event-tracking-ga=\"subscription-funnel\""+pug.attr("event-tracking-label", `${feature.feature}`, true, true)+" scope=\"row\"") + "\u003E\u003Cdiv class=\"plans-table-feature-name\"\u003E\u003Cdiv class=\"plans-table-feature-name-content\"\u003E";
if (feature.info) {
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate(feature.feature)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Ci" + (" class=\"material-symbols material-symbols-outlined icon-sm plans-table-feature-question-icon\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(feature.info), true, true)+" data-placement=\"right\"") + "\u003Ehelp\u003C\u002Fi\u003E\u003Cspan class=\"plans-table-feature-learn-more-container\"\u003E\u003Cspan\u003E(\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"plans-table-feature-learn-more-text\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(feature.info), true, true)+" data-placement=\"top\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("learn_more_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E)\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate(feature.info)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + (pug.escape(null == (pug_interp = translate(feature.feature)) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E";
// iterate Object.keys(feature.plans)
;(function(){
  var $$obj = Object.keys(feature.plans);
  if ('number' == typeof $$obj.length) {
      for (var planIndex = 0, $$l = $$obj.length; planIndex < $$l; planIndex++) {
        var plan = $$obj[planIndex];
var tableHeadOptions = Object.values(config.tableHead)[planIndex] || {}
var tdClass = planIndex === config.highlightedColumn.index ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E";
pug_mixins["table_cell"](feature, plan);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var planIndex in $$obj) {
      $$l++;
      var plan = $$obj[planIndex];
var tableHeadOptions = Object.values(config.tableHead)[planIndex] || {}
var tdClass = planIndex === config.highlightedColumn.index ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E";
pug_mixins["table_cell"](feature, plan);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var featureIndex in $$obj) {
      $$l++;
      var feature = $$obj[featureIndex];
pug_html = pug_html + "\u003Ctr" + (pug.attr("class", pug.classes([`plans-table-feature-row plans-table-cols-${tableHeadKeys.length}`], [true]), false, true)) + "\u003E\u003Cth" + (pug.attr("class", pug.classes([`${featuresSectionIndex === 0 && featureIndex === 0 ? 'plans-table-first-feature-header' : ''}`], [true]), false, true)+" event-tracking=\"plans-page-table\" event-tracking-trigger=\"hover\" event-tracking-ga=\"subscription-funnel\""+pug.attr("event-tracking-label", `${feature.feature}`, true, true)+" scope=\"row\"") + "\u003E\u003Cdiv class=\"plans-table-feature-name\"\u003E\u003Cdiv class=\"plans-table-feature-name-content\"\u003E";
if (feature.info) {
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate(feature.feature)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Ci" + (" class=\"material-symbols material-symbols-outlined icon-sm plans-table-feature-question-icon\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(feature.info), true, true)+" data-placement=\"right\"") + "\u003Ehelp\u003C\u002Fi\u003E\u003Cspan class=\"plans-table-feature-learn-more-container\"\u003E\u003Cspan\u003E(\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"plans-table-feature-learn-more-text\""+" data-toggle=\"tooltip\""+pug.attr("title", translate(feature.info), true, true)+" data-placement=\"top\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("learn_more_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E)\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate(feature.info)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + (pug.escape(null == (pug_interp = translate(feature.feature)) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fth\u003E";
// iterate Object.keys(feature.plans)
;(function(){
  var $$obj = Object.keys(feature.plans);
  if ('number' == typeof $$obj.length) {
      for (var planIndex = 0, $$l = $$obj.length; planIndex < $$l; planIndex++) {
        var plan = $$obj[planIndex];
var tableHeadOptions = Object.values(config.tableHead)[planIndex] || {}
var tdClass = planIndex === config.highlightedColumn.index ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E";
pug_mixins["table_cell"](feature, plan);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var planIndex in $$obj) {
      $$l++;
      var plan = $$obj[planIndex];
var tableHeadOptions = Object.values(config.tableHead)[planIndex] || {}
var tdClass = planIndex === config.highlightedColumn.index ? 'plans-table-green-highlighted' : ''
pug_html = pug_html + "\u003Ctd" + (pug.attr("class", pug.classes([tdClass], [true]), false, true)) + "\u003E";
pug_mixins["table_cell"](feature, plan);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

};
pug_mixins["table_individual"] = pug_interp = function(period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable class=\"plans-table plans-table-individual\"\u003E";
pug_mixins["plans_table"](period, plansConfig.individual);
pug_html = pug_html + "\u003C\u002Ftable\u003E";
};
pug_mixins["table_group"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable class=\"plans-table plans-table-group\"\u003E";
pug_mixins["plans_table"]('annual', plansConfig.group);
pug_html = pug_html + "\u003C\u002Ftable\u003E";
};
pug_mixins["table_student"] = pug_interp = function(period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable class=\"plans-table plans-table-student\"\u003E";
pug_mixins["plans_table"](period, plansConfig.student);
pug_html = pug_html + "\u003C\u002Ftable\u003E";
};
pug_mixins["table_price_group_collaborator"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"plans-table-price-container\"\u003E\u003Cs\u003E";
pug_mixins["gen_localized_price_for_plan_view"]('collaborator', 'annual');
pug_html = pug_html + "\u003C\u002Fs\u003E\u003Cp class=\"plans-table-price\"\u003E\u003Cspan data-ol-plans-v2-group-price-per-user=\"collaborator\"\u003E" + (pug.escape(null == (pug_interp = initialLocalizedGroupPrice.pricePerUser.collaborator) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003Cp class=\"plans-table-price-period-label\"\u003E" + (pug.escape(null == (pug_interp = translate('per_user_year')) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["table_price_group_professional"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"plans-table-price-container\"\u003E\u003Cs\u003E";
pug_mixins["gen_localized_price_for_plan_view"]('professional', 'annual');
pug_html = pug_html + "\u003C\u002Fs\u003E\u003Cp class=\"plans-table-price\"\u003E\u003Cspan data-ol-plans-v2-group-price-per-user=\"professional\"\u003E" + (pug.escape(null == (pug_interp = initialLocalizedGroupPrice.pricePerUser.professional) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003Cp class=\"plans-table-price-period-label\"\u003E" + (pug.escape(null == (pug_interp = translate('per_user_year')) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["table_head_group_total_per_year"] = pug_interp = function(groupPlan){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var initialLicenseSize = '2'
pug_html = pug_html + "\u003Cspan" + (" class=\"plans-group-total-price\""+pug.attr("data-ol-plans-v2-group-total-price", groupPlan, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = initialLocalizedGroupPrice.price[groupPlan]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E&nbsp;";
// iterate groupPlanModalOptions.sizes
;(function(){
  var $$obj = groupPlanModalOptions.sizes;
  if ('number' == typeof $$obj.length) {
      for (var pug_index16 = 0, $$l = $$obj.length; pug_index16 < $$l; pug_index16++) {
        var licenseSize = $$obj[pug_index16];
pug_html = pug_html + "\u003Cspan" + (pug.attr("hidden", (licenseSize !== initialLicenseSize), true, true)+pug.attr("data-ol-plans-v2-table-th-group-license-size", licenseSize, true, true)) + "\u003E" + (null == (pug_interp = translate("total_per_year_for_x_users", {licenseSize})) ? "" : pug_interp) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index16 in $$obj) {
      $$l++;
      var licenseSize = $$obj[pug_index16];
pug_html = pug_html + "\u003Cspan" + (pug.attr("hidden", (licenseSize !== initialLicenseSize), true, true)+pug.attr("data-ol-plans-v2-table-th-group-license-size", licenseSize, true, true)) + "\u003E" + (null == (pug_interp = translate("total_per_year_for_x_users", {licenseSize})) ? "" : pug_interp) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

};
pug_mixins["group_plans_license_picker"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cform class=\"plans-license-picker-form\" data-ol-plans-v2-license-picker-form\u003E\u003Cdiv class=\"plans-license-picker-select-container\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("number_of_users_with_colon")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cselect name=\"plans-v2-license-picker-select\" id=\"plans-v2-license-picker-select\" autocomplete=\"off\" data-ol-plans-v2-license-picker-select event-tracking=\"plans-page-group-size\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-tracking-element=\"select\"\u003E\u003Coption value=\"2\"\u003E2\u003C\u002Foption\u003E\u003Coption value=\"3\"\u003E3\u003C\u002Foption\u003E\u003Coption value=\"4\"\u003E4\u003C\u002Foption\u003E\u003Coption value=\"5\"\u003E5\u003C\u002Foption\u003E\u003Coption value=\"10\"\u003E10\u003C\u002Foption\u003E\u003Coption value=\"20\"\u003E20\u003C\u002Foption\u003E\u003Coption value=\"50\"\u003E50\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"plans-v2-license-picker-educational-discount\"\u003E\u003Clabel data-ol-plans-v2-license-picker-educational-discount-label\u003E\u003Cinput class=\"plans-v2-license-picker-educational-discount-checkbox\" type=\"checkbox\" id=\"license-picker-educational-discount\" autocomplete=\"off\" data-ol-plans-v2-license-picker-educational-discount-input event-tracking=\"plans-page-edu-discount\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-tracking-element=\"checkbox\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("apply_educational_discount")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003Ci" + (" class=\"material-symbols material-symbols-outlined icon-sm\""+" data-toggle=\"tooltip\""+pug.attr("title", translate("apply_educational_discount_info"), true, true)+" data-placement=\"bottom\"") + "\u003Ehelp\u003C\u002Fi\u003E\u003Cspan class=\"plans-v2-license-picker-educational-discount-learn-more-container\"\u003E\u003Cspan\u003E(\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"plans-v2-license-picker-educational-discount-learn-more-text\""+" data-toggle=\"tooltip\""+pug.attr("title", translate("apply_educational_discount_info"), true, true)+" data-placement=\"bottom\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("learn_more_lowercase")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E)\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate("apply_educational_discount_info")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
};
pug_mixins["table_head_price"] = pug_interp = function(plan, period){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"plans-table-price-container\"\u003E";
if (plan !== 'free' && period === 'annual') {
pug_html = pug_html + "\u003Cs\u003E";
pug_mixins["gen_localized_price_for_plan_view"](plan, 'monthlyTimesTwelve');
pug_html = pug_html + "\u003C\u002Fs\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"match-non-discounted-price-alignment\"\u003E&nbsp;\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cp class=\"plans-table-price\"\u003E";
pug_mixins["gen_localized_price_for_plan_view"](plan, period);
pug_html = pug_html + "\u003C\u002Fp\u003E\u003Cp class=\"plans-table-price-period-label\"\u003E";
if (period == 'annual') {
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("per_year")) ? "" : pug_interp));
}
else {
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("per_month")) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["table_cell"] = pug_interp = function(feature, plan){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var planValue = feature.plans[plan]
var featureName = feature.feature
pug_html = pug_html + "\u003Cdiv class=\"plans-table-cell\"\u003E\u003Cdiv" + (" class=\"plans-table-cell-content\""+pug.attr("data-ol-plans-v2-table-cell-plan", plan, true, true)+pug.attr("data-ol-plans-v2-table-cell-feature", featureName, true, true)) + "\u003E";
if ((feature.value === 'str')) {
pug_html = pug_html + (null == (pug_interp = translate(planValue, {}, ['strong'])) ? "" : pug_interp);
}
else
if ((feature.value === 'bool')) {
if ((planValue)) {
pug_html = pug_html + "\u003Ci class=\"material-symbols material-symbols-outlined icon-green-round-background icon-sm\" aria-hidden=\"true\"\u003Echeck\u003C\u002Fi\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate("feature_included")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cspan aria-hidden=\"true\"\u003E-\u003C\u002Fspan\u003E\u003Cspan class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate("feature_not_included")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["plans_table_sticky_header"] = pug_interp = function(withSwitch, config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var tableHeadKeys = Object.keys(config.tableHead)
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["row","plans-table-sticky-header","sticky",(withSwitch ? 'plans-table-sticky-header-with-switch' : 'plans-table-sticky-header-without-switch')], [false,false,false,true]), false, true)+pug.attr("data-ol-plans-v2-table-sticky-header", true, true, true)) + "\u003E";
for (var i = 0; i < tableHeadKeys.length; i++)
{
var tableHeadKey = tableHeadKeys[i]
var translateKey = tableHeadKey.split('_')[1]
if (config.highlightedColumn.index === i) {
	var elClass = 'plans-table-sticky-header-item-green-highlighted'
} else {
	var elClass = ''
}
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["plans-table-sticky-header-item",elClass], [false,true]), false, true)) + "\u003E";
switch (tableHeadKey){
case 'individual_collaborator':
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate('standard')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
case 'group_professional':
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate(tableHeadKey)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
case 'group_collaborator':
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate('group_standard')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
default:
pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate(translateKey)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["table_sticky_header_all"] = pug_interp = function(plansConfig){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"row plans-table-sticky-header-container\" data-ol-plans-v2-view=\"individual\"\u003E";
pug_mixins["plans_table_sticky_header"](true, plansConfig.individual);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"row plans-table-sticky-header-container\" hidden data-ol-plans-v2-view=\"group\"\u003E";
pug_mixins["plans_table_sticky_header"](false, plansConfig.group);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"row plans-table-sticky-header-container\" hidden data-ol-plans-v2-view=\"student\"\u003E";
pug_mixins["plans_table_sticky_header"](true, plansConfig.student);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["monthly_annual_switch"] = pug_interp = function(initialState, eventTracking, eventSegmentation){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var monthlyAnnualToggleChecked = initialState === 'monthly'
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-4 col-md-offset-4 text-centered monthly-annual-switch\" data-ol-plans-v2-m-a-switch-container\u003E\u003Cdiv class=\"monthly-annual-switch-text\"\u003E\u003Cspan class=\"underline\" data-ol-plans-v2-m-a-switch-text=\"annual\"\u003E" + (pug.escape(null == (pug_interp = translate("annual")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["tooltip","in","left",monthlyAnnualToggleChecked ? 'plans-v2-m-a-tooltip-monthly-selected' : ''], [false,false,false,true]), false, true)+" role=\"tooltip\""+pug.attr("data-ol-plans-v2-m-a-tooltip", true, true, true)) + "\u003E\u003Cdiv class=\"tooltip-arrow\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tooltip-inner\"\u003E\u003Cspan" + (pug.attr("hidden", !monthlyAnnualToggleChecked, true, true)+" data-ol-tooltip-period=\"monthly\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("save_20_percent_by_paying_annually")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (pug.attr("hidden", monthlyAnnualToggleChecked, true, true)+" data-ol-tooltip-period=\"annual\"") + "\u003E" + (pug.escape(null == (pug_interp = translate("saving_20_percent")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Clabel data-ol-plans-v2-m-a-switch\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", monthlyAnnualToggleChecked, true, true)+" role=\"switch\""+pug.attr("aria-label", translate("select_monthly_plans"), true, true)+" autocomplete=\"off\""+pug.attr("event-tracking", eventTracking, true, true)+" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-tracking-element=\"checkbox\""+pug.attr("event-segmentation", eventSegmentation, true, true)) + "\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003Cspan data-ol-plans-v2-m-a-switch-text=\"monthly\"\u003E" + (pug.escape(null == (pug_interp = translate("monthly")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003Cdiv class=\"row plans-top-switch text-center\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E\u003Cul class=\"nav\" role=\"tablist\"\u003E\u003Cli class=\"active plans-switch-individual\" data-ol-plans-v2-view-tab=\"individual\" event-tracking=\"plans-page-toggle-plan\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-segmentation=\"{&quot;button&quot;: &quot;individual&quot;}\" role=\"presentation\"\u003E\u003Cbutton class=\"btn\" role=\"tab\" aria-controls=\"panel-individual\" aria-selected=\"true\"\u003E" + (pug.escape(null == (pug_interp = translate("indvidual_plans")) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fli\u003E\u003Cli class=\"plans-switch-group\" data-ol-plans-v2-view-tab=\"group\" event-tracking=\"plans-page-toggle-plan\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-segmentation=\"{&quot;button&quot;: &quot;group&quot;}\" role=\"presentation\"\u003E\u003Cbutton class=\"btn\" aria-controls=\"panel-group\" role=\"tab\" aria-selected=\"false\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("group_plans")) ? "" : pug_interp)) + " \u003C\u002Fspan\u003E\u003Cspan\u003E(" + (pug.escape(null == (pug_interp = translate("save_30_percent_or_more")) ? "" : pug_interp)) + ")\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fli\u003E\u003Cli class=\"plans-switch-student\" data-ol-plans-v2-view-tab=\"student\" event-tracking=\"plans-page-toggle-plan\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-segmentation=\"{&quot;button&quot;: &quot;student&quot;}\" role=\"presentation\"\u003E\u003Cbutton class=\"btn\" aria-controls=\"panel-student\" role=\"tab\" aria-selected=\"false\"\u003E" + (pug.escape(null == (pug_interp = translate("student_plans")) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["monthly_annual_switch"]("annual", "plans-page-toggle-period");
pug_html = pug_html + "\u003Cdiv class=\"row\" hidden data-ol-plans-v2-license-picker-container\u003E\u003Cdiv class=\"col-sm-12\"\u003E";
pug_mixins["group_plans_license_picker"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["table_sticky_header_all"](plansConfig);
pug_html = pug_html + "\u003Cdiv class=\"row plans-table-container\" hidden data-ol-plans-v2-period=\"monthly\"\u003E\u003Cdiv class=\"col-sm-12\" data-ol-plans-v2-view=\"individual\" role=\"tabpanel\"\u003E\u003Cdiv class=\"row\"\u003E";
pug_mixins["table_individual"]('monthly');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-12\" hidden data-ol-plans-v2-view=\"student\" role=\"tabpanel\"\u003E\u003Cdiv class=\"row\"\u003E";
pug_mixins["table_student"]('monthly');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row plans-table-container\" data-ol-plans-v2-period=\"annual\"\u003E\u003Cdiv class=\"col-sm-12\" data-ol-plans-v2-view=\"individual\" id=\"panel-individual\" role=\"tabpanel\"\u003E\u003Cdiv class=\"row\"\u003E";
pug_mixins["table_individual"]('annual');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-12\" hidden data-ol-plans-v2-view=\"group\" id=\"panel-group\" role=\"tabpanel\"\u003E\u003Cdiv class=\"row\"\u003E";
pug_mixins["table_group"]('annual');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-12\" hidden data-ol-plans-v2-view=\"student\" id=\"panel-student\" role=\"tabpanel\"\u003E\u003Cdiv class=\"row\"\u003E";
pug_mixins["table_student"]('annual');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"invisible\" aria-hidden=\"true\" data-ol-plans-v2-table-sticky-header-stop\u003E\u003C\u002Fdiv\u003E";
pug_mixins["currency_and_payment_methods"]();
pug_html = pug_html + "\u003Cdiv class=\"plans-page-quote-row\" data-ol-show-for-plan-type=\"individual\"\u003E";
pug_mixins["collinsQuote1"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"plans-page-quote-row plans-page-quote-row-hidden\" data-ol-show-for-plan-type=\"group\"\u003E";
pug_mixins["bennettQuote1"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"plans-page-quote-row plans-page-quote-row-hidden\" data-ol-show-for-plan-type=\"student\"\u003E";
pug_mixins["collinsQuote2"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"row row-spaced-large\" data-ol-plans-university-info-container hidden\u003E\u003Cdiv class=\"col-xs-12\"\u003E\u003Cdiv class=\"card plans-v2-university-info-light\"\u003E\u003Cdiv\u003E\u003Ch3 class=\"plans-v2-university-info-header-light\"\u003E" + (pug.escape(null == (pug_interp = translate('would_you_like_to_see_a_university_subscription')) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cp class=\"plans-v2-university-info-text-light\"\u003E" + (pug.escape(null == (pug_interp = translate('student_and_faculty_support_make_difference')) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Ca class=\"btn btn-secondary plans-v2-btn-header-light\" target=\"_blank\" href=\"\u002Ffor\u002Fsupport-an-overleaf-university-subscription\" event-tracking=\"plans-page-click\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-segmentation=\"{&quot;button&quot;: &quot;university-support&quot;}\"\u003E" + (pug.escape(null == (pug_interp = translate('show_your_support')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["managingYourSubscription"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"ol-accordions-container\"\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#managingYourSubscriptionQ1\" aria-expanded=\"false\" aria-controls=\"managingYourSubscriptionQ1\"\u003ECan I change plans or cancel later?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"managingYourSubscriptionQ1\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003E\u003Cspan\u003EYes, you can do this at any time by going to \u003C\u002Fspan\u003E\u003Cstrong\u003EAccount\u003ESubscription \u003C\u002Fstrong\u003E\u003Cspan\u003Ewhen logged in to Overleaf. You can change plans, switch between monthly and annual billing options, or cancel to downgrade to the free plan. When canceling, your subscription will continue until the end of the billing period.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#managingYourSubscriptionQ2\" aria-expanded=\"false\" aria-controls=\"managingYourSubscriptionQ2\"\u003EIf I change or cancel my Overleaf plan, will I lose my projects?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"managingYourSubscriptionQ2\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003ENo. Changing or canceling your plan won’t affect your projects, the only change will be to the features available to you. You can see which features are available only on paid plans in the comparison table.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#managingYourSubscriptionQ3\" aria-expanded=\"false\" aria-controls=\"managingYourSubscriptionQ3\"\u003ECan I pay by invoice or purchase order?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"managingYourSubscriptionQ3\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003EThis is possible when you’re purchasing a group subscription for five or more people, or a site license. For individual subscriptions, we can only accept payment online via credit card, debit card, or PayPal.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["overleafIndividualPlans"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"ol-accordions-container\"\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafIndividualPlansQ1\" aria-expanded=\"false\" aria-controls=\"overleafIndividualPlansQ1\"\u003EHow does the free trial work?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafIndividualPlansQ1\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003E\u003Cspan\u003EYou get full access to your chosen plan during your 7-day free trial, and there’s no obligation to continue beyond the trial. Your card will be charged at the end of your trial unless you cancel before then. To cancel, go to \u003C\u002Fspan\u003E\u003Cstrong\u003EAccount\u003ESubscription \u003C\u002Fstrong\u003E\u003Cspan\u003Ewhen logged in to Overleaf (the trial will continue for the full 7 days).\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafIndividualPlansQ2\" aria-expanded=\"false\" aria-controls=\"overleafIndividualPlansQ2\"\u003EWhat’s a collaborator on an Overleaf individual subscription?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafIndividualPlansQ2\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003EA collaborator is someone you invite to work with you on a project. So, for example, on our Standard plan you can have up to 10 people collaborating with you on any given project. \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafIndividualPlansQ3\" aria-expanded=\"false\" aria-controls=\"overleafIndividualPlansQ3\"\u003EThe individual Standard plan has 10 project collaborators, does it mean that 10 people will be upgraded?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafIndividualPlansQ3\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003E\u003Cspan\u003ENo. Only the subscriber’s account will be upgraded. An individual Standard subscription allows you to invite 10 people per project to edit the project with you. Your collaborators can access features such as the full document history and extended compile time, but \u003C\u002Fspan\u003E\u003Cstrong\u003Eonly \u003C\u002Fstrong\u003E\u003Cspan\u003Efor the project(s) they’re working on with you. If your collaborators want access to those features on their own projects, they will need to purchase their own subscription. (If you work with the same people regularly, you might find a group subscription more cost effective.)\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafIndividualPlansQ4\" aria-expanded=\"false\" aria-controls=\"overleafIndividualPlansQ4\"\u003EDo collaborators also have access to the editing and collaboration features I’ve paid for?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafIndividualPlansQ4\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003E\u003Cspan\u003EIf you have an Overleaf subscription, then your project collaborators will have access to features like real-time track changes and document history, but \u003C\u002Fspan\u003E\u003Cstrong\u003Eonly \u003C\u002Fstrong\u003E\u003Cspan\u003Efor the project(s) they’re working on with you. If your collaborators want access to those features on their own projects, they will need to purchase their own subscription. (If you work with the same people regularly, you might find a group subscription more cost effective.)\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafIndividualPlansQ5\" aria-expanded=\"false\" aria-controls=\"overleafIndividualPlansQ5\"\u003ECan I purchase an individual plan on behalf of someone else?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafIndividualPlansQ5\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003EIndividual subscriptions must be purchased by the account that will be the end user. If you want to purchase a plan for someone else, you’ll need to provide them with relevant payment details to enable them to make the purchase. \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafIndividualPlansQ6\" aria-expanded=\"false\" aria-controls=\"overleafIndividualPlansQ6\"\u003EWho is eligible for the Student plan?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafIndividualPlansQ6\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003EAs the name suggests, the Student plan is only for students at educational institutions. This includes graduate students.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafIndividualPlansQ7\" aria-expanded=\"false\" aria-controls=\"overleafIndividualPlansQ7\"\u003ECan I transfer an individual subscription to someone else?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafIndividualPlansQ7\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003ENo. Individual plans can’t be transferred. \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["overleafGroupPlans"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"ol-accordions-container\"\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafGroupPlansQ1\" aria-expanded=\"false\" aria-controls=\"overleafGroupPlansQ1\"\u003EWhat’s the difference between users and collaborators on an Overleaf group subscription?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafGroupPlansQ1\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003E\u003Cdiv\u003EOn any of our group plans, the number of users refers to the number of people you can invite to join your group. All of these people will have access to the plan’s paid-for features across all their projects, such as real-time track changes and document history. \u003C\u002Fdiv\u003E\u003Cdiv class=\"mt-2\"\u003ECollaborators are people that your group users may invite to work with them on their projects. So, for example, if you have the Group Standard plan, the users in your group can invite up to 10 people to work with them on a project. And if you have the Group Professional plan, your users can invite as many people to work with them as they want.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafGroupPlansQ2\" aria-expanded=\"false\" aria-controls=\"overleafGroupPlansQ2\"\u003EIs an Overleaf Group plan more cost effective?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafGroupPlansQ2\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003EOur Group subscriptions allow you to purchase access to our premium features for multiple people. They’re easy to manage, help save on paperwork, and reduce the cost of purchasing multiple subscriptions separately. \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafGroupPlansQ3\" aria-expanded=\"false\" aria-controls=\"overleafGroupPlansQ3\"\u003EWho is eligible for the educational discount?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafGroupPlansQ3\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003EThe educational discount for group subscriptions is for students or faculty who are using Overleaf primarily for teaching. \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-accordion-item\"\u003E\u003Cbutton class=\"custom-accordion-header collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#overleafGroupPlansQ4\" aria-expanded=\"false\" aria-controls=\"overleafGroupPlansQ4\"\u003ECan I add more users to my group subscription at a later date?\u003Cspan class=\"custom-accordion-icon\"\u003E\u003Ci class=\"material-symbols material-symbols-outlined\" aria-hidden=\"true\"\u003Ekeyboard_arrow_down\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"collapse\" id=\"overleafGroupPlansQ4\"\u003E\u003Cdiv class=\"custom-accordion-body\"\u003EYes. To add more users to your subscription you’ll need to \u003Cbutton class=\"btn-link inline-green-link\" data-ol-open-contact-form-modal=\"general\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate("contact_us")) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["eyebrow"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan class=\"mono-text\"\u003E\u003Cspan aria-hidden=\"true\"\u003E{\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan aria-hidden=\"true\"\u003E}\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
};
var managingYourSubscription = 'managingYourSubscription'
var overleafIndividualPlans = 'overleafIndividualPlans'
var overleafGroupPlans = 'overleafGroupPlans'
pug_html = pug_html + "\u003Cdiv class=\"plans-faq\"\u003E\u003Cdiv class=\"row row-spaced-extra-large\"\u003E\u003Cdiv class=\"col-md-12 faq-heading-container\"\u003E\u003Ch2\u003E";
pug_mixins["eyebrow"](translate("frequently_asked_questions"));
pug_html = pug_html + (pug.escape(null == (pug_interp = translate("your_questions_answered")) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E\u003Cdiv class=\"ol-tabs-scrollable\"\u003E\u003Cdiv class=\"nav-tabs-container\"\u003E\u003Cul class=\"nav nav-tabs\" role=\"tablist\"\u003E\u003Cli class=\"active\" role=\"presentation\"\u003E\u003Ca" + (" role=\"tab\" data-toggle=\"tab\""+pug.attr("href", '#' + managingYourSubscription, true, true)+pug.attr("aria-controls", managingYourSubscription, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = translate('managing_your_subscription')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli role=\"presentation\"\u003E\u003Ca" + (" role=\"tab\" data-toggle=\"tab\""+pug.attr("href", '#' + overleafIndividualPlans, true, true)+pug.attr("aria-controls", overleafIndividualPlans, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = translate('overleaf_individual_plans')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli role=\"presentation\"\u003E\u003Ca" + (" role=\"tab\" data-toggle=\"tab\""+pug.attr("href", '#' + overleafGroupPlans, true, true)+pug.attr("aria-controls", overleafGroupPlans, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = translate('overleaf_group_plans')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tab-content\"\u003E\u003Cdiv" + (" class=\"tab-pane active\""+" role=\"tabpanel\""+pug.attr("id", managingYourSubscription, true, true)) + "\u003E";
pug_mixins["managingYourSubscription"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv" + (" class=\"tab-pane\""+" role=\"tabpanel\""+pug.attr("id", overleafIndividualPlans, true, true)) + "\u003E";
pug_mixins["overleafIndividualPlans"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv" + (" class=\"tab-pane\""+" role=\"tabpanel\""+pug.attr("id", overleafGroupPlans, true, true)) + "\u003E";
pug_mixins["overleafGroupPlans"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row plans-faq-support\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate('still_have_questions')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton data-ol-open-contact-form-modal=\"general\"\u003E\u003Cspan style=\"margin-right: 4px\"\u003E" + (pug.escape(null == (pug_interp = translate('contact_support')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Ci class=\"icon-md material-symbols material-symbols-rounded material-symbols-arrow-right\" aria-hidden=\"true\"\u003Earrow_right_alt\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["notificationIcon"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (type === 'info') {
pug_html = pug_html + "\u003Cspan class=\"material-symbols\" aria-hidden=\"true\"\u003Einfo\u003C\u002Fspan\u003E";
}
else
if (type === 'success') {
pug_html = pug_html + "\u003Cspan class=\"material-symbols\" aria-hidden=\"true\"\u003Echeck_circle\u003C\u002Fspan\u003E";
}
};
pug_mixins["notification"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var {ariaLive, id, type, title, content, disclaimer, className} = options
var classNames = `notification notification-type-${type} ${className ? className : ''} ${isActionBelowContent ? 'notification-cta-below-content' : ''}`
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([classNames], [true]), false, true)+pug.attr("aria-live", ariaLive, true, true)+" role=\"alert\""+pug.attr("id", id, true, true)) + "\u003E\u003Cdiv class=\"notification-icon\"\u003E";
pug_mixins["notificationIcon"](type);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"notification-content-and-cta\"\u003E\u003Cdiv class=\"notification-content\"\u003E";
if (title) {
pug_html = pug_html + "\u003Cp\u003E\u003Cb\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003C\u002Fp\u003E";
}
pug_html = pug_html + (pug.escape(null == (pug_interp = content) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if (disclaimer) {
pug_html = pug_html + "\u003Cdiv class=\"notification-disclaimer\"\u003E" + (pug.escape(null == (pug_interp = disclaimer) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003Cdiv class=\"modal fade group-customize-subscription-modal website-redesign-modal\" tabindex=\"-1\" role=\"dialog\" data-ol-group-plan-modal\u003E\u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E\u003Cdiv class=\"modal-content\"\u003E\u003Cdiv class=\"modal-header\"\u003E\u003Cbutton" + (" class=\"close\""+" type=\"button\" data-dismiss=\"modal\""+pug.attr("aria-label", translate("close"), true, true)) + "\u003E\u003Ci class=\"material-symbols\" aria-hidden=\"true\"\u003Eclose\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003Ch1 class=\"modal-title\"\u003E" + (pug.escape(null == (pug_interp = translate("customize_your_group_subscription")) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Ch2 class=\"modal-subtitle\"\u003E" + (pug.escape(null == (pug_interp = translate("save_30_percent_or_more_uppercase")) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-body\"\u003E\u003Cdiv class=\"container-fluid\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-6 text-center\"\u003E\u003Cdiv class=\"circle circle-lg\"\u003E\u003Cdiv class=\"group-price\"\u003E\u003Cspan data-ol-group-plan-display-price\u003E...\u003C\u002Fspan\u003E\u003Cspan\u003E&nbsp;\u002F" + (pug.escape(null == (pug_interp = translate('year')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv" + (" class=\"group-price-per-user\""+pug.attr("data-ol-group-plan-price-per-user", translate('per_user'), true, true)) + "\u003E...\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"group-modal-features\"\u003E" + (pug.escape(null == (pug_interp = translate('each_user_will_have_access_to')) ? "" : pug_interp)) + ":\u003Cul class=\"list-unstyled\"\u003E\u003Cli" + (pug.attr("hidden", (groupPlanModalDefaults.plan_code !== 'collaborator'), true, true)+" data-ol-group-plan-plan-code=\"collaborator\"") + "\u003E\u003Cstrong\u003E" + (pug.escape(null == (pug_interp = translate("collabs_per_proj", {collabcount:10})) ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\u003Cli" + (pug.attr("hidden", (groupPlanModalDefaults.plan_code !== 'professional'), true, true)+" data-ol-group-plan-plan-code=\"professional\"") + "\u003E\u003Cstrong\u003E" + (pug.escape(null == (pug_interp = translate("unlimited_collabs")) ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\u003Cli class=\"list-item-pro-features-header\"\u003E" + (pug.escape(null == (pug_interp = translate('all_premium_features')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate('sync_dropbox_github')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate('full_doc_history')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug.escape(null == (pug_interp = translate('track_changes')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E+ " + (pug.escape(null == (pug_interp = translate('more_lowercase')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-6\"\u003E\u003Cform class=\"form\" data-ol-group-plan-form\u003E\u003Cdiv class=\"form-group\"\u003E\u003Clabel for=\"plan_code\"\u003E" + (pug.escape(null == (pug_interp = translate('plan')) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
// iterate groupPlanModalOptions.plan_codes
;(function(){
  var $$obj = groupPlanModalOptions.plan_codes;
  if ('number' == typeof $$obj.length) {
      for (var pug_index17 = 0, $$l = $$obj.length; pug_index17 < $$l; pug_index17++) {
        var plan_code = $$obj[pug_index17];
pug_html = pug_html + "\u003Clabel class=\"group-plan-option\"\u003E\u003Cinput" + (" type=\"radio\" name=\"plan_code\""+pug.attr("checked", (plan_code.code === groupPlanModalDefaults.plan_code), true, true)+pug.attr("value", plan_code.code, true, true)+pug.attr("data-ol-group-plan-code", plan_code.code, true, true)) + "\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate(plan_code.i18n)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index17 in $$obj) {
      $$l++;
      var plan_code = $$obj[pug_index17];
pug_html = pug_html + "\u003Clabel class=\"group-plan-option\"\u003E\u003Cinput" + (" type=\"radio\" name=\"plan_code\""+pug.attr("checked", (plan_code.code === groupPlanModalDefaults.plan_code), true, true)+pug.attr("value", plan_code.code, true, true)+pug.attr("data-ol-group-plan-code", plan_code.code, true, true)) + "\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate(plan_code.i18n)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group\"\u003E\u003Clabel for=\"size\"\u003E" + (pug.escape(null == (pug_interp = translate('number_of_users')) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cselect class=\"form-control\" id=\"size\" event-tracking=\"groups-modal-group-size\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-tracking-element=\"select\"\u003E";
// iterate groupPlanModalOptions.sizes
;(function(){
  var $$obj = groupPlanModalOptions.sizes;
  if ('number' == typeof $$obj.length) {
      for (var pug_index18 = 0, $$l = $$obj.length; pug_index18 < $$l; pug_index18++) {
        var size = $$obj[pug_index18];
pug_html = pug_html + "\u003Coption" + (pug.attr("value", size, true, true)+pug.attr("selected", (size === groupPlanModalDefaults.size), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = size) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index18 in $$obj) {
      $$l++;
      var size = $$obj[pug_index18];
pug_html = pug_html + "\u003Coption" + (pug.attr("value", size, true, true)+pug.attr("selected", (size === groupPlanModalDefaults.size), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = size) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group\" data-ol-group-plan-form-currency\u003E\u003Clabel for=\"currency\"\u003E" + (pug.escape(null == (pug_interp = translate('currency')) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cselect class=\"form-control\" id=\"currency\"\u003E";
// iterate groupPlanModalOptions.currencies
;(function(){
  var $$obj = groupPlanModalOptions.currencies;
  if ('number' == typeof $$obj.length) {
      for (var pug_index19 = 0, $$l = $$obj.length; pug_index19 < $$l; pug_index19++) {
        var currency = $$obj[pug_index19];
pug_html = pug_html + "\u003Coption" + (pug.attr("value", currency.code, true, true)+pug.attr("selected", (currency.code === groupPlanModalDefaults.currency), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = currency.display) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index19 in $$obj) {
      $$l++;
      var currency = $$obj[pug_index19];
pug_html = pug_html + "\u003Coption" + (pug.attr("value", currency.code, true, true)+pug.attr("selected", (currency.code === groupPlanModalDefaults.currency), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = currency.display) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group\"\u003E\u003Clabel for=\"usage\"\u003E" + (pug.escape(null == (pug_interp = translate('educational_discount_for_groups_of_ten_or_more')) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Clabel class=\"group-plan-educational-discount\"\u003E\u003Cinput id=\"usage\" type=\"checkbox\" autocomplete=\"off\" event-tracking=\"groups-modal-edu-discount\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\" event-tracking-element=\"checkbox\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = translate('educational_discount_disclaimer')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-12\"\u003E\u003Cdiv class=\"educational-discount-section\"\u003E\u003Cdiv" + (pug.attr("hidden", (groupPlanModalDefaults.usage !== 'educational'), true, true)+pug.attr("data-ol-group-plan-educational-discount", true, true, true)) + "\u003E\u003Cdiv class=\"applied\" hidden data-ol-group-plan-educational-discount-applied\u003E";
pug_mixins["notification"]({ariaLive: 'polite', content: translate('educational_discount_applied'), type: 'success', ariaLive: 'polite'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"ineligible\" hidden data-ol-group-plan-educational-discount-ineligible\u003E";
pug_mixins["notification"]({ariaLive: 'polite', content: translate('educational_discount_available_for_groups_of_ten_or_more'), type: 'info', ariaLive: 'polite'});
pug_html = pug_html + ("\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-footer\"\u003E\u003Cdiv class=\"text-center\"\u003E\u003Cbutton class=\"btn btn-primary btn-lg\" data-ol-purchase-group-plan event-tracking=\"form-submitted-groups-modal-purchase-click\" event-tracking-mb=\"true\" event-tracking-trigger=\"click\"\u003E" + (pug.escape(null == (pug_interp = translate('purchase_now_lowercase')) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003Cbr\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = translate('need_more_than_x_licenses', {x: '50'})) ? "" : pug_interp)) + "&nbsp;\u003Cbutton class=\"btn btn-inline-link\" data-ol-open-contact-form-for-more-than-50-licenses\u003E" + (pug.escape(null == (pug_interp = translate('please_get_in_touch')) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E" + (null == (pug_interp = moduleIncludes("contactModalGeneral-marketing", locals)) ? "" : pug_interp));
if ((typeof(suppressFooter) == "undefined")) {
if (showThinFooter) {
pug_html = pug_html + "\u003Cfooter class=\"site-footer\"\u003E";
var showLanguagePicker = Object.keys(settings.i18n.subdomainLang).length > 1
var hasCustomLeftNav = nav.left_footer && nav.left_footer.length > 0
pug_html = pug_html + "\u003Cdiv class=\"site-footer-content hidden-print\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cul class=\"col-md-9\"\u003E";
if (hasFeature('saas')) {
pug_html = pug_html + "\u003Cli\u003E© " + (pug.escape(null == (pug_interp = new Date().getFullYear()) ? "" : pug_interp)) + " Overleaf\u003C\u002Fli\u003E";
}
else
if (!settings.nav.hide_powered_by) {
pug_html = pug_html + "\u003Cli\u003E© 2024\n\u003Ca href=\"https:\u002F\u002Fwww.overleaf.com\u002Ffor\u002Fenterprises\"\u003EPowered by Overleaf\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
if (showLanguagePicker || hasCustomLeftNav) {
pug_html = pug_html + "\u003Cli\u003E\u003Cstrong class=\"text-muted\"\u003E|\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E";
}
}
if (showLanguagePicker) {
pug_html = pug_html + "\u003Cli class=\"dropdown dropup subdued language-picker\" dropdown\u003E\u003Ca" + (" class=\"dropdown-toggle\""+" id=\"language-picker-toggle\" href=\"#\""+pug.attr("dropdown-toggle", true, true, true)+pug.attr("data-ol-lang-selector-tooltip", true, true, true)+" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\""+pug.attr("aria-label", "Select " + translate('language'), true, true)+pug.attr("tooltip", translate('language'), true, true)+pug.attr("title", translate('language'), true, true)) + "\u003E\u003Ci class=\"fa fa-fw fa-language\"\u003E\u003C\u002Fi\u003E\n" + (pug.escape(null == (pug_interp = settings.translatedLanguages[currentLngCode]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Cul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"language-picker-toggle\"\u003E\u003Cli class=\"dropdown-header\"\u003E" + (pug.escape(null == (pug_interp = translate("language")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
// iterate settings.i18n.subdomainLang
;(function(){
  var $$obj = settings.i18n.subdomainLang;
  if ('number' == typeof $$obj.length) {
      for (var subdomain = 0, $$l = $$obj.length; subdomain < $$l; subdomain++) {
        var subdomainDetails = $$obj[subdomain];
if (!subdomainDetails.hide) {
pug_html = pug_html + "\u003Cli class=\"lng-option\"\u003E\u003Ca" + (" class=\"menu-indent\""+pug.attr("href", subdomainDetails.url+currentUrlWithQueryParams, true, true)+" role=\"menuitem\"") + "\u003E" + (pug.escape(null == (pug_interp = settings.translatedLanguages[subdomainDetails.lngCode]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var subdomain in $$obj) {
      $$l++;
      var subdomainDetails = $$obj[subdomain];
if (!subdomainDetails.hide) {
pug_html = pug_html + "\u003Cli class=\"lng-option\"\u003E\u003Ca" + (" class=\"menu-indent\""+pug.attr("href", subdomainDetails.url+currentUrlWithQueryParams, true, true)+" role=\"menuitem\"") + "\u003E" + (pug.escape(null == (pug_interp = settings.translatedLanguages[subdomainDetails.lngCode]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
if (showLanguagePicker && hasCustomLeftNav) {
pug_html = pug_html + "\u003Cli\u003E\u003Cstrong class=\"text-muted\"\u003E|\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E";
}
// iterate nav.left_footer
;(function(){
  var $$obj = nav.left_footer;
  if ('number' == typeof $$obj.length) {
      for (var pug_index21 = 0, $$l = $$obj.length; pug_index21 < $$l; pug_index21++) {
        var item = $$obj[pug_index21];
pug_html = pug_html + "\u003Cli\u003E";
if (item.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([item.class], [true]), false, true)+pug.attr("href", item.url, true, true)) + "\u003E" + (null == (pug_interp = translate(item.text)) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = item.text) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index21 in $$obj) {
      $$l++;
      var item = $$obj[pug_index21];
pug_html = pug_html + "\u003Cli\u003E";
if (item.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([item.class], [true]), false, true)+pug.attr("href", item.url, true, true)) + "\u003E" + (null == (pug_interp = translate(item.text)) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = item.text) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003Cul class=\"col-md-3 text-right\"\u003E";
// iterate nav.right_footer
;(function(){
  var $$obj = nav.right_footer;
  if ('number' == typeof $$obj.length) {
      for (var pug_index22 = 0, $$l = $$obj.length; pug_index22 < $$l; pug_index22++) {
        var item = $$obj[pug_index22];
pug_html = pug_html + "\u003Cli\u003E";
if (item.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([item.class], [true]), false, true)+pug.attr("href", item.url, true, true)+pug.attr("aria-label", item.label, true, true)) + "\u003E" + (null == (pug_interp = item.text) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = item.text) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index22 in $$obj) {
      $$l++;
      var item = $$obj[pug_index22];
pug_html = pug_html + "\u003Cli\u003E";
if (item.url) {
pug_html = pug_html + "\u003Ca" + (pug.attr("class", pug.classes([item.class], [true]), false, true)+pug.attr("href", item.url, true, true)+pug.attr("aria-label", item.label, true, true)) + "\u003E" + (null == (pug_interp = item.text) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (null == (pug_interp = item.text) ? "" : pug_interp);
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
}
else {
pug_html = pug_html + "\u003Cfooter class=\"fat-footer hidden-print website-redesign-fat-footer\"\u003E\u003Cdiv" + (" class=\"fat-footer-container\""+" role=\"navigation\""+pug.attr("aria-label", translate('footer_navigation'), true, true)) + "\u003E\u003Cdiv" + (pug.attr("class", pug.classes(["fat-footer-sections",hideFatFooter ? 'hidden' : undefined], [false,true]), false, true)) + "\u003E\u003Cdiv class=\"footer-section\" id=\"footer-brand\"\u003E\u003Ca" + (" class=\"footer-brand\""+" href=\"\u002F\""+pug.attr("aria-label", settings.appName, true, true)) + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-section\"\u003E\u003Ch2 class=\"footer-section-heading\"\u003E" + (pug.escape(null == (pug_interp = translate('About')) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cul class=\"list-unstyled\"\u003E\u003Cli\u003E\u003Ca href=\"\u002Fabout\"\u003E" + (pug.escape(null == (pug_interp = translate('footer_about_us')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fabout\u002Fvalues\"\u003E" + (pug.escape(null == (pug_interp = translate('our_values')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fabout\u002Fcareers\"\u003E" + (pug.escape(null == (pug_interp = translate('careers')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Ffor\u002Fpress\"\u003E" + (null == (pug_interp = translate('press_and_awards')) ? "" : pug_interp) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fblog\"\u003E" + (pug.escape(null == (pug_interp = translate('blog')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-section\"\u003E\u003Ch2 class=\"footer-section-heading\"\u003E" + (pug.escape(null == (pug_interp = translate('learn')) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cul class=\"list-unstyled\"\u003E\u003Cli\u003E\u003Ca href=\"\u002Flearn\u002Flatex\u002FLearn_LaTeX_in_30_minutes\"\u003E" + (pug.escape(null == (pug_interp = translate('latex_in_thirty_minutes')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Flatex\u002Ftemplates\"\u003E" + (pug.escape(null == (pug_interp = translate('templates')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fevents\u002Fwebinars\"\u003E" + (pug.escape(null == (pug_interp = translate('webinars')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Flearn\u002Flatex\u002FTutorials\"\u003E" + (pug.escape(null == (pug_interp = translate('tutorials')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Flearn\u002Flatex\u002FInserting_Images\"\u003E" + (pug.escape(null == (pug_interp = translate('how_to_insert_images')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Flearn\u002Flatex\u002FTables\"\u003E" + (pug.escape(null == (pug_interp = translate('how_to_create_tables')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-section\"\u003E\u003Ch2 class=\"footer-section-heading\"\u003E" + (null == (pug_interp = translate('footer_plans_and_pricing')) ? "" : pug_interp) + "\u003C\u002Fh2\u003E\u003Cul class=\"list-unstyled\"\u003E\u003Cli\u003E\u003Ca href=\"\u002Flearn\u002Fhow-to\u002FOverleaf_premium_features\"\u003E" + (pug.escape(null == (pug_interp = translate('premium_features')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fuser\u002Fsubscription\u002Fplans?itm_referrer=footer-for-indv-groups\"\u003E" + (null == (pug_interp = translate('for_individuals_and_groups')) ? "" : pug_interp) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Ffor\u002Fenterprises\"\u003E" + (pug.escape(null == (pug_interp = translate('for_business')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Ffor\u002Funiversities\"\u003E" + (pug.escape(null == (pug_interp = translate('for_universities')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca data-ol-for-students-link href=\"\u002Fuser\u002Fsubscription\u002Fplans?itm_referrer=footer-for-students#student-annual\"\u003E" + (pug.escape(null == (pug_interp = translate('for_students')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Ffor\u002Fgovernment\"\u003E" + (pug.escape(null == (pug_interp = translate('for_government')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-section\"\u003E\u003Ch2 class=\"footer-section-heading\"\u003E" + (pug.escape(null == (pug_interp = translate('get_involved')) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cul class=\"list-unstyled\"\u003E\u003Cli\u003E\u003Ca href=\"\u002Ffor\u002Fcommunity\u002Fadvisors\"\u003E" + (pug.escape(null == (pug_interp = translate('become_an_advisor')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fforms.gle\u002F67PSpN1bLnjGCmPQ9\"\u003E" + (pug.escape(null == (pug_interp = translate('let_us_know_what_you_think')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
if (user) {
pug_html = pug_html + "\u003Cli\u003E\u003Ca href=\"\u002Fbeta\u002Fparticipate\"\u003E" + (pug.escape(null == (pug_interp = translate('join_beta_program')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-section\"\u003E\u003Ch2 class=\"footer-section-heading\"\u003E" + (pug.escape(null == (pug_interp = translate('help')) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cul class=\"list-unstyled\"\u003E\u003Cli\u003E\u003Ca href=\"\u002Fabout\u002Fwhy-latex\"\u003E" + (pug.escape(null == (pug_interp = translate('why_latex')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Flearn\"\u003E" + (pug.escape(null == (pug_interp = translate('Documentation')) ? "" : pug_interp)) + " \u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"\u002Fcontact\"\u003E" + (pug.escape(null == (pug_interp = translate('footer_contact_us')) ? "" : pug_interp)) + "  \u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fstatus.overleaf.com\u002F\"\u003E" + (pug.escape(null == (pug_interp = translate('website_status')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"fat-footer-base\"\u003E\u003Cdiv class=\"fat-footer-base-section fat-footer-base-meta\"\u003E\u003Cdiv class=\"fat-footer-base-item\"\u003E \u003Cdiv class=\"fat-footer-base-copyright\"\u003E© " + (pug.escape(null == (pug_interp = new Date().getFullYear()) ? "" : pug_interp)) + " Overleaf\u003C\u002Fdiv\u003E\u003Ca href=\"\u002Flegal\"\u003E" + (pug.escape(null == (pug_interp = translate('privacy_and_terms')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Ca href=\"https:\u002F\u002Fwww.digital-science.com\u002Fsecurity-certifications\u002F\"\u003E" + (pug.escape(null == (pug_interp = translate('compliance')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"fat-footer-base-item list-unstyled fat-footer-base-language\"\u003E";
if (bootstrapVersion === 5) {
pug_html = pug_html + "\u003Cli class=\"dropdown dropup subdued language-picker\" dropdown\u003E\u003Ca" + (" id=\"language-picker-toggle\" href=\"#\""+pug.attr("dropdown-toggle", true, true, true)+pug.attr("data-ol-lang-selector-tooltip", true, true, true)+" data-bs-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\""+pug.attr("aria-label", "Select " + translate('language'), true, true)+pug.attr("tooltip", translate('language'), true, true)+pug.attr("title", translate('language'), true, true)) + "\u003E\u003Ci class=\"fa fa-fw fa-language\"\u003E\u003C\u002Fi\u003E\n" + (pug.escape(null == (pug_interp = settings.translatedLanguages[currentLngCode]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Cul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"language-picker-toggle\"\u003E\u003Cli class=\"dropdown-header\"\u003E" + (pug.escape(null == (pug_interp = translate("language")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
// iterate settings.i18n.subdomainLang
;(function(){
  var $$obj = settings.i18n.subdomainLang;
  if ('number' == typeof $$obj.length) {
      for (var subdomain = 0, $$l = $$obj.length; subdomain < $$l; subdomain++) {
        var subdomainDetails = $$obj[subdomain];
if (!subdomainDetails.hide) {
let isActive = subdomainDetails.lngCode === currentLngCode
pug_html = pug_html + ("\u003Cli class=\"lng-option\"\u003E\u003Ca" + (pug.attr("class", pug.classes(["menu-indent",isActive ? 'dropdown-item active' : 'dropdown-item'], [false,true]), false, true)+pug.attr("href", subdomainDetails.url+currentUrlWithQueryParams, true, true)+" role=\"menuitem\""+pug.attr("aria-selected", isActive ? 'true' : 'false', true, true)) + "\u003E" + (pug.escape(null == (pug_interp = settings.translatedLanguages[subdomainDetails.lngCode]) ? "" : pug_interp)));
if (subdomainDetails.lngCode === currentLngCode) {
pug_html = pug_html + "\u003Cspan class=\"material-symbols dropdown-item-trailing-icon pull-right\" aria-hidden=\"true\"\u003Echeck\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var subdomain in $$obj) {
      $$l++;
      var subdomainDetails = $$obj[subdomain];
if (!subdomainDetails.hide) {
let isActive = subdomainDetails.lngCode === currentLngCode
pug_html = pug_html + ("\u003Cli class=\"lng-option\"\u003E\u003Ca" + (pug.attr("class", pug.classes(["menu-indent",isActive ? 'dropdown-item active' : 'dropdown-item'], [false,true]), false, true)+pug.attr("href", subdomainDetails.url+currentUrlWithQueryParams, true, true)+" role=\"menuitem\""+pug.attr("aria-selected", isActive ? 'true' : 'false', true, true)) + "\u003E" + (pug.escape(null == (pug_interp = settings.translatedLanguages[subdomainDetails.lngCode]) ? "" : pug_interp)));
if (subdomainDetails.lngCode === currentLngCode) {
pug_html = pug_html + "\u003Cspan class=\"material-symbols dropdown-item-trailing-icon pull-right\" aria-hidden=\"true\"\u003Echeck\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"dropdown dropup subdued language-picker\" dropdown\u003E\u003Ca" + (" class=\"dropdown-toggle\""+" id=\"language-picker-toggle\" href=\"#\""+pug.attr("dropdown-toggle", true, true, true)+pug.attr("data-ol-lang-selector-tooltip", true, true, true)+" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\""+pug.attr("aria-label", "Select " + translate('language'), true, true)+pug.attr("tooltip", translate('language'), true, true)+pug.attr("title", translate('language'), true, true)) + "\u003E\u003Ci class=\"fa fa-fw fa-language\"\u003E\u003C\u002Fi\u003E\n" + (pug.escape(null == (pug_interp = settings.translatedLanguages[currentLngCode]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Cul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"language-picker-toggle\"\u003E\u003Cli class=\"dropdown-header\"\u003E" + (pug.escape(null == (pug_interp = translate("language")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
// iterate settings.i18n.subdomainLang
;(function(){
  var $$obj = settings.i18n.subdomainLang;
  if ('number' == typeof $$obj.length) {
      for (var subdomain = 0, $$l = $$obj.length; subdomain < $$l; subdomain++) {
        var subdomainDetails = $$obj[subdomain];
if (!subdomainDetails.hide) {
pug_html = pug_html + "\u003Cli class=\"lng-option\"\u003E\u003Ca" + (" class=\"menu-indent\""+pug.attr("href", subdomainDetails.url+currentUrlWithQueryParams, true, true)+" role=\"menuitem\"") + "\u003E" + (pug.escape(null == (pug_interp = settings.translatedLanguages[subdomainDetails.lngCode]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var subdomain in $$obj) {
      $$l++;
      var subdomainDetails = $$obj[subdomain];
if (!subdomainDetails.hide) {
pug_html = pug_html + "\u003Cli class=\"lng-option\"\u003E\u003Ca" + (" class=\"menu-indent\""+pug.attr("href", subdomainDetails.url+currentUrlWithQueryParams, true, true)+" role=\"menuitem\"") + "\u003E" + (pug.escape(null == (pug_interp = settings.translatedLanguages[subdomainDetails.lngCode]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"fat-footer-base-section fat-footer-base-social\"\u003E\u003Cdiv class=\"fat-footer-base-item\"\u003E\u003Ca class=\"fat-footer-social\" href=\"https:\u002F\u002Ftwitter.com\u002Foverleaf\"\u003E\u003Ci class=\"fa fa-twitter-square\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate("app_on_x", {social: "Twitter"})) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"fat-footer-social\" href=\"https:\u002F\u002Fwww.facebook.com\u002Foverleaf.editor\"\u003E\u003Ci class=\"fa fa-facebook-square\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate("app_on_x", {social: "Facebook"})) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"fat-footer-social\" href=\"https:\u002F\u002Fwww.linkedin.com\u002Fcompany\u002Fwritelatex-limited\"\u003E\u003Ci class=\"fa fa-linkedin-square\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"sr-only\"\u003E" + (pug.escape(null == (pug_interp = translate("app_on_x", {social: "LinkedIn"})) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
}
}
if ((typeof(suppressCookieBanner) == 'undefined')) {
pug_html = pug_html + "\u003Cdiv class=\"cookie-banner hidden-print hidden\"\u003E\u003Cdiv class=\"cookie-banner-content\"\u003EWe only use cookies for essential purposes and to improve your experience on our site. You can find out more in our \u003Ca href=\"\u002Flegal#Cookies\"\u003Ecookie policy\u003C\u002Fa\u003E.\u003C\u002Fdiv\u003E\u003Cdiv class=\"cookie-banner-actions\"\u003E\u003Cbutton class=\"btn btn-link btn-sm\" type=\"button\" data-ol-cookie-banner-set-consent=\"essential\"\u003EEssential cookies only\u003C\u002Fbutton\u003E\u003Cbutton class=\"btn btn-primary btn-sm\" type=\"button\" data-ol-cookie-banner-set-consent=\"all\"\u003EAccept all cookies\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + (null == (pug_interp = moduleIncludes("contactModal-marketing", locals)) ? "" : pug_interp);
if ((settings.devToolbar.enabled)) {
pug_html = pug_html + "\u003Cdiv id=\"dev-toolbar\"\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fbody\u003E";
pug_mixins["bootstrap-js"](bootstrapVersion);
pug_mixins["foot-scripts"]();
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug.attr("nonce", scriptNonce, true, true)) + "\u003Ewindow.addEventListener('DOMContentLoaded', function() {\n\t\u002F\u002F- Look for bundle\n\tvar cdnBlocked = typeof Frontend === 'undefined'\n\t\u002F\u002F- Prevent loops\n\tvar noCdnAlreadyInUrl = window.location.href.indexOf(\"nocdn=true\") != -1\n\tif (cdnBlocked && !noCdnAlreadyInUrl && navigator.userAgent.indexOf(\"Googlebot\") == -1) {\n\t\t\u002F\u002F- Set query param, server will not set CDN url\n\t\twindow.location.search += \"&nocdn=true\";\n\t}\n})\u003C\u002Fscript\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Date" in locals_for_with ?
        locals_for_with.Date :
        typeof Date !== 'undefined' ? Date : undefined, "ExposedSettings" in locals_for_with ?
        locals_for_with.ExposedSettings :
        typeof ExposedSettings !== 'undefined' ? ExposedSettings : undefined, "Object" in locals_for_with ?
        locals_for_with.Object :
        typeof Object !== 'undefined' ? Object : undefined, "URLSearchParams" in locals_for_with ?
        locals_for_with.URLSearchParams :
        typeof URLSearchParams !== 'undefined' ? URLSearchParams : undefined, "bootstrap5Override" in locals_for_with ?
        locals_for_with.bootstrap5Override :
        typeof bootstrap5Override !== 'undefined' ? bootstrap5Override : undefined, "brandVariation" in locals_for_with ?
        locals_for_with.brandVariation :
        typeof brandVariation !== 'undefined' ? brandVariation : undefined, "buildBaseAssetPath" in locals_for_with ?
        locals_for_with.buildBaseAssetPath :
        typeof buildBaseAssetPath !== 'undefined' ? buildBaseAssetPath : undefined, "buildCssPath" in locals_for_with ?
        locals_for_with.buildCssPath :
        typeof buildCssPath !== 'undefined' ? buildCssPath : undefined, "buildImgPath" in locals_for_with ?
        locals_for_with.buildImgPath :
        typeof buildImgPath !== 'undefined' ? buildImgPath : undefined, "buildJsPath" in locals_for_with ?
        locals_for_with.buildJsPath :
        typeof buildJsPath !== 'undefined' ? buildJsPath : undefined, "canDisplayAdminMenu" in locals_for_with ?
        locals_for_with.canDisplayAdminMenu :
        typeof canDisplayAdminMenu !== 'undefined' ? canDisplayAdminMenu : undefined, "canDisplayAdminRedirect" in locals_for_with ?
        locals_for_with.canDisplayAdminRedirect :
        typeof canDisplayAdminRedirect !== 'undefined' ? canDisplayAdminRedirect : undefined, "canDisplaySplitTestMenu" in locals_for_with ?
        locals_for_with.canDisplaySplitTestMenu :
        typeof canDisplaySplitTestMenu !== 'undefined' ? canDisplaySplitTestMenu : undefined, "canDisplaySurveyMenu" in locals_for_with ?
        locals_for_with.canDisplaySurveyMenu :
        typeof canDisplaySurveyMenu !== 'undefined' ? canDisplaySurveyMenu : undefined, "canRedirectToAdminDomain" in locals_for_with ?
        locals_for_with.canRedirectToAdminDomain :
        typeof canRedirectToAdminDomain !== 'undefined' ? canRedirectToAdminDomain : undefined, "countryCode" in locals_for_with ?
        locals_for_with.countryCode :
        typeof countryCode !== 'undefined' ? countryCode : undefined, "csrfToken" in locals_for_with ?
        locals_for_with.csrfToken :
        typeof csrfToken !== 'undefined' ? csrfToken : undefined, "currentLngCode" in locals_for_with ?
        locals_for_with.currentLngCode :
        typeof currentLngCode !== 'undefined' ? currentLngCode : undefined, "currentUrl" in locals_for_with ?
        locals_for_with.currentUrl :
        typeof currentUrl !== 'undefined' ? currentUrl : undefined, "currentUrlWithQueryParams" in locals_for_with ?
        locals_for_with.currentUrlWithQueryParams :
        typeof currentUrlWithQueryParams !== 'undefined' ? currentUrlWithQueryParams : undefined, "currentView" in locals_for_with ?
        locals_for_with.currentView :
        typeof currentView !== 'undefined' ? currentView : undefined, "deferScripts" in locals_for_with ?
        locals_for_with.deferScripts :
        typeof deferScripts !== 'undefined' ? deferScripts : undefined, "dictionariesRoot" in locals_for_with ?
        locals_for_with.dictionariesRoot :
        typeof dictionariesRoot !== 'undefined' ? dictionariesRoot : undefined, "enableUpgradeButton" in locals_for_with ?
        locals_for_with.enableUpgradeButton :
        typeof enableUpgradeButton !== 'undefined' ? enableUpgradeButton : undefined, "entrypoint" in locals_for_with ?
        locals_for_with.entrypoint :
        typeof entrypoint !== 'undefined' ? entrypoint : undefined, "entrypointScripts" in locals_for_with ?
        locals_for_with.entrypointScripts :
        typeof entrypointScripts !== 'undefined' ? entrypointScripts : undefined, "entrypointStyles" in locals_for_with ?
        locals_for_with.entrypointStyles :
        typeof entrypointStyles !== 'undefined' ? entrypointStyles : undefined, "fixedSizeDocument" in locals_for_with ?
        locals_for_with.fixedSizeDocument :
        typeof fixedSizeDocument !== 'undefined' ? fixedSizeDocument : undefined, "formatCurrency" in locals_for_with ?
        locals_for_with.formatCurrency :
        typeof formatCurrency !== 'undefined' ? formatCurrency : undefined, "getCssThemeModifier" in locals_for_with ?
        locals_for_with.getCssThemeModifier :
        typeof getCssThemeModifier !== 'undefined' ? getCssThemeModifier : undefined, "getLoggedInUserId" in locals_for_with ?
        locals_for_with.getLoggedInUserId :
        typeof getLoggedInUserId !== 'undefined' ? getLoggedInUserId : undefined, "getSessionAnalyticsId" in locals_for_with ?
        locals_for_with.getSessionAnalyticsId :
        typeof getSessionAnalyticsId !== 'undefined' ? getSessionAnalyticsId : undefined, "getSessionUser" in locals_for_with ?
        locals_for_with.getSessionUser :
        typeof getSessionUser !== 'undefined' ? getSessionUser : undefined, "getUserEmail" in locals_for_with ?
        locals_for_with.getUserEmail :
        typeof getUserEmail !== 'undefined' ? getUserEmail : undefined, "groupPlanModalDefaults" in locals_for_with ?
        locals_for_with.groupPlanModalDefaults :
        typeof groupPlanModalDefaults !== 'undefined' ? groupPlanModalDefaults : undefined, "groupPlanModalOptions" in locals_for_with ?
        locals_for_with.groupPlanModalOptions :
        typeof groupPlanModalOptions !== 'undefined' ? groupPlanModalOptions : undefined, "groupPlans" in locals_for_with ?
        locals_for_with.groupPlans :
        typeof groupPlans !== 'undefined' ? groupPlans : undefined, "hasAdminAccess" in locals_for_with ?
        locals_for_with.hasAdminAccess :
        typeof hasAdminAccess !== 'undefined' ? hasAdminAccess : undefined, "hasCustomLeftNav" in locals_for_with ?
        locals_for_with.hasCustomLeftNav :
        typeof hasCustomLeftNav !== 'undefined' ? hasCustomLeftNav : undefined, "hasFeature" in locals_for_with ?
        locals_for_with.hasFeature :
        typeof hasFeature !== 'undefined' ? hasFeature : undefined, "hideFatFooter" in locals_for_with ?
        locals_for_with.hideFatFooter :
        typeof hideFatFooter !== 'undefined' ? hideFatFooter : undefined, "highlighted" in locals_for_with ?
        locals_for_with.highlighted :
        typeof highlighted !== 'undefined' ? highlighted : undefined, "initialLocalizedGroupPrice" in locals_for_with ?
        locals_for_with.initialLocalizedGroupPrice :
        typeof initialLocalizedGroupPrice !== 'undefined' ? initialLocalizedGroupPrice : undefined, "isActionBelowContent" in locals_for_with ?
        locals_for_with.isActionBelowContent :
        typeof isActionBelowContent !== 'undefined' ? isActionBelowContent : undefined, "isManagedAccount" in locals_for_with ?
        locals_for_with.isManagedAccount :
        typeof isManagedAccount !== 'undefined' ? isManagedAccount : undefined, "itm_campaign" in locals_for_with ?
        locals_for_with.itm_campaign :
        typeof itm_campaign !== 'undefined' ? itm_campaign : undefined, "itm_content" in locals_for_with ?
        locals_for_with.itm_content :
        typeof itm_content !== 'undefined' ? itm_content : undefined, "itm_referrer" in locals_for_with ?
        locals_for_with.itm_referrer :
        typeof itm_referrer !== 'undefined' ? itm_referrer : undefined, "language" in locals_for_with ?
        locals_for_with.language :
        typeof language !== 'undefined' ? language : undefined, "latamCountryBannerDetails" in locals_for_with ?
        locals_for_with.latamCountryBannerDetails :
        typeof latamCountryBannerDetails !== 'undefined' ? latamCountryBannerDetails : undefined, "managingYourSubscription" in locals_for_with ?
        locals_for_with.managingYourSubscription :
        typeof managingYourSubscription !== 'undefined' ? managingYourSubscription : undefined, "mathJaxPath" in locals_for_with ?
        locals_for_with.mathJaxPath :
        typeof mathJaxPath !== 'undefined' ? mathJaxPath : undefined, "metadata" in locals_for_with ?
        locals_for_with.metadata :
        typeof metadata !== 'undefined' ? metadata : undefined, "moduleIncludes" in locals_for_with ?
        locals_for_with.moduleIncludes :
        typeof moduleIncludes !== 'undefined' ? moduleIncludes : undefined, "nav" in locals_for_with ?
        locals_for_with.nav :
        typeof nav !== 'undefined' ? nav : undefined, "overleafGroupPlans" in locals_for_with ?
        locals_for_with.overleafGroupPlans :
        typeof overleafGroupPlans !== 'undefined' ? overleafGroupPlans : undefined, "overleafIndividualPlans" in locals_for_with ?
        locals_for_with.overleafIndividualPlans :
        typeof overleafIndividualPlans !== 'undefined' ? overleafIndividualPlans : undefined, "plansConfig" in locals_for_with ?
        locals_for_with.plansConfig :
        typeof plansConfig !== 'undefined' ? plansConfig : undefined, "projectDashboardReact" in locals_for_with ?
        locals_for_with.projectDashboardReact :
        typeof projectDashboardReact !== 'undefined' ? projectDashboardReact : undefined, "recommendedCurrency" in locals_for_with ?
        locals_for_with.recommendedCurrency :
        typeof recommendedCurrency !== 'undefined' ? recommendedCurrency : undefined, "scriptNonce" in locals_for_with ?
        locals_for_with.scriptNonce :
        typeof scriptNonce !== 'undefined' ? scriptNonce : undefined, "settings" in locals_for_with ?
        locals_for_with.settings :
        typeof settings !== 'undefined' ? settings : undefined, "showBrlGeoBanner" in locals_for_with ?
        locals_for_with.showBrlGeoBanner :
        typeof showBrlGeoBanner !== 'undefined' ? showBrlGeoBanner : undefined, "showInrGeoBanner" in locals_for_with ?
        locals_for_with.showInrGeoBanner :
        typeof showInrGeoBanner !== 'undefined' ? showInrGeoBanner : undefined, "showLATAMBanner" in locals_for_with ?
        locals_for_with.showLATAMBanner :
        typeof showLATAMBanner !== 'undefined' ? showLATAMBanner : undefined, "showLanguagePicker" in locals_for_with ?
        locals_for_with.showLanguagePicker :
        typeof showLanguagePicker !== 'undefined' ? showLanguagePicker : undefined, "showThinFooter" in locals_for_with ?
        locals_for_with.showThinFooter :
        typeof showThinFooter !== 'undefined' ? showThinFooter : undefined, "splitTestInfo" in locals_for_with ?
        locals_for_with.splitTestInfo :
        typeof splitTestInfo !== 'undefined' ? splitTestInfo : undefined, "splitTestVariants" in locals_for_with ?
        locals_for_with.splitTestVariants :
        typeof splitTestVariants !== 'undefined' ? splitTestVariants : undefined, "suppressCookieBanner" in locals_for_with ?
        locals_for_with.suppressCookieBanner :
        typeof suppressCookieBanner !== 'undefined' ? suppressCookieBanner : undefined, "suppressFooter" in locals_for_with ?
        locals_for_with.suppressFooter :
        typeof suppressFooter !== 'undefined' ? suppressFooter : undefined, "suppressGoogleAnalytics" in locals_for_with ?
        locals_for_with.suppressGoogleAnalytics :
        typeof suppressGoogleAnalytics !== 'undefined' ? suppressGoogleAnalytics : undefined, "suppressNavContentLinks" in locals_for_with ?
        locals_for_with.suppressNavContentLinks :
        typeof suppressNavContentLinks !== 'undefined' ? suppressNavContentLinks : undefined, "suppressNavbar" in locals_for_with ?
        locals_for_with.suppressNavbar :
        typeof suppressNavbar !== 'undefined' ? suppressNavbar : undefined, "suppressNavbarRight" in locals_for_with ?
        locals_for_with.suppressNavbarRight :
        typeof suppressNavbarRight !== 'undefined' ? suppressNavbarRight : undefined, "suppressRelAlternateLinks" in locals_for_with ?
        locals_for_with.suppressRelAlternateLinks :
        typeof suppressRelAlternateLinks !== 'undefined' ? suppressRelAlternateLinks : undefined, "suppressSkipToContent" in locals_for_with ?
        locals_for_with.suppressSkipToContent :
        typeof suppressSkipToContent !== 'undefined' ? suppressSkipToContent : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined, "translate" in locals_for_with ?
        locals_for_with.translate :
        typeof translate !== 'undefined' ? translate : undefined, "user" in locals_for_with ?
        locals_for_with.user :
        typeof user !== 'undefined' ? user : undefined, "userRestrictions" in locals_for_with ?
        locals_for_with.userRestrictions :
        typeof userRestrictions !== 'undefined' ? userRestrictions : undefined, "userSettings" in locals_for_with ?
        locals_for_with.userSettings :
        typeof userSettings !== 'undefined' ? userSettings : undefined, "usersBestSubscription" in locals_for_with ?
        locals_for_with.usersBestSubscription :
        typeof usersBestSubscription !== 'undefined' ? usersBestSubscription : undefined, "websiteRedesignPlansVariant" in locals_for_with ?
        locals_for_with.websiteRedesignPlansVariant :
        typeof websiteRedesignPlansVariant !== 'undefined' ? websiteRedesignPlansVariant : undefined));
    ;;return pug_html;} module.exports = template;