// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.charts');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('barado.util');
goog.require('goog.string');
goog.require('barado.theme');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.next');
goog.require('cljs_time.format');
barado.charts.margin = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,(40),cljs.core.cst$kw$bottom,(24),cljs.core.cst$kw$left,(48),cljs.core.cst$kw$right,(48)], null);
barado.charts.height = (300);
barado.charts.max_minutes = ((24) * (60));
barado.charts.x_axis_height = (48);
barado.charts.y_axis_width = (24);
barado.charts.plot_height = ((barado.charts.height - cljs.core.cst$kw$bottom.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)) - barado.charts.x_axis_height);
barado.charts.y_scale = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(barado.util.scale,(0),(1),barado.charts.plot_height,cljs.core.array_seq([(0)], 0));
barado.charts.plot = (function barado$charts$plot(data,now_minute,best_minute,plot_width,x_scale){
var seg_width = (((960) / (24)) / (4));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"clipPath": "url(#plot-clip)"}),cljs.core.array_seq([om.dom.rect(({"className": "plot-background", "x": (0), "y": (0), "height": barado.charts.plot_height, "width": plot_width})),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seg_width){
return (function (p__22209){
var vec__22210 = p__22209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210,(0),null);
var map__22213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210,(1),null);
var map__22213__$1 = ((((!((map__22213 == null)))?((((map__22213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22213):map__22213);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22213__$1,cljs.core.cst$kw$mean);
var stdev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22213__$1,cljs.core.cst$kw$stdev);
var minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22213__$1,cljs.core.cst$kw$minute);
var y = (barado.charts.y_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.y_scale.cljs$core$IFn$_invoke$arity$1(mean) : barado.charts.y_scale.call(null,mean));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"key": minute, "transform": (function (){var G__22215 = "translate(%f, 0)";
var G__22216 = (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(minute) : x_scale.call(null,minute));
return goog.string.format(G__22215,G__22216);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": seg_width, "y1": y, "y2": y, "className": "datapoint-cloud", "strokeWidth": (function (){var x__7856__auto__ = (1);
var y__7857__auto__ = (barado.charts.plot_height * stdev);
return ((x__7856__auto__ > y__7857__auto__) ? x__7856__auto__ : y__7857__auto__);
})()})),om.dom.line(({"x1": (0), "x2": seg_width, "y1": y, "y2": y, "className": "datapoint"}))], 0));
});})(seg_width))
,data)], 0));
});
barado.charts.axis = (function barado$charts$axis(x_scale,width){
var max_tick = (((width >= (940)))?(9):(5));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.line(({"x1": (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1((0)) : x_scale.call(null,(0))), "x2": (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(barado.charts.max_minutes) : x_scale.call(null,barado.charts.max_minutes)), "y1": (0), "y2": (0), "strokeWidth": (1), "strokeLinecap": cljs.core.cst$sym$square, "stroke": barado.theme.dark})),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (max_tick){
return (function (n){
var minute = (barado.charts.max_minutes * (n / (max_tick - (1))));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"key": minute, "className": "tick", "transform": (function (){var G__22219 = "translate(%f,0)";
var G__22220 = (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(minute) : x_scale.call(null,minute));
return goog.string.format(G__22219,G__22220);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (4)})),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"dy": (8)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(minute))], 0))], 0));
});})(max_tick))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(max_tick))], 0));
});
barado.charts.marker_now = (function barado$charts$marker_now(x_scale,now_minute){
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker marker-now", "transform": (function (){var G__22224 = "translate(%f, %f)";
var G__22225 = (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(now_minute) : x_scale.call(null,now_minute));
var G__22226 = (- cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin));
return goog.string.format(G__22224,G__22225,G__22226);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin) + barado.charts.plot_height)})),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": goog.string.format("translate(%f,%f)",(-8),(8))}),cljs.core.array_seq([om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-label"}),cljs.core.array_seq(["Now"], 0)),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-time", "y": (16)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(now_minute))], 0))], 0))], 0));
});
barado.charts.marker_leave = (function barado$charts$marker_leave(x_scale,best_minute){
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker marker-leave", "transform": (function (){var G__22230 = "translate(%f, %f)";
var G__22231 = (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(best_minute) : x_scale.call(null,best_minute));
var G__22232 = (- cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin));
return goog.string.format(G__22230,G__22231,G__22232);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin) + barado.charts.plot_height)})),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": goog.string.format("translate(%f,%f)",(8),(8))}),cljs.core.array_seq([om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-label"}),cljs.core.array_seq(["Leave"], 0)),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-time", "y": (16)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(best_minute))], 0))], 0))], 0));
});
barado.charts.update_width = (function barado$charts$update_width(this$){
var map__22235 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__22235__$1 = ((((!((map__22235 == null)))?((((map__22235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22235):map__22235);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235__$1,cljs.core.cst$kw$width);
var window_width = window.innerWidth;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(width,window_width)){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$width,(function (){var x__7863__auto__ = (940);
var y__7864__auto__ = (window_width - (16));
return ((x__7863__auto__ < y__7864__auto__) ? x__7863__auto__ : y__7864__auto__);
})());
} else {
return null;
}
});
/**
 * @constructor
 */
barado.charts.SegmentChart = (function barado$charts$SegmentChart(){
var this__18711__auto__ = this;
React.Component.apply(this__18711__auto__,arguments);

if(!((this__18711__auto__.initLocalState == null))){
this__18711__auto__.state = this__18711__auto__.initLocalState();
} else {
this__18711__auto__.state = {};
}

return this__18711__auto__;
});

barado.charts.SegmentChart.prototype = goog.object.clone(React.Component.prototype);

var x22241_22271 = barado.charts.SegmentChart.prototype;
x22241_22271.componentWillUpdate = ((function (x22241_22271){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
if(((!((this__18565__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18565__auto__.om$next$Ident$)))?true:false):false)){
var ident__18569__auto___22272 = om.next.ident(this__18565__auto__,om.next.props(this__18565__auto__));
var next_ident__18570__auto___22273 = om.next.ident(this__18565__auto__,om.next._next_props(next_props__18566__auto__,this__18565__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18569__auto___22272,next_ident__18570__auto___22273)){
var idxr__18571__auto___22274 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18571__auto___22274 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18571__auto___22274),((function (idxr__18571__auto___22274,ident__18569__auto___22272,next_ident__18570__auto___22273,this__18565__auto__,x22241_22271){
return (function (indexes__18572__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18572__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18569__auto___22272], null),cljs.core.disj,this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18570__auto___22273], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18565__auto__);
});})(idxr__18571__auto___22274,ident__18569__auto___22272,next_ident__18570__auto___22273,this__18565__auto__,x22241_22271))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18565__auto__);

