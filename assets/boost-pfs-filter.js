/** VERSION: 1.0.0 Please do not delete this line. Thank you! **/
if(typeof lazySizes !== 'function' && typeof lazySizes !== 'object' || typeof lazySizes === 'undefined'){
  /*! lazysizes - v4.1.8 */
  !function (a, b) { var c = b(a, a.document); a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }(window, function (a, b) { "use strict"; if (b.getElementsByClassName) { var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener", i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback, n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach, r = function (a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] }, s = function (a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) }, t = function (a, b) { var c; (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) }, u = function (a, b, c) { var d = c ? h : "removeEventListener"; c && u(a, b), o.forEach(function (c) { a[d](c, b) }) }, v = function (a, d, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h }, w = function (b, c) { var e; !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) }, x = function (a, b) { return (getComputedStyle(a, null) || {})[b] }, y = function (a, b, c) { for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)c = b.offsetWidth, b = b.parentNode; return c }, z = function () { var a, c, d = [], e = [], f = d, g = function () { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;)b.shift()(); a = !1 }, h = function (d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(), A = function (a, b) { return b ? function () { z(a) } : function () { var b = this, c = arguments; z(function () { a.apply(b, c) }) } }, B = function (a) { var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () { b = !1, c = f.now(), a() }, i = m && g > 49 ? function () { m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout) } : A(function () { k(h) }, !0); return function (a) { var d; (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d)) } }, C = function (a) { var b, c, d = 99, e = function () { b = null, a() }, g = function () { var a = f.now() - c; a < d ? k(g, d - a) : (m || e)(e) }; return function () { c = f.now(), b || (b = k(g, d)) } }; !function () { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; d = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in d || (d[b] = c[b]); a.lazySizesConfig = d, k(function () { d.init && F() }) }(); var D = function () { var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i, M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1, R = function (a) { P-- , (!a || P < 0 || !a.target) && (P = 0) }, S = function (a) { return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility") }, T = function (a, c) { var d, f = a, g = S(a); for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1); return g }, U = function () { var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements; if ((o = d.loadMode) && P < 8 && (a = u.length)) { for (f = 0, Q++; f < a; f++)if (u[f] && !u[f]._lazyRace) if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]); else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) { if (aa(u[f]), k = !0, P > 9) break } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); j && !k && aa(j) } }, V = B(U), W = function (a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache; R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded") }, X = A(W), Y = function (a) { X({ target: a.target }) }, Z = function (a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } }, $ = function (a) { var b, c = a[i](d.srcsetAttr); (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) }, _ = A(function (a, b, c, e, f) { var g, h, j, l, o, p; (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () { var b = a.complete && a.naturalWidth > 1; p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && P-- }, !0) }), aa = function (a) { if (!a._lazyRace) { var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e; (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++ , _(a, b, f, e, c)) } }, ba = C(function () { d.loadMode = 3, V() }), ca = function () { 3 == d.loadMode && (d.loadMode = 2), ba() }, da = function () { if (!l) { if (f.now() - p < 999) return void k(da, 999); l = !0, d.loadMode = 3, V(), j("scroll", ca, !0) } }; return { _: function () { p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) { b[h](a, V, !0) }), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V() }, checkElems: V, unveil: aa, _aLSL: ca } }(), E = function () { var a, c = A(function (a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d); c.detail.dataAttr || w(a, c.detail) }), e = function (a, b, d) { var e, f = a.parentNode; f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) }, f = function () { var b, c = a.length; if (c) for (b = 0; b < c; b++)e(a[b]) }, g = C(f); return { _: function () { a = b.getElementsByClassName(d.autosizesClass), j("resize", g) }, checkElems: g, updateElem: e } }(), F = function () { F.i || (F.i = !0, E._(), D._()) }; return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } } });
  /*! ls.rias.min.ks - v4.1.8 */
  !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(b, c) { var d, e, f, g, h = a.getComputedStyle(b); e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function (a, c) { var d = b.getAttribute("data-" + a); if (!d) { var e = h.getPropertyValue("--ls-" + a); e && (d = e.trim()) } if (d) { if ("true" == d) d = !0; else if ("false" == d) d = !1; else if (l.test(d)) d = parseFloat(d); else if ("function" == typeof j[a]) d = j[a](b, d); else if (q.test(d)) try { d = JSON.parse(d) } catch (a) { } g[a] = d } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d)) }; for (d in j) f(d); return c.replace(p, function (a, b) { b in g || f(b, !0) }), g } function e(a, b) { var c = [], d = function (a, c) { return k[typeof b[c]] ? b[c] : a }; return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) { var e = b.widthmap[d] || d, f = b.aspectratio || b.ratio, g = !b.aspectratio && j.traditionalRatio, h = { u: a.replace(n, e).replace(o, f ? g ? Math.round(d * f) : Math.round(d / f) : ""), w: d }; c.push(h), c.srcset.push(h.c = h.u + " " + d + "w") }), c } function f(a, c, d) { var f = 0, g = 0, h = d; if (a) { if ("container" === c.ratio) { for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);)h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight; f && g && (c.ratio = g / f) } a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 }) } } function g(a, b) { var e = d(a, b); return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e } function h(a) { return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "" } var i, j, k = { string: 1, number: 1 }, l = /^\-*\+*\d+\.*\d*$/, m = /^picture$/i, n = /\s*\{\s*width\s*\}\s*/i, o = /\s*\{\s*height\s*\}\s*/i, p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi, q = /^\[.*\]|\{.*\}$/, r = /^(?:auto|\d+(px)?)$/, s = b.createElement("a"), t = b.createElement("img"), u = "srcset" in t && !("sizes" in t), v = !!a.HTMLPictureElement && !u; !function () { var b, d = function () { }, e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) { return !a }), i.rias || (i.rias = {}), "widths" in (j = i.rias) || (j.widths = [], function (a) { for (var b, c = 0; !b || b < 3e3;)c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b) }(j.widths)); for (b in e) b in j || (j[b] = e[b]) }(), addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c) { var b, d, e, k, l, m, o, p, q, s, t, u, x; if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) { if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; m < o; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0); t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s }))) } } }, !0); var w = function () { var d = function (a, b) { return a.w - b.w }, e = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, f = function (a, b) { var d; return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias }, g = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.4, d) }, h = function (b, c) { var h, i, j, k, l, m; if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; i < j; i++)if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) { l = h[i]._lazyrias; break } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m }, j = function (d) { if (d.detail.instance == c) { var e, g = d.target; if (!u && (a.respimage || a.picturefill || lazySizesConfig.pf)) return void b.removeEventListener("lazybeforesizes", j); ("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width)) && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () { g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u) })) } }; return v ? j = function () { } : addEventListener("lazybeforesizes", j), j }() });
}

// Fix the confict suggestion search in Debut theme
if (typeof theme !== 'undefined' && theme.hasOwnProperty('settings')) theme.settings.predictiveSearchEnabled = false;
// Override Settings
var boostPFSFilterConfig = {
general: {
  limit: boostPFSThemeConfig.custom.products_per_page,
  /* Optional */
  loadProductFirst: false,
  // Placeholder  
  showPlaceholderProductList: true,
  placeholderProductPerRow: 3,
  placeholderProductGridItemClass: 'boost-pfs-filter-product-item boost-pfs-filter-product-item-grid boost-pfs-filter-grid-width-3 boost-pfs-filter-grid-width-mb-2',
  enableOTP: true,
  aspect_ratio: boostPFSThemeConfig.custom.aspect_ratio,
  cropImagePossitionEqualHeight: boostPFSThemeConfig.custom.product_img_crop,
  defaultDisplay: boostPFSThemeConfig.custom.product_item_type,
  selectOptionContainer: '.boost-pfs-filter-product-item-image',  // CSS selector to append the product option, if left empty it will append to the product item
},
selector: {
  otpButtons: '.boost-pfs-filter-product-item-image',
}
};

(function() {
var onSale = false,
  soldOut = false,
  priceVaries = false,
  images = [],
  firstVariant = {},
  boostPFSImgDefaultSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
  boostPFSRangeWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048];

BoostPFS.inject(this);
boostPFSFilterConfig.general.separateRefineByFromFilter = (jQ('.boost-pfs-filter-tree-h').length && !Utils.isMobile() > 0 && boostPFSThemeConfig.custom.filter_tree_horizontal_style != 'style-expand') ? true : false;
Selector.stickyElementDesktop = jQ('.boost-pfs-filter-left-col').length > 0 && !Utils.isMobile() ? '.boost-pfs-filter-left-col' : '.boost-pfs-filter-tree';
/************************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
function prepareShopifyData(data) {
  // Displaying price base on the policy of Shopify, have to multiple by 100
  soldOut = !data.available; // Check a product is out of stock
  onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Convert images to array
  images = data.images_info;
  // Get First Variant (selected_or_first_available_variant)
  firstVariant = data['variants'][0];
  if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == Utils.getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  return data;
}

/************************** END CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
/************************** BUILD PRODUCT LIST **************************/
// Build Product Grid Item
ProductGridItem.prototype.compileTemplate = function(data) {
  if (!data) data = this.data;
  // Customize API data to get the Shopify data
  data = prepareShopifyData(data);

  // Get Template
  var itemHtml = boostPFSTemplate.productGridItemHtml;
  // Add Custom class
  var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
  var saleClass = onSale ? boostPFSTemplate.saleClass : '';

  itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  // Add Grid Width class
  itemHtml = itemHtml.replace(/{{gridWidthClass}}/g, buildGridWidthClass(data));
  // Add Label
  itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
  // Add Sold out label
  var soldOutLabel = '';
  if (soldOut) {
    soldOutLabel = '<span class="soldout boost-pfs-filter-label boost-pfs-filter-label-display-text">Sold Out</label>';
  }
  itemHtml = itemHtml.replace(/{{soldOutLabel}}/g, soldOutLabel);
  // Add TAG Label
  itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
  // Add Images
  itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));
  // Add Price
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, buildPrice(data));

  // Add Review
  if (typeof Integration === 'undefined' ||
    (typeof Integration != 'undefined' &&
      typeof Integration.hascompileTemplate == 'function' &&
      !Integration.hascompileTemplate('reviews'))) {
    itemHtml = itemHtml.replace(/{{itemReviews}}/g, buildReview(data));
  }

  // Add Vendor
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));

  // itemActiveSwapClass
  itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, buildActiveSwapClass(data));

  // Add Color Swatches
  itemHtml = itemHtml.replace(/{{itemSwatches}}/g, buildProductOptionSwatches(data));

  // Add main attribute (Always put at the end of this function)
  itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrlWithVariant(data));
  return itemHtml;
};
// Build Product List Item
ProductListItem.prototype.compileTemplate = function(data) {
  if (!data) data = this.data;
  // Customize API data to get the Shopify data
  data = prepareShopifyData(data);

  // For List View
  // Get Template
  var itemHtml = boostPFSTemplate.productListItemHtml;

  // Add Custom class
  var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
  var saleClass = onSale ? boostPFSTemplate.saleClass : '';

  itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  // Add Label
  itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
  // Add TAG Label
  itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
  // Add Images
  itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));

  // Add Review
  if (typeof Integration === 'undefined' ||
    (typeof Integration != 'undefined' &&
      typeof Integration.hascompileTemplate == 'function' &&
      !Integration.hascompileTemplate('reviews'))) {
    itemHtml = itemHtml.replace(/{{itemReviews}}/g, buildReview(data));
  }

  // Add Vendor
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));

  // Add Price
  var itemPriceHtml = buildPrice(data, onSale, priceVaries);
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

  // Description
  var itemDescription = "";
  if (data.body_html != null){
    var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
    itemDescription = (itemDescription.split(" ")).length > 35 ? itemDescription.split(" ").splice(0, 35).join(" ") + '...' : itemDescription.split(" ").splice(0, 35).join(" ");
  }
  itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);

  // itemActiveSwapClass
  itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, buildActiveSwapClass(data));

  // Add Color Swatches
  itemHtml = itemHtml.replace(/{{itemSwatches}}/g, buildProductOptionSwatches(data));

  // Add main attribute
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrlWithVariant(data));
  itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);

  return itemHtml;
  // End For List View
};

