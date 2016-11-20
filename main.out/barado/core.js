// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.core');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.dom');
goog.require('barado.charts');
goog.require('goog.string');
goog.require('barado.platforms');
goog.require('om.dom');
goog.require('barado.util');
goog.require('barado.stations');
goog.require('cljs.core.async');
goog.require('barado.theme');
goog.require('barado.remotes');
goog.require('goog.events');
goog.require('barado.lines');
goog.require('cljs_time.coerce');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('om.next');
goog.require('cljs_time.format');
goog.require('barado.parser');
barado.core.init_app_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs_time.core.time_now(),cljs.core.cst$kw$system_SLASH_data_DASH_timestamp,null,cljs.core.cst$kw$system_SLASH_active_DASH_popper,null,cljs.core.cst$kw$system_SLASH_time_DASH_threshold,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(barado.util.thresholds,(1)),cljs.core.cst$kw$system_SLASH_lines,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$system_SLASH_platform_DASH_name_DASH_cache,null], null);
barado.core.selector = (function barado$core$selector(this$,lines,line,stations,station,platforms,platform,active_popper){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toolbar", "style": ({"backgroundColor": "rgba(0,0,0,0.05)"})}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container h stack"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "relative"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button toolbar-button transparent"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$line_DASH_pop))?" active":null))].join(''), "onClick": (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$line_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
})}),cljs.core.array_seq(["MRT",om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$line_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card", "onClick": (function (p1__26986_SHARP_){
return p1__26986_SHARP_.stopPropagation();
})}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "menu-item active", "onClick": (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
})}),cljs.core.array_seq(["MRT"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "menu-item disabled gutters h stack"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["LRT"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "badge"}),cljs.core.array_seq(["Coming Soon"], 0))], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "relative grow"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button toolbar-button transparent"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$station_DASH_pop))?" active":null))].join(''), "onClick": (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$station_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
})}),cljs.core.array_seq([(cljs.core.truth_(station)?cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(station):"Loading Stations"),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$station_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card", "onClick": (function (p1__26987_SHARP_){
return p1__26987_SHARP_.stopPropagation();
})}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__26997){
var map__26998 = p__26997;
var map__26998__$1 = ((((!((map__26998 == null)))?((((map__26998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26998):map__26998);
var s = map__26998__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26998__$1,cljs.core.cst$kw$station_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26998__$1,cljs.core.cst$kw$station_SLASH_label);
var platforms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26998__$1,cljs.core.cst$kw$station_SLASH_platforms);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": id, "className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$station_SLASH_id.cljs$core$IFn$_invoke$arity$1(station)))?" active":null))].join(''), "onClick": ((function (map__26998,map__26998__$1,s,id,label,platforms__$1){
return (function (){
var map__27000 = om.next.get_params(this$);
var map__27000__$1 = ((((!((map__27000 == null)))?((((map__27000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27000):map__27000);
var platform_name_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27000__$1,cljs.core.cst$kw$platform_DASH_name_DASH_cache);
om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (map__27000,map__27000__$1,platform_name_cache,map__26998,map__26998__$1,s,id,label,platforms__$1){
return (function (q){
return cljs.core.assoc_in(cljs.core.assoc_in(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$station], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform], null),cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__27000,map__27000__$1,platform_name_cache,map__26998,map__26998__$1,s,id,label,platforms__$1){
return (function (p1__26988_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(platform_name_cache,cljs.core.cst$kw$platform_SLASH_label.cljs$core$IFn$_invoke$arity$1(p1__26988_SHARP_));
});})(map__27000,map__27000__$1,platform_name_cache,map__26998,map__26998__$1,s,id,label,platforms__$1))
,platforms__$1));
if(temp__6751__auto__){
var ps = temp__6751__auto__;
return cljs.core.first(ps);
} else {
return cljs.core.first(platforms__$1);
}
})()));
});})(map__27000,map__27000__$1,platform_name_cache,map__26998,map__26998__$1,s,id,label,platforms__$1))
);

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
});})(map__26998,map__26998__$1,s,id,label,platforms__$1))
}),cljs.core.array_seq([label], 0));
}),stations)], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "h stack center"}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__27002){
var map__27003 = p__27002;
var map__27003__$1 = ((((!((map__27003 == null)))?((((map__27003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27003):map__27003);
var p = map__27003__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003__$1,cljs.core.cst$kw$platform_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003__$1,cljs.core.cst$kw$platform_SLASH_label);
return om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1(platform),id))?" accented":" transparent"))].join(''), "key": id, "onClick": ((function (map__27003,map__27003__$1,p,id,label){
return (function (){
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (map__27003,map__27003__$1,p,id,label){
return (function (q){
return cljs.core.assoc_in(cljs.core.assoc_in(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform_DASH_name_DASH_cache], null),label);
});})(map__27003,map__27003__$1,p,id,label))
);
});})(map__27003,map__27003__$1,p,id,label))
}),cljs.core.array_seq([(cljs.core.truth_(barado.util.mobile_QMARK_)?cljs.core.first(label):label)], 0));
}),platforms)], 0))], 0))], 0));
});
barado.core.main_loading = (function barado$core$main_loading(){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container v stack center gutters"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "relative"}),cljs.core.array_seq([om.dom.svg.cljs$core$IFn$_invoke$arity$variadic(({"id": "soultrain", "stroke": barado.theme.accent, "fill": "white", "strokeLinecap": "round", "strokeLinejoin": "round", "viewBox": "0 0 24 32", "width": (72), "height": (96)}),cljs.core.array_seq([om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"transform": "translate(0,8)"}),cljs.core.array_seq([om.dom.circle(({"id": "smoke-puff-1", "className": "puff", "cx": 5.5, "cy": (4), "r": (1)})),om.dom.circle(({"id": "smoke-puff-2", "className": "puff", "cx": 5.5, "cy": (4), "r": (1)})),om.dom.g.cljs$core$IFn$_invoke$arity$variadic(({"id": "locomotive"}),cljs.core.array_seq([om.dom.path(({"d": "M11.5 4.5h12m-11 0v6H3c-1.5 0-1.5 7 0 7m18.5-13v7h2v6m-20-11h4m7 0h5v3h-5zm-6.283 11h2.547m3.469 0h2.547m3.437 0H23.5m-19-11v4m2-4v4"})),om.dom.path(({"d": "M.614 19L2.5 17.5h2.28"}))], 0)),om.dom.circle(({"id": "wheel-1", "className": "wheel", "cx": 6.5, "cy": 18.5, "r": (2)})),om.dom.circle(({"id": "wheel-2", "className": "wheel", "cx": 12.5, "cy": 18.5, "r": (2)})),om.dom.circle(({"id": "wheel-3", "className": "wheel", "cx": 18.5, "cy": 18.5, "r": (2)}))], 0))], 0))], 0)),om.dom.h3.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"margin": (0), "color": barado.theme.accent})}),cljs.core.array_seq(["LOADING"], 0))], 0));
});
/**
 * @constructor
 */
