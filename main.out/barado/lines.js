// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.lines');
goog.require('cljs.core');
goog.require('barado.stations');
goog.require('om.next');
/**
 * @constructor
 */
barado.lines.Line = (function barado$lines$Line(){
var this__18711__auto__ = this;
React.Component.apply(this__18711__auto__,arguments);

if(!((this__18711__auto__.initLocalState == null))){
this__18711__auto__.state = this__18711__auto__.initLocalState();
} else {
this__18711__auto__.state = {};
}

return this__18711__auto__;
});

barado.lines.Line.prototype = goog.object.clone(React.Component.prototype);

var x26988_27005 = barado.lines.Line.prototype;
x26988_27005.componentWillUpdate = ((function (x26988_27005){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
if(((!((this__18565__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18565__auto__.om$next$Ident$)))?true:false):false)){
var ident__18569__auto___27006 = om.next.ident(this__18565__auto__,om.next.props(this__18565__auto__));
var next_ident__18570__auto___27007 = om.next.ident(this__18565__auto__,om.next._next_props(next_props__18566__auto__,this__18565__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18569__auto___27006,next_ident__18570__auto___27007)){
var idxr__18571__auto___27008 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18571__auto___27008 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18571__auto___27008),((function (idxr__18571__auto___27008,ident__18569__auto___27006,next_ident__18570__auto___27007,this__18565__auto__,x26988_27005){
return (function (indexes__18572__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18572__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18569__auto___27006], null),cljs.core.disj,this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18570__auto___27007], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18565__auto__);
});})(idxr__18571__auto___27008,ident__18569__auto___27006,next_ident__18570__auto___27007,this__18565__auto__,x26988_27005))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18565__auto__);

return om.next.merge_pending_state_BANG_(this__18565__auto__);
});})(x26988_27005))
;

x26988_27005.shouldComponentUpdate = ((function (x26988_27005){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
var next_children__18568__auto__ = next_props__18566__auto__.children;
var next_props__18566__auto____$1 = goog.object.get(next_props__18566__auto__,"omcljs$value");
var next_props__18566__auto____$2 = (function (){var G__26990 = next_props__18566__auto____$1;
if((next_props__18566__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__26990);
} else {
return G__26990;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18565__auto__),next_props__18566__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18565__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26995 = this__18565__auto__.state;
var G__26996 = "omcljs$state";
return goog.object.get(G__26995,G__26996);
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
});})(x26988_27005))
;

x26988_27005.componentWillUnmount = ((function (x26988_27005){
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
});})(x26988_27005))
;

x26988_27005.componentDidUpdate = ((function (x26988_27005){
return (function (prev_props__18573__auto__,prev_state__18574__auto__){
var this__18565__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18565__auto__);
});})(x26988_27005))
;

x26988_27005.isMounted = ((function (x26988_27005){
return (function (){
var this__18565__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18565__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26988_27005))
;

x26988_27005.componentWillMount = ((function (x26988_27005){
return (function (){
var this__18565__auto__ = this;
var indexer__18575__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18575__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18575__auto__,this__18565__auto__);
}
});})(x26988_27005))
;


barado.lines.Line.prototype.constructor = barado.lines.Line;

barado.lines.Line.prototype.constructor.displayName = "barado.lines/Line";

barado.lines.Line.prototype.om$isComponent = true;

var x26997_27009 = barado.lines.Line;
/** @nocollapse */
x26997_27009.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x26997_27009.om$next$Ident$ident$arity$2 = ((function (x26997_27009){
return (function (this$,p__26998){
var map__26999 = p__26998;
var map__26999__$1 = ((((!((map__26999 == null)))?((((map__26999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26999):map__26999);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26999__$1,cljs.core.cst$kw$line_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,id], null);
});})(x26997_27009))
;

/** @nocollapse */
x26997_27009.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x26997_27009.om$next$IQuery$query$arity$1 = ((function (x26997_27009){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_id,cljs.core.cst$kw$line_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line_SLASH_stations,om.next.get_query(barado.stations.Station)], null)], null);
});})(x26997_27009))
;


var x27001_27010 = barado.lines.Line.prototype;

x27001_27010.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x27001_27010.om$next$Ident$ident$arity$2 = ((function (x27001_27010){
return (function (this$,p__27002){
var map__27003 = p__27002;
var map__27003__$1 = ((((!((map__27003 == null)))?((((map__27003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27003):map__27003);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003__$1,cljs.core.cst$kw$line_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,id], null);
});})(x27001_27010))
;


x27001_27010.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x27001_27010.om$next$IQuery$query$arity$1 = ((function (x27001_27010){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_id,cljs.core.cst$kw$line_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line_SLASH_stations,om.next.get_query(barado.stations.Station)], null)], null);
});})(x27001_27010))
;


barado.lines.Line.cljs$lang$type = true;

barado.lines.Line.cljs$lang$ctorStr = "barado.lines/Line";

barado.lines.Line.cljs$lang$ctorPrWriter = (function (this__18714__auto__,writer__18715__auto__,opt__18716__auto__){
return cljs.core._write(writer__18715__auto__,"barado.lines/Line");
});
