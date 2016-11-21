// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('cljs.analyzer.api');
goog.require('cljs.analyzer');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$static,null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with(cljs.core.complement(cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq(dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fields,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$protocols,cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__19927 = split_on_static(dt__$1);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19927,(0),null);
var vec__19930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19927,(1),null);
var seq__19931 = cljs.core.seq(vec__19930);
var first__19932 = cljs.core.first(seq__19931);
var seq__19931__$1 = cljs.core.next(seq__19931);
var _ = first__19932;
var first__19932__$1 = cljs.core.first(seq__19931__$1);
var seq__19931__$2 = cljs.core.next(seq__19931__$1);
var sym = first__19932__$1;
var remaining = seq__19931__$2;
var post = vec__19930;
var dt_SINGLEQUOTE___$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(dt_SINGLEQUOTE_,pre);
if(cljs.core.seq(post)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,cljs.core.cst$sym$field)){
var vec__19933 = cljs.core.split_at((2),remaining);
var field_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19933,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19933,(1),null);
var G__19939 = cljs.core.seq(dt__$2);
var G__19940 = dt_SINGLEQUOTE___$1;
var G__19941 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields], null),cljs.core.conj,cljs.core.vec(field_info));
dt__$1 = G__19939;
dt_SINGLEQUOTE_ = G__19940;
statics = G__19941;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__19936 = split_on_symbol(remaining);
var protocol_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(1),null);
var G__19942 = cljs.core.seq(dt__$2);
var G__19943 = dt_SINGLEQUOTE___$1;
var G__19944 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocols], null),cljs.core.into,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__19942;
dt_SINGLEQUOTE_ = G__19943;
statics = G__19944;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__19945 = null;
var G__19946 = dt_SINGLEQUOTE___$1;
var G__19947 = statics;
dt__$1 = G__19945;
dt_SINGLEQUOTE_ = G__19946;
statics = G__19947;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dt,dt_SINGLEQUOTE_,cljs.core.cst$kw$statics,statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__6753__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19948_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(p1__19948_SHARP_)].join(''),/\//));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__6753__auto__)){
var invalid = temp__6753__auto__;
throw (new Error([cljs.core.str(invalid),cljs.core.str(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$initLocalState,cljs.core.cst$sym$componentWillMount,cljs.core.cst$sym$componentDidUpdate,cljs.core.cst$sym$componentWillUnmount,cljs.core.cst$sym$componentWillReceiveProps,cljs.core.cst$sym$shouldComponentUpdate,cljs.core.cst$sym$render,cljs.core.cst$sym$componentWillUpdate,cljs.core.cst$sym$componentDidMount],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$prev_DASH_props,cljs.core.cst$sym$prev_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__19949){
var vec__19953 = p__19949;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(0),null);
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(1),null);
var method = vec__19953;
var sig_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sig_SINGLEQUOTE_),cljs.core.count(sig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid signature for "),cljs.core.str(name),cljs.core.str(" got "),cljs.core.str(sig),cljs.core.str(", need "),cljs.core.str(sig_SINGLEQUOTE_)].join('')),cljs.core.str("\n"),cljs.core.str("(= (count sig') (count sig))")].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reshape,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$sym$initLocalState,(function (p__19999){
var vec__20000 = p__19999;
var seq__20001 = cljs.core.seq(vec__20000);
var first__20002 = cljs.core.first(seq__20001);
var seq__20001__$1 = cljs.core.next(seq__20001);
var name = first__20002;
var first__20002__$1 = cljs.core.first(seq__20001__$1);
var seq__20001__$2 = cljs.core.next(seq__20001__$1);
var vec__20003 = first__20002__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20003,(0),null);
var args = vec__20003;
var body = seq__20001__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__19963__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj),cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__19963__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillReceiveProps,(function (p__20006){
var vec__20007 = p__20006;
var seq__20008 = cljs.core.seq(vec__20007);
var first__20009 = cljs.core.first(seq__20008);
var seq__20008__$1 = cljs.core.next(seq__20008);
var name = first__20009;
var first__20009__$1 = cljs.core.first(seq__20008__$1);
var seq__20008__$2 = cljs.core.next(seq__20008__$1);
var vec__20010 = first__20009__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20010,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20010,(1),null);
var args = vec__20010;
var body = seq__20008__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19964__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19965__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19964__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19965__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19964__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUpdate,(function (p__20013){
var vec__20014 = p__20013;
var seq__20015 = cljs.core.seq(vec__20014);
var first__20016 = cljs.core.first(seq__20015);
var seq__20015__$1 = cljs.core.next(seq__20015);
var name = first__20016;
var first__20016__$1 = cljs.core.first(seq__20015__$1);
var seq__20015__$2 = cljs.core.next(seq__20015__$1);
var vec__20017 = first__20016__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017,(1),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017,(2),null);
var args = vec__20017;
var body = seq__20015__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19967__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__19968__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19967__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = next_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__19968__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$pendingState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__19968__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__19969__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_Ident),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__19970__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__19971__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__19970__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__19971__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__19972__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__19972__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__19972__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__19973__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__19973__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__19970__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__19971__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19966__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__19969__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentDidUpdate,(function (p__20020){
var vec__20021 = p__20020;
var seq__20022 = cljs.core.seq(vec__20021);
var first__20023 = cljs.core.first(seq__20022);
var seq__20022__$1 = cljs.core.next(seq__20022);
var name = first__20023;
var first__20023__$1 = cljs.core.first(seq__20022__$1);
var seq__20022__$2 = cljs.core.next(seq__20022__$1);
var vec__20024 = first__20023__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20024,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20024,(1),null);
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20024,(2),null);
var args = vec__20024;
var body = seq__20022__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19974__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__19975__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__19976__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19974__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = prev_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prev_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__19975__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19974__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = prev_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__19976__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$previousState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([body,(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19974__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillMount,(function (p__20027){
var vec__20028 = p__20027;
var seq__20029 = cljs.core.seq(vec__20028);
var first__20030 = cljs.core.first(seq__20029);
var seq__20029__$1 = cljs.core.next(seq__20029);
var name = first__20030;
var first__20030__$1 = cljs.core.first(seq__20029__$1);
var seq__20029__$2 = cljs.core.next(seq__20029__$1);
var vec__20031 = first__20030__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(0),null);
var args = vec__20031;
var body = seq__20029__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19977__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19977__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19978__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19977__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19978__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19978__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19977__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUnmount,(function (p__20034){
var vec__20035 = p__20034;
var seq__20036 = cljs.core.seq(vec__20035);
var first__20037 = cljs.core.first(seq__20036);
var seq__20036__$1 = cljs.core.next(seq__20036);
var name = first__20037;
var first__20037__$1 = cljs.core.first(seq__20036__$1);
var seq__20036__$2 = cljs.core.next(seq__20036__$1);
var vec__20038 = first__20037__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(0),null);
var args = vec__20038;
var body = seq__20036__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19979__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19979__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__19980__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19979__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__19981__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__19980__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__19982__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__19981__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19983__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__19981__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__19982__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__19982__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19979__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__19982__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19979__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19983__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19983__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19979__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$render,(function (p__20041){
var vec__20042 = p__20041;
var seq__20043 = cljs.core.seq(vec__20042);
var first__20044 = cljs.core.first(seq__20043);
var seq__20043__$1 = cljs.core.next(seq__20043);
var name = first__20044;
var first__20044__$1 = cljs.core.first(seq__20043__$1);
var seq__20043__$2 = cljs.core.next(seq__20043__$1);
var vec__20045 = first__20044__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20045,(0),null);
var args = vec__20045;
var body = seq__20043__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19984__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19984__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_reconciler_STAR_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19984__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_depth_STAR_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_inc),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_depth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19984__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_shared_STAR_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_shared),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19984__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_instrument_STAR_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_instrument),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19984__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_parent_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19984__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
})], null),cljs.core.cst$kw$defaults,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$isMounted),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_boolean),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_getValueByKeys),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj(cljs.core.List.EMPTY,"_renderedComponent")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$shouldComponentUpdate),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__19987__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__19988__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$value")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond_DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_OmProps),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_unwrap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__19987__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__19988__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUpdate),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__19987__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_Ident),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__19989__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__19990__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__19986__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__19989__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__19990__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__19991__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__19991__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__19991__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__19992__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__19992__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__19989__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__19990__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentDidUpdate),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__19993__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__19994__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillMount),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19995__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19995__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19995__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUnmount),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__19996__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__19997__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__19996__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__19998__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__19997__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19995__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__19997__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__19998__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__19998__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__19998__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19995__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__19995__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__19985__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))))], null);
om.next.reshape = (function om$next$reshape(dt,p__20048){
var map__20089 = p__20048;
var map__20089__$1 = ((((!((map__20089 == null)))?((((map__20089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20089):map__20089);
var reshape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20089__$1,cljs.core.cst$kw$reshape);
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20089__$1,cljs.core.cst$kw$defaults);
var reshape_STAR_ = ((function (map__20089,map__20089__$1,reshape,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_(x)) && (cljs.core.contains_QMARK_(reshape,cljs.core.first(x)))){
var reshapef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reshape,cljs.core.first(x));
om.next.validate_sig(x);

return (reshapef.cljs$core$IFn$_invoke$arity$1 ? reshapef.cljs$core$IFn$_invoke$arity$1(x) : reshapef.call(null,x));
} else {
return x;
}
});})(map__20089,map__20089__$1,reshape,defaults))
;
var add_defaults_step = ((function (map__20089,map__20089__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__20110){
var vec__20120 = p__20110;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(0),null);
var impl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(1),null);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([name], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,ret))))){
var vec__20123 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null)),ret);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20123,(0),null);
var vec__20126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20123,(1),null);
var seq__20127 = cljs.core.seq(vec__20126);
var first__20128 = cljs.core.first(seq__20127);
var seq__20127__$1 = cljs.core.next(seq__20127);
var p = first__20128;
var after = seq__20127__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(before),p,cljs.core.array_seq([cljs.core.cons(name,impl)], 0)),after);
} else {
return ret;
}
});})(map__20089,map__20089__$1,reshape,defaults))
;
var add_defaults = ((function (map__20089,map__20089__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_defaults_step,dt__$1,defaults);
});})(map__20089,map__20089__$1,reshape,defaults))
;
var add_object_protocol = ((function (map__20089,map__20089__$1,reshape,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null),dt__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dt__$1,cljs.core.cst$sym$Object);
} else {
return dt__$1;
}
});})(map__20089,map__20089__$1,reshape,defaults))
;
return add_defaults(add_object_protocol(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args20144 = [];
var len__8739__auto___20166 = arguments.length;
var i__8740__auto___20167 = (0);
while(true){
if((i__8740__auto___20167 < len__8739__auto___20166)){
args20144.push((arguments[i__8740__auto___20167]));

var G__20168 = (i__8740__auto___20167 + (1));
i__8740__auto___20167 = G__20168;
continue;
} else {
}
break;
}

var G__20146 = args20144.length;
switch (G__20146) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20144.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__20154){
var vec__20158 = p__20154;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20158,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20158,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__8452__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(field)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = value;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
});
var docstring = ((typeof cljs.core.first(forms) === 'string')?cljs.core.first(forms):null);
var forms__$1 = (function (){var G__20162 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest(G__20162);
} else {
return G__20162;
}
})();
var map__20161 = om.next.collect_statics(forms__$1);
var map__20161__$1 = ((((!((map__20161 == null)))?((((map__20161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20161):map__20161);
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20161__$1,cljs.core.cst$kw$dt);
var statics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20161__$1,cljs.core.cst$kw$statics);
var _ = om.next.validate_statics(dt);
var rname = (cljs.core.truth_(env)?cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),name)):name);
var ctor = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__8452__auto__ = cljs.core.with_meta(name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$jsdoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta(name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null):null)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20138__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20138__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20138__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20138__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20138__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20138__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20138__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
var set_react_proto_BANG_ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_clone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component$prototype))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
var ctor__$1 = (cljs.core.truth_(cljs.core.cst$kw$once.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_exists_QMARK_),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = ctor;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = set_react_proto_BANG_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__8452__auto__ = ctor;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = set_react_proto_BANG_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str("/"),cljs.core.str(name)].join(''):cljs.core.cst$sym$js_SLASH_undefined);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__8452__auto__ = ctor__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([om.next.reshape(dt,om.next.reshape_map)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_constructor)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_displayName)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = display_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_om$isComponent)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__20161,map__20161__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__20139_SHARP_){
return field_set_BANG_(name,p1__20139_SHARP_);
});})(docstring,forms__$1,map__20161,map__20161__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__20161,map__20161__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__20140_SHARP_){
var G__20165 = p1__20140_SHARP_;
if((p1__20140_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__20165,cljs.core.assoc,cljs.core.cst$kw$static,true);
} else {
return G__20165;
}
});})(docstring,forms__$1,map__20161,map__20161__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(statics))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(statics)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__8452__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__8452__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__8452__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20141__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20142__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__20143__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20142__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