/************************** END BUILD PRODUCT LIST **************************/
/************************** BUILD PRODUCT ITEM ELEMENTS **************************/
function buildGridWidthClass() {
  var gridWidthClass = '';
  // On PC
  switch (boostPFSThemeConfig.custom.products_per_row) {
    case 2:
      gridWidthClass = 'boost-pfs-filter-grid-width-2';
      break;
    case 3:
      gridWidthClass = 'boost-pfs-filter-grid-width-3';
      break;
    case 5:
      gridWidthClass = 'boost-pfs-filter-grid-width-5';
      break;
    case 6:
      gridWidthClass = 'boost-pfs-filter-grid-width-6';
      break;
    default:
      gridWidthClass = 'boost-pfs-filter-grid-width-4';
      break;
  }
  // On Mobile
  switch (boostPFSThemeConfig.custom.products_per_row_m) {
    case 1:
      gridWidthClass += ' boost-pfs-filter-grid-width-mb-1';
      break;
    case 3:
      gridWidthClass += ' boost-pfs-filter-grid-width-mb-3';
      break;
    default:
      gridWidthClass += ' boost-pfs-filter-grid-width-mb-2';
      break;
  }
  return gridWidthClass;
}

function buildImages(data) {
  var html = '',
    aspectRatio = '',
    rangeWidths = boostPFSRangeWidths,
    paddingTop = 100;

  var dataSrcSet = '',
    dataWidths = '',
    dataSizes = 'auto',
    imgAlt = data.title,
    flipImageSrcSet = '';

  var activeSwapImage = !Utils.isMobile() && images.length > 1 &&
    boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
    boostPFSThemeConfig.custom.active_image_swap == true;

  for (var i = 0; i < rangeWidths.length; i++) {
    dataSrcSet += Utils.getFeaturedImage(images, rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
    dataWidths += rangeWidths[i];

    if (activeSwapImage) {
      flipImageSrcSet += Utils.optimizeImage(images[1]['src'], rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
    }

    if (i < rangeWidths.length - 1) {
      dataSrcSet += ', ';
      dataWidths += ', ';

      if (activeSwapImage) {
        flipImageSrcSet += ', ';
      }
    }
  }

  if (images.length > 0) {
    aspectRatio = images[0]['width'] / images[0]['height'];
    paddingTop = 1 / aspectRatio * 100;
  }

  html += '<a href="{{itemUrl}}" class="boost-pfs-filter-product-item-image-link {{product.tags}}" ';
  html += 'style="padding-top:' + paddingTop + '%;">';
  if(data.tags.indexOf('Prime Tag') > -1) {
    html += `<svg
  width="848"
  height="848"
  viewBox="0 0 848 848"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <mask
    id="mask0_761_120493"
    style="mask-type:alpha"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="848"
    height="848">
    <rect
      x="0.869141"
      width="847"
      height="848"
      fill="#D9D9D9" />
  </mask>
  <g mask="url(#mask0_761_120493)">
    <circle
      cx="423.869"
      cy="424"
      r="424"
      fill="white" />
    <path d="M375.219 2.00705C295.019 11.6409 221.101 42.5495 158.011 92.9934C140.1 107.31 108.02 139.156 94.3856 156.416C13.2501 258.241 -17.0922 384.551 8.97278 511.665C28.8891 609.074 86.232 699.792 166.165 760.807C238.077 815.532 320.282 844.835 410.64 847.779C511.692 850.99 608.199 819.011 687.998 755.856C720.88 729.898 761.515 684.405 783.57 648.813C860.963 523.707 868.983 368.896 804.956 237.367C751.624 128.05 652.309 45.7608 535.084 14.0494C516.772 8.96484 491.642 4.28171 471.459 2.00705C449.003 -0.669018 396.873 -0.669018 375.219 2.00705V2.00705ZM554.867 208.733C559.144 212.079 559.545 218.769 555.802 223.452C553.797 225.994 551.926 226.663 546.98 226.663C542.035 226.663 540.163 225.994 538.158 223.452C529.737 213.015 544.04 200.17 554.867 208.733V208.733ZM647.096 206.726C648.968 207.395 649.235 210.339 649.235 225.459V243.255L656.453 239.91C671.023 233.22 684.523 234.558 690.271 243.255C693.211 247.67 693.345 248.741 693.345 276.839C693.345 309.488 693.88 307.614 683.32 307.614C673.562 307.614 673.295 306.811 673.295 279.917C673.295 259.846 673.028 255.966 671.023 253.825C668.349 250.882 660.463 250.614 653.913 253.29L649.235 255.297V280.586C649.235 308.818 649.636 307.614 639.745 307.614C628.517 307.614 629.185 310.959 629.185 256.769C629.185 212.48 629.319 208.6 631.591 207.395C634.131 205.924 643.755 205.522 647.096 206.726V206.726ZM204.126 215.825C214.685 221.311 218.829 227.734 218.829 238.304C218.829 246.065 215.621 252.889 210.809 255.431C208.002 256.903 208.136 257.17 213.75 260.649C220.968 265.199 224.176 271.487 224.176 280.854C224.176 291.558 218.428 299.72 207.467 304.403C201.72 306.811 166.298 308.819 159.481 307.079L156.006 306.276V260.248C156.006 235.093 156.407 213.952 157.075 213.417C157.61 212.881 167.368 212.614 178.729 212.881C195.571 213.283 200.383 213.818 204.126 215.825ZM598.442 228.67V238.036H617.289L616.888 244.994L616.487 252.086L607.531 252.487L598.442 252.889V270.685C598.442 291.424 598.843 292.227 609.67 292.227H616.487L616.888 298.649C617.289 304.403 617.021 305.072 613.813 306.276C607.531 308.685 592.961 307.882 588.149 304.938C579.996 299.987 579.06 297.311 578.659 273.896L578.124 252.755H574.515C569.971 252.755 567.698 250.48 567.698 245.931C567.698 241.783 569.57 240.043 575.184 238.839C579.194 237.903 579.461 237.501 580.397 230.41C581.733 219.17 581.733 219.304 590.555 219.304H598.442V228.67ZM258.929 262.522C258.929 291.29 259.464 292.896 268.954 292.896C272.162 292.896 276.306 292.227 278.177 291.29L281.652 289.818L281.92 264.262L282.321 238.705L292.078 238.304L301.702 237.903V271.889C301.702 309.488 302.103 307.614 293.014 307.614C288.469 307.614 284.326 304.804 284.326 301.593C284.326 300.389 281.92 301.058 276.974 303.868C263.073 311.361 249.305 310.023 242.354 300.523C239.815 297.044 239.547 294.502 239.146 269.213C238.879 254.227 239.013 240.98 239.414 239.91C239.948 238.572 242.622 238.036 249.572 238.036H258.929V262.522V262.522ZM340.332 263.192C344.342 276.572 348.085 287.142 348.486 286.607C349.02 285.938 352.228 275.234 355.837 262.79C359.313 250.213 362.921 239.642 363.723 239.107C364.525 238.572 368.936 238.036 373.615 238.036C380.833 238.036 381.902 238.304 381.902 240.579C381.902 244.593 352.763 321.128 349.154 326.614C344.476 333.572 338.862 336.114 328.703 335.981C319.079 335.847 316.406 334.375 316.406 329.023C316.406 322.466 317.609 320.995 323.223 320.995C330.441 320.995 334.584 318.72 337.124 313.368L339.263 308.819L325.896 274.565C318.544 255.699 312.797 239.776 313.198 239.107C313.599 238.438 318.277 238.036 323.49 238.304L333.114 238.705L340.332 263.192V263.192ZM441.918 242.318C442.587 244.727 445.126 255.297 447.532 265.734C449.938 276.304 452.344 284.466 452.879 283.797C453.28 283.262 455.953 273.494 458.76 262.121C461.567 250.748 464.374 240.579 465.176 239.642C465.845 238.705 469.587 238.036 474.266 238.036C480.281 238.036 482.286 238.572 483.221 240.311C483.89 241.649 486.83 252.22 489.637 263.727C492.444 275.368 495.118 284.332 495.652 283.797C496.187 283.262 498.459 273.762 500.865 262.79C503.138 251.684 505.41 241.649 505.677 240.311C506.346 238.438 507.95 238.036 516.371 238.036C521.851 238.036 526.262 238.438 526.262 238.973C526.262 239.374 521.45 254.762 515.569 273.093L504.742 306.41L495.118 306.009L485.494 305.607L479.612 282.192L473.597 258.776L467.983 281.389C464.909 293.699 461.701 304.537 461.033 305.206C459.028 307.213 448.602 308.016 444.859 306.678C442.052 305.607 440.314 301.192 431.225 273.361C425.477 255.832 420.665 240.579 420.665 239.642C420.665 238.572 423.472 238.036 430.557 238.036H440.448L441.918 242.318ZM556.738 272.29L557.005 306.009L554.065 306.811C549.386 308.016 542.436 307.748 539.495 306.276C537.089 304.938 536.955 303.065 536.955 272.29C536.955 254.494 537.356 239.374 537.891 238.839C538.426 238.304 542.837 238.036 547.649 238.304L556.337 238.705L556.738 272.29V272.29ZM392.061 371.037C395.803 374.784 396.605 376.657 396.605 381.072C396.605 389.368 393.665 393.918 386.714 396.594C376.021 400.742 365.996 396.46 363.055 386.692C359.58 375.185 367.065 366.488 380.432 366.488C386.714 366.488 388.051 367.023 392.061 371.037ZM234.869 414.791C253.85 423.087 264.409 448.376 260.667 476.474C257.993 496.411 248.637 511.263 234.201 518.756C228.587 521.7 225.78 522.235 216.824 522.235C206.264 522.235 203.858 521.432 189.155 513.939C188.487 513.672 188.086 524.242 188.086 537.489C188.086 558.228 187.818 561.707 185.947 562.376C184.744 562.778 178.462 563.179 172.046 563.179C161.62 563.179 159.882 562.911 158.679 560.637C156.674 556.623 156.808 418.404 158.947 416.263C161.085 414.122 180.333 414.122 182.472 416.263C183.407 417.199 184.076 418.939 184.076 420.277C184.076 422.819 187.417 423.622 188.754 421.347C190.224 418.939 200.65 414.122 208.136 412.516C216.958 410.509 226.715 411.312 234.869 414.791V414.791ZM494.316 412.115C499.261 413.185 502.87 415.058 506.613 418.537L511.96 423.488L522.118 418.404C541.767 408.636 561.149 408.636 571.708 418.27C580.798 426.432 581.199 428.573 580.798 476.876L580.397 519.693L567.164 520.094C558.609 520.362 553.396 519.96 552.193 518.89C550.723 517.686 550.322 510.327 550.322 479.284V441.284L546.847 437.805C543.639 434.594 542.703 434.46 535.218 435.129C530.673 435.53 524.524 436.735 521.584 437.805L516.237 439.678L515.569 479.686L514.9 519.693L501.534 520.094C490.172 520.362 487.9 520.094 486.563 518.087C485.226 516.482 484.825 506.446 484.825 478.615V441.284L481.35 437.805C478.142 434.594 477.34 434.46 469.587 435.129C464.909 435.53 458.627 436.868 455.686 438.206L450.072 440.347L449.805 480.087L449.404 519.693H421.334V415.326L432.963 414.925L444.458 414.523L446.196 419.073L447.8 423.488L457.958 418.404C472.662 411.044 481.885 409.439 494.316 412.115V412.115ZM673.562 414.925C681.181 418.136 689.736 426.967 692.008 433.925C692.944 436.735 693.345 443.023 693.078 448.108C692.677 455.869 692.008 458.143 688.533 462.425C679.978 473.263 658.191 479.284 637.74 476.474C632.66 475.805 628.249 475.404 627.982 475.671C627.715 475.939 627.848 478.214 628.383 480.622C629.586 486.777 634.264 493.601 639.477 496.679C645.893 500.425 660.864 501.094 674.899 498.284C681.315 497.08 687.196 496.411 687.865 496.946C690.003 498.15 689.736 514.341 687.464 516.214C683.855 519.291 664.874 523.038 653.111 523.038C627.18 523.038 610.338 512.467 603.12 491.594C600.179 482.897 598.976 462.96 600.981 453.326C605.66 431.115 620.497 415.594 641.081 411.981C650.171 410.242 666.211 411.713 673.562 414.925V414.925ZM349.555 425.897C349.822 433.256 349.421 438.34 348.486 439.277C347.684 440.08 342.07 440.883 336.055 441.016C330.04 441.15 322.421 442.087 319.079 443.023L313.064 444.897L312.663 480.89C312.529 504.573 311.861 517.418 310.925 518.622C308.92 520.897 285.529 521.031 283.256 518.756C282.053 517.552 281.652 504.439 281.652 468.045C281.652 441.016 282.053 418.002 282.454 416.798C283.123 415.058 285.529 414.657 294.484 414.657C306.782 414.657 307.316 415.058 309.054 424.291L309.99 429.108L317.876 422.819C327.233 415.192 331.911 413.453 341.802 413.72L349.154 413.988L349.555 425.897V425.897ZM394.467 416.798C395.937 420.544 395.402 515.01 393.932 517.82C392.729 520.094 390.991 520.362 380.565 520.362C374.149 520.362 367.867 519.96 366.664 519.559C364.793 518.89 364.526 513.003 364.526 467.643C364.526 439.411 364.927 415.995 365.461 415.594C365.862 415.058 372.412 414.657 380.031 414.657C391.259 414.657 393.798 415.058 394.467 416.798ZM687.196 584.588C690.003 585.39 693.88 587.665 695.751 589.538C698.959 592.75 698.959 593.419 698.291 604.39C696.687 630.616 684.122 659.384 667.547 675.173C654.983 687.215 653.111 683.468 661.265 661.792C667.815 644.398 673.295 623.926 673.295 616.834C673.295 605.059 665.409 602.383 634.532 603.989C595.902 605.996 593.229 605.728 600.046 599.306C606.462 593.285 621.833 586.996 637.873 583.785C648.7 581.644 678.909 582.179 687.196 584.588V584.588ZM192.096 606.398C232.597 626.736 264.008 638.51 305.712 648.546C351.025 659.651 386.848 663.933 434.032 663.933C503.405 663.799 560.614 652.56 633.863 624.729C643.086 621.116 648.032 621.651 650.171 626.334C652.577 631.686 649.77 635.031 634.933 644.933C599.377 668.482 552.327 686.813 503.672 696.18C474.934 701.799 460.632 703.004 425.344 703.004C397.274 702.87 388.585 702.468 371.209 699.792C323.757 692.701 280.583 678.651 240.216 657.377C207.601 640.116 158.679 603.721 158.679 596.764C158.679 590.207 161.353 590.876 192.096 606.398Z" fill="black" />
    <path d="M174.723 239.241V251.417H183.545C188.357 251.417 193.436 250.882 194.773 250.079C197.981 248.34 200.253 241.516 199.317 236.699C197.981 230.276 194.372 228.136 183.946 227.6L174.723 227.065V239.241V239.241Z" fill="black" />
    <path d="M174.723 278.714V291.559H186.084C196.51 291.559 197.847 291.292 200.788 288.214C205.332 283.799 205.332 275.77 200.921 270.552C197.847 267.073 196.778 266.806 186.218 266.27L174.723 265.869V278.714Z" fill="black" />
    <path d="M193.836 437.405L188.088 439.948V493.737L194.237 496.547C199.049 498.687 202.524 499.089 209.608 498.687C217.495 498.286 219.232 497.617 222.841 494.272C228.722 488.518 231.262 478.751 230.594 463.631C230.059 449.582 226.584 440.751 220.302 437.004C214.821 433.793 201.187 433.927 193.836 437.405V437.405Z" fill="black" />
    <path d="M643.357 433.391C637.342 435.264 631.996 441.285 629.857 448.644C628.253 453.996 628.253 455.468 629.456 456.405C632.53 458.278 655.788 457.609 659.798 455.468C668.086 451.187 667.685 437.539 659.264 433.926C654.184 431.785 649.239 431.651 643.357 433.391Z" fill="black" />
  </g>
</svg>`;
  }
  
  html += '<img class="boost-pfs-filter-product-item-main-image lazyload Image--lazyLoad"' +
    'data-srcset="' + dataSrcSet + '" ' +
    'data-src="' + Utils.getFeaturedImage(images, rangeWidths[2] + 'x') + '" ' +
    'data-widths="[' + dataWidths + ']" ' +
    'data-sizes="' + dataSizes + '" ' +
    'src="' + boostPFSImgDefaultSrc + '" ' +
    'alt="' + imgAlt + '"  ';

  if (activeSwapImage) {
    html += ' data-img-flip-src="' + Utils.optimizeImage(images[1]['src'], rangeWidths[2] + 'x') + '" ' +
      'data-img-flip-srcset="' + flipImageSrcSet + '" ';
  }
  html += '/></a>';

  return html;
}

function buildVendor(data) {
  var html = '';
  if (boostPFSThemeConfig.custom.hasOwnProperty('show_vendor') &&
    boostPFSThemeConfig.custom.show_vendor == true) {
    html = boostPFSTemplate.vendorHtml;
  }
  return html;
}

function buildPrice(data) {
  var html = '';
  if (boostPFSThemeConfig.custom.hasOwnProperty('show_price') &&
    boostPFSThemeConfig.custom.show_price) {
    html = '<p class="boost-pfs-filter-product-item-price">';
    if (onSale) {

      html += '<span class="boost-pfs-filter-product-item-sale-price">' + Utils.formatMoney(data.price_min) + '</span>';
      html += '<s>' + Utils.formatMoney(data.compare_at_price_min) + '</s> ';
    } else {
      if (priceVaries) {
        html += '<span class="boost-pfs-filter-product-item-price-from-text">' + (boostPFSThemeConfig.label_basic.from) + ' ' + '</span>';
      }
      html += '<span class="boost-pfs-filter-product-item-regular-price">' + Utils.formatMoney(data.price_min) + '</span>';
    }
    html += '</p>';
  }
  return html;
}

function buildLabels(data) {
  // Build Sale label
  var saleLabel = '';
  var salePercent = '';
  if (boostPFSThemeConfig.custom.sale_label_enable && onSale && !soldOut) {
    if (boostPFSThemeConfig.custom.sale_label_display == 'sale_percent'){
      salePercent = Math.round((data.compare_at_price_min - data.price_min) * 100 / data.compare_at_price_max);
    }
    saleLabel = boostPFSTemplate.saleLabelHtml.replace(/{{style}}/g, '');
    saleLabel = boostPFSTemplate.saleLabelHtml.replace(/percent/g, '-' + salePercent + '%');
  }
  // Build Labels
  return saleLabel;
}

// BUILD LABEL PRODUCT WITH TAGS
function buildTagLabels(data, showall) {
  if (boostPFSThemeConfig.custom.tag_label_enable) {
    if (showall) {
      var tagLabel = '';
      if (data.tags) {
        for (var i = 0; i < data.tags.length; i++) {
          var tag = data.tags[i];
          if (tag.indexOf("pfs:label") !== -1) {
            var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
            tagLabel += preTagLabel;
          }
        }
      }
    } else {
      var tagLabel = '';
      if (data.tags) {
        for (var i = data.tags.length - 1; i >= 0; i--) {
          tag = data.tags[i];
          if (tag.indexOf("pfs:label") !== -1) {
            var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
            tagLabel += preTagLabel;
            break;
          }
        }
      }
    }
    return tagLabel;
  } else {
    return "";
  }
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
// Build Color Swatches
function buildProductOptionSwatches(data) {
  var swatchesProductOptionHtml = '';
  if (boostPFSThemeConfig.custom.swatch_enable) {
    var swatchApplyFor = ['color', 'img', 'pro_img', 'text'];
    for(var i = 0; i < swatchApplyFor.length; i++){
      var optionNames = boostPFSThemeConfig.custom["swatch_by_" + swatchApplyFor[i] + "_apply"].split(',').filter(onlyUnique);
      var swatchShape = boostPFSThemeConfig.custom["swatch_by_" + swatchApplyFor[i] + "_shape"];
      var swatchType = swatchApplyFor[i];
      for(var j=0; j < optionNames.length; j++){
        var optionName = optionNames[j].trim();
        var filterSwatchTitle = optionName,
        swatchArr = [],
        countSwatch = 0,
        swatchValues = [],
        swatchLimit = 4;
    
        var dataImgSize = '360',
          bgSize = '50x',
          dataImgSrc = Utils.getFeaturedImage(data.images_info, dataImgSize + 'x'),
          swatchName = '#ffffff',
          bgImageSrc = '',
          viewMoreLabel = 'More ' + filterSwatchTitle;

        if (typeof data.options_with_values != 'undefined' && data.options_with_values.length > 0) {
          swatchArr = data.options_with_values.filter(function(option) {
            return option.name == optionName;
          });
          if (swatchArr.length > 0) {
            countSwatch = swatchArr[0].values.length;

            if (swatchLimit > countSwatch) {
              swatchLimit = countSwatch;
            }
            swatchValues = swatchArr[0].values;

            swatchesProductOptionHtml += '<ul class="boost-pfs-filter-item-swatch boost-pfs-filter-item-swatch-option' + optionName + ' boost-pfs-filter-item-swatch-shape-' + swatchShape + ' boost-pfs-filter-item-swatch-type-' + swatchType + '">';

            for (var sIndex = 0; sIndex < swatchLimit; sIndex++) {
              swatchName = swatchValues[sIndex].title;
              swatchVariant = data['variants'][sIndex];
              sImageIndex = swatchValues[sIndex].image || '';
              if (sImageIndex != '') {
                dataImgSrc = Utils.optimizeImage(swatchVariant.image, dataImgSize + 'x') + ' ' + dataImgSize + 'w';
              }
              
              if (swatchType) {
                switch (swatchType) {
                  case 'img':
                    bgImageSrc = boostPFSAppConfig.general.file_url.replace(/\?/, Utils.slugify(filterSwatchTitle).replace(/\-/g, '_') + '-' + Utils.slugify(swatchName) + '.png?v=');
                    break;
                  case 'pro_img':
                    bgImageSrc = Utils.getFeaturedImage(data.images_info, bgSize);
                    if (sImageIndex != '') {
                      bgImageSrc = Utils.optimizeImage(data.images[sImageIndex], bgSize);
                    }
                    if (bgImageSrc && bgImageSrc.includes('boost-pfs-no-image')) bgImageSrc = '';
                    break;
                  default:
                    bgImageSrc = '';
                }
              }
              swatchesProductOptionHtml += '<li>';
                if(swatchType == 'text'){
                  swatchesProductOptionHtml += '<a aria-label="' + optionName + ': ' + swatchName + '" title="' + swatchName + '" href="' + Utils.buildProductItemUrl(data) + '?variant=' + swatchVariant.id + '">' + swatchName + '</a>';
                } else {
                  if(boostPFSThemeConfig.custom.show_swatch_tooltip){
                    swatchesProductOptionHtml += '<div class="boost-pfs-product-item-tooltip">' + swatchName + '</div>';
                  }
                  swatchesProductOptionHtml += '<span tabindex="0" aria-label="' + optionName + ': ' + swatchName + '" ' + 'style="background-color: ' + swatchName + '; ';
                  if (bgImageSrc != '') {
                      swatchesProductOptionHtml += 'background-image: url(' + bgImageSrc + ');" ';
                  } else {
                      swatchesProductOptionHtml += '" ';
                  }
                  if (dataImgSrc != '') {
                      swatchesProductOptionHtml += 'data-img="' + dataImgSrc + '" ';
                  }

                  swatchesProductOptionHtml += '></span>';
                }
              swatchesProductOptionHtml += '</li>';
            }

            if (countSwatch > swatchLimit) {
              swatchesProductOptionHtml += '<li class="boost-pfs-filter-item-swatch-more">';
              swatchesProductOptionHtml += '<a href="{{itemUrl}}" aria-label="' + viewMoreLabel + '" title="' + viewMoreLabel + '">+' + (countSwatch - swatchLimit) + '</a>';
              swatchesProductOptionHtml += '</li>';
            }

            swatchesProductOptionHtml += '</ul>';
          }
        }
      }
      
    }
  }
  return swatchesProductOptionHtml;
}

// Build Color Swatches
function eventColorSwatches(event) {
  jQ('.boost-pfs-filter-item-swatch li span').each(function() {
    var img = jQ(this).parents('.boost-pfs-filter-product-item-inner').find('.boost-pfs-filter-product-item-main-image');
    if (event == 'hover') {
      jQ(this).hover(function() {
        var newImage = jQ(this).data('img');
        img.attr('srcset', newImage);
      });
    }
    if (event == 'click') {
      jQ(this).click(function() {
        var newImage = jQ(this).data('img');
        img.attr('srcset', newImage);
      });
    }
    jQ(this).focus(function() {
      if (jQ('body').hasClass('boost-pfs-ada')) {
        var newImage = jQ(this).data('img');
        img.attr('srcset', newImage);
      }
    });
  });
}

function buildReview(data) {
  var html = '';
  if (boostPFSThemeConfig.custom.hasOwnProperty('show_product_review') &&
    boostPFSThemeConfig.custom.show_product_review == true) {
    html = '<span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span>';
  }
  return html;
}

function buildActiveSwapClass(data) {
  if (!Utils.isMobile() && images.length > 1 &&
    boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
    boostPFSThemeConfig.custom.active_image_swap == true) {
    return 'has-bc-swap-image';
  }
  return '';
}



/************************** END BUILD PRODUCT ITEM ELEMENTS **************************/
/************************** BUILD TOOLBAR **************************/
// Build Pagination
ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
  if (!totalProduct) totalProduct = this.totalProduct;
  // Get page info
  var currentPage = parseInt(Utils.stripHtml(Globals.queryParams.page));
  var totalPage = Math.ceil(totalProduct / Utils.stripHtml(Globals.queryParams.limit));
  if (!currentPage || isNaN(currentPage)) {
    currentPage = 1;
  }
  // If it has only one page, clear Pagination
  if (totalPage <= 1) {
    return '';
  }

  var paginationHtml = boostPFSTemplate.paginateHtml;
  // Build Previous
  var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
  previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
  paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
  // Build Next
  var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
  nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
  paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
  // Create page items array
  var beforeCurrentPageArr = [];
  for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
    beforeCurrentPageArr.unshift(iBefore);
  }
  if (currentPage - 4 > 0) {
    beforeCurrentPageArr.unshift('...');
  }
  if (currentPage - 4 >= 0) {
    beforeCurrentPageArr.unshift(1);
  }
  beforeCurrentPageArr.push(currentPage);
  var afterCurrentPageArr = [];
  for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
    afterCurrentPageArr.push(iAfter);
  }
  if (currentPage + 3 < totalPage) {
    afterCurrentPageArr.push('...');
  }
  if (currentPage + 3 <= totalPage) {
    afterCurrentPageArr.push(totalPage);
  }
  // Build page items
  var pageItemsHtml = '';
  var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
  for (var iPage = 0; iPage < pageArr.length; iPage++) {
    if (pageArr[iPage] == '...') {
      pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
    } else {
      pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
    }
    pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
    pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
  }
  paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
  return paginationHtml;
};

