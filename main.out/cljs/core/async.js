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
var args24170 = [];
var len__8739__auto___24176 = arguments.length;
var i__8740__auto___24177 = (0);
while(true){
if((i__8740__auto___24177 < len__8739__auto___24176)){
args24170.push((arguments[i__8740__auto___24177]));

var G__24178 = (i__8740__auto___24177 + (1));
i__8740__auto___24177 = G__24178;
continue;
} else {
}
break;
}

var G__24172 = args24170.length;
switch (G__24172) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24170.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24173 = (function (f,blockable,meta24174){
this.f = f;
this.blockable = blockable;
this.meta24174 = meta24174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24175,meta24174__$1){
var self__ = this;
var _24175__$1 = this;
return (new cljs.core.async.t_cljs$core$async24173(self__.f,self__.blockable,meta24174__$1));
});


cljs.core.async.t_cljs$core$async24173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24175){
var self__ = this;
var _24175__$1 = this;
return self__.meta24174;
});


cljs.core.async.t_cljs$core$async24173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async24173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24174], null);
});

cljs.core.async.t_cljs$core$async24173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24173";

cljs.core.async.t_cljs$core$async24173.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24173");
});

cljs.core.async.__GT_t_cljs$core$async24173 = (function cljs$core$async$__GT_t_cljs$core$async24173(f__$1,blockable__$1,meta24174){
return (new cljs.core.async.t_cljs$core$async24173(f__$1,blockable__$1,meta24174));
});

}

return (new cljs.core.async.t_cljs$core$async24173(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24182 = [];
var len__8739__auto___24185 = arguments.length;
var i__8740__auto___24186 = (0);
while(true){
if((i__8740__auto___24186 < len__8739__auto___24185)){
args24182.push((arguments[i__8740__auto___24186]));

var G__24187 = (i__8740__auto___24186 + (1));
i__8740__auto___24186 = G__24187;
continue;
} else {
}
break;
}

var G__24184 = args24182.length;
switch (G__24184) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24182.length)].join('')));

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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24189.length)].join('')));

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
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24196.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24203 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24203) : fn1.call(null,val_24203));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24203,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24203) : fn1.call(null,val_24203));
});})(val_24203,ret))
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
var args24204 = [];
var len__8739__auto___24207 = arguments.length;
var i__8740__auto___24208 = (0);
while(true){
if((i__8740__auto___24208 < len__8739__auto___24207)){
args24204.push((arguments[i__8740__auto___24208]));

var G__24209 = (i__8740__auto___24208 + (1));
i__8740__auto___24208 = G__24209;
continue;
} else {
}
break;
}

var G__24206 = args24204.length;
switch (G__24206) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24204.length)].join('')));

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
var n__8539__auto___24211 = n;
var x_24212 = (0);
while(true){
if((x_24212 < n__8539__auto___24211)){
(a[x_24212] = (0));

var G__24213 = (x_24212 + (1));
x_24212 = G__24213;
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

var G__24214 = (i + (1));
i = G__24214;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async24218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24218 = (function (flag,meta24219){
this.flag = flag;
this.meta24219 = meta24219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24220,meta24219__$1){
var self__ = this;
var _24220__$1 = this;
return (new cljs.core.async.t_cljs$core$async24218(self__.flag,meta24219__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async24218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24220){
var self__ = this;
var _24220__$1 = this;
return self__.meta24219;
});})(flag))
;


cljs.core.async.t_cljs$core$async24218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async24218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async24218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24218.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24219], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24218";

cljs.core.async.t_cljs$core$async24218.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24218");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24218 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24218(flag__$1,meta24219){
return (new cljs.core.async.t_cljs$core$async24218(flag__$1,meta24219));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24218(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24224 = (function (flag,cb,meta24225){
this.flag = flag;
this.cb = cb;
this.meta24225 = meta24225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24226,meta24225__$1){
var self__ = this;
var _24226__$1 = this;
return (new cljs.core.async.t_cljs$core$async24224(self__.flag,self__.cb,meta24225__$1));
});


cljs.core.async.t_cljs$core$async24224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24226){
var self__ = this;
var _24226__$1 = this;
return self__.meta24225;
});


cljs.core.async.t_cljs$core$async24224.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async24224.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24225], null);
});

cljs.core.async.t_cljs$core$async24224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24224";

cljs.core.async.t_cljs$core$async24224.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24224");
});

cljs.core.async.__GT_t_cljs$core$async24224 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24224(flag__$1,cb__$1,meta24225){
return (new cljs.core.async.t_cljs$core$async24224(flag__$1,cb__$1,meta24225));
});

}

