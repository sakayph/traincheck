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
var vec__20455 = split_on_static(dt__$1);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20455,(0),null);
var vec__20458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20455,(1),null);
var seq__20459 = cljs.core.seq(vec__20458);
var first__20460 = cljs.core.first(seq__20459);
var seq__20459__$1 = cljs.core.next(seq__20459);
var _ = first__20460;
var first__20460__$1 = cljs.core.first(seq__20459__$1);
var seq__20459__$2 = cljs.core.next(seq__20459__$1);
var sym = first__20460__$1;
var remaining = seq__20459__$2;
var post = vec__20458;
var dt_SINGLEQUOTE___$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(dt_SINGLEQUOTE_,pre);
if(cljs.core.seq(post)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,cljs.core.cst$sym$field)){
var vec__20461 = cljs.core.split_at((2),remaining);
var field_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461,(1),null);
var G__20467 = cljs.core.seq(dt__$2);
var G__20468 = dt_SINGLEQUOTE___$1;
var G__20469 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields], null),cljs.core.conj,cljs.core.vec(field_info));
dt__$1 = G__20467;
dt_SINGLEQUOTE_ = G__20468;
statics = G__20469;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__20464 = split_on_symbol(remaining);
var protocol_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20464,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20464,(1),null);
var G__20470 = cljs.core.seq(dt__$2);
var G__20471 = dt_SINGLEQUOTE___$1;
var G__20472 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocols], null),cljs.core.into,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__20470;
dt_SINGLEQUOTE_ = G__20471;
statics = G__20472;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__20473 = null;
var G__20474 = dt_SINGLEQUOTE___$1;
var G__20475 = statics;
dt__$1 = G__20473;
dt_SINGLEQUOTE_ = G__20474;
statics = G__20475;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dt,dt_SINGLEQUOTE_,cljs.core.cst$kw$statics,statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__6753__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20476_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(p1__20476_SHARP_)].join(''),/\//));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__6753__auto__)){
var invalid = temp__6753__auto__;
throw (new Error([cljs.core.str(invalid),cljs.core.str(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$initLocalState,cljs.core.cst$sym$componentWillMount,cljs.core.cst$sym$componentDidUpdate,cljs.core.cst$sym$componentWillUnmount,cljs.core.cst$sym$componentWillReceiveProps,cljs.core.cst$sym$shouldComponentUpdate,cljs.core.cst$sym$render,cljs.core.cst$sym$componentWillUpdate,cljs.core.cst$sym$componentDidMount],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$prev_DASH_props,cljs.core.cst$sym$prev_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__20477){
var vec__20481 = p__20477;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20481,(0),null);
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20481,(1),null);
var method = vec__20481;
var sig_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sig_SINGLEQUOTE_),cljs.core.count(sig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid signature for "),cljs.core.str(name),cljs.core.str(" got "),cljs.core.str(sig),cljs.core.str(", need "),cljs.core.str(sig_SINGLEQUOTE_)].join('')),cljs.core.str("\n"),cljs.core.str("(= (count sig') (count sig))")].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reshape,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$sym$initLocalState,(function (p__20527){
var vec__20528 = p__20527;
var seq__20529 = cljs.core.seq(vec__20528);
var first__20530 = cljs.core.first(seq__20529);
var seq__20529__$1 = cljs.core.next(seq__20529);
var name = first__20530;
var first__20530__$1 = cljs.core.first(seq__20529__$1);
var seq__20529__$2 = cljs.core.next(seq__20529__$1);
var vec__20531 = first__20530__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20531,(0),null);
var args = vec__20531;
var body = seq__20529__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__20491__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj),cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__20491__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillReceiveProps,(function (p__20534){
var vec__20535 = p__20534;
var seq__20536 = cljs.core.seq(vec__20535);
var first__20537 = cljs.core.first(seq__20536);
var seq__20536__$1 = cljs.core.next(seq__20536);
var name = first__20537;
var first__20537__$1 = cljs.core.first(seq__20536__$1);
var seq__20536__$2 = cljs.core.next(seq__20536__$1);
var vec__20538 = first__20537__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20538,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20538,(1),null);
var args = vec__20538;
var body = seq__20536__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20492__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20493__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20492__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20493__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20492__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUpdate,(function (p__20541){
var vec__20542 = p__20541;
var seq__20543 = cljs.core.seq(vec__20542);
var first__20544 = cljs.core.first(seq__20543);
var seq__20543__$1 = cljs.core.next(seq__20543);
var name = first__20544;
var first__20544__$1 = cljs.core.first(seq__20543__$1);
var seq__20543__$2 = cljs.core.next(seq__20543__$1);
var vec__20545 = first__20544__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20545,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20545,(1),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20545,(2),null);
var args = vec__20545;
var body = seq__20543__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20495__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__20496__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20495__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = next_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__20496__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$pendingState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__20496__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__20497__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_Ident),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__20498__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__20499__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__20498__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__20499__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__20500__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__20500__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__20500__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__20501__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__20501__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__20498__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__20499__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__)], 0))));
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
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20494__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__20497__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentDidUpdate,(function (p__20548){
var vec__20549 = p__20548;
var seq__20550 = cljs.core.seq(vec__20549);
var first__20551 = cljs.core.first(seq__20550);
var seq__20550__$1 = cljs.core.next(seq__20550);
var name = first__20551;
var first__20551__$1 = cljs.core.first(seq__20550__$1);
var seq__20550__$2 = cljs.core.next(seq__20550__$1);
var vec__20552 = first__20551__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552,(1),null);
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552,(2),null);
var args = vec__20552;
var body = seq__20550__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20502__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__20503__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__20504__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20502__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = prev_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prev_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__20503__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20502__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = prev_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__20504__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$previousState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([body,(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20502__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillMount,(function (p__20555){
var vec__20556 = p__20555;
var seq__20557 = cljs.core.seq(vec__20556);
var first__20558 = cljs.core.first(seq__20557);
var seq__20557__$1 = cljs.core.next(seq__20557);
var name = first__20558;
var first__20558__$1 = cljs.core.first(seq__20557__$1);
var seq__20557__$2 = cljs.core.next(seq__20557__$1);
var vec__20559 = first__20558__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20559,(0),null);
var args = vec__20559;
var body = seq__20557__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20505__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20505__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20506__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20505__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20506__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20506__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20505__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUnmount,(function (p__20562){
var vec__20563 = p__20562;
var seq__20564 = cljs.core.seq(vec__20563);
var first__20565 = cljs.core.first(seq__20564);
var seq__20564__$1 = cljs.core.next(seq__20564);
var name = first__20565;
var first__20565__$1 = cljs.core.first(seq__20564__$1);
var seq__20564__$2 = cljs.core.next(seq__20564__$1);
var vec__20566 = first__20565__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20566,(0),null);
var args = vec__20566;
var body = seq__20564__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20507__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20507__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__20508__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20507__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__20509__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__20508__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__20510__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__20509__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20511__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__20509__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__20510__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__20510__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20507__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__20510__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20507__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20511__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20511__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20507__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
}),cljs.core.cst$sym$render,(function (p__20569){
var vec__20570 = p__20569;
var seq__20571 = cljs.core.seq(vec__20570);
var first__20572 = cljs.core.first(seq__20571);
var seq__20571__$1 = cljs.core.next(seq__20571);
var name = first__20572;
var first__20572__$1 = cljs.core.first(seq__20571__$1);
var seq__20571__$2 = cljs.core.next(seq__20571__$1);
var vec__20573 = first__20572__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20573,(0),null);
var args = vec__20573;
var body = seq__20571__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20512__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20512__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_reconciler_STAR_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20512__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_depth_STAR_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_inc),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_depth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20512__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_shared_STAR_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_shared),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20512__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_instrument_STAR_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_instrument),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20512__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_parent_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20512__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
})], null),cljs.core.cst$kw$defaults,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$isMounted),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_boolean),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_getValueByKeys),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj(cljs.core.List.EMPTY,"_renderedComponent")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$shouldComponentUpdate),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__20515__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__20516__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$value")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond_DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_OmProps),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_unwrap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__20515__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__20516__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUpdate),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__20515__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_Ident),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__20517__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__20518__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__20514__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__20517__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__20518__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__20519__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__20519__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__20519__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__20520__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__20520__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__20517__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__20518__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)], 0))));
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
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentDidUpdate),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__20521__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__20522__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillMount),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20523__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20523__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20523__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUnmount),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__20524__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__20525__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__20524__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__20526__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__20525__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20523__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__20525__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__20526__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__20526__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__20526__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20523__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__20523__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20513__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0)))))], null);
om.next.reshape = (function om$next$reshape(dt,p__20576){
var map__20617 = p__20576;
var map__20617__$1 = ((((!((map__20617 == null)))?((((map__20617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20617):map__20617);
var reshape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,cljs.core.cst$kw$reshape);
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,cljs.core.cst$kw$defaults);
var reshape_STAR_ = ((function (map__20617,map__20617__$1,reshape,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_(x)) && (cljs.core.contains_QMARK_(reshape,cljs.core.first(x)))){
var reshapef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reshape,cljs.core.first(x));
om.next.validate_sig(x);

return (reshapef.cljs$core$IFn$_invoke$arity$1 ? reshapef.cljs$core$IFn$_invoke$arity$1(x) : reshapef.call(null,x));
} else {
return x;
}
});})(map__20617,map__20617__$1,reshape,defaults))
;
var add_defaults_step = ((function (map__20617,map__20617__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__20638){
var vec__20648 = p__20638;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20648,(0),null);
var impl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20648,(1),null);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([name], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,ret))))){
var vec__20651 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null)),ret);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20651,(0),null);
var vec__20654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20651,(1),null);
var seq__20655 = cljs.core.seq(vec__20654);
var first__20656 = cljs.core.first(seq__20655);
var seq__20655__$1 = cljs.core.next(seq__20655);
var p = first__20656;
var after = seq__20655__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(before),p,cljs.core.array_seq([cljs.core.cons(name,impl)], 0)),after);
} else {
return ret;
}
});})(map__20617,map__20617__$1,reshape,defaults))
;
var add_defaults = ((function (map__20617,map__20617__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_defaults_step,dt__$1,defaults);
});})(map__20617,map__20617__$1,reshape,defaults))
;
var add_object_protocol = ((function (map__20617,map__20617__$1,reshape,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null),dt__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dt__$1,cljs.core.cst$sym$Object);
} else {
return dt__$1;
}
});})(map__20617,map__20617__$1,reshape,defaults))
;
return add_defaults(add_object_protocol(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args20672 = [];
var len__8739__auto___20694 = arguments.length;
var i__8740__auto___20695 = (0);
while(true){
if((i__8740__auto___20695 < len__8739__auto___20694)){
args20672.push((arguments[i__8740__auto___20695]));

var G__20696 = (i__8740__auto___20695 + (1));
i__8740__auto___20695 = G__20696;
continue;
} else {
}
break;
}

var G__20674 = args20672.length;
switch (G__20674) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20672.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__20682){
var vec__20686 = p__20682;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20686,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20686,(1),null);
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
var forms__$1 = (function (){var G__20690 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest(G__20690);
} else {
return G__20690;
}
})();
var map__20689 = om.next.collect_statics(forms__$1);
var map__20689__$1 = ((((!((map__20689 == null)))?((((map__20689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20689):map__20689);
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20689__$1,cljs.core.cst$kw$dt);
var statics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20689__$1,cljs.core.cst$kw$statics);
var _ = om.next.validate_statics(dt);
var rname = (cljs.core.truth_(env)?cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),name)):name);
var ctor = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__8452__auto__ = cljs.core.with_meta(name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$jsdoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta(name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null):null)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20666__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20666__auto__),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20666__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20666__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20666__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20666__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20666__auto__)], 0))));
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
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__20689,map__20689__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__20667_SHARP_){
return field_set_BANG_(name,p1__20667_SHARP_);
});})(docstring,forms__$1,map__20689,map__20689__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__8452__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__20689,map__20689__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__20668_SHARP_){
var G__20693 = p1__20668_SHARP_;
if((p1__20668_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__20693,cljs.core.assoc,cljs.core.cst$kw$static,true);
} else {
return G__20693;
}
});})(docstring,forms__$1,map__20689,map__20689__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
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
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20669__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20670__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__20671__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20670__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = [cljs.core.str(rname)].join('');
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
var len__8739__auto___20702 = arguments.length;
var i__8740__auto___20703 = (0);
while(true){
if((i__8740__auto___20703 < len__8739__auto___20702)){
args__8746__auto__.push((arguments[i__8740__auto___20703]));

var G__20704 = (i__8740__auto___20703 + (1));
i__8740__auto___20703 = G__20704;
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

om.next.defui.cljs$lang$applyTo = (function (seq20698){
var G__20699 = cljs.core.first(seq20698);
var seq20698__$1 = cljs.core.next(seq20698);
var G__20700 = cljs.core.first(seq20698__$1);
var seq20698__$2 = cljs.core.next(seq20698__$1);
var G__20701 = cljs.core.first(seq20698__$2);
var seq20698__$3 = cljs.core.next(seq20698__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__20699,G__20700,G__20701,seq20698__$3);
});


om.next.defui.cljs$lang$macro = true;
om.next.ui = (function om$next$ui(var_args){
var args__8746__auto__ = [];
var len__8739__auto___20708 = arguments.length;
var i__8740__auto___20709 = (0);
while(true){
if((i__8740__auto___20709 < len__8739__auto___20708)){
args__8746__auto__.push((arguments[i__8740__auto___20709]));

var G__20710 = (i__8740__auto___20709 + (1));
i__8740__auto___20709 = G__20710;
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

om.next.ui.cljs$lang$applyTo = (function (seq20705){
var G__20706 = cljs.core.first(seq20705);
var seq20705__$1 = cljs.core.next(seq20705);
var G__20707 = cljs.core.first(seq20705__$1);
var seq20705__$2 = cljs.core.next(seq20705__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__20706,G__20707,seq20705__$2);
});


om.next.ui.cljs$lang$macro = true;
om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();
var fn_scope = cljs.core.cst$kw$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__20713 = fn_scope;
var G__20713__$1 = (((G__20713 == null))?null:cljs.core.first(G__20713));
var G__20713__$2 = (((G__20713__$1 == null))?null:cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__20713__$1));
if((G__20713__$2 == null)){
return null;
} else {
return [cljs.core.str(G__20713__$2)].join('');
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$elide_DASH_asserts.cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8452__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__20711__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_logger_STAR_)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = condition;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$log_SLASH_error),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__20711__auto__),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invariant Violation"),cljs.core.array_seq([(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__8452__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__8452__auto__ = fn_name;
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
om.next.roots = (function (){var G__20714 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20714) : cljs.core.atom.call(null,G__20714));
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
var G__20716 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(expr))){
return cljs.core.first(G__20716);
} else {
return G__20716;
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
return clojure.zip.zipper((function (p1__20717_SHARP_){
return (cljs.core.vector_QMARK_(p1__20717_SHARP_)) || (cljs.core.map_QMARK_(p1__20717_SHARP_)) || (cljs.core.seq_QMARK_(p1__20717_SHARP_));
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
var G__20718 = clojure.zip.right(loc__$1);
loc__$1 = G__20718;
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
var G__20751 = clojure.zip.down(loc);
var G__20752 = path__$1;
loc = G__20751;
path__$1 = G__20752;
continue;
} else {
var vec__20747 = path__$1;
var seq__20748 = cljs.core.seq(vec__20747);
var first__20749 = cljs.core.first(seq__20748);
var seq__20748__$1 = cljs.core.next(seq__20748);
var k = first__20749;
var ks = seq__20748__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_(node)) || ((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key((function (){var G__20750 = loc;
if(cljs.core.seq_QMARK_(node)){
return clojure.zip.down(G__20750);
} else {
return G__20750;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__20753 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(om.next.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__20754 = cljs.core.next(ks);
loc = G__20753;
path__$1 = G__20754;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__20755 = loc_SINGLEQUOTE_;
var G__20756 = ks;
loc = G__20755;
path__$1 = G__20756;
continue;
}
} else {
var G__20757 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__20758 = ks;
loc = G__20757;
path__$1 = G__20758;
continue;
}
} else {
var G__20759 = clojure.zip.right(loc);
var G__20760 = path__$1;
loc = G__20759;
path__$1 = G__20760;
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
})():((cljs.core.seq_QMARK_(expr))?(function (){var x__8452__auto__ = (function (){var G__20774 = cljs.core.first(expr);
var G__20775 = ks;
var G__20776 = null;
var G__20777 = null;
return (om.next.focused_join.cljs$core$IFn$_invoke$arity$4 ? om.next.focused_join.cljs$core$IFn$_invoke$arity$4(G__20774,G__20775,G__20776,G__20777) : om.next.focused_join.call(null,G__20774,G__20775,G__20776,G__20777));
})();
return cljs.core._conj((function (){var x__8452__auto____$1 = cljs.core.second(expr);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto____$1);
})(),x__8452__auto__);
})():expr
));
var G__20778 = expr_SINGLEQUOTE_;
if(cljs.core.some_QMARK_(expr_meta)){
return cljs.core.with_meta(G__20778,expr_meta);
} else {
return G__20778;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__20785 = path;
var seq__20786 = cljs.core.seq(vec__20785);
var first__20787 = cljs.core.first(seq__20786);
var seq__20786__$1 = cljs.core.next(seq__20786);
var k = first__20787;
var ks = seq__20786__$1;
var match = ((function (vec__20785,seq__20786,first__20787,seq__20786__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.util.join_key(x));
});})(vec__20785,seq__20786,first__20787,seq__20786__$1,k,ks))
;
var value = ((function (vec__20785,seq__20786,first__20787,seq__20786__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join(x,ks,query,union_expr);
});})(vec__20785,seq__20786,first__20787,seq__20786__$1,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.fromArray([k,(function (){var G__20788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k);
var G__20789 = ks;
var G__20790 = query;
return (om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(G__20788,G__20789,G__20790) : om.next.focus_query_STAR_.call(null,G__20788,G__20789,G__20790));
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
var args20791 = [];
var len__8739__auto___20797 = arguments.length;
var i__8740__auto___20798 = (0);
while(true){
if((i__8740__auto___20798 < len__8739__auto___20797)){
args20791.push((arguments[i__8740__auto___20798]));

var G__20799 = (i__8740__auto___20798 + (1));
i__8740__auto___20798 = G__20799;
continue;
} else {
}
break;
}

var G__20793 = args20791.length;
switch (G__20793) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20791.length)].join('')));

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
var vec__20794 = om.util.join_entry(cljs.core.first(focus));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20794,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20794,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_(focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__20801 = focus_SINGLEQUOTE___$1;
var G__20802 = bound;
var G__20803 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
focus = G__20801;
bound = G__20802;
path = G__20803;
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
var G__20810 = [cljs.core.str(x)].join('');
var G__20811 = "?";
return goog.string.startsWith(G__20810,G__20811);
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
return (function (p1__20812_SHARP_){
return (om.next.bind_query.cljs$core$IFn$_invoke$arity$2 ? om.next.bind_query.cljs$core$IFn$_invoke$arity$2(p1__20812_SHARP_,params) : om.next.bind_query.call(null,p1__20812_SHARP_,params));
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_(query))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_(query))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(query),tr,query):om.next.replace_var(query,params)
));
var G__20815 = ret;
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
return cljs.core.with_meta(G__20815,qm);
} else {
return G__20815;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__20818 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__20818__$1 = (((G__20818 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__20818));
var G__20818__$2 = (((G__20818__$1 == null))?null:cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__20818__$1));
var G__20818__$3 = (((G__20818__$2 == null))?null:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20818__$2) : cljs.core.deref.call(null,G__20818__$2)));
var G__20818__$4 = (((G__20818__$3 == null))?null:cljs.core.cst$kw$om$next_SLASH_queries.cljs$core$IFn$_invoke$arity$1(G__20818__$3));
if((G__20818__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__20818__$4,component);
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
var args20819 = [];
var len__8739__auto___20822 = arguments.length;
var i__8740__auto___20823 = (0);
while(true){
if((i__8740__auto___20823 < len__8739__auto___20822)){
args20819.push((arguments[i__8740__auto___20823]));

var G__20824 = (i__8740__auto___20823 + (1));
i__8740__auto___20823 = G__20824;
continue;
} else {
}
break;
}

var G__20821 = args20819.length;
switch (G__20821) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20819.length)].join('')));

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
return (function (p1__20828_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__20828_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_(qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_(qs__$1))){
var q = cljs.core.first(qs__$1);
var node = clojure.zip.node(q);
if(!(om.util.recursion_QMARK_(node))){
return node;
} else {
var G__20829 = component;
var G__20830 = class_path_query_data;
var G__20831 = cljs.core.pop(data_path);
component = G__20829;
class_path_query_data = G__20830;
data_path = G__20831;
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
var class_path_query_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class_DASH_path_DASH__GT_query.cljs$core$IFn$_invoke$arity$1((function (){var G__20835 = (om.next.get_indexer.cljs$core$IFn$_invoke$arity$1 ? om.next.get_indexer.cljs$core$IFn$_invoke$arity$1(r) : om.next.get_indexer.call(null,r));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20835) : cljs.core.deref.call(null,G__20835));
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
var args20836 = [];
var len__8739__auto___20852 = arguments.length;
var i__8740__auto___20853 = (0);
while(true){
if((i__8740__auto___20853 < len__8739__auto___20852)){
args20836.push((arguments[i__8740__auto___20853]));

var G__20854 = (i__8740__auto___20853 + (1));
i__8740__auto___20853 = G__20854;
continue;
} else {
}
break;
}

var G__20838 = args20836.length;
switch (G__20838) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20836.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__20839){
var map__20840 = p__20839;
var map__20840__$1 = ((((!((map__20840 == null)))?((((map__20840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20840):map__20840);
var opts = map__20840__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20840__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20840__$1,cljs.core.cst$kw$keyfn);
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20840__$1,cljs.core.cst$kw$instrument_QMARK_,true);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__20840,map__20840__$1,opts,validator,keyfn,instrument_QMARK_){
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
var G__20847 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$children,children,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$factory,om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$instrument_QMARK_,false))], null);
return (om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__20847) : om.next._STAR_instrument_STAR_.call(null,G__20847));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__20848 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__20848)].join('');
} else {
return G__20848;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__20849 = class$;
var G__20850 = ({"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_});
var G__20851 = om.util.force_children(children);
return React.createElement(G__20849,G__20850,G__20851);
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__20856__i = 0, G__20856__a = new Array(arguments.length -  1);
while (G__20856__i < G__20856__a.length) {G__20856__a[G__20856__i] = arguments[G__20856__i + 1]; ++G__20856__i;}
  children = new cljs.core.IndexedSeq(G__20856__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__20857){
var props = cljs.core.first(arglist__20857);
var children = cljs.core.rest(arglist__20857);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__20840,map__20840__$1,opts,validator,keyfn,instrument_QMARK_))
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
var G__20860 = c.props;
var G__20861 = k;
return goog.object.get(G__20860,G__20861);
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
var G__20865 = c.props;
var G__20866 = k;
var G__20867 = v;
return goog.object.set(G__20865,G__20866,G__20867);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args20868 = [];
var len__8739__auto___20871 = arguments.length;
var i__8740__auto___20872 = (0);
while(true){
if((i__8740__auto___20872 < len__8739__auto___20871)){
args20868.push((arguments[i__8740__auto___20872]));

var G__20873 = (i__8740__auto___20872 + (1));
i__8740__auto___20872 = G__20873;
continue;
} else {
}
break;
}

var G__20870 = args20868.length;
switch (G__20870) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20868.length)].join('')));

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
var args20875 = [];
var len__8739__auto___20878 = arguments.length;
var i__8740__auto___20879 = (0);
while(true){
if((i__8740__auto___20879 < len__8739__auto___20878)){
args20875.push((arguments[i__8740__auto___20879]));

var G__20880 = (i__8740__auto___20879 + (1));
i__8740__auto___20879 = G__20880;
continue;
} else {
}
break;
}

