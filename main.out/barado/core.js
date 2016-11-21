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
barado.core.query_statement = (function barado$core$query_statement(this$){
var map__27004 = om.next.props(this$);
var map__27004__$1 = ((((!((map__27004 == null)))?((((map__27004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27004):map__27004);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$system_SLASH_lines);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$current_SLASH_line);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$current_SLASH_station);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$current_SLASH_platform);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004__$1,cljs.core.cst$kw$station_SLASH_matches);
var stations = cljs.core.cst$kw$line_SLASH_stations.cljs$core$IFn$_invoke$arity$1(line);
var platforms = cljs.core.cst$kw$station_SLASH_platforms.cljs$core$IFn$_invoke$arity$1(station);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "query-statement", "className": "statement"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container"}),cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["I'm taking the"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$line_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$line_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq(["MRT",om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$line_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card", "onClick": ((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__26988_SHARP_){
return p1__26988_SHARP_.stopPropagation();
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "menu-item active", "onClick": ((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq(["MRT"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "menu-item disabled gutters h stack"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["LRT"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "badge"}),cljs.core.array_seq(["Coming Soon"], 0))], 0))], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["at"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$station_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$station_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([(cljs.core.truth_(station)?cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(station):"Loading Stations"),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$station_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card", "onClick": ((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__26989_SHARP_){
return p1__26989_SHARP_.stopPropagation();
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27006){
var map__27007 = p__27006;
var map__27007__$1 = ((((!((map__27007 == null)))?((((map__27007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27007):map__27007);
var s = map__27007__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27007__$1,cljs.core.cst$kw$station_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27007__$1,cljs.core.cst$kw$station_SLASH_label);
var platforms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27007__$1,cljs.core.cst$kw$station_SLASH_platforms);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": id, "className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$station_SLASH_id.cljs$core$IFn$_invoke$arity$1(station)))?" active":null))].join(''), "onClick": ((function (map__27007,map__27007__$1,s,id,label,platforms__$1,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
var map__27009 = om.next.get_params(this$);
var map__27009__$1 = ((((!((map__27009 == null)))?((((map__27009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27009):map__27009);
var platform_name_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27009__$1,cljs.core.cst$kw$platform_DASH_name_DASH_cache);
om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (map__27009,map__27009__$1,platform_name_cache,map__27007,map__27007__$1,s,id,label,platforms__$1,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (q){
return cljs.core.assoc_in(cljs.core.assoc_in(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$station], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform], null),cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1((function (){var temp__6751__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__27009,map__27009__$1,platform_name_cache,map__27007,map__27007__$1,s,id,label,platforms__$1,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p1__26990_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(platform_name_cache,cljs.core.cst$kw$platform_SLASH_label.cljs$core$IFn$_invoke$arity$1(p1__26990_SHARP_));
});})(map__27009,map__27009__$1,platform_name_cache,map__27007,map__27007__$1,s,id,label,platforms__$1,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,platforms__$1));
if(temp__6751__auto__){
var ps = temp__6751__auto__;
return cljs.core.first(ps);
} else {
return cljs.core.first(platforms__$1);
}
})()));
});})(map__27009,map__27009__$1,platform_name_cache,map__27007,map__27007__$1,s,id,label,platforms__$1,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
);

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
});})(map__27007,map__27007__$1,s,id,label,platforms__$1,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,stations)], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["heading"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$dir_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$dir_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([(cljs.core.truth_(platform)?cljs.core.cst$kw$platform_SLASH_label.cljs$core$IFn$_invoke$arity$1(platform):"Loading Platforms"),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$dir_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card"}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27011){
var map__27012 = p__27011;
var map__27012__$1 = ((((!((map__27012 == null)))?((((map__27012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27012):map__27012);
var p = map__27012__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27012__$1,cljs.core.cst$kw$platform_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27012__$1,cljs.core.cst$kw$platform_SLASH_label);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1(platform)))?" active":null))].join(''), "key": id, "onClick": ((function (map__27012,map__27012__$1,p,id,label,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (map__27012,map__27012__$1,p,id,label,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (q){
return cljs.core.assoc_in(cljs.core.assoc_in(q,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$platform_DASH_name_DASH_cache], null),label);
});})(map__27012,map__27012__$1,p,id,label,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
);
});})(map__27012,map__27012__$1,p,id,label,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,platforms)], 0)):null)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["and I'm willing to wait for"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "pop-button"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str("button outlined"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$wait_DASH_pop))?" active":null))].join(''), "onClick": ((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (ev){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$wait_DASH_pop], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_active_DASH_popper))))));
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(time_threshold),om.dom.i(({"className": "icon-dropdown"}))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_popper,cljs.core.cst$kw$wait_DASH_pop))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "dropdown card"}),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (p__27014){
var map__27015 = p__27014;
var map__27015__$1 = ((((!((map__27015 == null)))?((((map__27015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27015):map__27015);
var threshold = map__27015__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,cljs.core.cst$kw$value);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,cljs.core.cst$kw$label);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": value, "className": [cljs.core.str("menu-item"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(time_threshold),value))?" active":null))].join(''), "onClick": ((function (map__27015,map__27015__$1,threshold,value,label,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$threshold_SLASH_set),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$threshold,threshold], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$system_SLASH_time_DASH_threshold))))));
});})(map__27015,map__27015__$1,threshold,value,label,map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
}),cljs.core.array_seq([label], 0));
});})(map__27004,map__27004__$1,current_time,data_timestamp,time_threshold,lines,active_popper,line,station,platform,matches,stations,platforms))
,barado.util.thresholds)], 0)):null)], 0))], 0))], 0));
});
/**
 * @constructor
 */