// Build Sorting
ProductSorting.prototype.compileTemplate = function() {
  var html = boostPFSTemplate.sortingHtml;
  if (boostPFSThemeConfig.custom.show_sort_by && boostPFSTemplate.hasOwnProperty('sortingHtml')) {
    var sortingArr = Utils.getSortingList();
    if (sortingArr) {
      var paramSort = Utils.stripHtml(Globals.queryParams.sort) || '';
      // Build content
      var sortingItemsHtml = '';
      for (var k in sortingArr) {
        activeClass = '';
        if (paramSort == k) {
          activeClass = 'boost-pfs-filter-sort-item-active';
        }
        sortingItemsHtml += '<li aria-label="' + sortingArr[k] + '"><a href="#" data-sort="' + k + '" class="' + activeClass + '"  title="' + sortingArr[k] + '" aria-label="' + sortingArr[k] + '">' + sortingArr[k] + '</a></li>';
      }
      html = html.replace(/{{sortingItems}}/g, sortingItemsHtml);
      html = html.replace(/{{sortingLabel}}/g, Labels.sorting);
    }
  }
  return html;
};

ProductSorting.prototype.render = function() {
  jQ(Selector.topSorting).html(this.compileTemplate());

  if (jQ('.boost-pfs-filter-custom-sorting').hasClass('boost-pfs-filter-sort-active')) {
    jQ('.boost-pfs-filter-custom-sorting').toggleClass('boost-pfs-filter-sort-active');
  }

  var labelSort = '';
  var paramSort = Utils.stripHtml(Globals.queryParams.sort) || '';
  var sortingList = Utils.getSortingList();
  if (paramSort.length > 0 && sortingList && sortingList[paramSort]) {
    labelSort = sortingList[paramSort];
  } else {
    labelSort = Labels.sorting_heading;
  }

  jQ('.boost-pfs-filter-custom-sorting button span span').text(labelSort);
}