om.next.defui = (function om$next$defui(var_args){
var args__8746__auto__ = [];
var len__8739__auto___20174 = arguments.length;
var i__8740__auto___20175 = (0);
while(true){
if((i__8740__auto___20175 < len__8739__auto___20174)){
args__8746__auto__.push((arguments[i__8740__auto___20175]));

var G__20176 = (i__8740__auto___20175 + (1));
i__8740__auto___20175 = G__20176;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((3) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8747__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq20170){
var G__20171 = cljs.core.first(seq20170);
var seq20170__$1 = cljs.core.next(seq20170);
var G__20172 = cljs.core.first(seq20170__$1);
var seq20170__$2 = cljs.core.next(seq20170__$1);
var G__20173 = cljs.core.first(seq20170__$2);
var seq20170__$3 = cljs.core.next(seq20170__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__20171,G__20172,G__20173,seq20170__$3);
});


om.next.defui.cljs$lang$macro = true;
om.next.ui = (function om$next$ui(var_args){
var args__8746__auto__ = [];
var len__8739__auto___20180 = arguments.length;
var i__8740__auto___20181 = (0);
while(true){
if((i__8740__auto___20181 < len__8739__auto___20180)){
args__8746__auto__.push((arguments[i__8740__auto___20181]));

var G__20182 = (i__8740__auto___20181 + (1));
i__8740__auto___20181 = G__20182;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((2) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8747__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("ui_"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_defui),(function (){var x__8452__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([forms], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq20177){
var G__20178 = cljs.core.first(seq20177);
var seq20177__$1 = cljs.core.next(seq20177);
var G__20179 = cljs.core.first(seq20177__$1);
var seq20177__$2 = cljs.core.next(seq20177__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__20178,G__20179,seq20177__$2);
});


om.next.ui.cljs$lang$macro = true;
om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();
var fn_scope = cljs.core.cst$kw$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__20185 = fn_scope;
var G__20185__$1 = (((G__20185 == null))?null:cljs.core.first(G__20185));
var G__20185__$2 = (((G__20185__$1 == null))?null:cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__20185__$1));
if((G__20185__$2 == null)){
return null;
} else {
return [cljs.core.str(G__20185__$2)].join('');
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$elide_DASH_asserts.cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__20183__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_logger_STAR_)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = condition;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$log_SLASH_error),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__20183__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invariant Violation"),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__8452__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY," (in function: `"),cljs.core.array_seq([(function (){var x__8452__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"`)")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,": "),(function (){var x__8452__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}
});
om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_(condition,message,_AMPERSAND_env);
} else {
return null;
}
});

om.next.invariant.cljs$lang$macro = true;
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = (function (){var G__20186 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20186) : cljs.core.atom.call(null,G__20186));
})();
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
var expr_SINGLEQUOTE_ = cljs.core.first(expr);
if(cljs.core.map_QMARK_(expr_SINGLEQUOTE_)){
return cljs.core.ffirst(expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_(expr)){
var G__20188 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(expr))){
return cljs.core.first(G__20188);
} else {
return G__20188;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper((function (p1__20189_SHARP_){
return (cljs.core.vector_QMARK_(p1__20189_SHARP_)) || (cljs.core.map_QMARK_(p1__20189_SHARP_)) || (cljs.core.seq_QMARK_(p1__20189_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__20190 = clojure.zip.right(loc__$1);
loc__$1 = G__20190;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__20223 = clojure.zip.down(loc);
var G__20224 = path__$1;
loc = G__20223;
path__$1 = G__20224;
continue;
} else {
var vec__20219 = path__$1;
var seq__20220 = cljs.core.seq(vec__20219);
var first__20221 = cljs.core.first(seq__20220);
var seq__20220__$1 = cljs.core.next(seq__20220);
var k = first__20221;
var ks = seq__20220__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_(node)) || ((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key((function (){var G__20222 = loc;
if(cljs.core.seq_QMARK_(node)){
return clojure.zip.down(G__20222);
} else {
return G__20222;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__20225 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(om.next.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__20226 = cljs.core.next(ks);
loc = G__20225;
path__$1 = G__20226;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__20227 = loc_SINGLEQUOTE_;
var G__20228 = ks;
loc = G__20227;
path__$1 = G__20228;
continue;
}
} else {
var G__20229 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__20230 = ks;
loc = G__20229;
path__$1 = G__20230;
continue;
}
} else {
var G__20231 = clojure.zip.right(loc);
var G__20232 = path__$1;
loc = G__20231;
path__$1 = G__20232;
continue;
}
}
}
break;
}
});
return query_template_STAR_(om.next.query_zip(query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta(expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(expr))?(function (){var join_value = cljs.core.second(cljs.core.first(expr));
var join_value__$1 = (((om.util.recursion_QMARK_(join_value)) && (cljs.core.seq(ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst(expr),(om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(join_value__$1,ks,null) : om.next.focus_query_STAR_.call(null,join_value__$1,ks,null))], true, false);
})():((cljs.core.seq_QMARK_(expr))?(function (){var x__8452__auto__ = (function (){var G__20246 = cljs.core.first(expr);
var G__20247 = ks;
var G__20248 = null;
var G__20249 = null;
return (om.next.focused_join.cljs$core$IFn$_invoke$arity$4 ? om.next.focused_join.cljs$core$IFn$_invoke$arity$4(G__20246,G__20247,G__20248,G__20249) : om.next.focused_join.call(null,G__20246,G__20247,G__20248,G__20249));
})();
return cljs.core._conj((function (){var x__8452__auto____$1 = cljs.core.second(expr);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto____$1);
})(),x__8452__auto__);
})():expr
));
var G__20250 = expr_SINGLEQUOTE_;
if(cljs.core.some_QMARK_(expr_meta)){
return cljs.core.with_meta(G__20250,expr_meta);
} else {
return G__20250;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__20257 = path;
var seq__20258 = cljs.core.seq(vec__20257);
var first__20259 = cljs.core.first(seq__20258);
var seq__20258__$1 = cljs.core.next(seq__20258);
var k = first__20259;
var ks = seq__20258__$1;
var match = ((function (vec__20257,seq__20258,first__20259,seq__20258__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.util.join_key(x));
});})(vec__20257,seq__20258,first__20259,seq__20258__$1,k,ks))
;
var value = ((function (vec__20257,seq__20258,first__20259,seq__20258__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join(x,ks,query,union_expr);
});})(vec__20257,seq__20258,first__20259,seq__20258__$1,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.fromArray([k,(function (){var G__20260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k);
var G__20261 = ks;
var G__20262 = query;
return (om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(G__20260,G__20261,G__20262) : om.next.focus_query_STAR_.call(null,G__20260,G__20261,G__20262));
})()], true, false);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_(query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args20263 = [];
var len__8739__auto___20269 = arguments.length;
var i__8740__auto___20270 = (0);
while(true){
if((i__8740__auto___20270 < len__8739__auto___20269)){
args20263.push((arguments[i__8740__auto___20270]));

var G__20271 = (i__8740__auto___20270 + (1));
i__8740__auto___20270 = G__20271;
continue;
} else {
}
break;
}

var G__20265 = args20263.length;
switch (G__20265) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20263.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,cljs.core.cst$sym$_STAR_,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__7511__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,cljs.core.cst$sym$_STAR_)) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,bound)) && ((cljs.core.count(path) < cljs.core.count(bound))));
if(and__7511__auto__){
var and__7511__auto____$1 = cljs.core.some(om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__7511__auto____$1)){
return ((1) === cljs.core.count(focus));
} else {
return and__7511__auto____$1;
}
} else {
return and__7511__auto__;
}
})())){
var vec__20266 = om.util.join_entry(cljs.core.first(focus));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20266,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20266,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_(focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__20273 = focus_SINGLEQUOTE___$1;
var G__20274 = bound;
var G__20275 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
focus = G__20273;
bound = G__20274;
path = G__20275;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__8236__auto__ = (((this$ == null))?null:this$);
var m__8237__auto__ = (om.next.ident[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__8237__auto__.call(null,this$,props));
} else {
var m__8237__auto____$1 = (om.next.ident["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__8237__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__8236__auto__ = (((this$ == null))?null:this$);
var m__8237__auto__ = (om.next.params[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto__.call(null,this$));
} else {
var m__8237__auto____$1 = (om.next.params["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__8236__auto__ = (((this$ == null))?null:this$);
var m__8237__auto__ = (om.next.query[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto__.call(null,this$));
} else {
var m__8237__auto____$1 = (om.next.query["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__8236__auto__ = (((this$ == null))?null:this$);
var m__8237__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__8237__auto__.call(null,this$,new_state));
} else {
var m__8237__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__8237__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__8236__auto__ = (((this$ == null))?null:this$);
var m__8237__auto__ = (om.next._get_state[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto__.call(null,this$));
} else {
var m__8237__auto____$1 = (om.next._get_state["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__8236__auto__ = (((this$ == null))?null:this$);
var m__8237__auto__ = (om.next._get_rendered_state[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto__.call(null,this$));
} else {
var m__8237__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__8236__auto__ = (((this$ == null))?null:this$);
var m__8237__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto__.call(null,this$));
} else {
var m__8237__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8237__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__7511__auto__ = (x instanceof cljs.core.Symbol);
if(and__7511__auto__){
var G__20282 = [cljs.core.str(x)].join('');
var G__20283 = "?";
return goog.string.startsWith(G__20282,G__20283);
} else {
return and__7511__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_(expr))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,om.next.var__GT_keyword(expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta(query);
var tr = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (qm){
return (function (p1__20284_SHARP_){
return (om.next.bind_query.cljs$core$IFn$_invoke$arity$2 ? om.next.bind_query.cljs$core$IFn$_invoke$arity$2(p1__20284_SHARP_,params) : om.next.bind_query.call(null,p1__20284_SHARP_,params));
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_(query))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_(query))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(query),tr,query):om.next.replace_var(query,params)
));
var G__20287 = ret;
if(cljs.core.truth_((function (){var and__7511__auto__ = qm;
if(cljs.core.truth_(and__7511__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IMeta$))){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
}
} else {
return and__7511__auto__;
}
})())){
return cljs.core.with_meta(G__20287,qm);
} else {
return G__20287;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__20290 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__20290__$1 = (((G__20290 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__20290));
var G__20290__$2 = (((G__20290__$1 == null))?null:cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__20290__$1));
var G__20290__$3 = (((G__20290__$2 == null))?null:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20290__$2) : cljs.core.deref.call(null,G__20290__$2)));
var G__20290__$4 = (((G__20290__$3 == null))?null:cljs.core.cst$kw$om$next_SLASH_queries.cljs$core$IFn$_invoke$arity$1(G__20290__$3));
if((G__20290__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__20290__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data(component),om.next.query(component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data(component),om.next.params(component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args20291 = [];
var len__8739__auto___20294 = arguments.length;
var i__8740__auto___20295 = (0);
while(true){
if((i__8740__auto___20295 < len__8739__auto___20294)){
args20291.push((arguments[i__8740__auto___20295]));

var G__20296 = (i__8740__auto___20295 + (1));
i__8740__auto___20295 = G__20296;
continue;
} else {
}
break;
}

var G__20293 = args20291.length;
switch (G__20293) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20291.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2(component,om.next.component__GT_query_data(component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(query_data,om.next.query(component));
var c_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c')")].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(query_data,om.next.params(component))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,(om.next.react_type.cljs$core$IFn$_invoke$arity$1 ? om.next.react_type.cljs$core$IFn$_invoke$arity$1(component) : om.next.react_type.call(null,component))], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1(x);
} else {
var q = om.next.query(x);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c)")].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (component,class_path_query_data,data_path){
return (function (p1__20300_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__20300_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_(qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_(qs__$1))){
var q = cljs.core.first(qs__$1);
var node = clojure.zip.node(q);
if(!(om.util.recursion_QMARK_(node))){
return node;
} else {
var G__20301 = component;
var G__20302 = class_path_query_data;
var G__20303 = cljs.core.pop(data_path);
component = G__20301;
class_path_query_data = G__20302;
data_path = G__20303;
continue;
}
} else {
return om.next.get_class_or_instance_query(component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$)))?true:false):false)){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
var temp__6751__auto__ = om.next.component__GT_query_data(x);
if(cljs.core.truth_(temp__6751__auto__)){
var query_data = temp__6751__auto__;
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2(x,query_data);
} else {
var cp = (om.next.class_path.cljs$core$IFn$_invoke$arity$1 ? om.next.class_path.cljs$core$IFn$_invoke$arity$1(x) : om.next.class_path.call(null,x));
var r = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(x) : om.next.get_reconciler.call(null,x));
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),(om.next.path.cljs$core$IFn$_invoke$arity$1 ? om.next.path.cljs$core$IFn$_invoke$arity$1(x) : om.next.path.call(null,x)));
var class_path_query_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class_DASH_path_DASH__GT_query.cljs$core$IFn$_invoke$arity$1((function (){var G__20307 = (om.next.get_indexer.cljs$core$IFn$_invoke$arity$1 ? om.next.get_indexer.cljs$core$IFn$_invoke$arity$1(r) : om.next.get_indexer.call(null,r));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20307) : cljs.core.deref.call(null,G__20307));
})()),cp);
return om.next.get_indexed_query(x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query(x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$component,class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props(null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__6751__auto__ = cljs.core.cst$kw$react_DASH_key.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__6751__auto__)){
var rk = temp__6751__auto__;
return rk;
} else {
var temp__6751__auto____$1 = cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(temp__6751__auto____$1)){
var idx = temp__6751__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args20308 = [];
var len__8739__auto___20324 = arguments.length;
var i__8740__auto___20325 = (0);
while(true){
if((i__8740__auto___20325 < len__8739__auto___20324)){
args20308.push((arguments[i__8740__auto___20325]));

var G__20326 = (i__8740__auto___20325 + (1));
i__8740__auto___20325 = G__20326;
continue;
} else {
}
break;
}

var G__20310 = args20308.length;
switch (G__20310) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20308.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__20311){
var map__20312 = p__20311;
var map__20312__$1 = ((((!((map__20312 == null)))?((((map__20312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20312):map__20312);
var opts = map__20312__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,cljs.core.cst$kw$keyfn);
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20312__$1,cljs.core.cst$kw$instrument_QMARK_,true);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__20312,map__20312__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__7511__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__7511__auto__)){
return instrument_QMARK_;
} else {
return and__7511__auto__;
}
})())){
var G__20319 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$children,children,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$factory,om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$instrument_QMARK_,false))], null);
return (om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__20319) : om.next._STAR_instrument_STAR_.call(null,G__20319));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__20320 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__20320)].join('');
} else {
return G__20320;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__20321 = class$;
var G__20322 = ({"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_});
var G__20323 = om.util.force_children(children);
return React.createElement(G__20321,G__20322,G__20323);
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__20328__i = 0, G__20328__a = new Array(arguments.length -  1);
while (G__20328__i < G__20328__a.length) {G__20328__a[G__20328__i] = arguments[G__20328__i + 1]; ++G__20328__i;}
  children = new cljs.core.IndexedSeq(G__20328__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__20329){
var props = cljs.core.first(arglist__20329);
var children = cljs.core.rest(arglist__20329);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__20312,map__20312__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
var G__20332 = c.props;
var G__20333 = k;
return goog.object.get(G__20332,G__20333);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_(x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_(x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_(x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
var G__20337 = c.props;
var G__20338 = k;
var G__20339 = v;
return goog.object.set(G__20337,G__20338,G__20339);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args20340 = [];
var len__8739__auto___20343 = arguments.length;
var i__8740__auto___20344 = (0);
while(true){
if((i__8740__auto___20344 < len__8739__auto___20343)){
args20340.push((arguments[i__8740__auto___20344]));

var G__20345 = (i__8740__auto___20344 + (1));
i__8740__auto___20344 = G__20345;
continue;
} else {
}
break;
}

var G__20342 = args20340.length;
switch (G__20342) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20340.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args20347 = [];
var len__8739__auto___20350 = arguments.length;
var i__8740__auto___20351 = (0);
while(true){
if((i__8740__auto___20351 < len__8739__auto___20350)){
args20347.push((arguments[i__8740__auto___20351]));

var G__20352 = (i__8740__auto___20351 + (1));
i__8740__auto___20351 = G__20352;
continue;
} else {
}
break;
}

var G__20349 = args20347.length;
switch (G__20349) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20347.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap(om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(prev_props),om.next.get_prev_props(cst)),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3(om.next.get_props(component.props),om.next.get_props(next_props),om.next.get_next_props(component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
var G__20356 = c.state;
var G__20357 = "omcljs$prev$value";
return goog.object.remove(G__20356,G__20357);
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(c.props),om.next.get_props(c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop(component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_(component)){
return om.next.get_prop(component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop(component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__7523__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop(c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args20358 = [];
var len__8739__auto___20365 = arguments.length;
var i__8740__auto___20366 = (0);
while(true){
if((i__8740__auto___20366 < len__8739__auto___20365)){
args20358.push((arguments[i__8740__auto___20366]));

var G__20367 = (i__8740__auto___20366 + (1));
i__8740__auto___20366 = G__20367;
continue;
} else {
}
break;
}

var G__20360 = args20358.length;
switch (G__20360) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20358.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = (function (){var G__20361 = component.props;
var G__20362 = "omcljs$shared";
return goog.object.get(G__20361,G__20362);
})();
var ks = (function (){var G__20363 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__20363],null));
} else {
return G__20363;
}
})();
var G__20364 = shared;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__20364,ks);
} else {
return G__20364;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop(component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__20373 = c.state;
var G__20374_20377 = G__20373;
var G__20375_20378 = "omcljs$next$value";
var G__20376_20379 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__20374_20377,G__20375_20378,G__20376_20379);

return G__20373;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(component.props),om.next.get_props(component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__20382 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__20382,cljs.core.assoc,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__20382;
}
} else {
var G__20383 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20383,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__20383;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args20384 = [];
var len__8739__auto___20389 = arguments.length;
var i__8740__auto___20390 = (0);
while(true){
if((i__8740__auto___20390 < len__8739__auto___20389)){
args20384.push((arguments[i__8740__auto___20390]));

var G__20391 = (i__8740__auto___20390 + (1));
i__8740__auto___20390 = G__20391;
continue;
} else {
}
break;
}

var G__20386 = args20384.length;
switch (G__20386) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20384.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__20387 = x;
if(om.next.component_QMARK_(x)){
return om.next.props(G__20387);
} else {
return G__20387;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_computed], null),(function (){var G__20388 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__20388],null));
} else {
return G__20388;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false)){
om.next._set_state_BANG_(component,new_state);
} else {
var G__20398_20401 = component.state;
var G__20399_20402 = "omcljs$pendingState";
var G__20400_20403 = new_state;
goog.object.set(G__20398_20401,G__20399_20402,G__20400_20403);
}

var temp__6751__auto__ = om.next.get_reconciler(component);
if(cljs.core.truth_(temp__6751__auto__)){
var r = temp__6751__auto__;
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return (om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_render_BANG_.call(null,r));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args20404 = [];
var len__8739__auto___20408 = arguments.length;
var i__8740__auto___20409 = (0);
while(true){
if((i__8740__auto___20409 < len__8739__auto___20408)){
args20404.push((arguments[i__8740__auto___20409]));

var G__20410 = (i__8740__auto___20409 + (1));
i__8740__auto___20409 = G__20410;
continue;
} else {
}
break;
}

var G__20406 = args20404.length;
switch (G__20406) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20404.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_state(component):(function (){var temp__6753__auto__ = component.state;
if(cljs.core.truth_(temp__6753__auto__)){
var state = temp__6753__auto__;
var or__7523__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args20412 = [];
var len__8739__auto___20437 = arguments.length;
var i__8740__auto___20438 = (0);
while(true){
if((i__8740__auto___20438 < len__8739__auto___20437)){
args20412.push((arguments[i__8740__auto___20438]));

var G__20439 = (i__8740__auto___20438 + (1));
i__8740__auto___20438 = G__20439;
continue;
} else {
}
break;
}

var G__20421 = args20412.length;
switch (G__20421) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__8762__auto__ = (new cljs.core.IndexedSeq(args20412.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8762__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__20422 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20422) : f.call(null,G__20422));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__20423 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20424 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20423,G__20424) : f.call(null,G__20423,G__20424));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__20425 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20426 = arg0;
var G__20427 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20425,G__20426,G__20427) : f.call(null,G__20425,G__20426,G__20427));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__20428 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20429 = arg0;
var G__20430 = arg1;
var G__20431 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__20428,G__20429,G__20430,G__20431) : f.call(null,G__20428,G__20429,G__20430,G__20431));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__20432 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20433 = arg0;
var G__20434 = arg1;
var G__20435 = arg2;
var G__20436 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__20432,G__20433,G__20434,G__20435,G__20436) : f.call(null,G__20432,G__20433,G__20434,G__20435,G__20436));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq20413){
var G__20414 = cljs.core.first(seq20413);
var seq20413__$1 = cljs.core.next(seq20413);
var G__20415 = cljs.core.first(seq20413__$1);
var seq20413__$2 = cljs.core.next(seq20413__$1);
var G__20416 = cljs.core.first(seq20413__$2);
var seq20413__$3 = cljs.core.next(seq20413__$2);
var G__20417 = cljs.core.first(seq20413__$3);
var seq20413__$4 = cljs.core.next(seq20413__$3);
var G__20418 = cljs.core.first(seq20413__$4);
var seq20413__$5 = cljs.core.next(seq20413__$4);
var G__20419 = cljs.core.first(seq20413__$5);
var seq20413__$6 = cljs.core.next(seq20413__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20414,G__20415,G__20416,G__20417,G__20418,G__20419,seq20413__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args20441 = [];
var len__8739__auto___20446 = arguments.length;
var i__8740__auto___20447 = (0);
while(true){
if((i__8740__auto___20447 < len__8739__auto___20446)){
args20441.push((arguments[i__8740__auto___20447]));

var G__20448 = (i__8740__auto___20447 + (1));
i__8740__auto___20447 = G__20448;
continue;
} else {
}
break;
}

var G__20443 = args20441.length;
switch (G__20443) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20441.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_rendered_state(component):(function (){var G__20445 = component;
var G__20445__$1 = (((G__20445 == null))?null:G__20445.state);
if((G__20445__$1 == null)){
return null;
} else {
return goog.object.get(G__20445__$1,"omcljs$state");
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$ILocalState$)))?true:false):false)){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__6753__auto__ = (function (){var G__20453 = c;
var G__20453__$1 = (((G__20453 == null))?null:G__20453.state);
if((G__20453__$1 == null)){
return null;
} else {
return goog.object.get(G__20453__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var pending = temp__6753__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args20454 = [];
var len__8739__auto___20457 = arguments.length;
var i__8740__auto___20458 = (0);
while(true){
if((i__8740__auto___20458 < len__8739__auto___20457)){
args20454.push((arguments[i__8740__auto___20458]));

var G__20459 = (i__8740__auto___20458 + (1));
i__8740__auto___20458 = G__20459;
continue;
} else {
}
break;
}

var G__20456 = args20454.length;
switch (G__20456) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20454.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






om.next.gather_sends = (function om$next$gather_sends(p__20462,q,remotes){
var map__20469 = p__20462;
var map__20469__$1 = ((((!((map__20469 == null)))?((((map__20469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20469):map__20469);
var env = map__20469__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__20469,map__20469__$1,env,parser){
return (function (p1__20461_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20461_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__20461_SHARP_) : parser.call(null,env,q,p1__20461_SHARP_))],null));
});})(map__20469,map__20469__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__20469,map__20469__$1,env,parser){
return (function (p__20471){
var vec__20472 = p__20471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20472,(1),null);
return (cljs.core.count(v) > (0));
});})(map__20469,map__20469__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(cljs.core.cst$kw$easy_DASH_reads.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20504 = cljs.core.first(q);
var G__20505 = target;
return (om.next.force.cljs$core$IFn$_invoke$arity$2 ? om.next.force.cljs$core$IFn$_invoke$arity$2(G__20504,G__20505) : om.next.force.call(null,G__20504,G__20505));
})()], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = (function (){var G__20508 = c;
var G__20509 = with_target(target,om.next.focus_query(om.next.get_query(c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
return (om.next.full_query.cljs$core$IFn$_invoke$arity$2 ? om.next.full_query.cljs$core$IFn$_invoke$arity$2(G__20508,G__20509) : om.next.full_query.call(null,G__20508,G__20509));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(tx__$1,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(tx__$1)),transformed);
});
var exprs = cljs.core.seq(tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var ast = om.next.impl.parser.expr__GT_ast(expr);
var key = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var tgt = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = (om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2 ? om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2(r,key) : om.next.ref__GT_components.call(null,r,key));
var G__20511 = cljs.core.next(exprs);
var G__20512 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__20475_SHARP_,p2__20476_SHARP_){
return add_focused_query(key,tgt,p1__20475_SHARP_,p2__20476_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__20510 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_(cs)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20510,expr);
} else {
return G__20510;
}
})(),cs);
exprs = G__20511;
tx_SINGLEQUOTE_ = G__20512;
continue;
} else {
var G__20513 = cljs.core.next(exprs);
var G__20514 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_SINGLEQUOTE_,expr);
exprs = G__20513;
tx_SINGLEQUOTE_ = G__20514;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args20515 = [];
var len__8739__auto___20525 = arguments.length;
var i__8740__auto___20526 = (0);
while(true){
if((i__8740__auto___20526 < len__8739__auto___20525)){
args20515.push((arguments[i__8740__auto___20526]));

var G__20527 = (i__8740__auto___20526 + (1));
i__8740__auto___20526 = G__20527;
continue;
} else {
}
break;
}

