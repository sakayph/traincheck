// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.core');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.dom');
goog.require('barado.footer');
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
barado.core.query_statement = (function barado$core$query_statement(this$){
var map__27159 = om.next.props(this$);
var map__27159__$1 = ((((!((map__27159 == null)))?((((map__27159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27159):map__27159);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$system_SLASH_lines);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$current_SLASH_line);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$current_SLASH_station);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$current_SLASH_platform);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,cljs.core.cst$kw$station_SLASH_matches);
var stations = cljs.core.cst$kw$line_SLASH_stations.cljs$core$IFn$_invoke$arity$1(line);
var platforms = cljs.core.cst$kw$station_SLASH_platforms.cljs$core$IFn$_invoke$arity$1(station);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "query-statement", "className": "statement"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container"}),cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["I'm taking the"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$line_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$line_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq(["MRT",om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$line_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card", "onClick": ((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__27143_SHARP_){
return p1__27143_SHARP_.stopPropagation();
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "menu-item active", "onClick": ((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq(["MRT"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "menu-item disabled gutters h stack"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["LRT"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "badge"}),cljs.core.array_seq(["Coming Soon"], 0))], 0))], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["at"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$station_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$station_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([(cljs.core.truth_(station)?cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(station):"Loading Stations"),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$station_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card", "onClick": ((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__27144_SHARP_){
return p1__27144_SHARP_.stopPropagation();
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27161){
var map__27162 = p__27161;
var map__27162__$1 = ((((!((map__27162 == null)))?((((map__27162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27162):map__27162);
var s = map__27162__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27162__$1,cljs.core.cst$kw$station_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27162__$1,cljs.core.cst$kw$station_SLASH_label);
var platforms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27162__$1,cljs.core.cst$kw$station_SLASH_platforms);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": id, "className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$station_SLASH_id.cljs$core$IFn$_invoke$arity$1(station)))?" active":null))].join(''), "onClick": ((function (map__27162,map__27162__$1,s,id,label,platforms__$1,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
var map__27164 = om.next.get_params(this$);
var map__27164__$1 = ((((!((map__27164 == null)))?((((map__27164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27164):map__27164);
var platform_name_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27164__$1,cljs.core.cst$kw$platform_DASH_name_DASH_cache);
om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (map__27164,map__27164__$1,platform_name_cache,map__27162,map__27162__$1,s,id,label,platforms__$1,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (q){
return cljs.core.assoc_in(cljs.core.assoc_in(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$station], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform], null),cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__27164,map__27164__$1,platform_name_cache,map__27162,map__27162__$1,s,id,label,platforms__$1,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__27145_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(platform_name_cache,cljs.core.cst$kw$platform_SLASH_label.cljs$core$IFn$_invoke$arity$1(p1__27145_SHARP_));
});})(map__27164,map__27164__$1,platform_name_cache,map__27162,map__27162__$1,s,id,label,platforms__$1,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,platforms__$1));
if(temp__6751__auto__){
var ps = temp__6751__auto__;
return cljs.core.first(ps);
} else {
return cljs.core.first(platforms__$1);
}
})()));
});})(map__27164,map__27164__$1,platform_name_cache,map__27162,map__27162__$1,s,id,label,platforms__$1,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
);

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
});})(map__27162,map__27162__$1,s,id,label,platforms__$1,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,stations)], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["heading"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$dir_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$dir_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([(cljs.core.truth_(platform)?cljs.core.cst$kw$platform_SLASH_label.cljs$core$IFn$_invoke$arity$1(platform):"Loading Platforms"),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$dir_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card"}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27166){
var map__27167 = p__27166;
var map__27167__$1 = ((((!((map__27167 == null)))?((((map__27167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27167):map__27167);
var p = map__27167__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27167__$1,cljs.core.cst$kw$platform_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27167__$1,cljs.core.cst$kw$platform_SLASH_label);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1(platform)))?" active":null))].join(''), "key": id, "onClick": ((function (map__27167,map__27167__$1,p,id,label,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (map__27167,map__27167__$1,p,id,label,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (q){
return cljs.core.assoc_in(cljs.core.assoc_in(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform_DASH_name_DASH_cache], null),label);
});})(map__27167,map__27167__$1,p,id,label,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
);
});})(map__27167,map__27167__$1,p,id,label,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,platforms)], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["and I'm willing to wait for"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$wait_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$wait_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(time_threshold),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$wait_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card"}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27169){
var map__27170 = p__27169;
var map__27170__$1 = ((((!((map__27170 == null)))?((((map__27170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27170):map__27170);
var threshold = map__27170__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$label);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": value, "className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(time_threshold),value))?" active":null))].join(''), "onClick": ((function (map__27170,map__27170__$1,threshold,value,label,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$threshold_SLASH_set),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$threshold,threshold], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_time_DASH_threshold))))));
});})(map__27170,map__27170__$1,threshold,value,label,map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27159,map__27159__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,barado.util.thresholds)], 0)):null)], 0))], 0))], 0));
});
/**
 * @constructor
 */
