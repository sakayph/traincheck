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
var map__27166 = om.next.props(this$);
var map__27166__$1 = ((((!((map__27166 == null)))?((((map__27166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27166):map__27166);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$system_SLASH_lines);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$current_SLASH_line);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$current_SLASH_station);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$current_SLASH_platform);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$station_SLASH_matches);
var stations = cljs.core.cst$kw$line_SLASH_stations.cljs$core$IFn$_invoke$arity$1(line);
var platforms = cljs.core.cst$kw$station_SLASH_platforms.cljs$core$IFn$_invoke$arity$1(station);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "query-statement", "className": "statement"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container"}),cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["I'm taking the"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$line_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$line_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq(["MRT",om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$line_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card", "onClick": ((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__27150_SHARP_){
return p1__27150_SHARP_.stopPropagation();
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "menu-item active", "onClick": ((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq(["MRT"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "menu-item disabled gutters h stack"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["LRT"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "badge"}),cljs.core.array_seq(["Coming Soon"], 0))], 0))], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["at"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$station_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$station_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([(cljs.core.truth_(station)?cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(station):"Loading Stations"),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$station_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card", "onClick": ((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__27151_SHARP_){
return p1__27151_SHARP_.stopPropagation();
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27168){
var map__27169 = p__27168;
var map__27169__$1 = ((((!((map__27169 == null)))?((((map__27169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27169):map__27169);
var s = map__27169__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27169__$1,cljs.core.cst$kw$station_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27169__$1,cljs.core.cst$kw$station_SLASH_label);
var platforms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27169__$1,cljs.core.cst$kw$station_SLASH_platforms);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": id, "className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$station_SLASH_id.cljs$core$IFn$_invoke$arity$1(station)))?" active":null))].join(''), "onClick": ((function (map__27169,map__27169__$1,s,id,label,platforms__$1,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
var map__27171 = om.next.get_params(this$);
var map__27171__$1 = ((((!((map__27171 == null)))?((((map__27171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27171):map__27171);
var platform_name_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27171__$1,cljs.core.cst$kw$platform_DASH_name_DASH_cache);
om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (map__27171,map__27171__$1,platform_name_cache,map__27169,map__27169__$1,s,id,label,platforms__$1,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (q){
return cljs.core.assoc_in(cljs.core.assoc_in(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$station], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform], null),cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__27171,map__27171__$1,platform_name_cache,map__27169,map__27169__$1,s,id,label,platforms__$1,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__27152_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(platform_name_cache,cljs.core.cst$kw$platform_SLASH_label.cljs$core$IFn$_invoke$arity$1(p1__27152_SHARP_));
});})(map__27171,map__27171__$1,platform_name_cache,map__27169,map__27169__$1,s,id,label,platforms__$1,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,platforms__$1));
if(temp__6751__auto__){
var ps = temp__6751__auto__;
return cljs.core.first(ps);
} else {
return cljs.core.first(platforms__$1);
}
})()));
});})(map__27171,map__27171__$1,platform_name_cache,map__27169,map__27169__$1,s,id,label,platforms__$1,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
);

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
});})(map__27169,map__27169__$1,s,id,label,platforms__$1,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,stations)], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["heading"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$dir_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$dir_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([(cljs.core.truth_(platform)?cljs.core.cst$kw$platform_SLASH_label.cljs$core$IFn$_invoke$arity$1(platform):"Loading Platforms"),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$dir_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card"}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27173){
var map__27174 = p__27173;
var map__27174__$1 = ((((!((map__27174 == null)))?((((map__27174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27174):map__27174);
var p = map__27174__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27174__$1,cljs.core.cst$kw$platform_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27174__$1,cljs.core.cst$kw$platform_SLASH_label);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1(platform)))?" active":null))].join(''), "key": id, "onClick": ((function (map__27174,map__27174__$1,p,id,label,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (map__27174,map__27174__$1,p,id,label,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (q){
return cljs.core.assoc_in(cljs.core.assoc_in(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform_DASH_name_DASH_cache], null),label);
});})(map__27174,map__27174__$1,p,id,label,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
);
});})(map__27174,map__27174__$1,p,id,label,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,platforms)], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["and I'm willing to wait for"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$wait_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$wait_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(time_threshold),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$wait_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card"}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27176){
var map__27177 = p__27176;
var map__27177__$1 = ((((!((map__27177 == null)))?((((map__27177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27177):map__27177);
var threshold = map__27177__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27177__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27177__$1,cljs.core.cst$kw$label);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": value, "className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(time_threshold),value))?" active":null))].join(''), "onClick": ((function (map__27177,map__27177__$1,threshold,value,label,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$threshold_SLASH_set),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$threshold,threshold], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_time_DASH_threshold))))));
});})(map__27177,map__27177__$1,threshold,value,label,map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27166,map__27166__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
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

var x27183_27306 = barado.core.App.prototype;
x27183_27306.componentWillUpdate = ((function (x27183_27306){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
if(((!((this__18565__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__18565__auto__.om$next$Ident$)))?true:false):false)){
var ident__18569__auto___27307 = om.next.ident(this__18565__auto__,om.next.props(this__18565__auto__));
var next_ident__18570__auto___27308 = om.next.ident(this__18565__auto__,om.next._next_props(next_props__18566__auto__,this__18565__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__18569__auto___27307,next_ident__18570__auto___27308)){
var idxr__18571__auto___27309 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__18571__auto___27309 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__18571__auto___27309),((function (idxr__18571__auto___27309,ident__18569__auto___27307,next_ident__18570__auto___27308,this__18565__auto__,x27183_27306){
return (function (indexes__18572__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__18572__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__18569__auto___27307], null),cljs.core.disj,this__18565__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__18570__auto___27308], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18565__auto__);
});})(idxr__18571__auto___27309,ident__18569__auto___27307,next_ident__18570__auto___27308,this__18565__auto__,x27183_27306))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__18565__auto__);

