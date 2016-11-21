// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.platforms');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('barado.charts');
goog.require('om.dom');
goog.require('barado.util');
goog.require('goog.string');
goog.require('barado.theme');
goog.require('goog.string.format');
goog.require('om.next');
goog.require('cljs_time.format');
barado.platforms.result_statement = (function barado$platforms$result_statement(this$,current_minutes,best_departure){
var map__22283 = om.next.props(this$);
var map__22283__$1 = ((((!((map__22283 == null)))?((((map__22283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22283):map__22283);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22283__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var full_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22283__$1,cljs.core.cst$kw$platform_SLASH_full_DASH_name);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22283__$1,cljs.core.cst$kw$platform_SLASH_data);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "result-statement", "className": "statement"}),cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$leave_DASH_now,best_departure))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([goog.string.format("%s Station won't get much lighter.",full_name)], 0))], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["We think you should ",om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["leave now"], 0)),"."], 0))], 0)):om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([goog.string.format("%s Station is currently ",full_name)], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var G__22285 = barado.util.word_rate(cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,barado.util.timestamp__GT_bucket(current_time))));
return (barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1 ? barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1(G__22285) : barado.util.safe_name_rate.call(null,G__22285));
})()], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["."], 0))], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["We think you should leave at "], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(cljs.core.truth_(best_departure)?cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(best_departure))):"No data")], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([" when it is "], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(cljs.core.truth_(best_departure)?(function (){var G__22286 = barado.util.word_rate(cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(best_departure));
return (barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1 ? barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1(G__22286) : barado.util.safe_name_rate.call(null,G__22286));
})():"No data")], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["."], 0))], 0))], 0)))], 0));
});
barado.platforms.paper_gradient = "linear-gradient(to top, #f7f7f7, white 25%, white 100%)";
/**
 * @constructor
 */
barado.platforms.Platform = (function barado$platforms$Platform(){
var this__18711__auto__ = this;
React.Component.apply(this__18711__auto__,arguments);

if(!((this__18711__auto__.initLocalState == null))){
this__18711__auto__.state = this__18711__auto__.initLocalState();
} else {
this__18711__auto__.state = {};
}

return this__18711__auto__;
});

barado.platforms.Platform.prototype = goog.object.clone(React.Component.prototype);

var x22291_22316 = barado.platforms.Platform.prototype;
x22291_22316.componentWillUpdate = ((function (x22291_22316){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
if(((!((this__18565__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18565__auto__.om$next$Ident$)))?true:false):false)){
var ident__18569__auto___22317 = om.next.ident(this__18565__auto__,om.next.props(this__18565__auto__));
var next_ident__18570__auto___22318 = om.next.ident(this__18565__auto__,om.next._next_props(next_props__18566__auto__,this__18565__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18569__auto___22317,next_ident__18570__auto___22318)){
var idxr__18571__auto___22319 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18571__auto___22319 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18571__auto___22319),((function (idxr__18571__auto___22319,ident__18569__auto___22317,next_ident__18570__auto___22318,this__18565__auto__,x22291_22316){
return (function (indexes__18572__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18572__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18569__auto___22317], null),cljs.core.disj,this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18570__auto___22318], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18565__auto__);
});})(idxr__18571__auto___22319,ident__18569__auto___22317,next_ident__18570__auto___22318,this__18565__auto__,x22291_22316))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18565__auto__);

return om.next.merge_pending_state_BANG_(this__18565__auto__);
});})(x22291_22316))
;

x22291_22316.shouldComponentUpdate = ((function (x22291_22316){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
var next_children__18568__auto__ = next_props__18566__auto__.children;
var next_props__18566__auto____$1 = goog.object.get(next_props__18566__auto__,"omcljs$value");
var next_props__18566__auto____$2 = (function (){var G__22293 = next_props__18566__auto____$1;
if((next_props__18566__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22293);
} else {
return G__22293;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18565__auto__),next_props__18566__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18565__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22298 = this__18565__auto__.state;
var G__22299 = "omcljs$state";
return goog.object.get(G__22298,G__22299);
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
});})(x22291_22316))
;

x22291_22316.componentWillUnmount = ((function (x22291_22316){
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
});})(x22291_22316))
;

x22291_22316.componentDidUpdate = ((function (x22291_22316){
return (function (prev_props__18573__auto__,prev_state__18574__auto__){
var this__18565__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18565__auto__);
});})(x22291_22316))
;

