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
var args24077 = [];
var len__8739__auto___24083 = arguments.length;
var i__8740__auto___24084 = (0);
while(true){
if((i__8740__auto___24084 < len__8739__auto___24083)){
args24077.push((arguments[i__8740__auto___24084]));

var G__24085 = (i__8740__auto___24084 + (1));
i__8740__auto___24084 = G__24085;
continue;
} else {
}
break;
}

var G__24079 = args24077.length;
switch (G__24079) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24077.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24080 = (function (f,blockable,meta24081){
this.f = f;
this.blockable = blockable;
this.meta24081 = meta24081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24082,meta24081__$1){
var self__ = this;
var _24082__$1 = this;
return (new cljs.core.async.t_cljs$core$async24080(self__.f,self__.blockable,meta24081__$1));
});


cljs.core.async.t_cljs$core$async24080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24082){
var self__ = this;
var _24082__$1 = this;
return self__.meta24081;
});


cljs.core.async.t_cljs$core$async24080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async24080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24081], null);
});

cljs.core.async.t_cljs$core$async24080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24080";

cljs.core.async.t_cljs$core$async24080.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24080");
});

cljs.core.async.__GT_t_cljs$core$async24080 = (function cljs$core$async$__GT_t_cljs$core$async24080(f__$1,blockable__$1,meta24081){
return (new cljs.core.async.t_cljs$core$async24080(f__$1,blockable__$1,meta24081));
});

}

return (new cljs.core.async.t_cljs$core$async24080(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24089 = [];
var len__8739__auto___24092 = arguments.length;
var i__8740__auto___24093 = (0);
while(true){
if((i__8740__auto___24093 < len__8739__auto___24092)){
args24089.push((arguments[i__8740__auto___24093]));

var G__24094 = (i__8740__auto___24093 + (1));
i__8740__auto___24093 = G__24094;
continue;
} else {
}
break;
}

var G__24091 = args24089.length;
switch (G__24091) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24089.length)].join('')));

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
var args24096 = [];
var len__8739__auto___24099 = arguments.length;
var i__8740__auto___24100 = (0);
while(true){
if((i__8740__auto___24100 < len__8739__auto___24099)){
args24096.push((arguments[i__8740__auto___24100]));

var G__24101 = (i__8740__auto___24100 + (1));
i__8740__auto___24100 = G__24101;
continue;
} else {
}
break;
}

var G__24098 = args24096.length;
switch (G__24098) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24096.length)].join('')));

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
var args24103 = [];
var len__8739__auto___24106 = arguments.length;
var i__8740__auto___24107 = (0);
while(true){
if((i__8740__auto___24107 < len__8739__auto___24106)){
args24103.push((arguments[i__8740__auto___24107]));

var G__24108 = (i__8740__auto___24107 + (1));
i__8740__auto___24107 = G__24108;
continue;
} else {
}
break;
}

var G__24105 = args24103.length;
switch (G__24105) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24103.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24110 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24110) : fn1.call(null,val_24110));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24110,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24110) : fn1.call(null,val_24110));
});})(val_24110,ret))
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
var args24111 = [];
var len__8739__auto___24114 = arguments.length;
var i__8740__auto___24115 = (0);
while(true){
if((i__8740__auto___24115 < len__8739__auto___24114)){
args24111.push((arguments[i__8740__auto___24115]));

var G__24116 = (i__8740__auto___24115 + (1));
i__8740__auto___24115 = G__24116;
continue;
} else {
}
break;
}

var G__24113 = args24111.length;
switch (G__24113) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24111.length)].join('')));

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
var n__8539__auto___24118 = n;
var x_24119 = (0);
while(true){
if((x_24119 < n__8539__auto___24118)){
(a[x_24119] = (0));

var G__24120 = (x_24119 + (1));
x_24119 = G__24120;
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

var G__24121 = (i + (1));
i = G__24121;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async24125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24125 = (function (flag,meta24126){
this.flag = flag;
this.meta24126 = meta24126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24127,meta24126__$1){
var self__ = this;
var _24127__$1 = this;
return (new cljs.core.async.t_cljs$core$async24125(self__.flag,meta24126__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async24125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24127){
var self__ = this;
var _24127__$1 = this;
return self__.meta24126;
});})(flag))
;


cljs.core.async.t_cljs$core$async24125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async24125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async24125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24125.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24126], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24125";

cljs.core.async.t_cljs$core$async24125.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24125");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24125 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24125(flag__$1,meta24126){
return (new cljs.core.async.t_cljs$core$async24125(flag__$1,meta24126));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24125(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24131 = (function (flag,cb,meta24132){
this.flag = flag;
this.cb = cb;
this.meta24132 = meta24132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24133,meta24132__$1){
var self__ = this;
var _24133__$1 = this;
return (new cljs.core.async.t_cljs$core$async24131(self__.flag,self__.cb,meta24132__$1));
});


cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24133){
var self__ = this;
var _24133__$1 = this;
return self__.meta24132;
});


cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24132], null);
});

cljs.core.async.t_cljs$core$async24131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24131";

cljs.core.async.t_cljs$core$async24131.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24131");
});

cljs.core.async.__GT_t_cljs$core$async24131 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24131(flag__$1,cb__$1,meta24132){
return (new cljs.core.async.t_cljs$core$async24131(flag__$1,cb__$1,meta24132));
});

}