return om.next.merge_pending_state_BANG_(this__18565__auto__);
});})(x27183_27306))
;

x27183_27306.shouldComponentUpdate = ((function (x27183_27306){
return (function (next_props__18566__auto__,next_state__18567__auto__){
var this__18565__auto__ = this;
var next_children__18568__auto__ = next_props__18566__auto__.children;
var next_props__18566__auto____$1 = goog.object.get(next_props__18566__auto__,"omcljs$value");
var next_props__18566__auto____$2 = (function (){var G__27185 = next_props__18566__auto____$1;
if((next_props__18566__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__27185);
} else {
return G__27185;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__18565__auto__),next_props__18566__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__18565__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__27190 = this__18565__auto__.state;
var G__27191 = "omcljs$state";
return goog.object.get(G__27190,G__27191);
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
});})(x27183_27306))
;

x27183_27306.componentDidUpdate = ((function (x27183_27306){
return (function (prev_props__18573__auto__,prev_state__18574__auto__){
var this__18565__auto__ = this;
return om.next.clear_prev_props_BANG_(this__18565__auto__);
});})(x27183_27306))
;

x27183_27306.isMounted = ((function (x27183_27306){
return (function (){
var this__18565__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__18565__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27183_27306))
;

x27183_27306.initLocalState = ((function (x27183_27306){
return (function (){
var this$ = this;
var ret__18543__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$kill_DASH_chan,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$clickout,null], null);
var obj27193 = {"omcljs$state":ret__18543__auto__};
return obj27193;
});})(x27183_27306))
;

x27183_27306.componentWillMount = ((function (x27183_27306){
return (function (){
var this__18557__auto__ = this;
var this$ = this__18557__auto__;
var indexer__18558__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__18557__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__18558__auto__ == null)){
} else {
om.next.protocols.index_component_BANG_(indexer__18558__auto__,this__18557__auto__);
}

var map__27194 = om.next.props(this$);
var map__27194__$1 = ((((!((map__27194 == null)))?((((map__27194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27194):map__27194);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27194__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var map__27195 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27195__$1 = ((((!((map__27195 == null)))?((((map__27195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27195):map__27195);
var kill_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27195__$1,cljs.core.cst$kw$kill_DASH_chan);
var init_second_offset = ((60) - cljs_time.core.second(current_time));
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$clickout,(function (){var G__27198 = window;
var G__27199 = "click";
var G__27200 = ((function (G__27198,G__27199,map__27194,map__27194__$1,current_time,map__27195,map__27195__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27183_27306){
return (function (ev){
var map__27201 = om.next.props(this$);
var map__27201__$1 = ((((!((map__27201 == null)))?((((map__27201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27201):map__27201);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27201__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
if(cljs.core.truth_(active_popper)){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
} else {
return null;
}
});})(G__27198,G__27199,map__27194,map__27194__$1,current_time,map__27195,map__27195__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27183_27306))
;
return goog.events.listen(G__27198,G__27199,G__27200);
})());

var c__24118__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto__,map__27194,map__27194__$1,current_time,map__27195,map__27195__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27183_27306){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto__,map__27194,map__27194__$1,current_time,map__27195,map__27195__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27183_27306){
return (function (state_27268){
var state_val_27269 = (state_27268[(1)]);
if((state_val_27269 === (7))){
var inst_27228 = (state_27268[(7)]);
var inst_27235 = (state_27268[(8)]);
var inst_27239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27235,inst_27228);
var state_27268__$1 = state_27268;
if(inst_27239){
var statearr_27270_27310 = state_27268__$1;
(statearr_27270_27310[(1)] = (9));

} else {
var statearr_27271_27311 = state_27268__$1;
(statearr_27271_27311[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (1))){
var inst_27203 = ((1000) * init_second_offset);
var inst_27204 = cljs.core.async.timeout(inst_27203);
var state_27268__$1 = state_27268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27268__$1,(2),inst_27204);
} else {
if((state_val_27269 === (4))){
var inst_27266 = (state_27268[(2)]);
var state_27268__$1 = state_27268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27268__$1,inst_27266);
} else {
if((state_val_27269 === (13))){
var state_27268__$1 = state_27268;
var statearr_27272_27312 = state_27268__$1;
(statearr_27272_27312[(2)] = null);

(statearr_27272_27312[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (6))){
var state_27268__$1 = state_27268;
var statearr_27273_27313 = state_27268__$1;
(statearr_27273_27313[(2)] = null);

(statearr_27273_27313[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (3))){
var inst_27228 = (state_27268[(7)]);
var inst_27228__$1 = cljs.core.async.timeout((60000));
var inst_27229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27230 = [kill_chan,inst_27228__$1];
var inst_27231 = (new cljs.core.PersistentVector(null,2,(5),inst_27229,inst_27230,null));
var state_27268__$1 = (function (){var statearr_27274 = state_27268;
(statearr_27274[(7)] = inst_27228__$1);

return statearr_27274;
})();
return cljs.core.async.ioc_alts_BANG_(state_27268__$1,(5),inst_27231);
} else {
if((state_val_27269 === (12))){
var inst_27234 = (state_27268[(9)]);
var state_27268__$1 = state_27268;
var statearr_27275_27314 = state_27268__$1;
(statearr_27275_27314[(2)] = inst_27234);

(statearr_27275_27314[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (2))){
var inst_27206 = (state_27268[(2)]);
var inst_27207 = cljs.core.List.EMPTY;
var inst_27208 = cljs.core.cst$sym$time_SLASH_refresh;
var inst_27209 = cljs.core._conj(inst_27207,inst_27208);
var inst_27210 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27209);
var inst_27211 = cljs.core.seq(inst_27210);
var inst_27212 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27211);
var inst_27213 = cljs.core.List.EMPTY;
var inst_27214 = cljs.core._conj(inst_27213,inst_27212);
var inst_27215 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27214);
var inst_27216 = cljs.core.seq(inst_27215);
var inst_27217 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27216);
var inst_27218 = cljs.core.vec(inst_27217);
var inst_27219 = om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,inst_27218);
var state_27268__$1 = (function (){var statearr_27276 = state_27268;
(statearr_27276[(10)] = inst_27219);

(statearr_27276[(11)] = inst_27206);

return statearr_27276;
})();
var statearr_27277_27315 = state_27268__$1;
(statearr_27277_27315[(2)] = null);

(statearr_27277_27315[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (11))){
var inst_27262 = (state_27268[(2)]);
var state_27268__$1 = state_27268;
var statearr_27278_27316 = state_27268__$1;
(statearr_27278_27316[(2)] = inst_27262);

(statearr_27278_27316[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (9))){
var inst_27241 = cljs.core.List.EMPTY;
var inst_27242 = cljs.core.cst$sym$time_SLASH_refresh;
var inst_27243 = cljs.core._conj(inst_27241,inst_27242);
var inst_27244 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27243);
var inst_27245 = cljs.core.seq(inst_27244);
var inst_27246 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27245);
var inst_27247 = cljs.core.List.EMPTY;
var inst_27248 = cljs.core._conj(inst_27247,inst_27246);
var inst_27249 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27248);
var inst_27250 = cljs.core.seq(inst_27249);
var inst_27251 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27250);
var inst_27252 = cljs.core.vec(inst_27251);
var inst_27253 = om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,inst_27252);
var state_27268__$1 = (function (){var statearr_27279 = state_27268;
(statearr_27279[(12)] = inst_27253);

return statearr_27279;
})();
var statearr_27280_27317 = state_27268__$1;
(statearr_27280_27317[(2)] = null);

(statearr_27280_27317[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (5))){
var inst_27235 = (state_27268[(8)]);
var inst_27233 = (state_27268[(2)]);
var inst_27234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27233,(0),null);
var inst_27235__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27233,(1),null);
var inst_27236 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27235__$1,kill_chan);
var state_27268__$1 = (function (){var statearr_27281 = state_27268;
(statearr_27281[(9)] = inst_27234);

(statearr_27281[(8)] = inst_27235__$1);

return statearr_27281;
})();
if(inst_27236){
var statearr_27282_27318 = state_27268__$1;
(statearr_27282_27318[(1)] = (6));

} else {
var statearr_27283_27319 = state_27268__$1;
(statearr_27283_27319[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (14))){
var inst_27260 = (state_27268[(2)]);
var state_27268__$1 = state_27268;
var statearr_27284_27320 = state_27268__$1;
(statearr_27284_27320[(2)] = inst_27260);

(statearr_27284_27320[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (10))){
var inst_27235 = (state_27268[(8)]);
var inst_27256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27235,cljs.core.cst$kw$default);
var state_27268__$1 = state_27268;
if(inst_27256){
var statearr_27285_27321 = state_27268__$1;
(statearr_27285_27321[(1)] = (12));

} else {
var statearr_27286_27322 = state_27268__$1;
(statearr_27286_27322[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27269 === (8))){
var inst_27264 = (state_27268[(2)]);
var state_27268__$1 = state_27268;
var statearr_27287_27323 = state_27268__$1;
(statearr_27287_27323[(2)] = inst_27264);

(statearr_27287_27323[(1)] = (4));


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
});})(c__24118__auto__,map__27194,map__27194__$1,current_time,map__27195,map__27195__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27183_27306))
;
return ((function (switch__23992__auto__,c__24118__auto__,map__27194,map__27194__$1,current_time,map__27195,map__27195__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27183_27306){
return (function() {
var barado$core$state_machine__23993__auto__ = null;
var barado$core$state_machine__23993__auto____0 = (function (){
var statearr_27291 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27291[(0)] = barado$core$state_machine__23993__auto__);

(statearr_27291[(1)] = (1));

return statearr_27291;
});
var barado$core$state_machine__23993__auto____1 = (function (state_27268){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_27268);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e27292){if((e27292 instanceof Object)){
var ex__23996__auto__ = e27292;
var statearr_27293_27324 = state_27268;
(statearr_27293_27324[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27268);

return cljs.core.cst$kw$recur;
} else {
throw e27292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__27325 = state_27268;
state_27268 = G__27325;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
barado$core$state_machine__23993__auto__ = function(state_27268){
switch(arguments.length){
case 0:
return barado$core$state_machine__23993__auto____0.call(this);
case 1:
return barado$core$state_machine__23993__auto____1.call(this,state_27268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
barado$core$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = barado$core$state_machine__23993__auto____0;
barado$core$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = barado$core$state_machine__23993__auto____1;
return barado$core$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto__,map__27194,map__27194__$1,current_time,map__27195,map__27195__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27183_27306))
})();
var state__24120__auto__ = (function (){var statearr_27294 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_27294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto__);

return statearr_27294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto__,map__27194,map__27194__$1,current_time,map__27195,map__27195__$1,kill_chan,init_second_offset,this$,indexer__18558__auto__,this__18557__auto__,x27183_27306))
);

return c__24118__auto__;
});})(x27183_27306))
;

x27183_27306.componentWillUnmount = ((function (x27183_27306){
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

var map__27295 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27295__$1 = ((((!((map__27295 == null)))?((((map__27295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27295):map__27295);
var kill_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$kill_DASH_chan);
var clickout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27295__$1,cljs.core.cst$kw$clickout);
goog.events.unlistenByKey(clickout);

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$clickout,null);

if(cljs.core.truth_(kill_chan)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(kill_chan,cljs.core.cst$kw$kill);

return cljs.core.async.close_BANG_(kill_chan);
} else {
return null;
}
});})(x27183_27306))
;

x27183_27306.render = ((function (x27183_27306){
return (function (){
var this__18564__auto__ = this;
var this$ = this__18564__auto__;
var _STAR_reconciler_STAR_27297 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27298 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27299 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27300 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27301 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__18564__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__18564__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__18564__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__18564__auto__);

om.next._STAR_parent_STAR_ = this__18564__auto__;

try{var map__27302 = om.next.props(this$);
var map__27302__$1 = ((((!((map__27302 == null)))?((((map__27302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27302):map__27302);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$system_SLASH_lines);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$current_SLASH_line);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$current_SLASH_station);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$current_SLASH_platform);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27302__$1,cljs.core.cst$kw$station_SLASH_matches);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack guttered", "style": ({"minHeight": "100vh"})}),cljs.core.array_seq([om.dom.header.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container pad"}),cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(({"className": "grow"}),cljs.core.array_seq(["Traincheck ",om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"id": "beta"}),cljs.core.array_seq(["beta"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "extras"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Skip the lines. Commute smarter. ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "#info"}),cljs.core.array_seq(["How?"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["A product of ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "https://sakay.ph"}),cljs.core.array_seq(["Sakay.ph"], 0)),"."], 0))], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack grow"}),cljs.core.array_seq([barado.core.query_statement(this$),((cljs.core.not(platform))?barado.util.main_loading():(barado.platforms.platform_view.cljs$core$IFn$_invoke$arity$1 ? barado.platforms.platform_view.cljs$core$IFn$_invoke$arity$1(platform) : barado.platforms.platform_view.call(null,platform)))], 0)),(barado.footer.footer_view.cljs$core$IFn$_invoke$arity$0 ? barado.footer.footer_view.cljs$core$IFn$_invoke$arity$0() : barado.footer.footer_view.call(null))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27301;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27300;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27299;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27298;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27297;
}});})(x27183_27306))
;


barado.core.App.prototype.constructor = barado.core.App;

barado.core.App.prototype.constructor.displayName = "barado.core/App";

barado.core.App.prototype.om$isComponent = true;

var x27304_27326 = barado.core.App;
/** @nocollapse */
x27304_27326.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x27304_27326.om$next$IQueryParams$params$arity$1 = ((function (x27304_27326){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$station,null,cljs.core.cst$kw$platform,null,cljs.core.cst$kw$platform_DASH_name_DASH_cache,"South"], null);
});})(x27304_27326))
;

/** @nocollapse */
x27304_27326.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x27304_27326.om$next$IQuery$query$arity$1 = ((function (x27304_27326){
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
});})(x27304_27326))
;


var x27305_27327 = barado.core.App.prototype;

x27305_27327.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;


x27305_27327.om$next$IQueryParams$params$arity$1 = ((function (x27305_27327){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$station,null,cljs.core.cst$kw$platform,null,cljs.core.cst$kw$platform_DASH_name_DASH_cache,"South"], null);
});})(x27305_27327))
;


x27305_27327.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x27305_27327.om$next$IQuery$query$arity$1 = ((function (x27305_27327){
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
});})(x27305_27327))
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