var G__20877 = args20875.length;
switch (G__20877) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20875.length)].join('')));

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
var G__20884 = c.state;
var G__20885 = "omcljs$prev$value";
return goog.object.remove(G__20884,G__20885);
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
var args20886 = [];
var len__8739__auto___20893 = arguments.length;
var i__8740__auto___20894 = (0);
while(true){
if((i__8740__auto___20894 < len__8739__auto___20893)){
args20886.push((arguments[i__8740__auto___20894]));

var G__20895 = (i__8740__auto___20894 + (1));
i__8740__auto___20894 = G__20895;
continue;
} else {
}
break;
}

var G__20888 = args20886.length;
switch (G__20888) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20886.length)].join('')));

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

var shared = (function (){var G__20889 = component.props;
var G__20890 = "omcljs$shared";
return goog.object.get(G__20889,G__20890);
})();
var ks = (function (){var G__20891 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__20891],null));
} else {
return G__20891;
}
})();
var G__20892 = shared;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__20892,ks);
} else {
return G__20892;
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

var G__20901 = c.state;
var G__20902_20905 = G__20901;
var G__20903_20906 = "omcljs$next$value";
var G__20904_20907 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__20902_20905,G__20903_20906,G__20904_20907);

return G__20901;
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
var G__20910 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__20910,cljs.core.assoc,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__20910;
}
} else {
var G__20911 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20911,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__20911;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args20912 = [];
var len__8739__auto___20917 = arguments.length;
var i__8740__auto___20918 = (0);
while(true){
if((i__8740__auto___20918 < len__8739__auto___20917)){
args20912.push((arguments[i__8740__auto___20918]));

var G__20919 = (i__8740__auto___20918 + (1));
i__8740__auto___20918 = G__20919;
continue;
} else {
}
break;
}

var G__20914 = args20912.length;
switch (G__20914) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20912.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__20915 = x;
if(om.next.component_QMARK_(x)){
return om.next.props(G__20915);
} else {
return G__20915;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_computed], null),(function (){var G__20916 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__20916],null));
} else {
return G__20916;
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
var G__20926_20929 = component.state;
var G__20927_20930 = "omcljs$pendingState";
var G__20928_20931 = new_state;
goog.object.set(G__20926_20929,G__20927_20930,G__20928_20931);
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
var args20932 = [];
var len__8739__auto___20936 = arguments.length;
var i__8740__auto___20937 = (0);
while(true){
if((i__8740__auto___20937 < len__8739__auto___20936)){
args20932.push((arguments[i__8740__auto___20937]));

var G__20938 = (i__8740__auto___20937 + (1));
i__8740__auto___20937 = G__20938;
continue;
} else {
}
break;
}

var G__20934 = args20932.length;
switch (G__20934) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20932.length)].join('')));

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
var args20940 = [];
var len__8739__auto___20965 = arguments.length;
var i__8740__auto___20966 = (0);
while(true){
if((i__8740__auto___20966 < len__8739__auto___20965)){
args20940.push((arguments[i__8740__auto___20966]));

var G__20967 = (i__8740__auto___20966 + (1));
i__8740__auto___20966 = G__20967;
continue;
} else {
}
break;
}