var G__20517 = args20515.length;
switch (G__20517) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20515.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3(x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__20518,reads){
var map__20519 = p__20518;
var map__20519__$1 = ((((!((map__20519 == null)))?((((map__20519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20519):map__20519);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20519__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20519__$1,cljs.core.cst$kw$query);
if(cljs.core.truth_((function (){var or__7523__auto__ = (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return om.next.component_QMARK_(x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_(reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_(x))?om.next.get_reconciler(x):x);
var c = ((om.next.component_QMARK_(x))?x:null);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__20521 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20521) : cljs.core.deref.call(null,G__20521));
})());
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));

var temp__6753__auto___20529 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto___20529)){
var l_20530 = temp__6753__auto___20529;
var G__20522_20531 = l_20530;
var G__20523_20532 = [cljs.core.str((function (){var temp__6753__auto____$1 = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(cljs.core.truth_(temp__6753__auto____$1)){
var ident = temp__6753__auto____$1;
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ident], 0))),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
goog.log.info(G__20522_20531,G__20523_20532);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,(function (){var or__7523__auto__ = c;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null):null)], 0))], 0));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_(r,reads);
}

om.next.protocols.reindex_BANG_(r);

var rootq_20533 = ((!((c == null)))?(om.next.full_query.cljs$core$IFn$_invoke$arity$1 ? om.next.full_query.cljs$core$IFn$_invoke$arity$1(c) : om.next.full_query.call(null,c)):(((reads == null))?om.next.get_query(root):null));
var sends_20534 = om.next.gather_sends((om.next.to_env.cljs$core$IFn$_invoke$arity$1 ? om.next.to_env.cljs$core$IFn$_invoke$arity$1(cfg) : om.next.to_env.call(null,cfg)),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__7523__auto__ = rootq_20533;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads(r,reads)),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_(sends_20534)){
} else {
om.next.protocols.queue_sends_BANG_(r,sends_20534);

(om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_sends_BANG_.call(null,r));
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args20535 = [];
var len__8739__auto___20555 = arguments.length;
var i__8740__auto___20556 = (0);
while(true){
if((i__8740__auto___20556 < len__8739__auto___20555)){
args20535.push((arguments[i__8740__auto___20556]));

var G__20557 = (i__8740__auto___20556 + (1));
i__8740__auto___20556 = G__20557;
continue;
} else {
}
break;
}

var G__20544 = args20535.length;
switch (G__20544) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__8762__auto__ = (new cljs.core.IndexedSeq(args20535.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8762__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__20545 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20545) : f.call(null,G__20545));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__20546 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__20547 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20546,G__20547) : f.call(null,G__20546,G__20547));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__20548 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__20549 = arg0;
var G__20550 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20548,G__20549,G__20550) : f.call(null,G__20548,G__20549,G__20550));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__20551 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__20552 = arg0;
var G__20553 = arg1;
var G__20554 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__20551,G__20552,G__20553,G__20554) : f.call(null,G__20551,G__20552,G__20553,G__20554));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq20536){
var G__20537 = cljs.core.first(seq20536);
var seq20536__$1 = cljs.core.next(seq20536);
var G__20538 = cljs.core.first(seq20536__$1);
var seq20536__$2 = cljs.core.next(seq20536__$1);
var G__20539 = cljs.core.first(seq20536__$2);
var seq20536__$3 = cljs.core.next(seq20536__$2);
var G__20540 = cljs.core.first(seq20536__$3);
var seq20536__$4 = cljs.core.next(seq20536__$3);
var G__20541 = cljs.core.first(seq20536__$4);
var seq20536__$5 = cljs.core.next(seq20536__$4);
var G__20542 = cljs.core.first(seq20536__$5);
var seq20536__$6 = cljs.core.next(seq20536__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20537,G__20538,G__20539,G__20540,G__20541,G__20542,seq20536__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_(x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__20560 = component.refs;
if((G__20560 == null)){
return null;
} else {
return goog.object.get(G__20560,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_(c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args20561 = [];
var len__8739__auto___20564 = arguments.length;
var i__8740__auto___20565 = (0);
while(true){
if((i__8740__auto___20565 < len__8739__auto___20564)){
args20561.push((arguments[i__8740__auto___20565]));

var G__20566 = (i__8740__auto___20565 + (1));
i__8740__auto___20565 = G__20566;
continue;
} else {
}
break;
}

var G__20563 = args20561.length;
switch (G__20563) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20561.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__8452__auto__ = om.next.react_type(c__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})();
while(true){
var temp__6751__auto__ = om.next.parent(c__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var p = temp__6751__auto__;
if(om.next.iquery_QMARK_(p)){
var G__20568 = p;
var G__20569 = cljs.core.cons(om.next.react_type(p),ret);
c__$1 = G__20568;
ret = G__20569;
continue;
} else {
var G__20570 = p;
var G__20571 = ret;
c__$1 = G__20570;
ret = G__20571;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path(c);
var cp = cljs.core.seq(raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first(cp);
if(cljs.core.contains_QMARK_(seen,c__$1)){
var G__20572 = cljs.core.next(cp);
var G__20573 = ret;
var G__20574 = seen;
cp = G__20572;
ret = G__20573;
seen = G__20574;
continue;
} else {
var G__20575 = cljs.core.next(cp);
var G__20576 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c__$1);
var G__20577 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c__$1);
cp = G__20575;
ret = G__20576;
seen = G__20577;
continue;
}
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,om.next.raw_class_path(c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_(subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__20579 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__20579)].join('');
} else {
return G__20579;
}
})();
if((om.next.component_QMARK_(x)) && (om.next.mounted_QMARK_(x))){
return om.next.get_query(om.next.react_ref(x,ref));
} else {
return om.next.get_query(subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props(x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str("(not (nil? m))")].join('')));
}

return om.next.ident(x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t(reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_(om.next._STAR_raf_STAR_)){
return (om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : om.next._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_(reconciler))){
return om.next.queue_render_BANG_((function (){
return om.next.protocols.reconcile_BANG_(reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_(reconciler))){
var G__20582 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__20583 = (0);
return setTimeout(G__20582,G__20583);
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args20584 = [];
var len__8739__auto___20587 = arguments.length;
var i__8740__auto___20588 = (0);
while(true){
if((i__8740__auto___20588 < len__8739__auto___20587)){
args20584.push((arguments[i__8740__auto___20588]));

var G__20589 = (i__8740__auto___20588 + (1));
i__8740__auto___20588 = G__20589;
continue;
} else {
}
break;
}

var G__20586 = args20584.length;
switch (G__20586) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20584.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__6753__auto___20591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.next.roots) : cljs.core.deref.call(null,om.next.roots)),target);
if(cljs.core.truth_(temp__6753__auto___20591)){
var old_reconciler_20592 = temp__6753__auto___20591;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_20592,target) : om.next.remove_root_BANG_.call(null,old_reconciler_20592,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_(reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__8236__auto__ = (((c == null))?null:c);
var m__8237__auto__ = (om.next.tx_intercept[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__8237__auto__.call(null,c,tx));
} else {
var m__8237__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(c,tx) : m__8237__auto____$1.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$shared,cljs.core.cst$kw$parser,cljs.core.cst$kw$logger,cljs.core.cst$kw$pathopt], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__7511__auto__ = c;
if(cljs.core.truth_(and__7511__auto__)){
var and__7511__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__7511__auto____$1){
return cljs.core.not(ref);
} else {
return and__7511__auto____$1;
}
} else {
return and__7511__auto__;
}
})())?om.next.ident(c,om.next.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reconciler,r,cljs.core.cst$kw$component,c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref__$1], null):null)], 0));
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(function (){var G__20601 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20601) : cljs.core.deref.call(null,G__20601));
})());
var ___$1 = (function (){var temp__6753__auto__ = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto__)){
var l = temp__6753__auto__;
var G__20602 = l;
var G__20603 = [cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref__$1], 0))),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
return goog.log.info(G__20602,G__20603);
} else {
return null;
}
})();
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__20604 = cljs.core.PersistentVector.EMPTY;
var G__20604__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20604,c):G__20604);
if(!((ref__$1 == null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20604__$1,ref__$1);
} else {
return G__20604__$1;
}
})();
om.next.protocols.queue_BANG_(r,cljs.core.into.cljs$core$IFn$_invoke$arity$3(q,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
} else {
om.next.protocols.queue_sends_BANG_(r,snds);

om.next.schedule_sends_BANG_(r);
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__20613 = expr;
if(om.util.mutation_QMARK_(expr)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__20613,cljs.core.assoc,cljs.core.cst$kw$mutator,ident__$1);
} else {
return G__20613;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20605_SHARP_){
return annotate(p1__20605_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_(c__$1)){
return true;
} else {
var G__20614 = om.next.parent(c__$1);
c__$1 = G__20614;
continue;

}
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args20615 = [];
var len__8739__auto___20627 = arguments.length;
var i__8740__auto___20628 = (0);
while(true){
if((i__8740__auto___20628 < len__8739__auto___20627)){
args20615.push((arguments[i__8740__auto___20628]));

var G__20629 = (i__8740__auto___20628 + (1));
i__8740__auto___20628 = G__20629;
continue;
} else {
}
break;
}

var G__20617 = args20615.length;
switch (G__20617) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20615.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__7523__auto__ = om.next.component_QMARK_(x);
if(or__7523__auto__){
return or__7523__auto__;
} else {
return (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__20618 = tx;
if((function (){var and__7511__auto__ = om.next.component_QMARK_(x);
if(and__7511__auto__){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$Ident$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
}
} else {
return and__7511__auto__;
}
})()){
return om.next.annotate_mutations(G__20618,om.next.get_ident(x));
} else {
return G__20618;
}
})();
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_(x))){
var l__19100__auto___20631 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_(x))){
} else {
var G__20621_20632 = l__19100__auto___20631;
var G__20622_20633 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("transact! should be called on a component"),cljs.core.str("that implements IQuery or has a parent that"),cljs.core.str("implements IQuery")].join(''))].join('');
goog.log.error(G__20621_20632,G__20622_20633);
}

