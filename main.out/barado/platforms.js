// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.platforms');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('barado.charts');
goog.require('om.dom');
goog.require('barado.util');
goog.require('barado.theme');
goog.require('om.next');
goog.require('cljs_time.format');
/**
 * @constructor
 */
barado.platforms.Platform = (function barado$platforms$Platform(){
var this__19647__auto__ = this;
React.Component.apply(this__19647__auto__,arguments);

if(!((this__19647__auto__.initLocalState == null))){
this__19647__auto__.state = this__19647__auto__.initLocalState();
} else {
this__19647__auto__.state = {};
}

return this__19647__auto__;
});

barado.platforms.Platform.prototype = goog.object.clone(React.Component.prototype);

var x22183_22210 = barado.platforms.Platform.prototype;
x22183_22210.componentWillUpdate = ((function (x22183_22210){
return (function (next_props__19502__auto__,next_state__19503__auto__){
var this__19501__auto__ = this;
if(((!((this__19501__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19501__auto__.om$next$Ident$)))?true:false):false)){
var ident__19505__auto___22211 = om.next.ident(this__19501__auto__,om.next.props(this__19501__auto__));
var next_ident__19506__auto___22212 = om.next.ident(this__19501__auto__,om.next._next_props(next_props__19502__auto__,this__19501__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19505__auto___22211,next_ident__19506__auto___22212)){
var idxr__19507__auto___22213 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19507__auto___22213 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19507__auto___22213),((function (idxr__19507__auto___22213,ident__19505__auto___22211,next_ident__19506__auto___22212,this__19501__auto__,x22183_22210){
return (function (indexes__19508__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19505__auto___22211], null),cljs.core.disj,this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19506__auto___22212], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19501__auto__);
});})(idxr__19507__auto___22213,ident__19505__auto___22211,next_ident__19506__auto___22212,this__19501__auto__,x22183_22210))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19501__auto__);

return om.next.merge_pending_state_BANG_(this__19501__auto__);
});})(x22183_22210))
;

x22183_22210.shouldComponentUpdate = ((function (x22183_22210){
return (function (next_props__19502__auto__,next_state__19503__auto__){
var this__19501__auto__ = this;
var next_children__19504__auto__ = next_props__19502__auto__.children;
var next_props__19502__auto____$1 = goog.object.get(next_props__19502__auto__,"omcljs$value");
var next_props__19502__auto____$2 = (function (){var G__22185 = next_props__19502__auto____$1;
if((next_props__19502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22185);
} else {
return G__22185;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19501__auto__),next_props__19502__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19501__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22190 = this__19501__auto__.state;
var G__22191 = "omcljs$state";
return goog.object.get(G__22190,G__22191);
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
});})(x22183_22210))
;

x22183_22210.componentWillUnmount = ((function (x22183_22210){
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
});})(x22183_22210))
;

x22183_22210.componentDidUpdate = ((function (x22183_22210){
return (function (prev_props__19509__auto__,prev_state__19510__auto__){
var this__19501__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19501__auto__);
});})(x22183_22210))
;