return om.next.merge_pending_state_BANG_(this__18565__auto__);
});})(x22241_22271))
;

x22241_22271.shouldComponentUpdate = ((function (x22241_22271){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
var next_children__18568__auto__ = next_props__18566__auto__.children;
var next_props__18566__auto____$1 = goog.object.get(next_props__18566__auto__,"omcljs$value");
var next_props__18566__auto____$2 = (function (){var G__22243 = next_props__18566__auto____$1;
if((next_props__18566__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22243);
} else {
return G__22243;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18565__auto__),next_props__18566__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18565__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22248 = this__18565__auto__.state;
var G__22249 = "omcljs$state";
return goog.object.get(G__22248,G__22249);
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
});})(x22241_22271))
;

x22241_22271.componentWillUnmount = ((function (x22241_22271){
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
});})(x22241_22271))
;

x22241_22271.componentDidUpdate = ((function (x22241_22271){
return (function (prev_props__18573__auto__,prev_state__18574__auto__){
var this__18565__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18565__auto__);
});})(x22241_22271))
;

x22241_22271.isMounted = ((function (x22241_22271){
return (function (){
var this__18565__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18565__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22241_22271))
;

x22241_22271.componentWillMount = ((function (x22241_22271){
return (function (){
var this__18565__auto__ = this;
var indexer__18575__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18575__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18575__auto__,this__18565__auto__);
}
});})(x22241_22271))
;

x22241_22271.initLocalState = ((function (x22241_22271){
return (function (){
var this$ = this;
var ret__18543__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(940)], null);
var obj22251 = {"omcljs$state":ret__18543__auto__};
return obj22251;
});})(x22241_22271))
;

x22241_22271.componentDidMount = ((function (x22241_22271){
return (function (){
var this$ = this;
barado.charts.update_width(this$);

var G__22252 = window;
var G__22253 = "resize";
var G__22254 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(barado.charts.update_width,this$);
return goog.events.listen(G__22252,G__22253,G__22254);
});})(x22241_22271))
;

