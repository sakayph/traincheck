// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.parser');
goog.require('cljs.core');
goog.require('barado.util');
goog.require('om.next');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
if(typeof barado.parser.read !== 'undefined'){
} else {
barado.parser.read = (function (){var method_table__8549__auto__ = (function (){var G__27082 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27082) : cljs.core.atom.call(null,G__27082));
})();
var prefer_table__8550__auto__ = (function (){var G__27083 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27083) : cljs.core.atom.call(null,G__27083));
})();
var method_cache__8551__auto__ = (function (){var G__27084 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27084) : cljs.core.atom.call(null,G__27084));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__27085 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27085) : cljs.core.atom.call(null,G__27085));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.parser","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$system_SLASH_lines,(function (p__27086,key,_){
var map__27087 = p__27086;
var map__27087__$1 = ((((!((map__27087 == null)))?((((map__27087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27087):map__27087);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,cljs.core.cst$kw$query);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,cljs.core.cst$kw$ast);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st),cljs.core.cst$kw$lines,((cljs.core.not(lines_loaded_QMARK_))?ast:null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$station_SLASH_matches,(function (p__27090,key,p__27091){
var map__27092 = p__27090;
var map__27092__$1 = ((((!((map__27092 == null)))?((((map__27092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27092):map__27092);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27092__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27092__$1,cljs.core.cst$kw$query);
var map__27093 = p__27091;
var map__27093__$1 = ((((!((map__27093 == null)))?((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27093):map__27093);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093__$1,cljs.core.cst$kw$line);
var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093__$1,cljs.core.cst$kw$search_DASH_term);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,((cljs.core.not(lines_loaded_QMARK_))?cljs.core.cst$kw$loading_DASH_lines:((cljs.core.not(line))?cljs.core.cst$kw$no_DASH_line_DASH_selected:(function (){var stations = om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,line,cljs.core.cst$kw$line_SLASH_stations], null)),st);
return cljs.core.filterv(((function (stations,st,lines_loaded_QMARK_,map__27092,map__27092__$1,state,query,map__27093,map__27093__$1,line,search_term){
return (function (p1__27089_SHARP_){
return barado.util.match_substr(cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(p1__27089_SHARP_),search_term);
});})(stations,st,lines_loaded_QMARK_,map__27092,map__27092__$1,state,query,map__27093,map__27093__$1,line,search_term))
,stations);
})()
))], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_line,(function (p__27096,key,p__27097){
var map__27098 = p__27096;
var map__27098__$1 = ((((!((map__27098 == null)))?((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27098):map__27098);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27098__$1,cljs.core.cst$kw$ast);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27098__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27098__$1,cljs.core.cst$kw$query);
var map__27099 = p__27097;
var map__27099__$1 = ((((!((map__27099 == null)))?((((map__27099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27099):map__27099);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27099__$1,cljs.core.cst$kw$line);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
var data_timestamp = cljs.core.cst$kw$system_SLASH_data_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(st);
var year_day = ((function (st,lines_loaded_QMARK_,data_timestamp,map__27098,map__27098__$1,ast,state,query,map__27099,map__27099__$1,line){
return (function (ts){
if(cljs.core.truth_(ts)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year,cljs_time.core.day).call(null,ts);
} else {
return null;
}
});})(st,lines_loaded_QMARK_,data_timestamp,map__27098,map__27098__$1,ast,state,query,map__27099,map__27099__$1,line))
;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(cljs.core.truth_((function (){var and__7511__auto__ = line;
if(cljs.core.truth_(and__7511__auto__)){
return lines_loaded_QMARK_;
} else {
return and__7511__auto__;
}
})())?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,line], null),st):null),cljs.core.cst$kw$line_DASH_data,(cljs.core.truth_((function (){var and__7511__auto__ = line;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(year_day(cljs_time.core.today()),year_day(cljs_time.coerce.from_date(data_timestamp)));
} else {
return and__7511__auto__;
}
})())?ast:null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_station,(function (p__27102,key,p__27103){
var map__27104 = p__27102;
var map__27104__$1 = ((((!((map__27104 == null)))?((((map__27104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27104):map__27104);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$query);
var map__27105 = p__27103;
var map__27105__$1 = ((((!((map__27105 == null)))?((((map__27105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27105):map__27105);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27105__$1,cljs.core.cst$kw$station);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.core.truth_(station)?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,station], null),st):null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_test,(function (p__27108,key,p__27109){
var map__27110 = p__27108;
var map__27110__$1 = ((((!((map__27110 == null)))?((((map__27110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27110):map__27110);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27110__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27110__$1,cljs.core.cst$kw$query);
var map__27111 = p__27109;
var map__27111__$1 = ((((!((map__27111 == null)))?((((map__27111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27111):map__27111);
var wut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27111__$1,cljs.core.cst$kw$wut);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,wut], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_platform,(function (p__27114,key,p__27115){
var map__27116 = p__27114;
var map__27116__$1 = ((((!((map__27116 == null)))?((((map__27116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27116):map__27116);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$query);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,cljs.core.cst$kw$ast);
var map__27117 = p__27115;
var map__27117__$1 = ((((!((map__27117 == null)))?((((map__27117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27117):map__27117);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27117__$1,cljs.core.cst$kw$platform);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var v = (cljs.core.truth_(platform)?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,platform], null),st):null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__27120,key,_){
var map__27121 = p__27120;
var map__27121__$1 = ((((!((map__27121 == null)))?((((map__27121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27121):map__27121);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key,null)], null);
}));
if(typeof barado.parser.mutate !== 'undefined'){
} else {
barado.parser.mutate = (function (){var method_table__8549__auto__ = (function (){var G__27123 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27123) : cljs.core.atom.call(null,G__27123));
})();
var prefer_table__8550__auto__ = (function (){var G__27124 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27124) : cljs.core.atom.call(null,G__27124));
})();
var method_cache__8551__auto__ = (function (){var G__27125 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27125) : cljs.core.atom.call(null,G__27125));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__27126 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27126) : cljs.core.atom.call(null,G__27126));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$popper_SLASH_toggle,(function (p__27127,key,p__27128){
var map__27129 = p__27127;
var map__27129__$1 = ((((!((map__27129 == null)))?((((map__27129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27129):map__27129);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27129__$1,cljs.core.cst$kw$state);
var map__27130 = p__27128;
var map__27130__$1 = ((((!((map__27130 == null)))?((((map__27130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27130):map__27130);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27130__$1,cljs.core.cst$kw$key);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__27129,map__27129__$1,state,map__27130,map__27130__$1,key__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_active_DASH_popper,key__$1);
});})(map__27129,map__27129__$1,state,map__27130,map__27130__$1,key__$1))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$time_SLASH_refresh,(function (p__27133,key,_){
var map__27134 = p__27133;
var map__27134__$1 = ((((!((map__27134 == null)))?((((map__27134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27134):map__27134);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27134__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__27134,map__27134__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs_time.core.time_now());
});})(map__27134,map__27134__$1,state))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$time_SLASH_set,(function (p__27136,key,p__27137){
var map__27138 = p__27136;
var map__27138__$1 = ((((!((map__27138 == null)))?((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27138):map__27138);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27138__$1,cljs.core.cst$kw$state);
var map__27139 = p__27137;
var map__27139__$1 = ((((!((map__27139 == null)))?((((map__27139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27139):map__27139);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27139__$1,cljs.core.cst$kw$time);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__27138,map__27138__$1,state,map__27139,map__27139__$1,time){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_current_DASH_time,time);
});})(map__27138,map__27138__$1,state,map__27139,map__27139__$1,time))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$threshold_SLASH_set,(function (p__27142,key,p__27143){
var map__27144 = p__27142;
var map__27144__$1 = ((((!((map__27144 == null)))?((((map__27144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27144):map__27144);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27144__$1,cljs.core.cst$kw$state);
var map__27145 = p__27143;
var map__27145__$1 = ((((!((map__27145 == null)))?((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27145):map__27145);
var threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27145__$1,cljs.core.cst$kw$threshold);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__27144,map__27144__$1,state,map__27145,map__27145__$1,threshold){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_time_DASH_threshold,threshold);
});})(map__27144,map__27144__$1,state,map__27145,map__27145__$1,threshold))
], null);
}));