barado.core.App = (function barado$core$App(){
var this__18711__auto__ = this;
React.Component.apply(this__18711__auto__,arguments);

if(!((this__18711__auto__.initLocalState == null))){
this__18711__auto__.state = this__18711__auto__.initLocalState();
} else {
this__18711__auto__.state = {};
}

return this__18711__auto__;
});

barado.core.App.prototype = goog.object.clone(React.Component.prototype);

var x27176_27299 = barado.core.App.prototype;
x27176_27299.componentWillUpdate = ((function (x27176_27299){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
if(((!((this__18565__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18565__auto__.om$next$Ident$)))?true:false):false)){
var ident__18569__auto___27300 = om.next.ident(this__18565__auto__,om.next.props(this__18565__auto__));
var next_ident__18570__auto___27301 = om.next.ident(this__18565__auto__,om.next._next_props(next_props__18566__auto__,this__18565__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18569__auto___27300,next_ident__18570__auto___27301)){
var idxr__18571__auto___27302 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18571__auto___27302 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18571__auto___27302),((function (idxr__18571__auto___27302,ident__18569__auto___27300,next_ident__18570__auto___27301,this__18565__auto__,x27176_27299){
return (function (indexes__18572__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18572__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18569__auto___27300], null),cljs.core.disj,this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18570__auto___27301], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18565__auto__);
});})(idxr__18571__auto___27302,ident__18569__auto___27300,next_ident__18570__auto___27301,this__18565__auto__,x27176_27299))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18565__auto__);

return om.next.merge_pending_state_BANG_(this__18565__auto__);
});})(x27176_27299))
;

x27176_27299.shouldComponentUpdate = ((function (x27176_27299){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
var next_children__18568__auto__ = next_props__18566__auto__.children;
var next_props__18566__auto____$1 = goog.object.get(next_props__18566__auto__,"omcljs$value");
var next_props__18566__auto____$2 = (function (){var G__27178 = next_props__18566__auto____$1;
if((next_props__18566__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__27178);
} else {
return G__27178;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18565__auto__),next_props__18566__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18565__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__27183 = this__18565__auto__.state;
var G__27184 = "omcljs$state";
return goog.object.get(G__27183,G__27184);
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
});})(x27176_27299))
;

x27176_27299.componentDidUpdate = ((function (x27176_27299){
return (function (prev_props__18573__auto__,prev_state__18574__auto__){
var this__18565__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18565__auto__);
});})(x27176_27299))
;