return om.next.transact_STAR_(om.next.get_reconciler(x),null,null,tx__$1);
} else {
var p = om.next.parent(x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler(x__$1);
return om.next.transact_STAR_(r,x__$1,null,om.next.transform_reads(r,tx__$2));
} else {
var vec__20623 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.om$next$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,(1),null);
var G__20634 = om.next.parent(p);
var G__20635 = x_SINGLEQUOTE_;
var G__20636 = tx__$3;
p = G__20634;
x__$1 = G__20635;
tx__$2 = G__20636;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_(r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__20637){
var map__20640 = p__20637;
var map__20640__$1 = ((((!((map__20640 == null)))?((((map__20640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20640):map__20640);
var opts = map__20640__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20640__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20640__$1,cljs.core.cst$kw$mutate);
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser(opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast(query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__20643 = prop;
if((!(om.util.ident_QMARK_(prop))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(prop),cljs.core.cst$sym$_))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast).call(null,G__20643);
} else {
return G__20643;
}
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_(cp))){
var rendered_data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(union_keys)),data_path__$1);
var filter_data_path = (function (){var G__20646 = rendered_data_path;
if(!(cljs.core.empty_QMARK_(rendered_data_path))){
return cljs.core.pop(G__20646);
} else {
return G__20646;
}
})();
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__20644_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__20644_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__7523__auto__ = cljs.core.map_QMARK_(clojure.zip.node(q));
if(or__7523__auto__){
return or__7523__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.peek(data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek(data_path__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.zip.node(om.next.query_template(clojure.zip.root(q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template(om.next.focus_query(om.next.replace(om.next.query_template(clojure.zip.root(q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__20647 = cljs.core.pop(cp);
var G__20648 = cljs.core.pop(data_path__$1);
var G__20649 = clojure.zip.node(cljs.core.first(qs_SINGLEQUOTE_));
var G__20650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cp,qs_SINGLEQUOTE_);
cp = G__20647;
data_path__$1 = G__20648;
new_query__$1 = G__20649;
ret = G__20650;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = (function (){var G__20658 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20658) : cljs.core.atom.call(null,G__20658));
})();
var class_path__GT_query = (function (){var G__20659 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20659) : cljs.core.atom.call(null,G__20659));
})();
var rootq = om.next.get_query(x);
var root_class = (function (){var G__20660 = x;
if(om.next.component_QMARK_(x)){
return om.next.react_type(G__20660);
} else {
return G__20660;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__19100__auto___20841 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_(class$))) || ((om.next.iquery_QMARK_(class$)) && (!(cljs.core.empty_QMARK_(query))))){
} else {
var G__20796_20842 = l__19100__auto___20841;
var G__20797_20843 = [cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_(class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__20796_20842,G__20797_20843);
}

var recursive_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([class$], true),classpath);
var classpath__$1 = (function (){var G__20798 = classpath;
if((!((class$ == null))) && (cljs.core.not(recursive_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20798,class$);
} else {
return G__20798;
}
})();
var dp__GT_cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components], null));
if(cljs.core.truth_(class$)){
var root_query_20844 = ((cljs.core.empty_QMARK_(path))?rootq:clojure.zip.root(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([om.next.query_template(om.next.focus_query(root_query_20844,path),path)], 0));
} else {
}

var recursive_join_QMARK_ = (function (){var and__7511__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__7511__auto__)){
var and__7511__auto____$1 = cljs.core.some(((function (and__7511__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__7511__auto____$1 = om.util.join_QMARK_(e);
if(cljs.core.truth_(and__7511__auto____$1)){
return !(om.util.recursion_QMARK_(om.util.join_value(e)));
} else {
return and__7511__auto____$1;
}
});})(and__7511__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__7511__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path),path);
} else {
return and__7511__auto____$1;
}
} else {
return and__7511__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__7511__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__7511__auto__)){
var and__7511__auto____$1 = union_expr;
if(cljs.core.truth_(and__7511__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path),path);
} else {
return and__7511__auto____$1;
}
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_((function (){var or__7523__auto__ = cljs.core.not(recursive_QMARK_);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_(query)){
var map__20799 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__20799__$1 = ((((!((map__20799 == null)))?((((map__20799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20799):map__20799);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20799__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20799__$1,true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__20799,map__20799__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__20651_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20651_SHARP_,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.next.get_dispatch_key,props),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([class$], true)))], 0));
});})(map__20799,map__20799__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__20801 = cljs.core.seq(joins);
var chunk__20802 = null;
var count__20803 = (0);
var i__20804 = (0);
while(true){
if((i__20804 < count__20803)){
var join = chunk__20802.cljs$core$IIndexed$_nth$arity$2(null,i__20804);
var vec__20805_20845 = om.util.join_entry(join);
var prop_20846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20805_20845,(0),null);
var query_SINGLEQUOTE__20847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20805_20845,(1),null);
var prop_dispatch_key_20848 = om.next.get_dispatch_key(prop_20846);
var recursion_QMARK__20849 = om.util.recursion_QMARK_(query_SINGLEQUOTE__20847);
var union_recursion_QMARK__20850 = (function (){var and__7511__auto__ = recursion_QMARK__20849;
if(and__7511__auto__){
return union_expr;
} else {
return and__7511__auto__;
}
})();
var query_SINGLEQUOTE__20851__$1 = ((recursion_QMARK__20849)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__20847);
var path_SINGLEQUOTE__20852 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_20846);
var rendered_path_SINGLEQUOTE__20853 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__20852));
var cs_20854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__20853);
var cascade_query_QMARK__20855 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_20854),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__20851__$1)),om.next.react_type(cljs.core.first(cs_20854)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__20851__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__20856 = ((cascade_query_QMARK__20855)?om.next.get_query(cljs.core.first(cs_20854)):query_SINGLEQUOTE__20851__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__20801,chunk__20802,count__20803,i__20804,vec__20805_20845,prop_20846,query_SINGLEQUOTE__20847,prop_dispatch_key_20848,recursion_QMARK__20849,union_recursion_QMARK__20850,query_SINGLEQUOTE__20851__$1,path_SINGLEQUOTE__20852,rendered_path_SINGLEQUOTE__20853,cs_20854,cascade_query_QMARK__20855,query_SINGLEQUOTE__SINGLEQUOTE__20856,join,map__20799,map__20799__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__20652_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20652_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_20848,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false)], 0));
});})(seq__20801,chunk__20802,count__20803,i__20804,vec__20805_20845,prop_20846,query_SINGLEQUOTE__20847,prop_dispatch_key_20848,recursion_QMARK__20849,union_recursion_QMARK__20850,query_SINGLEQUOTE__20851__$1,path_SINGLEQUOTE__20852,rendered_path_SINGLEQUOTE__20853,cs_20854,cascade_query_QMARK__20855,query_SINGLEQUOTE__SINGLEQUOTE__20856,join,map__20799,map__20799__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__20855) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__20851__$1,query_SINGLEQUOTE__SINGLEQUOTE__20856))){
var cp__GT_q_SINGLEQUOTE__20857 = om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1,path_SINGLEQUOTE__20852,query_SINGLEQUOTE__SINGLEQUOTE__20856,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__20857);
} else {
}

