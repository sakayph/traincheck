// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('om.util');
goog.require('cljs.core');
om.util.force_children = (function om$util$force_children(x){
var G__14161 = x;
if(cljs.core.seq_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.util.force_children),G__14161);
} else {
return G__14161;
}
});
om.util.union_QMARK_ = (function om$util$union_QMARK_(expr){
var expr__$1 = (function (){var G__14163 = expr;
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.first(G__14163);
} else {
return G__14163;
}
})();
return (cljs.core.map_QMARK_(expr__$1)) && (cljs.core.map_QMARK_(cljs.core.second(cljs.core.first(expr__$1))));
});
om.util.join_QMARK_ = (function om$util$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});
/**
 * Returns true if x is an ident.
 */
om.util.ident_QMARK_ = (function om$util$ident_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (((2) === cljs.core.count(x))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) instanceof cljs.core.Keyword));
});
om.util.join_entry = (function om$util$join_entry(expr){
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
return cljs.core.first(expr);
}
});
om.util.join_key = (function om$util$join_key(expr){
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
var G__14165 = cljs.core.first(expr);
return (om.util.join_key.cljs$core$IFn$_invoke$arity$1 ? om.util.join_key.cljs$core$IFn$_invoke$arity$1(G__14165) : om.util.join_key.call(null,G__14165));
} else {
return expr;

}
}
});
om.util.join_value = (function om$util$join_value(join){
return cljs.core.second(om.util.join_entry(join));
});
om.util.unique_ident_QMARK_ = (function om$util$unique_ident_QMARK_(x){
return (om.util.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(x)));
});
om.util.recursion_QMARK_ = (function om$util$recursion_QMARK_(x){
return (cljs.core.symbol_identical_QMARK_(cljs.core.cst$sym$$$$,x)) || (typeof x === 'number');
});
om.util.mutation_QMARK_ = (function om$util$mutation_QMARK_(expr){
var expr__$1 = (function (){var G__14167 = expr;
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.first(G__14167);
} else {
return G__14167;
}
})();
return (expr__$1 instanceof cljs.core.Symbol);
});
om.util.mutation_key = (function om$util$mutation_key(expr){
if((cljs.core.first(expr) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (first expr))"));
}

return cljs.core.first(expr);
});
