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
var this__19070__auto__ = this;
React.Component.apply(this__19070__auto__,arguments);

if(!((this__19070__auto__.initLocalState == null))){
this__19070__auto__.state = this__19070__auto__.initLocalState();
} else {
this__19070__auto__.state = {};
}

return this__19070__auto__;
});

barado.stations.Station.prototype = goog.object.clone(React.Component.prototype);

var x22386_22403 = barado.stations.Station.prototype;
x22386_22403.componentWillUpdate = ((function (x22386_22403){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
if(((!((this__18924__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18924__auto__.om$next$Ident$)))?true:false):false)){
var ident__18928__auto___22404 = om.next.ident(this__18924__auto__,om.next.props(this__18924__auto__));
var next_ident__18929__auto___22405 = om.next.ident(this__18924__auto__,om.next._next_props(next_props__18925__auto__,this__18924__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18928__auto___22404,next_ident__18929__auto___22405)){
var idxr__18930__auto___22406 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18930__auto___22406 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18930__auto___22406),((function (idxr__18930__auto___22406,ident__18928__auto___22404,next_ident__18929__auto___22405,this__18924__auto__,x22386_22403){
return (function (indexes__18931__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18931__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18928__auto___22404], null),cljs.core.disj,this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18929__auto___22405], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18924__auto__);
});})(idxr__18930__auto___22406,ident__18928__auto___22404,next_ident__18929__auto___22405,this__18924__auto__,x22386_22403))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18924__auto__);

return om.next.merge_pending_state_BANG_(this__18924__auto__);
});})(x22386_22403))
;

x22386_22403.shouldComponentUpdate = ((function (x22386_22403){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
var next_children__18927__auto__ = next_props__18925__auto__.children;
var next_props__18925__auto____$1 = goog.object.get(next_props__18925__auto__,"omcljs$value");
var next_props__18925__auto____$2 = (function (){var G__22388 = next_props__18925__auto____$1;
if((next_props__18925__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22388);
} else {
return G__22388;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18924__auto__),next_props__18925__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18924__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22393 = this__18924__auto__.state;
var G__22394 = "omcljs$state";
return goog.object.get(G__22393,G__22394);
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
});})(x22386_22403))
;

x22386_22403.componentWillUnmount = ((function (x22386_22403){
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
});})(x22386_22403))
;

x22386_22403.componentDidUpdate = ((function (x22386_22403){
return (function (prev_props__18932__auto__,prev_state__18933__auto__){
var this__18924__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18924__auto__);
});})(x22386_22403))
;

x22386_22403.isMounted = ((function (x22386_22403){
return (function (){
var this__18924__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18924__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22386_22403))
;

x22386_22403.componentWillMount = ((function (x22386_22403){
return (function (){
var this__18924__auto__ = this;
var indexer__18934__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18934__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18934__auto__,this__18924__auto__);
}
});})(x22386_22403))
;


barado.stations.Station.prototype.constructor = barado.stations.Station;

barado.stations.Station.prototype.constructor.displayName = "barado.stations/Station";

barado.stations.Station.prototype.om$isComponent = true;

var x22395_22407 = barado.stations.Station;
/** @nocollapse */
x22395_22407.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22395_22407.om$next$Ident$ident$arity$2 = ((function (x22395_22407){
return (function (this$,p__22396){
var map__22397 = p__22396;
var map__22397__$1 = ((((!((map__22397 == null)))?((((map__22397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22397):map__22397);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22397__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22395_22407))
;

/** @nocollapse */
x22395_22407.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22395_22407.om$next$IQuery$query$arity$1 = ((function (x22395_22407){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22395_22407))
;


var x22399_22408 = barado.stations.Station.prototype;

x22399_22408.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22399_22408.om$next$Ident$ident$arity$2 = ((function (x22399_22408){
return (function (this$,p__22400){
var map__22401 = p__22400;
var map__22401__$1 = ((((!((map__22401 == null)))?((((map__22401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22401):map__22401);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22401__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22399_22408))
;


x22399_22408.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22399_22408.om$next$IQuery$query$arity$1 = ((function (x22399_22408){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22399_22408))
;


barado.stations.Station.cljs$lang$type = true;

barado.stations.Station.cljs$lang$ctorStr = "barado.stations/Station";

barado.stations.Station.cljs$lang$ctorPrWriter = (function (this__19073__auto__,writer__19074__auto__,opt__19075__auto__){
return cljs.core._write(writer__19074__auto__,"barado.stations/Station");
});