barado.core.App = (function barado$core$App(){
var this__19598__auto__ = this;
React.Component.apply(this__19598__auto__,arguments);

if(!((this__19598__auto__.initLocalState == null))){
this__19598__auto__.state = this__19598__auto__.initLocalState();
} else {
this__19598__auto__.state = {};
}

return this__19598__auto__;
});

barado.core.App.prototype = goog.object.clone(React.Component.prototype);

var x27021_27144 = barado.core.App.prototype;
x27021_27144.componentWillUpdate = ((function (x27021_27144){
return (function (next_props__19453__auto__,next_state__19454__auto__){
var this__19452__auto__ = this;
if(((!((this__19452__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19452__auto__.om$next$Ident$)))?true:false):false)){
var ident__19456__auto___27145 = om.next.ident(this__19452__auto__,om.next.props(this__19452__auto__));
var next_ident__19457__auto___27146 = om.next.ident(this__19452__auto__,om.next._next_props(next_props__19453__auto__,this__19452__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__19456__auto___27145,next_ident__19457__auto___27146)){
var idxr__19458__auto___27147 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19452__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__19458__auto___27147 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__19458__auto___27147),((function (idxr__19458__auto___27147,ident__19456__auto___27145,next_ident__19457__auto___27146,this__19452__auto__,x27021_27144){
return (function (indexes__19459__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__19459__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__19456__auto___27145], null),cljs.core.disj,this__19452__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__19457__auto___27146], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19452__auto__);
});})(idxr__19458__auto___27147,ident__19456__auto___27145,next_ident__19457__auto___27146,this__19452__auto__,x27021_27144))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__19452__auto__);

return om.next.merge_pending_state_BANG_(this__19452__auto__);
});})(x27021_27144))
;