var class_SINGLEQUOTE__20858 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__20856));
if((recursion_QMARK__20849) && ((class_SINGLEQUOTE__20858 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__20858,query_SINGLEQUOTE__SINGLEQUOTE__20856,path_SINGLEQUOTE__20852,classpath__$1,((recursion_QMARK__20849)?union_expr:null),union_keys);
}

var G__20859 = seq__20801;
var G__20860 = chunk__20802;
var G__20861 = count__20803;
var G__20862 = (i__20804 + (1));
seq__20801 = G__20859;
chunk__20802 = G__20860;
count__20803 = G__20861;
i__20804 = G__20862;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__20801);
if(temp__6753__auto__){
var seq__20801__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20801__$1)){
var c__8429__auto__ = cljs.core.chunk_first(seq__20801__$1);
var G__20863 = cljs.core.chunk_rest(seq__20801__$1);
var G__20864 = c__8429__auto__;
var G__20865 = cljs.core.count(c__8429__auto__);
var G__20866 = (0);
seq__20801 = G__20863;
chunk__20802 = G__20864;
count__20803 = G__20865;
i__20804 = G__20866;
continue;
} else {
var join = cljs.core.first(seq__20801__$1);
var vec__20808_20867 = om.util.join_entry(join);
var prop_20868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20808_20867,(0),null);
var query_SINGLEQUOTE__20869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20808_20867,(1),null);
var prop_dispatch_key_20870 = om.next.get_dispatch_key(prop_20868);
var recursion_QMARK__20871 = om.util.recursion_QMARK_(query_SINGLEQUOTE__20869);
var union_recursion_QMARK__20872 = (function (){var and__7511__auto__ = recursion_QMARK__20871;
if(and__7511__auto__){
return union_expr;
} else {
return and__7511__auto__;
}
})();
var query_SINGLEQUOTE__20873__$1 = ((recursion_QMARK__20871)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__20869);
var path_SINGLEQUOTE__20874 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_20868);
var rendered_path_SINGLEQUOTE__20875 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__20874));
var cs_20876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__20875);
var cascade_query_QMARK__20877 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_20876),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__20873__$1)),om.next.react_type(cljs.core.first(cs_20876)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__20873__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__20878 = ((cascade_query_QMARK__20877)?om.next.get_query(cljs.core.first(cs_20876)):query_SINGLEQUOTE__20873__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__20801,chunk__20802,count__20803,i__20804,vec__20808_20867,prop_20868,query_SINGLEQUOTE__20869,prop_dispatch_key_20870,recursion_QMARK__20871,union_recursion_QMARK__20872,query_SINGLEQUOTE__20873__$1,path_SINGLEQUOTE__20874,rendered_path_SINGLEQUOTE__20875,cs_20876,cascade_query_QMARK__20877,query_SINGLEQUOTE__SINGLEQUOTE__20878,join,seq__20801__$1,temp__6753__auto__,map__20799,map__20799__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__20652_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20652_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_20870,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false)], 0));
});})(seq__20801,chunk__20802,count__20803,i__20804,vec__20808_20867,prop_20868,query_SINGLEQUOTE__20869,prop_dispatch_key_20870,recursion_QMARK__20871,union_recursion_QMARK__20872,query_SINGLEQUOTE__20873__$1,path_SINGLEQUOTE__20874,rendered_path_SINGLEQUOTE__20875,cs_20876,cascade_query_QMARK__20877,query_SINGLEQUOTE__SINGLEQUOTE__20878,join,seq__20801__$1,temp__6753__auto__,map__20799,map__20799__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__20877) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__20873__$1,query_SINGLEQUOTE__SINGLEQUOTE__20878))){
var cp__GT_q_SINGLEQUOTE__20879 = om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1,path_SINGLEQUOTE__20874,query_SINGLEQUOTE__SINGLEQUOTE__20878,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__20879);
} else {
}

var class_SINGLEQUOTE__20880 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__20878));
if((recursion_QMARK__20871) && ((class_SINGLEQUOTE__20880 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__20880,query_SINGLEQUOTE__SINGLEQUOTE__20878,path_SINGLEQUOTE__20874,classpath__$1,((recursion_QMARK__20871)?union_expr:null),union_keys);
}

var G__20881 = cljs.core.next(seq__20801__$1);
var G__20882 = null;
var G__20883 = (0);
var G__20884 = (0);
seq__20801 = G__20881;
chunk__20802 = G__20882;
count__20803 = G__20883;
i__20804 = G__20884;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(query)){
var seq__20811 = cljs.core.seq(query);
var chunk__20812 = null;
var count__20813 = (0);
var i__20814 = (0);
while(true){
if((i__20814 < count__20813)){
var vec__20815 = chunk__20812.cljs$core$IIndexed$_nth$arity$2(null,i__20814);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20815,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20815,(1),null);
var path_SINGLEQUOTE__20885 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__20886 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_20887 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__20811,chunk__20812,count__20813,i__20814,path_SINGLEQUOTE__20885,class_SINGLEQUOTE__20886,vec__20815,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__20653_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__20886,om.next.react_type(p1__20653_SHARP_));
});})(seq__20811,chunk__20812,count__20813,i__20814,path_SINGLEQUOTE__20885,class_SINGLEQUOTE__20886,vec__20815,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__20888 = (function (){var and__7511__auto__ = class_SINGLEQUOTE__20886;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_20887),(1));
} else {
return and__7511__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__20889 = (cljs.core.truth_(cascade_query_QMARK__20888)?om.next.get_query(cljs.core.first(cs_20887)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__7511__auto__ = cascade_query_QMARK__20888;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__20889);
} else {
return and__7511__auto__;
}
})())){
var qs_20890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1);
var q_20891 = cljs.core.first(qs_20890);
var qnode_20892 = clojure.zip.node((function (){var G__20818 = q_20891;
if((class$ == null)){
return om.next.query_template(G__20818,path);
} else {
return G__20818;
}
})());
var new_query_20893 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_20892,prop,query_SINGLEQUOTE__SINGLEQUOTE__20889);
var q_SINGLEQUOTE__20894 = (function (){var G__20819 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_20891),path),new_query_20893);
if((class$ == null)){
return om.next.query_template(om.next.focus_query(clojure.zip.root(G__20819),cljs.core.pop(path)),cljs.core.pop(path));
} else {
return G__20819;
}
})();
var qs_SINGLEQUOTE__20895 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__20894], true),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([q_20891], true)),qs_20890);
var cp__GT_q_SINGLEQUOTE__20896 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__20895], true, false),om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__20894),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__20896);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__20886,query_SINGLEQUOTE__SINGLEQUOTE__20889,path_SINGLEQUOTE__20885,classpath__$1,query,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__20897 = seq__20811;
var G__20898 = chunk__20812;
var G__20899 = count__20813;
var G__20900 = (i__20814 + (1));
seq__20811 = G__20897;
chunk__20812 = G__20898;
count__20813 = G__20899;
i__20814 = G__20900;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__20811);
if(temp__6753__auto__){
var seq__20811__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20811__$1)){
var c__8429__auto__ = cljs.core.chunk_first(seq__20811__$1);
var G__20901 = cljs.core.chunk_rest(seq__20811__$1);
var G__20902 = c__8429__auto__;
var G__20903 = cljs.core.count(c__8429__auto__);
var G__20904 = (0);
seq__20811 = G__20901;
chunk__20812 = G__20902;
count__20813 = G__20903;
i__20814 = G__20904;
continue;
} else {
var vec__20820 = cljs.core.first(seq__20811__$1);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20820,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20820,(1),null);
var path_SINGLEQUOTE__20905 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__20906 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_20907 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__20811,chunk__20812,count__20813,i__20814,path_SINGLEQUOTE__20905,class_SINGLEQUOTE__20906,vec__20820,prop,query_SINGLEQUOTE_,seq__20811__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__20653_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__20906,om.next.react_type(p1__20653_SHARP_));
});})(seq__20811,chunk__20812,count__20813,i__20814,path_SINGLEQUOTE__20905,class_SINGLEQUOTE__20906,vec__20820,prop,query_SINGLEQUOTE_,seq__20811__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__20908 = (function (){var and__7511__auto__ = class_SINGLEQUOTE__20906;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_20907),(1));
} else {
return and__7511__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__20909 = (cljs.core.truth_(cascade_query_QMARK__20908)?om.next.get_query(cljs.core.first(cs_20907)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__7511__auto__ = cascade_query_QMARK__20908;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__20909);
} else {
return and__7511__auto__;
}
})())){
var qs_20910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1);
var q_20911 = cljs.core.first(qs_20910);
var qnode_20912 = clojure.zip.node((function (){var G__20823 = q_20911;
if((class$ == null)){
return om.next.query_template(G__20823,path);
} else {
return G__20823;
}
})());
var new_query_20913 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_20912,prop,query_SINGLEQUOTE__SINGLEQUOTE__20909);
var q_SINGLEQUOTE__20914 = (function (){var G__20824 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_20911),path),new_query_20913);
if((class$ == null)){
return om.next.query_template(om.next.focus_query(clojure.zip.root(G__20824),cljs.core.pop(path)),cljs.core.pop(path));
} else {
return G__20824;
}
})();
var qs_SINGLEQUOTE__20915 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__20914], true),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([q_20911], true)),qs_20910);
var cp__GT_q_SINGLEQUOTE__20916 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__20915], true, false),om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__20914),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__20916);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__20906,query_SINGLEQUOTE__SINGLEQUOTE__20909,path_SINGLEQUOTE__20905,classpath__$1,query,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__20917 = cljs.core.next(seq__20811__$1);
var G__20918 = null;
var G__20919 = (0);
var G__20920 = (0);
seq__20811 = G__20917;
chunk__20812 = G__20918;
count__20813 = G__20919;
i__20814 = G__20920;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
;
build_index_STAR_(root_class,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop_DASH__GT_classes,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prop__GT_classes) : cljs.core.deref.call(null,prop__GT_classes)),cljs.core.cst$kw$class_DASH_path_DASH__GT_query,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query))], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,om.next.react_type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(c));
var indexes__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components,data_path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?(function (){var ident = om.next.ident(c,om.next.props(c));
var l__19100__auto___20921 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_(ident)){
} else {
var G__20826_20922 = l__19100__auto___20921;
var G__20827_20923 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__20826_20922,G__20827_20923);
}

var l__19100__auto___20924 = om.next._STAR_logger_STAR_;
if(cljs.core.some_QMARK_(cljs.core.second(ident))){
} else {
var G__20828_20925 = l__19100__auto___20924;
var G__20829_20926 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("component "),cljs.core.str(c.constructor.displayName),cljs.core.str("'s ident ("),cljs.core.str(ident),cljs.core.str(") has a `nil` second element."),cljs.core.str(" This warning can be safely ignored if that is intended.")].join(''))].join('');
goog.log.error(G__20828_20925,G__20829_20926);
}

