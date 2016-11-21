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
var this__18711__auto__ = this;
React.Component.apply(this__18711__auto__,arguments);

if(!((this__18711__auto__.initLocalState == null))){
this__18711__auto__.state = this__18711__auto__.initLocalState();
} else {
this__18711__auto__.state = {};
}

return this__18711__auto__;
});

barado.stations.Station.prototype = goog.object.clone(React.Component.prototype);

var x22328_22345 = barado.stations.Station.prototype;
x22328_22345.componentWillUpdate = ((function (x22328_22345){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
if(((!((this__18565__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18565__auto__.om$next$Ident$)))?true:false):false)){
var ident__18569__auto___22346 = om.next.ident(this__18565__auto__,om.next.props(this__18565__auto__));
var next_ident__18570__auto___22347 = om.next.ident(this__18565__auto__,om.next._next_props(next_props__18566__auto__,this__18565__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18569__auto___22346,next_ident__18570__auto___22347)){
var idxr__18571__auto___22348 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18571__auto___22348 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18571__auto___22348),((function (idxr__18571__auto___22348,ident__18569__auto___22346,next_ident__18570__auto___22347,this__18565__auto__,x22328_22345){
return (function (indexes__18572__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18572__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18569__auto___22346], null),cljs.core.disj,this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18570__auto___22347], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18565__auto__);
});})(idxr__18571__auto___22348,ident__18569__auto___22346,next_ident__18570__auto___22347,this__18565__auto__,x22328_22345))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18565__auto__);

return om.next.merge_pending_state_BANG_(this__18565__auto__);
});})(x22328_22345))
;

x22328_22345.shouldComponentUpdate = ((function (x22328_22345){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
var next_children__18568__auto__ = next_props__18566__auto__.children;
var next_props__18566__auto____$1 = goog.object.get(next_props__18566__auto__,"omcljs$value");
var next_props__18566__auto____$2 = (function (){var G__22330 = next_props__18566__auto____$1;
if((next_props__18566__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22330);
} else {
return G__22330;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18565__auto__),next_props__18566__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18565__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22335 = this__18565__auto__.state;
var G__22336 = "omcljs$state";
return goog.object.get(G__22335,G__22336);
})(),goog.object.get(next_state__18567__auto__,"omcljs$state"));
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__18565__auto__.props.children,next_children__18568__auto__);
}
}
});})(x22328_22345))
;

x22328_22345.componentWillUnmount = ((function (x22328_22345){
return (function (){
var this__18565__auto__ = this;
var r__18576__auto__ = om.next.get_reconciler(this__18565__auto__);
var cfg__18577__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__18576__auto__);
var st__18578__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__18577__auto__);
var indexer__18575__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__18577__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__18578__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__18578__auto__) : cljs.core.deref.call(null,st__18578__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__18565__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__18578__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__18565__auto__], 0));
} else {
}

if((indexer__18575__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__18575__auto__,this__18565__auto__);
}
});})(x22328_22345))
;

x22328_22345.componentDidUpdate = ((function (x22328_22345){
return (function (prev_props__18573__auto__,prev_state__18574__auto__){
var this__18565__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18565__auto__);
});})(x22328_22345))
;

x22328_22345.isMounted = ((function (x22328_22345){
return (function (){
var this__18565__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18565__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22328_22345))
;

x22328_22345.componentWillMount = ((function (x22328_22345){
return (function (){
var this__18565__auto__ = this;
var indexer__18575__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18575__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18575__auto__,this__18565__auto__);
}
});})(x22328_22345))
;


barado.stations.Station.prototype.constructor = barado.stations.Station;

barado.stations.Station.prototype.constructor.displayName = "barado.stations/Station";

barado.stations.Station.prototype.om$isComponent = true;

var x22337_22349 = barado.stations.Station;
/** @nocollapse */
x22337_22349.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22337_22349.om$next$Ident$ident$arity$2 = ((function (x22337_22349){
return (function (this$,p__22338){
var map__22339 = p__22338;
var map__22339__$1 = ((((!((map__22339 == null)))?((((map__22339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22339):map__22339);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22339__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22337_22349))
;

/** @nocollapse */
x22337_22349.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22337_22349.om$next$IQuery$query$arity$1 = ((function (x22337_22349){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22337_22349))
;


var x22341_22350 = barado.stations.Station.prototype;

x22341_22350.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22341_22350.om$next$Ident$ident$arity$2 = ((function (x22341_22350){
return (function (this$,p__22342){
var map__22343 = p__22342;
var map__22343__$1 = ((((!((map__22343 == null)))?((((map__22343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22343):map__22343);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22341_22350))
;


x22341_22350.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22341_22350.om$next$IQuery$query$arity$1 = ((function (x22341_22350){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22341_22350))
;


barado.stations.Station.cljs$lang$type = true;

barado.stations.Station.cljs$lang$ctorStr = "barado.stations/Station";

barado.stations.Station.cljs$lang$ctorPrWriter = (function (this__18714__auto__,writer__18715__auto__,opt__18716__auto__){
return cljs.core._write(writer__18715__auto__,"barado.stations/Station");
});