x22241_22271.render = ((function (x22241_22271){
return (function (){
var this__18564__auto__ = this;
var this$ = this__18564__auto__;
var _STAR_reconciler_STAR_22255 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22256 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22257 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22258 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22259 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__18564__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__18564__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__18564__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__18564__auto__);

om.next._STAR_parent_STAR_ = this__18564__auto__;

try{var map__22260 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__22260__$1 = ((((!((map__22260 == null)))?((((map__22260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22260):map__22260);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260__$1,cljs.core.cst$kw$data);
var now_minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260__$1,cljs.core.cst$kw$now_DASH_minute);
var best_minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260__$1,cljs.core.cst$kw$best_DASH_minute);
var map__22261 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__22261__$1 = ((((!((map__22261 == null)))?((((map__22261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22261):map__22261);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22261__$1,cljs.core.cst$kw$width);
var plot_width = (((width - cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)) - cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)) - barado.charts.y_axis_width);
var x_scale = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(barado.util.scale,(0),barado.charts.max_minutes,(0),cljs.core.array_seq([plot_width], 0));
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.svg.cljs$core$IFn$_invoke$arity$variadic(({"width": width, "height": barado.charts.height}),cljs.core.array_seq([om.dom.defs.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(({"id": "plot-clip"}),cljs.core.array_seq([om.dom.rect(({"height": barado.charts.plot_height, "width": plot_width}))], 0))], 0)),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": (function (){var G__22264 = "translate(%f,%f)";
var G__22265 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(barado.charts.margin);
var G__22266 = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin);
return goog.string.format(G__22264,G__22265,G__22266);
})()}),cljs.core.array_seq([om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": goog.string.format("translate(%f,0)",barado.charts.y_axis_width)}),cljs.core.array_seq([barado.charts.plot(data,now_minute,best_minute,plot_width,x_scale),barado.charts.marker_now(x_scale,now_minute),(cljs.core.truth_(best_minute)?barado.charts.marker_leave(x_scale,best_minute):null),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "x-axis", "transform": goog.string.format("translate(0,%f)",barado.charts.plot_height)}),cljs.core.array_seq([barado.charts.axis(x_scale,width)], 0))], 0)),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "y-axis", "transform": goog.string.format("translate(%f,0)",barado.charts.y_axis_width)}),cljs.core.array_seq([om.dom.line(({"className": "y-axis-line", "x1": (0), "x2": (0), "y1": (0), "y2": barado.charts.plot_height})),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__22260,map__22260__$1,data,now_minute,best_minute,map__22261,map__22261__$1,width,plot_width,x_scale,_STAR_reconciler_STAR_22255,_STAR_depth_STAR_22256,_STAR_shared_STAR_22257,_STAR_instrument_STAR_22258,_STAR_parent_STAR_22259,this$,this__18564__auto__,x22241_22271){
return (function (i,r){
var frac = (i / (5));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"key": frac, "className": "tick", "transform": (function (){var G__22267 = "translate(0,%f)";
var G__22268 = (frac * barado.charts.plot_height);
return goog.string.format(G__22267,G__22268);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (-4)})),om.dom.line(({"className": "grid-line", "x1": (0), "x2": plot_width})),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"dx": (-8), "dy": ((barado.charts.plot_height / (5)) / (2))}),cljs.core.array_seq([r], 0))], 0));
});})(map__22260,map__22260__$1,data,now_minute,best_minute,map__22261,map__22261__$1,width,plot_width,x_scale,_STAR_reconciler_STAR_22255,_STAR_depth_STAR_22256,_STAR_shared_STAR_22257,_STAR_instrument_STAR_22258,_STAR_parent_STAR_22259,this$,this__18564__auto__,x22241_22271))
,cljs.core.reverse(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light","Mid-light","Medium","Mid-heavy","Heavy"], null)))),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "tick", "transform": goog.string.format("translate(0,%f)",barado.charts.plot_height)}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (-4)}))], 0))], 0))], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22259;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22258;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22257;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22256;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22255;
}});})(x22241_22271))
;


barado.charts.SegmentChart.prototype.constructor = barado.charts.SegmentChart;

barado.charts.SegmentChart.prototype.constructor.displayName = "barado.charts/SegmentChart";

barado.charts.SegmentChart.prototype.om$isComponent = true;

var x22269_22275 = barado.charts.SegmentChart;


var x22270_22276 = barado.charts.SegmentChart.prototype;


barado.charts.SegmentChart.cljs$lang$type = true;

barado.charts.SegmentChart.cljs$lang$ctorStr = "barado.charts/SegmentChart";

barado.charts.SegmentChart.cljs$lang$ctorPrWriter = (function (this__18714__auto__,writer__18715__auto__,opt__18716__auto__){
return cljs.core._write(writer__18715__auto__,"barado.charts/SegmentChart");
});
barado.charts.segment_chart_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(barado.charts.SegmentChart);
