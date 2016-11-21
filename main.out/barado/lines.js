// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.lines');
goog.require('cljs.core');
goog.require('barado.stations');
goog.require('om.next');
/**
 * @constructor
 */
barado.lines.Line = (function barado$lines$Line(){
var this__19070__auto__ = this;
React.Component.apply(this__19070__auto__,arguments);

if(!((this__19070__auto__.initLocalState == null))){
this__19070__auto__.state = this__19070__auto__.initLocalState();
} else {
this__19070__auto__.state = {};
}

return this__19070__auto__;
});

barado.lines.Line.prototype = goog.object.clone(React.Component.prototype);

var x22415_22432 = barado.lines.Line.prototype;
x22415_22432.componentWillUpdate = ((function (x22415_22432){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
if(((!((this__18924__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18924__auto__.om$next$Ident$)))?true:false):false)){
var ident__18928__auto___22433 = om.next.ident(this__18924__auto__,om.next.props(this__18924__auto__));
var next_ident__18929__auto___22434 = om.next.ident(this__18924__auto__,om.next._next_props(next_props__18925__auto__,this__18924__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18928__auto___22433,next_ident__18929__auto___22434)){
var idxr__18930__auto___22435 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18930__auto___22435 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18930__auto___22435),((function (idxr__18930__auto___22435,ident__18928__auto___22433,next_ident__18929__auto___22434,this__18924__auto__,x22415_22432){
return (function (indexes__18931__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18931__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18928__auto___22433], null),cljs.core.disj,this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18929__auto___22434], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18924__auto__);
});})(idxr__18930__auto___22435,ident__18928__auto___22433,next_ident__18929__auto___22434,this__18924__auto__,x22415_22432))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18924__auto__);

return om.next.merge_pending_state_BANG_(this__18924__auto__);
});})(x22415_22432))
;

x22415_22432.shouldComponentUpdate = ((function (x22415_22432){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
var next_children__18927__auto__ = next_props__18925__auto__.children;
var next_props__18925__auto____$1 = goog.object.get(next_props__18925__auto__,"omcljs$value");
var next_props__18925__auto____$2 = (function (){var G__22417 = next_props__18925__auto____$1;
if((next_props__18925__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22417);
} else {
return G__22417;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18924__auto__),next_props__18925__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18924__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22422 = this__18924__auto__.state;
var G__22423 = "omcljs$state";
return goog.object.get(G__22422,G__22423);
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
});})(x22415_22432))
;

x22415_22432.componentWillUnmount = ((function (x22415_22432){
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
});})(x22415_22432))
;

x22415_22432.componentDidUpdate = ((function (x22415_22432){
return (function (prev_props__18932__auto__,prev_state__18933__auto__){
var this__18924__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18924__auto__);
});})(x22415_22432))
;

x22415_22432.isMounted = ((function (x22415_22432){
return (function (){
var this__18924__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18924__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22415_22432))
;

x22415_22432.componentWillMount = ((function (x22415_22432){
return (function (){
var this__18924__auto__ = this;
var indexer__18934__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18934__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18934__auto__,this__18924__auto__);
}
});})(x22415_22432))
;


barado.lines.Line.prototype.constructor = barado.lines.Line;

barado.lines.Line.prototype.constructor.displayName = "barado.lines/Line";

barado.lines.Line.prototype.om$isComponent = true;

var x22424_22436 = barado.lines.Line;
/** @nocollapse */
x22424_22436.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22424_22436.om$next$Ident$ident$arity$2 = ((function (x22424_22436){
return (function (this$,p__22425){
var map__22426 = p__22425;
var map__22426__$1 = ((((!((map__22426 == null)))?((((map__22426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22426):map__22426);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22426__$1,cljs.core.cst$kw$line_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,id], null);
});})(x22424_22436))
;

/** @nocollapse */
x22424_22436.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22424_22436.om$next$IQuery$query$arity$1 = ((function (x22424_22436){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_id,cljs.core.cst$kw$line_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line_SLASH_stations,om.next.get_query(barado.stations.Station)], null)], null);
});})(x22424_22436))
;


var x22428_22437 = barado.lines.Line.prototype;

x22428_22437.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22428_22437.om$next$Ident$ident$arity$2 = ((function (x22428_22437){
return (function (this$,p__22429){
var map__22430 = p__22429;
var map__22430__$1 = ((((!((map__22430 == null)))?((((map__22430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22430):map__22430);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22430__$1,cljs.core.cst$kw$line_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,id], null);
});})(x22428_22437))
;


x22428_22437.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22428_22437.om$next$IQuery$query$arity$1 = ((function (x22428_22437){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_id,cljs.core.cst$kw$line_SLASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line_SLASH_stations,om.next.get_query(barado.stations.Station)], null)], null);
});})(x22428_22437))
;


barado.lines.Line.cljs$lang$type = true;

barado.lines.Line.cljs$lang$ctorStr = "barado.lines/Line";

barado.lines.Line.cljs$lang$ctorPrWriter = (function (this__19073__auto__,writer__19074__auto__,opt__19075__auto__){
return cljs.core._write(writer__19074__auto__,"barado.lines/Line");
});