var G__20949 = args20940.length;
switch (G__20949) {
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
var argseq__8762__auto__ = (new cljs.core.IndexedSeq(args20940.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8762__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__20950 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20950) : f.call(null,G__20950));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__20951 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20952 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20951,G__20952) : f.call(null,G__20951,G__20952));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__20953 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20954 = arg0;
var G__20955 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20953,G__20954,G__20955) : f.call(null,G__20953,G__20954,G__20955));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__20956 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20957 = arg0;
var G__20958 = arg1;
var G__20959 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__20956,G__20957,G__20958,G__20959) : f.call(null,G__20956,G__20957,G__20958,G__20959));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__20960 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20961 = arg0;
var G__20962 = arg1;
var G__20963 = arg2;
var G__20964 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__20960,G__20961,G__20962,G__20963,G__20964) : f.call(null,G__20960,G__20961,G__20962,G__20963,G__20964));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq20941){
var G__20942 = cljs.core.first(seq20941);
var seq20941__$1 = cljs.core.next(seq20941);
var G__20943 = cljs.core.first(seq20941__$1);
var seq20941__$2 = cljs.core.next(seq20941__$1);
var G__20944 = cljs.core.first(seq20941__$2);
var seq20941__$3 = cljs.core.next(seq20941__$2);
var G__20945 = cljs.core.first(seq20941__$3);
var seq20941__$4 = cljs.core.next(seq20941__$3);
var G__20946 = cljs.core.first(seq20941__$4);
var seq20941__$5 = cljs.core.next(seq20941__$4);
var G__20947 = cljs.core.first(seq20941__$5);
var seq20941__$6 = cljs.core.next(seq20941__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,seq20941__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args20969 = [];
var len__8739__auto___20974 = arguments.length;
var i__8740__auto___20975 = (0);
while(true){
if((i__8740__auto___20975 < len__8739__auto___20974)){
args20969.push((arguments[i__8740__auto___20975]));

var G__20976 = (i__8740__auto___20975 + (1));
i__8740__auto___20975 = G__20976;
continue;
} else {
}
break;
}

var G__20971 = args20969.length;
switch (G__20971) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20969.length)].join('')));

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

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_rendered_state(component):(function (){var G__20973 = component;
var G__20973__$1 = (((G__20973 == null))?null:G__20973.state);
if((G__20973__$1 == null)){
return null;
} else {
return goog.object.get(G__20973__$1,"omcljs$state");
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$ILocalState$)))?true:false):false)){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__6753__auto__ = (function (){var G__20981 = c;
var G__20981__$1 = (((G__20981 == null))?null:G__20981.state);
if((G__20981__$1 == null)){
return null;
} else {
return goog.object.get(G__20981__$1,"omcljs$pendingState");
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
var args20982 = [];
var len__8739__auto___20985 = arguments.length;
var i__8740__auto___20986 = (0);
while(true){
if((i__8740__auto___20986 < len__8739__auto___20985)){
args20982.push((arguments[i__8740__auto___20986]));

var G__20987 = (i__8740__auto___20986 + (1));
i__8740__auto___20986 = G__20987;
continue;
} else {
}
break;
}

var G__20984 = args20982.length;
switch (G__20984) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20982.length)].join('')));

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






om.next.gather_sends = (function om$next$gather_sends(p__20990,q,remotes){
var map__20997 = p__20990;
var map__20997__$1 = ((((!((map__20997 == null)))?((((map__20997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20997):map__20997);
var env = map__20997__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20997__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__20997,map__20997__$1,env,parser){
return (function (p1__20989_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20989_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__20989_SHARP_) : parser.call(null,env,q,p1__20989_SHARP_))],null));
});})(map__20997,map__20997__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__20997,map__20997__$1,env,parser){
return (function (p__20999){
var vec__21000 = p__20999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000,(1),null);
return (cljs.core.count(v) > (0));
});})(map__20997,map__20997__$1,env,parser))
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21032 = cljs.core.first(q);
var G__21033 = target;
return (om.next.force.cljs$core$IFn$_invoke$arity$2 ? om.next.force.cljs$core$IFn$_invoke$arity$2(G__21032,G__21033) : om.next.force.call(null,G__21032,G__21033));
})()], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = (function (){var G__21036 = c;
var G__21037 = with_target(target,om.next.focus_query(om.next.get_query(c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
return (om.next.full_query.cljs$core$IFn$_invoke$arity$2 ? om.next.full_query.cljs$core$IFn$_invoke$arity$2(G__21036,G__21037) : om.next.full_query.call(null,G__21036,G__21037));
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
var G__21039 = cljs.core.next(exprs);
var G__21040 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__21003_SHARP_,p2__21004_SHARP_){
return add_focused_query(key,tgt,p1__21003_SHARP_,p2__21004_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__21038 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_(cs)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21038,expr);
} else {
return G__21038;
}
})(),cs);
exprs = G__21039;
tx_SINGLEQUOTE_ = G__21040;
continue;
} else {
var G__21041 = cljs.core.next(exprs);
var G__21042 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_SINGLEQUOTE_,expr);
exprs = G__21041;
tx_SINGLEQUOTE_ = G__21042;
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
var args21043 = [];
var len__8739__auto___21053 = arguments.length;
var i__8740__auto___21054 = (0);
while(true){
if((i__8740__auto___21054 < len__8739__auto___21053)){
args21043.push((arguments[i__8740__auto___21054]));

var G__21055 = (i__8740__auto___21054 + (1));
i__8740__auto___21054 = G__21055;
continue;
} else {
}
break;
}

var G__21045 = args21043.length;
switch (G__21045) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21043.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3(x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__21046,reads){
var map__21047 = p__21046;
var map__21047__$1 = ((((!((map__21047 == null)))?((((map__21047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21047):map__21047);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047__$1,cljs.core.cst$kw$query);
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
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__21049 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21049) : cljs.core.deref.call(null,G__21049));
})());
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));

