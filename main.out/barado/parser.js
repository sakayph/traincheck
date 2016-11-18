// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.parser');
goog.require('cljs.core');
goog.require('barado.util');
goog.require('om.next');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
if(typeof barado.parser.read !== 'undefined'){
} else {
barado.parser.read = (function (){var method_table__8549__auto__ = (function (){var G__26918 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26918) : cljs.core.atom.call(null,G__26918));
})();
var prefer_table__8550__auto__ = (function (){var G__26919 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26919) : cljs.core.atom.call(null,G__26919));
})();
var method_cache__8551__auto__ = (function (){var G__26920 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26920) : cljs.core.atom.call(null,G__26920));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__26921 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26921) : cljs.core.atom.call(null,G__26921));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.parser","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$system_SLASH_lines,(function (p__26922,key,_){
var map__26923 = p__26922;
var map__26923__$1 = ((((!((map__26923 == null)))?((((map__26923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26923):map__26923);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923__$1,cljs.core.cst$kw$query);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923__$1,cljs.core.cst$kw$ast);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st),cljs.core.cst$kw$lines,((cljs.core.not(lines_loaded_QMARK_))?ast:null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$station_SLASH_matches,(function (p__26926,key,p__26927){
var map__26928 = p__26926;
var map__26928__$1 = ((((!((map__26928 == null)))?((((map__26928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26928):map__26928);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,cljs.core.cst$kw$query);
var map__26929 = p__26927;
var map__26929__$1 = ((((!((map__26929 == null)))?((((map__26929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26929):map__26929);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26929__$1,cljs.core.cst$kw$line);
var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26929__$1,cljs.core.cst$kw$search_DASH_term);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,((cljs.core.not(lines_loaded_QMARK_))?cljs.core.cst$kw$loading_DASH_lines:((cljs.core.not(line))?cljs.core.cst$kw$no_DASH_line_DASH_selected:(function (){var stations = om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,line,cljs.core.cst$kw$line_SLASH_stations], null)),st);
return cljs.core.filterv(((function (stations,st,lines_loaded_QMARK_,map__26928,map__26928__$1,state,query,map__26929,map__26929__$1,line,search_term){
return (function (p1__26925_SHARP_){
return barado.util.match_substr(cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(p1__26925_SHARP_),search_term);
});})(stations,st,lines_loaded_QMARK_,map__26928,map__26928__$1,state,query,map__26929,map__26929__$1,line,search_term))
,stations);
})()
))], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_line,(function (p__26932,key,p__26933){
var map__26934 = p__26932;
var map__26934__$1 = ((((!((map__26934 == null)))?((((map__26934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26934):map__26934);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26934__$1,cljs.core.cst$kw$ast);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26934__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26934__$1,cljs.core.cst$kw$query);
var map__26935 = p__26933;
var map__26935__$1 = ((((!((map__26935 == null)))?((((map__26935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26935):map__26935);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26935__$1,cljs.core.cst$kw$line);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
var data_timestamp = cljs.core.cst$kw$system_SLASH_data_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(st);
var year_day = ((function (st,lines_loaded_QMARK_,data_timestamp,map__26934,map__26934__$1,ast,state,query,map__26935,map__26935__$1,line){
return (function (ts){
if(cljs.core.truth_(ts)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year,cljs_time.core.day).call(null,ts);
} else {
return null;
}
});})(st,lines_loaded_QMARK_,data_timestamp,map__26934,map__26934__$1,ast,state,query,map__26935,map__26935__$1,line))
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
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_station,(function (p__26938,key,p__26939){
var map__26940 = p__26938;
var map__26940__$1 = ((((!((map__26940 == null)))?((((map__26940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26940):map__26940);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26940__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26940__$1,cljs.core.cst$kw$query);
var map__26941 = p__26939;
var map__26941__$1 = ((((!((map__26941 == null)))?((((map__26941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26941):map__26941);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26941__$1,cljs.core.cst$kw$station);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.core.truth_(station)?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,station], null),st):null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_test,(function (p__26944,key,p__26945){
var map__26946 = p__26944;
var map__26946__$1 = ((((!((map__26946 == null)))?((((map__26946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26946):map__26946);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26946__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26946__$1,cljs.core.cst$kw$query);
var map__26947 = p__26945;
var map__26947__$1 = ((((!((map__26947 == null)))?((((map__26947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26947):map__26947);
var wut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26947__$1,cljs.core.cst$kw$wut);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,wut], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_platform,(function (p__26950,key,p__26951){
var map__26952 = p__26950;
var map__26952__$1 = ((((!((map__26952 == null)))?((((map__26952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26952):map__26952);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,cljs.core.cst$kw$query);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,cljs.core.cst$kw$ast);
var map__26953 = p__26951;
var map__26953__$1 = ((((!((map__26953 == null)))?((((map__26953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26953):map__26953);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26953__$1,cljs.core.cst$kw$platform);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var v = (cljs.core.truth_(platform)?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,platform], null),st):null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__26956,key,_){
var map__26957 = p__26956;
var map__26957__$1 = ((((!((map__26957 == null)))?((((map__26957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26957):map__26957);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26957__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key,null)], null);
}));
if(typeof barado.parser.mutate !== 'undefined'){
} else {
barado.parser.mutate = (function (){var method_table__8549__auto__ = (function (){var G__26959 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26959) : cljs.core.atom.call(null,G__26959));
})();
var prefer_table__8550__auto__ = (function (){var G__26960 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26960) : cljs.core.atom.call(null,G__26960));
})();
var method_cache__8551__auto__ = (function (){var G__26961 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26961) : cljs.core.atom.call(null,G__26961));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__26962 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26962) : cljs.core.atom.call(null,G__26962));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$popper_SLASH_toggle,(function (p__26963,key,p__26964){
var map__26965 = p__26963;
var map__26965__$1 = ((((!((map__26965 == null)))?((((map__26965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26965):map__26965);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26965__$1,cljs.core.cst$kw$state);
var map__26966 = p__26964;
var map__26966__$1 = ((((!((map__26966 == null)))?((((map__26966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26966):map__26966);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26966__$1,cljs.core.cst$kw$key);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__26965,map__26965__$1,state,map__26966,map__26966__$1,key__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_active_DASH_popper,key__$1);
});})(map__26965,map__26965__$1,state,map__26966,map__26966__$1,key__$1))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$time_SLASH_refresh,(function (p__26969,key,_){
var map__26970 = p__26969;
var map__26970__$1 = ((((!((map__26970 == null)))?((((map__26970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26970):map__26970);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__26970,map__26970__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs_time.core.time_now());
});})(map__26970,map__26970__$1,state))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$time_SLASH_set,(function (p__26972,key,p__26973){
var map__26974 = p__26972;
var map__26974__$1 = ((((!((map__26974 == null)))?((((map__26974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26974):map__26974);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26974__$1,cljs.core.cst$kw$state);
var map__26975 = p__26973;
var map__26975__$1 = ((((!((map__26975 == null)))?((((map__26975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26975):map__26975);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26975__$1,cljs.core.cst$kw$time);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__26974,map__26974__$1,state,map__26975,map__26975__$1,time){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_current_DASH_time,time);
});})(map__26974,map__26974__$1,state,map__26975,map__26975__$1,time))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$threshold_SLASH_set,(function (p__26978,key,p__26979){
var map__26980 = p__26978;
var map__26980__$1 = ((((!((map__26980 == null)))?((((map__26980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26980):map__26980);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,cljs.core.cst$kw$state);
var map__26981 = p__26979;
var map__26981__$1 = ((((!((map__26981 == null)))?((((map__26981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26981):map__26981);
var threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26981__$1,cljs.core.cst$kw$threshold);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__26980,map__26980__$1,state,map__26981,map__26981__$1,threshold){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_time_DASH_threshold,threshold);
});})(map__26980,map__26980__$1,state,map__26981,map__26981__$1,threshold))
], null);
}));