barado.core.App = (function barado$core$App(){
var this__19647__auto__ = this;
React.Component.apply(this__19647__auto__,arguments);

if(!((this__19647__auto__.initLocalState == null))){
this__19647__auto__.state = this__19647__auto__.initLocalState();
} else {
this__19647__auto__.state = {};
}

return this__19647__auto__;
});

barado.core.App.prototype = goog.object.clone(React.Component.prototype);

var x27009_27135 = barado.core.App.prototype;
x27009_27135.componentWillUpdate = ((function (x27009_27135){
return (function (next_props__19502__auto__,next_state__19503__auto__){
var this__19501__auto__ = this;
if(((!((this__19501__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19501__auto__.om$next$Ident$)))?true:false):false)){
var ident__19505__auto___27136 = om.next.ident(this__19501__auto__,om.next.props(this__19501__auto__));
var next_ident__19506__auto___27137 = om.next.ident(this__19501__auto__,om.next._next_props(next_props__19502__auto__,this__19501__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19505__auto___27136,next_ident__19506__auto___27137)){
var idxr__19507__auto___27138 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19507__auto___27138 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19507__auto___27138),((function (idxr__19507__auto___27138,ident__19505__auto___27136,next_ident__19506__auto___27137,this__19501__auto__,x27009_27135){
return (function (indexes__19508__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19505__auto___27136], null),cljs.core.disj,this__19501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19506__auto___27137], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19501__auto__);
});})(idxr__19507__auto___27138,ident__19505__auto___27136,next_ident__19506__auto___27137,this__19501__auto__,x27009_27135))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19501__auto__);