var temp__6753__auto___21057 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto___21057)){
var l_21058 = temp__6753__auto___21057;
var G__21050_21059 = l_21058;
var G__21051_21060 = [cljs.core.str((function (){var temp__6753__auto____$1 = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
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
goog.log.info(G__21050_21059,G__21051_21060);
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

var rootq_21061 = ((!((c == null)))?(om.next.full_query.cljs$core$IFn$_invoke$arity$1 ? om.next.full_query.cljs$core$IFn$_invoke$arity$1(c) : om.next.full_query.call(null,c)):(((reads == null))?om.next.get_query(root):null));
var sends_21062 = om.next.gather_sends((om.next.to_env.cljs$core$IFn$_invoke$arity$1 ? om.next.to_env.cljs$core$IFn$_invoke$arity$1(cfg) : om.next.to_env.call(null,cfg)),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__7523__auto__ = rootq_21061;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads(r,reads)),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_(sends_21062)){
} else {
om.next.protocols.queue_sends_BANG_(r,sends_21062);

(om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_sends_BANG_.call(null,r));
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args21063 = [];
var len__8739__auto___21083 = arguments.length;
var i__8740__auto___21084 = (0);
while(true){
if((i__8740__auto___21084 < len__8739__auto___21083)){
args21063.push((arguments[i__8740__auto___21084]));

var G__21085 = (i__8740__auto___21084 + (1));
i__8740__auto___21084 = G__21085;
continue;
} else {
}
break;
}

var G__21072 = args21063.length;
switch (G__21072) {
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
var argseq__8762__auto__ = (new cljs.core.IndexedSeq(args21063.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8762__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__21073 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21073) : f.call(null,G__21073));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__21074 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__21075 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21074,G__21075) : f.call(null,G__21074,G__21075));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__21076 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__21077 = arg0;
var G__21078 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21076,G__21077,G__21078) : f.call(null,G__21076,G__21077,G__21078));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__21079 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__21080 = arg0;
var G__21081 = arg1;
var G__21082 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__21079,G__21080,G__21081,G__21082) : f.call(null,G__21079,G__21080,G__21081,G__21082));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq21064){
var G__21065 = cljs.core.first(seq21064);
var seq21064__$1 = cljs.core.next(seq21064);
var G__21066 = cljs.core.first(seq21064__$1);
var seq21064__$2 = cljs.core.next(seq21064__$1);
var G__21067 = cljs.core.first(seq21064__$2);
var seq21064__$3 = cljs.core.next(seq21064__$2);
var G__21068 = cljs.core.first(seq21064__$3);
var seq21064__$4 = cljs.core.next(seq21064__$3);
var G__21069 = cljs.core.first(seq21064__$4);
var seq21064__$5 = cljs.core.next(seq21064__$4);
var G__21070 = cljs.core.first(seq21064__$5);
var seq21064__$6 = cljs.core.next(seq21064__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21065,G__21066,G__21067,G__21068,G__21069,G__21070,seq21064__$6);
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
var G__21088 = component.refs;
if((G__21088 == null)){
return null;
} else {
return goog.object.get(G__21088,name);
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
var args21089 = [];
var len__8739__auto___21092 = arguments.length;
var i__8740__auto___21093 = (0);
while(true){
if((i__8740__auto___21093 < len__8739__auto___21092)){
args21089.push((arguments[i__8740__auto___21093]));

var G__21094 = (i__8740__auto___21093 + (1));
i__8740__auto___21093 = G__21094;
continue;
} else {
}
break;
}

var G__21091 = args21089.length;
switch (G__21091) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21089.length)].join('')));

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
var G__21096 = p;
var G__21097 = cljs.core.cons(om.next.react_type(p),ret);
c__$1 = G__21096;
ret = G__21097;
continue;
} else {
var G__21098 = p;
var G__21099 = ret;
c__$1 = G__21098;
ret = G__21099;
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
var G__21100 = cljs.core.next(cp);
var G__21101 = ret;
var G__21102 = seen;
cp = G__21100;
ret = G__21101;
seen = G__21102;
continue;
} else {
var G__21103 = cljs.core.next(cp);
var G__21104 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c__$1);
var G__21105 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c__$1);
cp = G__21103;
ret = G__21104;
seen = G__21105;
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

var ref = (function (){var G__21107 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__21107)].join('');
} else {
return G__21107;
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
var G__21110 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__21111 = (0);
return setTimeout(G__21110,G__21111);
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
var args21112 = [];
var len__8739__auto___21115 = arguments.length;
var i__8740__auto___21116 = (0);
while(true){
if((i__8740__auto___21116 < len__8739__auto___21115)){
args21112.push((arguments[i__8740__auto___21116]));

var G__21117 = (i__8740__auto___21116 + (1));
i__8740__auto___21116 = G__21117;
continue;
} else {
}
break;
}

var G__21114 = args21112.length;
switch (G__21114) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21112.length)].join('')));

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

var temp__6753__auto___21119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.next.roots) : cljs.core.deref.call(null,om.next.roots)),target);
if(cljs.core.truth_(temp__6753__auto___21119)){
var old_reconciler_21120 = temp__6753__auto___21119;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_21120,target) : om.next.remove_root_BANG_.call(null,old_reconciler_21120,target));
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
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(function (){var G__21129 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21129) : cljs.core.deref.call(null,G__21129));
})());
var ___$1 = (function (){var temp__6753__auto__ = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto__)){
var l = temp__6753__auto__;
var G__21130 = l;
var G__21131 = [cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref__$1], 0))),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
return goog.log.info(G__21130,G__21131);
} else {
return null;
}
})();
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__21132 = cljs.core.PersistentVector.EMPTY;
var G__21132__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21132,c):G__21132);
if(!((ref__$1 == null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21132__$1,ref__$1);
} else {
return G__21132__$1;
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
var G__21141 = expr;
if(om.util.mutation_QMARK_(expr)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__21141,cljs.core.assoc,cljs.core.cst$kw$mutator,ident__$1);
} else {
return G__21141;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__21133_SHARP_){
return annotate(p1__21133_SHARP_,ident);
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
var G__21142 = om.next.parent(c__$1);
c__$1 = G__21142;
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
var args21143 = [];
var len__8739__auto___21155 = arguments.length;
var i__8740__auto___21156 = (0);
while(true){
if((i__8740__auto___21156 < len__8739__auto___21155)){
args21143.push((arguments[i__8740__auto___21156]));

var G__21157 = (i__8740__auto___21156 + (1));
i__8740__auto___21156 = G__21157;
continue;
} else {
}
break;
}

var G__21145 = args21143.length;
switch (G__21145) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21143.length)].join('')));

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

var tx__$1 = (function (){var G__21146 = tx;
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
return om.next.annotate_mutations(G__21146,om.next.get_ident(x));
} else {
return G__21146;
}
})();
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_(x))){
var l__19628__auto___21159 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_(x))){
} else {
var G__21149_21160 = l__19628__auto___21159;
var G__21150_21161 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("transact! should be called on a component"),cljs.core.str("that implements IQuery or has a parent that"),cljs.core.str("implements IQuery")].join(''))].join('');
goog.log.error(G__21149_21160,G__21150_21161);
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
var vec__21151 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.om$next$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21151,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21151,(1),null);
var G__21162 = om.next.parent(p);
var G__21163 = x_SINGLEQUOTE_;
var G__21164 = tx__$3;
p = G__21162;
x__$1 = G__21163;
tx__$2 = G__21164;
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
om.next.parser = (function om$next$parser(p__21165){
var map__21168 = p__21165;
var map__21168__$1 = ((((!((map__21168 == null)))?((((map__21168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21168):map__21168);
var opts = map__21168__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168__$1,cljs.core.cst$kw$mutate);
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
var G__21171 = prop;
if((!(om.util.ident_QMARK_(prop))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(prop),cljs.core.cst$sym$_))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast).call(null,G__21171);
} else {
return G__21171;
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
var filter_data_path = (function (){var G__21174 = rendered_data_path;
if(!(cljs.core.empty_QMARK_(rendered_data_path))){
return cljs.core.pop(G__21174);
} else {
return G__21174;
}
})();
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__21172_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__21172_SHARP_),filter_data_path));
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
var G__21175 = cljs.core.pop(cp);
var G__21176 = cljs.core.pop(data_path__$1);
var G__21177 = clojure.zip.node(cljs.core.first(qs_SINGLEQUOTE_));
var G__21178 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cp,qs_SINGLEQUOTE_);
cp = G__21175;
data_path__$1 = G__21176;
new_query__$1 = G__21177;
ret = G__21178;
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
var prop__GT_classes = (function (){var G__21186 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21186) : cljs.core.atom.call(null,G__21186));
})();
var class_path__GT_query = (function (){var G__21187 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21187) : cljs.core.atom.call(null,G__21187));
})();
var rootq = om.next.get_query(x);
var root_class = (function (){var G__21188 = x;
if(om.next.component_QMARK_(x)){
return om.next.react_type(G__21188);
} else {
return G__21188;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__19628__auto___21369 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_(class$))) || ((om.next.iquery_QMARK_(class$)) && (!(cljs.core.empty_QMARK_(query))))){
} else {
var G__21324_21370 = l__19628__auto___21369;
var G__21325_21371 = [cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_(class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__21324_21370,G__21325_21371);
}

var recursive_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([class$], true),classpath);
var classpath__$1 = (function (){var G__21326 = classpath;
if((!((class$ == null))) && (cljs.core.not(recursive_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21326,class$);
} else {
return G__21326;
}
})();
var dp__GT_cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components], null));
if(cljs.core.truth_(class$)){
var root_query_21372 = ((cljs.core.empty_QMARK_(path))?rootq:clojure.zip.root(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([om.next.query_template(om.next.focus_query(root_query_21372,path),path)], 0));
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
var map__21327 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__21327__$1 = ((((!((map__21327 == null)))?((((map__21327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21327):map__21327);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21327__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21327__$1,true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__21327,map__21327__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21179_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__21179_SHARP_,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.next.get_dispatch_key,props),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([class$], true)))], 0));
});})(map__21327,map__21327__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__21329 = cljs.core.seq(joins);
var chunk__21330 = null;
var count__21331 = (0);
var i__21332 = (0);
while(true){
if((i__21332 < count__21331)){
var join = chunk__21330.cljs$core$IIndexed$_nth$arity$2(null,i__21332);
var vec__21333_21373 = om.util.join_entry(join);
var prop_21374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21333_21373,(0),null);
var query_SINGLEQUOTE__21375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21333_21373,(1),null);
var prop_dispatch_key_21376 = om.next.get_dispatch_key(prop_21374);
var recursion_QMARK__21377 = om.util.recursion_QMARK_(query_SINGLEQUOTE__21375);
var union_recursion_QMARK__21378 = (function (){var and__7511__auto__ = recursion_QMARK__21377;
if(and__7511__auto__){
return union_expr;
} else {
return and__7511__auto__;
}
})();
var query_SINGLEQUOTE__21379__$1 = ((recursion_QMARK__21377)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__21375);
var path_SINGLEQUOTE__21380 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_21374);
var rendered_path_SINGLEQUOTE__21381 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__21380));
var cs_21382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__21381);
var cascade_query_QMARK__21383 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_21382),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__21379__$1)),om.next.react_type(cljs.core.first(cs_21382)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__21379__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__21384 = ((cascade_query_QMARK__21383)?om.next.get_query(cljs.core.first(cs_21382)):query_SINGLEQUOTE__21379__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__21329,chunk__21330,count__21331,i__21332,vec__21333_21373,prop_21374,query_SINGLEQUOTE__21375,prop_dispatch_key_21376,recursion_QMARK__21377,union_recursion_QMARK__21378,query_SINGLEQUOTE__21379__$1,path_SINGLEQUOTE__21380,rendered_path_SINGLEQUOTE__21381,cs_21382,cascade_query_QMARK__21383,query_SINGLEQUOTE__SINGLEQUOTE__21384,join,map__21327,map__21327__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21180_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__21180_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_21376,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false)], 0));
});})(seq__21329,chunk__21330,count__21331,i__21332,vec__21333_21373,prop_21374,query_SINGLEQUOTE__21375,prop_dispatch_key_21376,recursion_QMARK__21377,union_recursion_QMARK__21378,query_SINGLEQUOTE__21379__$1,path_SINGLEQUOTE__21380,rendered_path_SINGLEQUOTE__21381,cs_21382,cascade_query_QMARK__21383,query_SINGLEQUOTE__SINGLEQUOTE__21384,join,map__21327,map__21327__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__21383) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__21379__$1,query_SINGLEQUOTE__SINGLEQUOTE__21384))){
var cp__GT_q_SINGLEQUOTE__21385 = om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1,path_SINGLEQUOTE__21380,query_SINGLEQUOTE__SINGLEQUOTE__21384,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__21385);
} else {
}

