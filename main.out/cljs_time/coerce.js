// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__8236__auto__ = (((obj == null))?null:obj);
var m__8237__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__8237__auto__.call(null,obj));
} else {
var m__8237__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__8237__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__22190 = millis;
if((G__22190 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__22190) : goog.date.UtcDateTime.fromTimestamp.call(null,G__22190));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__8380__auto__ = (function cljs_time$coerce$from_string_$_iter__22201(s__22202){
return (new cljs.core.LazySeq(null,(function (){
var s__22202__$1 = s__22202;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22202__$1);
if(temp__6753__auto__){
var s__22202__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22202__$2)){
var c__8378__auto__ = cljs.core.chunk_first(s__22202__$2);
var size__8379__auto__ = cljs.core.count(c__8378__auto__);
var b__22204 = cljs.core.chunk_buffer(size__8379__auto__);
if((function (){var i__22203 = (0);
while(true){
if((i__22203 < size__8379__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8378__auto__,i__22203);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e22209){if((e22209 instanceof Error)){
var _ = e22209;
return null;
} else {
throw e22209;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__22204,d);

var G__22211 = (i__22203 + (1));
i__22203 = G__22211;
continue;
} else {
var G__22212 = (i__22203 + (1));
i__22203 = G__22212;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22204),cljs_time$coerce$from_string_$_iter__22201(cljs.core.chunk_rest(s__22202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22204),null);
}
} else {
var f = cljs.core.first(s__22202__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e22210){if((e22210 instanceof Error)){
var _ = e22210;
return null;
} else {
throw e22210;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__22201(cljs.core.rest(s__22202__$2)));
} else {
var G__22213 = cljs.core.rest(s__22202__$2);
s__22202__$1 = G__22213;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8380__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__22215 = date;
var G__22215__$1 = (((G__22215 == null))?null:G__22215.getTime());
if((G__22215__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__22215__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__22217 = obj;
var G__22217__$1 = (((G__22217 == null))?null:cljs_time.coerce.to_date_time(G__22217));
if((G__22217__$1 == null)){
return null;
} else {
return G__22217__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__22219 = obj;
var G__22219__$1 = (((G__22219 == null))?null:cljs_time.coerce.to_long(G__22219));
if((G__22219__$1 == null)){
return null;
} else {
return (G__22219__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__22221 = obj;
var G__22221__$1 = (((G__22221 == null))?null:cljs_time.coerce.to_date_time(G__22221));
var G__22221__$2 = (((G__22221__$1 == null))?null:G__22221__$1.getTime());
if((G__22221__$2 == null)){
return null;
} else {
return (new Date(G__22221__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__22223 = obj;
var G__22223__$1 = (((G__22223 == null))?null:cljs_time.coerce.to_date_time(G__22223));
if((G__22223__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__22223__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__6751__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__6751__auto__)){
var dt = temp__6751__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__6751__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__6751__auto__)){
var dt = temp__6751__auto__;
var G__22225 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__22225.setHours(dt.getHours());

G__22225.setMinutes(dt.getMinutes());

G__22225.setSeconds(dt.getSeconds());

G__22225.setMilliseconds(dt.getMilliseconds());

return G__22225;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));


Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;


Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});


goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;


goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});


goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;


goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});


goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;


goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long(long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string(string);
}));