return ident;
})():null);
if(!((ident == null))){
var G__20830 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__20830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__20830;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,om.next.react_type(c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(c));
var indexes__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components,data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(!((ident == null))){
var G__20832 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__20832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.disj,c);
} else {
return G__20832;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
if(om.next.component_QMARK_(k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__6751__auto__ = cljs.core.cst$kw$ref_DASH__GT_components.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__6751__auto__)){
var cs = temp__6751__auto__;
return cs;
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (temp__6751__auto__,indexes__$1,___$1){
return (function (p1__20654_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__20654_SHARP_], null));
});})(temp__6751__auto__,indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prop_DASH__GT_classes,k], null)));
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8193__auto__,k__8194__auto__){
var self__ = this;
var this__8193__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8193__auto____$1,k__8194__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8195__auto__,k20656,else__8196__auto__){
var self__ = this;
var this__8195__auto____$1 = this;
var G__20833 = (((k20656 instanceof cljs.core.Keyword))?k20656.fqn:null);
switch (G__20833) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20656,else__8196__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8207__auto__,writer__8208__auto__,opts__8209__auto__){
var self__ = this;
var this__8207__auto____$1 = this;
var pr_pair__8210__auto__ = ((function (this__8207__auto____$1){
return (function (keyval__8211__auto__){
return cljs.core.pr_sequential_writer(writer__8208__auto__,cljs.core.pr_writer,""," ","",opts__8209__auto__,keyval__8211__auto__);
});})(this__8207__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8208__auto__,pr_pair__8210__auto__,"#om.next.Indexer{",", ","}",opts__8209__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20655){
var self__ = this;
var G__20655__$1 = this;
return (new cljs.core.RecordIter((0),G__20655__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes,cljs.core.cst$kw$extfs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8191__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8187__auto__){
var self__ = this;
var this__8187__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8197__auto__){
var self__ = this;
var this__8197__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8188__auto__){
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


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8189__auto__,other__8190__auto__){
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


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8202__auto__,k__8203__auto__){
var self__ = this;
var this__8202__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$extfs,null,cljs.core.cst$kw$indexes,null], null), null),k__8203__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8202__auto____$1),self__.__meta),k__8203__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8203__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8200__auto__,k__8201__auto__,G__20655){
var self__ = this;
var this__8200__auto____$1 = this;
var pred__20834 = cljs.core.keyword_identical_QMARK_;
var expr__20835 = k__8201__auto__;
if(cljs.core.truth_((function (){var G__20837 = cljs.core.cst$kw$indexes;
var G__20838 = expr__20835;
return (pred__20834.cljs$core$IFn$_invoke$arity$2 ? pred__20834.cljs$core$IFn$_invoke$arity$2(G__20837,G__20838) : pred__20834.call(null,G__20837,G__20838));
})())){
return (new om.next.Indexer(G__20655,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20839 = cljs.core.cst$kw$extfs;
var G__20840 = expr__20835;
return (pred__20834.cljs$core$IFn$_invoke$arity$2 ? pred__20834.cljs$core$IFn$_invoke$arity$2(G__20839,G__20840) : pred__20834.call(null,G__20839,G__20840));
})())){
return (new om.next.Indexer(self__.indexes,G__20655,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8201__auto__,G__20655),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8205__auto__){
var self__ = this;
var this__8205__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8192__auto__,G__20655){
var self__ = this;
var this__8192__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__20655,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8198__auto__,entry__8199__auto__){
var self__ = this;
var this__8198__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8199__auto__)){
return cljs.core._assoc(this__8198__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8199__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8199__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8198__auto____$1,entry__8199__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$indexes,cljs.core.cst$sym$extfs], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__8229__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__8229__auto__,writer__8230__auto__){
return cljs.core._write(writer__8230__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__20657){
return (new om.next.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__20657),cljs.core.cst$kw$extfs.cljs$core$IFn$_invoke$arity$1(G__20657),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20657,cljs.core.cst$kw$indexes,cljs.core.array_seq([cljs.core.cst$kw$extfs], 0)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args20928 = [];
var len__8739__auto___20932 = arguments.length;
var i__8740__auto___20933 = (0);
while(true){
if((i__8740__auto___20933 < len__8739__auto___20932)){
args20928.push((arguments[i__8740__auto___20933]));

var G__20934 = (i__8740__auto___20933 + (1));
i__8740__auto___20933 = G__20934;
continue;
} else {
}
break;
}

var G__20930 = args20928.length;
switch (G__20930) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20928.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$drop_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$ref_DASH__GT_components,(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer((function (){var G__20931 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$data_DASH_path_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20931) : cljs.core.atom.call(null,G__20931));
})(),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return om.next.protocols.key__GT_components(indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(om.next.protocols.key__GT_components(indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
var cp = ((om.next.component_QMARK_(y))?om.next.class_path(y):y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.zip.root),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args20937 = [];
var len__8739__auto___20943 = arguments.length;
var i__8740__auto___20944 = (0);
while(true){
if((i__8740__auto___20944 < len__8739__auto___20943)){
args20937.push((arguments[i__8740__auto___20944]));

var G__20945 = (i__8740__auto___20944 + (1));
i__8740__auto___20944 = G__20945;
continue;
} else {
}
break;
}

var G__20939 = args20937.length;
switch (G__20939) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20937.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_(component)){
if((om.next.path(component) == null)){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20940 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20940) : cljs.core.deref.call(null,G__20940));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,om.next.class_path(component)], null))),om.next.get_query(component));
} else {
return om.next.full_query.cljs$core$IFn$_invoke$arity$2(component,om.next.get_query(component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_(component)){
var xf = (function (){var G__20941 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_(component)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),G__20941);
} else {
return G__20941;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf,om.next.path(component));
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20942 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20942) : cljs.core.deref.call(null,G__20942));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__20936_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(om.next.get_dispatch_key,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__20936_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace(q,query);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = ((((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))?om.next.ident(class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__20971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__20972 = data;
var G__20973 = refs;
var G__20974 = union_seen;
return (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(G__20971,G__20972,G__20973,G__20974) : om.next.normalize_STAR_.call(null,G__20971,G__20972,G__20973,G__20974));
})(),cljs.core.assoc,cljs.core.cst$kw$om_SLASH_tag,cljs.core.first(ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data)){
return data;
} else {
var q = cljs.core.seq(query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first(q);
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var vec__20975 = om.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20975,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20975,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_(sel);
var union_entry = ((om.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_(v))){
var G__20990 = cljs.core.next(q);
var G__20991 = ret;
q = G__20990;
ret = G__20991;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,v,refs,union_entry) : om.next.normalize_STAR_.call(null,sel__$1,v,refs,union_entry));
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.array_seq([x], 0));

var G__20992 = cljs.core.next(q);
var G__20993 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__20992;
ret = G__20993;
continue;
} else {
var G__20994 = cljs.core.next(q);
var G__20995 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__20994;
ret = G__20995;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__20947_SHARP_){
return (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,p1__20947_SHARP_,refs,union_entry) : om.next.normalize_STAR_.call(null,sel__$1,p1__20947_SHARP_,refs,union_entry));
});})(q,ret,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__20949_SHARP_){
return om.next.ident(class$,p1__20949_SHARP_);
});})(q,ret,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__20982){
var vec__20983 = p__20982;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20983,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20983,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__20986){
var vec__20987 = p__20986;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20987,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20987,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__20975,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__20996 = cljs.core.next(q);
var G__20997 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__20996;
ret = G__20997;
continue;
} else {
var G__20998 = cljs.core.next(q);
var G__20999 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__20998;
ret = G__20999;
continue;
}
} else {
if((v == null)){
var G__21000 = cljs.core.next(q);
var G__21001 = ret;
q = G__21000;
ret = G__21001;
continue;
} else {
var G__21002 = cljs.core.next(q);
var G__21003 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__21002;
ret = G__21003;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__21004 = cljs.core.next(q);
var G__21005 = ret;
q = G__21004;
ret = G__21005;
continue;
} else {
var G__21006 = cljs.core.next(q);
var G__21007 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__21006;
ret = G__21007;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args21008 = [];
var len__8739__auto___21012 = arguments.length;
var i__8740__auto___21013 = (0);
while(true){
if((i__8740__auto___21013 < len__8739__auto___21012)){
args21008.push((arguments[i__8740__auto___21013]));

var G__21014 = (i__8740__auto___21013 + (1));
i__8740__auto___21013 = G__21014;
continue;
} else {
}
break;
}

var G__21010 = args21008.length;
switch (G__21010) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21008.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = (function (){var G__21011 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21011) : cljs.core.atom.call(null,G__21011));
})();
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:om.next.get_query(x));
var ret = om.next.normalize_STAR_(x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ret,refs_SINGLEQUOTE_], 0)),cljs.core.cst$kw$om$next_SLASH_tables,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta(ret,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs)));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__21019 = cljs.core.group_by((function (p1__21016_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__21016_SHARP_));
}),res);
var map__21019__$1 = ((((!((map__21019 == null)))?((((map__21019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21019):map__21019);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_(om.next.focus_query(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node(pos);
var node_SINGLEQUOTE_ = (function (){var G__21022 = node;
if(typeof node === 'number'){
return (G__21022 - (1));
} else {
return G__21022;
}
})();
return om.next.replace(pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21027){
var vec__21028 = p__21027;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21028,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21028,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth(q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_(ident)) && (cljs.core.contains_QMARK_(refs,cljs.core.first(ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__7511__auto__ = union_expr;
if(cljs.core.truth_(and__7511__auto__)){
return recurse_key;
} else {
return and__7511__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,data__$1))){
var G__21092 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(data__$1) : map_ident.call(null,data__$1)));
data__$1 = G__21092;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_(data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not(om.next.mappable_ident_QMARK_(refs,ident))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null))){
return ident;
} else {
var map__21063 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__21063__$1 = ((((!((map__21063 == null)))?((((map__21063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21063):map__21063);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__21063,map__21063__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21031_SHARP_){
var G__21065 = p1__21031_SHARP_;
if(cljs.core.seq_QMARK_(p1__21031_SHARP_)){
return cljs.core.first(G__21065);
} else {
return G__21065;
}
});})(map__21063,map__21063__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var vec__21066 = om.util.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21066,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21066,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident,key);
var G__21093 = cljs.core.next(joins__$1);
var G__21094 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,(om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel,v,refs,map_ident,idents_seen,union_expr,recurse_key) : om.next.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key)));
joins__$1 = G__21093;
ret = G__21094;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(ident,props__$1),ret], 0));
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query__$1 = (function (){var G__21069 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__21069,recurse_key);
} else {
return G__21069;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__21070 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__21070,recurse_key);
} else {
return G__21070;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__21071 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__21071,cljs.core.first(ident));
} else {
return G__21071;
}
})();
return (om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null) : om.next.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__7511__auto__ = cljs.core.map_QMARK_(query);
if(and__7511__auto__){
return union_recur_QMARK_;
} else {
return and__7511__auto__;
}
})())){
var G__21072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(recur_ident));
var G__21073 = data__$1;
var G__21074 = refs;
var G__21075 = map_ident;
var G__21076 = idents_seen;
var G__21077 = union_expr;
var G__21078 = recurse_key;
return (om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(G__21072,G__21073,G__21074,G__21075,G__21076,G__21077,G__21078) : om.next.denormalize_STAR_.call(null,G__21072,G__21073,G__21074,G__21075,G__21076,G__21077,G__21078));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data__$1;
} else {
var map__21079 = cljs.core.group_by(((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21032_SHARP_){
var or__7523__auto__ = om.util.join_QMARK_(p1__21032_SHARP_);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return (om.util.ident_QMARK_(p1__21032_SHARP_)) || ((cljs.core.seq_QMARK_(p1__21032_SHARP_)) && (om.util.ident_QMARK_(cljs.core.first(p1__21032_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__21079__$1 = ((((!((map__21079 == null)))?((((map__21079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21079):map__21079);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__21079,map__21079__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21033_SHARP_){
var G__21081 = p1__21033_SHARP_;
if(cljs.core.seq_QMARK_(p1__21033_SHARP_)){
return cljs.core.first(G__21081);
} else {
return G__21081;
}
});})(map__21079,map__21079__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__21085 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__21085);
} else {
return G__21085;
}
})();
var join__$2 = (function (){var G__21086 = join__$1;
if(om.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__21086],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__21086;
}
})();
var vec__21082 = om.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21082,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21082,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__21087 = key;
if(om.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__21087);
} else {
return G__21087;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1)));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,next))){
var G__21095 = next;
v__$1 = G__21095;
continue;
} else {
return (map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1));
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:cljs.core.cst$kw$none);
var union_entry = ((om.util.union_QMARK_(join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth(query,key__$1)):(cljs.core.truth_((function (){var and__7511__auto__ = om.next.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__7511__auto__)){
return om.util.union_QMARK_(join__$2);
} else {
return and__7511__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):(((om.util.ident_QMARK_(key__$1)) && (om.util.union_QMARK_(join__$2)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__7511__auto__ = om.next.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__7511__auto__)){
return recurse_QMARK_;
} else {
return and__7511__auto__;
}
})())?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
var G__21096 = cljs.core.next(joins__$1);
var G__21097 = ret;
joins__$1 = G__21096;
ret = G__21097;
continue;
} else {
if(graph_loop_QMARK_){
var G__21098 = cljs.core.next(joins__$1);
var G__21099 = ret;
joins__$1 = G__21098;
ret = G__21099;
continue;
} else {
if((v__$1 == null)){
var G__21100 = cljs.core.next(joins__$1);
var G__21101 = ret;
joins__$1 = G__21100;
ret = G__21101;
continue;
} else {
var G__21102 = cljs.core.next(joins__$1);
var G__21103 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,(om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1) : om.next.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1)));
joins__$1 = G__21102;
ret = G__21103;
continue;

}
}
}
} else {
var temp__6751__auto__ = cljs.core.some(((function (joins__$1,ret,map__21079,map__21079__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__21088){
var vec__21089 = p__21088;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21089,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21089,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,k], null));
} else {
return null;
}
});})(joins__$1,ret,map__21079,map__21079__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,cljs.core.cst$kw$last_DASH_ident));
if(cljs.core.truth_(temp__6751__auto__)){
var looped_key = temp__6751__auto__;
return looped_key;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(data__$1,props__$1),ret], 0));
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args21104 = [];
var len__8739__auto___21107 = arguments.length;
var i__8740__auto___21108 = (0);
while(true){
if((i__8740__auto___21108 < len__8739__auto___21107)){
args21104.push((arguments[i__8740__auto___21108]));

var G__21109 = (i__8740__auto___21108 + (1));
i__8740__auto___21108 = G__21109;
continue;
} else {
}
break;
}