x22291_22316.isMounted = ((function (x22291_22316){
return (function (){
var this__18565__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18565__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22291_22316))
;

x22291_22316.componentWillMount = ((function (x22291_22316){
return (function (){
var this__18565__auto__ = this;
var indexer__18575__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18575__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18575__auto__,this__18565__auto__);
}
});})(x22291_22316))
;

x22291_22316.render = ((function (x22291_22316){
return (function (){
var this__18564__auto__ = this;
var this$ = this__18564__auto__;
var _STAR_reconciler_STAR_22300 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22301 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22302 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22303 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22304 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__18564__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__18564__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__18564__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__18564__auto__);

om.next._STAR_parent_STAR_ = this__18564__auto__;

try{var map__22305 = om.next.props(this$);
var map__22305__$1 = ((((!((map__22305 == null)))?((((map__22305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22305):map__22305);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22305__$1,cljs.core.cst$kw$platform_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22305__$1,cljs.core.cst$kw$platform_SLASH_label);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22305__$1,cljs.core.cst$kw$platform_SLASH_data);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22305__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22305__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22305__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var current_minutes = barado.util.timestamp__GT_minutes(current_time);
var best_departure = barado.util.find_best_departure(data,current_minutes,(current_minutes + cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(time_threshold)),0.1,0.2);
if(cljs.core.truth_(id)){
if((data_timestamp == null)){
return barado.util.main_loading();
} else {
if(cljs.core.truth_(data)){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack container card"}),cljs.core.array_seq([barado.platforms.result_statement(this$,current_minutes,best_departure),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "chart"}),cljs.core.array_seq([(function (){var G__22307 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$now_DASH_minute,current_minutes,cljs.core.cst$kw$best_DASH_minute,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$leave_DASH_now,best_departure))?(((60) * cljs_time.core.hour(current_time)) + cljs_time.core.minute(current_time)):cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(best_departure))], null));
return (barado.charts.segment_chart_view.cljs$core$IFn$_invoke$arity$1 ? barado.charts.segment_chart_view.cljs$core$IFn$_invoke$arity$1(G__22307) : barado.charts.segment_chart_view.call(null,G__22307));
})()], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container card"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "result-statement", "className": "statement"}),cljs.core.array_seq(["Data Unavailable"], 0))], 0));

}
}
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22304;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22303;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22302;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22301;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22300;
}});})(x22291_22316))
;


barado.platforms.Platform.prototype.constructor = barado.platforms.Platform;

barado.platforms.Platform.prototype.constructor.displayName = "barado.platforms/Platform";

barado.platforms.Platform.prototype.om$isComponent = true;

var x22308_22320 = barado.platforms.Platform;
/** @nocollapse */
x22308_22320.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22308_22320.om$next$Ident$ident$arity$2 = ((function (x22308_22320){
return (function (this$,p__22309){
var map__22310 = p__22309;
var map__22310__$1 = ((((!((map__22310 == null)))?((((map__22310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22310):map__22310);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22310__$1,cljs.core.cst$kw$platform_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id], null);
});})(x22308_22320))
;

/** @nocollapse */
x22308_22320.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22308_22320.om$next$IQuery$query$arity$1 = ((function (x22308_22320){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_id,cljs.core.cst$kw$platform_SLASH_label,cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.cst$kw$platform_SLASH_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_data_DASH_timestamp,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.cst$sym$_], null)], null);
});})(x22308_22320))
;


var x22312_22321 = barado.platforms.Platform.prototype;

x22312_22321.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22312_22321.om$next$Ident$ident$arity$2 = ((function (x22312_22321){
return (function (this$,p__22313){
var map__22314 = p__22313;
var map__22314__$1 = ((((!((map__22314 == null)))?((((map__22314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22314):map__22314);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22314__$1,cljs.core.cst$kw$platform_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id], null);
});})(x22312_22321))
;


x22312_22321.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22312_22321.om$next$IQuery$query$arity$1 = ((function (x22312_22321){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_id,cljs.core.cst$kw$platform_SLASH_label,cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.cst$kw$platform_SLASH_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_data_DASH_timestamp,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.cst$sym$_], null)], null);
});})(x22312_22321))
;


barado.platforms.Platform.cljs$lang$type = true;

barado.platforms.Platform.cljs$lang$ctorStr = "barado.platforms/Platform";

barado.platforms.Platform.cljs$lang$ctorPrWriter = (function (this__18714__auto__,writer__18715__auto__,opt__18716__auto__){
return cljs.core._write(writer__18715__auto__,"barado.platforms/Platform");
});
barado.platforms.platform_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(barado.platforms.Platform);
