// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.footer');
goog.require('cljs.core');
goog.require('barado.theme');
goog.require('cemerick.url');
goog.require('om.next');
goog.require('om.dom');
barado.footer.social_flavors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Like a crystal ball for train waiting times, but with MUCH MORE SCIENCE","I can't see the future, but this is pretty close","Status and waiting time predictions for the MRT! Not time-travel, but pretty good!"], null);
/**
 * @constructor
 */
barado.footer.Footer = (function barado$footer$Footer(){
var this__19070__auto__ = this;
React.Component.apply(this__19070__auto__,arguments);

if(!((this__19070__auto__.initLocalState == null))){
this__19070__auto__.state = this__19070__auto__.initLocalState();
} else {
this__19070__auto__.state = {};
}

return this__19070__auto__;
});

barado.footer.Footer.prototype = goog.object.clone(React.Component.prototype);

var x21509_21525 = barado.footer.Footer.prototype;
x21509_21525.componentWillUpdate = ((function (x21509_21525){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
if(((!((this__18924__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18924__auto__.om$next$Ident$)))?true:false):false)){
var ident__18928__auto___21526 = om.next.ident(this__18924__auto__,om.next.props(this__18924__auto__));
var next_ident__18929__auto___21527 = om.next.ident(this__18924__auto__,om.next._next_props(next_props__18925__auto__,this__18924__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18928__auto___21526,next_ident__18929__auto___21527)){
var idxr__18930__auto___21528 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18930__auto___21528 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18930__auto___21528),((function (idxr__18930__auto___21528,ident__18928__auto___21526,next_ident__18929__auto___21527,this__18924__auto__,x21509_21525){
return (function (indexes__18931__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18931__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18928__auto___21526], null),cljs.core.disj,this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18929__auto___21527], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18924__auto__);
});})(idxr__18930__auto___21528,ident__18928__auto___21526,next_ident__18929__auto___21527,this__18924__auto__,x21509_21525))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18924__auto__);

return om.next.merge_pending_state_BANG_(this__18924__auto__);
});})(x21509_21525))
;

x21509_21525.shouldComponentUpdate = ((function (x21509_21525){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
var next_children__18927__auto__ = next_props__18925__auto__.children;
var next_props__18925__auto____$1 = goog.object.get(next_props__18925__auto__,"omcljs$value");
var next_props__18925__auto____$2 = (function (){var G__21511 = next_props__18925__auto____$1;
if((next_props__18925__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__21511);
} else {
return G__21511;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18924__auto__),next_props__18925__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18924__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__21516 = this__18924__auto__.state;
var G__21517 = "omcljs$state";
return goog.object.get(G__21516,G__21517);
})(),goog.object.get(next_state__18926__auto__,"omcljs$state"));
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__18924__auto__.props.children,next_children__18927__auto__);
}
}
});})(x21509_21525))
;

x21509_21525.componentWillUnmount = ((function (x21509_21525){
return (function (){
var this__18924__auto__ = this;
var r__18935__auto__ = om.next.get_reconciler(this__18924__auto__);
var cfg__18936__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__18935__auto__);
var st__18937__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__18936__auto__);
var indexer__18934__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__18936__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__18937__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__18937__auto__) : cljs.core.deref.call(null,st__18937__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__18924__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__18937__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__18924__auto__], 0));
} else {
}

if((indexer__18934__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__18934__auto__,this__18924__auto__);
}
});})(x21509_21525))
;

x21509_21525.componentDidUpdate = ((function (x21509_21525){
return (function (prev_props__18932__auto__,prev_state__18933__auto__){
var this__18924__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18924__auto__);
});})(x21509_21525))
;