return om.next.merge_pending_state_BANG_(this__19501__auto__);
});})(x27009_27135))
;

x27009_27135.shouldComponentUpdate = ((function (x27009_27135){
return (function (next_props__19502__auto__,next_state__19503__auto__){
var this__19501__auto__ = this;
var next_children__19504__auto__ = next_props__19502__auto__.children;
var next_props__19502__auto____$1 = goog.object.get(next_props__19502__auto__,"omcljs$value");
var next_props__19502__auto____$2 = (function (){var G__27011 = next_props__19502__auto____$1;
if((next_props__19502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__27011);
} else {
return G__27011;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19501__auto__),next_props__19502__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19501__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__27016 = this__19501__auto__.state;
var G__27017 = "omcljs$state";
return goog.object.get(G__27016,G__27017);
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
});})(x27009_27135))
;

x27009_27135.componentDidUpdate = ((function (x27009_27135){
return (function (prev_props__19509__auto__,prev_state__19510__auto__){
var this__19501__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19501__auto__);
});})(x27009_27135))
;

x27009_27135.isMounted = ((function (x27009_27135){
return (function (){
var this__19501__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27009_27135))
;

x27009_27135.initLocalState = ((function (x27009_27135){
return (function (){
var this$ = this;
var ret__19479__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$kill_DASH_chan,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$clickout,null], null);
var obj27019 = {"omcljs$state":ret__19479__auto__};
return obj27019;
});})(x27009_27135))
;

x27009_27135.componentWillMount = ((function (x27009_27135){
return (function (){
var this__19493__auto__ = this;
var this$ = this__19493__auto__;
var indexer__19494__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19493__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19494__auto__ == null)){
} else {
om.next.protocols.index_component_BANG_(indexer__19494__auto__,this__19493__auto__);
}

var map__27020 = om.next.props(this$);
var map__27020__$1 = ((((!((map__27020 == null)))?((((map__27020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27020):map__27020);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27020__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var map__27021 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27021__$1 = ((((!((map__27021 == null)))?((((map__27021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27021):map__27021);
var kill_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27021__$1,cljs.core.cst$kw$kill_DASH_chan);
var init_second_offset = ((60) - cljs_time.core.second(current_time));
om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clickout,(function (){var G__27024 = window;
var G__27025 = "click";
var G__27026 = ((function (G__27024,G__27025,map__27020,map__27020__$1,current_time,map__27021,map__27021__$1,kill_chan,init_second_offset,this$,indexer__19494__auto__,this__19493__auto__,x27009_27135){
return (function (ev){
var map__27027 = om.next.props(this$);
var map__27027__$1 = ((((!((map__27027 == null)))?((((map__27027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27027):map__27027);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27027__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
if(cljs.core.truth_(active_popper)){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
} else {
return null;
}
});})(G__27024,G__27025,map__27020,map__27020__$1,current_time,map__27021,map__27021__$1,kill_chan,init_second_offset,this$,indexer__19494__auto__,this__19493__auto__,x27009_27135))
;
return goog.events.listen(G__27024,G__27025,G__27026);
})()], null));

var c__23983__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto__,map__27020,map__27020__$1,current_time,map__27021,map__27021__$1,kill_chan,init_second_offset,this$,indexer__19494__auto__,this__19493__auto__,x27009_27135){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto__,map__27020,map__27020__$1,current_time,map__27021,map__27021__$1,kill_chan,init_second_offset,this$,indexer__19494__auto__,this__19493__auto__,x27009_27135){
return (function (state_27094){
var state_val_27095 = (state_27094[(1)]);
if((state_val_27095 === (7))){
var inst_27061 = (state_27094[(7)]);
var inst_27054 = (state_27094[(8)]);
var inst_27065 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27061,inst_27054);
var state_27094__$1 = state_27094;
if(inst_27065){
var statearr_27096_27139 = state_27094__$1;
(statearr_27096_27139[(1)] = (9));

} else {
var statearr_27097_27140 = state_27094__$1;
(statearr_27097_27140[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (1))){
var inst_27029 = ((1000) * init_second_offset);
var inst_27030 = cljs.core.async.timeout(inst_27029);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27094__$1,(2),inst_27030);
} else {
if((state_val_27095 === (4))){
var inst_27092 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27094__$1,inst_27092);
} else {
if((state_val_27095 === (13))){
var state_27094__$1 = state_27094;
var statearr_27098_27141 = state_27094__$1;
(statearr_27098_27141[(2)] = null);

(statearr_27098_27141[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (6))){
var state_27094__$1 = state_27094;
var statearr_27099_27142 = state_27094__$1;
(statearr_27099_27142[(2)] = null);

(statearr_27099_27142[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (3))){
var inst_27054 = (state_27094[(8)]);
var inst_27054__$1 = cljs.core.async.timeout((60000));
var inst_27055 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27056 = [kill_chan,inst_27054__$1];
var inst_27057 = (new cljs.core.PersistentVector(null,2,(5),inst_27055,inst_27056,null));
var state_27094__$1 = (function (){var statearr_27100 = state_27094;
(statearr_27100[(8)] = inst_27054__$1);

return statearr_27100;
})();
return cljs.core.async.ioc_alts_BANG_(state_27094__$1,(5),inst_27057);
} else {
if((state_val_27095 === (12))){
var inst_27060 = (state_27094[(9)]);
var state_27094__$1 = state_27094;
var statearr_27101_27143 = state_27094__$1;
(statearr_27101_27143[(2)] = inst_27060);

(statearr_27101_27143[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (2))){
var inst_27032 = (state_27094[(2)]);
var inst_27033 = cljs.core.List.EMPTY;
var inst_27034 = cljs.core.cst$sym$time_SLASH_refresh;
var inst_27035 = cljs.core._conj(inst_27033,inst_27034);
var inst_27036 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27035);
var inst_27037 = cljs.core.seq(inst_27036);
var inst_27038 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27037);
var inst_27039 = cljs.core.List.EMPTY;
var inst_27040 = cljs.core._conj(inst_27039,inst_27038);
var inst_27041 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27040);
var inst_27042 = cljs.core.seq(inst_27041);
var inst_27043 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27042);
var inst_27044 = cljs.core.vec(inst_27043);
var inst_27045 = om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,inst_27044);
var state_27094__$1 = (function (){var statearr_27102 = state_27094;
(statearr_27102[(10)] = inst_27032);

(statearr_27102[(11)] = inst_27045);

return statearr_27102;
})();
var statearr_27103_27144 = state_27094__$1;
(statearr_27103_27144[(2)] = null);

(statearr_27103_27144[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (11))){
var inst_27088 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27104_27145 = state_27094__$1;
(statearr_27104_27145[(2)] = inst_27088);

(statearr_27104_27145[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (9))){
var inst_27067 = cljs.core.List.EMPTY;
var inst_27068 = cljs.core.cst$sym$time_SLASH_refresh;
var inst_27069 = cljs.core._conj(inst_27067,inst_27068);
var inst_27070 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27069);
var inst_27071 = cljs.core.seq(inst_27070);
var inst_27072 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27071);
var inst_27073 = cljs.core.List.EMPTY;
var inst_27074 = cljs.core._conj(inst_27073,inst_27072);
var inst_27075 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27074);
var inst_27076 = cljs.core.seq(inst_27075);
var inst_27077 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27076);
var inst_27078 = cljs.core.vec(inst_27077);
var inst_27079 = om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,inst_27078);
var state_27094__$1 = (function (){var statearr_27105 = state_27094;
(statearr_27105[(12)] = inst_27079);

return statearr_27105;
})();
var statearr_27106_27146 = state_27094__$1;
(statearr_27106_27146[(2)] = null);

(statearr_27106_27146[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (5))){
var inst_27061 = (state_27094[(7)]);
var inst_27059 = (state_27094[(2)]);
var inst_27060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27059,(0),null);
var inst_27061__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27059,(1),null);
var inst_27062 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27061__$1,kill_chan);
var state_27094__$1 = (function (){var statearr_27107 = state_27094;
(statearr_27107[(7)] = inst_27061__$1);

(statearr_27107[(9)] = inst_27060);

return statearr_27107;
})();
if(inst_27062){
var statearr_27108_27147 = state_27094__$1;
(statearr_27108_27147[(1)] = (6));

} else {
var statearr_27109_27148 = state_27094__$1;
(statearr_27109_27148[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (14))){
var inst_27086 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27110_27149 = state_27094__$1;
(statearr_27110_27149[(2)] = inst_27086);

(statearr_27110_27149[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (10))){
var inst_27061 = (state_27094[(7)]);
var inst_27082 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27061,cljs.core.cst$kw$default);
var state_27094__$1 = state_27094;
if(inst_27082){
var statearr_27111_27150 = state_27094__$1;
(statearr_27111_27150[(1)] = (12));

} else {
var statearr_27112_27151 = state_27094__$1;
(statearr_27112_27151[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27095 === (8))){
var inst_27090 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27113_27152 = state_27094__$1;
(statearr_27113_27152[(2)] = inst_27090);

(statearr_27113_27152[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23983__auto__,map__27020,map__27020__$1,current_time,map__27021,map__27021__$1,kill_chan,init_second_offset,this$,indexer__19494__auto__,this__19493__auto__,x27009_27135))
;
return ((function (switch__23857__auto__,c__23983__auto__,map__27020,map__27020__$1,current_time,map__27021,map__27021__$1,kill_chan,init_second_offset,this$,indexer__19494__auto__,this__19493__auto__,x27009_27135){
return (function() {
var barado$core$state_machine__23858__auto__ = null;
var barado$core$state_machine__23858__auto____0 = (function (){
var statearr_27117 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27117[(0)] = barado$core$state_machine__23858__auto__);

(statearr_27117[(1)] = (1));

return statearr_27117;
});
var barado$core$state_machine__23858__auto____1 = (function (state_27094){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_27094);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e27118){if((e27118 instanceof Object)){
var ex__23861__auto__ = e27118;
var statearr_27119_27153 = state_27094;
(statearr_27119_27153[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27094);

return cljs.core.cst$kw$recur;
} else {
throw e27118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__27154 = state_27094;
state_27094 = G__27154;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
barado$core$state_machine__23858__auto__ = function(state_27094){
switch(arguments.length){
case 0:
return barado$core$state_machine__23858__auto____0.call(this);
case 1:
return barado$core$state_machine__23858__auto____1.call(this,state_27094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
barado$core$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = barado$core$state_machine__23858__auto____0;
barado$core$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = barado$core$state_machine__23858__auto____1;
return barado$core$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto__,map__27020,map__27020__$1,current_time,map__27021,map__27021__$1,kill_chan,init_second_offset,this$,indexer__19494__auto__,this__19493__auto__,x27009_27135))
})();
var state__23985__auto__ = (function (){var statearr_27120 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_27120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto__);

return statearr_27120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto__,map__27020,map__27020__$1,current_time,map__27021,map__27021__$1,kill_chan,init_second_offset,this$,indexer__19494__auto__,this__19493__auto__,x27009_27135))
);

return c__23983__auto__;
});})(x27009_27135))
;

x27009_27135.componentWillUnmount = ((function (x27009_27135){
return (function (){
var this__19495__auto__ = this;
var this$ = this__19495__auto__;
var r__19496__auto__ = om.next.get_reconciler(this__19495__auto__);
var cfg__19497__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__19496__auto__);
var st__19498__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__19497__auto__);
var indexer__19499__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__19497__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__19498__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__19498__auto__) : cljs.core.deref.call(null,st__19498__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__19495__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__19498__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__19495__auto__], 0));
} else {
}

if((indexer__19499__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_(indexer__19499__auto__,this__19495__auto__);
}

var map__27121 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27121__$1 = ((((!((map__27121 == null)))?((((map__27121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27121):map__27121);
var kill_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,cljs.core.cst$kw$kill_DASH_chan);
var clickout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,cljs.core.cst$kw$clickout);
goog.events.unlistenByKey(clickout);

om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clickout,null], null));

if(cljs.core.truth_(kill_chan)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(kill_chan,cljs.core.cst$kw$kill);

return cljs.core.async.close_BANG_(kill_chan);
} else {
return null;
}
});})(x27009_27135))
;

x27009_27135.render = ((function (x27009_27135){
return (function (){
var this__19500__auto__ = this;
var this$ = this__19500__auto__;
var _STAR_reconciler_STAR_27123 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27124 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27125 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27126 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27127 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__19500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__19500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__19500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__19500__auto__);

om.next._STAR_parent_STAR_ = this__19500__auto__;

try{var map__27128 = om.next.props(this$);
var map__27128__$1 = ((((!((map__27128 == null)))?((((map__27128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27128):map__27128);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$station_SLASH_matches);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$system_SLASH_lines);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$current_SLASH_line);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$current_SLASH_test);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$current_SLASH_platform);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.cst$kw$current_SLASH_station);
var stations = cljs.core.cst$kw$line_SLASH_stations.cljs$core$IFn$_invoke$arity$1(line);
var platforms = cljs.core.cst$kw$station_SLASH_platforms.cljs$core$IFn$_invoke$arity$1(station);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stacked guttered"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toolbar toolbar-main"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container pad h stack center"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "grow"}),cljs.core.array_seq(["Traincheck",om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"id": "beta", "className": "badge", "style": ({"marginLeft": "6px"})}),cljs.core.array_seq(["beta"], 0))], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "semi-transparent", "style": ({"marginRight": "6px"})}),cljs.core.array_seq(["A product of"], 0)),om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "https://sakay.ph"}),cljs.core.array_seq(["Sakay.ph"], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack gutters-lrg", "style": ({"marginBottom": "32px"})}),cljs.core.array_seq([barado.core.selector(this$,lines,line,stations,station,platforms,platform,active_popper),((cljs.core.not(platform))?barado.core.main_loading():om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container v stack center gutters"}),cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(({"id": "station-label"}),cljs.core.array_seq([cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(station)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "h stack center"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("stack center gutters"),cljs.core.str((cljs.core.truth_(barado.util.mobile_QMARK_)?" v":" h"))].join('')}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "semi-transparent"}),cljs.core.array_seq(["Willing to wait for:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "button-group h stack"}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27128,map__27128__$1,matches,lines,line,time_threshold,test,active_popper,data_timestamp,current_time,platform,station,stations,platforms,_STAR_reconciler_STAR_27123,_STAR_depth_STAR_27124,_STAR_shared_STAR_27125,_STAR_instrument_STAR_27126,_STAR_parent_STAR_27127,this$,this__19500__auto__,x27009_27135){
return (function (p__27130){
var map__27131 = p__27130;
var map__27131__$1 = ((((!((map__27131 == null)))?((((map__27131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27131):map__27131);
var threshold = map__27131__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27131__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27131__$1,cljs.core.cst$kw$label);
return om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"key": value, "className": [cljs.core.str("button"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(time_threshold),value))?" accented":" transparent"))].join(''), "onClick": ((function (map__27131,map__27131__$1,threshold,value,label,map__27128,map__27128__$1,matches,lines,line,time_threshold,test,active_popper,data_timestamp,current_time,platform,station,stations,platforms,_STAR_reconciler_STAR_27123,_STAR_depth_STAR_27124,_STAR_shared_STAR_27125,_STAR_instrument_STAR_27126,_STAR_parent_STAR_27127,this$,this__19500__auto__,x27009_27135){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$threshold_SLASH_set),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$threshold,threshold], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_time_DASH_threshold))))));
});})(map__27131,map__27131__$1,threshold,value,label,map__27128,map__27128__$1,matches,lines,line,time_threshold,test,active_popper,data_timestamp,current_time,platform,station,stations,platforms,_STAR_reconciler_STAR_27123,_STAR_depth_STAR_27124,_STAR_shared_STAR_27125,_STAR_instrument_STAR_27126,_STAR_parent_STAR_27127,this$,this__19500__auto__,x27009_27135))
}),cljs.core.array_seq([label], 0));
});})(map__27128,map__27128__$1,matches,lines,line,time_threshold,test,active_popper,data_timestamp,current_time,platform,station,stations,platforms,_STAR_reconciler_STAR_27123,_STAR_depth_STAR_27124,_STAR_shared_STAR_27125,_STAR_instrument_STAR_27126,_STAR_parent_STAR_27127,this$,this__19500__auto__,x27009_27135))
,barado.util.thresholds)], 0))], 0))], 0)),(cljs.core.truth_(cljs.core.cst$kw$platform_SLASH_data.cljs$core$IFn$_invoke$arity$1(platform))?(barado.platforms.platform_view.cljs$core$IFn$_invoke$arity$1 ? barado.platforms.platform_view.cljs$core$IFn$_invoke$arity$1(platform) : barado.platforms.platform_view.call(null,platform)):(((data_timestamp == null))?barado.core.main_loading():om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container v stack center"}),cljs.core.array_seq([om.dom.h2.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Data Unavailable"], 0))], 0))
))], 0)))], 0)),om.dom.footer.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container"}),cljs.core.array_seq(["Hello footer derp"], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27127;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27126;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27125;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27124;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27123;
}});})(x27009_27135))
;


