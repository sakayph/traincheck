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
var G__16756 = millis;
if((G__16756 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__16756) : goog.date.UtcDateTime.fromTimestamp.call(null,G__16756));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__8380__auto__ = (function cljs_time$coerce$from_string_$_iter__16767(s__16768){
return (new cljs.core.LazySeq(null,(function (){
var s__16768__$1 = s__16768;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__16768__$1);
if(temp__6753__auto__){
var s__16768__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16768__$2)){
var c__8378__auto__ = cljs.core.chunk_first(s__16768__$2);
var size__8379__auto__ = cljs.core.count(c__8378__auto__);
var b__16770 = cljs.core.chunk_buffer(size__8379__auto__);
if((function (){var i__16769 = (0);
while(true){
if((i__16769 < size__8379__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8378__auto__,i__16769);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e16775){if((e16775 instanceof Error)){
var _ = e16775;
return null;
} else {
throw e16775;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__16770,d);

var G__16777 = (i__16769 + (1));
i__16769 = G__16777;
continue;
} else {
var G__16778 = (i__16769 + (1));
i__16769 = G__16778;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16770),cljs_time$coerce$from_string_$_iter__16767(cljs.core.chunk_rest(s__16768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16770),null);
}
} else {
var f = cljs.core.first(s__16768__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e16776){if((e16776 instanceof Error)){
var _ = e16776;
return null;
} else {
throw e16776;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__16767(cljs.core.rest(s__16768__$2)));
} else {
var G__16779 = cljs.core.rest(s__16768__$2);
s__16768__$1 = G__16779;
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
var G__16781 = date;
var G__16781__$1 = (((G__16781 == null))?null:G__16781.getTime());
if((G__16781__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__16781__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__16783 = obj;
var G__16783__$1 = (((G__16783 == null))?null:cljs_time.coerce.to_date_time(G__16783));
if((G__16783__$1 == null)){
return null;
} else {
return G__16783__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__16785 = obj;
var G__16785__$1 = (((G__16785 == null))?null:cljs_time.coerce.to_long(G__16785));
if((G__16785__$1 == null)){
return null;
} else {
return (G__16785__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__16787 = obj;
var G__16787__$1 = (((G__16787 == null))?null:cljs_time.coerce.to_date_time(G__16787));
var G__16787__$2 = (((G__16787__$1 == null))?null:G__16787__$1.getTime());
if((G__16787__$2 == null)){
return null;
} else {
return (new Date(G__16787__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__16789 = obj;
var G__16789__$1 = (((G__16789 == null))?null:cljs_time.coerce.to_date_time(G__16789));
if((G__16789__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__16789__$1);
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
var G__16791 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__16791.setHours(dt.getHours());

G__16791.setMinutes(dt.getMinutes());

G__16791.setSeconds(dt.getSeconds());

G__16791.setMilliseconds(dt.getMilliseconds());

return G__16791;
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
