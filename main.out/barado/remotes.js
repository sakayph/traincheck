// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.remotes');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.net.XhrIo');
goog.require('barado.util');
goog.require('cognitect.transit');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('om.next');
barado.remotes.api_uri = "https://barado.sakay.ph/api/";
/**
 * Modified GET in the style of ajax,
 *   but uses goog xhrio to minimize filesize
 */
barado.remotes.GET = (function barado$remotes$GET(url,opts){
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
var str_params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params){
return (function (p__22063){
var vec__22064 = p__22063;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064,(1),null);
return [cljs.core.str(cljs.core.name(param)),cljs.core.str("="),cljs.core.str(val)].join('');
});})(params))
,params));
var xhr_url = [cljs.core.str(url),cljs.core.str("?"),cljs.core.str(str_params)].join('');
var G__22067 = xhr_url;
var G__22068 = ((function (G__22067,params,str_params,xhr_url){
return (function (e){
var xhr = e.target;
var response = xhr.getResponseText();
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
var d = cognitect.transit.read(reader,response);
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(opts).call(null,d);
});})(G__22067,params,str_params,xhr_url))
;
return goog.net.XhrIo.send(G__22067,G__22068);
});
barado.remotes.process_lines = (function barado$remotes$process_lines(lines){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__22082){
var vec__22083 = p__22082;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line_SLASH_id,id,cljs.core.cst$kw$line_SLASH_label,cljs.core.get.cljs$core$IFn$_invoke$arity$2(line,"line-name"),cljs.core.cst$kw$line_SLASH_stations,cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (vec__22083,id,line){
return (function (s){
return cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$station_SLASH_platforms.cljs$core$IFn$_invoke$arity$1(s)));
});})(vec__22083,id,line))
,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__22083,id,line){
return (function (i,p__22086){
var vec__22087 = p__22086;
var station_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,(0),null);
var station_platforms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$station_SLASH_id,i,cljs.core.cst$kw$station_SLASH_label,station_name,cljs.core.cst$kw$station_SLASH_platforms,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__22087,station_name,station_platforms,vec__22083,id,line){
return (function (p__22090){
var vec__22091 = p__22090;
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22091,(0),null);
var platform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22091,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$platform_SLASH_id,id__$1,cljs.core.cst$kw$platform_SLASH_label,cljs.core.get.cljs$core$IFn$_invoke$arity$2(platform,"platform-name"),cljs.core.cst$kw$platform_SLASH_full_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(platform,"full-name")], null);
});})(vec__22087,station_name,station_platforms,vec__22083,id,line))
,station_platforms)], null);
});})(vec__22083,id,line))
,cljs.core.group_by(((function (vec__22083,id,line){
return (function (p1__22069_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__22069_SHARP_),"station-name");
});})(vec__22083,id,line))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(line,"platforms")))))], null);
}),lines);
});
/**
 * Function for handling remotes. Order of whens is important
 */
barado.remotes.send = (function barado$remotes$send(get_rec,p__22094,cb){
var map__22099 = p__22094;
var map__22099__$1 = ((((!((map__22099 == null)))?((((map__22099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22099):map__22099);
var remotes = map__22099__$1;
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,cljs.core.cst$kw$lines);
var line_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,cljs.core.cst$kw$line_DASH_data);
if(cljs.core.truth_(lines)){
barado.remotes.GET([cljs.core.str(barado.remotes.api_uri),cljs.core.str("line")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,"transit"], null),cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$transit,cljs.core.cst$kw$handler,((function (map__22099,map__22099__$1,remotes,lines,line_data){
return (function (d){
var reconciler = (get_rec.cljs$core$IFn$_invoke$arity$0 ? get_rec.cljs$core$IFn$_invoke$arity$0() : get_rec.call(null));
var system_lines = barado.remotes.process_lines(d);
var default_line = cljs.core.first(system_lines);
var default_station = cljs.core.first(cljs.core.cst$kw$line_SLASH_stations.cljs$core$IFn$_invoke$arity$1(default_line));
var default_platform = cljs.core.second(cljs.core.cst$kw$station_SLASH_platforms.cljs$core$IFn$_invoke$arity$1(default_station));
var G__22101_22103 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$system_SLASH_lines,system_lines], null);
var G__22102_22104 = lines;
(cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(G__22101_22103,G__22102_22104) : cb.call(null,G__22101_22103,G__22102_22104));

return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2(om.next.app_root(reconciler),((function (reconciler,system_lines,default_line,default_station,default_platform,map__22099,map__22099__$1,remotes,lines,line_data){
return (function (q){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(q,cljs.core.cst$kw$params,((function (reconciler,system_lines,default_line,default_station,default_platform,map__22099,map__22099__$1,remotes,lines,line_data){
return (function (p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$line,cljs.core.cst$kw$line_SLASH_id.cljs$core$IFn$_invoke$arity$1(default_line)),cljs.core.cst$kw$station,cljs.core.cst$kw$station_SLASH_id.cljs$core$IFn$_invoke$arity$1(default_station)),cljs.core.cst$kw$platform,cljs.core.cst$kw$platform_SLASH_id.cljs$core$IFn$_invoke$arity$1(default_platform)),cljs.core.cst$kw$platform_DASH_name_DASH_cache,cljs.core.cst$kw$platform_SLASH_label.cljs$core$IFn$_invoke$arity$1(default_platform));
});})(reconciler,system_lines,default_line,default_station,default_platform,map__22099,map__22099__$1,remotes,lines,line_data))
);
});})(reconciler,system_lines,default_line,default_station,default_platform,map__22099,map__22099__$1,remotes,lines,line_data))
);
});})(map__22099,map__22099__$1,remotes,lines,line_data))
], null));
} else {
}

