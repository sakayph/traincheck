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
var this__19647__auto__ = this;
React.Component.apply(this__19647__auto__,arguments);

if(!((this__19647__auto__.initLocalState == null))){
this__19647__auto__.state = this__19647__auto__.initLocalState();
} else {
this__19647__auto__.state = {};
}

return this__19647__auto__;
});

barado.stations.Station.prototype = goog.object.clone(React.Component.prototype);

var x22222_22239 = barado.stations.Station.prototype;
x22222_22239.componentWillUpdate = ((function (x22222_22239){
return (function (next_props__19502__auto__,next_state__19503__auto__){
var this__19501__auto__ = this;
if(((!((this__19501__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19501__auto__.om$next$Ident$)))?true:false):false)){
var ident__19505__auto___22240 = om.next.ident(this__19501__auto__,om.next.props(this__19501__auto__));
var next_ident__19506__auto___22241 = om.next.ident(this__19501__auto__,om.next._next_props(next_props__19502__auto__,this__19501__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19505__auto___22240,next_ident__19506__auto___22241)){
var idxr__19507__auto___22242 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19507__auto___22242 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19507__auto___22242),((function (idxr__19507__auto___22242,ident__19505__auto___22240,next_ident__19506__auto___22241,this__19501__auto__,x22222_22239){
return (function (indexes__19508__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19505__auto___22240], null),cljs.core.disj,this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19506__auto___22241], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19501__auto__);
});})(idxr__19507__auto___22242,ident__19505__auto___22240,next_ident__19506__auto___22241,this__19501__auto__,x22222_22239))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19501__auto__);

return om.next.merge_pending_state_BANG_(this__19501__auto__);
});})(x22222_22239))
;

x22222_22239.shouldComponentUpdate = ((function (x22222_22239){
return (function (next_props__19502__auto__,next_state__19503__auto__){
var this__19501__auto__ = this;
var next_children__19504__auto__ = next_props__19502__auto__.children;
var next_props__19502__auto____$1 = goog.object.get(next_props__19502__auto__,"omcljs$value");
var next_props__19502__auto____$2 = (function (){var G__22224 = next_props__19502__auto____$1;
if((next_props__19502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22224);
} else {
return G__22224;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19501__auto__),next_props__19502__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19501__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22229 = this__19501__auto__.state;
var G__22230 = "omcljs$state";
return goog.object.get(G__22229,G__22230);
})(),goog.object.get(next_state__19503__auto__,"omcljs$state"));
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__19501__auto__.props.children,next_children__19504__auto__);
}
}
});})(x22222_22239))
;

x22222_22239.componentWillUnmount = ((function (x22222_22239){
return (function (){
var this__19501__auto__ = this;
var r__19512__auto__ = om.next.get_reconciler(this__19501__auto__);
var cfg__19513__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__19512__auto__);
var st__19514__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__19513__auto__);
var indexer__19511__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__19513__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__19514__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__19514__auto__) : cljs.core.deref.call(null,st__19514__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__19501__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__19514__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__19501__auto__], 0));
} else {
}

if((indexer__19511__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__19511__auto__,this__19501__auto__);
}
});})(x22222_22239))
;

x22222_22239.componentDidUpdate = ((function (x22222_22239){
return (function (prev_props__19509__auto__,prev_state__19510__auto__){
var this__19501__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19501__auto__);
});})(x22222_22239))
;

x22222_22239.isMounted = ((function (x22222_22239){
return (function (){
var this__19501__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22222_22239))
;

x22222_22239.componentWillMount = ((function (x22222_22239){
return (function (){
var this__19501__auto__ = this;
var indexer__19511__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__19511__auto__,this__19501__auto__);
}
});})(x22222_22239))
;


barado.stations.Station.prototype.constructor = barado.stations.Station;

barado.stations.Station.prototype.constructor.displayName = "barado.stations/Station";

barado.stations.Station.prototype.om$isComponent = true;

var x22231_22243 = barado.stations.Station;
/** @nocollapse */
x22231_22243.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22231_22243.om$next$Ident$ident$arity$2 = ((function (x22231_22243){
return (function (this$,p__22232){
var map__22233 = p__22232;
var map__22233__$1 = ((((!((map__22233 == null)))?((((map__22233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22233):map__22233);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22233__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22231_22243))
;

/** @nocollapse */
x22231_22243.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22231_22243.om$next$IQuery$query$arity$1 = ((function (x22231_22243){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22231_22243))
;


var x22235_22244 = barado.stations.Station.prototype;

x22235_22244.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22235_22244.om$next$Ident$ident$arity$2 = ((function (x22235_22244){
return (function (this$,p__22236){
var map__22237 = p__22236;
var map__22237__$1 = ((((!((map__22237 == null)))?((((map__22237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22237):map__22237);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22237__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22235_22244))
;


x22235_22244.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22235_22244.om$next$IQuery$query$arity$1 = ((function (x22235_22244){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22235_22244))
;


barado.stations.Station.cljs$lang$type = true;

barado.stations.Station.cljs$lang$ctorStr = "barado.stations/Station";

barado.stations.Station.cljs$lang$ctorPrWriter = (function (this__19650__auto__,writer__19651__auto__,opt__19652__auto__){
return cljs.core._write(writer__19651__auto__,"barado.stations/Station");
});