x27176_27299.isMounted = ((function (x27176_27299){
return (function (){
var this__18565__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18565__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27176_27299))
;

x27176_27299.initLocalState = ((function (x27176_27299){
return (function (){
var this$ = this;
var ret__18543__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$kill_DASH_chan,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$clickout,null], null);
var obj27186 = {"omcljs$state":ret__18543__auto__};
return obj27186;
});})(x27176_27299))
;

x27176_27299.componentWillMount = ((function (x27176_27299){
return (function (){
var this__18557__auto__ = this;
var this$ = this__18557__auto__;
var indexer__18558__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18557__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18558__auto__ == null)){
} else {
om.next.protocols.index_component_BANG_(indexer__18558__auto__,this__18557__auto__);
}

var map__27187 = om.next.props(this$);
var map__27187__$1 = ((((!((map__27187 == null)))?((((map__27187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27187):map__27187);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27187__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var map__27188 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27188__$1 = ((((!((map__27188 == null)))?((((map__27188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27188):map__27188);
var kill_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27188__$1,cljs.core.cst$kw$kill_DASH_chan);
var init_second_offset = ((60) - cljs_time.core.second(current_time));
om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clickout,(function (){var G__27191 = window;
var G__27192 = "click";
var G__27193 = ((function (G__27191,G__27192,map__27187,map__27187__$1,current_time,map__27188,map__27188__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27176_27299){
return (function (ev){
var map__27194 = om.next.props(this$);
var map__27194__$1 = ((((!((map__27194 == null)))?((((map__27194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27194):map__27194);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27194__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
if(cljs.core.truth_(active_popper)){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
} else {
return null;
}
});})(G__27191,G__27192,map__27187,map__27187__$1,current_time,map__27188,map__27188__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27176_27299))
;
return goog.events.listen(G__27191,G__27192,G__27193);
})()], null));

var c__24111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto__,map__27187,map__27187__$1,current_time,map__27188,map__27188__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27176_27299){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto__,map__27187,map__27187__$1,current_time,map__27188,map__27188__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27176_27299){
return (function (state_27261){
var state_val_27262 = (state_27261[(1)]);
if((state_val_27262 === (7))){
var inst_27221 = (state_27261[(7)]);
var inst_27228 = (state_27261[(8)]);
var inst_27232 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27228,inst_27221);
var state_27261__$1 = state_27261;
if(inst_27232){
var statearr_27263_27303 = state_27261__$1;
(statearr_27263_27303[(1)] = (9));

} else {
var statearr_27264_27304 = state_27261__$1;
(statearr_27264_27304[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (1))){
var inst_27196 = ((1000) * init_second_offset);
var inst_27197 = cljs.core.async.timeout(inst_27196);
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27261__$1,(2),inst_27197);
} else {
if((state_val_27262 === (4))){
var inst_27259 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27261__$1,inst_27259);
} else {
if((state_val_27262 === (13))){
var state_27261__$1 = state_27261;
var statearr_27265_27305 = state_27261__$1;
(statearr_27265_27305[(2)] = null);

(statearr_27265_27305[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (6))){
var state_27261__$1 = state_27261;
var statearr_27266_27306 = state_27261__$1;
(statearr_27266_27306[(2)] = null);

(statearr_27266_27306[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (3))){
var inst_27221 = (state_27261[(7)]);
var inst_27221__$1 = cljs.core.async.timeout((60000));
var inst_27222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27223 = [kill_chan,inst_27221__$1];
var inst_27224 = (new cljs.core.PersistentVector(null,2,(5),inst_27222,inst_27223,null));
var state_27261__$1 = (function (){var statearr_27267 = state_27261;
(statearr_27267[(7)] = inst_27221__$1);

return statearr_27267;
})();
return cljs.core.async.ioc_alts_BANG_(state_27261__$1,(5),inst_27224);
} else {
if((state_val_27262 === (12))){
var inst_27227 = (state_27261[(9)]);
var state_27261__$1 = state_27261;
var statearr_27268_27307 = state_27261__$1;
(statearr_27268_27307[(2)] = inst_27227);

(statearr_27268_27307[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (2))){
var inst_27199 = (state_27261[(2)]);
var inst_27200 = cljs.core.List.EMPTY;
var inst_27201 = cljs.core.cst$sym$time_SLASH_refresh;
var inst_27202 = cljs.core._conj(inst_27200,inst_27201);
var inst_27203 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27202);
var inst_27204 = cljs.core.seq(inst_27203);
var inst_27205 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27204);
var inst_27206 = cljs.core.List.EMPTY;
var inst_27207 = cljs.core._conj(inst_27206,inst_27205);
var inst_27208 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27207);
var inst_27209 = cljs.core.seq(inst_27208);
var inst_27210 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27209);
var inst_27211 = cljs.core.vec(inst_27210);
var inst_27212 = om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,inst_27211);
var state_27261__$1 = (function (){var statearr_27269 = state_27261;
(statearr_27269[(10)] = inst_27199);

(statearr_27269[(11)] = inst_27212);

return statearr_27269;
})();
var statearr_27270_27308 = state_27261__$1;
(statearr_27270_27308[(2)] = null);

(statearr_27270_27308[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (11))){
var inst_27255 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27271_27309 = state_27261__$1;
(statearr_27271_27309[(2)] = inst_27255);

(statearr_27271_27309[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (9))){
var inst_27234 = cljs.core.List.EMPTY;
var inst_27235 = cljs.core.cst$sym$time_SLASH_refresh;
var inst_27236 = cljs.core._conj(inst_27234,inst_27235);
var inst_27237 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27236);
var inst_27238 = cljs.core.seq(inst_27237);
var inst_27239 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27238);
var inst_27240 = cljs.core.List.EMPTY;
var inst_27241 = cljs.core._conj(inst_27240,inst_27239);
var inst_27242 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27241);
var inst_27243 = cljs.core.seq(inst_27242);
var inst_27244 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27243);
var inst_27245 = cljs.core.vec(inst_27244);
var inst_27246 = om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,inst_27245);
var state_27261__$1 = (function (){var statearr_27272 = state_27261;
(statearr_27272[(12)] = inst_27246);

return statearr_27272;
})();
var statearr_27273_27310 = state_27261__$1;
(statearr_27273_27310[(2)] = null);

(statearr_27273_27310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (5))){
var inst_27228 = (state_27261[(8)]);
var inst_27226 = (state_27261[(2)]);
var inst_27227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27226,(0),null);
var inst_27228__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27226,(1),null);
var inst_27229 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27228__$1,kill_chan);
var state_27261__$1 = (function (){var statearr_27274 = state_27261;
(statearr_27274[(9)] = inst_27227);

(statearr_27274[(8)] = inst_27228__$1);

return statearr_27274;
})();
if(inst_27229){
var statearr_27275_27311 = state_27261__$1;
(statearr_27275_27311[(1)] = (6));

} else {
var statearr_27276_27312 = state_27261__$1;
(statearr_27276_27312[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (14))){
var inst_27253 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27277_27313 = state_27261__$1;
(statearr_27277_27313[(2)] = inst_27253);

(statearr_27277_27313[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (10))){
var inst_27228 = (state_27261[(8)]);
var inst_27249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27228,cljs.core.cst$kw$default);
var state_27261__$1 = state_27261;
if(inst_27249){
var statearr_27278_27314 = state_27261__$1;
(statearr_27278_27314[(1)] = (12));

} else {
var statearr_27279_27315 = state_27261__$1;
(statearr_27279_27315[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27262 === (8))){
var inst_27257 = (state_27261[(2)]);
var state_27261__$1 = state_27261;
var statearr_27280_27316 = state_27261__$1;
(statearr_27280_27316[(2)] = inst_27257);

(statearr_27280_27316[(1)] = (4));


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
});})(c__24111__auto__,map__27187,map__27187__$1,current_time,map__27188,map__27188__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27176_27299))
;
return ((function (switch__23985__auto__,c__24111__auto__,map__27187,map__27187__$1,current_time,map__27188,map__27188__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27176_27299){
return (function() {
var barado$core$state_machine__23986__auto__ = null;
var barado$core$state_machine__23986__auto____0 = (function (){
var statearr_27284 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27284[(0)] = barado$core$state_machine__23986__auto__);

(statearr_27284[(1)] = (1));

return statearr_27284;
});
var barado$core$state_machine__23986__auto____1 = (function (state_27261){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_27261);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e27285){if((e27285 instanceof Object)){
var ex__23989__auto__ = e27285;
var statearr_27286_27317 = state_27261;
(statearr_27286_27317[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27261);

return cljs.core.cst$kw$recur;
} else {
throw e27285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__27318 = state_27261;
state_27261 = G__27318;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
barado$core$state_machine__23986__auto__ = function(state_27261){
switch(arguments.length){
case 0:
return barado$core$state_machine__23986__auto____0.call(this);
case 1:
return barado$core$state_machine__23986__auto____1.call(this,state_27261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
barado$core$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = barado$core$state_machine__23986__auto____0;
barado$core$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = barado$core$state_machine__23986__auto____1;
return barado$core$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto__,map__27187,map__27187__$1,current_time,map__27188,map__27188__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27176_27299))
})();
var state__24113__auto__ = (function (){var statearr_27287 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_27287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto__);

return statearr_27287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto__,map__27187,map__27187__$1,current_time,map__27188,map__27188__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27176_27299))
);

return c__24111__auto__;
});})(x27176_27299))
;

x27176_27299.componentWillUnmount = ((function (x27176_27299){
return (function (){
var this__18559__auto__ = this;
var this$ = this__18559__auto__;
var r__18560__auto__ = om.next.get_reconciler(this__18559__auto__);
var cfg__18561__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__18560__auto__);
var st__18562__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__18561__auto__);
var indexer__18563__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__18561__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__18562__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__18562__auto__) : cljs.core.deref.call(null,st__18562__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__18559__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__18562__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__18559__auto__], 0));
} else {
}

if((indexer__18563__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_(indexer__18563__auto__,this__18559__auto__);
}

var map__27288 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27288__$1 = ((((!((map__27288 == null)))?((((map__27288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27288):map__27288);
var kill_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27288__$1,cljs.core.cst$kw$kill_DASH_chan);
var clickout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27288__$1,cljs.core.cst$kw$clickout);
goog.events.unlistenByKey(clickout);

om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clickout,null], null));

if(cljs.core.truth_(kill_chan)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(kill_chan,cljs.core.cst$kw$kill);

return cljs.core.async.close_BANG_(kill_chan);
} else {
return null;
}
});})(x27176_27299))
;

x27176_27299.render = ((function (x27176_27299){
return (function (){
var this__18564__auto__ = this;
var this$ = this__18564__auto__;
var _STAR_reconciler_STAR_27290 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27291 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27292 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27293 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27294 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__18564__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__18564__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__18564__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__18564__auto__);

om.next._STAR_parent_STAR_ = this__18564__auto__;

try{var map__27295 = om.next.props(this$);
var map__27295__$1 = ((((!((map__27295 == null)))?((((map__27295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27295):map__27295);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$system_SLASH_lines);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$current_SLASH_line);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$current_SLASH_station);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$current_SLASH_platform);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$station_SLASH_matches);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack guttered", "style": ({"minHeight": "100vh"})}),cljs.core.array_seq([om.dom.header.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container pad"}),cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(({"className": "grow"}),cljs.core.array_seq(["Traincheck ",om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"id": "beta"}),cljs.core.array_seq(["beta"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "extras"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Skip the lines. Commute smarter. ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "#info"}),cljs.core.array_seq(["How?"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["A product of ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "https://sakay.ph"}),cljs.core.array_seq(["Sakay.ph"], 0)),"."], 0))], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack grow"}),cljs.core.array_seq([barado.core.query_statement(this$),((cljs.core.not(platform))?barado.util.main_loading():(barado.platforms.platform_view.cljs$core$IFn$_invoke$arity$1 ? barado.platforms.platform_view.cljs$core$IFn$_invoke$arity$1(platform) : barado.platforms.platform_view.call(null,platform)))], 0)),(barado.footer.footer_view.cljs$core$IFn$_invoke$arity$0 ? barado.footer.footer_view.cljs$core$IFn$_invoke$arity$0() : barado.footer.footer_view.call(null))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27294;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27293;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27292;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27291;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27290;
}});})(x27176_27299))
;


barado.core.App.prototype.constructor = barado.core.App;

barado.core.App.prototype.constructor.displayName = "barado.core/App";

barado.core.App.prototype.om$isComponent = true;

var x27297_27319 = barado.core.App;
/** @nocollapse */
x27297_27319.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x27297_27319.om$next$IQueryParams$params$arity$1 = ((function (x27297_27319){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$station,null,cljs.core.cst$kw$platform,null,cljs.core.cst$kw$platform_DASH_name_DASH_cache,"South"], null);
});})(x27297_27319))
;

/** @nocollapse */
x27297_27319.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x27297_27319.om$next$IQuery$query$arity$1 = ((function (x27297_27319){
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
});})(x27297_27319))
;