x21509_21525.isMounted = ((function (x21509_21525){
return (function (){
var this__18924__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18924__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21509_21525))
;

x21509_21525.componentWillMount = ((function (x21509_21525){
return (function (){
var this__18924__auto__ = this;
var indexer__18934__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18934__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18934__auto__,this__18924__auto__);
}
});})(x21509_21525))
;

x21509_21525.render = ((function (x21509_21525){
return (function (){
var this__18923__auto__ = this;
var this$ = this__18923__auto__;
var _STAR_reconciler_STAR_21518 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21519 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21520 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21521 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21522 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__18923__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__18923__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__18923__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__18923__auto__);

om.next._STAR_parent_STAR_ = this__18923__auto__;

try{return om.dom.footer.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.section.cljs$core$IFn$_invoke$arity$variadic(({"id": "social"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container"}),cljs.core.array_seq([om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "button colored social twitter", "target": "_blank", "rel": "noopener noreferrer", "href": cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cemerick.url.url.cljs$core$IFn$_invoke$arity$1("https://twitter.com/intent/tweet"),cljs.core.cst$kw$query,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,cljs.core.rand_nth(barado.footer.social_flavors),cljs.core.cst$kw$url,"https://traincheck.sakay.ph",cljs.core.cst$kw$via,"sakayph"], null))}),cljs.core.array_seq([om.dom.i(({"className": "icon-twitter"}))," Tweet about this"], 0)),om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "button colored social facebook", "target": "_blank", "rel": "noopener noreferrer", "href": cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cemerick.url.url.cljs$core$IFn$_invoke$arity$1("https://www.facebook.com/sharer/sharer.php"),cljs.core.cst$kw$query,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$u,"https://traincheck.sakay.ph"], null))}),cljs.core.array_seq([om.dom.i(({"className": "icon-facebook"}))," Share on Facebook"], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "content"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container"}),cljs.core.array_seq([om.dom.section.cljs$core$IFn$_invoke$arity$variadic(({"id": "info"}),cljs.core.array_seq([om.dom.h2.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq(["Stop wasting time in lines."], 0)),om.dom.img(({"src": "lines.svg"})),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Traincheck\u2122 is a project by Sakay.ph that shows you the perfect time to take the MRT. We predict when train stations are going to be crowded, so you can avoid lines and crowds. It's also a part of our main app, Sakay.ph!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "button darkened", "target": "_blank", "rel": "noopener noreferrer", "href": "http://blog.sakay.ph/predicting-the-mrt-with-traincheck/"}),cljs.core.array_seq([om.dom.i(({"className": "icon-info"}))," How does it work?"], 0))], 0))], 0)),om.dom.section.cljs$core$IFn$_invoke$arity$variadic(({"id": "plug"}),cljs.core.array_seq([om.dom.h2.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq(["Go beyond trains with Sakay.ph."], 0)),om.dom.img(({"src": "get-sakay.svg"})),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Be better informed. Get smarter directions with Sakay.ph. Our app knows buses, jeepneys, trains, shuttles, and soon: UV express. We do bus GPS tracking, incident reports, traffic modeling, and of course, train predictions. Get our FREE app!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "darkened button", "href": "https://itunes.apple.com/ph/app/sakay.ph/id937998546?mt=8&uo=4"}),cljs.core.array_seq([om.dom.i(({"className": "icon-appleinc"}))," iPhone"], 0))," ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "darkened button", "href": "https://play.google.com/store/apps/details?id=com.byimplication.sakay"}),cljs.core.array_seq([om.dom.i(({"className": "icon-android"}))," Android"], 0))," ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "darkened button", "href": "https://sakay.ph"}),cljs.core.array_seq([om.dom.i(({"className": "icon-chrome"}))," Web"], 0))], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "etc"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container pad"}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "https://facebook.com/sakaydotph"}),cljs.core.array_seq(["Facebook"], 0))," \u2022 ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "https://twitter.com/sakayph"}),cljs.core.array_seq(["Twitter"], 0))," \u2022 ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "http://blog.sakay.ph"}),cljs.core.array_seq(["Blog"], 0))], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Copyright \u00A9 2016, ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "https://byimplication.com"}),cljs.core.array_seq(["By Implication"], 0)),". Powered by insights from ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "https://sakay.ph"}),cljs.core.array_seq(["Sakay.ph"], 0)),". ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "#"}),cljs.core.array_seq(["Terms of Service"], 0)),"."], 0))], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21522;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21521;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21520;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21519;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21518;
}});})(x21509_21525))
;


barado.footer.Footer.prototype.constructor = barado.footer.Footer;

barado.footer.Footer.prototype.constructor.displayName = "barado.footer/Footer";

barado.footer.Footer.prototype.om$isComponent = true;

var x21523_21529 = barado.footer.Footer;


var x21524_21530 = barado.footer.Footer.prototype;


barado.footer.Footer.cljs$lang$type = true;

barado.footer.Footer.cljs$lang$ctorStr = "barado.footer/Footer";

barado.footer.Footer.cljs$lang$ctorPrWriter = (function (this__19073__auto__,writer__19074__auto__,opt__19075__auto__){
return cljs.core._write(writer__19074__auto__,"barado.footer/Footer");
});
barado.footer.footer_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(barado.footer.Footer);