var class_SINGLEQUOTE__21386 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__21384));
if((recursion_QMARK__21377) && ((class_SINGLEQUOTE__21386 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__21386,query_SINGLEQUOTE__SINGLEQUOTE__21384,path_SINGLEQUOTE__21380,classpath__$1,((recursion_QMARK__21377)?union_expr:null),union_keys);
}

var G__21387 = seq__21329;
var G__21388 = chunk__21330;
var G__21389 = count__21331;
var G__21390 = (i__21332 + (1));
seq__21329 = G__21387;
chunk__21330 = G__21388;
count__21331 = G__21389;
i__21332 = G__21390;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__21329);
if(temp__6753__auto__){
var seq__21329__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21329__$1)){
var c__8429__auto__ = cljs.core.chunk_first(seq__21329__$1);
var G__21391 = cljs.core.chunk_rest(seq__21329__$1);
var G__21392 = c__8429__auto__;
var G__21393 = cljs.core.count(c__8429__auto__);
var G__21394 = (0);
seq__21329 = G__21391;
chunk__21330 = G__21392;
count__21331 = G__21393;
i__21332 = G__21394;
continue;
} else {
var join = cljs.core.first(seq__21329__$1);
var vec__21336_21395 = om.util.join_entry(join);
var prop_21396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21336_21395,(0),null);
var query_SINGLEQUOTE__21397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21336_21395,(1),null);
var prop_dispatch_key_21398 = om.next.get_dispatch_key(prop_21396);
var recursion_QMARK__21399 = om.util.recursion_QMARK_(query_SINGLEQUOTE__21397);
var union_recursion_QMARK__21400 = (function (){var and__7511__auto__ = recursion_QMARK__21399;
if(and__7511__auto__){
return union_expr;
} else {
return and__7511__auto__;
}
})();
var query_SINGLEQUOTE__21401__$1 = ((recursion_QMARK__21399)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__21397);
var path_SINGLEQUOTE__21402 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_21396);
var rendered_path_SINGLEQUOTE__21403 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__21402));
var cs_21404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__21403);
var cascade_query_QMARK__21405 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_21404),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__21401__$1)),om.next.react_type(cljs.core.first(cs_21404)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__21401__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__21406 = ((cascade_query_QMARK__21405)?om.next.get_query(cljs.core.first(cs_21404)):query_SINGLEQUOTE__21401__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__21329,chunk__21330,count__21331,i__21332,vec__21336_21395,prop_21396,query_SINGLEQUOTE__21397,prop_dispatch_key_21398,recursion_QMARK__21399,union_recursion_QMARK__21400,query_SINGLEQUOTE__21401__$1,path_SINGLEQUOTE__21402,rendered_path_SINGLEQUOTE__21403,cs_21404,cascade_query_QMARK__21405,query_SINGLEQUOTE__SINGLEQUOTE__21406,join,seq__21329__$1,temp__6753__auto__,map__21327,map__21327__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21180_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__21180_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_21398,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false)], 0));
});})(seq__21329,chunk__21330,count__21331,i__21332,vec__21336_21395,prop_21396,query_SINGLEQUOTE__21397,prop_dispatch_key_21398,recursion_QMARK__21399,union_recursion_QMARK__21400,query_SINGLEQUOTE__21401__$1,path_SINGLEQUOTE__21402,rendered_path_SINGLEQUOTE__21403,cs_21404,cascade_query_QMARK__21405,query_SINGLEQUOTE__SINGLEQUOTE__21406,join,seq__21329__$1,temp__6753__auto__,map__21327,map__21327__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__21405) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__21401__$1,query_SINGLEQUOTE__SINGLEQUOTE__21406))){
var cp__GT_q_SINGLEQUOTE__21407 = om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1,path_SINGLEQUOTE__21402,query_SINGLEQUOTE__SINGLEQUOTE__21406,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__21407);
} else {
}

var class_SINGLEQUOTE__21408 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__21406));
if((recursion_QMARK__21399) && ((class_SINGLEQUOTE__21408 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__21408,query_SINGLEQUOTE__SINGLEQUOTE__21406,path_SINGLEQUOTE__21402,classpath__$1,((recursion_QMARK__21399)?union_expr:null),union_keys);
}

var G__21409 = cljs.core.next(seq__21329__$1);
var G__21410 = null;
var G__21411 = (0);
var G__21412 = (0);
seq__21329 = G__21409;
chunk__21330 = G__21410;
count__21331 = G__21411;
i__21332 = G__21412;
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
var seq__21339 = cljs.core.seq(query);
var chunk__21340 = null;
var count__21341 = (0);
var i__21342 = (0);
while(true){
if((i__21342 < count__21341)){
var vec__21343 = chunk__21340.cljs$core$IIndexed$_nth$arity$2(null,i__21342);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21343,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21343,(1),null);
var path_SINGLEQUOTE__21413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__21414 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_21415 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__21339,chunk__21340,count__21341,i__21342,path_SINGLEQUOTE__21413,class_SINGLEQUOTE__21414,vec__21343,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21181_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__21414,om.next.react_type(p1__21181_SHARP_));
});})(seq__21339,chunk__21340,count__21341,i__21342,path_SINGLEQUOTE__21413,class_SINGLEQUOTE__21414,vec__21343,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__21416 = (function (){var and__7511__auto__ = class_SINGLEQUOTE__21414;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_21415),(1));
} else {
return and__7511__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__21417 = (cljs.core.truth_(cascade_query_QMARK__21416)?om.next.get_query(cljs.core.first(cs_21415)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__7511__auto__ = cascade_query_QMARK__21416;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__21417);
} else {
return and__7511__auto__;
}
})())){
var qs_21418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1);
var q_21419 = cljs.core.first(qs_21418);
var qnode_21420 = clojure.zip.node((function (){var G__21346 = q_21419;
if((class$ == null)){
return om.next.query_template(G__21346,path);
} else {
return G__21346;
}
})());
var new_query_21421 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_21420,prop,query_SINGLEQUOTE__SINGLEQUOTE__21417);
var q_SINGLEQUOTE__21422 = (function (){var G__21347 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_21419),path),new_query_21421);
if((class$ == null)){
return om.next.query_template(om.next.focus_query(clojure.zip.root(G__21347),cljs.core.pop(path)),cljs.core.pop(path));
} else {
return G__21347;
}
})();
var qs_SINGLEQUOTE__21423 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__21422], true),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([q_21419], true)),qs_21418);
var cp__GT_q_SINGLEQUOTE__21424 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__21423], true, false),om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__21422),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__21424);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__21414,query_SINGLEQUOTE__SINGLEQUOTE__21417,path_SINGLEQUOTE__21413,classpath__$1,query,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__21425 = seq__21339;
var G__21426 = chunk__21340;
var G__21427 = count__21341;
var G__21428 = (i__21342 + (1));
seq__21339 = G__21425;
chunk__21340 = G__21426;
count__21341 = G__21427;
i__21342 = G__21428;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__21339);
if(temp__6753__auto__){
var seq__21339__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21339__$1)){
var c__8429__auto__ = cljs.core.chunk_first(seq__21339__$1);
var G__21429 = cljs.core.chunk_rest(seq__21339__$1);
var G__21430 = c__8429__auto__;
var G__21431 = cljs.core.count(c__8429__auto__);
var G__21432 = (0);
seq__21339 = G__21429;
chunk__21340 = G__21430;
count__21341 = G__21431;
i__21342 = G__21432;
continue;
} else {
var vec__21348 = cljs.core.first(seq__21339__$1);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21348,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21348,(1),null);
var path_SINGLEQUOTE__21433 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__21434 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_21435 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__21339,chunk__21340,count__21341,i__21342,path_SINGLEQUOTE__21433,class_SINGLEQUOTE__21434,vec__21348,prop,query_SINGLEQUOTE_,seq__21339__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21181_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__21434,om.next.react_type(p1__21181_SHARP_));
});})(seq__21339,chunk__21340,count__21341,i__21342,path_SINGLEQUOTE__21433,class_SINGLEQUOTE__21434,vec__21348,prop,query_SINGLEQUOTE_,seq__21339__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__21436 = (function (){var and__7511__auto__ = class_SINGLEQUOTE__21434;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_21435),(1));
} else {
return and__7511__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__21437 = (cljs.core.truth_(cascade_query_QMARK__21436)?om.next.get_query(cljs.core.first(cs_21435)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__7511__auto__ = cascade_query_QMARK__21436;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__21437);
} else {
return and__7511__auto__;
}
})())){
var qs_21438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1);
var q_21439 = cljs.core.first(qs_21438);
var qnode_21440 = clojure.zip.node((function (){var G__21351 = q_21439;
if((class$ == null)){
return om.next.query_template(G__21351,path);
} else {
return G__21351;
}
})());
var new_query_21441 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_21440,prop,query_SINGLEQUOTE__SINGLEQUOTE__21437);
var q_SINGLEQUOTE__21442 = (function (){var G__21352 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_21439),path),new_query_21441);
if((class$ == null)){
return om.next.query_template(om.next.focus_query(clojure.zip.root(G__21352),cljs.core.pop(path)),cljs.core.pop(path));
} else {
return G__21352;
}
})();
var qs_SINGLEQUOTE__21443 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__21442], true),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([q_21439], true)),qs_21438);
var cp__GT_q_SINGLEQUOTE__21444 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__21443], true, false),om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__21442),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__21444);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__21434,query_SINGLEQUOTE__SINGLEQUOTE__21437,path_SINGLEQUOTE__21433,classpath__$1,query,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__21445 = cljs.core.next(seq__21339__$1);
var G__21446 = null;
var G__21447 = (0);
var G__21448 = (0);
seq__21339 = G__21445;
chunk__21340 = G__21446;
count__21341 = G__21447;
i__21342 = G__21448;
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
var l__19628__auto___21449 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_(ident)){
} else {
var G__21354_21450 = l__19628__auto___21449;
var G__21355_21451 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__21354_21450,G__21355_21451);
}