x27021_27144.shouldComponentUpdate = ((function (x27021_27144){
return (function (next_props__19453__auto__,next_state__19454__auto__){
var this__19452__auto__ = this;
var next_children__19455__auto__ = next_props__19453__auto__.children;
var next_props__19453__auto____$1 = goog.object.get(next_props__19453__auto__,"omcljs$value");
var next_props__19453__auto____$2 = (function (){var G__27023 = next_props__19453__auto____$1;
if((next_props__19453__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__27023);
} else {
return G__27023;
}
})();
var or__7523__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__19452__auto__),next_props__19453__auto____$2);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (function (){var and__7511__auto__ = this__19452__auto__.state;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__27028 = this__19452__auto__.state;
var G__27029 = "omcljs$state";
return goog.object.get(G__27028,G__27029);
})(),goog.object.get(next_state__19454__auto__,"omcljs$state"));
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__19452__auto__.props.children,next_children__19455__auto__);
}
}
});})(x27021_27144))
;

x27021_27144.componentDidUpdate = ((function (x27021_27144){
return (function (prev_props__19460__auto__,prev_state__19461__auto__){
var this__19452__auto__ = this;
return om.next.clear_prev_props_BANG_(this__19452__auto__);
});})(x27021_27144))
;

x27021_27144.isMounted = ((function (x27021_27144){
return (function (){
var this__19452__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__19452__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27021_27144))
;

x27021_27144.initLocalState = ((function (x27021_27144){
return (function (){
var this$ = this;
var ret__19430__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$kill_DASH_chan,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$clickout,null], null);
var obj27031 = {"omcljs$state":ret__19430__auto__};
return obj27031;
});})(x27021_27144))
;

x27021_27144.componentWillMount = ((function (x27021_27144){
return (function (){
var this__19444__auto__ = this;
var this$ = this__19444__auto__;
var indexer__19445__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__19444__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__19445__auto__ == null)){
} else {
om.next.protocols.index_component_BANG_(indexer__19445__auto__,this__19444__auto__);
}

var map__27032 = om.next.props(this$);
var map__27032__$1 = ((((!((map__27032 == null)))?((((map__27032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27032):map__27032);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var map__27033 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27033__$1 = ((((!((map__27033 == null)))?((((map__27033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27033):map__27033);
var kill_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27033__$1,cljs.core.cst$kw$kill_DASH_chan);
var init_second_offset = ((60) - cljs_time.core.second(current_time));
om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clickout,(function (){var G__27036 = window;
var G__27037 = "click";
var G__27038 = ((function (G__27036,G__27037,map__27032,map__27032__$1,current_time,map__27033,map__27033__$1,kill_chan,init_second_offset,this$,indexer__19445__auto__,this__19444__auto__,x27021_27144){
return (function (ev){
var map__27039 = om.next.props(this$);
var map__27039__$1 = ((((!((map__27039 == null)))?((((map__27039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27039):map__27039);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27039__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
if(cljs.core.truth_(active_popper)){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$popper_SLASH_toggle),(function (){var x__8452__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())))));
} else {
return null;
}
});})(G__27036,G__27037,map__27032,map__27032__$1,current_time,map__27033,map__27033__$1,kill_chan,init_second_offset,this$,indexer__19445__auto__,this__19444__auto__,x27021_27144))
;
return goog.events.listen(G__27036,G__27037,G__27038);
})()], null));

var c__24018__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto__,map__27032,map__27032__$1,current_time,map__27033,map__27033__$1,kill_chan,init_second_offset,this$,indexer__19445__auto__,this__19444__auto__,x27021_27144){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto__,map__27032,map__27032__$1,current_time,map__27033,map__27033__$1,kill_chan,init_second_offset,this$,indexer__19445__auto__,this__19444__auto__,x27021_27144){
return (function (state_27106){
var state_val_27107 = (state_27106[(1)]);
if((state_val_27107 === (7))){
var inst_27073 = (state_27106[(7)]);
var inst_27066 = (state_27106[(8)]);
var inst_27077 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27073,inst_27066);
var state_27106__$1 = state_27106;
if(inst_27077){
var statearr_27108_27148 = state_27106__$1;
(statearr_27108_27148[(1)] = (9));

} else {
var statearr_27109_27149 = state_27106__$1;
(statearr_27109_27149[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (1))){
var inst_27041 = ((1000) * init_second_offset);
var inst_27042 = cljs.core.async.timeout(inst_27041);
var state_27106__$1 = state_27106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27106__$1,(2),inst_27042);
} else {
if((state_val_27107 === (4))){
var inst_27104 = (state_27106[(2)]);
var state_27106__$1 = state_27106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27106__$1,inst_27104);
} else {
if((state_val_27107 === (13))){
var state_27106__$1 = state_27106;
var statearr_27110_27150 = state_27106__$1;
(statearr_27110_27150[(2)] = null);

(statearr_27110_27150[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (6))){
var state_27106__$1 = state_27106;
var statearr_27111_27151 = state_27106__$1;
(statearr_27111_27151[(2)] = null);

(statearr_27111_27151[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (3))){
var inst_27066 = (state_27106[(8)]);
var inst_27066__$1 = cljs.core.async.timeout((60000));
var inst_27067 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27068 = [kill_chan,inst_27066__$1];
var inst_27069 = (new cljs.core.PersistentVector(null,2,(5),inst_27067,inst_27068,null));
var state_27106__$1 = (function (){var statearr_27112 = state_27106;
(statearr_27112[(8)] = inst_27066__$1);

return statearr_27112;
})();
return cljs.core.async.ioc_alts_BANG_(state_27106__$1,(5),inst_27069);
} else {
if((state_val_27107 === (12))){
var inst_27072 = (state_27106[(9)]);
var state_27106__$1 = state_27106;
var statearr_27113_27152 = state_27106__$1;
(statearr_27113_27152[(2)] = inst_27072);

(statearr_27113_27152[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (2))){
var inst_27044 = (state_27106[(2)]);
var inst_27045 = cljs.core.List.EMPTY;
var inst_27046 = cljs.core.cst$sym$time_SLASH_refresh;
var inst_27047 = cljs.core._conj(inst_27045,inst_27046);
var inst_27048 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27047);
var inst_27049 = cljs.core.seq(inst_27048);
var inst_27050 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27049);
var inst_27051 = cljs.core.List.EMPTY;
var inst_27052 = cljs.core._conj(inst_27051,inst_27050);
var inst_27053 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27052);
var inst_27054 = cljs.core.seq(inst_27053);
var inst_27055 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27054);
var inst_27056 = cljs.core.vec(inst_27055);
var inst_27057 = om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,inst_27056);
var state_27106__$1 = (function (){var statearr_27114 = state_27106;
(statearr_27114[(10)] = inst_27044);

(statearr_27114[(11)] = inst_27057);

return statearr_27114;
})();
var statearr_27115_27153 = state_27106__$1;
(statearr_27115_27153[(2)] = null);

(statearr_27115_27153[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (11))){
var inst_27100 = (state_27106[(2)]);
var state_27106__$1 = state_27106;
var statearr_27116_27154 = state_27106__$1;
(statearr_27116_27154[(2)] = inst_27100);

(statearr_27116_27154[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (9))){
var inst_27079 = cljs.core.List.EMPTY;
var inst_27080 = cljs.core.cst$sym$time_SLASH_refresh;
var inst_27081 = cljs.core._conj(inst_27079,inst_27080);
var inst_27082 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27081);
var inst_27083 = cljs.core.seq(inst_27082);
var inst_27084 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27083);
var inst_27085 = cljs.core.List.EMPTY;
var inst_27086 = cljs.core._conj(inst_27085,inst_27084);
var inst_27087 = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(inst_27086);
var inst_27088 = cljs.core.seq(inst_27087);
var inst_27089 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(inst_27088);
var inst_27090 = cljs.core.vec(inst_27089);
var inst_27091 = om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,inst_27090);
var state_27106__$1 = (function (){var statearr_27117 = state_27106;
(statearr_27117[(12)] = inst_27091);

return statearr_27117;
})();
var statearr_27118_27155 = state_27106__$1;
(statearr_27118_27155[(2)] = null);

(statearr_27118_27155[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (5))){
var inst_27073 = (state_27106[(7)]);
var inst_27071 = (state_27106[(2)]);
var inst_27072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27071,(0),null);
var inst_27073__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27071,(1),null);
var inst_27074 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27073__$1,kill_chan);
var state_27106__$1 = (function (){var statearr_27119 = state_27106;
(statearr_27119[(7)] = inst_27073__$1);

(statearr_27119[(9)] = inst_27072);

return statearr_27119;
})();
if(inst_27074){
var statearr_27120_27156 = state_27106__$1;
(statearr_27120_27156[(1)] = (6));

} else {
var statearr_27121_27157 = state_27106__$1;
(statearr_27121_27157[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (14))){
var inst_27098 = (state_27106[(2)]);
var state_27106__$1 = state_27106;
var statearr_27122_27158 = state_27106__$1;
(statearr_27122_27158[(2)] = inst_27098);

(statearr_27122_27158[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (10))){
var inst_27073 = (state_27106[(7)]);
var inst_27094 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27073,cljs.core.cst$kw$default);
var state_27106__$1 = state_27106;
if(inst_27094){
var statearr_27123_27159 = state_27106__$1;
(statearr_27123_27159[(1)] = (12));

} else {
var statearr_27124_27160 = state_27106__$1;
(statearr_27124_27160[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27107 === (8))){
var inst_27102 = (state_27106[(2)]);
var state_27106__$1 = state_27106;
var statearr_27125_27161 = state_27106__$1;
(statearr_27125_27161[(2)] = inst_27102);

(statearr_27125_27161[(1)] = (4));


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
});})(c__24018__auto__,map__27032,map__27032__$1,current_time,map__27033,map__27033__$1,kill_chan,init_second_offset,this$,indexer__19445__auto__,this__19444__auto__,x27021_27144))
;
return ((function (switch__23892__auto__,c__24018__auto__,map__27032,map__27032__$1,current_time,map__27033,map__27033__$1,kill_chan,init_second_offset,this$,indexer__19445__auto__,this__19444__auto__,x27021_27144){
return (function() {
var barado$core$state_machine__23893__auto__ = null;
var barado$core$state_machine__23893__auto____0 = (function (){
var statearr_27129 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27129[(0)] = barado$core$state_machine__23893__auto__);

(statearr_27129[(1)] = (1));

return statearr_27129;
});
var barado$core$state_machine__23893__auto____1 = (function (state_27106){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_27106);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e27130){if((e27130 instanceof Object)){
var ex__23896__auto__ = e27130;
var statearr_27131_27162 = state_27106;
(statearr_27131_27162[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27106);

return cljs.core.cst$kw$recur;
} else {
throw e27130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__27163 = state_27106;
state_27106 = G__27163;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
barado$core$state_machine__23893__auto__ = function(state_27106){
switch(arguments.length){
case 0:
return barado$core$state_machine__23893__auto____0.call(this);
case 1:
return barado$core$state_machine__23893__auto____1.call(this,state_27106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
barado$core$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = barado$core$state_machine__23893__auto____0;
barado$core$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = barado$core$state_machine__23893__auto____1;
return barado$core$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto__,map__27032,map__27032__$1,current_time,map__27033,map__27033__$1,kill_chan,init_second_offset,this$,indexer__19445__auto__,this__19444__auto__,x27021_27144))
})();
var state__24020__auto__ = (function (){var statearr_27132 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_27132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_27132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto__,map__27032,map__27032__$1,current_time,map__27033,map__27033__$1,kill_chan,init_second_offset,this$,indexer__19445__auto__,this__19444__auto__,x27021_27144))
);

return c__24018__auto__;
});})(x27021_27144))
;

x27021_27144.componentWillUnmount = ((function (x27021_27144){
return (function (){
var this__19446__auto__ = this;
var this$ = this__19446__auto__;
var r__19447__auto__ = om.next.get_reconciler(this__19446__auto__);
var cfg__19448__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__19447__auto__);
var st__19449__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__19448__auto__);
var indexer__19450__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__19448__auto__);
if(cljs.core.truth_((function (){var and__7511__auto__ = !((st__19449__auto__ == null));
if(and__7511__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__19449__auto__) : cljs.core.deref.call(null,st__19449__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__19446__auto__], null));
} else {
return and__7511__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__19449__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__19446__auto__], 0));
} else {
}

if((indexer__19450__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_(indexer__19450__auto__,this__19446__auto__);
}

var map__27133 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27133__$1 = ((((!((map__27133 == null)))?((((map__27133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27133):map__27133);
var kill_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27133__$1,cljs.core.cst$kw$kill_DASH_chan);
var clickout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27133__$1,cljs.core.cst$kw$clickout);
goog.events.unlistenByKey(clickout);

om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clickout,null], null));

if(cljs.core.truth_(kill_chan)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(kill_chan,cljs.core.cst$kw$kill);

return cljs.core.async.close_BANG_(kill_chan);
} else {
return null;
}
});})(x27021_27144))
;

x27021_27144.render = ((function (x27021_27144){
return (function (){
var this__19451__auto__ = this;
var this$ = this__19451__auto__;
var _STAR_reconciler_STAR_27135 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27136 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27137 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27138 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27139 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__19451__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__19451__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__19451__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__19451__auto__);

om.next._STAR_parent_STAR_ = this__19451__auto__;

try{var map__27140 = om.next.props(this$);
var map__27140__$1 = ((((!((map__27140 == null)))?((((map__27140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27140):map__27140);
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$system_SLASH_current_DASH_time);
var data_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp);
var time_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$system_SLASH_time_DASH_threshold);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$system_SLASH_lines);
var active_popper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$system_SLASH_active_DASH_popper);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$current_SLASH_line);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$current_SLASH_station);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$current_SLASH_platform);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,cljs.core.cst$kw$station_SLASH_matches);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack guttered", "style": ({"minHeight": "100vh"})}),cljs.core.array_seq([om.dom.header.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container pad center h stack"}),cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(({"className": "grow"}),cljs.core.array_seq(["Traincheck ",om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"id": "beta"}),cljs.core.array_seq(["beta"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "extras"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Skip the lines. Commute smarter. ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "#info"}),cljs.core.array_seq(["How?"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["A product of ",om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"href": "https://sakay.ph"}),cljs.core.array_seq(["Sakay.ph"], 0)),"."], 0))], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "v stack grow"}),cljs.core.array_seq([barado.core.query_statement(this$),((cljs.core.not(platform))?barado.util.main_loading():(barado.platforms.platform_view.cljs$core$IFn$_invoke$arity$1 ? barado.platforms.platform_view.cljs$core$IFn$_invoke$arity$1(platform) : barado.platforms.platform_view.call(null,platform)))], 0)),om.dom.footer.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([om.dom.section.cljs$core$IFn$_invoke$arity$variadic(({"id": "social"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container"}),cljs.core.array_seq([om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "social twitter", "target": "_blank", "rel": "noopener noreferrer", "href": "https://twitter.com/intent/tweet?text=Predict%20The%20Future&via=sakayph&url=https://traincheck.sakay.ph"}),cljs.core.array_seq([om.dom.i(({"className": "icon-twitter"}))," Tweet about this"], 0)),om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "social facebook", "target": "_blank", "rel": "noopener noreferrer", "href": "https://www.facebook.com/sharer/sharer.php?u=https://traincheck.sakay.ph"}),cljs.core.array_seq([om.dom.i(({"className": "icon-facebook"}))," Share on Facebook"], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "content"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container h stack"}),cljs.core.array_seq([om.dom.section.cljs$core$IFn$_invoke$arity$variadic(({"id": "info"}),cljs.core.array_seq([om.dom.h2.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq(["Stop wasting time in lines."], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Traincheck\u2122 is a project by Sakay.ph that shows you the perfect time to take the MRT. We predict when train stations are going to be crowded, so you can avoid lines and crowds. It's also a part of our main app, Sakay.ph!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "", "target": "_blank", "rel": "noopener noreferrer", "href": "https://blog.sakay.ph"}),cljs.core.array_seq([om.dom.i(({"className": "icon-info"}))," How does it work?"], 0))], 0))], 0)),om.dom.section.cljs$core$IFn$_invoke$arity$variadic(({"id": "plug"}),cljs.core.array_seq([om.dom.h2.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq(["Go beyond trains."], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Be better informed and get smarter directions with Sakay.ph. Our app knows buses, jeepneys, trains, shuttles, and soon: UV express. We do bus GPS tracking, incident reports, traffic modeling, and of course, train predictions. Get our app!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "", "href": "https://itunes.apple.com/ph/app/sakay.ph/id937998546?mt=8&uo=4"}),cljs.core.array_seq([om.dom.i(({"className": "icon-appleinc"}))," iPhone"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.a.cljs$core$IFn$_invoke$arity$variadic(({"className": "", "href": "https://play.google.com/store/apps/details?id=com.byimplication.sakay"}),cljs.core.array_seq([om.dom.i(({"className": "icon-android"}))," Android"], 0))], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "etc"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "container pad"}),cljs.core.array_seq(["Copyright / FB / Twitter / Blog / email / Colophon / TOS"], 0))], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27139;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27138;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27137;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27136;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27135;
}});})(x27021_27144))
;


