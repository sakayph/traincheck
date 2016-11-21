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
var map__22179 = om.next.props(this$);
var map__22179__$1 = ((((!((map__22179 == null)))?((((map__22179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22179):map__22179);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22179__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var full_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22179__$1,cljs.core.cst$kw$platform_SLASH_full_DASH_name);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22179__$1,cljs.core.cst$kw$platform_SLASH_data);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "result-statement", "className": "statement"}),cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$leave_DASH_now,best_departure))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([goog.string.format("%s Station won't get much lighter.",full_name)], 0))], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["We think you should ",om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["leave now"], 0)),"."], 0))], 0)):om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([goog.string.format("%s Station is currently ",full_name)], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var G__22181 = barado.util.word_rate(cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,barado.util.timestamp__GT_bucket(current_time))));
return (barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1 ? barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1(G__22181) : barado.util.safe_name_rate.call(null,G__22181));
})()], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["."], 0))], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["We think you should leave at "], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(cljs.core.truth_(best_departure)?cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(best_departure))):"No data")], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([" when it is "], 0)),om.dom.strong.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(cljs.core.truth_(best_departure)?(function (){var G__22182 = barado.util.word_rate(cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(best_departure));
return (barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1 ? barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1(G__22182) : barado.util.safe_name_rate.call(null,G__22182));
})():"No data")], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["."], 0))], 0))], 0)))], 0));
});
barado.platforms.paper_gradient = "linear-gradient(to top, #f7f7f7, white 40%, white 100%)";
/**
 * @constructor
 */
barado.platforms.Platform = (function barado$platforms$Platform(){
var this__19649__auto__ = this;
React.Component.apply(this__19649__auto__,arguments);

if(!((this__19649__auto__.initLocalState == null))){
this__19649__auto__.state = this__19649__auto__.initLocalState();
} else {
this__19649__auto__.state = {};
}

return this__19649__auto__;
});

barado.platforms.Platform.prototype = goog.object.clone(React.Component.prototype);

var x22187_22212 = barado.platforms.Platform.prototype;
x22187_22212.componentWillUpdate = ((function (x22187_22212){
return (function (next_props__19504__auto__,next_state__19505__auto__){
var this__19503__auto__ = this;
if(((!((this__19503__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19503__auto__.om$next$Ident$)))?true:false):false)){
var ident__19507__auto___22213 = om.next.ident(this__19503__auto__,om.next.props(this__19503__auto__));
var next_ident__19508__auto___22214 = om.next.ident(this__19503__auto__,om.next._next_props(next_props__19504__auto__,this__19503__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19507__auto___22213,next_ident__19508__auto___22214)){
var idxr__19509__auto___22215 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19509__auto___22215 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19509__auto___22215),((function (idxr__19509__auto___22215,ident__19507__auto___22213,next_ident__19508__auto___22214,this__19503__auto__,x22187_22212){
return (function (indexes__19510__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19510__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19507__auto___22213], null),cljs.core.disj,this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19508__auto___22214], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19503__auto__);
});})(idxr__19509__auto___22215,ident__19507__auto___22213,next_ident__19508__auto___22214,this__19503__auto__,x22187_22212))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19503__auto__);

return om.next.merge_pending_state_BANG_(this__19503__auto__);
});})(x22187_22212))
;

x22187_22212.shouldComponentUpdate = ((function (x22187_22212){
return (function (next_props__19504__auto__,next_state__19505__auto__){
var this__19503__auto__ = this;
var next_children__19506__auto__ = next_props__19504__auto__.children;
var next_props__19504__auto____$1 = goog.object.get(next_props__19504__auto__,"omcljs$value");
var next_props__19504__auto____$2 = (function (){var G__22189 = next_props__19504__auto____$1;
if((next_props__19504__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22189);
} else {
return G__22189;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19503__auto__),next_props__19504__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19503__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22194 = this__19503__auto__.state;
var G__22195 = "omcljs$state";
return goog.object.get(G__22194,G__22195);
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
});})(x22187_22212))
;

x22187_22212.componentWillUnmount = ((function (x22187_22212){
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
});})(x22187_22212))
;

x22187_22212.componentDidUpdate = ((function (x22187_22212){
return (function (prev_props__19511__auto__,prev_state__19512__auto__){
var this__19503__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19503__auto__);
});})(x22187_22212))
;

