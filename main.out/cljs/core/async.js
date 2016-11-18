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
var args24042 = [];
var len__8739__auto___24048 = arguments.length;
var i__8740__auto___24049 = (0);
while(true){
if((i__8740__auto___24049 < len__8739__auto___24048)){
args24042.push((arguments[i__8740__auto___24049]));

var G__24050 = (i__8740__auto___24049 + (1));
i__8740__auto___24049 = G__24050;
continue;
} else {
}
break;
}

var G__24044 = args24042.length;
switch (G__24044) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24042.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24045 = (function (f,blockable,meta24046){
this.f = f;
this.blockable = blockable;
this.meta24046 = meta24046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24047,meta24046__$1){
var self__ = this;
var _24047__$1 = this;
return (new cljs.core.async.t_cljs$core$async24045(self__.f,self__.blockable,meta24046__$1));
});


cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24047){
var self__ = this;
var _24047__$1 = this;
return self__.meta24046;
});


cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24046], null);
});

cljs.core.async.t_cljs$core$async24045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24045";

cljs.core.async.t_cljs$core$async24045.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24045");
});

cljs.core.async.__GT_t_cljs$core$async24045 = (function cljs$core$async$__GT_t_cljs$core$async24045(f__$1,blockable__$1,meta24046){
return (new cljs.core.async.t_cljs$core$async24045(f__$1,blockable__$1,meta24046));
});

}

return (new cljs.core.async.t_cljs$core$async24045(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24054 = [];
var len__8739__auto___24057 = arguments.length;
var i__8740__auto___24058 = (0);
while(true){
if((i__8740__auto___24058 < len__8739__auto___24057)){
args24054.push((arguments[i__8740__auto___24058]));

var G__24059 = (i__8740__auto___24058 + (1));
i__8740__auto___24058 = G__24059;
continue;
} else {
}
break;
}

var G__24056 = args24054.length;
switch (G__24056) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24054.length)].join('')));

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
var args24061 = [];
var len__8739__auto___24064 = arguments.length;
var i__8740__auto___24065 = (0);
while(true){
if((i__8740__auto___24065 < len__8739__auto___24064)){
args24061.push((arguments[i__8740__auto___24065]));

var G__24066 = (i__8740__auto___24065 + (1));
i__8740__auto___24065 = G__24066;
continue;
} else {
}
break;
}

var G__24063 = args24061.length;
switch (G__24063) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24061.length)].join('')));

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
var args24068 = [];
var len__8739__auto___24071 = arguments.length;
var i__8740__auto___24072 = (0);
while(true){
if((i__8740__auto___24072 < len__8739__auto___24071)){
args24068.push((arguments[i__8740__auto___24072]));

var G__24073 = (i__8740__auto___24072 + (1));
i__8740__auto___24072 = G__24073;
continue;
} else {
}
break;
}

var G__24070 = args24068.length;
switch (G__24070) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24068.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24075 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24075) : fn1.call(null,val_24075));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24075,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24075) : fn1.call(null,val_24075));
});})(val_24075,ret))
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
var args24076 = [];
var len__8739__auto___24079 = arguments.length;
var i__8740__auto___24080 = (0);
while(true){
if((i__8740__auto___24080 < len__8739__auto___24079)){
args24076.push((arguments[i__8740__auto___24080]));

var G__24081 = (i__8740__auto___24080 + (1));
i__8740__auto___24080 = G__24081;
continue;
} else {
}
break;
}

var G__24078 = args24076.length;
switch (G__24078) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24076.length)].join('')));

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
var n__8539__auto___24083 = n;
var x_24084 = (0);
while(true){
if((x_24084 < n__8539__auto___24083)){
(a[x_24084] = (0));

var G__24085 = (x_24084 + (1));
x_24084 = G__24085;
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

var G__24086 = (i + (1));
i = G__24086;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async24090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24090 = (function (flag,meta24091){
this.flag = flag;
this.meta24091 = meta24091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24092,meta24091__$1){
var self__ = this;
var _24092__$1 = this;
return (new cljs.core.async.t_cljs$core$async24090(self__.flag,meta24091__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24092){
var self__ = this;
var _24092__$1 = this;
return self__.meta24091;
});})(flag))
;


cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24090.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24091], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24090";

cljs.core.async.t_cljs$core$async24090.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24090");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24090 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24090(flag__$1,meta24091){
return (new cljs.core.async.t_cljs$core$async24090(flag__$1,meta24091));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24090(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24096 = (function (flag,cb,meta24097){
this.flag = flag;
this.cb = cb;
this.meta24097 = meta24097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24098,meta24097__$1){
var self__ = this;
var _24098__$1 = this;
return (new cljs.core.async.t_cljs$core$async24096(self__.flag,self__.cb,meta24097__$1));
});


cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24098){
var self__ = this;
var _24098__$1 = this;
return self__.meta24097;
});


cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24097], null);
});

cljs.core.async.t_cljs$core$async24096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24096";

cljs.core.async.t_cljs$core$async24096.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24096");
});

cljs.core.async.__GT_t_cljs$core$async24096 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24096(flag__$1,cb__$1,meta24097){
return (new cljs.core.async.t_cljs$core$async24096(flag__$1,cb__$1,meta24097));
});

}

