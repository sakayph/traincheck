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
return (function (p__22260){
var vec__22261 = p__22260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22261,(0),null);
var map__22264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22261,(1),null);
var map__22264__$1 = ((((!((map__22264 == null)))?((((map__22264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22264):map__22264);
var mean = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,cljs.core.cst$kw$mean);
var stdev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,cljs.core.cst$kw$stdev);
var minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,cljs.core.cst$kw$minute);
var y = (barado.charts.y_scale.cljs$core$IFn$_invoke$arity$1 ? barado.charts.y_scale.cljs$core$IFn$_invoke$arity$1(mean) : barado.charts.y_scale.call(null,mean));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"key": minute, "transform": (function (){var G__22266 = "translate(%f, 0)";
var G__22267 = (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(minute) : x_scale.call(null,minute));
return goog.string.format(G__22266,G__22267);
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
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"key": minute, "className": "tick", "transform": (function (){var G__22270 = "translate(%f,0)";
var G__22271 = (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(minute) : x_scale.call(null,minute));
return goog.string.format(G__22270,G__22271);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (4)})),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"dy": (8)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(minute))], 0))], 0));
});})(max_tick))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(max_tick))], 0));
});
barado.charts.marker_now = (function barado$charts$marker_now(x_scale,now_minute){
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker marker-now", "transform": (function (){var G__22275 = "translate(%f, %f)";
var G__22276 = (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(now_minute) : x_scale.call(null,now_minute));
var G__22277 = (- cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin));
return goog.string.format(G__22275,G__22276,G__22277);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin) + barado.charts.plot_height)})),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": goog.string.format("translate(%f,%f)",(-8),(8))}),cljs.core.array_seq([om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-label"}),cljs.core.array_seq(["Now"], 0)),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-time", "y": (16)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(now_minute))], 0))], 0))], 0));
});
barado.charts.marker_leave = (function barado$charts$marker_leave(x_scale,best_minute){
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker marker-leave", "transform": (function (){var G__22281 = "translate(%f, %f)";
var G__22282 = (x_scale.cljs$core$IFn$_invoke$arity$1 ? x_scale.cljs$core$IFn$_invoke$arity$1(best_minute) : x_scale.call(null,best_minute));
var G__22283 = (- cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin));
return goog.string.format(G__22281,G__22282,G__22283);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (0), "y1": (0), "y2": (cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin) + barado.charts.plot_height)})),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": goog.string.format("translate(%f,%f)",(8),(8))}),cljs.core.array_seq([om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-label"}),cljs.core.array_seq(["Leave"], 0)),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"className": "marker-time", "y": (16)}),cljs.core.array_seq([cljs_time.format.unparse(barado.util.time_formatter,barado.util.minutes__GT_timestamp(best_minute))], 0))], 0))], 0));
});
barado.charts.update_width = (function barado$charts$update_width(this$){
var map__22286 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__22286__$1 = ((((!((map__22286 == null)))?((((map__22286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22286):map__22286);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22286__$1,cljs.core.cst$kw$width);
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
var this__19070__auto__ = this;
React.Component.apply(this__19070__auto__,arguments);

if(!((this__19070__auto__.initLocalState == null))){
this__19070__auto__.state = this__19070__auto__.initLocalState();
} else {
this__19070__auto__.state = {};
}

return this__19070__auto__;
});

barado.charts.SegmentChart.prototype = goog.object.clone(React.Component.prototype);

var x22292_22324 = barado.charts.SegmentChart.prototype;
x22292_22324.componentWillUpdate = ((function (x22292_22324){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
if(((!((this__18924__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18924__auto__.om$next$Ident$)))?true:false):false)){
var ident__18928__auto___22325 = om.next.ident(this__18924__auto__,om.next.props(this__18924__auto__));
var next_ident__18929__auto___22326 = om.next.ident(this__18924__auto__,om.next._next_props(next_props__18925__auto__,this__18924__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18928__auto___22325,next_ident__18929__auto___22326)){
var idxr__18930__auto___22327 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18930__auto___22327 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18930__auto___22327),((function (idxr__18930__auto___22327,ident__18928__auto___22325,next_ident__18929__auto___22326,this__18924__auto__,x22292_22324){
return (function (indexes__18931__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18931__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18928__auto___22325], null),cljs.core.disj,this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18929__auto___22326], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18924__auto__);
});})(idxr__18930__auto___22327,ident__18928__auto___22325,next_ident__18929__auto___22326,this__18924__auto__,x22292_22324))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18924__auto__);

return om.next.merge_pending_state_BANG_(this__18924__auto__);
});})(x22292_22324))
;

