// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.internal.unparse');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.parse');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Interval');
cljs_time.internal.unparse.unparse_period = (function cljs_time$internal$unparse$unparse_period(s,d,num,min,max){
var n = cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(num,min);
var c = cljs.core.count(n);
var n__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(c - max));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(n__$1)].join(''),d], null);
});
cljs_time.internal.unparse.unparse_millis = (function cljs_time$internal$unparse$unparse_millis(var_args){
var args16398 = [];
var len__8739__auto___16401 = arguments.length;
var i__8740__auto___16402 = (0);
while(true){
if((i__8740__auto___16402 < len__8739__auto___16401)){
args16398.push((arguments[i__8740__auto___16402]));

var G__16403 = (i__8740__auto___16402 + (1));
i__8740__auto___16402 = G__16403;
continue;
} else {
}
break;
}

var G__16400 = args16398.length;
switch (G__16400) {
case 1:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16398.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getMilliseconds(),min,max);
});
});

cljs_time.internal.unparse.unparse_millis.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_seconds = (function cljs_time$internal$unparse$unparse_seconds(var_args){
var args16405 = [];
var len__8739__auto___16408 = arguments.length;
var i__8740__auto___16409 = (0);
while(true){
if((i__8740__auto___16409 < len__8739__auto___16408)){
args16405.push((arguments[i__8740__auto___16409]));

var G__16410 = (i__8740__auto___16409 + (1));
i__8740__auto___16409 = G__16410;
continue;
} else {
}
break;
}

var G__16407 = args16405.length;
switch (G__16407) {
case 1:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16405.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getSeconds(),min,max);
});
});

cljs_time.internal.unparse.unparse_seconds.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_minutes = (function cljs_time$internal$unparse$unparse_minutes(var_args){
var args16412 = [];
var len__8739__auto___16415 = arguments.length;
var i__8740__auto___16416 = (0);
while(true){
if((i__8740__auto___16416 < len__8739__auto___16415)){
args16412.push((arguments[i__8740__auto___16416]));

var G__16417 = (i__8740__auto___16416 + (1));
i__8740__auto___16416 = G__16417;
continue;
} else {
}
break;
}

var G__16414 = args16412.length;
switch (G__16414) {
case 1:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16412.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getMinutes(),min,max);
});
});

cljs_time.internal.unparse.unparse_minutes.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_hours = (function cljs_time$internal$unparse$unparse_hours(var_args){
var args16419 = [];
var len__8739__auto___16422 = arguments.length;
var i__8740__auto___16423 = (0);
while(true){
if((i__8740__auto___16423 < len__8739__auto___16422)){
args16419.push((arguments[i__8740__auto___16423]));

var G__16424 = (i__8740__auto___16423 + (1));
i__8740__auto___16423 = G__16424;
continue;
} else {
}
break;
}

var G__16421 = args16419.length;
switch (G__16421) {
case 1:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16419.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var hr = cljs.core.mod(d.getHours(),(12));
var hours = (((hr === (0)))?(12):hr);
return cljs_time.internal.unparse.unparse_period(s,d,hours,min,max);
});
});

cljs_time.internal.unparse.unparse_hours.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_HOURS = (function cljs_time$internal$unparse$unparse_HOURS(var_args){
var args16426 = [];
var len__8739__auto___16429 = arguments.length;
var i__8740__auto___16430 = (0);
while(true){
if((i__8740__auto___16430 < len__8739__auto___16429)){
args16426.push((arguments[i__8740__auto___16430]));

var G__16431 = (i__8740__auto___16430 + (1));
i__8740__auto___16430 = G__16431;
continue;
} else {
}
break;
}

var G__16428 = args16426.length;
switch (G__16428) {
case 1:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16426.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getHours(),min,max);
});
});

cljs_time.internal.unparse.unparse_HOURS.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_day = (function cljs_time$internal$unparse$unparse_day(var_args){
var args16433 = [];
var len__8739__auto___16436 = arguments.length;
var i__8740__auto___16437 = (0);
while(true){
if((i__8740__auto___16437 < len__8739__auto___16436)){
args16433.push((arguments[i__8740__auto___16437]));

var G__16438 = (i__8740__auto___16437 + (1));
i__8740__auto___16437 = G__16438;
continue;
} else {
}
break;
}

var G__16435 = args16433.length;
switch (G__16435) {
case 1:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16433.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getDate(),min,max);
});
});