// Build Sorting event
ProductSorting.prototype.bindEvents = function() {
  var _this = this;
  jQ('.boost-pfs-filter-filter-dropdown a').click(function(e) {
    e.preventDefault();
    FilterApi.setParam('sort', jQ(this).data('sort'));
    FilterApi.setParam('page', 1);
    FilterApi.applyFilter('sort');
  });

  jQ(".boost-pfs-filter-custom-sorting > button").click(function() {
    jQ('.boost-pfs-filter-filter-dropdown').toggle().parent().toggleClass('boost-pfs-filter-sort-active');
  });

  jQ(Selector.filterTreeMobileButton).click(function() {
    jQ('.boost-pfs-filter-top-sorting-mobile .boost-pfs-filter-filter-dropdown').hide();
  });

  jQ(document).on('click', function (e) {
    if (jQ(e.target).parents('.boost-pfs-filter-top-sorting').find(".boost-pfs-filter-filter-dropdown").length === 0) {
      jQ('.boost-pfs-filter-filter-dropdown').hide().parent().removeClass('boost-pfs-filter-sort-active');
    }
  });
};
// For Toolbar - Build Display type
ProductDisplayType.prototype.compileTemplate = function() {
  
  var itemHtml = '<span>' + boostPFSThemeConfig.label.toolbar_viewas + '</span>';
  if (boostPFSThemeConfig.custom.product_item_type == 'grid') {
    if (boostPFSThemeConfig.custom.view_as_type == 'view_as_type_list_grid_multi_col' && !Utils.isMobile()) {
      console.log(buildDisplayTitle('grid', 3))
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="' + buildDisplayTitle('list') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 2) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-2" data-view="grid-2"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 3) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-3" data-view="grid-3"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 4) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-4" data-view="grid-4"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 5) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-5" data-view="grid-5"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 6) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-6" data-view="grid-6"><span class="icon-fallback-text"></span></a>';
    } else {
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid" data-view="grid"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="' + buildDisplayTitle('list') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
    }
  } else {
    if (boostPFSThemeConfig.custom.view_as_type == 'view_as_type_list_grid_multi_col' && !Utils.isMobile()) {
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="' + buildDisplayTitle('list') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 2) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-2" data-view="grid-2"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 3) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-3" data-view="grid-3"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 4) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-4" data-view="grid-4"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 5) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-5" data-view="grid-5"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 6) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-6" data-view="grid-6"><span class="icon-fallback-text"></span></a>';
    } else {
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="' + buildDisplayTitle('list') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid" data-view="grid"><span class="icon-fallback-text"></span></a>';
    }
  }

  itemHtml = itemHtml.replace(/{{class.productDisplayType}}/g, Class.productDisplayType);

  return itemHtml;
};

