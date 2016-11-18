// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('barado.util');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('clojure.string');
goog.require('om.next');
goog.require('cljs_time.format');
barado.util.mobile_regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/;
barado.util.mobile_QMARK_ = cljs.core.seq(cljs.core.re_seq(barado.util.mobile_regex,navigator.userAgent));
barado.util.log = console.log;
barado.util.match_substr = (function barado$util$match_substr(str,substr){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.includes_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str,substr], null)));
});
barado.util.time_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("hh:mm a");
barado.util.safe_name_rate = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.name,"no rating");
barado.util.thresholds = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(30),cljs.core.cst$kw$label,"30 mins"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(60),cljs.core.cst$kw$label,"1 hr"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(120),cljs.core.cst$kw$label,"2 hrs"], null)], null);
barado.util.word_rate = (function barado$util$word_rate(val){
var pred__22085 = cljs.core._GT__EQ_;
var expr__22086 = val;
if(cljs.core.truth_((pred__22085.cljs$core$IFn$_invoke$arity$2 ? pred__22085.cljs$core$IFn$_invoke$arity$2(0.2,expr__22086) : pred__22085.call(null,0.2,expr__22086)))){
return cljs.core.cst$kw$light;
} else {
if(cljs.core.truth_((pred__22085.cljs$core$IFn$_invoke$arity$2 ? pred__22085.cljs$core$IFn$_invoke$arity$2(0.4,expr__22086) : pred__22085.call(null,0.4,expr__22086)))){
return cljs.core.cst$kw$mid_DASH_light;
} else {
if(cljs.core.truth_((pred__22085.cljs$core$IFn$_invoke$arity$2 ? pred__22085.cljs$core$IFn$_invoke$arity$2(0.6,expr__22086) : pred__22085.call(null,0.6,expr__22086)))){
return cljs.core.cst$kw$medium;
} else {
if(cljs.core.truth_((pred__22085.cljs$core$IFn$_invoke$arity$2 ? pred__22085.cljs$core$IFn$_invoke$arity$2(0.8,expr__22086) : pred__22085.call(null,0.8,expr__22086)))){
return cljs.core.cst$kw$mid_DASH_heavy;
} else {
return cljs.core.cst$kw$heavy;
}
}
}
}
});
/**
 * Get the nth minute of the day from timestamp
 */
barado.util.timestamp__GT_minutes = (function barado$util$timestamp__GT_minutes(timestamp){
if(cljs.core.truth_(timestamp)){
var vec__22091 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs_time.core.hour,cljs_time.core.minute).call(null,timestamp);
var hr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22091,(0),null);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22091,(1),null);
return (((60) * hr) + min);
} else {
return null;
}
});
/**
 * Get the appropriate 15-minute bucket for timestamp
 */
barado.util.timestamp__GT_bucket = (function barado$util$timestamp__GT_bucket(timestamp){
return ((15) * cljs.core.quot(barado.util.timestamp__GT_minutes(timestamp),(15)));
});
/**
 * Get timestamp from nth minute of the day
 */
barado.util.minutes__GT_timestamp = (function barado$util$minutes__GT_timestamp(minute){
var year = cljs_time.core.year(cljs_time.core.time_now());
var month = cljs_time.core.month(cljs_time.core.time_now());
var day = cljs_time.core.day(cljs_time.core.time_now());
var hour = cljs.core.quot(minute,(60));
var min = cljs.core.rem(minute,(60));
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5(year,month,day,hour,min);
});
/**
 * input-val is in the domain scale.
 *   Returns appropriate value in range scale
 */
barado.util.scale = (function barado$util$scale(domain_min,domain_max,range_min,range_max,input_val){
var domain = (domain_max - domain_min);
var range = (range_max - range_min);
var domain_frac = (input_val / domain);
return (range_min + (domain_frac * range));
});
/**
 * Given a certain dataset,
 *   find the lowest rating above the rating-threshold
 *   between from and to
 */
barado.util.find_best_departure = (function barado$util$find_best_departure(buckets,from,to,rating_threshold){
if(cljs.core.truth_((function (){var and__7511__auto__ = buckets;
if(cljs.core.truth_(and__7511__auto__)){
var and__7511__auto____$1 = from;
if(cljs.core.truth_(and__7511__auto____$1)){
return to;
} else {
return and__7511__auto____$1;
}
} else {
return and__7511__auto__;
}
})())){
var bs = cljs.core.filterv((function (p__22102){
var vec__22103 = p__22102;
var mod = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(1),null);
return ((from <= mod)) && ((mod <= to));
}),buckets);
if((rating_threshold <= cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bs)))){
return cljs.core.last(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (bs){
return (function (p__22106){
var vec__22107 = p__22106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22107,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22107,(1),null);
return cljs.core.cst$kw$mean.cljs$core$IFn$_invoke$arity$1(b);
});})(bs))
,bs)));
} else {
return cljs.core.last(cljs.core.first(bs));
}
} else {
return null;
}
});