return (new cljs.core.async.t_cljs$core$async24096(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24099_SHARP_){
var G__24103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24099_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24103) : fret.call(null,G__24103));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24100_SHARP_){
var G__24104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24100_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24104) : fret.call(null,G__24104));
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
var G__24105 = (i + (1));
i = G__24105;
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
var len__8739__auto___24111 = arguments.length;
var i__8740__auto___24112 = (0);
while(true){
if((i__8740__auto___24112 < len__8739__auto___24111)){
args__8746__auto__.push((arguments[i__8740__auto___24112]));

var G__24113 = (i__8740__auto___24112 + (1));
i__8740__auto___24112 = G__24113;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((1) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8747__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24108){
var map__24109 = p__24108;
var map__24109__$1 = ((((!((map__24109 == null)))?((((map__24109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24109):map__24109);
var opts = map__24109__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24106){
var G__24107 = cljs.core.first(seq24106);
var seq24106__$1 = cljs.core.next(seq24106);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24107,seq24106__$1);
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
var args24114 = [];
var len__8739__auto___24164 = arguments.length;
var i__8740__auto___24165 = (0);
while(true){
if((i__8740__auto___24165 < len__8739__auto___24164)){
args24114.push((arguments[i__8740__auto___24165]));

var G__24166 = (i__8740__auto___24165 + (1));
i__8740__auto___24165 = G__24166;
continue;
} else {
}
break;
}

var G__24116 = args24114.length;
switch (G__24116) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24114.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23983__auto___24168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___24168){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___24168){
return (function (state_24140){
var state_val_24141 = (state_24140[(1)]);
if((state_val_24141 === (7))){
var inst_24136 = (state_24140[(2)]);
var state_24140__$1 = state_24140;
var statearr_24142_24169 = state_24140__$1;
(statearr_24142_24169[(2)] = inst_24136);

(statearr_24142_24169[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (1))){
var state_24140__$1 = state_24140;
var statearr_24143_24170 = state_24140__$1;
(statearr_24143_24170[(2)] = null);

(statearr_24143_24170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (4))){
var inst_24119 = (state_24140[(7)]);
var inst_24119__$1 = (state_24140[(2)]);
var inst_24120 = (inst_24119__$1 == null);
var state_24140__$1 = (function (){var statearr_24144 = state_24140;
(statearr_24144[(7)] = inst_24119__$1);

return statearr_24144;
})();
if(cljs.core.truth_(inst_24120)){
var statearr_24145_24171 = state_24140__$1;
(statearr_24145_24171[(1)] = (5));

} else {
var statearr_24146_24172 = state_24140__$1;
(statearr_24146_24172[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (13))){
var state_24140__$1 = state_24140;
var statearr_24147_24173 = state_24140__$1;
(statearr_24147_24173[(2)] = null);

(statearr_24147_24173[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (6))){
var inst_24119 = (state_24140[(7)]);
var state_24140__$1 = state_24140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24140__$1,(11),to,inst_24119);
} else {
if((state_val_24141 === (3))){
var inst_24138 = (state_24140[(2)]);
var state_24140__$1 = state_24140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24140__$1,inst_24138);
} else {
if((state_val_24141 === (12))){
var state_24140__$1 = state_24140;
var statearr_24148_24174 = state_24140__$1;
(statearr_24148_24174[(2)] = null);

(statearr_24148_24174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (2))){
var state_24140__$1 = state_24140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24140__$1,(4),from);
} else {
if((state_val_24141 === (11))){
var inst_24129 = (state_24140[(2)]);
var state_24140__$1 = state_24140;
if(cljs.core.truth_(inst_24129)){
var statearr_24149_24175 = state_24140__$1;
(statearr_24149_24175[(1)] = (12));

} else {
var statearr_24150_24176 = state_24140__$1;
(statearr_24150_24176[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (9))){
var state_24140__$1 = state_24140;
var statearr_24151_24177 = state_24140__$1;
(statearr_24151_24177[(2)] = null);

(statearr_24151_24177[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (5))){
var state_24140__$1 = state_24140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24152_24178 = state_24140__$1;
(statearr_24152_24178[(1)] = (8));

} else {
var statearr_24153_24179 = state_24140__$1;
(statearr_24153_24179[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (14))){
var inst_24134 = (state_24140[(2)]);
var state_24140__$1 = state_24140;
var statearr_24154_24180 = state_24140__$1;
(statearr_24154_24180[(2)] = inst_24134);

(statearr_24154_24180[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (10))){
var inst_24126 = (state_24140[(2)]);
var state_24140__$1 = state_24140;
var statearr_24155_24181 = state_24140__$1;
(statearr_24155_24181[(2)] = inst_24126);

(statearr_24155_24181[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24141 === (8))){
var inst_24123 = cljs.core.async.close_BANG_(to);
var state_24140__$1 = state_24140;
var statearr_24156_24182 = state_24140__$1;
(statearr_24156_24182[(2)] = inst_24123);

(statearr_24156_24182[(1)] = (10));


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
});})(c__23983__auto___24168))
;
return ((function (switch__23857__auto__,c__23983__auto___24168){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_24160 = [null,null,null,null,null,null,null,null];
(statearr_24160[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_24160[(1)] = (1));

return statearr_24160;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_24140){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24140);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24161){if((e24161 instanceof Object)){
var ex__23861__auto__ = e24161;
var statearr_24162_24183 = state_24140;
(statearr_24162_24183[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24140);

return cljs.core.cst$kw$recur;
} else {
throw e24161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24184 = state_24140;
state_24140 = G__24184;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_24140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_24140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___24168))
})();
var state__23985__auto__ = (function (){var statearr_24163 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___24168);

return statearr_24163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___24168))
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
return (function (p__24372){
var vec__24373 = p__24372;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24373,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24373,(1),null);
var job = vec__24373;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23983__auto___24559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___24559,res,vec__24373,v,p,job,jobs,results){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___24559,res,vec__24373,v,p,job,jobs,results){
return (function (state_24380){
var state_val_24381 = (state_24380[(1)]);
if((state_val_24381 === (1))){
var state_24380__$1 = state_24380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24380__$1,(2),res,v);
} else {
if((state_val_24381 === (2))){
var inst_24377 = (state_24380[(2)]);
var inst_24378 = cljs.core.async.close_BANG_(res);
var state_24380__$1 = (function (){var statearr_24382 = state_24380;
(statearr_24382[(7)] = inst_24377);

return statearr_24382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24380__$1,inst_24378);
} else {
return null;
}
}
});})(c__23983__auto___24559,res,vec__24373,v,p,job,jobs,results))
;
return ((function (switch__23857__auto__,c__23983__auto___24559,res,vec__24373,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0 = (function (){
var statearr_24386 = [null,null,null,null,null,null,null,null];
(statearr_24386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__);

(statearr_24386[(1)] = (1));

return statearr_24386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1 = (function (state_24380){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24380);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24387){if((e24387 instanceof Object)){
var ex__23861__auto__ = e24387;
var statearr_24388_24560 = state_24380;
(statearr_24388_24560[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24380);

return cljs.core.cst$kw$recur;
} else {
throw e24387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24561 = state_24380;
state_24380 = G__24561;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = function(state_24380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1.call(this,state_24380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___24559,res,vec__24373,v,p,job,jobs,results))
})();
var state__23985__auto__ = (function (){var statearr_24389 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___24559);

return statearr_24389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___24559,res,vec__24373,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24390){
var vec__24391 = p__24390;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(1),null);
var job = vec__24391;
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
var n__8539__auto___24562 = n;
var __24563 = (0);
while(true){
if((__24563 < n__8539__auto___24562)){
var G__24394_24564 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24394_24564) {
case "compute":
var c__23983__auto___24566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24563,c__23983__auto___24566,G__24394_24564,n__8539__auto___24562,jobs,results,process,async){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (__24563,c__23983__auto___24566,G__24394_24564,n__8539__auto___24562,jobs,results,process,async){
return (function (state_24407){
var state_val_24408 = (state_24407[(1)]);
if((state_val_24408 === (1))){
var state_24407__$1 = state_24407;
var statearr_24409_24567 = state_24407__$1;
(statearr_24409_24567[(2)] = null);

(statearr_24409_24567[(1)] = (2));


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
var inst_24398 = process(inst_24397);
var state_24407__$1 = state_24407;
if(cljs.core.truth_(inst_24398)){
var statearr_24410_24568 = state_24407__$1;
(statearr_24410_24568[(1)] = (5));

} else {
var statearr_24411_24569 = state_24407__$1;
(statearr_24411_24569[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24408 === (5))){
var state_24407__$1 = state_24407;
var statearr_24412_24570 = state_24407__$1;
(statearr_24412_24570[(2)] = null);

(statearr_24412_24570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24408 === (6))){
var state_24407__$1 = state_24407;
var statearr_24413_24571 = state_24407__$1;
(statearr_24413_24571[(2)] = null);

(statearr_24413_24571[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24408 === (7))){
var inst_24403 = (state_24407[(2)]);
var state_24407__$1 = state_24407;
var statearr_24414_24572 = state_24407__$1;
(statearr_24414_24572[(2)] = inst_24403);

(statearr_24414_24572[(1)] = (3));


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
});})(__24563,c__23983__auto___24566,G__24394_24564,n__8539__auto___24562,jobs,results,process,async))
;
return ((function (__24563,switch__23857__auto__,c__23983__auto___24566,G__24394_24564,n__8539__auto___24562,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0 = (function (){
var statearr_24418 = [null,null,null,null,null,null,null];
(statearr_24418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__);

(statearr_24418[(1)] = (1));

return statearr_24418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1 = (function (state_24407){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24407);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24419){if((e24419 instanceof Object)){
var ex__23861__auto__ = e24419;
var statearr_24420_24573 = state_24407;
(statearr_24420_24573[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24407);

return cljs.core.cst$kw$recur;
} else {
throw e24419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24574 = state_24407;
state_24407 = G__24574;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = function(state_24407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1.call(this,state_24407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__;
})()
;})(__24563,switch__23857__auto__,c__23983__auto___24566,G__24394_24564,n__8539__auto___24562,jobs,results,process,async))
})();
var state__23985__auto__ = (function (){var statearr_24421 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___24566);

return statearr_24421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(__24563,c__23983__auto___24566,G__24394_24564,n__8539__auto___24562,jobs,results,process,async))
);


break;
case "async":
var c__23983__auto___24575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24563,c__23983__auto___24575,G__24394_24564,n__8539__auto___24562,jobs,results,process,async){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (__24563,c__23983__auto___24575,G__24394_24564,n__8539__auto___24562,jobs,results,process,async){
return (function (state_24434){
var state_val_24435 = (state_24434[(1)]);
if((state_val_24435 === (1))){
var state_24434__$1 = state_24434;
var statearr_24436_24576 = state_24434__$1;
(statearr_24436_24576[(2)] = null);

(statearr_24436_24576[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (2))){
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24434__$1,(4),jobs);
} else {
if((state_val_24435 === (3))){
var inst_24432 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24434__$1,inst_24432);
} else {
if((state_val_24435 === (4))){
var inst_24424 = (state_24434[(2)]);
var inst_24425 = async(inst_24424);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24425)){
var statearr_24437_24577 = state_24434__$1;
(statearr_24437_24577[(1)] = (5));

} else {
var statearr_24438_24578 = state_24434__$1;
(statearr_24438_24578[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (5))){
var state_24434__$1 = state_24434;
var statearr_24439_24579 = state_24434__$1;
(statearr_24439_24579[(2)] = null);

(statearr_24439_24579[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (6))){
var state_24434__$1 = state_24434;
var statearr_24440_24580 = state_24434__$1;
(statearr_24440_24580[(2)] = null);

(statearr_24440_24580[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (7))){
var inst_24430 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24441_24581 = state_24434__$1;
(statearr_24441_24581[(2)] = inst_24430);

(statearr_24441_24581[(1)] = (3));


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
});})(__24563,c__23983__auto___24575,G__24394_24564,n__8539__auto___24562,jobs,results,process,async))
;
return ((function (__24563,switch__23857__auto__,c__23983__auto___24575,G__24394_24564,n__8539__auto___24562,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0 = (function (){
var statearr_24445 = [null,null,null,null,null,null,null];
(statearr_24445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__);

(statearr_24445[(1)] = (1));

return statearr_24445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1 = (function (state_24434){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24434);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24446){if((e24446 instanceof Object)){
var ex__23861__auto__ = e24446;
var statearr_24447_24582 = state_24434;
(statearr_24447_24582[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24434);

return cljs.core.cst$kw$recur;
} else {
throw e24446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24583 = state_24434;
state_24434 = G__24583;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = function(state_24434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1.call(this,state_24434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__;
})()
;})(__24563,switch__23857__auto__,c__23983__auto___24575,G__24394_24564,n__8539__auto___24562,jobs,results,process,async))
})();
var state__23985__auto__ = (function (){var statearr_24448 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___24575);

return statearr_24448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(__24563,c__23983__auto___24575,G__24394_24564,n__8539__auto___24562,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24584 = (__24563 + (1));
__24563 = G__24584;
continue;
} else {
}
break;
}

var c__23983__auto___24585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___24585,jobs,results,process,async){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___24585,jobs,results,process,async){
return (function (state_24470){
var state_val_24471 = (state_24470[(1)]);
if((state_val_24471 === (1))){
var state_24470__$1 = state_24470;
var statearr_24472_24586 = state_24470__$1;
(statearr_24472_24586[(2)] = null);

(statearr_24472_24586[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24471 === (2))){
var state_24470__$1 = state_24470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24470__$1,(4),from);
} else {
if((state_val_24471 === (3))){
var inst_24468 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24470__$1,inst_24468);
} else {
if((state_val_24471 === (4))){
var inst_24451 = (state_24470[(7)]);
var inst_24451__$1 = (state_24470[(2)]);
var inst_24452 = (inst_24451__$1 == null);
var state_24470__$1 = (function (){var statearr_24473 = state_24470;
(statearr_24473[(7)] = inst_24451__$1);

return statearr_24473;
})();
if(cljs.core.truth_(inst_24452)){
var statearr_24474_24587 = state_24470__$1;
(statearr_24474_24587[(1)] = (5));

} else {
var statearr_24475_24588 = state_24470__$1;
(statearr_24475_24588[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24471 === (5))){
var inst_24454 = cljs.core.async.close_BANG_(jobs);
var state_24470__$1 = state_24470;
var statearr_24476_24589 = state_24470__$1;
(statearr_24476_24589[(2)] = inst_24454);

(statearr_24476_24589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24471 === (6))){
var inst_24456 = (state_24470[(8)]);
var inst_24451 = (state_24470[(7)]);
var inst_24456__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24458 = [inst_24451,inst_24456__$1];
var inst_24459 = (new cljs.core.PersistentVector(null,2,(5),inst_24457,inst_24458,null));
var state_24470__$1 = (function (){var statearr_24477 = state_24470;
(statearr_24477[(8)] = inst_24456__$1);

return statearr_24477;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24470__$1,(8),jobs,inst_24459);
} else {
if((state_val_24471 === (7))){
var inst_24466 = (state_24470[(2)]);
var state_24470__$1 = state_24470;
var statearr_24478_24590 = state_24470__$1;
(statearr_24478_24590[(2)] = inst_24466);

(statearr_24478_24590[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24471 === (8))){
var inst_24456 = (state_24470[(8)]);
var inst_24461 = (state_24470[(2)]);
var state_24470__$1 = (function (){var statearr_24479 = state_24470;
(statearr_24479[(9)] = inst_24461);

return statearr_24479;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24470__$1,(9),results,inst_24456);
} else {
if((state_val_24471 === (9))){
var inst_24463 = (state_24470[(2)]);
var state_24470__$1 = (function (){var statearr_24480 = state_24470;
(statearr_24480[(10)] = inst_24463);

return statearr_24480;
})();
var statearr_24481_24591 = state_24470__$1;
(statearr_24481_24591[(2)] = null);

(statearr_24481_24591[(1)] = (2));


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
});})(c__23983__auto___24585,jobs,results,process,async))
;
return ((function (switch__23857__auto__,c__23983__auto___24585,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0 = (function (){
var statearr_24485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__);

(statearr_24485[(1)] = (1));

return statearr_24485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1 = (function (state_24470){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24470);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24486){if((e24486 instanceof Object)){
var ex__23861__auto__ = e24486;
var statearr_24487_24592 = state_24470;
(statearr_24487_24592[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24470);

return cljs.core.cst$kw$recur;
} else {
throw e24486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24593 = state_24470;
state_24470 = G__24593;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = function(state_24470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1.call(this,state_24470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___24585,jobs,results,process,async))
})();
var state__23985__auto__ = (function (){var statearr_24488 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___24585);

return statearr_24488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___24585,jobs,results,process,async))
);


var c__23983__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto__,jobs,results,process,async){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto__,jobs,results,process,async){
return (function (state_24526){
var state_val_24527 = (state_24526[(1)]);
if((state_val_24527 === (7))){
var inst_24522 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
var statearr_24528_24594 = state_24526__$1;
(statearr_24528_24594[(2)] = inst_24522);

(statearr_24528_24594[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (20))){
var state_24526__$1 = state_24526;
var statearr_24529_24595 = state_24526__$1;
(statearr_24529_24595[(2)] = null);

(statearr_24529_24595[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (1))){
var state_24526__$1 = state_24526;
var statearr_24530_24596 = state_24526__$1;
(statearr_24530_24596[(2)] = null);

(statearr_24530_24596[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (4))){
var inst_24491 = (state_24526[(7)]);
var inst_24491__$1 = (state_24526[(2)]);
var inst_24492 = (inst_24491__$1 == null);
var state_24526__$1 = (function (){var statearr_24531 = state_24526;
(statearr_24531[(7)] = inst_24491__$1);

return statearr_24531;
})();
if(cljs.core.truth_(inst_24492)){
var statearr_24532_24597 = state_24526__$1;
(statearr_24532_24597[(1)] = (5));

} else {
var statearr_24533_24598 = state_24526__$1;
(statearr_24533_24598[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (15))){
var inst_24504 = (state_24526[(8)]);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24526__$1,(18),to,inst_24504);
} else {
if((state_val_24527 === (21))){
var inst_24517 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
var statearr_24534_24599 = state_24526__$1;
(statearr_24534_24599[(2)] = inst_24517);

(statearr_24534_24599[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (13))){
var inst_24519 = (state_24526[(2)]);
var state_24526__$1 = (function (){var statearr_24535 = state_24526;
(statearr_24535[(9)] = inst_24519);

return statearr_24535;
})();
var statearr_24536_24600 = state_24526__$1;
(statearr_24536_24600[(2)] = null);

(statearr_24536_24600[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (6))){
var inst_24491 = (state_24526[(7)]);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24526__$1,(11),inst_24491);
} else {
if((state_val_24527 === (17))){
var inst_24512 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
if(cljs.core.truth_(inst_24512)){
var statearr_24537_24601 = state_24526__$1;
(statearr_24537_24601[(1)] = (19));

} else {
var statearr_24538_24602 = state_24526__$1;
(statearr_24538_24602[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (3))){
var inst_24524 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24526__$1,inst_24524);
} else {
if((state_val_24527 === (12))){
var inst_24501 = (state_24526[(10)]);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24526__$1,(14),inst_24501);
} else {
if((state_val_24527 === (2))){
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24526__$1,(4),results);
} else {
if((state_val_24527 === (19))){
var state_24526__$1 = state_24526;
var statearr_24539_24603 = state_24526__$1;
(statearr_24539_24603[(2)] = null);

(statearr_24539_24603[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (11))){
var inst_24501 = (state_24526[(2)]);
var state_24526__$1 = (function (){var statearr_24540 = state_24526;
(statearr_24540[(10)] = inst_24501);

return statearr_24540;
})();
var statearr_24541_24604 = state_24526__$1;
(statearr_24541_24604[(2)] = null);

(statearr_24541_24604[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (9))){
var state_24526__$1 = state_24526;
var statearr_24542_24605 = state_24526__$1;
(statearr_24542_24605[(2)] = null);

(statearr_24542_24605[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (5))){
var state_24526__$1 = state_24526;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24543_24606 = state_24526__$1;
(statearr_24543_24606[(1)] = (8));

} else {
var statearr_24544_24607 = state_24526__$1;
(statearr_24544_24607[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (14))){
var inst_24506 = (state_24526[(11)]);
var inst_24504 = (state_24526[(8)]);
var inst_24504__$1 = (state_24526[(2)]);
var inst_24505 = (inst_24504__$1 == null);
var inst_24506__$1 = cljs.core.not(inst_24505);
var state_24526__$1 = (function (){var statearr_24545 = state_24526;
(statearr_24545[(11)] = inst_24506__$1);

(statearr_24545[(8)] = inst_24504__$1);

return statearr_24545;
})();
if(inst_24506__$1){
var statearr_24546_24608 = state_24526__$1;
(statearr_24546_24608[(1)] = (15));

} else {
var statearr_24547_24609 = state_24526__$1;
(statearr_24547_24609[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (16))){
var inst_24506 = (state_24526[(11)]);
var state_24526__$1 = state_24526;
var statearr_24548_24610 = state_24526__$1;
(statearr_24548_24610[(2)] = inst_24506);

(statearr_24548_24610[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (10))){
var inst_24498 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
var statearr_24549_24611 = state_24526__$1;
(statearr_24549_24611[(2)] = inst_24498);

(statearr_24549_24611[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (18))){
var inst_24509 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
var statearr_24550_24612 = state_24526__$1;
(statearr_24550_24612[(2)] = inst_24509);

(statearr_24550_24612[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24527 === (8))){
var inst_24495 = cljs.core.async.close_BANG_(to);
var state_24526__$1 = state_24526;
var statearr_24551_24613 = state_24526__$1;
(statearr_24551_24613[(2)] = inst_24495);

(statearr_24551_24613[(1)] = (10));


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
});})(c__23983__auto__,jobs,results,process,async))
;
return ((function (switch__23857__auto__,c__23983__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0 = (function (){
var statearr_24555 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__);

(statearr_24555[(1)] = (1));

return statearr_24555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1 = (function (state_24526){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24526);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24556){if((e24556 instanceof Object)){
var ex__23861__auto__ = e24556;
var statearr_24557_24614 = state_24526;
(statearr_24557_24614[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24526);

return cljs.core.cst$kw$recur;
} else {
throw e24556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24615 = state_24526;
state_24526 = G__24615;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__ = function(state_24526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1.call(this,state_24526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto__,jobs,results,process,async))
})();
var state__23985__auto__ = (function (){var statearr_24558 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto__);

return statearr_24558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto__,jobs,results,process,async))
);

return c__23983__auto__;
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
var args24616 = [];
var len__8739__auto___24619 = arguments.length;
var i__8740__auto___24620 = (0);
while(true){
if((i__8740__auto___24620 < len__8739__auto___24619)){
args24616.push((arguments[i__8740__auto___24620]));

var G__24621 = (i__8740__auto___24620 + (1));
i__8740__auto___24620 = G__24621;
continue;
} else {
}
break;
}

var G__24618 = args24616.length;
switch (G__24618) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24616.length)].join('')));

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
var args24623 = [];
var len__8739__auto___24626 = arguments.length;
var i__8740__auto___24627 = (0);
while(true){
if((i__8740__auto___24627 < len__8739__auto___24626)){
args24623.push((arguments[i__8740__auto___24627]));

var G__24628 = (i__8740__auto___24627 + (1));
i__8740__auto___24627 = G__24628;
continue;
} else {
}
break;
}

var G__24625 = args24623.length;
switch (G__24625) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24623.length)].join('')));

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
var args24630 = [];
var len__8739__auto___24683 = arguments.length;
var i__8740__auto___24684 = (0);
while(true){
if((i__8740__auto___24684 < len__8739__auto___24683)){
args24630.push((arguments[i__8740__auto___24684]));

var G__24685 = (i__8740__auto___24684 + (1));
i__8740__auto___24684 = G__24685;
continue;
} else {
}
break;
}

var G__24632 = args24630.length;
switch (G__24632) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24630.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__23983__auto___24687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___24687,tc,fc){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___24687,tc,fc){
return (function (state_24658){
var state_val_24659 = (state_24658[(1)]);
if((state_val_24659 === (7))){
var inst_24654 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
var statearr_24660_24688 = state_24658__$1;
(statearr_24660_24688[(2)] = inst_24654);

(statearr_24660_24688[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (1))){
var state_24658__$1 = state_24658;
var statearr_24661_24689 = state_24658__$1;
(statearr_24661_24689[(2)] = null);

(statearr_24661_24689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (4))){
var inst_24635 = (state_24658[(7)]);
var inst_24635__$1 = (state_24658[(2)]);
var inst_24636 = (inst_24635__$1 == null);
var state_24658__$1 = (function (){var statearr_24662 = state_24658;
(statearr_24662[(7)] = inst_24635__$1);

return statearr_24662;
})();
if(cljs.core.truth_(inst_24636)){
var statearr_24663_24690 = state_24658__$1;
(statearr_24663_24690[(1)] = (5));

} else {
var statearr_24664_24691 = state_24658__$1;
(statearr_24664_24691[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (13))){
var state_24658__$1 = state_24658;
var statearr_24665_24692 = state_24658__$1;
(statearr_24665_24692[(2)] = null);

(statearr_24665_24692[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (6))){
var inst_24635 = (state_24658[(7)]);
var inst_24641 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24635) : p.call(null,inst_24635));
var state_24658__$1 = state_24658;
if(cljs.core.truth_(inst_24641)){
var statearr_24666_24693 = state_24658__$1;
(statearr_24666_24693[(1)] = (9));

} else {
var statearr_24667_24694 = state_24658__$1;
(statearr_24667_24694[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (3))){
var inst_24656 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24658__$1,inst_24656);
} else {
if((state_val_24659 === (12))){
var state_24658__$1 = state_24658;
var statearr_24668_24695 = state_24658__$1;
(statearr_24668_24695[(2)] = null);

(statearr_24668_24695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (2))){
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24658__$1,(4),ch);
} else {
if((state_val_24659 === (11))){
var inst_24635 = (state_24658[(7)]);
var inst_24645 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24658__$1,(8),inst_24645,inst_24635);
} else {
if((state_val_24659 === (9))){
var state_24658__$1 = state_24658;
var statearr_24669_24696 = state_24658__$1;
(statearr_24669_24696[(2)] = tc);

(statearr_24669_24696[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (5))){
var inst_24638 = cljs.core.async.close_BANG_(tc);
var inst_24639 = cljs.core.async.close_BANG_(fc);
var state_24658__$1 = (function (){var statearr_24670 = state_24658;
(statearr_24670[(8)] = inst_24638);

return statearr_24670;
})();
var statearr_24671_24697 = state_24658__$1;
(statearr_24671_24697[(2)] = inst_24639);

(statearr_24671_24697[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (14))){
var inst_24652 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
var statearr_24672_24698 = state_24658__$1;
(statearr_24672_24698[(2)] = inst_24652);

(statearr_24672_24698[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (10))){
var state_24658__$1 = state_24658;
var statearr_24673_24699 = state_24658__$1;
(statearr_24673_24699[(2)] = fc);

(statearr_24673_24699[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24659 === (8))){
var inst_24647 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
if(cljs.core.truth_(inst_24647)){
var statearr_24674_24700 = state_24658__$1;
(statearr_24674_24700[(1)] = (12));

} else {
var statearr_24675_24701 = state_24658__$1;
(statearr_24675_24701[(1)] = (13));

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
});})(c__23983__auto___24687,tc,fc))
;
return ((function (switch__23857__auto__,c__23983__auto___24687,tc,fc){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_24679 = [null,null,null,null,null,null,null,null,null];
(statearr_24679[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_24679[(1)] = (1));

return statearr_24679;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_24658){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24658);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24680){if((e24680 instanceof Object)){
var ex__23861__auto__ = e24680;
var statearr_24681_24702 = state_24658;
(statearr_24681_24702[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24658);

return cljs.core.cst$kw$recur;
} else {
throw e24680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24703 = state_24658;
state_24658 = G__24703;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_24658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_24658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___24687,tc,fc))
})();
var state__23985__auto__ = (function (){var statearr_24682 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___24687);

return statearr_24682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___24687,tc,fc))
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
var c__23983__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto__){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto__){
return (function (state_24767){
var state_val_24768 = (state_24767[(1)]);
if((state_val_24768 === (7))){
var inst_24763 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24769_24790 = state_24767__$1;
(statearr_24769_24790[(2)] = inst_24763);

(statearr_24769_24790[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24768 === (1))){
var inst_24747 = init;
var state_24767__$1 = (function (){var statearr_24770 = state_24767;
(statearr_24770[(7)] = inst_24747);

return statearr_24770;
})();
var statearr_24771_24791 = state_24767__$1;
(statearr_24771_24791[(2)] = null);

(statearr_24771_24791[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24768 === (4))){
var inst_24750 = (state_24767[(8)]);
var inst_24750__$1 = (state_24767[(2)]);
var inst_24751 = (inst_24750__$1 == null);
var state_24767__$1 = (function (){var statearr_24772 = state_24767;
(statearr_24772[(8)] = inst_24750__$1);

return statearr_24772;
})();
if(cljs.core.truth_(inst_24751)){
var statearr_24773_24792 = state_24767__$1;
(statearr_24773_24792[(1)] = (5));

} else {
var statearr_24774_24793 = state_24767__$1;
(statearr_24774_24793[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24768 === (6))){
var inst_24747 = (state_24767[(7)]);
var inst_24750 = (state_24767[(8)]);
var inst_24754 = (state_24767[(9)]);
var inst_24754__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24747,inst_24750) : f.call(null,inst_24747,inst_24750));
var inst_24755 = cljs.core.reduced_QMARK_(inst_24754__$1);
var state_24767__$1 = (function (){var statearr_24775 = state_24767;
(statearr_24775[(9)] = inst_24754__$1);

return statearr_24775;
})();
if(inst_24755){
var statearr_24776_24794 = state_24767__$1;
(statearr_24776_24794[(1)] = (8));

} else {
var statearr_24777_24795 = state_24767__$1;
(statearr_24777_24795[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24768 === (3))){
var inst_24765 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24767__$1,inst_24765);
} else {
if((state_val_24768 === (2))){
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24767__$1,(4),ch);
} else {
if((state_val_24768 === (9))){
var inst_24754 = (state_24767[(9)]);
var inst_24747 = inst_24754;
var state_24767__$1 = (function (){var statearr_24778 = state_24767;
(statearr_24778[(7)] = inst_24747);

return statearr_24778;
})();
var statearr_24779_24796 = state_24767__$1;
(statearr_24779_24796[(2)] = null);

(statearr_24779_24796[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24768 === (5))){
var inst_24747 = (state_24767[(7)]);
var state_24767__$1 = state_24767;
var statearr_24780_24797 = state_24767__$1;
(statearr_24780_24797[(2)] = inst_24747);

(statearr_24780_24797[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24768 === (10))){
var inst_24761 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24781_24798 = state_24767__$1;
(statearr_24781_24798[(2)] = inst_24761);

(statearr_24781_24798[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24768 === (8))){
var inst_24754 = (state_24767[(9)]);
var inst_24757 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_24754) : cljs.core.deref.call(null,inst_24754));
var state_24767__$1 = state_24767;
var statearr_24782_24799 = state_24767__$1;
(statearr_24782_24799[(2)] = inst_24757);

(statearr_24782_24799[(1)] = (10));


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
});})(c__23983__auto__))
;
return ((function (switch__23857__auto__,c__23983__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23858__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23858__auto____0 = (function (){
var statearr_24786 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24786[(0)] = cljs$core$async$reduce_$_state_machine__23858__auto__);

(statearr_24786[(1)] = (1));

return statearr_24786;
});
var cljs$core$async$reduce_$_state_machine__23858__auto____1 = (function (state_24767){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24767);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24787){if((e24787 instanceof Object)){
var ex__23861__auto__ = e24787;
var statearr_24788_24800 = state_24767;
(statearr_24788_24800[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24767);

return cljs.core.cst$kw$recur;
} else {
throw e24787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24801 = state_24767;
state_24767 = G__24801;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23858__auto__ = function(state_24767){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23858__auto____1.call(this,state_24767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23858__auto____0;
cljs$core$async$reduce_$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23858__auto____1;
return cljs$core$async$reduce_$_state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto__))
})();
var state__23985__auto__ = (function (){var statearr_24789 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto__);

return statearr_24789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto__))
);

return c__23983__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23983__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto__,f__$1){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto__,f__$1){
return (function (state_24821){
var state_val_24822 = (state_24821[(1)]);
if((state_val_24822 === (1))){
var inst_24816 = cljs.core.async.reduce(f__$1,init,ch);
var state_24821__$1 = state_24821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24821__$1,(2),inst_24816);
} else {
if((state_val_24822 === (2))){
var inst_24818 = (state_24821[(2)]);
var inst_24819 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24818) : f__$1.call(null,inst_24818));
var state_24821__$1 = state_24821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24821__$1,inst_24819);
} else {
return null;
}
}
});})(c__23983__auto__,f__$1))
;
return ((function (switch__23857__auto__,c__23983__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23858__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23858__auto____0 = (function (){
var statearr_24826 = [null,null,null,null,null,null,null];
(statearr_24826[(0)] = cljs$core$async$transduce_$_state_machine__23858__auto__);

(statearr_24826[(1)] = (1));

return statearr_24826;
});
var cljs$core$async$transduce_$_state_machine__23858__auto____1 = (function (state_24821){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24821);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24827){if((e24827 instanceof Object)){
var ex__23861__auto__ = e24827;
var statearr_24828_24830 = state_24821;
(statearr_24828_24830[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24821);

return cljs.core.cst$kw$recur;
} else {
throw e24827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24831 = state_24821;
state_24821 = G__24831;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23858__auto__ = function(state_24821){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23858__auto____1.call(this,state_24821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23858__auto____0;
cljs$core$async$transduce_$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23858__auto____1;
return cljs$core$async$transduce_$_state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto__,f__$1))
})();
var state__23985__auto__ = (function (){var statearr_24829 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto__);

return statearr_24829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto__,f__$1))
);

return c__23983__auto__;
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
var args24832 = [];
var len__8739__auto___24884 = arguments.length;
var i__8740__auto___24885 = (0);
while(true){
if((i__8740__auto___24885 < len__8739__auto___24884)){
args24832.push((arguments[i__8740__auto___24885]));

var G__24886 = (i__8740__auto___24885 + (1));
i__8740__auto___24885 = G__24886;
continue;
} else {
}
break;
}

var G__24834 = args24832.length;
switch (G__24834) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24832.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23983__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto__){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto__){
return (function (state_24859){
var state_val_24860 = (state_24859[(1)]);
if((state_val_24860 === (7))){
var inst_24841 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
var statearr_24861_24888 = state_24859__$1;
(statearr_24861_24888[(2)] = inst_24841);

(statearr_24861_24888[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (1))){
var inst_24835 = cljs.core.seq(coll);
var inst_24836 = inst_24835;
var state_24859__$1 = (function (){var statearr_24862 = state_24859;
(statearr_24862[(7)] = inst_24836);

return statearr_24862;
})();
var statearr_24863_24889 = state_24859__$1;
(statearr_24863_24889[(2)] = null);

(statearr_24863_24889[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (4))){
var inst_24836 = (state_24859[(7)]);
var inst_24839 = cljs.core.first(inst_24836);
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24859__$1,(7),ch,inst_24839);
} else {
if((state_val_24860 === (13))){
var inst_24853 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
var statearr_24864_24890 = state_24859__$1;
(statearr_24864_24890[(2)] = inst_24853);

(statearr_24864_24890[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (6))){
var inst_24844 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
if(cljs.core.truth_(inst_24844)){
var statearr_24865_24891 = state_24859__$1;
(statearr_24865_24891[(1)] = (8));

} else {
var statearr_24866_24892 = state_24859__$1;
(statearr_24866_24892[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (3))){
var inst_24857 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24859__$1,inst_24857);
} else {
if((state_val_24860 === (12))){
var state_24859__$1 = state_24859;
var statearr_24867_24893 = state_24859__$1;
(statearr_24867_24893[(2)] = null);

(statearr_24867_24893[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (2))){
var inst_24836 = (state_24859[(7)]);
var state_24859__$1 = state_24859;
if(cljs.core.truth_(inst_24836)){
var statearr_24868_24894 = state_24859__$1;
(statearr_24868_24894[(1)] = (4));

} else {
var statearr_24869_24895 = state_24859__$1;
(statearr_24869_24895[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (11))){
var inst_24850 = cljs.core.async.close_BANG_(ch);
var state_24859__$1 = state_24859;
var statearr_24870_24896 = state_24859__$1;
(statearr_24870_24896[(2)] = inst_24850);

(statearr_24870_24896[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (9))){
var state_24859__$1 = state_24859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24871_24897 = state_24859__$1;
(statearr_24871_24897[(1)] = (11));

} else {
var statearr_24872_24898 = state_24859__$1;
(statearr_24872_24898[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (5))){
var inst_24836 = (state_24859[(7)]);
var state_24859__$1 = state_24859;
var statearr_24873_24899 = state_24859__$1;
(statearr_24873_24899[(2)] = inst_24836);

(statearr_24873_24899[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (10))){
var inst_24855 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
var statearr_24874_24900 = state_24859__$1;
(statearr_24874_24900[(2)] = inst_24855);

(statearr_24874_24900[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24860 === (8))){
var inst_24836 = (state_24859[(7)]);
var inst_24846 = cljs.core.next(inst_24836);
var inst_24836__$1 = inst_24846;
var state_24859__$1 = (function (){var statearr_24875 = state_24859;
(statearr_24875[(7)] = inst_24836__$1);

return statearr_24875;
})();
var statearr_24876_24901 = state_24859__$1;
(statearr_24876_24901[(2)] = null);

(statearr_24876_24901[(1)] = (2));


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
});})(c__23983__auto__))
;
return ((function (switch__23857__auto__,c__23983__auto__){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_24880 = [null,null,null,null,null,null,null,null];
(statearr_24880[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_24880[(1)] = (1));

return statearr_24880;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_24859){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_24859);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e24881){if((e24881 instanceof Object)){
var ex__23861__auto__ = e24881;
var statearr_24882_24902 = state_24859;
(statearr_24882_24902[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24859);

return cljs.core.cst$kw$recur;
} else {
throw e24881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__24903 = state_24859;
state_24859 = G__24903;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_24859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_24859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto__))
})();
var state__23985__auto__ = (function (){var statearr_24883 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_24883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto__);

return statearr_24883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto__))
);

return c__23983__auto__;
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
var cs = (function (){var G__25132 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25132) : cljs.core.atom.call(null,G__25132));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25133 = (function (ch,cs,meta25134){
this.ch = ch;
this.cs = cs;
this.meta25134 = meta25134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25135,meta25134__$1){
var self__ = this;
var _25135__$1 = this;
return (new cljs.core.async.t_cljs$core$async25133(self__.ch,self__.cs,meta25134__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async25133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25135){
var self__ = this;
var _25135__$1 = this;
return self__.meta25134;
});})(cs))
;


cljs.core.async.t_cljs$core$async25133.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async25133.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25133.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25133.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25133.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25136_25360 = self__.cs;
var G__25137_25361 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25136_25360,G__25137_25361) : cljs.core.reset_BANG_.call(null,G__25136_25360,G__25137_25361));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25133.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25134], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25133";

cljs.core.async.t_cljs$core$async25133.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25133");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25133 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25133(ch__$1,cs__$1,meta25134){
return (new cljs.core.async.t_cljs$core$async25133(ch__$1,cs__$1,meta25134));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25133(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23983__auto___25362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___25362,cs,m,dchan,dctr,done){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___25362,cs,m,dchan,dctr,done){
return (function (state_25272){
var state_val_25273 = (state_25272[(1)]);
if((state_val_25273 === (7))){
var inst_25268 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25274_25363 = state_25272__$1;
(statearr_25274_25363[(2)] = inst_25268);

(statearr_25274_25363[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (20))){
var inst_25171 = (state_25272[(7)]);
var inst_25183 = cljs.core.first(inst_25171);
var inst_25184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25183,(0),null);
var inst_25185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25183,(1),null);
var state_25272__$1 = (function (){var statearr_25275 = state_25272;
(statearr_25275[(8)] = inst_25184);

return statearr_25275;
})();
if(cljs.core.truth_(inst_25185)){
var statearr_25276_25364 = state_25272__$1;
(statearr_25276_25364[(1)] = (22));

} else {
var statearr_25277_25365 = state_25272__$1;
(statearr_25277_25365[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (27))){
var inst_25140 = (state_25272[(9)]);
var inst_25213 = (state_25272[(10)]);
var inst_25220 = (state_25272[(11)]);
var inst_25215 = (state_25272[(12)]);
var inst_25220__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25213,inst_25215);
var inst_25221 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25220__$1,inst_25140,done);
var state_25272__$1 = (function (){var statearr_25278 = state_25272;
(statearr_25278[(11)] = inst_25220__$1);

return statearr_25278;
})();
if(cljs.core.truth_(inst_25221)){
var statearr_25279_25366 = state_25272__$1;
(statearr_25279_25366[(1)] = (30));

} else {
var statearr_25280_25367 = state_25272__$1;
(statearr_25280_25367[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (1))){
var state_25272__$1 = state_25272;
var statearr_25281_25368 = state_25272__$1;
(statearr_25281_25368[(2)] = null);

(statearr_25281_25368[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (24))){
var inst_25171 = (state_25272[(7)]);
var inst_25190 = (state_25272[(2)]);
var inst_25191 = cljs.core.next(inst_25171);
var inst_25149 = inst_25191;
var inst_25150 = null;
var inst_25151 = (0);
var inst_25152 = (0);
var state_25272__$1 = (function (){var statearr_25282 = state_25272;
(statearr_25282[(13)] = inst_25190);

(statearr_25282[(14)] = inst_25152);

(statearr_25282[(15)] = inst_25149);

(statearr_25282[(16)] = inst_25150);

(statearr_25282[(17)] = inst_25151);

return statearr_25282;
})();
var statearr_25283_25369 = state_25272__$1;
(statearr_25283_25369[(2)] = null);

(statearr_25283_25369[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (39))){
var state_25272__$1 = state_25272;
var statearr_25287_25370 = state_25272__$1;
(statearr_25287_25370[(2)] = null);

(statearr_25287_25370[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (4))){
var inst_25140 = (state_25272[(9)]);
var inst_25140__$1 = (state_25272[(2)]);
var inst_25141 = (inst_25140__$1 == null);
var state_25272__$1 = (function (){var statearr_25288 = state_25272;
(statearr_25288[(9)] = inst_25140__$1);

return statearr_25288;
})();
if(cljs.core.truth_(inst_25141)){
var statearr_25289_25371 = state_25272__$1;
(statearr_25289_25371[(1)] = (5));

} else {
var statearr_25290_25372 = state_25272__$1;
(statearr_25290_25372[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (15))){
var inst_25152 = (state_25272[(14)]);
var inst_25149 = (state_25272[(15)]);
var inst_25150 = (state_25272[(16)]);
var inst_25151 = (state_25272[(17)]);
var inst_25167 = (state_25272[(2)]);
var inst_25168 = (inst_25152 + (1));
var tmp25284 = inst_25149;
var tmp25285 = inst_25150;
var tmp25286 = inst_25151;
var inst_25149__$1 = tmp25284;
var inst_25150__$1 = tmp25285;
var inst_25151__$1 = tmp25286;
var inst_25152__$1 = inst_25168;
var state_25272__$1 = (function (){var statearr_25291 = state_25272;
(statearr_25291[(14)] = inst_25152__$1);

(statearr_25291[(15)] = inst_25149__$1);

(statearr_25291[(16)] = inst_25150__$1);

(statearr_25291[(18)] = inst_25167);

(statearr_25291[(17)] = inst_25151__$1);

return statearr_25291;
})();
var statearr_25292_25373 = state_25272__$1;
(statearr_25292_25373[(2)] = null);

(statearr_25292_25373[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (21))){
var inst_25194 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25296_25374 = state_25272__$1;
(statearr_25296_25374[(2)] = inst_25194);

(statearr_25296_25374[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (31))){
var inst_25220 = (state_25272[(11)]);
var inst_25224 = done(null);
var inst_25225 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25220);
var state_25272__$1 = (function (){var statearr_25297 = state_25272;
(statearr_25297[(19)] = inst_25224);

return statearr_25297;
})();
var statearr_25298_25375 = state_25272__$1;
(statearr_25298_25375[(2)] = inst_25225);

(statearr_25298_25375[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (32))){
var inst_25214 = (state_25272[(20)]);
var inst_25213 = (state_25272[(10)]);
var inst_25212 = (state_25272[(21)]);
var inst_25215 = (state_25272[(12)]);
var inst_25227 = (state_25272[(2)]);
var inst_25228 = (inst_25215 + (1));
var tmp25293 = inst_25214;
var tmp25294 = inst_25213;
var tmp25295 = inst_25212;
var inst_25212__$1 = tmp25295;
var inst_25213__$1 = tmp25294;
var inst_25214__$1 = tmp25293;
var inst_25215__$1 = inst_25228;
var state_25272__$1 = (function (){var statearr_25299 = state_25272;
(statearr_25299[(22)] = inst_25227);

(statearr_25299[(20)] = inst_25214__$1);

(statearr_25299[(10)] = inst_25213__$1);

(statearr_25299[(21)] = inst_25212__$1);

(statearr_25299[(12)] = inst_25215__$1);

return statearr_25299;
})();
var statearr_25300_25376 = state_25272__$1;
(statearr_25300_25376[(2)] = null);

(statearr_25300_25376[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (40))){
var inst_25240 = (state_25272[(23)]);
var inst_25244 = done(null);
var inst_25245 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25240);
var state_25272__$1 = (function (){var statearr_25301 = state_25272;
(statearr_25301[(24)] = inst_25244);

return statearr_25301;
})();
var statearr_25302_25377 = state_25272__$1;
(statearr_25302_25377[(2)] = inst_25245);

(statearr_25302_25377[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (33))){
var inst_25231 = (state_25272[(25)]);
var inst_25233 = cljs.core.chunked_seq_QMARK_(inst_25231);
var state_25272__$1 = state_25272;
if(inst_25233){
var statearr_25303_25378 = state_25272__$1;
(statearr_25303_25378[(1)] = (36));

} else {
var statearr_25304_25379 = state_25272__$1;
(statearr_25304_25379[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (13))){
var inst_25161 = (state_25272[(26)]);
var inst_25164 = cljs.core.async.close_BANG_(inst_25161);
var state_25272__$1 = state_25272;
var statearr_25305_25380 = state_25272__$1;
(statearr_25305_25380[(2)] = inst_25164);

(statearr_25305_25380[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (22))){
var inst_25184 = (state_25272[(8)]);
var inst_25187 = cljs.core.async.close_BANG_(inst_25184);
var state_25272__$1 = state_25272;
var statearr_25306_25381 = state_25272__$1;
(statearr_25306_25381[(2)] = inst_25187);

(statearr_25306_25381[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (36))){
var inst_25231 = (state_25272[(25)]);
var inst_25235 = cljs.core.chunk_first(inst_25231);
var inst_25236 = cljs.core.chunk_rest(inst_25231);
var inst_25237 = cljs.core.count(inst_25235);
var inst_25212 = inst_25236;
var inst_25213 = inst_25235;
var inst_25214 = inst_25237;
var inst_25215 = (0);
var state_25272__$1 = (function (){var statearr_25307 = state_25272;
(statearr_25307[(20)] = inst_25214);

(statearr_25307[(10)] = inst_25213);

(statearr_25307[(21)] = inst_25212);

(statearr_25307[(12)] = inst_25215);

return statearr_25307;
})();
var statearr_25308_25382 = state_25272__$1;
(statearr_25308_25382[(2)] = null);

(statearr_25308_25382[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (41))){
var inst_25231 = (state_25272[(25)]);
var inst_25247 = (state_25272[(2)]);
var inst_25248 = cljs.core.next(inst_25231);
var inst_25212 = inst_25248;
var inst_25213 = null;
var inst_25214 = (0);
var inst_25215 = (0);
var state_25272__$1 = (function (){var statearr_25309 = state_25272;
(statearr_25309[(20)] = inst_25214);

(statearr_25309[(27)] = inst_25247);

(statearr_25309[(10)] = inst_25213);

(statearr_25309[(21)] = inst_25212);

(statearr_25309[(12)] = inst_25215);

return statearr_25309;
})();
var statearr_25310_25383 = state_25272__$1;
(statearr_25310_25383[(2)] = null);

(statearr_25310_25383[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (43))){
var state_25272__$1 = state_25272;
var statearr_25311_25384 = state_25272__$1;
(statearr_25311_25384[(2)] = null);

(statearr_25311_25384[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (29))){
var inst_25256 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25312_25385 = state_25272__$1;
(statearr_25312_25385[(2)] = inst_25256);

(statearr_25312_25385[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (44))){
var inst_25265 = (state_25272[(2)]);
var state_25272__$1 = (function (){var statearr_25313 = state_25272;
(statearr_25313[(28)] = inst_25265);

return statearr_25313;
})();
var statearr_25314_25386 = state_25272__$1;
(statearr_25314_25386[(2)] = null);

(statearr_25314_25386[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (6))){
var inst_25204 = (state_25272[(29)]);
var inst_25203 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25204__$1 = cljs.core.keys(inst_25203);
var inst_25205 = cljs.core.count(inst_25204__$1);
var inst_25206 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_25205) : cljs.core.reset_BANG_.call(null,dctr,inst_25205));
var inst_25211 = cljs.core.seq(inst_25204__$1);
var inst_25212 = inst_25211;
var inst_25213 = null;
var inst_25214 = (0);
var inst_25215 = (0);
var state_25272__$1 = (function (){var statearr_25315 = state_25272;
(statearr_25315[(20)] = inst_25214);

(statearr_25315[(29)] = inst_25204__$1);

(statearr_25315[(10)] = inst_25213);

(statearr_25315[(21)] = inst_25212);

(statearr_25315[(12)] = inst_25215);

(statearr_25315[(30)] = inst_25206);

return statearr_25315;
})();
var statearr_25316_25387 = state_25272__$1;
(statearr_25316_25387[(2)] = null);

(statearr_25316_25387[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (28))){
var inst_25212 = (state_25272[(21)]);
var inst_25231 = (state_25272[(25)]);
var inst_25231__$1 = cljs.core.seq(inst_25212);
var state_25272__$1 = (function (){var statearr_25317 = state_25272;
(statearr_25317[(25)] = inst_25231__$1);

return statearr_25317;
})();
if(inst_25231__$1){
var statearr_25318_25388 = state_25272__$1;
(statearr_25318_25388[(1)] = (33));

} else {
var statearr_25319_25389 = state_25272__$1;
(statearr_25319_25389[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (25))){
var inst_25214 = (state_25272[(20)]);
var inst_25215 = (state_25272[(12)]);
var inst_25217 = (inst_25215 < inst_25214);
var inst_25218 = inst_25217;
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25218)){
var statearr_25320_25390 = state_25272__$1;
(statearr_25320_25390[(1)] = (27));

} else {
var statearr_25321_25391 = state_25272__$1;
(statearr_25321_25391[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (34))){
var state_25272__$1 = state_25272;
var statearr_25322_25392 = state_25272__$1;
(statearr_25322_25392[(2)] = null);

(statearr_25322_25392[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (17))){
var state_25272__$1 = state_25272;
var statearr_25323_25393 = state_25272__$1;
(statearr_25323_25393[(2)] = null);

(statearr_25323_25393[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (3))){
var inst_25270 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25272__$1,inst_25270);
} else {
if((state_val_25273 === (12))){
var inst_25199 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25324_25394 = state_25272__$1;
(statearr_25324_25394[(2)] = inst_25199);

(statearr_25324_25394[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (2))){
var state_25272__$1 = state_25272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25272__$1,(4),ch);
} else {
if((state_val_25273 === (23))){
var state_25272__$1 = state_25272;
var statearr_25325_25395 = state_25272__$1;
(statearr_25325_25395[(2)] = null);

(statearr_25325_25395[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (35))){
var inst_25254 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25326_25396 = state_25272__$1;
(statearr_25326_25396[(2)] = inst_25254);

(statearr_25326_25396[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (19))){
var inst_25171 = (state_25272[(7)]);
var inst_25175 = cljs.core.chunk_first(inst_25171);
var inst_25176 = cljs.core.chunk_rest(inst_25171);
var inst_25177 = cljs.core.count(inst_25175);
var inst_25149 = inst_25176;
var inst_25150 = inst_25175;
var inst_25151 = inst_25177;
var inst_25152 = (0);
var state_25272__$1 = (function (){var statearr_25327 = state_25272;
(statearr_25327[(14)] = inst_25152);

(statearr_25327[(15)] = inst_25149);

(statearr_25327[(16)] = inst_25150);

(statearr_25327[(17)] = inst_25151);

return statearr_25327;
})();
var statearr_25328_25397 = state_25272__$1;
(statearr_25328_25397[(2)] = null);

(statearr_25328_25397[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (11))){
var inst_25171 = (state_25272[(7)]);
var inst_25149 = (state_25272[(15)]);
var inst_25171__$1 = cljs.core.seq(inst_25149);
var state_25272__$1 = (function (){var statearr_25329 = state_25272;
(statearr_25329[(7)] = inst_25171__$1);

return statearr_25329;
})();
if(inst_25171__$1){
var statearr_25330_25398 = state_25272__$1;
(statearr_25330_25398[(1)] = (16));

} else {
var statearr_25331_25399 = state_25272__$1;
(statearr_25331_25399[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (9))){
var inst_25201 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25332_25400 = state_25272__$1;
(statearr_25332_25400[(2)] = inst_25201);

(statearr_25332_25400[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (5))){
var inst_25147 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25148 = cljs.core.seq(inst_25147);
var inst_25149 = inst_25148;
var inst_25150 = null;
var inst_25151 = (0);
var inst_25152 = (0);
var state_25272__$1 = (function (){var statearr_25333 = state_25272;
(statearr_25333[(14)] = inst_25152);

(statearr_25333[(15)] = inst_25149);

(statearr_25333[(16)] = inst_25150);

(statearr_25333[(17)] = inst_25151);

return statearr_25333;
})();
var statearr_25334_25401 = state_25272__$1;
(statearr_25334_25401[(2)] = null);

(statearr_25334_25401[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (14))){
var state_25272__$1 = state_25272;
var statearr_25335_25402 = state_25272__$1;
(statearr_25335_25402[(2)] = null);

(statearr_25335_25402[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (45))){
var inst_25262 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25336_25403 = state_25272__$1;
(statearr_25336_25403[(2)] = inst_25262);

(statearr_25336_25403[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (26))){
var inst_25204 = (state_25272[(29)]);
var inst_25258 = (state_25272[(2)]);
var inst_25259 = cljs.core.seq(inst_25204);
var state_25272__$1 = (function (){var statearr_25337 = state_25272;
(statearr_25337[(31)] = inst_25258);

return statearr_25337;
})();
if(inst_25259){
var statearr_25338_25404 = state_25272__$1;
(statearr_25338_25404[(1)] = (42));

} else {
var statearr_25339_25405 = state_25272__$1;
(statearr_25339_25405[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (16))){
var inst_25171 = (state_25272[(7)]);
var inst_25173 = cljs.core.chunked_seq_QMARK_(inst_25171);
var state_25272__$1 = state_25272;
if(inst_25173){
var statearr_25340_25406 = state_25272__$1;
(statearr_25340_25406[(1)] = (19));

} else {
var statearr_25341_25407 = state_25272__$1;
(statearr_25341_25407[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (38))){
var inst_25251 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25342_25408 = state_25272__$1;
(statearr_25342_25408[(2)] = inst_25251);

(statearr_25342_25408[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (30))){
var state_25272__$1 = state_25272;
var statearr_25343_25409 = state_25272__$1;
(statearr_25343_25409[(2)] = null);

(statearr_25343_25409[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (10))){
var inst_25152 = (state_25272[(14)]);
var inst_25150 = (state_25272[(16)]);
var inst_25160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25150,inst_25152);
var inst_25161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25160,(0),null);
var inst_25162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25160,(1),null);
var state_25272__$1 = (function (){var statearr_25344 = state_25272;
(statearr_25344[(26)] = inst_25161);

return statearr_25344;
})();
if(cljs.core.truth_(inst_25162)){
var statearr_25345_25410 = state_25272__$1;
(statearr_25345_25410[(1)] = (13));

} else {
var statearr_25346_25411 = state_25272__$1;
(statearr_25346_25411[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (18))){
var inst_25197 = (state_25272[(2)]);
var state_25272__$1 = state_25272;
var statearr_25347_25412 = state_25272__$1;
(statearr_25347_25412[(2)] = inst_25197);

(statearr_25347_25412[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (42))){
var state_25272__$1 = state_25272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25272__$1,(45),dchan);
} else {
if((state_val_25273 === (37))){
var inst_25140 = (state_25272[(9)]);
var inst_25240 = (state_25272[(23)]);
var inst_25231 = (state_25272[(25)]);
var inst_25240__$1 = cljs.core.first(inst_25231);
var inst_25241 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25240__$1,inst_25140,done);
var state_25272__$1 = (function (){var statearr_25348 = state_25272;
(statearr_25348[(23)] = inst_25240__$1);

return statearr_25348;
})();
if(cljs.core.truth_(inst_25241)){
var statearr_25349_25413 = state_25272__$1;
(statearr_25349_25413[(1)] = (39));

} else {
var statearr_25350_25414 = state_25272__$1;
(statearr_25350_25414[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25273 === (8))){
var inst_25152 = (state_25272[(14)]);
var inst_25151 = (state_25272[(17)]);
var inst_25154 = (inst_25152 < inst_25151);
var inst_25155 = inst_25154;
var state_25272__$1 = state_25272;
if(cljs.core.truth_(inst_25155)){
var statearr_25351_25415 = state_25272__$1;
(statearr_25351_25415[(1)] = (10));

} else {
var statearr_25352_25416 = state_25272__$1;
(statearr_25352_25416[(1)] = (11));

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
});})(c__23983__auto___25362,cs,m,dchan,dctr,done))
;
return ((function (switch__23857__auto__,c__23983__auto___25362,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23858__auto__ = null;
var cljs$core$async$mult_$_state_machine__23858__auto____0 = (function (){
var statearr_25356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25356[(0)] = cljs$core$async$mult_$_state_machine__23858__auto__);

(statearr_25356[(1)] = (1));

return statearr_25356;
});
var cljs$core$async$mult_$_state_machine__23858__auto____1 = (function (state_25272){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_25272);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e25357){if((e25357 instanceof Object)){
var ex__23861__auto__ = e25357;
var statearr_25358_25417 = state_25272;
(statearr_25358_25417[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25272);

return cljs.core.cst$kw$recur;
} else {
throw e25357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__25418 = state_25272;
state_25272 = G__25418;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23858__auto__ = function(state_25272){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23858__auto____1.call(this,state_25272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23858__auto____0;
cljs$core$async$mult_$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23858__auto____1;
return cljs$core$async$mult_$_state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___25362,cs,m,dchan,dctr,done))
})();
var state__23985__auto__ = (function (){var statearr_25359 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_25359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___25362);

return statearr_25359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___25362,cs,m,dchan,dctr,done))
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
var args25419 = [];
var len__8739__auto___25422 = arguments.length;
var i__8740__auto___25423 = (0);
while(true){
if((i__8740__auto___25423 < len__8739__auto___25422)){
args25419.push((arguments[i__8740__auto___25423]));

var G__25424 = (i__8740__auto___25423 + (1));
i__8740__auto___25423 = G__25424;
continue;
} else {
}
break;
}

var G__25421 = args25419.length;
switch (G__25421) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25419.length)].join('')));

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
var len__8739__auto___25436 = arguments.length;
var i__8740__auto___25437 = (0);
while(true){
if((i__8740__auto___25437 < len__8739__auto___25436)){
args__8746__auto__.push((arguments[i__8740__auto___25437]));

var G__25438 = (i__8740__auto___25437 + (1));
i__8740__auto___25437 = G__25438;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((3) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8747__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25430){
var map__25431 = p__25430;
var map__25431__$1 = ((((!((map__25431 == null)))?((((map__25431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25431):map__25431);
var opts = map__25431__$1;
var statearr_25433_25439 = state;
(statearr_25433_25439[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__25431,map__25431__$1,opts){
return (function (val){
var statearr_25434_25440 = state;
(statearr_25434_25440[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25431,map__25431__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_25435_25441 = state;
(statearr_25435_25441[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25426){
var G__25427 = cljs.core.first(seq25426);
var seq25426__$1 = cljs.core.next(seq25426);
var G__25428 = cljs.core.first(seq25426__$1);
var seq25426__$2 = cljs.core.next(seq25426__$1);
var G__25429 = cljs.core.first(seq25426__$2);
var seq25426__$3 = cljs.core.next(seq25426__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25427,G__25428,G__25429,seq25426__$3);
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
var cs = (function (){var G__25613 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25613) : cljs.core.atom.call(null,G__25613));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__25614 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25614) : cljs.core.atom.call(null,G__25614));
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
if(typeof cljs.core.async.t_cljs$core$async25615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25615 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25616){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25616 = meta25616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25617,meta25616__$1){
var self__ = this;
var _25617__$1 = this;
return (new cljs.core.async.t_cljs$core$async25615(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25616__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25617){
var self__ = this;
var _25617__$1 = this;
return self__.meta25616;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25618_25784 = self__.cs;
var G__25619_25785 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25618_25784,G__25619_25785) : cljs.core.reset_BANG_.call(null,G__25618_25784,G__25619_25785));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25615.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25616], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25615";

cljs.core.async.t_cljs$core$async25615.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25615");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25615 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25615(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25616){
return (new cljs.core.async.t_cljs$core$async25615(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25616));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25615(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23983__auto___25786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___25786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___25786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25721){
var state_val_25722 = (state_25721[(1)]);
if((state_val_25722 === (7))){
var inst_25636 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25723_25787 = state_25721__$1;
(statearr_25723_25787[(2)] = inst_25636);

(statearr_25723_25787[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (20))){
var inst_25648 = (state_25721[(7)]);
var state_25721__$1 = state_25721;
var statearr_25724_25788 = state_25721__$1;
(statearr_25724_25788[(2)] = inst_25648);

(statearr_25724_25788[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (27))){
var state_25721__$1 = state_25721;
var statearr_25725_25789 = state_25721__$1;
(statearr_25725_25789[(2)] = null);

(statearr_25725_25789[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (1))){
var inst_25623 = (state_25721[(8)]);
var inst_25623__$1 = calc_state();
var inst_25625 = (inst_25623__$1 == null);
var inst_25626 = cljs.core.not(inst_25625);
var state_25721__$1 = (function (){var statearr_25726 = state_25721;
(statearr_25726[(8)] = inst_25623__$1);

return statearr_25726;
})();
if(inst_25626){
var statearr_25727_25790 = state_25721__$1;
(statearr_25727_25790[(1)] = (2));

} else {
var statearr_25728_25791 = state_25721__$1;
(statearr_25728_25791[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (24))){
var inst_25681 = (state_25721[(9)]);
var inst_25672 = (state_25721[(10)]);
var inst_25695 = (state_25721[(11)]);
var inst_25695__$1 = (inst_25672.cljs$core$IFn$_invoke$arity$1 ? inst_25672.cljs$core$IFn$_invoke$arity$1(inst_25681) : inst_25672.call(null,inst_25681));
var state_25721__$1 = (function (){var statearr_25729 = state_25721;
(statearr_25729[(11)] = inst_25695__$1);

return statearr_25729;
})();
if(cljs.core.truth_(inst_25695__$1)){
var statearr_25730_25792 = state_25721__$1;
(statearr_25730_25792[(1)] = (29));

} else {
var statearr_25731_25793 = state_25721__$1;
(statearr_25731_25793[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (4))){
var inst_25639 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25639)){
var statearr_25732_25794 = state_25721__$1;
(statearr_25732_25794[(1)] = (8));

} else {
var statearr_25733_25795 = state_25721__$1;
(statearr_25733_25795[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (15))){
var inst_25666 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25666)){
var statearr_25734_25796 = state_25721__$1;
(statearr_25734_25796[(1)] = (19));

} else {
var statearr_25735_25797 = state_25721__$1;
(statearr_25735_25797[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (21))){
var inst_25671 = (state_25721[(12)]);
var inst_25671__$1 = (state_25721[(2)]);
var inst_25672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25671__$1,cljs.core.cst$kw$solos);
var inst_25673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25671__$1,cljs.core.cst$kw$mutes);
var inst_25674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25671__$1,cljs.core.cst$kw$reads);
var state_25721__$1 = (function (){var statearr_25736 = state_25721;
(statearr_25736[(13)] = inst_25673);

(statearr_25736[(12)] = inst_25671__$1);

(statearr_25736[(10)] = inst_25672);

return statearr_25736;
})();
return cljs.core.async.ioc_alts_BANG_(state_25721__$1,(22),inst_25674);
} else {
if((state_val_25722 === (31))){
var inst_25703 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25703)){
var statearr_25737_25798 = state_25721__$1;
(statearr_25737_25798[(1)] = (32));

} else {
var statearr_25738_25799 = state_25721__$1;
(statearr_25738_25799[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (32))){
var inst_25680 = (state_25721[(14)]);
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25721__$1,(35),out,inst_25680);
} else {
if((state_val_25722 === (33))){
var inst_25671 = (state_25721[(12)]);
var inst_25648 = inst_25671;
var state_25721__$1 = (function (){var statearr_25739 = state_25721;
(statearr_25739[(7)] = inst_25648);

return statearr_25739;
})();
var statearr_25740_25800 = state_25721__$1;
(statearr_25740_25800[(2)] = null);

(statearr_25740_25800[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (13))){
var inst_25648 = (state_25721[(7)]);
var inst_25655 = inst_25648.cljs$lang$protocol_mask$partition0$;
var inst_25656 = (inst_25655 & (64));
var inst_25657 = inst_25648.cljs$core$ISeq$;
var inst_25658 = (cljs.core.PROTOCOL_SENTINEL === inst_25657);
var inst_25659 = (inst_25656) || (inst_25658);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25659)){
var statearr_25741_25801 = state_25721__$1;
(statearr_25741_25801[(1)] = (16));

} else {
var statearr_25742_25802 = state_25721__$1;
(statearr_25742_25802[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (22))){
var inst_25680 = (state_25721[(14)]);
var inst_25681 = (state_25721[(9)]);
var inst_25679 = (state_25721[(2)]);
var inst_25680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25679,(0),null);
var inst_25681__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25679,(1),null);
var inst_25682 = (inst_25680__$1 == null);
var inst_25683 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25681__$1,change);
var inst_25684 = (inst_25682) || (inst_25683);
var state_25721__$1 = (function (){var statearr_25743 = state_25721;
(statearr_25743[(14)] = inst_25680__$1);

(statearr_25743[(9)] = inst_25681__$1);

return statearr_25743;
})();
if(cljs.core.truth_(inst_25684)){
var statearr_25744_25803 = state_25721__$1;
(statearr_25744_25803[(1)] = (23));

} else {
var statearr_25745_25804 = state_25721__$1;
(statearr_25745_25804[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (36))){
var inst_25671 = (state_25721[(12)]);
var inst_25648 = inst_25671;
var state_25721__$1 = (function (){var statearr_25746 = state_25721;
(statearr_25746[(7)] = inst_25648);

return statearr_25746;
})();
var statearr_25747_25805 = state_25721__$1;
(statearr_25747_25805[(2)] = null);

(statearr_25747_25805[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (29))){
var inst_25695 = (state_25721[(11)]);
var state_25721__$1 = state_25721;
var statearr_25748_25806 = state_25721__$1;
(statearr_25748_25806[(2)] = inst_25695);

(statearr_25748_25806[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (6))){
var state_25721__$1 = state_25721;
var statearr_25749_25807 = state_25721__$1;
(statearr_25749_25807[(2)] = false);

(statearr_25749_25807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (28))){
var inst_25691 = (state_25721[(2)]);
var inst_25692 = calc_state();
var inst_25648 = inst_25692;
var state_25721__$1 = (function (){var statearr_25750 = state_25721;
(statearr_25750[(15)] = inst_25691);

(statearr_25750[(7)] = inst_25648);

return statearr_25750;
})();
var statearr_25751_25808 = state_25721__$1;
(statearr_25751_25808[(2)] = null);

(statearr_25751_25808[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (25))){
var inst_25717 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25752_25809 = state_25721__$1;
(statearr_25752_25809[(2)] = inst_25717);

(statearr_25752_25809[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (34))){
var inst_25715 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25753_25810 = state_25721__$1;
(statearr_25753_25810[(2)] = inst_25715);

(statearr_25753_25810[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (17))){
var state_25721__$1 = state_25721;
var statearr_25754_25811 = state_25721__$1;
(statearr_25754_25811[(2)] = false);

(statearr_25754_25811[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (3))){
var state_25721__$1 = state_25721;
var statearr_25755_25812 = state_25721__$1;
(statearr_25755_25812[(2)] = false);

(statearr_25755_25812[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (12))){
var inst_25719 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25721__$1,inst_25719);
} else {
if((state_val_25722 === (2))){
var inst_25623 = (state_25721[(8)]);
var inst_25628 = inst_25623.cljs$lang$protocol_mask$partition0$;
var inst_25629 = (inst_25628 & (64));
var inst_25630 = inst_25623.cljs$core$ISeq$;
var inst_25631 = (cljs.core.PROTOCOL_SENTINEL === inst_25630);
var inst_25632 = (inst_25629) || (inst_25631);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25632)){
var statearr_25756_25813 = state_25721__$1;
(statearr_25756_25813[(1)] = (5));

} else {
var statearr_25757_25814 = state_25721__$1;
(statearr_25757_25814[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (23))){
var inst_25680 = (state_25721[(14)]);
var inst_25686 = (inst_25680 == null);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25686)){
var statearr_25758_25815 = state_25721__$1;
(statearr_25758_25815[(1)] = (26));

} else {
var statearr_25759_25816 = state_25721__$1;
(statearr_25759_25816[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (35))){
var inst_25706 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25706)){
var statearr_25760_25817 = state_25721__$1;
(statearr_25760_25817[(1)] = (36));

} else {
var statearr_25761_25818 = state_25721__$1;
(statearr_25761_25818[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (19))){
var inst_25648 = (state_25721[(7)]);
var inst_25668 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25648);
var state_25721__$1 = state_25721;
var statearr_25762_25819 = state_25721__$1;
(statearr_25762_25819[(2)] = inst_25668);

(statearr_25762_25819[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (11))){
var inst_25648 = (state_25721[(7)]);
var inst_25652 = (inst_25648 == null);
var inst_25653 = cljs.core.not(inst_25652);
var state_25721__$1 = state_25721;
if(inst_25653){
var statearr_25763_25820 = state_25721__$1;
(statearr_25763_25820[(1)] = (13));

} else {
var statearr_25764_25821 = state_25721__$1;
(statearr_25764_25821[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (9))){
var inst_25623 = (state_25721[(8)]);
var state_25721__$1 = state_25721;
var statearr_25765_25822 = state_25721__$1;
(statearr_25765_25822[(2)] = inst_25623);

(statearr_25765_25822[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (5))){
var state_25721__$1 = state_25721;
var statearr_25766_25823 = state_25721__$1;
(statearr_25766_25823[(2)] = true);

(statearr_25766_25823[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (14))){
var state_25721__$1 = state_25721;
var statearr_25767_25824 = state_25721__$1;
(statearr_25767_25824[(2)] = false);

(statearr_25767_25824[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (26))){
var inst_25681 = (state_25721[(9)]);
var inst_25688 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25681);
var state_25721__$1 = state_25721;
var statearr_25768_25825 = state_25721__$1;
(statearr_25768_25825[(2)] = inst_25688);

(statearr_25768_25825[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (16))){
var state_25721__$1 = state_25721;
var statearr_25769_25826 = state_25721__$1;
(statearr_25769_25826[(2)] = true);

(statearr_25769_25826[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (38))){
var inst_25711 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25770_25827 = state_25721__$1;
(statearr_25770_25827[(2)] = inst_25711);

(statearr_25770_25827[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (30))){
var inst_25673 = (state_25721[(13)]);
var inst_25681 = (state_25721[(9)]);
var inst_25672 = (state_25721[(10)]);
var inst_25698 = cljs.core.empty_QMARK_(inst_25672);
var inst_25699 = (inst_25673.cljs$core$IFn$_invoke$arity$1 ? inst_25673.cljs$core$IFn$_invoke$arity$1(inst_25681) : inst_25673.call(null,inst_25681));
var inst_25700 = cljs.core.not(inst_25699);
var inst_25701 = (inst_25698) && (inst_25700);
var state_25721__$1 = state_25721;
var statearr_25771_25828 = state_25721__$1;
(statearr_25771_25828[(2)] = inst_25701);

(statearr_25771_25828[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (10))){
var inst_25623 = (state_25721[(8)]);
var inst_25644 = (state_25721[(2)]);
var inst_25645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25644,cljs.core.cst$kw$solos);
var inst_25646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25644,cljs.core.cst$kw$mutes);
var inst_25647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25644,cljs.core.cst$kw$reads);
var inst_25648 = inst_25623;
var state_25721__$1 = (function (){var statearr_25772 = state_25721;
(statearr_25772[(16)] = inst_25647);

(statearr_25772[(7)] = inst_25648);

(statearr_25772[(17)] = inst_25646);

(statearr_25772[(18)] = inst_25645);

return statearr_25772;
})();
var statearr_25773_25829 = state_25721__$1;
(statearr_25773_25829[(2)] = null);

(statearr_25773_25829[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (18))){
var inst_25663 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25774_25830 = state_25721__$1;
(statearr_25774_25830[(2)] = inst_25663);

(statearr_25774_25830[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (37))){
var state_25721__$1 = state_25721;
var statearr_25775_25831 = state_25721__$1;
(statearr_25775_25831[(2)] = null);

(statearr_25775_25831[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25722 === (8))){
var inst_25623 = (state_25721[(8)]);
var inst_25641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25623);
var state_25721__$1 = state_25721;
var statearr_25776_25832 = state_25721__$1;
(statearr_25776_25832[(2)] = inst_25641);

(statearr_25776_25832[(1)] = (10));


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
});})(c__23983__auto___25786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23857__auto__,c__23983__auto___25786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23858__auto__ = null;
var cljs$core$async$mix_$_state_machine__23858__auto____0 = (function (){
var statearr_25780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25780[(0)] = cljs$core$async$mix_$_state_machine__23858__auto__);

(statearr_25780[(1)] = (1));

return statearr_25780;
});
var cljs$core$async$mix_$_state_machine__23858__auto____1 = (function (state_25721){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_25721);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e25781){if((e25781 instanceof Object)){
var ex__23861__auto__ = e25781;
var statearr_25782_25833 = state_25721;
(statearr_25782_25833[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25721);

return cljs.core.cst$kw$recur;
} else {
throw e25781;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__25834 = state_25721;
state_25721 = G__25834;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23858__auto__ = function(state_25721){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23858__auto____1.call(this,state_25721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23858__auto____0;
cljs$core$async$mix_$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23858__auto____1;
return cljs$core$async$mix_$_state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___25786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23985__auto__ = (function (){var statearr_25783 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_25783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___25786);

return statearr_25783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___25786,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25835 = [];
var len__8739__auto___25838 = arguments.length;
var i__8740__auto___25839 = (0);
while(true){
if((i__8740__auto___25839 < len__8739__auto___25838)){
args25835.push((arguments[i__8740__auto___25839]));

var G__25840 = (i__8740__auto___25839 + (1));
i__8740__auto___25839 = G__25840;
continue;
} else {
}
break;
}

var G__25837 = args25835.length;
switch (G__25837) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25835.length)].join('')));

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
var args25843 = [];
var len__8739__auto___25971 = arguments.length;
var i__8740__auto___25972 = (0);
while(true){
if((i__8740__auto___25972 < len__8739__auto___25971)){
args25843.push((arguments[i__8740__auto___25972]));

var G__25973 = (i__8740__auto___25972 + (1));
i__8740__auto___25972 = G__25973;
continue;
} else {
}
break;
}

var G__25845 = args25843.length;
switch (G__25845) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25843.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__25846 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25846) : cljs.core.atom.call(null,G__25846));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7523__auto__,mults){
return (function (p1__25842_SHARP_){
if(cljs.core.truth_((p1__25842_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25842_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25842_SHARP_.call(null,topic)))){
return p1__25842_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25842_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7523__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25847 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25848){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25848 = meta25848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25849,meta25848__$1){
var self__ = this;
var _25849__$1 = this;
return (new cljs.core.async.t_cljs$core$async25847(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25848__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25849){
var self__ = this;
var _25849__$1 = this;
return self__.meta25848;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25850 = self__.mults;
var G__25851 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25850,G__25851) : cljs.core.reset_BANG_.call(null,G__25850,G__25851));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25847.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25848], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25847";

cljs.core.async.t_cljs$core$async25847.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25847");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25847 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25848){
return (new cljs.core.async.t_cljs$core$async25847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25848));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25847(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23983__auto___25975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___25975,mults,ensure_mult,p){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___25975,mults,ensure_mult,p){
return (function (state_25923){
var state_val_25924 = (state_25923[(1)]);
if((state_val_25924 === (7))){
var inst_25919 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25925_25976 = state_25923__$1;
(statearr_25925_25976[(2)] = inst_25919);

(statearr_25925_25976[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (20))){
var state_25923__$1 = state_25923;
var statearr_25926_25977 = state_25923__$1;
(statearr_25926_25977[(2)] = null);

(statearr_25926_25977[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (1))){
var state_25923__$1 = state_25923;
var statearr_25927_25978 = state_25923__$1;
(statearr_25927_25978[(2)] = null);

(statearr_25927_25978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (24))){
var inst_25902 = (state_25923[(7)]);
var inst_25911 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25902);
var state_25923__$1 = state_25923;
var statearr_25928_25979 = state_25923__$1;
(statearr_25928_25979[(2)] = inst_25911);

(statearr_25928_25979[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (4))){
var inst_25854 = (state_25923[(8)]);
var inst_25854__$1 = (state_25923[(2)]);
var inst_25855 = (inst_25854__$1 == null);
var state_25923__$1 = (function (){var statearr_25929 = state_25923;
(statearr_25929[(8)] = inst_25854__$1);

return statearr_25929;
})();
if(cljs.core.truth_(inst_25855)){
var statearr_25930_25980 = state_25923__$1;
(statearr_25930_25980[(1)] = (5));

} else {
var statearr_25931_25981 = state_25923__$1;
(statearr_25931_25981[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (15))){
var inst_25896 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25932_25982 = state_25923__$1;
(statearr_25932_25982[(2)] = inst_25896);

(statearr_25932_25982[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (21))){
var inst_25916 = (state_25923[(2)]);
var state_25923__$1 = (function (){var statearr_25933 = state_25923;
(statearr_25933[(9)] = inst_25916);

return statearr_25933;
})();
var statearr_25934_25983 = state_25923__$1;
(statearr_25934_25983[(2)] = null);

(statearr_25934_25983[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (13))){
var inst_25878 = (state_25923[(10)]);
var inst_25880 = cljs.core.chunked_seq_QMARK_(inst_25878);
var state_25923__$1 = state_25923;
if(inst_25880){
var statearr_25935_25984 = state_25923__$1;
(statearr_25935_25984[(1)] = (16));

} else {
var statearr_25936_25985 = state_25923__$1;
(statearr_25936_25985[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (22))){
var inst_25908 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25908)){
var statearr_25937_25986 = state_25923__$1;
(statearr_25937_25986[(1)] = (23));

} else {
var statearr_25938_25987 = state_25923__$1;
(statearr_25938_25987[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (6))){
var inst_25902 = (state_25923[(7)]);
var inst_25904 = (state_25923[(11)]);
var inst_25854 = (state_25923[(8)]);
var inst_25902__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25854) : topic_fn.call(null,inst_25854));
var inst_25903 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25904__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25903,inst_25902__$1);
var state_25923__$1 = (function (){var statearr_25939 = state_25923;
(statearr_25939[(7)] = inst_25902__$1);

(statearr_25939[(11)] = inst_25904__$1);

return statearr_25939;
})();
if(cljs.core.truth_(inst_25904__$1)){
var statearr_25940_25988 = state_25923__$1;
(statearr_25940_25988[(1)] = (19));

} else {
var statearr_25941_25989 = state_25923__$1;
(statearr_25941_25989[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (25))){
var inst_25913 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25942_25990 = state_25923__$1;
(statearr_25942_25990[(2)] = inst_25913);

(statearr_25942_25990[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (17))){
var inst_25878 = (state_25923[(10)]);
var inst_25887 = cljs.core.first(inst_25878);
var inst_25888 = cljs.core.async.muxch_STAR_(inst_25887);
var inst_25889 = cljs.core.async.close_BANG_(inst_25888);
var inst_25890 = cljs.core.next(inst_25878);
var inst_25864 = inst_25890;
var inst_25865 = null;
var inst_25866 = (0);
var inst_25867 = (0);
var state_25923__$1 = (function (){var statearr_25943 = state_25923;
(statearr_25943[(12)] = inst_25867);

(statearr_25943[(13)] = inst_25866);

(statearr_25943[(14)] = inst_25865);

(statearr_25943[(15)] = inst_25889);

(statearr_25943[(16)] = inst_25864);

return statearr_25943;
})();
var statearr_25944_25991 = state_25923__$1;
(statearr_25944_25991[(2)] = null);

(statearr_25944_25991[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (3))){
var inst_25921 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25923__$1,inst_25921);
} else {
if((state_val_25924 === (12))){
var inst_25898 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25945_25992 = state_25923__$1;
(statearr_25945_25992[(2)] = inst_25898);

(statearr_25945_25992[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (2))){
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25923__$1,(4),ch);
} else {
if((state_val_25924 === (23))){
var state_25923__$1 = state_25923;
var statearr_25946_25993 = state_25923__$1;
(statearr_25946_25993[(2)] = null);

(statearr_25946_25993[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (19))){
var inst_25904 = (state_25923[(11)]);
var inst_25854 = (state_25923[(8)]);
var inst_25906 = cljs.core.async.muxch_STAR_(inst_25904);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25923__$1,(22),inst_25906,inst_25854);
} else {
if((state_val_25924 === (11))){
var inst_25878 = (state_25923[(10)]);
var inst_25864 = (state_25923[(16)]);
var inst_25878__$1 = cljs.core.seq(inst_25864);
var state_25923__$1 = (function (){var statearr_25947 = state_25923;
(statearr_25947[(10)] = inst_25878__$1);

return statearr_25947;
})();
if(inst_25878__$1){
var statearr_25948_25994 = state_25923__$1;
(statearr_25948_25994[(1)] = (13));

} else {
var statearr_25949_25995 = state_25923__$1;
(statearr_25949_25995[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (9))){
var inst_25900 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25950_25996 = state_25923__$1;
(statearr_25950_25996[(2)] = inst_25900);

(statearr_25950_25996[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (5))){
var inst_25861 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25862 = cljs.core.vals(inst_25861);
var inst_25863 = cljs.core.seq(inst_25862);
var inst_25864 = inst_25863;
var inst_25865 = null;
var inst_25866 = (0);
var inst_25867 = (0);
var state_25923__$1 = (function (){var statearr_25951 = state_25923;
(statearr_25951[(12)] = inst_25867);

(statearr_25951[(13)] = inst_25866);

(statearr_25951[(14)] = inst_25865);

(statearr_25951[(16)] = inst_25864);

return statearr_25951;
})();
var statearr_25952_25997 = state_25923__$1;
(statearr_25952_25997[(2)] = null);

(statearr_25952_25997[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (14))){
var state_25923__$1 = state_25923;
var statearr_25956_25998 = state_25923__$1;
(statearr_25956_25998[(2)] = null);

(statearr_25956_25998[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (16))){
var inst_25878 = (state_25923[(10)]);
var inst_25882 = cljs.core.chunk_first(inst_25878);
var inst_25883 = cljs.core.chunk_rest(inst_25878);
var inst_25884 = cljs.core.count(inst_25882);
var inst_25864 = inst_25883;
var inst_25865 = inst_25882;
var inst_25866 = inst_25884;
var inst_25867 = (0);
var state_25923__$1 = (function (){var statearr_25957 = state_25923;
(statearr_25957[(12)] = inst_25867);

(statearr_25957[(13)] = inst_25866);

(statearr_25957[(14)] = inst_25865);

(statearr_25957[(16)] = inst_25864);

return statearr_25957;
})();
var statearr_25958_25999 = state_25923__$1;
(statearr_25958_25999[(2)] = null);

(statearr_25958_25999[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (10))){
var inst_25867 = (state_25923[(12)]);
var inst_25866 = (state_25923[(13)]);
var inst_25865 = (state_25923[(14)]);
var inst_25864 = (state_25923[(16)]);
var inst_25872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25865,inst_25867);
var inst_25873 = cljs.core.async.muxch_STAR_(inst_25872);
var inst_25874 = cljs.core.async.close_BANG_(inst_25873);
var inst_25875 = (inst_25867 + (1));
var tmp25953 = inst_25866;
var tmp25954 = inst_25865;
var tmp25955 = inst_25864;
var inst_25864__$1 = tmp25955;
var inst_25865__$1 = tmp25954;
var inst_25866__$1 = tmp25953;
var inst_25867__$1 = inst_25875;
var state_25923__$1 = (function (){var statearr_25959 = state_25923;
(statearr_25959[(17)] = inst_25874);

(statearr_25959[(12)] = inst_25867__$1);

(statearr_25959[(13)] = inst_25866__$1);

(statearr_25959[(14)] = inst_25865__$1);

(statearr_25959[(16)] = inst_25864__$1);

return statearr_25959;
})();
var statearr_25960_26000 = state_25923__$1;
(statearr_25960_26000[(2)] = null);

(statearr_25960_26000[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (18))){
var inst_25893 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25961_26001 = state_25923__$1;
(statearr_25961_26001[(2)] = inst_25893);

(statearr_25961_26001[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25924 === (8))){
var inst_25867 = (state_25923[(12)]);
var inst_25866 = (state_25923[(13)]);
var inst_25869 = (inst_25867 < inst_25866);
var inst_25870 = inst_25869;
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25870)){
var statearr_25962_26002 = state_25923__$1;
(statearr_25962_26002[(1)] = (10));

} else {
var statearr_25963_26003 = state_25923__$1;
(statearr_25963_26003[(1)] = (11));

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
});})(c__23983__auto___25975,mults,ensure_mult,p))
;
return ((function (switch__23857__auto__,c__23983__auto___25975,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_25967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25967[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_25967[(1)] = (1));

return statearr_25967;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_25923){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_25923);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e25968){if((e25968 instanceof Object)){
var ex__23861__auto__ = e25968;
var statearr_25969_26004 = state_25923;
(statearr_25969_26004[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25923);

return cljs.core.cst$kw$recur;
} else {
throw e25968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26005 = state_25923;
state_25923 = G__26005;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_25923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_25923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___25975,mults,ensure_mult,p))
})();
var state__23985__auto__ = (function (){var statearr_25970 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_25970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___25975);

return statearr_25970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___25975,mults,ensure_mult,p))
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
var args26006 = [];
var len__8739__auto___26009 = arguments.length;
var i__8740__auto___26010 = (0);
while(true){
if((i__8740__auto___26010 < len__8739__auto___26009)){
args26006.push((arguments[i__8740__auto___26010]));

var G__26011 = (i__8740__auto___26010 + (1));
i__8740__auto___26010 = G__26011;
continue;
} else {
}
break;
}

var G__26008 = args26006.length;
switch (G__26008) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26006.length)].join('')));

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
var args26013 = [];
var len__8739__auto___26016 = arguments.length;
var i__8740__auto___26017 = (0);
while(true){
if((i__8740__auto___26017 < len__8739__auto___26016)){
args26013.push((arguments[i__8740__auto___26017]));

var G__26018 = (i__8740__auto___26017 + (1));
i__8740__auto___26017 = G__26018;
continue;
} else {
}
break;
}

var G__26015 = args26013.length;
switch (G__26015) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26013.length)].join('')));

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
var args26020 = [];
var len__8739__auto___26091 = arguments.length;
var i__8740__auto___26092 = (0);
while(true){
if((i__8740__auto___26092 < len__8739__auto___26091)){
args26020.push((arguments[i__8740__auto___26092]));

var G__26093 = (i__8740__auto___26092 + (1));
i__8740__auto___26092 = G__26093;
continue;
} else {
}
break;
}

var G__26022 = args26020.length;
switch (G__26022) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26020.length)].join('')));

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
var c__23983__auto___26095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___26095,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___26095,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26061){
var state_val_26062 = (state_26061[(1)]);
if((state_val_26062 === (7))){
var state_26061__$1 = state_26061;
var statearr_26063_26096 = state_26061__$1;
(statearr_26063_26096[(2)] = null);

(statearr_26063_26096[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (1))){
var state_26061__$1 = state_26061;
var statearr_26064_26097 = state_26061__$1;
(statearr_26064_26097[(2)] = null);

(statearr_26064_26097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (4))){
var inst_26025 = (state_26061[(7)]);
var inst_26027 = (inst_26025 < cnt);
var state_26061__$1 = state_26061;
if(cljs.core.truth_(inst_26027)){
var statearr_26065_26098 = state_26061__$1;
(statearr_26065_26098[(1)] = (6));

} else {
var statearr_26066_26099 = state_26061__$1;
(statearr_26066_26099[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (15))){
var inst_26057 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26067_26100 = state_26061__$1;
(statearr_26067_26100[(2)] = inst_26057);

(statearr_26067_26100[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (13))){
var inst_26050 = cljs.core.async.close_BANG_(out);
var state_26061__$1 = state_26061;
var statearr_26068_26101 = state_26061__$1;
(statearr_26068_26101[(2)] = inst_26050);

(statearr_26068_26101[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (6))){
var state_26061__$1 = state_26061;
var statearr_26069_26102 = state_26061__$1;
(statearr_26069_26102[(2)] = null);

(statearr_26069_26102[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (3))){
var inst_26059 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26061__$1,inst_26059);
} else {
if((state_val_26062 === (12))){
var inst_26047 = (state_26061[(8)]);
var inst_26047__$1 = (state_26061[(2)]);
var inst_26048 = cljs.core.some(cljs.core.nil_QMARK_,inst_26047__$1);
var state_26061__$1 = (function (){var statearr_26070 = state_26061;
(statearr_26070[(8)] = inst_26047__$1);

return statearr_26070;
})();
if(cljs.core.truth_(inst_26048)){
var statearr_26071_26103 = state_26061__$1;
(statearr_26071_26103[(1)] = (13));

} else {
var statearr_26072_26104 = state_26061__$1;
(statearr_26072_26104[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (2))){
var inst_26024 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_26025 = (0);
var state_26061__$1 = (function (){var statearr_26073 = state_26061;
(statearr_26073[(7)] = inst_26025);

(statearr_26073[(9)] = inst_26024);

return statearr_26073;
})();
var statearr_26074_26105 = state_26061__$1;
(statearr_26074_26105[(2)] = null);

(statearr_26074_26105[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (11))){
var inst_26025 = (state_26061[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26061,(10),Object,null,(9));
var inst_26034 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26025) : chs__$1.call(null,inst_26025));
var inst_26035 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26025) : done.call(null,inst_26025));
var inst_26036 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26034,inst_26035);
var state_26061__$1 = state_26061;
var statearr_26075_26106 = state_26061__$1;
(statearr_26075_26106[(2)] = inst_26036);


cljs.core.async.impl.ioc_helpers.process_exception(state_26061__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (9))){
var inst_26025 = (state_26061[(7)]);
var inst_26038 = (state_26061[(2)]);
var inst_26039 = (inst_26025 + (1));
var inst_26025__$1 = inst_26039;
var state_26061__$1 = (function (){var statearr_26076 = state_26061;
(statearr_26076[(7)] = inst_26025__$1);

(statearr_26076[(10)] = inst_26038);

return statearr_26076;
})();
var statearr_26077_26107 = state_26061__$1;
(statearr_26077_26107[(2)] = null);

(statearr_26077_26107[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (5))){
var inst_26045 = (state_26061[(2)]);
var state_26061__$1 = (function (){var statearr_26078 = state_26061;
(statearr_26078[(11)] = inst_26045);

return statearr_26078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26061__$1,(12),dchan);
} else {
if((state_val_26062 === (14))){
var inst_26047 = (state_26061[(8)]);
var inst_26052 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26047);
var state_26061__$1 = state_26061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26061__$1,(16),out,inst_26052);
} else {
if((state_val_26062 === (16))){
var inst_26054 = (state_26061[(2)]);
var state_26061__$1 = (function (){var statearr_26079 = state_26061;
(statearr_26079[(12)] = inst_26054);

return statearr_26079;
})();
var statearr_26080_26108 = state_26061__$1;
(statearr_26080_26108[(2)] = null);

(statearr_26080_26108[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (10))){
var inst_26029 = (state_26061[(2)]);
var inst_26030 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26061__$1 = (function (){var statearr_26081 = state_26061;
(statearr_26081[(13)] = inst_26029);

return statearr_26081;
})();
var statearr_26082_26109 = state_26061__$1;
(statearr_26082_26109[(2)] = inst_26030);


cljs.core.async.impl.ioc_helpers.process_exception(state_26061__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26062 === (8))){
var inst_26043 = (state_26061[(2)]);
var state_26061__$1 = state_26061;
var statearr_26083_26110 = state_26061__$1;
(statearr_26083_26110[(2)] = inst_26043);

(statearr_26083_26110[(1)] = (5));


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
});})(c__23983__auto___26095,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23857__auto__,c__23983__auto___26095,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_26087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26087[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_26087[(1)] = (1));

return statearr_26087;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_26061){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_26061);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e26088){if((e26088 instanceof Object)){
var ex__23861__auto__ = e26088;
var statearr_26089_26111 = state_26061;
(statearr_26089_26111[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26061);

return cljs.core.cst$kw$recur;
} else {
throw e26088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26112 = state_26061;
state_26061 = G__26112;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_26061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_26061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___26095,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23985__auto__ = (function (){var statearr_26090 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_26090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___26095);

return statearr_26090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___26095,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26114 = [];
var len__8739__auto___26172 = arguments.length;
var i__8740__auto___26173 = (0);
while(true){
if((i__8740__auto___26173 < len__8739__auto___26172)){
args26114.push((arguments[i__8740__auto___26173]));

var G__26174 = (i__8740__auto___26173 + (1));
i__8740__auto___26173 = G__26174;
continue;
} else {
}
break;
}

var G__26116 = args26114.length;
switch (G__26116) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26114.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23983__auto___26176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___26176,out){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___26176,out){
return (function (state_26148){
var state_val_26149 = (state_26148[(1)]);
if((state_val_26149 === (7))){
var inst_26127 = (state_26148[(7)]);
var inst_26128 = (state_26148[(8)]);
var inst_26127__$1 = (state_26148[(2)]);
var inst_26128__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26127__$1,(0),null);
var inst_26129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26127__$1,(1),null);
var inst_26130 = (inst_26128__$1 == null);
var state_26148__$1 = (function (){var statearr_26150 = state_26148;
(statearr_26150[(9)] = inst_26129);

(statearr_26150[(7)] = inst_26127__$1);

(statearr_26150[(8)] = inst_26128__$1);

return statearr_26150;
})();
if(cljs.core.truth_(inst_26130)){
var statearr_26151_26177 = state_26148__$1;
(statearr_26151_26177[(1)] = (8));

} else {
var statearr_26152_26178 = state_26148__$1;
(statearr_26152_26178[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26149 === (1))){
var inst_26117 = cljs.core.vec(chs);
var inst_26118 = inst_26117;
var state_26148__$1 = (function (){var statearr_26153 = state_26148;
(statearr_26153[(10)] = inst_26118);

return statearr_26153;
})();
var statearr_26154_26179 = state_26148__$1;
(statearr_26154_26179[(2)] = null);

(statearr_26154_26179[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26149 === (4))){
var inst_26118 = (state_26148[(10)]);
var state_26148__$1 = state_26148;
return cljs.core.async.ioc_alts_BANG_(state_26148__$1,(7),inst_26118);
} else {
if((state_val_26149 === (6))){
var inst_26144 = (state_26148[(2)]);
var state_26148__$1 = state_26148;
var statearr_26155_26180 = state_26148__$1;
(statearr_26155_26180[(2)] = inst_26144);

(statearr_26155_26180[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26149 === (3))){
var inst_26146 = (state_26148[(2)]);
var state_26148__$1 = state_26148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26148__$1,inst_26146);
} else {
if((state_val_26149 === (2))){
var inst_26118 = (state_26148[(10)]);
var inst_26120 = cljs.core.count(inst_26118);
var inst_26121 = (inst_26120 > (0));
var state_26148__$1 = state_26148;
if(cljs.core.truth_(inst_26121)){
var statearr_26157_26181 = state_26148__$1;
(statearr_26157_26181[(1)] = (4));

} else {
var statearr_26158_26182 = state_26148__$1;
(statearr_26158_26182[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26149 === (11))){
var inst_26118 = (state_26148[(10)]);
var inst_26137 = (state_26148[(2)]);
var tmp26156 = inst_26118;
var inst_26118__$1 = tmp26156;
var state_26148__$1 = (function (){var statearr_26159 = state_26148;
(statearr_26159[(10)] = inst_26118__$1);

(statearr_26159[(11)] = inst_26137);

return statearr_26159;
})();
var statearr_26160_26183 = state_26148__$1;
(statearr_26160_26183[(2)] = null);

(statearr_26160_26183[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26149 === (9))){
var inst_26128 = (state_26148[(8)]);
var state_26148__$1 = state_26148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26148__$1,(11),out,inst_26128);
} else {
if((state_val_26149 === (5))){
var inst_26142 = cljs.core.async.close_BANG_(out);
var state_26148__$1 = state_26148;
var statearr_26161_26184 = state_26148__$1;
(statearr_26161_26184[(2)] = inst_26142);

(statearr_26161_26184[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26149 === (10))){
var inst_26140 = (state_26148[(2)]);
var state_26148__$1 = state_26148;
var statearr_26162_26185 = state_26148__$1;
(statearr_26162_26185[(2)] = inst_26140);

(statearr_26162_26185[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26149 === (8))){
var inst_26129 = (state_26148[(9)]);
var inst_26118 = (state_26148[(10)]);
var inst_26127 = (state_26148[(7)]);
var inst_26128 = (state_26148[(8)]);
var inst_26132 = (function (){var cs = inst_26118;
var vec__26123 = inst_26127;
var v = inst_26128;
var c = inst_26129;
return ((function (cs,vec__26123,v,c,inst_26129,inst_26118,inst_26127,inst_26128,state_val_26149,c__23983__auto___26176,out){
return (function (p1__26113_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26113_SHARP_);
});
;})(cs,vec__26123,v,c,inst_26129,inst_26118,inst_26127,inst_26128,state_val_26149,c__23983__auto___26176,out))
})();
var inst_26133 = cljs.core.filterv(inst_26132,inst_26118);
var inst_26118__$1 = inst_26133;
var state_26148__$1 = (function (){var statearr_26163 = state_26148;
(statearr_26163[(10)] = inst_26118__$1);

return statearr_26163;
})();
var statearr_26164_26186 = state_26148__$1;
(statearr_26164_26186[(2)] = null);

(statearr_26164_26186[(1)] = (2));


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
});})(c__23983__auto___26176,out))
;
return ((function (switch__23857__auto__,c__23983__auto___26176,out){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_26168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26168[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_26168[(1)] = (1));

return statearr_26168;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_26148){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_26148);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e26169){if((e26169 instanceof Object)){
var ex__23861__auto__ = e26169;
var statearr_26170_26187 = state_26148;
(statearr_26170_26187[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26148);

return cljs.core.cst$kw$recur;
} else {
throw e26169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26188 = state_26148;
state_26148 = G__26188;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_26148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_26148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___26176,out))
})();
var state__23985__auto__ = (function (){var statearr_26171 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_26171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___26176);

return statearr_26171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___26176,out))
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
var args26189 = [];
var len__8739__auto___26238 = arguments.length;
var i__8740__auto___26239 = (0);
while(true){
if((i__8740__auto___26239 < len__8739__auto___26238)){
args26189.push((arguments[i__8740__auto___26239]));

var G__26240 = (i__8740__auto___26239 + (1));
i__8740__auto___26239 = G__26240;
continue;
} else {
}
break;
}

var G__26191 = args26189.length;
switch (G__26191) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26189.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23983__auto___26242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___26242,out){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___26242,out){
return (function (state_26215){
var state_val_26216 = (state_26215[(1)]);
if((state_val_26216 === (7))){
var inst_26197 = (state_26215[(7)]);
var inst_26197__$1 = (state_26215[(2)]);
var inst_26198 = (inst_26197__$1 == null);
var inst_26199 = cljs.core.not(inst_26198);
var state_26215__$1 = (function (){var statearr_26217 = state_26215;
(statearr_26217[(7)] = inst_26197__$1);

return statearr_26217;
})();
if(inst_26199){
var statearr_26218_26243 = state_26215__$1;
(statearr_26218_26243[(1)] = (8));

} else {
var statearr_26219_26244 = state_26215__$1;
(statearr_26219_26244[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26216 === (1))){
var inst_26192 = (0);
var state_26215__$1 = (function (){var statearr_26220 = state_26215;
(statearr_26220[(8)] = inst_26192);

return statearr_26220;
})();
var statearr_26221_26245 = state_26215__$1;
(statearr_26221_26245[(2)] = null);

(statearr_26221_26245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26216 === (4))){
var state_26215__$1 = state_26215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26215__$1,(7),ch);
} else {
if((state_val_26216 === (6))){
var inst_26210 = (state_26215[(2)]);
var state_26215__$1 = state_26215;
var statearr_26222_26246 = state_26215__$1;
(statearr_26222_26246[(2)] = inst_26210);

(statearr_26222_26246[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26216 === (3))){
var inst_26212 = (state_26215[(2)]);
var inst_26213 = cljs.core.async.close_BANG_(out);
var state_26215__$1 = (function (){var statearr_26223 = state_26215;
(statearr_26223[(9)] = inst_26212);

return statearr_26223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26215__$1,inst_26213);
} else {
if((state_val_26216 === (2))){
var inst_26192 = (state_26215[(8)]);
var inst_26194 = (inst_26192 < n);
var state_26215__$1 = state_26215;
if(cljs.core.truth_(inst_26194)){
var statearr_26224_26247 = state_26215__$1;
(statearr_26224_26247[(1)] = (4));

} else {
var statearr_26225_26248 = state_26215__$1;
(statearr_26225_26248[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26216 === (11))){
var inst_26192 = (state_26215[(8)]);
var inst_26202 = (state_26215[(2)]);
var inst_26203 = (inst_26192 + (1));
var inst_26192__$1 = inst_26203;
var state_26215__$1 = (function (){var statearr_26226 = state_26215;
(statearr_26226[(10)] = inst_26202);

(statearr_26226[(8)] = inst_26192__$1);

return statearr_26226;
})();
var statearr_26227_26249 = state_26215__$1;
(statearr_26227_26249[(2)] = null);

(statearr_26227_26249[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26216 === (9))){
var state_26215__$1 = state_26215;
var statearr_26228_26250 = state_26215__$1;
(statearr_26228_26250[(2)] = null);

(statearr_26228_26250[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26216 === (5))){
var state_26215__$1 = state_26215;
var statearr_26229_26251 = state_26215__$1;
(statearr_26229_26251[(2)] = null);

(statearr_26229_26251[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26216 === (10))){
var inst_26207 = (state_26215[(2)]);
var state_26215__$1 = state_26215;
var statearr_26230_26252 = state_26215__$1;
(statearr_26230_26252[(2)] = inst_26207);

(statearr_26230_26252[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26216 === (8))){
var inst_26197 = (state_26215[(7)]);
var state_26215__$1 = state_26215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26215__$1,(11),out,inst_26197);
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
});})(c__23983__auto___26242,out))
;
return ((function (switch__23857__auto__,c__23983__auto___26242,out){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_26234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26234[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_26234[(1)] = (1));

return statearr_26234;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_26215){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_26215);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e26235){if((e26235 instanceof Object)){
var ex__23861__auto__ = e26235;
var statearr_26236_26253 = state_26215;
(statearr_26236_26253[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26215);

return cljs.core.cst$kw$recur;
} else {
throw e26235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26254 = state_26215;
state_26215 = G__26254;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_26215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_26215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___26242,out))
})();
var state__23985__auto__ = (function (){var statearr_26237 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_26237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___26242);

return statearr_26237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___26242,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26264 = (function (f,ch,meta26265){
this.f = f;
this.ch = ch;
this.meta26265 = meta26265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26266,meta26265__$1){
var self__ = this;
var _26266__$1 = this;
return (new cljs.core.async.t_cljs$core$async26264(self__.f,self__.ch,meta26265__$1));
});


cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26266){
var self__ = this;
var _26266__$1 = this;
return self__.meta26265;
});


cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26267 = (function (f,ch,meta26265,_,fn1,meta26268){
this.f = f;
this.ch = ch;
this.meta26265 = meta26265;
this._ = _;
this.fn1 = fn1;
this.meta26268 = meta26268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26269,meta26268__$1){
var self__ = this;
var _26269__$1 = this;
return (new cljs.core.async.t_cljs$core$async26267(self__.f,self__.ch,self__.meta26265,self__._,self__.fn1,meta26268__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async26267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26269){
var self__ = this;
var _26269__$1 = this;
return self__.meta26268;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26267.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async26267.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26255_SHARP_){
var G__26270 = (((p1__26255_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26255_SHARP_) : self__.f.call(null,p1__26255_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26270) : f1.call(null,G__26270));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26267.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26265,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26264], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26268], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26267";

cljs.core.async.t_cljs$core$async26267.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26267");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26267 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26267(f__$1,ch__$1,meta26265__$1,___$2,fn1__$1,meta26268){
return (new cljs.core.async.t_cljs$core$async26267(f__$1,ch__$1,meta26265__$1,___$2,fn1__$1,meta26268));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26267(self__.f,self__.ch,self__.meta26265,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7511__auto__ = ret;
if(cljs.core.truth_(and__7511__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7511__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26271 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26271) : self__.f.call(null,G__26271));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26265], null);
});

cljs.core.async.t_cljs$core$async26264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26264";

cljs.core.async.t_cljs$core$async26264.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26264");
});

cljs.core.async.__GT_t_cljs$core$async26264 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26264(f__$1,ch__$1,meta26265){
return (new cljs.core.async.t_cljs$core$async26264(f__$1,ch__$1,meta26265));
});

}

return (new cljs.core.async.t_cljs$core$async26264(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26275 = (function (f,ch,meta26276){
this.f = f;
this.ch = ch;
this.meta26276 = meta26276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26277,meta26276__$1){
var self__ = this;
var _26277__$1 = this;
return (new cljs.core.async.t_cljs$core$async26275(self__.f,self__.ch,meta26276__$1));
});


cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26277){
var self__ = this;
var _26277__$1 = this;
return self__.meta26276;
});


cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26276], null);
});

cljs.core.async.t_cljs$core$async26275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26275";

cljs.core.async.t_cljs$core$async26275.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26275");
});

cljs.core.async.__GT_t_cljs$core$async26275 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26275(f__$1,ch__$1,meta26276){
return (new cljs.core.async.t_cljs$core$async26275(f__$1,ch__$1,meta26276));
});

}

return (new cljs.core.async.t_cljs$core$async26275(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26281 = (function (p,ch,meta26282){
this.p = p;
this.ch = ch;
this.meta26282 = meta26282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26283,meta26282__$1){
var self__ = this;
var _26283__$1 = this;
return (new cljs.core.async.t_cljs$core$async26281(self__.p,self__.ch,meta26282__$1));
});


cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26283){
var self__ = this;
var _26283__$1 = this;
return self__.meta26282;
});


cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26282], null);
});

cljs.core.async.t_cljs$core$async26281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26281";

cljs.core.async.t_cljs$core$async26281.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26281");
});

cljs.core.async.__GT_t_cljs$core$async26281 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26281(p__$1,ch__$1,meta26282){
return (new cljs.core.async.t_cljs$core$async26281(p__$1,ch__$1,meta26282));
});

}

return (new cljs.core.async.t_cljs$core$async26281(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26284 = [];
var len__8739__auto___26328 = arguments.length;
var i__8740__auto___26329 = (0);
while(true){
if((i__8740__auto___26329 < len__8739__auto___26328)){
args26284.push((arguments[i__8740__auto___26329]));

var G__26330 = (i__8740__auto___26329 + (1));
i__8740__auto___26329 = G__26330;
continue;
} else {
}
break;
}

var G__26286 = args26284.length;
switch (G__26286) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26284.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23983__auto___26332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___26332,out){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___26332,out){
return (function (state_26307){
var state_val_26308 = (state_26307[(1)]);
if((state_val_26308 === (7))){
var inst_26303 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
var statearr_26309_26333 = state_26307__$1;
(statearr_26309_26333[(2)] = inst_26303);

(statearr_26309_26333[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26308 === (1))){
var state_26307__$1 = state_26307;
var statearr_26310_26334 = state_26307__$1;
(statearr_26310_26334[(2)] = null);

(statearr_26310_26334[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26308 === (4))){
var inst_26289 = (state_26307[(7)]);
var inst_26289__$1 = (state_26307[(2)]);
var inst_26290 = (inst_26289__$1 == null);
var state_26307__$1 = (function (){var statearr_26311 = state_26307;
(statearr_26311[(7)] = inst_26289__$1);

return statearr_26311;
})();
if(cljs.core.truth_(inst_26290)){
var statearr_26312_26335 = state_26307__$1;
(statearr_26312_26335[(1)] = (5));

} else {
var statearr_26313_26336 = state_26307__$1;
(statearr_26313_26336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26308 === (6))){
var inst_26289 = (state_26307[(7)]);
var inst_26294 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26289) : p.call(null,inst_26289));
var state_26307__$1 = state_26307;
if(cljs.core.truth_(inst_26294)){
var statearr_26314_26337 = state_26307__$1;
(statearr_26314_26337[(1)] = (8));

} else {
var statearr_26315_26338 = state_26307__$1;
(statearr_26315_26338[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26308 === (3))){
var inst_26305 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26307__$1,inst_26305);
} else {
if((state_val_26308 === (2))){
var state_26307__$1 = state_26307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26307__$1,(4),ch);
} else {
if((state_val_26308 === (11))){
var inst_26297 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
var statearr_26316_26339 = state_26307__$1;
(statearr_26316_26339[(2)] = inst_26297);

(statearr_26316_26339[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26308 === (9))){
var state_26307__$1 = state_26307;
var statearr_26317_26340 = state_26307__$1;
(statearr_26317_26340[(2)] = null);

(statearr_26317_26340[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26308 === (5))){
var inst_26292 = cljs.core.async.close_BANG_(out);
var state_26307__$1 = state_26307;
var statearr_26318_26341 = state_26307__$1;
(statearr_26318_26341[(2)] = inst_26292);

(statearr_26318_26341[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26308 === (10))){
var inst_26300 = (state_26307[(2)]);
var state_26307__$1 = (function (){var statearr_26319 = state_26307;
(statearr_26319[(8)] = inst_26300);

return statearr_26319;
})();
var statearr_26320_26342 = state_26307__$1;
(statearr_26320_26342[(2)] = null);

(statearr_26320_26342[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26308 === (8))){
var inst_26289 = (state_26307[(7)]);
var state_26307__$1 = state_26307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26307__$1,(11),out,inst_26289);
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
});})(c__23983__auto___26332,out))
;
return ((function (switch__23857__auto__,c__23983__auto___26332,out){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_26324 = [null,null,null,null,null,null,null,null,null];
(statearr_26324[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_26324[(1)] = (1));

return statearr_26324;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_26307){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_26307);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e26325){if((e26325 instanceof Object)){
var ex__23861__auto__ = e26325;
var statearr_26326_26343 = state_26307;
(statearr_26326_26343[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26307);

return cljs.core.cst$kw$recur;
} else {
throw e26325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26344 = state_26307;
state_26307 = G__26344;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_26307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_26307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___26332,out))
})();
var state__23985__auto__ = (function (){var statearr_26327 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_26327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___26332);

return statearr_26327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___26332,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26345 = [];
var len__8739__auto___26348 = arguments.length;
var i__8740__auto___26349 = (0);
while(true){
if((i__8740__auto___26349 < len__8739__auto___26348)){
args26345.push((arguments[i__8740__auto___26349]));

var G__26350 = (i__8740__auto___26349 + (1));
i__8740__auto___26349 = G__26350;
continue;
} else {
}
break;
}

var G__26347 = args26345.length;
switch (G__26347) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26345.length)].join('')));

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
var c__23983__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto__){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto__){
return (function (state_26517){
var state_val_26518 = (state_26517[(1)]);
if((state_val_26518 === (7))){
var inst_26513 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26519_26560 = state_26517__$1;
(statearr_26519_26560[(2)] = inst_26513);

(statearr_26519_26560[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (20))){
var inst_26483 = (state_26517[(7)]);
var inst_26494 = (state_26517[(2)]);
var inst_26495 = cljs.core.next(inst_26483);
var inst_26469 = inst_26495;
var inst_26470 = null;
var inst_26471 = (0);
var inst_26472 = (0);
var state_26517__$1 = (function (){var statearr_26520 = state_26517;
(statearr_26520[(8)] = inst_26469);

(statearr_26520[(9)] = inst_26472);

(statearr_26520[(10)] = inst_26470);

(statearr_26520[(11)] = inst_26471);

(statearr_26520[(12)] = inst_26494);

return statearr_26520;
})();
var statearr_26521_26561 = state_26517__$1;
(statearr_26521_26561[(2)] = null);

(statearr_26521_26561[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (1))){
var state_26517__$1 = state_26517;
var statearr_26522_26562 = state_26517__$1;
(statearr_26522_26562[(2)] = null);

(statearr_26522_26562[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (4))){
var inst_26458 = (state_26517[(13)]);
var inst_26458__$1 = (state_26517[(2)]);
var inst_26459 = (inst_26458__$1 == null);
var state_26517__$1 = (function (){var statearr_26523 = state_26517;
(statearr_26523[(13)] = inst_26458__$1);

return statearr_26523;
})();
if(cljs.core.truth_(inst_26459)){
var statearr_26524_26563 = state_26517__$1;
(statearr_26524_26563[(1)] = (5));

} else {
var statearr_26525_26564 = state_26517__$1;
(statearr_26525_26564[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (15))){
var state_26517__$1 = state_26517;
var statearr_26529_26565 = state_26517__$1;
(statearr_26529_26565[(2)] = null);

(statearr_26529_26565[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (21))){
var state_26517__$1 = state_26517;
var statearr_26530_26566 = state_26517__$1;
(statearr_26530_26566[(2)] = null);

(statearr_26530_26566[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (13))){
var inst_26469 = (state_26517[(8)]);
var inst_26472 = (state_26517[(9)]);
var inst_26470 = (state_26517[(10)]);
var inst_26471 = (state_26517[(11)]);
var inst_26479 = (state_26517[(2)]);
var inst_26480 = (inst_26472 + (1));
var tmp26526 = inst_26469;
var tmp26527 = inst_26470;
var tmp26528 = inst_26471;
var inst_26469__$1 = tmp26526;
var inst_26470__$1 = tmp26527;
var inst_26471__$1 = tmp26528;
var inst_26472__$1 = inst_26480;
var state_26517__$1 = (function (){var statearr_26531 = state_26517;
(statearr_26531[(8)] = inst_26469__$1);

(statearr_26531[(14)] = inst_26479);

(statearr_26531[(9)] = inst_26472__$1);

(statearr_26531[(10)] = inst_26470__$1);

(statearr_26531[(11)] = inst_26471__$1);

return statearr_26531;
})();
var statearr_26532_26567 = state_26517__$1;
(statearr_26532_26567[(2)] = null);

(statearr_26532_26567[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (22))){
var state_26517__$1 = state_26517;
var statearr_26533_26568 = state_26517__$1;
(statearr_26533_26568[(2)] = null);

(statearr_26533_26568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (6))){
var inst_26458 = (state_26517[(13)]);
var inst_26467 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26458) : f.call(null,inst_26458));
var inst_26468 = cljs.core.seq(inst_26467);
var inst_26469 = inst_26468;
var inst_26470 = null;
var inst_26471 = (0);
var inst_26472 = (0);
var state_26517__$1 = (function (){var statearr_26534 = state_26517;
(statearr_26534[(8)] = inst_26469);

(statearr_26534[(9)] = inst_26472);

(statearr_26534[(10)] = inst_26470);

(statearr_26534[(11)] = inst_26471);

return statearr_26534;
})();
var statearr_26535_26569 = state_26517__$1;
(statearr_26535_26569[(2)] = null);

(statearr_26535_26569[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (17))){
var inst_26483 = (state_26517[(7)]);
var inst_26487 = cljs.core.chunk_first(inst_26483);
var inst_26488 = cljs.core.chunk_rest(inst_26483);
var inst_26489 = cljs.core.count(inst_26487);
var inst_26469 = inst_26488;
var inst_26470 = inst_26487;
var inst_26471 = inst_26489;
var inst_26472 = (0);
var state_26517__$1 = (function (){var statearr_26536 = state_26517;
(statearr_26536[(8)] = inst_26469);

(statearr_26536[(9)] = inst_26472);

(statearr_26536[(10)] = inst_26470);

(statearr_26536[(11)] = inst_26471);

return statearr_26536;
})();
var statearr_26537_26570 = state_26517__$1;
(statearr_26537_26570[(2)] = null);

(statearr_26537_26570[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (3))){
var inst_26515 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26517__$1,inst_26515);
} else {
if((state_val_26518 === (12))){
var inst_26503 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26538_26571 = state_26517__$1;
(statearr_26538_26571[(2)] = inst_26503);

(statearr_26538_26571[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (2))){
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26517__$1,(4),in$);
} else {
if((state_val_26518 === (23))){
var inst_26511 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26539_26572 = state_26517__$1;
(statearr_26539_26572[(2)] = inst_26511);

(statearr_26539_26572[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (19))){
var inst_26498 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26540_26573 = state_26517__$1;
(statearr_26540_26573[(2)] = inst_26498);

(statearr_26540_26573[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (11))){
var inst_26469 = (state_26517[(8)]);
var inst_26483 = (state_26517[(7)]);
var inst_26483__$1 = cljs.core.seq(inst_26469);
var state_26517__$1 = (function (){var statearr_26541 = state_26517;
(statearr_26541[(7)] = inst_26483__$1);

return statearr_26541;
})();
if(inst_26483__$1){
var statearr_26542_26574 = state_26517__$1;
(statearr_26542_26574[(1)] = (14));

} else {
var statearr_26543_26575 = state_26517__$1;
(statearr_26543_26575[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (9))){
var inst_26505 = (state_26517[(2)]);
var inst_26506 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26517__$1 = (function (){var statearr_26544 = state_26517;
(statearr_26544[(15)] = inst_26505);

return statearr_26544;
})();
if(cljs.core.truth_(inst_26506)){
var statearr_26545_26576 = state_26517__$1;
(statearr_26545_26576[(1)] = (21));

} else {
var statearr_26546_26577 = state_26517__$1;
(statearr_26546_26577[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (5))){
var inst_26461 = cljs.core.async.close_BANG_(out);
var state_26517__$1 = state_26517;
var statearr_26547_26578 = state_26517__$1;
(statearr_26547_26578[(2)] = inst_26461);

(statearr_26547_26578[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (14))){
var inst_26483 = (state_26517[(7)]);
var inst_26485 = cljs.core.chunked_seq_QMARK_(inst_26483);
var state_26517__$1 = state_26517;
if(inst_26485){
var statearr_26548_26579 = state_26517__$1;
(statearr_26548_26579[(1)] = (17));

} else {
var statearr_26549_26580 = state_26517__$1;
(statearr_26549_26580[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (16))){
var inst_26501 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26550_26581 = state_26517__$1;
(statearr_26550_26581[(2)] = inst_26501);

(statearr_26550_26581[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26518 === (10))){
var inst_26472 = (state_26517[(9)]);
var inst_26470 = (state_26517[(10)]);
var inst_26477 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26470,inst_26472);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26517__$1,(13),out,inst_26477);
} else {
if((state_val_26518 === (18))){
var inst_26483 = (state_26517[(7)]);
var inst_26492 = cljs.core.first(inst_26483);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26517__$1,(20),out,inst_26492);
} else {
if((state_val_26518 === (8))){
var inst_26472 = (state_26517[(9)]);
var inst_26471 = (state_26517[(11)]);
var inst_26474 = (inst_26472 < inst_26471);
var inst_26475 = inst_26474;
var state_26517__$1 = state_26517;
if(cljs.core.truth_(inst_26475)){
var statearr_26551_26582 = state_26517__$1;
(statearr_26551_26582[(1)] = (10));

} else {
var statearr_26552_26583 = state_26517__$1;
(statearr_26552_26583[(1)] = (11));

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
});})(c__23983__auto__))
;
return ((function (switch__23857__auto__,c__23983__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23858__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23858__auto____0 = (function (){
var statearr_26556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26556[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23858__auto__);

(statearr_26556[(1)] = (1));

return statearr_26556;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23858__auto____1 = (function (state_26517){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_26517);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e26557){if((e26557 instanceof Object)){
var ex__23861__auto__ = e26557;
var statearr_26558_26584 = state_26517;
(statearr_26558_26584[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26517);

return cljs.core.cst$kw$recur;
} else {
throw e26557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26585 = state_26517;
state_26517 = G__26585;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23858__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23858__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23858__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23858__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto__))
})();
var state__23985__auto__ = (function (){var statearr_26559 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_26559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto__);

return statearr_26559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto__))
);

return c__23983__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26586 = [];
var len__8739__auto___26589 = arguments.length;
var i__8740__auto___26590 = (0);
while(true){
if((i__8740__auto___26590 < len__8739__auto___26589)){
args26586.push((arguments[i__8740__auto___26590]));

var G__26591 = (i__8740__auto___26590 + (1));
i__8740__auto___26590 = G__26591;
continue;
} else {
}
break;
}

var G__26588 = args26586.length;
switch (G__26588) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26586.length)].join('')));

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
var args26593 = [];
var len__8739__auto___26596 = arguments.length;
var i__8740__auto___26597 = (0);
while(true){
if((i__8740__auto___26597 < len__8739__auto___26596)){
args26593.push((arguments[i__8740__auto___26597]));

var G__26598 = (i__8740__auto___26597 + (1));
i__8740__auto___26597 = G__26598;
continue;
} else {
}
break;
}

var G__26595 = args26593.length;
switch (G__26595) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26593.length)].join('')));

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
var args26600 = [];
var len__8739__auto___26651 = arguments.length;
var i__8740__auto___26652 = (0);
while(true){
if((i__8740__auto___26652 < len__8739__auto___26651)){
args26600.push((arguments[i__8740__auto___26652]));

var G__26653 = (i__8740__auto___26652 + (1));
i__8740__auto___26652 = G__26653;
continue;
} else {
}
break;
}

var G__26602 = args26600.length;
switch (G__26602) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26600.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23983__auto___26655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___26655,out){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___26655,out){
return (function (state_26626){
var state_val_26627 = (state_26626[(1)]);
if((state_val_26627 === (7))){
var inst_26621 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26628_26656 = state_26626__$1;
(statearr_26628_26656[(2)] = inst_26621);

(statearr_26628_26656[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26627 === (1))){
var inst_26603 = null;
var state_26626__$1 = (function (){var statearr_26629 = state_26626;
(statearr_26629[(7)] = inst_26603);

return statearr_26629;
})();
var statearr_26630_26657 = state_26626__$1;
(statearr_26630_26657[(2)] = null);

(statearr_26630_26657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26627 === (4))){
var inst_26606 = (state_26626[(8)]);
var inst_26606__$1 = (state_26626[(2)]);
var inst_26607 = (inst_26606__$1 == null);
var inst_26608 = cljs.core.not(inst_26607);
var state_26626__$1 = (function (){var statearr_26631 = state_26626;
(statearr_26631[(8)] = inst_26606__$1);

return statearr_26631;
})();
if(inst_26608){
var statearr_26632_26658 = state_26626__$1;
(statearr_26632_26658[(1)] = (5));

} else {
var statearr_26633_26659 = state_26626__$1;
(statearr_26633_26659[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26627 === (6))){
var state_26626__$1 = state_26626;
var statearr_26634_26660 = state_26626__$1;
(statearr_26634_26660[(2)] = null);

(statearr_26634_26660[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26627 === (3))){
var inst_26623 = (state_26626[(2)]);
var inst_26624 = cljs.core.async.close_BANG_(out);
var state_26626__$1 = (function (){var statearr_26635 = state_26626;
(statearr_26635[(9)] = inst_26623);

return statearr_26635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26626__$1,inst_26624);
} else {
if((state_val_26627 === (2))){
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26626__$1,(4),ch);
} else {
if((state_val_26627 === (11))){
var inst_26606 = (state_26626[(8)]);
var inst_26615 = (state_26626[(2)]);
var inst_26603 = inst_26606;
var state_26626__$1 = (function (){var statearr_26636 = state_26626;
(statearr_26636[(7)] = inst_26603);

(statearr_26636[(10)] = inst_26615);

return statearr_26636;
})();
var statearr_26637_26661 = state_26626__$1;
(statearr_26637_26661[(2)] = null);

(statearr_26637_26661[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26627 === (9))){
var inst_26606 = (state_26626[(8)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26626__$1,(11),out,inst_26606);
} else {
if((state_val_26627 === (5))){
var inst_26606 = (state_26626[(8)]);
var inst_26603 = (state_26626[(7)]);
var inst_26610 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26606,inst_26603);
var state_26626__$1 = state_26626;
if(inst_26610){
var statearr_26639_26662 = state_26626__$1;
(statearr_26639_26662[(1)] = (8));

} else {
var statearr_26640_26663 = state_26626__$1;
(statearr_26640_26663[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26627 === (10))){
var inst_26618 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26641_26664 = state_26626__$1;
(statearr_26641_26664[(2)] = inst_26618);

(statearr_26641_26664[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26627 === (8))){
var inst_26603 = (state_26626[(7)]);
var tmp26638 = inst_26603;
var inst_26603__$1 = tmp26638;
var state_26626__$1 = (function (){var statearr_26642 = state_26626;
(statearr_26642[(7)] = inst_26603__$1);

return statearr_26642;
})();
var statearr_26643_26665 = state_26626__$1;
(statearr_26643_26665[(2)] = null);

(statearr_26643_26665[(1)] = (2));


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
});})(c__23983__auto___26655,out))
;
return ((function (switch__23857__auto__,c__23983__auto___26655,out){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_26647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26647[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_26647[(1)] = (1));

return statearr_26647;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_26626){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_26626);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e26648){if((e26648 instanceof Object)){
var ex__23861__auto__ = e26648;
var statearr_26649_26666 = state_26626;
(statearr_26649_26666[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26626);

return cljs.core.cst$kw$recur;
} else {
throw e26648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26667 = state_26626;
state_26626 = G__26667;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_26626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_26626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___26655,out))
})();
var state__23985__auto__ = (function (){var statearr_26650 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_26650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___26655);

return statearr_26650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___26655,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26668 = [];
var len__8739__auto___26738 = arguments.length;
var i__8740__auto___26739 = (0);
while(true){
if((i__8740__auto___26739 < len__8739__auto___26738)){
args26668.push((arguments[i__8740__auto___26739]));

var G__26740 = (i__8740__auto___26739 + (1));
i__8740__auto___26739 = G__26740;
continue;
} else {
}
break;
}

var G__26670 = args26668.length;
switch (G__26670) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26668.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23983__auto___26742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___26742,out){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___26742,out){
return (function (state_26708){
var state_val_26709 = (state_26708[(1)]);
if((state_val_26709 === (7))){
var inst_26704 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26710_26743 = state_26708__$1;
(statearr_26710_26743[(2)] = inst_26704);

(statearr_26710_26743[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (1))){
var inst_26671 = (new Array(n));
var inst_26672 = inst_26671;
var inst_26673 = (0);
var state_26708__$1 = (function (){var statearr_26711 = state_26708;
(statearr_26711[(7)] = inst_26673);

(statearr_26711[(8)] = inst_26672);

return statearr_26711;
})();
var statearr_26712_26744 = state_26708__$1;
(statearr_26712_26744[(2)] = null);

(statearr_26712_26744[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (4))){
var inst_26676 = (state_26708[(9)]);
var inst_26676__$1 = (state_26708[(2)]);
var inst_26677 = (inst_26676__$1 == null);
var inst_26678 = cljs.core.not(inst_26677);
var state_26708__$1 = (function (){var statearr_26713 = state_26708;
(statearr_26713[(9)] = inst_26676__$1);

return statearr_26713;
})();
if(inst_26678){
var statearr_26714_26745 = state_26708__$1;
(statearr_26714_26745[(1)] = (5));

} else {
var statearr_26715_26746 = state_26708__$1;
(statearr_26715_26746[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (15))){
var inst_26698 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26716_26747 = state_26708__$1;
(statearr_26716_26747[(2)] = inst_26698);

(statearr_26716_26747[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (13))){
var state_26708__$1 = state_26708;
var statearr_26717_26748 = state_26708__$1;
(statearr_26717_26748[(2)] = null);

(statearr_26717_26748[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (6))){
var inst_26673 = (state_26708[(7)]);
var inst_26694 = (inst_26673 > (0));
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26694)){
var statearr_26718_26749 = state_26708__$1;
(statearr_26718_26749[(1)] = (12));

} else {
var statearr_26719_26750 = state_26708__$1;
(statearr_26719_26750[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (3))){
var inst_26706 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26708__$1,inst_26706);
} else {
if((state_val_26709 === (12))){
var inst_26672 = (state_26708[(8)]);
var inst_26696 = cljs.core.vec(inst_26672);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26708__$1,(15),out,inst_26696);
} else {
if((state_val_26709 === (2))){
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26708__$1,(4),ch);
} else {
if((state_val_26709 === (11))){
var inst_26688 = (state_26708[(2)]);
var inst_26689 = (new Array(n));
var inst_26672 = inst_26689;
var inst_26673 = (0);
var state_26708__$1 = (function (){var statearr_26720 = state_26708;
(statearr_26720[(7)] = inst_26673);

(statearr_26720[(8)] = inst_26672);

(statearr_26720[(10)] = inst_26688);

return statearr_26720;
})();
var statearr_26721_26751 = state_26708__$1;
(statearr_26721_26751[(2)] = null);

(statearr_26721_26751[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (9))){
var inst_26672 = (state_26708[(8)]);
var inst_26686 = cljs.core.vec(inst_26672);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26708__$1,(11),out,inst_26686);
} else {
if((state_val_26709 === (5))){
var inst_26673 = (state_26708[(7)]);
var inst_26681 = (state_26708[(11)]);
var inst_26676 = (state_26708[(9)]);
var inst_26672 = (state_26708[(8)]);
var inst_26680 = (inst_26672[inst_26673] = inst_26676);
var inst_26681__$1 = (inst_26673 + (1));
var inst_26682 = (inst_26681__$1 < n);
var state_26708__$1 = (function (){var statearr_26722 = state_26708;
(statearr_26722[(11)] = inst_26681__$1);

(statearr_26722[(12)] = inst_26680);

return statearr_26722;
})();
if(cljs.core.truth_(inst_26682)){
var statearr_26723_26752 = state_26708__$1;
(statearr_26723_26752[(1)] = (8));

} else {
var statearr_26724_26753 = state_26708__$1;
(statearr_26724_26753[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (14))){
var inst_26701 = (state_26708[(2)]);
var inst_26702 = cljs.core.async.close_BANG_(out);
var state_26708__$1 = (function (){var statearr_26726 = state_26708;
(statearr_26726[(13)] = inst_26701);

return statearr_26726;
})();
var statearr_26727_26754 = state_26708__$1;
(statearr_26727_26754[(2)] = inst_26702);

(statearr_26727_26754[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (10))){
var inst_26692 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26728_26755 = state_26708__$1;
(statearr_26728_26755[(2)] = inst_26692);

(statearr_26728_26755[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26709 === (8))){
var inst_26681 = (state_26708[(11)]);
var inst_26672 = (state_26708[(8)]);
var tmp26725 = inst_26672;
var inst_26672__$1 = tmp26725;
var inst_26673 = inst_26681;
var state_26708__$1 = (function (){var statearr_26729 = state_26708;
(statearr_26729[(7)] = inst_26673);

(statearr_26729[(8)] = inst_26672__$1);

return statearr_26729;
})();
var statearr_26730_26756 = state_26708__$1;
(statearr_26730_26756[(2)] = null);

(statearr_26730_26756[(1)] = (2));


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
});})(c__23983__auto___26742,out))
;
return ((function (switch__23857__auto__,c__23983__auto___26742,out){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_26734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26734[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_26734[(1)] = (1));

return statearr_26734;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_26708){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_26708);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e26735){if((e26735 instanceof Object)){
var ex__23861__auto__ = e26735;
var statearr_26736_26757 = state_26708;
(statearr_26736_26757[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26708);

return cljs.core.cst$kw$recur;
} else {
throw e26735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26758 = state_26708;
state_26708 = G__26758;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_26708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_26708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___26742,out))
})();
var state__23985__auto__ = (function (){var statearr_26737 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_26737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___26742);

return statearr_26737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___26742,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26759 = [];
var len__8739__auto___26833 = arguments.length;
var i__8740__auto___26834 = (0);
while(true){
if((i__8740__auto___26834 < len__8739__auto___26833)){
args26759.push((arguments[i__8740__auto___26834]));

var G__26835 = (i__8740__auto___26834 + (1));
i__8740__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var G__26761 = args26759.length;
switch (G__26761) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26759.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23983__auto___26837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23983__auto___26837,out){
return (function (){
var f__23984__auto__ = (function (){var switch__23857__auto__ = ((function (c__23983__auto___26837,out){
return (function (state_26803){
var state_val_26804 = (state_26803[(1)]);
if((state_val_26804 === (7))){
var inst_26799 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26805_26838 = state_26803__$1;
(statearr_26805_26838[(2)] = inst_26799);

(statearr_26805_26838[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (1))){
var inst_26762 = [];
var inst_26763 = inst_26762;
var inst_26764 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26803__$1 = (function (){var statearr_26806 = state_26803;
(statearr_26806[(7)] = inst_26763);

(statearr_26806[(8)] = inst_26764);

return statearr_26806;
})();
var statearr_26807_26839 = state_26803__$1;
(statearr_26807_26839[(2)] = null);

(statearr_26807_26839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (4))){
var inst_26767 = (state_26803[(9)]);
var inst_26767__$1 = (state_26803[(2)]);
var inst_26768 = (inst_26767__$1 == null);
var inst_26769 = cljs.core.not(inst_26768);
var state_26803__$1 = (function (){var statearr_26808 = state_26803;
(statearr_26808[(9)] = inst_26767__$1);

return statearr_26808;
})();
if(inst_26769){
var statearr_26809_26840 = state_26803__$1;
(statearr_26809_26840[(1)] = (5));

} else {
var statearr_26810_26841 = state_26803__$1;
(statearr_26810_26841[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (15))){
var inst_26793 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26811_26842 = state_26803__$1;
(statearr_26811_26842[(2)] = inst_26793);

(statearr_26811_26842[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (13))){
var state_26803__$1 = state_26803;
var statearr_26812_26843 = state_26803__$1;
(statearr_26812_26843[(2)] = null);

(statearr_26812_26843[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (6))){
var inst_26763 = (state_26803[(7)]);
var inst_26788 = inst_26763.length;
var inst_26789 = (inst_26788 > (0));
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26789)){
var statearr_26813_26844 = state_26803__$1;
(statearr_26813_26844[(1)] = (12));

} else {
var statearr_26814_26845 = state_26803__$1;
(statearr_26814_26845[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (3))){
var inst_26801 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26803__$1,inst_26801);
} else {
if((state_val_26804 === (12))){
var inst_26763 = (state_26803[(7)]);
var inst_26791 = cljs.core.vec(inst_26763);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26803__$1,(15),out,inst_26791);
} else {
if((state_val_26804 === (2))){
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26803__$1,(4),ch);
} else {
if((state_val_26804 === (11))){
var inst_26767 = (state_26803[(9)]);
var inst_26771 = (state_26803[(10)]);
var inst_26781 = (state_26803[(2)]);
var inst_26782 = [];
var inst_26783 = inst_26782.push(inst_26767);
var inst_26763 = inst_26782;
var inst_26764 = inst_26771;
var state_26803__$1 = (function (){var statearr_26815 = state_26803;
(statearr_26815[(11)] = inst_26783);

(statearr_26815[(12)] = inst_26781);

(statearr_26815[(7)] = inst_26763);

(statearr_26815[(8)] = inst_26764);

return statearr_26815;
})();
var statearr_26816_26846 = state_26803__$1;
(statearr_26816_26846[(2)] = null);

(statearr_26816_26846[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (9))){
var inst_26763 = (state_26803[(7)]);
var inst_26779 = cljs.core.vec(inst_26763);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26803__$1,(11),out,inst_26779);
} else {
if((state_val_26804 === (5))){
var inst_26767 = (state_26803[(9)]);
var inst_26771 = (state_26803[(10)]);
var inst_26764 = (state_26803[(8)]);
var inst_26771__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26767) : f.call(null,inst_26767));
var inst_26772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26771__$1,inst_26764);
var inst_26773 = cljs.core.keyword_identical_QMARK_(inst_26764,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26774 = (inst_26772) || (inst_26773);
var state_26803__$1 = (function (){var statearr_26817 = state_26803;
(statearr_26817[(10)] = inst_26771__$1);

return statearr_26817;
})();
if(cljs.core.truth_(inst_26774)){
var statearr_26818_26847 = state_26803__$1;
(statearr_26818_26847[(1)] = (8));

} else {
var statearr_26819_26848 = state_26803__$1;
(statearr_26819_26848[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (14))){
var inst_26796 = (state_26803[(2)]);
var inst_26797 = cljs.core.async.close_BANG_(out);
var state_26803__$1 = (function (){var statearr_26821 = state_26803;
(statearr_26821[(13)] = inst_26796);

return statearr_26821;
})();
var statearr_26822_26849 = state_26803__$1;
(statearr_26822_26849[(2)] = inst_26797);

(statearr_26822_26849[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (10))){
var inst_26786 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26823_26850 = state_26803__$1;
(statearr_26823_26850[(2)] = inst_26786);

(statearr_26823_26850[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26804 === (8))){
var inst_26767 = (state_26803[(9)]);
var inst_26771 = (state_26803[(10)]);
var inst_26763 = (state_26803[(7)]);
var inst_26776 = inst_26763.push(inst_26767);
var tmp26820 = inst_26763;
var inst_26763__$1 = tmp26820;
var inst_26764 = inst_26771;
var state_26803__$1 = (function (){var statearr_26824 = state_26803;
(statearr_26824[(14)] = inst_26776);

(statearr_26824[(7)] = inst_26763__$1);

(statearr_26824[(8)] = inst_26764);

return statearr_26824;
})();
var statearr_26825_26851 = state_26803__$1;
(statearr_26825_26851[(2)] = null);

(statearr_26825_26851[(1)] = (2));


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
});})(c__23983__auto___26837,out))
;
return ((function (switch__23857__auto__,c__23983__auto___26837,out){
return (function() {
var cljs$core$async$state_machine__23858__auto__ = null;
var cljs$core$async$state_machine__23858__auto____0 = (function (){
var statearr_26829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26829[(0)] = cljs$core$async$state_machine__23858__auto__);

(statearr_26829[(1)] = (1));

return statearr_26829;
});
var cljs$core$async$state_machine__23858__auto____1 = (function (state_26803){
while(true){
var ret_value__23859__auto__ = (function (){try{while(true){
var result__23860__auto__ = switch__23857__auto__(state_26803);
if(cljs.core.keyword_identical_QMARK_(result__23860__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23860__auto__;
}
break;
}
}catch (e26830){if((e26830 instanceof Object)){
var ex__23861__auto__ = e26830;
var statearr_26831_26852 = state_26803;
(statearr_26831_26852[(5)] = ex__23861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26803);

return cljs.core.cst$kw$recur;
} else {
throw e26830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23859__auto__,cljs.core.cst$kw$recur)){
var G__26853 = state_26803;
state_26803 = G__26853;
continue;
} else {
return ret_value__23859__auto__;
}
break;
}
});
cljs$core$async$state_machine__23858__auto__ = function(state_26803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23858__auto____1.call(this,state_26803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23858__auto____0;
cljs$core$async$state_machine__23858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23858__auto____1;
return cljs$core$async$state_machine__23858__auto__;
})()
;})(switch__23857__auto__,c__23983__auto___26837,out))
})();
var state__23985__auto__ = (function (){var statearr_26832 = (f__23984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23984__auto__.cljs$core$IFn$_invoke$arity$0() : f__23984__auto__.call(null));
(statearr_26832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23983__auto___26837);

return statearr_26832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23985__auto__);
});})(c__23983__auto___26837,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