x22292_22324.shouldComponentUpdate = ((function (x22292_22324){
return (function (next_props__18925__auto__,next_state__18926__auto__){
var this__18924__auto__ = this;
var next_children__18927__auto__ = next_props__18925__auto__.children;
var next_props__18925__auto____$1 = goog.object.get(next_props__18925__auto__,"omcljs$value");
var next_props__18925__auto____$2 = (function (){var G__22294 = next_props__18925__auto____$1;
if((next_props__18925__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__22294);
} else {
return G__22294;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18924__auto__),next_props__18925__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18924__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22299 = this__18924__auto__.state;
var G__22300 = "omcljs$state";
return goog.object.get(G__22299,G__22300);
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
});})(x22292_22324))
;

x22292_22324.componentDidUpdate = ((function (x22292_22324){
return (function (prev_props__18932__auto__,prev_state__18933__auto__){
var this__18924__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18924__auto__);
});})(x22292_22324))
;

x22292_22324.isMounted = ((function (x22292_22324){
return (function (){
var this__18924__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18924__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22292_22324))
;

x22292_22324.componentWillMount = ((function (x22292_22324){
return (function (){
var this__18924__auto__ = this;
var indexer__18934__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18924__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18934__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__18934__auto__,this__18924__auto__);
}
});})(x22292_22324))
;

x22292_22324.initLocalState = ((function (x22292_22324){
return (function (){
var this$ = this;
var ret__18902__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$resize_DASH_listener,null,cljs.core.cst$kw$width,(940)], null);
var obj22302 = {"omcljs$state":ret__18902__auto__};
return obj22302;
});})(x22292_22324))
;

x22292_22324.componentDidMount = ((function (x22292_22324){
return (function (){
var this$ = this;
barado.charts.update_width(this$);

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$resize_DASH_listener,(function (){var G__22303 = window;
var G__22304 = "resize";
var G__22305 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(barado.charts.update_width,this$);
return goog.events.listen(G__22303,G__22304,G__22305);
})());
});})(x22292_22324))
;

x22292_22324.componentWillUnmount = ((function (x22292_22324){
return (function (){
var this__18918__auto__ = this;
var this$ = this__18918__auto__;
var r__18919__auto__ = om.next.get_reconciler(this__18918__auto__);
var cfg__18920__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__18919__auto__);
var st__18921__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__18920__auto__);
var indexer__18922__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__18920__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__18921__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__18921__auto__) : cljs.core.deref.call(null,st__18921__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__18918__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__18921__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__18918__auto__], 0));
} else {
}

if((indexer__18922__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_(indexer__18922__auto__,this__18918__auto__);
}

var map__22306 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__22306__$1 = ((((!((map__22306 == null)))?((((map__22306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22306):map__22306);
var resize_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22306__$1,cljs.core.cst$kw$resize_DASH_listener);
goog.events.unlistenByKey(resize_listener);

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$resize_DASH_listener,null);
});})(x22292_22324))
;

