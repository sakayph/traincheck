// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.parser');
goog.require('cljs.core');
goog.require('barado.util');
goog.require('om.next');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
if(typeof barado.parser.read !== 'undefined'){
} else {
barado.parser.read = (function (){var method_table__8549__auto__ = (function (){var G__26920 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26920) : cljs.core.atom.call(null,G__26920));
})();
var prefer_table__8550__auto__ = (function (){var G__26921 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26921) : cljs.core.atom.call(null,G__26921));
})();
var method_cache__8551__auto__ = (function (){var G__26922 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26922) : cljs.core.atom.call(null,G__26922));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__26923 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26923) : cljs.core.atom.call(null,G__26923));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.parser","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$system_SLASH_lines,(function (p__26924,key,_){
var map__26925 = p__26924;
var map__26925__$1 = ((((!((map__26925 == null)))?((((map__26925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26925):map__26925);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26925__$1,cljs.core.cst$kw$query);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26925__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26925__$1,cljs.core.cst$kw$ast);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st),cljs.core.cst$kw$lines,((cljs.core.not(lines_loaded_QMARK_))?ast:null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$station_SLASH_matches,(function (p__26928,key,p__26929){
var map__26930 = p__26928;
var map__26930__$1 = ((((!((map__26930 == null)))?((((map__26930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26930):map__26930);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26930__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26930__$1,cljs.core.cst$kw$query);
var map__26931 = p__26929;
var map__26931__$1 = ((((!((map__26931 == null)))?((((map__26931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26931):map__26931);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26931__$1,cljs.core.cst$kw$line);
var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26931__$1,cljs.core.cst$kw$search_DASH_term);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,((cljs.core.not(lines_loaded_QMARK_))?cljs.core.cst$kw$loading_DASH_lines:((cljs.core.not(line))?cljs.core.cst$kw$no_DASH_line_DASH_selected:(function (){var stations = om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,line,cljs.core.cst$kw$line_SLASH_stations], null)),st);
return cljs.core.filterv(((function (stations,st,lines_loaded_QMARK_,map__26930,map__26930__$1,state,query,map__26931,map__26931__$1,line,search_term){
return (function (p1__26927_SHARP_){
return barado.util.match_substr(cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(p1__26927_SHARP_),search_term);
});})(stations,st,lines_loaded_QMARK_,map__26930,map__26930__$1,state,query,map__26931,map__26931__$1,line,search_term))
,stations);
})()
))], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_line,(function (p__26934,key,p__26935){
var map__26936 = p__26934;
var map__26936__$1 = ((((!((map__26936 == null)))?((((map__26936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26936):map__26936);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26936__$1,cljs.core.cst$kw$ast);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26936__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26936__$1,cljs.core.cst$kw$query);
var map__26937 = p__26935;
var map__26937__$1 = ((((!((map__26937 == null)))?((((map__26937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26937):map__26937);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26937__$1,cljs.core.cst$kw$line);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
var data_timestamp = cljs.core.cst$kw$system_SLASH_data_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(st);
var year_day = ((function (st,lines_loaded_QMARK_,data_timestamp,map__26936,map__26936__$1,ast,state,query,map__26937,map__26937__$1,line){
return (function (ts){
if(cljs.core.truth_(ts)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year,cljs_time.core.day).call(null,ts);
} else {
return null;
}
});})(st,lines_loaded_QMARK_,data_timestamp,map__26936,map__26936__$1,ast,state,query,map__26937,map__26937__$1,line))
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
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_station,(function (p__26940,key,p__26941){
var map__26942 = p__26940;
var map__26942__$1 = ((((!((map__26942 == null)))?((((map__26942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26942):map__26942);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26942__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26942__$1,cljs.core.cst$kw$query);
var map__26943 = p__26941;
var map__26943__$1 = ((((!((map__26943 == null)))?((((map__26943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26943):map__26943);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26943__$1,cljs.core.cst$kw$station);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.core.truth_(station)?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,station], null),st):null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_test,(function (p__26946,key,p__26947){
var map__26948 = p__26946;
var map__26948__$1 = ((((!((map__26948 == null)))?((((map__26948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26948):map__26948);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,cljs.core.cst$kw$query);
var map__26949 = p__26947;
var map__26949__$1 = ((((!((map__26949 == null)))?((((map__26949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26949):map__26949);
var wut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26949__$1,cljs.core.cst$kw$wut);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,wut], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_platform,(function (p__26952,key,p__26953){
var map__26954 = p__26952;
var map__26954__$1 = ((((!((map__26954 == null)))?((((map__26954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26954):map__26954);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$query);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$ast);
var map__26955 = p__26953;
var map__26955__$1 = ((((!((map__26955 == null)))?((((map__26955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26955):map__26955);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26955__$1,cljs.core.cst$kw$platform);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var v = (cljs.core.truth_(platform)?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,platform], null),st):null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__26958,key,_){
var map__26959 = p__26958;
var map__26959__$1 = ((((!((map__26959 == null)))?((((map__26959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26959):map__26959);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26959__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key,null)], null);
}));
if(typeof barado.parser.mutate !== 'undefined'){
} else {
barado.parser.mutate = (function (){var method_table__8549__auto__ = (function (){var G__26961 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26961) : cljs.core.atom.call(null,G__26961));
})();
var prefer_table__8550__auto__ = (function (){var G__26962 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26962) : cljs.core.atom.call(null,G__26962));
})();
var method_cache__8551__auto__ = (function (){var G__26963 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26963) : cljs.core.atom.call(null,G__26963));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__26964 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26964) : cljs.core.atom.call(null,G__26964));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$popper_SLASH_toggle,(function (p__26965,key,p__26966){
var map__26967 = p__26965;
var map__26967__$1 = ((((!((map__26967 == null)))?((((map__26967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26967):map__26967);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26967__$1,cljs.core.cst$kw$state);
var map__26968 = p__26966;
var map__26968__$1 = ((((!((map__26968 == null)))?((((map__26968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26968):map__26968);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26968__$1,cljs.core.cst$kw$key);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__26967,map__26967__$1,state,map__26968,map__26968__$1,key__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_active_DASH_popper,key__$1);
});})(map__26967,map__26967__$1,state,map__26968,map__26968__$1,key__$1))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$time_SLASH_refresh,(function (p__26971,key,_){
var map__26972 = p__26971;
var map__26972__$1 = ((((!((map__26972 == null)))?((((map__26972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26972):map__26972);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26972__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__26972,map__26972__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs_time.core.time_now());
});})(map__26972,map__26972__$1,state))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$time_SLASH_set,(function (p__26974,key,p__26975){
var map__26976 = p__26974;
var map__26976__$1 = ((((!((map__26976 == null)))?((((map__26976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26976):map__26976);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26976__$1,cljs.core.cst$kw$state);
var map__26977 = p__26975;
var map__26977__$1 = ((((!((map__26977 == null)))?((((map__26977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26977):map__26977);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26977__$1,cljs.core.cst$kw$time);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__26976,map__26976__$1,state,map__26977,map__26977__$1,time){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_current_DASH_time,time);
});})(map__26976,map__26976__$1,state,map__26977,map__26977__$1,time))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$threshold_SLASH_set,(function (p__26980,key,p__26981){
var map__26982 = p__26980;
var map__26982__$1 = ((((!((map__26982 == null)))?((((map__26982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26982):map__26982);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26982__$1,cljs.core.cst$kw$state);
var map__26983 = p__26981;
var map__26983__$1 = ((((!((map__26983 == null)))?((((map__26983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26983):map__26983);
var threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26983__$1,cljs.core.cst$kw$threshold);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__26982,map__26982__$1,state,map__26983,map__26983__$1,threshold){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_time_DASH_threshold,threshold);
});})(map__26982,map__26982__$1,state,map__26983,map__26983__$1,threshold))
], null);
}));