barado.core.App.prototype.constructor = barado.core.App;

barado.core.App.prototype.constructor.displayName = "barado.core/App";

barado.core.App.prototype.om$isComponent = true;

var x27133_27155 = barado.core.App;
/** @nocollapse */
x27133_27155.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x27133_27155.om$next$IQueryParams$params$arity$1 = ((function (x27133_27155){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$station,null,cljs.core.cst$kw$platform,null,cljs.core.cst$kw$platform_DASH_name_DASH_cache,"South"], null);
});})(x27133_27155))
;

/** @nocollapse */
x27133_27155.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x27133_27155.om$next$IQuery$query$arity$1 = ((function (x27133_27155){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_current_DASH_time),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_time_DASH_threshold),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp),(function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_lines),(function (){var x__8452__auto__ = om.next.get_query(barado.lines.Line);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$current_SLASH_line),(function (){var x__8452__auto__ = om.next.get_query(barado.lines.Line);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line,cljs.core.cst$sym$_QMARK_line], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$current_SLASH_station),(function (){var x__8452__auto__ = om.next.get_query(barado.stations.Station);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station,cljs.core.cst$sym$_QMARK_station], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$current_SLASH_platform),(function (){var x__8452__auto__ = om.next.get_query(barado.platforms.Platform);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$platform,cljs.core.cst$sym$_QMARK_platform], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
});})(x27133_27155))
;