function buildDisplayTitle(type, count) {
  if(type === '') return type;
  // Build title for list view
  if(type === 'list') {
    return Labels.listView || 'List view';
  } 
  // Build title for grid view
  if(typeof count === 'undefined' || count === 0) return Labels.gridView || 'Grid view';
  return (Labels.gridViewColumns || 'Grid view {{ count }} Columns').replace(/{{ count }}/g, count);
}

var originalRenderProductDisplayType = ProductDisplayType.prototype.render;
ProductDisplayType.prototype.render = function() {
  // Call the original function in our app lib.
  // We don't have to copy a very big function out here to modify.
  // function.call(this, param1, param2) binds the "this" pointer and params to the original function.
  originalRenderProductDisplayType.call(this);

  // Do your custom code after the original function has run
  // Active current display type
  if (this.$element.length) {
    this.$element.find(this.selector.productDisplayTypeList).removeClass('active');
    this.$element.find(this.selector.productDisplayTypeGrid).removeClass('active');
    if (Utils.stripHtml(Globals.queryParams.display) == 'list') {
      this.$element.find(this.selector.productDisplayTypeList).addClass('active');
    } else if (Utils.stripHtml(Globals.queryParams.display) == 'grid') {
      if (boostPFSThemeConfig.custom.view_as_type == 'view_as_type_list_grid_multi_col' && !Utils.isMobile()) {
        var curentGridColumn = boostPFSThemeConfig.custom.products_per_row;
        this.$element.find(this.selector.productDisplayTypeGrid).each(function(){
        var $parent = jQ(this).parent();
        var $cssNames = jQ('.boost-pfs-filter-top-display-type').attr('class').split(' ');
        var $activeClass = $cssNames[$cssNames.length - 1];
        var indexCurrentColumn = $activeClass.split('-')[$activeClass.split('-').length - 1];
        
        if($parent.hasClass('boost-pfs-filter-view-as-click') && jQ(this).data('view') == $activeClass){
            jQ(this).addClass('active');

            // jQ('.boost-pfs-filter-product-item').removeClass(function(index, css) {
            // return (css.match (/(^|\s)boost-pfs-filter-grid-width-\S+/g) || []).join(' ');
            // }).addClass('boost-pfs-filter-grid-width-' + indexCurrentColumn);
            if(jQ('.boost-pfs-filter-product-item').length > 0) {
              var arrClass = jQ('.boost-pfs-filter-product-item').attr('class').split(' ');
              var prevClass = '';
              for (var i = 0; i < arrClass.length; i++) {     
                if(arrClass[i].match (/(^|\s)boost-pfs-filter-grid-width-\S+/g)) {
                  prevClass = arrClass[i];
                  break;
                }
              }
              jQ('.boost-pfs-filter-product-item').removeClass(prevClass);
              jQ('.boost-pfs-filter-product-item').addClass('boost-pfs-filter-grid-width-' + indexCurrentColumn);

              // jQ('.boost-pfs-filter-product-item').className = jQ('.boost-pfs-filter-product-item').className.replace(/(^|\s)boost-pfs-filter-grid-width-\S+/g , '');
              // jQ('.boost-pfs-filter-product-item').addClass('boost-pfs-filter-grid-width-' + indexCurrentColumn);
            }

        } else if(!$parent.hasClass('boost-pfs-filter-view-as-click') && jQ(this).data('view').split('-')[1] == curentGridColumn) {    
            jQ(this).addClass('active');
        }
      });

      } else {
        this.$element.find(this.selector.productDisplayTypeGrid).addClass('active');
      }
    }
  }
};