var x27298_27320 = barado.core.App.prototype;

x27298_27320.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;


x27298_27320.om$next$IQueryParams$params$arity$1 = ((function (x27298_27320){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$station,null,cljs.core.cst$kw$platform,null,cljs.core.cst$kw$platform_DASH_name_DASH_cache,"South"], null);
});})(x27298_27320))
;


x27298_27320.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x27298_27320.om$next$IQuery$query$arity$1 = ((function (x27298_27320){
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
});})(x27298_27320))
;


barado.core.App.cljs$lang$type = true;

barado.core.App.cljs$lang$ctorStr = "barado.core/App";

barado.core.App.cljs$lang$ctorPrWriter = (function (this__18714__auto__,writer__18715__auto__,opt__18716__auto__){
return cljs.core._write(writer__18715__auto__,"barado.core/App");
});
barado.core.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,barado.parser.read,cljs.core.cst$kw$mutate,barado.parser.mutate], null));
barado.core.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$parser,barado.core.parser,cljs.core.cst$kw$state,barado.core.init_app_state,cljs.core.cst$kw$send,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(barado.remotes.send,(function (){
return barado.core.reconciler;
})),cljs.core.cst$kw$merge,barado.remotes.incorp,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lines,cljs.core.cst$kw$line_DASH_data], null)], null));
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(barado.core.reconciler,barado.core.App,goog.dom.getElement("app"));
