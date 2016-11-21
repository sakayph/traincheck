// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.lines');
goog.require('cljs.core');
goog.require('barado.stations');
goog.require('om.next');
/**
 * @constructor
 */
barado.lines.Line = (function barado$lines$Line(){
var this__19649__auto__ = this;
React.Component.apply(this__19649__auto__,arguments);

if(!((this__19649__auto__.initLocalState == null))){
this__19649__auto__.state = this__19649__auto__.initLocalState();
} else {
this__19649__auto__.state = {};
}

return this__19649__auto__;
});

barado.lines.Line.prototype = goog.object.clone(React.Component.prototype);

var x26833_26850 = barado.lines.Line.prototype;
x26833_26850.componentWillUpdate = ((function (x26833_26850){
return (function (next_props__19504__auto__,next_state__19505__auto__){
var this__19503__auto__ = this;
if(((!((this__19503__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19503__auto__.om$next$Ident$)))?true:false):false)){
var ident__19507__auto___26851 = om.next.ident(this__19503__auto__,om.next.props(this__19503__auto__));
var next_ident__19508__auto___26852 = om.next.ident(this__19503__auto__,om.next._next_props(next_props__19504__auto__,this__19503__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19507__auto___26851,next_ident__19508__auto___26852)){
var idxr__19509__auto___26853 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19509__auto___26853 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19509__auto___26853),((function (idxr__19509__auto___26853,ident__19507__auto___26851,next_ident__19508__auto___26852,this__19503__auto__,x26833_26850){
return (function (indexes__19510__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19510__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19507__auto___26851], null),cljs.core.disj,this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19508__auto___26852], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19503__auto__);
});})(idxr__19509__auto___26853,ident__19507__auto___26851,next_ident__19508__auto___26852,this__19503__auto__,x26833_26850))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19503__auto__);

return om.next.merge_pending_state_BANG_(this__19503__auto__);
});})(x26833_26850))
;

x26833_26850.shouldComponentUpdate = ((function (x26833_26850){
return (function (next_props__19504__auto__,next_state__19505__auto__){
var this__19503__auto__ = this;
var next_children__19506__auto__ = next_props__19504__auto__.children;
var next_props__19504__auto____$1 = goog.object.get(next_props__19504__auto__,"omcljs$value");
var next_props__19504__auto____$2 = (function (){var G__26835 = next_props__19504__auto____$1;
if((next_props__19504__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__26835);
} else {
return G__26835;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19503__auto__),next_props__19504__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19503__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__26840 = this__19503__auto__.state;
var G__26841 = "omcljs$state";
return goog.object.get(G__26840,G__26841);
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
});})(x26833_26850))
;

x26833_26850.componentWillUnmount = ((function (x26833_26850){
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
});})(x26833_26850))
;

x26833_26850.componentDidUpdate = ((function (x26833_26850){
return (function (prev_props__19511__auto__,prev_state__19512__auto__){
var this__19503__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19503__auto__);
});})(x26833_26850))
;

x26833_26850.isMounted = ((function (x26833_26850){
return (function (){
var this__19503__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19503__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26833_26850))
;

x26833_26850.componentWillMount = ((function (x26833_26850){
return (function (){
var this__19503__auto__ = this;
var indexer__19513__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19513__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__19513__auto__,this__19503__auto__);
}
});})(x26833_26850))
;


barado.lines.Line.prototype.constructor = barado.lines.Line;

barado.lines.Line.prototype.constructor.displayName = "barado.lines/Line";

barado.lines.Line.prototype.om$isComponent = true;

var x26842_26854 = barado.lines.Line;
/** @nocollapse */
x26842_26854.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x26842_26854.om$next$Ident$ident$arity$2 = ((function (x26842_26854){
return (function (this$,p__26843){
var map__26844 = p__26843;
var map__26844__$1 = ((((!((map__26844 == null)))?((((map__26844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26844):map__26844);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,cljs.core.cst$kw$line_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,id], null);
});})(x26842_26854))
;

/** @nocollapse */
x26842_26854.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x26842_26854.om$next$IQuery$query$arity$1 = ((function (x26842_26854){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_id,cljs.core.cst$kw$line_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line_SLASH_stations,om.next.get_query(barado.stations.Station)], null)], null);
});})(x26842_26854))
;


var x26846_26855 = barado.lines.Line.prototype;

x26846_26855.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x26846_26855.om$next$Ident$ident$arity$2 = ((function (x26846_26855){
return (function (this$,p__26847){
var map__26848 = p__26847;
var map__26848__$1 = ((((!((map__26848 == null)))?((((map__26848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26848):map__26848);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26848__$1,cljs.core.cst$kw$line_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,id], null);
});})(x26846_26855))
;


x26846_26855.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x26846_26855.om$next$IQuery$query$arity$1 = ((function (x26846_26855){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_id,cljs.core.cst$kw$line_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line_SLASH_stations,om.next.get_query(barado.stations.Station)], null)], null);
});})(x26846_26855))
;


barado.lines.Line.cljs$lang$type = true;

barado.lines.Line.cljs$lang$ctorStr = "barado.lines/Line";

barado.lines.Line.cljs$lang$ctorPrWriter = (function (this__19652__auto__,writer__19653__auto__,opt__19654__auto__){
return cljs.core._write(writer__19653__auto__,"barado.lines/Line");
});
