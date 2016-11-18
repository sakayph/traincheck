// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.charts');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('barado.util');
goog.require('goog.string');
goog.require('barado.theme');
goog.require('goog.string.format');
goog.require('om.next');
goog.require('cljs_time.format');
barado.charts.margin = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,(24),cljs.core.cst$kw$bottom,(24),cljs.core.cst$kw$left,(48),cljs.core.cst$kw$right,(48)], null);
barado.charts.width = (cljs.core.truth_(barado.util.mobile_QMARK_)?(window.innerWidth - (24)):(940));
barado.charts.height = (300);
barado.charts.max_minutes = ((24) * (60));
barado.charts.x_axis_height = (48);
barado.charts.plot_width = ((barado.charts.width - cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)) - cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(barado.charts.margin));
barado.charts.plot_height = ((barado.charts.height - cljs.core.cst$kw$bottom.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)) - barado.charts.x_axis_height);
barado.charts.x_scale = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(barado.util.scale,(0),barado.charts.max_minutes,(0),cljs.core.array_seq([barado.charts.plot_width], 0));
barado.charts.y_scale = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(barado.util.scale,(0),(1),barado.charts.plot_height,cljs.core.array_seq([(0)], 0));
barado.charts.plot = (function barado$charts$plot(data,now_minute,best_minute){
var seg_width = (((960) / (24)) / (4));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"clipPath": "url(#plot-clip)"}),cljs.core.array_seq([om.dom.rect(({"className": "plot-background", "x": (0), "y": (0)})),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seg_width){
return (function (p__22122){
var vec__22123 = p__22122;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22123,(0),null);
var map__22126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22123,(1),null);
var map__22126__$1 = ((((!((map__22126 == null)))?((((map__22126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22126):map__22126);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22126__$1,cljs.core.cst$kw$mean);
var stdev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22126__$1,cljs.core.cst$kw$stdev);
var minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22126__$1,cljs.core.cst$kw$minute);
var y = (barado.charts.y_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.y_scale.cljs$core$IFn$_invoke$arity$1(mean) : barado.charts.y_scale.call(null,mean));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"key": minute, "transform": (function (){var G__22128 = "translate(%f, 0)";
var G__22129 = (barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1(minute) : barado.charts.x_scale.call(null,minute));
return goog.string.format(G__22128,G__22129);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": seg_width, "y1": y, "y2": y, "className": "datapoint-cloud", "strokeWidth": (function (){var x__7856__auto__ = (1);
var y__7857__auto__ = (barado.charts.plot_height * stdev);
return ((x__7856__auto__ > y__7857__auto__) ? x__7856__auto__ : y__7857__auto__);
})()})),om.dom.line(({"x1": (0), "x2": seg_width, "y1": y, "y2": y, "className": "datapoint"}))], 0));
});})(seg_width))
,data)], 0));
});
barado.charts.axis = (function barado$charts$axis(){
var max_tick = (((barado.charts.width >= (940)))?(9):(5));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.line(({"x1": (barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1((0)) : barado.charts.x_scale.call(null,(0))), "x2": (barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1(barado.charts.max_minutes) : barado.charts.x_scale.call(null,barado.charts.max_minutes)), "y1": (0), "y2": (0), "strokeWidth": (1), "strokeLinecap": cljs.core.cst$sym$square, "stroke": barado.theme.dark})),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (max_tick){
return (function (n){
var minute = (barado.charts.max_minutes * (n / (max_tick - (1))));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"key": minute, "className": "tick", "transform": (function (){var G__22132 = "translate(%f,0)";
var G__22133 = (barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1(minute) : barado.charts.x_scale.call(null,minute));
return goog.string.format(G__22132,G__22133);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (4)})),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"dy": (8)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(minute))], 0))], 0));
});})(max_tick))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(max_tick))], 0));
});
barado.charts.marker_now = (function barado$charts$marker_now(now_minute){
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker marker-now", "transform": (function (){var G__22137 = "translate(%f, %f)";
var G__22138 = (barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1(now_minute) : barado.charts.x_scale.call(null,now_minute));
var G__22139 = (- cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin));
return goog.string.format(G__22137,G__22138,G__22139);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (barado.charts.plot_height + cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin))})),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-label", "x": (-8), "y": (8)}),cljs.core.array_seq(["Now"], 0)),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-time", "x": (-8), "y": cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(now_minute))], 0))], 0));
});
barado.charts.marker_leave = (function barado$charts$marker_leave(best_minute){
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker marker-leave", "transform": (function (){var G__22143 = "translate(%f, %f)";
var G__22144 = (barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.x_scale.cljs$core$IFn$_invoke$arity$1(best_minute) : barado.charts.x_scale.call(null,best_minute));
var G__22145 = (- cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin));
return goog.string.format(G__22143,G__22144,G__22145);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (barado.charts.plot_height + cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin))})),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-label", "x": (8), "y": (8)}),cljs.core.array_seq(["Leave"], 0)),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-time", "x": (8), "y": cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(best_minute))], 0))], 0));
});
/**
 * @constructor
 */
barado.charts.SegmentChart = (function barado$charts$SegmentChart(){
var this__19647__auto__ = this;
React.Component.apply(this__19647__auto__,arguments);

if(!((this__19647__auto__.initLocalState == null))){
this__19647__auto__.state = this__19647__auto__.initLocalState();
} else {
this__19647__auto__.state = {};
}

return this__19647__auto__;
});