x22292_22324.render = ((function (x22292_22324){
return (function (){
var this__18923__auto__ = this;
var this$ = this__18923__auto__;
var _STAR_reconciler_STAR_22308 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22309 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22310 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22311 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22312 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__18923__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__18923__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__18923__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__18923__auto__);

om.next._STAR_parent_STAR_ = this__18923__auto__;

try{var map__22313 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__22313__$1 = ((((!((map__22313 == null)))?((((map__22313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22313):map__22313);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22313__$1,cljs.core.cst$kw$data);
var now_minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22313__$1,cljs.core.cst$kw$now_DASH_minute);
var best_minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22313__$1,cljs.core.cst$kw$best_DASH_minute);
var map__22314 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__22314__$1 = ((((!((map__22314 == null)))?((((map__22314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22314):map__22314);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22314__$1,cljs.core.cst$kw$width);
var plot_width = (((width - cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)) - cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(barado.charts.margin)) - barado.charts.y_axis_width);
var x_scale = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(barado.util.scale,(0),barado.charts.max_minutes,(0),cljs.core.array_seq([plot_width], 0));
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.svg.cljs$core$IFn$_invoke$arity$variadic(({"width": width, "height": barado.charts.height}),cljs.core.array_seq([om.dom.defs.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(({"id": "plot-clip"}),cljs.core.array_seq([om.dom.rect(({"height": barado.charts.plot_height, "width": plot_width}))], 0))], 0)),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": (function (){var G__22317 = "translate(%f,%f)";
var G__22318 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(barado.charts.margin);
var G__22319 = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(barado.charts.margin);
return goog.string.format(G__22317,G__22318,G__22319);
})()}),cljs.core.array_seq([om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": goog.string.format("translate(%f,0)",barado.charts.y_axis_width)}),cljs.core.array_seq([barado.charts.plot(data,now_minute,best_minute,plot_width,x_scale),barado.charts.marker_now(x_scale,now_minute),(cljs.core.truth_(best_minute)?barado.charts.marker_leave(x_scale,best_minute):null),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "x-axis", "transform": goog.string.format("translate(0,%f)",barado.charts.plot_height)}),cljs.core.array_seq([barado.charts.axis(x_scale,width)], 0))], 0)),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "y-axis", "transform": goog.string.format("translate(%f,0)",barado.charts.y_axis_width)}),cljs.core.array_seq([om.dom.line(({"className": "y-axis-line", "x1": (0), "x2": (0), "y1": (0), "y2": barado.charts.plot_height})),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__22313,map__22313__$1,data,now_minute,best_minute,map__22314,map__22314__$1,width,plot_width,x_scale,_STAR_reconciler_STAR_22308,_STAR_depth_STAR_22309,_STAR_shared_STAR_22310,_STAR_instrument_STAR_22311,_STAR_parent_STAR_22312,this$,this__18923__auto__,x22292_22324){
return (function (i,r){
var frac = (i / (5));
return om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"key": frac, "className": "tick", "transform": (function (){var G__22320 = "translate(0,%f)";
var G__22321 = (frac * barado.charts.plot_height);
return goog.string.format(G__22320,G__22321);
})()}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (-4)})),om.dom.line(({"className": "grid-line", "x1": (0), "x2": plot_width})),om.dom.text.cljs$core$IFn$_invoke$arity$variadic(({"dx": (-8), "dy": ((barado.charts.plot_height / (5)) / (2))}),cljs.core.array_seq([r], 0))], 0));
});})(map__22313,map__22313__$1,data,now_minute,best_minute,map__22314,map__22314__$1,width,plot_width,x_scale,_STAR_reconciler_STAR_22308,_STAR_depth_STAR_22309,_STAR_shared_STAR_22310,_STAR_instrument_STAR_22311,_STAR_parent_STAR_22312,this$,this__18923__auto__,x22292_22324))
,cljs.core.reverse(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light","Mid-light","Medium","Mid-heavy","Heavy"], null)))),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"className": "tick", "transform": goog.string.format("translate(0,%f)",barado.charts.plot_height)}),cljs.core.array_seq([om.dom.line(({"x1": (0), "x2": (-4)}))], 0))], 0))], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22312;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22311;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22310;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22309;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22308;
}});})(x22292_22324))
;


barado.charts.SegmentChart.prototype.constructor = barado.charts.SegmentChart;

barado.charts.SegmentChart.prototype.constructor.displayName = "barado.charts/SegmentChart";

barado.charts.SegmentChart.prototype.om$isComponent = true;

var x22322_22328 = barado.charts.SegmentChart;


var x22323_22329 = barado.charts.SegmentChart.prototype;


barado.charts.SegmentChart.cljs$lang$type = true;

barado.charts.SegmentChart.cljs$lang$ctorStr = "barado.charts/SegmentChart";

barado.charts.SegmentChart.cljs$lang$ctorPrWriter = (function (this__19073__auto__,writer__19074__auto__,opt__19075__auto__){
return cljs.core._write(writer__19074__auto__,"barado.charts/SegmentChart");
});
barado.charts.segment_chart_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(barado.charts.SegmentChart);