x22183_22210.isMounted = ((function (x22183_22210){
return (function (){
var this__19501__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22183_22210))
;

x22183_22210.componentWillMount = ((function (x22183_22210){
return (function (){
var this__19501__auto__ = this;
var indexer__19511__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__19511__auto__,this__19501__auto__);
}
});})(x22183_22210))
;

x22183_22210.render = ((function (x22183_22210){
return (function (){
var this__19500__auto__ = this;
var this$ = this__19500__auto__;
var _STAR_reconciler_STAR_22192 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22193 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22194 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22195 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22196 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__19500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__19500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__19500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__19500__auto__);

om.next._STAR_parent_STAR_ = this__19500__auto__;

try{var map__22197 = om.next.props(this$);
var map__22197__$1 = ((((!((map__22197 == null)))?((((map__22197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22197):map__22197);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22197__$1,cljs.core.cst$kw$platform_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22197__$1,cljs.core.cst$kw$platform_SLASH_label);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22197__$1,cljs.core.cst$kw$platform_SLASH_data);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22197__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22197__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var current_minutes = barado.util.timestamp__GT_minutes(current_time);
var best_departure = barado.util.find_best_departure(data,current_minutes,(current_minutes + cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(time_threshold)),(0));
if(cljs.core.truth_(id)){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container v stack gutters-lrg", "style": ({"paddingLeft": (cljs.core.truth_(barado.util.mobile_QMARK_)?"12px":(0)), "paddingRight": (cljs.core.truth_(barado.util.mobile_QMARK_)?"12px":(0))})}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("stack gutters-lrg"),cljs.core.str((cljs.core.truth_(barado.util.mobile_QMARK_)?" v":" h"))].join('')}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "card shallow v stack grow now-card"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toolbar toolbar-lined h stack center pad"}),cljs.core.array_seq(["Now"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "pad v stack"}),cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,current_time)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "rating"}),cljs.core.array_seq([(function (){var G__22199 = barado.util.word_rate(cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,barado.util.timestamp__GT_bucket(current_time))));
return (barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1 ? barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1(G__22199) : barado.util.safe_name_rate.call(null,G__22199));
})()], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "card shallow v stack grow leave-card"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toolbar toolbar-lined h stack center pad"}),cljs.core.array_seq(["Leave"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "pad v stack"}),cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(cljs.core.truth_(best_departure)?cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(best_departure))):"No data")], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "rating"}),cljs.core.array_seq([(cljs.core.truth_(best_departure)?(function (){var G__22200 = barado.util.word_rate(cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(best_departure));
return (barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1 ? barado.util.safe_name_rate.cljs$core$IFn$_invoke$arity$1(G__22200) : barado.util.safe_name_rate.call(null,G__22200));
})():"No data")], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "card shallow v stack"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toolbar toolbar-lined h stack center pad"}),cljs.core.array_seq(["Historical Data"], 0)),(function (){var G__22201 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$now_DASH_minute,current_minutes,cljs.core.cst$kw$best_DASH_minute,cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(best_departure)], null));
return (barado.charts.segment_chart_view.cljs$core$IFn$_invoke$arity$1 ? barado.charts.segment_chart_view.cljs$core$IFn$_invoke$arity$1(G__22201) : barado.charts.segment_chart_view.call(null,G__22201));
})()], 0))], 0));
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22196;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22195;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22194;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22193;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22192;
}});})(x22183_22210))
;


barado.platforms.Platform.prototype.constructor = barado.platforms.Platform;

barado.platforms.Platform.prototype.constructor.displayName = "barado.platforms/Platform";

barado.platforms.Platform.prototype.om$isComponent = true;

var x22202_22214 = barado.platforms.Platform;
/** @nocollapse */
x22202_22214.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22202_22214.om$next$Ident$ident$arity$2 = ((function (x22202_22214){
return (function (this$,p__22203){
var map__22204 = p__22203;
var map__22204__$1 = ((((!((map__22204 == null)))?((((map__22204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22204):map__22204);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204__$1,cljs.core.cst$kw$platform_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id], null);
});})(x22202_22214))
;

/** @nocollapse */
x22202_22214.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x22202_22214.om$next$IQuery$query$arity$1 = ((function (x22202_22214){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_id,cljs.core.cst$kw$platform_SLASH_label,cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.cst$kw$platform_SLASH_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.cst$sym$_], null)], null);
});})(x22202_22214))
;


var x22206_22215 = barado.platforms.Platform.prototype;

x22206_22215.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x22206_22215.om$next$Ident$ident$arity$2 = ((function (x22206_22215){
return (function (this$,p__22207){
var map__22208 = p__22207;
var map__22208__$1 = ((((!((map__22208 == null)))?((((map__22208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22208):map__22208);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,cljs.core.cst$kw$platform_SLASH_id);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id], null);
});})(x22206_22215))
;


x22206_22215.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x22206_22215.om$next$IQuery$query$arity$1 = ((function (x22206_22215){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_id,cljs.core.cst$kw$platform_SLASH_label,cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.cst$kw$platform_SLASH_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.cst$sym$_], null)], null);
});})(x22206_22215))
;


barado.platforms.Platform.cljs$lang$type = true;

barado.platforms.Platform.cljs$lang$ctorStr = "barado.platforms/Platform";

barado.platforms.Platform.cljs$lang$ctorPrWriter = (function (this__19650__auto__,writer__19651__auto__,opt__19652__auto__){
return cljs.core._write(writer__19651__auto__,"barado.platforms/Platform");
});
barado.platforms.platform_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(barado.platforms.Platform);
