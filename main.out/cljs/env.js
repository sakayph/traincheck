// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(var_args){
var args17042 = [];
var len__8739__auto___17046 = arguments.length;
var i__8740__auto___17047 = (0);
while(true){
if((i__8740__auto___17047 < len__8739__auto___17046)){
args17042.push((arguments[i__8740__auto___17047]));

var G__17048 = (i__8740__auto___17047 + (1));
i__8740__auto___17047 = G__17048;
continue;
} else {
}
break;
}

var G__17044 = args17042.length;
switch (G__17044) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17042.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
var G__17045 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null),cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,options], null)], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17045) : cljs.core.atom.call(null,G__17045));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;