barado.core.App.prototype.constructor = barado.core.App;

barado.core.App.prototype.constructor.displayName = "barado.core/App";

barado.core.App.prototype.om$isComponent = true;

var x27142_27164 = barado.core.App;
/** @nocollapse */
x27142_27164.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x27142_27164.om$next$IQueryParams$params$arity$1 = ((function (x27142_27164){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$station,null,cljs.core.cst$kw$platform,null,cljs.core.cst$kw$platform_DASH_name_DASH_cache,"South"], null);
});})(x27142_27164))
;

/** @nocollapse */
x27142_27164.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x27142_27164.om$next$IQuery$query$arity$1 = ((function (x27142_27164){
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
});})(x27142_27164))
;


var x27143_27165 = barado.core.App.prototype;

x27143_27165.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;


x27143_27165.om$next$IQueryParams$params$arity$1 = ((function (x27143_27165){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$station,null,cljs.core.cst$kw$platform,null,cljs.core.cst$kw$platform_DASH_name_DASH_cache,"South"], null);
});})(x27143_27165))
;


x27143_27165.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x27143_27165.om$next$IQuery$query$arity$1 = ((function (x27143_27165){
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
});})(x27143_27165))
;


barado.core.App.cljs$lang$type = true;

barado.core.App.cljs$lang$ctorStr = "barado.core/App";

barado.core.App.cljs$lang$ctorPrWriter = (function (this__19601__auto__,writer__19602__auto__,opt__19603__auto__){
return cljs.core._write(writer__19602__auto__,"barado.core/App");
});
barado.core.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,barado.parser.read,cljs.core.cst$kw$mutate,barado.parser.mutate], null));
barado.core.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$parser,barado.core.parser,cljs.core.cst$kw$state,barado.core.init_app_state,cljs.core.cst$kw$send,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(barado.remotes.send,(function (){
return barado.core.reconciler;
})),cljs.core.cst$kw$merge,barado.remotes.incorp,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lines,cljs.core.cst$kw$line_DASH_data], null)], null));
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(barado.core.reconciler,barado.core.App,goog.dom.getElement("app"));