return (new cljs.core.async.t_cljs$core$async24131(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24134_SHARP_){
var G__24138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24134_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24138) : fret.call(null,G__24138));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24135_SHARP_){
var G__24139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24135_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24139) : fret.call(null,G__24139));
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
var G__24140 = (i + (1));
i = G__24140;
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
var len__8739__auto___24146 = arguments.length;
var i__8740__auto___24147 = (0);
while(true){
if((i__8740__auto___24147 < len__8739__auto___24146)){
args__8746__auto__.push((arguments[i__8740__auto___24147]));

var G__24148 = (i__8740__auto___24147 + (1));
i__8740__auto___24147 = G__24148;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((1) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8747__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24143){
var map__24144 = p__24143;
var map__24144__$1 = ((((!((map__24144 == null)))?((((map__24144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24144):map__24144);
var opts = map__24144__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24141){
var G__24142 = cljs.core.first(seq24141);
var seq24141__$1 = cljs.core.next(seq24141);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24142,seq24141__$1);
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
var args24149 = [];
var len__8739__auto___24199 = arguments.length;
var i__8740__auto___24200 = (0);
while(true){
if((i__8740__auto___24200 < len__8739__auto___24199)){
args24149.push((arguments[i__8740__auto___24200]));

var G__24201 = (i__8740__auto___24200 + (1));
i__8740__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var G__24151 = args24149.length;
switch (G__24151) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24149.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24018__auto___24203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___24203){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___24203){
return (function (state_24175){
var state_val_24176 = (state_24175[(1)]);
if((state_val_24176 === (7))){
var inst_24171 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24177_24204 = state_24175__$1;
(statearr_24177_24204[(2)] = inst_24171);

(statearr_24177_24204[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (1))){
var state_24175__$1 = state_24175;
var statearr_24178_24205 = state_24175__$1;
(statearr_24178_24205[(2)] = null);

(statearr_24178_24205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (4))){
var inst_24154 = (state_24175[(7)]);
var inst_24154__$1 = (state_24175[(2)]);
var inst_24155 = (inst_24154__$1 == null);
var state_24175__$1 = (function (){var statearr_24179 = state_24175;
(statearr_24179[(7)] = inst_24154__$1);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24155)){
var statearr_24180_24206 = state_24175__$1;
(statearr_24180_24206[(1)] = (5));

} else {
var statearr_24181_24207 = state_24175__$1;
(statearr_24181_24207[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (13))){
var state_24175__$1 = state_24175;
var statearr_24182_24208 = state_24175__$1;
(statearr_24182_24208[(2)] = null);

(statearr_24182_24208[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (6))){
var inst_24154 = (state_24175[(7)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24175__$1,(11),to,inst_24154);
} else {
if((state_val_24176 === (3))){
var inst_24173 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24175__$1,inst_24173);
} else {
if((state_val_24176 === (12))){
var state_24175__$1 = state_24175;
var statearr_24183_24209 = state_24175__$1;
(statearr_24183_24209[(2)] = null);

(statearr_24183_24209[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (2))){
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24175__$1,(4),from);
} else {
if((state_val_24176 === (11))){
var inst_24164 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
if(cljs.core.truth_(inst_24164)){
var statearr_24184_24210 = state_24175__$1;
(statearr_24184_24210[(1)] = (12));

} else {
var statearr_24185_24211 = state_24175__$1;
(statearr_24185_24211[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (9))){
var state_24175__$1 = state_24175;
var statearr_24186_24212 = state_24175__$1;
(statearr_24186_24212[(2)] = null);

(statearr_24186_24212[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (5))){
var state_24175__$1 = state_24175;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24187_24213 = state_24175__$1;
(statearr_24187_24213[(1)] = (8));

} else {
var statearr_24188_24214 = state_24175__$1;
(statearr_24188_24214[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (14))){
var inst_24169 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24189_24215 = state_24175__$1;
(statearr_24189_24215[(2)] = inst_24169);

(statearr_24189_24215[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (10))){
var inst_24161 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24190_24216 = state_24175__$1;
(statearr_24190_24216[(2)] = inst_24161);

(statearr_24190_24216[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24176 === (8))){
var inst_24158 = cljs.core.async.close_BANG_(to);
var state_24175__$1 = state_24175;
var statearr_24191_24217 = state_24175__$1;
(statearr_24191_24217[(2)] = inst_24158);

(statearr_24191_24217[(1)] = (10));


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
});})(c__24018__auto___24203))
;
return ((function (switch__23892__auto__,c__24018__auto___24203){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_24195 = [null,null,null,null,null,null,null,null];
(statearr_24195[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_24195[(1)] = (1));

return statearr_24195;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_24175){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24175);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24196){if((e24196 instanceof Object)){
var ex__23896__auto__ = e24196;
var statearr_24197_24218 = state_24175;
(statearr_24197_24218[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24175);

return cljs.core.cst$kw$recur;
} else {
throw e24196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24219 = state_24175;
state_24175 = G__24219;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___24203))
})();
var state__24020__auto__ = (function (){var statearr_24198 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___24203);

return statearr_24198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___24203))
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
return (function (p__24407){
var vec__24408 = p__24407;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24408,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24408,(1),null);
var job = vec__24408;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24018__auto___24594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___24594,res,vec__24408,v,p,job,jobs,results){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___24594,res,vec__24408,v,p,job,jobs,results){
return (function (state_24415){
var state_val_24416 = (state_24415[(1)]);
if((state_val_24416 === (1))){
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24415__$1,(2),res,v);
} else {
if((state_val_24416 === (2))){
var inst_24412 = (state_24415[(2)]);
var inst_24413 = cljs.core.async.close_BANG_(res);
var state_24415__$1 = (function (){var statearr_24417 = state_24415;
(statearr_24417[(7)] = inst_24412);

return statearr_24417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24415__$1,inst_24413);
} else {
return null;
}
}
});})(c__24018__auto___24594,res,vec__24408,v,p,job,jobs,results))
;
return ((function (switch__23892__auto__,c__24018__auto___24594,res,vec__24408,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0 = (function (){
var statearr_24421 = [null,null,null,null,null,null,null,null];
(statearr_24421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__);

(statearr_24421[(1)] = (1));

return statearr_24421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1 = (function (state_24415){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24415);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24422){if((e24422 instanceof Object)){
var ex__23896__auto__ = e24422;
var statearr_24423_24595 = state_24415;
(statearr_24423_24595[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24415);

return cljs.core.cst$kw$recur;
} else {
throw e24422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24596 = state_24415;
state_24415 = G__24596;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = function(state_24415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1.call(this,state_24415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___24594,res,vec__24408,v,p,job,jobs,results))
})();
var state__24020__auto__ = (function (){var statearr_24424 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___24594);

return statearr_24424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___24594,res,vec__24408,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24425){
var vec__24426 = p__24425;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24426,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24426,(1),null);
var job = vec__24426;
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
var n__8539__auto___24597 = n;
var __24598 = (0);
while(true){
if((__24598 < n__8539__auto___24597)){
var G__24429_24599 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24429_24599) {
case "compute":
var c__24018__auto___24601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24598,c__24018__auto___24601,G__24429_24599,n__8539__auto___24597,jobs,results,process,async){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (__24598,c__24018__auto___24601,G__24429_24599,n__8539__auto___24597,jobs,results,process,async){
return (function (state_24442){
var state_val_24443 = (state_24442[(1)]);
if((state_val_24443 === (1))){
var state_24442__$1 = state_24442;
var statearr_24444_24602 = state_24442__$1;
(statearr_24444_24602[(2)] = null);

(statearr_24444_24602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24443 === (2))){
var state_24442__$1 = state_24442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24442__$1,(4),jobs);
} else {
if((state_val_24443 === (3))){
var inst_24440 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24442__$1,inst_24440);
} else {
if((state_val_24443 === (4))){
var inst_24432 = (state_24442[(2)]);
var inst_24433 = process(inst_24432);
var state_24442__$1 = state_24442;
if(cljs.core.truth_(inst_24433)){
var statearr_24445_24603 = state_24442__$1;
(statearr_24445_24603[(1)] = (5));

} else {
var statearr_24446_24604 = state_24442__$1;
(statearr_24446_24604[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24443 === (5))){
var state_24442__$1 = state_24442;
var statearr_24447_24605 = state_24442__$1;
(statearr_24447_24605[(2)] = null);

(statearr_24447_24605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24443 === (6))){
var state_24442__$1 = state_24442;
var statearr_24448_24606 = state_24442__$1;
(statearr_24448_24606[(2)] = null);

(statearr_24448_24606[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24443 === (7))){
var inst_24438 = (state_24442[(2)]);
var state_24442__$1 = state_24442;
var statearr_24449_24607 = state_24442__$1;
(statearr_24449_24607[(2)] = inst_24438);

(statearr_24449_24607[(1)] = (3));


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
});})(__24598,c__24018__auto___24601,G__24429_24599,n__8539__auto___24597,jobs,results,process,async))
;
return ((function (__24598,switch__23892__auto__,c__24018__auto___24601,G__24429_24599,n__8539__auto___24597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0 = (function (){
var statearr_24453 = [null,null,null,null,null,null,null];
(statearr_24453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__);

(statearr_24453[(1)] = (1));

return statearr_24453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1 = (function (state_24442){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24442);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24454){if((e24454 instanceof Object)){
var ex__23896__auto__ = e24454;
var statearr_24455_24608 = state_24442;
(statearr_24455_24608[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24442);

return cljs.core.cst$kw$recur;
} else {
throw e24454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24609 = state_24442;
state_24442 = G__24609;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = function(state_24442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1.call(this,state_24442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__;
})()
;})(__24598,switch__23892__auto__,c__24018__auto___24601,G__24429_24599,n__8539__auto___24597,jobs,results,process,async))
})();
var state__24020__auto__ = (function (){var statearr_24456 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___24601);

return statearr_24456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(__24598,c__24018__auto___24601,G__24429_24599,n__8539__auto___24597,jobs,results,process,async))
);


break;
case "async":
var c__24018__auto___24610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24598,c__24018__auto___24610,G__24429_24599,n__8539__auto___24597,jobs,results,process,async){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (__24598,c__24018__auto___24610,G__24429_24599,n__8539__auto___24597,jobs,results,process,async){
return (function (state_24469){
var state_val_24470 = (state_24469[(1)]);
if((state_val_24470 === (1))){
var state_24469__$1 = state_24469;
var statearr_24471_24611 = state_24469__$1;
(statearr_24471_24611[(2)] = null);

(statearr_24471_24611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24470 === (2))){
var state_24469__$1 = state_24469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24469__$1,(4),jobs);
} else {
if((state_val_24470 === (3))){
var inst_24467 = (state_24469[(2)]);
var state_24469__$1 = state_24469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24469__$1,inst_24467);
} else {
if((state_val_24470 === (4))){
var inst_24459 = (state_24469[(2)]);
var inst_24460 = async(inst_24459);
var state_24469__$1 = state_24469;
if(cljs.core.truth_(inst_24460)){
var statearr_24472_24612 = state_24469__$1;
(statearr_24472_24612[(1)] = (5));

} else {
var statearr_24473_24613 = state_24469__$1;
(statearr_24473_24613[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24470 === (5))){
var state_24469__$1 = state_24469;
var statearr_24474_24614 = state_24469__$1;
(statearr_24474_24614[(2)] = null);

(statearr_24474_24614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24470 === (6))){
var state_24469__$1 = state_24469;
var statearr_24475_24615 = state_24469__$1;
(statearr_24475_24615[(2)] = null);

(statearr_24475_24615[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24470 === (7))){
var inst_24465 = (state_24469[(2)]);
var state_24469__$1 = state_24469;
var statearr_24476_24616 = state_24469__$1;
(statearr_24476_24616[(2)] = inst_24465);

(statearr_24476_24616[(1)] = (3));


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
});})(__24598,c__24018__auto___24610,G__24429_24599,n__8539__auto___24597,jobs,results,process,async))
;
return ((function (__24598,switch__23892__auto__,c__24018__auto___24610,G__24429_24599,n__8539__auto___24597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0 = (function (){
var statearr_24480 = [null,null,null,null,null,null,null];
(statearr_24480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__);

(statearr_24480[(1)] = (1));

return statearr_24480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1 = (function (state_24469){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24469);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24481){if((e24481 instanceof Object)){
var ex__23896__auto__ = e24481;
var statearr_24482_24617 = state_24469;
(statearr_24482_24617[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24469);

return cljs.core.cst$kw$recur;
} else {
throw e24481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24618 = state_24469;
state_24469 = G__24618;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = function(state_24469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1.call(this,state_24469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__;
})()
;})(__24598,switch__23892__auto__,c__24018__auto___24610,G__24429_24599,n__8539__auto___24597,jobs,results,process,async))
})();
var state__24020__auto__ = (function (){var statearr_24483 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___24610);

return statearr_24483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(__24598,c__24018__auto___24610,G__24429_24599,n__8539__auto___24597,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24619 = (__24598 + (1));
__24598 = G__24619;
continue;
} else {
}
break;
}

var c__24018__auto___24620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___24620,jobs,results,process,async){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___24620,jobs,results,process,async){
return (function (state_24505){
var state_val_24506 = (state_24505[(1)]);
if((state_val_24506 === (1))){
var state_24505__$1 = state_24505;
var statearr_24507_24621 = state_24505__$1;
(statearr_24507_24621[(2)] = null);

(statearr_24507_24621[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24506 === (2))){
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24505__$1,(4),from);
} else {
if((state_val_24506 === (3))){
var inst_24503 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24505__$1,inst_24503);
} else {
if((state_val_24506 === (4))){
var inst_24486 = (state_24505[(7)]);
var inst_24486__$1 = (state_24505[(2)]);
var inst_24487 = (inst_24486__$1 == null);
var state_24505__$1 = (function (){var statearr_24508 = state_24505;
(statearr_24508[(7)] = inst_24486__$1);

return statearr_24508;
})();
if(cljs.core.truth_(inst_24487)){
var statearr_24509_24622 = state_24505__$1;
(statearr_24509_24622[(1)] = (5));

} else {
var statearr_24510_24623 = state_24505__$1;
(statearr_24510_24623[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24506 === (5))){
var inst_24489 = cljs.core.async.close_BANG_(jobs);
var state_24505__$1 = state_24505;
var statearr_24511_24624 = state_24505__$1;
(statearr_24511_24624[(2)] = inst_24489);

(statearr_24511_24624[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24506 === (6))){
var inst_24491 = (state_24505[(8)]);
var inst_24486 = (state_24505[(7)]);
var inst_24491__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24493 = [inst_24486,inst_24491__$1];
var inst_24494 = (new cljs.core.PersistentVector(null,2,(5),inst_24492,inst_24493,null));
var state_24505__$1 = (function (){var statearr_24512 = state_24505;
(statearr_24512[(8)] = inst_24491__$1);

return statearr_24512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24505__$1,(8),jobs,inst_24494);
} else {
if((state_val_24506 === (7))){
var inst_24501 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
var statearr_24513_24625 = state_24505__$1;
(statearr_24513_24625[(2)] = inst_24501);

(statearr_24513_24625[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24506 === (8))){
var inst_24491 = (state_24505[(8)]);
var inst_24496 = (state_24505[(2)]);
var state_24505__$1 = (function (){var statearr_24514 = state_24505;
(statearr_24514[(9)] = inst_24496);

return statearr_24514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24505__$1,(9),results,inst_24491);
} else {
if((state_val_24506 === (9))){
var inst_24498 = (state_24505[(2)]);
var state_24505__$1 = (function (){var statearr_24515 = state_24505;
(statearr_24515[(10)] = inst_24498);

return statearr_24515;
})();
var statearr_24516_24626 = state_24505__$1;
(statearr_24516_24626[(2)] = null);

(statearr_24516_24626[(1)] = (2));


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
});})(c__24018__auto___24620,jobs,results,process,async))
;
return ((function (switch__23892__auto__,c__24018__auto___24620,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0 = (function (){
var statearr_24520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__);

(statearr_24520[(1)] = (1));

return statearr_24520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1 = (function (state_24505){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24505);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24521){if((e24521 instanceof Object)){
var ex__23896__auto__ = e24521;
var statearr_24522_24627 = state_24505;
(statearr_24522_24627[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24505);

return cljs.core.cst$kw$recur;
} else {
throw e24521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24628 = state_24505;
state_24505 = G__24628;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = function(state_24505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1.call(this,state_24505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___24620,jobs,results,process,async))
})();
var state__24020__auto__ = (function (){var statearr_24523 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___24620);

return statearr_24523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___24620,jobs,results,process,async))
);


var c__24018__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto__,jobs,results,process,async){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto__,jobs,results,process,async){
return (function (state_24561){
var state_val_24562 = (state_24561[(1)]);
if((state_val_24562 === (7))){
var inst_24557 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24563_24629 = state_24561__$1;
(statearr_24563_24629[(2)] = inst_24557);

(statearr_24563_24629[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (20))){
var state_24561__$1 = state_24561;
var statearr_24564_24630 = state_24561__$1;
(statearr_24564_24630[(2)] = null);

(statearr_24564_24630[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (1))){
var state_24561__$1 = state_24561;
var statearr_24565_24631 = state_24561__$1;
(statearr_24565_24631[(2)] = null);

(statearr_24565_24631[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (4))){
var inst_24526 = (state_24561[(7)]);
var inst_24526__$1 = (state_24561[(2)]);
var inst_24527 = (inst_24526__$1 == null);
var state_24561__$1 = (function (){var statearr_24566 = state_24561;
(statearr_24566[(7)] = inst_24526__$1);

return statearr_24566;
})();
if(cljs.core.truth_(inst_24527)){
var statearr_24567_24632 = state_24561__$1;
(statearr_24567_24632[(1)] = (5));

} else {
var statearr_24568_24633 = state_24561__$1;
(statearr_24568_24633[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (15))){
var inst_24539 = (state_24561[(8)]);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24561__$1,(18),to,inst_24539);
} else {
if((state_val_24562 === (21))){
var inst_24552 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24569_24634 = state_24561__$1;
(statearr_24569_24634[(2)] = inst_24552);

(statearr_24569_24634[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (13))){
var inst_24554 = (state_24561[(2)]);
var state_24561__$1 = (function (){var statearr_24570 = state_24561;
(statearr_24570[(9)] = inst_24554);

return statearr_24570;
})();
var statearr_24571_24635 = state_24561__$1;
(statearr_24571_24635[(2)] = null);

(statearr_24571_24635[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (6))){
var inst_24526 = (state_24561[(7)]);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24561__$1,(11),inst_24526);
} else {
if((state_val_24562 === (17))){
var inst_24547 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
if(cljs.core.truth_(inst_24547)){
var statearr_24572_24636 = state_24561__$1;
(statearr_24572_24636[(1)] = (19));

} else {
var statearr_24573_24637 = state_24561__$1;
(statearr_24573_24637[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (3))){
var inst_24559 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24561__$1,inst_24559);
} else {
if((state_val_24562 === (12))){
var inst_24536 = (state_24561[(10)]);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24561__$1,(14),inst_24536);
} else {
if((state_val_24562 === (2))){
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24561__$1,(4),results);
} else {
if((state_val_24562 === (19))){
var state_24561__$1 = state_24561;
var statearr_24574_24638 = state_24561__$1;
(statearr_24574_24638[(2)] = null);

(statearr_24574_24638[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (11))){
var inst_24536 = (state_24561[(2)]);
var state_24561__$1 = (function (){var statearr_24575 = state_24561;
(statearr_24575[(10)] = inst_24536);

return statearr_24575;
})();
var statearr_24576_24639 = state_24561__$1;
(statearr_24576_24639[(2)] = null);

(statearr_24576_24639[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (9))){
var state_24561__$1 = state_24561;
var statearr_24577_24640 = state_24561__$1;
(statearr_24577_24640[(2)] = null);

(statearr_24577_24640[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (5))){
var state_24561__$1 = state_24561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24578_24641 = state_24561__$1;
(statearr_24578_24641[(1)] = (8));

} else {
var statearr_24579_24642 = state_24561__$1;
(statearr_24579_24642[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (14))){
var inst_24541 = (state_24561[(11)]);
var inst_24539 = (state_24561[(8)]);
var inst_24539__$1 = (state_24561[(2)]);
var inst_24540 = (inst_24539__$1 == null);
var inst_24541__$1 = cljs.core.not(inst_24540);
var state_24561__$1 = (function (){var statearr_24580 = state_24561;
(statearr_24580[(11)] = inst_24541__$1);

(statearr_24580[(8)] = inst_24539__$1);

return statearr_24580;
})();
if(inst_24541__$1){
var statearr_24581_24643 = state_24561__$1;
(statearr_24581_24643[(1)] = (15));

} else {
var statearr_24582_24644 = state_24561__$1;
(statearr_24582_24644[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (16))){
var inst_24541 = (state_24561[(11)]);
var state_24561__$1 = state_24561;
var statearr_24583_24645 = state_24561__$1;
(statearr_24583_24645[(2)] = inst_24541);

(statearr_24583_24645[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (10))){
var inst_24533 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24584_24646 = state_24561__$1;
(statearr_24584_24646[(2)] = inst_24533);

(statearr_24584_24646[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (18))){
var inst_24544 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24585_24647 = state_24561__$1;
(statearr_24585_24647[(2)] = inst_24544);

(statearr_24585_24647[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24562 === (8))){
var inst_24530 = cljs.core.async.close_BANG_(to);
var state_24561__$1 = state_24561;
var statearr_24586_24648 = state_24561__$1;
(statearr_24586_24648[(2)] = inst_24530);

(statearr_24586_24648[(1)] = (10));


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
});})(c__24018__auto__,jobs,results,process,async))
;
return ((function (switch__23892__auto__,c__24018__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0 = (function (){
var statearr_24590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__);

(statearr_24590[(1)] = (1));

return statearr_24590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1 = (function (state_24561){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24561);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24591){if((e24591 instanceof Object)){
var ex__23896__auto__ = e24591;
var statearr_24592_24649 = state_24561;
(statearr_24592_24649[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24561);

return cljs.core.cst$kw$recur;
} else {
throw e24591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24650 = state_24561;
state_24561 = G__24650;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__ = function(state_24561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1.call(this,state_24561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto__,jobs,results,process,async))
})();
var state__24020__auto__ = (function (){var statearr_24593 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_24593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto__,jobs,results,process,async))
);

return c__24018__auto__;
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
var args24651 = [];
var len__8739__auto___24654 = arguments.length;
var i__8740__auto___24655 = (0);
while(true){
if((i__8740__auto___24655 < len__8739__auto___24654)){
args24651.push((arguments[i__8740__auto___24655]));

var G__24656 = (i__8740__auto___24655 + (1));
i__8740__auto___24655 = G__24656;
continue;
} else {
}
break;
}

var G__24653 = args24651.length;
switch (G__24653) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24651.length)].join('')));

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
var args24658 = [];
var len__8739__auto___24661 = arguments.length;
var i__8740__auto___24662 = (0);
while(true){
if((i__8740__auto___24662 < len__8739__auto___24661)){
args24658.push((arguments[i__8740__auto___24662]));

var G__24663 = (i__8740__auto___24662 + (1));
i__8740__auto___24662 = G__24663;
continue;
} else {
}
break;
}

var G__24660 = args24658.length;
switch (G__24660) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24658.length)].join('')));

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
var args24665 = [];
var len__8739__auto___24718 = arguments.length;
var i__8740__auto___24719 = (0);
while(true){
if((i__8740__auto___24719 < len__8739__auto___24718)){
args24665.push((arguments[i__8740__auto___24719]));

var G__24720 = (i__8740__auto___24719 + (1));
i__8740__auto___24719 = G__24720;
continue;
} else {
}
break;
}

var G__24667 = args24665.length;
switch (G__24667) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24665.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__24018__auto___24722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___24722,tc,fc){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___24722,tc,fc){
return (function (state_24693){
var state_val_24694 = (state_24693[(1)]);
if((state_val_24694 === (7))){
var inst_24689 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
var statearr_24695_24723 = state_24693__$1;
(statearr_24695_24723[(2)] = inst_24689);

(statearr_24695_24723[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (1))){
var state_24693__$1 = state_24693;
var statearr_24696_24724 = state_24693__$1;
(statearr_24696_24724[(2)] = null);

(statearr_24696_24724[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (4))){
var inst_24670 = (state_24693[(7)]);
var inst_24670__$1 = (state_24693[(2)]);
var inst_24671 = (inst_24670__$1 == null);
var state_24693__$1 = (function (){var statearr_24697 = state_24693;
(statearr_24697[(7)] = inst_24670__$1);

return statearr_24697;
})();
if(cljs.core.truth_(inst_24671)){
var statearr_24698_24725 = state_24693__$1;
(statearr_24698_24725[(1)] = (5));

} else {
var statearr_24699_24726 = state_24693__$1;
(statearr_24699_24726[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (13))){
var state_24693__$1 = state_24693;
var statearr_24700_24727 = state_24693__$1;
(statearr_24700_24727[(2)] = null);

(statearr_24700_24727[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (6))){
var inst_24670 = (state_24693[(7)]);
var inst_24676 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24670) : p.call(null,inst_24670));
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24676)){
var statearr_24701_24728 = state_24693__$1;
(statearr_24701_24728[(1)] = (9));

} else {
var statearr_24702_24729 = state_24693__$1;
(statearr_24702_24729[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (3))){
var inst_24691 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24693__$1,inst_24691);
} else {
if((state_val_24694 === (12))){
var state_24693__$1 = state_24693;
var statearr_24703_24730 = state_24693__$1;
(statearr_24703_24730[(2)] = null);

(statearr_24703_24730[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (2))){
var state_24693__$1 = state_24693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24693__$1,(4),ch);
} else {
if((state_val_24694 === (11))){
var inst_24670 = (state_24693[(7)]);
var inst_24680 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24693__$1,(8),inst_24680,inst_24670);
} else {
if((state_val_24694 === (9))){
var state_24693__$1 = state_24693;
var statearr_24704_24731 = state_24693__$1;
(statearr_24704_24731[(2)] = tc);

(statearr_24704_24731[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (5))){
var inst_24673 = cljs.core.async.close_BANG_(tc);
var inst_24674 = cljs.core.async.close_BANG_(fc);
var state_24693__$1 = (function (){var statearr_24705 = state_24693;
(statearr_24705[(8)] = inst_24673);

return statearr_24705;
})();
var statearr_24706_24732 = state_24693__$1;
(statearr_24706_24732[(2)] = inst_24674);

(statearr_24706_24732[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (14))){
var inst_24687 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
var statearr_24707_24733 = state_24693__$1;
(statearr_24707_24733[(2)] = inst_24687);

(statearr_24707_24733[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (10))){
var state_24693__$1 = state_24693;
var statearr_24708_24734 = state_24693__$1;
(statearr_24708_24734[(2)] = fc);

(statearr_24708_24734[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24694 === (8))){
var inst_24682 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24682)){
var statearr_24709_24735 = state_24693__$1;
(statearr_24709_24735[(1)] = (12));

} else {
var statearr_24710_24736 = state_24693__$1;
(statearr_24710_24736[(1)] = (13));

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
});})(c__24018__auto___24722,tc,fc))
;
return ((function (switch__23892__auto__,c__24018__auto___24722,tc,fc){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_24714 = [null,null,null,null,null,null,null,null,null];
(statearr_24714[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_24714[(1)] = (1));

return statearr_24714;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_24693){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24693);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24715){if((e24715 instanceof Object)){
var ex__23896__auto__ = e24715;
var statearr_24716_24737 = state_24693;
(statearr_24716_24737[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24693);

return cljs.core.cst$kw$recur;
} else {
throw e24715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24738 = state_24693;
state_24693 = G__24738;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_24693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_24693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___24722,tc,fc))
})();
var state__24020__auto__ = (function (){var statearr_24717 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___24722);

return statearr_24717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___24722,tc,fc))
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
var c__24018__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto__){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto__){
return (function (state_24802){
var state_val_24803 = (state_24802[(1)]);
if((state_val_24803 === (7))){
var inst_24798 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24804_24825 = state_24802__$1;
(statearr_24804_24825[(2)] = inst_24798);

(statearr_24804_24825[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24803 === (1))){
var inst_24782 = init;
var state_24802__$1 = (function (){var statearr_24805 = state_24802;
(statearr_24805[(7)] = inst_24782);

return statearr_24805;
})();
var statearr_24806_24826 = state_24802__$1;
(statearr_24806_24826[(2)] = null);

(statearr_24806_24826[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24803 === (4))){
var inst_24785 = (state_24802[(8)]);
var inst_24785__$1 = (state_24802[(2)]);
var inst_24786 = (inst_24785__$1 == null);
var state_24802__$1 = (function (){var statearr_24807 = state_24802;
(statearr_24807[(8)] = inst_24785__$1);

return statearr_24807;
})();
if(cljs.core.truth_(inst_24786)){
var statearr_24808_24827 = state_24802__$1;
(statearr_24808_24827[(1)] = (5));

} else {
var statearr_24809_24828 = state_24802__$1;
(statearr_24809_24828[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24803 === (6))){
var inst_24782 = (state_24802[(7)]);
var inst_24789 = (state_24802[(9)]);
var inst_24785 = (state_24802[(8)]);
var inst_24789__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24782,inst_24785) : f.call(null,inst_24782,inst_24785));
var inst_24790 = cljs.core.reduced_QMARK_(inst_24789__$1);
var state_24802__$1 = (function (){var statearr_24810 = state_24802;
(statearr_24810[(9)] = inst_24789__$1);

return statearr_24810;
})();
if(inst_24790){
var statearr_24811_24829 = state_24802__$1;
(statearr_24811_24829[(1)] = (8));

} else {
var statearr_24812_24830 = state_24802__$1;
(statearr_24812_24830[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24803 === (3))){
var inst_24800 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24802__$1,inst_24800);
} else {
if((state_val_24803 === (2))){
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24802__$1,(4),ch);
} else {
if((state_val_24803 === (9))){
var inst_24789 = (state_24802[(9)]);
var inst_24782 = inst_24789;
var state_24802__$1 = (function (){var statearr_24813 = state_24802;
(statearr_24813[(7)] = inst_24782);

return statearr_24813;
})();
var statearr_24814_24831 = state_24802__$1;
(statearr_24814_24831[(2)] = null);

(statearr_24814_24831[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24803 === (5))){
var inst_24782 = (state_24802[(7)]);
var state_24802__$1 = state_24802;
var statearr_24815_24832 = state_24802__$1;
(statearr_24815_24832[(2)] = inst_24782);

(statearr_24815_24832[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24803 === (10))){
var inst_24796 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24816_24833 = state_24802__$1;
(statearr_24816_24833[(2)] = inst_24796);

(statearr_24816_24833[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24803 === (8))){
var inst_24789 = (state_24802[(9)]);
var inst_24792 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_24789) : cljs.core.deref.call(null,inst_24789));
var state_24802__$1 = state_24802;
var statearr_24817_24834 = state_24802__$1;
(statearr_24817_24834[(2)] = inst_24792);

(statearr_24817_24834[(1)] = (10));


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
});})(c__24018__auto__))
;
return ((function (switch__23892__auto__,c__24018__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23893__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23893__auto____0 = (function (){
var statearr_24821 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24821[(0)] = cljs$core$async$reduce_$_state_machine__23893__auto__);

(statearr_24821[(1)] = (1));

return statearr_24821;
});
var cljs$core$async$reduce_$_state_machine__23893__auto____1 = (function (state_24802){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24802);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24822){if((e24822 instanceof Object)){
var ex__23896__auto__ = e24822;
var statearr_24823_24835 = state_24802;
(statearr_24823_24835[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24802);

return cljs.core.cst$kw$recur;
} else {
throw e24822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24836 = state_24802;
state_24802 = G__24836;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23893__auto__ = function(state_24802){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23893__auto____1.call(this,state_24802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23893__auto____0;
cljs$core$async$reduce_$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23893__auto____1;
return cljs$core$async$reduce_$_state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto__))
})();
var state__24020__auto__ = (function (){var statearr_24824 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_24824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto__))
);

return c__24018__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24018__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto__,f__$1){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto__,f__$1){
return (function (state_24856){
var state_val_24857 = (state_24856[(1)]);
if((state_val_24857 === (1))){
var inst_24851 = cljs.core.async.reduce(f__$1,init,ch);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24856__$1,(2),inst_24851);
} else {
if((state_val_24857 === (2))){
var inst_24853 = (state_24856[(2)]);
var inst_24854 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24853) : f__$1.call(null,inst_24853));
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24856__$1,inst_24854);
} else {
return null;
}
}
});})(c__24018__auto__,f__$1))
;
return ((function (switch__23892__auto__,c__24018__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23893__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23893__auto____0 = (function (){
var statearr_24861 = [null,null,null,null,null,null,null];
(statearr_24861[(0)] = cljs$core$async$transduce_$_state_machine__23893__auto__);

(statearr_24861[(1)] = (1));

return statearr_24861;
});
var cljs$core$async$transduce_$_state_machine__23893__auto____1 = (function (state_24856){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24856);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24862){if((e24862 instanceof Object)){
var ex__23896__auto__ = e24862;
var statearr_24863_24865 = state_24856;
(statearr_24863_24865[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24856);

return cljs.core.cst$kw$recur;
} else {
throw e24862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24866 = state_24856;
state_24856 = G__24866;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23893__auto__ = function(state_24856){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23893__auto____1.call(this,state_24856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23893__auto____0;
cljs$core$async$transduce_$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23893__auto____1;
return cljs$core$async$transduce_$_state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto__,f__$1))
})();
var state__24020__auto__ = (function (){var statearr_24864 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_24864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto__,f__$1))
);

return c__24018__auto__;
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
var args24867 = [];
var len__8739__auto___24919 = arguments.length;
var i__8740__auto___24920 = (0);
while(true){
if((i__8740__auto___24920 < len__8739__auto___24919)){
args24867.push((arguments[i__8740__auto___24920]));

var G__24921 = (i__8740__auto___24920 + (1));
i__8740__auto___24920 = G__24921;
continue;
} else {
}
break;
}

var G__24869 = args24867.length;
switch (G__24869) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24867.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24018__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto__){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto__){
return (function (state_24894){
var state_val_24895 = (state_24894[(1)]);
if((state_val_24895 === (7))){
var inst_24876 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
var statearr_24896_24923 = state_24894__$1;
(statearr_24896_24923[(2)] = inst_24876);

(statearr_24896_24923[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (1))){
var inst_24870 = cljs.core.seq(coll);
var inst_24871 = inst_24870;
var state_24894__$1 = (function (){var statearr_24897 = state_24894;
(statearr_24897[(7)] = inst_24871);

return statearr_24897;
})();
var statearr_24898_24924 = state_24894__$1;
(statearr_24898_24924[(2)] = null);

(statearr_24898_24924[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (4))){
var inst_24871 = (state_24894[(7)]);
var inst_24874 = cljs.core.first(inst_24871);
var state_24894__$1 = state_24894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24894__$1,(7),ch,inst_24874);
} else {
if((state_val_24895 === (13))){
var inst_24888 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
var statearr_24899_24925 = state_24894__$1;
(statearr_24899_24925[(2)] = inst_24888);

(statearr_24899_24925[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (6))){
var inst_24879 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
if(cljs.core.truth_(inst_24879)){
var statearr_24900_24926 = state_24894__$1;
(statearr_24900_24926[(1)] = (8));

} else {
var statearr_24901_24927 = state_24894__$1;
(statearr_24901_24927[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (3))){
var inst_24892 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24894__$1,inst_24892);
} else {
if((state_val_24895 === (12))){
var state_24894__$1 = state_24894;
var statearr_24902_24928 = state_24894__$1;
(statearr_24902_24928[(2)] = null);

(statearr_24902_24928[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (2))){
var inst_24871 = (state_24894[(7)]);
var state_24894__$1 = state_24894;
if(cljs.core.truth_(inst_24871)){
var statearr_24903_24929 = state_24894__$1;
(statearr_24903_24929[(1)] = (4));

} else {
var statearr_24904_24930 = state_24894__$1;
(statearr_24904_24930[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (11))){
var inst_24885 = cljs.core.async.close_BANG_(ch);
var state_24894__$1 = state_24894;
var statearr_24905_24931 = state_24894__$1;
(statearr_24905_24931[(2)] = inst_24885);

(statearr_24905_24931[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (9))){
var state_24894__$1 = state_24894;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24906_24932 = state_24894__$1;
(statearr_24906_24932[(1)] = (11));

} else {
var statearr_24907_24933 = state_24894__$1;
(statearr_24907_24933[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (5))){
var inst_24871 = (state_24894[(7)]);
var state_24894__$1 = state_24894;
var statearr_24908_24934 = state_24894__$1;
(statearr_24908_24934[(2)] = inst_24871);

(statearr_24908_24934[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (10))){
var inst_24890 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
var statearr_24909_24935 = state_24894__$1;
(statearr_24909_24935[(2)] = inst_24890);

(statearr_24909_24935[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24895 === (8))){
var inst_24871 = (state_24894[(7)]);
var inst_24881 = cljs.core.next(inst_24871);
var inst_24871__$1 = inst_24881;
var state_24894__$1 = (function (){var statearr_24910 = state_24894;
(statearr_24910[(7)] = inst_24871__$1);

return statearr_24910;
})();
var statearr_24911_24936 = state_24894__$1;
(statearr_24911_24936[(2)] = null);

(statearr_24911_24936[(1)] = (2));


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
});})(c__24018__auto__))
;
return ((function (switch__23892__auto__,c__24018__auto__){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_24915 = [null,null,null,null,null,null,null,null];
(statearr_24915[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_24915[(1)] = (1));

return statearr_24915;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_24894){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_24894);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e24916){if((e24916 instanceof Object)){
var ex__23896__auto__ = e24916;
var statearr_24917_24937 = state_24894;
(statearr_24917_24937[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24894);

return cljs.core.cst$kw$recur;
} else {
throw e24916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__24938 = state_24894;
state_24894 = G__24938;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_24894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_24894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto__))
})();
var state__24020__auto__ = (function (){var statearr_24918 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_24918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_24918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto__))
);

return c__24018__auto__;
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
var cs = (function (){var G__25167 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25167) : cljs.core.atom.call(null,G__25167));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25168 = (function (ch,cs,meta25169){
this.ch = ch;
this.cs = cs;
this.meta25169 = meta25169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25170,meta25169__$1){
var self__ = this;
var _25170__$1 = this;
return (new cljs.core.async.t_cljs$core$async25168(self__.ch,self__.cs,meta25169__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25170){
var self__ = this;
var _25170__$1 = this;
return self__.meta25169;
});})(cs))
;


cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25168.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25171_25395 = self__.cs;
var G__25172_25396 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25171_25395,G__25172_25396) : cljs.core.reset_BANG_.call(null,G__25171_25395,G__25172_25396));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25168.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25169], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25168";

cljs.core.async.t_cljs$core$async25168.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25168");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25168 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25168(ch__$1,cs__$1,meta25169){
return (new cljs.core.async.t_cljs$core$async25168(ch__$1,cs__$1,meta25169));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25168(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24018__auto___25397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___25397,cs,m,dchan,dctr,done){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___25397,cs,m,dchan,dctr,done){
return (function (state_25307){
var state_val_25308 = (state_25307[(1)]);
if((state_val_25308 === (7))){
var inst_25303 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25309_25398 = state_25307__$1;
(statearr_25309_25398[(2)] = inst_25303);

(statearr_25309_25398[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (20))){
var inst_25206 = (state_25307[(7)]);
var inst_25218 = cljs.core.first(inst_25206);
var inst_25219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25218,(0),null);
var inst_25220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25218,(1),null);
var state_25307__$1 = (function (){var statearr_25310 = state_25307;
(statearr_25310[(8)] = inst_25219);

return statearr_25310;
})();
if(cljs.core.truth_(inst_25220)){
var statearr_25311_25399 = state_25307__$1;
(statearr_25311_25399[(1)] = (22));

} else {
var statearr_25312_25400 = state_25307__$1;
(statearr_25312_25400[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (27))){
var inst_25250 = (state_25307[(9)]);
var inst_25175 = (state_25307[(10)]);
var inst_25255 = (state_25307[(11)]);
var inst_25248 = (state_25307[(12)]);
var inst_25255__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25248,inst_25250);
var inst_25256 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25255__$1,inst_25175,done);
var state_25307__$1 = (function (){var statearr_25313 = state_25307;
(statearr_25313[(11)] = inst_25255__$1);

return statearr_25313;
})();
if(cljs.core.truth_(inst_25256)){
var statearr_25314_25401 = state_25307__$1;
(statearr_25314_25401[(1)] = (30));

} else {
var statearr_25315_25402 = state_25307__$1;
(statearr_25315_25402[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (1))){
var state_25307__$1 = state_25307;
var statearr_25316_25403 = state_25307__$1;
(statearr_25316_25403[(2)] = null);

(statearr_25316_25403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (24))){
var inst_25206 = (state_25307[(7)]);
var inst_25225 = (state_25307[(2)]);
var inst_25226 = cljs.core.next(inst_25206);
var inst_25184 = inst_25226;
var inst_25185 = null;
var inst_25186 = (0);
var inst_25187 = (0);
var state_25307__$1 = (function (){var statearr_25317 = state_25307;
(statearr_25317[(13)] = inst_25225);

(statearr_25317[(14)] = inst_25186);

(statearr_25317[(15)] = inst_25184);

(statearr_25317[(16)] = inst_25185);

(statearr_25317[(17)] = inst_25187);

return statearr_25317;
})();
var statearr_25318_25404 = state_25307__$1;
(statearr_25318_25404[(2)] = null);

(statearr_25318_25404[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (39))){
var state_25307__$1 = state_25307;
var statearr_25322_25405 = state_25307__$1;
(statearr_25322_25405[(2)] = null);

(statearr_25322_25405[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (4))){
var inst_25175 = (state_25307[(10)]);
var inst_25175__$1 = (state_25307[(2)]);
var inst_25176 = (inst_25175__$1 == null);
var state_25307__$1 = (function (){var statearr_25323 = state_25307;
(statearr_25323[(10)] = inst_25175__$1);

return statearr_25323;
})();
if(cljs.core.truth_(inst_25176)){
var statearr_25324_25406 = state_25307__$1;
(statearr_25324_25406[(1)] = (5));

} else {
var statearr_25325_25407 = state_25307__$1;
(statearr_25325_25407[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (15))){
var inst_25186 = (state_25307[(14)]);
var inst_25184 = (state_25307[(15)]);
var inst_25185 = (state_25307[(16)]);
var inst_25187 = (state_25307[(17)]);
var inst_25202 = (state_25307[(2)]);
var inst_25203 = (inst_25187 + (1));
var tmp25319 = inst_25186;
var tmp25320 = inst_25184;
var tmp25321 = inst_25185;
var inst_25184__$1 = tmp25320;
var inst_25185__$1 = tmp25321;
var inst_25186__$1 = tmp25319;
var inst_25187__$1 = inst_25203;
var state_25307__$1 = (function (){var statearr_25326 = state_25307;
(statearr_25326[(14)] = inst_25186__$1);

(statearr_25326[(15)] = inst_25184__$1);

(statearr_25326[(16)] = inst_25185__$1);

(statearr_25326[(18)] = inst_25202);

(statearr_25326[(17)] = inst_25187__$1);

return statearr_25326;
})();
var statearr_25327_25408 = state_25307__$1;
(statearr_25327_25408[(2)] = null);

(statearr_25327_25408[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (21))){
var inst_25229 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25331_25409 = state_25307__$1;
(statearr_25331_25409[(2)] = inst_25229);

(statearr_25331_25409[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (31))){
var inst_25255 = (state_25307[(11)]);
var inst_25259 = done(null);
var inst_25260 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25255);
var state_25307__$1 = (function (){var statearr_25332 = state_25307;
(statearr_25332[(19)] = inst_25259);

return statearr_25332;
})();
var statearr_25333_25410 = state_25307__$1;
(statearr_25333_25410[(2)] = inst_25260);

(statearr_25333_25410[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (32))){
var inst_25250 = (state_25307[(9)]);
var inst_25247 = (state_25307[(20)]);
var inst_25248 = (state_25307[(12)]);
var inst_25249 = (state_25307[(21)]);
var inst_25262 = (state_25307[(2)]);
var inst_25263 = (inst_25250 + (1));
var tmp25328 = inst_25247;
var tmp25329 = inst_25248;
var tmp25330 = inst_25249;
var inst_25247__$1 = tmp25328;
var inst_25248__$1 = tmp25329;
var inst_25249__$1 = tmp25330;
var inst_25250__$1 = inst_25263;
var state_25307__$1 = (function (){var statearr_25334 = state_25307;
(statearr_25334[(9)] = inst_25250__$1);

(statearr_25334[(20)] = inst_25247__$1);

(statearr_25334[(22)] = inst_25262);

(statearr_25334[(12)] = inst_25248__$1);

(statearr_25334[(21)] = inst_25249__$1);

return statearr_25334;
})();
var statearr_25335_25411 = state_25307__$1;
(statearr_25335_25411[(2)] = null);

(statearr_25335_25411[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (40))){
var inst_25275 = (state_25307[(23)]);
var inst_25279 = done(null);
var inst_25280 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25275);
var state_25307__$1 = (function (){var statearr_25336 = state_25307;
(statearr_25336[(24)] = inst_25279);

return statearr_25336;
})();
var statearr_25337_25412 = state_25307__$1;
(statearr_25337_25412[(2)] = inst_25280);

(statearr_25337_25412[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (33))){
var inst_25266 = (state_25307[(25)]);
var inst_25268 = cljs.core.chunked_seq_QMARK_(inst_25266);
var state_25307__$1 = state_25307;
if(inst_25268){
var statearr_25338_25413 = state_25307__$1;
(statearr_25338_25413[(1)] = (36));

} else {
var statearr_25339_25414 = state_25307__$1;
(statearr_25339_25414[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (13))){
var inst_25196 = (state_25307[(26)]);
var inst_25199 = cljs.core.async.close_BANG_(inst_25196);
var state_25307__$1 = state_25307;
var statearr_25340_25415 = state_25307__$1;
(statearr_25340_25415[(2)] = inst_25199);

(statearr_25340_25415[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (22))){
var inst_25219 = (state_25307[(8)]);
var inst_25222 = cljs.core.async.close_BANG_(inst_25219);
var state_25307__$1 = state_25307;
var statearr_25341_25416 = state_25307__$1;
(statearr_25341_25416[(2)] = inst_25222);

(statearr_25341_25416[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (36))){
var inst_25266 = (state_25307[(25)]);
var inst_25270 = cljs.core.chunk_first(inst_25266);
var inst_25271 = cljs.core.chunk_rest(inst_25266);
var inst_25272 = cljs.core.count(inst_25270);
var inst_25247 = inst_25271;
var inst_25248 = inst_25270;
var inst_25249 = inst_25272;
var inst_25250 = (0);
var state_25307__$1 = (function (){var statearr_25342 = state_25307;
(statearr_25342[(9)] = inst_25250);

(statearr_25342[(20)] = inst_25247);

(statearr_25342[(12)] = inst_25248);

(statearr_25342[(21)] = inst_25249);

return statearr_25342;
})();
var statearr_25343_25417 = state_25307__$1;
(statearr_25343_25417[(2)] = null);

(statearr_25343_25417[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (41))){
var inst_25266 = (state_25307[(25)]);
var inst_25282 = (state_25307[(2)]);
var inst_25283 = cljs.core.next(inst_25266);
var inst_25247 = inst_25283;
var inst_25248 = null;
var inst_25249 = (0);
var inst_25250 = (0);
var state_25307__$1 = (function (){var statearr_25344 = state_25307;
(statearr_25344[(9)] = inst_25250);

(statearr_25344[(20)] = inst_25247);

(statearr_25344[(27)] = inst_25282);

(statearr_25344[(12)] = inst_25248);

(statearr_25344[(21)] = inst_25249);

return statearr_25344;
})();
var statearr_25345_25418 = state_25307__$1;
(statearr_25345_25418[(2)] = null);

(statearr_25345_25418[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (43))){
var state_25307__$1 = state_25307;
var statearr_25346_25419 = state_25307__$1;
(statearr_25346_25419[(2)] = null);

(statearr_25346_25419[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (29))){
var inst_25291 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25347_25420 = state_25307__$1;
(statearr_25347_25420[(2)] = inst_25291);

(statearr_25347_25420[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (44))){
var inst_25300 = (state_25307[(2)]);
var state_25307__$1 = (function (){var statearr_25348 = state_25307;
(statearr_25348[(28)] = inst_25300);

return statearr_25348;
})();
var statearr_25349_25421 = state_25307__$1;
(statearr_25349_25421[(2)] = null);

(statearr_25349_25421[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (6))){
var inst_25239 = (state_25307[(29)]);
var inst_25238 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25239__$1 = cljs.core.keys(inst_25238);
var inst_25240 = cljs.core.count(inst_25239__$1);
var inst_25241 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_25240) : cljs.core.reset_BANG_.call(null,dctr,inst_25240));
var inst_25246 = cljs.core.seq(inst_25239__$1);
var inst_25247 = inst_25246;
var inst_25248 = null;
var inst_25249 = (0);
var inst_25250 = (0);
var state_25307__$1 = (function (){var statearr_25350 = state_25307;
(statearr_25350[(9)] = inst_25250);

(statearr_25350[(30)] = inst_25241);

(statearr_25350[(20)] = inst_25247);

(statearr_25350[(12)] = inst_25248);

(statearr_25350[(21)] = inst_25249);

(statearr_25350[(29)] = inst_25239__$1);

return statearr_25350;
})();
var statearr_25351_25422 = state_25307__$1;
(statearr_25351_25422[(2)] = null);

(statearr_25351_25422[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (28))){
var inst_25247 = (state_25307[(20)]);
var inst_25266 = (state_25307[(25)]);
var inst_25266__$1 = cljs.core.seq(inst_25247);
var state_25307__$1 = (function (){var statearr_25352 = state_25307;
(statearr_25352[(25)] = inst_25266__$1);

return statearr_25352;
})();
if(inst_25266__$1){
var statearr_25353_25423 = state_25307__$1;
(statearr_25353_25423[(1)] = (33));

} else {
var statearr_25354_25424 = state_25307__$1;
(statearr_25354_25424[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (25))){
var inst_25250 = (state_25307[(9)]);
var inst_25249 = (state_25307[(21)]);
var inst_25252 = (inst_25250 < inst_25249);
var inst_25253 = inst_25252;
var state_25307__$1 = state_25307;
if(cljs.core.truth_(inst_25253)){
var statearr_25355_25425 = state_25307__$1;
(statearr_25355_25425[(1)] = (27));

} else {
var statearr_25356_25426 = state_25307__$1;
(statearr_25356_25426[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (34))){
var state_25307__$1 = state_25307;
var statearr_25357_25427 = state_25307__$1;
(statearr_25357_25427[(2)] = null);

(statearr_25357_25427[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (17))){
var state_25307__$1 = state_25307;
var statearr_25358_25428 = state_25307__$1;
(statearr_25358_25428[(2)] = null);

(statearr_25358_25428[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (3))){
var inst_25305 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25307__$1,inst_25305);
} else {
if((state_val_25308 === (12))){
var inst_25234 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25359_25429 = state_25307__$1;
(statearr_25359_25429[(2)] = inst_25234);

(statearr_25359_25429[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (2))){
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25307__$1,(4),ch);
} else {
if((state_val_25308 === (23))){
var state_25307__$1 = state_25307;
var statearr_25360_25430 = state_25307__$1;
(statearr_25360_25430[(2)] = null);

(statearr_25360_25430[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (35))){
var inst_25289 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25361_25431 = state_25307__$1;
(statearr_25361_25431[(2)] = inst_25289);

(statearr_25361_25431[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (19))){
var inst_25206 = (state_25307[(7)]);
var inst_25210 = cljs.core.chunk_first(inst_25206);
var inst_25211 = cljs.core.chunk_rest(inst_25206);
var inst_25212 = cljs.core.count(inst_25210);
var inst_25184 = inst_25211;
var inst_25185 = inst_25210;
var inst_25186 = inst_25212;
var inst_25187 = (0);
var state_25307__$1 = (function (){var statearr_25362 = state_25307;
(statearr_25362[(14)] = inst_25186);

(statearr_25362[(15)] = inst_25184);

(statearr_25362[(16)] = inst_25185);

(statearr_25362[(17)] = inst_25187);

return statearr_25362;
})();
var statearr_25363_25432 = state_25307__$1;
(statearr_25363_25432[(2)] = null);

(statearr_25363_25432[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (11))){
var inst_25184 = (state_25307[(15)]);
var inst_25206 = (state_25307[(7)]);
var inst_25206__$1 = cljs.core.seq(inst_25184);
var state_25307__$1 = (function (){var statearr_25364 = state_25307;
(statearr_25364[(7)] = inst_25206__$1);

return statearr_25364;
})();
if(inst_25206__$1){
var statearr_25365_25433 = state_25307__$1;
(statearr_25365_25433[(1)] = (16));

} else {
var statearr_25366_25434 = state_25307__$1;
(statearr_25366_25434[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (9))){
var inst_25236 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25367_25435 = state_25307__$1;
(statearr_25367_25435[(2)] = inst_25236);

(statearr_25367_25435[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (5))){
var inst_25182 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25183 = cljs.core.seq(inst_25182);
var inst_25184 = inst_25183;
var inst_25185 = null;
var inst_25186 = (0);
var inst_25187 = (0);
var state_25307__$1 = (function (){var statearr_25368 = state_25307;
(statearr_25368[(14)] = inst_25186);

(statearr_25368[(15)] = inst_25184);

(statearr_25368[(16)] = inst_25185);

(statearr_25368[(17)] = inst_25187);

return statearr_25368;
})();
var statearr_25369_25436 = state_25307__$1;
(statearr_25369_25436[(2)] = null);

(statearr_25369_25436[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (14))){
var state_25307__$1 = state_25307;
var statearr_25370_25437 = state_25307__$1;
(statearr_25370_25437[(2)] = null);

(statearr_25370_25437[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (45))){
var inst_25297 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25371_25438 = state_25307__$1;
(statearr_25371_25438[(2)] = inst_25297);

(statearr_25371_25438[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (26))){
var inst_25239 = (state_25307[(29)]);
var inst_25293 = (state_25307[(2)]);
var inst_25294 = cljs.core.seq(inst_25239);
var state_25307__$1 = (function (){var statearr_25372 = state_25307;
(statearr_25372[(31)] = inst_25293);

return statearr_25372;
})();
if(inst_25294){
var statearr_25373_25439 = state_25307__$1;
(statearr_25373_25439[(1)] = (42));

} else {
var statearr_25374_25440 = state_25307__$1;
(statearr_25374_25440[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (16))){
var inst_25206 = (state_25307[(7)]);
var inst_25208 = cljs.core.chunked_seq_QMARK_(inst_25206);
var state_25307__$1 = state_25307;
if(inst_25208){
var statearr_25375_25441 = state_25307__$1;
(statearr_25375_25441[(1)] = (19));

} else {
var statearr_25376_25442 = state_25307__$1;
(statearr_25376_25442[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (38))){
var inst_25286 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25377_25443 = state_25307__$1;
(statearr_25377_25443[(2)] = inst_25286);

(statearr_25377_25443[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (30))){
var state_25307__$1 = state_25307;
var statearr_25378_25444 = state_25307__$1;
(statearr_25378_25444[(2)] = null);

(statearr_25378_25444[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (10))){
var inst_25185 = (state_25307[(16)]);
var inst_25187 = (state_25307[(17)]);
var inst_25195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25185,inst_25187);
var inst_25196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25195,(0),null);
var inst_25197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25195,(1),null);
var state_25307__$1 = (function (){var statearr_25379 = state_25307;
(statearr_25379[(26)] = inst_25196);

return statearr_25379;
})();
if(cljs.core.truth_(inst_25197)){
var statearr_25380_25445 = state_25307__$1;
(statearr_25380_25445[(1)] = (13));

} else {
var statearr_25381_25446 = state_25307__$1;
(statearr_25381_25446[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (18))){
var inst_25232 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25382_25447 = state_25307__$1;
(statearr_25382_25447[(2)] = inst_25232);

(statearr_25382_25447[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (42))){
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25307__$1,(45),dchan);
} else {
if((state_val_25308 === (37))){
var inst_25175 = (state_25307[(10)]);
var inst_25275 = (state_25307[(23)]);
var inst_25266 = (state_25307[(25)]);
var inst_25275__$1 = cljs.core.first(inst_25266);
var inst_25276 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25275__$1,inst_25175,done);
var state_25307__$1 = (function (){var statearr_25383 = state_25307;
(statearr_25383[(23)] = inst_25275__$1);

return statearr_25383;
})();
if(cljs.core.truth_(inst_25276)){
var statearr_25384_25448 = state_25307__$1;
(statearr_25384_25448[(1)] = (39));

} else {
var statearr_25385_25449 = state_25307__$1;
(statearr_25385_25449[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25308 === (8))){
var inst_25186 = (state_25307[(14)]);
var inst_25187 = (state_25307[(17)]);
var inst_25189 = (inst_25187 < inst_25186);
var inst_25190 = inst_25189;
var state_25307__$1 = state_25307;
if(cljs.core.truth_(inst_25190)){
var statearr_25386_25450 = state_25307__$1;
(statearr_25386_25450[(1)] = (10));

} else {
var statearr_25387_25451 = state_25307__$1;
(statearr_25387_25451[(1)] = (11));

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
});})(c__24018__auto___25397,cs,m,dchan,dctr,done))
;
return ((function (switch__23892__auto__,c__24018__auto___25397,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23893__auto__ = null;
var cljs$core$async$mult_$_state_machine__23893__auto____0 = (function (){
var statearr_25391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25391[(0)] = cljs$core$async$mult_$_state_machine__23893__auto__);

(statearr_25391[(1)] = (1));

return statearr_25391;
});
var cljs$core$async$mult_$_state_machine__23893__auto____1 = (function (state_25307){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_25307);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e25392){if((e25392 instanceof Object)){
var ex__23896__auto__ = e25392;
var statearr_25393_25452 = state_25307;
(statearr_25393_25452[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25307);

return cljs.core.cst$kw$recur;
} else {
throw e25392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__25453 = state_25307;
state_25307 = G__25453;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23893__auto__ = function(state_25307){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23893__auto____1.call(this,state_25307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23893__auto____0;
cljs$core$async$mult_$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23893__auto____1;
return cljs$core$async$mult_$_state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___25397,cs,m,dchan,dctr,done))
})();
var state__24020__auto__ = (function (){var statearr_25394 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_25394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___25397);

return statearr_25394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___25397,cs,m,dchan,dctr,done))
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
var args25454 = [];
var len__8739__auto___25457 = arguments.length;
var i__8740__auto___25458 = (0);
while(true){
if((i__8740__auto___25458 < len__8739__auto___25457)){
args25454.push((arguments[i__8740__auto___25458]));

var G__25459 = (i__8740__auto___25458 + (1));
i__8740__auto___25458 = G__25459;
continue;
} else {
}
break;
}

var G__25456 = args25454.length;
switch (G__25456) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25454.length)].join('')));

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
var len__8739__auto___25471 = arguments.length;
var i__8740__auto___25472 = (0);
while(true){
if((i__8740__auto___25472 < len__8739__auto___25471)){
args__8746__auto__.push((arguments[i__8740__auto___25472]));

var G__25473 = (i__8740__auto___25472 + (1));
i__8740__auto___25472 = G__25473;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((3) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8747__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25465){
var map__25466 = p__25465;
var map__25466__$1 = ((((!((map__25466 == null)))?((((map__25466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25466):map__25466);
var opts = map__25466__$1;
var statearr_25468_25474 = state;
(statearr_25468_25474[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__25466,map__25466__$1,opts){
return (function (val){
var statearr_25469_25475 = state;
(statearr_25469_25475[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25466,map__25466__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_25470_25476 = state;
(statearr_25470_25476[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25461){
var G__25462 = cljs.core.first(seq25461);
var seq25461__$1 = cljs.core.next(seq25461);
var G__25463 = cljs.core.first(seq25461__$1);
var seq25461__$2 = cljs.core.next(seq25461__$1);
var G__25464 = cljs.core.first(seq25461__$2);
var seq25461__$3 = cljs.core.next(seq25461__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25462,G__25463,G__25464,seq25461__$3);
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
var cs = (function (){var G__25648 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25648) : cljs.core.atom.call(null,G__25648));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__25649 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25649) : cljs.core.atom.call(null,G__25649));
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
if(typeof cljs.core.async.t_cljs$core$async25650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25650 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25651){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25651 = meta25651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25652,meta25651__$1){
var self__ = this;
var _25652__$1 = this;
return (new cljs.core.async.t_cljs$core$async25650(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25651__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25652){
var self__ = this;
var _25652__$1 = this;
return self__.meta25651;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25653_25819 = self__.cs;
var G__25654_25820 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25653_25819,G__25654_25820) : cljs.core.reset_BANG_.call(null,G__25653_25819,G__25654_25820));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25650.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25650.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25651], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25650";

cljs.core.async.t_cljs$core$async25650.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25650");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25650 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25650(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25651){
return (new cljs.core.async.t_cljs$core$async25650(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25651));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25650(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24018__auto___25821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___25821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___25821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25756){
var state_val_25757 = (state_25756[(1)]);
if((state_val_25757 === (7))){
var inst_25671 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25758_25822 = state_25756__$1;
(statearr_25758_25822[(2)] = inst_25671);

(statearr_25758_25822[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (20))){
var inst_25683 = (state_25756[(7)]);
var state_25756__$1 = state_25756;
var statearr_25759_25823 = state_25756__$1;
(statearr_25759_25823[(2)] = inst_25683);

(statearr_25759_25823[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (27))){
var state_25756__$1 = state_25756;
var statearr_25760_25824 = state_25756__$1;
(statearr_25760_25824[(2)] = null);

(statearr_25760_25824[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (1))){
var inst_25658 = (state_25756[(8)]);
var inst_25658__$1 = calc_state();
var inst_25660 = (inst_25658__$1 == null);
var inst_25661 = cljs.core.not(inst_25660);
var state_25756__$1 = (function (){var statearr_25761 = state_25756;
(statearr_25761[(8)] = inst_25658__$1);

return statearr_25761;
})();
if(inst_25661){
var statearr_25762_25825 = state_25756__$1;
(statearr_25762_25825[(1)] = (2));

} else {
var statearr_25763_25826 = state_25756__$1;
(statearr_25763_25826[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (24))){
var inst_25716 = (state_25756[(9)]);
var inst_25730 = (state_25756[(10)]);
var inst_25707 = (state_25756[(11)]);
var inst_25730__$1 = (inst_25707.cljs$core$IFn$_invoke$arity$1 ? inst_25707.cljs$core$IFn$_invoke$arity$1(inst_25716) : inst_25707.call(null,inst_25716));
var state_25756__$1 = (function (){var statearr_25764 = state_25756;
(statearr_25764[(10)] = inst_25730__$1);

return statearr_25764;
})();
if(cljs.core.truth_(inst_25730__$1)){
var statearr_25765_25827 = state_25756__$1;
(statearr_25765_25827[(1)] = (29));

} else {
var statearr_25766_25828 = state_25756__$1;
(statearr_25766_25828[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (4))){
var inst_25674 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25674)){
var statearr_25767_25829 = state_25756__$1;
(statearr_25767_25829[(1)] = (8));

} else {
var statearr_25768_25830 = state_25756__$1;
(statearr_25768_25830[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (15))){
var inst_25701 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25701)){
var statearr_25769_25831 = state_25756__$1;
(statearr_25769_25831[(1)] = (19));

} else {
var statearr_25770_25832 = state_25756__$1;
(statearr_25770_25832[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (21))){
var inst_25706 = (state_25756[(12)]);
var inst_25706__$1 = (state_25756[(2)]);
var inst_25707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25706__$1,cljs.core.cst$kw$solos);
var inst_25708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25706__$1,cljs.core.cst$kw$mutes);
var inst_25709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25706__$1,cljs.core.cst$kw$reads);
var state_25756__$1 = (function (){var statearr_25771 = state_25756;
(statearr_25771[(13)] = inst_25708);

(statearr_25771[(12)] = inst_25706__$1);

(statearr_25771[(11)] = inst_25707);

return statearr_25771;
})();
return cljs.core.async.ioc_alts_BANG_(state_25756__$1,(22),inst_25709);
} else {
if((state_val_25757 === (31))){
var inst_25738 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25738)){
var statearr_25772_25833 = state_25756__$1;
(statearr_25772_25833[(1)] = (32));

} else {
var statearr_25773_25834 = state_25756__$1;
(statearr_25773_25834[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (32))){
var inst_25715 = (state_25756[(14)]);
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25756__$1,(35),out,inst_25715);
} else {
if((state_val_25757 === (33))){
var inst_25706 = (state_25756[(12)]);
var inst_25683 = inst_25706;
var state_25756__$1 = (function (){var statearr_25774 = state_25756;
(statearr_25774[(7)] = inst_25683);

return statearr_25774;
})();
var statearr_25775_25835 = state_25756__$1;
(statearr_25775_25835[(2)] = null);

(statearr_25775_25835[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (13))){
var inst_25683 = (state_25756[(7)]);
var inst_25690 = inst_25683.cljs$lang$protocol_mask$partition0$;
var inst_25691 = (inst_25690 & (64));
var inst_25692 = inst_25683.cljs$core$ISeq$;
var inst_25693 = (cljs.core.PROTOCOL_SENTINEL === inst_25692);
var inst_25694 = (inst_25691) || (inst_25693);
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25694)){
var statearr_25776_25836 = state_25756__$1;
(statearr_25776_25836[(1)] = (16));

} else {
var statearr_25777_25837 = state_25756__$1;
(statearr_25777_25837[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (22))){
var inst_25716 = (state_25756[(9)]);
var inst_25715 = (state_25756[(14)]);
var inst_25714 = (state_25756[(2)]);
var inst_25715__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25714,(0),null);
var inst_25716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25714,(1),null);
var inst_25717 = (inst_25715__$1 == null);
var inst_25718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25716__$1,change);
var inst_25719 = (inst_25717) || (inst_25718);
var state_25756__$1 = (function (){var statearr_25778 = state_25756;
(statearr_25778[(9)] = inst_25716__$1);

(statearr_25778[(14)] = inst_25715__$1);

return statearr_25778;
})();
if(cljs.core.truth_(inst_25719)){
var statearr_25779_25838 = state_25756__$1;
(statearr_25779_25838[(1)] = (23));

} else {
var statearr_25780_25839 = state_25756__$1;
(statearr_25780_25839[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (36))){
var inst_25706 = (state_25756[(12)]);
var inst_25683 = inst_25706;
var state_25756__$1 = (function (){var statearr_25781 = state_25756;
(statearr_25781[(7)] = inst_25683);

return statearr_25781;
})();
var statearr_25782_25840 = state_25756__$1;
(statearr_25782_25840[(2)] = null);

(statearr_25782_25840[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (29))){
var inst_25730 = (state_25756[(10)]);
var state_25756__$1 = state_25756;
var statearr_25783_25841 = state_25756__$1;
(statearr_25783_25841[(2)] = inst_25730);

(statearr_25783_25841[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (6))){
var state_25756__$1 = state_25756;
var statearr_25784_25842 = state_25756__$1;
(statearr_25784_25842[(2)] = false);

(statearr_25784_25842[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (28))){
var inst_25726 = (state_25756[(2)]);
var inst_25727 = calc_state();
var inst_25683 = inst_25727;
var state_25756__$1 = (function (){var statearr_25785 = state_25756;
(statearr_25785[(15)] = inst_25726);

(statearr_25785[(7)] = inst_25683);

return statearr_25785;
})();
var statearr_25786_25843 = state_25756__$1;
(statearr_25786_25843[(2)] = null);

(statearr_25786_25843[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (25))){
var inst_25752 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25787_25844 = state_25756__$1;
(statearr_25787_25844[(2)] = inst_25752);

(statearr_25787_25844[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (34))){
var inst_25750 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25788_25845 = state_25756__$1;
(statearr_25788_25845[(2)] = inst_25750);

(statearr_25788_25845[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (17))){
var state_25756__$1 = state_25756;
var statearr_25789_25846 = state_25756__$1;
(statearr_25789_25846[(2)] = false);

(statearr_25789_25846[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (3))){
var state_25756__$1 = state_25756;
var statearr_25790_25847 = state_25756__$1;
(statearr_25790_25847[(2)] = false);

(statearr_25790_25847[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (12))){
var inst_25754 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25756__$1,inst_25754);
} else {
if((state_val_25757 === (2))){
var inst_25658 = (state_25756[(8)]);
var inst_25663 = inst_25658.cljs$lang$protocol_mask$partition0$;
var inst_25664 = (inst_25663 & (64));
var inst_25665 = inst_25658.cljs$core$ISeq$;
var inst_25666 = (cljs.core.PROTOCOL_SENTINEL === inst_25665);
var inst_25667 = (inst_25664) || (inst_25666);
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25667)){
var statearr_25791_25848 = state_25756__$1;
(statearr_25791_25848[(1)] = (5));

} else {
var statearr_25792_25849 = state_25756__$1;
(statearr_25792_25849[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (23))){
var inst_25715 = (state_25756[(14)]);
var inst_25721 = (inst_25715 == null);
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25721)){
var statearr_25793_25850 = state_25756__$1;
(statearr_25793_25850[(1)] = (26));

} else {
var statearr_25794_25851 = state_25756__$1;
(statearr_25794_25851[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (35))){
var inst_25741 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25741)){
var statearr_25795_25852 = state_25756__$1;
(statearr_25795_25852[(1)] = (36));

} else {
var statearr_25796_25853 = state_25756__$1;
(statearr_25796_25853[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (19))){
var inst_25683 = (state_25756[(7)]);
var inst_25703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25683);
var state_25756__$1 = state_25756;
var statearr_25797_25854 = state_25756__$1;
(statearr_25797_25854[(2)] = inst_25703);

(statearr_25797_25854[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (11))){
var inst_25683 = (state_25756[(7)]);
var inst_25687 = (inst_25683 == null);
var inst_25688 = cljs.core.not(inst_25687);
var state_25756__$1 = state_25756;
if(inst_25688){
var statearr_25798_25855 = state_25756__$1;
(statearr_25798_25855[(1)] = (13));

} else {
var statearr_25799_25856 = state_25756__$1;
(statearr_25799_25856[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (9))){
var inst_25658 = (state_25756[(8)]);
var state_25756__$1 = state_25756;
var statearr_25800_25857 = state_25756__$1;
(statearr_25800_25857[(2)] = inst_25658);

(statearr_25800_25857[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (5))){
var state_25756__$1 = state_25756;
var statearr_25801_25858 = state_25756__$1;
(statearr_25801_25858[(2)] = true);

(statearr_25801_25858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (14))){
var state_25756__$1 = state_25756;
var statearr_25802_25859 = state_25756__$1;
(statearr_25802_25859[(2)] = false);

(statearr_25802_25859[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (26))){
var inst_25716 = (state_25756[(9)]);
var inst_25723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25716);
var state_25756__$1 = state_25756;
var statearr_25803_25860 = state_25756__$1;
(statearr_25803_25860[(2)] = inst_25723);

(statearr_25803_25860[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (16))){
var state_25756__$1 = state_25756;
var statearr_25804_25861 = state_25756__$1;
(statearr_25804_25861[(2)] = true);

(statearr_25804_25861[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (38))){
var inst_25746 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25805_25862 = state_25756__$1;
(statearr_25805_25862[(2)] = inst_25746);

(statearr_25805_25862[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (30))){
var inst_25708 = (state_25756[(13)]);
var inst_25716 = (state_25756[(9)]);
var inst_25707 = (state_25756[(11)]);
var inst_25733 = cljs.core.empty_QMARK_(inst_25707);
var inst_25734 = (inst_25708.cljs$core$IFn$_invoke$arity$1 ? inst_25708.cljs$core$IFn$_invoke$arity$1(inst_25716) : inst_25708.call(null,inst_25716));
var inst_25735 = cljs.core.not(inst_25734);
var inst_25736 = (inst_25733) && (inst_25735);
var state_25756__$1 = state_25756;
var statearr_25806_25863 = state_25756__$1;
(statearr_25806_25863[(2)] = inst_25736);

(statearr_25806_25863[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (10))){
var inst_25658 = (state_25756[(8)]);
var inst_25679 = (state_25756[(2)]);
var inst_25680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25679,cljs.core.cst$kw$solos);
var inst_25681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25679,cljs.core.cst$kw$mutes);
var inst_25682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25679,cljs.core.cst$kw$reads);
var inst_25683 = inst_25658;
var state_25756__$1 = (function (){var statearr_25807 = state_25756;
(statearr_25807[(16)] = inst_25680);

(statearr_25807[(17)] = inst_25682);

(statearr_25807[(18)] = inst_25681);

(statearr_25807[(7)] = inst_25683);

return statearr_25807;
})();
var statearr_25808_25864 = state_25756__$1;
(statearr_25808_25864[(2)] = null);

(statearr_25808_25864[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (18))){
var inst_25698 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25809_25865 = state_25756__$1;
(statearr_25809_25865[(2)] = inst_25698);

(statearr_25809_25865[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (37))){
var state_25756__$1 = state_25756;
var statearr_25810_25866 = state_25756__$1;
(statearr_25810_25866[(2)] = null);

(statearr_25810_25866[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (8))){
var inst_25658 = (state_25756[(8)]);
var inst_25676 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25658);
var state_25756__$1 = state_25756;
var statearr_25811_25867 = state_25756__$1;
(statearr_25811_25867[(2)] = inst_25676);

(statearr_25811_25867[(1)] = (10));


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
});})(c__24018__auto___25821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23892__auto__,c__24018__auto___25821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23893__auto__ = null;
var cljs$core$async$mix_$_state_machine__23893__auto____0 = (function (){
var statearr_25815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25815[(0)] = cljs$core$async$mix_$_state_machine__23893__auto__);

(statearr_25815[(1)] = (1));

return statearr_25815;
});
var cljs$core$async$mix_$_state_machine__23893__auto____1 = (function (state_25756){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_25756);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e25816){if((e25816 instanceof Object)){
var ex__23896__auto__ = e25816;
var statearr_25817_25868 = state_25756;
(statearr_25817_25868[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25756);

return cljs.core.cst$kw$recur;
} else {
throw e25816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__25869 = state_25756;
state_25756 = G__25869;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23893__auto__ = function(state_25756){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23893__auto____1.call(this,state_25756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23893__auto____0;
cljs$core$async$mix_$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23893__auto____1;
return cljs$core$async$mix_$_state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___25821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24020__auto__ = (function (){var statearr_25818 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_25818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___25821);

return statearr_25818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___25821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25870 = [];
var len__8739__auto___25873 = arguments.length;
var i__8740__auto___25874 = (0);
while(true){
if((i__8740__auto___25874 < len__8739__auto___25873)){
args25870.push((arguments[i__8740__auto___25874]));

var G__25875 = (i__8740__auto___25874 + (1));
i__8740__auto___25874 = G__25875;
continue;
} else {
}
break;
}

var G__25872 = args25870.length;
switch (G__25872) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25870.length)].join('')));

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
var args25878 = [];
var len__8739__auto___26006 = arguments.length;
var i__8740__auto___26007 = (0);
while(true){
if((i__8740__auto___26007 < len__8739__auto___26006)){
args25878.push((arguments[i__8740__auto___26007]));

var G__26008 = (i__8740__auto___26007 + (1));
i__8740__auto___26007 = G__26008;
continue;
} else {
}
break;
}

var G__25880 = args25878.length;
switch (G__25880) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25878.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__25881 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25881) : cljs.core.atom.call(null,G__25881));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7523__auto__,mults){
return (function (p1__25877_SHARP_){
if(cljs.core.truth_((p1__25877_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25877_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25877_SHARP_.call(null,topic)))){
return p1__25877_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25877_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7523__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25882 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25883){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25883 = meta25883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25884,meta25883__$1){
var self__ = this;
var _25884__$1 = this;
return (new cljs.core.async.t_cljs$core$async25882(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25883__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25884){
var self__ = this;
var _25884__$1 = this;
return self__.meta25883;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25885 = self__.mults;
var G__25886 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25885,G__25886) : cljs.core.reset_BANG_.call(null,G__25885,G__25886));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25882.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25883], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25882";

cljs.core.async.t_cljs$core$async25882.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25882");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25882 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25882(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25883){
return (new cljs.core.async.t_cljs$core$async25882(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25883));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25882(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24018__auto___26010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___26010,mults,ensure_mult,p){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___26010,mults,ensure_mult,p){
return (function (state_25958){
var state_val_25959 = (state_25958[(1)]);
if((state_val_25959 === (7))){
var inst_25954 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25960_26011 = state_25958__$1;
(statearr_25960_26011[(2)] = inst_25954);

(statearr_25960_26011[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (20))){
var state_25958__$1 = state_25958;
var statearr_25961_26012 = state_25958__$1;
(statearr_25961_26012[(2)] = null);

(statearr_25961_26012[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (1))){
var state_25958__$1 = state_25958;
var statearr_25962_26013 = state_25958__$1;
(statearr_25962_26013[(2)] = null);

(statearr_25962_26013[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (24))){
var inst_25937 = (state_25958[(7)]);
var inst_25946 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25937);
var state_25958__$1 = state_25958;
var statearr_25963_26014 = state_25958__$1;
(statearr_25963_26014[(2)] = inst_25946);

(statearr_25963_26014[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (4))){
var inst_25889 = (state_25958[(8)]);
var inst_25889__$1 = (state_25958[(2)]);
var inst_25890 = (inst_25889__$1 == null);
var state_25958__$1 = (function (){var statearr_25964 = state_25958;
(statearr_25964[(8)] = inst_25889__$1);

return statearr_25964;
})();
if(cljs.core.truth_(inst_25890)){
var statearr_25965_26015 = state_25958__$1;
(statearr_25965_26015[(1)] = (5));

} else {
var statearr_25966_26016 = state_25958__$1;
(statearr_25966_26016[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (15))){
var inst_25931 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25967_26017 = state_25958__$1;
(statearr_25967_26017[(2)] = inst_25931);

(statearr_25967_26017[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (21))){
var inst_25951 = (state_25958[(2)]);
var state_25958__$1 = (function (){var statearr_25968 = state_25958;
(statearr_25968[(9)] = inst_25951);

return statearr_25968;
})();
var statearr_25969_26018 = state_25958__$1;
(statearr_25969_26018[(2)] = null);

(statearr_25969_26018[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (13))){
var inst_25913 = (state_25958[(10)]);
var inst_25915 = cljs.core.chunked_seq_QMARK_(inst_25913);
var state_25958__$1 = state_25958;
if(inst_25915){
var statearr_25970_26019 = state_25958__$1;
(statearr_25970_26019[(1)] = (16));

} else {
var statearr_25971_26020 = state_25958__$1;
(statearr_25971_26020[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (22))){
var inst_25943 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
if(cljs.core.truth_(inst_25943)){
var statearr_25972_26021 = state_25958__$1;
(statearr_25972_26021[(1)] = (23));

} else {
var statearr_25973_26022 = state_25958__$1;
(statearr_25973_26022[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (6))){
var inst_25937 = (state_25958[(7)]);
var inst_25889 = (state_25958[(8)]);
var inst_25939 = (state_25958[(11)]);
var inst_25937__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25889) : topic_fn.call(null,inst_25889));
var inst_25938 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25939__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25938,inst_25937__$1);
var state_25958__$1 = (function (){var statearr_25974 = state_25958;
(statearr_25974[(7)] = inst_25937__$1);

(statearr_25974[(11)] = inst_25939__$1);

return statearr_25974;
})();
if(cljs.core.truth_(inst_25939__$1)){
var statearr_25975_26023 = state_25958__$1;
(statearr_25975_26023[(1)] = (19));

} else {
var statearr_25976_26024 = state_25958__$1;
(statearr_25976_26024[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (25))){
var inst_25948 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25977_26025 = state_25958__$1;
(statearr_25977_26025[(2)] = inst_25948);

(statearr_25977_26025[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (17))){
var inst_25913 = (state_25958[(10)]);
var inst_25922 = cljs.core.first(inst_25913);
var inst_25923 = cljs.core.async.muxch_STAR_(inst_25922);
var inst_25924 = cljs.core.async.close_BANG_(inst_25923);
var inst_25925 = cljs.core.next(inst_25913);
var inst_25899 = inst_25925;
var inst_25900 = null;
var inst_25901 = (0);
var inst_25902 = (0);
var state_25958__$1 = (function (){var statearr_25978 = state_25958;
(statearr_25978[(12)] = inst_25902);

(statearr_25978[(13)] = inst_25924);

(statearr_25978[(14)] = inst_25899);

(statearr_25978[(15)] = inst_25901);

(statearr_25978[(16)] = inst_25900);

return statearr_25978;
})();
var statearr_25979_26026 = state_25958__$1;
(statearr_25979_26026[(2)] = null);

(statearr_25979_26026[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (3))){
var inst_25956 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25958__$1,inst_25956);
} else {
if((state_val_25959 === (12))){
var inst_25933 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25980_26027 = state_25958__$1;
(statearr_25980_26027[(2)] = inst_25933);

(statearr_25980_26027[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (2))){
var state_25958__$1 = state_25958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25958__$1,(4),ch);
} else {
if((state_val_25959 === (23))){
var state_25958__$1 = state_25958;
var statearr_25981_26028 = state_25958__$1;
(statearr_25981_26028[(2)] = null);

(statearr_25981_26028[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (19))){
var inst_25889 = (state_25958[(8)]);
var inst_25939 = (state_25958[(11)]);
var inst_25941 = cljs.core.async.muxch_STAR_(inst_25939);
var state_25958__$1 = state_25958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25958__$1,(22),inst_25941,inst_25889);
} else {
if((state_val_25959 === (11))){
var inst_25913 = (state_25958[(10)]);
var inst_25899 = (state_25958[(14)]);
var inst_25913__$1 = cljs.core.seq(inst_25899);
var state_25958__$1 = (function (){var statearr_25982 = state_25958;
(statearr_25982[(10)] = inst_25913__$1);

return statearr_25982;
})();
if(inst_25913__$1){
var statearr_25983_26029 = state_25958__$1;
(statearr_25983_26029[(1)] = (13));

} else {
var statearr_25984_26030 = state_25958__$1;
(statearr_25984_26030[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (9))){
var inst_25935 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25985_26031 = state_25958__$1;
(statearr_25985_26031[(2)] = inst_25935);

(statearr_25985_26031[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (5))){
var inst_25896 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25897 = cljs.core.vals(inst_25896);
var inst_25898 = cljs.core.seq(inst_25897);
var inst_25899 = inst_25898;
var inst_25900 = null;
var inst_25901 = (0);
var inst_25902 = (0);
var state_25958__$1 = (function (){var statearr_25986 = state_25958;
(statearr_25986[(12)] = inst_25902);

(statearr_25986[(14)] = inst_25899);

(statearr_25986[(15)] = inst_25901);

(statearr_25986[(16)] = inst_25900);

return statearr_25986;
})();
var statearr_25987_26032 = state_25958__$1;
(statearr_25987_26032[(2)] = null);

(statearr_25987_26032[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (14))){
var state_25958__$1 = state_25958;
var statearr_25991_26033 = state_25958__$1;
(statearr_25991_26033[(2)] = null);

(statearr_25991_26033[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (16))){
var inst_25913 = (state_25958[(10)]);
var inst_25917 = cljs.core.chunk_first(inst_25913);
var inst_25918 = cljs.core.chunk_rest(inst_25913);
var inst_25919 = cljs.core.count(inst_25917);
var inst_25899 = inst_25918;
var inst_25900 = inst_25917;
var inst_25901 = inst_25919;
var inst_25902 = (0);
var state_25958__$1 = (function (){var statearr_25992 = state_25958;
(statearr_25992[(12)] = inst_25902);

(statearr_25992[(14)] = inst_25899);

(statearr_25992[(15)] = inst_25901);

(statearr_25992[(16)] = inst_25900);

return statearr_25992;
})();
var statearr_25993_26034 = state_25958__$1;
(statearr_25993_26034[(2)] = null);

(statearr_25993_26034[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (10))){
var inst_25902 = (state_25958[(12)]);
var inst_25899 = (state_25958[(14)]);
var inst_25901 = (state_25958[(15)]);
var inst_25900 = (state_25958[(16)]);
var inst_25907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25900,inst_25902);
var inst_25908 = cljs.core.async.muxch_STAR_(inst_25907);
var inst_25909 = cljs.core.async.close_BANG_(inst_25908);
var inst_25910 = (inst_25902 + (1));
var tmp25988 = inst_25899;
var tmp25989 = inst_25901;
var tmp25990 = inst_25900;
var inst_25899__$1 = tmp25988;
var inst_25900__$1 = tmp25990;
var inst_25901__$1 = tmp25989;
var inst_25902__$1 = inst_25910;
var state_25958__$1 = (function (){var statearr_25994 = state_25958;
(statearr_25994[(12)] = inst_25902__$1);

(statearr_25994[(14)] = inst_25899__$1);

(statearr_25994[(15)] = inst_25901__$1);

(statearr_25994[(17)] = inst_25909);

(statearr_25994[(16)] = inst_25900__$1);

return statearr_25994;
})();
var statearr_25995_26035 = state_25958__$1;
(statearr_25995_26035[(2)] = null);

(statearr_25995_26035[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (18))){
var inst_25928 = (state_25958[(2)]);
var state_25958__$1 = state_25958;
var statearr_25996_26036 = state_25958__$1;
(statearr_25996_26036[(2)] = inst_25928);

(statearr_25996_26036[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25959 === (8))){
var inst_25902 = (state_25958[(12)]);
var inst_25901 = (state_25958[(15)]);
var inst_25904 = (inst_25902 < inst_25901);
var inst_25905 = inst_25904;
var state_25958__$1 = state_25958;
if(cljs.core.truth_(inst_25905)){
var statearr_25997_26037 = state_25958__$1;
(statearr_25997_26037[(1)] = (10));

} else {
var statearr_25998_26038 = state_25958__$1;
(statearr_25998_26038[(1)] = (11));

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
});})(c__24018__auto___26010,mults,ensure_mult,p))
;
return ((function (switch__23892__auto__,c__24018__auto___26010,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_26002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26002[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_26002[(1)] = (1));

return statearr_26002;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_25958){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_25958);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26003){if((e26003 instanceof Object)){
var ex__23896__auto__ = e26003;
var statearr_26004_26039 = state_25958;
(statearr_26004_26039[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25958);

return cljs.core.cst$kw$recur;
} else {
throw e26003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26040 = state_25958;
state_25958 = G__26040;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_25958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_25958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___26010,mults,ensure_mult,p))
})();
var state__24020__auto__ = (function (){var statearr_26005 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___26010);

return statearr_26005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___26010,mults,ensure_mult,p))
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
var args26041 = [];
var len__8739__auto___26044 = arguments.length;
var i__8740__auto___26045 = (0);
while(true){
if((i__8740__auto___26045 < len__8739__auto___26044)){
args26041.push((arguments[i__8740__auto___26045]));

var G__26046 = (i__8740__auto___26045 + (1));
i__8740__auto___26045 = G__26046;
continue;
} else {
}
break;
}

var G__26043 = args26041.length;
switch (G__26043) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26041.length)].join('')));

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
var args26048 = [];
var len__8739__auto___26051 = arguments.length;
var i__8740__auto___26052 = (0);
while(true){
if((i__8740__auto___26052 < len__8739__auto___26051)){
args26048.push((arguments[i__8740__auto___26052]));

var G__26053 = (i__8740__auto___26052 + (1));
i__8740__auto___26052 = G__26053;
continue;
} else {
}
break;
}

var G__26050 = args26048.length;
switch (G__26050) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26048.length)].join('')));

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
var args26055 = [];
var len__8739__auto___26126 = arguments.length;
var i__8740__auto___26127 = (0);
while(true){
if((i__8740__auto___26127 < len__8739__auto___26126)){
args26055.push((arguments[i__8740__auto___26127]));

var G__26128 = (i__8740__auto___26127 + (1));
i__8740__auto___26127 = G__26128;
continue;
} else {
}
break;
}

var G__26057 = args26055.length;
switch (G__26057) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26055.length)].join('')));

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
var c__24018__auto___26130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___26130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___26130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26096){
var state_val_26097 = (state_26096[(1)]);
if((state_val_26097 === (7))){
var state_26096__$1 = state_26096;
var statearr_26098_26131 = state_26096__$1;
(statearr_26098_26131[(2)] = null);

(statearr_26098_26131[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (1))){
var state_26096__$1 = state_26096;
var statearr_26099_26132 = state_26096__$1;
(statearr_26099_26132[(2)] = null);

(statearr_26099_26132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (4))){
var inst_26060 = (state_26096[(7)]);
var inst_26062 = (inst_26060 < cnt);
var state_26096__$1 = state_26096;
if(cljs.core.truth_(inst_26062)){
var statearr_26100_26133 = state_26096__$1;
(statearr_26100_26133[(1)] = (6));

} else {
var statearr_26101_26134 = state_26096__$1;
(statearr_26101_26134[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (15))){
var inst_26092 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
var statearr_26102_26135 = state_26096__$1;
(statearr_26102_26135[(2)] = inst_26092);

(statearr_26102_26135[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (13))){
var inst_26085 = cljs.core.async.close_BANG_(out);
var state_26096__$1 = state_26096;
var statearr_26103_26136 = state_26096__$1;
(statearr_26103_26136[(2)] = inst_26085);

(statearr_26103_26136[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (6))){
var state_26096__$1 = state_26096;
var statearr_26104_26137 = state_26096__$1;
(statearr_26104_26137[(2)] = null);

(statearr_26104_26137[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (3))){
var inst_26094 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26096__$1,inst_26094);
} else {
if((state_val_26097 === (12))){
var inst_26082 = (state_26096[(8)]);
var inst_26082__$1 = (state_26096[(2)]);
var inst_26083 = cljs.core.some(cljs.core.nil_QMARK_,inst_26082__$1);
var state_26096__$1 = (function (){var statearr_26105 = state_26096;
(statearr_26105[(8)] = inst_26082__$1);

return statearr_26105;
})();
if(cljs.core.truth_(inst_26083)){
var statearr_26106_26138 = state_26096__$1;
(statearr_26106_26138[(1)] = (13));

} else {
var statearr_26107_26139 = state_26096__$1;
(statearr_26107_26139[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (2))){
var inst_26059 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_26060 = (0);
var state_26096__$1 = (function (){var statearr_26108 = state_26096;
(statearr_26108[(7)] = inst_26060);

(statearr_26108[(9)] = inst_26059);

return statearr_26108;
})();
var statearr_26109_26140 = state_26096__$1;
(statearr_26109_26140[(2)] = null);

(statearr_26109_26140[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (11))){
var inst_26060 = (state_26096[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26096,(10),Object,null,(9));
var inst_26069 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26060) : chs__$1.call(null,inst_26060));
var inst_26070 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26060) : done.call(null,inst_26060));
var inst_26071 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26069,inst_26070);
var state_26096__$1 = state_26096;
var statearr_26110_26141 = state_26096__$1;
(statearr_26110_26141[(2)] = inst_26071);


cljs.core.async.impl.ioc_helpers.process_exception(state_26096__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (9))){
var inst_26060 = (state_26096[(7)]);
var inst_26073 = (state_26096[(2)]);
var inst_26074 = (inst_26060 + (1));
var inst_26060__$1 = inst_26074;
var state_26096__$1 = (function (){var statearr_26111 = state_26096;
(statearr_26111[(10)] = inst_26073);

(statearr_26111[(7)] = inst_26060__$1);

return statearr_26111;
})();
var statearr_26112_26142 = state_26096__$1;
(statearr_26112_26142[(2)] = null);

(statearr_26112_26142[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (5))){
var inst_26080 = (state_26096[(2)]);
var state_26096__$1 = (function (){var statearr_26113 = state_26096;
(statearr_26113[(11)] = inst_26080);

return statearr_26113;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26096__$1,(12),dchan);
} else {
if((state_val_26097 === (14))){
var inst_26082 = (state_26096[(8)]);
var inst_26087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26082);
var state_26096__$1 = state_26096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26096__$1,(16),out,inst_26087);
} else {
if((state_val_26097 === (16))){
var inst_26089 = (state_26096[(2)]);
var state_26096__$1 = (function (){var statearr_26114 = state_26096;
(statearr_26114[(12)] = inst_26089);

return statearr_26114;
})();
var statearr_26115_26143 = state_26096__$1;
(statearr_26115_26143[(2)] = null);

(statearr_26115_26143[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (10))){
var inst_26064 = (state_26096[(2)]);
var inst_26065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26096__$1 = (function (){var statearr_26116 = state_26096;
(statearr_26116[(13)] = inst_26064);

return statearr_26116;
})();
var statearr_26117_26144 = state_26096__$1;
(statearr_26117_26144[(2)] = inst_26065);


cljs.core.async.impl.ioc_helpers.process_exception(state_26096__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (8))){
var inst_26078 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
var statearr_26118_26145 = state_26096__$1;
(statearr_26118_26145[(2)] = inst_26078);

(statearr_26118_26145[(1)] = (5));


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
});})(c__24018__auto___26130,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23892__auto__,c__24018__auto___26130,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_26122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26122[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_26122[(1)] = (1));

return statearr_26122;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_26096){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_26096);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26123){if((e26123 instanceof Object)){
var ex__23896__auto__ = e26123;
var statearr_26124_26146 = state_26096;
(statearr_26124_26146[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26096);

return cljs.core.cst$kw$recur;
} else {
throw e26123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26147 = state_26096;
state_26096 = G__26147;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_26096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_26096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___26130,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24020__auto__ = (function (){var statearr_26125 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___26130);

return statearr_26125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___26130,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26149 = [];
var len__8739__auto___26207 = arguments.length;
var i__8740__auto___26208 = (0);
while(true){
if((i__8740__auto___26208 < len__8739__auto___26207)){
args26149.push((arguments[i__8740__auto___26208]));

var G__26209 = (i__8740__auto___26208 + (1));
i__8740__auto___26208 = G__26209;
continue;
} else {
}
break;
}

var G__26151 = args26149.length;
switch (G__26151) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26149.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24018__auto___26211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___26211,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___26211,out){
return (function (state_26183){
var state_val_26184 = (state_26183[(1)]);
if((state_val_26184 === (7))){
var inst_26162 = (state_26183[(7)]);
var inst_26163 = (state_26183[(8)]);
var inst_26162__$1 = (state_26183[(2)]);
var inst_26163__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26162__$1,(0),null);
var inst_26164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26162__$1,(1),null);
var inst_26165 = (inst_26163__$1 == null);
var state_26183__$1 = (function (){var statearr_26185 = state_26183;
(statearr_26185[(7)] = inst_26162__$1);

(statearr_26185[(9)] = inst_26164);

(statearr_26185[(8)] = inst_26163__$1);

return statearr_26185;
})();
if(cljs.core.truth_(inst_26165)){
var statearr_26186_26212 = state_26183__$1;
(statearr_26186_26212[(1)] = (8));

} else {
var statearr_26187_26213 = state_26183__$1;
(statearr_26187_26213[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26184 === (1))){
var inst_26152 = cljs.core.vec(chs);
var inst_26153 = inst_26152;
var state_26183__$1 = (function (){var statearr_26188 = state_26183;
(statearr_26188[(10)] = inst_26153);

return statearr_26188;
})();
var statearr_26189_26214 = state_26183__$1;
(statearr_26189_26214[(2)] = null);

(statearr_26189_26214[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26184 === (4))){
var inst_26153 = (state_26183[(10)]);
var state_26183__$1 = state_26183;
return cljs.core.async.ioc_alts_BANG_(state_26183__$1,(7),inst_26153);
} else {
if((state_val_26184 === (6))){
var inst_26179 = (state_26183[(2)]);
var state_26183__$1 = state_26183;
var statearr_26190_26215 = state_26183__$1;
(statearr_26190_26215[(2)] = inst_26179);

(statearr_26190_26215[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26184 === (3))){
var inst_26181 = (state_26183[(2)]);
var state_26183__$1 = state_26183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26183__$1,inst_26181);
} else {
if((state_val_26184 === (2))){
var inst_26153 = (state_26183[(10)]);
var inst_26155 = cljs.core.count(inst_26153);
var inst_26156 = (inst_26155 > (0));
var state_26183__$1 = state_26183;
if(cljs.core.truth_(inst_26156)){
var statearr_26192_26216 = state_26183__$1;
(statearr_26192_26216[(1)] = (4));

} else {
var statearr_26193_26217 = state_26183__$1;
(statearr_26193_26217[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26184 === (11))){
var inst_26153 = (state_26183[(10)]);
var inst_26172 = (state_26183[(2)]);
var tmp26191 = inst_26153;
var inst_26153__$1 = tmp26191;
var state_26183__$1 = (function (){var statearr_26194 = state_26183;
(statearr_26194[(11)] = inst_26172);

(statearr_26194[(10)] = inst_26153__$1);

return statearr_26194;
})();
var statearr_26195_26218 = state_26183__$1;
(statearr_26195_26218[(2)] = null);

(statearr_26195_26218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26184 === (9))){
var inst_26163 = (state_26183[(8)]);
var state_26183__$1 = state_26183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26183__$1,(11),out,inst_26163);
} else {
if((state_val_26184 === (5))){
var inst_26177 = cljs.core.async.close_BANG_(out);
var state_26183__$1 = state_26183;
var statearr_26196_26219 = state_26183__$1;
(statearr_26196_26219[(2)] = inst_26177);

(statearr_26196_26219[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26184 === (10))){
var inst_26175 = (state_26183[(2)]);
var state_26183__$1 = state_26183;
var statearr_26197_26220 = state_26183__$1;
(statearr_26197_26220[(2)] = inst_26175);

(statearr_26197_26220[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26184 === (8))){
var inst_26162 = (state_26183[(7)]);
var inst_26164 = (state_26183[(9)]);
var inst_26153 = (state_26183[(10)]);
var inst_26163 = (state_26183[(8)]);
var inst_26167 = (function (){var cs = inst_26153;
var vec__26158 = inst_26162;
var v = inst_26163;
var c = inst_26164;
return ((function (cs,vec__26158,v,c,inst_26162,inst_26164,inst_26153,inst_26163,state_val_26184,c__24018__auto___26211,out){
return (function (p1__26148_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26148_SHARP_);
});
;})(cs,vec__26158,v,c,inst_26162,inst_26164,inst_26153,inst_26163,state_val_26184,c__24018__auto___26211,out))
})();
var inst_26168 = cljs.core.filterv(inst_26167,inst_26153);
var inst_26153__$1 = inst_26168;
var state_26183__$1 = (function (){var statearr_26198 = state_26183;
(statearr_26198[(10)] = inst_26153__$1);

return statearr_26198;
})();
var statearr_26199_26221 = state_26183__$1;
(statearr_26199_26221[(2)] = null);

(statearr_26199_26221[(1)] = (2));


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
});})(c__24018__auto___26211,out))
;
return ((function (switch__23892__auto__,c__24018__auto___26211,out){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_26203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26203[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_26203[(1)] = (1));

return statearr_26203;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_26183){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_26183);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26204){if((e26204 instanceof Object)){
var ex__23896__auto__ = e26204;
var statearr_26205_26222 = state_26183;
(statearr_26205_26222[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26183);

return cljs.core.cst$kw$recur;
} else {
throw e26204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26223 = state_26183;
state_26183 = G__26223;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_26183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_26183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___26211,out))
})();
var state__24020__auto__ = (function (){var statearr_26206 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___26211);

return statearr_26206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___26211,out))
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
var args26224 = [];
var len__8739__auto___26273 = arguments.length;
var i__8740__auto___26274 = (0);
while(true){
if((i__8740__auto___26274 < len__8739__auto___26273)){
args26224.push((arguments[i__8740__auto___26274]));

var G__26275 = (i__8740__auto___26274 + (1));
i__8740__auto___26274 = G__26275;
continue;
} else {
}
break;
}

var G__26226 = args26224.length;
switch (G__26226) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26224.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24018__auto___26277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___26277,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___26277,out){
return (function (state_26250){
var state_val_26251 = (state_26250[(1)]);
if((state_val_26251 === (7))){
var inst_26232 = (state_26250[(7)]);
var inst_26232__$1 = (state_26250[(2)]);
var inst_26233 = (inst_26232__$1 == null);
var inst_26234 = cljs.core.not(inst_26233);
var state_26250__$1 = (function (){var statearr_26252 = state_26250;
(statearr_26252[(7)] = inst_26232__$1);

return statearr_26252;
})();
if(inst_26234){
var statearr_26253_26278 = state_26250__$1;
(statearr_26253_26278[(1)] = (8));

} else {
var statearr_26254_26279 = state_26250__$1;
(statearr_26254_26279[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26251 === (1))){
var inst_26227 = (0);
var state_26250__$1 = (function (){var statearr_26255 = state_26250;
(statearr_26255[(8)] = inst_26227);

return statearr_26255;
})();
var statearr_26256_26280 = state_26250__$1;
(statearr_26256_26280[(2)] = null);

(statearr_26256_26280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26251 === (4))){
var state_26250__$1 = state_26250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26250__$1,(7),ch);
} else {
if((state_val_26251 === (6))){
var inst_26245 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
var statearr_26257_26281 = state_26250__$1;
(statearr_26257_26281[(2)] = inst_26245);

(statearr_26257_26281[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26251 === (3))){
var inst_26247 = (state_26250[(2)]);
var inst_26248 = cljs.core.async.close_BANG_(out);
var state_26250__$1 = (function (){var statearr_26258 = state_26250;
(statearr_26258[(9)] = inst_26247);

return statearr_26258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26250__$1,inst_26248);
} else {
if((state_val_26251 === (2))){
var inst_26227 = (state_26250[(8)]);
var inst_26229 = (inst_26227 < n);
var state_26250__$1 = state_26250;
if(cljs.core.truth_(inst_26229)){
var statearr_26259_26282 = state_26250__$1;
(statearr_26259_26282[(1)] = (4));

} else {
var statearr_26260_26283 = state_26250__$1;
(statearr_26260_26283[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26251 === (11))){
var inst_26227 = (state_26250[(8)]);
var inst_26237 = (state_26250[(2)]);
var inst_26238 = (inst_26227 + (1));
var inst_26227__$1 = inst_26238;
var state_26250__$1 = (function (){var statearr_26261 = state_26250;
(statearr_26261[(8)] = inst_26227__$1);

(statearr_26261[(10)] = inst_26237);

return statearr_26261;
})();
var statearr_26262_26284 = state_26250__$1;
(statearr_26262_26284[(2)] = null);

(statearr_26262_26284[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26251 === (9))){
var state_26250__$1 = state_26250;
var statearr_26263_26285 = state_26250__$1;
(statearr_26263_26285[(2)] = null);

(statearr_26263_26285[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26251 === (5))){
var state_26250__$1 = state_26250;
var statearr_26264_26286 = state_26250__$1;
(statearr_26264_26286[(2)] = null);

(statearr_26264_26286[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26251 === (10))){
var inst_26242 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
var statearr_26265_26287 = state_26250__$1;
(statearr_26265_26287[(2)] = inst_26242);

(statearr_26265_26287[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26251 === (8))){
var inst_26232 = (state_26250[(7)]);
var state_26250__$1 = state_26250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26250__$1,(11),out,inst_26232);
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
});})(c__24018__auto___26277,out))
;
return ((function (switch__23892__auto__,c__24018__auto___26277,out){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_26269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26269[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_26269[(1)] = (1));

return statearr_26269;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_26250){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_26250);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26270){if((e26270 instanceof Object)){
var ex__23896__auto__ = e26270;
var statearr_26271_26288 = state_26250;
(statearr_26271_26288[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26250);

return cljs.core.cst$kw$recur;
} else {
throw e26270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26289 = state_26250;
state_26250 = G__26289;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_26250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_26250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___26277,out))
})();
var state__24020__auto__ = (function (){var statearr_26272 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___26277);

return statearr_26272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___26277,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26299 = (function (f,ch,meta26300){
this.f = f;
this.ch = ch;
this.meta26300 = meta26300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26301,meta26300__$1){
var self__ = this;
var _26301__$1 = this;
return (new cljs.core.async.t_cljs$core$async26299(self__.f,self__.ch,meta26300__$1));
});


cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26301){
var self__ = this;
var _26301__$1 = this;
return self__.meta26300;
});


cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26302 = (function (f,ch,meta26300,_,fn1,meta26303){
this.f = f;
this.ch = ch;
this.meta26300 = meta26300;
this._ = _;
this.fn1 = fn1;
this.meta26303 = meta26303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26304,meta26303__$1){
var self__ = this;
var _26304__$1 = this;
return (new cljs.core.async.t_cljs$core$async26302(self__.f,self__.ch,self__.meta26300,self__._,self__.fn1,meta26303__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async26302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26304){
var self__ = this;
var _26304__$1 = this;
return self__.meta26303;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26302.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async26302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26290_SHARP_){
var G__26305 = (((p1__26290_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26290_SHARP_) : self__.f.call(null,p1__26290_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26305) : f1.call(null,G__26305));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26302.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26300,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26299], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26303], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26302";

cljs.core.async.t_cljs$core$async26302.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26302");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26302 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26302(f__$1,ch__$1,meta26300__$1,___$2,fn1__$1,meta26303){
return (new cljs.core.async.t_cljs$core$async26302(f__$1,ch__$1,meta26300__$1,___$2,fn1__$1,meta26303));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26302(self__.f,self__.ch,self__.meta26300,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7511__auto__ = ret;
if(cljs.core.truth_(and__7511__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7511__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26306 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26306) : self__.f.call(null,G__26306));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26300], null);
});

cljs.core.async.t_cljs$core$async26299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26299";

cljs.core.async.t_cljs$core$async26299.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26299");
});

cljs.core.async.__GT_t_cljs$core$async26299 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26299(f__$1,ch__$1,meta26300){
return (new cljs.core.async.t_cljs$core$async26299(f__$1,ch__$1,meta26300));
});

}

return (new cljs.core.async.t_cljs$core$async26299(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26310 = (function (f,ch,meta26311){
this.f = f;
this.ch = ch;
this.meta26311 = meta26311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26312,meta26311__$1){
var self__ = this;
var _26312__$1 = this;
return (new cljs.core.async.t_cljs$core$async26310(self__.f,self__.ch,meta26311__$1));
});


cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26312){
var self__ = this;
var _26312__$1 = this;
return self__.meta26311;
});


cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26311], null);
});

cljs.core.async.t_cljs$core$async26310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26310";

cljs.core.async.t_cljs$core$async26310.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26310");
});

cljs.core.async.__GT_t_cljs$core$async26310 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26310(f__$1,ch__$1,meta26311){
return (new cljs.core.async.t_cljs$core$async26310(f__$1,ch__$1,meta26311));
});

}

return (new cljs.core.async.t_cljs$core$async26310(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26316 = (function (p,ch,meta26317){
this.p = p;
this.ch = ch;
this.meta26317 = meta26317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26318,meta26317__$1){
var self__ = this;
var _26318__$1 = this;
return (new cljs.core.async.t_cljs$core$async26316(self__.p,self__.ch,meta26317__$1));
});


cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26318){
var self__ = this;
var _26318__$1 = this;
return self__.meta26317;
});


cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26317], null);
});

cljs.core.async.t_cljs$core$async26316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26316";

cljs.core.async.t_cljs$core$async26316.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26316");
});

cljs.core.async.__GT_t_cljs$core$async26316 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26316(p__$1,ch__$1,meta26317){
return (new cljs.core.async.t_cljs$core$async26316(p__$1,ch__$1,meta26317));
});

}

return (new cljs.core.async.t_cljs$core$async26316(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26319 = [];
var len__8739__auto___26363 = arguments.length;
var i__8740__auto___26364 = (0);
while(true){
if((i__8740__auto___26364 < len__8739__auto___26363)){
args26319.push((arguments[i__8740__auto___26364]));

var G__26365 = (i__8740__auto___26364 + (1));
i__8740__auto___26364 = G__26365;
continue;
} else {
}
break;
}

var G__26321 = args26319.length;
switch (G__26321) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26319.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24018__auto___26367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___26367,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___26367,out){
return (function (state_26342){
var state_val_26343 = (state_26342[(1)]);
if((state_val_26343 === (7))){
var inst_26338 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26344_26368 = state_26342__$1;
(statearr_26344_26368[(2)] = inst_26338);

(statearr_26344_26368[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26343 === (1))){
var state_26342__$1 = state_26342;
var statearr_26345_26369 = state_26342__$1;
(statearr_26345_26369[(2)] = null);

(statearr_26345_26369[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26343 === (4))){
var inst_26324 = (state_26342[(7)]);
var inst_26324__$1 = (state_26342[(2)]);
var inst_26325 = (inst_26324__$1 == null);
var state_26342__$1 = (function (){var statearr_26346 = state_26342;
(statearr_26346[(7)] = inst_26324__$1);

return statearr_26346;
})();
if(cljs.core.truth_(inst_26325)){
var statearr_26347_26370 = state_26342__$1;
(statearr_26347_26370[(1)] = (5));

} else {
var statearr_26348_26371 = state_26342__$1;
(statearr_26348_26371[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26343 === (6))){
var inst_26324 = (state_26342[(7)]);
var inst_26329 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26324) : p.call(null,inst_26324));
var state_26342__$1 = state_26342;
if(cljs.core.truth_(inst_26329)){
var statearr_26349_26372 = state_26342__$1;
(statearr_26349_26372[(1)] = (8));

} else {
var statearr_26350_26373 = state_26342__$1;
(statearr_26350_26373[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26343 === (3))){
var inst_26340 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26342__$1,inst_26340);
} else {
if((state_val_26343 === (2))){
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26342__$1,(4),ch);
} else {
if((state_val_26343 === (11))){
var inst_26332 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26351_26374 = state_26342__$1;
(statearr_26351_26374[(2)] = inst_26332);

(statearr_26351_26374[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26343 === (9))){
var state_26342__$1 = state_26342;
var statearr_26352_26375 = state_26342__$1;
(statearr_26352_26375[(2)] = null);

(statearr_26352_26375[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26343 === (5))){
var inst_26327 = cljs.core.async.close_BANG_(out);
var state_26342__$1 = state_26342;
var statearr_26353_26376 = state_26342__$1;
(statearr_26353_26376[(2)] = inst_26327);

(statearr_26353_26376[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26343 === (10))){
var inst_26335 = (state_26342[(2)]);
var state_26342__$1 = (function (){var statearr_26354 = state_26342;
(statearr_26354[(8)] = inst_26335);

return statearr_26354;
})();
var statearr_26355_26377 = state_26342__$1;
(statearr_26355_26377[(2)] = null);

(statearr_26355_26377[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26343 === (8))){
var inst_26324 = (state_26342[(7)]);
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26342__$1,(11),out,inst_26324);
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
});})(c__24018__auto___26367,out))
;
return ((function (switch__23892__auto__,c__24018__auto___26367,out){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_26359 = [null,null,null,null,null,null,null,null,null];
(statearr_26359[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_26359[(1)] = (1));

return statearr_26359;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_26342){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_26342);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26360){if((e26360 instanceof Object)){
var ex__23896__auto__ = e26360;
var statearr_26361_26378 = state_26342;
(statearr_26361_26378[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26342);

return cljs.core.cst$kw$recur;
} else {
throw e26360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26379 = state_26342;
state_26342 = G__26379;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_26342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_26342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___26367,out))
})();
var state__24020__auto__ = (function (){var statearr_26362 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___26367);

return statearr_26362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___26367,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26380 = [];
var len__8739__auto___26383 = arguments.length;
var i__8740__auto___26384 = (0);
while(true){
if((i__8740__auto___26384 < len__8739__auto___26383)){
args26380.push((arguments[i__8740__auto___26384]));

var G__26385 = (i__8740__auto___26384 + (1));
i__8740__auto___26384 = G__26385;
continue;
} else {
}
break;
}

var G__26382 = args26380.length;
switch (G__26382) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26380.length)].join('')));

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
var c__24018__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto__){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto__){
return (function (state_26552){
var state_val_26553 = (state_26552[(1)]);
if((state_val_26553 === (7))){
var inst_26548 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
var statearr_26554_26595 = state_26552__$1;
(statearr_26554_26595[(2)] = inst_26548);

(statearr_26554_26595[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (20))){
var inst_26518 = (state_26552[(7)]);
var inst_26529 = (state_26552[(2)]);
var inst_26530 = cljs.core.next(inst_26518);
var inst_26504 = inst_26530;
var inst_26505 = null;
var inst_26506 = (0);
var inst_26507 = (0);
var state_26552__$1 = (function (){var statearr_26555 = state_26552;
(statearr_26555[(8)] = inst_26504);

(statearr_26555[(9)] = inst_26507);

(statearr_26555[(10)] = inst_26506);

(statearr_26555[(11)] = inst_26505);

(statearr_26555[(12)] = inst_26529);

return statearr_26555;
})();
var statearr_26556_26596 = state_26552__$1;
(statearr_26556_26596[(2)] = null);

(statearr_26556_26596[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (1))){
var state_26552__$1 = state_26552;
var statearr_26557_26597 = state_26552__$1;
(statearr_26557_26597[(2)] = null);

(statearr_26557_26597[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (4))){
var inst_26493 = (state_26552[(13)]);
var inst_26493__$1 = (state_26552[(2)]);
var inst_26494 = (inst_26493__$1 == null);
var state_26552__$1 = (function (){var statearr_26558 = state_26552;
(statearr_26558[(13)] = inst_26493__$1);

return statearr_26558;
})();
if(cljs.core.truth_(inst_26494)){
var statearr_26559_26598 = state_26552__$1;
(statearr_26559_26598[(1)] = (5));

} else {
var statearr_26560_26599 = state_26552__$1;
(statearr_26560_26599[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (15))){
var state_26552__$1 = state_26552;
var statearr_26564_26600 = state_26552__$1;
(statearr_26564_26600[(2)] = null);

(statearr_26564_26600[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (21))){
var state_26552__$1 = state_26552;
var statearr_26565_26601 = state_26552__$1;
(statearr_26565_26601[(2)] = null);

(statearr_26565_26601[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (13))){
var inst_26504 = (state_26552[(8)]);
var inst_26507 = (state_26552[(9)]);
var inst_26506 = (state_26552[(10)]);
var inst_26505 = (state_26552[(11)]);
var inst_26514 = (state_26552[(2)]);
var inst_26515 = (inst_26507 + (1));
var tmp26561 = inst_26504;
var tmp26562 = inst_26506;
var tmp26563 = inst_26505;
var inst_26504__$1 = tmp26561;
var inst_26505__$1 = tmp26563;
var inst_26506__$1 = tmp26562;
var inst_26507__$1 = inst_26515;
var state_26552__$1 = (function (){var statearr_26566 = state_26552;
(statearr_26566[(8)] = inst_26504__$1);

(statearr_26566[(14)] = inst_26514);

(statearr_26566[(9)] = inst_26507__$1);

(statearr_26566[(10)] = inst_26506__$1);

(statearr_26566[(11)] = inst_26505__$1);

return statearr_26566;
})();
var statearr_26567_26602 = state_26552__$1;
(statearr_26567_26602[(2)] = null);

(statearr_26567_26602[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (22))){
var state_26552__$1 = state_26552;
var statearr_26568_26603 = state_26552__$1;
(statearr_26568_26603[(2)] = null);

(statearr_26568_26603[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (6))){
var inst_26493 = (state_26552[(13)]);
var inst_26502 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26493) : f.call(null,inst_26493));
var inst_26503 = cljs.core.seq(inst_26502);
var inst_26504 = inst_26503;
var inst_26505 = null;
var inst_26506 = (0);
var inst_26507 = (0);
var state_26552__$1 = (function (){var statearr_26569 = state_26552;
(statearr_26569[(8)] = inst_26504);

(statearr_26569[(9)] = inst_26507);

(statearr_26569[(10)] = inst_26506);

(statearr_26569[(11)] = inst_26505);

return statearr_26569;
})();
var statearr_26570_26604 = state_26552__$1;
(statearr_26570_26604[(2)] = null);

(statearr_26570_26604[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (17))){
var inst_26518 = (state_26552[(7)]);
var inst_26522 = cljs.core.chunk_first(inst_26518);
var inst_26523 = cljs.core.chunk_rest(inst_26518);
var inst_26524 = cljs.core.count(inst_26522);
var inst_26504 = inst_26523;
var inst_26505 = inst_26522;
var inst_26506 = inst_26524;
var inst_26507 = (0);
var state_26552__$1 = (function (){var statearr_26571 = state_26552;
(statearr_26571[(8)] = inst_26504);

(statearr_26571[(9)] = inst_26507);

(statearr_26571[(10)] = inst_26506);

(statearr_26571[(11)] = inst_26505);

return statearr_26571;
})();
var statearr_26572_26605 = state_26552__$1;
(statearr_26572_26605[(2)] = null);

(statearr_26572_26605[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (3))){
var inst_26550 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26552__$1,inst_26550);
} else {
if((state_val_26553 === (12))){
var inst_26538 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
var statearr_26573_26606 = state_26552__$1;
(statearr_26573_26606[(2)] = inst_26538);

(statearr_26573_26606[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (2))){
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26552__$1,(4),in$);
} else {
if((state_val_26553 === (23))){
var inst_26546 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
var statearr_26574_26607 = state_26552__$1;
(statearr_26574_26607[(2)] = inst_26546);

(statearr_26574_26607[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (19))){
var inst_26533 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
var statearr_26575_26608 = state_26552__$1;
(statearr_26575_26608[(2)] = inst_26533);

(statearr_26575_26608[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (11))){
var inst_26504 = (state_26552[(8)]);
var inst_26518 = (state_26552[(7)]);
var inst_26518__$1 = cljs.core.seq(inst_26504);
var state_26552__$1 = (function (){var statearr_26576 = state_26552;
(statearr_26576[(7)] = inst_26518__$1);

return statearr_26576;
})();
if(inst_26518__$1){
var statearr_26577_26609 = state_26552__$1;
(statearr_26577_26609[(1)] = (14));

} else {
var statearr_26578_26610 = state_26552__$1;
(statearr_26578_26610[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (9))){
var inst_26540 = (state_26552[(2)]);
var inst_26541 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26552__$1 = (function (){var statearr_26579 = state_26552;
(statearr_26579[(15)] = inst_26540);

return statearr_26579;
})();
if(cljs.core.truth_(inst_26541)){
var statearr_26580_26611 = state_26552__$1;
(statearr_26580_26611[(1)] = (21));

} else {
var statearr_26581_26612 = state_26552__$1;
(statearr_26581_26612[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (5))){
var inst_26496 = cljs.core.async.close_BANG_(out);
var state_26552__$1 = state_26552;
var statearr_26582_26613 = state_26552__$1;
(statearr_26582_26613[(2)] = inst_26496);

(statearr_26582_26613[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (14))){
var inst_26518 = (state_26552[(7)]);
var inst_26520 = cljs.core.chunked_seq_QMARK_(inst_26518);
var state_26552__$1 = state_26552;
if(inst_26520){
var statearr_26583_26614 = state_26552__$1;
(statearr_26583_26614[(1)] = (17));

} else {
var statearr_26584_26615 = state_26552__$1;
(statearr_26584_26615[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (16))){
var inst_26536 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
var statearr_26585_26616 = state_26552__$1;
(statearr_26585_26616[(2)] = inst_26536);

(statearr_26585_26616[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26553 === (10))){
var inst_26507 = (state_26552[(9)]);
var inst_26505 = (state_26552[(11)]);
var inst_26512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26505,inst_26507);
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26552__$1,(13),out,inst_26512);
} else {
if((state_val_26553 === (18))){
var inst_26518 = (state_26552[(7)]);
var inst_26527 = cljs.core.first(inst_26518);
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26552__$1,(20),out,inst_26527);
} else {
if((state_val_26553 === (8))){
var inst_26507 = (state_26552[(9)]);
var inst_26506 = (state_26552[(10)]);
var inst_26509 = (inst_26507 < inst_26506);
var inst_26510 = inst_26509;
var state_26552__$1 = state_26552;
if(cljs.core.truth_(inst_26510)){
var statearr_26586_26617 = state_26552__$1;
(statearr_26586_26617[(1)] = (10));

} else {
var statearr_26587_26618 = state_26552__$1;
(statearr_26587_26618[(1)] = (11));

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
});})(c__24018__auto__))
;
return ((function (switch__23892__auto__,c__24018__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23893__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23893__auto____0 = (function (){
var statearr_26591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26591[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23893__auto__);

(statearr_26591[(1)] = (1));

return statearr_26591;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23893__auto____1 = (function (state_26552){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_26552);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26592){if((e26592 instanceof Object)){
var ex__23896__auto__ = e26592;
var statearr_26593_26619 = state_26552;
(statearr_26593_26619[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26552);

return cljs.core.cst$kw$recur;
} else {
throw e26592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26620 = state_26552;
state_26552 = G__26620;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23893__auto__ = function(state_26552){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23893__auto____1.call(this,state_26552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23893__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23893__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto__))
})();
var state__24020__auto__ = (function (){var statearr_26594 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_26594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto__))
);

return c__24018__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26621 = [];
var len__8739__auto___26624 = arguments.length;
var i__8740__auto___26625 = (0);
while(true){
if((i__8740__auto___26625 < len__8739__auto___26624)){
args26621.push((arguments[i__8740__auto___26625]));

var G__26626 = (i__8740__auto___26625 + (1));
i__8740__auto___26625 = G__26626;
continue;
} else {
}
break;
}

var G__26623 = args26621.length;
switch (G__26623) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26621.length)].join('')));

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
var args26628 = [];
var len__8739__auto___26631 = arguments.length;
var i__8740__auto___26632 = (0);
while(true){
if((i__8740__auto___26632 < len__8739__auto___26631)){
args26628.push((arguments[i__8740__auto___26632]));

var G__26633 = (i__8740__auto___26632 + (1));
i__8740__auto___26632 = G__26633;
continue;
} else {
}
break;
}

var G__26630 = args26628.length;
switch (G__26630) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26628.length)].join('')));

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
var args26635 = [];
var len__8739__auto___26686 = arguments.length;
var i__8740__auto___26687 = (0);
while(true){
if((i__8740__auto___26687 < len__8739__auto___26686)){
args26635.push((arguments[i__8740__auto___26687]));

var G__26688 = (i__8740__auto___26687 + (1));
i__8740__auto___26687 = G__26688;
continue;
} else {
}
break;
}

var G__26637 = args26635.length;
switch (G__26637) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26635.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24018__auto___26690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___26690,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___26690,out){
return (function (state_26661){
var state_val_26662 = (state_26661[(1)]);
if((state_val_26662 === (7))){
var inst_26656 = (state_26661[(2)]);
var state_26661__$1 = state_26661;
var statearr_26663_26691 = state_26661__$1;
(statearr_26663_26691[(2)] = inst_26656);

(statearr_26663_26691[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26662 === (1))){
var inst_26638 = null;
var state_26661__$1 = (function (){var statearr_26664 = state_26661;
(statearr_26664[(7)] = inst_26638);

return statearr_26664;
})();
var statearr_26665_26692 = state_26661__$1;
(statearr_26665_26692[(2)] = null);

(statearr_26665_26692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26662 === (4))){
var inst_26641 = (state_26661[(8)]);
var inst_26641__$1 = (state_26661[(2)]);
var inst_26642 = (inst_26641__$1 == null);
var inst_26643 = cljs.core.not(inst_26642);
var state_26661__$1 = (function (){var statearr_26666 = state_26661;
(statearr_26666[(8)] = inst_26641__$1);

return statearr_26666;
})();
if(inst_26643){
var statearr_26667_26693 = state_26661__$1;
(statearr_26667_26693[(1)] = (5));

} else {
var statearr_26668_26694 = state_26661__$1;
(statearr_26668_26694[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26662 === (6))){
var state_26661__$1 = state_26661;
var statearr_26669_26695 = state_26661__$1;
(statearr_26669_26695[(2)] = null);

(statearr_26669_26695[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26662 === (3))){
var inst_26658 = (state_26661[(2)]);
var inst_26659 = cljs.core.async.close_BANG_(out);
var state_26661__$1 = (function (){var statearr_26670 = state_26661;
(statearr_26670[(9)] = inst_26658);

return statearr_26670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26661__$1,inst_26659);
} else {
if((state_val_26662 === (2))){
var state_26661__$1 = state_26661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26661__$1,(4),ch);
} else {
if((state_val_26662 === (11))){
var inst_26641 = (state_26661[(8)]);
var inst_26650 = (state_26661[(2)]);
var inst_26638 = inst_26641;
var state_26661__$1 = (function (){var statearr_26671 = state_26661;
(statearr_26671[(10)] = inst_26650);

(statearr_26671[(7)] = inst_26638);

return statearr_26671;
})();
var statearr_26672_26696 = state_26661__$1;
(statearr_26672_26696[(2)] = null);

(statearr_26672_26696[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26662 === (9))){
var inst_26641 = (state_26661[(8)]);
var state_26661__$1 = state_26661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26661__$1,(11),out,inst_26641);
} else {
if((state_val_26662 === (5))){
var inst_26641 = (state_26661[(8)]);
var inst_26638 = (state_26661[(7)]);
var inst_26645 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26641,inst_26638);
var state_26661__$1 = state_26661;
if(inst_26645){
var statearr_26674_26697 = state_26661__$1;
(statearr_26674_26697[(1)] = (8));

} else {
var statearr_26675_26698 = state_26661__$1;
(statearr_26675_26698[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26662 === (10))){
var inst_26653 = (state_26661[(2)]);
var state_26661__$1 = state_26661;
var statearr_26676_26699 = state_26661__$1;
(statearr_26676_26699[(2)] = inst_26653);

(statearr_26676_26699[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26662 === (8))){
var inst_26638 = (state_26661[(7)]);
var tmp26673 = inst_26638;
var inst_26638__$1 = tmp26673;
var state_26661__$1 = (function (){var statearr_26677 = state_26661;
(statearr_26677[(7)] = inst_26638__$1);

return statearr_26677;
})();
var statearr_26678_26700 = state_26661__$1;
(statearr_26678_26700[(2)] = null);

(statearr_26678_26700[(1)] = (2));


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
});})(c__24018__auto___26690,out))
;
return ((function (switch__23892__auto__,c__24018__auto___26690,out){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_26682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26682[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_26682[(1)] = (1));

return statearr_26682;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_26661){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_26661);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26683){if((e26683 instanceof Object)){
var ex__23896__auto__ = e26683;
var statearr_26684_26701 = state_26661;
(statearr_26684_26701[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26661);

return cljs.core.cst$kw$recur;
} else {
throw e26683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26702 = state_26661;
state_26661 = G__26702;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_26661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_26661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___26690,out))
})();
var state__24020__auto__ = (function (){var statearr_26685 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___26690);

return statearr_26685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___26690,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26703 = [];
var len__8739__auto___26773 = arguments.length;
var i__8740__auto___26774 = (0);
while(true){
if((i__8740__auto___26774 < len__8739__auto___26773)){
args26703.push((arguments[i__8740__auto___26774]));

var G__26775 = (i__8740__auto___26774 + (1));
i__8740__auto___26774 = G__26775;
continue;
} else {
}
break;
}

var G__26705 = args26703.length;
switch (G__26705) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26703.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24018__auto___26777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___26777,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___26777,out){
return (function (state_26743){
var state_val_26744 = (state_26743[(1)]);
if((state_val_26744 === (7))){
var inst_26739 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26745_26778 = state_26743__$1;
(statearr_26745_26778[(2)] = inst_26739);

(statearr_26745_26778[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (1))){
var inst_26706 = (new Array(n));
var inst_26707 = inst_26706;
var inst_26708 = (0);
var state_26743__$1 = (function (){var statearr_26746 = state_26743;
(statearr_26746[(7)] = inst_26708);

(statearr_26746[(8)] = inst_26707);

return statearr_26746;
})();
var statearr_26747_26779 = state_26743__$1;
(statearr_26747_26779[(2)] = null);

(statearr_26747_26779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (4))){
var inst_26711 = (state_26743[(9)]);
var inst_26711__$1 = (state_26743[(2)]);
var inst_26712 = (inst_26711__$1 == null);
var inst_26713 = cljs.core.not(inst_26712);
var state_26743__$1 = (function (){var statearr_26748 = state_26743;
(statearr_26748[(9)] = inst_26711__$1);

return statearr_26748;
})();
if(inst_26713){
var statearr_26749_26780 = state_26743__$1;
(statearr_26749_26780[(1)] = (5));

} else {
var statearr_26750_26781 = state_26743__$1;
(statearr_26750_26781[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (15))){
var inst_26733 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26751_26782 = state_26743__$1;
(statearr_26751_26782[(2)] = inst_26733);

(statearr_26751_26782[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (13))){
var state_26743__$1 = state_26743;
var statearr_26752_26783 = state_26743__$1;
(statearr_26752_26783[(2)] = null);

(statearr_26752_26783[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (6))){
var inst_26708 = (state_26743[(7)]);
var inst_26729 = (inst_26708 > (0));
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26729)){
var statearr_26753_26784 = state_26743__$1;
(statearr_26753_26784[(1)] = (12));

} else {
var statearr_26754_26785 = state_26743__$1;
(statearr_26754_26785[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (3))){
var inst_26741 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26743__$1,inst_26741);
} else {
if((state_val_26744 === (12))){
var inst_26707 = (state_26743[(8)]);
var inst_26731 = cljs.core.vec(inst_26707);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26743__$1,(15),out,inst_26731);
} else {
if((state_val_26744 === (2))){
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26743__$1,(4),ch);
} else {
if((state_val_26744 === (11))){
var inst_26723 = (state_26743[(2)]);
var inst_26724 = (new Array(n));
var inst_26707 = inst_26724;
var inst_26708 = (0);
var state_26743__$1 = (function (){var statearr_26755 = state_26743;
(statearr_26755[(7)] = inst_26708);

(statearr_26755[(10)] = inst_26723);

(statearr_26755[(8)] = inst_26707);

return statearr_26755;
})();
var statearr_26756_26786 = state_26743__$1;
(statearr_26756_26786[(2)] = null);

(statearr_26756_26786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (9))){
var inst_26707 = (state_26743[(8)]);
var inst_26721 = cljs.core.vec(inst_26707);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26743__$1,(11),out,inst_26721);
} else {
if((state_val_26744 === (5))){
var inst_26708 = (state_26743[(7)]);
var inst_26716 = (state_26743[(11)]);
var inst_26707 = (state_26743[(8)]);
var inst_26711 = (state_26743[(9)]);
var inst_26715 = (inst_26707[inst_26708] = inst_26711);
var inst_26716__$1 = (inst_26708 + (1));
var inst_26717 = (inst_26716__$1 < n);
var state_26743__$1 = (function (){var statearr_26757 = state_26743;
(statearr_26757[(12)] = inst_26715);

(statearr_26757[(11)] = inst_26716__$1);

return statearr_26757;
})();
if(cljs.core.truth_(inst_26717)){
var statearr_26758_26787 = state_26743__$1;
(statearr_26758_26787[(1)] = (8));

} else {
var statearr_26759_26788 = state_26743__$1;
(statearr_26759_26788[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (14))){
var inst_26736 = (state_26743[(2)]);
var inst_26737 = cljs.core.async.close_BANG_(out);
var state_26743__$1 = (function (){var statearr_26761 = state_26743;
(statearr_26761[(13)] = inst_26736);

return statearr_26761;
})();
var statearr_26762_26789 = state_26743__$1;
(statearr_26762_26789[(2)] = inst_26737);

(statearr_26762_26789[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (10))){
var inst_26727 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26763_26790 = state_26743__$1;
(statearr_26763_26790[(2)] = inst_26727);

(statearr_26763_26790[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26744 === (8))){
var inst_26716 = (state_26743[(11)]);
var inst_26707 = (state_26743[(8)]);
var tmp26760 = inst_26707;
var inst_26707__$1 = tmp26760;
var inst_26708 = inst_26716;
var state_26743__$1 = (function (){var statearr_26764 = state_26743;
(statearr_26764[(7)] = inst_26708);

(statearr_26764[(8)] = inst_26707__$1);

return statearr_26764;
})();
var statearr_26765_26791 = state_26743__$1;
(statearr_26765_26791[(2)] = null);

(statearr_26765_26791[(1)] = (2));


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
});})(c__24018__auto___26777,out))
;
return ((function (switch__23892__auto__,c__24018__auto___26777,out){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_26769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26769[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_26769[(1)] = (1));

return statearr_26769;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_26743){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_26743);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26770){if((e26770 instanceof Object)){
var ex__23896__auto__ = e26770;
var statearr_26771_26792 = state_26743;
(statearr_26771_26792[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26743);

return cljs.core.cst$kw$recur;
} else {
throw e26770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26793 = state_26743;
state_26743 = G__26793;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_26743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_26743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___26777,out))
})();
var state__24020__auto__ = (function (){var statearr_26772 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___26777);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___26777,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26794 = [];
var len__8739__auto___26868 = arguments.length;
var i__8740__auto___26869 = (0);
while(true){
if((i__8740__auto___26869 < len__8739__auto___26868)){
args26794.push((arguments[i__8740__auto___26869]));

var G__26870 = (i__8740__auto___26869 + (1));
i__8740__auto___26869 = G__26870;
continue;
} else {
}
break;
}

var G__26796 = args26794.length;
switch (G__26796) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26794.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24018__auto___26872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24018__auto___26872,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23892__auto__ = ((function (c__24018__auto___26872,out){
return (function (state_26838){
var state_val_26839 = (state_26838[(1)]);
if((state_val_26839 === (7))){
var inst_26834 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26840_26873 = state_26838__$1;
(statearr_26840_26873[(2)] = inst_26834);

(statearr_26840_26873[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (1))){
var inst_26797 = [];
var inst_26798 = inst_26797;
var inst_26799 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26838__$1 = (function (){var statearr_26841 = state_26838;
(statearr_26841[(7)] = inst_26799);

(statearr_26841[(8)] = inst_26798);

return statearr_26841;
})();
var statearr_26842_26874 = state_26838__$1;
(statearr_26842_26874[(2)] = null);

(statearr_26842_26874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (4))){
var inst_26802 = (state_26838[(9)]);
var inst_26802__$1 = (state_26838[(2)]);
var inst_26803 = (inst_26802__$1 == null);
var inst_26804 = cljs.core.not(inst_26803);
var state_26838__$1 = (function (){var statearr_26843 = state_26838;
(statearr_26843[(9)] = inst_26802__$1);

return statearr_26843;
})();
if(inst_26804){
var statearr_26844_26875 = state_26838__$1;
(statearr_26844_26875[(1)] = (5));

} else {
var statearr_26845_26876 = state_26838__$1;
(statearr_26845_26876[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (15))){
var inst_26828 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26846_26877 = state_26838__$1;
(statearr_26846_26877[(2)] = inst_26828);

(statearr_26846_26877[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (13))){
var state_26838__$1 = state_26838;
var statearr_26847_26878 = state_26838__$1;
(statearr_26847_26878[(2)] = null);

(statearr_26847_26878[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (6))){
var inst_26798 = (state_26838[(8)]);
var inst_26823 = inst_26798.length;
var inst_26824 = (inst_26823 > (0));
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26824)){
var statearr_26848_26879 = state_26838__$1;
(statearr_26848_26879[(1)] = (12));

} else {
var statearr_26849_26880 = state_26838__$1;
(statearr_26849_26880[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (3))){
var inst_26836 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26838__$1,inst_26836);
} else {
if((state_val_26839 === (12))){
var inst_26798 = (state_26838[(8)]);
var inst_26826 = cljs.core.vec(inst_26798);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26838__$1,(15),out,inst_26826);
} else {
if((state_val_26839 === (2))){
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26838__$1,(4),ch);
} else {
if((state_val_26839 === (11))){
var inst_26802 = (state_26838[(9)]);
var inst_26806 = (state_26838[(10)]);
var inst_26816 = (state_26838[(2)]);
var inst_26817 = [];
var inst_26818 = inst_26817.push(inst_26802);
var inst_26798 = inst_26817;
var inst_26799 = inst_26806;
var state_26838__$1 = (function (){var statearr_26850 = state_26838;
(statearr_26850[(11)] = inst_26818);

(statearr_26850[(7)] = inst_26799);

(statearr_26850[(8)] = inst_26798);

(statearr_26850[(12)] = inst_26816);

return statearr_26850;
})();
var statearr_26851_26881 = state_26838__$1;
(statearr_26851_26881[(2)] = null);

(statearr_26851_26881[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (9))){
var inst_26798 = (state_26838[(8)]);
var inst_26814 = cljs.core.vec(inst_26798);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26838__$1,(11),out,inst_26814);
} else {
if((state_val_26839 === (5))){
var inst_26799 = (state_26838[(7)]);
var inst_26802 = (state_26838[(9)]);
var inst_26806 = (state_26838[(10)]);
var inst_26806__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26802) : f.call(null,inst_26802));
var inst_26807 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26806__$1,inst_26799);
var inst_26808 = cljs.core.keyword_identical_QMARK_(inst_26799,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26809 = (inst_26807) || (inst_26808);
var state_26838__$1 = (function (){var statearr_26852 = state_26838;
(statearr_26852[(10)] = inst_26806__$1);

return statearr_26852;
})();
if(cljs.core.truth_(inst_26809)){
var statearr_26853_26882 = state_26838__$1;
(statearr_26853_26882[(1)] = (8));

} else {
var statearr_26854_26883 = state_26838__$1;
(statearr_26854_26883[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (14))){
var inst_26831 = (state_26838[(2)]);
var inst_26832 = cljs.core.async.close_BANG_(out);
var state_26838__$1 = (function (){var statearr_26856 = state_26838;
(statearr_26856[(13)] = inst_26831);

return statearr_26856;
})();
var statearr_26857_26884 = state_26838__$1;
(statearr_26857_26884[(2)] = inst_26832);

(statearr_26857_26884[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (10))){
var inst_26821 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26858_26885 = state_26838__$1;
(statearr_26858_26885[(2)] = inst_26821);

(statearr_26858_26885[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26839 === (8))){
var inst_26798 = (state_26838[(8)]);
var inst_26802 = (state_26838[(9)]);
var inst_26806 = (state_26838[(10)]);
var inst_26811 = inst_26798.push(inst_26802);
var tmp26855 = inst_26798;
var inst_26798__$1 = tmp26855;
var inst_26799 = inst_26806;
var state_26838__$1 = (function (){var statearr_26859 = state_26838;
(statearr_26859[(7)] = inst_26799);

(statearr_26859[(8)] = inst_26798__$1);

(statearr_26859[(14)] = inst_26811);

return statearr_26859;
})();
var statearr_26860_26886 = state_26838__$1;
(statearr_26860_26886[(2)] = null);

(statearr_26860_26886[(1)] = (2));


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
});})(c__24018__auto___26872,out))
;
return ((function (switch__23892__auto__,c__24018__auto___26872,out){
return (function() {
var cljs$core$async$state_machine__23893__auto__ = null;
var cljs$core$async$state_machine__23893__auto____0 = (function (){
var statearr_26864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26864[(0)] = cljs$core$async$state_machine__23893__auto__);

(statearr_26864[(1)] = (1));

return statearr_26864;
});
var cljs$core$async$state_machine__23893__auto____1 = (function (state_26838){
while(true){
var ret_value__23894__auto__ = (function (){try{while(true){
var result__23895__auto__ = switch__23892__auto__(state_26838);
if(cljs.core.keyword_identical_QMARK_(result__23895__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23895__auto__;
}
break;
}
}catch (e26865){if((e26865 instanceof Object)){
var ex__23896__auto__ = e26865;
var statearr_26866_26887 = state_26838;
(statearr_26866_26887[(5)] = ex__23896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26838);

return cljs.core.cst$kw$recur;
} else {
throw e26865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23894__auto__,cljs.core.cst$kw$recur)){
var G__26888 = state_26838;
state_26838 = G__26888;
continue;
} else {
return ret_value__23894__auto__;
}
break;
}
});
cljs$core$async$state_machine__23893__auto__ = function(state_26838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23893__auto____1.call(this,state_26838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23893__auto____0;
cljs$core$async$state_machine__23893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23893__auto____1;
return cljs$core$async$state_machine__23893__auto__;
})()
;})(switch__23892__auto__,c__24018__auto___26872,out))
})();
var state__24020__auto__ = (function (){var statearr_26867 = (f__24019__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24019__auto__.cljs$core$IFn$_invoke$arity$0() : f__24019__auto__.call(null));
(statearr_26867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___26872);

return statearr_26867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24020__auto__);
});})(c__24018__auto___26872,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