var G__21106 = args21104.length;
switch (G__21106) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21104.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_(query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_(query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__21134){
var vec__21138 = p__21134;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21138,(0),null);
var orig_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21138,(1),null);
var to_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_move,vec__21138,k,orig_paths){
return (function (p1__21111_SHARP_,p2__21112_SHARP_){
return cljs.core.assoc_in(p1__21111_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__21112_SHARP_,k),to_move);
});})(to_move,vec__21138,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_(join))){
if(cljs.core.truth_(query_root_QMARK_(join))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__21141_SHARP_){
var G__21145 = p1__21141_SHARP_;
var G__21146 = result_roots;
var G__21147 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,om.util.join_key(join));
return (om.next.move_roots.cljs$core$IFn$_invoke$arity$3 ? om.next.move_roots.cljs$core$IFn$_invoke$arity$3(G__21145,G__21146,G__21147) : om.next.move_roots.call(null,G__21145,G__21146,G__21147));
}),cljs.core.array_seq([om.util.join_value(join)], 0));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$elements_DASH_seen.cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_((function (){var and__7511__auto__ = om.util.join_QMARK_(expr);
if(cljs.core.truth_(and__7511__auto__)){
return (!(om.util.union_QMARK_(expr))) && (!(cljs.core.list_QMARK_(expr)));
} else {
return and__7511__auto__;
}
})())?(function (){var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var q = (function (){var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_(q))?q:((om.util.recursion_QMARK_(jv))?jv:(function (){var G__21159 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(q,jv));
return (om.next.merge_joins.cljs$core$IFn$_invoke$arity$1 ? om.next.merge_joins.cljs$core$IFn$_invoke$arity$1(G__21159) : om.next.merge_joins.call(null,G__21159));
})()
));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_by_DASH_join], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_mergeable], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements_DASH_seen], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_by_DASH_join,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$elements_DASH_seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$not_DASH_mergeable,cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,init,query);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$not_DASH_mergeable.cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (init,res){
return (function (p__21160){
var vec__21161 = p__21160;
var jkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161,(0),null);
var jsel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots(expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_(roots)){
return retain(expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__21185){
var vec__21189 = p__21185;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21189,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21189,(1),null);
if(cljs.core.empty_QMARK_(path)){
return rewrites;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key(expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(reroot,cljs.core.array_seq([query], 0));
var query__$1 = om.next.merge_joins(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,query__$1,cljs.core.cst$kw$rewrite,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__21209 = config;
var map__21209__$1 = ((((!((map__21209 == null)))?((((map__21209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21209):map__21209);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21209__$1,cljs.core.cst$kw$merge_DASH_ident);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21209__$1,cljs.core.cst$kw$indexer);
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21209,map__21209__$1,merge_ident,indexer){
return (function (p1__21192_SHARP_){
var and__7511__auto__ = om.util.join_QMARK_(p1__21192_SHARP_);
if(cljs.core.truth_(and__7511__auto__)){
return om.util.ident_QMARK_(om.util.join_key(p1__21192_SHARP_));
} else {
return and__7511__auto__;
}
});})(map__21209,map__21209__$1,merge_ident,indexer))
,query));
var step = ((function (map__21209,map__21209__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__21218){
var vec__21222 = p__21218;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21222,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21222,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident_joins,ident);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return om.next.ref__GT_any(indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c_or_q,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,(merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_)),refs__$1);
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__21209,map__21209__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__21229 = om.next.sift_idents(res);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21229,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21229,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__7523__auto__ = query;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__21232 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21232) : cljs.core.deref.call(null,G__21232));
})());
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents(state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),cljs.core.cst$kw$next,om.next.merge_novelty_BANG_(reconciler,state,res,query),cljs.core.cst$kw$tempids,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args21233 = [];
var len__8739__auto___21249 = arguments.length;
var i__8740__auto___21250 = (0);
while(true){
if((i__8740__auto___21250 < len__8739__auto___21249)){
args21233.push((arguments[i__8740__auto___21250]));

var G__21251 = (i__8740__auto___21250 + (1));
i__8740__auto___21250 = G__21251;
continue;
} else {
}
break;
}

var G__21235 = args21233.length;
switch (G__21235) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21233.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(config);
var map__21236 = (function (){var G__21237 = reconciler;
var G__21238 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var G__21239 = delta;
var G__21240 = query;
return (merge_STAR_.cljs$core$IFn$_invoke$arity$4 ? merge_STAR_.cljs$core$IFn$_invoke$arity$4(G__21237,G__21238,G__21239,G__21240) : merge_STAR_.call(null,G__21237,G__21238,G__21239,G__21240));
})();
var map__21236__$1 = ((((!((map__21236 == null)))?((((map__21236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21236):map__21236);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21236__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21236__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21236__$1,cljs.core.cst$kw$tempids);
om.next.protocols.queue_BANG_(reconciler,keys);

var G__21242 = state;
var G__21243 = (function (){var temp__6751__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__6751__auto__)){
var migrate = temp__6751__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null)),(function (){var G__21244 = next;
var G__21245 = (function (){var or__7523__auto__ = query;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return om.next.get_query(cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__21248 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21248) : cljs.core.deref.call(null,G__21248));
})()));
}
})();
var G__21246 = tempids;
var G__21247 = cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(config);
return (migrate.cljs$core$IFn$_invoke$arity$4 ? migrate.cljs$core$IFn$_invoke$arity$4(G__21244,G__21245,G__21246,G__21247) : migrate.call(null,G__21244,G__21245,G__21246,G__21247));
})()], 0));
} else {
return next;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21242,G__21243) : cljs.core.reset_BANG_.call(null,G__21242,G__21243));
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8193__auto__,k__8194__auto__){
var self__ = this;
var this__8193__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8193__auto____$1,k__8194__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8195__auto__,k21258,else__8196__auto__){
var self__ = this;
var this__8195__auto____$1 = this;
var G__21260 = (((k21258 instanceof cljs.core.Keyword))?k21258.fqn:null);
switch (G__21260) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21258,else__8196__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue], null),cljs.core.into,cljs.core.array_seq([ks], 0));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued_DASH_sends], null),cljs.core.cst$kw$merge_DASH_sends.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.array_seq([sends], 0));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = cljs.core.cst$kw$queued_DASH_sends.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$queued_DASH_sends,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$sends_DASH_queued,false);
});})(sends,this$__$1))
);

return cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (res){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,null);
});
var om$next$send_cb__2 = (function (res,query){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);
});
om$next$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,res);
case 2:
return om$next$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
return om$next$send_cb;
})()
;})(sends,this$__$1))
);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state));
var q = cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queue,cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_(q)){
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (st,q,this$__$1){
return (function (p1__21254_SHARP_){
return om.next.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),p1__21254_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__21255_SHARP_,p2__21256_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__21255_SHARP_,p2__21256_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__21261 = self__.config;
var map__21261__$1 = ((((!((map__21261 == null)))?((((map__21261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21261):map__21261);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21261__$1,cljs.core.cst$kw$ui_DASH__GT_props);
var env = om.next.to_env(self__.config);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
var seq__21263 = cljs.core.seq(cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__21264 = null;
var count__21265 = (0);
var i__21266 = (0);
while(true){
if((i__21266 < count__21265)){
var c = chunk__21264.cljs$core$IIndexed$_nth$arity$2(null,i__21266);
var props_change_QMARK__21285 = (om.next.protocols.basis_t(this$__$1) > om.next.t(c));
if(om.next.mounted_QMARK_(c)){
var computed_21286 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_raw_props_21287 = (ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c));
var next_props_21288 = om.next.computed(next_raw_props_21287,computed_21286);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_(root)) && (props_change_QMARK__21285)){
var next_props_21289__$1 = (((next_props_21288 == null))?(function (){var temp__6753__auto__ = om.next.props(c);
if(cljs.core.truth_(temp__6753__auto__)){
var props = temp__6753__auto__;
return props;
} else {
return null;
}
})():next_props_21288);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props(next_props_21289__$1,om.next.protocols.basis_t(this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_21288,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_21288 == null))){
om.next.update_component_BANG_(c,next_props_21288);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_(root)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)) && (props_change_QMARK__21285)){
var temp__6753__auto___21290 = om.next.path(c);
if(cljs.core.truth_(temp__6753__auto___21290)){
var update_path_21291 = temp__6753__auto___21290;
var p_21292 = om.next.parent(c);
while(true){
if(cljs.core.some_QMARK_(p_21292)){
var update_path_SINGLEQUOTE__21293 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(update_path_21291,cljs.core.count(om.next.path(p_21292)));
om.next.update_props_BANG_(p_21292,cljs.core.assoc_in(om.next.props(p_21292),update_path_SINGLEQUOTE__21293,next_raw_props_21287));

om.next.merge_pending_props_BANG_(p_21292);

var G__21294 = om.next.parent(p_21292);
p_21292 = G__21294;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__21295 = seq__21263;
var G__21296 = chunk__21264;
var G__21297 = count__21265;
var G__21298 = (i__21266 + (1));
seq__21263 = G__21295;
chunk__21264 = G__21296;
count__21265 = G__21297;
i__21266 = G__21298;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__21263);
if(temp__6753__auto__){
var seq__21263__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21263__$1)){
var c__8429__auto__ = cljs.core.chunk_first(seq__21263__$1);
var G__21299 = cljs.core.chunk_rest(seq__21263__$1);
var G__21300 = c__8429__auto__;
var G__21301 = cljs.core.count(c__8429__auto__);
var G__21302 = (0);
seq__21263 = G__21299;
chunk__21264 = G__21300;
count__21265 = G__21301;
i__21266 = G__21302;
continue;
} else {
var c = cljs.core.first(seq__21263__$1);
var props_change_QMARK__21303 = (om.next.protocols.basis_t(this$__$1) > om.next.t(c));
if(om.next.mounted_QMARK_(c)){
var computed_21304 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_raw_props_21305 = (ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c));
var next_props_21306 = om.next.computed(next_raw_props_21305,computed_21304);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_(root)) && (props_change_QMARK__21303)){
var next_props_21307__$1 = (((next_props_21306 == null))?(function (){var temp__6753__auto____$1 = om.next.props(c);
if(cljs.core.truth_(temp__6753__auto____$1)){
var props = temp__6753__auto____$1;
return props;
} else {
return null;
}
})():next_props_21306);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props(next_props_21307__$1,om.next.protocols.basis_t(this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_21306,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_21306 == null))){
om.next.update_component_BANG_(c,next_props_21306);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_(root)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)) && (props_change_QMARK__21303)){
var temp__6753__auto___21308__$1 = om.next.path(c);
if(cljs.core.truth_(temp__6753__auto___21308__$1)){
var update_path_21309 = temp__6753__auto___21308__$1;
var p_21310 = om.next.parent(c);
while(true){
if(cljs.core.some_QMARK_(p_21310)){
var update_path_SINGLEQUOTE__21311 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(update_path_21309,cljs.core.count(om.next.path(p_21310)));
om.next.update_props_BANG_(p_21310,cljs.core.assoc_in(om.next.props(p_21310),update_path_SINGLEQUOTE__21311,next_raw_props_21305));

om.next.merge_pending_props_BANG_(p_21310);

var G__21312 = om.next.parent(p_21310);
p_21310 = G__21312;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__21313 = cljs.core.next(seq__21263__$1);
var G__21314 = null;
var G__21315 = (0);
var G__21316 = (0);
seq__21263 = G__21313;
chunk__21264 = G__21314;
count__21265 = G__21315;
i__21266 = G__21316;
continue;
}
} else {
return null;
}
}
break;
}
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queued,true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$sends_DASH_queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$sends_DASH_queued,true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rctor = om.next.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = cljs.core.random_uuid();
if(om.next.iquery_QMARK_(root_class)){
om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__7511__auto__ = cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not(cljs.core.cst$kw$normalized.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))));
} else {
return and__7511__auto__;
}
})())){
var new_state_21317 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,(function (){var G__21267 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21267) : cljs.core.deref.call(null,G__21267));
})());
var refs_21318 = cljs.core.meta(new_state_21317);
var G__21268_21319 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
var G__21269_21320 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state_21317,refs_21318], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21268_21319,G__21269_21320) : cljs.core.reset_BANG_.call(null,G__21268_21319,G__21269_21320));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_21270 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_21271 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21272 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config))?cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null)], 0));