barado.charts.SegmentChart.prototype = goog.object.clone(React.Component.prototype);

var x22150_22171 = barado.charts.SegmentChart.prototype;
x22150_22171.componentWillUpdate = ((function (x22150_22171){
return (function (next_props__19502__auto__,next_state__19503__auto__){
var this__19501__auto__ = this;
if(((!((this__19501__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19501__auto__.om$next$Ident$)))?true:false):false)){
var ident__19505__auto___22172 = om.next.ident(this__19501__auto__,om.next.props(this__19501__auto__));
var next_ident__19506__auto___22173 = om.next.ident(this__19501__auto__,om.next._next_props(next_props__19502__auto__,this__19501__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19505__auto___22172,next_ident__19506__auto___22173)){
var idxr__19507__auto___22174 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19507__auto___22174 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19507__auto___22174),((function (idxr__19507__auto___22174,ident__19505__auto___22172,next_ident__19506__auto___22173,this__19501__auto__,x22150_22171){
return (function (indexes__19508__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19505__auto___22172], null),cljs.core.disj,this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19506__auto___22173], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19501__auto__);
});})(idxr__19507__auto___22174,ident__19505__auto___22172,next_ident__19506__auto___22173,this__19501__auto__,x22150_22171))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19501__auto__);

return om.next.merge_pending_state_BANG_(this__19501__auto__);
});})(x22150_22171))
;

x22150_22171.shouldComponentUpdate = ((function (x22150_22171){
return (function (next_props__19502__auto__,next_state__19503__auto__){
var this__19501__auto__ = this;
var next_children__19504__auto__ = next_props__19502__auto__.children;
var next_props__19502__auto____$1 = goog.object.get(next_props__19502__auto__,"omcljs$value");
var next_props__19502__auto____$2 = (function (){var G__22152 = next_props__19502__auto____$1;
if((next_props__19502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22152);
} else {
return G__22152;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19501__auto__),next_props__19502__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19501__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22157 = this__19501__auto__.state;
var G__22158 = "omcljs$state";
return goog.object.get(G__22157,G__22158);
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
});})(x22150_22171))
;

x22150_22171.componentWillUnmount = ((function (x22150_22171){
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
});})(x22150_22171))
;

x22150_22171.componentDidUpdate = ((function (x22150_22171){
return (function (prev_props__19509__auto__,prev_state__19510__auto__){
var this__19501__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19501__auto__);
});})(x22150_22171))
;

x22150_22171.isMounted = ((function (x22150_22171){
return (function (){
var this__19501__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22150_22171))
;

x22150_22171.componentWillMount = ((function (x22150_22171){
return (function (){
var this__19501__auto__ = this;
var indexer__19511__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__19511__auto__,this__19501__auto__);
}
});})(x22150_22171))
;

x22150_22171.render = ((function (x22150_22171){
return (function (){
var this__19500__auto__ = this;
var this$ = this__19500__auto__;
var _STAR_reconciler_STAR_22159 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22160 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22161 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22162 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22163 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__19500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__19500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__19500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__19500__auto__);

om.next._STAR_parent_STAR_ = this__19500__auto__;

try{var map__22164 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__22164__$1 = ((((!((map__22164 == null)))?((((map__22164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22164):map__22164);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,cljs.core.cst$kw$data);
var now_minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,cljs.core.cst$kw$now_DASH_minute);
var best_minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,cljs.core.cst$kw$best_DASH_minute);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.svg.cljs$core$IFn$_invoke$arity$variadic(({"width": barado.charts.width, "height": barado.charts.height}),cljs.core.array_seq([om.dom.defs.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(({"id": "plot-clip"}),cljs.core.array_seq([om.dom.rect(({"height": barado.charts.plot_height, "width": barado.charts.plot_width}))], 0))], 0)),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": (function (){var G__22166 = "translate(%f,%f)";
var G__22167 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(barado.charts.margin);
var G__22168 = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin);
return goog.string.format(G__22166,G__22167,G__22168);
})()}),cljs.core.array_seq([barado.charts.plot(data,now_minute,best_minute),barado.charts.marker_now(now_minute),(cljs.core.truth_(best_minute)?barado.charts.marker_leave(best_minute):null),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": goog.string.format("translate(0,%f)",barado.charts.plot_height)}),cljs.core.array_seq([barado.charts.axis()], 0))], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22163;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22162;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22161;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22160;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22159;
}});})(x22150_22171))
;


barado.charts.SegmentChart.prototype.constructor = barado.charts.SegmentChart;

barado.charts.SegmentChart.prototype.constructor.displayName = "barado.charts/SegmentChart";

barado.charts.SegmentChart.prototype.om$isComponent = true;

var x22169_22175 = barado.charts.SegmentChart;


var x22170_22176 = barado.charts.SegmentChart.prototype;


barado.charts.SegmentChart.cljs$lang$type = true;

barado.charts.SegmentChart.cljs$lang$ctorStr = "barado.charts/SegmentChart";

barado.charts.SegmentChart.cljs$lang$ctorPrWriter = (function (this__19650__auto__,writer__19651__auto__,opt__19652__auto__){
return cljs.core._write(writer__19651__auto__,"barado.charts/SegmentChart");
});
barado.charts.segment_chart_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(barado.charts.SegmentChart);