// Build Show Limit
ProductLimit.prototype.compileTemplate = function() {
  var html = '';
  if (boostPFSThemeConfig.custom.show_limit && boostPFSTemplate.hasOwnProperty('showLimitHtml')) {

    var numberList = Settings.getSettingValue('general.showLimitList');
    if (numberList != '') {
      // Build content
      var showLimitItemsHtml = '';
      var arr = numberList.split(',');
      for (var k in sortingArr) {
        showLimitItemsHtml += '<option value="' + arr[k].trim() + '">' + arr[k].trim() + '</option>';
      }
      html = boostPFSTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
    }
  }
  return html;
};
// Build Breadcrumb
Breadcrumb.prototype.compileTemplate = function(colData) {
  if (!colData) colData = this.collectionData;
  var breadcrumbItemsHtml = '';
  if (boostPFSTemplate.hasOwnProperty('breadcrumbHtml')) {
    if (typeof colData !== 'undefined' && colData.hasOwnProperty('collection')) {
      var colInfo = colData.collection;
      if (typeof this.collectionTags !== 'undefined' && this.collectionTags !== null) {
        breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemLink.replace(/{{itemLink}}/g, '/collections/' + colInfo.handle).replace(/{{itemTitle}}/g, colInfo.title);
        breadcrumbItemsHtml += " {{breadcrumbDivider}} ";
        breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, this.collectionTags[0]);
      } else {
        breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, colInfo.title);
      }
    } else {
      breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, Settings.getSettingValue('label.defaultCollectionHeader'));
    }
  }
  return breadcrumbItemsHtml
};