x22187_22212.isMounted = ((function (x22187_22212){
return (function (){
var this__19503__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19503__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22187_22212))
;

x22187_22212.componentWillMount = ((function (x22187_22212){
return (function (){
var this__19503__auto__ = this;
var indexer__19513__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19503__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19513__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__19513__auto__,this__19503__auto__);
}
});})(x22187_22212))
;

x22187_22212.render = ((function (x22187_22212){
return (function (){
var this__19502__auto__ = this;
var this$ = this__19502__auto__;
var _STAR_reconciler_STAR_22196 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22197 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22198 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22199 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22200 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__19502__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__19502__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__19502__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__19502__auto__);

om.next._STAR_parent_STAR_ = this__19502__auto__;

try{var map__22201 = om.next.props(this$);
var map__22201__$1 = ((((!((map__22201 == null)))?((((map__22201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22201):map__22201);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,cljs.core.cst$kw$platform_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,cljs.core.cst$kw$platform_SLASH_label);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,cljs.core.cst$kw$platform_SLASH_data);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var current_minutes = barado.util.timestamp__GT_minutes(current_time);
var best_departure = barado.util.find_best_departure(data,current_minutes,(current_minutes + cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(time_threshold)),0.1,0.2);
if(cljs.core.truth_(id)){
if((data_timestamp == null)){
return barado.util.main_loading();
} else {
if(cljs.core.truth_(data)){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack container card"}),cljs.core.array_seq([barado.platforms.result_statement(this$,current_minutes,best_departure),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "chart"}),cljs.core.array_seq([(function (){var G__22203 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$now_DASH_minute,current_minutes,cljs.core.cst$kw$best_DASH_minute,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$leave_DASH_now,best_departure))?(((60) * cljs_time.core.hour(current_time)) + cljs_time.core.minute(current_time)):cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(best_departure))], null));
return (barado.charts.segment_chart_view.cljs$core$IFn$_invoke$arity$1 ? barado.charts.segment_chart_view.cljs$core$IFn$_invoke$arity$1(G__22203) : barado.charts.segment_chart_view.call(null,G__22203));
})()], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container card"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "result-statement", "className": "statement"}),cljs.core.array_seq(["Data Unavailable"], 0))], 0));

}
}
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22200;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22199;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22198;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22197;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22196;
}});})(x22187_22212))
;


barado.platforms.Platform.prototype.constructor = barado.platforms.Platform;

barado.platforms.Platform.prototype.constructor.displayName = "barado.platforms/Platform";

barado.platforms.Platform.prototype.om$isComponent = true;

var x22204_22216 = barado.platforms.Platform;
/** @nocollapse */
x22204_22216.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22204_22216.om$next$Ident$ident$arity$2 = ((function (x22204_22216){
return (function (this$,p__22205){
var map__22206 = p__22205;
var map__22206__$1 = ((((!((map__22206 == null)))?((((map__22206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22206):map__22206);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22206__$1,cljs.core.cst$kw$platform_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id], null);
});})(x22204_22216))
;

/** @nocollapse */
x22204_22216.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22204_22216.om$next$IQuery$query$arity$1 = ((function (x22204_22216){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_id,cljs.core.cst$kw$platform_SLASH_label,cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.cst$kw$platform_SLASH_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_data_DASH_timestamp,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.cst$sym$_], null)], null);
});})(x22204_22216))
;


var x22208_22217 = barado.platforms.Platform.prototype;

x22208_22217.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22208_22217.om$next$Ident$ident$arity$2 = ((function (x22208_22217){
return (function (this$,p__22209){
var map__22210 = p__22209;
var map__22210__$1 = ((((!((map__22210 == null)))?((((map__22210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22210):map__22210);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22210__$1,cljs.core.cst$kw$platform_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id], null);
});})(x22208_22217))
;


x22208_22217.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22208_22217.om$next$IQuery$query$arity$1 = ((function (x22208_22217){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_id,cljs.core.cst$kw$platform_SLASH_label,cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.cst$kw$platform_SLASH_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_data_DASH_timestamp,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.cst$sym$_], null)], null);
});})(x22208_22217))
;


barado.platforms.Platform.cljs$lang$type = true;

barado.platforms.Platform.cljs$lang$ctorStr = "barado.platforms/Platform";

barado.platforms.Platform.cljs$lang$ctorPrWriter = (function (this__19652__auto__,writer__19653__auto__,opt__19654__auto__){
return cljs.core._write(writer__19653__auto__,"barado.platforms/Platform");
});
barado.platforms.platform_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(barado.platforms.Platform);