cljs_time.internal.unparse.unparse_day.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_day_of_year = (function cljs_time$internal$unparse$unparse_day_of_year(var_args){
var args16440 = [];
var len__8739__auto___16443 = arguments.length;
var i__8740__auto___16444 = (0);
while(true){
if((i__8740__auto___16444 < len__8739__auto___16443)){
args16440.push((arguments[i__8740__auto___16444]));

var G__16445 = (i__8740__auto___16444 + (1));
i__8740__auto___16444 = G__16445;
continue;
} else {
}
break;
}

var G__16442 = args16440.length;
switch (G__16442) {
case 1:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16440.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getDate(),min,max);
});
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_month = (function cljs_time$internal$unparse$unparse_month(var_args){
var args16447 = [];
var len__8739__auto___16450 = arguments.length;
var i__8740__auto___16451 = (0);
while(true){
if((i__8740__auto___16451 < len__8739__auto___16450)){
args16447.push((arguments[i__8740__auto___16451]));

var G__16452 = (i__8740__auto___16451 + (1));
i__8740__auto___16451 = G__16452;
continue;
} else {
}
break;
}

var G__16449 = args16447.length;
switch (G__16449) {
case 1:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16447.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,(d.getMonth() + (1)),min,max);
});
});

cljs_time.internal.unparse.unparse_month.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_year = (function cljs_time$internal$unparse$unparse_year(var_args){
var args16454 = [];
var len__8739__auto___16457 = arguments.length;
var i__8740__auto___16458 = (0);
while(true){
if((i__8740__auto___16458 < len__8739__auto___16457)){
args16454.push((arguments[i__8740__auto___16458]));

var G__16459 = (i__8740__auto___16458 + (1));
i__8740__auto___16458 = G__16459;
continue;
} else {
}
break;
}

var G__16456 = args16454.length;
switch (G__16456) {
case 1:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16454.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getYear(),min,max);
});
});

cljs_time.internal.unparse.unparse_year.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_quoted = (function cljs_time$internal$unparse$unparse_quoted(quoted){
return (function (s,d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,s,quoted),d], null);
});
});
cljs_time.internal.unparse.unparse_period_name = (function cljs_time$internal$unparse$unparse_period_name(s,d,n,periods,short_QMARK_){
var periods__$1 = cljs.core.vec((function (){var G__16463 = periods;
if(cljs.core.truth_(short_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16463){
return (function (p1__16461_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__16461_SHARP_,(0),(3));
});})(G__16463))
,G__16463);
} else {
return G__16463;
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str((periods__$1.cljs$core$IFn$_invoke$arity$1 ? periods__$1.cljs$core$IFn$_invoke$arity$1(n) : periods__$1.call(null,n)))].join(''),d], null);
});
cljs_time.internal.unparse.unparse_month_name = (function cljs_time$internal$unparse$unparse_month_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name(s,d,d.getMonth(),cljs_time.internal.core.months,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_day_name = (function cljs_time$internal$unparse$unparse_day_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name(s,d,d.getDay(),cljs_time.internal.core.days,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_weekyear = (function cljs_time$internal$unparse$unparse_weekyear(var_args){
var args16464 = [];
var len__8739__auto___16467 = arguments.length;
var i__8740__auto___16468 = (0);
while(true){
if((i__8740__auto___16468 < len__8739__auto___16467)){
args16464.push((arguments[i__8740__auto___16468]));

var G__16469 = (i__8740__auto___16468 + (1));
i__8740__auto___16468 = G__16469;
continue;
} else {
}
break;
}

var G__16466 = args16464.length;
switch (G__16466) {
case 1:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16464.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
var january = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(month,(0));
var december = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(month,(11));
var week_number = goog.date.getWeekNumber(year,month,day);
var weekyear = (((january) && ((week_number >= (52))))?(year - (1)):(((december) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(week_number,(1))))?(year + (1)):year
));
return cljs_time.internal.unparse.unparse_period(s,d,weekyear,min,max);
});
});

cljs_time.internal.unparse.unparse_weekyear.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_weekyear_week = (function cljs_time$internal$unparse$unparse_weekyear_week(var_args){
var args16471 = [];
var len__8739__auto___16474 = arguments.length;
var i__8740__auto___16475 = (0);
while(true){
if((i__8740__auto___16475 < len__8739__auto___16474)){
args16471.push((arguments[i__8740__auto___16475]));

var G__16476 = (i__8740__auto___16475 + (1));
i__8740__auto___16475 = G__16476;
continue;
} else {
}
break;
}

var G__16473 = args16471.length;
switch (G__16473) {
case 1:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16471.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2(min,min);
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
return cljs_time.internal.unparse.unparse_period(s,d,goog.date.getWeekNumber(year,month,day),min,max);
});
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_meridiem = (function cljs_time$internal$unparse$unparse_meridiem(capitalize_QMARK_){
return (function (s,d){
var hours = d.getHours();
var meridiem = (cljs.core.truth_(capitalize_QMARK_)?(((hours < (12)))?"AM":"PM"):(((hours < (12)))?"am":"pm"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(meridiem)].join(''),d], null);
});
});
cljs_time.internal.unparse.unparse_timezone = (function cljs_time$internal$unparse$unparse_timezone(){
return (function (s,d){
if((d instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(d.getTimezoneOffsetString())].join(''),d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,d], null);
}
});
});
cljs_time.internal.unparse.unparse_ordinal_suffix = (function cljs_time$internal$unparse$unparse_ordinal_suffix(getter){
return (function (s,d){
var n = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(d) : getter.call(null,d));
var o = (function (){var G__16479 = n;
switch (G__16479) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(s),cljs.core.str(o)].join(''),d], null);
});
});
cljs_time.internal.unparse.lookup = (function cljs_time$internal$unparse$lookup(p__16481){
var vec__16486 = p__16481;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cljs.core.cst$kw$token)){
var G__16489 = pattern;
switch (G__16489) {
case "S":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$millis,(1),(2)], null);