/************************** END BUILD TOOLBAR **************************/


	// Add additional feature for product list, used commonly in customizing product list
	ProductList.prototype.afterRender = function(data) {
		if (!data) data = this.data;

        this.buildExtrasProductListByAjax(data, 'boost-integration', function(results){
          results.forEach(function(result){
            // Append the custom html to product item
            jQ('[data-product-id="'+ result.id+ '"] .boost-custom-html').empty().html(result.custom_html);
          })
        })
      

		// Intergrate Review Shopify
		if (window.SPR &&
			typeof window.SPR.initDomEls == 'function' &&
			typeof window.SPR.loadBadges == 'function' &&
			boostPFSThemeConfig.custom.show_product_review) {
			window.SPR.initDomEls();
			window.SPR.loadBadges();
		}
      	setTimeout(function() {
         jQ('.swatchify-coll-cont .ps-clickable').click(function() {
          var img = jQ(this).parents('.boost-pfs-filter-product-item-inner').find('.boost-pfs-filter-product-item-main-image');
          var newImage = jQ(this).attr('data-coll-img');
          img.attr('src', newImage);
        });
       }, 3000);
      /* #boost-77211: add custom label */
      /*
      this.buildExtrasProductListByAjax(data, 'boost-pfs-label', function(results) {
        results.forEach(function(result) {
          jQ('[data-id="' + result.id + '"] div.boost-pfs-filter-product-item-image').append(result.label);
        });
      });
      */
	};

// Build additional elements
Filter.prototype.afterRender = function(data) {
  if (!data) data = this.data;
  var totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_other + '</span>';
  if (data.total_product == 1) {
    totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_one + '</span>';
  }
  if (data.total_product == 0) {
    jQ(".boost-pfs-filter-default-toolbar-inner").addClass('boost-pfs-filter-toolbar-product-0');
  } else {
    jQ(".boost-pfs-filter-default-toolbar-inner").removeClass('boost-pfs-filter-toolbar-product-0');
  }
  jQ('.boost-pfs-filter-total-product').html(totalProduct);

  jQ('body').find('.boost-pfs-filter-skeleton-button').remove();

  // Prevent double tap on iOS
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isiOS) {
    Utils.isMobile() && jQ(".boost-pfs-filter-product-item").find("a").on("touchstart", function() {
      isScrolling = !1
    }).on("touchmove", function() {
      isScrolling = !0
    }).on("touchend", function() {
      isScrolling || (window.location = jQ(this).attr("href"))
    });
  }

  // Build Image Swap. Put this function here to impprove the pagespeed.
  swapImage(data);

  // Build Equal Height
  if (Utils.stripHtml(Globals.queryParams.display) !== 'list') {
    setTimeout(function(){
      equalHeight(data);
    }, 700);
  };

  jQ(window).resize(function() {
    if (Utils.stripHtml(Globals.queryParams.display) !== 'list') {
      setTimeout(function(){
        equalHeight(data);
      }, 700);
    }
  });

  // Build Event Color Swatch
  if (boostPFSThemeConfig.custom.swatch_change_img != 'none') {
    eventColorSwatches(boostPFSThemeConfig.custom.swatch_change_img);
  }

  if (typeof boostRemoveImageLoadingAnimation == 'function') {
    boostRemoveImageLoadingAnimation(jQ(Selector.products).find('[data-boost-image-loading-animation]'));
  }

	// Layout Fullwidth Page
  if (boostPFSThemeConfig.custom.hasOwnProperty('layout_type') && boostPFSThemeConfig.custom.layout_type == 'fullwidth' && !Utils.isMobile()) {
    jQ('body').addClass('boost-pfs-filter-fullwidth-page');
  }
  document.addEventListener('scroll', function() {
    if(jQ('.boost-pfs-filter-tree-h.boost-pfs-filter-stick').length > 0 && jQ(window).width() > 767){
      jQ('.boost-pfs-filter-custom-sorting .boost-pfs-filter-filter-dropdown').hide().parent().removeClass('boost-pfs-filter-sort-active');
    }
  });

  // Fix confict Sticky Mobile theme Streamline
  if(jQ('.site-nav__thumb-menu').length > 0 && Utils.isMobile()){
    var heightHeaderThemeStick = jQ('.site-nav__thumb-menu').height() + 40;
    jQ('.boost-pfs-filter-tree-mobile-button-stick-wrapper').css('bottom',heightHeaderThemeStick).addClass('boost-pfs-filter-sticky-bottom');
    jQ('.boost-pfs-filter-mobile-style1').addClass('boost-pfs-filter-mobile-style1-sticky-bottom');
  }
};