var l__19628__auto___21452 = om.next._STAR_logger_STAR_;
if(cljs.core.some_QMARK_(cljs.core.second(ident))){
} else {
var G__21356_21453 = l__19628__auto___21452;
var G__21357_21454 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("component "),cljs.core.str(c.constructor.displayName),cljs.core.str("'s ident ("),cljs.core.str(ident),cljs.core.str(") has a `nil` second element."),cljs.core.str(" This warning can be safely ignored if that is intended.")].join(''))].join('');
goog.log.error(G__21356_21453,G__21357_21454);
}

return ident;
})():null);
if(!((ident == null))){
var G__21358 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__21358,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__21358;
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
var G__21360 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__21360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.disj,c);
} else {
return G__21360;
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
return (function (p1__21182_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__21182_SHARP_], null));
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


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8195__auto__,k21184,else__8196__auto__){
var self__ = this;
var this__8195__auto____$1 = this;
var G__21361 = (((k21184 instanceof cljs.core.Keyword))?k21184.fqn:null);
switch (G__21361) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21184,else__8196__auto__);

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


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21183){
var self__ = this;
var G__21183__$1 = this;
return (new cljs.core.RecordIter((0),G__21183__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes,cljs.core.cst$kw$extfs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8200__auto__,k__8201__auto__,G__21183){
var self__ = this;
var this__8200__auto____$1 = this;
var pred__21362 = cljs.core.keyword_identical_QMARK_;
var expr__21363 = k__8201__auto__;
if(cljs.core.truth_((function (){var G__21365 = cljs.core.cst$kw$indexes;
var G__21366 = expr__21363;
return (pred__21362.cljs$core$IFn$_invoke$arity$2 ? pred__21362.cljs$core$IFn$_invoke$arity$2(G__21365,G__21366) : pred__21362.call(null,G__21365,G__21366));
})())){
return (new om.next.Indexer(G__21183,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21367 = cljs.core.cst$kw$extfs;
var G__21368 = expr__21363;
return (pred__21362.cljs$core$IFn$_invoke$arity$2 ? pred__21362.cljs$core$IFn$_invoke$arity$2(G__21367,G__21368) : pred__21362.call(null,G__21367,G__21368));
})())){
return (new om.next.Indexer(self__.indexes,G__21183,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8201__auto__,G__21183),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8205__auto__){
var self__ = this;
var this__8205__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8192__auto__,G__21183){
var self__ = this;
var this__8192__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__21183,self__.__extmap,self__.__hash));
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

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__21185){
return (new om.next.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__21185),cljs.core.cst$kw$extfs.cljs$core$IFn$_invoke$arity$1(G__21185),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21185,cljs.core.cst$kw$indexes,cljs.core.array_seq([cljs.core.cst$kw$extfs], 0)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args21456 = [];
var len__8739__auto___21460 = arguments.length;
var i__8740__auto___21461 = (0);
while(true){
if((i__8740__auto___21461 < len__8739__auto___21460)){
args21456.push((arguments[i__8740__auto___21461]));

var G__21462 = (i__8740__auto___21461 + (1));
i__8740__auto___21461 = G__21462;
continue;
} else {
}
break;
}

var G__21458 = args21456.length;
switch (G__21458) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21456.length)].join('')));

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
return (new om.next.Indexer((function (){var G__21459 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$data_DASH_path_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21459) : cljs.core.atom.call(null,G__21459));
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
var args21465 = [];
var len__8739__auto___21471 = arguments.length;
var i__8740__auto___21472 = (0);
while(true){
if((i__8740__auto___21472 < len__8739__auto___21471)){
args21465.push((arguments[i__8740__auto___21472]));

var G__21473 = (i__8740__auto___21472 + (1));
i__8740__auto___21472 = G__21473;
continue;
} else {
}
break;
}

var G__21467 = args21465.length;
switch (G__21467) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21465.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_(component)){
if((om.next.path(component) == null)){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21468 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21468) : cljs.core.deref.call(null,G__21468));
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
var xf = (function (){var G__21469 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_(component)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),G__21469);
} else {
return G__21469;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf,om.next.path(component));
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21470 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21470) : cljs.core.deref.call(null,G__21470));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__21464_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(om.next.get_dispatch_key,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__21464_SHARP_),path_SINGLEQUOTE_)));
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
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__21499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__21500 = data;
var G__21501 = refs;
var G__21502 = union_seen;
return (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(G__21499,G__21500,G__21501,G__21502) : om.next.normalize_STAR_.call(null,G__21499,G__21500,G__21501,G__21502));
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
var vec__21503 = om.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21503,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21503,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_(sel);
var union_entry = ((om.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_(v))){
var G__21518 = cljs.core.next(q);
var G__21519 = ret;
q = G__21518;
ret = G__21519;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,v,refs,union_entry) : om.next.normalize_STAR_.call(null,sel__$1,v,refs,union_entry));
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.array_seq([x], 0));

var G__21520 = cljs.core.next(q);
var G__21521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__21520;
ret = G__21521;
continue;
} else {
var G__21522 = cljs.core.next(q);
var G__21523 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__21522;
ret = G__21523;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__21475_SHARP_){
return (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,p1__21475_SHARP_,refs,union_entry) : om.next.normalize_STAR_.call(null,sel__$1,p1__21475_SHARP_,refs,union_entry));
});})(q,ret,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__21477_SHARP_){
return om.next.ident(class$,p1__21477_SHARP_);
});})(q,ret,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__21510){
var vec__21511 = p__21510;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21511,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21511,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__21514){
var vec__21515 = p__21514;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21515,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21515,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__21503,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__21524 = cljs.core.next(q);
var G__21525 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__21524;
ret = G__21525;
continue;
} else {
var G__21526 = cljs.core.next(q);
var G__21527 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__21526;
ret = G__21527;
continue;
}
} else {
if((v == null)){
var G__21528 = cljs.core.next(q);
var G__21529 = ret;
q = G__21528;
ret = G__21529;
continue;
} else {
var G__21530 = cljs.core.next(q);
var G__21531 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__21530;
ret = G__21531;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__21532 = cljs.core.next(q);
var G__21533 = ret;
q = G__21532;
ret = G__21533;
continue;
} else {
var G__21534 = cljs.core.next(q);
var G__21535 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__21534;
ret = G__21535;
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
var args21536 = [];
var len__8739__auto___21540 = arguments.length;
var i__8740__auto___21541 = (0);
while(true){
if((i__8740__auto___21541 < len__8739__auto___21540)){
args21536.push((arguments[i__8740__auto___21541]));

var G__21542 = (i__8740__auto___21541 + (1));
i__8740__auto___21541 = G__21542;
continue;
} else {
}
break;
}

var G__21538 = args21536.length;
switch (G__21538) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21536.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = (function (){var G__21539 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21539) : cljs.core.atom.call(null,G__21539));
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
var map__21547 = cljs.core.group_by((function (p1__21544_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__21544_SHARP_));
}),res);
var map__21547__$1 = ((((!((map__21547 == null)))?((((map__21547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21547):map__21547);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21547__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21547__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_(om.next.focus_query(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node(pos);
var node_SINGLEQUOTE_ = (function (){var G__21550 = node;
if(typeof node === 'number'){
return (G__21550 - (1));
} else {
return G__21550;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21555){
var vec__21556 = p__21555;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21556,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21556,(1),null);
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
var G__21620 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(data__$1) : map_ident.call(null,data__$1)));
data__$1 = G__21620;
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
var map__21591 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__21591__$1 = ((((!((map__21591 == null)))?((((map__21591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21591):map__21591);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21591__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21591__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__21591,map__21591__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21559_SHARP_){
var G__21593 = p1__21559_SHARP_;
if(cljs.core.seq_QMARK_(p1__21559_SHARP_)){
return cljs.core.first(G__21593);
} else {
return G__21593;
}
});})(map__21591,map__21591__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var vec__21594 = om.util.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21594,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21594,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident,key);
var G__21621 = cljs.core.next(joins__$1);
var G__21622 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,(om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel,v,refs,map_ident,idents_seen,union_expr,recurse_key) : om.next.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key)));
joins__$1 = G__21621;
ret = G__21622;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(ident,props__$1),ret], 0));
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query__$1 = (function (){var G__21597 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__21597,recurse_key);
} else {
return G__21597;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__21598 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__21598,recurse_key);
} else {
return G__21598;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__21599 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__21599,cljs.core.first(ident));
} else {
return G__21599;
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
var G__21600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(recur_ident));
var G__21601 = data__$1;
var G__21602 = refs;
var G__21603 = map_ident;
var G__21604 = idents_seen;
var G__21605 = union_expr;
var G__21606 = recurse_key;
return (om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(G__21600,G__21601,G__21602,G__21603,G__21604,G__21605,G__21606) : om.next.denormalize_STAR_.call(null,G__21600,G__21601,G__21602,G__21603,G__21604,G__21605,G__21606));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data__$1;
} else {
var map__21607 = cljs.core.group_by(((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21560_SHARP_){
var or__7523__auto__ = om.util.join_QMARK_(p1__21560_SHARP_);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return (om.util.ident_QMARK_(p1__21560_SHARP_)) || ((cljs.core.seq_QMARK_(p1__21560_SHARP_)) && (om.util.ident_QMARK_(cljs.core.first(p1__21560_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__21607__$1 = ((((!((map__21607 == null)))?((((map__21607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21607):map__21607);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21607__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21607__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__21607,map__21607__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21561_SHARP_){
var G__21609 = p1__21561_SHARP_;
if(cljs.core.seq_QMARK_(p1__21561_SHARP_)){
return cljs.core.first(G__21609);
} else {
return G__21609;
}
});})(map__21607,map__21607__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__21613 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__21613);
} else {
return G__21613;
}
})();
var join__$2 = (function (){var G__21614 = join__$1;
if(om.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__21614],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__21614;
}
})();
var vec__21610 = om.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__21615 = key;
if(om.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__21615);
} else {
return G__21615;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1)));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,next))){
var G__21623 = next;
v__$1 = G__21623;
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
var G__21624 = cljs.core.next(joins__$1);
var G__21625 = ret;
joins__$1 = G__21624;
ret = G__21625;
continue;
} else {
if(graph_loop_QMARK_){
var G__21626 = cljs.core.next(joins__$1);
var G__21627 = ret;
joins__$1 = G__21626;
ret = G__21627;
continue;
} else {
if((v__$1 == null)){
var G__21628 = cljs.core.next(joins__$1);
var G__21629 = ret;
joins__$1 = G__21628;
ret = G__21629;
continue;
} else {
var G__21630 = cljs.core.next(joins__$1);
var G__21631 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,(om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1) : om.next.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1)));
joins__$1 = G__21630;
ret = G__21631;
continue;

}
}
}
} else {
var temp__6751__auto__ = cljs.core.some(((function (joins__$1,ret,map__21607,map__21607__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__21616){
var vec__21617 = p__21616;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21617,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21617,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,k], null));
} else {
return null;
}
});})(joins__$1,ret,map__21607,map__21607__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
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
var args21632 = [];
var len__8739__auto___21635 = arguments.length;
var i__8740__auto___21636 = (0);
while(true){
if((i__8740__auto___21636 < len__8739__auto___21635)){
args21632.push((arguments[i__8740__auto___21636]));

var G__21637 = (i__8740__auto___21636 + (1));
i__8740__auto___21636 = G__21637;
continue;
} else {
}
break;
}

var G__21634 = args21632.length;
switch (G__21634) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21632.length)].join('')));

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
var step = (function om$next$rewrite_$_step(res,p__21662){
var vec__21666 = p__21662;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21666,(0),null);
var orig_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21666,(1),null);
var to_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_move,vec__21666,k,orig_paths){
return (function (p1__21639_SHARP_,p2__21640_SHARP_){
return cljs.core.assoc_in(p1__21639_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__21640_SHARP_,k),to_move);
});})(to_move,vec__21666,k,orig_paths))
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__21669_SHARP_){
var G__21673 = p1__21669_SHARP_;
var G__21674 = result_roots;
var G__21675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,om.util.join_key(join));
return (om.next.move_roots.cljs$core$IFn$_invoke$arity$3 ? om.next.move_roots.cljs$core$IFn$_invoke$arity$3(G__21673,G__21674,G__21675) : om.next.move_roots.call(null,G__21673,G__21674,G__21675));
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
var nq = ((om.util.recursion_QMARK_(q))?q:((om.util.recursion_QMARK_(jv))?jv:(function (){var G__21687 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(q,jv));
return (om.next.merge_joins.cljs$core$IFn$_invoke$arity$1 ? om.next.merge_joins.cljs$core$IFn$_invoke$arity$1(G__21687) : om.next.merge_joins.call(null,G__21687));
})()
));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_by_DASH_join], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_mergeable], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements_DASH_seen], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_by_DASH_join,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$elements_DASH_seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$not_DASH_mergeable,cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,init,query);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$not_DASH_mergeable.cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (init,res){
return (function (p__21688){
var vec__21689 = p__21688;
var jkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21689,(0),null);
var jsel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21689,(1),null);
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
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__21713){
var vec__21717 = p__21713;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(1),null);
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
var map__21737 = config;
var map__21737__$1 = ((((!((map__21737 == null)))?((((map__21737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21737):map__21737);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21737__$1,cljs.core.cst$kw$merge_DASH_ident);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21737__$1,cljs.core.cst$kw$indexer);
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21737,map__21737__$1,merge_ident,indexer){
return (function (p1__21720_SHARP_){
var and__7511__auto__ = om.util.join_QMARK_(p1__21720_SHARP_);
if(cljs.core.truth_(and__7511__auto__)){
return om.util.ident_QMARK_(om.util.join_key(p1__21720_SHARP_));
} else {
return and__7511__auto__;
}
});})(map__21737,map__21737__$1,merge_ident,indexer))
,query));
var step = ((function (map__21737,map__21737__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__21746){
var vec__21750 = p__21746;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21750,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21750,(1),null);
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
});})(map__21737,map__21737__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__21757 = om.next.sift_idents(res);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21757,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21757,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__7523__auto__ = query;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__21760 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21760) : cljs.core.deref.call(null,G__21760));
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
var args21761 = [];
var len__8739__auto___21777 = arguments.length;
var i__8740__auto___21778 = (0);
while(true){
if((i__8740__auto___21778 < len__8739__auto___21777)){
args21761.push((arguments[i__8740__auto___21778]));

var G__21779 = (i__8740__auto___21778 + (1));
i__8740__auto___21778 = G__21779;
continue;
} else {
}
break;
}