break;
case "SSS":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$millis,(3),(3)], null);

break;
case "s":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seconds,(1),(2)], null);

break;
case "ss":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seconds,(2),(2)], null);

break;
case "m":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minutes,(1),(2)], null);

break;
case "mm":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minutes,(2),(2)], null);

break;
case "h":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hours,(1),(2)], null);

break;
case "hh":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hours,(2),(2)], null);

break;
case "H":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$HOURS,(1),(2)], null);

break;
case "HH":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$HOURS,(2),(2)], null);

break;
case "d":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,(1),(2)], null);

break;
case "dd":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,(2),(2)], null);

break;
case "D":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,(1),(3)], null);

break;
case "DD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,(2),(3)], null);

break;
case "DDD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,(3),(3)], null);

break;
case "M":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month,(1),(2)], null);

break;
case "MM":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month,(2),(2)], null);

break;
case "MMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month_DASH_name,true], null);

break;
case "MMMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month_DASH_name,false], null);

break;
case "y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$year,(1),(4)], null);

break;
case "yy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$year,(2),(2)], null);

break;
case "yyyy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$year,(4),(4)], null);

break;
case "Y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$year,(1),(4)], null);

break;
case "YY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$year,(2),(2)], null);

break;
case "YYYY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$year,(4),(4)], null);

break;
case "x":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weekyear,(1),(4)], null);

break;
case "xx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weekyear,(2),(2)], null);

break;
case "xxxx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weekyear,(4),(4)], null);

break;
case "w":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weekyear_DASH_week,(1),(2)], null);

break;
case "ww":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weekyear_DASH_week,(2),(2)], null);

break;
case "E":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day_DASH_name,true], null);

break;
case "EEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day_DASH_name,true], null);

break;
case "EEEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day_DASH_name,false], null);

break;
case "a":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meridiem,false], null);

break;
case "A":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meridiem,true], null);

break;
case "Z":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timezone], null);

break;
case "ZZ":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timezone], null);

