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
var map__22337 = om.next.props(this$);
var map__22337__$1 = ((((!((map__22337 == null)))?((((map__22337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22337):map__22337);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var full_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,cljs.core.cst$kw$platform_SLASH_full_DASH_name);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,cljs.core.cst$kw$platform_SLASH_data);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "result-statement", "className": "statement"}),cljs.core.array_seq([(function (){var G__22339 = (((best_departure instanceof cljs.core.Keyword))?best_departure.fqn:null);
switch (G__22339) {
case "leave-now":
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([goog.string.format("%s Station won't get much lighter.",full_name)], 0))], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["We think you should ",om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["leave now"], 0)),"."], 0))], 0));

break;
case "no-data":
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([goog.string.format("Oops! We don't have data for %s Station for this time.",full_name)], 0))], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["The station is either closed at this time of day, or we are missing some data."], 0))], 0));

break;
default:
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([goog.string.format("%s Station is currently ",full_name)], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var G__22340 = barado.util.word_rate(cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,barado.util.timestamp__GT_bucket(current_time))));
return (barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1 ? barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1(G__22340) : barado.util.safe_name_rate.call(null,G__22340));
})()], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["."], 0))], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["We think you should leave at "], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(cljs.core.truth_(best_departure)?cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(best_departure))):"No data")], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([" when it is "], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(cljs.core.truth_(best_departure)?(function (){var G__22341 = barado.util.word_rate(cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(best_departure));
return (barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1 ? barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1(G__22341) : barado.util.safe_name_rate.call(null,G__22341));
})():"No data")], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["."], 0))], 0))], 0));

}
})()], 0));
});
barado.platforms.paper_gradient = "linear-gradient(to top, #f7f7f7, white 25%, white 100%)";
/**
 * @constructor
 */
barado.platforms.Platform = (function barado$platforms$Platform(){
var this__19070__auto__ = this;
React.Component.apply(this__19070__auto__,arguments);

if(!((this__19070__auto__.initLocalState == null))){
this__19070__auto__.state = this__19070__auto__.initLocalState();
} else {
this__19070__auto__.state = {};
}

return this__19070__auto__;
});

barado.platforms.Platform.prototype = goog.object.clone(React.Component.prototype);

var x22347_22373 = barado.platforms.Platform.prototype;
x22347_22373.componentWillUpdate = ((function (x22347_22373){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
if(((!((this__18924__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18924__auto__.om$next$Ident$)))?true:false):false)){
var ident__18928__auto___22374 = om.next.ident(this__18924__auto__,om.next.props(this__18924__auto__));
var next_ident__18929__auto___22375 = om.next.ident(this__18924__auto__,om.next._next_props(next_props__18925__auto__,this__18924__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18928__auto___22374,next_ident__18929__auto___22375)){
var idxr__18930__auto___22376 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18930__auto___22376 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18930__auto___22376),((function (idxr__18930__auto___22376,ident__18928__auto___22374,next_ident__18929__auto___22375,this__18924__auto__,x22347_22373){
return (function (indexes__18931__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18931__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18928__auto___22374], null),cljs.core.disj,this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18929__auto___22375], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18924__auto__);
});})(idxr__18930__auto___22376,ident__18928__auto___22374,next_ident__18929__auto___22375,this__18924__auto__,x22347_22373))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18924__auto__);

return om.next.merge_pending_state_BANG_(this__18924__auto__);
});})(x22347_22373))
;

x22347_22373.shouldComponentUpdate = ((function (x22347_22373){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
var next_children__18927__auto__ = next_props__18925__auto__.children;
var next_props__18925__auto____$1 = goog.object.get(next_props__18925__auto__,"omcljs$value");
var next_props__18925__auto____$2 = (function (){var G__22349 = next_props__18925__auto____$1;
if((next_props__18925__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22349);
} else {
return G__22349;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18924__auto__),next_props__18925__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18924__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22354 = this__18924__auto__.state;
var G__22355 = "omcljs$state";
return goog.object.get(G__22354,G__22355);
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
});})(x22347_22373))
;

x22347_22373.componentWillUnmount = ((function (x22347_22373){
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
});})(x22347_22373))
;

x22347_22373.componentDidUpdate = ((function (x22347_22373){
return (function (prev_props__18932__auto__,prev_state__18933__auto__){
var this__18924__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18924__auto__);
});})(x22347_22373))
;