var G__21763 = args21761.length;
switch (G__21763) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21761.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(config);
var map__21764 = (function (){var G__21765 = reconciler;
var G__21766 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var G__21767 = delta;
var G__21768 = query;
return (merge_STAR_.cljs$core$IFn$_invoke$arity$4 ? merge_STAR_.cljs$core$IFn$_invoke$arity$4(G__21765,G__21766,G__21767,G__21768) : merge_STAR_.call(null,G__21765,G__21766,G__21767,G__21768));
})();
var map__21764__$1 = ((((!((map__21764 == null)))?((((map__21764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21764):map__21764);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,cljs.core.cst$kw$tempids);
om.next.protocols.queue_BANG_(reconciler,keys);

var G__21770 = state;
var G__21771 = (function (){var temp__6751__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__6751__auto__)){
var migrate = temp__6751__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null)),(function (){var G__21772 = next;
var G__21773 = (function (){var or__7523__auto__ = query;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return om.next.get_query(cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__21776 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21776) : cljs.core.deref.call(null,G__21776));
})()));
}
})();
var G__21774 = tempids;
var G__21775 = cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(config);
return (migrate.cljs$core$IFn$_invoke$arity$4 ? migrate.cljs$core$IFn$_invoke$arity$4(G__21772,G__21773,G__21774,G__21775) : migrate.call(null,G__21772,G__21773,G__21774,G__21775));
})()], 0));
} else {
return next;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21770,G__21771) : cljs.core.reset_BANG_.call(null,G__21770,G__21771));
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


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8195__auto__,k21786,else__8196__auto__){
var self__ = this;
var this__8195__auto____$1 = this;
var G__21788 = (((k21786 instanceof cljs.core.Keyword))?k21786.fqn:null);
switch (G__21788) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21786,else__8196__auto__);

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
return (function (p1__21782_SHARP_){
return om.next.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),p1__21782_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__21783_SHARP_,p2__21784_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__21783_SHARP_,p2__21784_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__21789 = self__.config;
var map__21789__$1 = ((((!((map__21789 == null)))?((((map__21789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21789):map__21789);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21789__$1,cljs.core.cst$kw$ui_DASH__GT_props);
var env = om.next.to_env(self__.config);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
var seq__21791 = cljs.core.seq(cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__21792 = null;
var count__21793 = (0);
var i__21794 = (0);
while(true){
if((i__21794 < count__21793)){
var c = chunk__21792.cljs$core$IIndexed$_nth$arity$2(null,i__21794);
var props_change_QMARK__21813 = (om.next.protocols.basis_t(this$__$1) > om.next.t(c));
if(om.next.mounted_QMARK_(c)){
var computed_21814 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_raw_props_21815 = (ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c));
var next_props_21816 = om.next.computed(next_raw_props_21815,computed_21814);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_(root)) && (props_change_QMARK__21813)){
var next_props_21817__$1 = (((next_props_21816 == null))?(function (){var temp__6753__auto__ = om.next.props(c);
if(cljs.core.truth_(temp__6753__auto__)){
var props = temp__6753__auto__;
return props;
} else {
return null;
}
})():next_props_21816);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props(next_props_21817__$1,om.next.protocols.basis_t(this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_21816,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_21816 == null))){
om.next.update_component_BANG_(c,next_props_21816);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_(root)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)) && (props_change_QMARK__21813)){
var temp__6753__auto___21818 = om.next.path(c);
if(cljs.core.truth_(temp__6753__auto___21818)){
var update_path_21819 = temp__6753__auto___21818;
var p_21820 = om.next.parent(c);
while(true){
if(cljs.core.some_QMARK_(p_21820)){
var update_path_SINGLEQUOTE__21821 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(update_path_21819,cljs.core.count(om.next.path(p_21820)));
om.next.update_props_BANG_(p_21820,cljs.core.assoc_in(om.next.props(p_21820),update_path_SINGLEQUOTE__21821,next_raw_props_21815));

om.next.merge_pending_props_BANG_(p_21820);

var G__21822 = om.next.parent(p_21820);
p_21820 = G__21822;
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

var G__21823 = seq__21791;
var G__21824 = chunk__21792;
var G__21825 = count__21793;
var G__21826 = (i__21794 + (1));
seq__21791 = G__21823;
chunk__21792 = G__21824;
count__21793 = G__21825;
i__21794 = G__21826;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__21791);
if(temp__6753__auto__){
var seq__21791__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21791__$1)){
var c__8429__auto__ = cljs.core.chunk_first(seq__21791__$1);
var G__21827 = cljs.core.chunk_rest(seq__21791__$1);
var G__21828 = c__8429__auto__;
var G__21829 = cljs.core.count(c__8429__auto__);
var G__21830 = (0);
seq__21791 = G__21827;
chunk__21792 = G__21828;
count__21793 = G__21829;
i__21794 = G__21830;
continue;
} else {
var c = cljs.core.first(seq__21791__$1);
var props_change_QMARK__21831 = (om.next.protocols.basis_t(this$__$1) > om.next.t(c));
if(om.next.mounted_QMARK_(c)){
var computed_21832 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_raw_props_21833 = (ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c));
var next_props_21834 = om.next.computed(next_raw_props_21833,computed_21832);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_(root)) && (props_change_QMARK__21831)){
var next_props_21835__$1 = (((next_props_21834 == null))?(function (){var temp__6753__auto____$1 = om.next.props(c);
if(cljs.core.truth_(temp__6753__auto____$1)){
var props = temp__6753__auto____$1;
return props;
} else {
return null;
}
})():next_props_21834);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props(next_props_21835__$1,om.next.protocols.basis_t(this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_21834,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_21834 == null))){
om.next.update_component_BANG_(c,next_props_21834);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_(root)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)) && (props_change_QMARK__21831)){
var temp__6753__auto___21836__$1 = om.next.path(c);
if(cljs.core.truth_(temp__6753__auto___21836__$1)){
var update_path_21837 = temp__6753__auto___21836__$1;
var p_21838 = om.next.parent(c);
while(true){
if(cljs.core.some_QMARK_(p_21838)){
var update_path_SINGLEQUOTE__21839 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(update_path_21837,cljs.core.count(om.next.path(p_21838)));
om.next.update_props_BANG_(p_21838,cljs.core.assoc_in(om.next.props(p_21838),update_path_SINGLEQUOTE__21839,next_raw_props_21833));

om.next.merge_pending_props_BANG_(p_21838);

var G__21840 = om.next.parent(p_21838);
p_21838 = G__21840;
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

var G__21841 = cljs.core.next(seq__21791__$1);
var G__21842 = null;
var G__21843 = (0);
var G__21844 = (0);
seq__21791 = G__21841;
chunk__21792 = G__21842;
count__21793 = G__21843;
i__21794 = G__21844;
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
var new_state_21845 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,(function (){var G__21795 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21795) : cljs.core.deref.call(null,G__21795));
})());
var refs_21846 = cljs.core.meta(new_state_21845);
var G__21796_21847 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
var G__21797_21848 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state_21845,refs_21846], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21796_21847,G__21797_21848) : cljs.core.reset_BANG_.call(null,G__21796_21847,G__21797_21848));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_21798 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_21799 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21800 = om.next._STAR_instrument_STAR_;
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
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21800;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21799;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21798;
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
return renderf((function (){var G__21801 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21801) : cljs.core.deref.call(null,G__21801));
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
return (function (p1__21781_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21781_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
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

var temp__6753__auto___21849 = om.next.get_query((function (){var or__7523__auto__ = (function (){var and__7511__auto__ = target;
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
if(cljs.core.truth_(temp__6753__auto___21849)){
var sel_21850 = temp__6753__auto___21849;
var env_21851 = om.next.to_env(self__.config);
var snds_21852 = om.next.gather_sends(env_21851,sel_21850,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(snds_21852)){
} else {
var temp__6753__auto___21853__$1 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__6753__auto___21853__$1)){
var send_21854 = temp__6753__auto___21853__$1;
var G__21802_21855 = snds_21852;
var G__21803_21856 = ((function (G__21802_21855,send_21854,temp__6753__auto___21853__$1,env_21851,snds_21852,sel_21850,temp__6753__auto___21849,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (res){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,null);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_21851,sel_21850));
});
var om$next$send_cb__2 = (function (res,query){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_21851,sel_21850));
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
;})(G__21802_21855,send_21854,temp__6753__auto___21853__$1,env_21851,snds_21852,sel_21850,temp__6753__auto___21849,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_21854.cljs$core$IFn$_invoke$arity$2 ? send_21854.cljs$core$IFn$_invoke$arity$2(G__21802_21855,G__21803_21856) : send_21854.call(null,G__21802_21855,G__21803_21856));
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


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21785){
var self__ = this;
var G__21785__$1 = this;
return (new cljs.core.RecordIter((0),G__21785__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8200__auto__,k__8201__auto__,G__21785){
var self__ = this;
var this__8200__auto____$1 = this;
var pred__21804 = cljs.core.keyword_identical_QMARK_;
var expr__21805 = k__8201__auto__;
if(cljs.core.truth_((function (){var G__21807 = cljs.core.cst$kw$config;
var G__21808 = expr__21805;
return (pred__21804.cljs$core$IFn$_invoke$arity$2 ? pred__21804.cljs$core$IFn$_invoke$arity$2(G__21807,G__21808) : pred__21804.call(null,G__21807,G__21808));
})())){
return (new om.next.Reconciler(G__21785,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21809 = cljs.core.cst$kw$state;
var G__21810 = expr__21805;
return (pred__21804.cljs$core$IFn$_invoke$arity$2 ? pred__21804.cljs$core$IFn$_invoke$arity$2(G__21809,G__21810) : pred__21804.call(null,G__21809,G__21810));
})())){
return (new om.next.Reconciler(self__.config,G__21785,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8201__auto__,G__21785),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8205__auto__){
var self__ = this;
var this__8205__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8192__auto__,G__21785){
var self__ = this;
var this__8192__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__21785,self__.__extmap,self__.__hash));
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
var G__21811 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21811) : cljs.core.deref.call(null,G__21811));
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

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__21787){
return (new om.next.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__21787),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__21787),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21787,cljs.core.cst$kw$config,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__21857,c){
var map__21867 = p__21857;
var map__21867__$1 = ((((!((map__21867 == null)))?((((map__21867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21867):map__21867);
var env = map__21867__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,cljs.core.cst$kw$parser);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,cljs.core.cst$kw$pathopt);
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21872 = env;
var G__21873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query(c)], true, false)], null);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__21872,G__21873) : parser.call(null,G__21872,G__21873));
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
var temp__6753__auto___21876 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__6753__auto___21876)){
var l_21877 = temp__6753__auto___21876;
var dt_21878 = (e - s);
if(((16) < dt_21878)){
var G__21874_21879 = l_21877;
var G__21875_21880 = [cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_21878),cljs.core.str(" msecs")].join('');
goog.log.warning(G__21874_21879,G__21875_21880);
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
var args21881 = [];
var len__8739__auto___21928 = arguments.length;
var i__8740__auto___21929 = (0);
while(true){
if((i__8740__auto___21929 < len__8739__auto___21928)){
args21881.push((arguments[i__8740__auto___21929]));

var G__21930 = (i__8740__auto___21929 + (1));
i__8740__auto___21929 = G__21930;
continue;
} else {
}
break;
}

var G__21883 = args21881.length;
switch (G__21883) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21881.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4(app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__21906){
var vec__21910 = p__21906;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure,table),id));
});
var step = (function om$next$step(pure,p__21913){
var vec__21921 = p__21913;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21921,(0),null);
var vec__21924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21921,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(1),null);
var new$ = vec__21924;
return cljs.core.assoc_in(dissoc_in(pure,old),new$,(function (){var G__21927 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,new$)], 0));
if(!((id_key == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21927,id_key,id);
} else {
return G__21927;
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
return (function (p1__21932_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__21932_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident(class$,res__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_(query__$1)){
if(cljs.core.vector_QMARK_(res__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (class$,top_error_QMARK_,ret){
return (function (p1__21933_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(query__$1,p1__21933_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq(query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var k = (function (){var k = om.next.expr__GT_key(expr);
var G__21969 = k;
if(om.util.unique_ident_QMARK_(k)){
return cljs.core.first(G__21969);
} else {
return G__21969;
}
})();
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,k);
if(om.util.mutation_QMARK_(expr)){
var mk = om.util.mutation_key(expr);
var ret_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,mk);
if(om.next.has_error_QMARK_(ret_SINGLEQUOTE_)){
var x = cljs.core.cst$kw$mutator.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21934_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__21934_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__21971 = cljs.core.next(exprs);
var G__21972 = ret__$1;
exprs = G__21971;
ret__$1 = G__21972;
continue;
} else {
var G__21973 = cljs.core.next(exprs);
var G__21974 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__21973;
ret__$1 = G__21974;
continue;
}
} else {
if(om.util.union_QMARK_(expr)){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var class_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(jv));
if(!(cljs.core.vector_QMARK_(data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,data))),data,errs);
var G__21975 = cljs.core.next(exprs);
var G__21976 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21975;
ret__$1 = G__21976;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21935_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,p1__21935_SHARP_))),p1__21935_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__21977 = cljs.core.next(exprs);
var G__21978 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21977;
ret__$1 = G__21978;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(jv,data,errs);
var G__21979 = cljs.core.next(exprs);
var G__21980 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21979;
ret__$1 = G__21980;
continue;
} else {
if((cljs.core.map_QMARK_(data)) && (om.next.has_error_QMARK_(data))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21936_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__21936_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7523__auto__ = (((class$ == null))?null:om.next.ident(class$,res__$1));
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__21981 = cljs.core.next(exprs);
var G__21982 = null;
exprs = G__21981;
ret__$1 = G__21982;
continue;
} else {
var G__21983 = cljs.core.next(exprs);
var G__21984 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,k,data));
exprs = G__21983;
ret__$1 = G__21984;
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
var errs = (function (){var G__21970 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21970) : cljs.core.atom.call(null,G__21970));
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
om.next.reconciler = (function om$next$reconciler(p__21990){
var map__21995 = p__21990;
var map__21995__$1 = ((((!((map__21995 == null)))?((((map__21995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21995):map__21995);
var config = map__21995__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$root_DASH_render,((function (map__21995,map__21995__$1,config){
return (function (p1__21987_SHARP_,p2__21988_SHARP_){
return ReactDOM.render(p1__21987_SHARP_,p2__21988_SHARP_);
});})(map__21995,map__21995__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,cljs.core.cst$kw$normalize);
var prune_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$prune_DASH_tree,om.next.default_extract_errors);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$pathopt,false);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,cljs.core.cst$kw$instrument);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,cljs.core.cst$kw$id_DASH_key);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__21995,map__21995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__21985_SHARP_,p2__21986_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__21985_SHARP_,p2__21986_SHARP_], 0));
});})(map__21995,map__21995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$merge_DASH_ident,om.next.default_merge_ident);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$migrate,om.next.default_migrate);
var easy_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$easy_DASH_reads,true);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$history,(100));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,cljs.core.cst$kw$state);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$merge,om.next.default_merge);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,cljs.core.cst$kw$shared_DASH_fn);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$ui_DASH__GT_props,om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,cljs.core.cst$kw$parser);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$indexer,om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__21995,map__21995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__21989_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__21989_SHARP_);
});})(map__21995,map__21995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$merge_DASH_tree,om.next.default_merge_tree);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21995__$1,cljs.core.cst$kw$optimize,((function (map__21995,map__21995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__21995,map__21995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
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
})(),prune_tree]),(function (){var G__21998 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21998) : cljs.core.atom.call(null,G__21998));
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

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22000 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22000) : cljs.core.deref.call(null,G__22000));
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

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22002 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22002) : cljs.core.deref.call(null,G__22002));
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
var args22003 = [];
var len__8739__auto___22006 = arguments.length;
var i__8740__auto___22007 = (0);
while(true){
if((i__8740__auto___22007 < len__8739__auto___22006)){
args22003.push((arguments[i__8740__auto___22007]));

var G__22008 = (i__8740__auto___22007 + (1));
i__8740__auto___22007 = G__22008;
continue;
} else {
}
break;
}

