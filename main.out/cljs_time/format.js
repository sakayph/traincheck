// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs_time.internal.parse');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.unparse');
goog.require('goog.date.duration');
goog.require('cljs_time.core');
goog.require('clojure.set');
cljs_time.format.months = cljs_time.internal.core.months;
cljs_time.format.days = cljs_time.internal.core.days;
cljs_time.format.skip_timezone_formatter = (function cljs_time$format$skip_timezone_formatter(){
return new cljs.core.PersistentArrayMap(null, 2, ["Z",cljs.core.constantly(""),"ZZ",cljs.core.constantly("")], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.format.Formatter = (function (format_str,overrides,default_year,timezone,__meta,__extmap,__hash){
this.format_str = format_str;
this.overrides = overrides;
this.default_year = default_year;
this.timezone = timezone;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8193__auto__,k__8194__auto__){
var self__ = this;
var this__8193__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8193__auto____$1,k__8194__auto__,null);
});


cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8195__auto__,k22061,else__8196__auto__){
var self__ = this;
var this__8195__auto____$1 = this;
var G__22063 = (((k22061 instanceof cljs.core.Keyword))?k22061.fqn:null);
switch (G__22063) {
case "format-str":
return self__.format_str;

break;
case "overrides":
return self__.overrides;

break;
case "default-year":
return self__.default_year;

break;
case "timezone":
return self__.timezone;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22061,else__8196__auto__);

}
});


cljs_time.format.Formatter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8207__auto__,writer__8208__auto__,opts__8209__auto__){
var self__ = this;
var this__8207__auto____$1 = this;
var pr_pair__8210__auto__ = ((function (this__8207__auto____$1){
return (function (keyval__8211__auto__){
return cljs.core.pr_sequential_writer(writer__8208__auto__,cljs.core.pr_writer,""," ","",opts__8209__auto__,keyval__8211__auto__);
});})(this__8207__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8208__auto__,pr_pair__8210__auto__,"#cljs-time.format.Formatter{",", ","}",opts__8209__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$format_DASH_str,self__.format_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$overrides,self__.overrides],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$default_DASH_year,self__.default_year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$timezone,self__.timezone],null))], null),self__.__extmap));
});


cljs_time.format.Formatter.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs_time.format.Formatter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22060){
var self__ = this;
var G__22060__$1 = this;
return (new cljs.core.RecordIter((0),G__22060__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$format_DASH_str,cljs.core.cst$kw$overrides,cljs.core.cst$kw$default_DASH_year,cljs.core.cst$kw$timezone], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs_time.format.Formatter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8191__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
return self__.__meta;
});


cljs_time.format.Formatter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8187__auto__){
var self__ = this;
var this__8187__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,self__.__hash));
});


cljs_time.format.Formatter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8197__auto__){
var self__ = this;
var this__8197__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});


cljs_time.format.Formatter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8188__auto__){
var self__ = this;
var this__8188__auto____$1 = this;
var h__7960__auto__ = self__.__hash;
if(!((h__7960__auto__ == null))){
return h__7960__auto__;
} else {
var h__7960__auto____$1 = cljs.core.hash_imap(this__8188__auto____$1);
self__.__hash = h__7960__auto____$1;

return h__7960__auto____$1;
}
});


cljs_time.format.Formatter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8189__auto__,other__8190__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7511__auto__ = other__8190__auto__;
if(cljs.core.truth_(and__7511__auto__)){
var and__7511__auto____$1 = (this__8189__auto____$1.constructor === other__8190__auto__.constructor);
if(and__7511__auto____$1){
return cljs.core.equiv_map(this__8189__auto____$1,other__8190__auto__);
} else {
return and__7511__auto____$1;
}
} else {
return and__7511__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs_time.format.Formatter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8202__auto__,k__8203__auto__){
var self__ = this;
var this__8202__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$timezone,null,cljs.core.cst$kw$overrides,null,cljs.core.cst$kw$format_DASH_str,null,cljs.core.cst$kw$default_DASH_year,null], null), null),k__8203__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8202__auto____$1),self__.__meta),k__8203__auto__);
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8203__auto__)),null));
}
});