x22347_22373.isMounted = ((function (x22347_22373){
return (function (){
var this__18924__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18924__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22347_22373))
;

x22347_22373.componentWillMount = ((function (x22347_22373){
return (function (){
var this__18924__auto__ = this;
var indexer__18934__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18934__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18934__auto__,this__18924__auto__);
}
});})(x22347_22373))
;

x22347_22373.render = ((function (x22347_22373){
return (function (){
var this__18923__auto__ = this;
var this$ = this__18923__auto__;
var _STAR_reconciler_STAR_22356 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22357 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22358 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22359 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22360 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__18923__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__18923__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__18923__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__18923__auto__);

om.next._STAR_parent_STAR_ = this__18923__auto__;

try{var map__22361 = om.next.props(this$);
var map__22361__$1 = ((((!((map__22361 == null)))?((((map__22361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22361):map__22361);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22361__$1,cljs.core.cst$kw$platform_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22361__$1,cljs.core.cst$kw$platform_SLASH_label);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22361__$1,cljs.core.cst$kw$platform_SLASH_data);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22361__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22361__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22361__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var current_minutes = barado.util.timestamp__GT_minutes(current_time);
var best_departure = barado.util.find_best_departure(data,current_minutes,(current_minutes + cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(time_threshold)),0.1,0.2);
if(cljs.core.truth_(id)){
if((data_timestamp == null)){
return barado.util.main_loading();
} else {
if(cljs.core.truth_(data)){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack container card"}),cljs.core.array_seq([barado.platforms.result_statement(this$,current_minutes,best_departure),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "chart"}),cljs.core.array_seq([(function (){var G__22363 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$now_DASH_minute,current_minutes,cljs.core.cst$kw$best_DASH_minute,(function (){var G__22364 = (((best_departure instanceof cljs.core.Keyword))?best_departure.fqn:null);
switch (G__22364) {
case "leave-now":
return (((60) * cljs_time.core.hour(current_time)) + cljs_time.core.minute(current_time));

break;
case "no-data":
return null;

break;
default:
return cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(best_departure);

}
})()], null));
return (barado.charts.segment_chart_view.cljs$core$IFn$_invoke$arity$1 ? barado.charts.segment_chart_view.cljs$core$IFn$_invoke$arity$1(G__22363) : barado.charts.segment_chart_view.call(null,G__22363));
})()], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container card"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "result-statement", "className": "statement"}),cljs.core.array_seq(["Data Unavailable"], 0))], 0));

}
}
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22360;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22359;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22358;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22357;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22356;
}});})(x22347_22373))
;


barado.platforms.Platform.prototype.constructor = barado.platforms.Platform;

barado.platforms.Platform.prototype.constructor.displayName = "barado.platforms/Platform";

barado.platforms.Platform.prototype.om$isComponent = true;

var x22365_22378 = barado.platforms.Platform;
/** @nocollapse */
x22365_22378.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22365_22378.om$next$Ident$ident$arity$2 = ((function (x22365_22378){
return (function (this$,p__22366){
var map__22367 = p__22366;
var map__22367__$1 = ((((!((map__22367 == null)))?((((map__22367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22367):map__22367);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22367__$1,cljs.core.cst$kw$platform_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id], null);
});})(x22365_22378))
;

/** @nocollapse */
x22365_22378.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22365_22378.om$next$IQuery$query$arity$1 = ((function (x22365_22378){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_id,cljs.core.cst$kw$platform_SLASH_label,cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.cst$kw$platform_SLASH_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_data_DASH_timestamp,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.cst$sym$_], null)], null);
});})(x22365_22378))
;


var x22369_22379 = barado.platforms.Platform.prototype;

x22369_22379.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22369_22379.om$next$Ident$ident$arity$2 = ((function (x22369_22379){
return (function (this$,p__22370){
var map__22371 = p__22370;
var map__22371__$1 = ((((!((map__22371 == null)))?((((map__22371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22371):map__22371);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22371__$1,cljs.core.cst$kw$platform_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id], null);
});})(x22369_22379))
;


x22369_22379.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22369_22379.om$next$IQuery$query$arity$1 = ((function (x22369_22379){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_id,cljs.core.cst$kw$platform_SLASH_label,cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.cst$kw$platform_SLASH_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_data_DASH_timestamp,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.cst$sym$_], null)], null);
});})(x22369_22379))
;


barado.platforms.Platform.cljs$lang$type = true;

barado.platforms.Platform.cljs$lang$ctorStr = "barado.platforms/Platform";

barado.platforms.Platform.cljs$lang$ctorPrWriter = (function (this__19073__auto__,writer__19074__auto__,opt__19075__auto__){
return cljs.core._write(writer__19074__auto__,"barado.platforms/Platform");
});
barado.platforms.platform_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(barado.platforms.Platform);
