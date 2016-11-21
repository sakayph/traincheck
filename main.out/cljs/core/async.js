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
var args24206 = [];
var len__8739__auto___24212 = arguments.length;
var i__8740__auto___24213 = (0);
while(true){
if((i__8740__auto___24213 < len__8739__auto___24212)){
args24206.push((arguments[i__8740__auto___24213]));

var G__24214 = (i__8740__auto___24213 + (1));
i__8740__auto___24213 = G__24214;
continue;
} else {
}
break;
}

var G__24208 = args24206.length;
switch (G__24208) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24206.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24209 = (function (f,blockable,meta24210){
this.f = f;
this.blockable = blockable;
this.meta24210 = meta24210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24211,meta24210__$1){
var self__ = this;
var _24211__$1 = this;
return (new cljs.core.async.t_cljs$core$async24209(self__.f,self__.blockable,meta24210__$1));
});


cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24211){
var self__ = this;
var _24211__$1 = this;
return self__.meta24210;
});


cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24210], null);
});

cljs.core.async.t_cljs$core$async24209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24209";

cljs.core.async.t_cljs$core$async24209.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24209");
});

cljs.core.async.__GT_t_cljs$core$async24209 = (function cljs$core$async$__GT_t_cljs$core$async24209(f__$1,blockable__$1,meta24210){
return (new cljs.core.async.t_cljs$core$async24209(f__$1,blockable__$1,meta24210));
});

}

return (new cljs.core.async.t_cljs$core$async24209(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24218 = [];
var len__8739__auto___24221 = arguments.length;
var i__8740__auto___24222 = (0);
while(true){
if((i__8740__auto___24222 < len__8739__auto___24221)){
args24218.push((arguments[i__8740__auto___24222]));

var G__24223 = (i__8740__auto___24222 + (1));
i__8740__auto___24222 = G__24223;
continue;
} else {
}
break;
}

var G__24220 = args24218.length;
switch (G__24220) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24218.length)].join('')));

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
var args24225 = [];
var len__8739__auto___24228 = arguments.length;
var i__8740__auto___24229 = (0);
while(true){
if((i__8740__auto___24229 < len__8739__auto___24228)){
args24225.push((arguments[i__8740__auto___24229]));

var G__24230 = (i__8740__auto___24229 + (1));
i__8740__auto___24229 = G__24230;
continue;
} else {
}
break;
}

var G__24227 = args24225.length;
switch (G__24227) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24225.length)].join('')));

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
var args24232 = [];
var len__8739__auto___24235 = arguments.length;
var i__8740__auto___24236 = (0);
while(true){
if((i__8740__auto___24236 < len__8739__auto___24235)){
args24232.push((arguments[i__8740__auto___24236]));

var G__24237 = (i__8740__auto___24236 + (1));
i__8740__auto___24236 = G__24237;
continue;
} else {
}
break;
}

var G__24234 = args24232.length;
switch (G__24234) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24232.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24239 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24239) : fn1.call(null,val_24239));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24239,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24239) : fn1.call(null,val_24239));
});})(val_24239,ret))
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
var args24240 = [];
var len__8739__auto___24243 = arguments.length;
var i__8740__auto___24244 = (0);
while(true){
if((i__8740__auto___24244 < len__8739__auto___24243)){
args24240.push((arguments[i__8740__auto___24244]));

var G__24245 = (i__8740__auto___24244 + (1));
i__8740__auto___24244 = G__24245;
continue;
} else {
}
break;
}

var G__24242 = args24240.length;
switch (G__24242) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24240.length)].join('')));

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
var n__8539__auto___24247 = n;
var x_24248 = (0);
while(true){
if((x_24248 < n__8539__auto___24247)){
(a[x_24248] = (0));

var G__24249 = (x_24248 + (1));
x_24248 = G__24249;
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

var G__24250 = (i + (1));
i = G__24250;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async24254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24254 = (function (flag,meta24255){
this.flag = flag;
this.meta24255 = meta24255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24256,meta24255__$1){
var self__ = this;
var _24256__$1 = this;
return (new cljs.core.async.t_cljs$core$async24254(self__.flag,meta24255__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24256){
var self__ = this;
var _24256__$1 = this;
return self__.meta24255;
});})(flag))
;


cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24254.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24255], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24254";

cljs.core.async.t_cljs$core$async24254.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24254");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24254 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24254(flag__$1,meta24255){
return (new cljs.core.async.t_cljs$core$async24254(flag__$1,meta24255));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24254(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24260 = (function (flag,cb,meta24261){
this.flag = flag;
this.cb = cb;
this.meta24261 = meta24261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24262,meta24261__$1){
var self__ = this;
var _24262__$1 = this;
return (new cljs.core.async.t_cljs$core$async24260(self__.flag,self__.cb,meta24261__$1));
});


cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24262){
var self__ = this;
var _24262__$1 = this;
return self__.meta24261;
});


cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24261], null);
});

cljs.core.async.t_cljs$core$async24260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24260";

cljs.core.async.t_cljs$core$async24260.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24260");
});

cljs.core.async.__GT_t_cljs$core$async24260 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24260(flag__$1,cb__$1,meta24261){
return (new cljs.core.async.t_cljs$core$async24260(flag__$1,cb__$1,meta24261));
});

}

