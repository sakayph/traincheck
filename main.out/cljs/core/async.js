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
var args24177 = [];
var len__8739__auto___24183 = arguments.length;
var i__8740__auto___24184 = (0);
while(true){
if((i__8740__auto___24184 < len__8739__auto___24183)){
args24177.push((arguments[i__8740__auto___24184]));

var G__24185 = (i__8740__auto___24184 + (1));
i__8740__auto___24184 = G__24185;
continue;
} else {
}
break;
}

var G__24179 = args24177.length;
switch (G__24179) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24177.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24180 = (function (f,blockable,meta24181){
this.f = f;
this.blockable = blockable;
this.meta24181 = meta24181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24182,meta24181__$1){
var self__ = this;
var _24182__$1 = this;
return (new cljs.core.async.t_cljs$core$async24180(self__.f,self__.blockable,meta24181__$1));
});


cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24182){
var self__ = this;
var _24182__$1 = this;
return self__.meta24181;
});


cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24181], null);
});

cljs.core.async.t_cljs$core$async24180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24180";

cljs.core.async.t_cljs$core$async24180.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24180");
});

cljs.core.async.__GT_t_cljs$core$async24180 = (function cljs$core$async$__GT_t_cljs$core$async24180(f__$1,blockable__$1,meta24181){
return (new cljs.core.async.t_cljs$core$async24180(f__$1,blockable__$1,meta24181));
});

}

return (new cljs.core.async.t_cljs$core$async24180(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24189 = [];
var len__8739__auto___24192 = arguments.length;
var i__8740__auto___24193 = (0);
while(true){
if((i__8740__auto___24193 < len__8739__auto___24192)){
args24189.push((arguments[i__8740__auto___24193]));

var G__24194 = (i__8740__auto___24193 + (1));
i__8740__auto___24193 = G__24194;
continue;
} else {
}
break;
}

var G__24191 = args24189.length;
switch (G__24191) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24189.length)].join('')));

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
var args24196 = [];
var len__8739__auto___24199 = arguments.length;
var i__8740__auto___24200 = (0);
while(true){
if((i__8740__auto___24200 < len__8739__auto___24199)){
args24196.push((arguments[i__8740__auto___24200]));

var G__24201 = (i__8740__auto___24200 + (1));
i__8740__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var G__24198 = args24196.length;
switch (G__24198) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24196.length)].join('')));

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
var args24203 = [];
var len__8739__auto___24206 = arguments.length;
var i__8740__auto___24207 = (0);
while(true){
if((i__8740__auto___24207 < len__8739__auto___24206)){
args24203.push((arguments[i__8740__auto___24207]));

var G__24208 = (i__8740__auto___24207 + (1));
i__8740__auto___24207 = G__24208;
continue;
} else {
}
break;
}

var G__24205 = args24203.length;
switch (G__24205) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24203.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24210 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24210) : fn1.call(null,val_24210));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24210,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24210) : fn1.call(null,val_24210));
});})(val_24210,ret))
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
var args24211 = [];
var len__8739__auto___24214 = arguments.length;
var i__8740__auto___24215 = (0);
while(true){
if((i__8740__auto___24215 < len__8739__auto___24214)){
args24211.push((arguments[i__8740__auto___24215]));

var G__24216 = (i__8740__auto___24215 + (1));
i__8740__auto___24215 = G__24216;
continue;
} else {
}
break;
}

var G__24213 = args24211.length;
switch (G__24213) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24211.length)].join('')));

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
var n__8539__auto___24218 = n;
var x_24219 = (0);
while(true){
if((x_24219 < n__8539__auto___24218)){
(a[x_24219] = (0));

var G__24220 = (x_24219 + (1));
x_24219 = G__24220;
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

var G__24221 = (i + (1));
i = G__24221;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async24225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24225 = (function (flag,meta24226){
this.flag = flag;
this.meta24226 = meta24226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24227,meta24226__$1){
var self__ = this;
var _24227__$1 = this;
return (new cljs.core.async.t_cljs$core$async24225(self__.flag,meta24226__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24227){
var self__ = this;
var _24227__$1 = this;
return self__.meta24226;
});})(flag))
;


cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24225.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24226], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24225";

cljs.core.async.t_cljs$core$async24225.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24225");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24225 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24225(flag__$1,meta24226){
return (new cljs.core.async.t_cljs$core$async24225(flag__$1,meta24226));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24225(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24231 = (function (flag,cb,meta24232){
this.flag = flag;
this.cb = cb;
this.meta24232 = meta24232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24233,meta24232__$1){
var self__ = this;
var _24233__$1 = this;
return (new cljs.core.async.t_cljs$core$async24231(self__.flag,self__.cb,meta24232__$1));
});


cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24233){
var self__ = this;
var _24233__$1 = this;
return self__.meta24232;
});


cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24232], null);
});

cljs.core.async.t_cljs$core$async24231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24231";

cljs.core.async.t_cljs$core$async24231.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24231");
});

cljs.core.async.__GT_t_cljs$core$async24231 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24231(flag__$1,cb__$1,meta24232){
return (new cljs.core.async.t_cljs$core$async24231(flag__$1,cb__$1,meta24232));
});

}