om.next._STAR_instrument_STAR_ = cljs.core.cst$kw$instrument.cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?cljs.core.cst$kw$root_DASH_render.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)),target):((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__6753__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(temp__6753__auto__)){
var c_SINGLEQUOTE_ = temp__6753__auto__;
if(om.next.mounted_QMARK_(c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$root,c);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c) : cljs.core.reset_BANG_.call(null,ret,c));
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21272;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21271;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21270;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query((function (){var or__7523__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_(sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next.to_env(self__.config);
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_(v)){
return null;
} else {
return renderf(v);
}
} else {
return renderf((function (){var G__21273 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21273) : cljs.core.deref.call(null,G__21273));
})());
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$render,parsef,cljs.core.cst$kw$root,root_class,cljs.core.cst$kw$remove,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__7523__auto__ = target;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__21253_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21253_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return cljs.core.cst$kw$root_DASH_unmount.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__7523__auto__ = target;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$t], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_(root_class))){
return om.next.queue_render_BANG_(parsef);
} else {
return om.next.schedule_render_BANG_(this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

var temp__6753__auto___21321 = om.next.get_query((function (){var or__7523__auto__ = (function (){var and__7511__auto__ = target;
if(cljs.core.truth_(and__7511__auto__)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__6753__auto___21321)){
var sel_21322 = temp__6753__auto___21321;
var env_21323 = om.next.to_env(self__.config);
var snds_21324 = om.next.gather_sends(env_21323,sel_21322,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(snds_21324)){
} else {
var temp__6753__auto___21325__$1 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__6753__auto___21325__$1)){
var send_21326 = temp__6753__auto___21325__$1;
var G__21274_21327 = snds_21324;
var G__21275_21328 = ((function (G__21274_21327,send_21326,temp__6753__auto___21325__$1,env_21323,snds_21324,sel_21322,temp__6753__auto___21321,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (res){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,null);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_21323,sel_21322));
});
var om$next$send_cb__2 = (function (res,query){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_21323,sel_21322));
});
om$next$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,res);
case 2:
return om$next$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
return om$next$send_cb;
})()
;})(G__21274_21327,send_21326,temp__6753__auto___21325__$1,env_21323,snds_21324,sel_21322,temp__6753__auto___21321,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_21326.cljs$core$IFn$_invoke$arity$2 ? send_21326.cljs$core$IFn$_invoke$arity$2(G__21274_21327,G__21275_21328) : send_21326.call(null,G__21274_21327,G__21275_21328));
} else {
}
}
} else {
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),cljs.core.cst$kw$root);
if(om.next.iquery_QMARK_(root)){
var indexer = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,root], null)));
return om.next.protocols.index_root(indexer,(function (){var or__7523__auto__ = c;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__6753__auto__ = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.truth_(temp__6753__auto__)){
var remove = temp__6753__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8207__auto__,writer__8208__auto__,opts__8209__auto__){
var self__ = this;
var this__8207__auto____$1 = this;
var pr_pair__8210__auto__ = ((function (this__8207__auto____$1){
return (function (keyval__8211__auto__){
return cljs.core.pr_sequential_writer(writer__8208__auto__,cljs.core.pr_writer,""," ","",opts__8209__auto__,keyval__8211__auto__);
});})(this__8207__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8208__auto__,pr_pair__8210__auto__,"#om.next.Reconciler{",", ","}",opts__8209__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21257){
var self__ = this;
var G__21257__$1 = this;
return (new cljs.core.RecordIter((0),G__21257__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8191__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8187__auto__){
var self__ = this;
var this__8187__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8197__auto__){
var self__ = this;
var this__8197__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8188__auto__){
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


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8189__auto__,other__8190__auto__){
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


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8202__auto__,k__8203__auto__){
var self__ = this;
var this__8202__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config,null,cljs.core.cst$kw$state,null], null), null),k__8203__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8202__auto____$1),self__.__meta),k__8203__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8203__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8200__auto__,k__8201__auto__,G__21257){
var self__ = this;
var this__8200__auto____$1 = this;
var pred__21276 = cljs.core.keyword_identical_QMARK_;
var expr__21277 = k__8201__auto__;
if(cljs.core.truth_((function (){var G__21279 = cljs.core.cst$kw$config;
var G__21280 = expr__21277;
return (pred__21276.cljs$core$IFn$_invoke$arity$2 ? pred__21276.cljs$core$IFn$_invoke$arity$2(G__21279,G__21280) : pred__21276.call(null,G__21279,G__21280));
})())){
return (new om.next.Reconciler(G__21257,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21281 = cljs.core.cst$kw$state;
var G__21282 = expr__21277;
return (pred__21276.cljs$core$IFn$_invoke$arity$2 ? pred__21276.cljs$core$IFn$_invoke$arity$2(G__21281,G__21282) : pred__21276.call(null,G__21281,G__21282));
})())){
return (new om.next.Reconciler(self__.config,G__21257,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8201__auto__,G__21257),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8205__auto__){
var self__ = this;
var this__8205__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8192__auto__,G__21257){
var self__ = this;
var this__8192__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__21257,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8198__auto__,entry__8199__auto__){
var self__ = this;
var this__8198__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8199__auto__)){
return cljs.core._assoc(this__8198__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8199__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8199__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8198__auto____$1,entry__8199__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__21283 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21283) : cljs.core.deref.call(null,G__21283));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$state], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__8229__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__8229__auto__,writer__8230__auto__){
return cljs.core._write(writer__8230__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__21259){
return (new om.next.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__21259),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__21259),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21259,cljs.core.cst$kw$config,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__21329,c){
var map__21339 = p__21329;
var map__21339__$1 = ((((!((map__21339 == null)))?((((map__21339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21339):map__21339);
var env = map__21339__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21339__$1,cljs.core.cst$kw$parser);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21339__$1,cljs.core.cst$kw$pathopt);
var ui = (((function (){var and__7511__auto__ = pathopt;
if(and__7511__auto__){
var and__7511__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__7511__auto____$1){
return om.next.iquery_QMARK_(c);
} else {
return and__7511__auto____$1;
}
} else {
return and__7511__auto__;
}
})())?(function (){var id = om.next.ident(c,om.next.props(c));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21344 = env;
var G__21345 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query(c)], true, false)], null);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__21344,G__21345) : parser.call(null,G__21344,G__21345));
})(),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.cljs$core$IFn$_invoke$arity$1(c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time();
var ui__$1 = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,fq) : parser.call(null,env,fq));
var e = cljs.core.system_time();
var temp__6753__auto___21348 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__6753__auto___21348)){
var l_21349 = temp__6753__auto___21348;
var dt_21350 = (e - s);
if(((16) < dt_21350)){
var G__21346_21351 = l_21349;
var G__21347_21352 = [cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_21350),cljs.core.str(" msecs")].join('');
goog.log.warning(G__21346_21351,G__21347_21352);
} else {
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui__$1,om.next.path(c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0));
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args21353 = [];
var len__8739__auto___21400 = arguments.length;
var i__8740__auto___21401 = (0);
while(true){
if((i__8740__auto___21401 < len__8739__auto___21400)){
args21353.push((arguments[i__8740__auto___21401]));

var G__21402 = (i__8740__auto___21401 + (1));
i__8740__auto___21401 = G__21402;
continue;
} else {
}
break;
}

var G__21355 = args21353.length;
switch (G__21355) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21353.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4(app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__21378){
var vec__21382 = p__21378;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21382,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21382,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure,table),id));
});
var step = (function om$next$step(pure,p__21385){
var vec__21393 = p__21385;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21393,(0),null);
var vec__21396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21393,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21396,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21396,(1),null);
var new$ = vec__21396;
return cljs.core.assoc_in(dissoc_in(pure,old),new$,(function (){var G__21399 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,new$)], 0));
if(!((id_key == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21399,id_key,id);
} else {
return G__21399;
}
})());
});
if(!(cljs.core.empty_QMARK_(tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,app_state_pure,tempids);
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$om$next_SLASH_error));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_(res__$1)))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (class$){
return (function (p1__21404_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__21404_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident(class$,res__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_(query__$1)){
if(cljs.core.vector_QMARK_(res__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (class$,top_error_QMARK_,ret){
return (function (p1__21405_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(query__$1,p1__21405_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq(query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var k = (function (){var k = om.next.expr__GT_key(expr);
var G__21441 = k;
if(om.util.unique_ident_QMARK_(k)){
return cljs.core.first(G__21441);
} else {
return G__21441;
}
})();
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,k);
if(om.util.mutation_QMARK_(expr)){
var mk = om.util.mutation_key(expr);
var ret_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,mk);
if(om.next.has_error_QMARK_(ret_SINGLEQUOTE_)){
var x = cljs.core.cst$kw$mutator.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21406_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__21406_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__21443 = cljs.core.next(exprs);
var G__21444 = ret__$1;
exprs = G__21443;
ret__$1 = G__21444;
continue;
} else {
var G__21445 = cljs.core.next(exprs);
var G__21446 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__21445;
ret__$1 = G__21446;
continue;
}
} else {
if(om.util.union_QMARK_(expr)){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var class_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(jv));
if(!(cljs.core.vector_QMARK_(data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,data))),data,errs);
var G__21447 = cljs.core.next(exprs);
var G__21448 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21447;
ret__$1 = G__21448;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21407_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,p1__21407_SHARP_))),p1__21407_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__21449 = cljs.core.next(exprs);
var G__21450 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21449;
ret__$1 = G__21450;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(jv,data,errs);
var G__21451 = cljs.core.next(exprs);
var G__21452 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21451;
ret__$1 = G__21452;
continue;
} else {
if((cljs.core.map_QMARK_(data)) && (om.next.has_error_QMARK_(data))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21408_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__21408_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7523__auto__ = (((class$ == null))?null:om.next.ident(class$,res__$1));
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__21453 = cljs.core.next(exprs);
var G__21454 = null;
exprs = G__21453;
ret__$1 = G__21454;
continue;
} else {
var G__21455 = cljs.core.next(exprs);
var G__21456 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,k,data));
exprs = G__21455;
ret__$1 = G__21456;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = (function (){var G__21442 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21442) : cljs.core.atom.call(null,G__21442));
})();
var ret = extract_STAR_(query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tree,ret,cljs.core.cst$kw$errors,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(errs) : cljs.core.deref.call(null,errs))], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__21462){
var map__21467 = p__21462;
var map__21467__$1 = ((((!((map__21467 == null)))?((((map__21467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21467):map__21467);
var config = map__21467__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$root_DASH_render,((function (map__21467,map__21467__$1,config){
return (function (p1__21459_SHARP_,p2__21460_SHARP_){
return ReactDOM.render(p1__21459_SHARP_,p2__21460_SHARP_);
});})(map__21467,map__21467__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,cljs.core.cst$kw$normalize);
var prune_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$prune_DASH_tree,om.next.default_extract_errors);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$pathopt,false);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,cljs.core.cst$kw$instrument);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,cljs.core.cst$kw$id_DASH_key);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__21467,map__21467__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__21457_SHARP_,p2__21458_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__21457_SHARP_,p2__21458_SHARP_], 0));
});})(map__21467,map__21467__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$merge_DASH_ident,om.next.default_merge_ident);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$migrate,om.next.default_migrate);
var easy_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$easy_DASH_reads,true);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$history,(100));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,cljs.core.cst$kw$state);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$merge,om.next.default_merge);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,cljs.core.cst$kw$shared_DASH_fn);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$ui_DASH__GT_props,om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,cljs.core.cst$kw$parser);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$indexer,om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__21467,map__21467__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__21461_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__21461_SHARP_);
});})(map__21467,map__21467__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$merge_DASH_tree,om.next.default_merge_tree);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21467__$1,cljs.core.cst$kw$optimize,((function (map__21467,map__21467__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__21467,map__21467__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = (indexer.cljs$core$IFn$_invoke$arity$0 ? indexer.cljs$core$IFn$_invoke$arity$0() : indexer.call(null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$)))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.atom.call(null,state)));
var logger = ((cljs.core.contains_QMARK_(config,cljs.core.cst$kw$logger))?cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$instrument,cljs.core.cst$kw$merge_DASH_ident,cljs.core.cst$kw$merge_DASH_sends,cljs.core.cst$kw$remotes,cljs.core.cst$kw$migrate,cljs.core.cst$kw$easy_DASH_reads,cljs.core.cst$kw$history,cljs.core.cst$kw$state,cljs.core.cst$kw$merge,cljs.core.cst$kw$shared_DASH_fn,cljs.core.cst$kw$parser,cljs.core.cst$kw$ui_DASH__GT_props,cljs.core.cst$kw$logger,cljs.core.cst$kw$indexer,cljs.core.cst$kw$root_DASH_unmount,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$optimize,cljs.core.cst$kw$root_DASH_render,cljs.core.cst$kw$normalize,cljs.core.cst$kw$prune_DASH_tree],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache(history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__7523__auto__ = !(norm_QMARK_);
if(or__7523__auto__){
return or__7523__auto__;
} else {
return normalize;
}
})(),prune_tree]),(function (){var G__21470 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21470) : cljs.core.atom.call(null,G__21470));
})(),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21472 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21472) : cljs.core.deref.call(null,G__21472));
})(),cljs.core.cst$kw$root);
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21474 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21474) : cljs.core.deref.call(null,G__21474));
})(),cljs.core.cst$kw$render).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args21475 = [];
var len__8739__auto___21478 = arguments.length;
var i__8740__auto___21479 = (0);
while(true){
if((i__8740__auto___21479 < len__8739__auto___21478)){
args21475.push((arguments[i__8740__auto___21479]));

var G__21480 = (i__8740__auto___21479 + (1));
i__8740__auto___21479 = G__21480;
continue;
} else {
}
break;
}

var G__21477 = args21475.length;
switch (G__21477) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21475.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_(x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args21482 = [];
var len__8739__auto___21485 = arguments.length;
var i__8740__auto___21486 = (0);
while(true){
if((i__8740__auto___21486 < len__8739__auto___21485)){
args21482.push((arguments[i__8740__auto___21486]));

var G__21487 = (i__8740__auto___21486 + (1));
i__8740__auto___21486 = G__21487;
continue;
} else {
}
break;
}

var G__21484 = args21482.length;
switch (G__21484) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21482.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args21489 = [];
var len__8739__auto___21492 = arguments.length;
var i__8740__auto___21493 = (0);
while(true){
if((i__8740__auto___21493 < len__8739__auto___21492)){
args21489.push((arguments[i__8740__auto___21493]));

var G__21494 = (i__8740__auto___21493 + (1));
i__8740__auto___21493 = G__21494;
continue;
} else {
}
break;
}

var G__21491 = args21489.length;
switch (G__21491) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21489.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args21496 = [];
var len__8739__auto___21499 = arguments.length;
var i__8740__auto___21500 = (0);
while(true){
if((i__8740__auto___21500 < len__8739__auto___21499)){
args21496.push((arguments[i__8740__auto___21500]));

var G__21501 = (i__8740__auto___21500 + (1));
i__8740__auto___21500 = G__21501;
continue;
} else {
}
break;
}

var G__21498 = args21496.length;
switch (G__21498) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21496.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.cst$kw$remote);
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta(cljs.core._conj((function (){var x__8452__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.cst$sym$quote),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;