return (new cljs.core.async.t_cljs$core$async24260(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24263_SHARP_){
var G__24267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24263_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24267) : fret.call(null,G__24267));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24264_SHARP_){
var G__24268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24264_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24268) : fret.call(null,G__24268));
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
var G__24269 = (i + (1));
i = G__24269;
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
var len__8739__auto___24275 = arguments.length;
var i__8740__auto___24276 = (0);
while(true){
if((i__8740__auto___24276 < len__8739__auto___24275)){
args__8746__auto__.push((arguments[i__8740__auto___24276]));

var G__24277 = (i__8740__auto___24276 + (1));
i__8740__auto___24276 = G__24277;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((1) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8747__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24272){
var map__24273 = p__24272;
var map__24273__$1 = ((((!((map__24273 == null)))?((((map__24273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24273):map__24273);
var opts = map__24273__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24270){
var G__24271 = cljs.core.first(seq24270);
var seq24270__$1 = cljs.core.next(seq24270);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24271,seq24270__$1);
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
var args24278 = [];
var len__8739__auto___24328 = arguments.length;
var i__8740__auto___24329 = (0);
while(true){
if((i__8740__auto___24329 < len__8739__auto___24328)){
args24278.push((arguments[i__8740__auto___24329]));

var G__24330 = (i__8740__auto___24329 + (1));
i__8740__auto___24329 = G__24330;
continue;
} else {
}
break;
}

var G__24280 = args24278.length;
switch (G__24280) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24278.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24147__auto___24332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___24332){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___24332){
return (function (state_24304){
var state_val_24305 = (state_24304[(1)]);
if((state_val_24305 === (7))){
var inst_24300 = (state_24304[(2)]);
var state_24304__$1 = state_24304;
var statearr_24306_24333 = state_24304__$1;
(statearr_24306_24333[(2)] = inst_24300);

(statearr_24306_24333[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (1))){
var state_24304__$1 = state_24304;
var statearr_24307_24334 = state_24304__$1;
(statearr_24307_24334[(2)] = null);

(statearr_24307_24334[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (4))){
var inst_24283 = (state_24304[(7)]);
var inst_24283__$1 = (state_24304[(2)]);
var inst_24284 = (inst_24283__$1 == null);
var state_24304__$1 = (function (){var statearr_24308 = state_24304;
(statearr_24308[(7)] = inst_24283__$1);

return statearr_24308;
})();
if(cljs.core.truth_(inst_24284)){
var statearr_24309_24335 = state_24304__$1;
(statearr_24309_24335[(1)] = (5));

} else {
var statearr_24310_24336 = state_24304__$1;
(statearr_24310_24336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (13))){
var state_24304__$1 = state_24304;
var statearr_24311_24337 = state_24304__$1;
(statearr_24311_24337[(2)] = null);

(statearr_24311_24337[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (6))){
var inst_24283 = (state_24304[(7)]);
var state_24304__$1 = state_24304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24304__$1,(11),to,inst_24283);
} else {
if((state_val_24305 === (3))){
var inst_24302 = (state_24304[(2)]);
var state_24304__$1 = state_24304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24304__$1,inst_24302);
} else {
if((state_val_24305 === (12))){
var state_24304__$1 = state_24304;
var statearr_24312_24338 = state_24304__$1;
(statearr_24312_24338[(2)] = null);

(statearr_24312_24338[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (2))){
var state_24304__$1 = state_24304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24304__$1,(4),from);
} else {
if((state_val_24305 === (11))){
var inst_24293 = (state_24304[(2)]);
var state_24304__$1 = state_24304;
if(cljs.core.truth_(inst_24293)){
var statearr_24313_24339 = state_24304__$1;
(statearr_24313_24339[(1)] = (12));

} else {
var statearr_24314_24340 = state_24304__$1;
(statearr_24314_24340[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (9))){
var state_24304__$1 = state_24304;
var statearr_24315_24341 = state_24304__$1;
(statearr_24315_24341[(2)] = null);

(statearr_24315_24341[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (5))){
var state_24304__$1 = state_24304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24316_24342 = state_24304__$1;
(statearr_24316_24342[(1)] = (8));

} else {
var statearr_24317_24343 = state_24304__$1;
(statearr_24317_24343[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (14))){
var inst_24298 = (state_24304[(2)]);
var state_24304__$1 = state_24304;
var statearr_24318_24344 = state_24304__$1;
(statearr_24318_24344[(2)] = inst_24298);

(statearr_24318_24344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (10))){
var inst_24290 = (state_24304[(2)]);
var state_24304__$1 = state_24304;
var statearr_24319_24345 = state_24304__$1;
(statearr_24319_24345[(2)] = inst_24290);

(statearr_24319_24345[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24305 === (8))){
var inst_24287 = cljs.core.async.close_BANG_(to);
var state_24304__$1 = state_24304;
var statearr_24320_24346 = state_24304__$1;
(statearr_24320_24346[(2)] = inst_24287);

(statearr_24320_24346[(1)] = (10));


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
});})(c__24147__auto___24332))
;
return ((function (switch__24021__auto__,c__24147__auto___24332){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_24324 = [null,null,null,null,null,null,null,null];
(statearr_24324[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_24324[(1)] = (1));

return statearr_24324;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_24304){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24304);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24325){if((e24325 instanceof Object)){
var ex__24025__auto__ = e24325;
var statearr_24326_24347 = state_24304;
(statearr_24326_24347[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24304);

return cljs.core.cst$kw$recur;
} else {
throw e24325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24348 = state_24304;
state_24304 = G__24348;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_24304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_24304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___24332))
})();
var state__24149__auto__ = (function (){var statearr_24327 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___24332);

return statearr_24327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___24332))
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
return (function (p__24536){
var vec__24537 = p__24536;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24537,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24537,(1),null);
var job = vec__24537;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24147__auto___24723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___24723,res,vec__24537,v,p,job,jobs,results){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___24723,res,vec__24537,v,p,job,jobs,results){
return (function (state_24544){
var state_val_24545 = (state_24544[(1)]);
if((state_val_24545 === (1))){
var state_24544__$1 = state_24544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24544__$1,(2),res,v);
} else {
if((state_val_24545 === (2))){
var inst_24541 = (state_24544[(2)]);
var inst_24542 = cljs.core.async.close_BANG_(res);
var state_24544__$1 = (function (){var statearr_24546 = state_24544;
(statearr_24546[(7)] = inst_24541);

return statearr_24546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24544__$1,inst_24542);
} else {
return null;
}
}
});})(c__24147__auto___24723,res,vec__24537,v,p,job,jobs,results))
;
return ((function (switch__24021__auto__,c__24147__auto___24723,res,vec__24537,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24550 = [null,null,null,null,null,null,null,null];
(statearr_24550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24550[(1)] = (1));

return statearr_24550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24544){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24544);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24551){if((e24551 instanceof Object)){
var ex__24025__auto__ = e24551;
var statearr_24552_24724 = state_24544;
(statearr_24552_24724[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24544);

return cljs.core.cst$kw$recur;
} else {
throw e24551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24725 = state_24544;
state_24544 = G__24725;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___24723,res,vec__24537,v,p,job,jobs,results))
})();
var state__24149__auto__ = (function (){var statearr_24553 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___24723);

return statearr_24553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___24723,res,vec__24537,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24554){
var vec__24555 = p__24554;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24555,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24555,(1),null);
var job = vec__24555;
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
var n__8539__auto___24726 = n;
var __24727 = (0);
while(true){
if((__24727 < n__8539__auto___24726)){
var G__24558_24728 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24558_24728) {
case "compute":
var c__24147__auto___24730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24727,c__24147__auto___24730,G__24558_24728,n__8539__auto___24726,jobs,results,process,async){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (__24727,c__24147__auto___24730,G__24558_24728,n__8539__auto___24726,jobs,results,process,async){
return (function (state_24571){
var state_val_24572 = (state_24571[(1)]);
if((state_val_24572 === (1))){
var state_24571__$1 = state_24571;
var statearr_24573_24731 = state_24571__$1;
(statearr_24573_24731[(2)] = null);

(statearr_24573_24731[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24572 === (2))){
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24571__$1,(4),jobs);
} else {
if((state_val_24572 === (3))){
var inst_24569 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24571__$1,inst_24569);
} else {
if((state_val_24572 === (4))){
var inst_24561 = (state_24571[(2)]);
var inst_24562 = process(inst_24561);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24562)){
var statearr_24574_24732 = state_24571__$1;
(statearr_24574_24732[(1)] = (5));

} else {
var statearr_24575_24733 = state_24571__$1;
(statearr_24575_24733[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24572 === (5))){
var state_24571__$1 = state_24571;
var statearr_24576_24734 = state_24571__$1;
(statearr_24576_24734[(2)] = null);

(statearr_24576_24734[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24572 === (6))){
var state_24571__$1 = state_24571;
var statearr_24577_24735 = state_24571__$1;
(statearr_24577_24735[(2)] = null);

(statearr_24577_24735[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24572 === (7))){
var inst_24567 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24578_24736 = state_24571__$1;
(statearr_24578_24736[(2)] = inst_24567);

(statearr_24578_24736[(1)] = (3));


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
});})(__24727,c__24147__auto___24730,G__24558_24728,n__8539__auto___24726,jobs,results,process,async))
;
return ((function (__24727,switch__24021__auto__,c__24147__auto___24730,G__24558_24728,n__8539__auto___24726,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24582 = [null,null,null,null,null,null,null];
(statearr_24582[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24582[(1)] = (1));

return statearr_24582;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24571){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24571);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24583){if((e24583 instanceof Object)){
var ex__24025__auto__ = e24583;
var statearr_24584_24737 = state_24571;
(statearr_24584_24737[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24571);

return cljs.core.cst$kw$recur;
} else {
throw e24583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24738 = state_24571;
state_24571 = G__24738;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
;})(__24727,switch__24021__auto__,c__24147__auto___24730,G__24558_24728,n__8539__auto___24726,jobs,results,process,async))
})();
var state__24149__auto__ = (function (){var statearr_24585 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___24730);

return statearr_24585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(__24727,c__24147__auto___24730,G__24558_24728,n__8539__auto___24726,jobs,results,process,async))
);


break;
case "async":
var c__24147__auto___24739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24727,c__24147__auto___24739,G__24558_24728,n__8539__auto___24726,jobs,results,process,async){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (__24727,c__24147__auto___24739,G__24558_24728,n__8539__auto___24726,jobs,results,process,async){
return (function (state_24598){
var state_val_24599 = (state_24598[(1)]);
if((state_val_24599 === (1))){
var state_24598__$1 = state_24598;
var statearr_24600_24740 = state_24598__$1;
(statearr_24600_24740[(2)] = null);

(statearr_24600_24740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24599 === (2))){
var state_24598__$1 = state_24598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24598__$1,(4),jobs);
} else {
if((state_val_24599 === (3))){
var inst_24596 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24598__$1,inst_24596);
} else {
if((state_val_24599 === (4))){
var inst_24588 = (state_24598[(2)]);
var inst_24589 = async(inst_24588);
var state_24598__$1 = state_24598;
if(cljs.core.truth_(inst_24589)){
var statearr_24601_24741 = state_24598__$1;
(statearr_24601_24741[(1)] = (5));

} else {
var statearr_24602_24742 = state_24598__$1;
(statearr_24602_24742[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24599 === (5))){
var state_24598__$1 = state_24598;
var statearr_24603_24743 = state_24598__$1;
(statearr_24603_24743[(2)] = null);

(statearr_24603_24743[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24599 === (6))){
var state_24598__$1 = state_24598;
var statearr_24604_24744 = state_24598__$1;
(statearr_24604_24744[(2)] = null);

(statearr_24604_24744[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24599 === (7))){
var inst_24594 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
var statearr_24605_24745 = state_24598__$1;
(statearr_24605_24745[(2)] = inst_24594);

(statearr_24605_24745[(1)] = (3));


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
});})(__24727,c__24147__auto___24739,G__24558_24728,n__8539__auto___24726,jobs,results,process,async))
;
return ((function (__24727,switch__24021__auto__,c__24147__auto___24739,G__24558_24728,n__8539__auto___24726,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24609 = [null,null,null,null,null,null,null];
(statearr_24609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24609[(1)] = (1));

return statearr_24609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24598){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24598);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24610){if((e24610 instanceof Object)){
var ex__24025__auto__ = e24610;
var statearr_24611_24746 = state_24598;
(statearr_24611_24746[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24598);

return cljs.core.cst$kw$recur;
} else {
throw e24610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24747 = state_24598;
state_24598 = G__24747;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
;})(__24727,switch__24021__auto__,c__24147__auto___24739,G__24558_24728,n__8539__auto___24726,jobs,results,process,async))
})();
var state__24149__auto__ = (function (){var statearr_24612 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___24739);

return statearr_24612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(__24727,c__24147__auto___24739,G__24558_24728,n__8539__auto___24726,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24748 = (__24727 + (1));
__24727 = G__24748;
continue;
} else {
}
break;
}

var c__24147__auto___24749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___24749,jobs,results,process,async){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___24749,jobs,results,process,async){
return (function (state_24634){
var state_val_24635 = (state_24634[(1)]);
if((state_val_24635 === (1))){
var state_24634__$1 = state_24634;
var statearr_24636_24750 = state_24634__$1;
(statearr_24636_24750[(2)] = null);

(statearr_24636_24750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24635 === (2))){
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24634__$1,(4),from);
} else {
if((state_val_24635 === (3))){
var inst_24632 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24634__$1,inst_24632);
} else {
if((state_val_24635 === (4))){
var inst_24615 = (state_24634[(7)]);
var inst_24615__$1 = (state_24634[(2)]);
var inst_24616 = (inst_24615__$1 == null);
var state_24634__$1 = (function (){var statearr_24637 = state_24634;
(statearr_24637[(7)] = inst_24615__$1);

return statearr_24637;
})();
if(cljs.core.truth_(inst_24616)){
var statearr_24638_24751 = state_24634__$1;
(statearr_24638_24751[(1)] = (5));

} else {
var statearr_24639_24752 = state_24634__$1;
(statearr_24639_24752[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24635 === (5))){
var inst_24618 = cljs.core.async.close_BANG_(jobs);
var state_24634__$1 = state_24634;
var statearr_24640_24753 = state_24634__$1;
(statearr_24640_24753[(2)] = inst_24618);

(statearr_24640_24753[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24635 === (6))){
var inst_24615 = (state_24634[(7)]);
var inst_24620 = (state_24634[(8)]);
var inst_24620__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24621 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24622 = [inst_24615,inst_24620__$1];
var inst_24623 = (new cljs.core.PersistentVector(null,2,(5),inst_24621,inst_24622,null));
var state_24634__$1 = (function (){var statearr_24641 = state_24634;
(statearr_24641[(8)] = inst_24620__$1);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24634__$1,(8),jobs,inst_24623);
} else {
if((state_val_24635 === (7))){
var inst_24630 = (state_24634[(2)]);
var state_24634__$1 = state_24634;
var statearr_24642_24754 = state_24634__$1;
(statearr_24642_24754[(2)] = inst_24630);

(statearr_24642_24754[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24635 === (8))){
var inst_24620 = (state_24634[(8)]);
var inst_24625 = (state_24634[(2)]);
var state_24634__$1 = (function (){var statearr_24643 = state_24634;
(statearr_24643[(9)] = inst_24625);

return statearr_24643;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24634__$1,(9),results,inst_24620);
} else {
if((state_val_24635 === (9))){
var inst_24627 = (state_24634[(2)]);
var state_24634__$1 = (function (){var statearr_24644 = state_24634;
(statearr_24644[(10)] = inst_24627);

return statearr_24644;
})();
var statearr_24645_24755 = state_24634__$1;
(statearr_24645_24755[(2)] = null);

(statearr_24645_24755[(1)] = (2));


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
});})(c__24147__auto___24749,jobs,results,process,async))
;
return ((function (switch__24021__auto__,c__24147__auto___24749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24649[(1)] = (1));

return statearr_24649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24634){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24634);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24650){if((e24650 instanceof Object)){
var ex__24025__auto__ = e24650;
var statearr_24651_24756 = state_24634;
(statearr_24651_24756[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24634);

return cljs.core.cst$kw$recur;
} else {
throw e24650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24757 = state_24634;
state_24634 = G__24757;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___24749,jobs,results,process,async))
})();
var state__24149__auto__ = (function (){var statearr_24652 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___24749);

return statearr_24652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___24749,jobs,results,process,async))
);


var c__24147__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto__,jobs,results,process,async){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto__,jobs,results,process,async){
return (function (state_24690){
var state_val_24691 = (state_24690[(1)]);
if((state_val_24691 === (7))){
var inst_24686 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24692_24758 = state_24690__$1;
(statearr_24692_24758[(2)] = inst_24686);

(statearr_24692_24758[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (20))){
var state_24690__$1 = state_24690;
var statearr_24693_24759 = state_24690__$1;
(statearr_24693_24759[(2)] = null);

(statearr_24693_24759[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (1))){
var state_24690__$1 = state_24690;
var statearr_24694_24760 = state_24690__$1;
(statearr_24694_24760[(2)] = null);

(statearr_24694_24760[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (4))){
var inst_24655 = (state_24690[(7)]);
var inst_24655__$1 = (state_24690[(2)]);
var inst_24656 = (inst_24655__$1 == null);
var state_24690__$1 = (function (){var statearr_24695 = state_24690;
(statearr_24695[(7)] = inst_24655__$1);

return statearr_24695;
})();
if(cljs.core.truth_(inst_24656)){
var statearr_24696_24761 = state_24690__$1;
(statearr_24696_24761[(1)] = (5));

} else {
var statearr_24697_24762 = state_24690__$1;
(statearr_24697_24762[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (15))){
var inst_24668 = (state_24690[(8)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24690__$1,(18),to,inst_24668);
} else {
if((state_val_24691 === (21))){
var inst_24681 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24698_24763 = state_24690__$1;
(statearr_24698_24763[(2)] = inst_24681);

(statearr_24698_24763[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (13))){
var inst_24683 = (state_24690[(2)]);
var state_24690__$1 = (function (){var statearr_24699 = state_24690;
(statearr_24699[(9)] = inst_24683);

return statearr_24699;
})();
var statearr_24700_24764 = state_24690__$1;
(statearr_24700_24764[(2)] = null);

(statearr_24700_24764[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (6))){
var inst_24655 = (state_24690[(7)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24690__$1,(11),inst_24655);
} else {
if((state_val_24691 === (17))){
var inst_24676 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
if(cljs.core.truth_(inst_24676)){
var statearr_24701_24765 = state_24690__$1;
(statearr_24701_24765[(1)] = (19));

} else {
var statearr_24702_24766 = state_24690__$1;
(statearr_24702_24766[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (3))){
var inst_24688 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24690__$1,inst_24688);
} else {
if((state_val_24691 === (12))){
var inst_24665 = (state_24690[(10)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24690__$1,(14),inst_24665);
} else {
if((state_val_24691 === (2))){
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24690__$1,(4),results);
} else {
if((state_val_24691 === (19))){
var state_24690__$1 = state_24690;
var statearr_24703_24767 = state_24690__$1;
(statearr_24703_24767[(2)] = null);

(statearr_24703_24767[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (11))){
var inst_24665 = (state_24690[(2)]);
var state_24690__$1 = (function (){var statearr_24704 = state_24690;
(statearr_24704[(10)] = inst_24665);

return statearr_24704;
})();
var statearr_24705_24768 = state_24690__$1;
(statearr_24705_24768[(2)] = null);

(statearr_24705_24768[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (9))){
var state_24690__$1 = state_24690;
var statearr_24706_24769 = state_24690__$1;
(statearr_24706_24769[(2)] = null);

(statearr_24706_24769[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (5))){
var state_24690__$1 = state_24690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24707_24770 = state_24690__$1;
(statearr_24707_24770[(1)] = (8));

} else {
var statearr_24708_24771 = state_24690__$1;
(statearr_24708_24771[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (14))){
var inst_24670 = (state_24690[(11)]);
var inst_24668 = (state_24690[(8)]);
var inst_24668__$1 = (state_24690[(2)]);
var inst_24669 = (inst_24668__$1 == null);
var inst_24670__$1 = cljs.core.not(inst_24669);
var state_24690__$1 = (function (){var statearr_24709 = state_24690;
(statearr_24709[(11)] = inst_24670__$1);

(statearr_24709[(8)] = inst_24668__$1);

return statearr_24709;
})();
if(inst_24670__$1){
var statearr_24710_24772 = state_24690__$1;
(statearr_24710_24772[(1)] = (15));

} else {
var statearr_24711_24773 = state_24690__$1;
(statearr_24711_24773[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (16))){
var inst_24670 = (state_24690[(11)]);
var state_24690__$1 = state_24690;
var statearr_24712_24774 = state_24690__$1;
(statearr_24712_24774[(2)] = inst_24670);

(statearr_24712_24774[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (10))){
var inst_24662 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24713_24775 = state_24690__$1;
(statearr_24713_24775[(2)] = inst_24662);

(statearr_24713_24775[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (18))){
var inst_24673 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24714_24776 = state_24690__$1;
(statearr_24714_24776[(2)] = inst_24673);

(statearr_24714_24776[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24691 === (8))){
var inst_24659 = cljs.core.async.close_BANG_(to);
var state_24690__$1 = state_24690;
var statearr_24715_24777 = state_24690__$1;
(statearr_24715_24777[(2)] = inst_24659);

(statearr_24715_24777[(1)] = (10));


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
});})(c__24147__auto__,jobs,results,process,async))
;
return ((function (switch__24021__auto__,c__24147__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_24719 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__);

(statearr_24719[(1)] = (1));

return statearr_24719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1 = (function (state_24690){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24690);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24720){if((e24720 instanceof Object)){
var ex__24025__auto__ = e24720;
var statearr_24721_24778 = state_24690;
(statearr_24721_24778[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24690);

return cljs.core.cst$kw$recur;
} else {
throw e24720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24779 = state_24690;
state_24690 = G__24779;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__ = function(state_24690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1.call(this,state_24690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto__,jobs,results,process,async))
})();
var state__24149__auto__ = (function (){var statearr_24722 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto__);

return statearr_24722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto__,jobs,results,process,async))
);

return c__24147__auto__;
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
var args24780 = [];
var len__8739__auto___24783 = arguments.length;
var i__8740__auto___24784 = (0);
while(true){
if((i__8740__auto___24784 < len__8739__auto___24783)){
args24780.push((arguments[i__8740__auto___24784]));

var G__24785 = (i__8740__auto___24784 + (1));
i__8740__auto___24784 = G__24785;
continue;
} else {
}
break;
}

var G__24782 = args24780.length;
switch (G__24782) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24780.length)].join('')));

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
var args24787 = [];
var len__8739__auto___24790 = arguments.length;
var i__8740__auto___24791 = (0);
while(true){
if((i__8740__auto___24791 < len__8739__auto___24790)){
args24787.push((arguments[i__8740__auto___24791]));

var G__24792 = (i__8740__auto___24791 + (1));
i__8740__auto___24791 = G__24792;
continue;
} else {
}
break;
}

var G__24789 = args24787.length;
switch (G__24789) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24787.length)].join('')));

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
var args24794 = [];
var len__8739__auto___24847 = arguments.length;
var i__8740__auto___24848 = (0);
while(true){
if((i__8740__auto___24848 < len__8739__auto___24847)){
args24794.push((arguments[i__8740__auto___24848]));

var G__24849 = (i__8740__auto___24848 + (1));
i__8740__auto___24848 = G__24849;
continue;
} else {
}
break;
}

var G__24796 = args24794.length;
switch (G__24796) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24794.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__24147__auto___24851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___24851,tc,fc){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___24851,tc,fc){
return (function (state_24822){
var state_val_24823 = (state_24822[(1)]);
if((state_val_24823 === (7))){
var inst_24818 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24824_24852 = state_24822__$1;
(statearr_24824_24852[(2)] = inst_24818);

(statearr_24824_24852[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (1))){
var state_24822__$1 = state_24822;
var statearr_24825_24853 = state_24822__$1;
(statearr_24825_24853[(2)] = null);

(statearr_24825_24853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (4))){
var inst_24799 = (state_24822[(7)]);
var inst_24799__$1 = (state_24822[(2)]);
var inst_24800 = (inst_24799__$1 == null);
var state_24822__$1 = (function (){var statearr_24826 = state_24822;
(statearr_24826[(7)] = inst_24799__$1);

return statearr_24826;
})();
if(cljs.core.truth_(inst_24800)){
var statearr_24827_24854 = state_24822__$1;
(statearr_24827_24854[(1)] = (5));

} else {
var statearr_24828_24855 = state_24822__$1;
(statearr_24828_24855[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (13))){
var state_24822__$1 = state_24822;
var statearr_24829_24856 = state_24822__$1;
(statearr_24829_24856[(2)] = null);

(statearr_24829_24856[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (6))){
var inst_24799 = (state_24822[(7)]);
var inst_24805 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24799) : p.call(null,inst_24799));
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24805)){
var statearr_24830_24857 = state_24822__$1;
(statearr_24830_24857[(1)] = (9));

} else {
var statearr_24831_24858 = state_24822__$1;
(statearr_24831_24858[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (3))){
var inst_24820 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24822__$1,inst_24820);
} else {
if((state_val_24823 === (12))){
var state_24822__$1 = state_24822;
var statearr_24832_24859 = state_24822__$1;
(statearr_24832_24859[(2)] = null);

(statearr_24832_24859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (2))){
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24822__$1,(4),ch);
} else {
if((state_val_24823 === (11))){
var inst_24799 = (state_24822[(7)]);
var inst_24809 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24822__$1,(8),inst_24809,inst_24799);
} else {
if((state_val_24823 === (9))){
var state_24822__$1 = state_24822;
var statearr_24833_24860 = state_24822__$1;
(statearr_24833_24860[(2)] = tc);

(statearr_24833_24860[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (5))){
var inst_24802 = cljs.core.async.close_BANG_(tc);
var inst_24803 = cljs.core.async.close_BANG_(fc);
var state_24822__$1 = (function (){var statearr_24834 = state_24822;
(statearr_24834[(8)] = inst_24802);

return statearr_24834;
})();
var statearr_24835_24861 = state_24822__$1;
(statearr_24835_24861[(2)] = inst_24803);

(statearr_24835_24861[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (14))){
var inst_24816 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24836_24862 = state_24822__$1;
(statearr_24836_24862[(2)] = inst_24816);

(statearr_24836_24862[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (10))){
var state_24822__$1 = state_24822;
var statearr_24837_24863 = state_24822__$1;
(statearr_24837_24863[(2)] = fc);

(statearr_24837_24863[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24823 === (8))){
var inst_24811 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24811)){
var statearr_24838_24864 = state_24822__$1;
(statearr_24838_24864[(1)] = (12));

} else {
var statearr_24839_24865 = state_24822__$1;
(statearr_24839_24865[(1)] = (13));

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
});})(c__24147__auto___24851,tc,fc))
;
return ((function (switch__24021__auto__,c__24147__auto___24851,tc,fc){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_24843 = [null,null,null,null,null,null,null,null,null];
(statearr_24843[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_24843[(1)] = (1));

return statearr_24843;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_24822){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24822);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24844){if((e24844 instanceof Object)){
var ex__24025__auto__ = e24844;
var statearr_24845_24866 = state_24822;
(statearr_24845_24866[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24822);

return cljs.core.cst$kw$recur;
} else {
throw e24844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24867 = state_24822;
state_24822 = G__24867;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_24822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_24822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___24851,tc,fc))
})();
var state__24149__auto__ = (function (){var statearr_24846 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___24851);

return statearr_24846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___24851,tc,fc))
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
var c__24147__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto__){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto__){
return (function (state_24931){
var state_val_24932 = (state_24931[(1)]);
if((state_val_24932 === (7))){
var inst_24927 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24933_24954 = state_24931__$1;
(statearr_24933_24954[(2)] = inst_24927);

(statearr_24933_24954[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24932 === (1))){
var inst_24911 = init;
var state_24931__$1 = (function (){var statearr_24934 = state_24931;
(statearr_24934[(7)] = inst_24911);

return statearr_24934;
})();
var statearr_24935_24955 = state_24931__$1;
(statearr_24935_24955[(2)] = null);

(statearr_24935_24955[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24932 === (4))){
var inst_24914 = (state_24931[(8)]);
var inst_24914__$1 = (state_24931[(2)]);
var inst_24915 = (inst_24914__$1 == null);
var state_24931__$1 = (function (){var statearr_24936 = state_24931;
(statearr_24936[(8)] = inst_24914__$1);

return statearr_24936;
})();
if(cljs.core.truth_(inst_24915)){
var statearr_24937_24956 = state_24931__$1;
(statearr_24937_24956[(1)] = (5));

} else {
var statearr_24938_24957 = state_24931__$1;
(statearr_24938_24957[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24932 === (6))){
var inst_24918 = (state_24931[(9)]);
var inst_24914 = (state_24931[(8)]);
var inst_24911 = (state_24931[(7)]);
var inst_24918__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24911,inst_24914) : f.call(null,inst_24911,inst_24914));
var inst_24919 = cljs.core.reduced_QMARK_(inst_24918__$1);
var state_24931__$1 = (function (){var statearr_24939 = state_24931;
(statearr_24939[(9)] = inst_24918__$1);

return statearr_24939;
})();
if(inst_24919){
var statearr_24940_24958 = state_24931__$1;
(statearr_24940_24958[(1)] = (8));

} else {
var statearr_24941_24959 = state_24931__$1;
(statearr_24941_24959[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24932 === (3))){
var inst_24929 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24931__$1,inst_24929);
} else {
if((state_val_24932 === (2))){
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24931__$1,(4),ch);
} else {
if((state_val_24932 === (9))){
var inst_24918 = (state_24931[(9)]);
var inst_24911 = inst_24918;
var state_24931__$1 = (function (){var statearr_24942 = state_24931;
(statearr_24942[(7)] = inst_24911);

return statearr_24942;
})();
var statearr_24943_24960 = state_24931__$1;
(statearr_24943_24960[(2)] = null);

(statearr_24943_24960[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24932 === (5))){
var inst_24911 = (state_24931[(7)]);
var state_24931__$1 = state_24931;
var statearr_24944_24961 = state_24931__$1;
(statearr_24944_24961[(2)] = inst_24911);

(statearr_24944_24961[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24932 === (10))){
var inst_24925 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24945_24962 = state_24931__$1;
(statearr_24945_24962[(2)] = inst_24925);

(statearr_24945_24962[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24932 === (8))){
var inst_24918 = (state_24931[(9)]);
var inst_24921 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_24918) : cljs.core.deref.call(null,inst_24918));
var state_24931__$1 = state_24931;
var statearr_24946_24963 = state_24931__$1;
(statearr_24946_24963[(2)] = inst_24921);

(statearr_24946_24963[(1)] = (10));


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
});})(c__24147__auto__))
;
return ((function (switch__24021__auto__,c__24147__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24022__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24022__auto____0 = (function (){
var statearr_24950 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24950[(0)] = cljs$core$async$reduce_$_state_machine__24022__auto__);

(statearr_24950[(1)] = (1));

return statearr_24950;
});
var cljs$core$async$reduce_$_state_machine__24022__auto____1 = (function (state_24931){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24931);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24951){if((e24951 instanceof Object)){
var ex__24025__auto__ = e24951;
var statearr_24952_24964 = state_24931;
(statearr_24952_24964[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24931);

return cljs.core.cst$kw$recur;
} else {
throw e24951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24965 = state_24931;
state_24931 = G__24965;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24022__auto__ = function(state_24931){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24022__auto____1.call(this,state_24931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24022__auto____0;
cljs$core$async$reduce_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24022__auto____1;
return cljs$core$async$reduce_$_state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto__))
})();
var state__24149__auto__ = (function (){var statearr_24953 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto__);

return statearr_24953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto__))
);

return c__24147__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24147__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto__,f__$1){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto__,f__$1){
return (function (state_24985){
var state_val_24986 = (state_24985[(1)]);
if((state_val_24986 === (1))){
var inst_24980 = cljs.core.async.reduce(f__$1,init,ch);
var state_24985__$1 = state_24985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24985__$1,(2),inst_24980);
} else {
if((state_val_24986 === (2))){
var inst_24982 = (state_24985[(2)]);
var inst_24983 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24982) : f__$1.call(null,inst_24982));
var state_24985__$1 = state_24985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24985__$1,inst_24983);
} else {
return null;
}
}
});})(c__24147__auto__,f__$1))
;
return ((function (switch__24021__auto__,c__24147__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24022__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24022__auto____0 = (function (){
var statearr_24990 = [null,null,null,null,null,null,null];
(statearr_24990[(0)] = cljs$core$async$transduce_$_state_machine__24022__auto__);

(statearr_24990[(1)] = (1));

return statearr_24990;
});
var cljs$core$async$transduce_$_state_machine__24022__auto____1 = (function (state_24985){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_24985);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e24991){if((e24991 instanceof Object)){
var ex__24025__auto__ = e24991;
var statearr_24992_24994 = state_24985;
(statearr_24992_24994[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24985);

return cljs.core.cst$kw$recur;
} else {
throw e24991;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__24995 = state_24985;
state_24985 = G__24995;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24022__auto__ = function(state_24985){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24022__auto____1.call(this,state_24985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24022__auto____0;
cljs$core$async$transduce_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24022__auto____1;
return cljs$core$async$transduce_$_state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto__,f__$1))
})();
var state__24149__auto__ = (function (){var statearr_24993 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_24993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto__);

return statearr_24993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto__,f__$1))
);

return c__24147__auto__;
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
var args24996 = [];
var len__8739__auto___25048 = arguments.length;
var i__8740__auto___25049 = (0);
while(true){
if((i__8740__auto___25049 < len__8739__auto___25048)){
args24996.push((arguments[i__8740__auto___25049]));

var G__25050 = (i__8740__auto___25049 + (1));
i__8740__auto___25049 = G__25050;
continue;
} else {
}
break;
}

var G__24998 = args24996.length;
switch (G__24998) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24996.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24147__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto__){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto__){
return (function (state_25023){
var state_val_25024 = (state_25023[(1)]);
if((state_val_25024 === (7))){
var inst_25005 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
var statearr_25025_25052 = state_25023__$1;
(statearr_25025_25052[(2)] = inst_25005);

(statearr_25025_25052[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (1))){
var inst_24999 = cljs.core.seq(coll);
var inst_25000 = inst_24999;
var state_25023__$1 = (function (){var statearr_25026 = state_25023;
(statearr_25026[(7)] = inst_25000);

return statearr_25026;
})();
var statearr_25027_25053 = state_25023__$1;
(statearr_25027_25053[(2)] = null);

(statearr_25027_25053[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (4))){
var inst_25000 = (state_25023[(7)]);
var inst_25003 = cljs.core.first(inst_25000);
var state_25023__$1 = state_25023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25023__$1,(7),ch,inst_25003);
} else {
if((state_val_25024 === (13))){
var inst_25017 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
var statearr_25028_25054 = state_25023__$1;
(statearr_25028_25054[(2)] = inst_25017);

(statearr_25028_25054[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (6))){
var inst_25008 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
if(cljs.core.truth_(inst_25008)){
var statearr_25029_25055 = state_25023__$1;
(statearr_25029_25055[(1)] = (8));

} else {
var statearr_25030_25056 = state_25023__$1;
(statearr_25030_25056[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (3))){
var inst_25021 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25023__$1,inst_25021);
} else {
if((state_val_25024 === (12))){
var state_25023__$1 = state_25023;
var statearr_25031_25057 = state_25023__$1;
(statearr_25031_25057[(2)] = null);

(statearr_25031_25057[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (2))){
var inst_25000 = (state_25023[(7)]);
var state_25023__$1 = state_25023;
if(cljs.core.truth_(inst_25000)){
var statearr_25032_25058 = state_25023__$1;
(statearr_25032_25058[(1)] = (4));

} else {
var statearr_25033_25059 = state_25023__$1;
(statearr_25033_25059[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (11))){
var inst_25014 = cljs.core.async.close_BANG_(ch);
var state_25023__$1 = state_25023;
var statearr_25034_25060 = state_25023__$1;
(statearr_25034_25060[(2)] = inst_25014);

(statearr_25034_25060[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (9))){
var state_25023__$1 = state_25023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25035_25061 = state_25023__$1;
(statearr_25035_25061[(1)] = (11));

} else {
var statearr_25036_25062 = state_25023__$1;
(statearr_25036_25062[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (5))){
var inst_25000 = (state_25023[(7)]);
var state_25023__$1 = state_25023;
var statearr_25037_25063 = state_25023__$1;
(statearr_25037_25063[(2)] = inst_25000);

(statearr_25037_25063[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (10))){
var inst_25019 = (state_25023[(2)]);
var state_25023__$1 = state_25023;
var statearr_25038_25064 = state_25023__$1;
(statearr_25038_25064[(2)] = inst_25019);

(statearr_25038_25064[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25024 === (8))){
var inst_25000 = (state_25023[(7)]);
var inst_25010 = cljs.core.next(inst_25000);
var inst_25000__$1 = inst_25010;
var state_25023__$1 = (function (){var statearr_25039 = state_25023;
(statearr_25039[(7)] = inst_25000__$1);

return statearr_25039;
})();
var statearr_25040_25065 = state_25023__$1;
(statearr_25040_25065[(2)] = null);

(statearr_25040_25065[(1)] = (2));


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
});})(c__24147__auto__))
;
return ((function (switch__24021__auto__,c__24147__auto__){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_25044 = [null,null,null,null,null,null,null,null];
(statearr_25044[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_25044[(1)] = (1));

return statearr_25044;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_25023){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_25023);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25045){if((e25045 instanceof Object)){
var ex__24025__auto__ = e25045;
var statearr_25046_25066 = state_25023;
(statearr_25046_25066[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25023);

return cljs.core.cst$kw$recur;
} else {
throw e25045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__25067 = state_25023;
state_25023 = G__25067;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_25023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_25023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto__))
})();
var state__24149__auto__ = (function (){var statearr_25047 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_25047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto__);

return statearr_25047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto__))
);

return c__24147__auto__;
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
var cs = (function (){var G__25296 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25296) : cljs.core.atom.call(null,G__25296));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25297 = (function (ch,cs,meta25298){
this.ch = ch;
this.cs = cs;
this.meta25298 = meta25298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25299,meta25298__$1){
var self__ = this;
var _25299__$1 = this;
return (new cljs.core.async.t_cljs$core$async25297(self__.ch,self__.cs,meta25298__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async25297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25299){
var self__ = this;
var _25299__$1 = this;
return self__.meta25298;
});})(cs))
;


cljs.core.async.t_cljs$core$async25297.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async25297.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25297.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25297.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25297.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25300_25524 = self__.cs;
var G__25301_25525 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25300_25524,G__25301_25525) : cljs.core.reset_BANG_.call(null,G__25300_25524,G__25301_25525));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25297.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25298], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25297";

cljs.core.async.t_cljs$core$async25297.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25297");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25297 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25297(ch__$1,cs__$1,meta25298){
return (new cljs.core.async.t_cljs$core$async25297(ch__$1,cs__$1,meta25298));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25297(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24147__auto___25526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___25526,cs,m,dchan,dctr,done){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___25526,cs,m,dchan,dctr,done){
return (function (state_25436){
var state_val_25437 = (state_25436[(1)]);
if((state_val_25437 === (7))){
var inst_25432 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25438_25527 = state_25436__$1;
(statearr_25438_25527[(2)] = inst_25432);

(statearr_25438_25527[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (20))){
var inst_25335 = (state_25436[(7)]);
var inst_25347 = cljs.core.first(inst_25335);
var inst_25348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25347,(0),null);
var inst_25349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25347,(1),null);
var state_25436__$1 = (function (){var statearr_25439 = state_25436;
(statearr_25439[(8)] = inst_25348);

return statearr_25439;
})();
if(cljs.core.truth_(inst_25349)){
var statearr_25440_25528 = state_25436__$1;
(statearr_25440_25528[(1)] = (22));

} else {
var statearr_25441_25529 = state_25436__$1;
(statearr_25441_25529[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (27))){
var inst_25384 = (state_25436[(9)]);
var inst_25379 = (state_25436[(10)]);
var inst_25304 = (state_25436[(11)]);
var inst_25377 = (state_25436[(12)]);
var inst_25384__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25377,inst_25379);
var inst_25385 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25384__$1,inst_25304,done);
var state_25436__$1 = (function (){var statearr_25442 = state_25436;
(statearr_25442[(9)] = inst_25384__$1);

return statearr_25442;
})();
if(cljs.core.truth_(inst_25385)){
var statearr_25443_25530 = state_25436__$1;
(statearr_25443_25530[(1)] = (30));

} else {
var statearr_25444_25531 = state_25436__$1;
(statearr_25444_25531[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (1))){
var state_25436__$1 = state_25436;
var statearr_25445_25532 = state_25436__$1;
(statearr_25445_25532[(2)] = null);

(statearr_25445_25532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (24))){
var inst_25335 = (state_25436[(7)]);
var inst_25354 = (state_25436[(2)]);
var inst_25355 = cljs.core.next(inst_25335);
var inst_25313 = inst_25355;
var inst_25314 = null;
var inst_25315 = (0);
var inst_25316 = (0);
var state_25436__$1 = (function (){var statearr_25446 = state_25436;
(statearr_25446[(13)] = inst_25316);

(statearr_25446[(14)] = inst_25315);

(statearr_25446[(15)] = inst_25314);

(statearr_25446[(16)] = inst_25313);

(statearr_25446[(17)] = inst_25354);

return statearr_25446;
})();
var statearr_25447_25533 = state_25436__$1;
(statearr_25447_25533[(2)] = null);

(statearr_25447_25533[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (39))){
var state_25436__$1 = state_25436;
var statearr_25451_25534 = state_25436__$1;
(statearr_25451_25534[(2)] = null);

(statearr_25451_25534[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (4))){
var inst_25304 = (state_25436[(11)]);
var inst_25304__$1 = (state_25436[(2)]);
var inst_25305 = (inst_25304__$1 == null);
var state_25436__$1 = (function (){var statearr_25452 = state_25436;
(statearr_25452[(11)] = inst_25304__$1);

return statearr_25452;
})();
if(cljs.core.truth_(inst_25305)){
var statearr_25453_25535 = state_25436__$1;
(statearr_25453_25535[(1)] = (5));

} else {
var statearr_25454_25536 = state_25436__$1;
(statearr_25454_25536[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (15))){
var inst_25316 = (state_25436[(13)]);
var inst_25315 = (state_25436[(14)]);
var inst_25314 = (state_25436[(15)]);
var inst_25313 = (state_25436[(16)]);
var inst_25331 = (state_25436[(2)]);
var inst_25332 = (inst_25316 + (1));
var tmp25448 = inst_25315;
var tmp25449 = inst_25314;
var tmp25450 = inst_25313;
var inst_25313__$1 = tmp25450;
var inst_25314__$1 = tmp25449;
var inst_25315__$1 = tmp25448;
var inst_25316__$1 = inst_25332;
var state_25436__$1 = (function (){var statearr_25455 = state_25436;
(statearr_25455[(13)] = inst_25316__$1);

(statearr_25455[(18)] = inst_25331);

(statearr_25455[(14)] = inst_25315__$1);

(statearr_25455[(15)] = inst_25314__$1);

(statearr_25455[(16)] = inst_25313__$1);

return statearr_25455;
})();
var statearr_25456_25537 = state_25436__$1;
(statearr_25456_25537[(2)] = null);

(statearr_25456_25537[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (21))){
var inst_25358 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25460_25538 = state_25436__$1;
(statearr_25460_25538[(2)] = inst_25358);

(statearr_25460_25538[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (31))){
var inst_25384 = (state_25436[(9)]);
var inst_25388 = done(null);
var inst_25389 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25384);
var state_25436__$1 = (function (){var statearr_25461 = state_25436;
(statearr_25461[(19)] = inst_25388);

return statearr_25461;
})();
var statearr_25462_25539 = state_25436__$1;
(statearr_25462_25539[(2)] = inst_25389);

(statearr_25462_25539[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (32))){
var inst_25379 = (state_25436[(10)]);
var inst_25378 = (state_25436[(20)]);
var inst_25376 = (state_25436[(21)]);
var inst_25377 = (state_25436[(12)]);
var inst_25391 = (state_25436[(2)]);
var inst_25392 = (inst_25379 + (1));
var tmp25457 = inst_25378;
var tmp25458 = inst_25376;
var tmp25459 = inst_25377;
var inst_25376__$1 = tmp25458;
var inst_25377__$1 = tmp25459;
var inst_25378__$1 = tmp25457;
var inst_25379__$1 = inst_25392;
var state_25436__$1 = (function (){var statearr_25463 = state_25436;
(statearr_25463[(10)] = inst_25379__$1);

(statearr_25463[(20)] = inst_25378__$1);

(statearr_25463[(21)] = inst_25376__$1);

(statearr_25463[(22)] = inst_25391);

(statearr_25463[(12)] = inst_25377__$1);

return statearr_25463;
})();
var statearr_25464_25540 = state_25436__$1;
(statearr_25464_25540[(2)] = null);

(statearr_25464_25540[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (40))){
var inst_25404 = (state_25436[(23)]);
var inst_25408 = done(null);
var inst_25409 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25404);
var state_25436__$1 = (function (){var statearr_25465 = state_25436;
(statearr_25465[(24)] = inst_25408);

return statearr_25465;
})();
var statearr_25466_25541 = state_25436__$1;
(statearr_25466_25541[(2)] = inst_25409);

(statearr_25466_25541[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (33))){
var inst_25395 = (state_25436[(25)]);
var inst_25397 = cljs.core.chunked_seq_QMARK_(inst_25395);
var state_25436__$1 = state_25436;
if(inst_25397){
var statearr_25467_25542 = state_25436__$1;
(statearr_25467_25542[(1)] = (36));

} else {
var statearr_25468_25543 = state_25436__$1;
(statearr_25468_25543[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (13))){
var inst_25325 = (state_25436[(26)]);
var inst_25328 = cljs.core.async.close_BANG_(inst_25325);
var state_25436__$1 = state_25436;
var statearr_25469_25544 = state_25436__$1;
(statearr_25469_25544[(2)] = inst_25328);

(statearr_25469_25544[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (22))){
var inst_25348 = (state_25436[(8)]);
var inst_25351 = cljs.core.async.close_BANG_(inst_25348);
var state_25436__$1 = state_25436;
var statearr_25470_25545 = state_25436__$1;
(statearr_25470_25545[(2)] = inst_25351);

(statearr_25470_25545[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (36))){
var inst_25395 = (state_25436[(25)]);
var inst_25399 = cljs.core.chunk_first(inst_25395);
var inst_25400 = cljs.core.chunk_rest(inst_25395);
var inst_25401 = cljs.core.count(inst_25399);
var inst_25376 = inst_25400;
var inst_25377 = inst_25399;
var inst_25378 = inst_25401;
var inst_25379 = (0);
var state_25436__$1 = (function (){var statearr_25471 = state_25436;
(statearr_25471[(10)] = inst_25379);

(statearr_25471[(20)] = inst_25378);

(statearr_25471[(21)] = inst_25376);

(statearr_25471[(12)] = inst_25377);

return statearr_25471;
})();
var statearr_25472_25546 = state_25436__$1;
(statearr_25472_25546[(2)] = null);

(statearr_25472_25546[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (41))){
var inst_25395 = (state_25436[(25)]);
var inst_25411 = (state_25436[(2)]);
var inst_25412 = cljs.core.next(inst_25395);
var inst_25376 = inst_25412;
var inst_25377 = null;
var inst_25378 = (0);
var inst_25379 = (0);
var state_25436__$1 = (function (){var statearr_25473 = state_25436;
(statearr_25473[(27)] = inst_25411);

(statearr_25473[(10)] = inst_25379);

(statearr_25473[(20)] = inst_25378);

(statearr_25473[(21)] = inst_25376);

(statearr_25473[(12)] = inst_25377);

return statearr_25473;
})();
var statearr_25474_25547 = state_25436__$1;
(statearr_25474_25547[(2)] = null);

(statearr_25474_25547[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (43))){
var state_25436__$1 = state_25436;
var statearr_25475_25548 = state_25436__$1;
(statearr_25475_25548[(2)] = null);

(statearr_25475_25548[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (29))){
var inst_25420 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25476_25549 = state_25436__$1;
(statearr_25476_25549[(2)] = inst_25420);

(statearr_25476_25549[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (44))){
var inst_25429 = (state_25436[(2)]);
var state_25436__$1 = (function (){var statearr_25477 = state_25436;
(statearr_25477[(28)] = inst_25429);

return statearr_25477;
})();
var statearr_25478_25550 = state_25436__$1;
(statearr_25478_25550[(2)] = null);

(statearr_25478_25550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (6))){
var inst_25368 = (state_25436[(29)]);
var inst_25367 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25368__$1 = cljs.core.keys(inst_25367);
var inst_25369 = cljs.core.count(inst_25368__$1);
var inst_25370 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_25369) : cljs.core.reset_BANG_.call(null,dctr,inst_25369));
var inst_25375 = cljs.core.seq(inst_25368__$1);
var inst_25376 = inst_25375;
var inst_25377 = null;
var inst_25378 = (0);
var inst_25379 = (0);
var state_25436__$1 = (function (){var statearr_25479 = state_25436;
(statearr_25479[(10)] = inst_25379);

(statearr_25479[(20)] = inst_25378);

(statearr_25479[(30)] = inst_25370);

(statearr_25479[(21)] = inst_25376);

(statearr_25479[(29)] = inst_25368__$1);

(statearr_25479[(12)] = inst_25377);

return statearr_25479;
})();
var statearr_25480_25551 = state_25436__$1;
(statearr_25480_25551[(2)] = null);

(statearr_25480_25551[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (28))){
var inst_25376 = (state_25436[(21)]);
var inst_25395 = (state_25436[(25)]);
var inst_25395__$1 = cljs.core.seq(inst_25376);
var state_25436__$1 = (function (){var statearr_25481 = state_25436;
(statearr_25481[(25)] = inst_25395__$1);

return statearr_25481;
})();
if(inst_25395__$1){
var statearr_25482_25552 = state_25436__$1;
(statearr_25482_25552[(1)] = (33));

} else {
var statearr_25483_25553 = state_25436__$1;
(statearr_25483_25553[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (25))){
var inst_25379 = (state_25436[(10)]);
var inst_25378 = (state_25436[(20)]);
var inst_25381 = (inst_25379 < inst_25378);
var inst_25382 = inst_25381;
var state_25436__$1 = state_25436;
if(cljs.core.truth_(inst_25382)){
var statearr_25484_25554 = state_25436__$1;
(statearr_25484_25554[(1)] = (27));

} else {
var statearr_25485_25555 = state_25436__$1;
(statearr_25485_25555[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (34))){
var state_25436__$1 = state_25436;
var statearr_25486_25556 = state_25436__$1;
(statearr_25486_25556[(2)] = null);

(statearr_25486_25556[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (17))){
var state_25436__$1 = state_25436;
var statearr_25487_25557 = state_25436__$1;
(statearr_25487_25557[(2)] = null);

(statearr_25487_25557[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (3))){
var inst_25434 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25436__$1,inst_25434);
} else {
if((state_val_25437 === (12))){
var inst_25363 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25488_25558 = state_25436__$1;
(statearr_25488_25558[(2)] = inst_25363);

(statearr_25488_25558[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (2))){
var state_25436__$1 = state_25436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25436__$1,(4),ch);
} else {
if((state_val_25437 === (23))){
var state_25436__$1 = state_25436;
var statearr_25489_25559 = state_25436__$1;
(statearr_25489_25559[(2)] = null);

(statearr_25489_25559[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (35))){
var inst_25418 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25490_25560 = state_25436__$1;
(statearr_25490_25560[(2)] = inst_25418);

(statearr_25490_25560[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (19))){
var inst_25335 = (state_25436[(7)]);
var inst_25339 = cljs.core.chunk_first(inst_25335);
var inst_25340 = cljs.core.chunk_rest(inst_25335);
var inst_25341 = cljs.core.count(inst_25339);
var inst_25313 = inst_25340;
var inst_25314 = inst_25339;
var inst_25315 = inst_25341;
var inst_25316 = (0);
var state_25436__$1 = (function (){var statearr_25491 = state_25436;
(statearr_25491[(13)] = inst_25316);

(statearr_25491[(14)] = inst_25315);

(statearr_25491[(15)] = inst_25314);

(statearr_25491[(16)] = inst_25313);

return statearr_25491;
})();
var statearr_25492_25561 = state_25436__$1;
(statearr_25492_25561[(2)] = null);

(statearr_25492_25561[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (11))){
var inst_25313 = (state_25436[(16)]);
var inst_25335 = (state_25436[(7)]);
var inst_25335__$1 = cljs.core.seq(inst_25313);
var state_25436__$1 = (function (){var statearr_25493 = state_25436;
(statearr_25493[(7)] = inst_25335__$1);

return statearr_25493;
})();
if(inst_25335__$1){
var statearr_25494_25562 = state_25436__$1;
(statearr_25494_25562[(1)] = (16));

} else {
var statearr_25495_25563 = state_25436__$1;
(statearr_25495_25563[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (9))){
var inst_25365 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25496_25564 = state_25436__$1;
(statearr_25496_25564[(2)] = inst_25365);

(statearr_25496_25564[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (5))){
var inst_25311 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25312 = cljs.core.seq(inst_25311);
var inst_25313 = inst_25312;
var inst_25314 = null;
var inst_25315 = (0);
var inst_25316 = (0);
var state_25436__$1 = (function (){var statearr_25497 = state_25436;
(statearr_25497[(13)] = inst_25316);

(statearr_25497[(14)] = inst_25315);

(statearr_25497[(15)] = inst_25314);

(statearr_25497[(16)] = inst_25313);

return statearr_25497;
})();
var statearr_25498_25565 = state_25436__$1;
(statearr_25498_25565[(2)] = null);

(statearr_25498_25565[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (14))){
var state_25436__$1 = state_25436;
var statearr_25499_25566 = state_25436__$1;
(statearr_25499_25566[(2)] = null);

(statearr_25499_25566[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (45))){
var inst_25426 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25500_25567 = state_25436__$1;
(statearr_25500_25567[(2)] = inst_25426);

(statearr_25500_25567[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (26))){
var inst_25368 = (state_25436[(29)]);
var inst_25422 = (state_25436[(2)]);
var inst_25423 = cljs.core.seq(inst_25368);
var state_25436__$1 = (function (){var statearr_25501 = state_25436;
(statearr_25501[(31)] = inst_25422);

return statearr_25501;
})();
if(inst_25423){
var statearr_25502_25568 = state_25436__$1;
(statearr_25502_25568[(1)] = (42));

} else {
var statearr_25503_25569 = state_25436__$1;
(statearr_25503_25569[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (16))){
var inst_25335 = (state_25436[(7)]);
var inst_25337 = cljs.core.chunked_seq_QMARK_(inst_25335);
var state_25436__$1 = state_25436;
if(inst_25337){
var statearr_25504_25570 = state_25436__$1;
(statearr_25504_25570[(1)] = (19));

} else {
var statearr_25505_25571 = state_25436__$1;
(statearr_25505_25571[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (38))){
var inst_25415 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25506_25572 = state_25436__$1;
(statearr_25506_25572[(2)] = inst_25415);

(statearr_25506_25572[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (30))){
var state_25436__$1 = state_25436;
var statearr_25507_25573 = state_25436__$1;
(statearr_25507_25573[(2)] = null);

(statearr_25507_25573[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (10))){
var inst_25316 = (state_25436[(13)]);
var inst_25314 = (state_25436[(15)]);
var inst_25324 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25314,inst_25316);
var inst_25325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25324,(0),null);
var inst_25326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25324,(1),null);
var state_25436__$1 = (function (){var statearr_25508 = state_25436;
(statearr_25508[(26)] = inst_25325);

return statearr_25508;
})();
if(cljs.core.truth_(inst_25326)){
var statearr_25509_25574 = state_25436__$1;
(statearr_25509_25574[(1)] = (13));

} else {
var statearr_25510_25575 = state_25436__$1;
(statearr_25510_25575[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (18))){
var inst_25361 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25511_25576 = state_25436__$1;
(statearr_25511_25576[(2)] = inst_25361);

(statearr_25511_25576[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (42))){
var state_25436__$1 = state_25436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25436__$1,(45),dchan);
} else {
if((state_val_25437 === (37))){
var inst_25304 = (state_25436[(11)]);
var inst_25404 = (state_25436[(23)]);
var inst_25395 = (state_25436[(25)]);
var inst_25404__$1 = cljs.core.first(inst_25395);
var inst_25405 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25404__$1,inst_25304,done);
var state_25436__$1 = (function (){var statearr_25512 = state_25436;
(statearr_25512[(23)] = inst_25404__$1);

return statearr_25512;
})();
if(cljs.core.truth_(inst_25405)){
var statearr_25513_25577 = state_25436__$1;
(statearr_25513_25577[(1)] = (39));

} else {
var statearr_25514_25578 = state_25436__$1;
(statearr_25514_25578[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25437 === (8))){
var inst_25316 = (state_25436[(13)]);
var inst_25315 = (state_25436[(14)]);
var inst_25318 = (inst_25316 < inst_25315);
var inst_25319 = inst_25318;
var state_25436__$1 = state_25436;
if(cljs.core.truth_(inst_25319)){
var statearr_25515_25579 = state_25436__$1;
(statearr_25515_25579[(1)] = (10));

} else {
var statearr_25516_25580 = state_25436__$1;
(statearr_25516_25580[(1)] = (11));

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
});})(c__24147__auto___25526,cs,m,dchan,dctr,done))
;
return ((function (switch__24021__auto__,c__24147__auto___25526,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24022__auto__ = null;
var cljs$core$async$mult_$_state_machine__24022__auto____0 = (function (){
var statearr_25520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25520[(0)] = cljs$core$async$mult_$_state_machine__24022__auto__);

(statearr_25520[(1)] = (1));

return statearr_25520;
});
var cljs$core$async$mult_$_state_machine__24022__auto____1 = (function (state_25436){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_25436);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25521){if((e25521 instanceof Object)){
var ex__24025__auto__ = e25521;
var statearr_25522_25581 = state_25436;
(statearr_25522_25581[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25436);

return cljs.core.cst$kw$recur;
} else {
throw e25521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__25582 = state_25436;
state_25436 = G__25582;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24022__auto__ = function(state_25436){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24022__auto____1.call(this,state_25436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24022__auto____0;
cljs$core$async$mult_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24022__auto____1;
return cljs$core$async$mult_$_state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___25526,cs,m,dchan,dctr,done))
})();
var state__24149__auto__ = (function (){var statearr_25523 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_25523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___25526);

return statearr_25523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___25526,cs,m,dchan,dctr,done))
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
var args25583 = [];
var len__8739__auto___25586 = arguments.length;
var i__8740__auto___25587 = (0);
while(true){
if((i__8740__auto___25587 < len__8739__auto___25586)){
args25583.push((arguments[i__8740__auto___25587]));

var G__25588 = (i__8740__auto___25587 + (1));
i__8740__auto___25587 = G__25588;
continue;
} else {
}
break;
}

var G__25585 = args25583.length;
switch (G__25585) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25583.length)].join('')));

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
var len__8739__auto___25600 = arguments.length;
var i__8740__auto___25601 = (0);
while(true){
if((i__8740__auto___25601 < len__8739__auto___25600)){
args__8746__auto__.push((arguments[i__8740__auto___25601]));

var G__25602 = (i__8740__auto___25601 + (1));
i__8740__auto___25601 = G__25602;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((3) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8747__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25594){
var map__25595 = p__25594;
var map__25595__$1 = ((((!((map__25595 == null)))?((((map__25595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25595):map__25595);
var opts = map__25595__$1;
var statearr_25597_25603 = state;
(statearr_25597_25603[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__25595,map__25595__$1,opts){
return (function (val){
var statearr_25598_25604 = state;
(statearr_25598_25604[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25595,map__25595__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_25599_25605 = state;
(statearr_25599_25605[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25590){
var G__25591 = cljs.core.first(seq25590);
var seq25590__$1 = cljs.core.next(seq25590);
var G__25592 = cljs.core.first(seq25590__$1);
var seq25590__$2 = cljs.core.next(seq25590__$1);
var G__25593 = cljs.core.first(seq25590__$2);
var seq25590__$3 = cljs.core.next(seq25590__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25591,G__25592,G__25593,seq25590__$3);
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
var cs = (function (){var G__25777 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25777) : cljs.core.atom.call(null,G__25777));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__25778 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25778) : cljs.core.atom.call(null,G__25778));
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
if(typeof cljs.core.async.t_cljs$core$async25779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25779 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25780){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25780 = meta25780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25781,meta25780__$1){
var self__ = this;
var _25781__$1 = this;
return (new cljs.core.async.t_cljs$core$async25779(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25780__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25781){
var self__ = this;
var _25781__$1 = this;
return self__.meta25780;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25782_25948 = self__.cs;
var G__25783_25949 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25782_25948,G__25783_25949) : cljs.core.reset_BANG_.call(null,G__25782_25948,G__25783_25949));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25779.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25780], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25779";

cljs.core.async.t_cljs$core$async25779.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25779");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25779 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25779(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25780){
return (new cljs.core.async.t_cljs$core$async25779(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25780));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25779(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24147__auto___25950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___25950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___25950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25885){
var state_val_25886 = (state_25885[(1)]);
if((state_val_25886 === (7))){
var inst_25800 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
var statearr_25887_25951 = state_25885__$1;
(statearr_25887_25951[(2)] = inst_25800);

(statearr_25887_25951[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (20))){
var inst_25812 = (state_25885[(7)]);
var state_25885__$1 = state_25885;
var statearr_25888_25952 = state_25885__$1;
(statearr_25888_25952[(2)] = inst_25812);

(statearr_25888_25952[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (27))){
var state_25885__$1 = state_25885;
var statearr_25889_25953 = state_25885__$1;
(statearr_25889_25953[(2)] = null);

(statearr_25889_25953[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (1))){
var inst_25787 = (state_25885[(8)]);
var inst_25787__$1 = calc_state();
var inst_25789 = (inst_25787__$1 == null);
var inst_25790 = cljs.core.not(inst_25789);
var state_25885__$1 = (function (){var statearr_25890 = state_25885;
(statearr_25890[(8)] = inst_25787__$1);

return statearr_25890;
})();
if(inst_25790){
var statearr_25891_25954 = state_25885__$1;
(statearr_25891_25954[(1)] = (2));

} else {
var statearr_25892_25955 = state_25885__$1;
(statearr_25892_25955[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (24))){
var inst_25859 = (state_25885[(9)]);
var inst_25836 = (state_25885[(10)]);
var inst_25845 = (state_25885[(11)]);
var inst_25859__$1 = (inst_25836.cljs$core$IFn$_invoke$arity$1 ? inst_25836.cljs$core$IFn$_invoke$arity$1(inst_25845) : inst_25836.call(null,inst_25845));
var state_25885__$1 = (function (){var statearr_25893 = state_25885;
(statearr_25893[(9)] = inst_25859__$1);

return statearr_25893;
})();
if(cljs.core.truth_(inst_25859__$1)){
var statearr_25894_25956 = state_25885__$1;
(statearr_25894_25956[(1)] = (29));

} else {
var statearr_25895_25957 = state_25885__$1;
(statearr_25895_25957[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (4))){
var inst_25803 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
if(cljs.core.truth_(inst_25803)){
var statearr_25896_25958 = state_25885__$1;
(statearr_25896_25958[(1)] = (8));

} else {
var statearr_25897_25959 = state_25885__$1;
(statearr_25897_25959[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (15))){
var inst_25830 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
if(cljs.core.truth_(inst_25830)){
var statearr_25898_25960 = state_25885__$1;
(statearr_25898_25960[(1)] = (19));

} else {
var statearr_25899_25961 = state_25885__$1;
(statearr_25899_25961[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (21))){
var inst_25835 = (state_25885[(12)]);
var inst_25835__$1 = (state_25885[(2)]);
var inst_25836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25835__$1,cljs.core.cst$kw$solos);
var inst_25837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25835__$1,cljs.core.cst$kw$mutes);
var inst_25838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25835__$1,cljs.core.cst$kw$reads);
var state_25885__$1 = (function (){var statearr_25900 = state_25885;
(statearr_25900[(10)] = inst_25836);

(statearr_25900[(12)] = inst_25835__$1);

(statearr_25900[(13)] = inst_25837);

return statearr_25900;
})();
return cljs.core.async.ioc_alts_BANG_(state_25885__$1,(22),inst_25838);
} else {
if((state_val_25886 === (31))){
var inst_25867 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
if(cljs.core.truth_(inst_25867)){
var statearr_25901_25962 = state_25885__$1;
(statearr_25901_25962[(1)] = (32));

} else {
var statearr_25902_25963 = state_25885__$1;
(statearr_25902_25963[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (32))){
var inst_25844 = (state_25885[(14)]);
var state_25885__$1 = state_25885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25885__$1,(35),out,inst_25844);
} else {
if((state_val_25886 === (33))){
var inst_25835 = (state_25885[(12)]);
var inst_25812 = inst_25835;
var state_25885__$1 = (function (){var statearr_25903 = state_25885;
(statearr_25903[(7)] = inst_25812);

return statearr_25903;
})();
var statearr_25904_25964 = state_25885__$1;
(statearr_25904_25964[(2)] = null);

(statearr_25904_25964[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (13))){
var inst_25812 = (state_25885[(7)]);
var inst_25819 = inst_25812.cljs$lang$protocol_mask$partition0$;
var inst_25820 = (inst_25819 & (64));
var inst_25821 = inst_25812.cljs$core$ISeq$;
var inst_25822 = (cljs.core.PROTOCOL_SENTINEL === inst_25821);
var inst_25823 = (inst_25820) || (inst_25822);
var state_25885__$1 = state_25885;
if(cljs.core.truth_(inst_25823)){
var statearr_25905_25965 = state_25885__$1;
(statearr_25905_25965[(1)] = (16));

} else {
var statearr_25906_25966 = state_25885__$1;
(statearr_25906_25966[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (22))){
var inst_25844 = (state_25885[(14)]);
var inst_25845 = (state_25885[(11)]);
var inst_25843 = (state_25885[(2)]);
var inst_25844__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25843,(0),null);
var inst_25845__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25843,(1),null);
var inst_25846 = (inst_25844__$1 == null);
var inst_25847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25845__$1,change);
var inst_25848 = (inst_25846) || (inst_25847);
var state_25885__$1 = (function (){var statearr_25907 = state_25885;
(statearr_25907[(14)] = inst_25844__$1);

(statearr_25907[(11)] = inst_25845__$1);

return statearr_25907;
})();
if(cljs.core.truth_(inst_25848)){
var statearr_25908_25967 = state_25885__$1;
(statearr_25908_25967[(1)] = (23));

} else {
var statearr_25909_25968 = state_25885__$1;
(statearr_25909_25968[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (36))){
var inst_25835 = (state_25885[(12)]);
var inst_25812 = inst_25835;
var state_25885__$1 = (function (){var statearr_25910 = state_25885;
(statearr_25910[(7)] = inst_25812);

return statearr_25910;
})();
var statearr_25911_25969 = state_25885__$1;
(statearr_25911_25969[(2)] = null);

(statearr_25911_25969[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (29))){
var inst_25859 = (state_25885[(9)]);
var state_25885__$1 = state_25885;
var statearr_25912_25970 = state_25885__$1;
(statearr_25912_25970[(2)] = inst_25859);

(statearr_25912_25970[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (6))){
var state_25885__$1 = state_25885;
var statearr_25913_25971 = state_25885__$1;
(statearr_25913_25971[(2)] = false);

(statearr_25913_25971[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (28))){
var inst_25855 = (state_25885[(2)]);
var inst_25856 = calc_state();
var inst_25812 = inst_25856;
var state_25885__$1 = (function (){var statearr_25914 = state_25885;
(statearr_25914[(15)] = inst_25855);

(statearr_25914[(7)] = inst_25812);

return statearr_25914;
})();
var statearr_25915_25972 = state_25885__$1;
(statearr_25915_25972[(2)] = null);

(statearr_25915_25972[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (25))){
var inst_25881 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
var statearr_25916_25973 = state_25885__$1;
(statearr_25916_25973[(2)] = inst_25881);

(statearr_25916_25973[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (34))){
var inst_25879 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
var statearr_25917_25974 = state_25885__$1;
(statearr_25917_25974[(2)] = inst_25879);

(statearr_25917_25974[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (17))){
var state_25885__$1 = state_25885;
var statearr_25918_25975 = state_25885__$1;
(statearr_25918_25975[(2)] = false);

(statearr_25918_25975[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (3))){
var state_25885__$1 = state_25885;
var statearr_25919_25976 = state_25885__$1;
(statearr_25919_25976[(2)] = false);

(statearr_25919_25976[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (12))){
var inst_25883 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25885__$1,inst_25883);
} else {
if((state_val_25886 === (2))){
var inst_25787 = (state_25885[(8)]);
var inst_25792 = inst_25787.cljs$lang$protocol_mask$partition0$;
var inst_25793 = (inst_25792 & (64));
var inst_25794 = inst_25787.cljs$core$ISeq$;
var inst_25795 = (cljs.core.PROTOCOL_SENTINEL === inst_25794);
var inst_25796 = (inst_25793) || (inst_25795);
var state_25885__$1 = state_25885;
if(cljs.core.truth_(inst_25796)){
var statearr_25920_25977 = state_25885__$1;
(statearr_25920_25977[(1)] = (5));

} else {
var statearr_25921_25978 = state_25885__$1;
(statearr_25921_25978[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (23))){
var inst_25844 = (state_25885[(14)]);
var inst_25850 = (inst_25844 == null);
var state_25885__$1 = state_25885;
if(cljs.core.truth_(inst_25850)){
var statearr_25922_25979 = state_25885__$1;
(statearr_25922_25979[(1)] = (26));

} else {
var statearr_25923_25980 = state_25885__$1;
(statearr_25923_25980[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (35))){
var inst_25870 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
if(cljs.core.truth_(inst_25870)){
var statearr_25924_25981 = state_25885__$1;
(statearr_25924_25981[(1)] = (36));

} else {
var statearr_25925_25982 = state_25885__$1;
(statearr_25925_25982[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (19))){
var inst_25812 = (state_25885[(7)]);
var inst_25832 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25812);
var state_25885__$1 = state_25885;
var statearr_25926_25983 = state_25885__$1;
(statearr_25926_25983[(2)] = inst_25832);

(statearr_25926_25983[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (11))){
var inst_25812 = (state_25885[(7)]);
var inst_25816 = (inst_25812 == null);
var inst_25817 = cljs.core.not(inst_25816);
var state_25885__$1 = state_25885;
if(inst_25817){
var statearr_25927_25984 = state_25885__$1;
(statearr_25927_25984[(1)] = (13));

} else {
var statearr_25928_25985 = state_25885__$1;
(statearr_25928_25985[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (9))){
var inst_25787 = (state_25885[(8)]);
var state_25885__$1 = state_25885;
var statearr_25929_25986 = state_25885__$1;
(statearr_25929_25986[(2)] = inst_25787);

(statearr_25929_25986[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (5))){
var state_25885__$1 = state_25885;
var statearr_25930_25987 = state_25885__$1;
(statearr_25930_25987[(2)] = true);

(statearr_25930_25987[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (14))){
var state_25885__$1 = state_25885;
var statearr_25931_25988 = state_25885__$1;
(statearr_25931_25988[(2)] = false);

(statearr_25931_25988[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (26))){
var inst_25845 = (state_25885[(11)]);
var inst_25852 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25845);
var state_25885__$1 = state_25885;
var statearr_25932_25989 = state_25885__$1;
(statearr_25932_25989[(2)] = inst_25852);

(statearr_25932_25989[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (16))){
var state_25885__$1 = state_25885;
var statearr_25933_25990 = state_25885__$1;
(statearr_25933_25990[(2)] = true);

(statearr_25933_25990[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (38))){
var inst_25875 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
var statearr_25934_25991 = state_25885__$1;
(statearr_25934_25991[(2)] = inst_25875);

(statearr_25934_25991[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (30))){
var inst_25836 = (state_25885[(10)]);
var inst_25837 = (state_25885[(13)]);
var inst_25845 = (state_25885[(11)]);
var inst_25862 = cljs.core.empty_QMARK_(inst_25836);
var inst_25863 = (inst_25837.cljs$core$IFn$_invoke$arity$1 ? inst_25837.cljs$core$IFn$_invoke$arity$1(inst_25845) : inst_25837.call(null,inst_25845));
var inst_25864 = cljs.core.not(inst_25863);
var inst_25865 = (inst_25862) && (inst_25864);
var state_25885__$1 = state_25885;
var statearr_25935_25992 = state_25885__$1;
(statearr_25935_25992[(2)] = inst_25865);

(statearr_25935_25992[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (10))){
var inst_25787 = (state_25885[(8)]);
var inst_25808 = (state_25885[(2)]);
var inst_25809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25808,cljs.core.cst$kw$solos);
var inst_25810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25808,cljs.core.cst$kw$mutes);
var inst_25811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25808,cljs.core.cst$kw$reads);
var inst_25812 = inst_25787;
var state_25885__$1 = (function (){var statearr_25936 = state_25885;
(statearr_25936[(16)] = inst_25811);

(statearr_25936[(17)] = inst_25810);

(statearr_25936[(7)] = inst_25812);

(statearr_25936[(18)] = inst_25809);

return statearr_25936;
})();
var statearr_25937_25993 = state_25885__$1;
(statearr_25937_25993[(2)] = null);

(statearr_25937_25993[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (18))){
var inst_25827 = (state_25885[(2)]);
var state_25885__$1 = state_25885;
var statearr_25938_25994 = state_25885__$1;
(statearr_25938_25994[(2)] = inst_25827);

(statearr_25938_25994[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (37))){
var state_25885__$1 = state_25885;
var statearr_25939_25995 = state_25885__$1;
(statearr_25939_25995[(2)] = null);

(statearr_25939_25995[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25886 === (8))){
var inst_25787 = (state_25885[(8)]);
var inst_25805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25787);
var state_25885__$1 = state_25885;
var statearr_25940_25996 = state_25885__$1;
(statearr_25940_25996[(2)] = inst_25805);

(statearr_25940_25996[(1)] = (10));


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
});})(c__24147__auto___25950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24021__auto__,c__24147__auto___25950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24022__auto__ = null;
var cljs$core$async$mix_$_state_machine__24022__auto____0 = (function (){
var statearr_25944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25944[(0)] = cljs$core$async$mix_$_state_machine__24022__auto__);

(statearr_25944[(1)] = (1));

return statearr_25944;
});
var cljs$core$async$mix_$_state_machine__24022__auto____1 = (function (state_25885){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_25885);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e25945){if((e25945 instanceof Object)){
var ex__24025__auto__ = e25945;
var statearr_25946_25997 = state_25885;
(statearr_25946_25997[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25885);

return cljs.core.cst$kw$recur;
} else {
throw e25945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__25998 = state_25885;
state_25885 = G__25998;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24022__auto__ = function(state_25885){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24022__auto____1.call(this,state_25885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24022__auto____0;
cljs$core$async$mix_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24022__auto____1;
return cljs$core$async$mix_$_state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___25950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24149__auto__ = (function (){var statearr_25947 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_25947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___25950);

return statearr_25947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___25950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25999 = [];
var len__8739__auto___26002 = arguments.length;
var i__8740__auto___26003 = (0);
while(true){
if((i__8740__auto___26003 < len__8739__auto___26002)){
args25999.push((arguments[i__8740__auto___26003]));

var G__26004 = (i__8740__auto___26003 + (1));
i__8740__auto___26003 = G__26004;
continue;
} else {
}
break;
}

var G__26001 = args25999.length;
switch (G__26001) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25999.length)].join('')));

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
var args26007 = [];
var len__8739__auto___26135 = arguments.length;
var i__8740__auto___26136 = (0);
while(true){
if((i__8740__auto___26136 < len__8739__auto___26135)){
args26007.push((arguments[i__8740__auto___26136]));

var G__26137 = (i__8740__auto___26136 + (1));
i__8740__auto___26136 = G__26137;
continue;
} else {
}
break;
}

var G__26009 = args26007.length;
switch (G__26009) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26007.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__26010 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26010) : cljs.core.atom.call(null,G__26010));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7523__auto__,mults){
return (function (p1__26006_SHARP_){
if(cljs.core.truth_((p1__26006_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26006_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26006_SHARP_.call(null,topic)))){
return p1__26006_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26006_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7523__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26011 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26012){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26012 = meta26012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26013,meta26012__$1){
var self__ = this;
var _26013__$1 = this;
return (new cljs.core.async.t_cljs$core$async26011(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26012__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26013){
var self__ = this;
var _26013__$1 = this;
return self__.meta26012;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26014 = self__.mults;
var G__26015 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26014,G__26015) : cljs.core.reset_BANG_.call(null,G__26014,G__26015));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26011.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta26012], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26011";

cljs.core.async.t_cljs$core$async26011.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26011");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26011 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26011(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26012){
return (new cljs.core.async.t_cljs$core$async26011(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26012));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26011(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24147__auto___26139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___26139,mults,ensure_mult,p){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___26139,mults,ensure_mult,p){
return (function (state_26087){
var state_val_26088 = (state_26087[(1)]);
if((state_val_26088 === (7))){
var inst_26083 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26089_26140 = state_26087__$1;
(statearr_26089_26140[(2)] = inst_26083);

(statearr_26089_26140[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (20))){
var state_26087__$1 = state_26087;
var statearr_26090_26141 = state_26087__$1;
(statearr_26090_26141[(2)] = null);

(statearr_26090_26141[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (1))){
var state_26087__$1 = state_26087;
var statearr_26091_26142 = state_26087__$1;
(statearr_26091_26142[(2)] = null);

(statearr_26091_26142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (24))){
var inst_26066 = (state_26087[(7)]);
var inst_26075 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26066);
var state_26087__$1 = state_26087;
var statearr_26092_26143 = state_26087__$1;
(statearr_26092_26143[(2)] = inst_26075);

(statearr_26092_26143[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (4))){
var inst_26018 = (state_26087[(8)]);
var inst_26018__$1 = (state_26087[(2)]);
var inst_26019 = (inst_26018__$1 == null);
var state_26087__$1 = (function (){var statearr_26093 = state_26087;
(statearr_26093[(8)] = inst_26018__$1);

return statearr_26093;
})();
if(cljs.core.truth_(inst_26019)){
var statearr_26094_26144 = state_26087__$1;
(statearr_26094_26144[(1)] = (5));

} else {
var statearr_26095_26145 = state_26087__$1;
(statearr_26095_26145[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (15))){
var inst_26060 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26096_26146 = state_26087__$1;
(statearr_26096_26146[(2)] = inst_26060);

(statearr_26096_26146[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (21))){
var inst_26080 = (state_26087[(2)]);
var state_26087__$1 = (function (){var statearr_26097 = state_26087;
(statearr_26097[(9)] = inst_26080);

return statearr_26097;
})();
var statearr_26098_26147 = state_26087__$1;
(statearr_26098_26147[(2)] = null);

(statearr_26098_26147[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (13))){
var inst_26042 = (state_26087[(10)]);
var inst_26044 = cljs.core.chunked_seq_QMARK_(inst_26042);
var state_26087__$1 = state_26087;
if(inst_26044){
var statearr_26099_26148 = state_26087__$1;
(statearr_26099_26148[(1)] = (16));

} else {
var statearr_26100_26149 = state_26087__$1;
(statearr_26100_26149[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (22))){
var inst_26072 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
if(cljs.core.truth_(inst_26072)){
var statearr_26101_26150 = state_26087__$1;
(statearr_26101_26150[(1)] = (23));

} else {
var statearr_26102_26151 = state_26087__$1;
(statearr_26102_26151[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (6))){
var inst_26066 = (state_26087[(7)]);
var inst_26018 = (state_26087[(8)]);
var inst_26068 = (state_26087[(11)]);
var inst_26066__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26018) : topic_fn.call(null,inst_26018));
var inst_26067 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_26068__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26067,inst_26066__$1);
var state_26087__$1 = (function (){var statearr_26103 = state_26087;
(statearr_26103[(7)] = inst_26066__$1);

(statearr_26103[(11)] = inst_26068__$1);

return statearr_26103;
})();
if(cljs.core.truth_(inst_26068__$1)){
var statearr_26104_26152 = state_26087__$1;
(statearr_26104_26152[(1)] = (19));

} else {
var statearr_26105_26153 = state_26087__$1;
(statearr_26105_26153[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (25))){
var inst_26077 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26106_26154 = state_26087__$1;
(statearr_26106_26154[(2)] = inst_26077);

(statearr_26106_26154[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (17))){
var inst_26042 = (state_26087[(10)]);
var inst_26051 = cljs.core.first(inst_26042);
var inst_26052 = cljs.core.async.muxch_STAR_(inst_26051);
var inst_26053 = cljs.core.async.close_BANG_(inst_26052);
var inst_26054 = cljs.core.next(inst_26042);
var inst_26028 = inst_26054;
var inst_26029 = null;
var inst_26030 = (0);
var inst_26031 = (0);
var state_26087__$1 = (function (){var statearr_26107 = state_26087;
(statearr_26107[(12)] = inst_26031);

(statearr_26107[(13)] = inst_26030);

(statearr_26107[(14)] = inst_26053);

(statearr_26107[(15)] = inst_26029);

(statearr_26107[(16)] = inst_26028);

return statearr_26107;
})();
var statearr_26108_26155 = state_26087__$1;
(statearr_26108_26155[(2)] = null);

(statearr_26108_26155[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (3))){
var inst_26085 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26087__$1,inst_26085);
} else {
if((state_val_26088 === (12))){
var inst_26062 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26109_26156 = state_26087__$1;
(statearr_26109_26156[(2)] = inst_26062);

(statearr_26109_26156[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (2))){
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26087__$1,(4),ch);
} else {
if((state_val_26088 === (23))){
var state_26087__$1 = state_26087;
var statearr_26110_26157 = state_26087__$1;
(statearr_26110_26157[(2)] = null);

(statearr_26110_26157[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (19))){
var inst_26018 = (state_26087[(8)]);
var inst_26068 = (state_26087[(11)]);
var inst_26070 = cljs.core.async.muxch_STAR_(inst_26068);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26087__$1,(22),inst_26070,inst_26018);
} else {
if((state_val_26088 === (11))){
var inst_26042 = (state_26087[(10)]);
var inst_26028 = (state_26087[(16)]);
var inst_26042__$1 = cljs.core.seq(inst_26028);
var state_26087__$1 = (function (){var statearr_26111 = state_26087;
(statearr_26111[(10)] = inst_26042__$1);

return statearr_26111;
})();
if(inst_26042__$1){
var statearr_26112_26158 = state_26087__$1;
(statearr_26112_26158[(1)] = (13));

} else {
var statearr_26113_26159 = state_26087__$1;
(statearr_26113_26159[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (9))){
var inst_26064 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26114_26160 = state_26087__$1;
(statearr_26114_26160[(2)] = inst_26064);

(statearr_26114_26160[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (5))){
var inst_26025 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_26026 = cljs.core.vals(inst_26025);
var inst_26027 = cljs.core.seq(inst_26026);
var inst_26028 = inst_26027;
var inst_26029 = null;
var inst_26030 = (0);
var inst_26031 = (0);
var state_26087__$1 = (function (){var statearr_26115 = state_26087;
(statearr_26115[(12)] = inst_26031);

(statearr_26115[(13)] = inst_26030);

(statearr_26115[(15)] = inst_26029);

(statearr_26115[(16)] = inst_26028);

return statearr_26115;
})();
var statearr_26116_26161 = state_26087__$1;
(statearr_26116_26161[(2)] = null);

(statearr_26116_26161[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (14))){
var state_26087__$1 = state_26087;
var statearr_26120_26162 = state_26087__$1;
(statearr_26120_26162[(2)] = null);

(statearr_26120_26162[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (16))){
var inst_26042 = (state_26087[(10)]);
var inst_26046 = cljs.core.chunk_first(inst_26042);
var inst_26047 = cljs.core.chunk_rest(inst_26042);
var inst_26048 = cljs.core.count(inst_26046);
var inst_26028 = inst_26047;
var inst_26029 = inst_26046;
var inst_26030 = inst_26048;
var inst_26031 = (0);
var state_26087__$1 = (function (){var statearr_26121 = state_26087;
(statearr_26121[(12)] = inst_26031);

(statearr_26121[(13)] = inst_26030);

(statearr_26121[(15)] = inst_26029);

(statearr_26121[(16)] = inst_26028);

return statearr_26121;
})();
var statearr_26122_26163 = state_26087__$1;
(statearr_26122_26163[(2)] = null);

(statearr_26122_26163[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (10))){
var inst_26031 = (state_26087[(12)]);
var inst_26030 = (state_26087[(13)]);
var inst_26029 = (state_26087[(15)]);
var inst_26028 = (state_26087[(16)]);
var inst_26036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26029,inst_26031);
var inst_26037 = cljs.core.async.muxch_STAR_(inst_26036);
var inst_26038 = cljs.core.async.close_BANG_(inst_26037);
var inst_26039 = (inst_26031 + (1));
var tmp26117 = inst_26030;
var tmp26118 = inst_26029;
var tmp26119 = inst_26028;
var inst_26028__$1 = tmp26119;
var inst_26029__$1 = tmp26118;
var inst_26030__$1 = tmp26117;
var inst_26031__$1 = inst_26039;
var state_26087__$1 = (function (){var statearr_26123 = state_26087;
(statearr_26123[(12)] = inst_26031__$1);

(statearr_26123[(13)] = inst_26030__$1);

(statearr_26123[(17)] = inst_26038);

(statearr_26123[(15)] = inst_26029__$1);

(statearr_26123[(16)] = inst_26028__$1);

return statearr_26123;
})();
var statearr_26124_26164 = state_26087__$1;
(statearr_26124_26164[(2)] = null);

(statearr_26124_26164[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (18))){
var inst_26057 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26125_26165 = state_26087__$1;
(statearr_26125_26165[(2)] = inst_26057);

(statearr_26125_26165[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26088 === (8))){
var inst_26031 = (state_26087[(12)]);
var inst_26030 = (state_26087[(13)]);
var inst_26033 = (inst_26031 < inst_26030);
var inst_26034 = inst_26033;
var state_26087__$1 = state_26087;
if(cljs.core.truth_(inst_26034)){
var statearr_26126_26166 = state_26087__$1;
(statearr_26126_26166[(1)] = (10));

} else {
var statearr_26127_26167 = state_26087__$1;
(statearr_26127_26167[(1)] = (11));

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
});})(c__24147__auto___26139,mults,ensure_mult,p))
;
return ((function (switch__24021__auto__,c__24147__auto___26139,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_26131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26131[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_26131[(1)] = (1));

return statearr_26131;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_26087){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26087);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26132){if((e26132 instanceof Object)){
var ex__24025__auto__ = e26132;
var statearr_26133_26168 = state_26087;
(statearr_26133_26168[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26087);

return cljs.core.cst$kw$recur;
} else {
throw e26132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__26169 = state_26087;
state_26087 = G__26169;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_26087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_26087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___26139,mults,ensure_mult,p))
})();
var state__24149__auto__ = (function (){var statearr_26134 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___26139);

return statearr_26134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___26139,mults,ensure_mult,p))
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
var args26170 = [];
var len__8739__auto___26173 = arguments.length;
var i__8740__auto___26174 = (0);
while(true){
if((i__8740__auto___26174 < len__8739__auto___26173)){
args26170.push((arguments[i__8740__auto___26174]));

var G__26175 = (i__8740__auto___26174 + (1));
i__8740__auto___26174 = G__26175;
continue;
} else {
}
break;
}

var G__26172 = args26170.length;
switch (G__26172) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26170.length)].join('')));

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
var args26177 = [];
var len__8739__auto___26180 = arguments.length;
var i__8740__auto___26181 = (0);
while(true){
if((i__8740__auto___26181 < len__8739__auto___26180)){
args26177.push((arguments[i__8740__auto___26181]));

var G__26182 = (i__8740__auto___26181 + (1));
i__8740__auto___26181 = G__26182;
continue;
} else {
}
break;
}

var G__26179 = args26177.length;
switch (G__26179) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26177.length)].join('')));

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
var args26184 = [];
var len__8739__auto___26255 = arguments.length;
var i__8740__auto___26256 = (0);
while(true){
if((i__8740__auto___26256 < len__8739__auto___26255)){
args26184.push((arguments[i__8740__auto___26256]));

var G__26257 = (i__8740__auto___26256 + (1));
i__8740__auto___26256 = G__26257;
continue;
} else {
}
break;
}

var G__26186 = args26184.length;
switch (G__26186) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26184.length)].join('')));

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
var c__24147__auto___26259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___26259,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___26259,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26225){
var state_val_26226 = (state_26225[(1)]);
if((state_val_26226 === (7))){
var state_26225__$1 = state_26225;
var statearr_26227_26260 = state_26225__$1;
(statearr_26227_26260[(2)] = null);

(statearr_26227_26260[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (1))){
var state_26225__$1 = state_26225;
var statearr_26228_26261 = state_26225__$1;
(statearr_26228_26261[(2)] = null);

(statearr_26228_26261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (4))){
var inst_26189 = (state_26225[(7)]);
var inst_26191 = (inst_26189 < cnt);
var state_26225__$1 = state_26225;
if(cljs.core.truth_(inst_26191)){
var statearr_26229_26262 = state_26225__$1;
(statearr_26229_26262[(1)] = (6));

} else {
var statearr_26230_26263 = state_26225__$1;
(statearr_26230_26263[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (15))){
var inst_26221 = (state_26225[(2)]);
var state_26225__$1 = state_26225;
var statearr_26231_26264 = state_26225__$1;
(statearr_26231_26264[(2)] = inst_26221);

(statearr_26231_26264[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (13))){
var inst_26214 = cljs.core.async.close_BANG_(out);
var state_26225__$1 = state_26225;
var statearr_26232_26265 = state_26225__$1;
(statearr_26232_26265[(2)] = inst_26214);

(statearr_26232_26265[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (6))){
var state_26225__$1 = state_26225;
var statearr_26233_26266 = state_26225__$1;
(statearr_26233_26266[(2)] = null);

(statearr_26233_26266[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (3))){
var inst_26223 = (state_26225[(2)]);
var state_26225__$1 = state_26225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26225__$1,inst_26223);
} else {
if((state_val_26226 === (12))){
var inst_26211 = (state_26225[(8)]);
var inst_26211__$1 = (state_26225[(2)]);
var inst_26212 = cljs.core.some(cljs.core.nil_QMARK_,inst_26211__$1);
var state_26225__$1 = (function (){var statearr_26234 = state_26225;
(statearr_26234[(8)] = inst_26211__$1);

return statearr_26234;
})();
if(cljs.core.truth_(inst_26212)){
var statearr_26235_26267 = state_26225__$1;
(statearr_26235_26267[(1)] = (13));

} else {
var statearr_26236_26268 = state_26225__$1;
(statearr_26236_26268[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (2))){
var inst_26188 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_26189 = (0);
var state_26225__$1 = (function (){var statearr_26237 = state_26225;
(statearr_26237[(7)] = inst_26189);

(statearr_26237[(9)] = inst_26188);

return statearr_26237;
})();
var statearr_26238_26269 = state_26225__$1;
(statearr_26238_26269[(2)] = null);

(statearr_26238_26269[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (11))){
var inst_26189 = (state_26225[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26225,(10),Object,null,(9));
var inst_26198 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26189) : chs__$1.call(null,inst_26189));
var inst_26199 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26189) : done.call(null,inst_26189));
var inst_26200 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26198,inst_26199);
var state_26225__$1 = state_26225;
var statearr_26239_26270 = state_26225__$1;
(statearr_26239_26270[(2)] = inst_26200);


cljs.core.async.impl.ioc_helpers.process_exception(state_26225__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (9))){
var inst_26189 = (state_26225[(7)]);
var inst_26202 = (state_26225[(2)]);
var inst_26203 = (inst_26189 + (1));
var inst_26189__$1 = inst_26203;
var state_26225__$1 = (function (){var statearr_26240 = state_26225;
(statearr_26240[(10)] = inst_26202);

(statearr_26240[(7)] = inst_26189__$1);

return statearr_26240;
})();
var statearr_26241_26271 = state_26225__$1;
(statearr_26241_26271[(2)] = null);

(statearr_26241_26271[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (5))){
var inst_26209 = (state_26225[(2)]);
var state_26225__$1 = (function (){var statearr_26242 = state_26225;
(statearr_26242[(11)] = inst_26209);

return statearr_26242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26225__$1,(12),dchan);
} else {
if((state_val_26226 === (14))){
var inst_26211 = (state_26225[(8)]);
var inst_26216 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26211);
var state_26225__$1 = state_26225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26225__$1,(16),out,inst_26216);
} else {
if((state_val_26226 === (16))){
var inst_26218 = (state_26225[(2)]);
var state_26225__$1 = (function (){var statearr_26243 = state_26225;
(statearr_26243[(12)] = inst_26218);

return statearr_26243;
})();
var statearr_26244_26272 = state_26225__$1;
(statearr_26244_26272[(2)] = null);

(statearr_26244_26272[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (10))){
var inst_26193 = (state_26225[(2)]);
var inst_26194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26225__$1 = (function (){var statearr_26245 = state_26225;
(statearr_26245[(13)] = inst_26193);

return statearr_26245;
})();
var statearr_26246_26273 = state_26225__$1;
(statearr_26246_26273[(2)] = inst_26194);


cljs.core.async.impl.ioc_helpers.process_exception(state_26225__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26226 === (8))){
var inst_26207 = (state_26225[(2)]);
var state_26225__$1 = state_26225;
var statearr_26247_26274 = state_26225__$1;
(statearr_26247_26274[(2)] = inst_26207);

(statearr_26247_26274[(1)] = (5));


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
});})(c__24147__auto___26259,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24021__auto__,c__24147__auto___26259,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_26251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26251[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_26251[(1)] = (1));

return statearr_26251;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_26225){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26225);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26252){if((e26252 instanceof Object)){
var ex__24025__auto__ = e26252;
var statearr_26253_26275 = state_26225;
(statearr_26253_26275[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26225);

return cljs.core.cst$kw$recur;
} else {
throw e26252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__26276 = state_26225;
state_26225 = G__26276;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_26225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_26225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___26259,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24149__auto__ = (function (){var statearr_26254 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___26259);

return statearr_26254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___26259,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26278 = [];
var len__8739__auto___26336 = arguments.length;
var i__8740__auto___26337 = (0);
while(true){
if((i__8740__auto___26337 < len__8739__auto___26336)){
args26278.push((arguments[i__8740__auto___26337]));

var G__26338 = (i__8740__auto___26337 + (1));
i__8740__auto___26337 = G__26338;
continue;
} else {
}
break;
}

var G__26280 = args26278.length;
switch (G__26280) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26278.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24147__auto___26340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___26340,out){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___26340,out){
return (function (state_26312){
var state_val_26313 = (state_26312[(1)]);
if((state_val_26313 === (7))){
var inst_26292 = (state_26312[(7)]);
var inst_26291 = (state_26312[(8)]);
var inst_26291__$1 = (state_26312[(2)]);
var inst_26292__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26291__$1,(0),null);
var inst_26293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26291__$1,(1),null);
var inst_26294 = (inst_26292__$1 == null);
var state_26312__$1 = (function (){var statearr_26314 = state_26312;
(statearr_26314[(9)] = inst_26293);

(statearr_26314[(7)] = inst_26292__$1);

(statearr_26314[(8)] = inst_26291__$1);

return statearr_26314;
})();
if(cljs.core.truth_(inst_26294)){
var statearr_26315_26341 = state_26312__$1;
(statearr_26315_26341[(1)] = (8));

} else {
var statearr_26316_26342 = state_26312__$1;
(statearr_26316_26342[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26313 === (1))){
var inst_26281 = cljs.core.vec(chs);
var inst_26282 = inst_26281;
var state_26312__$1 = (function (){var statearr_26317 = state_26312;
(statearr_26317[(10)] = inst_26282);

return statearr_26317;
})();
var statearr_26318_26343 = state_26312__$1;
(statearr_26318_26343[(2)] = null);

(statearr_26318_26343[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26313 === (4))){
var inst_26282 = (state_26312[(10)]);
var state_26312__$1 = state_26312;
return cljs.core.async.ioc_alts_BANG_(state_26312__$1,(7),inst_26282);
} else {
if((state_val_26313 === (6))){
var inst_26308 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26319_26344 = state_26312__$1;
(statearr_26319_26344[(2)] = inst_26308);

(statearr_26319_26344[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26313 === (3))){
var inst_26310 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26312__$1,inst_26310);
} else {
if((state_val_26313 === (2))){
var inst_26282 = (state_26312[(10)]);
var inst_26284 = cljs.core.count(inst_26282);
var inst_26285 = (inst_26284 > (0));
var state_26312__$1 = state_26312;
if(cljs.core.truth_(inst_26285)){
var statearr_26321_26345 = state_26312__$1;
(statearr_26321_26345[(1)] = (4));

} else {
var statearr_26322_26346 = state_26312__$1;
(statearr_26322_26346[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26313 === (11))){
var inst_26282 = (state_26312[(10)]);
var inst_26301 = (state_26312[(2)]);
var tmp26320 = inst_26282;
var inst_26282__$1 = tmp26320;
var state_26312__$1 = (function (){var statearr_26323 = state_26312;
(statearr_26323[(11)] = inst_26301);

(statearr_26323[(10)] = inst_26282__$1);

return statearr_26323;
})();
var statearr_26324_26347 = state_26312__$1;
(statearr_26324_26347[(2)] = null);

(statearr_26324_26347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26313 === (9))){
var inst_26292 = (state_26312[(7)]);
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26312__$1,(11),out,inst_26292);
} else {
if((state_val_26313 === (5))){
var inst_26306 = cljs.core.async.close_BANG_(out);
var state_26312__$1 = state_26312;
var statearr_26325_26348 = state_26312__$1;
(statearr_26325_26348[(2)] = inst_26306);

(statearr_26325_26348[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26313 === (10))){
var inst_26304 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26326_26349 = state_26312__$1;
(statearr_26326_26349[(2)] = inst_26304);

(statearr_26326_26349[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26313 === (8))){
var inst_26282 = (state_26312[(10)]);
var inst_26293 = (state_26312[(9)]);
var inst_26292 = (state_26312[(7)]);
var inst_26291 = (state_26312[(8)]);
var inst_26296 = (function (){var cs = inst_26282;
var vec__26287 = inst_26291;
var v = inst_26292;
var c = inst_26293;
return ((function (cs,vec__26287,v,c,inst_26282,inst_26293,inst_26292,inst_26291,state_val_26313,c__24147__auto___26340,out){
return (function (p1__26277_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26277_SHARP_);
});
;})(cs,vec__26287,v,c,inst_26282,inst_26293,inst_26292,inst_26291,state_val_26313,c__24147__auto___26340,out))
})();
var inst_26297 = cljs.core.filterv(inst_26296,inst_26282);
var inst_26282__$1 = inst_26297;
var state_26312__$1 = (function (){var statearr_26327 = state_26312;
(statearr_26327[(10)] = inst_26282__$1);

return statearr_26327;
})();
var statearr_26328_26350 = state_26312__$1;
(statearr_26328_26350[(2)] = null);

(statearr_26328_26350[(1)] = (2));


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
});})(c__24147__auto___26340,out))
;
return ((function (switch__24021__auto__,c__24147__auto___26340,out){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_26332 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26332[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_26332[(1)] = (1));

return statearr_26332;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_26312){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26312);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26333){if((e26333 instanceof Object)){
var ex__24025__auto__ = e26333;
var statearr_26334_26351 = state_26312;
(statearr_26334_26351[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26312);

return cljs.core.cst$kw$recur;
} else {
throw e26333;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__26352 = state_26312;
state_26312 = G__26352;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_26312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_26312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___26340,out))
})();
var state__24149__auto__ = (function (){var statearr_26335 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___26340);

return statearr_26335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___26340,out))
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
var args26353 = [];
var len__8739__auto___26402 = arguments.length;
var i__8740__auto___26403 = (0);
while(true){
if((i__8740__auto___26403 < len__8739__auto___26402)){
args26353.push((arguments[i__8740__auto___26403]));

var G__26404 = (i__8740__auto___26403 + (1));
i__8740__auto___26403 = G__26404;
continue;
} else {
}
break;
}

var G__26355 = args26353.length;
switch (G__26355) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26353.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24147__auto___26406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___26406,out){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___26406,out){
return (function (state_26379){
var state_val_26380 = (state_26379[(1)]);
if((state_val_26380 === (7))){
var inst_26361 = (state_26379[(7)]);
var inst_26361__$1 = (state_26379[(2)]);
var inst_26362 = (inst_26361__$1 == null);
var inst_26363 = cljs.core.not(inst_26362);
var state_26379__$1 = (function (){var statearr_26381 = state_26379;
(statearr_26381[(7)] = inst_26361__$1);

return statearr_26381;
})();
if(inst_26363){
var statearr_26382_26407 = state_26379__$1;
(statearr_26382_26407[(1)] = (8));

} else {
var statearr_26383_26408 = state_26379__$1;
(statearr_26383_26408[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26380 === (1))){
var inst_26356 = (0);
var state_26379__$1 = (function (){var statearr_26384 = state_26379;
(statearr_26384[(8)] = inst_26356);

return statearr_26384;
})();
var statearr_26385_26409 = state_26379__$1;
(statearr_26385_26409[(2)] = null);

(statearr_26385_26409[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26380 === (4))){
var state_26379__$1 = state_26379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26379__$1,(7),ch);
} else {
if((state_val_26380 === (6))){
var inst_26374 = (state_26379[(2)]);
var state_26379__$1 = state_26379;
var statearr_26386_26410 = state_26379__$1;
(statearr_26386_26410[(2)] = inst_26374);

(statearr_26386_26410[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26380 === (3))){
var inst_26376 = (state_26379[(2)]);
var inst_26377 = cljs.core.async.close_BANG_(out);
var state_26379__$1 = (function (){var statearr_26387 = state_26379;
(statearr_26387[(9)] = inst_26376);

return statearr_26387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26379__$1,inst_26377);
} else {
if((state_val_26380 === (2))){
var inst_26356 = (state_26379[(8)]);
var inst_26358 = (inst_26356 < n);
var state_26379__$1 = state_26379;
if(cljs.core.truth_(inst_26358)){
var statearr_26388_26411 = state_26379__$1;
(statearr_26388_26411[(1)] = (4));

} else {
var statearr_26389_26412 = state_26379__$1;
(statearr_26389_26412[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26380 === (11))){
var inst_26356 = (state_26379[(8)]);
var inst_26366 = (state_26379[(2)]);
var inst_26367 = (inst_26356 + (1));
var inst_26356__$1 = inst_26367;
var state_26379__$1 = (function (){var statearr_26390 = state_26379;
(statearr_26390[(10)] = inst_26366);

(statearr_26390[(8)] = inst_26356__$1);

return statearr_26390;
})();
var statearr_26391_26413 = state_26379__$1;
(statearr_26391_26413[(2)] = null);

(statearr_26391_26413[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26380 === (9))){
var state_26379__$1 = state_26379;
var statearr_26392_26414 = state_26379__$1;
(statearr_26392_26414[(2)] = null);

(statearr_26392_26414[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26380 === (5))){
var state_26379__$1 = state_26379;
var statearr_26393_26415 = state_26379__$1;
(statearr_26393_26415[(2)] = null);

(statearr_26393_26415[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26380 === (10))){
var inst_26371 = (state_26379[(2)]);
var state_26379__$1 = state_26379;
var statearr_26394_26416 = state_26379__$1;
(statearr_26394_26416[(2)] = inst_26371);

(statearr_26394_26416[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26380 === (8))){
var inst_26361 = (state_26379[(7)]);
var state_26379__$1 = state_26379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26379__$1,(11),out,inst_26361);
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
});})(c__24147__auto___26406,out))
;
return ((function (switch__24021__auto__,c__24147__auto___26406,out){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_26398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26398[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_26398[(1)] = (1));

return statearr_26398;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_26379){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26379);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26399){if((e26399 instanceof Object)){
var ex__24025__auto__ = e26399;
var statearr_26400_26417 = state_26379;
(statearr_26400_26417[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26379);

return cljs.core.cst$kw$recur;
} else {
throw e26399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__26418 = state_26379;
state_26379 = G__26418;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_26379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_26379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___26406,out))
})();
var state__24149__auto__ = (function (){var statearr_26401 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___26406);

return statearr_26401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___26406,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26428 = (function (f,ch,meta26429){
this.f = f;
this.ch = ch;
this.meta26429 = meta26429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26430,meta26429__$1){
var self__ = this;
var _26430__$1 = this;
return (new cljs.core.async.t_cljs$core$async26428(self__.f,self__.ch,meta26429__$1));
});


cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26430){
var self__ = this;
var _26430__$1 = this;
return self__.meta26429;
});


cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26431 = (function (f,ch,meta26429,_,fn1,meta26432){
this.f = f;
this.ch = ch;
this.meta26429 = meta26429;
this._ = _;
this.fn1 = fn1;
this.meta26432 = meta26432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26433,meta26432__$1){
var self__ = this;
var _26433__$1 = this;
return (new cljs.core.async.t_cljs$core$async26431(self__.f,self__.ch,self__.meta26429,self__._,self__.fn1,meta26432__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26433){
var self__ = this;
var _26433__$1 = this;
return self__.meta26432;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26419_SHARP_){
var G__26434 = (((p1__26419_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26419_SHARP_) : self__.f.call(null,p1__26419_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26434) : f1.call(null,G__26434));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26431.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26429,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26428], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26432], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26431";

cljs.core.async.t_cljs$core$async26431.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26431");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26431 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26431(f__$1,ch__$1,meta26429__$1,___$2,fn1__$1,meta26432){
return (new cljs.core.async.t_cljs$core$async26431(f__$1,ch__$1,meta26429__$1,___$2,fn1__$1,meta26432));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26431(self__.f,self__.ch,self__.meta26429,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7511__auto__ = ret;
if(cljs.core.truth_(and__7511__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7511__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26435 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26435) : self__.f.call(null,G__26435));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26429], null);
});

cljs.core.async.t_cljs$core$async26428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26428";

cljs.core.async.t_cljs$core$async26428.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26428");
});

cljs.core.async.__GT_t_cljs$core$async26428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26428(f__$1,ch__$1,meta26429){
return (new cljs.core.async.t_cljs$core$async26428(f__$1,ch__$1,meta26429));
});

}

return (new cljs.core.async.t_cljs$core$async26428(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26439 = (function (f,ch,meta26440){
this.f = f;
this.ch = ch;
this.meta26440 = meta26440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26441,meta26440__$1){
var self__ = this;
var _26441__$1 = this;
return (new cljs.core.async.t_cljs$core$async26439(self__.f,self__.ch,meta26440__$1));
});


cljs.core.async.t_cljs$core$async26439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26441){
var self__ = this;
var _26441__$1 = this;
return self__.meta26440;
});


cljs.core.async.t_cljs$core$async26439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26440], null);
});

cljs.core.async.t_cljs$core$async26439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26439";

cljs.core.async.t_cljs$core$async26439.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26439");
});

cljs.core.async.__GT_t_cljs$core$async26439 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26439(f__$1,ch__$1,meta26440){
return (new cljs.core.async.t_cljs$core$async26439(f__$1,ch__$1,meta26440));
});

}

return (new cljs.core.async.t_cljs$core$async26439(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26445 = (function (p,ch,meta26446){
this.p = p;
this.ch = ch;
this.meta26446 = meta26446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26447,meta26446__$1){
var self__ = this;
var _26447__$1 = this;
return (new cljs.core.async.t_cljs$core$async26445(self__.p,self__.ch,meta26446__$1));
});


cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26447){
var self__ = this;
var _26447__$1 = this;
return self__.meta26446;
});


cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26446], null);
});

cljs.core.async.t_cljs$core$async26445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26445";

cljs.core.async.t_cljs$core$async26445.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26445");
});

cljs.core.async.__GT_t_cljs$core$async26445 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26445(p__$1,ch__$1,meta26446){
return (new cljs.core.async.t_cljs$core$async26445(p__$1,ch__$1,meta26446));
});

}

return (new cljs.core.async.t_cljs$core$async26445(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26448 = [];
var len__8739__auto___26492 = arguments.length;
var i__8740__auto___26493 = (0);
while(true){
if((i__8740__auto___26493 < len__8739__auto___26492)){
args26448.push((arguments[i__8740__auto___26493]));

var G__26494 = (i__8740__auto___26493 + (1));
i__8740__auto___26493 = G__26494;
continue;
} else {
}
break;
}

var G__26450 = args26448.length;
switch (G__26450) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26448.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24147__auto___26496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___26496,out){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___26496,out){
return (function (state_26471){
var state_val_26472 = (state_26471[(1)]);
if((state_val_26472 === (7))){
var inst_26467 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26473_26497 = state_26471__$1;
(statearr_26473_26497[(2)] = inst_26467);

(statearr_26473_26497[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26472 === (1))){
var state_26471__$1 = state_26471;
var statearr_26474_26498 = state_26471__$1;
(statearr_26474_26498[(2)] = null);

(statearr_26474_26498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26472 === (4))){
var inst_26453 = (state_26471[(7)]);
var inst_26453__$1 = (state_26471[(2)]);
var inst_26454 = (inst_26453__$1 == null);
var state_26471__$1 = (function (){var statearr_26475 = state_26471;
(statearr_26475[(7)] = inst_26453__$1);

return statearr_26475;
})();
if(cljs.core.truth_(inst_26454)){
var statearr_26476_26499 = state_26471__$1;
(statearr_26476_26499[(1)] = (5));

} else {
var statearr_26477_26500 = state_26471__$1;
(statearr_26477_26500[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26472 === (6))){
var inst_26453 = (state_26471[(7)]);
var inst_26458 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26453) : p.call(null,inst_26453));
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26458)){
var statearr_26478_26501 = state_26471__$1;
(statearr_26478_26501[(1)] = (8));

} else {
var statearr_26479_26502 = state_26471__$1;
(statearr_26479_26502[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26472 === (3))){
var inst_26469 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26471__$1,inst_26469);
} else {
if((state_val_26472 === (2))){
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26471__$1,(4),ch);
} else {
if((state_val_26472 === (11))){
var inst_26461 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26480_26503 = state_26471__$1;
(statearr_26480_26503[(2)] = inst_26461);

(statearr_26480_26503[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26472 === (9))){
var state_26471__$1 = state_26471;
var statearr_26481_26504 = state_26471__$1;
(statearr_26481_26504[(2)] = null);

(statearr_26481_26504[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26472 === (5))){
var inst_26456 = cljs.core.async.close_BANG_(out);
var state_26471__$1 = state_26471;
var statearr_26482_26505 = state_26471__$1;
(statearr_26482_26505[(2)] = inst_26456);

(statearr_26482_26505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26472 === (10))){
var inst_26464 = (state_26471[(2)]);
var state_26471__$1 = (function (){var statearr_26483 = state_26471;
(statearr_26483[(8)] = inst_26464);

return statearr_26483;
})();
var statearr_26484_26506 = state_26471__$1;
(statearr_26484_26506[(2)] = null);

(statearr_26484_26506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26472 === (8))){
var inst_26453 = (state_26471[(7)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26471__$1,(11),out,inst_26453);
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
});})(c__24147__auto___26496,out))
;
return ((function (switch__24021__auto__,c__24147__auto___26496,out){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_26488 = [null,null,null,null,null,null,null,null,null];
(statearr_26488[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_26488[(1)] = (1));

return statearr_26488;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_26471){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26471);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26489){if((e26489 instanceof Object)){
var ex__24025__auto__ = e26489;
var statearr_26490_26507 = state_26471;
(statearr_26490_26507[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26471);

return cljs.core.cst$kw$recur;
} else {
throw e26489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__26508 = state_26471;
state_26471 = G__26508;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_26471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_26471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___26496,out))
})();
var state__24149__auto__ = (function (){var statearr_26491 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___26496);

return statearr_26491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___26496,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26509 = [];
var len__8739__auto___26512 = arguments.length;
var i__8740__auto___26513 = (0);
while(true){
if((i__8740__auto___26513 < len__8739__auto___26512)){
args26509.push((arguments[i__8740__auto___26513]));

var G__26514 = (i__8740__auto___26513 + (1));
i__8740__auto___26513 = G__26514;
continue;
} else {
}
break;
}

var G__26511 = args26509.length;
switch (G__26511) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26509.length)].join('')));

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
var c__24147__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto__){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto__){
return (function (state_26681){
var state_val_26682 = (state_26681[(1)]);
if((state_val_26682 === (7))){
var inst_26677 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26683_26724 = state_26681__$1;
(statearr_26683_26724[(2)] = inst_26677);

(statearr_26683_26724[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (20))){
var inst_26647 = (state_26681[(7)]);
var inst_26658 = (state_26681[(2)]);
var inst_26659 = cljs.core.next(inst_26647);
var inst_26633 = inst_26659;
var inst_26634 = null;
var inst_26635 = (0);
var inst_26636 = (0);
var state_26681__$1 = (function (){var statearr_26684 = state_26681;
(statearr_26684[(8)] = inst_26633);

(statearr_26684[(9)] = inst_26636);

(statearr_26684[(10)] = inst_26635);

(statearr_26684[(11)] = inst_26634);

(statearr_26684[(12)] = inst_26658);

return statearr_26684;
})();
var statearr_26685_26725 = state_26681__$1;
(statearr_26685_26725[(2)] = null);

(statearr_26685_26725[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (1))){
var state_26681__$1 = state_26681;
var statearr_26686_26726 = state_26681__$1;
(statearr_26686_26726[(2)] = null);

(statearr_26686_26726[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (4))){
var inst_26622 = (state_26681[(13)]);
var inst_26622__$1 = (state_26681[(2)]);
var inst_26623 = (inst_26622__$1 == null);
var state_26681__$1 = (function (){var statearr_26687 = state_26681;
(statearr_26687[(13)] = inst_26622__$1);

return statearr_26687;
})();
if(cljs.core.truth_(inst_26623)){
var statearr_26688_26727 = state_26681__$1;
(statearr_26688_26727[(1)] = (5));

} else {
var statearr_26689_26728 = state_26681__$1;
(statearr_26689_26728[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (15))){
var state_26681__$1 = state_26681;
var statearr_26693_26729 = state_26681__$1;
(statearr_26693_26729[(2)] = null);

(statearr_26693_26729[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (21))){
var state_26681__$1 = state_26681;
var statearr_26694_26730 = state_26681__$1;
(statearr_26694_26730[(2)] = null);

(statearr_26694_26730[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (13))){
var inst_26633 = (state_26681[(8)]);
var inst_26636 = (state_26681[(9)]);
var inst_26635 = (state_26681[(10)]);
var inst_26634 = (state_26681[(11)]);
var inst_26643 = (state_26681[(2)]);
var inst_26644 = (inst_26636 + (1));
var tmp26690 = inst_26633;
var tmp26691 = inst_26635;
var tmp26692 = inst_26634;
var inst_26633__$1 = tmp26690;
var inst_26634__$1 = tmp26692;
var inst_26635__$1 = tmp26691;
var inst_26636__$1 = inst_26644;
var state_26681__$1 = (function (){var statearr_26695 = state_26681;
(statearr_26695[(8)] = inst_26633__$1);

(statearr_26695[(9)] = inst_26636__$1);

(statearr_26695[(10)] = inst_26635__$1);

(statearr_26695[(11)] = inst_26634__$1);

(statearr_26695[(14)] = inst_26643);

return statearr_26695;
})();
var statearr_26696_26731 = state_26681__$1;
(statearr_26696_26731[(2)] = null);

(statearr_26696_26731[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (22))){
var state_26681__$1 = state_26681;
var statearr_26697_26732 = state_26681__$1;
(statearr_26697_26732[(2)] = null);

(statearr_26697_26732[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (6))){
var inst_26622 = (state_26681[(13)]);
var inst_26631 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26622) : f.call(null,inst_26622));
var inst_26632 = cljs.core.seq(inst_26631);
var inst_26633 = inst_26632;
var inst_26634 = null;
var inst_26635 = (0);
var inst_26636 = (0);
var state_26681__$1 = (function (){var statearr_26698 = state_26681;
(statearr_26698[(8)] = inst_26633);

(statearr_26698[(9)] = inst_26636);

(statearr_26698[(10)] = inst_26635);

(statearr_26698[(11)] = inst_26634);

return statearr_26698;
})();
var statearr_26699_26733 = state_26681__$1;
(statearr_26699_26733[(2)] = null);

(statearr_26699_26733[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (17))){
var inst_26647 = (state_26681[(7)]);
var inst_26651 = cljs.core.chunk_first(inst_26647);
var inst_26652 = cljs.core.chunk_rest(inst_26647);
var inst_26653 = cljs.core.count(inst_26651);
var inst_26633 = inst_26652;
var inst_26634 = inst_26651;
var inst_26635 = inst_26653;
var inst_26636 = (0);
var state_26681__$1 = (function (){var statearr_26700 = state_26681;
(statearr_26700[(8)] = inst_26633);

(statearr_26700[(9)] = inst_26636);

(statearr_26700[(10)] = inst_26635);

(statearr_26700[(11)] = inst_26634);

return statearr_26700;
})();
var statearr_26701_26734 = state_26681__$1;
(statearr_26701_26734[(2)] = null);

(statearr_26701_26734[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (3))){
var inst_26679 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26681__$1,inst_26679);
} else {
if((state_val_26682 === (12))){
var inst_26667 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26702_26735 = state_26681__$1;
(statearr_26702_26735[(2)] = inst_26667);

(statearr_26702_26735[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (2))){
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26681__$1,(4),in$);
} else {
if((state_val_26682 === (23))){
var inst_26675 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26703_26736 = state_26681__$1;
(statearr_26703_26736[(2)] = inst_26675);

(statearr_26703_26736[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (19))){
var inst_26662 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26704_26737 = state_26681__$1;
(statearr_26704_26737[(2)] = inst_26662);

(statearr_26704_26737[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (11))){
var inst_26633 = (state_26681[(8)]);
var inst_26647 = (state_26681[(7)]);
var inst_26647__$1 = cljs.core.seq(inst_26633);
var state_26681__$1 = (function (){var statearr_26705 = state_26681;
(statearr_26705[(7)] = inst_26647__$1);

return statearr_26705;
})();
if(inst_26647__$1){
var statearr_26706_26738 = state_26681__$1;
(statearr_26706_26738[(1)] = (14));

} else {
var statearr_26707_26739 = state_26681__$1;
(statearr_26707_26739[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (9))){
var inst_26669 = (state_26681[(2)]);
var inst_26670 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26681__$1 = (function (){var statearr_26708 = state_26681;
(statearr_26708[(15)] = inst_26669);

return statearr_26708;
})();
if(cljs.core.truth_(inst_26670)){
var statearr_26709_26740 = state_26681__$1;
(statearr_26709_26740[(1)] = (21));

} else {
var statearr_26710_26741 = state_26681__$1;
(statearr_26710_26741[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (5))){
var inst_26625 = cljs.core.async.close_BANG_(out);
var state_26681__$1 = state_26681;
var statearr_26711_26742 = state_26681__$1;
(statearr_26711_26742[(2)] = inst_26625);

(statearr_26711_26742[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (14))){
var inst_26647 = (state_26681[(7)]);
var inst_26649 = cljs.core.chunked_seq_QMARK_(inst_26647);
var state_26681__$1 = state_26681;
if(inst_26649){
var statearr_26712_26743 = state_26681__$1;
(statearr_26712_26743[(1)] = (17));

} else {
var statearr_26713_26744 = state_26681__$1;
(statearr_26713_26744[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (16))){
var inst_26665 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26714_26745 = state_26681__$1;
(statearr_26714_26745[(2)] = inst_26665);

(statearr_26714_26745[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26682 === (10))){
var inst_26636 = (state_26681[(9)]);
var inst_26634 = (state_26681[(11)]);
var inst_26641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26634,inst_26636);
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26681__$1,(13),out,inst_26641);
} else {
if((state_val_26682 === (18))){
var inst_26647 = (state_26681[(7)]);
var inst_26656 = cljs.core.first(inst_26647);
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26681__$1,(20),out,inst_26656);
} else {
if((state_val_26682 === (8))){
var inst_26636 = (state_26681[(9)]);
var inst_26635 = (state_26681[(10)]);
var inst_26638 = (inst_26636 < inst_26635);
var inst_26639 = inst_26638;
var state_26681__$1 = state_26681;
if(cljs.core.truth_(inst_26639)){
var statearr_26715_26746 = state_26681__$1;
(statearr_26715_26746[(1)] = (10));

} else {
var statearr_26716_26747 = state_26681__$1;
(statearr_26716_26747[(1)] = (11));

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
});})(c__24147__auto__))
;
return ((function (switch__24021__auto__,c__24147__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____0 = (function (){
var statearr_26720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26720[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__);

(statearr_26720[(1)] = (1));

return statearr_26720;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____1 = (function (state_26681){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26681);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26721){if((e26721 instanceof Object)){
var ex__24025__auto__ = e26721;
var statearr_26722_26748 = state_26681;
(statearr_26722_26748[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26681);

return cljs.core.cst$kw$recur;
} else {
throw e26721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__26749 = state_26681;
state_26681 = G__26749;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__ = function(state_26681){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____1.call(this,state_26681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24022__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto__))
})();
var state__24149__auto__ = (function (){var statearr_26723 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto__);

return statearr_26723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto__))
);

return c__24147__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26750 = [];
var len__8739__auto___26753 = arguments.length;
var i__8740__auto___26754 = (0);
while(true){
if((i__8740__auto___26754 < len__8739__auto___26753)){
args26750.push((arguments[i__8740__auto___26754]));

var G__26755 = (i__8740__auto___26754 + (1));
i__8740__auto___26754 = G__26755;
continue;
} else {
}
break;
}

var G__26752 = args26750.length;
switch (G__26752) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26750.length)].join('')));

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
var args26757 = [];
var len__8739__auto___26760 = arguments.length;
var i__8740__auto___26761 = (0);
while(true){
if((i__8740__auto___26761 < len__8739__auto___26760)){
args26757.push((arguments[i__8740__auto___26761]));

var G__26762 = (i__8740__auto___26761 + (1));
i__8740__auto___26761 = G__26762;
continue;
} else {
}
break;
}

var G__26759 = args26757.length;
switch (G__26759) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26757.length)].join('')));

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
var args26764 = [];
var len__8739__auto___26815 = arguments.length;
var i__8740__auto___26816 = (0);
while(true){
if((i__8740__auto___26816 < len__8739__auto___26815)){
args26764.push((arguments[i__8740__auto___26816]));

var G__26817 = (i__8740__auto___26816 + (1));
i__8740__auto___26816 = G__26817;
continue;
} else {
}
break;
}

var G__26766 = args26764.length;
switch (G__26766) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26764.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24147__auto___26819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___26819,out){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___26819,out){
return (function (state_26790){
var state_val_26791 = (state_26790[(1)]);
if((state_val_26791 === (7))){
var inst_26785 = (state_26790[(2)]);
var state_26790__$1 = state_26790;
var statearr_26792_26820 = state_26790__$1;
(statearr_26792_26820[(2)] = inst_26785);

(statearr_26792_26820[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26791 === (1))){
var inst_26767 = null;
var state_26790__$1 = (function (){var statearr_26793 = state_26790;
(statearr_26793[(7)] = inst_26767);

return statearr_26793;
})();
var statearr_26794_26821 = state_26790__$1;
(statearr_26794_26821[(2)] = null);

(statearr_26794_26821[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26791 === (4))){
var inst_26770 = (state_26790[(8)]);
var inst_26770__$1 = (state_26790[(2)]);
var inst_26771 = (inst_26770__$1 == null);
var inst_26772 = cljs.core.not(inst_26771);
var state_26790__$1 = (function (){var statearr_26795 = state_26790;
(statearr_26795[(8)] = inst_26770__$1);

return statearr_26795;
})();
if(inst_26772){
var statearr_26796_26822 = state_26790__$1;
(statearr_26796_26822[(1)] = (5));

} else {
var statearr_26797_26823 = state_26790__$1;
(statearr_26797_26823[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26791 === (6))){
var state_26790__$1 = state_26790;
var statearr_26798_26824 = state_26790__$1;
(statearr_26798_26824[(2)] = null);

(statearr_26798_26824[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26791 === (3))){
var inst_26787 = (state_26790[(2)]);
var inst_26788 = cljs.core.async.close_BANG_(out);
var state_26790__$1 = (function (){var statearr_26799 = state_26790;
(statearr_26799[(9)] = inst_26787);

return statearr_26799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26790__$1,inst_26788);
} else {
if((state_val_26791 === (2))){
var state_26790__$1 = state_26790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26790__$1,(4),ch);
} else {
if((state_val_26791 === (11))){
var inst_26770 = (state_26790[(8)]);
var inst_26779 = (state_26790[(2)]);
var inst_26767 = inst_26770;
var state_26790__$1 = (function (){var statearr_26800 = state_26790;
(statearr_26800[(7)] = inst_26767);

(statearr_26800[(10)] = inst_26779);

return statearr_26800;
})();
var statearr_26801_26825 = state_26790__$1;
(statearr_26801_26825[(2)] = null);

(statearr_26801_26825[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26791 === (9))){
var inst_26770 = (state_26790[(8)]);
var state_26790__$1 = state_26790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26790__$1,(11),out,inst_26770);
} else {
if((state_val_26791 === (5))){
var inst_26770 = (state_26790[(8)]);
var inst_26767 = (state_26790[(7)]);
var inst_26774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26770,inst_26767);
var state_26790__$1 = state_26790;
if(inst_26774){
var statearr_26803_26826 = state_26790__$1;
(statearr_26803_26826[(1)] = (8));

} else {
var statearr_26804_26827 = state_26790__$1;
(statearr_26804_26827[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26791 === (10))){
var inst_26782 = (state_26790[(2)]);
var state_26790__$1 = state_26790;
var statearr_26805_26828 = state_26790__$1;
(statearr_26805_26828[(2)] = inst_26782);

(statearr_26805_26828[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26791 === (8))){
var inst_26767 = (state_26790[(7)]);
var tmp26802 = inst_26767;
var inst_26767__$1 = tmp26802;
var state_26790__$1 = (function (){var statearr_26806 = state_26790;
(statearr_26806[(7)] = inst_26767__$1);

return statearr_26806;
})();
var statearr_26807_26829 = state_26790__$1;
(statearr_26807_26829[(2)] = null);

(statearr_26807_26829[(1)] = (2));


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
});})(c__24147__auto___26819,out))
;
return ((function (switch__24021__auto__,c__24147__auto___26819,out){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_26811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26811[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_26811[(1)] = (1));

return statearr_26811;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_26790){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26790);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26812){if((e26812 instanceof Object)){
var ex__24025__auto__ = e26812;
var statearr_26813_26830 = state_26790;
(statearr_26813_26830[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26790);

return cljs.core.cst$kw$recur;
} else {
throw e26812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__26831 = state_26790;
state_26790 = G__26831;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_26790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_26790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___26819,out))
})();
var state__24149__auto__ = (function (){var statearr_26814 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___26819);

return statearr_26814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___26819,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26832 = [];
var len__8739__auto___26902 = arguments.length;
var i__8740__auto___26903 = (0);
while(true){
if((i__8740__auto___26903 < len__8739__auto___26902)){
args26832.push((arguments[i__8740__auto___26903]));

var G__26904 = (i__8740__auto___26903 + (1));
i__8740__auto___26903 = G__26904;
continue;
} else {
}
break;
}

var G__26834 = args26832.length;
switch (G__26834) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26832.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24147__auto___26906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___26906,out){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___26906,out){
return (function (state_26872){
var state_val_26873 = (state_26872[(1)]);
if((state_val_26873 === (7))){
var inst_26868 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26874_26907 = state_26872__$1;
(statearr_26874_26907[(2)] = inst_26868);

(statearr_26874_26907[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (1))){
var inst_26835 = (new Array(n));
var inst_26836 = inst_26835;
var inst_26837 = (0);
var state_26872__$1 = (function (){var statearr_26875 = state_26872;
(statearr_26875[(7)] = inst_26836);

(statearr_26875[(8)] = inst_26837);

return statearr_26875;
})();
var statearr_26876_26908 = state_26872__$1;
(statearr_26876_26908[(2)] = null);

(statearr_26876_26908[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (4))){
var inst_26840 = (state_26872[(9)]);
var inst_26840__$1 = (state_26872[(2)]);
var inst_26841 = (inst_26840__$1 == null);
var inst_26842 = cljs.core.not(inst_26841);
var state_26872__$1 = (function (){var statearr_26877 = state_26872;
(statearr_26877[(9)] = inst_26840__$1);

return statearr_26877;
})();
if(inst_26842){
var statearr_26878_26909 = state_26872__$1;
(statearr_26878_26909[(1)] = (5));

} else {
var statearr_26879_26910 = state_26872__$1;
(statearr_26879_26910[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (15))){
var inst_26862 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26880_26911 = state_26872__$1;
(statearr_26880_26911[(2)] = inst_26862);

(statearr_26880_26911[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (13))){
var state_26872__$1 = state_26872;
var statearr_26881_26912 = state_26872__$1;
(statearr_26881_26912[(2)] = null);

(statearr_26881_26912[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (6))){
var inst_26837 = (state_26872[(8)]);
var inst_26858 = (inst_26837 > (0));
var state_26872__$1 = state_26872;
if(cljs.core.truth_(inst_26858)){
var statearr_26882_26913 = state_26872__$1;
(statearr_26882_26913[(1)] = (12));

} else {
var statearr_26883_26914 = state_26872__$1;
(statearr_26883_26914[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (3))){
var inst_26870 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26872__$1,inst_26870);
} else {
if((state_val_26873 === (12))){
var inst_26836 = (state_26872[(7)]);
var inst_26860 = cljs.core.vec(inst_26836);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26872__$1,(15),out,inst_26860);
} else {
if((state_val_26873 === (2))){
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26872__$1,(4),ch);
} else {
if((state_val_26873 === (11))){
var inst_26852 = (state_26872[(2)]);
var inst_26853 = (new Array(n));
var inst_26836 = inst_26853;
var inst_26837 = (0);
var state_26872__$1 = (function (){var statearr_26884 = state_26872;
(statearr_26884[(7)] = inst_26836);

(statearr_26884[(10)] = inst_26852);

(statearr_26884[(8)] = inst_26837);

return statearr_26884;
})();
var statearr_26885_26915 = state_26872__$1;
(statearr_26885_26915[(2)] = null);

(statearr_26885_26915[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (9))){
var inst_26836 = (state_26872[(7)]);
var inst_26850 = cljs.core.vec(inst_26836);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26872__$1,(11),out,inst_26850);
} else {
if((state_val_26873 === (5))){
var inst_26836 = (state_26872[(7)]);
var inst_26837 = (state_26872[(8)]);
var inst_26840 = (state_26872[(9)]);
var inst_26845 = (state_26872[(11)]);
var inst_26844 = (inst_26836[inst_26837] = inst_26840);
var inst_26845__$1 = (inst_26837 + (1));
var inst_26846 = (inst_26845__$1 < n);
var state_26872__$1 = (function (){var statearr_26886 = state_26872;
(statearr_26886[(12)] = inst_26844);

(statearr_26886[(11)] = inst_26845__$1);

return statearr_26886;
})();
if(cljs.core.truth_(inst_26846)){
var statearr_26887_26916 = state_26872__$1;
(statearr_26887_26916[(1)] = (8));

} else {
var statearr_26888_26917 = state_26872__$1;
(statearr_26888_26917[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (14))){
var inst_26865 = (state_26872[(2)]);
var inst_26866 = cljs.core.async.close_BANG_(out);
var state_26872__$1 = (function (){var statearr_26890 = state_26872;
(statearr_26890[(13)] = inst_26865);

return statearr_26890;
})();
var statearr_26891_26918 = state_26872__$1;
(statearr_26891_26918[(2)] = inst_26866);

(statearr_26891_26918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (10))){
var inst_26856 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26892_26919 = state_26872__$1;
(statearr_26892_26919[(2)] = inst_26856);

(statearr_26892_26919[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26873 === (8))){
var inst_26836 = (state_26872[(7)]);
var inst_26845 = (state_26872[(11)]);
var tmp26889 = inst_26836;
var inst_26836__$1 = tmp26889;
var inst_26837 = inst_26845;
var state_26872__$1 = (function (){var statearr_26893 = state_26872;
(statearr_26893[(7)] = inst_26836__$1);

(statearr_26893[(8)] = inst_26837);

return statearr_26893;
})();
var statearr_26894_26920 = state_26872__$1;
(statearr_26894_26920[(2)] = null);

(statearr_26894_26920[(1)] = (2));


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
});})(c__24147__auto___26906,out))
;
return ((function (switch__24021__auto__,c__24147__auto___26906,out){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_26898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26898[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_26898[(1)] = (1));

return statearr_26898;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_26872){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26872);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26899){if((e26899 instanceof Object)){
var ex__24025__auto__ = e26899;
var statearr_26900_26921 = state_26872;
(statearr_26900_26921[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26872);

return cljs.core.cst$kw$recur;
} else {
throw e26899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__26922 = state_26872;
state_26872 = G__26922;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_26872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_26872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___26906,out))
})();
var state__24149__auto__ = (function (){var statearr_26901 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___26906);

return statearr_26901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___26906,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26923 = [];
var len__8739__auto___26997 = arguments.length;
var i__8740__auto___26998 = (0);
while(true){
if((i__8740__auto___26998 < len__8739__auto___26997)){
args26923.push((arguments[i__8740__auto___26998]));

var G__26999 = (i__8740__auto___26998 + (1));
i__8740__auto___26998 = G__26999;
continue;
} else {
}
break;
}

var G__26925 = args26923.length;
switch (G__26925) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26923.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24147__auto___27001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24147__auto___27001,out){
return (function (){
var f__24148__auto__ = (function (){var switch__24021__auto__ = ((function (c__24147__auto___27001,out){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (7))){
var inst_26963 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26969_27002 = state_26967__$1;
(statearr_26969_27002[(2)] = inst_26963);

(statearr_26969_27002[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (1))){
var inst_26926 = [];
var inst_26927 = inst_26926;
var inst_26928 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26967__$1 = (function (){var statearr_26970 = state_26967;
(statearr_26970[(7)] = inst_26927);

(statearr_26970[(8)] = inst_26928);

return statearr_26970;
})();
var statearr_26971_27003 = state_26967__$1;
(statearr_26971_27003[(2)] = null);

(statearr_26971_27003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (4))){
var inst_26931 = (state_26967[(9)]);
var inst_26931__$1 = (state_26967[(2)]);
var inst_26932 = (inst_26931__$1 == null);
var inst_26933 = cljs.core.not(inst_26932);
var state_26967__$1 = (function (){var statearr_26972 = state_26967;
(statearr_26972[(9)] = inst_26931__$1);

return statearr_26972;
})();
if(inst_26933){
var statearr_26973_27004 = state_26967__$1;
(statearr_26973_27004[(1)] = (5));

} else {
var statearr_26974_27005 = state_26967__$1;
(statearr_26974_27005[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (15))){
var inst_26957 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26975_27006 = state_26967__$1;
(statearr_26975_27006[(2)] = inst_26957);

(statearr_26975_27006[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (13))){
var state_26967__$1 = state_26967;
var statearr_26976_27007 = state_26967__$1;
(statearr_26976_27007[(2)] = null);

(statearr_26976_27007[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (6))){
var inst_26927 = (state_26967[(7)]);
var inst_26952 = inst_26927.length;
var inst_26953 = (inst_26952 > (0));
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26953)){
var statearr_26977_27008 = state_26967__$1;
(statearr_26977_27008[(1)] = (12));

} else {
var statearr_26978_27009 = state_26967__$1;
(statearr_26978_27009[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (3))){
var inst_26965 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26967__$1,inst_26965);
} else {
if((state_val_26968 === (12))){
var inst_26927 = (state_26967[(7)]);
var inst_26955 = cljs.core.vec(inst_26927);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26967__$1,(15),out,inst_26955);
} else {
if((state_val_26968 === (2))){
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26967__$1,(4),ch);
} else {
if((state_val_26968 === (11))){
var inst_26931 = (state_26967[(9)]);
var inst_26935 = (state_26967[(10)]);
var inst_26945 = (state_26967[(2)]);
var inst_26946 = [];
var inst_26947 = inst_26946.push(inst_26931);
var inst_26927 = inst_26946;
var inst_26928 = inst_26935;
var state_26967__$1 = (function (){var statearr_26979 = state_26967;
(statearr_26979[(11)] = inst_26947);

(statearr_26979[(7)] = inst_26927);

(statearr_26979[(8)] = inst_26928);

(statearr_26979[(12)] = inst_26945);

return statearr_26979;
})();
var statearr_26980_27010 = state_26967__$1;
(statearr_26980_27010[(2)] = null);

(statearr_26980_27010[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (9))){
var inst_26927 = (state_26967[(7)]);
var inst_26943 = cljs.core.vec(inst_26927);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26967__$1,(11),out,inst_26943);
} else {
if((state_val_26968 === (5))){
var inst_26931 = (state_26967[(9)]);
var inst_26928 = (state_26967[(8)]);
var inst_26935 = (state_26967[(10)]);
var inst_26935__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26931) : f.call(null,inst_26931));
var inst_26936 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26935__$1,inst_26928);
var inst_26937 = cljs.core.keyword_identical_QMARK_(inst_26928,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26938 = (inst_26936) || (inst_26937);
var state_26967__$1 = (function (){var statearr_26981 = state_26967;
(statearr_26981[(10)] = inst_26935__$1);

return statearr_26981;
})();
if(cljs.core.truth_(inst_26938)){
var statearr_26982_27011 = state_26967__$1;
(statearr_26982_27011[(1)] = (8));

} else {
var statearr_26983_27012 = state_26967__$1;
(statearr_26983_27012[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (14))){
var inst_26960 = (state_26967[(2)]);
var inst_26961 = cljs.core.async.close_BANG_(out);
var state_26967__$1 = (function (){var statearr_26985 = state_26967;
(statearr_26985[(13)] = inst_26960);

return statearr_26985;
})();
var statearr_26986_27013 = state_26967__$1;
(statearr_26986_27013[(2)] = inst_26961);

(statearr_26986_27013[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (10))){
var inst_26950 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26987_27014 = state_26967__$1;
(statearr_26987_27014[(2)] = inst_26950);

(statearr_26987_27014[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26968 === (8))){
var inst_26931 = (state_26967[(9)]);
var inst_26927 = (state_26967[(7)]);
var inst_26935 = (state_26967[(10)]);
var inst_26940 = inst_26927.push(inst_26931);
var tmp26984 = inst_26927;
var inst_26927__$1 = tmp26984;
var inst_26928 = inst_26935;
var state_26967__$1 = (function (){var statearr_26988 = state_26967;
(statearr_26988[(14)] = inst_26940);

(statearr_26988[(7)] = inst_26927__$1);

(statearr_26988[(8)] = inst_26928);

return statearr_26988;
})();
var statearr_26989_27015 = state_26967__$1;
(statearr_26989_27015[(2)] = null);

(statearr_26989_27015[(1)] = (2));


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
});})(c__24147__auto___27001,out))
;
return ((function (switch__24021__auto__,c__24147__auto___27001,out){
return (function() {
var cljs$core$async$state_machine__24022__auto__ = null;
var cljs$core$async$state_machine__24022__auto____0 = (function (){
var statearr_26993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26993[(0)] = cljs$core$async$state_machine__24022__auto__);

(statearr_26993[(1)] = (1));

return statearr_26993;
});
var cljs$core$async$state_machine__24022__auto____1 = (function (state_26967){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_26967);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e26994){if((e26994 instanceof Object)){
var ex__24025__auto__ = e26994;
var statearr_26995_27016 = state_26967;
(statearr_26995_27016[(5)] = ex__24025__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26967);

return cljs.core.cst$kw$recur;
} else {
throw e26994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,cljs.core.cst$kw$recur)){
var G__27017 = state_26967;
state_26967 = G__27017;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
cljs$core$async$state_machine__24022__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24022__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24022__auto____0;
cljs$core$async$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24022__auto____1;
return cljs$core$async$state_machine__24022__auto__;
})()
;})(switch__24021__auto__,c__24147__auto___27001,out))
})();
var state__24149__auto__ = (function (){var statearr_26996 = (f__24148__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24148__auto__.cljs$core$IFn$_invoke$arity$0() : f__24148__auto__.call(null));
(statearr_26996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24147__auto___27001);

return statearr_26996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24149__auto__);
});})(c__24147__auto___27001,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