return (new cljs.core.async.t_cljs$core$async24231(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24234_SHARP_){
var G__24238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24234_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24238) : fret.call(null,G__24238));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24235_SHARP_){
var G__24239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24235_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24239) : fret.call(null,G__24239));
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
var G__24240 = (i + (1));
i = G__24240;
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
var len__8739__auto___24246 = arguments.length;
var i__8740__auto___24247 = (0);
while(true){
if((i__8740__auto___24247 < len__8739__auto___24246)){
args__8746__auto__.push((arguments[i__8740__auto___24247]));

var G__24248 = (i__8740__auto___24247 + (1));
i__8740__auto___24247 = G__24248;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((1) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8747__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24243){
var map__24244 = p__24243;
var map__24244__$1 = ((((!((map__24244 == null)))?((((map__24244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24244):map__24244);
var opts = map__24244__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24241){
var G__24242 = cljs.core.first(seq24241);
var seq24241__$1 = cljs.core.next(seq24241);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24242,seq24241__$1);
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
var args24249 = [];
var len__8739__auto___24299 = arguments.length;
var i__8740__auto___24300 = (0);
while(true){
if((i__8740__auto___24300 < len__8739__auto___24299)){
args24249.push((arguments[i__8740__auto___24300]));

var G__24301 = (i__8740__auto___24300 + (1));
i__8740__auto___24300 = G__24301;
continue;
} else {
}
break;
}

var G__24251 = args24249.length;
switch (G__24251) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24249.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24118__auto___24303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___24303){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___24303){
return (function (state_24275){
var state_val_24276 = (state_24275[(1)]);
if((state_val_24276 === (7))){
var inst_24271 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24277_24304 = state_24275__$1;
(statearr_24277_24304[(2)] = inst_24271);

(statearr_24277_24304[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (1))){
var state_24275__$1 = state_24275;
var statearr_24278_24305 = state_24275__$1;
(statearr_24278_24305[(2)] = null);

(statearr_24278_24305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (4))){
var inst_24254 = (state_24275[(7)]);
var inst_24254__$1 = (state_24275[(2)]);
var inst_24255 = (inst_24254__$1 == null);
var state_24275__$1 = (function (){var statearr_24279 = state_24275;
(statearr_24279[(7)] = inst_24254__$1);

return statearr_24279;
})();
if(cljs.core.truth_(inst_24255)){
var statearr_24280_24306 = state_24275__$1;
(statearr_24280_24306[(1)] = (5));

} else {
var statearr_24281_24307 = state_24275__$1;
(statearr_24281_24307[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (13))){
var state_24275__$1 = state_24275;
var statearr_24282_24308 = state_24275__$1;
(statearr_24282_24308[(2)] = null);

(statearr_24282_24308[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (6))){
var inst_24254 = (state_24275[(7)]);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24275__$1,(11),to,inst_24254);
} else {
if((state_val_24276 === (3))){
var inst_24273 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24275__$1,inst_24273);
} else {
if((state_val_24276 === (12))){
var state_24275__$1 = state_24275;
var statearr_24283_24309 = state_24275__$1;
(statearr_24283_24309[(2)] = null);

(statearr_24283_24309[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (2))){
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24275__$1,(4),from);
} else {
if((state_val_24276 === (11))){
var inst_24264 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
if(cljs.core.truth_(inst_24264)){
var statearr_24284_24310 = state_24275__$1;
(statearr_24284_24310[(1)] = (12));

} else {
var statearr_24285_24311 = state_24275__$1;
(statearr_24285_24311[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (9))){
var state_24275__$1 = state_24275;
var statearr_24286_24312 = state_24275__$1;
(statearr_24286_24312[(2)] = null);

(statearr_24286_24312[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (5))){
var state_24275__$1 = state_24275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24287_24313 = state_24275__$1;
(statearr_24287_24313[(1)] = (8));

} else {
var statearr_24288_24314 = state_24275__$1;
(statearr_24288_24314[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (14))){
var inst_24269 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24289_24315 = state_24275__$1;
(statearr_24289_24315[(2)] = inst_24269);

(statearr_24289_24315[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (10))){
var inst_24261 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
var statearr_24290_24316 = state_24275__$1;
(statearr_24290_24316[(2)] = inst_24261);

(statearr_24290_24316[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24276 === (8))){
var inst_24258 = cljs.core.async.close_BANG_(to);
var state_24275__$1 = state_24275;
var statearr_24291_24317 = state_24275__$1;
(statearr_24291_24317[(2)] = inst_24258);

(statearr_24291_24317[(1)] = (10));


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
});})(c__24118__auto___24303))
;
return ((function (switch__23992__auto__,c__24118__auto___24303){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_24295 = [null,null,null,null,null,null,null,null];
(statearr_24295[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_24295[(1)] = (1));

return statearr_24295;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_24275){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24275);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24296){if((e24296 instanceof Object)){
var ex__23996__auto__ = e24296;
var statearr_24297_24318 = state_24275;
(statearr_24297_24318[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24275);

return cljs.core.cst$kw$recur;
} else {
throw e24296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24319 = state_24275;
state_24275 = G__24319;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_24275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_24275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___24303))
})();
var state__24120__auto__ = (function (){var statearr_24298 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___24303);

return statearr_24298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___24303))
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
return (function (p__24507){
var vec__24508 = p__24507;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24508,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24508,(1),null);
var job = vec__24508;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24118__auto___24694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___24694,res,vec__24508,v,p,job,jobs,results){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___24694,res,vec__24508,v,p,job,jobs,results){
return (function (state_24515){
var state_val_24516 = (state_24515[(1)]);
if((state_val_24516 === (1))){
var state_24515__$1 = state_24515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24515__$1,(2),res,v);
} else {
if((state_val_24516 === (2))){
var inst_24512 = (state_24515[(2)]);
var inst_24513 = cljs.core.async.close_BANG_(res);
var state_24515__$1 = (function (){var statearr_24517 = state_24515;
(statearr_24517[(7)] = inst_24512);

return statearr_24517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24515__$1,inst_24513);
} else {
return null;
}
}
});})(c__24118__auto___24694,res,vec__24508,v,p,job,jobs,results))
;
return ((function (switch__23992__auto__,c__24118__auto___24694,res,vec__24508,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_24521 = [null,null,null,null,null,null,null,null];
(statearr_24521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_24521[(1)] = (1));

return statearr_24521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_24515){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24515);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24522){if((e24522 instanceof Object)){
var ex__23996__auto__ = e24522;
var statearr_24523_24695 = state_24515;
(statearr_24523_24695[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24515);

return cljs.core.cst$kw$recur;
} else {
throw e24522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24696 = state_24515;
state_24515 = G__24696;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_24515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_24515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___24694,res,vec__24508,v,p,job,jobs,results))
})();
var state__24120__auto__ = (function (){var statearr_24524 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___24694);

return statearr_24524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___24694,res,vec__24508,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24525){
var vec__24526 = p__24525;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24526,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24526,(1),null);
var job = vec__24526;
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
var n__8539__auto___24697 = n;
var __24698 = (0);
while(true){
if((__24698 < n__8539__auto___24697)){
var G__24529_24699 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24529_24699) {
case "compute":
var c__24118__auto___24701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24698,c__24118__auto___24701,G__24529_24699,n__8539__auto___24697,jobs,results,process,async){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (__24698,c__24118__auto___24701,G__24529_24699,n__8539__auto___24697,jobs,results,process,async){
return (function (state_24542){
var state_val_24543 = (state_24542[(1)]);
if((state_val_24543 === (1))){
var state_24542__$1 = state_24542;
var statearr_24544_24702 = state_24542__$1;
(statearr_24544_24702[(2)] = null);

(statearr_24544_24702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24543 === (2))){
var state_24542__$1 = state_24542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24542__$1,(4),jobs);
} else {
if((state_val_24543 === (3))){
var inst_24540 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24542__$1,inst_24540);
} else {
if((state_val_24543 === (4))){
var inst_24532 = (state_24542[(2)]);
var inst_24533 = process(inst_24532);
var state_24542__$1 = state_24542;
if(cljs.core.truth_(inst_24533)){
var statearr_24545_24703 = state_24542__$1;
(statearr_24545_24703[(1)] = (5));

} else {
var statearr_24546_24704 = state_24542__$1;
(statearr_24546_24704[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24543 === (5))){
var state_24542__$1 = state_24542;
var statearr_24547_24705 = state_24542__$1;
(statearr_24547_24705[(2)] = null);

(statearr_24547_24705[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24543 === (6))){
var state_24542__$1 = state_24542;
var statearr_24548_24706 = state_24542__$1;
(statearr_24548_24706[(2)] = null);

(statearr_24548_24706[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24543 === (7))){
var inst_24538 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
var statearr_24549_24707 = state_24542__$1;
(statearr_24549_24707[(2)] = inst_24538);

(statearr_24549_24707[(1)] = (3));


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
});})(__24698,c__24118__auto___24701,G__24529_24699,n__8539__auto___24697,jobs,results,process,async))
;
return ((function (__24698,switch__23992__auto__,c__24118__auto___24701,G__24529_24699,n__8539__auto___24697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_24553 = [null,null,null,null,null,null,null];
(statearr_24553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_24553[(1)] = (1));

return statearr_24553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_24542){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24542);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24554){if((e24554 instanceof Object)){
var ex__23996__auto__ = e24554;
var statearr_24555_24708 = state_24542;
(statearr_24555_24708[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24542);

return cljs.core.cst$kw$recur;
} else {
throw e24554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24709 = state_24542;
state_24542 = G__24709;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_24542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_24542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(__24698,switch__23992__auto__,c__24118__auto___24701,G__24529_24699,n__8539__auto___24697,jobs,results,process,async))
})();
var state__24120__auto__ = (function (){var statearr_24556 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___24701);

return statearr_24556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(__24698,c__24118__auto___24701,G__24529_24699,n__8539__auto___24697,jobs,results,process,async))
);


break;
case "async":
var c__24118__auto___24710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24698,c__24118__auto___24710,G__24529_24699,n__8539__auto___24697,jobs,results,process,async){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (__24698,c__24118__auto___24710,G__24529_24699,n__8539__auto___24697,jobs,results,process,async){
return (function (state_24569){
var state_val_24570 = (state_24569[(1)]);
if((state_val_24570 === (1))){
var state_24569__$1 = state_24569;
var statearr_24571_24711 = state_24569__$1;
(statearr_24571_24711[(2)] = null);

(statearr_24571_24711[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24570 === (2))){
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24569__$1,(4),jobs);
} else {
if((state_val_24570 === (3))){
var inst_24567 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24569__$1,inst_24567);
} else {
if((state_val_24570 === (4))){
var inst_24559 = (state_24569[(2)]);
var inst_24560 = async(inst_24559);
var state_24569__$1 = state_24569;
if(cljs.core.truth_(inst_24560)){
var statearr_24572_24712 = state_24569__$1;
(statearr_24572_24712[(1)] = (5));

} else {
var statearr_24573_24713 = state_24569__$1;
(statearr_24573_24713[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24570 === (5))){
var state_24569__$1 = state_24569;
var statearr_24574_24714 = state_24569__$1;
(statearr_24574_24714[(2)] = null);

(statearr_24574_24714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24570 === (6))){
var state_24569__$1 = state_24569;
var statearr_24575_24715 = state_24569__$1;
(statearr_24575_24715[(2)] = null);

(statearr_24575_24715[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24570 === (7))){
var inst_24565 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
var statearr_24576_24716 = state_24569__$1;
(statearr_24576_24716[(2)] = inst_24565);

(statearr_24576_24716[(1)] = (3));


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
});})(__24698,c__24118__auto___24710,G__24529_24699,n__8539__auto___24697,jobs,results,process,async))
;
return ((function (__24698,switch__23992__auto__,c__24118__auto___24710,G__24529_24699,n__8539__auto___24697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_24580 = [null,null,null,null,null,null,null];
(statearr_24580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_24580[(1)] = (1));

return statearr_24580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_24569){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24569);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24581){if((e24581 instanceof Object)){
var ex__23996__auto__ = e24581;
var statearr_24582_24717 = state_24569;
(statearr_24582_24717[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24569);

return cljs.core.cst$kw$recur;
} else {
throw e24581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24718 = state_24569;
state_24569 = G__24718;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_24569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_24569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(__24698,switch__23992__auto__,c__24118__auto___24710,G__24529_24699,n__8539__auto___24697,jobs,results,process,async))
})();
var state__24120__auto__ = (function (){var statearr_24583 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___24710);

return statearr_24583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(__24698,c__24118__auto___24710,G__24529_24699,n__8539__auto___24697,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24719 = (__24698 + (1));
__24698 = G__24719;
continue;
} else {
}
break;
}

var c__24118__auto___24720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___24720,jobs,results,process,async){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___24720,jobs,results,process,async){
return (function (state_24605){
var state_val_24606 = (state_24605[(1)]);
if((state_val_24606 === (1))){
var state_24605__$1 = state_24605;
var statearr_24607_24721 = state_24605__$1;
(statearr_24607_24721[(2)] = null);

(statearr_24607_24721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24606 === (2))){
var state_24605__$1 = state_24605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24605__$1,(4),from);
} else {
if((state_val_24606 === (3))){
var inst_24603 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24605__$1,inst_24603);
} else {
if((state_val_24606 === (4))){
var inst_24586 = (state_24605[(7)]);
var inst_24586__$1 = (state_24605[(2)]);
var inst_24587 = (inst_24586__$1 == null);
var state_24605__$1 = (function (){var statearr_24608 = state_24605;
(statearr_24608[(7)] = inst_24586__$1);

return statearr_24608;
})();
if(cljs.core.truth_(inst_24587)){
var statearr_24609_24722 = state_24605__$1;
(statearr_24609_24722[(1)] = (5));

} else {
var statearr_24610_24723 = state_24605__$1;
(statearr_24610_24723[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24606 === (5))){
var inst_24589 = cljs.core.async.close_BANG_(jobs);
var state_24605__$1 = state_24605;
var statearr_24611_24724 = state_24605__$1;
(statearr_24611_24724[(2)] = inst_24589);

(statearr_24611_24724[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24606 === (6))){
var inst_24586 = (state_24605[(7)]);
var inst_24591 = (state_24605[(8)]);
var inst_24591__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24593 = [inst_24586,inst_24591__$1];
var inst_24594 = (new cljs.core.PersistentVector(null,2,(5),inst_24592,inst_24593,null));
var state_24605__$1 = (function (){var statearr_24612 = state_24605;
(statearr_24612[(8)] = inst_24591__$1);

return statearr_24612;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24605__$1,(8),jobs,inst_24594);
} else {
if((state_val_24606 === (7))){
var inst_24601 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
var statearr_24613_24725 = state_24605__$1;
(statearr_24613_24725[(2)] = inst_24601);

(statearr_24613_24725[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24606 === (8))){
var inst_24591 = (state_24605[(8)]);
var inst_24596 = (state_24605[(2)]);
var state_24605__$1 = (function (){var statearr_24614 = state_24605;
(statearr_24614[(9)] = inst_24596);

return statearr_24614;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24605__$1,(9),results,inst_24591);
} else {
if((state_val_24606 === (9))){
var inst_24598 = (state_24605[(2)]);
var state_24605__$1 = (function (){var statearr_24615 = state_24605;
(statearr_24615[(10)] = inst_24598);

return statearr_24615;
})();
var statearr_24616_24726 = state_24605__$1;
(statearr_24616_24726[(2)] = null);

(statearr_24616_24726[(1)] = (2));


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
});})(c__24118__auto___24720,jobs,results,process,async))
;
return ((function (switch__23992__auto__,c__24118__auto___24720,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_24620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_24620[(1)] = (1));

return statearr_24620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_24605){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24605);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24621){if((e24621 instanceof Object)){
var ex__23996__auto__ = e24621;
var statearr_24622_24727 = state_24605;
(statearr_24622_24727[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24605);

return cljs.core.cst$kw$recur;
} else {
throw e24621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24728 = state_24605;
state_24605 = G__24728;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_24605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_24605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___24720,jobs,results,process,async))
})();
var state__24120__auto__ = (function (){var statearr_24623 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___24720);

return statearr_24623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___24720,jobs,results,process,async))
);


var c__24118__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto__,jobs,results,process,async){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto__,jobs,results,process,async){
return (function (state_24661){
var state_val_24662 = (state_24661[(1)]);
if((state_val_24662 === (7))){
var inst_24657 = (state_24661[(2)]);
var state_24661__$1 = state_24661;
var statearr_24663_24729 = state_24661__$1;
(statearr_24663_24729[(2)] = inst_24657);

(statearr_24663_24729[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (20))){
var state_24661__$1 = state_24661;
var statearr_24664_24730 = state_24661__$1;
(statearr_24664_24730[(2)] = null);

(statearr_24664_24730[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (1))){
var state_24661__$1 = state_24661;
var statearr_24665_24731 = state_24661__$1;
(statearr_24665_24731[(2)] = null);

(statearr_24665_24731[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (4))){
var inst_24626 = (state_24661[(7)]);
var inst_24626__$1 = (state_24661[(2)]);
var inst_24627 = (inst_24626__$1 == null);
var state_24661__$1 = (function (){var statearr_24666 = state_24661;
(statearr_24666[(7)] = inst_24626__$1);

return statearr_24666;
})();
if(cljs.core.truth_(inst_24627)){
var statearr_24667_24732 = state_24661__$1;
(statearr_24667_24732[(1)] = (5));

} else {
var statearr_24668_24733 = state_24661__$1;
(statearr_24668_24733[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (15))){
var inst_24639 = (state_24661[(8)]);
var state_24661__$1 = state_24661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24661__$1,(18),to,inst_24639);
} else {
if((state_val_24662 === (21))){
var inst_24652 = (state_24661[(2)]);
var state_24661__$1 = state_24661;
var statearr_24669_24734 = state_24661__$1;
(statearr_24669_24734[(2)] = inst_24652);

(statearr_24669_24734[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (13))){
var inst_24654 = (state_24661[(2)]);
var state_24661__$1 = (function (){var statearr_24670 = state_24661;
(statearr_24670[(9)] = inst_24654);

return statearr_24670;
})();
var statearr_24671_24735 = state_24661__$1;
(statearr_24671_24735[(2)] = null);

(statearr_24671_24735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (6))){
var inst_24626 = (state_24661[(7)]);
var state_24661__$1 = state_24661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24661__$1,(11),inst_24626);
} else {
if((state_val_24662 === (17))){
var inst_24647 = (state_24661[(2)]);
var state_24661__$1 = state_24661;
if(cljs.core.truth_(inst_24647)){
var statearr_24672_24736 = state_24661__$1;
(statearr_24672_24736[(1)] = (19));

} else {
var statearr_24673_24737 = state_24661__$1;
(statearr_24673_24737[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (3))){
var inst_24659 = (state_24661[(2)]);
var state_24661__$1 = state_24661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24661__$1,inst_24659);
} else {
if((state_val_24662 === (12))){
var inst_24636 = (state_24661[(10)]);
var state_24661__$1 = state_24661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24661__$1,(14),inst_24636);
} else {
if((state_val_24662 === (2))){
var state_24661__$1 = state_24661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24661__$1,(4),results);
} else {
if((state_val_24662 === (19))){
var state_24661__$1 = state_24661;
var statearr_24674_24738 = state_24661__$1;
(statearr_24674_24738[(2)] = null);

(statearr_24674_24738[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (11))){
var inst_24636 = (state_24661[(2)]);
var state_24661__$1 = (function (){var statearr_24675 = state_24661;
(statearr_24675[(10)] = inst_24636);

return statearr_24675;
})();
var statearr_24676_24739 = state_24661__$1;
(statearr_24676_24739[(2)] = null);

(statearr_24676_24739[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (9))){
var state_24661__$1 = state_24661;
var statearr_24677_24740 = state_24661__$1;
(statearr_24677_24740[(2)] = null);

(statearr_24677_24740[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (5))){
var state_24661__$1 = state_24661;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24678_24741 = state_24661__$1;
(statearr_24678_24741[(1)] = (8));

} else {
var statearr_24679_24742 = state_24661__$1;
(statearr_24679_24742[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (14))){
var inst_24641 = (state_24661[(11)]);
var inst_24639 = (state_24661[(8)]);
var inst_24639__$1 = (state_24661[(2)]);
var inst_24640 = (inst_24639__$1 == null);
var inst_24641__$1 = cljs.core.not(inst_24640);
var state_24661__$1 = (function (){var statearr_24680 = state_24661;
(statearr_24680[(11)] = inst_24641__$1);

(statearr_24680[(8)] = inst_24639__$1);

return statearr_24680;
})();
if(inst_24641__$1){
var statearr_24681_24743 = state_24661__$1;
(statearr_24681_24743[(1)] = (15));

} else {
var statearr_24682_24744 = state_24661__$1;
(statearr_24682_24744[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (16))){
var inst_24641 = (state_24661[(11)]);
var state_24661__$1 = state_24661;
var statearr_24683_24745 = state_24661__$1;
(statearr_24683_24745[(2)] = inst_24641);

(statearr_24683_24745[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (10))){
var inst_24633 = (state_24661[(2)]);
var state_24661__$1 = state_24661;
var statearr_24684_24746 = state_24661__$1;
(statearr_24684_24746[(2)] = inst_24633);

(statearr_24684_24746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (18))){
var inst_24644 = (state_24661[(2)]);
var state_24661__$1 = state_24661;
var statearr_24685_24747 = state_24661__$1;
(statearr_24685_24747[(2)] = inst_24644);

(statearr_24685_24747[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24662 === (8))){
var inst_24630 = cljs.core.async.close_BANG_(to);
var state_24661__$1 = state_24661;
var statearr_24686_24748 = state_24661__$1;
(statearr_24686_24748[(2)] = inst_24630);

(statearr_24686_24748[(1)] = (10));


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
});})(c__24118__auto__,jobs,results,process,async))
;
return ((function (switch__23992__auto__,c__24118__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_24690 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_24690[(1)] = (1));

return statearr_24690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_24661){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24661);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24691){if((e24691 instanceof Object)){
var ex__23996__auto__ = e24691;
var statearr_24692_24749 = state_24661;
(statearr_24692_24749[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24661);

return cljs.core.cst$kw$recur;
} else {
throw e24691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24750 = state_24661;
state_24661 = G__24750;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_24661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_24661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto__,jobs,results,process,async))
})();
var state__24120__auto__ = (function (){var statearr_24693 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto__);

return statearr_24693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto__,jobs,results,process,async))
);

return c__24118__auto__;
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
var args24751 = [];
var len__8739__auto___24754 = arguments.length;
var i__8740__auto___24755 = (0);
while(true){
if((i__8740__auto___24755 < len__8739__auto___24754)){
args24751.push((arguments[i__8740__auto___24755]));

var G__24756 = (i__8740__auto___24755 + (1));
i__8740__auto___24755 = G__24756;
continue;
} else {
}
break;
}

var G__24753 = args24751.length;
switch (G__24753) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24751.length)].join('')));

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
var args24758 = [];
var len__8739__auto___24761 = arguments.length;
var i__8740__auto___24762 = (0);
while(true){
if((i__8740__auto___24762 < len__8739__auto___24761)){
args24758.push((arguments[i__8740__auto___24762]));

var G__24763 = (i__8740__auto___24762 + (1));
i__8740__auto___24762 = G__24763;
continue;
} else {
}
break;
}

var G__24760 = args24758.length;
switch (G__24760) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24758.length)].join('')));

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
var args24765 = [];
var len__8739__auto___24818 = arguments.length;
var i__8740__auto___24819 = (0);
while(true){
if((i__8740__auto___24819 < len__8739__auto___24818)){
args24765.push((arguments[i__8740__auto___24819]));

var G__24820 = (i__8740__auto___24819 + (1));
i__8740__auto___24819 = G__24820;
continue;
} else {
}
break;
}

var G__24767 = args24765.length;
switch (G__24767) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24765.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__24118__auto___24822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___24822,tc,fc){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___24822,tc,fc){
return (function (state_24793){
var state_val_24794 = (state_24793[(1)]);
if((state_val_24794 === (7))){
var inst_24789 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24795_24823 = state_24793__$1;
(statearr_24795_24823[(2)] = inst_24789);

(statearr_24795_24823[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (1))){
var state_24793__$1 = state_24793;
var statearr_24796_24824 = state_24793__$1;
(statearr_24796_24824[(2)] = null);

(statearr_24796_24824[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (4))){
var inst_24770 = (state_24793[(7)]);
var inst_24770__$1 = (state_24793[(2)]);
var inst_24771 = (inst_24770__$1 == null);
var state_24793__$1 = (function (){var statearr_24797 = state_24793;
(statearr_24797[(7)] = inst_24770__$1);

return statearr_24797;
})();
if(cljs.core.truth_(inst_24771)){
var statearr_24798_24825 = state_24793__$1;
(statearr_24798_24825[(1)] = (5));

} else {
var statearr_24799_24826 = state_24793__$1;
(statearr_24799_24826[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (13))){
var state_24793__$1 = state_24793;
var statearr_24800_24827 = state_24793__$1;
(statearr_24800_24827[(2)] = null);

(statearr_24800_24827[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (6))){
var inst_24770 = (state_24793[(7)]);
var inst_24776 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24770) : p.call(null,inst_24770));
var state_24793__$1 = state_24793;
if(cljs.core.truth_(inst_24776)){
var statearr_24801_24828 = state_24793__$1;
(statearr_24801_24828[(1)] = (9));

} else {
var statearr_24802_24829 = state_24793__$1;
(statearr_24802_24829[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (3))){
var inst_24791 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24793__$1,inst_24791);
} else {
if((state_val_24794 === (12))){
var state_24793__$1 = state_24793;
var statearr_24803_24830 = state_24793__$1;
(statearr_24803_24830[(2)] = null);

(statearr_24803_24830[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (2))){
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24793__$1,(4),ch);
} else {
if((state_val_24794 === (11))){
var inst_24770 = (state_24793[(7)]);
var inst_24780 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24793__$1,(8),inst_24780,inst_24770);
} else {
if((state_val_24794 === (9))){
var state_24793__$1 = state_24793;
var statearr_24804_24831 = state_24793__$1;
(statearr_24804_24831[(2)] = tc);

(statearr_24804_24831[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (5))){
var inst_24773 = cljs.core.async.close_BANG_(tc);
var inst_24774 = cljs.core.async.close_BANG_(fc);
var state_24793__$1 = (function (){var statearr_24805 = state_24793;
(statearr_24805[(8)] = inst_24773);

return statearr_24805;
})();
var statearr_24806_24832 = state_24793__$1;
(statearr_24806_24832[(2)] = inst_24774);

(statearr_24806_24832[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (14))){
var inst_24787 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24807_24833 = state_24793__$1;
(statearr_24807_24833[(2)] = inst_24787);

(statearr_24807_24833[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (10))){
var state_24793__$1 = state_24793;
var statearr_24808_24834 = state_24793__$1;
(statearr_24808_24834[(2)] = fc);

(statearr_24808_24834[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24794 === (8))){
var inst_24782 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
if(cljs.core.truth_(inst_24782)){
var statearr_24809_24835 = state_24793__$1;
(statearr_24809_24835[(1)] = (12));

} else {
var statearr_24810_24836 = state_24793__$1;
(statearr_24810_24836[(1)] = (13));

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
});})(c__24118__auto___24822,tc,fc))
;
return ((function (switch__23992__auto__,c__24118__auto___24822,tc,fc){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_24814 = [null,null,null,null,null,null,null,null,null];
(statearr_24814[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_24814[(1)] = (1));

return statearr_24814;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_24793){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24793);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24815){if((e24815 instanceof Object)){
var ex__23996__auto__ = e24815;
var statearr_24816_24837 = state_24793;
(statearr_24816_24837[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24793);

return cljs.core.cst$kw$recur;
} else {
throw e24815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24838 = state_24793;
state_24793 = G__24838;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_24793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_24793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___24822,tc,fc))
})();
var state__24120__auto__ = (function (){var statearr_24817 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___24822);

return statearr_24817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___24822,tc,fc))
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
var c__24118__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto__){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto__){
return (function (state_24902){
var state_val_24903 = (state_24902[(1)]);
if((state_val_24903 === (7))){
var inst_24898 = (state_24902[(2)]);
var state_24902__$1 = state_24902;
var statearr_24904_24925 = state_24902__$1;
(statearr_24904_24925[(2)] = inst_24898);

(statearr_24904_24925[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24903 === (1))){
var inst_24882 = init;
var state_24902__$1 = (function (){var statearr_24905 = state_24902;
(statearr_24905[(7)] = inst_24882);

return statearr_24905;
})();
var statearr_24906_24926 = state_24902__$1;
(statearr_24906_24926[(2)] = null);

(statearr_24906_24926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24903 === (4))){
var inst_24885 = (state_24902[(8)]);
var inst_24885__$1 = (state_24902[(2)]);
var inst_24886 = (inst_24885__$1 == null);
var state_24902__$1 = (function (){var statearr_24907 = state_24902;
(statearr_24907[(8)] = inst_24885__$1);

return statearr_24907;
})();
if(cljs.core.truth_(inst_24886)){
var statearr_24908_24927 = state_24902__$1;
(statearr_24908_24927[(1)] = (5));

} else {
var statearr_24909_24928 = state_24902__$1;
(statearr_24909_24928[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24903 === (6))){
var inst_24882 = (state_24902[(7)]);
var inst_24889 = (state_24902[(9)]);
var inst_24885 = (state_24902[(8)]);
var inst_24889__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24882,inst_24885) : f.call(null,inst_24882,inst_24885));
var inst_24890 = cljs.core.reduced_QMARK_(inst_24889__$1);
var state_24902__$1 = (function (){var statearr_24910 = state_24902;
(statearr_24910[(9)] = inst_24889__$1);

return statearr_24910;
})();
if(inst_24890){
var statearr_24911_24929 = state_24902__$1;
(statearr_24911_24929[(1)] = (8));

} else {
var statearr_24912_24930 = state_24902__$1;
(statearr_24912_24930[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24903 === (3))){
var inst_24900 = (state_24902[(2)]);
var state_24902__$1 = state_24902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24902__$1,inst_24900);
} else {
if((state_val_24903 === (2))){
var state_24902__$1 = state_24902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24902__$1,(4),ch);
} else {
if((state_val_24903 === (9))){
var inst_24889 = (state_24902[(9)]);
var inst_24882 = inst_24889;
var state_24902__$1 = (function (){var statearr_24913 = state_24902;
(statearr_24913[(7)] = inst_24882);

return statearr_24913;
})();
var statearr_24914_24931 = state_24902__$1;
(statearr_24914_24931[(2)] = null);

(statearr_24914_24931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24903 === (5))){
var inst_24882 = (state_24902[(7)]);
var state_24902__$1 = state_24902;
var statearr_24915_24932 = state_24902__$1;
(statearr_24915_24932[(2)] = inst_24882);

(statearr_24915_24932[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24903 === (10))){
var inst_24896 = (state_24902[(2)]);
var state_24902__$1 = state_24902;
var statearr_24916_24933 = state_24902__$1;
(statearr_24916_24933[(2)] = inst_24896);

(statearr_24916_24933[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24903 === (8))){
var inst_24889 = (state_24902[(9)]);
var inst_24892 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_24889) : cljs.core.deref.call(null,inst_24889));
var state_24902__$1 = state_24902;
var statearr_24917_24934 = state_24902__$1;
(statearr_24917_24934[(2)] = inst_24892);

(statearr_24917_24934[(1)] = (10));


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
});})(c__24118__auto__))
;
return ((function (switch__23992__auto__,c__24118__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23993__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23993__auto____0 = (function (){
var statearr_24921 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24921[(0)] = cljs$core$async$reduce_$_state_machine__23993__auto__);

(statearr_24921[(1)] = (1));

return statearr_24921;
});
var cljs$core$async$reduce_$_state_machine__23993__auto____1 = (function (state_24902){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24902);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24922){if((e24922 instanceof Object)){
var ex__23996__auto__ = e24922;
var statearr_24923_24935 = state_24902;
(statearr_24923_24935[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24902);

return cljs.core.cst$kw$recur;
} else {
throw e24922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24936 = state_24902;
state_24902 = G__24936;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23993__auto__ = function(state_24902){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23993__auto____1.call(this,state_24902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23993__auto____0;
cljs$core$async$reduce_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23993__auto____1;
return cljs$core$async$reduce_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto__))
})();
var state__24120__auto__ = (function (){var statearr_24924 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto__);

return statearr_24924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto__))
);

return c__24118__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24118__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto__,f__$1){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto__,f__$1){
return (function (state_24956){
var state_val_24957 = (state_24956[(1)]);
if((state_val_24957 === (1))){
var inst_24951 = cljs.core.async.reduce(f__$1,init,ch);
var state_24956__$1 = state_24956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24956__$1,(2),inst_24951);
} else {
if((state_val_24957 === (2))){
var inst_24953 = (state_24956[(2)]);
var inst_24954 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24953) : f__$1.call(null,inst_24953));
var state_24956__$1 = state_24956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24956__$1,inst_24954);
} else {
return null;
}
}
});})(c__24118__auto__,f__$1))
;
return ((function (switch__23992__auto__,c__24118__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23993__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23993__auto____0 = (function (){
var statearr_24961 = [null,null,null,null,null,null,null];
(statearr_24961[(0)] = cljs$core$async$transduce_$_state_machine__23993__auto__);

(statearr_24961[(1)] = (1));

return statearr_24961;
});
var cljs$core$async$transduce_$_state_machine__23993__auto____1 = (function (state_24956){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24956);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e24962){if((e24962 instanceof Object)){
var ex__23996__auto__ = e24962;
var statearr_24963_24965 = state_24956;
(statearr_24963_24965[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24956);

return cljs.core.cst$kw$recur;
} else {
throw e24962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__24966 = state_24956;
state_24956 = G__24966;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23993__auto__ = function(state_24956){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23993__auto____1.call(this,state_24956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23993__auto____0;
cljs$core$async$transduce_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23993__auto____1;
return cljs$core$async$transduce_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto__,f__$1))
})();
var state__24120__auto__ = (function (){var statearr_24964 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_24964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto__);

return statearr_24964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto__,f__$1))
);

return c__24118__auto__;
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
var args24967 = [];
var len__8739__auto___25019 = arguments.length;
var i__8740__auto___25020 = (0);
while(true){
if((i__8740__auto___25020 < len__8739__auto___25019)){
args24967.push((arguments[i__8740__auto___25020]));

var G__25021 = (i__8740__auto___25020 + (1));
i__8740__auto___25020 = G__25021;
continue;
} else {
}
break;
}

var G__24969 = args24967.length;
switch (G__24969) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24967.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24118__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto__){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto__){
return (function (state_24994){
var state_val_24995 = (state_24994[(1)]);
if((state_val_24995 === (7))){
var inst_24976 = (state_24994[(2)]);
var state_24994__$1 = state_24994;
var statearr_24996_25023 = state_24994__$1;
(statearr_24996_25023[(2)] = inst_24976);

(statearr_24996_25023[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (1))){
var inst_24970 = cljs.core.seq(coll);
var inst_24971 = inst_24970;
var state_24994__$1 = (function (){var statearr_24997 = state_24994;
(statearr_24997[(7)] = inst_24971);

return statearr_24997;
})();
var statearr_24998_25024 = state_24994__$1;
(statearr_24998_25024[(2)] = null);

(statearr_24998_25024[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (4))){
var inst_24971 = (state_24994[(7)]);
var inst_24974 = cljs.core.first(inst_24971);
var state_24994__$1 = state_24994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24994__$1,(7),ch,inst_24974);
} else {
if((state_val_24995 === (13))){
var inst_24988 = (state_24994[(2)]);
var state_24994__$1 = state_24994;
var statearr_24999_25025 = state_24994__$1;
(statearr_24999_25025[(2)] = inst_24988);

(statearr_24999_25025[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (6))){
var inst_24979 = (state_24994[(2)]);
var state_24994__$1 = state_24994;
if(cljs.core.truth_(inst_24979)){
var statearr_25000_25026 = state_24994__$1;
(statearr_25000_25026[(1)] = (8));

} else {
var statearr_25001_25027 = state_24994__$1;
(statearr_25001_25027[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (3))){
var inst_24992 = (state_24994[(2)]);
var state_24994__$1 = state_24994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24994__$1,inst_24992);
} else {
if((state_val_24995 === (12))){
var state_24994__$1 = state_24994;
var statearr_25002_25028 = state_24994__$1;
(statearr_25002_25028[(2)] = null);

(statearr_25002_25028[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (2))){
var inst_24971 = (state_24994[(7)]);
var state_24994__$1 = state_24994;
if(cljs.core.truth_(inst_24971)){
var statearr_25003_25029 = state_24994__$1;
(statearr_25003_25029[(1)] = (4));

} else {
var statearr_25004_25030 = state_24994__$1;
(statearr_25004_25030[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (11))){
var inst_24985 = cljs.core.async.close_BANG_(ch);
var state_24994__$1 = state_24994;
var statearr_25005_25031 = state_24994__$1;
(statearr_25005_25031[(2)] = inst_24985);

(statearr_25005_25031[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (9))){
var state_24994__$1 = state_24994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25006_25032 = state_24994__$1;
(statearr_25006_25032[(1)] = (11));

} else {
var statearr_25007_25033 = state_24994__$1;
(statearr_25007_25033[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (5))){
var inst_24971 = (state_24994[(7)]);
var state_24994__$1 = state_24994;
var statearr_25008_25034 = state_24994__$1;
(statearr_25008_25034[(2)] = inst_24971);

(statearr_25008_25034[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (10))){
var inst_24990 = (state_24994[(2)]);
var state_24994__$1 = state_24994;
var statearr_25009_25035 = state_24994__$1;
(statearr_25009_25035[(2)] = inst_24990);

(statearr_25009_25035[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24995 === (8))){
var inst_24971 = (state_24994[(7)]);
var inst_24981 = cljs.core.next(inst_24971);
var inst_24971__$1 = inst_24981;
var state_24994__$1 = (function (){var statearr_25010 = state_24994;
(statearr_25010[(7)] = inst_24971__$1);

return statearr_25010;
})();
var statearr_25011_25036 = state_24994__$1;
(statearr_25011_25036[(2)] = null);

(statearr_25011_25036[(1)] = (2));


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
});})(c__24118__auto__))
;
return ((function (switch__23992__auto__,c__24118__auto__){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_25015 = [null,null,null,null,null,null,null,null];
(statearr_25015[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_25015[(1)] = (1));

return statearr_25015;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_24994){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_24994);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e25016){if((e25016 instanceof Object)){
var ex__23996__auto__ = e25016;
var statearr_25017_25037 = state_24994;
(statearr_25017_25037[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24994);

return cljs.core.cst$kw$recur;
} else {
throw e25016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__25038 = state_24994;
state_24994 = G__25038;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_24994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_24994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto__))
})();
var state__24120__auto__ = (function (){var statearr_25018 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_25018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto__);

return statearr_25018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto__))
);

return c__24118__auto__;
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
var cs = (function (){var G__25267 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25267) : cljs.core.atom.call(null,G__25267));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25268 = (function (ch,cs,meta25269){
this.ch = ch;
this.cs = cs;
this.meta25269 = meta25269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25270,meta25269__$1){
var self__ = this;
var _25270__$1 = this;
return (new cljs.core.async.t_cljs$core$async25268(self__.ch,self__.cs,meta25269__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async25268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25270){
var self__ = this;
var _25270__$1 = this;
return self__.meta25269;
});})(cs))
;


cljs.core.async.t_cljs$core$async25268.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async25268.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25268.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25268.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25268.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25271_25495 = self__.cs;
var G__25272_25496 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25271_25495,G__25272_25496) : cljs.core.reset_BANG_.call(null,G__25271_25495,G__25272_25496));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25268.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25269], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25268";

cljs.core.async.t_cljs$core$async25268.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25268");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25268 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25268(ch__$1,cs__$1,meta25269){
return (new cljs.core.async.t_cljs$core$async25268(ch__$1,cs__$1,meta25269));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25268(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24118__auto___25497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___25497,cs,m,dchan,dctr,done){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___25497,cs,m,dchan,dctr,done){
return (function (state_25407){
var state_val_25408 = (state_25407[(1)]);
if((state_val_25408 === (7))){
var inst_25403 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25409_25498 = state_25407__$1;
(statearr_25409_25498[(2)] = inst_25403);

(statearr_25409_25498[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (20))){
var inst_25306 = (state_25407[(7)]);
var inst_25318 = cljs.core.first(inst_25306);
var inst_25319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25318,(0),null);
var inst_25320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25318,(1),null);
var state_25407__$1 = (function (){var statearr_25410 = state_25407;
(statearr_25410[(8)] = inst_25319);

return statearr_25410;
})();
if(cljs.core.truth_(inst_25320)){
var statearr_25411_25499 = state_25407__$1;
(statearr_25411_25499[(1)] = (22));

} else {
var statearr_25412_25500 = state_25407__$1;
(statearr_25412_25500[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (27))){
var inst_25348 = (state_25407[(9)]);
var inst_25350 = (state_25407[(10)]);
var inst_25355 = (state_25407[(11)]);
var inst_25275 = (state_25407[(12)]);
var inst_25355__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25348,inst_25350);
var inst_25356 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25355__$1,inst_25275,done);
var state_25407__$1 = (function (){var statearr_25413 = state_25407;
(statearr_25413[(11)] = inst_25355__$1);

return statearr_25413;
})();
if(cljs.core.truth_(inst_25356)){
var statearr_25414_25501 = state_25407__$1;
(statearr_25414_25501[(1)] = (30));

} else {
var statearr_25415_25502 = state_25407__$1;
(statearr_25415_25502[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (1))){
var state_25407__$1 = state_25407;
var statearr_25416_25503 = state_25407__$1;
(statearr_25416_25503[(2)] = null);

(statearr_25416_25503[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (24))){
var inst_25306 = (state_25407[(7)]);
var inst_25325 = (state_25407[(2)]);
var inst_25326 = cljs.core.next(inst_25306);
var inst_25284 = inst_25326;
var inst_25285 = null;
var inst_25286 = (0);
var inst_25287 = (0);
var state_25407__$1 = (function (){var statearr_25417 = state_25407;
(statearr_25417[(13)] = inst_25286);

(statearr_25417[(14)] = inst_25284);

(statearr_25417[(15)] = inst_25325);

(statearr_25417[(16)] = inst_25285);

(statearr_25417[(17)] = inst_25287);

return statearr_25417;
})();
var statearr_25418_25504 = state_25407__$1;
(statearr_25418_25504[(2)] = null);

(statearr_25418_25504[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (39))){
var state_25407__$1 = state_25407;
var statearr_25422_25505 = state_25407__$1;
(statearr_25422_25505[(2)] = null);

(statearr_25422_25505[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (4))){
var inst_25275 = (state_25407[(12)]);
var inst_25275__$1 = (state_25407[(2)]);
var inst_25276 = (inst_25275__$1 == null);
var state_25407__$1 = (function (){var statearr_25423 = state_25407;
(statearr_25423[(12)] = inst_25275__$1);

return statearr_25423;
})();
if(cljs.core.truth_(inst_25276)){
var statearr_25424_25506 = state_25407__$1;
(statearr_25424_25506[(1)] = (5));

} else {
var statearr_25425_25507 = state_25407__$1;
(statearr_25425_25507[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (15))){
var inst_25286 = (state_25407[(13)]);
var inst_25284 = (state_25407[(14)]);
var inst_25285 = (state_25407[(16)]);
var inst_25287 = (state_25407[(17)]);
var inst_25302 = (state_25407[(2)]);
var inst_25303 = (inst_25287 + (1));
var tmp25419 = inst_25286;
var tmp25420 = inst_25284;
var tmp25421 = inst_25285;
var inst_25284__$1 = tmp25420;
var inst_25285__$1 = tmp25421;
var inst_25286__$1 = tmp25419;
var inst_25287__$1 = inst_25303;
var state_25407__$1 = (function (){var statearr_25426 = state_25407;
(statearr_25426[(13)] = inst_25286__$1);

(statearr_25426[(14)] = inst_25284__$1);

(statearr_25426[(18)] = inst_25302);

(statearr_25426[(16)] = inst_25285__$1);

(statearr_25426[(17)] = inst_25287__$1);

return statearr_25426;
})();
var statearr_25427_25508 = state_25407__$1;
(statearr_25427_25508[(2)] = null);

(statearr_25427_25508[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (21))){
var inst_25329 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25431_25509 = state_25407__$1;
(statearr_25431_25509[(2)] = inst_25329);

(statearr_25431_25509[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (31))){
var inst_25355 = (state_25407[(11)]);
var inst_25359 = done(null);
var inst_25360 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25355);
var state_25407__$1 = (function (){var statearr_25432 = state_25407;
(statearr_25432[(19)] = inst_25359);

return statearr_25432;
})();
var statearr_25433_25510 = state_25407__$1;
(statearr_25433_25510[(2)] = inst_25360);

(statearr_25433_25510[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (32))){
var inst_25348 = (state_25407[(9)]);
var inst_25349 = (state_25407[(20)]);
var inst_25347 = (state_25407[(21)]);
var inst_25350 = (state_25407[(10)]);
var inst_25362 = (state_25407[(2)]);
var inst_25363 = (inst_25350 + (1));
var tmp25428 = inst_25348;
var tmp25429 = inst_25349;
var tmp25430 = inst_25347;
var inst_25347__$1 = tmp25430;
var inst_25348__$1 = tmp25428;
var inst_25349__$1 = tmp25429;
var inst_25350__$1 = inst_25363;
var state_25407__$1 = (function (){var statearr_25434 = state_25407;
(statearr_25434[(22)] = inst_25362);

(statearr_25434[(9)] = inst_25348__$1);

(statearr_25434[(20)] = inst_25349__$1);

(statearr_25434[(21)] = inst_25347__$1);

(statearr_25434[(10)] = inst_25350__$1);

return statearr_25434;
})();
var statearr_25435_25511 = state_25407__$1;
(statearr_25435_25511[(2)] = null);

(statearr_25435_25511[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (40))){
var inst_25375 = (state_25407[(23)]);
var inst_25379 = done(null);
var inst_25380 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25375);
var state_25407__$1 = (function (){var statearr_25436 = state_25407;
(statearr_25436[(24)] = inst_25379);

return statearr_25436;
})();
var statearr_25437_25512 = state_25407__$1;
(statearr_25437_25512[(2)] = inst_25380);

(statearr_25437_25512[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (33))){
var inst_25366 = (state_25407[(25)]);
var inst_25368 = cljs.core.chunked_seq_QMARK_(inst_25366);
var state_25407__$1 = state_25407;
if(inst_25368){
var statearr_25438_25513 = state_25407__$1;
(statearr_25438_25513[(1)] = (36));

} else {
var statearr_25439_25514 = state_25407__$1;
(statearr_25439_25514[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (13))){
var inst_25296 = (state_25407[(26)]);
var inst_25299 = cljs.core.async.close_BANG_(inst_25296);
var state_25407__$1 = state_25407;
var statearr_25440_25515 = state_25407__$1;
(statearr_25440_25515[(2)] = inst_25299);

(statearr_25440_25515[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (22))){
var inst_25319 = (state_25407[(8)]);
var inst_25322 = cljs.core.async.close_BANG_(inst_25319);
var state_25407__$1 = state_25407;
var statearr_25441_25516 = state_25407__$1;
(statearr_25441_25516[(2)] = inst_25322);

(statearr_25441_25516[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (36))){
var inst_25366 = (state_25407[(25)]);
var inst_25370 = cljs.core.chunk_first(inst_25366);
var inst_25371 = cljs.core.chunk_rest(inst_25366);
var inst_25372 = cljs.core.count(inst_25370);
var inst_25347 = inst_25371;
var inst_25348 = inst_25370;
var inst_25349 = inst_25372;
var inst_25350 = (0);
var state_25407__$1 = (function (){var statearr_25442 = state_25407;
(statearr_25442[(9)] = inst_25348);

(statearr_25442[(20)] = inst_25349);

(statearr_25442[(21)] = inst_25347);

(statearr_25442[(10)] = inst_25350);

return statearr_25442;
})();
var statearr_25443_25517 = state_25407__$1;
(statearr_25443_25517[(2)] = null);

(statearr_25443_25517[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (41))){
var inst_25366 = (state_25407[(25)]);
var inst_25382 = (state_25407[(2)]);
var inst_25383 = cljs.core.next(inst_25366);
var inst_25347 = inst_25383;
var inst_25348 = null;
var inst_25349 = (0);
var inst_25350 = (0);
var state_25407__$1 = (function (){var statearr_25444 = state_25407;
(statearr_25444[(9)] = inst_25348);

(statearr_25444[(20)] = inst_25349);

(statearr_25444[(21)] = inst_25347);

(statearr_25444[(27)] = inst_25382);

(statearr_25444[(10)] = inst_25350);

return statearr_25444;
})();
var statearr_25445_25518 = state_25407__$1;
(statearr_25445_25518[(2)] = null);

(statearr_25445_25518[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (43))){
var state_25407__$1 = state_25407;
var statearr_25446_25519 = state_25407__$1;
(statearr_25446_25519[(2)] = null);

(statearr_25446_25519[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (29))){
var inst_25391 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25447_25520 = state_25407__$1;
(statearr_25447_25520[(2)] = inst_25391);

(statearr_25447_25520[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (44))){
var inst_25400 = (state_25407[(2)]);
var state_25407__$1 = (function (){var statearr_25448 = state_25407;
(statearr_25448[(28)] = inst_25400);

return statearr_25448;
})();
var statearr_25449_25521 = state_25407__$1;
(statearr_25449_25521[(2)] = null);

(statearr_25449_25521[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (6))){
var inst_25339 = (state_25407[(29)]);
var inst_25338 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25339__$1 = cljs.core.keys(inst_25338);
var inst_25340 = cljs.core.count(inst_25339__$1);
var inst_25341 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_25340) : cljs.core.reset_BANG_.call(null,dctr,inst_25340));
var inst_25346 = cljs.core.seq(inst_25339__$1);
var inst_25347 = inst_25346;
var inst_25348 = null;
var inst_25349 = (0);
var inst_25350 = (0);
var state_25407__$1 = (function (){var statearr_25450 = state_25407;
(statearr_25450[(29)] = inst_25339__$1);

(statearr_25450[(30)] = inst_25341);

(statearr_25450[(9)] = inst_25348);

(statearr_25450[(20)] = inst_25349);

(statearr_25450[(21)] = inst_25347);

(statearr_25450[(10)] = inst_25350);

return statearr_25450;
})();
var statearr_25451_25522 = state_25407__$1;
(statearr_25451_25522[(2)] = null);

(statearr_25451_25522[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (28))){
var inst_25366 = (state_25407[(25)]);
var inst_25347 = (state_25407[(21)]);
var inst_25366__$1 = cljs.core.seq(inst_25347);
var state_25407__$1 = (function (){var statearr_25452 = state_25407;
(statearr_25452[(25)] = inst_25366__$1);

return statearr_25452;
})();
if(inst_25366__$1){
var statearr_25453_25523 = state_25407__$1;
(statearr_25453_25523[(1)] = (33));

} else {
var statearr_25454_25524 = state_25407__$1;
(statearr_25454_25524[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (25))){
var inst_25349 = (state_25407[(20)]);
var inst_25350 = (state_25407[(10)]);
var inst_25352 = (inst_25350 < inst_25349);
var inst_25353 = inst_25352;
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25353)){
var statearr_25455_25525 = state_25407__$1;
(statearr_25455_25525[(1)] = (27));

} else {
var statearr_25456_25526 = state_25407__$1;
(statearr_25456_25526[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (34))){
var state_25407__$1 = state_25407;
var statearr_25457_25527 = state_25407__$1;
(statearr_25457_25527[(2)] = null);

(statearr_25457_25527[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (17))){
var state_25407__$1 = state_25407;
var statearr_25458_25528 = state_25407__$1;
(statearr_25458_25528[(2)] = null);

(statearr_25458_25528[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (3))){
var inst_25405 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25407__$1,inst_25405);
} else {
if((state_val_25408 === (12))){
var inst_25334 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25459_25529 = state_25407__$1;
(statearr_25459_25529[(2)] = inst_25334);

(statearr_25459_25529[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (2))){
var state_25407__$1 = state_25407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25407__$1,(4),ch);
} else {
if((state_val_25408 === (23))){
var state_25407__$1 = state_25407;
var statearr_25460_25530 = state_25407__$1;
(statearr_25460_25530[(2)] = null);

(statearr_25460_25530[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (35))){
var inst_25389 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25461_25531 = state_25407__$1;
(statearr_25461_25531[(2)] = inst_25389);

(statearr_25461_25531[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (19))){
var inst_25306 = (state_25407[(7)]);
var inst_25310 = cljs.core.chunk_first(inst_25306);
var inst_25311 = cljs.core.chunk_rest(inst_25306);
var inst_25312 = cljs.core.count(inst_25310);
var inst_25284 = inst_25311;
var inst_25285 = inst_25310;
var inst_25286 = inst_25312;
var inst_25287 = (0);
var state_25407__$1 = (function (){var statearr_25462 = state_25407;
(statearr_25462[(13)] = inst_25286);

(statearr_25462[(14)] = inst_25284);

(statearr_25462[(16)] = inst_25285);

(statearr_25462[(17)] = inst_25287);

return statearr_25462;
})();
var statearr_25463_25532 = state_25407__$1;
(statearr_25463_25532[(2)] = null);

(statearr_25463_25532[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (11))){
var inst_25284 = (state_25407[(14)]);
var inst_25306 = (state_25407[(7)]);
var inst_25306__$1 = cljs.core.seq(inst_25284);
var state_25407__$1 = (function (){var statearr_25464 = state_25407;
(statearr_25464[(7)] = inst_25306__$1);

return statearr_25464;
})();
if(inst_25306__$1){
var statearr_25465_25533 = state_25407__$1;
(statearr_25465_25533[(1)] = (16));

} else {
var statearr_25466_25534 = state_25407__$1;
(statearr_25466_25534[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (9))){
var inst_25336 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25467_25535 = state_25407__$1;
(statearr_25467_25535[(2)] = inst_25336);

(statearr_25467_25535[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (5))){
var inst_25282 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25283 = cljs.core.seq(inst_25282);
var inst_25284 = inst_25283;
var inst_25285 = null;
var inst_25286 = (0);
var inst_25287 = (0);
var state_25407__$1 = (function (){var statearr_25468 = state_25407;
(statearr_25468[(13)] = inst_25286);

(statearr_25468[(14)] = inst_25284);

(statearr_25468[(16)] = inst_25285);

(statearr_25468[(17)] = inst_25287);

return statearr_25468;
})();
var statearr_25469_25536 = state_25407__$1;
(statearr_25469_25536[(2)] = null);

(statearr_25469_25536[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (14))){
var state_25407__$1 = state_25407;
var statearr_25470_25537 = state_25407__$1;
(statearr_25470_25537[(2)] = null);

(statearr_25470_25537[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (45))){
var inst_25397 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25471_25538 = state_25407__$1;
(statearr_25471_25538[(2)] = inst_25397);

(statearr_25471_25538[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (26))){
var inst_25339 = (state_25407[(29)]);
var inst_25393 = (state_25407[(2)]);
var inst_25394 = cljs.core.seq(inst_25339);
var state_25407__$1 = (function (){var statearr_25472 = state_25407;
(statearr_25472[(31)] = inst_25393);

return statearr_25472;
})();
if(inst_25394){
var statearr_25473_25539 = state_25407__$1;
(statearr_25473_25539[(1)] = (42));

} else {
var statearr_25474_25540 = state_25407__$1;
(statearr_25474_25540[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (16))){
var inst_25306 = (state_25407[(7)]);
var inst_25308 = cljs.core.chunked_seq_QMARK_(inst_25306);
var state_25407__$1 = state_25407;
if(inst_25308){
var statearr_25475_25541 = state_25407__$1;
(statearr_25475_25541[(1)] = (19));

} else {
var statearr_25476_25542 = state_25407__$1;
(statearr_25476_25542[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (38))){
var inst_25386 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25477_25543 = state_25407__$1;
(statearr_25477_25543[(2)] = inst_25386);

(statearr_25477_25543[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (30))){
var state_25407__$1 = state_25407;
var statearr_25478_25544 = state_25407__$1;
(statearr_25478_25544[(2)] = null);

(statearr_25478_25544[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (10))){
var inst_25285 = (state_25407[(16)]);
var inst_25287 = (state_25407[(17)]);
var inst_25295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25285,inst_25287);
var inst_25296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25295,(0),null);
var inst_25297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25295,(1),null);
var state_25407__$1 = (function (){var statearr_25479 = state_25407;
(statearr_25479[(26)] = inst_25296);

return statearr_25479;
})();
if(cljs.core.truth_(inst_25297)){
var statearr_25480_25545 = state_25407__$1;
(statearr_25480_25545[(1)] = (13));

} else {
var statearr_25481_25546 = state_25407__$1;
(statearr_25481_25546[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (18))){
var inst_25332 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25482_25547 = state_25407__$1;
(statearr_25482_25547[(2)] = inst_25332);

(statearr_25482_25547[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (42))){
var state_25407__$1 = state_25407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25407__$1,(45),dchan);
} else {
if((state_val_25408 === (37))){
var inst_25375 = (state_25407[(23)]);
var inst_25366 = (state_25407[(25)]);
var inst_25275 = (state_25407[(12)]);
var inst_25375__$1 = cljs.core.first(inst_25366);
var inst_25376 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25375__$1,inst_25275,done);
var state_25407__$1 = (function (){var statearr_25483 = state_25407;
(statearr_25483[(23)] = inst_25375__$1);

return statearr_25483;
})();
if(cljs.core.truth_(inst_25376)){
var statearr_25484_25548 = state_25407__$1;
(statearr_25484_25548[(1)] = (39));

} else {
var statearr_25485_25549 = state_25407__$1;
(statearr_25485_25549[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25408 === (8))){
var inst_25286 = (state_25407[(13)]);
var inst_25287 = (state_25407[(17)]);
var inst_25289 = (inst_25287 < inst_25286);
var inst_25290 = inst_25289;
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25290)){
var statearr_25486_25550 = state_25407__$1;
(statearr_25486_25550[(1)] = (10));

} else {
var statearr_25487_25551 = state_25407__$1;
(statearr_25487_25551[(1)] = (11));

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
});})(c__24118__auto___25497,cs,m,dchan,dctr,done))
;
return ((function (switch__23992__auto__,c__24118__auto___25497,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23993__auto__ = null;
var cljs$core$async$mult_$_state_machine__23993__auto____0 = (function (){
var statearr_25491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25491[(0)] = cljs$core$async$mult_$_state_machine__23993__auto__);

(statearr_25491[(1)] = (1));

return statearr_25491;
});
var cljs$core$async$mult_$_state_machine__23993__auto____1 = (function (state_25407){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_25407);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e25492){if((e25492 instanceof Object)){
var ex__23996__auto__ = e25492;
var statearr_25493_25552 = state_25407;
(statearr_25493_25552[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25407);

return cljs.core.cst$kw$recur;
} else {
throw e25492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__25553 = state_25407;
state_25407 = G__25553;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23993__auto__ = function(state_25407){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23993__auto____1.call(this,state_25407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23993__auto____0;
cljs$core$async$mult_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23993__auto____1;
return cljs$core$async$mult_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___25497,cs,m,dchan,dctr,done))
})();
var state__24120__auto__ = (function (){var statearr_25494 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_25494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___25497);

return statearr_25494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___25497,cs,m,dchan,dctr,done))
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
var args25554 = [];
var len__8739__auto___25557 = arguments.length;
var i__8740__auto___25558 = (0);
while(true){
if((i__8740__auto___25558 < len__8739__auto___25557)){
args25554.push((arguments[i__8740__auto___25558]));

var G__25559 = (i__8740__auto___25558 + (1));
i__8740__auto___25558 = G__25559;
continue;
} else {
}
break;
}

var G__25556 = args25554.length;
switch (G__25556) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25554.length)].join('')));

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
var len__8739__auto___25571 = arguments.length;
var i__8740__auto___25572 = (0);
while(true){
if((i__8740__auto___25572 < len__8739__auto___25571)){
args__8746__auto__.push((arguments[i__8740__auto___25572]));

var G__25573 = (i__8740__auto___25572 + (1));
i__8740__auto___25572 = G__25573;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((3) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8747__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25565){
var map__25566 = p__25565;
var map__25566__$1 = ((((!((map__25566 == null)))?((((map__25566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25566):map__25566);
var opts = map__25566__$1;
var statearr_25568_25574 = state;
(statearr_25568_25574[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__25566,map__25566__$1,opts){
return (function (val){
var statearr_25569_25575 = state;
(statearr_25569_25575[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25566,map__25566__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_25570_25576 = state;
(statearr_25570_25576[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25561){
var G__25562 = cljs.core.first(seq25561);
var seq25561__$1 = cljs.core.next(seq25561);
var G__25563 = cljs.core.first(seq25561__$1);
var seq25561__$2 = cljs.core.next(seq25561__$1);
var G__25564 = cljs.core.first(seq25561__$2);
var seq25561__$3 = cljs.core.next(seq25561__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25562,G__25563,G__25564,seq25561__$3);
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
var cs = (function (){var G__25748 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25748) : cljs.core.atom.call(null,G__25748));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__25749 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25749) : cljs.core.atom.call(null,G__25749));
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
if(typeof cljs.core.async.t_cljs$core$async25750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25750 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25751){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25751 = meta25751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25752,meta25751__$1){
var self__ = this;
var _25752__$1 = this;
return (new cljs.core.async.t_cljs$core$async25750(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25751__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25752){
var self__ = this;
var _25752__$1 = this;
return self__.meta25751;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25753_25919 = self__.cs;
var G__25754_25920 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25753_25919,G__25754_25920) : cljs.core.reset_BANG_.call(null,G__25753_25919,G__25754_25920));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25750.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25750.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25751], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25750";

cljs.core.async.t_cljs$core$async25750.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25750");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25750 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25750(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25751){
return (new cljs.core.async.t_cljs$core$async25750(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25751));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25750(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24118__auto___25921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___25921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___25921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25856){
var state_val_25857 = (state_25856[(1)]);
if((state_val_25857 === (7))){
var inst_25771 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25858_25922 = state_25856__$1;
(statearr_25858_25922[(2)] = inst_25771);

(statearr_25858_25922[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (20))){
var inst_25783 = (state_25856[(7)]);
var state_25856__$1 = state_25856;
var statearr_25859_25923 = state_25856__$1;
(statearr_25859_25923[(2)] = inst_25783);

(statearr_25859_25923[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (27))){
var state_25856__$1 = state_25856;
var statearr_25860_25924 = state_25856__$1;
(statearr_25860_25924[(2)] = null);

(statearr_25860_25924[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (1))){
var inst_25758 = (state_25856[(8)]);
var inst_25758__$1 = calc_state();
var inst_25760 = (inst_25758__$1 == null);
var inst_25761 = cljs.core.not(inst_25760);
var state_25856__$1 = (function (){var statearr_25861 = state_25856;
(statearr_25861[(8)] = inst_25758__$1);

return statearr_25861;
})();
if(inst_25761){
var statearr_25862_25925 = state_25856__$1;
(statearr_25862_25925[(1)] = (2));

} else {
var statearr_25863_25926 = state_25856__$1;
(statearr_25863_25926[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (24))){
var inst_25807 = (state_25856[(9)]);
var inst_25830 = (state_25856[(10)]);
var inst_25816 = (state_25856[(11)]);
var inst_25830__$1 = (inst_25807.cljs$core$IFn$_invoke$arity$1 ? inst_25807.cljs$core$IFn$_invoke$arity$1(inst_25816) : inst_25807.call(null,inst_25816));
var state_25856__$1 = (function (){var statearr_25864 = state_25856;
(statearr_25864[(10)] = inst_25830__$1);

return statearr_25864;
})();
if(cljs.core.truth_(inst_25830__$1)){
var statearr_25865_25927 = state_25856__$1;
(statearr_25865_25927[(1)] = (29));

} else {
var statearr_25866_25928 = state_25856__$1;
(statearr_25866_25928[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (4))){
var inst_25774 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25774)){
var statearr_25867_25929 = state_25856__$1;
(statearr_25867_25929[(1)] = (8));

} else {
var statearr_25868_25930 = state_25856__$1;
(statearr_25868_25930[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (15))){
var inst_25801 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25801)){
var statearr_25869_25931 = state_25856__$1;
(statearr_25869_25931[(1)] = (19));

} else {
var statearr_25870_25932 = state_25856__$1;
(statearr_25870_25932[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (21))){
var inst_25806 = (state_25856[(12)]);
var inst_25806__$1 = (state_25856[(2)]);
var inst_25807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25806__$1,cljs.core.cst$kw$solos);
var inst_25808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25806__$1,cljs.core.cst$kw$mutes);
var inst_25809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25806__$1,cljs.core.cst$kw$reads);
var state_25856__$1 = (function (){var statearr_25871 = state_25856;
(statearr_25871[(9)] = inst_25807);

(statearr_25871[(12)] = inst_25806__$1);

(statearr_25871[(13)] = inst_25808);

return statearr_25871;
})();
return cljs.core.async.ioc_alts_BANG_(state_25856__$1,(22),inst_25809);
} else {
if((state_val_25857 === (31))){
var inst_25838 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25838)){
var statearr_25872_25933 = state_25856__$1;
(statearr_25872_25933[(1)] = (32));

} else {
var statearr_25873_25934 = state_25856__$1;
(statearr_25873_25934[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (32))){
var inst_25815 = (state_25856[(14)]);
var state_25856__$1 = state_25856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25856__$1,(35),out,inst_25815);
} else {
if((state_val_25857 === (33))){
var inst_25806 = (state_25856[(12)]);
var inst_25783 = inst_25806;
var state_25856__$1 = (function (){var statearr_25874 = state_25856;
(statearr_25874[(7)] = inst_25783);

return statearr_25874;
})();
var statearr_25875_25935 = state_25856__$1;
(statearr_25875_25935[(2)] = null);

(statearr_25875_25935[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (13))){
var inst_25783 = (state_25856[(7)]);
var inst_25790 = inst_25783.cljs$lang$protocol_mask$partition0$;
var inst_25791 = (inst_25790 & (64));
var inst_25792 = inst_25783.cljs$core$ISeq$;
var inst_25793 = (cljs.core.PROTOCOL_SENTINEL === inst_25792);
var inst_25794 = (inst_25791) || (inst_25793);
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25794)){
var statearr_25876_25936 = state_25856__$1;
(statearr_25876_25936[(1)] = (16));

} else {
var statearr_25877_25937 = state_25856__$1;
(statearr_25877_25937[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (22))){
var inst_25815 = (state_25856[(14)]);
var inst_25816 = (state_25856[(11)]);
var inst_25814 = (state_25856[(2)]);
var inst_25815__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25814,(0),null);
var inst_25816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25814,(1),null);
var inst_25817 = (inst_25815__$1 == null);
var inst_25818 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25816__$1,change);
var inst_25819 = (inst_25817) || (inst_25818);
var state_25856__$1 = (function (){var statearr_25878 = state_25856;
(statearr_25878[(14)] = inst_25815__$1);

(statearr_25878[(11)] = inst_25816__$1);

return statearr_25878;
})();
if(cljs.core.truth_(inst_25819)){
var statearr_25879_25938 = state_25856__$1;
(statearr_25879_25938[(1)] = (23));

} else {
var statearr_25880_25939 = state_25856__$1;
(statearr_25880_25939[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (36))){
var inst_25806 = (state_25856[(12)]);
var inst_25783 = inst_25806;
var state_25856__$1 = (function (){var statearr_25881 = state_25856;
(statearr_25881[(7)] = inst_25783);

return statearr_25881;
})();
var statearr_25882_25940 = state_25856__$1;
(statearr_25882_25940[(2)] = null);

(statearr_25882_25940[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (29))){
var inst_25830 = (state_25856[(10)]);
var state_25856__$1 = state_25856;
var statearr_25883_25941 = state_25856__$1;
(statearr_25883_25941[(2)] = inst_25830);

(statearr_25883_25941[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (6))){
var state_25856__$1 = state_25856;
var statearr_25884_25942 = state_25856__$1;
(statearr_25884_25942[(2)] = false);

(statearr_25884_25942[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (28))){
var inst_25826 = (state_25856[(2)]);
var inst_25827 = calc_state();
var inst_25783 = inst_25827;
var state_25856__$1 = (function (){var statearr_25885 = state_25856;
(statearr_25885[(7)] = inst_25783);

(statearr_25885[(15)] = inst_25826);

return statearr_25885;
})();
var statearr_25886_25943 = state_25856__$1;
(statearr_25886_25943[(2)] = null);

(statearr_25886_25943[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (25))){
var inst_25852 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25887_25944 = state_25856__$1;
(statearr_25887_25944[(2)] = inst_25852);

(statearr_25887_25944[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (34))){
var inst_25850 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25888_25945 = state_25856__$1;
(statearr_25888_25945[(2)] = inst_25850);

(statearr_25888_25945[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (17))){
var state_25856__$1 = state_25856;
var statearr_25889_25946 = state_25856__$1;
(statearr_25889_25946[(2)] = false);

(statearr_25889_25946[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (3))){
var state_25856__$1 = state_25856;
var statearr_25890_25947 = state_25856__$1;
(statearr_25890_25947[(2)] = false);

(statearr_25890_25947[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (12))){
var inst_25854 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25856__$1,inst_25854);
} else {
if((state_val_25857 === (2))){
var inst_25758 = (state_25856[(8)]);
var inst_25763 = inst_25758.cljs$lang$protocol_mask$partition0$;
var inst_25764 = (inst_25763 & (64));
var inst_25765 = inst_25758.cljs$core$ISeq$;
var inst_25766 = (cljs.core.PROTOCOL_SENTINEL === inst_25765);
var inst_25767 = (inst_25764) || (inst_25766);
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25767)){
var statearr_25891_25948 = state_25856__$1;
(statearr_25891_25948[(1)] = (5));

} else {
var statearr_25892_25949 = state_25856__$1;
(statearr_25892_25949[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (23))){
var inst_25815 = (state_25856[(14)]);
var inst_25821 = (inst_25815 == null);
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25821)){
var statearr_25893_25950 = state_25856__$1;
(statearr_25893_25950[(1)] = (26));

} else {
var statearr_25894_25951 = state_25856__$1;
(statearr_25894_25951[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (35))){
var inst_25841 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25841)){
var statearr_25895_25952 = state_25856__$1;
(statearr_25895_25952[(1)] = (36));

} else {
var statearr_25896_25953 = state_25856__$1;
(statearr_25896_25953[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (19))){
var inst_25783 = (state_25856[(7)]);
var inst_25803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25783);
var state_25856__$1 = state_25856;
var statearr_25897_25954 = state_25856__$1;
(statearr_25897_25954[(2)] = inst_25803);

(statearr_25897_25954[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (11))){
var inst_25783 = (state_25856[(7)]);
var inst_25787 = (inst_25783 == null);
var inst_25788 = cljs.core.not(inst_25787);
var state_25856__$1 = state_25856;
if(inst_25788){
var statearr_25898_25955 = state_25856__$1;
(statearr_25898_25955[(1)] = (13));

} else {
var statearr_25899_25956 = state_25856__$1;
(statearr_25899_25956[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (9))){
var inst_25758 = (state_25856[(8)]);
var state_25856__$1 = state_25856;
var statearr_25900_25957 = state_25856__$1;
(statearr_25900_25957[(2)] = inst_25758);

(statearr_25900_25957[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (5))){
var state_25856__$1 = state_25856;
var statearr_25901_25958 = state_25856__$1;
(statearr_25901_25958[(2)] = true);

(statearr_25901_25958[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (14))){
var state_25856__$1 = state_25856;
var statearr_25902_25959 = state_25856__$1;
(statearr_25902_25959[(2)] = false);

(statearr_25902_25959[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (26))){
var inst_25816 = (state_25856[(11)]);
var inst_25823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25816);
var state_25856__$1 = state_25856;
var statearr_25903_25960 = state_25856__$1;
(statearr_25903_25960[(2)] = inst_25823);

(statearr_25903_25960[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (16))){
var state_25856__$1 = state_25856;
var statearr_25904_25961 = state_25856__$1;
(statearr_25904_25961[(2)] = true);

(statearr_25904_25961[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (38))){
var inst_25846 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25905_25962 = state_25856__$1;
(statearr_25905_25962[(2)] = inst_25846);

(statearr_25905_25962[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (30))){
var inst_25807 = (state_25856[(9)]);
var inst_25808 = (state_25856[(13)]);
var inst_25816 = (state_25856[(11)]);
var inst_25833 = cljs.core.empty_QMARK_(inst_25807);
var inst_25834 = (inst_25808.cljs$core$IFn$_invoke$arity$1 ? inst_25808.cljs$core$IFn$_invoke$arity$1(inst_25816) : inst_25808.call(null,inst_25816));
var inst_25835 = cljs.core.not(inst_25834);
var inst_25836 = (inst_25833) && (inst_25835);
var state_25856__$1 = state_25856;
var statearr_25906_25963 = state_25856__$1;
(statearr_25906_25963[(2)] = inst_25836);

(statearr_25906_25963[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (10))){
var inst_25758 = (state_25856[(8)]);
var inst_25779 = (state_25856[(2)]);
var inst_25780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25779,cljs.core.cst$kw$solos);
var inst_25781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25779,cljs.core.cst$kw$mutes);
var inst_25782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25779,cljs.core.cst$kw$reads);
var inst_25783 = inst_25758;
var state_25856__$1 = (function (){var statearr_25907 = state_25856;
(statearr_25907[(16)] = inst_25780);

(statearr_25907[(17)] = inst_25781);

(statearr_25907[(7)] = inst_25783);

(statearr_25907[(18)] = inst_25782);

return statearr_25907;
})();
var statearr_25908_25964 = state_25856__$1;
(statearr_25908_25964[(2)] = null);

(statearr_25908_25964[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (18))){
var inst_25798 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25909_25965 = state_25856__$1;
(statearr_25909_25965[(2)] = inst_25798);

(statearr_25909_25965[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (37))){
var state_25856__$1 = state_25856;
var statearr_25910_25966 = state_25856__$1;
(statearr_25910_25966[(2)] = null);

(statearr_25910_25966[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25857 === (8))){
var inst_25758 = (state_25856[(8)]);
var inst_25776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25758);
var state_25856__$1 = state_25856;
var statearr_25911_25967 = state_25856__$1;
(statearr_25911_25967[(2)] = inst_25776);

(statearr_25911_25967[(1)] = (10));


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
});})(c__24118__auto___25921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23992__auto__,c__24118__auto___25921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23993__auto__ = null;
var cljs$core$async$mix_$_state_machine__23993__auto____0 = (function (){
var statearr_25915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25915[(0)] = cljs$core$async$mix_$_state_machine__23993__auto__);

(statearr_25915[(1)] = (1));

return statearr_25915;
});
var cljs$core$async$mix_$_state_machine__23993__auto____1 = (function (state_25856){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_25856);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e25916){if((e25916 instanceof Object)){
var ex__23996__auto__ = e25916;
var statearr_25917_25968 = state_25856;
(statearr_25917_25968[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25856);

return cljs.core.cst$kw$recur;
} else {
throw e25916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__25969 = state_25856;
state_25856 = G__25969;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23993__auto__ = function(state_25856){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23993__auto____1.call(this,state_25856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23993__auto____0;
cljs$core$async$mix_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23993__auto____1;
return cljs$core$async$mix_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___25921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24120__auto__ = (function (){var statearr_25918 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_25918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___25921);

return statearr_25918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___25921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25970 = [];
var len__8739__auto___25973 = arguments.length;
var i__8740__auto___25974 = (0);
while(true){
if((i__8740__auto___25974 < len__8739__auto___25973)){
args25970.push((arguments[i__8740__auto___25974]));

var G__25975 = (i__8740__auto___25974 + (1));
i__8740__auto___25974 = G__25975;
continue;
} else {
}
break;
}

var G__25972 = args25970.length;
switch (G__25972) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25970.length)].join('')));

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
var args25978 = [];
var len__8739__auto___26106 = arguments.length;
var i__8740__auto___26107 = (0);
while(true){
if((i__8740__auto___26107 < len__8739__auto___26106)){
args25978.push((arguments[i__8740__auto___26107]));

var G__26108 = (i__8740__auto___26107 + (1));
i__8740__auto___26107 = G__26108;
continue;
} else {
}
break;
}

var G__25980 = args25978.length;
switch (G__25980) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25978.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__25981 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25981) : cljs.core.atom.call(null,G__25981));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7523__auto__,mults){
return (function (p1__25977_SHARP_){
if(cljs.core.truth_((p1__25977_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25977_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25977_SHARP_.call(null,topic)))){
return p1__25977_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25977_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7523__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25982 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25983){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25983 = meta25983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25984,meta25983__$1){
var self__ = this;
var _25984__$1 = this;
return (new cljs.core.async.t_cljs$core$async25982(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25983__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25984){
var self__ = this;
var _25984__$1 = this;
return self__.meta25983;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25985 = self__.mults;
var G__25986 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25985,G__25986) : cljs.core.reset_BANG_.call(null,G__25985,G__25986));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25982.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25982.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25983], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25982";

cljs.core.async.t_cljs$core$async25982.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25982");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25982 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25982(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25983){
return (new cljs.core.async.t_cljs$core$async25982(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25983));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25982(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24118__auto___26110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___26110,mults,ensure_mult,p){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___26110,mults,ensure_mult,p){
return (function (state_26058){
var state_val_26059 = (state_26058[(1)]);
if((state_val_26059 === (7))){
var inst_26054 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26060_26111 = state_26058__$1;
(statearr_26060_26111[(2)] = inst_26054);

(statearr_26060_26111[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (20))){
var state_26058__$1 = state_26058;
var statearr_26061_26112 = state_26058__$1;
(statearr_26061_26112[(2)] = null);

(statearr_26061_26112[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (1))){
var state_26058__$1 = state_26058;
var statearr_26062_26113 = state_26058__$1;
(statearr_26062_26113[(2)] = null);

(statearr_26062_26113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (24))){
var inst_26037 = (state_26058[(7)]);
var inst_26046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26037);
var state_26058__$1 = state_26058;
var statearr_26063_26114 = state_26058__$1;
(statearr_26063_26114[(2)] = inst_26046);

(statearr_26063_26114[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (4))){
var inst_25989 = (state_26058[(8)]);
var inst_25989__$1 = (state_26058[(2)]);
var inst_25990 = (inst_25989__$1 == null);
var state_26058__$1 = (function (){var statearr_26064 = state_26058;
(statearr_26064[(8)] = inst_25989__$1);

return statearr_26064;
})();
if(cljs.core.truth_(inst_25990)){
var statearr_26065_26115 = state_26058__$1;
(statearr_26065_26115[(1)] = (5));

} else {
var statearr_26066_26116 = state_26058__$1;
(statearr_26066_26116[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (15))){
var inst_26031 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26067_26117 = state_26058__$1;
(statearr_26067_26117[(2)] = inst_26031);

(statearr_26067_26117[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (21))){
var inst_26051 = (state_26058[(2)]);
var state_26058__$1 = (function (){var statearr_26068 = state_26058;
(statearr_26068[(9)] = inst_26051);

return statearr_26068;
})();
var statearr_26069_26118 = state_26058__$1;
(statearr_26069_26118[(2)] = null);

(statearr_26069_26118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (13))){
var inst_26013 = (state_26058[(10)]);
var inst_26015 = cljs.core.chunked_seq_QMARK_(inst_26013);
var state_26058__$1 = state_26058;
if(inst_26015){
var statearr_26070_26119 = state_26058__$1;
(statearr_26070_26119[(1)] = (16));

} else {
var statearr_26071_26120 = state_26058__$1;
(statearr_26071_26120[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (22))){
var inst_26043 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
if(cljs.core.truth_(inst_26043)){
var statearr_26072_26121 = state_26058__$1;
(statearr_26072_26121[(1)] = (23));

} else {
var statearr_26073_26122 = state_26058__$1;
(statearr_26073_26122[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (6))){
var inst_26037 = (state_26058[(7)]);
var inst_25989 = (state_26058[(8)]);
var inst_26039 = (state_26058[(11)]);
var inst_26037__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25989) : topic_fn.call(null,inst_25989));
var inst_26038 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_26039__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26038,inst_26037__$1);
var state_26058__$1 = (function (){var statearr_26074 = state_26058;
(statearr_26074[(7)] = inst_26037__$1);

(statearr_26074[(11)] = inst_26039__$1);

return statearr_26074;
})();
if(cljs.core.truth_(inst_26039__$1)){
var statearr_26075_26123 = state_26058__$1;
(statearr_26075_26123[(1)] = (19));

} else {
var statearr_26076_26124 = state_26058__$1;
(statearr_26076_26124[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (25))){
var inst_26048 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26077_26125 = state_26058__$1;
(statearr_26077_26125[(2)] = inst_26048);

(statearr_26077_26125[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (17))){
var inst_26013 = (state_26058[(10)]);
var inst_26022 = cljs.core.first(inst_26013);
var inst_26023 = cljs.core.async.muxch_STAR_(inst_26022);
var inst_26024 = cljs.core.async.close_BANG_(inst_26023);
var inst_26025 = cljs.core.next(inst_26013);
var inst_25999 = inst_26025;
var inst_26000 = null;
var inst_26001 = (0);
var inst_26002 = (0);
var state_26058__$1 = (function (){var statearr_26078 = state_26058;
(statearr_26078[(12)] = inst_25999);

(statearr_26078[(13)] = inst_26001);

(statearr_26078[(14)] = inst_26024);

(statearr_26078[(15)] = inst_26002);

(statearr_26078[(16)] = inst_26000);

return statearr_26078;
})();
var statearr_26079_26126 = state_26058__$1;
(statearr_26079_26126[(2)] = null);

(statearr_26079_26126[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (3))){
var inst_26056 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26058__$1,inst_26056);
} else {
if((state_val_26059 === (12))){
var inst_26033 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26080_26127 = state_26058__$1;
(statearr_26080_26127[(2)] = inst_26033);

(statearr_26080_26127[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (2))){
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26058__$1,(4),ch);
} else {
if((state_val_26059 === (23))){
var state_26058__$1 = state_26058;
var statearr_26081_26128 = state_26058__$1;
(statearr_26081_26128[(2)] = null);

(statearr_26081_26128[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (19))){
var inst_25989 = (state_26058[(8)]);
var inst_26039 = (state_26058[(11)]);
var inst_26041 = cljs.core.async.muxch_STAR_(inst_26039);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26058__$1,(22),inst_26041,inst_25989);
} else {
if((state_val_26059 === (11))){
var inst_25999 = (state_26058[(12)]);
var inst_26013 = (state_26058[(10)]);
var inst_26013__$1 = cljs.core.seq(inst_25999);
var state_26058__$1 = (function (){var statearr_26082 = state_26058;
(statearr_26082[(10)] = inst_26013__$1);

return statearr_26082;
})();
if(inst_26013__$1){
var statearr_26083_26129 = state_26058__$1;
(statearr_26083_26129[(1)] = (13));

} else {
var statearr_26084_26130 = state_26058__$1;
(statearr_26084_26130[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (9))){
var inst_26035 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26085_26131 = state_26058__$1;
(statearr_26085_26131[(2)] = inst_26035);

(statearr_26085_26131[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (5))){
var inst_25996 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25997 = cljs.core.vals(inst_25996);
var inst_25998 = cljs.core.seq(inst_25997);
var inst_25999 = inst_25998;
var inst_26000 = null;
var inst_26001 = (0);
var inst_26002 = (0);
var state_26058__$1 = (function (){var statearr_26086 = state_26058;
(statearr_26086[(12)] = inst_25999);

(statearr_26086[(13)] = inst_26001);

(statearr_26086[(15)] = inst_26002);

(statearr_26086[(16)] = inst_26000);

return statearr_26086;
})();
var statearr_26087_26132 = state_26058__$1;
(statearr_26087_26132[(2)] = null);

(statearr_26087_26132[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (14))){
var state_26058__$1 = state_26058;
var statearr_26091_26133 = state_26058__$1;
(statearr_26091_26133[(2)] = null);

(statearr_26091_26133[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (16))){
var inst_26013 = (state_26058[(10)]);
var inst_26017 = cljs.core.chunk_first(inst_26013);
var inst_26018 = cljs.core.chunk_rest(inst_26013);
var inst_26019 = cljs.core.count(inst_26017);
var inst_25999 = inst_26018;
var inst_26000 = inst_26017;
var inst_26001 = inst_26019;
var inst_26002 = (0);
var state_26058__$1 = (function (){var statearr_26092 = state_26058;
(statearr_26092[(12)] = inst_25999);

(statearr_26092[(13)] = inst_26001);

(statearr_26092[(15)] = inst_26002);

(statearr_26092[(16)] = inst_26000);

return statearr_26092;
})();
var statearr_26093_26134 = state_26058__$1;
(statearr_26093_26134[(2)] = null);

(statearr_26093_26134[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (10))){
var inst_25999 = (state_26058[(12)]);
var inst_26001 = (state_26058[(13)]);
var inst_26002 = (state_26058[(15)]);
var inst_26000 = (state_26058[(16)]);
var inst_26007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26000,inst_26002);
var inst_26008 = cljs.core.async.muxch_STAR_(inst_26007);
var inst_26009 = cljs.core.async.close_BANG_(inst_26008);
var inst_26010 = (inst_26002 + (1));
var tmp26088 = inst_25999;
var tmp26089 = inst_26001;
var tmp26090 = inst_26000;
var inst_25999__$1 = tmp26088;
var inst_26000__$1 = tmp26090;
var inst_26001__$1 = tmp26089;
var inst_26002__$1 = inst_26010;
var state_26058__$1 = (function (){var statearr_26094 = state_26058;
(statearr_26094[(12)] = inst_25999__$1);

(statearr_26094[(13)] = inst_26001__$1);

(statearr_26094[(15)] = inst_26002__$1);

(statearr_26094[(16)] = inst_26000__$1);

(statearr_26094[(17)] = inst_26009);

return statearr_26094;
})();
var statearr_26095_26135 = state_26058__$1;
(statearr_26095_26135[(2)] = null);

(statearr_26095_26135[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (18))){
var inst_26028 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26096_26136 = state_26058__$1;
(statearr_26096_26136[(2)] = inst_26028);

(statearr_26096_26136[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26059 === (8))){
var inst_26001 = (state_26058[(13)]);
var inst_26002 = (state_26058[(15)]);
var inst_26004 = (inst_26002 < inst_26001);
var inst_26005 = inst_26004;
var state_26058__$1 = state_26058;
if(cljs.core.truth_(inst_26005)){
var statearr_26097_26137 = state_26058__$1;
(statearr_26097_26137[(1)] = (10));

} else {
var statearr_26098_26138 = state_26058__$1;
(statearr_26098_26138[(1)] = (11));

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
});})(c__24118__auto___26110,mults,ensure_mult,p))
;
return ((function (switch__23992__auto__,c__24118__auto___26110,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_26102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26102[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_26102[(1)] = (1));

return statearr_26102;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_26058){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26058);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26103){if((e26103 instanceof Object)){
var ex__23996__auto__ = e26103;
var statearr_26104_26139 = state_26058;
(statearr_26104_26139[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26058);

return cljs.core.cst$kw$recur;
} else {
throw e26103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26140 = state_26058;
state_26058 = G__26140;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_26058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_26058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___26110,mults,ensure_mult,p))
})();
var state__24120__auto__ = (function (){var statearr_26105 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___26110);

return statearr_26105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___26110,mults,ensure_mult,p))
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
var args26141 = [];
var len__8739__auto___26144 = arguments.length;
var i__8740__auto___26145 = (0);
while(true){
if((i__8740__auto___26145 < len__8739__auto___26144)){
args26141.push((arguments[i__8740__auto___26145]));

var G__26146 = (i__8740__auto___26145 + (1));
i__8740__auto___26145 = G__26146;
continue;
} else {
}
break;
}

var G__26143 = args26141.length;
switch (G__26143) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26141.length)].join('')));

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
var args26148 = [];
var len__8739__auto___26151 = arguments.length;
var i__8740__auto___26152 = (0);
while(true){
if((i__8740__auto___26152 < len__8739__auto___26151)){
args26148.push((arguments[i__8740__auto___26152]));

var G__26153 = (i__8740__auto___26152 + (1));
i__8740__auto___26152 = G__26153;
continue;
} else {
}
break;
}

var G__26150 = args26148.length;
switch (G__26150) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26148.length)].join('')));

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
var args26155 = [];
var len__8739__auto___26226 = arguments.length;
var i__8740__auto___26227 = (0);
while(true){
if((i__8740__auto___26227 < len__8739__auto___26226)){
args26155.push((arguments[i__8740__auto___26227]));

var G__26228 = (i__8740__auto___26227 + (1));
i__8740__auto___26227 = G__26228;
continue;
} else {
}
break;
}

var G__26157 = args26155.length;
switch (G__26157) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26155.length)].join('')));

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
var c__24118__auto___26230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___26230,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___26230,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26196){
var state_val_26197 = (state_26196[(1)]);
if((state_val_26197 === (7))){
var state_26196__$1 = state_26196;
var statearr_26198_26231 = state_26196__$1;
(statearr_26198_26231[(2)] = null);

(statearr_26198_26231[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (1))){
var state_26196__$1 = state_26196;
var statearr_26199_26232 = state_26196__$1;
(statearr_26199_26232[(2)] = null);

(statearr_26199_26232[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (4))){
var inst_26160 = (state_26196[(7)]);
var inst_26162 = (inst_26160 < cnt);
var state_26196__$1 = state_26196;
if(cljs.core.truth_(inst_26162)){
var statearr_26200_26233 = state_26196__$1;
(statearr_26200_26233[(1)] = (6));

} else {
var statearr_26201_26234 = state_26196__$1;
(statearr_26201_26234[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (15))){
var inst_26192 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
var statearr_26202_26235 = state_26196__$1;
(statearr_26202_26235[(2)] = inst_26192);

(statearr_26202_26235[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (13))){
var inst_26185 = cljs.core.async.close_BANG_(out);
var state_26196__$1 = state_26196;
var statearr_26203_26236 = state_26196__$1;
(statearr_26203_26236[(2)] = inst_26185);

(statearr_26203_26236[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (6))){
var state_26196__$1 = state_26196;
var statearr_26204_26237 = state_26196__$1;
(statearr_26204_26237[(2)] = null);

(statearr_26204_26237[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (3))){
var inst_26194 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26196__$1,inst_26194);
} else {
if((state_val_26197 === (12))){
var inst_26182 = (state_26196[(8)]);
var inst_26182__$1 = (state_26196[(2)]);
var inst_26183 = cljs.core.some(cljs.core.nil_QMARK_,inst_26182__$1);
var state_26196__$1 = (function (){var statearr_26205 = state_26196;
(statearr_26205[(8)] = inst_26182__$1);

return statearr_26205;
})();
if(cljs.core.truth_(inst_26183)){
var statearr_26206_26238 = state_26196__$1;
(statearr_26206_26238[(1)] = (13));

} else {
var statearr_26207_26239 = state_26196__$1;
(statearr_26207_26239[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (2))){
var inst_26159 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_26160 = (0);
var state_26196__$1 = (function (){var statearr_26208 = state_26196;
(statearr_26208[(7)] = inst_26160);

(statearr_26208[(9)] = inst_26159);

return statearr_26208;
})();
var statearr_26209_26240 = state_26196__$1;
(statearr_26209_26240[(2)] = null);

(statearr_26209_26240[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (11))){
var inst_26160 = (state_26196[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26196,(10),Object,null,(9));
var inst_26169 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26160) : chs__$1.call(null,inst_26160));
var inst_26170 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26160) : done.call(null,inst_26160));
var inst_26171 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26169,inst_26170);
var state_26196__$1 = state_26196;
var statearr_26210_26241 = state_26196__$1;
(statearr_26210_26241[(2)] = inst_26171);


cljs.core.async.impl.ioc_helpers.process_exception(state_26196__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (9))){
var inst_26160 = (state_26196[(7)]);
var inst_26173 = (state_26196[(2)]);
var inst_26174 = (inst_26160 + (1));
var inst_26160__$1 = inst_26174;
var state_26196__$1 = (function (){var statearr_26211 = state_26196;
(statearr_26211[(7)] = inst_26160__$1);

(statearr_26211[(10)] = inst_26173);

return statearr_26211;
})();
var statearr_26212_26242 = state_26196__$1;
(statearr_26212_26242[(2)] = null);

(statearr_26212_26242[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (5))){
var inst_26180 = (state_26196[(2)]);
var state_26196__$1 = (function (){var statearr_26213 = state_26196;
(statearr_26213[(11)] = inst_26180);

return statearr_26213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26196__$1,(12),dchan);
} else {
if((state_val_26197 === (14))){
var inst_26182 = (state_26196[(8)]);
var inst_26187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26182);
var state_26196__$1 = state_26196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26196__$1,(16),out,inst_26187);
} else {
if((state_val_26197 === (16))){
var inst_26189 = (state_26196[(2)]);
var state_26196__$1 = (function (){var statearr_26214 = state_26196;
(statearr_26214[(12)] = inst_26189);

return statearr_26214;
})();
var statearr_26215_26243 = state_26196__$1;
(statearr_26215_26243[(2)] = null);

(statearr_26215_26243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (10))){
var inst_26164 = (state_26196[(2)]);
var inst_26165 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26196__$1 = (function (){var statearr_26216 = state_26196;
(statearr_26216[(13)] = inst_26164);

return statearr_26216;
})();
var statearr_26217_26244 = state_26196__$1;
(statearr_26217_26244[(2)] = inst_26165);


cljs.core.async.impl.ioc_helpers.process_exception(state_26196__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26197 === (8))){
var inst_26178 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
var statearr_26218_26245 = state_26196__$1;
(statearr_26218_26245[(2)] = inst_26178);

(statearr_26218_26245[(1)] = (5));


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
});})(c__24118__auto___26230,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23992__auto__,c__24118__auto___26230,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_26222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26222[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_26222[(1)] = (1));

return statearr_26222;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_26196){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26196);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26223){if((e26223 instanceof Object)){
var ex__23996__auto__ = e26223;
var statearr_26224_26246 = state_26196;
(statearr_26224_26246[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26196);

return cljs.core.cst$kw$recur;
} else {
throw e26223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26247 = state_26196;
state_26196 = G__26247;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_26196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_26196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___26230,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24120__auto__ = (function (){var statearr_26225 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___26230);

return statearr_26225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___26230,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26249 = [];
var len__8739__auto___26307 = arguments.length;
var i__8740__auto___26308 = (0);
while(true){
if((i__8740__auto___26308 < len__8739__auto___26307)){
args26249.push((arguments[i__8740__auto___26308]));

var G__26309 = (i__8740__auto___26308 + (1));
i__8740__auto___26308 = G__26309;
continue;
} else {
}
break;
}

var G__26251 = args26249.length;
switch (G__26251) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26249.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24118__auto___26311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___26311,out){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___26311,out){
return (function (state_26283){
var state_val_26284 = (state_26283[(1)]);
if((state_val_26284 === (7))){
var inst_26262 = (state_26283[(7)]);
var inst_26263 = (state_26283[(8)]);
var inst_26262__$1 = (state_26283[(2)]);
var inst_26263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26262__$1,(0),null);
var inst_26264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26262__$1,(1),null);
var inst_26265 = (inst_26263__$1 == null);
var state_26283__$1 = (function (){var statearr_26285 = state_26283;
(statearr_26285[(7)] = inst_26262__$1);

(statearr_26285[(8)] = inst_26263__$1);

(statearr_26285[(9)] = inst_26264);

return statearr_26285;
})();
if(cljs.core.truth_(inst_26265)){
var statearr_26286_26312 = state_26283__$1;
(statearr_26286_26312[(1)] = (8));

} else {
var statearr_26287_26313 = state_26283__$1;
(statearr_26287_26313[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26284 === (1))){
var inst_26252 = cljs.core.vec(chs);
var inst_26253 = inst_26252;
var state_26283__$1 = (function (){var statearr_26288 = state_26283;
(statearr_26288[(10)] = inst_26253);

return statearr_26288;
})();
var statearr_26289_26314 = state_26283__$1;
(statearr_26289_26314[(2)] = null);

(statearr_26289_26314[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26284 === (4))){
var inst_26253 = (state_26283[(10)]);
var state_26283__$1 = state_26283;
return cljs.core.async.ioc_alts_BANG_(state_26283__$1,(7),inst_26253);
} else {
if((state_val_26284 === (6))){
var inst_26279 = (state_26283[(2)]);
var state_26283__$1 = state_26283;
var statearr_26290_26315 = state_26283__$1;
(statearr_26290_26315[(2)] = inst_26279);

(statearr_26290_26315[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26284 === (3))){
var inst_26281 = (state_26283[(2)]);
var state_26283__$1 = state_26283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26283__$1,inst_26281);
} else {
if((state_val_26284 === (2))){
var inst_26253 = (state_26283[(10)]);
var inst_26255 = cljs.core.count(inst_26253);
var inst_26256 = (inst_26255 > (0));
var state_26283__$1 = state_26283;
if(cljs.core.truth_(inst_26256)){
var statearr_26292_26316 = state_26283__$1;
(statearr_26292_26316[(1)] = (4));

} else {
var statearr_26293_26317 = state_26283__$1;
(statearr_26293_26317[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26284 === (11))){
var inst_26253 = (state_26283[(10)]);
var inst_26272 = (state_26283[(2)]);
var tmp26291 = inst_26253;
var inst_26253__$1 = tmp26291;
var state_26283__$1 = (function (){var statearr_26294 = state_26283;
(statearr_26294[(10)] = inst_26253__$1);

(statearr_26294[(11)] = inst_26272);

return statearr_26294;
})();
var statearr_26295_26318 = state_26283__$1;
(statearr_26295_26318[(2)] = null);

(statearr_26295_26318[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26284 === (9))){
var inst_26263 = (state_26283[(8)]);
var state_26283__$1 = state_26283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26283__$1,(11),out,inst_26263);
} else {
if((state_val_26284 === (5))){
var inst_26277 = cljs.core.async.close_BANG_(out);
var state_26283__$1 = state_26283;
var statearr_26296_26319 = state_26283__$1;
(statearr_26296_26319[(2)] = inst_26277);

(statearr_26296_26319[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26284 === (10))){
var inst_26275 = (state_26283[(2)]);
var state_26283__$1 = state_26283;
var statearr_26297_26320 = state_26283__$1;
(statearr_26297_26320[(2)] = inst_26275);

(statearr_26297_26320[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26284 === (8))){
var inst_26262 = (state_26283[(7)]);
var inst_26263 = (state_26283[(8)]);
var inst_26264 = (state_26283[(9)]);
var inst_26253 = (state_26283[(10)]);
var inst_26267 = (function (){var cs = inst_26253;
var vec__26258 = inst_26262;
var v = inst_26263;
var c = inst_26264;
return ((function (cs,vec__26258,v,c,inst_26262,inst_26263,inst_26264,inst_26253,state_val_26284,c__24118__auto___26311,out){
return (function (p1__26248_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26248_SHARP_);
});
;})(cs,vec__26258,v,c,inst_26262,inst_26263,inst_26264,inst_26253,state_val_26284,c__24118__auto___26311,out))
})();
var inst_26268 = cljs.core.filterv(inst_26267,inst_26253);
var inst_26253__$1 = inst_26268;
var state_26283__$1 = (function (){var statearr_26298 = state_26283;
(statearr_26298[(10)] = inst_26253__$1);

return statearr_26298;
})();
var statearr_26299_26321 = state_26283__$1;
(statearr_26299_26321[(2)] = null);

(statearr_26299_26321[(1)] = (2));


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
});})(c__24118__auto___26311,out))
;
return ((function (switch__23992__auto__,c__24118__auto___26311,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_26303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26303[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_26303[(1)] = (1));

return statearr_26303;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_26283){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26283);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26304){if((e26304 instanceof Object)){
var ex__23996__auto__ = e26304;
var statearr_26305_26322 = state_26283;
(statearr_26305_26322[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26283);

return cljs.core.cst$kw$recur;
} else {
throw e26304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26323 = state_26283;
state_26283 = G__26323;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_26283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_26283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___26311,out))
})();
var state__24120__auto__ = (function (){var statearr_26306 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___26311);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___26311,out))
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
var args26324 = [];
var len__8739__auto___26373 = arguments.length;
var i__8740__auto___26374 = (0);
while(true){
if((i__8740__auto___26374 < len__8739__auto___26373)){
args26324.push((arguments[i__8740__auto___26374]));

var G__26375 = (i__8740__auto___26374 + (1));
i__8740__auto___26374 = G__26375;
continue;
} else {
}
break;
}

var G__26326 = args26324.length;
switch (G__26326) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26324.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24118__auto___26377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___26377,out){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___26377,out){
return (function (state_26350){
var state_val_26351 = (state_26350[(1)]);
if((state_val_26351 === (7))){
var inst_26332 = (state_26350[(7)]);
var inst_26332__$1 = (state_26350[(2)]);
var inst_26333 = (inst_26332__$1 == null);
var inst_26334 = cljs.core.not(inst_26333);
var state_26350__$1 = (function (){var statearr_26352 = state_26350;
(statearr_26352[(7)] = inst_26332__$1);

return statearr_26352;
})();
if(inst_26334){
var statearr_26353_26378 = state_26350__$1;
(statearr_26353_26378[(1)] = (8));

} else {
var statearr_26354_26379 = state_26350__$1;
(statearr_26354_26379[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26351 === (1))){
var inst_26327 = (0);
var state_26350__$1 = (function (){var statearr_26355 = state_26350;
(statearr_26355[(8)] = inst_26327);

return statearr_26355;
})();
var statearr_26356_26380 = state_26350__$1;
(statearr_26356_26380[(2)] = null);

(statearr_26356_26380[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26351 === (4))){
var state_26350__$1 = state_26350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26350__$1,(7),ch);
} else {
if((state_val_26351 === (6))){
var inst_26345 = (state_26350[(2)]);
var state_26350__$1 = state_26350;
var statearr_26357_26381 = state_26350__$1;
(statearr_26357_26381[(2)] = inst_26345);

(statearr_26357_26381[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26351 === (3))){
var inst_26347 = (state_26350[(2)]);
var inst_26348 = cljs.core.async.close_BANG_(out);
var state_26350__$1 = (function (){var statearr_26358 = state_26350;
(statearr_26358[(9)] = inst_26347);

return statearr_26358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26350__$1,inst_26348);
} else {
if((state_val_26351 === (2))){
var inst_26327 = (state_26350[(8)]);
var inst_26329 = (inst_26327 < n);
var state_26350__$1 = state_26350;
if(cljs.core.truth_(inst_26329)){
var statearr_26359_26382 = state_26350__$1;
(statearr_26359_26382[(1)] = (4));

} else {
var statearr_26360_26383 = state_26350__$1;
(statearr_26360_26383[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26351 === (11))){
var inst_26327 = (state_26350[(8)]);
var inst_26337 = (state_26350[(2)]);
var inst_26338 = (inst_26327 + (1));
var inst_26327__$1 = inst_26338;
var state_26350__$1 = (function (){var statearr_26361 = state_26350;
(statearr_26361[(8)] = inst_26327__$1);

(statearr_26361[(10)] = inst_26337);

return statearr_26361;
})();
var statearr_26362_26384 = state_26350__$1;
(statearr_26362_26384[(2)] = null);

(statearr_26362_26384[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26351 === (9))){
var state_26350__$1 = state_26350;
var statearr_26363_26385 = state_26350__$1;
(statearr_26363_26385[(2)] = null);

(statearr_26363_26385[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26351 === (5))){
var state_26350__$1 = state_26350;
var statearr_26364_26386 = state_26350__$1;
(statearr_26364_26386[(2)] = null);

(statearr_26364_26386[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26351 === (10))){
var inst_26342 = (state_26350[(2)]);
var state_26350__$1 = state_26350;
var statearr_26365_26387 = state_26350__$1;
(statearr_26365_26387[(2)] = inst_26342);

(statearr_26365_26387[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26351 === (8))){
var inst_26332 = (state_26350[(7)]);
var state_26350__$1 = state_26350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26350__$1,(11),out,inst_26332);
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
});})(c__24118__auto___26377,out))
;
return ((function (switch__23992__auto__,c__24118__auto___26377,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_26369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26369[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_26369[(1)] = (1));

return statearr_26369;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_26350){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26350);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26370){if((e26370 instanceof Object)){
var ex__23996__auto__ = e26370;
var statearr_26371_26388 = state_26350;
(statearr_26371_26388[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26350);

return cljs.core.cst$kw$recur;
} else {
throw e26370;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26389 = state_26350;
state_26350 = G__26389;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_26350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_26350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___26377,out))
})();
var state__24120__auto__ = (function (){var statearr_26372 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___26377);

return statearr_26372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___26377,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26399 = (function (f,ch,meta26400){
this.f = f;
this.ch = ch;
this.meta26400 = meta26400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26401,meta26400__$1){
var self__ = this;
var _26401__$1 = this;
return (new cljs.core.async.t_cljs$core$async26399(self__.f,self__.ch,meta26400__$1));
});


cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26401){
var self__ = this;
var _26401__$1 = this;
return self__.meta26400;
});


cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26402 = (function (f,ch,meta26400,_,fn1,meta26403){
this.f = f;
this.ch = ch;
this.meta26400 = meta26400;
this._ = _;
this.fn1 = fn1;
this.meta26403 = meta26403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26404,meta26403__$1){
var self__ = this;
var _26404__$1 = this;
return (new cljs.core.async.t_cljs$core$async26402(self__.f,self__.ch,self__.meta26400,self__._,self__.fn1,meta26403__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async26402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26404){
var self__ = this;
var _26404__$1 = this;
return self__.meta26403;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26402.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26402.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async26402.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26402.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26390_SHARP_){
var G__26405 = (((p1__26390_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26390_SHARP_) : self__.f.call(null,p1__26390_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26405) : f1.call(null,G__26405));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26402.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26400,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26399], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26403], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26402";

cljs.core.async.t_cljs$core$async26402.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26402");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26402 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26402(f__$1,ch__$1,meta26400__$1,___$2,fn1__$1,meta26403){
return (new cljs.core.async.t_cljs$core$async26402(f__$1,ch__$1,meta26400__$1,___$2,fn1__$1,meta26403));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26402(self__.f,self__.ch,self__.meta26400,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7511__auto__ = ret;
if(cljs.core.truth_(and__7511__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7511__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26406 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26406) : self__.f.call(null,G__26406));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26399.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26400], null);
});

cljs.core.async.t_cljs$core$async26399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26399";

cljs.core.async.t_cljs$core$async26399.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26399");
});

cljs.core.async.__GT_t_cljs$core$async26399 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26399(f__$1,ch__$1,meta26400){
return (new cljs.core.async.t_cljs$core$async26399(f__$1,ch__$1,meta26400));
});

}

return (new cljs.core.async.t_cljs$core$async26399(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26410 = (function (f,ch,meta26411){
this.f = f;
this.ch = ch;
this.meta26411 = meta26411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26412,meta26411__$1){
var self__ = this;
var _26412__$1 = this;
return (new cljs.core.async.t_cljs$core$async26410(self__.f,self__.ch,meta26411__$1));
});


cljs.core.async.t_cljs$core$async26410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26412){
var self__ = this;
var _26412__$1 = this;
return self__.meta26411;
});


cljs.core.async.t_cljs$core$async26410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26411], null);
});

cljs.core.async.t_cljs$core$async26410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26410";

cljs.core.async.t_cljs$core$async26410.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26410");
});

cljs.core.async.__GT_t_cljs$core$async26410 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26410(f__$1,ch__$1,meta26411){
return (new cljs.core.async.t_cljs$core$async26410(f__$1,ch__$1,meta26411));
});

}

return (new cljs.core.async.t_cljs$core$async26410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26416 = (function (p,ch,meta26417){
this.p = p;
this.ch = ch;
this.meta26417 = meta26417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26418,meta26417__$1){
var self__ = this;
var _26418__$1 = this;
return (new cljs.core.async.t_cljs$core$async26416(self__.p,self__.ch,meta26417__$1));
});


cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26418){
var self__ = this;
var _26418__$1 = this;
return self__.meta26417;
});


cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26417], null);
});

cljs.core.async.t_cljs$core$async26416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26416";

cljs.core.async.t_cljs$core$async26416.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26416");
});

cljs.core.async.__GT_t_cljs$core$async26416 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26416(p__$1,ch__$1,meta26417){
return (new cljs.core.async.t_cljs$core$async26416(p__$1,ch__$1,meta26417));
});

}

return (new cljs.core.async.t_cljs$core$async26416(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26419 = [];
var len__8739__auto___26463 = arguments.length;
var i__8740__auto___26464 = (0);
while(true){
if((i__8740__auto___26464 < len__8739__auto___26463)){
args26419.push((arguments[i__8740__auto___26464]));

var G__26465 = (i__8740__auto___26464 + (1));
i__8740__auto___26464 = G__26465;
continue;
} else {
}
break;
}

var G__26421 = args26419.length;
switch (G__26421) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26419.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24118__auto___26467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___26467,out){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___26467,out){
return (function (state_26442){
var state_val_26443 = (state_26442[(1)]);
if((state_val_26443 === (7))){
var inst_26438 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
var statearr_26444_26468 = state_26442__$1;
(statearr_26444_26468[(2)] = inst_26438);

(statearr_26444_26468[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26443 === (1))){
var state_26442__$1 = state_26442;
var statearr_26445_26469 = state_26442__$1;
(statearr_26445_26469[(2)] = null);

(statearr_26445_26469[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26443 === (4))){
var inst_26424 = (state_26442[(7)]);
var inst_26424__$1 = (state_26442[(2)]);
var inst_26425 = (inst_26424__$1 == null);
var state_26442__$1 = (function (){var statearr_26446 = state_26442;
(statearr_26446[(7)] = inst_26424__$1);

return statearr_26446;
})();
if(cljs.core.truth_(inst_26425)){
var statearr_26447_26470 = state_26442__$1;
(statearr_26447_26470[(1)] = (5));

} else {
var statearr_26448_26471 = state_26442__$1;
(statearr_26448_26471[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26443 === (6))){
var inst_26424 = (state_26442[(7)]);
var inst_26429 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26424) : p.call(null,inst_26424));
var state_26442__$1 = state_26442;
if(cljs.core.truth_(inst_26429)){
var statearr_26449_26472 = state_26442__$1;
(statearr_26449_26472[(1)] = (8));

} else {
var statearr_26450_26473 = state_26442__$1;
(statearr_26450_26473[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26443 === (3))){
var inst_26440 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26442__$1,inst_26440);
} else {
if((state_val_26443 === (2))){
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26442__$1,(4),ch);
} else {
if((state_val_26443 === (11))){
var inst_26432 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
var statearr_26451_26474 = state_26442__$1;
(statearr_26451_26474[(2)] = inst_26432);

(statearr_26451_26474[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26443 === (9))){
var state_26442__$1 = state_26442;
var statearr_26452_26475 = state_26442__$1;
(statearr_26452_26475[(2)] = null);

(statearr_26452_26475[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26443 === (5))){
var inst_26427 = cljs.core.async.close_BANG_(out);
var state_26442__$1 = state_26442;
var statearr_26453_26476 = state_26442__$1;
(statearr_26453_26476[(2)] = inst_26427);

(statearr_26453_26476[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26443 === (10))){
var inst_26435 = (state_26442[(2)]);
var state_26442__$1 = (function (){var statearr_26454 = state_26442;
(statearr_26454[(8)] = inst_26435);

return statearr_26454;
})();
var statearr_26455_26477 = state_26442__$1;
(statearr_26455_26477[(2)] = null);

(statearr_26455_26477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26443 === (8))){
var inst_26424 = (state_26442[(7)]);
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26442__$1,(11),out,inst_26424);
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
});})(c__24118__auto___26467,out))
;
return ((function (switch__23992__auto__,c__24118__auto___26467,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_26459 = [null,null,null,null,null,null,null,null,null];
(statearr_26459[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_26459[(1)] = (1));

return statearr_26459;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_26442){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26442);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object)){
var ex__23996__auto__ = e26460;
var statearr_26461_26478 = state_26442;
(statearr_26461_26478[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26442);

return cljs.core.cst$kw$recur;
} else {
throw e26460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26479 = state_26442;
state_26442 = G__26479;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_26442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_26442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___26467,out))
})();
var state__24120__auto__ = (function (){var statearr_26462 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___26467);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___26467,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26480 = [];
var len__8739__auto___26483 = arguments.length;
var i__8740__auto___26484 = (0);
while(true){
if((i__8740__auto___26484 < len__8739__auto___26483)){
args26480.push((arguments[i__8740__auto___26484]));

var G__26485 = (i__8740__auto___26484 + (1));
i__8740__auto___26484 = G__26485;
continue;
} else {
}
break;
}

var G__26482 = args26480.length;
switch (G__26482) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26480.length)].join('')));

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
var c__24118__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto__){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto__){
return (function (state_26652){
var state_val_26653 = (state_26652[(1)]);
if((state_val_26653 === (7))){
var inst_26648 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26654_26695 = state_26652__$1;
(statearr_26654_26695[(2)] = inst_26648);

(statearr_26654_26695[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (20))){
var inst_26618 = (state_26652[(7)]);
var inst_26629 = (state_26652[(2)]);
var inst_26630 = cljs.core.next(inst_26618);
var inst_26604 = inst_26630;
var inst_26605 = null;
var inst_26606 = (0);
var inst_26607 = (0);
var state_26652__$1 = (function (){var statearr_26655 = state_26652;
(statearr_26655[(8)] = inst_26606);

(statearr_26655[(9)] = inst_26607);

(statearr_26655[(10)] = inst_26605);

(statearr_26655[(11)] = inst_26604);

(statearr_26655[(12)] = inst_26629);

return statearr_26655;
})();
var statearr_26656_26696 = state_26652__$1;
(statearr_26656_26696[(2)] = null);

(statearr_26656_26696[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (1))){
var state_26652__$1 = state_26652;
var statearr_26657_26697 = state_26652__$1;
(statearr_26657_26697[(2)] = null);

(statearr_26657_26697[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (4))){
var inst_26593 = (state_26652[(13)]);
var inst_26593__$1 = (state_26652[(2)]);
var inst_26594 = (inst_26593__$1 == null);
var state_26652__$1 = (function (){var statearr_26658 = state_26652;
(statearr_26658[(13)] = inst_26593__$1);

return statearr_26658;
})();
if(cljs.core.truth_(inst_26594)){
var statearr_26659_26698 = state_26652__$1;
(statearr_26659_26698[(1)] = (5));

} else {
var statearr_26660_26699 = state_26652__$1;
(statearr_26660_26699[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (15))){
var state_26652__$1 = state_26652;
var statearr_26664_26700 = state_26652__$1;
(statearr_26664_26700[(2)] = null);

(statearr_26664_26700[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (21))){
var state_26652__$1 = state_26652;
var statearr_26665_26701 = state_26652__$1;
(statearr_26665_26701[(2)] = null);

(statearr_26665_26701[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (13))){
var inst_26606 = (state_26652[(8)]);
var inst_26607 = (state_26652[(9)]);
var inst_26605 = (state_26652[(10)]);
var inst_26604 = (state_26652[(11)]);
var inst_26614 = (state_26652[(2)]);
var inst_26615 = (inst_26607 + (1));
var tmp26661 = inst_26606;
var tmp26662 = inst_26605;
var tmp26663 = inst_26604;
var inst_26604__$1 = tmp26663;
var inst_26605__$1 = tmp26662;
var inst_26606__$1 = tmp26661;
var inst_26607__$1 = inst_26615;
var state_26652__$1 = (function (){var statearr_26666 = state_26652;
(statearr_26666[(8)] = inst_26606__$1);

(statearr_26666[(9)] = inst_26607__$1);

(statearr_26666[(14)] = inst_26614);

(statearr_26666[(10)] = inst_26605__$1);

(statearr_26666[(11)] = inst_26604__$1);

return statearr_26666;
})();
var statearr_26667_26702 = state_26652__$1;
(statearr_26667_26702[(2)] = null);

(statearr_26667_26702[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (22))){
var state_26652__$1 = state_26652;
var statearr_26668_26703 = state_26652__$1;
(statearr_26668_26703[(2)] = null);

(statearr_26668_26703[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (6))){
var inst_26593 = (state_26652[(13)]);
var inst_26602 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26593) : f.call(null,inst_26593));
var inst_26603 = cljs.core.seq(inst_26602);
var inst_26604 = inst_26603;
var inst_26605 = null;
var inst_26606 = (0);
var inst_26607 = (0);
var state_26652__$1 = (function (){var statearr_26669 = state_26652;
(statearr_26669[(8)] = inst_26606);

(statearr_26669[(9)] = inst_26607);

(statearr_26669[(10)] = inst_26605);

(statearr_26669[(11)] = inst_26604);

return statearr_26669;
})();
var statearr_26670_26704 = state_26652__$1;
(statearr_26670_26704[(2)] = null);

(statearr_26670_26704[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (17))){
var inst_26618 = (state_26652[(7)]);
var inst_26622 = cljs.core.chunk_first(inst_26618);
var inst_26623 = cljs.core.chunk_rest(inst_26618);
var inst_26624 = cljs.core.count(inst_26622);
var inst_26604 = inst_26623;
var inst_26605 = inst_26622;
var inst_26606 = inst_26624;
var inst_26607 = (0);
var state_26652__$1 = (function (){var statearr_26671 = state_26652;
(statearr_26671[(8)] = inst_26606);

(statearr_26671[(9)] = inst_26607);

(statearr_26671[(10)] = inst_26605);

(statearr_26671[(11)] = inst_26604);

return statearr_26671;
})();
var statearr_26672_26705 = state_26652__$1;
(statearr_26672_26705[(2)] = null);

(statearr_26672_26705[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (3))){
var inst_26650 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26652__$1,inst_26650);
} else {
if((state_val_26653 === (12))){
var inst_26638 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26673_26706 = state_26652__$1;
(statearr_26673_26706[(2)] = inst_26638);

(statearr_26673_26706[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (2))){
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26652__$1,(4),in$);
} else {
if((state_val_26653 === (23))){
var inst_26646 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26674_26707 = state_26652__$1;
(statearr_26674_26707[(2)] = inst_26646);

(statearr_26674_26707[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (19))){
var inst_26633 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26675_26708 = state_26652__$1;
(statearr_26675_26708[(2)] = inst_26633);

(statearr_26675_26708[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (11))){
var inst_26604 = (state_26652[(11)]);
var inst_26618 = (state_26652[(7)]);
var inst_26618__$1 = cljs.core.seq(inst_26604);
var state_26652__$1 = (function (){var statearr_26676 = state_26652;
(statearr_26676[(7)] = inst_26618__$1);

return statearr_26676;
})();
if(inst_26618__$1){
var statearr_26677_26709 = state_26652__$1;
(statearr_26677_26709[(1)] = (14));

} else {
var statearr_26678_26710 = state_26652__$1;
(statearr_26678_26710[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (9))){
var inst_26640 = (state_26652[(2)]);
var inst_26641 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26652__$1 = (function (){var statearr_26679 = state_26652;
(statearr_26679[(15)] = inst_26640);

return statearr_26679;
})();
if(cljs.core.truth_(inst_26641)){
var statearr_26680_26711 = state_26652__$1;
(statearr_26680_26711[(1)] = (21));

} else {
var statearr_26681_26712 = state_26652__$1;
(statearr_26681_26712[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (5))){
var inst_26596 = cljs.core.async.close_BANG_(out);
var state_26652__$1 = state_26652;
var statearr_26682_26713 = state_26652__$1;
(statearr_26682_26713[(2)] = inst_26596);

(statearr_26682_26713[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (14))){
var inst_26618 = (state_26652[(7)]);
var inst_26620 = cljs.core.chunked_seq_QMARK_(inst_26618);
var state_26652__$1 = state_26652;
if(inst_26620){
var statearr_26683_26714 = state_26652__$1;
(statearr_26683_26714[(1)] = (17));

} else {
var statearr_26684_26715 = state_26652__$1;
(statearr_26684_26715[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (16))){
var inst_26636 = (state_26652[(2)]);
var state_26652__$1 = state_26652;
var statearr_26685_26716 = state_26652__$1;
(statearr_26685_26716[(2)] = inst_26636);

(statearr_26685_26716[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26653 === (10))){
var inst_26607 = (state_26652[(9)]);
var inst_26605 = (state_26652[(10)]);
var inst_26612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26605,inst_26607);
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26652__$1,(13),out,inst_26612);
} else {
if((state_val_26653 === (18))){
var inst_26618 = (state_26652[(7)]);
var inst_26627 = cljs.core.first(inst_26618);
var state_26652__$1 = state_26652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26652__$1,(20),out,inst_26627);
} else {
if((state_val_26653 === (8))){
var inst_26606 = (state_26652[(8)]);
var inst_26607 = (state_26652[(9)]);
var inst_26609 = (inst_26607 < inst_26606);
var inst_26610 = inst_26609;
var state_26652__$1 = state_26652;
if(cljs.core.truth_(inst_26610)){
var statearr_26686_26717 = state_26652__$1;
(statearr_26686_26717[(1)] = (10));

} else {
var statearr_26687_26718 = state_26652__$1;
(statearr_26687_26718[(1)] = (11));

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
});})(c__24118__auto__))
;
return ((function (switch__23992__auto__,c__24118__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_26691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26691[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__);

(statearr_26691[(1)] = (1));

return statearr_26691;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____1 = (function (state_26652){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26652);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26692){if((e26692 instanceof Object)){
var ex__23996__auto__ = e26692;
var statearr_26693_26719 = state_26652;
(statearr_26693_26719[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26652);

return cljs.core.cst$kw$recur;
} else {
throw e26692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26720 = state_26652;
state_26652 = G__26720;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__ = function(state_26652){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____1.call(this,state_26652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto__))
})();
var state__24120__auto__ = (function (){var statearr_26694 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto__);

return statearr_26694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto__))
);

return c__24118__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26721 = [];
var len__8739__auto___26724 = arguments.length;
var i__8740__auto___26725 = (0);
while(true){
if((i__8740__auto___26725 < len__8739__auto___26724)){
args26721.push((arguments[i__8740__auto___26725]));

var G__26726 = (i__8740__auto___26725 + (1));
i__8740__auto___26725 = G__26726;
continue;
} else {
}
break;
}

var G__26723 = args26721.length;
switch (G__26723) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26721.length)].join('')));

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
var args26728 = [];
var len__8739__auto___26731 = arguments.length;
var i__8740__auto___26732 = (0);
while(true){
if((i__8740__auto___26732 < len__8739__auto___26731)){
args26728.push((arguments[i__8740__auto___26732]));

var G__26733 = (i__8740__auto___26732 + (1));
i__8740__auto___26732 = G__26733;
continue;
} else {
}
break;
}

var G__26730 = args26728.length;
switch (G__26730) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26728.length)].join('')));

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
var args26735 = [];
var len__8739__auto___26786 = arguments.length;
var i__8740__auto___26787 = (0);
while(true){
if((i__8740__auto___26787 < len__8739__auto___26786)){
args26735.push((arguments[i__8740__auto___26787]));

var G__26788 = (i__8740__auto___26787 + (1));
i__8740__auto___26787 = G__26788;
continue;
} else {
}
break;
}

var G__26737 = args26735.length;
switch (G__26737) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26735.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24118__auto___26790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___26790,out){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___26790,out){
return (function (state_26761){
var state_val_26762 = (state_26761[(1)]);
if((state_val_26762 === (7))){
var inst_26756 = (state_26761[(2)]);
var state_26761__$1 = state_26761;
var statearr_26763_26791 = state_26761__$1;
(statearr_26763_26791[(2)] = inst_26756);

(statearr_26763_26791[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26762 === (1))){
var inst_26738 = null;
var state_26761__$1 = (function (){var statearr_26764 = state_26761;
(statearr_26764[(7)] = inst_26738);

return statearr_26764;
})();
var statearr_26765_26792 = state_26761__$1;
(statearr_26765_26792[(2)] = null);

(statearr_26765_26792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26762 === (4))){
var inst_26741 = (state_26761[(8)]);
var inst_26741__$1 = (state_26761[(2)]);
var inst_26742 = (inst_26741__$1 == null);
var inst_26743 = cljs.core.not(inst_26742);
var state_26761__$1 = (function (){var statearr_26766 = state_26761;
(statearr_26766[(8)] = inst_26741__$1);

return statearr_26766;
})();
if(inst_26743){
var statearr_26767_26793 = state_26761__$1;
(statearr_26767_26793[(1)] = (5));

} else {
var statearr_26768_26794 = state_26761__$1;
(statearr_26768_26794[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26762 === (6))){
var state_26761__$1 = state_26761;
var statearr_26769_26795 = state_26761__$1;
(statearr_26769_26795[(2)] = null);

(statearr_26769_26795[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26762 === (3))){
var inst_26758 = (state_26761[(2)]);
var inst_26759 = cljs.core.async.close_BANG_(out);
var state_26761__$1 = (function (){var statearr_26770 = state_26761;
(statearr_26770[(9)] = inst_26758);

return statearr_26770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26761__$1,inst_26759);
} else {
if((state_val_26762 === (2))){
var state_26761__$1 = state_26761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26761__$1,(4),ch);
} else {
if((state_val_26762 === (11))){
var inst_26741 = (state_26761[(8)]);
var inst_26750 = (state_26761[(2)]);
var inst_26738 = inst_26741;
var state_26761__$1 = (function (){var statearr_26771 = state_26761;
(statearr_26771[(10)] = inst_26750);

(statearr_26771[(7)] = inst_26738);

return statearr_26771;
})();
var statearr_26772_26796 = state_26761__$1;
(statearr_26772_26796[(2)] = null);

(statearr_26772_26796[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26762 === (9))){
var inst_26741 = (state_26761[(8)]);
var state_26761__$1 = state_26761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26761__$1,(11),out,inst_26741);
} else {
if((state_val_26762 === (5))){
var inst_26738 = (state_26761[(7)]);
var inst_26741 = (state_26761[(8)]);
var inst_26745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26741,inst_26738);
var state_26761__$1 = state_26761;
if(inst_26745){
var statearr_26774_26797 = state_26761__$1;
(statearr_26774_26797[(1)] = (8));

} else {
var statearr_26775_26798 = state_26761__$1;
(statearr_26775_26798[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26762 === (10))){
var inst_26753 = (state_26761[(2)]);
var state_26761__$1 = state_26761;
var statearr_26776_26799 = state_26761__$1;
(statearr_26776_26799[(2)] = inst_26753);

(statearr_26776_26799[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26762 === (8))){
var inst_26738 = (state_26761[(7)]);
var tmp26773 = inst_26738;
var inst_26738__$1 = tmp26773;
var state_26761__$1 = (function (){var statearr_26777 = state_26761;
(statearr_26777[(7)] = inst_26738__$1);

return statearr_26777;
})();
var statearr_26778_26800 = state_26761__$1;
(statearr_26778_26800[(2)] = null);

(statearr_26778_26800[(1)] = (2));


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
});})(c__24118__auto___26790,out))
;
return ((function (switch__23992__auto__,c__24118__auto___26790,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_26782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26782[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_26782[(1)] = (1));

return statearr_26782;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_26761){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26761);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26783){if((e26783 instanceof Object)){
var ex__23996__auto__ = e26783;
var statearr_26784_26801 = state_26761;
(statearr_26784_26801[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26761);

return cljs.core.cst$kw$recur;
} else {
throw e26783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26802 = state_26761;
state_26761 = G__26802;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_26761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_26761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___26790,out))
})();
var state__24120__auto__ = (function (){var statearr_26785 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___26790);

return statearr_26785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___26790,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26803 = [];
var len__8739__auto___26873 = arguments.length;
var i__8740__auto___26874 = (0);
while(true){
if((i__8740__auto___26874 < len__8739__auto___26873)){
args26803.push((arguments[i__8740__auto___26874]));

var G__26875 = (i__8740__auto___26874 + (1));
i__8740__auto___26874 = G__26875;
continue;
} else {
}
break;
}

var G__26805 = args26803.length;
switch (G__26805) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26803.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24118__auto___26877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___26877,out){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___26877,out){
return (function (state_26843){
var state_val_26844 = (state_26843[(1)]);
if((state_val_26844 === (7))){
var inst_26839 = (state_26843[(2)]);
var state_26843__$1 = state_26843;
var statearr_26845_26878 = state_26843__$1;
(statearr_26845_26878[(2)] = inst_26839);

(statearr_26845_26878[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (1))){
var inst_26806 = (new Array(n));
var inst_26807 = inst_26806;
var inst_26808 = (0);
var state_26843__$1 = (function (){var statearr_26846 = state_26843;
(statearr_26846[(7)] = inst_26807);

(statearr_26846[(8)] = inst_26808);

return statearr_26846;
})();
var statearr_26847_26879 = state_26843__$1;
(statearr_26847_26879[(2)] = null);

(statearr_26847_26879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (4))){
var inst_26811 = (state_26843[(9)]);
var inst_26811__$1 = (state_26843[(2)]);
var inst_26812 = (inst_26811__$1 == null);
var inst_26813 = cljs.core.not(inst_26812);
var state_26843__$1 = (function (){var statearr_26848 = state_26843;
(statearr_26848[(9)] = inst_26811__$1);

return statearr_26848;
})();
if(inst_26813){
var statearr_26849_26880 = state_26843__$1;
(statearr_26849_26880[(1)] = (5));

} else {
var statearr_26850_26881 = state_26843__$1;
(statearr_26850_26881[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (15))){
var inst_26833 = (state_26843[(2)]);
var state_26843__$1 = state_26843;
var statearr_26851_26882 = state_26843__$1;
(statearr_26851_26882[(2)] = inst_26833);

(statearr_26851_26882[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (13))){
var state_26843__$1 = state_26843;
var statearr_26852_26883 = state_26843__$1;
(statearr_26852_26883[(2)] = null);

(statearr_26852_26883[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (6))){
var inst_26808 = (state_26843[(8)]);
var inst_26829 = (inst_26808 > (0));
var state_26843__$1 = state_26843;
if(cljs.core.truth_(inst_26829)){
var statearr_26853_26884 = state_26843__$1;
(statearr_26853_26884[(1)] = (12));

} else {
var statearr_26854_26885 = state_26843__$1;
(statearr_26854_26885[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (3))){
var inst_26841 = (state_26843[(2)]);
var state_26843__$1 = state_26843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26843__$1,inst_26841);
} else {
if((state_val_26844 === (12))){
var inst_26807 = (state_26843[(7)]);
var inst_26831 = cljs.core.vec(inst_26807);
var state_26843__$1 = state_26843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26843__$1,(15),out,inst_26831);
} else {
if((state_val_26844 === (2))){
var state_26843__$1 = state_26843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26843__$1,(4),ch);
} else {
if((state_val_26844 === (11))){
var inst_26823 = (state_26843[(2)]);
var inst_26824 = (new Array(n));
var inst_26807 = inst_26824;
var inst_26808 = (0);
var state_26843__$1 = (function (){var statearr_26855 = state_26843;
(statearr_26855[(10)] = inst_26823);

(statearr_26855[(7)] = inst_26807);

(statearr_26855[(8)] = inst_26808);

return statearr_26855;
})();
var statearr_26856_26886 = state_26843__$1;
(statearr_26856_26886[(2)] = null);

(statearr_26856_26886[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (9))){
var inst_26807 = (state_26843[(7)]);
var inst_26821 = cljs.core.vec(inst_26807);
var state_26843__$1 = state_26843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26843__$1,(11),out,inst_26821);
} else {
if((state_val_26844 === (5))){
var inst_26807 = (state_26843[(7)]);
var inst_26816 = (state_26843[(11)]);
var inst_26811 = (state_26843[(9)]);
var inst_26808 = (state_26843[(8)]);
var inst_26815 = (inst_26807[inst_26808] = inst_26811);
var inst_26816__$1 = (inst_26808 + (1));
var inst_26817 = (inst_26816__$1 < n);
var state_26843__$1 = (function (){var statearr_26857 = state_26843;
(statearr_26857[(12)] = inst_26815);

(statearr_26857[(11)] = inst_26816__$1);

return statearr_26857;
})();
if(cljs.core.truth_(inst_26817)){
var statearr_26858_26887 = state_26843__$1;
(statearr_26858_26887[(1)] = (8));

} else {
var statearr_26859_26888 = state_26843__$1;
(statearr_26859_26888[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (14))){
var inst_26836 = (state_26843[(2)]);
var inst_26837 = cljs.core.async.close_BANG_(out);
var state_26843__$1 = (function (){var statearr_26861 = state_26843;
(statearr_26861[(13)] = inst_26836);

return statearr_26861;
})();
var statearr_26862_26889 = state_26843__$1;
(statearr_26862_26889[(2)] = inst_26837);

(statearr_26862_26889[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (10))){
var inst_26827 = (state_26843[(2)]);
var state_26843__$1 = state_26843;
var statearr_26863_26890 = state_26843__$1;
(statearr_26863_26890[(2)] = inst_26827);

(statearr_26863_26890[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26844 === (8))){
var inst_26807 = (state_26843[(7)]);
var inst_26816 = (state_26843[(11)]);
var tmp26860 = inst_26807;
var inst_26807__$1 = tmp26860;
var inst_26808 = inst_26816;
var state_26843__$1 = (function (){var statearr_26864 = state_26843;
(statearr_26864[(7)] = inst_26807__$1);

(statearr_26864[(8)] = inst_26808);

return statearr_26864;
})();
var statearr_26865_26891 = state_26843__$1;
(statearr_26865_26891[(2)] = null);

(statearr_26865_26891[(1)] = (2));


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
});})(c__24118__auto___26877,out))
;
return ((function (switch__23992__auto__,c__24118__auto___26877,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_26869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26869[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_26869[(1)] = (1));

return statearr_26869;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_26843){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26843);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26870){if((e26870 instanceof Object)){
var ex__23996__auto__ = e26870;
var statearr_26871_26892 = state_26843;
(statearr_26871_26892[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26843);

return cljs.core.cst$kw$recur;
} else {
throw e26870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26893 = state_26843;
state_26843 = G__26893;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_26843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_26843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___26877,out))
})();
var state__24120__auto__ = (function (){var statearr_26872 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___26877);

return statearr_26872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___26877,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26894 = [];
var len__8739__auto___26968 = arguments.length;
var i__8740__auto___26969 = (0);
while(true){
if((i__8740__auto___26969 < len__8739__auto___26968)){
args26894.push((arguments[i__8740__auto___26969]));

var G__26970 = (i__8740__auto___26969 + (1));
i__8740__auto___26969 = G__26970;
continue;
} else {
}
break;
}

var G__26896 = args26894.length;
switch (G__26896) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26894.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24118__auto___26972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24118__auto___26972,out){
return (function (){
var f__24119__auto__ = (function (){var switch__23992__auto__ = ((function (c__24118__auto___26972,out){
return (function (state_26938){
var state_val_26939 = (state_26938[(1)]);
if((state_val_26939 === (7))){
var inst_26934 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
var statearr_26940_26973 = state_26938__$1;
(statearr_26940_26973[(2)] = inst_26934);

(statearr_26940_26973[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (1))){
var inst_26897 = [];
var inst_26898 = inst_26897;
var inst_26899 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26938__$1 = (function (){var statearr_26941 = state_26938;
(statearr_26941[(7)] = inst_26898);

(statearr_26941[(8)] = inst_26899);

return statearr_26941;
})();
var statearr_26942_26974 = state_26938__$1;
(statearr_26942_26974[(2)] = null);

(statearr_26942_26974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (4))){
var inst_26902 = (state_26938[(9)]);
var inst_26902__$1 = (state_26938[(2)]);
var inst_26903 = (inst_26902__$1 == null);
var inst_26904 = cljs.core.not(inst_26903);
var state_26938__$1 = (function (){var statearr_26943 = state_26938;
(statearr_26943[(9)] = inst_26902__$1);

return statearr_26943;
})();
if(inst_26904){
var statearr_26944_26975 = state_26938__$1;
(statearr_26944_26975[(1)] = (5));

} else {
var statearr_26945_26976 = state_26938__$1;
(statearr_26945_26976[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (15))){
var inst_26928 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
var statearr_26946_26977 = state_26938__$1;
(statearr_26946_26977[(2)] = inst_26928);

(statearr_26946_26977[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (13))){
var state_26938__$1 = state_26938;
var statearr_26947_26978 = state_26938__$1;
(statearr_26947_26978[(2)] = null);

(statearr_26947_26978[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (6))){
var inst_26898 = (state_26938[(7)]);
var inst_26923 = inst_26898.length;
var inst_26924 = (inst_26923 > (0));
var state_26938__$1 = state_26938;
if(cljs.core.truth_(inst_26924)){
var statearr_26948_26979 = state_26938__$1;
(statearr_26948_26979[(1)] = (12));

} else {
var statearr_26949_26980 = state_26938__$1;
(statearr_26949_26980[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (3))){
var inst_26936 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26938__$1,inst_26936);
} else {
if((state_val_26939 === (12))){
var inst_26898 = (state_26938[(7)]);
var inst_26926 = cljs.core.vec(inst_26898);
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26938__$1,(15),out,inst_26926);
} else {
if((state_val_26939 === (2))){
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26938__$1,(4),ch);
} else {
if((state_val_26939 === (11))){
var inst_26902 = (state_26938[(9)]);
var inst_26906 = (state_26938[(10)]);
var inst_26916 = (state_26938[(2)]);
var inst_26917 = [];
var inst_26918 = inst_26917.push(inst_26902);
var inst_26898 = inst_26917;
var inst_26899 = inst_26906;
var state_26938__$1 = (function (){var statearr_26950 = state_26938;
(statearr_26950[(11)] = inst_26916);

(statearr_26950[(7)] = inst_26898);

(statearr_26950[(12)] = inst_26918);

(statearr_26950[(8)] = inst_26899);

return statearr_26950;
})();
var statearr_26951_26981 = state_26938__$1;
(statearr_26951_26981[(2)] = null);

(statearr_26951_26981[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (9))){
var inst_26898 = (state_26938[(7)]);
var inst_26914 = cljs.core.vec(inst_26898);
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26938__$1,(11),out,inst_26914);
} else {
if((state_val_26939 === (5))){
var inst_26902 = (state_26938[(9)]);
var inst_26906 = (state_26938[(10)]);
var inst_26899 = (state_26938[(8)]);
var inst_26906__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26902) : f.call(null,inst_26902));
var inst_26907 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26906__$1,inst_26899);
var inst_26908 = cljs.core.keyword_identical_QMARK_(inst_26899,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26909 = (inst_26907) || (inst_26908);
var state_26938__$1 = (function (){var statearr_26952 = state_26938;
(statearr_26952[(10)] = inst_26906__$1);

return statearr_26952;
})();
if(cljs.core.truth_(inst_26909)){
var statearr_26953_26982 = state_26938__$1;
(statearr_26953_26982[(1)] = (8));

} else {
var statearr_26954_26983 = state_26938__$1;
(statearr_26954_26983[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (14))){
var inst_26931 = (state_26938[(2)]);
var inst_26932 = cljs.core.async.close_BANG_(out);
var state_26938__$1 = (function (){var statearr_26956 = state_26938;
(statearr_26956[(13)] = inst_26931);

return statearr_26956;
})();
var statearr_26957_26984 = state_26938__$1;
(statearr_26957_26984[(2)] = inst_26932);

(statearr_26957_26984[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (10))){
var inst_26921 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
var statearr_26958_26985 = state_26938__$1;
(statearr_26958_26985[(2)] = inst_26921);

(statearr_26958_26985[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26939 === (8))){
var inst_26898 = (state_26938[(7)]);
var inst_26902 = (state_26938[(9)]);
var inst_26906 = (state_26938[(10)]);
var inst_26911 = inst_26898.push(inst_26902);
var tmp26955 = inst_26898;
var inst_26898__$1 = tmp26955;
var inst_26899 = inst_26906;
var state_26938__$1 = (function (){var statearr_26959 = state_26938;
(statearr_26959[(14)] = inst_26911);

(statearr_26959[(7)] = inst_26898__$1);

(statearr_26959[(8)] = inst_26899);

return statearr_26959;
})();
var statearr_26960_26986 = state_26938__$1;
(statearr_26960_26986[(2)] = null);

(statearr_26960_26986[(1)] = (2));


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
});})(c__24118__auto___26972,out))
;
return ((function (switch__23992__auto__,c__24118__auto___26972,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_26964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26964[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_26964[(1)] = (1));

return statearr_26964;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_26938){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__(state_26938);
if(cljs.core.keyword_identical_QMARK_(result__23995__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e26965){if((e26965 instanceof Object)){
var ex__23996__auto__ = e26965;
var statearr_26966_26987 = state_26938;
(statearr_26966_26987[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26938);

return cljs.core.cst$kw$recur;
} else {
throw e26965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23994__auto__,cljs.core.cst$kw$recur)){
var G__26988 = state_26938;
state_26938 = G__26988;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_26938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_26938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24118__auto___26972,out))
})();
var state__24120__auto__ = (function (){var statearr_26967 = (f__24119__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24119__auto__.cljs$core$IFn$_invoke$arity$0() : f__24119__auto__.call(null));
(statearr_26967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24118__auto___26972);

return statearr_26967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24120__auto__);
});})(c__24118__auto___26972,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

