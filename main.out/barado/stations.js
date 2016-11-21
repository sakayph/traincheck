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
var this__19649__auto__ = this;
React.Component.apply(this__19649__auto__,arguments);

if(!((this__19649__auto__.initLocalState == null))){
this__19649__auto__.state = this__19649__auto__.initLocalState();
} else {
this__19649__auto__.state = {};
}

return this__19649__auto__;
});

barado.stations.Station.prototype = goog.object.clone(React.Component.prototype);

var x22224_22241 = barado.stations.Station.prototype;
x22224_22241.componentWillUpdate = ((function (x22224_22241){
return (function (next_props__19504__auto__,next_state__19505__auto__){
var this__19503__auto__ = this;
if(((!((this__19503__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19503__auto__.om$next$Ident$)))?true:false):false)){
var ident__19507__auto___22242 = om.next.ident(this__19503__auto__,om.next.props(this__19503__auto__));
var next_ident__19508__auto___22243 = om.next.ident(this__19503__auto__,om.next._next_props(next_props__19504__auto__,this__19503__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19507__auto___22242,next_ident__19508__auto___22243)){
var idxr__19509__auto___22244 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19509__auto___22244 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19509__auto___22244),((function (idxr__19509__auto___22244,ident__19507__auto___22242,next_ident__19508__auto___22243,this__19503__auto__,x22224_22241){
return (function (indexes__19510__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19510__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19507__auto___22242], null),cljs.core.disj,this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19508__auto___22243], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19503__auto__);
});})(idxr__19509__auto___22244,ident__19507__auto___22242,next_ident__19508__auto___22243,this__19503__auto__,x22224_22241))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19503__auto__);

return om.next.merge_pending_state_BANG_(this__19503__auto__);
});})(x22224_22241))
;

x22224_22241.shouldComponentUpdate = ((function (x22224_22241){
return (function (next_props__19504__auto__,next_state__19505__auto__){
var this__19503__auto__ = this;
var next_children__19506__auto__ = next_props__19504__auto__.children;
var next_props__19504__auto____$1 = goog.object.get(next_props__19504__auto__,"omcljs$value");
var next_props__19504__auto____$2 = (function (){var G__22226 = next_props__19504__auto____$1;
if((next_props__19504__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22226);
} else {
return G__22226;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19503__auto__),next_props__19504__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19503__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22231 = this__19503__auto__.state;
var G__22232 = "omcljs$state";
return goog.object.get(G__22231,G__22232);
})(),goog.object.get(next_state__19505__auto__,"omcljs$state"));
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__19503__auto__.props.children,next_children__19506__auto__);
}
}
});})(x22224_22241))
;

x22224_22241.componentWillUnmount = ((function (x22224_22241){
return (function (){
var this__19503__auto__ = this;
var r__19514__auto__ = om.next.get_reconciler(this__19503__auto__);
var cfg__19515__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__19514__auto__);
var st__19516__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__19515__auto__);
var indexer__19513__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__19515__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__19516__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__19516__auto__) : cljs.core.deref.call(null,st__19516__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__19503__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__19516__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__19503__auto__], 0));
} else {
}

if((indexer__19513__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__19513__auto__,this__19503__auto__);
}
});})(x22224_22241))
;

x22224_22241.componentDidUpdate = ((function (x22224_22241){
return (function (prev_props__19511__auto__,prev_state__19512__auto__){
var this__19503__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19503__auto__);
});})(x22224_22241))
;

x22224_22241.isMounted = ((function (x22224_22241){
return (function (){
var this__19503__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19503__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22224_22241))
;

x22224_22241.componentWillMount = ((function (x22224_22241){
return (function (){
var this__19503__auto__ = this;
var indexer__19513__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19513__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__19513__auto__,this__19503__auto__);
}
});})(x22224_22241))
;


barado.stations.Station.prototype.constructor = barado.stations.Station;

barado.stations.Station.prototype.constructor.displayName = "barado.stations/Station";

barado.stations.Station.prototype.om$isComponent = true;

var x22233_22245 = barado.stations.Station;
/** @nocollapse */
x22233_22245.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22233_22245.om$next$Ident$ident$arity$2 = ((function (x22233_22245){
return (function (this$,p__22234){
var map__22235 = p__22234;
var map__22235__$1 = ((((!((map__22235 == null)))?((((map__22235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22235):map__22235);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22233_22245))
;

/** @nocollapse */
x22233_22245.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22233_22245.om$next$IQuery$query$arity$1 = ((function (x22233_22245){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22233_22245))
;


var x22237_22246 = barado.stations.Station.prototype;

x22237_22246.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22237_22246.om$next$Ident$ident$arity$2 = ((function (x22237_22246){
return (function (this$,p__22238){
var map__22239 = p__22238;
var map__22239__$1 = ((((!((map__22239 == null)))?((((map__22239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22239):map__22239);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22239__$1,cljs.core.cst$kw$station_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,id], null);
});})(x22237_22246))
;


x22237_22246.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22237_22246.om$next$IQuery$query$arity$1 = ((function (x22237_22246){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_id,cljs.core.cst$kw$station_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station_SLASH_platforms,om.next.get_query(barado.platforms.Platform)], null)], null);
});})(x22237_22246))
;


barado.stations.Station.cljs$lang$type = true;

barado.stations.Station.cljs$lang$ctorStr = "barado.stations/Station";

barado.stations.Station.cljs$lang$ctorPrWriter = (function (this__19652__auto__,writer__19653__auto__,opt__19654__auto__){
return cljs.core._write(writer__19653__auto__,"barado.stations/Station");
});