function removeClassByPrefix(node, prefix) {
  var regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
  node.className = node.className.replace(regx, '');
  return node;
}

var original_onClickEventProductDisplayType = ProductDisplayType.prototype._onClickEvent;
ProductDisplayType.prototype._onClickEvent = function(event) {
  // Call the original function in our app lib.
  // We don't have to copy a very big function out here to modify.
  // function.call(this, param1, param2) binds the "this" pointer and params to the original function.
  original_onClickEventProductDisplayType.call(this, event);

  // Do your custom code after the original function has run
  /*  View As Type 2/3/4/5/6 */
  
  if (boostPFSThemeConfig.custom.view_as_type == 'view_as_type_list_grid_multi_col' && !Utils.isMobile()) {
      jQ('.boost-pfs-filter-top-display-type').addClass('boost-pfs-filter-view-as-click');
      var currentClass = jQ(event.target).data('view');
      jQ('.boost-pfs-filter-top-display-type')[0].className = jQ('.boost-pfs-filter-top-display-type')[0].className.replace(/(^|\s)grid-\S+/g , '');
      jQ('.boost-pfs-filter-top-display-type').addClass(currentClass);
  }
}

ProductListPlaceholder.prototype.render = function() {
  // Set limit number for product skeleton
  var placeholderLimit = this.settings.productsPerRow || this.settings.placeholderProductPerRow;
  // Build placeholder items
  var placeholderItem = this.compileTemplate();
  this.$element = [];
  for (var i = 0; i < placeholderLimit; i++) {
    this.$element.push(jQ(placeholderItem));
  }
  // Show placeholder before send filter request OR hide it after get filter data
  if (!this.isFetchedProductData) {
    this.setShow();
  } else {
    this.setHide();
  }
}

ProductListPlaceholder.prototype.compileTemplateExtra = function() {
  //Todo: Build placeholder for List mode
  var template = boostPFSTemplate.productListPlaceholderHtml;
  var imgRatioSetting = parseFloat(this.settings.placeholderImageRatio);
  var imgRatio = imgRatioSetting > 0 ? imgRatioSetting : 1.4; // It mean w1:h1.4
  /**
   * Set product class for product skeleton (to set column, style, etc.)
   * - If had defined product_grid_class in boostPFSThemeConfig => use this config ELSE use our setting
   */
  return template
    .replace(/{{class.filterProductSkeleton}}/g, Class.filterProductSkeleton)
    .replace(/{{class.filterSkeleton}}/g, Class.filterSkeleton)
    .replace(/{{class.filterSkeletonText}}/g, Class.filterSkeletonText)
    .replace(/{{paddingTop}}/g, imgRatio * 100)
}

/* Prevent conflict with theme vendor js */
Array.prototype.insert = function(a, b) {}

/* Math qual Height */
function equalHeight(data) {
  var equal_i = -1;
  var equal_els = [];
  var equal_element = null;

  // Equal Height Title
  jQ('.boost-pfs-filter-product-item').each(function(i, element) {

    var offsetTop = jQ(element).offset().top;
    if (!equal_element || equal_element.offset().top !== offsetTop) {
      equal_element = jQ(element);
      equal_i++;
    }

    if (!equal_els[equal_i]) {
      equal_els[equal_i] = [];
    }
    equal_els[equal_i].push(element);
  });

  for (var i = 0; i < equal_els.length; i++) {
    var max = 0;
    var maxRatio = 0;
    var iLength = equal_els[i].length;

    for (var j = 0; j < equal_els[i].length; j++) {
      var item = equal_els[i][j];
      var height = jQ(item).find('.boost-pfs-filter-product-bottom-inner').height();
      max = Math.max(max, height);
    }
    jQ(equal_els[i]).find('.boost-pfs-filter-product-bottom-inner').css({ 'min-height': max });
  }

  var aspect_ratio = boostPFSFilterConfig.general.aspect_ratio;

  if (aspect_ratio != 'false') {
    var cropImagePosition = boostPFSFilterConfig.general.cropImagePossitionEqualHeight;

    var widthImage = jQ('.boost-pfs-filter-product-item').width();
    var indexData = 0;

    // For Ratio
    if (aspect_ratio != 'false' && aspect_ratio != 'auto') {
      var heightImage = 0;
      var widthImage = jQ('.boost-pfs-filter-product-item').width();
      if (aspect_ratio != 'false' && aspect_ratio != 'auto' && aspect_ratio != 'other') {
        var ratioWidthHeight = boostPFSThemeConfig.custom.aspect_ratio;
      } else {
        var ratioWidthHeight = '';
      }

      var ratioWidthHeightOther = boostPFSThemeConfig.custom.aspect_ratio_other;
      if (!ratioWidthHeightOther || !ratioWidthHeight) {
        return null;
      } else {
        if (aspect_ratio != 'other') {
          ratioWidthHeight = ratioWidthHeight.split(':');
          ratioWidthHeight = parseInt(ratioWidthHeight[1]) / parseInt(ratioWidthHeight[0]);
          heightImage = widthImage * ratioWidthHeight;
        } else if (ratioWidthHeightOther != '' && aspect_ratio == 'other') {
          ratioWidthHeightOther = ratioWidthHeightOther.split(':');
          ratioWidthHeightOther = parseInt(ratioWidthHeightOther[1]) / parseInt(ratioWidthHeightOther[0]);
          heightImage = widthImage * ratioWidthHeightOther;
        }
      }
      jQ('.boost-pfs-filter-product-item-image-link').css({ 'padding-top': heightImage + 'px' }).addClass('boost-pfs-filter-crop-image-position-' + cropImagePosition);

    }
  }
}

// Swap Image
function swapImage(data) {
  if (!Utils.isMobile()) {
    if (boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
      boostPFSThemeConfig.custom.active_image_swap == true) {
      var dataSrcSetFlipImg = '',
        dataSrcFlipImg = '',
        flipImageAlt = '',
        dataSizes = 'auto',
        dataWidths = '',
        html = '';

      jQ(".boost-pfs-filter-product-item").each(function() {
        var productItemSelector = jQ(this);
        var imgSelector = productItemSelector.find('.boost-pfs-filter-product-item-main-image');

        if (typeof imgSelector.data('img-flip-src') != 'undefined' &&
          imgSelector.data('img-flip-src') != '') {
          dataSrcFlipImg = imgSelector.data('img-flip-src');
          dataSrcSetFlipImg = imgSelector.data('img-flip-srcset');
          flipImageAlt = imgSelector.attr('alt');
          dataWidths = imgSelector.data('widths');
          html = '<img class="boost-pfs-filter-product-item-flip-image lazyload Image--lazyLoad"' +
            'data-srcset="' + dataSrcSetFlipImg + '" ' +
            'data-src="' + dataSrcFlipImg + '" ' +
            'data-widths="[' + dataWidths + ']" ' +
            'data-sizes="' + dataSizes + '" ' +
            'src="' + boostPFSImgDefaultSrc + '" ' +
            'alt="' + flipImageAlt + '" />';

          productItemSelector.find('.boost-pfs-filter-product-item-image-link').append(html);
        }

      });
    }
  }
}

// Build Placeholder for the first load
function boostRemoveImageLoadingAnimation($selector) {
  if ($selector.length) {
    $selector.removeAttr('data-boost-image-loading-animation');
  }
}
/* Expand Filter */
jQ(document).ready(function() {
    // Fix issue header fix on the Parallax theme
    if(jQ('.mm-fixed-top').length > 0){
      var headerFixedHeight = jQ('.mm-fixed-top').height();
      jQ('.boost-pfs-filter-collection-header-wrapper').css('margin-top', headerFixedHeight);
    }
});
})();