break;
case "o":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ordinal_DASH_suffix], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pattern)].join('')));

}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quoted,pattern], null);
}
});
cljs_time.internal.unparse.lookup_getter = (function cljs_time$internal$unparse$lookup_getter(key){
var G__16500 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__16500) {
case "millis":
return ((function (G__16500){
return (function (p1__16491_SHARP_){
return p1__16491_SHARP_.getMilliseconds();
});
;})(G__16500))

break;
case "seconds":
return ((function (G__16500){
return (function (p1__16492_SHARP_){
return p1__16492_SHARP_.getSeconds();
});
;})(G__16500))

break;
case "minutes":
return ((function (G__16500){
return (function (p1__16493_SHARP_){
return p1__16493_SHARP_.getMinutes();
});
;})(G__16500))

break;
case "hours":
return ((function (G__16500){
return (function (p1__16494_SHARP_){
return p1__16494_SHARP_.getHours();
});
;})(G__16500))

break;
case "HOURS":
return ((function (G__16500){
return (function (p1__16495_SHARP_){
return p1__16495_SHARP_.getHours();
});
;})(G__16500))

break;
case "day":
return ((function (G__16500){
return (function (p1__16496_SHARP_){
return p1__16496_SHARP_.getDate();
});
;})(G__16500))

break;
case "month":
return ((function (G__16500){
return (function (p1__16497_SHARP_){
return p1__16497_SHARP_.getMonth();
});
;})(G__16500))

break;
case "year":
return ((function (G__16500){
return (function (p1__16498_SHARP_){
return p1__16498_SHARP_.getYear();
});
;})(G__16500))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(key)].join('')));

}
});
cljs_time.internal.unparse.lookup_fn = (function cljs_time$internal$unparse$lookup_fn(syntax_list,i,p__16502){
var vec__16511 = p__16502;
var seq__16512 = cljs.core.seq(vec__16511);
var first__16513 = cljs.core.first(seq__16512);
var seq__16512__$1 = cljs.core.next(seq__16512);
var key = first__16513;
var args = seq__16512__$1;
var G__16514 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__16514) {
case "ordinal-suffix":
var vec__16515 = (function (){var G__16518 = (i - (1));
return (syntax_list.cljs$core$IFn$_invoke$arity$1 ? syntax_list.cljs$core$IFn$_invoke$arity$1(G__16518) : syntax_list.call(null,G__16518));
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16515,(0),null);
return cljs_time.internal.unparse.unparse_ordinal_suffix(cljs_time.internal.unparse.lookup_getter(k));

break;
case "month-name":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_month_name,args);

break;
case "day":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_day,args);

break;
case "timezone":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_timezone,args);

break;
case "meridiem":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_meridiem,args);

break;
case "month":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_month,args);

break;
case "weekyear":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_weekyear,args);

break;
case "seconds":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_seconds,args);

break;
case "day-name":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_day_name,args);

break;
case "year":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_year,args);

break;
case "weekyear-week":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_weekyear_week,args);

break;
case "hours":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_hours,args);

break;
case "quoted":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_quoted,args);

break;
case "minutes":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_minutes,args);

break;
case "HOURS":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_HOURS,args);

break;
case "millis":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_millis,args);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(key)].join('')));

}
});
cljs_time.internal.unparse.unparse = (function cljs_time$internal$unparse$unparse(pattern,value){
var syn_list = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.lookup,cljs_time.internal.parse.read_pattern(pattern));
var d = value;
var G__16536 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.lookup_fn,syn_list),syn_list);
var vec__16537 = G__16536;
var seq__16538 = cljs.core.seq(vec__16537);
var first__16539 = cljs.core.first(seq__16538);
var seq__16538__$1 = cljs.core.next(seq__16538);
var unparser = first__16539;
var more = seq__16538__$1;
var s = "";
var d__$1 = d;
var G__16536__$1 = G__16536;
var s__$1 = s;
while(true){
var d__$2 = d__$1;
var vec__16540 = G__16536__$1;
var seq__16541 = cljs.core.seq(vec__16540);
var first__16542 = cljs.core.first(seq__16541);
var seq__16541__$1 = cljs.core.next(seq__16541);
var unparser__$1 = first__16542;
var more__$1 = seq__16541__$1;
var s__$2 = s__$1;
if((unparser__$1 == null)){
return s__$2;
} else {
var vec__16543 = (unparser__$1.cljs$core$IFn$_invoke$arity$2 ? unparser__$1.cljs$core$IFn$_invoke$arity$2(s__$2,d__$2) : unparser__$1.call(null,s__$2,d__$2));
var s__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(0),null);
var d__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(1),null);
var G__16546 = d__$3;
var G__16547 = more__$1;
var G__16548 = s__$3;
d__$1 = G__16546;
G__16536__$1 = G__16547;
s__$1 = G__16548;
continue;
}
break;
}
});
