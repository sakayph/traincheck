// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.parser');
goog.require('cljs.core');
goog.require('barado.util');
goog.require('om.next');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
if(typeof barado.parser.read !== 'undefined'){
} else {
barado.parser.read = (function (){var method_table__8549__auto__ = (function (){var G__27075 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27075) : cljs.core.atom.call(null,G__27075));
})();
var prefer_table__8550__auto__ = (function (){var G__27076 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27076) : cljs.core.atom.call(null,G__27076));
})();
var method_cache__8551__auto__ = (function (){var G__27077 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27077) : cljs.core.atom.call(null,G__27077));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__27078 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27078) : cljs.core.atom.call(null,G__27078));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.parser","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$system_SLASH_lines,(function (p__27079,key,_){
var map__27080 = p__27079;
var map__27080__$1 = ((((!((map__27080 == null)))?((((map__27080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27080):map__27080);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27080__$1,cljs.core.cst$kw$query);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27080__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27080__$1,cljs.core.cst$kw$ast);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st),cljs.core.cst$kw$lines,((cljs.core.not(lines_loaded_QMARK_))?ast:null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$station_SLASH_matches,(function (p__27083,key,p__27084){
var map__27085 = p__27083;
var map__27085__$1 = ((((!((map__27085 == null)))?((((map__27085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27085):map__27085);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27085__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27085__$1,cljs.core.cst$kw$query);
var map__27086 = p__27084;
var map__27086__$1 = ((((!((map__27086 == null)))?((((map__27086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27086):map__27086);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27086__$1,cljs.core.cst$kw$line);
var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27086__$1,cljs.core.cst$kw$search_DASH_term);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,((cljs.core.not(lines_loaded_QMARK_))?cljs.core.cst$kw$loading_DASH_lines:((cljs.core.not(line))?cljs.core.cst$kw$no_DASH_line_DASH_selected:(function (){var stations = om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line_SLASH_by_DASH_id,line,cljs.core.cst$kw$line_SLASH_stations], null)),st);
return cljs.core.filterv(((function (stations,st,lines_loaded_QMARK_,map__27085,map__27085__$1,state,query,map__27086,map__27086__$1,line,search_term){
return (function (p1__27082_SHARP_){
return barado.util.match_substr(cljs.core.cst$kw$station_SLASH_label.cljs$core$IFn$_invoke$arity$1(p1__27082_SHARP_),search_term);
});})(stations,st,lines_loaded_QMARK_,map__27085,map__27085__$1,state,query,map__27086,map__27086__$1,line,search_term))
,stations);
})()
))], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_line,(function (p__27089,key,p__27090){
var map__27091 = p__27089;
var map__27091__$1 = ((((!((map__27091 == null)))?((((map__27091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27091):map__27091);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27091__$1,cljs.core.cst$kw$ast);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27091__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27091__$1,cljs.core.cst$kw$query);
var map__27092 = p__27090;
var map__27092__$1 = ((((!((map__27092 == null)))?((((map__27092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27092):map__27092);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27092__$1,cljs.core.cst$kw$line);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var lines_loaded_QMARK_ = cljs.core.seq(cljs.core.cst$kw$system_SLASH_lines.cljs$core$IFn$_invoke$arity$1(st));
var data_timestamp = cljs.core.cst$kw$system_SLASH_data_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(st);
var year_day = ((function (st,lines_loaded_QMARK_,data_timestamp,map__27091,map__27091__$1,ast,state,query,map__27092,map__27092__$1,line){
return (function (ts){
if(cljs.core.truth_(ts)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year,cljs_time.core.day).call(null,ts);
} else {
return null;
}
});})(st,lines_loaded_QMARK_,data_timestamp,map__27091,map__27091__$1,ast,state,query,map__27092,map__27092__$1,line))
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
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_station,(function (p__27095,key,p__27096){
var map__27097 = p__27095;
var map__27097__$1 = ((((!((map__27097 == null)))?((((map__27097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27097):map__27097);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27097__$1,cljs.core.cst$kw$query);
var map__27098 = p__27096;
var map__27098__$1 = ((((!((map__27098 == null)))?((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27098):map__27098);
var station = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27098__$1,cljs.core.cst$kw$station);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.core.truth_(station)?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$station_SLASH_by_DASH_id,station], null),st):null)], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_test,(function (p__27101,key,p__27102){
var map__27103 = p__27101;
var map__27103__$1 = ((((!((map__27103 == null)))?((((map__27103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27103):map__27103);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27103__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27103__$1,cljs.core.cst$kw$query);
var map__27104 = p__27102;
var map__27104__$1 = ((((!((map__27104 == null)))?((((map__27104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27104):map__27104);
var wut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.cst$kw$wut);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,wut], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_platform,(function (p__27107,key,p__27108){
var map__27109 = p__27107;
var map__27109__$1 = ((((!((map__27109 == null)))?((((map__27109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27109):map__27109);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27109__$1,cljs.core.cst$kw$query);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27109__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27109__$1,cljs.core.cst$kw$ast);
var map__27110 = p__27108;
var map__27110__$1 = ((((!((map__27110 == null)))?((((map__27110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27110):map__27110);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27110__$1,cljs.core.cst$kw$platform);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var v = (cljs.core.truth_(platform)?om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,platform], null),st):null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null);
}));
barado.parser.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__27113,key,_){
var map__27114 = p__27113;
var map__27114__$1 = ((((!((map__27114 == null)))?((((map__27114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27114):map__27114);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27114__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key,null)], null);
}));
if(typeof barado.parser.mutate !== 'undefined'){
} else {
barado.parser.mutate = (function (){var method_table__8549__auto__ = (function (){var G__27116 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27116) : cljs.core.atom.call(null,G__27116));
})();
var prefer_table__8550__auto__ = (function (){var G__27117 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27117) : cljs.core.atom.call(null,G__27117));
})();
var method_cache__8551__auto__ = (function (){var G__27118 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27118) : cljs.core.atom.call(null,G__27118));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__27119 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27119) : cljs.core.atom.call(null,G__27119));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$popper_SLASH_toggle,(function (p__27120,key,p__27121){
var map__27122 = p__27120;
var map__27122__$1 = ((((!((map__27122 == null)))?((((map__27122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27122):map__27122);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27122__$1,cljs.core.cst$kw$state);
var map__27123 = p__27121;
var map__27123__$1 = ((((!((map__27123 == null)))?((((map__27123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27123):map__27123);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27123__$1,cljs.core.cst$kw$key);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__27122,map__27122__$1,state,map__27123,map__27123__$1,key__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_active_DASH_popper,key__$1);
});})(map__27122,map__27122__$1,state,map__27123,map__27123__$1,key__$1))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$time_SLASH_refresh,(function (p__27126,key,_){
var map__27127 = p__27126;
var map__27127__$1 = ((((!((map__27127 == null)))?((((map__27127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27127):map__27127);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27127__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__27127,map__27127__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_current_DASH_time,cljs_time.core.time_now());
});})(map__27127,map__27127__$1,state))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$time_SLASH_set,(function (p__27129,key,p__27130){
var map__27131 = p__27129;
var map__27131__$1 = ((((!((map__27131 == null)))?((((map__27131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27131):map__27131);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27131__$1,cljs.core.cst$kw$state);
var map__27132 = p__27130;
var map__27132__$1 = ((((!((map__27132 == null)))?((((map__27132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27132):map__27132);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27132__$1,cljs.core.cst$kw$time);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__27131,map__27131__$1,state,map__27132,map__27132__$1,time){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_current_DASH_time,time);
});})(map__27131,map__27131__$1,state,map__27132,map__27132__$1,time))
], null);
}));
barado.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$threshold_SLASH_set,(function (p__27135,key,p__27136){
var map__27137 = p__27135;
var map__27137__$1 = ((((!((map__27137 == null)))?((((map__27137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27137):map__27137);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27137__$1,cljs.core.cst$kw$state);
var map__27138 = p__27136;
var map__27138__$1 = ((((!((map__27138 == null)))?((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27138):map__27138);
var threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27138__$1,cljs.core.cst$kw$threshold);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__27137,map__27137__$1,state,map__27138,map__27138__$1,threshold){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$system_SLASH_time_DASH_threshold,threshold);
});})(map__27137,map__27137__$1,state,map__27138,map__27138__$1,threshold))
], null);
}));
