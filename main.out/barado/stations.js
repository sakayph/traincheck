// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.stations');
goog.require('cljs.core');
goog.require('barado.platforms');
goog.require('barado.util');
goog.require('om.dom');
goog.require('om.next');
/**
 * @constructor
 */
barado.stations.Station = (function barado$stations$Station(){
var this__19598__auto__ = this;
React.Component.apply(this__19598__auto__,arguments);

if(!((this__19598__auto__.initLocalState == null))){
this__19598__auto__.state = this__19598__auto__.initLocalState();
} else {
this__19598__auto__.state = {};
}

return this__19598__auto__;
});

barado.stations.Station.prototype = goog.object.clone(React.Component.prototype);

var x22286_22303 = barado.stations.Station.prototype;
x22286_22303.componentWillUpdate = ((function (x22286_22303){
return (function (next_props__19453__auto__,next_state__19454__auto__){
var this__19452__auto__ = this;
if(((!((this__19452__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19452__auto__.om$next$Ident$)))?true:false):false)){
var ident__19456__auto___22304 = om.next.ident(this__19452__auto__,om.next.props(this__19452__auto__));
var next_ident__19457__auto___22305 = om.next.ident(this__19452__auto__,om.next._next_props(next_props__19453__auto__,this__19452__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19456__auto___22304,next_ident__19457__auto___22305)){
var idxr__19458__auto___22306 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19452__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19458__auto___22306 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19458__auto___22306),((function (idxr__19458__auto___22306,ident__19456__auto___22304,next_ident__19457__auto___22305,this__19452__auto__,x22286_22303){
return (function (indexes__19459__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19459__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19456__auto___22304], null),cljs.core.disj,this__19452__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19457__auto___22305], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19452__auto__);
});})(idxr__19458__auto___22306,ident__19456__auto___22304,next_ident__19457__auto___22305,this__19452__auto__,x22286_22303))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19452__auto__);

return om.next.merge_pending_state_BANG_(this__19452__auto__);
});})(x22286_22303))
;

x22286_22303.shouldComponentUpdate = ((function (x22286_22303){
return (function (next_props__19453__auto__,next_state__19454__auto__){
var this__19452__auto__ = this;
var next_children__19455__auto__ = next_props__19453__auto__.children;
var next_props__19453__auto____$1 = goog.object.get(next_props__19453__auto__,"omcljs$value");
var next_props__19453__auto____$2 = (function (){var G__22288 = next_props__19453__auto____$1;
if((next_props__19453__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22288);
} else {
return G__22288;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19452__auto__),next_props__19453__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19452__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22293 = this__19452__auto__.state;
var G__22294 = "omcljs$state";
return goog.object.get(G__22293,G__22294);
})(),goog.object.get(next_state__19454__auto__,"omcljs$state"));
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__19452__auto__.props.children,next_children__19455__auto__);
}
}
});})(x22286_22303))
;

x22286_22303.componentWillUnmount = ((function (x22286_22303){
return (function (){
var this__19452__auto__ = this;
var r__19463__auto__ = om.next.get_reconciler(this__19452__auto__);
var cfg__19464__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__19463__auto__);
var st__19465__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__19464__auto__);
var indexer__19462__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__19464__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__19465__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__19465__auto__) : cljs.core.deref.call(null,st__19465__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__19452__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__19465__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__19452__auto__], 0));
} else {
}

if((indexer__19462__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__19462__auto__,this__19452__auto__);
}
});})(x22286_22303))
;

x22286_22303.componentDidUpdate = ((function (x22286_22303){
return (function (prev_props__19460__auto__,prev_state__19461__auto__){
var this__19452__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19452__auto__);
});})(x22286_22303))
;

x22286_22303.isMounted = ((function (x22286_22303){
return (function (){
var this__19452__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19452__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22286_22303))
;

x22286_22303.componentWillMount = ((function (x22286_22303){
return (function (){
var this__19452__auto__ = this;
var indexer__19462__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19452__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19462__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__19462__auto__,this__19452__auto__);
}
});})(x22286_22303))
;


barado.stations.Station.prototype.constructor = barado.stations.Station;

barado.stations.Station.prototype.constructor.displayName = "barado.stations/Station";

barado.stations.Station.prototype.om$isComponent = true;

var x22295_22307 = barado.stations.Station;
/** @nocollapse */
x22295_22307.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22295_22307.om$next$Ident$ident$arity$2 = ((function (x22295_22307){
return (function (this$,p__22296){
var map__22297 = p__22296;
var map__22297__$1 = ((((!((map__22297 == null)))?((((map__22297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22297):map__22297);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22295_22307))
;

/** @nocollapse */
x22295_22307.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22295_22307.om$next$IQuery$query$arity$1 = ((function (x22295_22307){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22295_22307))
;


var x22299_22308 = barado.stations.Station.prototype;

x22299_22308.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22299_22308.om$next$Ident$ident$arity$2 = ((function (x22299_22308){
return (function (this$,p__22300){
var map__22301 = p__22300;
var map__22301__$1 = ((((!((map__22301 == null)))?((((map__22301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22301):map__22301);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22301__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22299_22308))
;


x22299_22308.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22299_22308.om$next$IQuery$query$arity$1 = ((function (x22299_22308){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22299_22308))
;


barado.stations.Station.cljs$lang$type = true;

barado.stations.Station.cljs$lang$ctorStr = "barado.stations/Station";

barado.stations.Station.cljs$lang$ctorPrWriter = (function (this__19601__auto__,writer__19602__auto__,opt__19603__auto__){
return cljs.core._write(writer__19602__auto__,"barado.stations/Station");
});