var G__22005 = args22003.length;
switch (G__22005) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22003.length)].join('')));

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
var args22010 = [];
var len__8739__auto___22013 = arguments.length;
var i__8740__auto___22014 = (0);
while(true){
if((i__8740__auto___22014 < len__8739__auto___22013)){
args22010.push((arguments[i__8740__auto___22014]));

var G__22015 = (i__8740__auto___22014 + (1));
i__8740__auto___22014 = G__22015;
continue;
} else {
}
break;
}

var G__22012 = args22010.length;
switch (G__22012) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22010.length)].join('')));

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
var args22017 = [];
var len__8739__auto___22020 = arguments.length;
var i__8740__auto___22021 = (0);
while(true){
if((i__8740__auto___22021 < len__8739__auto___22020)){
args22017.push((arguments[i__8740__auto___22021]));

var G__22022 = (i__8740__auto___22021 + (1));
i__8740__auto___22021 = G__22022;
continue;
} else {
}
break;
}

var G__22019 = args22017.length;
switch (G__22019) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22017.length)].join('')));

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
var args22024 = [];
var len__8739__auto___22027 = arguments.length;
var i__8740__auto___22028 = (0);
while(true){
if((i__8740__auto___22028 < len__8739__auto___22027)){
args22024.push((arguments[i__8740__auto___22028]));

var G__22029 = (i__8740__auto___22028 + (1));
i__8740__auto___22028 = G__22029;
continue;
} else {
}
break;
}

var G__22026 = args22024.length;
switch (G__22026) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22024.length)].join('')));

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

