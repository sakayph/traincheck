// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24015 = [];
var len__8739__auto___24021 = arguments.length;
var i__8740__auto___24022 = (0);
while(true){
if((i__8740__auto___24022 < len__8739__auto___24021)){
args24015.push((arguments[i__8740__auto___24022]));

var G__24023 = (i__8740__auto___24022 + (1));
i__8740__auto___24022 = G__24023;
continue;
} else {
}
break;
}

var G__24017 = args24015.length;
switch (G__24017) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24015.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24018 = (function (f,blockable,meta24019){
this.f = f;
this.blockable = blockable;
this.meta24019 = meta24019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24020,meta24019__$1){
var self__ = this;
var _24020__$1 = this;
return (new cljs.core.async.t_cljs$core$async24018(self__.f,self__.blockable,meta24019__$1));
});


cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24020){
var self__ = this;
var _24020__$1 = this;
return self__.meta24019;
});


cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24019], null);
});

cljs.core.async.t_cljs$core$async24018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24018";

cljs.core.async.t_cljs$core$async24018.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24018");
});

cljs.core.async.__GT_t_cljs$core$async24018 = (function cljs$core$async$__GT_t_cljs$core$async24018(f__$1,blockable__$1,meta24019){
return (new cljs.core.async.t_cljs$core$async24018(f__$1,blockable__$1,meta24019));
});

}

return (new cljs.core.async.t_cljs$core$async24018(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24027 = [];
var len__8739__auto___24030 = arguments.length;
var i__8740__auto___24031 = (0);
while(true){
if((i__8740__auto___24031 < len__8739__auto___24030)){
args24027.push((arguments[i__8740__auto___24031]));

var G__24032 = (i__8740__auto___24031 + (1));
i__8740__auto___24031 = G__24032;
continue;
} else {
}
break;
}

var G__24029 = args24027.length;
switch (G__24029) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24027.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24034 = [];
var len__8739__auto___24037 = arguments.length;
var i__8740__auto___24038 = (0);
while(true){
if((i__8740__auto___24038 < len__8739__auto___24037)){
args24034.push((arguments[i__8740__auto___24038]));

var G__24039 = (i__8740__auto___24038 + (1));
i__8740__auto___24038 = G__24039;
continue;
} else {
}
break;
}

var G__24036 = args24034.length;
switch (G__24036) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24034.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24041 = [];
var len__8739__auto___24044 = arguments.length;
var i__8740__auto___24045 = (0);
while(true){
if((i__8740__auto___24045 < len__8739__auto___24044)){
args24041.push((arguments[i__8740__auto___24045]));

var G__24046 = (i__8740__auto___24045 + (1));
i__8740__auto___24045 = G__24046;
continue;
} else {
}
break;
}

var G__24043 = args24041.length;
switch (G__24043) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24041.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24048 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24048) : fn1.call(null,val_24048));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24048,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24048) : fn1.call(null,val_24048));
});})(val_24048,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24049 = [];
var len__8739__auto___24052 = arguments.length;
var i__8740__auto___24053 = (0);
while(true){
if((i__8740__auto___24053 < len__8739__auto___24052)){
args24049.push((arguments[i__8740__auto___24053]));

var G__24054 = (i__8740__auto___24053 + (1));
i__8740__auto___24053 = G__24054;
continue;
} else {
}
break;
}

var G__24051 = args24049.length;
switch (G__24051) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24049.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6751__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8539__auto___24056 = n;
var x_24057 = (0);
while(true){
if((x_24057 < n__8539__auto___24056)){
(a[x_24057] = (0));

var G__24058 = (x_24057 + (1));
x_24057 = G__24058;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__24059 = (i + (1));
i = G__24059;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async24063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24063 = (function (flag,meta24064){
this.flag = flag;
this.meta24064 = meta24064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24065,meta24064__$1){
var self__ = this;
var _24065__$1 = this;
return (new cljs.core.async.t_cljs$core$async24063(self__.flag,meta24064__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24065){
var self__ = this;
var _24065__$1 = this;
return self__.meta24064;
});})(flag))
;


cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24063.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24064], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24063";

cljs.core.async.t_cljs$core$async24063.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24063");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24063 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24063(flag__$1,meta24064){
return (new cljs.core.async.t_cljs$core$async24063(flag__$1,meta24064));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24063(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24069 = (function (flag,cb,meta24070){
this.flag = flag;
this.cb = cb;
this.meta24070 = meta24070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24071,meta24070__$1){
var self__ = this;
var _24071__$1 = this;
return (new cljs.core.async.t_cljs$core$async24069(self__.flag,self__.cb,meta24070__$1));
});


cljs.core.async.t_cljs$core$async24069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24071){
var self__ = this;
var _24071__$1 = this;
return self__.meta24070;
});


cljs.core.async.t_cljs$core$async24069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async24069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24070], null);
});

cljs.core.async.t_cljs$core$async24069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24069";

cljs.core.async.t_cljs$core$async24069.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24069");
});

cljs.core.async.__GT_t_cljs$core$async24069 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24069(flag__$1,cb__$1,meta24070){
return (new cljs.core.async.t_cljs$core$async24069(flag__$1,cb__$1,meta24070));
});

}