if(cljs.core.truth_(line_data)){
var line_id = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(om.next.query__GT_ast(line_data)))));
return barado.remotes.GET([cljs.core.str(barado.remotes.api_uri),cljs.core.str("predict")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line_id,cljs.core.cst$kw$format,"transit"], null),cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$transit,cljs.core.cst$kw$handler,((function (line_id,map__22099,map__22099__$1,remotes,lines,line_data){
return (function (d){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(d,line_data) : cb.call(null,d,line_data));
});})(line_id,map__22099,map__22099__$1,remotes,lines,line_data))
], null));
} else {
return null;
}
});
if(typeof barado.remotes.incorp !== 'undefined'){
} else {
barado.remotes.incorp = (function (){var method_table__8549__auto__ = (function (){var G__22105 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22105) : cljs.core.atom.call(null,G__22105));
})();
var prefer_table__8550__auto__ = (function (){var G__22106 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22106) : cljs.core.atom.call(null,G__22106));
})();
var method_cache__8551__auto__ = (function (){var G__22107 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22107) : cljs.core.atom.call(null,G__22107));
})();
var cached_hierarchy__8552__auto__ = (function (){var G__22108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22108) : cljs.core.atom.call(null,G__22108));
})();
var hierarchy__8553__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barado.remotes","incorp"),((function (method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__,hierarchy__8553__auto__){
return (function (_,___$1,___$2,query){
if(cljs.core.truth_(query)){
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(om.next.query__GT_ast(query))));
} else {
return null;
}
});})(method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__,hierarchy__8553__auto__))
,cljs.core.cst$kw$default,hierarchy__8553__auto__,method_table__8549__auto__,prefer_table__8550__auto__,method_cache__8551__auto__,cached_hierarchy__8552__auto__));
})();
}
barado.remotes.incorp.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$current_SLASH_line,(function (reconciler,state,res,query){
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,"created-at");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_SLASH_line], null),cljs.core.cst$kw$next,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (created){
return (function (new_st,p__22109){
var vec__22110 = p__22109;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,(0),null);
var datum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,(1),null);
var buckets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datum,"buckets");
return cljs.core.assoc_in(new_st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$platform_SLASH_by_DASH_id,id,cljs.core.cst$kw$platform_SLASH_data], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (buckets,vec__22110,id,datum,created){
return (function (p__22113){
var vec__22114 = p__22113;
var minute = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22114,(0),null);
var bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22114,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minute,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mean,cljs.core.get.cljs$core$IFn$_invoke$arity$2(bucket,"mean"),cljs.core.cst$kw$stdev,cljs.core.get.cljs$core$IFn$_invoke$arity$2(bucket,"st-dev"),cljs.core.cst$kw$minute,minute], null)], null);
});})(buckets,vec__22110,id,datum,created))
,buckets)));
});})(created))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$system_SLASH_data_DASH_timestamp,created),cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,"platforms"))], null);
}));
barado.remotes.incorp.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (reconciler,state,res,query){
return om.next.default_merge(reconciler,state,res,query);
}));