return (new cljs.core.async.t_cljs$core$async24224(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24227_SHARP_){
var G__24231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24227_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24231) : fret.call(null,G__24231));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24228_SHARP_){
var G__24232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24228_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24232) : fret.call(null,G__24232));
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
var G__24233 = (i + (1));
i = G__24233;
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
var len__8739__auto___24239 = arguments.length;
var i__8740__auto___24240 = (0);
while(true){
if((i__8740__auto___24240 < len__8739__auto___24239)){
args__8746__auto__.push((arguments[i__8740__auto___24240]));

var G__24241 = (i__8740__auto___24240 + (1));
i__8740__auto___24240 = G__24241;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((1) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8747__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24236){
var map__24237 = p__24236;
var map__24237__$1 = ((((!((map__24237 == null)))?((((map__24237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24237):map__24237);
var opts = map__24237__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24234){
var G__24235 = cljs.core.first(seq24234);
var seq24234__$1 = cljs.core.next(seq24234);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24235,seq24234__$1);
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
var args24242 = [];
var len__8739__auto___24292 = arguments.length;
var i__8740__auto___24293 = (0);
while(true){
if((i__8740__auto___24293 < len__8739__auto___24292)){
args24242.push((arguments[i__8740__auto___24293]));

var G__24294 = (i__8740__auto___24293 + (1));
i__8740__auto___24293 = G__24294;
continue;
} else {
}
break;
}

var G__24244 = args24242.length;
switch (G__24244) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24242.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24111__auto___24296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___24296){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___24296){
return (function (state_24268){
var state_val_24269 = (state_24268[(1)]);
if((state_val_24269 === (7))){
var inst_24264 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24270_24297 = state_24268__$1;
(statearr_24270_24297[(2)] = inst_24264);

(statearr_24270_24297[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (1))){
var state_24268__$1 = state_24268;
var statearr_24271_24298 = state_24268__$1;
(statearr_24271_24298[(2)] = null);

(statearr_24271_24298[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (4))){
var inst_24247 = (state_24268[(7)]);
var inst_24247__$1 = (state_24268[(2)]);
var inst_24248 = (inst_24247__$1 == null);
var state_24268__$1 = (function (){var statearr_24272 = state_24268;
(statearr_24272[(7)] = inst_24247__$1);

return statearr_24272;
})();
if(cljs.core.truth_(inst_24248)){
var statearr_24273_24299 = state_24268__$1;
(statearr_24273_24299[(1)] = (5));

} else {
var statearr_24274_24300 = state_24268__$1;
(statearr_24274_24300[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (13))){
var state_24268__$1 = state_24268;
var statearr_24275_24301 = state_24268__$1;
(statearr_24275_24301[(2)] = null);

(statearr_24275_24301[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (6))){
var inst_24247 = (state_24268[(7)]);
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24268__$1,(11),to,inst_24247);
} else {
if((state_val_24269 === (3))){
var inst_24266 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24268__$1,inst_24266);
} else {
if((state_val_24269 === (12))){
var state_24268__$1 = state_24268;
var statearr_24276_24302 = state_24268__$1;
(statearr_24276_24302[(2)] = null);

(statearr_24276_24302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (2))){
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24268__$1,(4),from);
} else {
if((state_val_24269 === (11))){
var inst_24257 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
if(cljs.core.truth_(inst_24257)){
var statearr_24277_24303 = state_24268__$1;
(statearr_24277_24303[(1)] = (12));

} else {
var statearr_24278_24304 = state_24268__$1;
(statearr_24278_24304[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (9))){
var state_24268__$1 = state_24268;
var statearr_24279_24305 = state_24268__$1;
(statearr_24279_24305[(2)] = null);

(statearr_24279_24305[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (5))){
var state_24268__$1 = state_24268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24280_24306 = state_24268__$1;
(statearr_24280_24306[(1)] = (8));

} else {
var statearr_24281_24307 = state_24268__$1;
(statearr_24281_24307[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (14))){
var inst_24262 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24282_24308 = state_24268__$1;
(statearr_24282_24308[(2)] = inst_24262);

(statearr_24282_24308[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (10))){
var inst_24254 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24283_24309 = state_24268__$1;
(statearr_24283_24309[(2)] = inst_24254);

(statearr_24283_24309[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24269 === (8))){
var inst_24251 = cljs.core.async.close_BANG_(to);
var state_24268__$1 = state_24268;
var statearr_24284_24310 = state_24268__$1;
(statearr_24284_24310[(2)] = inst_24251);

(statearr_24284_24310[(1)] = (10));


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
});})(c__24111__auto___24296))
;
return ((function (switch__23985__auto__,c__24111__auto___24296){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_24288 = [null,null,null,null,null,null,null,null];
(statearr_24288[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_24288[(1)] = (1));

return statearr_24288;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_24268){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24268);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24289){if((e24289 instanceof Object)){
var ex__23989__auto__ = e24289;
var statearr_24290_24311 = state_24268;
(statearr_24290_24311[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24268);

return cljs.core.cst$kw$recur;
} else {
throw e24289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24312 = state_24268;
state_24268 = G__24312;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_24268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_24268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___24296))
})();
var state__24113__auto__ = (function (){var statearr_24291 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___24296);

return statearr_24291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___24296))
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
return (function (p__24500){
var vec__24501 = p__24500;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24501,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24501,(1),null);
var job = vec__24501;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24111__auto___24687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___24687,res,vec__24501,v,p,job,jobs,results){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___24687,res,vec__24501,v,p,job,jobs,results){
return (function (state_24508){
var state_val_24509 = (state_24508[(1)]);
if((state_val_24509 === (1))){
var state_24508__$1 = state_24508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24508__$1,(2),res,v);
} else {
if((state_val_24509 === (2))){
var inst_24505 = (state_24508[(2)]);
var inst_24506 = cljs.core.async.close_BANG_(res);
var state_24508__$1 = (function (){var statearr_24510 = state_24508;
(statearr_24510[(7)] = inst_24505);

return statearr_24510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24508__$1,inst_24506);
} else {
return null;
}
}
});})(c__24111__auto___24687,res,vec__24501,v,p,job,jobs,results))
;
return ((function (switch__23985__auto__,c__24111__auto___24687,res,vec__24501,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0 = (function (){
var statearr_24514 = [null,null,null,null,null,null,null,null];
(statearr_24514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__);

(statearr_24514[(1)] = (1));

return statearr_24514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1 = (function (state_24508){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24508);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24515){if((e24515 instanceof Object)){
var ex__23989__auto__ = e24515;
var statearr_24516_24688 = state_24508;
(statearr_24516_24688[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24508);

return cljs.core.cst$kw$recur;
} else {
throw e24515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24689 = state_24508;
state_24508 = G__24689;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = function(state_24508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1.call(this,state_24508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___24687,res,vec__24501,v,p,job,jobs,results))
})();
var state__24113__auto__ = (function (){var statearr_24517 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___24687);

return statearr_24517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___24687,res,vec__24501,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24518){
var vec__24519 = p__24518;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24519,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24519,(1),null);
var job = vec__24519;
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
var n__8539__auto___24690 = n;
var __24691 = (0);
while(true){
if((__24691 < n__8539__auto___24690)){
var G__24522_24692 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24522_24692) {
case "compute":
var c__24111__auto___24694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24691,c__24111__auto___24694,G__24522_24692,n__8539__auto___24690,jobs,results,process,async){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (__24691,c__24111__auto___24694,G__24522_24692,n__8539__auto___24690,jobs,results,process,async){
return (function (state_24535){
var state_val_24536 = (state_24535[(1)]);
if((state_val_24536 === (1))){
var state_24535__$1 = state_24535;
var statearr_24537_24695 = state_24535__$1;
(statearr_24537_24695[(2)] = null);

(statearr_24537_24695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24536 === (2))){
var state_24535__$1 = state_24535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24535__$1,(4),jobs);
} else {
if((state_val_24536 === (3))){
var inst_24533 = (state_24535[(2)]);
var state_24535__$1 = state_24535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24535__$1,inst_24533);
} else {
if((state_val_24536 === (4))){
var inst_24525 = (state_24535[(2)]);
var inst_24526 = process(inst_24525);
var state_24535__$1 = state_24535;
if(cljs.core.truth_(inst_24526)){
var statearr_24538_24696 = state_24535__$1;
(statearr_24538_24696[(1)] = (5));

} else {
var statearr_24539_24697 = state_24535__$1;
(statearr_24539_24697[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24536 === (5))){
var state_24535__$1 = state_24535;
var statearr_24540_24698 = state_24535__$1;
(statearr_24540_24698[(2)] = null);

(statearr_24540_24698[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24536 === (6))){
var state_24535__$1 = state_24535;
var statearr_24541_24699 = state_24535__$1;
(statearr_24541_24699[(2)] = null);

(statearr_24541_24699[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24536 === (7))){
var inst_24531 = (state_24535[(2)]);
var state_24535__$1 = state_24535;
var statearr_24542_24700 = state_24535__$1;
(statearr_24542_24700[(2)] = inst_24531);

(statearr_24542_24700[(1)] = (3));


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
});})(__24691,c__24111__auto___24694,G__24522_24692,n__8539__auto___24690,jobs,results,process,async))
;
return ((function (__24691,switch__23985__auto__,c__24111__auto___24694,G__24522_24692,n__8539__auto___24690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0 = (function (){
var statearr_24546 = [null,null,null,null,null,null,null];
(statearr_24546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__);

(statearr_24546[(1)] = (1));

return statearr_24546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1 = (function (state_24535){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24535);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24547){if((e24547 instanceof Object)){
var ex__23989__auto__ = e24547;
var statearr_24548_24701 = state_24535;
(statearr_24548_24701[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24535);

return cljs.core.cst$kw$recur;
} else {
throw e24547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24702 = state_24535;
state_24535 = G__24702;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = function(state_24535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1.call(this,state_24535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__;
})()
;})(__24691,switch__23985__auto__,c__24111__auto___24694,G__24522_24692,n__8539__auto___24690,jobs,results,process,async))
})();
var state__24113__auto__ = (function (){var statearr_24549 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___24694);

return statearr_24549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(__24691,c__24111__auto___24694,G__24522_24692,n__8539__auto___24690,jobs,results,process,async))
);


break;
case "async":
var c__24111__auto___24703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24691,c__24111__auto___24703,G__24522_24692,n__8539__auto___24690,jobs,results,process,async){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (__24691,c__24111__auto___24703,G__24522_24692,n__8539__auto___24690,jobs,results,process,async){
return (function (state_24562){
var state_val_24563 = (state_24562[(1)]);
if((state_val_24563 === (1))){
var state_24562__$1 = state_24562;
var statearr_24564_24704 = state_24562__$1;
(statearr_24564_24704[(2)] = null);

(statearr_24564_24704[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24563 === (2))){
var state_24562__$1 = state_24562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24562__$1,(4),jobs);
} else {
if((state_val_24563 === (3))){
var inst_24560 = (state_24562[(2)]);
var state_24562__$1 = state_24562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24562__$1,inst_24560);
} else {
if((state_val_24563 === (4))){
var inst_24552 = (state_24562[(2)]);
var inst_24553 = async(inst_24552);
var state_24562__$1 = state_24562;
if(cljs.core.truth_(inst_24553)){
var statearr_24565_24705 = state_24562__$1;
(statearr_24565_24705[(1)] = (5));

} else {
var statearr_24566_24706 = state_24562__$1;
(statearr_24566_24706[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24563 === (5))){
var state_24562__$1 = state_24562;
var statearr_24567_24707 = state_24562__$1;
(statearr_24567_24707[(2)] = null);

(statearr_24567_24707[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24563 === (6))){
var state_24562__$1 = state_24562;
var statearr_24568_24708 = state_24562__$1;
(statearr_24568_24708[(2)] = null);

(statearr_24568_24708[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24563 === (7))){
var inst_24558 = (state_24562[(2)]);
var state_24562__$1 = state_24562;
var statearr_24569_24709 = state_24562__$1;
(statearr_24569_24709[(2)] = inst_24558);

(statearr_24569_24709[(1)] = (3));


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
});})(__24691,c__24111__auto___24703,G__24522_24692,n__8539__auto___24690,jobs,results,process,async))
;
return ((function (__24691,switch__23985__auto__,c__24111__auto___24703,G__24522_24692,n__8539__auto___24690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0 = (function (){
var statearr_24573 = [null,null,null,null,null,null,null];
(statearr_24573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__);

(statearr_24573[(1)] = (1));

return statearr_24573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1 = (function (state_24562){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24562);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24574){if((e24574 instanceof Object)){
var ex__23989__auto__ = e24574;
var statearr_24575_24710 = state_24562;
(statearr_24575_24710[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24562);

return cljs.core.cst$kw$recur;
} else {
throw e24574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24711 = state_24562;
state_24562 = G__24711;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = function(state_24562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1.call(this,state_24562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__;
})()
;})(__24691,switch__23985__auto__,c__24111__auto___24703,G__24522_24692,n__8539__auto___24690,jobs,results,process,async))
})();
var state__24113__auto__ = (function (){var statearr_24576 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___24703);

return statearr_24576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(__24691,c__24111__auto___24703,G__24522_24692,n__8539__auto___24690,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24712 = (__24691 + (1));
__24691 = G__24712;
continue;
} else {
}
break;
}

var c__24111__auto___24713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___24713,jobs,results,process,async){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___24713,jobs,results,process,async){
return (function (state_24598){
var state_val_24599 = (state_24598[(1)]);
if((state_val_24599 === (1))){
var state_24598__$1 = state_24598;
var statearr_24600_24714 = state_24598__$1;
(statearr_24600_24714[(2)] = null);

(statearr_24600_24714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24599 === (2))){
var state_24598__$1 = state_24598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24598__$1,(4),from);
} else {
if((state_val_24599 === (3))){
var inst_24596 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24598__$1,inst_24596);
} else {
if((state_val_24599 === (4))){
var inst_24579 = (state_24598[(7)]);
var inst_24579__$1 = (state_24598[(2)]);
var inst_24580 = (inst_24579__$1 == null);
var state_24598__$1 = (function (){var statearr_24601 = state_24598;
(statearr_24601[(7)] = inst_24579__$1);

return statearr_24601;
})();
if(cljs.core.truth_(inst_24580)){
var statearr_24602_24715 = state_24598__$1;
(statearr_24602_24715[(1)] = (5));

} else {
var statearr_24603_24716 = state_24598__$1;
(statearr_24603_24716[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24599 === (5))){
var inst_24582 = cljs.core.async.close_BANG_(jobs);
var state_24598__$1 = state_24598;
var statearr_24604_24717 = state_24598__$1;
(statearr_24604_24717[(2)] = inst_24582);

(statearr_24604_24717[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24599 === (6))){
var inst_24579 = (state_24598[(7)]);
var inst_24584 = (state_24598[(8)]);
var inst_24584__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24586 = [inst_24579,inst_24584__$1];
var inst_24587 = (new cljs.core.PersistentVector(null,2,(5),inst_24585,inst_24586,null));
var state_24598__$1 = (function (){var statearr_24605 = state_24598;
(statearr_24605[(8)] = inst_24584__$1);

return statearr_24605;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24598__$1,(8),jobs,inst_24587);
} else {
if((state_val_24599 === (7))){
var inst_24594 = (state_24598[(2)]);
var state_24598__$1 = state_24598;
var statearr_24606_24718 = state_24598__$1;
(statearr_24606_24718[(2)] = inst_24594);

(statearr_24606_24718[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24599 === (8))){
var inst_24584 = (state_24598[(8)]);
var inst_24589 = (state_24598[(2)]);
var state_24598__$1 = (function (){var statearr_24607 = state_24598;
(statearr_24607[(9)] = inst_24589);

return statearr_24607;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24598__$1,(9),results,inst_24584);
} else {
if((state_val_24599 === (9))){
var inst_24591 = (state_24598[(2)]);
var state_24598__$1 = (function (){var statearr_24608 = state_24598;
(statearr_24608[(10)] = inst_24591);

return statearr_24608;
})();
var statearr_24609_24719 = state_24598__$1;
(statearr_24609_24719[(2)] = null);

(statearr_24609_24719[(1)] = (2));


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
});})(c__24111__auto___24713,jobs,results,process,async))
;
return ((function (switch__23985__auto__,c__24111__auto___24713,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0 = (function (){
var statearr_24613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__);

(statearr_24613[(1)] = (1));

return statearr_24613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1 = (function (state_24598){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24598);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24614){if((e24614 instanceof Object)){
var ex__23989__auto__ = e24614;
var statearr_24615_24720 = state_24598;
(statearr_24615_24720[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24598);

return cljs.core.cst$kw$recur;
} else {
throw e24614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24721 = state_24598;
state_24598 = G__24721;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = function(state_24598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1.call(this,state_24598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___24713,jobs,results,process,async))
})();
var state__24113__auto__ = (function (){var statearr_24616 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___24713);

return statearr_24616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___24713,jobs,results,process,async))
);


var c__24111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto__,jobs,results,process,async){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto__,jobs,results,process,async){
return (function (state_24654){
var state_val_24655 = (state_24654[(1)]);
if((state_val_24655 === (7))){
var inst_24650 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24656_24722 = state_24654__$1;
(statearr_24656_24722[(2)] = inst_24650);

(statearr_24656_24722[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (20))){
var state_24654__$1 = state_24654;
var statearr_24657_24723 = state_24654__$1;
(statearr_24657_24723[(2)] = null);

(statearr_24657_24723[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (1))){
var state_24654__$1 = state_24654;
var statearr_24658_24724 = state_24654__$1;
(statearr_24658_24724[(2)] = null);

(statearr_24658_24724[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (4))){
var inst_24619 = (state_24654[(7)]);
var inst_24619__$1 = (state_24654[(2)]);
var inst_24620 = (inst_24619__$1 == null);
var state_24654__$1 = (function (){var statearr_24659 = state_24654;
(statearr_24659[(7)] = inst_24619__$1);

return statearr_24659;
})();
if(cljs.core.truth_(inst_24620)){
var statearr_24660_24725 = state_24654__$1;
(statearr_24660_24725[(1)] = (5));

} else {
var statearr_24661_24726 = state_24654__$1;
(statearr_24661_24726[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (15))){
var inst_24632 = (state_24654[(8)]);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24654__$1,(18),to,inst_24632);
} else {
if((state_val_24655 === (21))){
var inst_24645 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24662_24727 = state_24654__$1;
(statearr_24662_24727[(2)] = inst_24645);

(statearr_24662_24727[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (13))){
var inst_24647 = (state_24654[(2)]);
var state_24654__$1 = (function (){var statearr_24663 = state_24654;
(statearr_24663[(9)] = inst_24647);

return statearr_24663;
})();
var statearr_24664_24728 = state_24654__$1;
(statearr_24664_24728[(2)] = null);

(statearr_24664_24728[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (6))){
var inst_24619 = (state_24654[(7)]);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24654__$1,(11),inst_24619);
} else {
if((state_val_24655 === (17))){
var inst_24640 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
if(cljs.core.truth_(inst_24640)){
var statearr_24665_24729 = state_24654__$1;
(statearr_24665_24729[(1)] = (19));

} else {
var statearr_24666_24730 = state_24654__$1;
(statearr_24666_24730[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (3))){
var inst_24652 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24654__$1,inst_24652);
} else {
if((state_val_24655 === (12))){
var inst_24629 = (state_24654[(10)]);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24654__$1,(14),inst_24629);
} else {
if((state_val_24655 === (2))){
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24654__$1,(4),results);
} else {
if((state_val_24655 === (19))){
var state_24654__$1 = state_24654;
var statearr_24667_24731 = state_24654__$1;
(statearr_24667_24731[(2)] = null);

(statearr_24667_24731[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (11))){
var inst_24629 = (state_24654[(2)]);
var state_24654__$1 = (function (){var statearr_24668 = state_24654;
(statearr_24668[(10)] = inst_24629);

return statearr_24668;
})();
var statearr_24669_24732 = state_24654__$1;
(statearr_24669_24732[(2)] = null);

(statearr_24669_24732[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (9))){
var state_24654__$1 = state_24654;
var statearr_24670_24733 = state_24654__$1;
(statearr_24670_24733[(2)] = null);

(statearr_24670_24733[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (5))){
var state_24654__$1 = state_24654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24671_24734 = state_24654__$1;
(statearr_24671_24734[(1)] = (8));

} else {
var statearr_24672_24735 = state_24654__$1;
(statearr_24672_24735[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (14))){
var inst_24632 = (state_24654[(8)]);
var inst_24634 = (state_24654[(11)]);
var inst_24632__$1 = (state_24654[(2)]);
var inst_24633 = (inst_24632__$1 == null);
var inst_24634__$1 = cljs.core.not(inst_24633);
var state_24654__$1 = (function (){var statearr_24673 = state_24654;
(statearr_24673[(8)] = inst_24632__$1);

(statearr_24673[(11)] = inst_24634__$1);

return statearr_24673;
})();
if(inst_24634__$1){
var statearr_24674_24736 = state_24654__$1;
(statearr_24674_24736[(1)] = (15));

} else {
var statearr_24675_24737 = state_24654__$1;
(statearr_24675_24737[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (16))){
var inst_24634 = (state_24654[(11)]);
var state_24654__$1 = state_24654;
var statearr_24676_24738 = state_24654__$1;
(statearr_24676_24738[(2)] = inst_24634);

(statearr_24676_24738[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (10))){
var inst_24626 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24677_24739 = state_24654__$1;
(statearr_24677_24739[(2)] = inst_24626);

(statearr_24677_24739[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (18))){
var inst_24637 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24678_24740 = state_24654__$1;
(statearr_24678_24740[(2)] = inst_24637);

(statearr_24678_24740[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24655 === (8))){
var inst_24623 = cljs.core.async.close_BANG_(to);
var state_24654__$1 = state_24654;
var statearr_24679_24741 = state_24654__$1;
(statearr_24679_24741[(2)] = inst_24623);

(statearr_24679_24741[(1)] = (10));


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
});})(c__24111__auto__,jobs,results,process,async))
;
return ((function (switch__23985__auto__,c__24111__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0 = (function (){
var statearr_24683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__);

(statearr_24683[(1)] = (1));

return statearr_24683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1 = (function (state_24654){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24654);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24684){if((e24684 instanceof Object)){
var ex__23989__auto__ = e24684;
var statearr_24685_24742 = state_24654;
(statearr_24685_24742[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24654);

return cljs.core.cst$kw$recur;
} else {
throw e24684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24743 = state_24654;
state_24654 = G__24743;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto__,jobs,results,process,async))
})();
var state__24113__auto__ = (function (){var statearr_24686 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto__);

return statearr_24686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto__,jobs,results,process,async))
);

return c__24111__auto__;
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
var args24744 = [];
var len__8739__auto___24747 = arguments.length;
var i__8740__auto___24748 = (0);
while(true){
if((i__8740__auto___24748 < len__8739__auto___24747)){
args24744.push((arguments[i__8740__auto___24748]));

var G__24749 = (i__8740__auto___24748 + (1));
i__8740__auto___24748 = G__24749;
continue;
} else {
}
break;
}

var G__24746 = args24744.length;
switch (G__24746) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24744.length)].join('')));

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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24751.length)].join('')));

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
var args24758 = [];
var len__8739__auto___24811 = arguments.length;
var i__8740__auto___24812 = (0);
while(true){
if((i__8740__auto___24812 < len__8739__auto___24811)){
args24758.push((arguments[i__8740__auto___24812]));

var G__24813 = (i__8740__auto___24812 + (1));
i__8740__auto___24812 = G__24813;
continue;
} else {
}
break;
}

var G__24760 = args24758.length;
switch (G__24760) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24758.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__24111__auto___24815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___24815,tc,fc){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___24815,tc,fc){
return (function (state_24786){
var state_val_24787 = (state_24786[(1)]);
if((state_val_24787 === (7))){
var inst_24782 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
var statearr_24788_24816 = state_24786__$1;
(statearr_24788_24816[(2)] = inst_24782);

(statearr_24788_24816[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (1))){
var state_24786__$1 = state_24786;
var statearr_24789_24817 = state_24786__$1;
(statearr_24789_24817[(2)] = null);

(statearr_24789_24817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (4))){
var inst_24763 = (state_24786[(7)]);
var inst_24763__$1 = (state_24786[(2)]);
var inst_24764 = (inst_24763__$1 == null);
var state_24786__$1 = (function (){var statearr_24790 = state_24786;
(statearr_24790[(7)] = inst_24763__$1);

return statearr_24790;
})();
if(cljs.core.truth_(inst_24764)){
var statearr_24791_24818 = state_24786__$1;
(statearr_24791_24818[(1)] = (5));

} else {
var statearr_24792_24819 = state_24786__$1;
(statearr_24792_24819[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (13))){
var state_24786__$1 = state_24786;
var statearr_24793_24820 = state_24786__$1;
(statearr_24793_24820[(2)] = null);

(statearr_24793_24820[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (6))){
var inst_24763 = (state_24786[(7)]);
var inst_24769 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24763) : p.call(null,inst_24763));
var state_24786__$1 = state_24786;
if(cljs.core.truth_(inst_24769)){
var statearr_24794_24821 = state_24786__$1;
(statearr_24794_24821[(1)] = (9));

} else {
var statearr_24795_24822 = state_24786__$1;
(statearr_24795_24822[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (3))){
var inst_24784 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24786__$1,inst_24784);
} else {
if((state_val_24787 === (12))){
var state_24786__$1 = state_24786;
var statearr_24796_24823 = state_24786__$1;
(statearr_24796_24823[(2)] = null);

(statearr_24796_24823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (2))){
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24786__$1,(4),ch);
} else {
if((state_val_24787 === (11))){
var inst_24763 = (state_24786[(7)]);
var inst_24773 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24786__$1,(8),inst_24773,inst_24763);
} else {
if((state_val_24787 === (9))){
var state_24786__$1 = state_24786;
var statearr_24797_24824 = state_24786__$1;
(statearr_24797_24824[(2)] = tc);

(statearr_24797_24824[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (5))){
var inst_24766 = cljs.core.async.close_BANG_(tc);
var inst_24767 = cljs.core.async.close_BANG_(fc);
var state_24786__$1 = (function (){var statearr_24798 = state_24786;
(statearr_24798[(8)] = inst_24766);

return statearr_24798;
})();
var statearr_24799_24825 = state_24786__$1;
(statearr_24799_24825[(2)] = inst_24767);

(statearr_24799_24825[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (14))){
var inst_24780 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
var statearr_24800_24826 = state_24786__$1;
(statearr_24800_24826[(2)] = inst_24780);

(statearr_24800_24826[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (10))){
var state_24786__$1 = state_24786;
var statearr_24801_24827 = state_24786__$1;
(statearr_24801_24827[(2)] = fc);

(statearr_24801_24827[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24787 === (8))){
var inst_24775 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
if(cljs.core.truth_(inst_24775)){
var statearr_24802_24828 = state_24786__$1;
(statearr_24802_24828[(1)] = (12));

} else {
var statearr_24803_24829 = state_24786__$1;
(statearr_24803_24829[(1)] = (13));

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
});})(c__24111__auto___24815,tc,fc))
;
return ((function (switch__23985__auto__,c__24111__auto___24815,tc,fc){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_24807 = [null,null,null,null,null,null,null,null,null];
(statearr_24807[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_24807[(1)] = (1));

return statearr_24807;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_24786){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24786);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24808){if((e24808 instanceof Object)){
var ex__23989__auto__ = e24808;
var statearr_24809_24830 = state_24786;
(statearr_24809_24830[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24786);

return cljs.core.cst$kw$recur;
} else {
throw e24808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24831 = state_24786;
state_24786 = G__24831;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_24786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_24786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___24815,tc,fc))
})();
var state__24113__auto__ = (function (){var statearr_24810 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___24815);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___24815,tc,fc))
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
var c__24111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto__){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto__){
return (function (state_24895){
var state_val_24896 = (state_24895[(1)]);
if((state_val_24896 === (7))){
var inst_24891 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24897_24918 = state_24895__$1;
(statearr_24897_24918[(2)] = inst_24891);

(statearr_24897_24918[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24896 === (1))){
var inst_24875 = init;
var state_24895__$1 = (function (){var statearr_24898 = state_24895;
(statearr_24898[(7)] = inst_24875);

return statearr_24898;
})();
var statearr_24899_24919 = state_24895__$1;
(statearr_24899_24919[(2)] = null);

(statearr_24899_24919[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24896 === (4))){
var inst_24878 = (state_24895[(8)]);
var inst_24878__$1 = (state_24895[(2)]);
var inst_24879 = (inst_24878__$1 == null);
var state_24895__$1 = (function (){var statearr_24900 = state_24895;
(statearr_24900[(8)] = inst_24878__$1);

return statearr_24900;
})();
if(cljs.core.truth_(inst_24879)){
var statearr_24901_24920 = state_24895__$1;
(statearr_24901_24920[(1)] = (5));

} else {
var statearr_24902_24921 = state_24895__$1;
(statearr_24902_24921[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24896 === (6))){
var inst_24882 = (state_24895[(9)]);
var inst_24875 = (state_24895[(7)]);
var inst_24878 = (state_24895[(8)]);
var inst_24882__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24875,inst_24878) : f.call(null,inst_24875,inst_24878));
var inst_24883 = cljs.core.reduced_QMARK_(inst_24882__$1);
var state_24895__$1 = (function (){var statearr_24903 = state_24895;
(statearr_24903[(9)] = inst_24882__$1);

return statearr_24903;
})();
if(inst_24883){
var statearr_24904_24922 = state_24895__$1;
(statearr_24904_24922[(1)] = (8));

} else {
var statearr_24905_24923 = state_24895__$1;
(statearr_24905_24923[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24896 === (3))){
var inst_24893 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24895__$1,inst_24893);
} else {
if((state_val_24896 === (2))){
var state_24895__$1 = state_24895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24895__$1,(4),ch);
} else {
if((state_val_24896 === (9))){
var inst_24882 = (state_24895[(9)]);
var inst_24875 = inst_24882;
var state_24895__$1 = (function (){var statearr_24906 = state_24895;
(statearr_24906[(7)] = inst_24875);

return statearr_24906;
})();
var statearr_24907_24924 = state_24895__$1;
(statearr_24907_24924[(2)] = null);

(statearr_24907_24924[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24896 === (5))){
var inst_24875 = (state_24895[(7)]);
var state_24895__$1 = state_24895;
var statearr_24908_24925 = state_24895__$1;
(statearr_24908_24925[(2)] = inst_24875);

(statearr_24908_24925[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24896 === (10))){
var inst_24889 = (state_24895[(2)]);
var state_24895__$1 = state_24895;
var statearr_24909_24926 = state_24895__$1;
(statearr_24909_24926[(2)] = inst_24889);

(statearr_24909_24926[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24896 === (8))){
var inst_24882 = (state_24895[(9)]);
var inst_24885 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_24882) : cljs.core.deref.call(null,inst_24882));
var state_24895__$1 = state_24895;
var statearr_24910_24927 = state_24895__$1;
(statearr_24910_24927[(2)] = inst_24885);

(statearr_24910_24927[(1)] = (10));


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
});})(c__24111__auto__))
;
return ((function (switch__23985__auto__,c__24111__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23986__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23986__auto____0 = (function (){
var statearr_24914 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24914[(0)] = cljs$core$async$reduce_$_state_machine__23986__auto__);

(statearr_24914[(1)] = (1));

return statearr_24914;
});
var cljs$core$async$reduce_$_state_machine__23986__auto____1 = (function (state_24895){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24895);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24915){if((e24915 instanceof Object)){
var ex__23989__auto__ = e24915;
var statearr_24916_24928 = state_24895;
(statearr_24916_24928[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24895);

return cljs.core.cst$kw$recur;
} else {
throw e24915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24929 = state_24895;
state_24895 = G__24929;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23986__auto__ = function(state_24895){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23986__auto____1.call(this,state_24895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23986__auto____0;
cljs$core$async$reduce_$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23986__auto____1;
return cljs$core$async$reduce_$_state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto__))
})();
var state__24113__auto__ = (function (){var statearr_24917 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto__);

return statearr_24917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto__))
);

return c__24111__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto__,f__$1){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto__,f__$1){
return (function (state_24949){
var state_val_24950 = (state_24949[(1)]);
if((state_val_24950 === (1))){
var inst_24944 = cljs.core.async.reduce(f__$1,init,ch);
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24949__$1,(2),inst_24944);
} else {
if((state_val_24950 === (2))){
var inst_24946 = (state_24949[(2)]);
var inst_24947 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24946) : f__$1.call(null,inst_24946));
var state_24949__$1 = state_24949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24949__$1,inst_24947);
} else {
return null;
}
}
});})(c__24111__auto__,f__$1))
;
return ((function (switch__23985__auto__,c__24111__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23986__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23986__auto____0 = (function (){
var statearr_24954 = [null,null,null,null,null,null,null];
(statearr_24954[(0)] = cljs$core$async$transduce_$_state_machine__23986__auto__);

(statearr_24954[(1)] = (1));

return statearr_24954;
});
var cljs$core$async$transduce_$_state_machine__23986__auto____1 = (function (state_24949){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24949);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e24955){if((e24955 instanceof Object)){
var ex__23989__auto__ = e24955;
var statearr_24956_24958 = state_24949;
(statearr_24956_24958[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24949);

return cljs.core.cst$kw$recur;
} else {
throw e24955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__24959 = state_24949;
state_24949 = G__24959;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23986__auto__ = function(state_24949){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23986__auto____1.call(this,state_24949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23986__auto____0;
cljs$core$async$transduce_$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23986__auto____1;
return cljs$core$async$transduce_$_state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto__,f__$1))
})();
var state__24113__auto__ = (function (){var statearr_24957 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_24957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto__);

return statearr_24957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto__,f__$1))
);

return c__24111__auto__;
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
var args24960 = [];
var len__8739__auto___25012 = arguments.length;
var i__8740__auto___25013 = (0);
while(true){
if((i__8740__auto___25013 < len__8739__auto___25012)){
args24960.push((arguments[i__8740__auto___25013]));

var G__25014 = (i__8740__auto___25013 + (1));
i__8740__auto___25013 = G__25014;
continue;
} else {
}
break;
}

var G__24962 = args24960.length;
switch (G__24962) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24960.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto__){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto__){
return (function (state_24987){
var state_val_24988 = (state_24987[(1)]);
if((state_val_24988 === (7))){
var inst_24969 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
var statearr_24989_25016 = state_24987__$1;
(statearr_24989_25016[(2)] = inst_24969);

(statearr_24989_25016[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (1))){
var inst_24963 = cljs.core.seq(coll);
var inst_24964 = inst_24963;
var state_24987__$1 = (function (){var statearr_24990 = state_24987;
(statearr_24990[(7)] = inst_24964);

return statearr_24990;
})();
var statearr_24991_25017 = state_24987__$1;
(statearr_24991_25017[(2)] = null);

(statearr_24991_25017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (4))){
var inst_24964 = (state_24987[(7)]);
var inst_24967 = cljs.core.first(inst_24964);
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24987__$1,(7),ch,inst_24967);
} else {
if((state_val_24988 === (13))){
var inst_24981 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
var statearr_24992_25018 = state_24987__$1;
(statearr_24992_25018[(2)] = inst_24981);

(statearr_24992_25018[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (6))){
var inst_24972 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
if(cljs.core.truth_(inst_24972)){
var statearr_24993_25019 = state_24987__$1;
(statearr_24993_25019[(1)] = (8));

} else {
var statearr_24994_25020 = state_24987__$1;
(statearr_24994_25020[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (3))){
var inst_24985 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24987__$1,inst_24985);
} else {
if((state_val_24988 === (12))){
var state_24987__$1 = state_24987;
var statearr_24995_25021 = state_24987__$1;
(statearr_24995_25021[(2)] = null);

(statearr_24995_25021[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (2))){
var inst_24964 = (state_24987[(7)]);
var state_24987__$1 = state_24987;
if(cljs.core.truth_(inst_24964)){
var statearr_24996_25022 = state_24987__$1;
(statearr_24996_25022[(1)] = (4));

} else {
var statearr_24997_25023 = state_24987__$1;
(statearr_24997_25023[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (11))){
var inst_24978 = cljs.core.async.close_BANG_(ch);
var state_24987__$1 = state_24987;
var statearr_24998_25024 = state_24987__$1;
(statearr_24998_25024[(2)] = inst_24978);

(statearr_24998_25024[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (9))){
var state_24987__$1 = state_24987;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24999_25025 = state_24987__$1;
(statearr_24999_25025[(1)] = (11));

} else {
var statearr_25000_25026 = state_24987__$1;
(statearr_25000_25026[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (5))){
var inst_24964 = (state_24987[(7)]);
var state_24987__$1 = state_24987;
var statearr_25001_25027 = state_24987__$1;
(statearr_25001_25027[(2)] = inst_24964);

(statearr_25001_25027[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (10))){
var inst_24983 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
var statearr_25002_25028 = state_24987__$1;
(statearr_25002_25028[(2)] = inst_24983);

(statearr_25002_25028[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24988 === (8))){
var inst_24964 = (state_24987[(7)]);
var inst_24974 = cljs.core.next(inst_24964);
var inst_24964__$1 = inst_24974;
var state_24987__$1 = (function (){var statearr_25003 = state_24987;
(statearr_25003[(7)] = inst_24964__$1);

return statearr_25003;
})();
var statearr_25004_25029 = state_24987__$1;
(statearr_25004_25029[(2)] = null);

(statearr_25004_25029[(1)] = (2));


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
});})(c__24111__auto__))
;
return ((function (switch__23985__auto__,c__24111__auto__){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_25008 = [null,null,null,null,null,null,null,null];
(statearr_25008[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_25008[(1)] = (1));

return statearr_25008;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_24987){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_24987);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e25009){if((e25009 instanceof Object)){
var ex__23989__auto__ = e25009;
var statearr_25010_25030 = state_24987;
(statearr_25010_25030[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24987);

return cljs.core.cst$kw$recur;
} else {
throw e25009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__25031 = state_24987;
state_24987 = G__25031;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_24987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_24987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto__))
})();
var state__24113__auto__ = (function (){var statearr_25011 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_25011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto__);

return statearr_25011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto__))
);

return c__24111__auto__;
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
var cs = (function (){var G__25260 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25260) : cljs.core.atom.call(null,G__25260));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25261 = (function (ch,cs,meta25262){
this.ch = ch;
this.cs = cs;
this.meta25262 = meta25262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25263,meta25262__$1){
var self__ = this;
var _25263__$1 = this;
return (new cljs.core.async.t_cljs$core$async25261(self__.ch,self__.cs,meta25262__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25263){
var self__ = this;
var _25263__$1 = this;
return self__.meta25262;
});})(cs))
;


cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25264_25488 = self__.cs;
var G__25265_25489 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25264_25488,G__25265_25489) : cljs.core.reset_BANG_.call(null,G__25264_25488,G__25265_25489));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25261.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25262], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25261";

cljs.core.async.t_cljs$core$async25261.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25261");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25261 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25261(ch__$1,cs__$1,meta25262){
return (new cljs.core.async.t_cljs$core$async25261(ch__$1,cs__$1,meta25262));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25261(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24111__auto___25490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___25490,cs,m,dchan,dctr,done){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___25490,cs,m,dchan,dctr,done){
return (function (state_25400){
var state_val_25401 = (state_25400[(1)]);
if((state_val_25401 === (7))){
var inst_25396 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25402_25491 = state_25400__$1;
(statearr_25402_25491[(2)] = inst_25396);

(statearr_25402_25491[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (20))){
var inst_25299 = (state_25400[(7)]);
var inst_25311 = cljs.core.first(inst_25299);
var inst_25312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25311,(0),null);
var inst_25313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25311,(1),null);
var state_25400__$1 = (function (){var statearr_25403 = state_25400;
(statearr_25403[(8)] = inst_25312);

return statearr_25403;
})();
if(cljs.core.truth_(inst_25313)){
var statearr_25404_25492 = state_25400__$1;
(statearr_25404_25492[(1)] = (22));

} else {
var statearr_25405_25493 = state_25400__$1;
(statearr_25405_25493[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (27))){
var inst_25343 = (state_25400[(9)]);
var inst_25341 = (state_25400[(10)]);
var inst_25268 = (state_25400[(11)]);
var inst_25348 = (state_25400[(12)]);
var inst_25348__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25341,inst_25343);
var inst_25349 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25348__$1,inst_25268,done);
var state_25400__$1 = (function (){var statearr_25406 = state_25400;
(statearr_25406[(12)] = inst_25348__$1);

return statearr_25406;
})();
if(cljs.core.truth_(inst_25349)){
var statearr_25407_25494 = state_25400__$1;
(statearr_25407_25494[(1)] = (30));

} else {
var statearr_25408_25495 = state_25400__$1;
(statearr_25408_25495[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (1))){
var state_25400__$1 = state_25400;
var statearr_25409_25496 = state_25400__$1;
(statearr_25409_25496[(2)] = null);

(statearr_25409_25496[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (24))){
var inst_25299 = (state_25400[(7)]);
var inst_25318 = (state_25400[(2)]);
var inst_25319 = cljs.core.next(inst_25299);
var inst_25277 = inst_25319;
var inst_25278 = null;
var inst_25279 = (0);
var inst_25280 = (0);
var state_25400__$1 = (function (){var statearr_25410 = state_25400;
(statearr_25410[(13)] = inst_25279);

(statearr_25410[(14)] = inst_25280);

(statearr_25410[(15)] = inst_25318);

(statearr_25410[(16)] = inst_25278);

(statearr_25410[(17)] = inst_25277);

return statearr_25410;
})();
var statearr_25411_25497 = state_25400__$1;
(statearr_25411_25497[(2)] = null);

(statearr_25411_25497[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (39))){
var state_25400__$1 = state_25400;
var statearr_25415_25498 = state_25400__$1;
(statearr_25415_25498[(2)] = null);

(statearr_25415_25498[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (4))){
var inst_25268 = (state_25400[(11)]);
var inst_25268__$1 = (state_25400[(2)]);
var inst_25269 = (inst_25268__$1 == null);
var state_25400__$1 = (function (){var statearr_25416 = state_25400;
(statearr_25416[(11)] = inst_25268__$1);

return statearr_25416;
})();
if(cljs.core.truth_(inst_25269)){
var statearr_25417_25499 = state_25400__$1;
(statearr_25417_25499[(1)] = (5));

} else {
var statearr_25418_25500 = state_25400__$1;
(statearr_25418_25500[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (15))){
var inst_25279 = (state_25400[(13)]);
var inst_25280 = (state_25400[(14)]);
var inst_25278 = (state_25400[(16)]);
var inst_25277 = (state_25400[(17)]);
var inst_25295 = (state_25400[(2)]);
var inst_25296 = (inst_25280 + (1));
var tmp25412 = inst_25279;
var tmp25413 = inst_25278;
var tmp25414 = inst_25277;
var inst_25277__$1 = tmp25414;
var inst_25278__$1 = tmp25413;
var inst_25279__$1 = tmp25412;
var inst_25280__$1 = inst_25296;
var state_25400__$1 = (function (){var statearr_25419 = state_25400;
(statearr_25419[(13)] = inst_25279__$1);

(statearr_25419[(14)] = inst_25280__$1);

(statearr_25419[(16)] = inst_25278__$1);

(statearr_25419[(18)] = inst_25295);

(statearr_25419[(17)] = inst_25277__$1);

return statearr_25419;
})();
var statearr_25420_25501 = state_25400__$1;
(statearr_25420_25501[(2)] = null);

(statearr_25420_25501[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (21))){
var inst_25322 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25424_25502 = state_25400__$1;
(statearr_25424_25502[(2)] = inst_25322);

(statearr_25424_25502[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (31))){
var inst_25348 = (state_25400[(12)]);
var inst_25352 = done(null);
var inst_25353 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25348);
var state_25400__$1 = (function (){var statearr_25425 = state_25400;
(statearr_25425[(19)] = inst_25352);

return statearr_25425;
})();
var statearr_25426_25503 = state_25400__$1;
(statearr_25426_25503[(2)] = inst_25353);

(statearr_25426_25503[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (32))){
var inst_25343 = (state_25400[(9)]);
var inst_25341 = (state_25400[(10)]);
var inst_25342 = (state_25400[(20)]);
var inst_25340 = (state_25400[(21)]);
var inst_25355 = (state_25400[(2)]);
var inst_25356 = (inst_25343 + (1));
var tmp25421 = inst_25341;
var tmp25422 = inst_25342;
var tmp25423 = inst_25340;
var inst_25340__$1 = tmp25423;
var inst_25341__$1 = tmp25421;
var inst_25342__$1 = tmp25422;
var inst_25343__$1 = inst_25356;
var state_25400__$1 = (function (){var statearr_25427 = state_25400;
(statearr_25427[(9)] = inst_25343__$1);

(statearr_25427[(10)] = inst_25341__$1);

(statearr_25427[(22)] = inst_25355);

(statearr_25427[(20)] = inst_25342__$1);

(statearr_25427[(21)] = inst_25340__$1);

return statearr_25427;
})();
var statearr_25428_25504 = state_25400__$1;
(statearr_25428_25504[(2)] = null);

(statearr_25428_25504[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (40))){
var inst_25368 = (state_25400[(23)]);
var inst_25372 = done(null);
var inst_25373 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25368);
var state_25400__$1 = (function (){var statearr_25429 = state_25400;
(statearr_25429[(24)] = inst_25372);

return statearr_25429;
})();
var statearr_25430_25505 = state_25400__$1;
(statearr_25430_25505[(2)] = inst_25373);

(statearr_25430_25505[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (33))){
var inst_25359 = (state_25400[(25)]);
var inst_25361 = cljs.core.chunked_seq_QMARK_(inst_25359);
var state_25400__$1 = state_25400;
if(inst_25361){
var statearr_25431_25506 = state_25400__$1;
(statearr_25431_25506[(1)] = (36));

} else {
var statearr_25432_25507 = state_25400__$1;
(statearr_25432_25507[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (13))){
var inst_25289 = (state_25400[(26)]);
var inst_25292 = cljs.core.async.close_BANG_(inst_25289);
var state_25400__$1 = state_25400;
var statearr_25433_25508 = state_25400__$1;
(statearr_25433_25508[(2)] = inst_25292);

(statearr_25433_25508[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (22))){
var inst_25312 = (state_25400[(8)]);
var inst_25315 = cljs.core.async.close_BANG_(inst_25312);
var state_25400__$1 = state_25400;
var statearr_25434_25509 = state_25400__$1;
(statearr_25434_25509[(2)] = inst_25315);

(statearr_25434_25509[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (36))){
var inst_25359 = (state_25400[(25)]);
var inst_25363 = cljs.core.chunk_first(inst_25359);
var inst_25364 = cljs.core.chunk_rest(inst_25359);
var inst_25365 = cljs.core.count(inst_25363);
var inst_25340 = inst_25364;
var inst_25341 = inst_25363;
var inst_25342 = inst_25365;
var inst_25343 = (0);
var state_25400__$1 = (function (){var statearr_25435 = state_25400;
(statearr_25435[(9)] = inst_25343);

(statearr_25435[(10)] = inst_25341);

(statearr_25435[(20)] = inst_25342);

(statearr_25435[(21)] = inst_25340);

return statearr_25435;
})();
var statearr_25436_25510 = state_25400__$1;
(statearr_25436_25510[(2)] = null);

(statearr_25436_25510[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (41))){
var inst_25359 = (state_25400[(25)]);
var inst_25375 = (state_25400[(2)]);
var inst_25376 = cljs.core.next(inst_25359);
var inst_25340 = inst_25376;
var inst_25341 = null;
var inst_25342 = (0);
var inst_25343 = (0);
var state_25400__$1 = (function (){var statearr_25437 = state_25400;
(statearr_25437[(27)] = inst_25375);

(statearr_25437[(9)] = inst_25343);

(statearr_25437[(10)] = inst_25341);

(statearr_25437[(20)] = inst_25342);

(statearr_25437[(21)] = inst_25340);

return statearr_25437;
})();
var statearr_25438_25511 = state_25400__$1;
(statearr_25438_25511[(2)] = null);

(statearr_25438_25511[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (43))){
var state_25400__$1 = state_25400;
var statearr_25439_25512 = state_25400__$1;
(statearr_25439_25512[(2)] = null);

(statearr_25439_25512[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (29))){
var inst_25384 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25440_25513 = state_25400__$1;
(statearr_25440_25513[(2)] = inst_25384);

(statearr_25440_25513[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (44))){
var inst_25393 = (state_25400[(2)]);
var state_25400__$1 = (function (){var statearr_25441 = state_25400;
(statearr_25441[(28)] = inst_25393);

return statearr_25441;
})();
var statearr_25442_25514 = state_25400__$1;
(statearr_25442_25514[(2)] = null);

(statearr_25442_25514[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (6))){
var inst_25332 = (state_25400[(29)]);
var inst_25331 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25332__$1 = cljs.core.keys(inst_25331);
var inst_25333 = cljs.core.count(inst_25332__$1);
var inst_25334 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_25333) : cljs.core.reset_BANG_.call(null,dctr,inst_25333));
var inst_25339 = cljs.core.seq(inst_25332__$1);
var inst_25340 = inst_25339;
var inst_25341 = null;
var inst_25342 = (0);
var inst_25343 = (0);
var state_25400__$1 = (function (){var statearr_25443 = state_25400;
(statearr_25443[(9)] = inst_25343);

(statearr_25443[(10)] = inst_25341);

(statearr_25443[(29)] = inst_25332__$1);

(statearr_25443[(30)] = inst_25334);

(statearr_25443[(20)] = inst_25342);

(statearr_25443[(21)] = inst_25340);

return statearr_25443;
})();
var statearr_25444_25515 = state_25400__$1;
(statearr_25444_25515[(2)] = null);

(statearr_25444_25515[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (28))){
var inst_25359 = (state_25400[(25)]);
var inst_25340 = (state_25400[(21)]);
var inst_25359__$1 = cljs.core.seq(inst_25340);
var state_25400__$1 = (function (){var statearr_25445 = state_25400;
(statearr_25445[(25)] = inst_25359__$1);

return statearr_25445;
})();
if(inst_25359__$1){
var statearr_25446_25516 = state_25400__$1;
(statearr_25446_25516[(1)] = (33));

} else {
var statearr_25447_25517 = state_25400__$1;
(statearr_25447_25517[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (25))){
var inst_25343 = (state_25400[(9)]);
var inst_25342 = (state_25400[(20)]);
var inst_25345 = (inst_25343 < inst_25342);
var inst_25346 = inst_25345;
var state_25400__$1 = state_25400;
if(cljs.core.truth_(inst_25346)){
var statearr_25448_25518 = state_25400__$1;
(statearr_25448_25518[(1)] = (27));

} else {
var statearr_25449_25519 = state_25400__$1;
(statearr_25449_25519[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (34))){
var state_25400__$1 = state_25400;
var statearr_25450_25520 = state_25400__$1;
(statearr_25450_25520[(2)] = null);

(statearr_25450_25520[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (17))){
var state_25400__$1 = state_25400;
var statearr_25451_25521 = state_25400__$1;
(statearr_25451_25521[(2)] = null);

(statearr_25451_25521[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (3))){
var inst_25398 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25400__$1,inst_25398);
} else {
if((state_val_25401 === (12))){
var inst_25327 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25452_25522 = state_25400__$1;
(statearr_25452_25522[(2)] = inst_25327);

(statearr_25452_25522[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (2))){
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25400__$1,(4),ch);
} else {
if((state_val_25401 === (23))){
var state_25400__$1 = state_25400;
var statearr_25453_25523 = state_25400__$1;
(statearr_25453_25523[(2)] = null);

(statearr_25453_25523[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (35))){
var inst_25382 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25454_25524 = state_25400__$1;
(statearr_25454_25524[(2)] = inst_25382);

(statearr_25454_25524[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (19))){
var inst_25299 = (state_25400[(7)]);
var inst_25303 = cljs.core.chunk_first(inst_25299);
var inst_25304 = cljs.core.chunk_rest(inst_25299);
var inst_25305 = cljs.core.count(inst_25303);
var inst_25277 = inst_25304;
var inst_25278 = inst_25303;
var inst_25279 = inst_25305;
var inst_25280 = (0);
var state_25400__$1 = (function (){var statearr_25455 = state_25400;
(statearr_25455[(13)] = inst_25279);

(statearr_25455[(14)] = inst_25280);

(statearr_25455[(16)] = inst_25278);

(statearr_25455[(17)] = inst_25277);

return statearr_25455;
})();
var statearr_25456_25525 = state_25400__$1;
(statearr_25456_25525[(2)] = null);

(statearr_25456_25525[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (11))){
var inst_25299 = (state_25400[(7)]);
var inst_25277 = (state_25400[(17)]);
var inst_25299__$1 = cljs.core.seq(inst_25277);
var state_25400__$1 = (function (){var statearr_25457 = state_25400;
(statearr_25457[(7)] = inst_25299__$1);

return statearr_25457;
})();
if(inst_25299__$1){
var statearr_25458_25526 = state_25400__$1;
(statearr_25458_25526[(1)] = (16));

} else {
var statearr_25459_25527 = state_25400__$1;
(statearr_25459_25527[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (9))){
var inst_25329 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25460_25528 = state_25400__$1;
(statearr_25460_25528[(2)] = inst_25329);

(statearr_25460_25528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (5))){
var inst_25275 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25276 = cljs.core.seq(inst_25275);
var inst_25277 = inst_25276;
var inst_25278 = null;
var inst_25279 = (0);
var inst_25280 = (0);
var state_25400__$1 = (function (){var statearr_25461 = state_25400;
(statearr_25461[(13)] = inst_25279);

(statearr_25461[(14)] = inst_25280);

(statearr_25461[(16)] = inst_25278);

(statearr_25461[(17)] = inst_25277);

return statearr_25461;
})();
var statearr_25462_25529 = state_25400__$1;
(statearr_25462_25529[(2)] = null);

(statearr_25462_25529[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (14))){
var state_25400__$1 = state_25400;
var statearr_25463_25530 = state_25400__$1;
(statearr_25463_25530[(2)] = null);

(statearr_25463_25530[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (45))){
var inst_25390 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25464_25531 = state_25400__$1;
(statearr_25464_25531[(2)] = inst_25390);

(statearr_25464_25531[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (26))){
var inst_25332 = (state_25400[(29)]);
var inst_25386 = (state_25400[(2)]);
var inst_25387 = cljs.core.seq(inst_25332);
var state_25400__$1 = (function (){var statearr_25465 = state_25400;
(statearr_25465[(31)] = inst_25386);

return statearr_25465;
})();
if(inst_25387){
var statearr_25466_25532 = state_25400__$1;
(statearr_25466_25532[(1)] = (42));

} else {
var statearr_25467_25533 = state_25400__$1;
(statearr_25467_25533[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (16))){
var inst_25299 = (state_25400[(7)]);
var inst_25301 = cljs.core.chunked_seq_QMARK_(inst_25299);
var state_25400__$1 = state_25400;
if(inst_25301){
var statearr_25468_25534 = state_25400__$1;
(statearr_25468_25534[(1)] = (19));

} else {
var statearr_25469_25535 = state_25400__$1;
(statearr_25469_25535[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (38))){
var inst_25379 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25470_25536 = state_25400__$1;
(statearr_25470_25536[(2)] = inst_25379);

(statearr_25470_25536[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (30))){
var state_25400__$1 = state_25400;
var statearr_25471_25537 = state_25400__$1;
(statearr_25471_25537[(2)] = null);

(statearr_25471_25537[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (10))){
var inst_25280 = (state_25400[(14)]);
var inst_25278 = (state_25400[(16)]);
var inst_25288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25278,inst_25280);
var inst_25289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25288,(0),null);
var inst_25290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25288,(1),null);
var state_25400__$1 = (function (){var statearr_25472 = state_25400;
(statearr_25472[(26)] = inst_25289);

return statearr_25472;
})();
if(cljs.core.truth_(inst_25290)){
var statearr_25473_25538 = state_25400__$1;
(statearr_25473_25538[(1)] = (13));

} else {
var statearr_25474_25539 = state_25400__$1;
(statearr_25474_25539[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (18))){
var inst_25325 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25475_25540 = state_25400__$1;
(statearr_25475_25540[(2)] = inst_25325);

(statearr_25475_25540[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (42))){
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25400__$1,(45),dchan);
} else {
if((state_val_25401 === (37))){
var inst_25268 = (state_25400[(11)]);
var inst_25368 = (state_25400[(23)]);
var inst_25359 = (state_25400[(25)]);
var inst_25368__$1 = cljs.core.first(inst_25359);
var inst_25369 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25368__$1,inst_25268,done);
var state_25400__$1 = (function (){var statearr_25476 = state_25400;
(statearr_25476[(23)] = inst_25368__$1);

return statearr_25476;
})();
if(cljs.core.truth_(inst_25369)){
var statearr_25477_25541 = state_25400__$1;
(statearr_25477_25541[(1)] = (39));

} else {
var statearr_25478_25542 = state_25400__$1;
(statearr_25478_25542[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25401 === (8))){
var inst_25279 = (state_25400[(13)]);
var inst_25280 = (state_25400[(14)]);
var inst_25282 = (inst_25280 < inst_25279);
var inst_25283 = inst_25282;
var state_25400__$1 = state_25400;
if(cljs.core.truth_(inst_25283)){
var statearr_25479_25543 = state_25400__$1;
(statearr_25479_25543[(1)] = (10));

} else {
var statearr_25480_25544 = state_25400__$1;
(statearr_25480_25544[(1)] = (11));

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
});})(c__24111__auto___25490,cs,m,dchan,dctr,done))
;
return ((function (switch__23985__auto__,c__24111__auto___25490,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23986__auto__ = null;
var cljs$core$async$mult_$_state_machine__23986__auto____0 = (function (){
var statearr_25484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25484[(0)] = cljs$core$async$mult_$_state_machine__23986__auto__);

(statearr_25484[(1)] = (1));

return statearr_25484;
});
var cljs$core$async$mult_$_state_machine__23986__auto____1 = (function (state_25400){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_25400);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e25485){if((e25485 instanceof Object)){
var ex__23989__auto__ = e25485;
var statearr_25486_25545 = state_25400;
(statearr_25486_25545[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25400);

return cljs.core.cst$kw$recur;
} else {
throw e25485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__25546 = state_25400;
state_25400 = G__25546;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23986__auto__ = function(state_25400){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23986__auto____1.call(this,state_25400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23986__auto____0;
cljs$core$async$mult_$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23986__auto____1;
return cljs$core$async$mult_$_state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___25490,cs,m,dchan,dctr,done))
})();
var state__24113__auto__ = (function (){var statearr_25487 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_25487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___25490);

return statearr_25487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___25490,cs,m,dchan,dctr,done))
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
var args25547 = [];
var len__8739__auto___25550 = arguments.length;
var i__8740__auto___25551 = (0);
while(true){
if((i__8740__auto___25551 < len__8739__auto___25550)){
args25547.push((arguments[i__8740__auto___25551]));

var G__25552 = (i__8740__auto___25551 + (1));
i__8740__auto___25551 = G__25552;
continue;
} else {
}
break;
}

var G__25549 = args25547.length;
switch (G__25549) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25547.length)].join('')));

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
var len__8739__auto___25564 = arguments.length;
var i__8740__auto___25565 = (0);
while(true){
if((i__8740__auto___25565 < len__8739__auto___25564)){
args__8746__auto__.push((arguments[i__8740__auto___25565]));

var G__25566 = (i__8740__auto___25565 + (1));
i__8740__auto___25565 = G__25566;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((3) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8747__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25558){
var map__25559 = p__25558;
var map__25559__$1 = ((((!((map__25559 == null)))?((((map__25559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25559):map__25559);
var opts = map__25559__$1;
var statearr_25561_25567 = state;
(statearr_25561_25567[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__25559,map__25559__$1,opts){
return (function (val){
var statearr_25562_25568 = state;
(statearr_25562_25568[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25559,map__25559__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_25563_25569 = state;
(statearr_25563_25569[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25554){
var G__25555 = cljs.core.first(seq25554);
var seq25554__$1 = cljs.core.next(seq25554);
var G__25556 = cljs.core.first(seq25554__$1);
var seq25554__$2 = cljs.core.next(seq25554__$1);
var G__25557 = cljs.core.first(seq25554__$2);
var seq25554__$3 = cljs.core.next(seq25554__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25555,G__25556,G__25557,seq25554__$3);
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
var cs = (function (){var G__25741 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25741) : cljs.core.atom.call(null,G__25741));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__25742 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25742) : cljs.core.atom.call(null,G__25742));
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
if(typeof cljs.core.async.t_cljs$core$async25743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25743 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25744){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25744 = meta25744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25745,meta25744__$1){
var self__ = this;
var _25745__$1 = this;
return (new cljs.core.async.t_cljs$core$async25743(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25744__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25745){
var self__ = this;
var _25745__$1 = this;
return self__.meta25744;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25746_25912 = self__.cs;
var G__25747_25913 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25746_25912,G__25747_25913) : cljs.core.reset_BANG_.call(null,G__25746_25912,G__25747_25913));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25743.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25743.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25744], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25743";

cljs.core.async.t_cljs$core$async25743.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25743");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25743 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25743(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25744){
return (new cljs.core.async.t_cljs$core$async25743(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25744));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25743(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24111__auto___25914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___25914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___25914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25849){
var state_val_25850 = (state_25849[(1)]);
if((state_val_25850 === (7))){
var inst_25764 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25851_25915 = state_25849__$1;
(statearr_25851_25915[(2)] = inst_25764);

(statearr_25851_25915[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (20))){
var inst_25776 = (state_25849[(7)]);
var state_25849__$1 = state_25849;
var statearr_25852_25916 = state_25849__$1;
(statearr_25852_25916[(2)] = inst_25776);

(statearr_25852_25916[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (27))){
var state_25849__$1 = state_25849;
var statearr_25853_25917 = state_25849__$1;
(statearr_25853_25917[(2)] = null);

(statearr_25853_25917[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (1))){
var inst_25751 = (state_25849[(8)]);
var inst_25751__$1 = calc_state();
var inst_25753 = (inst_25751__$1 == null);
var inst_25754 = cljs.core.not(inst_25753);
var state_25849__$1 = (function (){var statearr_25854 = state_25849;
(statearr_25854[(8)] = inst_25751__$1);

return statearr_25854;
})();
if(inst_25754){
var statearr_25855_25918 = state_25849__$1;
(statearr_25855_25918[(1)] = (2));

} else {
var statearr_25856_25919 = state_25849__$1;
(statearr_25856_25919[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (24))){
var inst_25800 = (state_25849[(9)]);
var inst_25823 = (state_25849[(10)]);
var inst_25809 = (state_25849[(11)]);
var inst_25823__$1 = (inst_25800.cljs$core$IFn$_invoke$arity$1 ? inst_25800.cljs$core$IFn$_invoke$arity$1(inst_25809) : inst_25800.call(null,inst_25809));
var state_25849__$1 = (function (){var statearr_25857 = state_25849;
(statearr_25857[(10)] = inst_25823__$1);

return statearr_25857;
})();
if(cljs.core.truth_(inst_25823__$1)){
var statearr_25858_25920 = state_25849__$1;
(statearr_25858_25920[(1)] = (29));

} else {
var statearr_25859_25921 = state_25849__$1;
(statearr_25859_25921[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (4))){
var inst_25767 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25767)){
var statearr_25860_25922 = state_25849__$1;
(statearr_25860_25922[(1)] = (8));

} else {
var statearr_25861_25923 = state_25849__$1;
(statearr_25861_25923[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (15))){
var inst_25794 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25794)){
var statearr_25862_25924 = state_25849__$1;
(statearr_25862_25924[(1)] = (19));

} else {
var statearr_25863_25925 = state_25849__$1;
(statearr_25863_25925[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (21))){
var inst_25799 = (state_25849[(12)]);
var inst_25799__$1 = (state_25849[(2)]);
var inst_25800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25799__$1,cljs.core.cst$kw$solos);
var inst_25801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25799__$1,cljs.core.cst$kw$mutes);
var inst_25802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25799__$1,cljs.core.cst$kw$reads);
var state_25849__$1 = (function (){var statearr_25864 = state_25849;
(statearr_25864[(13)] = inst_25801);

(statearr_25864[(9)] = inst_25800);

(statearr_25864[(12)] = inst_25799__$1);

return statearr_25864;
})();
return cljs.core.async.ioc_alts_BANG_(state_25849__$1,(22),inst_25802);
} else {
if((state_val_25850 === (31))){
var inst_25831 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25831)){
var statearr_25865_25926 = state_25849__$1;
(statearr_25865_25926[(1)] = (32));

} else {
var statearr_25866_25927 = state_25849__$1;
(statearr_25866_25927[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (32))){
var inst_25808 = (state_25849[(14)]);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25849__$1,(35),out,inst_25808);
} else {
if((state_val_25850 === (33))){
var inst_25799 = (state_25849[(12)]);
var inst_25776 = inst_25799;
var state_25849__$1 = (function (){var statearr_25867 = state_25849;
(statearr_25867[(7)] = inst_25776);

return statearr_25867;
})();
var statearr_25868_25928 = state_25849__$1;
(statearr_25868_25928[(2)] = null);

(statearr_25868_25928[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (13))){
var inst_25776 = (state_25849[(7)]);
var inst_25783 = inst_25776.cljs$lang$protocol_mask$partition0$;
var inst_25784 = (inst_25783 & (64));
var inst_25785 = inst_25776.cljs$core$ISeq$;
var inst_25786 = (cljs.core.PROTOCOL_SENTINEL === inst_25785);
var inst_25787 = (inst_25784) || (inst_25786);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25787)){
var statearr_25869_25929 = state_25849__$1;
(statearr_25869_25929[(1)] = (16));

} else {
var statearr_25870_25930 = state_25849__$1;
(statearr_25870_25930[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (22))){
var inst_25809 = (state_25849[(11)]);
var inst_25808 = (state_25849[(14)]);
var inst_25807 = (state_25849[(2)]);
var inst_25808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25807,(0),null);
var inst_25809__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25807,(1),null);
var inst_25810 = (inst_25808__$1 == null);
var inst_25811 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25809__$1,change);
var inst_25812 = (inst_25810) || (inst_25811);
var state_25849__$1 = (function (){var statearr_25871 = state_25849;
(statearr_25871[(11)] = inst_25809__$1);

(statearr_25871[(14)] = inst_25808__$1);

return statearr_25871;
})();
if(cljs.core.truth_(inst_25812)){
var statearr_25872_25931 = state_25849__$1;
(statearr_25872_25931[(1)] = (23));

} else {
var statearr_25873_25932 = state_25849__$1;
(statearr_25873_25932[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (36))){
var inst_25799 = (state_25849[(12)]);
var inst_25776 = inst_25799;
var state_25849__$1 = (function (){var statearr_25874 = state_25849;
(statearr_25874[(7)] = inst_25776);

return statearr_25874;
})();
var statearr_25875_25933 = state_25849__$1;
(statearr_25875_25933[(2)] = null);

(statearr_25875_25933[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (29))){
var inst_25823 = (state_25849[(10)]);
var state_25849__$1 = state_25849;
var statearr_25876_25934 = state_25849__$1;
(statearr_25876_25934[(2)] = inst_25823);

(statearr_25876_25934[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (6))){
var state_25849__$1 = state_25849;
var statearr_25877_25935 = state_25849__$1;
(statearr_25877_25935[(2)] = false);

(statearr_25877_25935[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (28))){
var inst_25819 = (state_25849[(2)]);
var inst_25820 = calc_state();
var inst_25776 = inst_25820;
var state_25849__$1 = (function (){var statearr_25878 = state_25849;
(statearr_25878[(15)] = inst_25819);

(statearr_25878[(7)] = inst_25776);

return statearr_25878;
})();
var statearr_25879_25936 = state_25849__$1;
(statearr_25879_25936[(2)] = null);

(statearr_25879_25936[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (25))){
var inst_25845 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25880_25937 = state_25849__$1;
(statearr_25880_25937[(2)] = inst_25845);

(statearr_25880_25937[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (34))){
var inst_25843 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25881_25938 = state_25849__$1;
(statearr_25881_25938[(2)] = inst_25843);

(statearr_25881_25938[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (17))){
var state_25849__$1 = state_25849;
var statearr_25882_25939 = state_25849__$1;
(statearr_25882_25939[(2)] = false);

(statearr_25882_25939[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (3))){
var state_25849__$1 = state_25849;
var statearr_25883_25940 = state_25849__$1;
(statearr_25883_25940[(2)] = false);

(statearr_25883_25940[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (12))){
var inst_25847 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25849__$1,inst_25847);
} else {
if((state_val_25850 === (2))){
var inst_25751 = (state_25849[(8)]);
var inst_25756 = inst_25751.cljs$lang$protocol_mask$partition0$;
var inst_25757 = (inst_25756 & (64));
var inst_25758 = inst_25751.cljs$core$ISeq$;
var inst_25759 = (cljs.core.PROTOCOL_SENTINEL === inst_25758);
var inst_25760 = (inst_25757) || (inst_25759);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25760)){
var statearr_25884_25941 = state_25849__$1;
(statearr_25884_25941[(1)] = (5));

} else {
var statearr_25885_25942 = state_25849__$1;
(statearr_25885_25942[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (23))){
var inst_25808 = (state_25849[(14)]);
var inst_25814 = (inst_25808 == null);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25814)){
var statearr_25886_25943 = state_25849__$1;
(statearr_25886_25943[(1)] = (26));

} else {
var statearr_25887_25944 = state_25849__$1;
(statearr_25887_25944[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (35))){
var inst_25834 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25834)){
var statearr_25888_25945 = state_25849__$1;
(statearr_25888_25945[(1)] = (36));

} else {
var statearr_25889_25946 = state_25849__$1;
(statearr_25889_25946[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (19))){
var inst_25776 = (state_25849[(7)]);
var inst_25796 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25776);
var state_25849__$1 = state_25849;
var statearr_25890_25947 = state_25849__$1;
(statearr_25890_25947[(2)] = inst_25796);

(statearr_25890_25947[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (11))){
var inst_25776 = (state_25849[(7)]);
var inst_25780 = (inst_25776 == null);
var inst_25781 = cljs.core.not(inst_25780);
var state_25849__$1 = state_25849;
if(inst_25781){
var statearr_25891_25948 = state_25849__$1;
(statearr_25891_25948[(1)] = (13));

} else {
var statearr_25892_25949 = state_25849__$1;
(statearr_25892_25949[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (9))){
var inst_25751 = (state_25849[(8)]);
var state_25849__$1 = state_25849;
var statearr_25893_25950 = state_25849__$1;
(statearr_25893_25950[(2)] = inst_25751);

(statearr_25893_25950[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (5))){
var state_25849__$1 = state_25849;
var statearr_25894_25951 = state_25849__$1;
(statearr_25894_25951[(2)] = true);

(statearr_25894_25951[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (14))){
var state_25849__$1 = state_25849;
var statearr_25895_25952 = state_25849__$1;
(statearr_25895_25952[(2)] = false);

(statearr_25895_25952[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (26))){
var inst_25809 = (state_25849[(11)]);
var inst_25816 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25809);
var state_25849__$1 = state_25849;
var statearr_25896_25953 = state_25849__$1;
(statearr_25896_25953[(2)] = inst_25816);

(statearr_25896_25953[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (16))){
var state_25849__$1 = state_25849;
var statearr_25897_25954 = state_25849__$1;
(statearr_25897_25954[(2)] = true);

(statearr_25897_25954[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (38))){
var inst_25839 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25898_25955 = state_25849__$1;
(statearr_25898_25955[(2)] = inst_25839);

(statearr_25898_25955[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (30))){
var inst_25801 = (state_25849[(13)]);
var inst_25800 = (state_25849[(9)]);
var inst_25809 = (state_25849[(11)]);
var inst_25826 = cljs.core.empty_QMARK_(inst_25800);
var inst_25827 = (inst_25801.cljs$core$IFn$_invoke$arity$1 ? inst_25801.cljs$core$IFn$_invoke$arity$1(inst_25809) : inst_25801.call(null,inst_25809));
var inst_25828 = cljs.core.not(inst_25827);
var inst_25829 = (inst_25826) && (inst_25828);
var state_25849__$1 = state_25849;
var statearr_25899_25956 = state_25849__$1;
(statearr_25899_25956[(2)] = inst_25829);

(statearr_25899_25956[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (10))){
var inst_25751 = (state_25849[(8)]);
var inst_25772 = (state_25849[(2)]);
var inst_25773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25772,cljs.core.cst$kw$solos);
var inst_25774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25772,cljs.core.cst$kw$mutes);
var inst_25775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25772,cljs.core.cst$kw$reads);
var inst_25776 = inst_25751;
var state_25849__$1 = (function (){var statearr_25900 = state_25849;
(statearr_25900[(16)] = inst_25775);

(statearr_25900[(17)] = inst_25774);

(statearr_25900[(18)] = inst_25773);

(statearr_25900[(7)] = inst_25776);

return statearr_25900;
})();
var statearr_25901_25957 = state_25849__$1;
(statearr_25901_25957[(2)] = null);

(statearr_25901_25957[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (18))){
var inst_25791 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25902_25958 = state_25849__$1;
(statearr_25902_25958[(2)] = inst_25791);

(statearr_25902_25958[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (37))){
var state_25849__$1 = state_25849;
var statearr_25903_25959 = state_25849__$1;
(statearr_25903_25959[(2)] = null);

(statearr_25903_25959[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (8))){
var inst_25751 = (state_25849[(8)]);
var inst_25769 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25751);
var state_25849__$1 = state_25849;
var statearr_25904_25960 = state_25849__$1;
(statearr_25904_25960[(2)] = inst_25769);

(statearr_25904_25960[(1)] = (10));


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
});})(c__24111__auto___25914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23985__auto__,c__24111__auto___25914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23986__auto__ = null;
var cljs$core$async$mix_$_state_machine__23986__auto____0 = (function (){
var statearr_25908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25908[(0)] = cljs$core$async$mix_$_state_machine__23986__auto__);

(statearr_25908[(1)] = (1));

return statearr_25908;
});
var cljs$core$async$mix_$_state_machine__23986__auto____1 = (function (state_25849){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_25849);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e25909){if((e25909 instanceof Object)){
var ex__23989__auto__ = e25909;
var statearr_25910_25961 = state_25849;
(statearr_25910_25961[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25849);

return cljs.core.cst$kw$recur;
} else {
throw e25909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__25962 = state_25849;
state_25849 = G__25962;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23986__auto__ = function(state_25849){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23986__auto____1.call(this,state_25849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23986__auto____0;
cljs$core$async$mix_$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23986__auto____1;
return cljs$core$async$mix_$_state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___25914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24113__auto__ = (function (){var statearr_25911 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_25911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___25914);

return statearr_25911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___25914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25963 = [];
var len__8739__auto___25966 = arguments.length;
var i__8740__auto___25967 = (0);
while(true){
if((i__8740__auto___25967 < len__8739__auto___25966)){
args25963.push((arguments[i__8740__auto___25967]));

var G__25968 = (i__8740__auto___25967 + (1));
i__8740__auto___25967 = G__25968;
continue;
} else {
}
break;
}

var G__25965 = args25963.length;
switch (G__25965) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25963.length)].join('')));

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
var args25971 = [];
var len__8739__auto___26099 = arguments.length;
var i__8740__auto___26100 = (0);
while(true){
if((i__8740__auto___26100 < len__8739__auto___26099)){
args25971.push((arguments[i__8740__auto___26100]));

var G__26101 = (i__8740__auto___26100 + (1));
i__8740__auto___26100 = G__26101;
continue;
} else {
}
break;
}

var G__25973 = args25971.length;
switch (G__25973) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25971.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__25974 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25974) : cljs.core.atom.call(null,G__25974));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7523__auto__,mults){
return (function (p1__25970_SHARP_){
if(cljs.core.truth_((p1__25970_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25970_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25970_SHARP_.call(null,topic)))){
return p1__25970_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25970_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7523__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25975 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25976){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25976 = meta25976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25977,meta25976__$1){
var self__ = this;
var _25977__$1 = this;
return (new cljs.core.async.t_cljs$core$async25975(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25976__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25977){
var self__ = this;
var _25977__$1 = this;
return self__.meta25976;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25978 = self__.mults;
var G__25979 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25978,G__25979) : cljs.core.reset_BANG_.call(null,G__25978,G__25979));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25975.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25976], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25975";

cljs.core.async.t_cljs$core$async25975.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25975");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25975 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25975(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25976){
return (new cljs.core.async.t_cljs$core$async25975(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25976));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25975(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24111__auto___26103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___26103,mults,ensure_mult,p){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___26103,mults,ensure_mult,p){
return (function (state_26051){
var state_val_26052 = (state_26051[(1)]);
if((state_val_26052 === (7))){
var inst_26047 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26053_26104 = state_26051__$1;
(statearr_26053_26104[(2)] = inst_26047);

(statearr_26053_26104[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (20))){
var state_26051__$1 = state_26051;
var statearr_26054_26105 = state_26051__$1;
(statearr_26054_26105[(2)] = null);

(statearr_26054_26105[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (1))){
var state_26051__$1 = state_26051;
var statearr_26055_26106 = state_26051__$1;
(statearr_26055_26106[(2)] = null);

(statearr_26055_26106[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (24))){
var inst_26030 = (state_26051[(7)]);
var inst_26039 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26030);
var state_26051__$1 = state_26051;
var statearr_26056_26107 = state_26051__$1;
(statearr_26056_26107[(2)] = inst_26039);

(statearr_26056_26107[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (4))){
var inst_25982 = (state_26051[(8)]);
var inst_25982__$1 = (state_26051[(2)]);
var inst_25983 = (inst_25982__$1 == null);
var state_26051__$1 = (function (){var statearr_26057 = state_26051;
(statearr_26057[(8)] = inst_25982__$1);

return statearr_26057;
})();
if(cljs.core.truth_(inst_25983)){
var statearr_26058_26108 = state_26051__$1;
(statearr_26058_26108[(1)] = (5));

} else {
var statearr_26059_26109 = state_26051__$1;
(statearr_26059_26109[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (15))){
var inst_26024 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26060_26110 = state_26051__$1;
(statearr_26060_26110[(2)] = inst_26024);

(statearr_26060_26110[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (21))){
var inst_26044 = (state_26051[(2)]);
var state_26051__$1 = (function (){var statearr_26061 = state_26051;
(statearr_26061[(9)] = inst_26044);

return statearr_26061;
})();
var statearr_26062_26111 = state_26051__$1;
(statearr_26062_26111[(2)] = null);

(statearr_26062_26111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (13))){
var inst_26006 = (state_26051[(10)]);
var inst_26008 = cljs.core.chunked_seq_QMARK_(inst_26006);
var state_26051__$1 = state_26051;
if(inst_26008){
var statearr_26063_26112 = state_26051__$1;
(statearr_26063_26112[(1)] = (16));

} else {
var statearr_26064_26113 = state_26051__$1;
(statearr_26064_26113[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (22))){
var inst_26036 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26036)){
var statearr_26065_26114 = state_26051__$1;
(statearr_26065_26114[(1)] = (23));

} else {
var statearr_26066_26115 = state_26051__$1;
(statearr_26066_26115[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (6))){
var inst_25982 = (state_26051[(8)]);
var inst_26030 = (state_26051[(7)]);
var inst_26032 = (state_26051[(11)]);
var inst_26030__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25982) : topic_fn.call(null,inst_25982));
var inst_26031 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_26032__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26031,inst_26030__$1);
var state_26051__$1 = (function (){var statearr_26067 = state_26051;
(statearr_26067[(7)] = inst_26030__$1);

(statearr_26067[(11)] = inst_26032__$1);

return statearr_26067;
})();
if(cljs.core.truth_(inst_26032__$1)){
var statearr_26068_26116 = state_26051__$1;
(statearr_26068_26116[(1)] = (19));

} else {
var statearr_26069_26117 = state_26051__$1;
(statearr_26069_26117[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (25))){
var inst_26041 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26070_26118 = state_26051__$1;
(statearr_26070_26118[(2)] = inst_26041);

(statearr_26070_26118[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (17))){
var inst_26006 = (state_26051[(10)]);
var inst_26015 = cljs.core.first(inst_26006);
var inst_26016 = cljs.core.async.muxch_STAR_(inst_26015);
var inst_26017 = cljs.core.async.close_BANG_(inst_26016);
var inst_26018 = cljs.core.next(inst_26006);
var inst_25992 = inst_26018;
var inst_25993 = null;
var inst_25994 = (0);
var inst_25995 = (0);
var state_26051__$1 = (function (){var statearr_26071 = state_26051;
(statearr_26071[(12)] = inst_25992);

(statearr_26071[(13)] = inst_26017);

(statearr_26071[(14)] = inst_25995);

(statearr_26071[(15)] = inst_25993);

(statearr_26071[(16)] = inst_25994);

return statearr_26071;
})();
var statearr_26072_26119 = state_26051__$1;
(statearr_26072_26119[(2)] = null);

(statearr_26072_26119[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (3))){
var inst_26049 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26051__$1,inst_26049);
} else {
if((state_val_26052 === (12))){
var inst_26026 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26073_26120 = state_26051__$1;
(statearr_26073_26120[(2)] = inst_26026);

(statearr_26073_26120[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (2))){
var state_26051__$1 = state_26051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26051__$1,(4),ch);
} else {
if((state_val_26052 === (23))){
var state_26051__$1 = state_26051;
var statearr_26074_26121 = state_26051__$1;
(statearr_26074_26121[(2)] = null);

(statearr_26074_26121[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (19))){
var inst_25982 = (state_26051[(8)]);
var inst_26032 = (state_26051[(11)]);
var inst_26034 = cljs.core.async.muxch_STAR_(inst_26032);
var state_26051__$1 = state_26051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26051__$1,(22),inst_26034,inst_25982);
} else {
if((state_val_26052 === (11))){
var inst_25992 = (state_26051[(12)]);
var inst_26006 = (state_26051[(10)]);
var inst_26006__$1 = cljs.core.seq(inst_25992);
var state_26051__$1 = (function (){var statearr_26075 = state_26051;
(statearr_26075[(10)] = inst_26006__$1);

return statearr_26075;
})();
if(inst_26006__$1){
var statearr_26076_26122 = state_26051__$1;
(statearr_26076_26122[(1)] = (13));

} else {
var statearr_26077_26123 = state_26051__$1;
(statearr_26077_26123[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (9))){
var inst_26028 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26078_26124 = state_26051__$1;
(statearr_26078_26124[(2)] = inst_26028);

(statearr_26078_26124[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (5))){
var inst_25989 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25990 = cljs.core.vals(inst_25989);
var inst_25991 = cljs.core.seq(inst_25990);
var inst_25992 = inst_25991;
var inst_25993 = null;
var inst_25994 = (0);
var inst_25995 = (0);
var state_26051__$1 = (function (){var statearr_26079 = state_26051;
(statearr_26079[(12)] = inst_25992);

(statearr_26079[(14)] = inst_25995);

(statearr_26079[(15)] = inst_25993);

(statearr_26079[(16)] = inst_25994);

return statearr_26079;
})();
var statearr_26080_26125 = state_26051__$1;
(statearr_26080_26125[(2)] = null);

(statearr_26080_26125[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (14))){
var state_26051__$1 = state_26051;
var statearr_26084_26126 = state_26051__$1;
(statearr_26084_26126[(2)] = null);

(statearr_26084_26126[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (16))){
var inst_26006 = (state_26051[(10)]);
var inst_26010 = cljs.core.chunk_first(inst_26006);
var inst_26011 = cljs.core.chunk_rest(inst_26006);
var inst_26012 = cljs.core.count(inst_26010);
var inst_25992 = inst_26011;
var inst_25993 = inst_26010;
var inst_25994 = inst_26012;
var inst_25995 = (0);
var state_26051__$1 = (function (){var statearr_26085 = state_26051;
(statearr_26085[(12)] = inst_25992);

(statearr_26085[(14)] = inst_25995);

(statearr_26085[(15)] = inst_25993);

(statearr_26085[(16)] = inst_25994);

return statearr_26085;
})();
var statearr_26086_26127 = state_26051__$1;
(statearr_26086_26127[(2)] = null);

(statearr_26086_26127[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (10))){
var inst_25992 = (state_26051[(12)]);
var inst_25995 = (state_26051[(14)]);
var inst_25993 = (state_26051[(15)]);
var inst_25994 = (state_26051[(16)]);
var inst_26000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25993,inst_25995);
var inst_26001 = cljs.core.async.muxch_STAR_(inst_26000);
var inst_26002 = cljs.core.async.close_BANG_(inst_26001);
var inst_26003 = (inst_25995 + (1));
var tmp26081 = inst_25992;
var tmp26082 = inst_25993;
var tmp26083 = inst_25994;
var inst_25992__$1 = tmp26081;
var inst_25993__$1 = tmp26082;
var inst_25994__$1 = tmp26083;
var inst_25995__$1 = inst_26003;
var state_26051__$1 = (function (){var statearr_26087 = state_26051;
(statearr_26087[(12)] = inst_25992__$1);

(statearr_26087[(14)] = inst_25995__$1);

(statearr_26087[(15)] = inst_25993__$1);

(statearr_26087[(17)] = inst_26002);

(statearr_26087[(16)] = inst_25994__$1);

return statearr_26087;
})();
var statearr_26088_26128 = state_26051__$1;
(statearr_26088_26128[(2)] = null);

(statearr_26088_26128[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (18))){
var inst_26021 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26089_26129 = state_26051__$1;
(statearr_26089_26129[(2)] = inst_26021);

(statearr_26089_26129[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26052 === (8))){
var inst_25995 = (state_26051[(14)]);
var inst_25994 = (state_26051[(16)]);
var inst_25997 = (inst_25995 < inst_25994);
var inst_25998 = inst_25997;
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_25998)){
var statearr_26090_26130 = state_26051__$1;
(statearr_26090_26130[(1)] = (10));

} else {
var statearr_26091_26131 = state_26051__$1;
(statearr_26091_26131[(1)] = (11));

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
});})(c__24111__auto___26103,mults,ensure_mult,p))
;
return ((function (switch__23985__auto__,c__24111__auto___26103,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_26095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26095[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_26095[(1)] = (1));

return statearr_26095;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_26051){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26051);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26096){if((e26096 instanceof Object)){
var ex__23989__auto__ = e26096;
var statearr_26097_26132 = state_26051;
(statearr_26097_26132[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26051);

return cljs.core.cst$kw$recur;
} else {
throw e26096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26133 = state_26051;
state_26051 = G__26133;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_26051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_26051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___26103,mults,ensure_mult,p))
})();
var state__24113__auto__ = (function (){var statearr_26098 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___26103);

return statearr_26098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___26103,mults,ensure_mult,p))
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
var args26134 = [];
var len__8739__auto___26137 = arguments.length;
var i__8740__auto___26138 = (0);
while(true){
if((i__8740__auto___26138 < len__8739__auto___26137)){
args26134.push((arguments[i__8740__auto___26138]));

var G__26139 = (i__8740__auto___26138 + (1));
i__8740__auto___26138 = G__26139;
continue;
} else {
}
break;
}

var G__26136 = args26134.length;
switch (G__26136) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26134.length)].join('')));

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
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26141.length)].join('')));

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
var args26148 = [];
var len__8739__auto___26219 = arguments.length;
var i__8740__auto___26220 = (0);
while(true){
if((i__8740__auto___26220 < len__8739__auto___26219)){
args26148.push((arguments[i__8740__auto___26220]));

var G__26221 = (i__8740__auto___26220 + (1));
i__8740__auto___26220 = G__26221;
continue;
} else {
}
break;
}

var G__26150 = args26148.length;
switch (G__26150) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26148.length)].join('')));

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
var c__24111__auto___26223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___26223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___26223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26189){
var state_val_26190 = (state_26189[(1)]);
if((state_val_26190 === (7))){
var state_26189__$1 = state_26189;
var statearr_26191_26224 = state_26189__$1;
(statearr_26191_26224[(2)] = null);

(statearr_26191_26224[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (1))){
var state_26189__$1 = state_26189;
var statearr_26192_26225 = state_26189__$1;
(statearr_26192_26225[(2)] = null);

(statearr_26192_26225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (4))){
var inst_26153 = (state_26189[(7)]);
var inst_26155 = (inst_26153 < cnt);
var state_26189__$1 = state_26189;
if(cljs.core.truth_(inst_26155)){
var statearr_26193_26226 = state_26189__$1;
(statearr_26193_26226[(1)] = (6));

} else {
var statearr_26194_26227 = state_26189__$1;
(statearr_26194_26227[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (15))){
var inst_26185 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26195_26228 = state_26189__$1;
(statearr_26195_26228[(2)] = inst_26185);

(statearr_26195_26228[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (13))){
var inst_26178 = cljs.core.async.close_BANG_(out);
var state_26189__$1 = state_26189;
var statearr_26196_26229 = state_26189__$1;
(statearr_26196_26229[(2)] = inst_26178);

(statearr_26196_26229[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (6))){
var state_26189__$1 = state_26189;
var statearr_26197_26230 = state_26189__$1;
(statearr_26197_26230[(2)] = null);

(statearr_26197_26230[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (3))){
var inst_26187 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26189__$1,inst_26187);
} else {
if((state_val_26190 === (12))){
var inst_26175 = (state_26189[(8)]);
var inst_26175__$1 = (state_26189[(2)]);
var inst_26176 = cljs.core.some(cljs.core.nil_QMARK_,inst_26175__$1);
var state_26189__$1 = (function (){var statearr_26198 = state_26189;
(statearr_26198[(8)] = inst_26175__$1);

return statearr_26198;
})();
if(cljs.core.truth_(inst_26176)){
var statearr_26199_26231 = state_26189__$1;
(statearr_26199_26231[(1)] = (13));

} else {
var statearr_26200_26232 = state_26189__$1;
(statearr_26200_26232[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (2))){
var inst_26152 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_26153 = (0);
var state_26189__$1 = (function (){var statearr_26201 = state_26189;
(statearr_26201[(9)] = inst_26152);

(statearr_26201[(7)] = inst_26153);

return statearr_26201;
})();
var statearr_26202_26233 = state_26189__$1;
(statearr_26202_26233[(2)] = null);

(statearr_26202_26233[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (11))){
var inst_26153 = (state_26189[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26189,(10),Object,null,(9));
var inst_26162 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26153) : chs__$1.call(null,inst_26153));
var inst_26163 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26153) : done.call(null,inst_26153));
var inst_26164 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26162,inst_26163);
var state_26189__$1 = state_26189;
var statearr_26203_26234 = state_26189__$1;
(statearr_26203_26234[(2)] = inst_26164);


cljs.core.async.impl.ioc_helpers.process_exception(state_26189__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (9))){
var inst_26153 = (state_26189[(7)]);
var inst_26166 = (state_26189[(2)]);
var inst_26167 = (inst_26153 + (1));
var inst_26153__$1 = inst_26167;
var state_26189__$1 = (function (){var statearr_26204 = state_26189;
(statearr_26204[(10)] = inst_26166);

(statearr_26204[(7)] = inst_26153__$1);

return statearr_26204;
})();
var statearr_26205_26235 = state_26189__$1;
(statearr_26205_26235[(2)] = null);

(statearr_26205_26235[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (5))){
var inst_26173 = (state_26189[(2)]);
var state_26189__$1 = (function (){var statearr_26206 = state_26189;
(statearr_26206[(11)] = inst_26173);

return statearr_26206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26189__$1,(12),dchan);
} else {
if((state_val_26190 === (14))){
var inst_26175 = (state_26189[(8)]);
var inst_26180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26175);
var state_26189__$1 = state_26189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26189__$1,(16),out,inst_26180);
} else {
if((state_val_26190 === (16))){
var inst_26182 = (state_26189[(2)]);
var state_26189__$1 = (function (){var statearr_26207 = state_26189;
(statearr_26207[(12)] = inst_26182);

return statearr_26207;
})();
var statearr_26208_26236 = state_26189__$1;
(statearr_26208_26236[(2)] = null);

(statearr_26208_26236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (10))){
var inst_26157 = (state_26189[(2)]);
var inst_26158 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26189__$1 = (function (){var statearr_26209 = state_26189;
(statearr_26209[(13)] = inst_26157);

return statearr_26209;
})();
var statearr_26210_26237 = state_26189__$1;
(statearr_26210_26237[(2)] = inst_26158);


cljs.core.async.impl.ioc_helpers.process_exception(state_26189__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26190 === (8))){
var inst_26171 = (state_26189[(2)]);
var state_26189__$1 = state_26189;
var statearr_26211_26238 = state_26189__$1;
(statearr_26211_26238[(2)] = inst_26171);

(statearr_26211_26238[(1)] = (5));


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
});})(c__24111__auto___26223,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23985__auto__,c__24111__auto___26223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_26215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26215[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_26215[(1)] = (1));

return statearr_26215;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_26189){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26189);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26216){if((e26216 instanceof Object)){
var ex__23989__auto__ = e26216;
var statearr_26217_26239 = state_26189;
(statearr_26217_26239[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26189);

return cljs.core.cst$kw$recur;
} else {
throw e26216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26240 = state_26189;
state_26189 = G__26240;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_26189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_26189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___26223,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24113__auto__ = (function (){var statearr_26218 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___26223);

return statearr_26218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___26223,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26242 = [];
var len__8739__auto___26300 = arguments.length;
var i__8740__auto___26301 = (0);
while(true){
if((i__8740__auto___26301 < len__8739__auto___26300)){
args26242.push((arguments[i__8740__auto___26301]));

var G__26302 = (i__8740__auto___26301 + (1));
i__8740__auto___26301 = G__26302;
continue;
} else {
}
break;
}

var G__26244 = args26242.length;
switch (G__26244) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26242.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24111__auto___26304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___26304,out){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___26304,out){
return (function (state_26276){
var state_val_26277 = (state_26276[(1)]);
if((state_val_26277 === (7))){
var inst_26256 = (state_26276[(7)]);
var inst_26255 = (state_26276[(8)]);
var inst_26255__$1 = (state_26276[(2)]);
var inst_26256__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26255__$1,(0),null);
var inst_26257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26255__$1,(1),null);
var inst_26258 = (inst_26256__$1 == null);
var state_26276__$1 = (function (){var statearr_26278 = state_26276;
(statearr_26278[(7)] = inst_26256__$1);

(statearr_26278[(8)] = inst_26255__$1);

(statearr_26278[(9)] = inst_26257);

return statearr_26278;
})();
if(cljs.core.truth_(inst_26258)){
var statearr_26279_26305 = state_26276__$1;
(statearr_26279_26305[(1)] = (8));

} else {
var statearr_26280_26306 = state_26276__$1;
(statearr_26280_26306[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26277 === (1))){
var inst_26245 = cljs.core.vec(chs);
var inst_26246 = inst_26245;
var state_26276__$1 = (function (){var statearr_26281 = state_26276;
(statearr_26281[(10)] = inst_26246);

return statearr_26281;
})();
var statearr_26282_26307 = state_26276__$1;
(statearr_26282_26307[(2)] = null);

(statearr_26282_26307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26277 === (4))){
var inst_26246 = (state_26276[(10)]);
var state_26276__$1 = state_26276;
return cljs.core.async.ioc_alts_BANG_(state_26276__$1,(7),inst_26246);
} else {
if((state_val_26277 === (6))){
var inst_26272 = (state_26276[(2)]);
var state_26276__$1 = state_26276;
var statearr_26283_26308 = state_26276__$1;
(statearr_26283_26308[(2)] = inst_26272);

(statearr_26283_26308[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26277 === (3))){
var inst_26274 = (state_26276[(2)]);
var state_26276__$1 = state_26276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26276__$1,inst_26274);
} else {
if((state_val_26277 === (2))){
var inst_26246 = (state_26276[(10)]);
var inst_26248 = cljs.core.count(inst_26246);
var inst_26249 = (inst_26248 > (0));
var state_26276__$1 = state_26276;
if(cljs.core.truth_(inst_26249)){
var statearr_26285_26309 = state_26276__$1;
(statearr_26285_26309[(1)] = (4));

} else {
var statearr_26286_26310 = state_26276__$1;
(statearr_26286_26310[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26277 === (11))){
var inst_26246 = (state_26276[(10)]);
var inst_26265 = (state_26276[(2)]);
var tmp26284 = inst_26246;
var inst_26246__$1 = tmp26284;
var state_26276__$1 = (function (){var statearr_26287 = state_26276;
(statearr_26287[(10)] = inst_26246__$1);

(statearr_26287[(11)] = inst_26265);

return statearr_26287;
})();
var statearr_26288_26311 = state_26276__$1;
(statearr_26288_26311[(2)] = null);

(statearr_26288_26311[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26277 === (9))){
var inst_26256 = (state_26276[(7)]);
var state_26276__$1 = state_26276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26276__$1,(11),out,inst_26256);
} else {
if((state_val_26277 === (5))){
var inst_26270 = cljs.core.async.close_BANG_(out);
var state_26276__$1 = state_26276;
var statearr_26289_26312 = state_26276__$1;
(statearr_26289_26312[(2)] = inst_26270);

(statearr_26289_26312[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26277 === (10))){
var inst_26268 = (state_26276[(2)]);
var state_26276__$1 = state_26276;
var statearr_26290_26313 = state_26276__$1;
(statearr_26290_26313[(2)] = inst_26268);

(statearr_26290_26313[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26277 === (8))){
var inst_26256 = (state_26276[(7)]);
var inst_26255 = (state_26276[(8)]);
var inst_26257 = (state_26276[(9)]);
var inst_26246 = (state_26276[(10)]);
var inst_26260 = (function (){var cs = inst_26246;
var vec__26251 = inst_26255;
var v = inst_26256;
var c = inst_26257;
return ((function (cs,vec__26251,v,c,inst_26256,inst_26255,inst_26257,inst_26246,state_val_26277,c__24111__auto___26304,out){
return (function (p1__26241_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26241_SHARP_);
});
;})(cs,vec__26251,v,c,inst_26256,inst_26255,inst_26257,inst_26246,state_val_26277,c__24111__auto___26304,out))
})();
var inst_26261 = cljs.core.filterv(inst_26260,inst_26246);
var inst_26246__$1 = inst_26261;
var state_26276__$1 = (function (){var statearr_26291 = state_26276;
(statearr_26291[(10)] = inst_26246__$1);

return statearr_26291;
})();
var statearr_26292_26314 = state_26276__$1;
(statearr_26292_26314[(2)] = null);

(statearr_26292_26314[(1)] = (2));


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
});})(c__24111__auto___26304,out))
;
return ((function (switch__23985__auto__,c__24111__auto___26304,out){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_26296 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26296[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_26296[(1)] = (1));

return statearr_26296;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_26276){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26276);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26297){if((e26297 instanceof Object)){
var ex__23989__auto__ = e26297;
var statearr_26298_26315 = state_26276;
(statearr_26298_26315[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26276);

return cljs.core.cst$kw$recur;
} else {
throw e26297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26316 = state_26276;
state_26276 = G__26316;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_26276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_26276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___26304,out))
})();
var state__24113__auto__ = (function (){var statearr_26299 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___26304);

return statearr_26299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___26304,out))
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
var args26317 = [];
var len__8739__auto___26366 = arguments.length;
var i__8740__auto___26367 = (0);
while(true){
if((i__8740__auto___26367 < len__8739__auto___26366)){
args26317.push((arguments[i__8740__auto___26367]));

var G__26368 = (i__8740__auto___26367 + (1));
i__8740__auto___26367 = G__26368;
continue;
} else {
}
break;
}

var G__26319 = args26317.length;
switch (G__26319) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26317.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24111__auto___26370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___26370,out){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___26370,out){
return (function (state_26343){
var state_val_26344 = (state_26343[(1)]);
if((state_val_26344 === (7))){
var inst_26325 = (state_26343[(7)]);
var inst_26325__$1 = (state_26343[(2)]);
var inst_26326 = (inst_26325__$1 == null);
var inst_26327 = cljs.core.not(inst_26326);
var state_26343__$1 = (function (){var statearr_26345 = state_26343;
(statearr_26345[(7)] = inst_26325__$1);

return statearr_26345;
})();
if(inst_26327){
var statearr_26346_26371 = state_26343__$1;
(statearr_26346_26371[(1)] = (8));

} else {
var statearr_26347_26372 = state_26343__$1;
(statearr_26347_26372[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26344 === (1))){
var inst_26320 = (0);
var state_26343__$1 = (function (){var statearr_26348 = state_26343;
(statearr_26348[(8)] = inst_26320);

return statearr_26348;
})();
var statearr_26349_26373 = state_26343__$1;
(statearr_26349_26373[(2)] = null);

(statearr_26349_26373[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26344 === (4))){
var state_26343__$1 = state_26343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26343__$1,(7),ch);
} else {
if((state_val_26344 === (6))){
var inst_26338 = (state_26343[(2)]);
var state_26343__$1 = state_26343;
var statearr_26350_26374 = state_26343__$1;
(statearr_26350_26374[(2)] = inst_26338);

(statearr_26350_26374[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26344 === (3))){
var inst_26340 = (state_26343[(2)]);
var inst_26341 = cljs.core.async.close_BANG_(out);
var state_26343__$1 = (function (){var statearr_26351 = state_26343;
(statearr_26351[(9)] = inst_26340);

return statearr_26351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26343__$1,inst_26341);
} else {
if((state_val_26344 === (2))){
var inst_26320 = (state_26343[(8)]);
var inst_26322 = (inst_26320 < n);
var state_26343__$1 = state_26343;
if(cljs.core.truth_(inst_26322)){
var statearr_26352_26375 = state_26343__$1;
(statearr_26352_26375[(1)] = (4));

} else {
var statearr_26353_26376 = state_26343__$1;
(statearr_26353_26376[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26344 === (11))){
var inst_26320 = (state_26343[(8)]);
var inst_26330 = (state_26343[(2)]);
var inst_26331 = (inst_26320 + (1));
var inst_26320__$1 = inst_26331;
var state_26343__$1 = (function (){var statearr_26354 = state_26343;
(statearr_26354[(10)] = inst_26330);

(statearr_26354[(8)] = inst_26320__$1);

return statearr_26354;
})();
var statearr_26355_26377 = state_26343__$1;
(statearr_26355_26377[(2)] = null);

(statearr_26355_26377[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26344 === (9))){
var state_26343__$1 = state_26343;
var statearr_26356_26378 = state_26343__$1;
(statearr_26356_26378[(2)] = null);

(statearr_26356_26378[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26344 === (5))){
var state_26343__$1 = state_26343;
var statearr_26357_26379 = state_26343__$1;
(statearr_26357_26379[(2)] = null);

(statearr_26357_26379[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26344 === (10))){
var inst_26335 = (state_26343[(2)]);
var state_26343__$1 = state_26343;
var statearr_26358_26380 = state_26343__$1;
(statearr_26358_26380[(2)] = inst_26335);

(statearr_26358_26380[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26344 === (8))){
var inst_26325 = (state_26343[(7)]);
var state_26343__$1 = state_26343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26343__$1,(11),out,inst_26325);
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
});})(c__24111__auto___26370,out))
;
return ((function (switch__23985__auto__,c__24111__auto___26370,out){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_26362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26362[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_26362[(1)] = (1));

return statearr_26362;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_26343){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26343);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26363){if((e26363 instanceof Object)){
var ex__23989__auto__ = e26363;
var statearr_26364_26381 = state_26343;
(statearr_26364_26381[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26343);

return cljs.core.cst$kw$recur;
} else {
throw e26363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26382 = state_26343;
state_26343 = G__26382;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_26343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_26343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___26370,out))
})();
var state__24113__auto__ = (function (){var statearr_26365 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___26370);

return statearr_26365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___26370,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26392 = (function (f,ch,meta26393){
this.f = f;
this.ch = ch;
this.meta26393 = meta26393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26394,meta26393__$1){
var self__ = this;
var _26394__$1 = this;
return (new cljs.core.async.t_cljs$core$async26392(self__.f,self__.ch,meta26393__$1));
});


cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26394){
var self__ = this;
var _26394__$1 = this;
return self__.meta26393;
});


cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26395 = (function (f,ch,meta26393,_,fn1,meta26396){
this.f = f;
this.ch = ch;
this.meta26393 = meta26393;
this._ = _;
this.fn1 = fn1;
this.meta26396 = meta26396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26397,meta26396__$1){
var self__ = this;
var _26397__$1 = this;
return (new cljs.core.async.t_cljs$core$async26395(self__.f,self__.ch,self__.meta26393,self__._,self__.fn1,meta26396__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26397){
var self__ = this;
var _26397__$1 = this;
return self__.meta26396;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26383_SHARP_){
var G__26398 = (((p1__26383_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26383_SHARP_) : self__.f.call(null,p1__26383_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26398) : f1.call(null,G__26398));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26395.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26393,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26392], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26396], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26395";

cljs.core.async.t_cljs$core$async26395.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26395");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26395 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26395(f__$1,ch__$1,meta26393__$1,___$2,fn1__$1,meta26396){
return (new cljs.core.async.t_cljs$core$async26395(f__$1,ch__$1,meta26393__$1,___$2,fn1__$1,meta26396));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26395(self__.f,self__.ch,self__.meta26393,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7511__auto__ = ret;
if(cljs.core.truth_(and__7511__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7511__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26399 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26399) : self__.f.call(null,G__26399));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26393], null);
});

cljs.core.async.t_cljs$core$async26392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26392";

cljs.core.async.t_cljs$core$async26392.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26392");
});

cljs.core.async.__GT_t_cljs$core$async26392 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26392(f__$1,ch__$1,meta26393){
return (new cljs.core.async.t_cljs$core$async26392(f__$1,ch__$1,meta26393));
});

}

return (new cljs.core.async.t_cljs$core$async26392(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26403 = (function (f,ch,meta26404){
this.f = f;
this.ch = ch;
this.meta26404 = meta26404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26405,meta26404__$1){
var self__ = this;
var _26405__$1 = this;
return (new cljs.core.async.t_cljs$core$async26403(self__.f,self__.ch,meta26404__$1));
});


cljs.core.async.t_cljs$core$async26403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26405){
var self__ = this;
var _26405__$1 = this;
return self__.meta26404;
});


cljs.core.async.t_cljs$core$async26403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26404], null);
});

cljs.core.async.t_cljs$core$async26403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26403";

cljs.core.async.t_cljs$core$async26403.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26403");
});

cljs.core.async.__GT_t_cljs$core$async26403 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26403(f__$1,ch__$1,meta26404){
return (new cljs.core.async.t_cljs$core$async26403(f__$1,ch__$1,meta26404));
});

}

return (new cljs.core.async.t_cljs$core$async26403(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26409 = (function (p,ch,meta26410){
this.p = p;
this.ch = ch;
this.meta26410 = meta26410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26411,meta26410__$1){
var self__ = this;
var _26411__$1 = this;
return (new cljs.core.async.t_cljs$core$async26409(self__.p,self__.ch,meta26410__$1));
});


cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26411){
var self__ = this;
var _26411__$1 = this;
return self__.meta26410;
});


cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26410], null);
});

cljs.core.async.t_cljs$core$async26409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26409";

cljs.core.async.t_cljs$core$async26409.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26409");
});

cljs.core.async.__GT_t_cljs$core$async26409 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26409(p__$1,ch__$1,meta26410){
return (new cljs.core.async.t_cljs$core$async26409(p__$1,ch__$1,meta26410));
});

}

return (new cljs.core.async.t_cljs$core$async26409(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26412 = [];
var len__8739__auto___26456 = arguments.length;
var i__8740__auto___26457 = (0);
while(true){
if((i__8740__auto___26457 < len__8739__auto___26456)){
args26412.push((arguments[i__8740__auto___26457]));

var G__26458 = (i__8740__auto___26457 + (1));
i__8740__auto___26457 = G__26458;
continue;
} else {
}
break;
}

var G__26414 = args26412.length;
switch (G__26414) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26412.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24111__auto___26460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___26460,out){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___26460,out){
return (function (state_26435){
var state_val_26436 = (state_26435[(1)]);
if((state_val_26436 === (7))){
var inst_26431 = (state_26435[(2)]);
var state_26435__$1 = state_26435;
var statearr_26437_26461 = state_26435__$1;
(statearr_26437_26461[(2)] = inst_26431);

(statearr_26437_26461[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26436 === (1))){
var state_26435__$1 = state_26435;
var statearr_26438_26462 = state_26435__$1;
(statearr_26438_26462[(2)] = null);

(statearr_26438_26462[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26436 === (4))){
var inst_26417 = (state_26435[(7)]);
var inst_26417__$1 = (state_26435[(2)]);
var inst_26418 = (inst_26417__$1 == null);
var state_26435__$1 = (function (){var statearr_26439 = state_26435;
(statearr_26439[(7)] = inst_26417__$1);

return statearr_26439;
})();
if(cljs.core.truth_(inst_26418)){
var statearr_26440_26463 = state_26435__$1;
(statearr_26440_26463[(1)] = (5));

} else {
var statearr_26441_26464 = state_26435__$1;
(statearr_26441_26464[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26436 === (6))){
var inst_26417 = (state_26435[(7)]);
var inst_26422 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26417) : p.call(null,inst_26417));
var state_26435__$1 = state_26435;
if(cljs.core.truth_(inst_26422)){
var statearr_26442_26465 = state_26435__$1;
(statearr_26442_26465[(1)] = (8));

} else {
var statearr_26443_26466 = state_26435__$1;
(statearr_26443_26466[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26436 === (3))){
var inst_26433 = (state_26435[(2)]);
var state_26435__$1 = state_26435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26435__$1,inst_26433);
} else {
if((state_val_26436 === (2))){
var state_26435__$1 = state_26435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26435__$1,(4),ch);
} else {
if((state_val_26436 === (11))){
var inst_26425 = (state_26435[(2)]);
var state_26435__$1 = state_26435;
var statearr_26444_26467 = state_26435__$1;
(statearr_26444_26467[(2)] = inst_26425);

(statearr_26444_26467[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26436 === (9))){
var state_26435__$1 = state_26435;
var statearr_26445_26468 = state_26435__$1;
(statearr_26445_26468[(2)] = null);

(statearr_26445_26468[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26436 === (5))){
var inst_26420 = cljs.core.async.close_BANG_(out);
var state_26435__$1 = state_26435;
var statearr_26446_26469 = state_26435__$1;
(statearr_26446_26469[(2)] = inst_26420);

(statearr_26446_26469[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26436 === (10))){
var inst_26428 = (state_26435[(2)]);
var state_26435__$1 = (function (){var statearr_26447 = state_26435;
(statearr_26447[(8)] = inst_26428);

return statearr_26447;
})();
var statearr_26448_26470 = state_26435__$1;
(statearr_26448_26470[(2)] = null);

(statearr_26448_26470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26436 === (8))){
var inst_26417 = (state_26435[(7)]);
var state_26435__$1 = state_26435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26435__$1,(11),out,inst_26417);
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
});})(c__24111__auto___26460,out))
;
return ((function (switch__23985__auto__,c__24111__auto___26460,out){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_26452 = [null,null,null,null,null,null,null,null,null];
(statearr_26452[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_26452[(1)] = (1));

return statearr_26452;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_26435){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26435);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26453){if((e26453 instanceof Object)){
var ex__23989__auto__ = e26453;
var statearr_26454_26471 = state_26435;
(statearr_26454_26471[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26435);

return cljs.core.cst$kw$recur;
} else {
throw e26453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26472 = state_26435;
state_26435 = G__26472;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_26435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_26435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___26460,out))
})();
var state__24113__auto__ = (function (){var statearr_26455 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___26460);

return statearr_26455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___26460,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26473 = [];
var len__8739__auto___26476 = arguments.length;
var i__8740__auto___26477 = (0);
while(true){
if((i__8740__auto___26477 < len__8739__auto___26476)){
args26473.push((arguments[i__8740__auto___26477]));

var G__26478 = (i__8740__auto___26477 + (1));
i__8740__auto___26477 = G__26478;
continue;
} else {
}
break;
}

var G__26475 = args26473.length;
switch (G__26475) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26473.length)].join('')));

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
var c__24111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto__){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto__){
return (function (state_26645){
var state_val_26646 = (state_26645[(1)]);
if((state_val_26646 === (7))){
var inst_26641 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
var statearr_26647_26688 = state_26645__$1;
(statearr_26647_26688[(2)] = inst_26641);

(statearr_26647_26688[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (20))){
var inst_26611 = (state_26645[(7)]);
var inst_26622 = (state_26645[(2)]);
var inst_26623 = cljs.core.next(inst_26611);
var inst_26597 = inst_26623;
var inst_26598 = null;
var inst_26599 = (0);
var inst_26600 = (0);
var state_26645__$1 = (function (){var statearr_26648 = state_26645;
(statearr_26648[(8)] = inst_26600);

(statearr_26648[(9)] = inst_26598);

(statearr_26648[(10)] = inst_26622);

(statearr_26648[(11)] = inst_26597);

(statearr_26648[(12)] = inst_26599);

return statearr_26648;
})();
var statearr_26649_26689 = state_26645__$1;
(statearr_26649_26689[(2)] = null);

(statearr_26649_26689[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (1))){
var state_26645__$1 = state_26645;
var statearr_26650_26690 = state_26645__$1;
(statearr_26650_26690[(2)] = null);

(statearr_26650_26690[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (4))){
var inst_26586 = (state_26645[(13)]);
var inst_26586__$1 = (state_26645[(2)]);
var inst_26587 = (inst_26586__$1 == null);
var state_26645__$1 = (function (){var statearr_26651 = state_26645;
(statearr_26651[(13)] = inst_26586__$1);

return statearr_26651;
})();
if(cljs.core.truth_(inst_26587)){
var statearr_26652_26691 = state_26645__$1;
(statearr_26652_26691[(1)] = (5));

} else {
var statearr_26653_26692 = state_26645__$1;
(statearr_26653_26692[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (15))){
var state_26645__$1 = state_26645;
var statearr_26657_26693 = state_26645__$1;
(statearr_26657_26693[(2)] = null);

(statearr_26657_26693[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (21))){
var state_26645__$1 = state_26645;
var statearr_26658_26694 = state_26645__$1;
(statearr_26658_26694[(2)] = null);

(statearr_26658_26694[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (13))){
var inst_26600 = (state_26645[(8)]);
var inst_26598 = (state_26645[(9)]);
var inst_26597 = (state_26645[(11)]);
var inst_26599 = (state_26645[(12)]);
var inst_26607 = (state_26645[(2)]);
var inst_26608 = (inst_26600 + (1));
var tmp26654 = inst_26598;
var tmp26655 = inst_26597;
var tmp26656 = inst_26599;
var inst_26597__$1 = tmp26655;
var inst_26598__$1 = tmp26654;
var inst_26599__$1 = tmp26656;
var inst_26600__$1 = inst_26608;
var state_26645__$1 = (function (){var statearr_26659 = state_26645;
(statearr_26659[(14)] = inst_26607);

(statearr_26659[(8)] = inst_26600__$1);

(statearr_26659[(9)] = inst_26598__$1);

(statearr_26659[(11)] = inst_26597__$1);

(statearr_26659[(12)] = inst_26599__$1);

return statearr_26659;
})();
var statearr_26660_26695 = state_26645__$1;
(statearr_26660_26695[(2)] = null);

(statearr_26660_26695[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (22))){
var state_26645__$1 = state_26645;
var statearr_26661_26696 = state_26645__$1;
(statearr_26661_26696[(2)] = null);

(statearr_26661_26696[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (6))){
var inst_26586 = (state_26645[(13)]);
var inst_26595 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26586) : f.call(null,inst_26586));
var inst_26596 = cljs.core.seq(inst_26595);
var inst_26597 = inst_26596;
var inst_26598 = null;
var inst_26599 = (0);
var inst_26600 = (0);
var state_26645__$1 = (function (){var statearr_26662 = state_26645;
(statearr_26662[(8)] = inst_26600);

(statearr_26662[(9)] = inst_26598);

(statearr_26662[(11)] = inst_26597);

(statearr_26662[(12)] = inst_26599);

return statearr_26662;
})();
var statearr_26663_26697 = state_26645__$1;
(statearr_26663_26697[(2)] = null);

(statearr_26663_26697[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (17))){
var inst_26611 = (state_26645[(7)]);
var inst_26615 = cljs.core.chunk_first(inst_26611);
var inst_26616 = cljs.core.chunk_rest(inst_26611);
var inst_26617 = cljs.core.count(inst_26615);
var inst_26597 = inst_26616;
var inst_26598 = inst_26615;
var inst_26599 = inst_26617;
var inst_26600 = (0);
var state_26645__$1 = (function (){var statearr_26664 = state_26645;
(statearr_26664[(8)] = inst_26600);

(statearr_26664[(9)] = inst_26598);

(statearr_26664[(11)] = inst_26597);

(statearr_26664[(12)] = inst_26599);

return statearr_26664;
})();
var statearr_26665_26698 = state_26645__$1;
(statearr_26665_26698[(2)] = null);

(statearr_26665_26698[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (3))){
var inst_26643 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26645__$1,inst_26643);
} else {
if((state_val_26646 === (12))){
var inst_26631 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
var statearr_26666_26699 = state_26645__$1;
(statearr_26666_26699[(2)] = inst_26631);

(statearr_26666_26699[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (2))){
var state_26645__$1 = state_26645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26645__$1,(4),in$);
} else {
if((state_val_26646 === (23))){
var inst_26639 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
var statearr_26667_26700 = state_26645__$1;
(statearr_26667_26700[(2)] = inst_26639);

(statearr_26667_26700[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (19))){
var inst_26626 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
var statearr_26668_26701 = state_26645__$1;
(statearr_26668_26701[(2)] = inst_26626);

(statearr_26668_26701[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (11))){
var inst_26611 = (state_26645[(7)]);
var inst_26597 = (state_26645[(11)]);
var inst_26611__$1 = cljs.core.seq(inst_26597);
var state_26645__$1 = (function (){var statearr_26669 = state_26645;
(statearr_26669[(7)] = inst_26611__$1);

return statearr_26669;
})();
if(inst_26611__$1){
var statearr_26670_26702 = state_26645__$1;
(statearr_26670_26702[(1)] = (14));

} else {
var statearr_26671_26703 = state_26645__$1;
(statearr_26671_26703[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (9))){
var inst_26633 = (state_26645[(2)]);
var inst_26634 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26645__$1 = (function (){var statearr_26672 = state_26645;
(statearr_26672[(15)] = inst_26633);

return statearr_26672;
})();
if(cljs.core.truth_(inst_26634)){
var statearr_26673_26704 = state_26645__$1;
(statearr_26673_26704[(1)] = (21));

} else {
var statearr_26674_26705 = state_26645__$1;
(statearr_26674_26705[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (5))){
var inst_26589 = cljs.core.async.close_BANG_(out);
var state_26645__$1 = state_26645;
var statearr_26675_26706 = state_26645__$1;
(statearr_26675_26706[(2)] = inst_26589);

(statearr_26675_26706[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (14))){
var inst_26611 = (state_26645[(7)]);
var inst_26613 = cljs.core.chunked_seq_QMARK_(inst_26611);
var state_26645__$1 = state_26645;
if(inst_26613){
var statearr_26676_26707 = state_26645__$1;
(statearr_26676_26707[(1)] = (17));

} else {
var statearr_26677_26708 = state_26645__$1;
(statearr_26677_26708[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (16))){
var inst_26629 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
var statearr_26678_26709 = state_26645__$1;
(statearr_26678_26709[(2)] = inst_26629);

(statearr_26678_26709[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26646 === (10))){
var inst_26600 = (state_26645[(8)]);
var inst_26598 = (state_26645[(9)]);
var inst_26605 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26598,inst_26600);
var state_26645__$1 = state_26645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26645__$1,(13),out,inst_26605);
} else {
if((state_val_26646 === (18))){
var inst_26611 = (state_26645[(7)]);
var inst_26620 = cljs.core.first(inst_26611);
var state_26645__$1 = state_26645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26645__$1,(20),out,inst_26620);
} else {
if((state_val_26646 === (8))){
var inst_26600 = (state_26645[(8)]);
var inst_26599 = (state_26645[(12)]);
var inst_26602 = (inst_26600 < inst_26599);
var inst_26603 = inst_26602;
var state_26645__$1 = state_26645;
if(cljs.core.truth_(inst_26603)){
var statearr_26679_26710 = state_26645__$1;
(statearr_26679_26710[(1)] = (10));

} else {
var statearr_26680_26711 = state_26645__$1;
(statearr_26680_26711[(1)] = (11));

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
});})(c__24111__auto__))
;
return ((function (switch__23985__auto__,c__24111__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23986__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23986__auto____0 = (function (){
var statearr_26684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26684[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23986__auto__);

(statearr_26684[(1)] = (1));

return statearr_26684;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23986__auto____1 = (function (state_26645){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26645);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26685){if((e26685 instanceof Object)){
var ex__23989__auto__ = e26685;
var statearr_26686_26712 = state_26645;
(statearr_26686_26712[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26645);

return cljs.core.cst$kw$recur;
} else {
throw e26685;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26713 = state_26645;
state_26645 = G__26713;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23986__auto__ = function(state_26645){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23986__auto____1.call(this,state_26645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23986__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23986__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto__))
})();
var state__24113__auto__ = (function (){var statearr_26687 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto__);

return statearr_26687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto__))
);

return c__24111__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26714 = [];
var len__8739__auto___26717 = arguments.length;
var i__8740__auto___26718 = (0);
while(true){
if((i__8740__auto___26718 < len__8739__auto___26717)){
args26714.push((arguments[i__8740__auto___26718]));

var G__26719 = (i__8740__auto___26718 + (1));
i__8740__auto___26718 = G__26719;
continue;
} else {
}
break;
}

var G__26716 = args26714.length;
switch (G__26716) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26714.length)].join('')));

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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26721.length)].join('')));

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
var args26728 = [];
var len__8739__auto___26779 = arguments.length;
var i__8740__auto___26780 = (0);
while(true){
if((i__8740__auto___26780 < len__8739__auto___26779)){
args26728.push((arguments[i__8740__auto___26780]));

var G__26781 = (i__8740__auto___26780 + (1));
i__8740__auto___26780 = G__26781;
continue;
} else {
}
break;
}

var G__26730 = args26728.length;
switch (G__26730) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26728.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24111__auto___26783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___26783,out){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___26783,out){
return (function (state_26754){
var state_val_26755 = (state_26754[(1)]);
if((state_val_26755 === (7))){
var inst_26749 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26756_26784 = state_26754__$1;
(statearr_26756_26784[(2)] = inst_26749);

(statearr_26756_26784[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26755 === (1))){
var inst_26731 = null;
var state_26754__$1 = (function (){var statearr_26757 = state_26754;
(statearr_26757[(7)] = inst_26731);

return statearr_26757;
})();
var statearr_26758_26785 = state_26754__$1;
(statearr_26758_26785[(2)] = null);

(statearr_26758_26785[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26755 === (4))){
var inst_26734 = (state_26754[(8)]);
var inst_26734__$1 = (state_26754[(2)]);
var inst_26735 = (inst_26734__$1 == null);
var inst_26736 = cljs.core.not(inst_26735);
var state_26754__$1 = (function (){var statearr_26759 = state_26754;
(statearr_26759[(8)] = inst_26734__$1);

return statearr_26759;
})();
if(inst_26736){
var statearr_26760_26786 = state_26754__$1;
(statearr_26760_26786[(1)] = (5));

} else {
var statearr_26761_26787 = state_26754__$1;
(statearr_26761_26787[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26755 === (6))){
var state_26754__$1 = state_26754;
var statearr_26762_26788 = state_26754__$1;
(statearr_26762_26788[(2)] = null);

(statearr_26762_26788[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26755 === (3))){
var inst_26751 = (state_26754[(2)]);
var inst_26752 = cljs.core.async.close_BANG_(out);
var state_26754__$1 = (function (){var statearr_26763 = state_26754;
(statearr_26763[(9)] = inst_26751);

return statearr_26763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26754__$1,inst_26752);
} else {
if((state_val_26755 === (2))){
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26754__$1,(4),ch);
} else {
if((state_val_26755 === (11))){
var inst_26734 = (state_26754[(8)]);
var inst_26743 = (state_26754[(2)]);
var inst_26731 = inst_26734;
var state_26754__$1 = (function (){var statearr_26764 = state_26754;
(statearr_26764[(7)] = inst_26731);

(statearr_26764[(10)] = inst_26743);

return statearr_26764;
})();
var statearr_26765_26789 = state_26754__$1;
(statearr_26765_26789[(2)] = null);

(statearr_26765_26789[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26755 === (9))){
var inst_26734 = (state_26754[(8)]);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26754__$1,(11),out,inst_26734);
} else {
if((state_val_26755 === (5))){
var inst_26731 = (state_26754[(7)]);
var inst_26734 = (state_26754[(8)]);
var inst_26738 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26734,inst_26731);
var state_26754__$1 = state_26754;
if(inst_26738){
var statearr_26767_26790 = state_26754__$1;
(statearr_26767_26790[(1)] = (8));

} else {
var statearr_26768_26791 = state_26754__$1;
(statearr_26768_26791[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26755 === (10))){
var inst_26746 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26769_26792 = state_26754__$1;
(statearr_26769_26792[(2)] = inst_26746);

(statearr_26769_26792[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26755 === (8))){
var inst_26731 = (state_26754[(7)]);
var tmp26766 = inst_26731;
var inst_26731__$1 = tmp26766;
var state_26754__$1 = (function (){var statearr_26770 = state_26754;
(statearr_26770[(7)] = inst_26731__$1);

return statearr_26770;
})();
var statearr_26771_26793 = state_26754__$1;
(statearr_26771_26793[(2)] = null);

(statearr_26771_26793[(1)] = (2));


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
});})(c__24111__auto___26783,out))
;
return ((function (switch__23985__auto__,c__24111__auto___26783,out){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_26775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26775[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_26775[(1)] = (1));

return statearr_26775;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_26754){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26754);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26776){if((e26776 instanceof Object)){
var ex__23989__auto__ = e26776;
var statearr_26777_26794 = state_26754;
(statearr_26777_26794[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26754);

return cljs.core.cst$kw$recur;
} else {
throw e26776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26795 = state_26754;
state_26754 = G__26795;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_26754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_26754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___26783,out))
})();
var state__24113__auto__ = (function (){var statearr_26778 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___26783);

return statearr_26778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___26783,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26796 = [];
var len__8739__auto___26866 = arguments.length;
var i__8740__auto___26867 = (0);
while(true){
if((i__8740__auto___26867 < len__8739__auto___26866)){
args26796.push((arguments[i__8740__auto___26867]));

var G__26868 = (i__8740__auto___26867 + (1));
i__8740__auto___26867 = G__26868;
continue;
} else {
}
break;
}

var G__26798 = args26796.length;
switch (G__26798) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26796.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24111__auto___26870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___26870,out){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___26870,out){
return (function (state_26836){
var state_val_26837 = (state_26836[(1)]);
if((state_val_26837 === (7))){
var inst_26832 = (state_26836[(2)]);
var state_26836__$1 = state_26836;
var statearr_26838_26871 = state_26836__$1;
(statearr_26838_26871[(2)] = inst_26832);

(statearr_26838_26871[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (1))){
var inst_26799 = (new Array(n));
var inst_26800 = inst_26799;
var inst_26801 = (0);
var state_26836__$1 = (function (){var statearr_26839 = state_26836;
(statearr_26839[(7)] = inst_26800);

(statearr_26839[(8)] = inst_26801);

return statearr_26839;
})();
var statearr_26840_26872 = state_26836__$1;
(statearr_26840_26872[(2)] = null);

(statearr_26840_26872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (4))){
var inst_26804 = (state_26836[(9)]);
var inst_26804__$1 = (state_26836[(2)]);
var inst_26805 = (inst_26804__$1 == null);
var inst_26806 = cljs.core.not(inst_26805);
var state_26836__$1 = (function (){var statearr_26841 = state_26836;
(statearr_26841[(9)] = inst_26804__$1);

return statearr_26841;
})();
if(inst_26806){
var statearr_26842_26873 = state_26836__$1;
(statearr_26842_26873[(1)] = (5));

} else {
var statearr_26843_26874 = state_26836__$1;
(statearr_26843_26874[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (15))){
var inst_26826 = (state_26836[(2)]);
var state_26836__$1 = state_26836;
var statearr_26844_26875 = state_26836__$1;
(statearr_26844_26875[(2)] = inst_26826);

(statearr_26844_26875[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (13))){
var state_26836__$1 = state_26836;
var statearr_26845_26876 = state_26836__$1;
(statearr_26845_26876[(2)] = null);

(statearr_26845_26876[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (6))){
var inst_26801 = (state_26836[(8)]);
var inst_26822 = (inst_26801 > (0));
var state_26836__$1 = state_26836;
if(cljs.core.truth_(inst_26822)){
var statearr_26846_26877 = state_26836__$1;
(statearr_26846_26877[(1)] = (12));

} else {
var statearr_26847_26878 = state_26836__$1;
(statearr_26847_26878[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (3))){
var inst_26834 = (state_26836[(2)]);
var state_26836__$1 = state_26836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26836__$1,inst_26834);
} else {
if((state_val_26837 === (12))){
var inst_26800 = (state_26836[(7)]);
var inst_26824 = cljs.core.vec(inst_26800);
var state_26836__$1 = state_26836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26836__$1,(15),out,inst_26824);
} else {
if((state_val_26837 === (2))){
var state_26836__$1 = state_26836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26836__$1,(4),ch);
} else {
if((state_val_26837 === (11))){
var inst_26816 = (state_26836[(2)]);
var inst_26817 = (new Array(n));
var inst_26800 = inst_26817;
var inst_26801 = (0);
var state_26836__$1 = (function (){var statearr_26848 = state_26836;
(statearr_26848[(7)] = inst_26800);

(statearr_26848[(10)] = inst_26816);

(statearr_26848[(8)] = inst_26801);

return statearr_26848;
})();
var statearr_26849_26879 = state_26836__$1;
(statearr_26849_26879[(2)] = null);

(statearr_26849_26879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (9))){
var inst_26800 = (state_26836[(7)]);
var inst_26814 = cljs.core.vec(inst_26800);
var state_26836__$1 = state_26836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26836__$1,(11),out,inst_26814);
} else {
if((state_val_26837 === (5))){
var inst_26800 = (state_26836[(7)]);
var inst_26804 = (state_26836[(9)]);
var inst_26801 = (state_26836[(8)]);
var inst_26809 = (state_26836[(11)]);
var inst_26808 = (inst_26800[inst_26801] = inst_26804);
var inst_26809__$1 = (inst_26801 + (1));
var inst_26810 = (inst_26809__$1 < n);
var state_26836__$1 = (function (){var statearr_26850 = state_26836;
(statearr_26850[(12)] = inst_26808);

(statearr_26850[(11)] = inst_26809__$1);

return statearr_26850;
})();
if(cljs.core.truth_(inst_26810)){
var statearr_26851_26880 = state_26836__$1;
(statearr_26851_26880[(1)] = (8));

} else {
var statearr_26852_26881 = state_26836__$1;
(statearr_26852_26881[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (14))){
var inst_26829 = (state_26836[(2)]);
var inst_26830 = cljs.core.async.close_BANG_(out);
var state_26836__$1 = (function (){var statearr_26854 = state_26836;
(statearr_26854[(13)] = inst_26829);

return statearr_26854;
})();
var statearr_26855_26882 = state_26836__$1;
(statearr_26855_26882[(2)] = inst_26830);

(statearr_26855_26882[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (10))){
var inst_26820 = (state_26836[(2)]);
var state_26836__$1 = state_26836;
var statearr_26856_26883 = state_26836__$1;
(statearr_26856_26883[(2)] = inst_26820);

(statearr_26856_26883[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26837 === (8))){
var inst_26800 = (state_26836[(7)]);
var inst_26809 = (state_26836[(11)]);
var tmp26853 = inst_26800;
var inst_26800__$1 = tmp26853;
var inst_26801 = inst_26809;
var state_26836__$1 = (function (){var statearr_26857 = state_26836;
(statearr_26857[(7)] = inst_26800__$1);

(statearr_26857[(8)] = inst_26801);

return statearr_26857;
})();
var statearr_26858_26884 = state_26836__$1;
(statearr_26858_26884[(2)] = null);

(statearr_26858_26884[(1)] = (2));


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
});})(c__24111__auto___26870,out))
;
return ((function (switch__23985__auto__,c__24111__auto___26870,out){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_26862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26862[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_26862[(1)] = (1));

return statearr_26862;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_26836){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26836);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26863){if((e26863 instanceof Object)){
var ex__23989__auto__ = e26863;
var statearr_26864_26885 = state_26836;
(statearr_26864_26885[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26836);

return cljs.core.cst$kw$recur;
} else {
throw e26863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26886 = state_26836;
state_26836 = G__26886;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_26836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_26836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___26870,out))
})();
var state__24113__auto__ = (function (){var statearr_26865 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___26870);

return statearr_26865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___26870,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26887 = [];
var len__8739__auto___26961 = arguments.length;
var i__8740__auto___26962 = (0);
while(true){
if((i__8740__auto___26962 < len__8739__auto___26961)){
args26887.push((arguments[i__8740__auto___26962]));

var G__26963 = (i__8740__auto___26962 + (1));
i__8740__auto___26962 = G__26963;
continue;
} else {
}
break;
}

var G__26889 = args26887.length;
switch (G__26889) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26887.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24111__auto___26965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24111__auto___26965,out){
return (function (){
var f__24112__auto__ = (function (){var switch__23985__auto__ = ((function (c__24111__auto___26965,out){
return (function (state_26931){
var state_val_26932 = (state_26931[(1)]);
if((state_val_26932 === (7))){
var inst_26927 = (state_26931[(2)]);
var state_26931__$1 = state_26931;
var statearr_26933_26966 = state_26931__$1;
(statearr_26933_26966[(2)] = inst_26927);

(statearr_26933_26966[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (1))){
var inst_26890 = [];
var inst_26891 = inst_26890;
var inst_26892 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26931__$1 = (function (){var statearr_26934 = state_26931;
(statearr_26934[(7)] = inst_26892);

(statearr_26934[(8)] = inst_26891);

return statearr_26934;
})();
var statearr_26935_26967 = state_26931__$1;
(statearr_26935_26967[(2)] = null);

(statearr_26935_26967[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (4))){
var inst_26895 = (state_26931[(9)]);
var inst_26895__$1 = (state_26931[(2)]);
var inst_26896 = (inst_26895__$1 == null);
var inst_26897 = cljs.core.not(inst_26896);
var state_26931__$1 = (function (){var statearr_26936 = state_26931;
(statearr_26936[(9)] = inst_26895__$1);

return statearr_26936;
})();
if(inst_26897){
var statearr_26937_26968 = state_26931__$1;
(statearr_26937_26968[(1)] = (5));

} else {
var statearr_26938_26969 = state_26931__$1;
(statearr_26938_26969[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (15))){
var inst_26921 = (state_26931[(2)]);
var state_26931__$1 = state_26931;
var statearr_26939_26970 = state_26931__$1;
(statearr_26939_26970[(2)] = inst_26921);

(statearr_26939_26970[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (13))){
var state_26931__$1 = state_26931;
var statearr_26940_26971 = state_26931__$1;
(statearr_26940_26971[(2)] = null);

(statearr_26940_26971[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (6))){
var inst_26891 = (state_26931[(8)]);
var inst_26916 = inst_26891.length;
var inst_26917 = (inst_26916 > (0));
var state_26931__$1 = state_26931;
if(cljs.core.truth_(inst_26917)){
var statearr_26941_26972 = state_26931__$1;
(statearr_26941_26972[(1)] = (12));

} else {
var statearr_26942_26973 = state_26931__$1;
(statearr_26942_26973[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (3))){
var inst_26929 = (state_26931[(2)]);
var state_26931__$1 = state_26931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26931__$1,inst_26929);
} else {
if((state_val_26932 === (12))){
var inst_26891 = (state_26931[(8)]);
var inst_26919 = cljs.core.vec(inst_26891);
var state_26931__$1 = state_26931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26931__$1,(15),out,inst_26919);
} else {
if((state_val_26932 === (2))){
var state_26931__$1 = state_26931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26931__$1,(4),ch);
} else {
if((state_val_26932 === (11))){
var inst_26895 = (state_26931[(9)]);
var inst_26899 = (state_26931[(10)]);
var inst_26909 = (state_26931[(2)]);
var inst_26910 = [];
var inst_26911 = inst_26910.push(inst_26895);
var inst_26891 = inst_26910;
var inst_26892 = inst_26899;
var state_26931__$1 = (function (){var statearr_26943 = state_26931;
(statearr_26943[(7)] = inst_26892);

(statearr_26943[(8)] = inst_26891);

(statearr_26943[(11)] = inst_26911);

(statearr_26943[(12)] = inst_26909);

return statearr_26943;
})();
var statearr_26944_26974 = state_26931__$1;
(statearr_26944_26974[(2)] = null);

(statearr_26944_26974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (9))){
var inst_26891 = (state_26931[(8)]);
var inst_26907 = cljs.core.vec(inst_26891);
var state_26931__$1 = state_26931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26931__$1,(11),out,inst_26907);
} else {
if((state_val_26932 === (5))){
var inst_26892 = (state_26931[(7)]);
var inst_26895 = (state_26931[(9)]);
var inst_26899 = (state_26931[(10)]);
var inst_26899__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26895) : f.call(null,inst_26895));
var inst_26900 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26899__$1,inst_26892);
var inst_26901 = cljs.core.keyword_identical_QMARK_(inst_26892,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26902 = (inst_26900) || (inst_26901);
var state_26931__$1 = (function (){var statearr_26945 = state_26931;
(statearr_26945[(10)] = inst_26899__$1);

return statearr_26945;
})();
if(cljs.core.truth_(inst_26902)){
var statearr_26946_26975 = state_26931__$1;
(statearr_26946_26975[(1)] = (8));

} else {
var statearr_26947_26976 = state_26931__$1;
(statearr_26947_26976[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (14))){
var inst_26924 = (state_26931[(2)]);
var inst_26925 = cljs.core.async.close_BANG_(out);
var state_26931__$1 = (function (){var statearr_26949 = state_26931;
(statearr_26949[(13)] = inst_26924);

return statearr_26949;
})();
var statearr_26950_26977 = state_26931__$1;
(statearr_26950_26977[(2)] = inst_26925);

(statearr_26950_26977[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (10))){
var inst_26914 = (state_26931[(2)]);
var state_26931__$1 = state_26931;
var statearr_26951_26978 = state_26931__$1;
(statearr_26951_26978[(2)] = inst_26914);

(statearr_26951_26978[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26932 === (8))){
var inst_26895 = (state_26931[(9)]);
var inst_26891 = (state_26931[(8)]);
var inst_26899 = (state_26931[(10)]);
var inst_26904 = inst_26891.push(inst_26895);
var tmp26948 = inst_26891;
var inst_26891__$1 = tmp26948;
var inst_26892 = inst_26899;
var state_26931__$1 = (function (){var statearr_26952 = state_26931;
(statearr_26952[(7)] = inst_26892);

(statearr_26952[(8)] = inst_26891__$1);

(statearr_26952[(14)] = inst_26904);

return statearr_26952;
})();
var statearr_26953_26979 = state_26931__$1;
(statearr_26953_26979[(2)] = null);

(statearr_26953_26979[(1)] = (2));


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
});})(c__24111__auto___26965,out))
;
return ((function (switch__23985__auto__,c__24111__auto___26965,out){
return (function() {
var cljs$core$async$state_machine__23986__auto__ = null;
var cljs$core$async$state_machine__23986__auto____0 = (function (){
var statearr_26957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26957[(0)] = cljs$core$async$state_machine__23986__auto__);

(statearr_26957[(1)] = (1));

return statearr_26957;
});
var cljs$core$async$state_machine__23986__auto____1 = (function (state_26931){
while(true){
var ret_value__23987__auto__ = (function (){try{while(true){
var result__23988__auto__ = switch__23985__auto__(state_26931);
if(cljs.core.keyword_identical_QMARK_(result__23988__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23988__auto__;
}
break;
}
}catch (e26958){if((e26958 instanceof Object)){
var ex__23989__auto__ = e26958;
var statearr_26959_26980 = state_26931;
(statearr_26959_26980[(5)] = ex__23989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26931);

return cljs.core.cst$kw$recur;
} else {
throw e26958;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23987__auto__,cljs.core.cst$kw$recur)){
var G__26981 = state_26931;
state_26931 = G__26981;
continue;
} else {
return ret_value__23987__auto__;
}
break;
}
});
cljs$core$async$state_machine__23986__auto__ = function(state_26931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23986__auto____1.call(this,state_26931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23986__auto____0;
cljs$core$async$state_machine__23986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23986__auto____1;
return cljs$core$async$state_machine__23986__auto__;
})()
;})(switch__23985__auto__,c__24111__auto___26965,out))
})();
var state__24113__auto__ = (function (){var statearr_26960 = (f__24112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24112__auto__.cljs$core$IFn$_invoke$arity$0() : f__24112__auto__.call(null));
(statearr_26960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24111__auto___26965);

return statearr_26960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24113__auto__);
});})(c__24111__auto___26965,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