return (new cljs.core.async.t_cljs$core$async24069(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24072_SHARP_){
var G__24076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24072_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24076) : fret.call(null,G__24076));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24073_SHARP_){
var G__24077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24073_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24077) : fret.call(null,G__24077));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__7523__auto__ = wport;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24078 = (i + (1));
i = G__24078;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7523__auto__ = ret;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6753__auto__ = (function (){var and__7511__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7511__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8746__auto__ = [];
var len__8739__auto___24084 = arguments.length;
var i__8740__auto___24085 = (0);
while(true){
if((i__8740__auto___24085 < len__8739__auto___24084)){
args__8746__auto__.push((arguments[i__8740__auto___24085]));

var G__24086 = (i__8740__auto___24085 + (1));
i__8740__auto___24085 = G__24086;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((1) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8747__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24081){
var map__24082 = p__24081;
var map__24082__$1 = ((((!((map__24082 == null)))?((((map__24082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24082):map__24082);
var opts = map__24082__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24079){
var G__24080 = cljs.core.first(seq24079);
var seq24079__$1 = cljs.core.next(seq24079);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24080,seq24079__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24087 = [];
var len__8739__auto___24137 = arguments.length;
var i__8740__auto___24138 = (0);
while(true){
if((i__8740__auto___24138 < len__8739__auto___24137)){
args24087.push((arguments[i__8740__auto___24138]));

var G__24139 = (i__8740__auto___24138 + (1));
i__8740__auto___24138 = G__24139;
continue;
} else {
}
break;
}

var G__24089 = args24087.length;
switch (G__24089) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24087.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23956__auto___24141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___24141){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___24141){
return (function (state_24113){
var state_val_24114 = (state_24113[(1)]);
if((state_val_24114 === (7))){
var inst_24109 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
var statearr_24115_24142 = state_24113__$1;
(statearr_24115_24142[(2)] = inst_24109);

(statearr_24115_24142[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (1))){
var state_24113__$1 = state_24113;
var statearr_24116_24143 = state_24113__$1;
(statearr_24116_24143[(2)] = null);

(statearr_24116_24143[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (4))){
var inst_24092 = (state_24113[(7)]);
var inst_24092__$1 = (state_24113[(2)]);
var inst_24093 = (inst_24092__$1 == null);
var state_24113__$1 = (function (){var statearr_24117 = state_24113;
(statearr_24117[(7)] = inst_24092__$1);

return statearr_24117;
})();
if(cljs.core.truth_(inst_24093)){
var statearr_24118_24144 = state_24113__$1;
(statearr_24118_24144[(1)] = (5));

} else {
var statearr_24119_24145 = state_24113__$1;
(statearr_24119_24145[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (13))){
var state_24113__$1 = state_24113;
var statearr_24120_24146 = state_24113__$1;
(statearr_24120_24146[(2)] = null);

(statearr_24120_24146[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (6))){
var inst_24092 = (state_24113[(7)]);
var state_24113__$1 = state_24113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24113__$1,(11),to,inst_24092);
} else {
if((state_val_24114 === (3))){
var inst_24111 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24113__$1,inst_24111);
} else {
if((state_val_24114 === (12))){
var state_24113__$1 = state_24113;
var statearr_24121_24147 = state_24113__$1;
(statearr_24121_24147[(2)] = null);

(statearr_24121_24147[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (2))){
var state_24113__$1 = state_24113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24113__$1,(4),from);
} else {
if((state_val_24114 === (11))){
var inst_24102 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
if(cljs.core.truth_(inst_24102)){
var statearr_24122_24148 = state_24113__$1;
(statearr_24122_24148[(1)] = (12));

} else {
var statearr_24123_24149 = state_24113__$1;
(statearr_24123_24149[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (9))){
var state_24113__$1 = state_24113;
var statearr_24124_24150 = state_24113__$1;
(statearr_24124_24150[(2)] = null);

(statearr_24124_24150[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (5))){
var state_24113__$1 = state_24113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24125_24151 = state_24113__$1;
(statearr_24125_24151[(1)] = (8));

} else {
var statearr_24126_24152 = state_24113__$1;
(statearr_24126_24152[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (14))){
var inst_24107 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
var statearr_24127_24153 = state_24113__$1;
(statearr_24127_24153[(2)] = inst_24107);

(statearr_24127_24153[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (10))){
var inst_24099 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
var statearr_24128_24154 = state_24113__$1;
(statearr_24128_24154[(2)] = inst_24099);

(statearr_24128_24154[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24114 === (8))){
var inst_24096 = cljs.core.async.close_BANG_(to);
var state_24113__$1 = state_24113;
var statearr_24129_24155 = state_24113__$1;
(statearr_24129_24155[(2)] = inst_24096);

(statearr_24129_24155[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___24141))
;
return ((function (switch__23830__auto__,c__23956__auto___24141){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_24133 = [null,null,null,null,null,null,null,null];
(statearr_24133[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_24133[(1)] = (1));

return statearr_24133;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_24113){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24113);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24134){if((e24134 instanceof Object)){
var ex__23834__auto__ = e24134;
var statearr_24135_24156 = state_24113;
(statearr_24135_24156[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24113);

return cljs.core.cst$kw$recur;
} else {
throw e24134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24157 = state_24113;
state_24113 = G__24157;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_24113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_24113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___24141))
})();
var state__23958__auto__ = (function (){var statearr_24136 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___24141);

return statearr_24136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___24141))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__24345){
var vec__24346 = p__24345;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24346,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24346,(1),null);
var job = vec__24346;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23956__auto___24532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___24532,res,vec__24346,v,p,job,jobs,results){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___24532,res,vec__24346,v,p,job,jobs,results){
return (function (state_24353){
var state_val_24354 = (state_24353[(1)]);
if((state_val_24354 === (1))){
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24353__$1,(2),res,v);
} else {
if((state_val_24354 === (2))){
var inst_24350 = (state_24353[(2)]);
var inst_24351 = cljs.core.async.close_BANG_(res);
var state_24353__$1 = (function (){var statearr_24355 = state_24353;
(statearr_24355[(7)] = inst_24350);

return statearr_24355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24353__$1,inst_24351);
} else {
return null;
}
}
});})(c__23956__auto___24532,res,vec__24346,v,p,job,jobs,results))
;
return ((function (switch__23830__auto__,c__23956__auto___24532,res,vec__24346,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0 = (function (){
var statearr_24359 = [null,null,null,null,null,null,null,null];
(statearr_24359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__);

(statearr_24359[(1)] = (1));

return statearr_24359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1 = (function (state_24353){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24353);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24360){if((e24360 instanceof Object)){
var ex__23834__auto__ = e24360;
var statearr_24361_24533 = state_24353;
(statearr_24361_24533[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24353);

return cljs.core.cst$kw$recur;
} else {
throw e24360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24534 = state_24353;
state_24353 = G__24534;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = function(state_24353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1.call(this,state_24353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___24532,res,vec__24346,v,p,job,jobs,results))
})();
var state__23958__auto__ = (function (){var statearr_24362 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___24532);

return statearr_24362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___24532,res,vec__24346,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24363){
var vec__24364 = p__24363;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24364,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24364,(1),null);
var job = vec__24364;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8539__auto___24535 = n;
var __24536 = (0);
while(true){
if((__24536 < n__8539__auto___24535)){
var G__24367_24537 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24367_24537) {
case "compute":
var c__23956__auto___24539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24536,c__23956__auto___24539,G__24367_24537,n__8539__auto___24535,jobs,results,process,async){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (__24536,c__23956__auto___24539,G__24367_24537,n__8539__auto___24535,jobs,results,process,async){
return (function (state_24380){
var state_val_24381 = (state_24380[(1)]);
if((state_val_24381 === (1))){
var state_24380__$1 = state_24380;
var statearr_24382_24540 = state_24380__$1;
(statearr_24382_24540[(2)] = null);

(statearr_24382_24540[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24381 === (2))){
var state_24380__$1 = state_24380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24380__$1,(4),jobs);
} else {
if((state_val_24381 === (3))){
var inst_24378 = (state_24380[(2)]);
var state_24380__$1 = state_24380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24380__$1,inst_24378);
} else {
if((state_val_24381 === (4))){
var inst_24370 = (state_24380[(2)]);
var inst_24371 = process(inst_24370);
var state_24380__$1 = state_24380;
if(cljs.core.truth_(inst_24371)){
var statearr_24383_24541 = state_24380__$1;
(statearr_24383_24541[(1)] = (5));

} else {
var statearr_24384_24542 = state_24380__$1;
(statearr_24384_24542[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24381 === (5))){
var state_24380__$1 = state_24380;
var statearr_24385_24543 = state_24380__$1;
(statearr_24385_24543[(2)] = null);

(statearr_24385_24543[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24381 === (6))){
var state_24380__$1 = state_24380;
var statearr_24386_24544 = state_24380__$1;
(statearr_24386_24544[(2)] = null);

(statearr_24386_24544[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24381 === (7))){
var inst_24376 = (state_24380[(2)]);
var state_24380__$1 = state_24380;
var statearr_24387_24545 = state_24380__$1;
(statearr_24387_24545[(2)] = inst_24376);

(statearr_24387_24545[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__24536,c__23956__auto___24539,G__24367_24537,n__8539__auto___24535,jobs,results,process,async))
;
return ((function (__24536,switch__23830__auto__,c__23956__auto___24539,G__24367_24537,n__8539__auto___24535,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0 = (function (){
var statearr_24391 = [null,null,null,null,null,null,null];
(statearr_24391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__);

(statearr_24391[(1)] = (1));

return statearr_24391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1 = (function (state_24380){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24380);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24392){if((e24392 instanceof Object)){
var ex__23834__auto__ = e24392;
var statearr_24393_24546 = state_24380;
(statearr_24393_24546[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24380);

return cljs.core.cst$kw$recur;
} else {
throw e24392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24547 = state_24380;
state_24380 = G__24547;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = function(state_24380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1.call(this,state_24380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__;
})()
;})(__24536,switch__23830__auto__,c__23956__auto___24539,G__24367_24537,n__8539__auto___24535,jobs,results,process,async))
})();
var state__23958__auto__ = (function (){var statearr_24394 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___24539);

return statearr_24394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(__24536,c__23956__auto___24539,G__24367_24537,n__8539__auto___24535,jobs,results,process,async))
);


break;
case "async":
var c__23956__auto___24548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24536,c__23956__auto___24548,G__24367_24537,n__8539__auto___24535,jobs,results,process,async){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (__24536,c__23956__auto___24548,G__24367_24537,n__8539__auto___24535,jobs,results,process,async){
return (function (state_24407){
var state_val_24408 = (state_24407[(1)]);
if((state_val_24408 === (1))){
var state_24407__$1 = state_24407;
var statearr_24409_24549 = state_24407__$1;
(statearr_24409_24549[(2)] = null);

(statearr_24409_24549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24408 === (2))){
var state_24407__$1 = state_24407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24407__$1,(4),jobs);
} else {
if((state_val_24408 === (3))){
var inst_24405 = (state_24407[(2)]);
var state_24407__$1 = state_24407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24407__$1,inst_24405);
} else {
if((state_val_24408 === (4))){
var inst_24397 = (state_24407[(2)]);
var inst_24398 = async(inst_24397);
var state_24407__$1 = state_24407;
if(cljs.core.truth_(inst_24398)){
var statearr_24410_24550 = state_24407__$1;
(statearr_24410_24550[(1)] = (5));

} else {
var statearr_24411_24551 = state_24407__$1;
(statearr_24411_24551[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24408 === (5))){
var state_24407__$1 = state_24407;
var statearr_24412_24552 = state_24407__$1;
(statearr_24412_24552[(2)] = null);

(statearr_24412_24552[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24408 === (6))){
var state_24407__$1 = state_24407;
var statearr_24413_24553 = state_24407__$1;
(statearr_24413_24553[(2)] = null);

(statearr_24413_24553[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24408 === (7))){
var inst_24403 = (state_24407[(2)]);
var state_24407__$1 = state_24407;
var statearr_24414_24554 = state_24407__$1;
(statearr_24414_24554[(2)] = inst_24403);

(statearr_24414_24554[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__24536,c__23956__auto___24548,G__24367_24537,n__8539__auto___24535,jobs,results,process,async))
;
return ((function (__24536,switch__23830__auto__,c__23956__auto___24548,G__24367_24537,n__8539__auto___24535,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0 = (function (){
var statearr_24418 = [null,null,null,null,null,null,null];
(statearr_24418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__);

(statearr_24418[(1)] = (1));

return statearr_24418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1 = (function (state_24407){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24407);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24419){if((e24419 instanceof Object)){
var ex__23834__auto__ = e24419;
var statearr_24420_24555 = state_24407;
(statearr_24420_24555[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24407);

return cljs.core.cst$kw$recur;
} else {
throw e24419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24556 = state_24407;
state_24407 = G__24556;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = function(state_24407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1.call(this,state_24407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__;
})()
;})(__24536,switch__23830__auto__,c__23956__auto___24548,G__24367_24537,n__8539__auto___24535,jobs,results,process,async))
})();
var state__23958__auto__ = (function (){var statearr_24421 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___24548);

return statearr_24421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(__24536,c__23956__auto___24548,G__24367_24537,n__8539__auto___24535,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24557 = (__24536 + (1));
__24536 = G__24557;
continue;
} else {
}
break;
}

var c__23956__auto___24558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___24558,jobs,results,process,async){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___24558,jobs,results,process,async){
return (function (state_24443){
var state_val_24444 = (state_24443[(1)]);
if((state_val_24444 === (1))){
var state_24443__$1 = state_24443;
var statearr_24445_24559 = state_24443__$1;
(statearr_24445_24559[(2)] = null);

(statearr_24445_24559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24444 === (2))){
var state_24443__$1 = state_24443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24443__$1,(4),from);
} else {
if((state_val_24444 === (3))){
var inst_24441 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24443__$1,inst_24441);
} else {
if((state_val_24444 === (4))){
var inst_24424 = (state_24443[(7)]);
var inst_24424__$1 = (state_24443[(2)]);
var inst_24425 = (inst_24424__$1 == null);
var state_24443__$1 = (function (){var statearr_24446 = state_24443;
(statearr_24446[(7)] = inst_24424__$1);

return statearr_24446;
})();
if(cljs.core.truth_(inst_24425)){
var statearr_24447_24560 = state_24443__$1;
(statearr_24447_24560[(1)] = (5));

} else {
var statearr_24448_24561 = state_24443__$1;
(statearr_24448_24561[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24444 === (5))){
var inst_24427 = cljs.core.async.close_BANG_(jobs);
var state_24443__$1 = state_24443;
var statearr_24449_24562 = state_24443__$1;
(statearr_24449_24562[(2)] = inst_24427);

(statearr_24449_24562[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24444 === (6))){
var inst_24424 = (state_24443[(7)]);
var inst_24429 = (state_24443[(8)]);
var inst_24429__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24430 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24431 = [inst_24424,inst_24429__$1];
var inst_24432 = (new cljs.core.PersistentVector(null,2,(5),inst_24430,inst_24431,null));
var state_24443__$1 = (function (){var statearr_24450 = state_24443;
(statearr_24450[(8)] = inst_24429__$1);

return statearr_24450;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24443__$1,(8),jobs,inst_24432);
} else {
if((state_val_24444 === (7))){
var inst_24439 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
var statearr_24451_24563 = state_24443__$1;
(statearr_24451_24563[(2)] = inst_24439);

(statearr_24451_24563[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24444 === (8))){
var inst_24429 = (state_24443[(8)]);
var inst_24434 = (state_24443[(2)]);
var state_24443__$1 = (function (){var statearr_24452 = state_24443;
(statearr_24452[(9)] = inst_24434);

return statearr_24452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24443__$1,(9),results,inst_24429);
} else {
if((state_val_24444 === (9))){
var inst_24436 = (state_24443[(2)]);
var state_24443__$1 = (function (){var statearr_24453 = state_24443;
(statearr_24453[(10)] = inst_24436);

return statearr_24453;
})();
var statearr_24454_24564 = state_24443__$1;
(statearr_24454_24564[(2)] = null);

(statearr_24454_24564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___24558,jobs,results,process,async))
;
return ((function (switch__23830__auto__,c__23956__auto___24558,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0 = (function (){
var statearr_24458 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__);

(statearr_24458[(1)] = (1));

return statearr_24458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1 = (function (state_24443){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24443);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24459){if((e24459 instanceof Object)){
var ex__23834__auto__ = e24459;
var statearr_24460_24565 = state_24443;
(statearr_24460_24565[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24443);

return cljs.core.cst$kw$recur;
} else {
throw e24459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24566 = state_24443;
state_24443 = G__24566;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = function(state_24443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1.call(this,state_24443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___24558,jobs,results,process,async))
})();
var state__23958__auto__ = (function (){var statearr_24461 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___24558);

return statearr_24461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___24558,jobs,results,process,async))
);


var c__23956__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto__,jobs,results,process,async){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto__,jobs,results,process,async){
return (function (state_24499){
var state_val_24500 = (state_24499[(1)]);
if((state_val_24500 === (7))){
var inst_24495 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24501_24567 = state_24499__$1;
(statearr_24501_24567[(2)] = inst_24495);

(statearr_24501_24567[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (20))){
var state_24499__$1 = state_24499;
var statearr_24502_24568 = state_24499__$1;
(statearr_24502_24568[(2)] = null);

(statearr_24502_24568[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (1))){
var state_24499__$1 = state_24499;
var statearr_24503_24569 = state_24499__$1;
(statearr_24503_24569[(2)] = null);

(statearr_24503_24569[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (4))){
var inst_24464 = (state_24499[(7)]);
var inst_24464__$1 = (state_24499[(2)]);
var inst_24465 = (inst_24464__$1 == null);
var state_24499__$1 = (function (){var statearr_24504 = state_24499;
(statearr_24504[(7)] = inst_24464__$1);

return statearr_24504;
})();
if(cljs.core.truth_(inst_24465)){
var statearr_24505_24570 = state_24499__$1;
(statearr_24505_24570[(1)] = (5));

} else {
var statearr_24506_24571 = state_24499__$1;
(statearr_24506_24571[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (15))){
var inst_24477 = (state_24499[(8)]);
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24499__$1,(18),to,inst_24477);
} else {
if((state_val_24500 === (21))){
var inst_24490 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24507_24572 = state_24499__$1;
(statearr_24507_24572[(2)] = inst_24490);

(statearr_24507_24572[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (13))){
var inst_24492 = (state_24499[(2)]);
var state_24499__$1 = (function (){var statearr_24508 = state_24499;
(statearr_24508[(9)] = inst_24492);

return statearr_24508;
})();
var statearr_24509_24573 = state_24499__$1;
(statearr_24509_24573[(2)] = null);

(statearr_24509_24573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (6))){
var inst_24464 = (state_24499[(7)]);
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24499__$1,(11),inst_24464);
} else {
if((state_val_24500 === (17))){
var inst_24485 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
if(cljs.core.truth_(inst_24485)){
var statearr_24510_24574 = state_24499__$1;
(statearr_24510_24574[(1)] = (19));

} else {
var statearr_24511_24575 = state_24499__$1;
(statearr_24511_24575[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (3))){
var inst_24497 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24499__$1,inst_24497);
} else {
if((state_val_24500 === (12))){
var inst_24474 = (state_24499[(10)]);
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24499__$1,(14),inst_24474);
} else {
if((state_val_24500 === (2))){
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24499__$1,(4),results);
} else {
if((state_val_24500 === (19))){
var state_24499__$1 = state_24499;
var statearr_24512_24576 = state_24499__$1;
(statearr_24512_24576[(2)] = null);

(statearr_24512_24576[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (11))){
var inst_24474 = (state_24499[(2)]);
var state_24499__$1 = (function (){var statearr_24513 = state_24499;
(statearr_24513[(10)] = inst_24474);

return statearr_24513;
})();
var statearr_24514_24577 = state_24499__$1;
(statearr_24514_24577[(2)] = null);

(statearr_24514_24577[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (9))){
var state_24499__$1 = state_24499;
var statearr_24515_24578 = state_24499__$1;
(statearr_24515_24578[(2)] = null);

(statearr_24515_24578[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (5))){
var state_24499__$1 = state_24499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24516_24579 = state_24499__$1;
(statearr_24516_24579[(1)] = (8));

} else {
var statearr_24517_24580 = state_24499__$1;
(statearr_24517_24580[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (14))){
var inst_24477 = (state_24499[(8)]);
var inst_24479 = (state_24499[(11)]);
var inst_24477__$1 = (state_24499[(2)]);
var inst_24478 = (inst_24477__$1 == null);
var inst_24479__$1 = cljs.core.not(inst_24478);
var state_24499__$1 = (function (){var statearr_24518 = state_24499;
(statearr_24518[(8)] = inst_24477__$1);

(statearr_24518[(11)] = inst_24479__$1);

return statearr_24518;
})();
if(inst_24479__$1){
var statearr_24519_24581 = state_24499__$1;
(statearr_24519_24581[(1)] = (15));

} else {
var statearr_24520_24582 = state_24499__$1;
(statearr_24520_24582[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (16))){
var inst_24479 = (state_24499[(11)]);
var state_24499__$1 = state_24499;
var statearr_24521_24583 = state_24499__$1;
(statearr_24521_24583[(2)] = inst_24479);

(statearr_24521_24583[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (10))){
var inst_24471 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24522_24584 = state_24499__$1;
(statearr_24522_24584[(2)] = inst_24471);

(statearr_24522_24584[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (18))){
var inst_24482 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24523_24585 = state_24499__$1;
(statearr_24523_24585[(2)] = inst_24482);

(statearr_24523_24585[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24500 === (8))){
var inst_24468 = cljs.core.async.close_BANG_(to);
var state_24499__$1 = state_24499;
var statearr_24524_24586 = state_24499__$1;
(statearr_24524_24586[(2)] = inst_24468);

(statearr_24524_24586[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto__,jobs,results,process,async))
;
return ((function (switch__23830__auto__,c__23956__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0 = (function (){
var statearr_24528 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__);

(statearr_24528[(1)] = (1));

return statearr_24528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1 = (function (state_24499){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24499);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24529){if((e24529 instanceof Object)){
var ex__23834__auto__ = e24529;
var statearr_24530_24587 = state_24499;
(statearr_24530_24587[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24499);

return cljs.core.cst$kw$recur;
} else {
throw e24529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24588 = state_24499;
state_24499 = G__24588;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__ = function(state_24499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1.call(this,state_24499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto__,jobs,results,process,async))
})();
var state__23958__auto__ = (function (){var statearr_24531 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto__);

return statearr_24531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto__,jobs,results,process,async))
);

return c__23956__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24589 = [];
var len__8739__auto___24592 = arguments.length;
var i__8740__auto___24593 = (0);
while(true){
if((i__8740__auto___24593 < len__8739__auto___24592)){
args24589.push((arguments[i__8740__auto___24593]));

var G__24594 = (i__8740__auto___24593 + (1));
i__8740__auto___24593 = G__24594;
continue;
} else {
}
break;
}

var G__24591 = args24589.length;
switch (G__24591) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24589.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24596 = [];
var len__8739__auto___24599 = arguments.length;
var i__8740__auto___24600 = (0);
while(true){
if((i__8740__auto___24600 < len__8739__auto___24599)){
args24596.push((arguments[i__8740__auto___24600]));

var G__24601 = (i__8740__auto___24600 + (1));
i__8740__auto___24600 = G__24601;
continue;
} else {
}
break;
}

var G__24598 = args24596.length;
switch (G__24598) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24596.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24603 = [];
var len__8739__auto___24656 = arguments.length;
var i__8740__auto___24657 = (0);
while(true){
if((i__8740__auto___24657 < len__8739__auto___24656)){
args24603.push((arguments[i__8740__auto___24657]));

var G__24658 = (i__8740__auto___24657 + (1));
i__8740__auto___24657 = G__24658;
continue;
} else {
}
break;
}

var G__24605 = args24603.length;
switch (G__24605) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24603.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__23956__auto___24660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___24660,tc,fc){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___24660,tc,fc){
return (function (state_24631){
var state_val_24632 = (state_24631[(1)]);
if((state_val_24632 === (7))){
var inst_24627 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
var statearr_24633_24661 = state_24631__$1;
(statearr_24633_24661[(2)] = inst_24627);

(statearr_24633_24661[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (1))){
var state_24631__$1 = state_24631;
var statearr_24634_24662 = state_24631__$1;
(statearr_24634_24662[(2)] = null);

(statearr_24634_24662[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (4))){
var inst_24608 = (state_24631[(7)]);
var inst_24608__$1 = (state_24631[(2)]);
var inst_24609 = (inst_24608__$1 == null);
var state_24631__$1 = (function (){var statearr_24635 = state_24631;
(statearr_24635[(7)] = inst_24608__$1);

return statearr_24635;
})();
if(cljs.core.truth_(inst_24609)){
var statearr_24636_24663 = state_24631__$1;
(statearr_24636_24663[(1)] = (5));

} else {
var statearr_24637_24664 = state_24631__$1;
(statearr_24637_24664[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (13))){
var state_24631__$1 = state_24631;
var statearr_24638_24665 = state_24631__$1;
(statearr_24638_24665[(2)] = null);

(statearr_24638_24665[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (6))){
var inst_24608 = (state_24631[(7)]);
var inst_24614 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24608) : p.call(null,inst_24608));
var state_24631__$1 = state_24631;
if(cljs.core.truth_(inst_24614)){
var statearr_24639_24666 = state_24631__$1;
(statearr_24639_24666[(1)] = (9));

} else {
var statearr_24640_24667 = state_24631__$1;
(statearr_24640_24667[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (3))){
var inst_24629 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24631__$1,inst_24629);
} else {
if((state_val_24632 === (12))){
var state_24631__$1 = state_24631;
var statearr_24641_24668 = state_24631__$1;
(statearr_24641_24668[(2)] = null);

(statearr_24641_24668[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (2))){
var state_24631__$1 = state_24631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24631__$1,(4),ch);
} else {
if((state_val_24632 === (11))){
var inst_24608 = (state_24631[(7)]);
var inst_24618 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24631__$1,(8),inst_24618,inst_24608);
} else {
if((state_val_24632 === (9))){
var state_24631__$1 = state_24631;
var statearr_24642_24669 = state_24631__$1;
(statearr_24642_24669[(2)] = tc);

(statearr_24642_24669[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (5))){
var inst_24611 = cljs.core.async.close_BANG_(tc);
var inst_24612 = cljs.core.async.close_BANG_(fc);
var state_24631__$1 = (function (){var statearr_24643 = state_24631;
(statearr_24643[(8)] = inst_24611);

return statearr_24643;
})();
var statearr_24644_24670 = state_24631__$1;
(statearr_24644_24670[(2)] = inst_24612);

(statearr_24644_24670[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (14))){
var inst_24625 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
var statearr_24645_24671 = state_24631__$1;
(statearr_24645_24671[(2)] = inst_24625);

(statearr_24645_24671[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (10))){
var state_24631__$1 = state_24631;
var statearr_24646_24672 = state_24631__$1;
(statearr_24646_24672[(2)] = fc);

(statearr_24646_24672[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24632 === (8))){
var inst_24620 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
if(cljs.core.truth_(inst_24620)){
var statearr_24647_24673 = state_24631__$1;
(statearr_24647_24673[(1)] = (12));

} else {
var statearr_24648_24674 = state_24631__$1;
(statearr_24648_24674[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___24660,tc,fc))
;
return ((function (switch__23830__auto__,c__23956__auto___24660,tc,fc){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_24652 = [null,null,null,null,null,null,null,null,null];
(statearr_24652[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_24652[(1)] = (1));

return statearr_24652;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_24631){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24631);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24653){if((e24653 instanceof Object)){
var ex__23834__auto__ = e24653;
var statearr_24654_24675 = state_24631;
(statearr_24654_24675[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24631);

return cljs.core.cst$kw$recur;
} else {
throw e24653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24676 = state_24631;
state_24631 = G__24676;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_24631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_24631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___24660,tc,fc))
})();
var state__23958__auto__ = (function (){var statearr_24655 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___24660);

return statearr_24655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___24660,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23956__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto__){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto__){
return (function (state_24740){
var state_val_24741 = (state_24740[(1)]);
if((state_val_24741 === (7))){
var inst_24736 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24742_24763 = state_24740__$1;
(statearr_24742_24763[(2)] = inst_24736);

(statearr_24742_24763[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24741 === (1))){
var inst_24720 = init;
var state_24740__$1 = (function (){var statearr_24743 = state_24740;
(statearr_24743[(7)] = inst_24720);

return statearr_24743;
})();
var statearr_24744_24764 = state_24740__$1;
(statearr_24744_24764[(2)] = null);

(statearr_24744_24764[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24741 === (4))){
var inst_24723 = (state_24740[(8)]);
var inst_24723__$1 = (state_24740[(2)]);
var inst_24724 = (inst_24723__$1 == null);
var state_24740__$1 = (function (){var statearr_24745 = state_24740;
(statearr_24745[(8)] = inst_24723__$1);

return statearr_24745;
})();
if(cljs.core.truth_(inst_24724)){
var statearr_24746_24765 = state_24740__$1;
(statearr_24746_24765[(1)] = (5));

} else {
var statearr_24747_24766 = state_24740__$1;
(statearr_24747_24766[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24741 === (6))){
var inst_24720 = (state_24740[(7)]);
var inst_24723 = (state_24740[(8)]);
var inst_24727 = (state_24740[(9)]);
var inst_24727__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24720,inst_24723) : f.call(null,inst_24720,inst_24723));
var inst_24728 = cljs.core.reduced_QMARK_(inst_24727__$1);
var state_24740__$1 = (function (){var statearr_24748 = state_24740;
(statearr_24748[(9)] = inst_24727__$1);

return statearr_24748;
})();
if(inst_24728){
var statearr_24749_24767 = state_24740__$1;
(statearr_24749_24767[(1)] = (8));

} else {
var statearr_24750_24768 = state_24740__$1;
(statearr_24750_24768[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24741 === (3))){
var inst_24738 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24740__$1,inst_24738);
} else {
if((state_val_24741 === (2))){
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24740__$1,(4),ch);
} else {
if((state_val_24741 === (9))){
var inst_24727 = (state_24740[(9)]);
var inst_24720 = inst_24727;
var state_24740__$1 = (function (){var statearr_24751 = state_24740;
(statearr_24751[(7)] = inst_24720);

return statearr_24751;
})();
var statearr_24752_24769 = state_24740__$1;
(statearr_24752_24769[(2)] = null);

(statearr_24752_24769[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24741 === (5))){
var inst_24720 = (state_24740[(7)]);
var state_24740__$1 = state_24740;
var statearr_24753_24770 = state_24740__$1;
(statearr_24753_24770[(2)] = inst_24720);

(statearr_24753_24770[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24741 === (10))){
var inst_24734 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24754_24771 = state_24740__$1;
(statearr_24754_24771[(2)] = inst_24734);

(statearr_24754_24771[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24741 === (8))){
var inst_24727 = (state_24740[(9)]);
var inst_24730 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_24727) : cljs.core.deref.call(null,inst_24727));
var state_24740__$1 = state_24740;
var statearr_24755_24772 = state_24740__$1;
(statearr_24755_24772[(2)] = inst_24730);

(statearr_24755_24772[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto__))
;
return ((function (switch__23830__auto__,c__23956__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23831__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23831__auto____0 = (function (){
var statearr_24759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24759[(0)] = cljs$core$async$reduce_$_state_machine__23831__auto__);

(statearr_24759[(1)] = (1));

return statearr_24759;
});
var cljs$core$async$reduce_$_state_machine__23831__auto____1 = (function (state_24740){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24740);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24760){if((e24760 instanceof Object)){
var ex__23834__auto__ = e24760;
var statearr_24761_24773 = state_24740;
(statearr_24761_24773[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24740);

return cljs.core.cst$kw$recur;
} else {
throw e24760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24774 = state_24740;
state_24740 = G__24774;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23831__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23831__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23831__auto____0;
cljs$core$async$reduce_$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23831__auto____1;
return cljs$core$async$reduce_$_state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto__))
})();
var state__23958__auto__ = (function (){var statearr_24762 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto__);

return statearr_24762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto__))
);

return c__23956__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23956__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto__,f__$1){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto__,f__$1){
return (function (state_24794){
var state_val_24795 = (state_24794[(1)]);
if((state_val_24795 === (1))){
var inst_24789 = cljs.core.async.reduce(f__$1,init,ch);
var state_24794__$1 = state_24794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24794__$1,(2),inst_24789);
} else {
if((state_val_24795 === (2))){
var inst_24791 = (state_24794[(2)]);
var inst_24792 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24791) : f__$1.call(null,inst_24791));
var state_24794__$1 = state_24794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24794__$1,inst_24792);
} else {
return null;
}
}
});})(c__23956__auto__,f__$1))
;
return ((function (switch__23830__auto__,c__23956__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23831__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23831__auto____0 = (function (){
var statearr_24799 = [null,null,null,null,null,null,null];
(statearr_24799[(0)] = cljs$core$async$transduce_$_state_machine__23831__auto__);

(statearr_24799[(1)] = (1));

return statearr_24799;
});
var cljs$core$async$transduce_$_state_machine__23831__auto____1 = (function (state_24794){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24794);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24800){if((e24800 instanceof Object)){
var ex__23834__auto__ = e24800;
var statearr_24801_24803 = state_24794;
(statearr_24801_24803[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24794);

return cljs.core.cst$kw$recur;
} else {
throw e24800;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24804 = state_24794;
state_24794 = G__24804;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23831__auto__ = function(state_24794){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23831__auto____1.call(this,state_24794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23831__auto____0;
cljs$core$async$transduce_$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23831__auto____1;
return cljs$core$async$transduce_$_state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto__,f__$1))
})();
var state__23958__auto__ = (function (){var statearr_24802 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto__);

return statearr_24802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto__,f__$1))
);

return c__23956__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24805 = [];
var len__8739__auto___24857 = arguments.length;
var i__8740__auto___24858 = (0);
while(true){
if((i__8740__auto___24858 < len__8739__auto___24857)){
args24805.push((arguments[i__8740__auto___24858]));

var G__24859 = (i__8740__auto___24858 + (1));
i__8740__auto___24858 = G__24859;
continue;
} else {
}
break;
}

var G__24807 = args24805.length;
switch (G__24807) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24805.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23956__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto__){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto__){
return (function (state_24832){
var state_val_24833 = (state_24832[(1)]);
if((state_val_24833 === (7))){
var inst_24814 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
var statearr_24834_24861 = state_24832__$1;
(statearr_24834_24861[(2)] = inst_24814);

(statearr_24834_24861[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (1))){
var inst_24808 = cljs.core.seq(coll);
var inst_24809 = inst_24808;
var state_24832__$1 = (function (){var statearr_24835 = state_24832;
(statearr_24835[(7)] = inst_24809);

return statearr_24835;
})();
var statearr_24836_24862 = state_24832__$1;
(statearr_24836_24862[(2)] = null);

(statearr_24836_24862[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (4))){
var inst_24809 = (state_24832[(7)]);
var inst_24812 = cljs.core.first(inst_24809);
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24832__$1,(7),ch,inst_24812);
} else {
if((state_val_24833 === (13))){
var inst_24826 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
var statearr_24837_24863 = state_24832__$1;
(statearr_24837_24863[(2)] = inst_24826);

(statearr_24837_24863[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (6))){
var inst_24817 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
if(cljs.core.truth_(inst_24817)){
var statearr_24838_24864 = state_24832__$1;
(statearr_24838_24864[(1)] = (8));

} else {
var statearr_24839_24865 = state_24832__$1;
(statearr_24839_24865[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (3))){
var inst_24830 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24832__$1,inst_24830);
} else {
if((state_val_24833 === (12))){
var state_24832__$1 = state_24832;
var statearr_24840_24866 = state_24832__$1;
(statearr_24840_24866[(2)] = null);

(statearr_24840_24866[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (2))){
var inst_24809 = (state_24832[(7)]);
var state_24832__$1 = state_24832;
if(cljs.core.truth_(inst_24809)){
var statearr_24841_24867 = state_24832__$1;
(statearr_24841_24867[(1)] = (4));

} else {
var statearr_24842_24868 = state_24832__$1;
(statearr_24842_24868[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (11))){
var inst_24823 = cljs.core.async.close_BANG_(ch);
var state_24832__$1 = state_24832;
var statearr_24843_24869 = state_24832__$1;
(statearr_24843_24869[(2)] = inst_24823);

(statearr_24843_24869[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (9))){
var state_24832__$1 = state_24832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24844_24870 = state_24832__$1;
(statearr_24844_24870[(1)] = (11));

} else {
var statearr_24845_24871 = state_24832__$1;
(statearr_24845_24871[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (5))){
var inst_24809 = (state_24832[(7)]);
var state_24832__$1 = state_24832;
var statearr_24846_24872 = state_24832__$1;
(statearr_24846_24872[(2)] = inst_24809);

(statearr_24846_24872[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (10))){
var inst_24828 = (state_24832[(2)]);
var state_24832__$1 = state_24832;
var statearr_24847_24873 = state_24832__$1;
(statearr_24847_24873[(2)] = inst_24828);

(statearr_24847_24873[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24833 === (8))){
var inst_24809 = (state_24832[(7)]);
var inst_24819 = cljs.core.next(inst_24809);
var inst_24809__$1 = inst_24819;
var state_24832__$1 = (function (){var statearr_24848 = state_24832;
(statearr_24848[(7)] = inst_24809__$1);

return statearr_24848;
})();
var statearr_24849_24874 = state_24832__$1;
(statearr_24849_24874[(2)] = null);

(statearr_24849_24874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto__))
;
return ((function (switch__23830__auto__,c__23956__auto__){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_24853 = [null,null,null,null,null,null,null,null];
(statearr_24853[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_24853[(1)] = (1));

return statearr_24853;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_24832){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_24832);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e24854){if((e24854 instanceof Object)){
var ex__23834__auto__ = e24854;
var statearr_24855_24875 = state_24832;
(statearr_24855_24875[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24832);

return cljs.core.cst$kw$recur;
} else {
throw e24854;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__24876 = state_24832;
state_24832 = G__24876;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_24832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_24832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto__))
})();
var state__23958__auto__ = (function (){var statearr_24856 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_24856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto__);

return statearr_24856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto__))
);

return c__23956__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8236__auto__ = (((_ == null))?null:_);
var m__8237__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8237__auto__.call(null,_));
} else {
var m__8237__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8237__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8236__auto__ = (((m == null))?null:m);
var m__8237__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8237__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8237__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8237__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8236__auto__ = (((m == null))?null:m);
var m__8237__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8237__auto__.call(null,m,ch));
} else {
var m__8237__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8237__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8236__auto__ = (((m == null))?null:m);
var m__8237__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8237__auto__.call(null,m));
} else {
var m__8237__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8237__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__25105 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25105) : cljs.core.atom.call(null,G__25105));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25106 = (function (ch,cs,meta25107){
this.ch = ch;
this.cs = cs;
this.meta25107 = meta25107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25108,meta25107__$1){
var self__ = this;
var _25108__$1 = this;
return (new cljs.core.async.t_cljs$core$async25106(self__.ch,self__.cs,meta25107__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async25106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25108){
var self__ = this;
var _25108__$1 = this;
return self__.meta25107;
});})(cs))
;


cljs.core.async.t_cljs$core$async25106.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async25106.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25106.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25106.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25106.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25109_25333 = self__.cs;
var G__25110_25334 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25109_25333,G__25110_25334) : cljs.core.reset_BANG_.call(null,G__25109_25333,G__25110_25334));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25106.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25107], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25106";

cljs.core.async.t_cljs$core$async25106.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25106");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25106 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25106(ch__$1,cs__$1,meta25107){
return (new cljs.core.async.t_cljs$core$async25106(ch__$1,cs__$1,meta25107));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25106(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23956__auto___25335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___25335,cs,m,dchan,dctr,done){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___25335,cs,m,dchan,dctr,done){
return (function (state_25245){
var state_val_25246 = (state_25245[(1)]);
if((state_val_25246 === (7))){
var inst_25241 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25247_25336 = state_25245__$1;
(statearr_25247_25336[(2)] = inst_25241);

(statearr_25247_25336[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (20))){
var inst_25144 = (state_25245[(7)]);
var inst_25156 = cljs.core.first(inst_25144);
var inst_25157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25156,(0),null);
var inst_25158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25156,(1),null);
var state_25245__$1 = (function (){var statearr_25248 = state_25245;
(statearr_25248[(8)] = inst_25157);

return statearr_25248;
})();
if(cljs.core.truth_(inst_25158)){
var statearr_25249_25337 = state_25245__$1;
(statearr_25249_25337[(1)] = (22));

} else {
var statearr_25250_25338 = state_25245__$1;
(statearr_25250_25338[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (27))){
var inst_25186 = (state_25245[(9)]);
var inst_25113 = (state_25245[(10)]);
var inst_25188 = (state_25245[(11)]);
var inst_25193 = (state_25245[(12)]);
var inst_25193__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25186,inst_25188);
var inst_25194 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25193__$1,inst_25113,done);
var state_25245__$1 = (function (){var statearr_25251 = state_25245;
(statearr_25251[(12)] = inst_25193__$1);

return statearr_25251;
})();
if(cljs.core.truth_(inst_25194)){
var statearr_25252_25339 = state_25245__$1;
(statearr_25252_25339[(1)] = (30));

} else {
var statearr_25253_25340 = state_25245__$1;
(statearr_25253_25340[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (1))){
var state_25245__$1 = state_25245;
var statearr_25254_25341 = state_25245__$1;
(statearr_25254_25341[(2)] = null);

(statearr_25254_25341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (24))){
var inst_25144 = (state_25245[(7)]);
var inst_25163 = (state_25245[(2)]);
var inst_25164 = cljs.core.next(inst_25144);
var inst_25122 = inst_25164;
var inst_25123 = null;
var inst_25124 = (0);
var inst_25125 = (0);
var state_25245__$1 = (function (){var statearr_25255 = state_25245;
(statearr_25255[(13)] = inst_25124);

(statearr_25255[(14)] = inst_25125);

(statearr_25255[(15)] = inst_25163);

(statearr_25255[(16)] = inst_25123);

(statearr_25255[(17)] = inst_25122);

return statearr_25255;
})();
var statearr_25256_25342 = state_25245__$1;
(statearr_25256_25342[(2)] = null);

(statearr_25256_25342[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (39))){
var state_25245__$1 = state_25245;
var statearr_25260_25343 = state_25245__$1;
(statearr_25260_25343[(2)] = null);

(statearr_25260_25343[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (4))){
var inst_25113 = (state_25245[(10)]);
var inst_25113__$1 = (state_25245[(2)]);
var inst_25114 = (inst_25113__$1 == null);
var state_25245__$1 = (function (){var statearr_25261 = state_25245;
(statearr_25261[(10)] = inst_25113__$1);

return statearr_25261;
})();
if(cljs.core.truth_(inst_25114)){
var statearr_25262_25344 = state_25245__$1;
(statearr_25262_25344[(1)] = (5));

} else {
var statearr_25263_25345 = state_25245__$1;
(statearr_25263_25345[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (15))){
var inst_25124 = (state_25245[(13)]);
var inst_25125 = (state_25245[(14)]);
var inst_25123 = (state_25245[(16)]);
var inst_25122 = (state_25245[(17)]);
var inst_25140 = (state_25245[(2)]);
var inst_25141 = (inst_25125 + (1));
var tmp25257 = inst_25124;
var tmp25258 = inst_25123;
var tmp25259 = inst_25122;
var inst_25122__$1 = tmp25259;
var inst_25123__$1 = tmp25258;
var inst_25124__$1 = tmp25257;
var inst_25125__$1 = inst_25141;
var state_25245__$1 = (function (){var statearr_25264 = state_25245;
(statearr_25264[(13)] = inst_25124__$1);

(statearr_25264[(18)] = inst_25140);

(statearr_25264[(14)] = inst_25125__$1);

(statearr_25264[(16)] = inst_25123__$1);

(statearr_25264[(17)] = inst_25122__$1);

return statearr_25264;
})();
var statearr_25265_25346 = state_25245__$1;
(statearr_25265_25346[(2)] = null);

(statearr_25265_25346[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (21))){
var inst_25167 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25269_25347 = state_25245__$1;
(statearr_25269_25347[(2)] = inst_25167);

(statearr_25269_25347[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (31))){
var inst_25193 = (state_25245[(12)]);
var inst_25197 = done(null);
var inst_25198 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25193);
var state_25245__$1 = (function (){var statearr_25270 = state_25245;
(statearr_25270[(19)] = inst_25197);

return statearr_25270;
})();
var statearr_25271_25348 = state_25245__$1;
(statearr_25271_25348[(2)] = inst_25198);

(statearr_25271_25348[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (32))){
var inst_25186 = (state_25245[(9)]);
var inst_25188 = (state_25245[(11)]);
var inst_25185 = (state_25245[(20)]);
var inst_25187 = (state_25245[(21)]);
var inst_25200 = (state_25245[(2)]);
var inst_25201 = (inst_25188 + (1));
var tmp25266 = inst_25186;
var tmp25267 = inst_25185;
var tmp25268 = inst_25187;
var inst_25185__$1 = tmp25267;
var inst_25186__$1 = tmp25266;
var inst_25187__$1 = tmp25268;
var inst_25188__$1 = inst_25201;
var state_25245__$1 = (function (){var statearr_25272 = state_25245;
(statearr_25272[(9)] = inst_25186__$1);

(statearr_25272[(11)] = inst_25188__$1);

(statearr_25272[(20)] = inst_25185__$1);

(statearr_25272[(21)] = inst_25187__$1);

(statearr_25272[(22)] = inst_25200);

return statearr_25272;
})();
var statearr_25273_25349 = state_25245__$1;
(statearr_25273_25349[(2)] = null);

(statearr_25273_25349[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (40))){
var inst_25213 = (state_25245[(23)]);
var inst_25217 = done(null);
var inst_25218 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25213);
var state_25245__$1 = (function (){var statearr_25274 = state_25245;
(statearr_25274[(24)] = inst_25217);

return statearr_25274;
})();
var statearr_25275_25350 = state_25245__$1;
(statearr_25275_25350[(2)] = inst_25218);

(statearr_25275_25350[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (33))){
var inst_25204 = (state_25245[(25)]);
var inst_25206 = cljs.core.chunked_seq_QMARK_(inst_25204);
var state_25245__$1 = state_25245;
if(inst_25206){
var statearr_25276_25351 = state_25245__$1;
(statearr_25276_25351[(1)] = (36));

} else {
var statearr_25277_25352 = state_25245__$1;
(statearr_25277_25352[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (13))){
var inst_25134 = (state_25245[(26)]);
var inst_25137 = cljs.core.async.close_BANG_(inst_25134);
var state_25245__$1 = state_25245;
var statearr_25278_25353 = state_25245__$1;
(statearr_25278_25353[(2)] = inst_25137);

(statearr_25278_25353[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (22))){
var inst_25157 = (state_25245[(8)]);
var inst_25160 = cljs.core.async.close_BANG_(inst_25157);
var state_25245__$1 = state_25245;
var statearr_25279_25354 = state_25245__$1;
(statearr_25279_25354[(2)] = inst_25160);

(statearr_25279_25354[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (36))){
var inst_25204 = (state_25245[(25)]);
var inst_25208 = cljs.core.chunk_first(inst_25204);
var inst_25209 = cljs.core.chunk_rest(inst_25204);
var inst_25210 = cljs.core.count(inst_25208);
var inst_25185 = inst_25209;
var inst_25186 = inst_25208;
var inst_25187 = inst_25210;
var inst_25188 = (0);
var state_25245__$1 = (function (){var statearr_25280 = state_25245;
(statearr_25280[(9)] = inst_25186);

(statearr_25280[(11)] = inst_25188);

(statearr_25280[(20)] = inst_25185);

(statearr_25280[(21)] = inst_25187);

return statearr_25280;
})();
var statearr_25281_25355 = state_25245__$1;
(statearr_25281_25355[(2)] = null);

(statearr_25281_25355[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (41))){
var inst_25204 = (state_25245[(25)]);
var inst_25220 = (state_25245[(2)]);
var inst_25221 = cljs.core.next(inst_25204);
var inst_25185 = inst_25221;
var inst_25186 = null;
var inst_25187 = (0);
var inst_25188 = (0);
var state_25245__$1 = (function (){var statearr_25282 = state_25245;
(statearr_25282[(9)] = inst_25186);

(statearr_25282[(11)] = inst_25188);

(statearr_25282[(20)] = inst_25185);

(statearr_25282[(27)] = inst_25220);

(statearr_25282[(21)] = inst_25187);

return statearr_25282;
})();
var statearr_25283_25356 = state_25245__$1;
(statearr_25283_25356[(2)] = null);

(statearr_25283_25356[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (43))){
var state_25245__$1 = state_25245;
var statearr_25284_25357 = state_25245__$1;
(statearr_25284_25357[(2)] = null);

(statearr_25284_25357[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (29))){
var inst_25229 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25285_25358 = state_25245__$1;
(statearr_25285_25358[(2)] = inst_25229);

(statearr_25285_25358[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (44))){
var inst_25238 = (state_25245[(2)]);
var state_25245__$1 = (function (){var statearr_25286 = state_25245;
(statearr_25286[(28)] = inst_25238);

return statearr_25286;
})();
var statearr_25287_25359 = state_25245__$1;
(statearr_25287_25359[(2)] = null);

(statearr_25287_25359[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (6))){
var inst_25177 = (state_25245[(29)]);
var inst_25176 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25177__$1 = cljs.core.keys(inst_25176);
var inst_25178 = cljs.core.count(inst_25177__$1);
var inst_25179 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_25178) : cljs.core.reset_BANG_.call(null,dctr,inst_25178));
var inst_25184 = cljs.core.seq(inst_25177__$1);
var inst_25185 = inst_25184;
var inst_25186 = null;
var inst_25187 = (0);
var inst_25188 = (0);
var state_25245__$1 = (function (){var statearr_25288 = state_25245;
(statearr_25288[(9)] = inst_25186);

(statearr_25288[(11)] = inst_25188);

(statearr_25288[(29)] = inst_25177__$1);

(statearr_25288[(20)] = inst_25185);

(statearr_25288[(30)] = inst_25179);

(statearr_25288[(21)] = inst_25187);

return statearr_25288;
})();
var statearr_25289_25360 = state_25245__$1;
(statearr_25289_25360[(2)] = null);

(statearr_25289_25360[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (28))){
var inst_25204 = (state_25245[(25)]);
var inst_25185 = (state_25245[(20)]);
var inst_25204__$1 = cljs.core.seq(inst_25185);
var state_25245__$1 = (function (){var statearr_25290 = state_25245;
(statearr_25290[(25)] = inst_25204__$1);

return statearr_25290;
})();
if(inst_25204__$1){
var statearr_25291_25361 = state_25245__$1;
(statearr_25291_25361[(1)] = (33));

} else {
var statearr_25292_25362 = state_25245__$1;
(statearr_25292_25362[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (25))){
var inst_25188 = (state_25245[(11)]);
var inst_25187 = (state_25245[(21)]);
var inst_25190 = (inst_25188 < inst_25187);
var inst_25191 = inst_25190;
var state_25245__$1 = state_25245;
if(cljs.core.truth_(inst_25191)){
var statearr_25293_25363 = state_25245__$1;
(statearr_25293_25363[(1)] = (27));

} else {
var statearr_25294_25364 = state_25245__$1;
(statearr_25294_25364[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (34))){
var state_25245__$1 = state_25245;
var statearr_25295_25365 = state_25245__$1;
(statearr_25295_25365[(2)] = null);

(statearr_25295_25365[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (17))){
var state_25245__$1 = state_25245;
var statearr_25296_25366 = state_25245__$1;
(statearr_25296_25366[(2)] = null);

(statearr_25296_25366[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (3))){
var inst_25243 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25245__$1,inst_25243);
} else {
if((state_val_25246 === (12))){
var inst_25172 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25297_25367 = state_25245__$1;
(statearr_25297_25367[(2)] = inst_25172);

(statearr_25297_25367[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (2))){
var state_25245__$1 = state_25245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25245__$1,(4),ch);
} else {
if((state_val_25246 === (23))){
var state_25245__$1 = state_25245;
var statearr_25298_25368 = state_25245__$1;
(statearr_25298_25368[(2)] = null);

(statearr_25298_25368[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (35))){
var inst_25227 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25299_25369 = state_25245__$1;
(statearr_25299_25369[(2)] = inst_25227);

(statearr_25299_25369[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (19))){
var inst_25144 = (state_25245[(7)]);
var inst_25148 = cljs.core.chunk_first(inst_25144);
var inst_25149 = cljs.core.chunk_rest(inst_25144);
var inst_25150 = cljs.core.count(inst_25148);
var inst_25122 = inst_25149;
var inst_25123 = inst_25148;
var inst_25124 = inst_25150;
var inst_25125 = (0);
var state_25245__$1 = (function (){var statearr_25300 = state_25245;
(statearr_25300[(13)] = inst_25124);

(statearr_25300[(14)] = inst_25125);

(statearr_25300[(16)] = inst_25123);

(statearr_25300[(17)] = inst_25122);

return statearr_25300;
})();
var statearr_25301_25370 = state_25245__$1;
(statearr_25301_25370[(2)] = null);

(statearr_25301_25370[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (11))){
var inst_25144 = (state_25245[(7)]);
var inst_25122 = (state_25245[(17)]);
var inst_25144__$1 = cljs.core.seq(inst_25122);
var state_25245__$1 = (function (){var statearr_25302 = state_25245;
(statearr_25302[(7)] = inst_25144__$1);

return statearr_25302;
})();
if(inst_25144__$1){
var statearr_25303_25371 = state_25245__$1;
(statearr_25303_25371[(1)] = (16));

} else {
var statearr_25304_25372 = state_25245__$1;
(statearr_25304_25372[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (9))){
var inst_25174 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25305_25373 = state_25245__$1;
(statearr_25305_25373[(2)] = inst_25174);

(statearr_25305_25373[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (5))){
var inst_25120 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25121 = cljs.core.seq(inst_25120);
var inst_25122 = inst_25121;
var inst_25123 = null;
var inst_25124 = (0);
var inst_25125 = (0);
var state_25245__$1 = (function (){var statearr_25306 = state_25245;
(statearr_25306[(13)] = inst_25124);

(statearr_25306[(14)] = inst_25125);

(statearr_25306[(16)] = inst_25123);

(statearr_25306[(17)] = inst_25122);

return statearr_25306;
})();
var statearr_25307_25374 = state_25245__$1;
(statearr_25307_25374[(2)] = null);

(statearr_25307_25374[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (14))){
var state_25245__$1 = state_25245;
var statearr_25308_25375 = state_25245__$1;
(statearr_25308_25375[(2)] = null);

(statearr_25308_25375[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (45))){
var inst_25235 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25309_25376 = state_25245__$1;
(statearr_25309_25376[(2)] = inst_25235);

(statearr_25309_25376[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (26))){
var inst_25177 = (state_25245[(29)]);
var inst_25231 = (state_25245[(2)]);
var inst_25232 = cljs.core.seq(inst_25177);
var state_25245__$1 = (function (){var statearr_25310 = state_25245;
(statearr_25310[(31)] = inst_25231);

return statearr_25310;
})();
if(inst_25232){
var statearr_25311_25377 = state_25245__$1;
(statearr_25311_25377[(1)] = (42));

} else {
var statearr_25312_25378 = state_25245__$1;
(statearr_25312_25378[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (16))){
var inst_25144 = (state_25245[(7)]);
var inst_25146 = cljs.core.chunked_seq_QMARK_(inst_25144);
var state_25245__$1 = state_25245;
if(inst_25146){
var statearr_25313_25379 = state_25245__$1;
(statearr_25313_25379[(1)] = (19));

} else {
var statearr_25314_25380 = state_25245__$1;
(statearr_25314_25380[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (38))){
var inst_25224 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25315_25381 = state_25245__$1;
(statearr_25315_25381[(2)] = inst_25224);

(statearr_25315_25381[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (30))){
var state_25245__$1 = state_25245;
var statearr_25316_25382 = state_25245__$1;
(statearr_25316_25382[(2)] = null);

(statearr_25316_25382[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (10))){
var inst_25125 = (state_25245[(14)]);
var inst_25123 = (state_25245[(16)]);
var inst_25133 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25123,inst_25125);
var inst_25134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25133,(0),null);
var inst_25135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25133,(1),null);
var state_25245__$1 = (function (){var statearr_25317 = state_25245;
(statearr_25317[(26)] = inst_25134);

return statearr_25317;
})();
if(cljs.core.truth_(inst_25135)){
var statearr_25318_25383 = state_25245__$1;
(statearr_25318_25383[(1)] = (13));

} else {
var statearr_25319_25384 = state_25245__$1;
(statearr_25319_25384[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (18))){
var inst_25170 = (state_25245[(2)]);
var state_25245__$1 = state_25245;
var statearr_25320_25385 = state_25245__$1;
(statearr_25320_25385[(2)] = inst_25170);

(statearr_25320_25385[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (42))){
var state_25245__$1 = state_25245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25245__$1,(45),dchan);
} else {
if((state_val_25246 === (37))){
var inst_25204 = (state_25245[(25)]);
var inst_25113 = (state_25245[(10)]);
var inst_25213 = (state_25245[(23)]);
var inst_25213__$1 = cljs.core.first(inst_25204);
var inst_25214 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25213__$1,inst_25113,done);
var state_25245__$1 = (function (){var statearr_25321 = state_25245;
(statearr_25321[(23)] = inst_25213__$1);

return statearr_25321;
})();
if(cljs.core.truth_(inst_25214)){
var statearr_25322_25386 = state_25245__$1;
(statearr_25322_25386[(1)] = (39));

} else {
var statearr_25323_25387 = state_25245__$1;
(statearr_25323_25387[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25246 === (8))){
var inst_25124 = (state_25245[(13)]);
var inst_25125 = (state_25245[(14)]);
var inst_25127 = (inst_25125 < inst_25124);
var inst_25128 = inst_25127;
var state_25245__$1 = state_25245;
if(cljs.core.truth_(inst_25128)){
var statearr_25324_25388 = state_25245__$1;
(statearr_25324_25388[(1)] = (10));

} else {
var statearr_25325_25389 = state_25245__$1;
(statearr_25325_25389[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___25335,cs,m,dchan,dctr,done))
;
return ((function (switch__23830__auto__,c__23956__auto___25335,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23831__auto__ = null;
var cljs$core$async$mult_$_state_machine__23831__auto____0 = (function (){
var statearr_25329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25329[(0)] = cljs$core$async$mult_$_state_machine__23831__auto__);

(statearr_25329[(1)] = (1));

return statearr_25329;
});
var cljs$core$async$mult_$_state_machine__23831__auto____1 = (function (state_25245){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_25245);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e25330){if((e25330 instanceof Object)){
var ex__23834__auto__ = e25330;
var statearr_25331_25390 = state_25245;
(statearr_25331_25390[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25245);

return cljs.core.cst$kw$recur;
} else {
throw e25330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__25391 = state_25245;
state_25245 = G__25391;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23831__auto__ = function(state_25245){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23831__auto____1.call(this,state_25245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23831__auto____0;
cljs$core$async$mult_$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23831__auto____1;
return cljs$core$async$mult_$_state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___25335,cs,m,dchan,dctr,done))
})();
var state__23958__auto__ = (function (){var statearr_25332 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_25332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___25335);

return statearr_25332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___25335,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25392 = [];
var len__8739__auto___25395 = arguments.length;
var i__8740__auto___25396 = (0);
while(true){
if((i__8740__auto___25396 < len__8739__auto___25395)){
args25392.push((arguments[i__8740__auto___25396]));

var G__25397 = (i__8740__auto___25396 + (1));
i__8740__auto___25396 = G__25397;
continue;
} else {
}
break;
}

var G__25394 = args25392.length;
switch (G__25394) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25392.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8236__auto__ = (((m == null))?null:m);
var m__8237__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8237__auto__.call(null,m,ch));
} else {
var m__8237__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8237__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8236__auto__ = (((m == null))?null:m);
var m__8237__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8237__auto__.call(null,m,ch));
} else {
var m__8237__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8237__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8236__auto__ = (((m == null))?null:m);
var m__8237__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8237__auto__.call(null,m));
} else {
var m__8237__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8237__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8236__auto__ = (((m == null))?null:m);
var m__8237__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8237__auto__.call(null,m,state_map));
} else {
var m__8237__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8237__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8236__auto__ = (((m == null))?null:m);
var m__8237__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8237__auto__.call(null,m,mode));
} else {
var m__8237__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8237__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8746__auto__ = [];
var len__8739__auto___25409 = arguments.length;
var i__8740__auto___25410 = (0);
while(true){
if((i__8740__auto___25410 < len__8739__auto___25409)){
args__8746__auto__.push((arguments[i__8740__auto___25410]));

var G__25411 = (i__8740__auto___25410 + (1));
i__8740__auto___25410 = G__25411;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((3) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8747__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25403){
var map__25404 = p__25403;
var map__25404__$1 = ((((!((map__25404 == null)))?((((map__25404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25404):map__25404);
var opts = map__25404__$1;
var statearr_25406_25412 = state;
(statearr_25406_25412[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__25404,map__25404__$1,opts){
return (function (val){
var statearr_25407_25413 = state;
(statearr_25407_25413[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25404,map__25404__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_25408_25414 = state;
(statearr_25408_25414[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25399){
var G__25400 = cljs.core.first(seq25399);
var seq25399__$1 = cljs.core.next(seq25399);
var G__25401 = cljs.core.first(seq25399__$1);
var seq25399__$2 = cljs.core.next(seq25399__$1);
var G__25402 = cljs.core.first(seq25399__$2);
var seq25399__$3 = cljs.core.next(seq25399__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25400,G__25401,G__25402,seq25399__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__25586 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25586) : cljs.core.atom.call(null,G__25586));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__25587 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25587) : cljs.core.atom.call(null,G__25587));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25588 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25589){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25589 = meta25589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25590,meta25589__$1){
var self__ = this;
var _25590__$1 = this;
return (new cljs.core.async.t_cljs$core$async25588(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25589__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25590){
var self__ = this;
var _25590__$1 = this;
return self__.meta25589;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25591_25757 = self__.cs;
var G__25592_25758 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25591_25757,G__25592_25758) : cljs.core.reset_BANG_.call(null,G__25591_25757,G__25592_25758));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25588.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25588.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25589], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25588";

cljs.core.async.t_cljs$core$async25588.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25588");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25588 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25588(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25589){
return (new cljs.core.async.t_cljs$core$async25588(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25589));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25588(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23956__auto___25759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___25759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___25759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25694){
var state_val_25695 = (state_25694[(1)]);
if((state_val_25695 === (7))){
var inst_25609 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
var statearr_25696_25760 = state_25694__$1;
(statearr_25696_25760[(2)] = inst_25609);

(statearr_25696_25760[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (20))){
var inst_25621 = (state_25694[(7)]);
var state_25694__$1 = state_25694;
var statearr_25697_25761 = state_25694__$1;
(statearr_25697_25761[(2)] = inst_25621);

(statearr_25697_25761[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (27))){
var state_25694__$1 = state_25694;
var statearr_25698_25762 = state_25694__$1;
(statearr_25698_25762[(2)] = null);

(statearr_25698_25762[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (1))){
var inst_25596 = (state_25694[(8)]);
var inst_25596__$1 = calc_state();
var inst_25598 = (inst_25596__$1 == null);
var inst_25599 = cljs.core.not(inst_25598);
var state_25694__$1 = (function (){var statearr_25699 = state_25694;
(statearr_25699[(8)] = inst_25596__$1);

return statearr_25699;
})();
if(inst_25599){
var statearr_25700_25763 = state_25694__$1;
(statearr_25700_25763[(1)] = (2));

} else {
var statearr_25701_25764 = state_25694__$1;
(statearr_25701_25764[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (24))){
var inst_25668 = (state_25694[(9)]);
var inst_25645 = (state_25694[(10)]);
var inst_25654 = (state_25694[(11)]);
var inst_25668__$1 = (inst_25645.cljs$core$IFn$_invoke$arity$1 ? inst_25645.cljs$core$IFn$_invoke$arity$1(inst_25654) : inst_25645.call(null,inst_25654));
var state_25694__$1 = (function (){var statearr_25702 = state_25694;
(statearr_25702[(9)] = inst_25668__$1);

return statearr_25702;
})();
if(cljs.core.truth_(inst_25668__$1)){
var statearr_25703_25765 = state_25694__$1;
(statearr_25703_25765[(1)] = (29));

} else {
var statearr_25704_25766 = state_25694__$1;
(statearr_25704_25766[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (4))){
var inst_25612 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
if(cljs.core.truth_(inst_25612)){
var statearr_25705_25767 = state_25694__$1;
(statearr_25705_25767[(1)] = (8));

} else {
var statearr_25706_25768 = state_25694__$1;
(statearr_25706_25768[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (15))){
var inst_25639 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
if(cljs.core.truth_(inst_25639)){
var statearr_25707_25769 = state_25694__$1;
(statearr_25707_25769[(1)] = (19));

} else {
var statearr_25708_25770 = state_25694__$1;
(statearr_25708_25770[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (21))){
var inst_25644 = (state_25694[(12)]);
var inst_25644__$1 = (state_25694[(2)]);
var inst_25645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25644__$1,cljs.core.cst$kw$solos);
var inst_25646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25644__$1,cljs.core.cst$kw$mutes);
var inst_25647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25644__$1,cljs.core.cst$kw$reads);
var state_25694__$1 = (function (){var statearr_25709 = state_25694;
(statearr_25709[(12)] = inst_25644__$1);

(statearr_25709[(13)] = inst_25646);

(statearr_25709[(10)] = inst_25645);

return statearr_25709;
})();
return cljs.core.async.ioc_alts_BANG_(state_25694__$1,(22),inst_25647);
} else {
if((state_val_25695 === (31))){
var inst_25676 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
if(cljs.core.truth_(inst_25676)){
var statearr_25710_25771 = state_25694__$1;
(statearr_25710_25771[(1)] = (32));

} else {
var statearr_25711_25772 = state_25694__$1;
(statearr_25711_25772[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (32))){
var inst_25653 = (state_25694[(14)]);
var state_25694__$1 = state_25694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25694__$1,(35),out,inst_25653);
} else {
if((state_val_25695 === (33))){
var inst_25644 = (state_25694[(12)]);
var inst_25621 = inst_25644;
var state_25694__$1 = (function (){var statearr_25712 = state_25694;
(statearr_25712[(7)] = inst_25621);

return statearr_25712;
})();
var statearr_25713_25773 = state_25694__$1;
(statearr_25713_25773[(2)] = null);

(statearr_25713_25773[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (13))){
var inst_25621 = (state_25694[(7)]);
var inst_25628 = inst_25621.cljs$lang$protocol_mask$partition0$;
var inst_25629 = (inst_25628 & (64));
var inst_25630 = inst_25621.cljs$core$ISeq$;
var inst_25631 = (cljs.core.PROTOCOL_SENTINEL === inst_25630);
var inst_25632 = (inst_25629) || (inst_25631);
var state_25694__$1 = state_25694;
if(cljs.core.truth_(inst_25632)){
var statearr_25714_25774 = state_25694__$1;
(statearr_25714_25774[(1)] = (16));

} else {
var statearr_25715_25775 = state_25694__$1;
(statearr_25715_25775[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (22))){
var inst_25653 = (state_25694[(14)]);
var inst_25654 = (state_25694[(11)]);
var inst_25652 = (state_25694[(2)]);
var inst_25653__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25652,(0),null);
var inst_25654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25652,(1),null);
var inst_25655 = (inst_25653__$1 == null);
var inst_25656 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25654__$1,change);
var inst_25657 = (inst_25655) || (inst_25656);
var state_25694__$1 = (function (){var statearr_25716 = state_25694;
(statearr_25716[(14)] = inst_25653__$1);

(statearr_25716[(11)] = inst_25654__$1);

return statearr_25716;
})();
if(cljs.core.truth_(inst_25657)){
var statearr_25717_25776 = state_25694__$1;
(statearr_25717_25776[(1)] = (23));

} else {
var statearr_25718_25777 = state_25694__$1;
(statearr_25718_25777[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (36))){
var inst_25644 = (state_25694[(12)]);
var inst_25621 = inst_25644;
var state_25694__$1 = (function (){var statearr_25719 = state_25694;
(statearr_25719[(7)] = inst_25621);

return statearr_25719;
})();
var statearr_25720_25778 = state_25694__$1;
(statearr_25720_25778[(2)] = null);

(statearr_25720_25778[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (29))){
var inst_25668 = (state_25694[(9)]);
var state_25694__$1 = state_25694;
var statearr_25721_25779 = state_25694__$1;
(statearr_25721_25779[(2)] = inst_25668);

(statearr_25721_25779[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (6))){
var state_25694__$1 = state_25694;
var statearr_25722_25780 = state_25694__$1;
(statearr_25722_25780[(2)] = false);

(statearr_25722_25780[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (28))){
var inst_25664 = (state_25694[(2)]);
var inst_25665 = calc_state();
var inst_25621 = inst_25665;
var state_25694__$1 = (function (){var statearr_25723 = state_25694;
(statearr_25723[(15)] = inst_25664);

(statearr_25723[(7)] = inst_25621);

return statearr_25723;
})();
var statearr_25724_25781 = state_25694__$1;
(statearr_25724_25781[(2)] = null);

(statearr_25724_25781[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (25))){
var inst_25690 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
var statearr_25725_25782 = state_25694__$1;
(statearr_25725_25782[(2)] = inst_25690);

(statearr_25725_25782[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (34))){
var inst_25688 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
var statearr_25726_25783 = state_25694__$1;
(statearr_25726_25783[(2)] = inst_25688);

(statearr_25726_25783[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (17))){
var state_25694__$1 = state_25694;
var statearr_25727_25784 = state_25694__$1;
(statearr_25727_25784[(2)] = false);

(statearr_25727_25784[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (3))){
var state_25694__$1 = state_25694;
var statearr_25728_25785 = state_25694__$1;
(statearr_25728_25785[(2)] = false);

(statearr_25728_25785[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (12))){
var inst_25692 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25694__$1,inst_25692);
} else {
if((state_val_25695 === (2))){
var inst_25596 = (state_25694[(8)]);
var inst_25601 = inst_25596.cljs$lang$protocol_mask$partition0$;
var inst_25602 = (inst_25601 & (64));
var inst_25603 = inst_25596.cljs$core$ISeq$;
var inst_25604 = (cljs.core.PROTOCOL_SENTINEL === inst_25603);
var inst_25605 = (inst_25602) || (inst_25604);
var state_25694__$1 = state_25694;
if(cljs.core.truth_(inst_25605)){
var statearr_25729_25786 = state_25694__$1;
(statearr_25729_25786[(1)] = (5));

} else {
var statearr_25730_25787 = state_25694__$1;
(statearr_25730_25787[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (23))){
var inst_25653 = (state_25694[(14)]);
var inst_25659 = (inst_25653 == null);
var state_25694__$1 = state_25694;
if(cljs.core.truth_(inst_25659)){
var statearr_25731_25788 = state_25694__$1;
(statearr_25731_25788[(1)] = (26));

} else {
var statearr_25732_25789 = state_25694__$1;
(statearr_25732_25789[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (35))){
var inst_25679 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
if(cljs.core.truth_(inst_25679)){
var statearr_25733_25790 = state_25694__$1;
(statearr_25733_25790[(1)] = (36));

} else {
var statearr_25734_25791 = state_25694__$1;
(statearr_25734_25791[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (19))){
var inst_25621 = (state_25694[(7)]);
var inst_25641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25621);
var state_25694__$1 = state_25694;
var statearr_25735_25792 = state_25694__$1;
(statearr_25735_25792[(2)] = inst_25641);

(statearr_25735_25792[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (11))){
var inst_25621 = (state_25694[(7)]);
var inst_25625 = (inst_25621 == null);
var inst_25626 = cljs.core.not(inst_25625);
var state_25694__$1 = state_25694;
if(inst_25626){
var statearr_25736_25793 = state_25694__$1;
(statearr_25736_25793[(1)] = (13));

} else {
var statearr_25737_25794 = state_25694__$1;
(statearr_25737_25794[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (9))){
var inst_25596 = (state_25694[(8)]);
var state_25694__$1 = state_25694;
var statearr_25738_25795 = state_25694__$1;
(statearr_25738_25795[(2)] = inst_25596);

(statearr_25738_25795[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (5))){
var state_25694__$1 = state_25694;
var statearr_25739_25796 = state_25694__$1;
(statearr_25739_25796[(2)] = true);

(statearr_25739_25796[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (14))){
var state_25694__$1 = state_25694;
var statearr_25740_25797 = state_25694__$1;
(statearr_25740_25797[(2)] = false);

(statearr_25740_25797[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (26))){
var inst_25654 = (state_25694[(11)]);
var inst_25661 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25654);
var state_25694__$1 = state_25694;
var statearr_25741_25798 = state_25694__$1;
(statearr_25741_25798[(2)] = inst_25661);

(statearr_25741_25798[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (16))){
var state_25694__$1 = state_25694;
var statearr_25742_25799 = state_25694__$1;
(statearr_25742_25799[(2)] = true);

(statearr_25742_25799[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (38))){
var inst_25684 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
var statearr_25743_25800 = state_25694__$1;
(statearr_25743_25800[(2)] = inst_25684);

(statearr_25743_25800[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (30))){
var inst_25646 = (state_25694[(13)]);
var inst_25645 = (state_25694[(10)]);
var inst_25654 = (state_25694[(11)]);
var inst_25671 = cljs.core.empty_QMARK_(inst_25645);
var inst_25672 = (inst_25646.cljs$core$IFn$_invoke$arity$1 ? inst_25646.cljs$core$IFn$_invoke$arity$1(inst_25654) : inst_25646.call(null,inst_25654));
var inst_25673 = cljs.core.not(inst_25672);
var inst_25674 = (inst_25671) && (inst_25673);
var state_25694__$1 = state_25694;
var statearr_25744_25801 = state_25694__$1;
(statearr_25744_25801[(2)] = inst_25674);

(statearr_25744_25801[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (10))){
var inst_25596 = (state_25694[(8)]);
var inst_25617 = (state_25694[(2)]);
var inst_25618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25617,cljs.core.cst$kw$solos);
var inst_25619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25617,cljs.core.cst$kw$mutes);
var inst_25620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25617,cljs.core.cst$kw$reads);
var inst_25621 = inst_25596;
var state_25694__$1 = (function (){var statearr_25745 = state_25694;
(statearr_25745[(16)] = inst_25619);

(statearr_25745[(17)] = inst_25618);

(statearr_25745[(18)] = inst_25620);

(statearr_25745[(7)] = inst_25621);

return statearr_25745;
})();
var statearr_25746_25802 = state_25694__$1;
(statearr_25746_25802[(2)] = null);

(statearr_25746_25802[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (18))){
var inst_25636 = (state_25694[(2)]);
var state_25694__$1 = state_25694;
var statearr_25747_25803 = state_25694__$1;
(statearr_25747_25803[(2)] = inst_25636);

(statearr_25747_25803[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (37))){
var state_25694__$1 = state_25694;
var statearr_25748_25804 = state_25694__$1;
(statearr_25748_25804[(2)] = null);

(statearr_25748_25804[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25695 === (8))){
var inst_25596 = (state_25694[(8)]);
var inst_25614 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25596);
var state_25694__$1 = state_25694;
var statearr_25749_25805 = state_25694__$1;
(statearr_25749_25805[(2)] = inst_25614);

(statearr_25749_25805[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___25759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23830__auto__,c__23956__auto___25759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23831__auto__ = null;
var cljs$core$async$mix_$_state_machine__23831__auto____0 = (function (){
var statearr_25753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25753[(0)] = cljs$core$async$mix_$_state_machine__23831__auto__);

(statearr_25753[(1)] = (1));

return statearr_25753;
});
var cljs$core$async$mix_$_state_machine__23831__auto____1 = (function (state_25694){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_25694);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e25754){if((e25754 instanceof Object)){
var ex__23834__auto__ = e25754;
var statearr_25755_25806 = state_25694;
(statearr_25755_25806[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25694);

return cljs.core.cst$kw$recur;
} else {
throw e25754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__25807 = state_25694;
state_25694 = G__25807;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23831__auto__ = function(state_25694){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23831__auto____1.call(this,state_25694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23831__auto____0;
cljs$core$async$mix_$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23831__auto____1;
return cljs$core$async$mix_$_state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___25759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23958__auto__ = (function (){var statearr_25756 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_25756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___25759);

return statearr_25756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___25759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8236__auto__ = (((p == null))?null:p);
var m__8237__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8237__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8237__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8237__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8236__auto__ = (((p == null))?null:p);
var m__8237__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8237__auto__.call(null,p,v,ch));
} else {
var m__8237__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8237__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25808 = [];
var len__8739__auto___25811 = arguments.length;
var i__8740__auto___25812 = (0);
while(true){
if((i__8740__auto___25812 < len__8739__auto___25811)){
args25808.push((arguments[i__8740__auto___25812]));

var G__25813 = (i__8740__auto___25812 + (1));
i__8740__auto___25812 = G__25813;
continue;
} else {
}
break;
}

var G__25810 = args25808.length;
switch (G__25810) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25808.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8236__auto__ = (((p == null))?null:p);
var m__8237__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8237__auto__.call(null,p));
} else {
var m__8237__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8237__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8236__auto__ = (((p == null))?null:p);
var m__8237__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8236__auto__)]);
if(!((m__8237__auto__ == null))){
return (m__8237__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8237__auto__.call(null,p,v));
} else {
var m__8237__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8237__auto____$1 == null))){
return (m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8237__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8237__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25816 = [];
var len__8739__auto___25944 = arguments.length;
var i__8740__auto___25945 = (0);
while(true){
if((i__8740__auto___25945 < len__8739__auto___25944)){
args25816.push((arguments[i__8740__auto___25945]));

var G__25946 = (i__8740__auto___25945 + (1));
i__8740__auto___25945 = G__25946;
continue;
} else {
}
break;
}

var G__25818 = args25816.length;
switch (G__25818) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25816.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__25819 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25819) : cljs.core.atom.call(null,G__25819));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7523__auto__,mults){
return (function (p1__25815_SHARP_){
if(cljs.core.truth_((p1__25815_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25815_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25815_SHARP_.call(null,topic)))){
return p1__25815_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25815_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7523__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25820 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25821){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25821 = meta25821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25822,meta25821__$1){
var self__ = this;
var _25822__$1 = this;
return (new cljs.core.async.t_cljs$core$async25820(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25821__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25822){
var self__ = this;
var _25822__$1 = this;
return self__.meta25821;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25823 = self__.mults;
var G__25824 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25823,G__25824) : cljs.core.reset_BANG_.call(null,G__25823,G__25824));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25820.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25820.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25821], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25820";

cljs.core.async.t_cljs$core$async25820.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25820");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25820 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25820(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25821){
return (new cljs.core.async.t_cljs$core$async25820(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25821));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25820(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23956__auto___25948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___25948,mults,ensure_mult,p){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___25948,mults,ensure_mult,p){
return (function (state_25896){
var state_val_25897 = (state_25896[(1)]);
if((state_val_25897 === (7))){
var inst_25892 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25898_25949 = state_25896__$1;
(statearr_25898_25949[(2)] = inst_25892);

(statearr_25898_25949[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (20))){
var state_25896__$1 = state_25896;
var statearr_25899_25950 = state_25896__$1;
(statearr_25899_25950[(2)] = null);

(statearr_25899_25950[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (1))){
var state_25896__$1 = state_25896;
var statearr_25900_25951 = state_25896__$1;
(statearr_25900_25951[(2)] = null);

(statearr_25900_25951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (24))){
var inst_25875 = (state_25896[(7)]);
var inst_25884 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25875);
var state_25896__$1 = state_25896;
var statearr_25901_25952 = state_25896__$1;
(statearr_25901_25952[(2)] = inst_25884);

(statearr_25901_25952[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (4))){
var inst_25827 = (state_25896[(8)]);
var inst_25827__$1 = (state_25896[(2)]);
var inst_25828 = (inst_25827__$1 == null);
var state_25896__$1 = (function (){var statearr_25902 = state_25896;
(statearr_25902[(8)] = inst_25827__$1);

return statearr_25902;
})();
if(cljs.core.truth_(inst_25828)){
var statearr_25903_25953 = state_25896__$1;
(statearr_25903_25953[(1)] = (5));

} else {
var statearr_25904_25954 = state_25896__$1;
(statearr_25904_25954[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (15))){
var inst_25869 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25905_25955 = state_25896__$1;
(statearr_25905_25955[(2)] = inst_25869);

(statearr_25905_25955[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (21))){
var inst_25889 = (state_25896[(2)]);
var state_25896__$1 = (function (){var statearr_25906 = state_25896;
(statearr_25906[(9)] = inst_25889);

return statearr_25906;
})();
var statearr_25907_25956 = state_25896__$1;
(statearr_25907_25956[(2)] = null);

(statearr_25907_25956[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (13))){
var inst_25851 = (state_25896[(10)]);
var inst_25853 = cljs.core.chunked_seq_QMARK_(inst_25851);
var state_25896__$1 = state_25896;
if(inst_25853){
var statearr_25908_25957 = state_25896__$1;
(statearr_25908_25957[(1)] = (16));

} else {
var statearr_25909_25958 = state_25896__$1;
(statearr_25909_25958[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (22))){
var inst_25881 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
if(cljs.core.truth_(inst_25881)){
var statearr_25910_25959 = state_25896__$1;
(statearr_25910_25959[(1)] = (23));

} else {
var statearr_25911_25960 = state_25896__$1;
(statearr_25911_25960[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (6))){
var inst_25875 = (state_25896[(7)]);
var inst_25827 = (state_25896[(8)]);
var inst_25877 = (state_25896[(11)]);
var inst_25875__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25827) : topic_fn.call(null,inst_25827));
var inst_25876 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25877__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25876,inst_25875__$1);
var state_25896__$1 = (function (){var statearr_25912 = state_25896;
(statearr_25912[(7)] = inst_25875__$1);

(statearr_25912[(11)] = inst_25877__$1);

return statearr_25912;
})();
if(cljs.core.truth_(inst_25877__$1)){
var statearr_25913_25961 = state_25896__$1;
(statearr_25913_25961[(1)] = (19));

} else {
var statearr_25914_25962 = state_25896__$1;
(statearr_25914_25962[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (25))){
var inst_25886 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25915_25963 = state_25896__$1;
(statearr_25915_25963[(2)] = inst_25886);

(statearr_25915_25963[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (17))){
var inst_25851 = (state_25896[(10)]);
var inst_25860 = cljs.core.first(inst_25851);
var inst_25861 = cljs.core.async.muxch_STAR_(inst_25860);
var inst_25862 = cljs.core.async.close_BANG_(inst_25861);
var inst_25863 = cljs.core.next(inst_25851);
var inst_25837 = inst_25863;
var inst_25838 = null;
var inst_25839 = (0);
var inst_25840 = (0);
var state_25896__$1 = (function (){var statearr_25916 = state_25896;
(statearr_25916[(12)] = inst_25839);

(statearr_25916[(13)] = inst_25840);

(statearr_25916[(14)] = inst_25838);

(statearr_25916[(15)] = inst_25837);

(statearr_25916[(16)] = inst_25862);

return statearr_25916;
})();
var statearr_25917_25964 = state_25896__$1;
(statearr_25917_25964[(2)] = null);

(statearr_25917_25964[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (3))){
var inst_25894 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25896__$1,inst_25894);
} else {
if((state_val_25897 === (12))){
var inst_25871 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25918_25965 = state_25896__$1;
(statearr_25918_25965[(2)] = inst_25871);

(statearr_25918_25965[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (2))){
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25896__$1,(4),ch);
} else {
if((state_val_25897 === (23))){
var state_25896__$1 = state_25896;
var statearr_25919_25966 = state_25896__$1;
(statearr_25919_25966[(2)] = null);

(statearr_25919_25966[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (19))){
var inst_25827 = (state_25896[(8)]);
var inst_25877 = (state_25896[(11)]);
var inst_25879 = cljs.core.async.muxch_STAR_(inst_25877);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25896__$1,(22),inst_25879,inst_25827);
} else {
if((state_val_25897 === (11))){
var inst_25851 = (state_25896[(10)]);
var inst_25837 = (state_25896[(15)]);
var inst_25851__$1 = cljs.core.seq(inst_25837);
var state_25896__$1 = (function (){var statearr_25920 = state_25896;
(statearr_25920[(10)] = inst_25851__$1);

return statearr_25920;
})();
if(inst_25851__$1){
var statearr_25921_25967 = state_25896__$1;
(statearr_25921_25967[(1)] = (13));

} else {
var statearr_25922_25968 = state_25896__$1;
(statearr_25922_25968[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (9))){
var inst_25873 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25923_25969 = state_25896__$1;
(statearr_25923_25969[(2)] = inst_25873);

(statearr_25923_25969[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (5))){
var inst_25834 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25835 = cljs.core.vals(inst_25834);
var inst_25836 = cljs.core.seq(inst_25835);
var inst_25837 = inst_25836;
var inst_25838 = null;
var inst_25839 = (0);
var inst_25840 = (0);
var state_25896__$1 = (function (){var statearr_25924 = state_25896;
(statearr_25924[(12)] = inst_25839);

(statearr_25924[(13)] = inst_25840);

(statearr_25924[(14)] = inst_25838);

(statearr_25924[(15)] = inst_25837);

return statearr_25924;
})();
var statearr_25925_25970 = state_25896__$1;
(statearr_25925_25970[(2)] = null);

(statearr_25925_25970[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (14))){
var state_25896__$1 = state_25896;
var statearr_25929_25971 = state_25896__$1;
(statearr_25929_25971[(2)] = null);

(statearr_25929_25971[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (16))){
var inst_25851 = (state_25896[(10)]);
var inst_25855 = cljs.core.chunk_first(inst_25851);
var inst_25856 = cljs.core.chunk_rest(inst_25851);
var inst_25857 = cljs.core.count(inst_25855);
var inst_25837 = inst_25856;
var inst_25838 = inst_25855;
var inst_25839 = inst_25857;
var inst_25840 = (0);
var state_25896__$1 = (function (){var statearr_25930 = state_25896;
(statearr_25930[(12)] = inst_25839);

(statearr_25930[(13)] = inst_25840);

(statearr_25930[(14)] = inst_25838);

(statearr_25930[(15)] = inst_25837);

return statearr_25930;
})();
var statearr_25931_25972 = state_25896__$1;
(statearr_25931_25972[(2)] = null);

(statearr_25931_25972[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (10))){
var inst_25839 = (state_25896[(12)]);
var inst_25840 = (state_25896[(13)]);
var inst_25838 = (state_25896[(14)]);
var inst_25837 = (state_25896[(15)]);
var inst_25845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25838,inst_25840);
var inst_25846 = cljs.core.async.muxch_STAR_(inst_25845);
var inst_25847 = cljs.core.async.close_BANG_(inst_25846);
var inst_25848 = (inst_25840 + (1));
var tmp25926 = inst_25839;
var tmp25927 = inst_25838;
var tmp25928 = inst_25837;
var inst_25837__$1 = tmp25928;
var inst_25838__$1 = tmp25927;
var inst_25839__$1 = tmp25926;
var inst_25840__$1 = inst_25848;
var state_25896__$1 = (function (){var statearr_25932 = state_25896;
(statearr_25932[(12)] = inst_25839__$1);

(statearr_25932[(17)] = inst_25847);

(statearr_25932[(13)] = inst_25840__$1);

(statearr_25932[(14)] = inst_25838__$1);

(statearr_25932[(15)] = inst_25837__$1);

return statearr_25932;
})();
var statearr_25933_25973 = state_25896__$1;
(statearr_25933_25973[(2)] = null);

(statearr_25933_25973[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (18))){
var inst_25866 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25934_25974 = state_25896__$1;
(statearr_25934_25974[(2)] = inst_25866);

(statearr_25934_25974[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25897 === (8))){
var inst_25839 = (state_25896[(12)]);
var inst_25840 = (state_25896[(13)]);
var inst_25842 = (inst_25840 < inst_25839);
var inst_25843 = inst_25842;
var state_25896__$1 = state_25896;
if(cljs.core.truth_(inst_25843)){
var statearr_25935_25975 = state_25896__$1;
(statearr_25935_25975[(1)] = (10));

} else {
var statearr_25936_25976 = state_25896__$1;
(statearr_25936_25976[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___25948,mults,ensure_mult,p))
;
return ((function (switch__23830__auto__,c__23956__auto___25948,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_25940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25940[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_25940[(1)] = (1));

return statearr_25940;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_25896){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_25896);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e25941){if((e25941 instanceof Object)){
var ex__23834__auto__ = e25941;
var statearr_25942_25977 = state_25896;
(statearr_25942_25977[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25896);

return cljs.core.cst$kw$recur;
} else {
throw e25941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__25978 = state_25896;
state_25896 = G__25978;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_25896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_25896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___25948,mults,ensure_mult,p))
})();
var state__23958__auto__ = (function (){var statearr_25943 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_25943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___25948);

return statearr_25943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___25948,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25979 = [];
var len__8739__auto___25982 = arguments.length;
var i__8740__auto___25983 = (0);
while(true){
if((i__8740__auto___25983 < len__8739__auto___25982)){
args25979.push((arguments[i__8740__auto___25983]));

var G__25984 = (i__8740__auto___25983 + (1));
i__8740__auto___25983 = G__25984;
continue;
} else {
}
break;
}

var G__25981 = args25979.length;
switch (G__25981) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25979.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25986 = [];
var len__8739__auto___25989 = arguments.length;
var i__8740__auto___25990 = (0);
while(true){
if((i__8740__auto___25990 < len__8739__auto___25989)){
args25986.push((arguments[i__8740__auto___25990]));

var G__25991 = (i__8740__auto___25990 + (1));
i__8740__auto___25990 = G__25991;
continue;
} else {
}
break;
}

var G__25988 = args25986.length;
switch (G__25988) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25986.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25993 = [];
var len__8739__auto___26064 = arguments.length;
var i__8740__auto___26065 = (0);
while(true){
if((i__8740__auto___26065 < len__8739__auto___26064)){
args25993.push((arguments[i__8740__auto___26065]));

var G__26066 = (i__8740__auto___26065 + (1));
i__8740__auto___26065 = G__26066;
continue;
} else {
}
break;
}

var G__25995 = args25993.length;
switch (G__25995) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25993.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__23956__auto___26068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___26068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___26068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26034){
var state_val_26035 = (state_26034[(1)]);
if((state_val_26035 === (7))){
var state_26034__$1 = state_26034;
var statearr_26036_26069 = state_26034__$1;
(statearr_26036_26069[(2)] = null);

(statearr_26036_26069[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (1))){
var state_26034__$1 = state_26034;
var statearr_26037_26070 = state_26034__$1;
(statearr_26037_26070[(2)] = null);

(statearr_26037_26070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (4))){
var inst_25998 = (state_26034[(7)]);
var inst_26000 = (inst_25998 < cnt);
var state_26034__$1 = state_26034;
if(cljs.core.truth_(inst_26000)){
var statearr_26038_26071 = state_26034__$1;
(statearr_26038_26071[(1)] = (6));

} else {
var statearr_26039_26072 = state_26034__$1;
(statearr_26039_26072[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (15))){
var inst_26030 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26040_26073 = state_26034__$1;
(statearr_26040_26073[(2)] = inst_26030);

(statearr_26040_26073[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (13))){
var inst_26023 = cljs.core.async.close_BANG_(out);
var state_26034__$1 = state_26034;
var statearr_26041_26074 = state_26034__$1;
(statearr_26041_26074[(2)] = inst_26023);

(statearr_26041_26074[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (6))){
var state_26034__$1 = state_26034;
var statearr_26042_26075 = state_26034__$1;
(statearr_26042_26075[(2)] = null);

(statearr_26042_26075[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (3))){
var inst_26032 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26034__$1,inst_26032);
} else {
if((state_val_26035 === (12))){
var inst_26020 = (state_26034[(8)]);
var inst_26020__$1 = (state_26034[(2)]);
var inst_26021 = cljs.core.some(cljs.core.nil_QMARK_,inst_26020__$1);
var state_26034__$1 = (function (){var statearr_26043 = state_26034;
(statearr_26043[(8)] = inst_26020__$1);

return statearr_26043;
})();
if(cljs.core.truth_(inst_26021)){
var statearr_26044_26076 = state_26034__$1;
(statearr_26044_26076[(1)] = (13));

} else {
var statearr_26045_26077 = state_26034__$1;
(statearr_26045_26077[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (2))){
var inst_25997 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_25998 = (0);
var state_26034__$1 = (function (){var statearr_26046 = state_26034;
(statearr_26046[(9)] = inst_25997);

(statearr_26046[(7)] = inst_25998);

return statearr_26046;
})();
var statearr_26047_26078 = state_26034__$1;
(statearr_26047_26078[(2)] = null);

(statearr_26047_26078[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (11))){
var inst_25998 = (state_26034[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26034,(10),Object,null,(9));
var inst_26007 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25998) : chs__$1.call(null,inst_25998));
var inst_26008 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25998) : done.call(null,inst_25998));
var inst_26009 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26007,inst_26008);
var state_26034__$1 = state_26034;
var statearr_26048_26079 = state_26034__$1;
(statearr_26048_26079[(2)] = inst_26009);


cljs.core.async.impl.ioc_helpers.process_exception(state_26034__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (9))){
var inst_25998 = (state_26034[(7)]);
var inst_26011 = (state_26034[(2)]);
var inst_26012 = (inst_25998 + (1));
var inst_25998__$1 = inst_26012;
var state_26034__$1 = (function (){var statearr_26049 = state_26034;
(statearr_26049[(7)] = inst_25998__$1);

(statearr_26049[(10)] = inst_26011);

return statearr_26049;
})();
var statearr_26050_26080 = state_26034__$1;
(statearr_26050_26080[(2)] = null);

(statearr_26050_26080[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (5))){
var inst_26018 = (state_26034[(2)]);
var state_26034__$1 = (function (){var statearr_26051 = state_26034;
(statearr_26051[(11)] = inst_26018);

return statearr_26051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26034__$1,(12),dchan);
} else {
if((state_val_26035 === (14))){
var inst_26020 = (state_26034[(8)]);
var inst_26025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26020);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26034__$1,(16),out,inst_26025);
} else {
if((state_val_26035 === (16))){
var inst_26027 = (state_26034[(2)]);
var state_26034__$1 = (function (){var statearr_26052 = state_26034;
(statearr_26052[(12)] = inst_26027);

return statearr_26052;
})();
var statearr_26053_26081 = state_26034__$1;
(statearr_26053_26081[(2)] = null);

(statearr_26053_26081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (10))){
var inst_26002 = (state_26034[(2)]);
var inst_26003 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26034__$1 = (function (){var statearr_26054 = state_26034;
(statearr_26054[(13)] = inst_26002);

return statearr_26054;
})();
var statearr_26055_26082 = state_26034__$1;
(statearr_26055_26082[(2)] = inst_26003);


cljs.core.async.impl.ioc_helpers.process_exception(state_26034__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26035 === (8))){
var inst_26016 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26056_26083 = state_26034__$1;
(statearr_26056_26083[(2)] = inst_26016);

(statearr_26056_26083[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___26068,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23830__auto__,c__23956__auto___26068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_26060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26060[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_26060[(1)] = (1));

return statearr_26060;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_26034){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_26034);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e26061){if((e26061 instanceof Object)){
var ex__23834__auto__ = e26061;
var statearr_26062_26084 = state_26034;
(statearr_26062_26084[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26034);

return cljs.core.cst$kw$recur;
} else {
throw e26061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__26085 = state_26034;
state_26034 = G__26085;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_26034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_26034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___26068,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23958__auto__ = (function (){var statearr_26063 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_26063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___26068);

return statearr_26063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___26068,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26087 = [];
var len__8739__auto___26145 = arguments.length;
var i__8740__auto___26146 = (0);
while(true){
if((i__8740__auto___26146 < len__8739__auto___26145)){
args26087.push((arguments[i__8740__auto___26146]));

var G__26147 = (i__8740__auto___26146 + (1));
i__8740__auto___26146 = G__26147;
continue;
} else {
}
break;
}

var G__26089 = args26087.length;
switch (G__26089) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26087.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23956__auto___26149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___26149,out){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___26149,out){
return (function (state_26121){
var state_val_26122 = (state_26121[(1)]);
if((state_val_26122 === (7))){
var inst_26101 = (state_26121[(7)]);
var inst_26100 = (state_26121[(8)]);
var inst_26100__$1 = (state_26121[(2)]);
var inst_26101__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26100__$1,(0),null);
var inst_26102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26100__$1,(1),null);
var inst_26103 = (inst_26101__$1 == null);
var state_26121__$1 = (function (){var statearr_26123 = state_26121;
(statearr_26123[(7)] = inst_26101__$1);

(statearr_26123[(8)] = inst_26100__$1);

(statearr_26123[(9)] = inst_26102);

return statearr_26123;
})();
if(cljs.core.truth_(inst_26103)){
var statearr_26124_26150 = state_26121__$1;
(statearr_26124_26150[(1)] = (8));

} else {
var statearr_26125_26151 = state_26121__$1;
(statearr_26125_26151[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (1))){
var inst_26090 = cljs.core.vec(chs);
var inst_26091 = inst_26090;
var state_26121__$1 = (function (){var statearr_26126 = state_26121;
(statearr_26126[(10)] = inst_26091);

return statearr_26126;
})();
var statearr_26127_26152 = state_26121__$1;
(statearr_26127_26152[(2)] = null);

(statearr_26127_26152[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (4))){
var inst_26091 = (state_26121[(10)]);
var state_26121__$1 = state_26121;
return cljs.core.async.ioc_alts_BANG_(state_26121__$1,(7),inst_26091);
} else {
if((state_val_26122 === (6))){
var inst_26117 = (state_26121[(2)]);
var state_26121__$1 = state_26121;
var statearr_26128_26153 = state_26121__$1;
(statearr_26128_26153[(2)] = inst_26117);

(statearr_26128_26153[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (3))){
var inst_26119 = (state_26121[(2)]);
var state_26121__$1 = state_26121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26121__$1,inst_26119);
} else {
if((state_val_26122 === (2))){
var inst_26091 = (state_26121[(10)]);
var inst_26093 = cljs.core.count(inst_26091);
var inst_26094 = (inst_26093 > (0));
var state_26121__$1 = state_26121;
if(cljs.core.truth_(inst_26094)){
var statearr_26130_26154 = state_26121__$1;
(statearr_26130_26154[(1)] = (4));

} else {
var statearr_26131_26155 = state_26121__$1;
(statearr_26131_26155[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (11))){
var inst_26091 = (state_26121[(10)]);
var inst_26110 = (state_26121[(2)]);
var tmp26129 = inst_26091;
var inst_26091__$1 = tmp26129;
var state_26121__$1 = (function (){var statearr_26132 = state_26121;
(statearr_26132[(10)] = inst_26091__$1);

(statearr_26132[(11)] = inst_26110);

return statearr_26132;
})();
var statearr_26133_26156 = state_26121__$1;
(statearr_26133_26156[(2)] = null);

(statearr_26133_26156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (9))){
var inst_26101 = (state_26121[(7)]);
var state_26121__$1 = state_26121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26121__$1,(11),out,inst_26101);
} else {
if((state_val_26122 === (5))){
var inst_26115 = cljs.core.async.close_BANG_(out);
var state_26121__$1 = state_26121;
var statearr_26134_26157 = state_26121__$1;
(statearr_26134_26157[(2)] = inst_26115);

(statearr_26134_26157[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (10))){
var inst_26113 = (state_26121[(2)]);
var state_26121__$1 = state_26121;
var statearr_26135_26158 = state_26121__$1;
(statearr_26135_26158[(2)] = inst_26113);

(statearr_26135_26158[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (8))){
var inst_26091 = (state_26121[(10)]);
var inst_26101 = (state_26121[(7)]);
var inst_26100 = (state_26121[(8)]);
var inst_26102 = (state_26121[(9)]);
var inst_26105 = (function (){var cs = inst_26091;
var vec__26096 = inst_26100;
var v = inst_26101;
var c = inst_26102;
return ((function (cs,vec__26096,v,c,inst_26091,inst_26101,inst_26100,inst_26102,state_val_26122,c__23956__auto___26149,out){
return (function (p1__26086_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26086_SHARP_);
});
;})(cs,vec__26096,v,c,inst_26091,inst_26101,inst_26100,inst_26102,state_val_26122,c__23956__auto___26149,out))
})();
var inst_26106 = cljs.core.filterv(inst_26105,inst_26091);
var inst_26091__$1 = inst_26106;
var state_26121__$1 = (function (){var statearr_26136 = state_26121;
(statearr_26136[(10)] = inst_26091__$1);

return statearr_26136;
})();
var statearr_26137_26159 = state_26121__$1;
(statearr_26137_26159[(2)] = null);

(statearr_26137_26159[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___26149,out))
;
return ((function (switch__23830__auto__,c__23956__auto___26149,out){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_26141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26141[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_26141[(1)] = (1));

return statearr_26141;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_26121){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_26121);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e26142){if((e26142 instanceof Object)){
var ex__23834__auto__ = e26142;
var statearr_26143_26160 = state_26121;
(statearr_26143_26160[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26121);

return cljs.core.cst$kw$recur;
} else {
throw e26142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__26161 = state_26121;
state_26121 = G__26161;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_26121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_26121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___26149,out))
})();
var state__23958__auto__ = (function (){var statearr_26144 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_26144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___26149);

return statearr_26144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___26149,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26162 = [];
var len__8739__auto___26211 = arguments.length;
var i__8740__auto___26212 = (0);
while(true){
if((i__8740__auto___26212 < len__8739__auto___26211)){
args26162.push((arguments[i__8740__auto___26212]));

var G__26213 = (i__8740__auto___26212 + (1));
i__8740__auto___26212 = G__26213;
continue;
} else {
}
break;
}

var G__26164 = args26162.length;
switch (G__26164) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26162.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23956__auto___26215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___26215,out){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___26215,out){
return (function (state_26188){
var state_val_26189 = (state_26188[(1)]);
if((state_val_26189 === (7))){
var inst_26170 = (state_26188[(7)]);
var inst_26170__$1 = (state_26188[(2)]);
var inst_26171 = (inst_26170__$1 == null);
var inst_26172 = cljs.core.not(inst_26171);
var state_26188__$1 = (function (){var statearr_26190 = state_26188;
(statearr_26190[(7)] = inst_26170__$1);

return statearr_26190;
})();
if(inst_26172){
var statearr_26191_26216 = state_26188__$1;
(statearr_26191_26216[(1)] = (8));

} else {
var statearr_26192_26217 = state_26188__$1;
(statearr_26192_26217[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26189 === (1))){
var inst_26165 = (0);
var state_26188__$1 = (function (){var statearr_26193 = state_26188;
(statearr_26193[(8)] = inst_26165);

return statearr_26193;
})();
var statearr_26194_26218 = state_26188__$1;
(statearr_26194_26218[(2)] = null);

(statearr_26194_26218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26189 === (4))){
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26188__$1,(7),ch);
} else {
if((state_val_26189 === (6))){
var inst_26183 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
var statearr_26195_26219 = state_26188__$1;
(statearr_26195_26219[(2)] = inst_26183);

(statearr_26195_26219[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26189 === (3))){
var inst_26185 = (state_26188[(2)]);
var inst_26186 = cljs.core.async.close_BANG_(out);
var state_26188__$1 = (function (){var statearr_26196 = state_26188;
(statearr_26196[(9)] = inst_26185);

return statearr_26196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26188__$1,inst_26186);
} else {
if((state_val_26189 === (2))){
var inst_26165 = (state_26188[(8)]);
var inst_26167 = (inst_26165 < n);
var state_26188__$1 = state_26188;
if(cljs.core.truth_(inst_26167)){
var statearr_26197_26220 = state_26188__$1;
(statearr_26197_26220[(1)] = (4));

} else {
var statearr_26198_26221 = state_26188__$1;
(statearr_26198_26221[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26189 === (11))){
var inst_26165 = (state_26188[(8)]);
var inst_26175 = (state_26188[(2)]);
var inst_26176 = (inst_26165 + (1));
var inst_26165__$1 = inst_26176;
var state_26188__$1 = (function (){var statearr_26199 = state_26188;
(statearr_26199[(8)] = inst_26165__$1);

(statearr_26199[(10)] = inst_26175);

return statearr_26199;
})();
var statearr_26200_26222 = state_26188__$1;
(statearr_26200_26222[(2)] = null);

(statearr_26200_26222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26189 === (9))){
var state_26188__$1 = state_26188;
var statearr_26201_26223 = state_26188__$1;
(statearr_26201_26223[(2)] = null);

(statearr_26201_26223[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26189 === (5))){
var state_26188__$1 = state_26188;
var statearr_26202_26224 = state_26188__$1;
(statearr_26202_26224[(2)] = null);

(statearr_26202_26224[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26189 === (10))){
var inst_26180 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
var statearr_26203_26225 = state_26188__$1;
(statearr_26203_26225[(2)] = inst_26180);

(statearr_26203_26225[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26189 === (8))){
var inst_26170 = (state_26188[(7)]);
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26188__$1,(11),out,inst_26170);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___26215,out))
;
return ((function (switch__23830__auto__,c__23956__auto___26215,out){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_26207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26207[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_26207[(1)] = (1));

return statearr_26207;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_26188){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_26188);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e26208){if((e26208 instanceof Object)){
var ex__23834__auto__ = e26208;
var statearr_26209_26226 = state_26188;
(statearr_26209_26226[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26188);

return cljs.core.cst$kw$recur;
} else {
throw e26208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__26227 = state_26188;
state_26188 = G__26227;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_26188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_26188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___26215,out))
})();
var state__23958__auto__ = (function (){var statearr_26210 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_26210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___26215);

return statearr_26210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___26215,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26237 = (function (f,ch,meta26238){
this.f = f;
this.ch = ch;
this.meta26238 = meta26238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26239,meta26238__$1){
var self__ = this;
var _26239__$1 = this;
return (new cljs.core.async.t_cljs$core$async26237(self__.f,self__.ch,meta26238__$1));
});


cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26239){
var self__ = this;
var _26239__$1 = this;
return self__.meta26238;
});


cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26240 = (function (f,ch,meta26238,_,fn1,meta26241){
this.f = f;
this.ch = ch;
this.meta26238 = meta26238;
this._ = _;
this.fn1 = fn1;
this.meta26241 = meta26241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26242,meta26241__$1){
var self__ = this;
var _26242__$1 = this;
return (new cljs.core.async.t_cljs$core$async26240(self__.f,self__.ch,self__.meta26238,self__._,self__.fn1,meta26241__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async26240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26242){
var self__ = this;
var _26242__$1 = this;
return self__.meta26241;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async26240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26228_SHARP_){
var G__26243 = (((p1__26228_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26228_SHARP_) : self__.f.call(null,p1__26228_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26243) : f1.call(null,G__26243));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26240.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26238,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26237], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26241], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26240";

cljs.core.async.t_cljs$core$async26240.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26240");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26240 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26240(f__$1,ch__$1,meta26238__$1,___$2,fn1__$1,meta26241){
return (new cljs.core.async.t_cljs$core$async26240(f__$1,ch__$1,meta26238__$1,___$2,fn1__$1,meta26241));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26240(self__.f,self__.ch,self__.meta26238,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7511__auto__ = ret;
if(cljs.core.truth_(and__7511__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7511__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26244 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26244) : self__.f.call(null,G__26244));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26238], null);
});

cljs.core.async.t_cljs$core$async26237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26237";

cljs.core.async.t_cljs$core$async26237.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26237");
});

cljs.core.async.__GT_t_cljs$core$async26237 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26237(f__$1,ch__$1,meta26238){
return (new cljs.core.async.t_cljs$core$async26237(f__$1,ch__$1,meta26238));
});

}

return (new cljs.core.async.t_cljs$core$async26237(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26248 = (function (f,ch,meta26249){
this.f = f;
this.ch = ch;
this.meta26249 = meta26249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26250,meta26249__$1){
var self__ = this;
var _26250__$1 = this;
return (new cljs.core.async.t_cljs$core$async26248(self__.f,self__.ch,meta26249__$1));
});


cljs.core.async.t_cljs$core$async26248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26250){
var self__ = this;
var _26250__$1 = this;
return self__.meta26249;
});


cljs.core.async.t_cljs$core$async26248.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26248.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26248.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26249], null);
});

cljs.core.async.t_cljs$core$async26248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26248";

cljs.core.async.t_cljs$core$async26248.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26248");
});

cljs.core.async.__GT_t_cljs$core$async26248 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26248(f__$1,ch__$1,meta26249){
return (new cljs.core.async.t_cljs$core$async26248(f__$1,ch__$1,meta26249));
});

}

return (new cljs.core.async.t_cljs$core$async26248(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26254 = (function (p,ch,meta26255){
this.p = p;
this.ch = ch;
this.meta26255 = meta26255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26256,meta26255__$1){
var self__ = this;
var _26256__$1 = this;
return (new cljs.core.async.t_cljs$core$async26254(self__.p,self__.ch,meta26255__$1));
});


cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26256){
var self__ = this;
var _26256__$1 = this;
return self__.meta26255;
});


cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26255], null);
});

cljs.core.async.t_cljs$core$async26254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26254";

cljs.core.async.t_cljs$core$async26254.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26254");
});

cljs.core.async.__GT_t_cljs$core$async26254 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26254(p__$1,ch__$1,meta26255){
return (new cljs.core.async.t_cljs$core$async26254(p__$1,ch__$1,meta26255));
});

}

return (new cljs.core.async.t_cljs$core$async26254(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26257 = [];
var len__8739__auto___26301 = arguments.length;
var i__8740__auto___26302 = (0);
while(true){
if((i__8740__auto___26302 < len__8739__auto___26301)){
args26257.push((arguments[i__8740__auto___26302]));

var G__26303 = (i__8740__auto___26302 + (1));
i__8740__auto___26302 = G__26303;
continue;
} else {
}
break;
}

var G__26259 = args26257.length;
switch (G__26259) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26257.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23956__auto___26305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___26305,out){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___26305,out){
return (function (state_26280){
var state_val_26281 = (state_26280[(1)]);
if((state_val_26281 === (7))){
var inst_26276 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26282_26306 = state_26280__$1;
(statearr_26282_26306[(2)] = inst_26276);

(statearr_26282_26306[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (1))){
var state_26280__$1 = state_26280;
var statearr_26283_26307 = state_26280__$1;
(statearr_26283_26307[(2)] = null);

(statearr_26283_26307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (4))){
var inst_26262 = (state_26280[(7)]);
var inst_26262__$1 = (state_26280[(2)]);
var inst_26263 = (inst_26262__$1 == null);
var state_26280__$1 = (function (){var statearr_26284 = state_26280;
(statearr_26284[(7)] = inst_26262__$1);

return statearr_26284;
})();
if(cljs.core.truth_(inst_26263)){
var statearr_26285_26308 = state_26280__$1;
(statearr_26285_26308[(1)] = (5));

} else {
var statearr_26286_26309 = state_26280__$1;
(statearr_26286_26309[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (6))){
var inst_26262 = (state_26280[(7)]);
var inst_26267 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26262) : p.call(null,inst_26262));
var state_26280__$1 = state_26280;
if(cljs.core.truth_(inst_26267)){
var statearr_26287_26310 = state_26280__$1;
(statearr_26287_26310[(1)] = (8));

} else {
var statearr_26288_26311 = state_26280__$1;
(statearr_26288_26311[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (3))){
var inst_26278 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26280__$1,inst_26278);
} else {
if((state_val_26281 === (2))){
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26280__$1,(4),ch);
} else {
if((state_val_26281 === (11))){
var inst_26270 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26289_26312 = state_26280__$1;
(statearr_26289_26312[(2)] = inst_26270);

(statearr_26289_26312[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (9))){
var state_26280__$1 = state_26280;
var statearr_26290_26313 = state_26280__$1;
(statearr_26290_26313[(2)] = null);

(statearr_26290_26313[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (5))){
var inst_26265 = cljs.core.async.close_BANG_(out);
var state_26280__$1 = state_26280;
var statearr_26291_26314 = state_26280__$1;
(statearr_26291_26314[(2)] = inst_26265);

(statearr_26291_26314[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (10))){
var inst_26273 = (state_26280[(2)]);
var state_26280__$1 = (function (){var statearr_26292 = state_26280;
(statearr_26292[(8)] = inst_26273);

return statearr_26292;
})();
var statearr_26293_26315 = state_26280__$1;
(statearr_26293_26315[(2)] = null);

(statearr_26293_26315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26281 === (8))){
var inst_26262 = (state_26280[(7)]);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26280__$1,(11),out,inst_26262);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___26305,out))
;
return ((function (switch__23830__auto__,c__23956__auto___26305,out){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_26297 = [null,null,null,null,null,null,null,null,null];
(statearr_26297[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_26297[(1)] = (1));

return statearr_26297;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_26280){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_26280);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e26298){if((e26298 instanceof Object)){
var ex__23834__auto__ = e26298;
var statearr_26299_26316 = state_26280;
(statearr_26299_26316[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26280);

return cljs.core.cst$kw$recur;
} else {
throw e26298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__26317 = state_26280;
state_26280 = G__26317;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_26280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_26280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___26305,out))
})();
var state__23958__auto__ = (function (){var statearr_26300 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_26300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___26305);

return statearr_26300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___26305,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26318 = [];
var len__8739__auto___26321 = arguments.length;
var i__8740__auto___26322 = (0);
while(true){
if((i__8740__auto___26322 < len__8739__auto___26321)){
args26318.push((arguments[i__8740__auto___26322]));

var G__26323 = (i__8740__auto___26322 + (1));
i__8740__auto___26322 = G__26323;
continue;
} else {
}
break;
}

var G__26320 = args26318.length;
switch (G__26320) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26318.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23956__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto__){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto__){
return (function (state_26490){
var state_val_26491 = (state_26490[(1)]);
if((state_val_26491 === (7))){
var inst_26486 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
var statearr_26492_26533 = state_26490__$1;
(statearr_26492_26533[(2)] = inst_26486);

(statearr_26492_26533[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (20))){
var inst_26456 = (state_26490[(7)]);
var inst_26467 = (state_26490[(2)]);
var inst_26468 = cljs.core.next(inst_26456);
var inst_26442 = inst_26468;
var inst_26443 = null;
var inst_26444 = (0);
var inst_26445 = (0);
var state_26490__$1 = (function (){var statearr_26493 = state_26490;
(statearr_26493[(8)] = inst_26445);

(statearr_26493[(9)] = inst_26444);

(statearr_26493[(10)] = inst_26442);

(statearr_26493[(11)] = inst_26443);

(statearr_26493[(12)] = inst_26467);

return statearr_26493;
})();
var statearr_26494_26534 = state_26490__$1;
(statearr_26494_26534[(2)] = null);

(statearr_26494_26534[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (1))){
var state_26490__$1 = state_26490;
var statearr_26495_26535 = state_26490__$1;
(statearr_26495_26535[(2)] = null);

(statearr_26495_26535[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (4))){
var inst_26431 = (state_26490[(13)]);
var inst_26431__$1 = (state_26490[(2)]);
var inst_26432 = (inst_26431__$1 == null);
var state_26490__$1 = (function (){var statearr_26496 = state_26490;
(statearr_26496[(13)] = inst_26431__$1);

return statearr_26496;
})();
if(cljs.core.truth_(inst_26432)){
var statearr_26497_26536 = state_26490__$1;
(statearr_26497_26536[(1)] = (5));

} else {
var statearr_26498_26537 = state_26490__$1;
(statearr_26498_26537[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (15))){
var state_26490__$1 = state_26490;
var statearr_26502_26538 = state_26490__$1;
(statearr_26502_26538[(2)] = null);

(statearr_26502_26538[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (21))){
var state_26490__$1 = state_26490;
var statearr_26503_26539 = state_26490__$1;
(statearr_26503_26539[(2)] = null);

(statearr_26503_26539[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (13))){
var inst_26445 = (state_26490[(8)]);
var inst_26444 = (state_26490[(9)]);
var inst_26442 = (state_26490[(10)]);
var inst_26443 = (state_26490[(11)]);
var inst_26452 = (state_26490[(2)]);
var inst_26453 = (inst_26445 + (1));
var tmp26499 = inst_26444;
var tmp26500 = inst_26442;
var tmp26501 = inst_26443;
var inst_26442__$1 = tmp26500;
var inst_26443__$1 = tmp26501;
var inst_26444__$1 = tmp26499;
var inst_26445__$1 = inst_26453;
var state_26490__$1 = (function (){var statearr_26504 = state_26490;
(statearr_26504[(8)] = inst_26445__$1);

(statearr_26504[(9)] = inst_26444__$1);

(statearr_26504[(10)] = inst_26442__$1);

(statearr_26504[(11)] = inst_26443__$1);

(statearr_26504[(14)] = inst_26452);

return statearr_26504;
})();
var statearr_26505_26540 = state_26490__$1;
(statearr_26505_26540[(2)] = null);

(statearr_26505_26540[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (22))){
var state_26490__$1 = state_26490;
var statearr_26506_26541 = state_26490__$1;
(statearr_26506_26541[(2)] = null);

(statearr_26506_26541[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (6))){
var inst_26431 = (state_26490[(13)]);
var inst_26440 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26431) : f.call(null,inst_26431));
var inst_26441 = cljs.core.seq(inst_26440);
var inst_26442 = inst_26441;
var inst_26443 = null;
var inst_26444 = (0);
var inst_26445 = (0);
var state_26490__$1 = (function (){var statearr_26507 = state_26490;
(statearr_26507[(8)] = inst_26445);

(statearr_26507[(9)] = inst_26444);

(statearr_26507[(10)] = inst_26442);

(statearr_26507[(11)] = inst_26443);

return statearr_26507;
})();
var statearr_26508_26542 = state_26490__$1;
(statearr_26508_26542[(2)] = null);

(statearr_26508_26542[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (17))){
var inst_26456 = (state_26490[(7)]);
var inst_26460 = cljs.core.chunk_first(inst_26456);
var inst_26461 = cljs.core.chunk_rest(inst_26456);
var inst_26462 = cljs.core.count(inst_26460);
var inst_26442 = inst_26461;
var inst_26443 = inst_26460;
var inst_26444 = inst_26462;
var inst_26445 = (0);
var state_26490__$1 = (function (){var statearr_26509 = state_26490;
(statearr_26509[(8)] = inst_26445);

(statearr_26509[(9)] = inst_26444);

(statearr_26509[(10)] = inst_26442);

(statearr_26509[(11)] = inst_26443);

return statearr_26509;
})();
var statearr_26510_26543 = state_26490__$1;
(statearr_26510_26543[(2)] = null);

(statearr_26510_26543[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (3))){
var inst_26488 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26490__$1,inst_26488);
} else {
if((state_val_26491 === (12))){
var inst_26476 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
var statearr_26511_26544 = state_26490__$1;
(statearr_26511_26544[(2)] = inst_26476);

(statearr_26511_26544[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (2))){
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26490__$1,(4),in$);
} else {
if((state_val_26491 === (23))){
var inst_26484 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
var statearr_26512_26545 = state_26490__$1;
(statearr_26512_26545[(2)] = inst_26484);

(statearr_26512_26545[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (19))){
var inst_26471 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
var statearr_26513_26546 = state_26490__$1;
(statearr_26513_26546[(2)] = inst_26471);

(statearr_26513_26546[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (11))){
var inst_26442 = (state_26490[(10)]);
var inst_26456 = (state_26490[(7)]);
var inst_26456__$1 = cljs.core.seq(inst_26442);
var state_26490__$1 = (function (){var statearr_26514 = state_26490;
(statearr_26514[(7)] = inst_26456__$1);

return statearr_26514;
})();
if(inst_26456__$1){
var statearr_26515_26547 = state_26490__$1;
(statearr_26515_26547[(1)] = (14));

} else {
var statearr_26516_26548 = state_26490__$1;
(statearr_26516_26548[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (9))){
var inst_26478 = (state_26490[(2)]);
var inst_26479 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26490__$1 = (function (){var statearr_26517 = state_26490;
(statearr_26517[(15)] = inst_26478);

return statearr_26517;
})();
if(cljs.core.truth_(inst_26479)){
var statearr_26518_26549 = state_26490__$1;
(statearr_26518_26549[(1)] = (21));

} else {
var statearr_26519_26550 = state_26490__$1;
(statearr_26519_26550[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (5))){
var inst_26434 = cljs.core.async.close_BANG_(out);
var state_26490__$1 = state_26490;
var statearr_26520_26551 = state_26490__$1;
(statearr_26520_26551[(2)] = inst_26434);

(statearr_26520_26551[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (14))){
var inst_26456 = (state_26490[(7)]);
var inst_26458 = cljs.core.chunked_seq_QMARK_(inst_26456);
var state_26490__$1 = state_26490;
if(inst_26458){
var statearr_26521_26552 = state_26490__$1;
(statearr_26521_26552[(1)] = (17));

} else {
var statearr_26522_26553 = state_26490__$1;
(statearr_26522_26553[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (16))){
var inst_26474 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
var statearr_26523_26554 = state_26490__$1;
(statearr_26523_26554[(2)] = inst_26474);

(statearr_26523_26554[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26491 === (10))){
var inst_26445 = (state_26490[(8)]);
var inst_26443 = (state_26490[(11)]);
var inst_26450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26443,inst_26445);
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26490__$1,(13),out,inst_26450);
} else {
if((state_val_26491 === (18))){
var inst_26456 = (state_26490[(7)]);
var inst_26465 = cljs.core.first(inst_26456);
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26490__$1,(20),out,inst_26465);
} else {
if((state_val_26491 === (8))){
var inst_26445 = (state_26490[(8)]);
var inst_26444 = (state_26490[(9)]);
var inst_26447 = (inst_26445 < inst_26444);
var inst_26448 = inst_26447;
var state_26490__$1 = state_26490;
if(cljs.core.truth_(inst_26448)){
var statearr_26524_26555 = state_26490__$1;
(statearr_26524_26555[(1)] = (10));

} else {
var statearr_26525_26556 = state_26490__$1;
(statearr_26525_26556[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto__))
;
return ((function (switch__23830__auto__,c__23956__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23831__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23831__auto____0 = (function (){
var statearr_26529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26529[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23831__auto__);

(statearr_26529[(1)] = (1));

return statearr_26529;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23831__auto____1 = (function (state_26490){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_26490);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e26530){if((e26530 instanceof Object)){
var ex__23834__auto__ = e26530;
var statearr_26531_26557 = state_26490;
(statearr_26531_26557[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26490);

return cljs.core.cst$kw$recur;
} else {
throw e26530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__26558 = state_26490;
state_26490 = G__26558;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23831__auto__ = function(state_26490){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23831__auto____1.call(this,state_26490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23831__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23831__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto__))
})();
var state__23958__auto__ = (function (){var statearr_26532 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_26532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto__);

return statearr_26532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto__))
);

return c__23956__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26559 = [];
var len__8739__auto___26562 = arguments.length;
var i__8740__auto___26563 = (0);
while(true){
if((i__8740__auto___26563 < len__8739__auto___26562)){
args26559.push((arguments[i__8740__auto___26563]));

var G__26564 = (i__8740__auto___26563 + (1));
i__8740__auto___26563 = G__26564;
continue;
} else {
}
break;
}

var G__26561 = args26559.length;
switch (G__26561) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26559.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26566 = [];
var len__8739__auto___26569 = arguments.length;
var i__8740__auto___26570 = (0);
while(true){
if((i__8740__auto___26570 < len__8739__auto___26569)){
args26566.push((arguments[i__8740__auto___26570]));

var G__26571 = (i__8740__auto___26570 + (1));
i__8740__auto___26570 = G__26571;
continue;
} else {
}
break;
}

var G__26568 = args26566.length;
switch (G__26568) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26566.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26573 = [];
var len__8739__auto___26624 = arguments.length;
var i__8740__auto___26625 = (0);
while(true){
if((i__8740__auto___26625 < len__8739__auto___26624)){
args26573.push((arguments[i__8740__auto___26625]));

var G__26626 = (i__8740__auto___26625 + (1));
i__8740__auto___26625 = G__26626;
continue;
} else {
}
break;
}

var G__26575 = args26573.length;
switch (G__26575) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26573.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23956__auto___26628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___26628,out){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___26628,out){
return (function (state_26599){
var state_val_26600 = (state_26599[(1)]);
if((state_val_26600 === (7))){
var inst_26594 = (state_26599[(2)]);
var state_26599__$1 = state_26599;
var statearr_26601_26629 = state_26599__$1;
(statearr_26601_26629[(2)] = inst_26594);

(statearr_26601_26629[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26600 === (1))){
var inst_26576 = null;
var state_26599__$1 = (function (){var statearr_26602 = state_26599;
(statearr_26602[(7)] = inst_26576);

return statearr_26602;
})();
var statearr_26603_26630 = state_26599__$1;
(statearr_26603_26630[(2)] = null);

(statearr_26603_26630[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26600 === (4))){
var inst_26579 = (state_26599[(8)]);
var inst_26579__$1 = (state_26599[(2)]);
var inst_26580 = (inst_26579__$1 == null);
var inst_26581 = cljs.core.not(inst_26580);
var state_26599__$1 = (function (){var statearr_26604 = state_26599;
(statearr_26604[(8)] = inst_26579__$1);

return statearr_26604;
})();
if(inst_26581){
var statearr_26605_26631 = state_26599__$1;
(statearr_26605_26631[(1)] = (5));

} else {
var statearr_26606_26632 = state_26599__$1;
(statearr_26606_26632[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26600 === (6))){
var state_26599__$1 = state_26599;
var statearr_26607_26633 = state_26599__$1;
(statearr_26607_26633[(2)] = null);

(statearr_26607_26633[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26600 === (3))){
var inst_26596 = (state_26599[(2)]);
var inst_26597 = cljs.core.async.close_BANG_(out);
var state_26599__$1 = (function (){var statearr_26608 = state_26599;
(statearr_26608[(9)] = inst_26596);

return statearr_26608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26599__$1,inst_26597);
} else {
if((state_val_26600 === (2))){
var state_26599__$1 = state_26599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26599__$1,(4),ch);
} else {
if((state_val_26600 === (11))){
var inst_26579 = (state_26599[(8)]);
var inst_26588 = (state_26599[(2)]);
var inst_26576 = inst_26579;
var state_26599__$1 = (function (){var statearr_26609 = state_26599;
(statearr_26609[(10)] = inst_26588);

(statearr_26609[(7)] = inst_26576);

return statearr_26609;
})();
var statearr_26610_26634 = state_26599__$1;
(statearr_26610_26634[(2)] = null);

(statearr_26610_26634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26600 === (9))){
var inst_26579 = (state_26599[(8)]);
var state_26599__$1 = state_26599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26599__$1,(11),out,inst_26579);
} else {
if((state_val_26600 === (5))){
var inst_26576 = (state_26599[(7)]);
var inst_26579 = (state_26599[(8)]);
var inst_26583 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26579,inst_26576);
var state_26599__$1 = state_26599;
if(inst_26583){
var statearr_26612_26635 = state_26599__$1;
(statearr_26612_26635[(1)] = (8));

} else {
var statearr_26613_26636 = state_26599__$1;
(statearr_26613_26636[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26600 === (10))){
var inst_26591 = (state_26599[(2)]);
var state_26599__$1 = state_26599;
var statearr_26614_26637 = state_26599__$1;
(statearr_26614_26637[(2)] = inst_26591);

(statearr_26614_26637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26600 === (8))){
var inst_26576 = (state_26599[(7)]);
var tmp26611 = inst_26576;
var inst_26576__$1 = tmp26611;
var state_26599__$1 = (function (){var statearr_26615 = state_26599;
(statearr_26615[(7)] = inst_26576__$1);

return statearr_26615;
})();
var statearr_26616_26638 = state_26599__$1;
(statearr_26616_26638[(2)] = null);

(statearr_26616_26638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___26628,out))
;
return ((function (switch__23830__auto__,c__23956__auto___26628,out){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_26620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26620[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_26620[(1)] = (1));

return statearr_26620;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_26599){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_26599);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e26621){if((e26621 instanceof Object)){
var ex__23834__auto__ = e26621;
var statearr_26622_26639 = state_26599;
(statearr_26622_26639[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26599);

return cljs.core.cst$kw$recur;
} else {
throw e26621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__26640 = state_26599;
state_26599 = G__26640;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_26599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_26599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___26628,out))
})();
var state__23958__auto__ = (function (){var statearr_26623 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_26623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___26628);

return statearr_26623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___26628,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26641 = [];
var len__8739__auto___26711 = arguments.length;
var i__8740__auto___26712 = (0);
while(true){
if((i__8740__auto___26712 < len__8739__auto___26711)){
args26641.push((arguments[i__8740__auto___26712]));

var G__26713 = (i__8740__auto___26712 + (1));
i__8740__auto___26712 = G__26713;
continue;
} else {
}
break;
}

var G__26643 = args26641.length;
switch (G__26643) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26641.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23956__auto___26715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___26715,out){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___26715,out){
return (function (state_26681){
var state_val_26682 = (state_26681[(1)]);
if((state_val_26682 === (7))){
var inst_26677 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26683_26716 = state_26681__$1;
(statearr_26683_26716[(2)] = inst_26677);

(statearr_26683_26716[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (1))){
var inst_26644 = (new Array(n));
var inst_26645 = inst_26644;
var inst_26646 = (0);
var state_26681__$1 = (function (){var statearr_26684 = state_26681;
(statearr_26684[(7)] = inst_26645);

(statearr_26684[(8)] = inst_26646);

return statearr_26684;
})();
var statearr_26685_26717 = state_26681__$1;
(statearr_26685_26717[(2)] = null);

(statearr_26685_26717[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (4))){
var inst_26649 = (state_26681[(9)]);
var inst_26649__$1 = (state_26681[(2)]);
var inst_26650 = (inst_26649__$1 == null);
var inst_26651 = cljs.core.not(inst_26650);
var state_26681__$1 = (function (){var statearr_26686 = state_26681;
(statearr_26686[(9)] = inst_26649__$1);

return statearr_26686;
})();
if(inst_26651){
var statearr_26687_26718 = state_26681__$1;
(statearr_26687_26718[(1)] = (5));

} else {
var statearr_26688_26719 = state_26681__$1;
(statearr_26688_26719[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (15))){
var inst_26671 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26689_26720 = state_26681__$1;
(statearr_26689_26720[(2)] = inst_26671);

(statearr_26689_26720[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (13))){
var state_26681__$1 = state_26681;
var statearr_26690_26721 = state_26681__$1;
(statearr_26690_26721[(2)] = null);

(statearr_26690_26721[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (6))){
var inst_26646 = (state_26681[(8)]);
var inst_26667 = (inst_26646 > (0));
var state_26681__$1 = state_26681;
if(cljs.core.truth_(inst_26667)){
var statearr_26691_26722 = state_26681__$1;
(statearr_26691_26722[(1)] = (12));

} else {
var statearr_26692_26723 = state_26681__$1;
(statearr_26692_26723[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (3))){
var inst_26679 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26681__$1,inst_26679);
} else {
if((state_val_26682 === (12))){
var inst_26645 = (state_26681[(7)]);
var inst_26669 = cljs.core.vec(inst_26645);
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26681__$1,(15),out,inst_26669);
} else {
if((state_val_26682 === (2))){
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26681__$1,(4),ch);
} else {
if((state_val_26682 === (11))){
var inst_26661 = (state_26681[(2)]);
var inst_26662 = (new Array(n));
var inst_26645 = inst_26662;
var inst_26646 = (0);
var state_26681__$1 = (function (){var statearr_26693 = state_26681;
(statearr_26693[(10)] = inst_26661);

(statearr_26693[(7)] = inst_26645);

(statearr_26693[(8)] = inst_26646);

return statearr_26693;
})();
var statearr_26694_26724 = state_26681__$1;
(statearr_26694_26724[(2)] = null);

(statearr_26694_26724[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (9))){
var inst_26645 = (state_26681[(7)]);
var inst_26659 = cljs.core.vec(inst_26645);
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26681__$1,(11),out,inst_26659);
} else {
if((state_val_26682 === (5))){
var inst_26654 = (state_26681[(11)]);
var inst_26645 = (state_26681[(7)]);
var inst_26646 = (state_26681[(8)]);
var inst_26649 = (state_26681[(9)]);
var inst_26653 = (inst_26645[inst_26646] = inst_26649);
var inst_26654__$1 = (inst_26646 + (1));
var inst_26655 = (inst_26654__$1 < n);
var state_26681__$1 = (function (){var statearr_26695 = state_26681;
(statearr_26695[(11)] = inst_26654__$1);

(statearr_26695[(12)] = inst_26653);

return statearr_26695;
})();
if(cljs.core.truth_(inst_26655)){
var statearr_26696_26725 = state_26681__$1;
(statearr_26696_26725[(1)] = (8));

} else {
var statearr_26697_26726 = state_26681__$1;
(statearr_26697_26726[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (14))){
var inst_26674 = (state_26681[(2)]);
var inst_26675 = cljs.core.async.close_BANG_(out);
var state_26681__$1 = (function (){var statearr_26699 = state_26681;
(statearr_26699[(13)] = inst_26674);

return statearr_26699;
})();
var statearr_26700_26727 = state_26681__$1;
(statearr_26700_26727[(2)] = inst_26675);

(statearr_26700_26727[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (10))){
var inst_26665 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26701_26728 = state_26681__$1;
(statearr_26701_26728[(2)] = inst_26665);

(statearr_26701_26728[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (8))){
var inst_26654 = (state_26681[(11)]);
var inst_26645 = (state_26681[(7)]);
var tmp26698 = inst_26645;
var inst_26645__$1 = tmp26698;
var inst_26646 = inst_26654;
var state_26681__$1 = (function (){var statearr_26702 = state_26681;
(statearr_26702[(7)] = inst_26645__$1);

(statearr_26702[(8)] = inst_26646);

return statearr_26702;
})();
var statearr_26703_26729 = state_26681__$1;
(statearr_26703_26729[(2)] = null);

(statearr_26703_26729[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___26715,out))
;
return ((function (switch__23830__auto__,c__23956__auto___26715,out){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_26707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26707[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_26707[(1)] = (1));

return statearr_26707;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_26681){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_26681);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e26708){if((e26708 instanceof Object)){
var ex__23834__auto__ = e26708;
var statearr_26709_26730 = state_26681;
(statearr_26709_26730[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26681);

return cljs.core.cst$kw$recur;
} else {
throw e26708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__26731 = state_26681;
state_26681 = G__26731;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_26681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_26681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___26715,out))
})();
var state__23958__auto__ = (function (){var statearr_26710 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_26710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___26715);

return statearr_26710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___26715,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26732 = [];
var len__8739__auto___26806 = arguments.length;
var i__8740__auto___26807 = (0);
while(true){
if((i__8740__auto___26807 < len__8739__auto___26806)){
args26732.push((arguments[i__8740__auto___26807]));

var G__26808 = (i__8740__auto___26807 + (1));
i__8740__auto___26807 = G__26808;
continue;
} else {
}
break;
}

var G__26734 = args26732.length;
switch (G__26734) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26732.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23956__auto___26810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23956__auto___26810,out){
return (function (){
var f__23957__auto__ = (function (){var switch__23830__auto__ = ((function (c__23956__auto___26810,out){
return (function (state_26776){
var state_val_26777 = (state_26776[(1)]);
if((state_val_26777 === (7))){
var inst_26772 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26778_26811 = state_26776__$1;
(statearr_26778_26811[(2)] = inst_26772);

(statearr_26778_26811[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (1))){
var inst_26735 = [];
var inst_26736 = inst_26735;
var inst_26737 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26776__$1 = (function (){var statearr_26779 = state_26776;
(statearr_26779[(7)] = inst_26737);

(statearr_26779[(8)] = inst_26736);

return statearr_26779;
})();
var statearr_26780_26812 = state_26776__$1;
(statearr_26780_26812[(2)] = null);

(statearr_26780_26812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (4))){
var inst_26740 = (state_26776[(9)]);
var inst_26740__$1 = (state_26776[(2)]);
var inst_26741 = (inst_26740__$1 == null);
var inst_26742 = cljs.core.not(inst_26741);
var state_26776__$1 = (function (){var statearr_26781 = state_26776;
(statearr_26781[(9)] = inst_26740__$1);

return statearr_26781;
})();
if(inst_26742){
var statearr_26782_26813 = state_26776__$1;
(statearr_26782_26813[(1)] = (5));

} else {
var statearr_26783_26814 = state_26776__$1;
(statearr_26783_26814[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (15))){
var inst_26766 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26784_26815 = state_26776__$1;
(statearr_26784_26815[(2)] = inst_26766);

(statearr_26784_26815[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (13))){
var state_26776__$1 = state_26776;
var statearr_26785_26816 = state_26776__$1;
(statearr_26785_26816[(2)] = null);

(statearr_26785_26816[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (6))){
var inst_26736 = (state_26776[(8)]);
var inst_26761 = inst_26736.length;
var inst_26762 = (inst_26761 > (0));
var state_26776__$1 = state_26776;
if(cljs.core.truth_(inst_26762)){
var statearr_26786_26817 = state_26776__$1;
(statearr_26786_26817[(1)] = (12));

} else {
var statearr_26787_26818 = state_26776__$1;
(statearr_26787_26818[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (3))){
var inst_26774 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26776__$1,inst_26774);
} else {
if((state_val_26777 === (12))){
var inst_26736 = (state_26776[(8)]);
var inst_26764 = cljs.core.vec(inst_26736);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26776__$1,(15),out,inst_26764);
} else {
if((state_val_26777 === (2))){
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26776__$1,(4),ch);
} else {
if((state_val_26777 === (11))){
var inst_26740 = (state_26776[(9)]);
var inst_26744 = (state_26776[(10)]);
var inst_26754 = (state_26776[(2)]);
var inst_26755 = [];
var inst_26756 = inst_26755.push(inst_26740);
var inst_26736 = inst_26755;
var inst_26737 = inst_26744;
var state_26776__$1 = (function (){var statearr_26788 = state_26776;
(statearr_26788[(7)] = inst_26737);

(statearr_26788[(11)] = inst_26754);

(statearr_26788[(12)] = inst_26756);

(statearr_26788[(8)] = inst_26736);

return statearr_26788;
})();
var statearr_26789_26819 = state_26776__$1;
(statearr_26789_26819[(2)] = null);

(statearr_26789_26819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (9))){
var inst_26736 = (state_26776[(8)]);
var inst_26752 = cljs.core.vec(inst_26736);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26776__$1,(11),out,inst_26752);
} else {
if((state_val_26777 === (5))){
var inst_26737 = (state_26776[(7)]);
var inst_26740 = (state_26776[(9)]);
var inst_26744 = (state_26776[(10)]);
var inst_26744__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26740) : f.call(null,inst_26740));
var inst_26745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26744__$1,inst_26737);
var inst_26746 = cljs.core.keyword_identical_QMARK_(inst_26737,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26747 = (inst_26745) || (inst_26746);
var state_26776__$1 = (function (){var statearr_26790 = state_26776;
(statearr_26790[(10)] = inst_26744__$1);

return statearr_26790;
})();
if(cljs.core.truth_(inst_26747)){
var statearr_26791_26820 = state_26776__$1;
(statearr_26791_26820[(1)] = (8));

} else {
var statearr_26792_26821 = state_26776__$1;
(statearr_26792_26821[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (14))){
var inst_26769 = (state_26776[(2)]);
var inst_26770 = cljs.core.async.close_BANG_(out);
var state_26776__$1 = (function (){var statearr_26794 = state_26776;
(statearr_26794[(13)] = inst_26769);

return statearr_26794;
})();
var statearr_26795_26822 = state_26776__$1;
(statearr_26795_26822[(2)] = inst_26770);

(statearr_26795_26822[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (10))){
var inst_26759 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26796_26823 = state_26776__$1;
(statearr_26796_26823[(2)] = inst_26759);

(statearr_26796_26823[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26777 === (8))){
var inst_26740 = (state_26776[(9)]);
var inst_26744 = (state_26776[(10)]);
var inst_26736 = (state_26776[(8)]);
var inst_26749 = inst_26736.push(inst_26740);
var tmp26793 = inst_26736;
var inst_26736__$1 = tmp26793;
var inst_26737 = inst_26744;
var state_26776__$1 = (function (){var statearr_26797 = state_26776;
(statearr_26797[(7)] = inst_26737);

(statearr_26797[(14)] = inst_26749);

(statearr_26797[(8)] = inst_26736__$1);

return statearr_26797;
})();
var statearr_26798_26824 = state_26776__$1;
(statearr_26798_26824[(2)] = null);

(statearr_26798_26824[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23956__auto___26810,out))
;
return ((function (switch__23830__auto__,c__23956__auto___26810,out){
return (function() {
var cljs$core$async$state_machine__23831__auto__ = null;
var cljs$core$async$state_machine__23831__auto____0 = (function (){
var statearr_26802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26802[(0)] = cljs$core$async$state_machine__23831__auto__);

(statearr_26802[(1)] = (1));

return statearr_26802;
});
var cljs$core$async$state_machine__23831__auto____1 = (function (state_26776){
while(true){
var ret_value__23832__auto__ = (function (){try{while(true){
var result__23833__auto__ = switch__23830__auto__(state_26776);
if(cljs.core.keyword_identical_QMARK_(result__23833__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23833__auto__;
}
break;
}
}catch (e26803){if((e26803 instanceof Object)){
var ex__23834__auto__ = e26803;
var statearr_26804_26825 = state_26776;
(statearr_26804_26825[(5)] = ex__23834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26776);

return cljs.core.cst$kw$recur;
} else {
throw e26803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23832__auto__,cljs.core.cst$kw$recur)){
var G__26826 = state_26776;
state_26776 = G__26826;
continue;
} else {
return ret_value__23832__auto__;
}
break;
}
});
cljs$core$async$state_machine__23831__auto__ = function(state_26776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23831__auto____1.call(this,state_26776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23831__auto____0;
cljs$core$async$state_machine__23831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23831__auto____1;
return cljs$core$async$state_machine__23831__auto__;
})()
;})(switch__23830__auto__,c__23956__auto___26810,out))
})();
var state__23958__auto__ = (function (){var statearr_26805 = (f__23957__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23957__auto__.cljs$core$IFn$_invoke$arity$0() : f__23957__auto__.call(null));
(statearr_26805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23956__auto___26810);

return statearr_26805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23958__auto__);
});})(c__23956__auto___26810,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