var x27134_27156 = barado.core.App.prototype;

x27134_27156.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;


x27134_27156.om$next$IQueryParams$params$arity$1 = ((function (x27134_27156){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$station,null,cljs.core.cst$kw$platform,null,cljs.core.cst$kw$platform_DASH_name_DASH_cache,"South"], null);
});})(x27134_27156))
;


x27134_27156.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x27134_27156.om$next$IQuery$query$arity$1 = ((function (x27134_27156){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_current_DASH_time),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_time_DASH_threshold),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp),(function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_lines),(function (){var x__8452__auto__ = om.next.get_query(barado.lines.Line);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$current_SLASH_line),(function (){var x__8452__auto__ = om.next.get_query(barado.lines.Line);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line,cljs.core.cst$sym$_QMARK_line], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$current_SLASH_station),(function (){var x__8452__auto__ = om.next.get_query(barado.stations.Station);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$station,cljs.core.cst$sym$_QMARK_station], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$current_SLASH_platform),(function (){var x__8452__auto__ = om.next.get_query(barado.platforms.Platform);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$platform,cljs.core.cst$sym$_QMARK_platform], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
});})(x27134_27156))
;


barado.core.App.cljs$lang$type = true;

barado.core.App.cljs$lang$ctorStr = "barado.core/App";

barado.core.App.cljs$lang$ctorPrWriter = (function (this__19650__auto__,writer__19651__auto__,opt__19652__auto__){
return cljs.core._write(writer__19651__auto__,"barado.core/App");
});
barado.core.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,barado.parser.read,cljs.core.cst$kw$mutate,barado.parser.mutate], null));
barado.core.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$parser,barado.core.parser,cljs.core.cst$kw$state,barado.core.init_app_state,cljs.core.cst$kw$send,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(barado.remotes.send,(function (){
return barado.core.reconciler;
})),cljs.core.cst$kw$merge,barado.remotes.incorp,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lines,cljs.core.cst$kw$line_DASH_data], null)], null));
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(barado.core.reconciler,barado.core.App,goog.dom.getElement("app"));