cljs_time.format.Formatter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8200__auto__,k__8201__auto__,G__22060){
var self__ = this;
var this__8200__auto____$1 = this;
var pred__22064 = cljs.core.keyword_identical_QMARK_;
var expr__22065 = k__8201__auto__;
if(cljs.core.truth_((function (){var G__22067 = cljs.core.cst$kw$format_DASH_str;
var G__22068 = expr__22065;
return (pred__22064.cljs$core$IFn$_invoke$arity$2 ? pred__22064.cljs$core$IFn$_invoke$arity$2(G__22067,G__22068) : pred__22064.call(null,G__22067,G__22068));
})())){
return (new cljs_time.format.Formatter(G__22060,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22069 = cljs.core.cst$kw$overrides;
var G__22070 = expr__22065;
return (pred__22064.cljs$core$IFn$_invoke$arity$2 ? pred__22064.cljs$core$IFn$_invoke$arity$2(G__22069,G__22070) : pred__22064.call(null,G__22069,G__22070));
})())){
return (new cljs_time.format.Formatter(self__.format_str,G__22060,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22071 = cljs.core.cst$kw$default_DASH_year;
var G__22072 = expr__22065;
return (pred__22064.cljs$core$IFn$_invoke$arity$2 ? pred__22064.cljs$core$IFn$_invoke$arity$2(G__22071,G__22072) : pred__22064.call(null,G__22071,G__22072));
})())){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,G__22060,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22073 = cljs.core.cst$kw$timezone;
var G__22074 = expr__22065;
return (pred__22064.cljs$core$IFn$_invoke$arity$2 ? pred__22064.cljs$core$IFn$_invoke$arity$2(G__22073,G__22074) : pred__22064.call(null,G__22073,G__22074));
})())){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,G__22060,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8201__auto__,G__22060),null));
}
}
}
}
});


cljs_time.format.Formatter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8205__auto__){
var self__ = this;
var this__8205__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$format_DASH_str,self__.format_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$overrides,self__.overrides],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$default_DASH_year,self__.default_year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$timezone,self__.timezone],null))], null),self__.__extmap));
});


cljs_time.format.Formatter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8192__auto__,G__22060){
var self__ = this;
var this__8192__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,G__22060,self__.__extmap,self__.__hash));
});


cljs_time.format.Formatter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8198__auto__,entry__8199__auto__){
var self__ = this;
var this__8198__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8199__auto__)){
return cljs.core._assoc(this__8198__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8199__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8199__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8198__auto____$1,entry__8199__auto__);
}
});

cljs_time.format.Formatter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$format_DASH_str,cljs.core.cst$sym$overrides,cljs.core.cst$sym$default_DASH_year,cljs.core.cst$sym$timezone], null);
});

cljs_time.format.Formatter.cljs$lang$type = true;

cljs_time.format.Formatter.cljs$lang$ctorPrSeq = (function (this__8229__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.format/Formatter");
});

cljs_time.format.Formatter.cljs$lang$ctorPrWriter = (function (this__8229__auto__,writer__8230__auto__){
return cljs.core._write(writer__8230__auto__,"cljs-time.format/Formatter");
});

cljs_time.format.__GT_Formatter = (function cljs_time$format$__GT_Formatter(format_str,overrides,default_year,timezone){
return (new cljs_time.format.Formatter(format_str,overrides,default_year,timezone,null,null,null));
});

cljs_time.format.map__GT_Formatter = (function cljs_time$format$map__GT_Formatter(G__22062){
return (new cljs_time.format.Formatter(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(G__22062),cljs.core.cst$kw$overrides.cljs$core$IFn$_invoke$arity$1(G__22062),cljs.core.cst$kw$default_DASH_year.cljs$core$IFn$_invoke$arity$1(G__22062),cljs.core.cst$kw$timezone.cljs$core$IFn$_invoke$arity$1(G__22062),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22062,cljs.core.cst$kw$format_DASH_str,cljs.core.array_seq([cljs.core.cst$kw$overrides,cljs.core.cst$kw$default_DASH_year,cljs.core.cst$kw$timezone], 0)),null));
});

cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var args22076 = [];
var len__8739__auto___22079 = arguments.length;
var i__8740__auto___22080 = (0);
while(true){
if((i__8740__auto___22080 < len__8739__auto___22079)){
args22076.push((arguments[i__8740__auto___22080]));

var G__22081 = (i__8740__auto___22080 + (1));
i__8740__auto___22080 = G__22081;
continue;
} else {
}
break;
}

var G__22078 = args22076.length;
switch (G__22078) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22076.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs_time.format.map__GT_Formatter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$timezone,dtz], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs_time.format.map__GT_Formatter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()], null));
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$default_DASH_year,default_year);
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw ({"name": cljs.core.cst$kw$not_DASH_implemented, "message": cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.array_seq([cljs.core.name(sym)], 0))});
});
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   Map of ISO 8601 and a single RFC 822 formatters that can be used
 *   for parsing and, in most cases, printing.
 *   
 *   Note: due to current implementation limitations, timezone information
 *   cannot be kept. Although the correct offset will be applied to UTC
 *   time if supplied.
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *  cljs-time additions:
 *  ------  -------                      ------------  -------
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  o       ordinal suffix               text          st nd rd th (E.G., 1st, 2nd, 3rd, 4th)
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of 'y' is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
 *   colon, 'ZZZ' or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 *   ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 *   '.', ' ', '#' and '?' will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date_DASH_element_DASH_parser,cljs.core.cst$kw$hour_DASH_minute,cljs.core.cst$kw$t_DASH_time,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date,cljs.core.cst$kw$date,cljs.core.cst$kw$hour,cljs.core.cst$kw$time_DASH_no_DASH_ms,cljs.core.cst$kw$weekyear_DASH_week_DASH_day,cljs.core.cst$kw$week_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$basic_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_time,cljs.core.cst$kw$basic_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$date_DASH_parser,cljs.core.cst$kw$basic_DASH_week_DASH_date,cljs.core.cst$kw$basic_DASH_t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$local_DASH_time,cljs.core.cst$kw$date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month_DASH_day,cljs.core.cst$kw$date_DASH_opt_DASH_time,cljs.core.cst$kw$rfc822,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$date_DASH_hour_DASH_minute,cljs.core.cst$kw$time,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time,cljs.core.cst$kw$weekyear,cljs.core.cst$kw$basic_DASH_time,cljs.core.cst$kw$hour_DASH_minute_DASH_second,cljs.core.cst$kw$ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$time_DASH_parser,cljs.core.cst$kw$date_DASH_time_DASH_parser,cljs.core.cst$kw$year,cljs.core.cst$kw$t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date,cljs.core.cst$kw$weekyear_DASH_week,cljs.core.cst$kw$local_DASH_date,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,cljs.core.cst$kw$week_DASH_date,cljs.core.cst$kw$date_DASH_hour,cljs.core.cst$kw$time_DASH_element_DASH_parser,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second,cljs.core.cst$kw$week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$mysql,cljs.core.cst$kw$basic_DASH_t_DASH_time],[cljs_time.format.not_implemented(cljs.core.cst$sym$dateElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$localTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$timeParser),cljs_time.format.not_implemented(cljs.core.cst$sym$dateTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(cljs.core.cst$sym$timeElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$date_DASH_element_DASH_parser,null,cljs.core.cst$kw$date_DASH_parser,null,cljs.core.cst$kw$local_DASH_time,null,cljs.core.cst$kw$date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_parser,null,cljs.core.cst$kw$date_DASH_time_DASH_parser,null,cljs.core.cst$kw$local_DASH_date,null,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_element_DASH_parser,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var args22083 = [];
var len__8739__auto___22096 = arguments.length;
var i__8740__auto___22097 = (0);
while(true){
if((i__8740__auto___22097 < len__8739__auto___22096)){
args22083.push((arguments[i__8740__auto___22097]));

var G__22098 = (i__8740__auto___22097 + (1));
i__8740__auto___22097 = G__22098;
continue;
} else {
}
break;
}

var G__22085 = args22083.length;
switch (G__22085) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22083.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$UtcDateTime,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8380__auto__ = (function cljs_time$format$iter__22086(s__22087){
return (new cljs.core.LazySeq(null,(function (){
var s__22087__$1 = s__22087;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22087__$1);
if(temp__6753__auto__){
var s__22087__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22087__$2)){
var c__8378__auto__ = cljs.core.chunk_first(s__22087__$2);
var size__8379__auto__ = cljs.core.count(c__8378__auto__);
var b__22089 = cljs.core.chunk_buffer(size__8379__auto__);
if((function (){var i__22088 = (0);
while(true){
if((i__22088 < size__8379__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8378__auto__,i__22088);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e22094){var _ = e22094;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__22089,d);

var G__22100 = (i__22088 + (1));
i__22088 = G__22100;
continue;
} else {
var G__22101 = (i__22088 + (1));
i__22088 = G__22101;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22089),cljs_time$format$iter__22086(cljs.core.chunk_rest(s__22087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22089),null);
}
} else {
var f = cljs.core.first(s__22087__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e22095){var _ = e22095;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__22086(cljs.core.rest(s__22087__$2)));
} else {
var G__22102 = cljs.core.rest(s__22087__$2);
s__22087__$1 = G__22102;
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
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var args22103 = [];
var len__8739__auto___22116 = arguments.length;
var i__8740__auto___22117 = (0);
while(true){
if((i__8740__auto___22117 < len__8739__auto___22116)){
args22103.push((arguments[i__8740__auto___22117]));

var G__22118 = (i__8740__auto___22117 + (1));
i__8740__auto___22117 = G__22118;
continue;
} else {
}
break;
}

var G__22105 = args22103.length;
switch (G__22105) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22103.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$DateTime,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8380__auto__ = (function cljs_time$format$iter__22106(s__22107){
return (new cljs.core.LazySeq(null,(function (){
var s__22107__$1 = s__22107;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22107__$1);
if(temp__6753__auto__){
var s__22107__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22107__$2)){
var c__8378__auto__ = cljs.core.chunk_first(s__22107__$2);
var size__8379__auto__ = cljs.core.count(c__8378__auto__);
var b__22109 = cljs.core.chunk_buffer(size__8379__auto__);
if((function (){var i__22108 = (0);
while(true){
if((i__22108 < size__8379__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8378__auto__,i__22108);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e22114){if((e22114 instanceof Error)){
var _ = e22114;
return null;
} else {
throw e22114;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__22109,d);

var G__22120 = (i__22108 + (1));
i__22108 = G__22120;
continue;
} else {
var G__22121 = (i__22108 + (1));
i__22108 = G__22121;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22109),cljs_time$format$iter__22106(cljs.core.chunk_rest(s__22107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22109),null);
}
} else {
var f = cljs.core.first(s__22107__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e22115){if((e22115 instanceof Error)){
var _ = e22115;
return null;
} else {
throw e22115;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__22106(cljs.core.rest(s__22107__$2)));
} else {
var G__22122 = cljs.core.rest(s__22107__$2);
s__22107__$1 = G__22122;
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
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var args22123 = [];
var len__8739__auto___22136 = arguments.length;
var i__8740__auto___22137 = (0);
while(true){
if((i__8740__auto___22137 < len__8739__auto___22136)){
args22123.push((arguments[i__8740__auto___22137]));

var G__22138 = (i__8740__auto___22137 + (1));
i__8740__auto___22137 = G__22138;
continue;
} else {
}
break;
}

var G__22125 = args22123.length;
switch (G__22125) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22123.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$Date,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8380__auto__ = (function cljs_time$format$iter__22126(s__22127){
return (new cljs.core.LazySeq(null,(function (){
var s__22127__$1 = s__22127;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22127__$1);
if(temp__6753__auto__){
var s__22127__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22127__$2)){
var c__8378__auto__ = cljs.core.chunk_first(s__22127__$2);
var size__8379__auto__ = cljs.core.count(c__8378__auto__);
var b__22129 = cljs.core.chunk_buffer(size__8379__auto__);
if((function (){var i__22128 = (0);
while(true){
if((i__22128 < size__8379__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8378__auto__,i__22128);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e22134){if((e22134 instanceof Error)){
var _ = e22134;
return null;
} else {
throw e22134;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__22129,d);

var G__22140 = (i__22128 + (1));
i__22128 = G__22140;
continue;
} else {
var G__22141 = (i__22128 + (1));
i__22128 = G__22141;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22129),cljs_time$format$iter__22126(cljs.core.chunk_rest(s__22127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22129),null);
}
} else {
var f = cljs.core.first(s__22127__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e22135){if((e22135 instanceof Error)){
var _ = e22135;
return null;
} else {
throw e22135;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__22126(cljs.core.rest(s__22127__$2)));
} else {
var G__22142 = cljs.core.rest(s__22127__$2);
s__22127__$1 = G__22142;
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
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__22143,dt){
var map__22146 = p__22143;
var map__22146__$1 = ((((!((map__22146 == null)))?((((map__22146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22146):map__22146);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs_time.internal.unparse.unparse(format_str,dt);
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__22148,dt){
var map__22151 = p__22148;
var map__22151__$1 = ((((!((map__22151 == null)))?((((map__22151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22151):map__22151);
var fmt = map__22151__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22151__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs_time.format.unparse(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmt,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()),dt);
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__22153,dt){
var map__22156 = p__22153;
var map__22156__$1 = ((((!((map__22156 == null)))?((((map__22156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22156):map__22156);
var fmt = map__22156__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22156__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22156__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs_time.format.unparse(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmt,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()),dt);
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var args22158 = [];
var len__8739__auto___22165 = arguments.length;
var i__8740__auto___22166 = (0);
while(true){
if((i__8740__auto___22166 < len__8739__auto___22165)){
args22158.push((arguments[i__8740__auto___22166]));

var G__22167 = (i__8740__auto___22166 + (1));
i__8740__auto___22166 = G__22167;
continue;
} else {
}
break;
}

var G__22160 = args22158.length;
switch (G__22160) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22158.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__22161 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__22162 = null;
var count__22163 = (0);
var i__22164 = (0);
while(true){
if((i__22164 < count__22163)){
var p = chunk__22162.cljs$core$IIndexed$_nth$arity$2(null,i__22164);
var fmt_22169 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_22169,dt)], 0))], 0));

var G__22170 = seq__22161;
var G__22171 = chunk__22162;
var G__22172 = count__22163;
var G__22173 = (i__22164 + (1));
seq__22161 = G__22170;
chunk__22162 = G__22171;
count__22163 = G__22172;
i__22164 = G__22173;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__22161);
if(temp__6753__auto__){
var seq__22161__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22161__$1)){
var c__8429__auto__ = cljs.core.chunk_first(seq__22161__$1);
var G__22174 = cljs.core.chunk_rest(seq__22161__$1);
var G__22175 = c__8429__auto__;
var G__22176 = cljs.core.count(c__8429__auto__);
var G__22177 = (0);
seq__22161 = G__22174;
chunk__22162 = G__22175;
count__22163 = G__22176;
i__22164 = G__22177;
continue;
} else {
var p = cljs.core.first(seq__22161__$1);
var fmt_22178 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_22178,dt)], 0))], 0));

var G__22179 = cljs.core.next(seq__22161__$1);
var G__22180 = null;
var G__22181 = (0);
var G__22182 = (0);
seq__22161 = G__22179;
chunk__22162 = G__22180;
count__22163 = G__22181;
i__22164 = G__22182;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((!((instant == null))) && (!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__8236__auto__ = (((instant == null))?null:instant);
var m__8237__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__8237__auto__.call(null,instant));
} else {
var m__8237__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(instant) : m__8237__auto____$1.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__22184 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__22184);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,years,cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,millis], null);
});

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;


goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});


cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;


cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});


cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;


cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});


cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__22185 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);
switch (G__22185) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period(m__$1);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)))].join('')));

}
});
