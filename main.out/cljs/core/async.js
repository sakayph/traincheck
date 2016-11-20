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
var args24013 = [];
var len__8739__auto___24019 = arguments.length;
var i__8740__auto___24020 = (0);
while(true){
if((i__8740__auto___24020 < len__8739__auto___24019)){
args24013.push((arguments[i__8740__auto___24020]));

var G__24021 = (i__8740__auto___24020 + (1));
i__8740__auto___24020 = G__24021;
continue;
} else {
}
break;
}

var G__24015 = args24013.length;
switch (G__24015) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24013.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24016 = (function (f,blockable,meta24017){
this.f = f;
this.blockable = blockable;
this.meta24017 = meta24017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24018,meta24017__$1){
var self__ = this;
var _24018__$1 = this;
return (new cljs.core.async.t_cljs$core$async24016(self__.f,self__.blockable,meta24017__$1));
});


cljs.core.async.t_cljs$core$async24016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24018){
var self__ = this;
var _24018__$1 = this;
return self__.meta24017;
});


cljs.core.async.t_cljs$core$async24016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async24016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24017], null);
});

cljs.core.async.t_cljs$core$async24016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24016";

cljs.core.async.t_cljs$core$async24016.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24016");
});

cljs.core.async.__GT_t_cljs$core$async24016 = (function cljs$core$async$__GT_t_cljs$core$async24016(f__$1,blockable__$1,meta24017){
return (new cljs.core.async.t_cljs$core$async24016(f__$1,blockable__$1,meta24017));
});

}

return (new cljs.core.async.t_cljs$core$async24016(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24025 = [];
var len__8739__auto___24028 = arguments.length;
var i__8740__auto___24029 = (0);
while(true){
if((i__8740__auto___24029 < len__8739__auto___24028)){
args24025.push((arguments[i__8740__auto___24029]));

var G__24030 = (i__8740__auto___24029 + (1));
i__8740__auto___24029 = G__24030;
continue;
} else {
}
break;
}

var G__24027 = args24025.length;
switch (G__24027) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24025.length)].join('')));

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
var args24032 = [];
var len__8739__auto___24035 = arguments.length;
var i__8740__auto___24036 = (0);
while(true){
if((i__8740__auto___24036 < len__8739__auto___24035)){
args24032.push((arguments[i__8740__auto___24036]));

var G__24037 = (i__8740__auto___24036 + (1));
i__8740__auto___24036 = G__24037;
continue;
} else {
}
break;
}

var G__24034 = args24032.length;
switch (G__24034) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24032.length)].join('')));

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
var args24039 = [];
var len__8739__auto___24042 = arguments.length;
var i__8740__auto___24043 = (0);
while(true){
if((i__8740__auto___24043 < len__8739__auto___24042)){
args24039.push((arguments[i__8740__auto___24043]));

var G__24044 = (i__8740__auto___24043 + (1));
i__8740__auto___24043 = G__24044;
continue;
} else {
}
break;
}

var G__24041 = args24039.length;
switch (G__24041) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24039.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24046 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24046) : fn1.call(null,val_24046));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24046,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24046) : fn1.call(null,val_24046));
});})(val_24046,ret))
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
var args24047 = [];
var len__8739__auto___24050 = arguments.length;
var i__8740__auto___24051 = (0);
while(true){
if((i__8740__auto___24051 < len__8739__auto___24050)){
args24047.push((arguments[i__8740__auto___24051]));

var G__24052 = (i__8740__auto___24051 + (1));
i__8740__auto___24051 = G__24052;
continue;
} else {
}
break;
}

var G__24049 = args24047.length;
switch (G__24049) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24047.length)].join('')));

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
var n__8539__auto___24054 = n;
var x_24055 = (0);
while(true){
if((x_24055 < n__8539__auto___24054)){
(a[x_24055] = (0));

var G__24056 = (x_24055 + (1));
x_24055 = G__24056;
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

var G__24057 = (i + (1));
i = G__24057;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async24061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24061 = (function (flag,meta24062){
this.flag = flag;
this.meta24062 = meta24062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24063,meta24062__$1){
var self__ = this;
var _24063__$1 = this;
return (new cljs.core.async.t_cljs$core$async24061(self__.flag,meta24062__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24063){
var self__ = this;
var _24063__$1 = this;
return self__.meta24062;
});})(flag))
;


cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async24061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24061.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24062], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24061";

cljs.core.async.t_cljs$core$async24061.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24061");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24061 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24061(flag__$1,meta24062){
return (new cljs.core.async.t_cljs$core$async24061(flag__$1,meta24062));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24061(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24067 = (function (flag,cb,meta24068){
this.flag = flag;
this.cb = cb;
this.meta24068 = meta24068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async24067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24069,meta24068__$1){
var self__ = this;
var _24069__$1 = this;
return (new cljs.core.async.t_cljs$core$async24067(self__.flag,self__.cb,meta24068__$1));
});


cljs.core.async.t_cljs$core$async24067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24069){
var self__ = this;
var _24069__$1 = this;
return self__.meta24068;
});


cljs.core.async.t_cljs$core$async24067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async24067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async24067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async24067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24068], null);
});

cljs.core.async.t_cljs$core$async24067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24067";

cljs.core.async.t_cljs$core$async24067.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async24067");
});

cljs.core.async.__GT_t_cljs$core$async24067 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24067(flag__$1,cb__$1,meta24068){
return (new cljs.core.async.t_cljs$core$async24067(flag__$1,cb__$1,meta24068));
});

}

return (new cljs.core.async.t_cljs$core$async24067(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24070_SHARP_){
var G__24074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24070_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24074) : fret.call(null,G__24074));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24071_SHARP_){
var G__24075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24071_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24075) : fret.call(null,G__24075));
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
var G__24076 = (i + (1));
i = G__24076;
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
var len__8739__auto___24082 = arguments.length;
var i__8740__auto___24083 = (0);
while(true){
if((i__8740__auto___24083 < len__8739__auto___24082)){
args__8746__auto__.push((arguments[i__8740__auto___24083]));

var G__24084 = (i__8740__auto___24083 + (1));
i__8740__auto___24083 = G__24084;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((1) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8747__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24079){
var map__24080 = p__24079;
var map__24080__$1 = ((((!((map__24080 == null)))?((((map__24080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24080):map__24080);
var opts = map__24080__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24077){
var G__24078 = cljs.core.first(seq24077);
var seq24077__$1 = cljs.core.next(seq24077);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24078,seq24077__$1);
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
var args24085 = [];
var len__8739__auto___24135 = arguments.length;
var i__8740__auto___24136 = (0);
while(true){
if((i__8740__auto___24136 < len__8739__auto___24135)){
args24085.push((arguments[i__8740__auto___24136]));

var G__24137 = (i__8740__auto___24136 + (1));
i__8740__auto___24136 = G__24137;
continue;
} else {
}
break;
}

var G__24087 = args24085.length;
switch (G__24087) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24085.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23954__auto___24139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___24139){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___24139){
return (function (state_24111){
var state_val_24112 = (state_24111[(1)]);
if((state_val_24112 === (7))){
var inst_24107 = (state_24111[(2)]);
var state_24111__$1 = state_24111;
var statearr_24113_24140 = state_24111__$1;
(statearr_24113_24140[(2)] = inst_24107);

(statearr_24113_24140[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (1))){
var state_24111__$1 = state_24111;
var statearr_24114_24141 = state_24111__$1;
(statearr_24114_24141[(2)] = null);

(statearr_24114_24141[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (4))){
var inst_24090 = (state_24111[(7)]);
var inst_24090__$1 = (state_24111[(2)]);
var inst_24091 = (inst_24090__$1 == null);
var state_24111__$1 = (function (){var statearr_24115 = state_24111;
(statearr_24115[(7)] = inst_24090__$1);

return statearr_24115;
})();
if(cljs.core.truth_(inst_24091)){
var statearr_24116_24142 = state_24111__$1;
(statearr_24116_24142[(1)] = (5));

} else {
var statearr_24117_24143 = state_24111__$1;
(statearr_24117_24143[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (13))){
var state_24111__$1 = state_24111;
var statearr_24118_24144 = state_24111__$1;
(statearr_24118_24144[(2)] = null);

(statearr_24118_24144[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (6))){
var inst_24090 = (state_24111[(7)]);
var state_24111__$1 = state_24111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24111__$1,(11),to,inst_24090);
} else {
if((state_val_24112 === (3))){
var inst_24109 = (state_24111[(2)]);
var state_24111__$1 = state_24111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24111__$1,inst_24109);
} else {
if((state_val_24112 === (12))){
var state_24111__$1 = state_24111;
var statearr_24119_24145 = state_24111__$1;
(statearr_24119_24145[(2)] = null);

(statearr_24119_24145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (2))){
var state_24111__$1 = state_24111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24111__$1,(4),from);
} else {
if((state_val_24112 === (11))){
var inst_24100 = (state_24111[(2)]);
var state_24111__$1 = state_24111;
if(cljs.core.truth_(inst_24100)){
var statearr_24120_24146 = state_24111__$1;
(statearr_24120_24146[(1)] = (12));

} else {
var statearr_24121_24147 = state_24111__$1;
(statearr_24121_24147[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (9))){
var state_24111__$1 = state_24111;
var statearr_24122_24148 = state_24111__$1;
(statearr_24122_24148[(2)] = null);

(statearr_24122_24148[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (5))){
var state_24111__$1 = state_24111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24123_24149 = state_24111__$1;
(statearr_24123_24149[(1)] = (8));

} else {
var statearr_24124_24150 = state_24111__$1;
(statearr_24124_24150[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (14))){
var inst_24105 = (state_24111[(2)]);
var state_24111__$1 = state_24111;
var statearr_24125_24151 = state_24111__$1;
(statearr_24125_24151[(2)] = inst_24105);

(statearr_24125_24151[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (10))){
var inst_24097 = (state_24111[(2)]);
var state_24111__$1 = state_24111;
var statearr_24126_24152 = state_24111__$1;
(statearr_24126_24152[(2)] = inst_24097);

(statearr_24126_24152[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24112 === (8))){
var inst_24094 = cljs.core.async.close_BANG_(to);
var state_24111__$1 = state_24111;
var statearr_24127_24153 = state_24111__$1;
(statearr_24127_24153[(2)] = inst_24094);

(statearr_24127_24153[(1)] = (10));


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
});})(c__23954__auto___24139))
;
return ((function (switch__23828__auto__,c__23954__auto___24139){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_24131 = [null,null,null,null,null,null,null,null];
(statearr_24131[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_24131[(1)] = (1));

return statearr_24131;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_24111){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24111);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24132){if((e24132 instanceof Object)){
var ex__23832__auto__ = e24132;
var statearr_24133_24154 = state_24111;
(statearr_24133_24154[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24111);

return cljs.core.cst$kw$recur;
} else {
throw e24132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24155 = state_24111;
state_24111 = G__24155;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_24111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_24111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___24139))
})();
var state__23956__auto__ = (function (){var statearr_24134 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___24139);

return statearr_24134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___24139))
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
return (function (p__24343){
var vec__24344 = p__24343;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24344,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24344,(1),null);
var job = vec__24344;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23954__auto___24530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___24530,res,vec__24344,v,p,job,jobs,results){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___24530,res,vec__24344,v,p,job,jobs,results){
return (function (state_24351){
var state_val_24352 = (state_24351[(1)]);
if((state_val_24352 === (1))){
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24351__$1,(2),res,v);
} else {
if((state_val_24352 === (2))){
var inst_24348 = (state_24351[(2)]);
var inst_24349 = cljs.core.async.close_BANG_(res);
var state_24351__$1 = (function (){var statearr_24353 = state_24351;
(statearr_24353[(7)] = inst_24348);

return statearr_24353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24351__$1,inst_24349);
} else {
return null;
}
}
});})(c__23954__auto___24530,res,vec__24344,v,p,job,jobs,results))
;
return ((function (switch__23828__auto__,c__23954__auto___24530,res,vec__24344,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0 = (function (){
var statearr_24357 = [null,null,null,null,null,null,null,null];
(statearr_24357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__);

(statearr_24357[(1)] = (1));

return statearr_24357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1 = (function (state_24351){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24351);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24358){if((e24358 instanceof Object)){
var ex__23832__auto__ = e24358;
var statearr_24359_24531 = state_24351;
(statearr_24359_24531[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24351);

return cljs.core.cst$kw$recur;
} else {
throw e24358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24532 = state_24351;
state_24351 = G__24532;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = function(state_24351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1.call(this,state_24351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___24530,res,vec__24344,v,p,job,jobs,results))
})();
var state__23956__auto__ = (function (){var statearr_24360 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___24530);

return statearr_24360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___24530,res,vec__24344,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24361){
var vec__24362 = p__24361;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24362,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24362,(1),null);
var job = vec__24362;
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
var n__8539__auto___24533 = n;
var __24534 = (0);
while(true){
if((__24534 < n__8539__auto___24533)){
var G__24365_24535 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24365_24535) {
case "compute":
var c__23954__auto___24537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24534,c__23954__auto___24537,G__24365_24535,n__8539__auto___24533,jobs,results,process,async){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (__24534,c__23954__auto___24537,G__24365_24535,n__8539__auto___24533,jobs,results,process,async){
return (function (state_24378){
var state_val_24379 = (state_24378[(1)]);
if((state_val_24379 === (1))){
var state_24378__$1 = state_24378;
var statearr_24380_24538 = state_24378__$1;
(statearr_24380_24538[(2)] = null);

(statearr_24380_24538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24379 === (2))){
var state_24378__$1 = state_24378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24378__$1,(4),jobs);
} else {
if((state_val_24379 === (3))){
var inst_24376 = (state_24378[(2)]);
var state_24378__$1 = state_24378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24378__$1,inst_24376);
} else {
if((state_val_24379 === (4))){
var inst_24368 = (state_24378[(2)]);
var inst_24369 = process(inst_24368);
var state_24378__$1 = state_24378;
if(cljs.core.truth_(inst_24369)){
var statearr_24381_24539 = state_24378__$1;
(statearr_24381_24539[(1)] = (5));

} else {
var statearr_24382_24540 = state_24378__$1;
(statearr_24382_24540[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24379 === (5))){
var state_24378__$1 = state_24378;
var statearr_24383_24541 = state_24378__$1;
(statearr_24383_24541[(2)] = null);

(statearr_24383_24541[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24379 === (6))){
var state_24378__$1 = state_24378;
var statearr_24384_24542 = state_24378__$1;
(statearr_24384_24542[(2)] = null);

(statearr_24384_24542[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24379 === (7))){
var inst_24374 = (state_24378[(2)]);
var state_24378__$1 = state_24378;
var statearr_24385_24543 = state_24378__$1;
(statearr_24385_24543[(2)] = inst_24374);

(statearr_24385_24543[(1)] = (3));


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
});})(__24534,c__23954__auto___24537,G__24365_24535,n__8539__auto___24533,jobs,results,process,async))
;
return ((function (__24534,switch__23828__auto__,c__23954__auto___24537,G__24365_24535,n__8539__auto___24533,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0 = (function (){
var statearr_24389 = [null,null,null,null,null,null,null];
(statearr_24389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__);

(statearr_24389[(1)] = (1));

return statearr_24389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1 = (function (state_24378){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24378);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24390){if((e24390 instanceof Object)){
var ex__23832__auto__ = e24390;
var statearr_24391_24544 = state_24378;
(statearr_24391_24544[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24378);

return cljs.core.cst$kw$recur;
} else {
throw e24390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24545 = state_24378;
state_24378 = G__24545;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = function(state_24378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1.call(this,state_24378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__;
})()
;})(__24534,switch__23828__auto__,c__23954__auto___24537,G__24365_24535,n__8539__auto___24533,jobs,results,process,async))
})();
var state__23956__auto__ = (function (){var statearr_24392 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___24537);

return statearr_24392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(__24534,c__23954__auto___24537,G__24365_24535,n__8539__auto___24533,jobs,results,process,async))
);


break;
case "async":
var c__23954__auto___24546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24534,c__23954__auto___24546,G__24365_24535,n__8539__auto___24533,jobs,results,process,async){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (__24534,c__23954__auto___24546,G__24365_24535,n__8539__auto___24533,jobs,results,process,async){
return (function (state_24405){
var state_val_24406 = (state_24405[(1)]);
if((state_val_24406 === (1))){
var state_24405__$1 = state_24405;
var statearr_24407_24547 = state_24405__$1;
(statearr_24407_24547[(2)] = null);

(statearr_24407_24547[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24406 === (2))){
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24405__$1,(4),jobs);
} else {
if((state_val_24406 === (3))){
var inst_24403 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24405__$1,inst_24403);
} else {
if((state_val_24406 === (4))){
var inst_24395 = (state_24405[(2)]);
var inst_24396 = async(inst_24395);
var state_24405__$1 = state_24405;
if(cljs.core.truth_(inst_24396)){
var statearr_24408_24548 = state_24405__$1;
(statearr_24408_24548[(1)] = (5));

} else {
var statearr_24409_24549 = state_24405__$1;
(statearr_24409_24549[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24406 === (5))){
var state_24405__$1 = state_24405;
var statearr_24410_24550 = state_24405__$1;
(statearr_24410_24550[(2)] = null);

(statearr_24410_24550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24406 === (6))){
var state_24405__$1 = state_24405;
var statearr_24411_24551 = state_24405__$1;
(statearr_24411_24551[(2)] = null);

(statearr_24411_24551[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24406 === (7))){
var inst_24401 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24412_24552 = state_24405__$1;
(statearr_24412_24552[(2)] = inst_24401);

(statearr_24412_24552[(1)] = (3));


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
});})(__24534,c__23954__auto___24546,G__24365_24535,n__8539__auto___24533,jobs,results,process,async))
;
return ((function (__24534,switch__23828__auto__,c__23954__auto___24546,G__24365_24535,n__8539__auto___24533,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0 = (function (){
var statearr_24416 = [null,null,null,null,null,null,null];
(statearr_24416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__);

(statearr_24416[(1)] = (1));

return statearr_24416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1 = (function (state_24405){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24405);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24417){if((e24417 instanceof Object)){
var ex__23832__auto__ = e24417;
var statearr_24418_24553 = state_24405;
(statearr_24418_24553[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24405);

return cljs.core.cst$kw$recur;
} else {
throw e24417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24554 = state_24405;
state_24405 = G__24554;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = function(state_24405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1.call(this,state_24405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__;
})()
;})(__24534,switch__23828__auto__,c__23954__auto___24546,G__24365_24535,n__8539__auto___24533,jobs,results,process,async))
})();
var state__23956__auto__ = (function (){var statearr_24419 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___24546);

return statearr_24419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(__24534,c__23954__auto___24546,G__24365_24535,n__8539__auto___24533,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24555 = (__24534 + (1));
__24534 = G__24555;
continue;
} else {
}
break;
}

var c__23954__auto___24556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___24556,jobs,results,process,async){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___24556,jobs,results,process,async){
return (function (state_24441){
var state_val_24442 = (state_24441[(1)]);
if((state_val_24442 === (1))){
var state_24441__$1 = state_24441;
var statearr_24443_24557 = state_24441__$1;
(statearr_24443_24557[(2)] = null);

(statearr_24443_24557[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24442 === (2))){
var state_24441__$1 = state_24441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24441__$1,(4),from);
} else {
if((state_val_24442 === (3))){
var inst_24439 = (state_24441[(2)]);
var state_24441__$1 = state_24441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24441__$1,inst_24439);
} else {
if((state_val_24442 === (4))){
var inst_24422 = (state_24441[(7)]);
var inst_24422__$1 = (state_24441[(2)]);
var inst_24423 = (inst_24422__$1 == null);
var state_24441__$1 = (function (){var statearr_24444 = state_24441;
(statearr_24444[(7)] = inst_24422__$1);

return statearr_24444;
})();
if(cljs.core.truth_(inst_24423)){
var statearr_24445_24558 = state_24441__$1;
(statearr_24445_24558[(1)] = (5));

} else {
var statearr_24446_24559 = state_24441__$1;
(statearr_24446_24559[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24442 === (5))){
var inst_24425 = cljs.core.async.close_BANG_(jobs);
var state_24441__$1 = state_24441;
var statearr_24447_24560 = state_24441__$1;
(statearr_24447_24560[(2)] = inst_24425);

(statearr_24447_24560[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24442 === (6))){
var inst_24427 = (state_24441[(8)]);
var inst_24422 = (state_24441[(7)]);
var inst_24427__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24429 = [inst_24422,inst_24427__$1];
var inst_24430 = (new cljs.core.PersistentVector(null,2,(5),inst_24428,inst_24429,null));
var state_24441__$1 = (function (){var statearr_24448 = state_24441;
(statearr_24448[(8)] = inst_24427__$1);

return statearr_24448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24441__$1,(8),jobs,inst_24430);
} else {
if((state_val_24442 === (7))){
var inst_24437 = (state_24441[(2)]);
var state_24441__$1 = state_24441;
var statearr_24449_24561 = state_24441__$1;
(statearr_24449_24561[(2)] = inst_24437);

(statearr_24449_24561[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24442 === (8))){
var inst_24427 = (state_24441[(8)]);
var inst_24432 = (state_24441[(2)]);
var state_24441__$1 = (function (){var statearr_24450 = state_24441;
(statearr_24450[(9)] = inst_24432);

return statearr_24450;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24441__$1,(9),results,inst_24427);
} else {
if((state_val_24442 === (9))){
var inst_24434 = (state_24441[(2)]);
var state_24441__$1 = (function (){var statearr_24451 = state_24441;
(statearr_24451[(10)] = inst_24434);

return statearr_24451;
})();
var statearr_24452_24562 = state_24441__$1;
(statearr_24452_24562[(2)] = null);

(statearr_24452_24562[(1)] = (2));


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
});})(c__23954__auto___24556,jobs,results,process,async))
;
return ((function (switch__23828__auto__,c__23954__auto___24556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0 = (function (){
var statearr_24456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__);

(statearr_24456[(1)] = (1));

return statearr_24456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1 = (function (state_24441){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24441);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24457){if((e24457 instanceof Object)){
var ex__23832__auto__ = e24457;
var statearr_24458_24563 = state_24441;
(statearr_24458_24563[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24441);

return cljs.core.cst$kw$recur;
} else {
throw e24457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24564 = state_24441;
state_24441 = G__24564;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = function(state_24441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1.call(this,state_24441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___24556,jobs,results,process,async))
})();
var state__23956__auto__ = (function (){var statearr_24459 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___24556);

return statearr_24459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___24556,jobs,results,process,async))
);


var c__23954__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto__,jobs,results,process,async){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto__,jobs,results,process,async){
return (function (state_24497){
var state_val_24498 = (state_24497[(1)]);
if((state_val_24498 === (7))){
var inst_24493 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24499_24565 = state_24497__$1;
(statearr_24499_24565[(2)] = inst_24493);

(statearr_24499_24565[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (20))){
var state_24497__$1 = state_24497;
var statearr_24500_24566 = state_24497__$1;
(statearr_24500_24566[(2)] = null);

(statearr_24500_24566[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (1))){
var state_24497__$1 = state_24497;
var statearr_24501_24567 = state_24497__$1;
(statearr_24501_24567[(2)] = null);

(statearr_24501_24567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (4))){
var inst_24462 = (state_24497[(7)]);
var inst_24462__$1 = (state_24497[(2)]);
var inst_24463 = (inst_24462__$1 == null);
var state_24497__$1 = (function (){var statearr_24502 = state_24497;
(statearr_24502[(7)] = inst_24462__$1);

return statearr_24502;
})();
if(cljs.core.truth_(inst_24463)){
var statearr_24503_24568 = state_24497__$1;
(statearr_24503_24568[(1)] = (5));

} else {
var statearr_24504_24569 = state_24497__$1;
(statearr_24504_24569[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (15))){
var inst_24475 = (state_24497[(8)]);
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24497__$1,(18),to,inst_24475);
} else {
if((state_val_24498 === (21))){
var inst_24488 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24505_24570 = state_24497__$1;
(statearr_24505_24570[(2)] = inst_24488);

(statearr_24505_24570[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (13))){
var inst_24490 = (state_24497[(2)]);
var state_24497__$1 = (function (){var statearr_24506 = state_24497;
(statearr_24506[(9)] = inst_24490);

return statearr_24506;
})();
var statearr_24507_24571 = state_24497__$1;
(statearr_24507_24571[(2)] = null);

(statearr_24507_24571[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (6))){
var inst_24462 = (state_24497[(7)]);
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24497__$1,(11),inst_24462);
} else {
if((state_val_24498 === (17))){
var inst_24483 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
if(cljs.core.truth_(inst_24483)){
var statearr_24508_24572 = state_24497__$1;
(statearr_24508_24572[(1)] = (19));

} else {
var statearr_24509_24573 = state_24497__$1;
(statearr_24509_24573[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (3))){
var inst_24495 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24497__$1,inst_24495);
} else {
if((state_val_24498 === (12))){
var inst_24472 = (state_24497[(10)]);
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24497__$1,(14),inst_24472);
} else {
if((state_val_24498 === (2))){
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24497__$1,(4),results);
} else {
if((state_val_24498 === (19))){
var state_24497__$1 = state_24497;
var statearr_24510_24574 = state_24497__$1;
(statearr_24510_24574[(2)] = null);

(statearr_24510_24574[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (11))){
var inst_24472 = (state_24497[(2)]);
var state_24497__$1 = (function (){var statearr_24511 = state_24497;
(statearr_24511[(10)] = inst_24472);

return statearr_24511;
})();
var statearr_24512_24575 = state_24497__$1;
(statearr_24512_24575[(2)] = null);

(statearr_24512_24575[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (9))){
var state_24497__$1 = state_24497;
var statearr_24513_24576 = state_24497__$1;
(statearr_24513_24576[(2)] = null);

(statearr_24513_24576[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (5))){
var state_24497__$1 = state_24497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24514_24577 = state_24497__$1;
(statearr_24514_24577[(1)] = (8));

} else {
var statearr_24515_24578 = state_24497__$1;
(statearr_24515_24578[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (14))){
var inst_24475 = (state_24497[(8)]);
var inst_24477 = (state_24497[(11)]);
var inst_24475__$1 = (state_24497[(2)]);
var inst_24476 = (inst_24475__$1 == null);
var inst_24477__$1 = cljs.core.not(inst_24476);
var state_24497__$1 = (function (){var statearr_24516 = state_24497;
(statearr_24516[(8)] = inst_24475__$1);

(statearr_24516[(11)] = inst_24477__$1);

return statearr_24516;
})();
if(inst_24477__$1){
var statearr_24517_24579 = state_24497__$1;
(statearr_24517_24579[(1)] = (15));

} else {
var statearr_24518_24580 = state_24497__$1;
(statearr_24518_24580[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (16))){
var inst_24477 = (state_24497[(11)]);
var state_24497__$1 = state_24497;
var statearr_24519_24581 = state_24497__$1;
(statearr_24519_24581[(2)] = inst_24477);

(statearr_24519_24581[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (10))){
var inst_24469 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24520_24582 = state_24497__$1;
(statearr_24520_24582[(2)] = inst_24469);

(statearr_24520_24582[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (18))){
var inst_24480 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24521_24583 = state_24497__$1;
(statearr_24521_24583[(2)] = inst_24480);

(statearr_24521_24583[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24498 === (8))){
var inst_24466 = cljs.core.async.close_BANG_(to);
var state_24497__$1 = state_24497;
var statearr_24522_24584 = state_24497__$1;
(statearr_24522_24584[(2)] = inst_24466);

(statearr_24522_24584[(1)] = (10));


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
});})(c__23954__auto__,jobs,results,process,async))
;
return ((function (switch__23828__auto__,c__23954__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0 = (function (){
var statearr_24526 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__);

(statearr_24526[(1)] = (1));

return statearr_24526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1 = (function (state_24497){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24497);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24527){if((e24527 instanceof Object)){
var ex__23832__auto__ = e24527;
var statearr_24528_24585 = state_24497;
(statearr_24528_24585[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24497);

return cljs.core.cst$kw$recur;
} else {
throw e24527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24586 = state_24497;
state_24497 = G__24586;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__ = function(state_24497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1.call(this,state_24497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto__,jobs,results,process,async))
})();
var state__23956__auto__ = (function (){var statearr_24529 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto__);

return statearr_24529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto__,jobs,results,process,async))
);

return c__23954__auto__;
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
var args24587 = [];
var len__8739__auto___24590 = arguments.length;
var i__8740__auto___24591 = (0);
while(true){
if((i__8740__auto___24591 < len__8739__auto___24590)){
args24587.push((arguments[i__8740__auto___24591]));

var G__24592 = (i__8740__auto___24591 + (1));
i__8740__auto___24591 = G__24592;
continue;
} else {
}
break;
}

var G__24589 = args24587.length;
switch (G__24589) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24587.length)].join('')));

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
var args24594 = [];
var len__8739__auto___24597 = arguments.length;
var i__8740__auto___24598 = (0);
while(true){
if((i__8740__auto___24598 < len__8739__auto___24597)){
args24594.push((arguments[i__8740__auto___24598]));

var G__24599 = (i__8740__auto___24598 + (1));
i__8740__auto___24598 = G__24599;
continue;
} else {
}
break;
}

var G__24596 = args24594.length;
switch (G__24596) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24594.length)].join('')));

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
var args24601 = [];
var len__8739__auto___24654 = arguments.length;
var i__8740__auto___24655 = (0);
while(true){
if((i__8740__auto___24655 < len__8739__auto___24654)){
args24601.push((arguments[i__8740__auto___24655]));

var G__24656 = (i__8740__auto___24655 + (1));
i__8740__auto___24655 = G__24656;
continue;
} else {
}
break;
}

var G__24603 = args24601.length;
switch (G__24603) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24601.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__23954__auto___24658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___24658,tc,fc){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___24658,tc,fc){
return (function (state_24629){
var state_val_24630 = (state_24629[(1)]);
if((state_val_24630 === (7))){
var inst_24625 = (state_24629[(2)]);
var state_24629__$1 = state_24629;
var statearr_24631_24659 = state_24629__$1;
(statearr_24631_24659[(2)] = inst_24625);

(statearr_24631_24659[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (1))){
var state_24629__$1 = state_24629;
var statearr_24632_24660 = state_24629__$1;
(statearr_24632_24660[(2)] = null);

(statearr_24632_24660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (4))){
var inst_24606 = (state_24629[(7)]);
var inst_24606__$1 = (state_24629[(2)]);
var inst_24607 = (inst_24606__$1 == null);
var state_24629__$1 = (function (){var statearr_24633 = state_24629;
(statearr_24633[(7)] = inst_24606__$1);

return statearr_24633;
})();
if(cljs.core.truth_(inst_24607)){
var statearr_24634_24661 = state_24629__$1;
(statearr_24634_24661[(1)] = (5));

} else {
var statearr_24635_24662 = state_24629__$1;
(statearr_24635_24662[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (13))){
var state_24629__$1 = state_24629;
var statearr_24636_24663 = state_24629__$1;
(statearr_24636_24663[(2)] = null);

(statearr_24636_24663[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (6))){
var inst_24606 = (state_24629[(7)]);
var inst_24612 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24606) : p.call(null,inst_24606));
var state_24629__$1 = state_24629;
if(cljs.core.truth_(inst_24612)){
var statearr_24637_24664 = state_24629__$1;
(statearr_24637_24664[(1)] = (9));

} else {
var statearr_24638_24665 = state_24629__$1;
(statearr_24638_24665[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (3))){
var inst_24627 = (state_24629[(2)]);
var state_24629__$1 = state_24629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24629__$1,inst_24627);
} else {
if((state_val_24630 === (12))){
var state_24629__$1 = state_24629;
var statearr_24639_24666 = state_24629__$1;
(statearr_24639_24666[(2)] = null);

(statearr_24639_24666[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (2))){
var state_24629__$1 = state_24629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24629__$1,(4),ch);
} else {
if((state_val_24630 === (11))){
var inst_24606 = (state_24629[(7)]);
var inst_24616 = (state_24629[(2)]);
var state_24629__$1 = state_24629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24629__$1,(8),inst_24616,inst_24606);
} else {
if((state_val_24630 === (9))){
var state_24629__$1 = state_24629;
var statearr_24640_24667 = state_24629__$1;
(statearr_24640_24667[(2)] = tc);

(statearr_24640_24667[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (5))){
var inst_24609 = cljs.core.async.close_BANG_(tc);
var inst_24610 = cljs.core.async.close_BANG_(fc);
var state_24629__$1 = (function (){var statearr_24641 = state_24629;
(statearr_24641[(8)] = inst_24609);

return statearr_24641;
})();
var statearr_24642_24668 = state_24629__$1;
(statearr_24642_24668[(2)] = inst_24610);

(statearr_24642_24668[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (14))){
var inst_24623 = (state_24629[(2)]);
var state_24629__$1 = state_24629;
var statearr_24643_24669 = state_24629__$1;
(statearr_24643_24669[(2)] = inst_24623);

(statearr_24643_24669[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (10))){
var state_24629__$1 = state_24629;
var statearr_24644_24670 = state_24629__$1;
(statearr_24644_24670[(2)] = fc);

(statearr_24644_24670[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24630 === (8))){
var inst_24618 = (state_24629[(2)]);
var state_24629__$1 = state_24629;
if(cljs.core.truth_(inst_24618)){
var statearr_24645_24671 = state_24629__$1;
(statearr_24645_24671[(1)] = (12));

} else {
var statearr_24646_24672 = state_24629__$1;
(statearr_24646_24672[(1)] = (13));

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
});})(c__23954__auto___24658,tc,fc))
;
return ((function (switch__23828__auto__,c__23954__auto___24658,tc,fc){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_24650 = [null,null,null,null,null,null,null,null,null];
(statearr_24650[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_24650[(1)] = (1));

return statearr_24650;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_24629){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24629);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24651){if((e24651 instanceof Object)){
var ex__23832__auto__ = e24651;
var statearr_24652_24673 = state_24629;
(statearr_24652_24673[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24629);

return cljs.core.cst$kw$recur;
} else {
throw e24651;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24674 = state_24629;
state_24629 = G__24674;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_24629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_24629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___24658,tc,fc))
})();
var state__23956__auto__ = (function (){var statearr_24653 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___24658);

return statearr_24653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___24658,tc,fc))
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
var c__23954__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto__){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto__){
return (function (state_24738){
var state_val_24739 = (state_24738[(1)]);
if((state_val_24739 === (7))){
var inst_24734 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
var statearr_24740_24761 = state_24738__$1;
(statearr_24740_24761[(2)] = inst_24734);

(statearr_24740_24761[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (1))){
var inst_24718 = init;
var state_24738__$1 = (function (){var statearr_24741 = state_24738;
(statearr_24741[(7)] = inst_24718);

return statearr_24741;
})();
var statearr_24742_24762 = state_24738__$1;
(statearr_24742_24762[(2)] = null);

(statearr_24742_24762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (4))){
var inst_24721 = (state_24738[(8)]);
var inst_24721__$1 = (state_24738[(2)]);
var inst_24722 = (inst_24721__$1 == null);
var state_24738__$1 = (function (){var statearr_24743 = state_24738;
(statearr_24743[(8)] = inst_24721__$1);

return statearr_24743;
})();
if(cljs.core.truth_(inst_24722)){
var statearr_24744_24763 = state_24738__$1;
(statearr_24744_24763[(1)] = (5));

} else {
var statearr_24745_24764 = state_24738__$1;
(statearr_24745_24764[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (6))){
var inst_24718 = (state_24738[(7)]);
var inst_24721 = (state_24738[(8)]);
var inst_24725 = (state_24738[(9)]);
var inst_24725__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24718,inst_24721) : f.call(null,inst_24718,inst_24721));
var inst_24726 = cljs.core.reduced_QMARK_(inst_24725__$1);
var state_24738__$1 = (function (){var statearr_24746 = state_24738;
(statearr_24746[(9)] = inst_24725__$1);

return statearr_24746;
})();
if(inst_24726){
var statearr_24747_24765 = state_24738__$1;
(statearr_24747_24765[(1)] = (8));

} else {
var statearr_24748_24766 = state_24738__$1;
(statearr_24748_24766[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (3))){
var inst_24736 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24738__$1,inst_24736);
} else {
if((state_val_24739 === (2))){
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24738__$1,(4),ch);
} else {
if((state_val_24739 === (9))){
var inst_24725 = (state_24738[(9)]);
var inst_24718 = inst_24725;
var state_24738__$1 = (function (){var statearr_24749 = state_24738;
(statearr_24749[(7)] = inst_24718);

return statearr_24749;
})();
var statearr_24750_24767 = state_24738__$1;
(statearr_24750_24767[(2)] = null);

(statearr_24750_24767[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (5))){
var inst_24718 = (state_24738[(7)]);
var state_24738__$1 = state_24738;
var statearr_24751_24768 = state_24738__$1;
(statearr_24751_24768[(2)] = inst_24718);

(statearr_24751_24768[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (10))){
var inst_24732 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
var statearr_24752_24769 = state_24738__$1;
(statearr_24752_24769[(2)] = inst_24732);

(statearr_24752_24769[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24739 === (8))){
var inst_24725 = (state_24738[(9)]);
var inst_24728 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_24725) : cljs.core.deref.call(null,inst_24725));
var state_24738__$1 = state_24738;
var statearr_24753_24770 = state_24738__$1;
(statearr_24753_24770[(2)] = inst_24728);

(statearr_24753_24770[(1)] = (10));


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
});})(c__23954__auto__))
;
return ((function (switch__23828__auto__,c__23954__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23829__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23829__auto____0 = (function (){
var statearr_24757 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24757[(0)] = cljs$core$async$reduce_$_state_machine__23829__auto__);

(statearr_24757[(1)] = (1));

return statearr_24757;
});
var cljs$core$async$reduce_$_state_machine__23829__auto____1 = (function (state_24738){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24738);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24758){if((e24758 instanceof Object)){
var ex__23832__auto__ = e24758;
var statearr_24759_24771 = state_24738;
(statearr_24759_24771[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24738);

return cljs.core.cst$kw$recur;
} else {
throw e24758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24772 = state_24738;
state_24738 = G__24772;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23829__auto__ = function(state_24738){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23829__auto____1.call(this,state_24738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23829__auto____0;
cljs$core$async$reduce_$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23829__auto____1;
return cljs$core$async$reduce_$_state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto__))
})();
var state__23956__auto__ = (function (){var statearr_24760 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto__);

return statearr_24760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto__))
);

return c__23954__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23954__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto__,f__$1){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto__,f__$1){
return (function (state_24792){
var state_val_24793 = (state_24792[(1)]);
if((state_val_24793 === (1))){
var inst_24787 = cljs.core.async.reduce(f__$1,init,ch);
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24792__$1,(2),inst_24787);
} else {
if((state_val_24793 === (2))){
var inst_24789 = (state_24792[(2)]);
var inst_24790 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24789) : f__$1.call(null,inst_24789));
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24792__$1,inst_24790);
} else {
return null;
}
}
});})(c__23954__auto__,f__$1))
;
return ((function (switch__23828__auto__,c__23954__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23829__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23829__auto____0 = (function (){
var statearr_24797 = [null,null,null,null,null,null,null];
(statearr_24797[(0)] = cljs$core$async$transduce_$_state_machine__23829__auto__);

(statearr_24797[(1)] = (1));

return statearr_24797;
});
var cljs$core$async$transduce_$_state_machine__23829__auto____1 = (function (state_24792){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24792);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24798){if((e24798 instanceof Object)){
var ex__23832__auto__ = e24798;
var statearr_24799_24801 = state_24792;
(statearr_24799_24801[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24792);

return cljs.core.cst$kw$recur;
} else {
throw e24798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24802 = state_24792;
state_24792 = G__24802;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23829__auto__ = function(state_24792){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23829__auto____1.call(this,state_24792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23829__auto____0;
cljs$core$async$transduce_$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23829__auto____1;
return cljs$core$async$transduce_$_state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto__,f__$1))
})();
var state__23956__auto__ = (function (){var statearr_24800 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto__);

return statearr_24800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto__,f__$1))
);

return c__23954__auto__;
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
var args24803 = [];
var len__8739__auto___24855 = arguments.length;
var i__8740__auto___24856 = (0);
while(true){
if((i__8740__auto___24856 < len__8739__auto___24855)){
args24803.push((arguments[i__8740__auto___24856]));

var G__24857 = (i__8740__auto___24856 + (1));
i__8740__auto___24856 = G__24857;
continue;
} else {
}
break;
}

var G__24805 = args24803.length;
switch (G__24805) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24803.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23954__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto__){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto__){
return (function (state_24830){
var state_val_24831 = (state_24830[(1)]);
if((state_val_24831 === (7))){
var inst_24812 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24832_24859 = state_24830__$1;
(statearr_24832_24859[(2)] = inst_24812);

(statearr_24832_24859[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (1))){
var inst_24806 = cljs.core.seq(coll);
var inst_24807 = inst_24806;
var state_24830__$1 = (function (){var statearr_24833 = state_24830;
(statearr_24833[(7)] = inst_24807);

return statearr_24833;
})();
var statearr_24834_24860 = state_24830__$1;
(statearr_24834_24860[(2)] = null);

(statearr_24834_24860[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (4))){
var inst_24807 = (state_24830[(7)]);
var inst_24810 = cljs.core.first(inst_24807);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24830__$1,(7),ch,inst_24810);
} else {
if((state_val_24831 === (13))){
var inst_24824 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24835_24861 = state_24830__$1;
(statearr_24835_24861[(2)] = inst_24824);

(statearr_24835_24861[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (6))){
var inst_24815 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
if(cljs.core.truth_(inst_24815)){
var statearr_24836_24862 = state_24830__$1;
(statearr_24836_24862[(1)] = (8));

} else {
var statearr_24837_24863 = state_24830__$1;
(statearr_24837_24863[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (3))){
var inst_24828 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24830__$1,inst_24828);
} else {
if((state_val_24831 === (12))){
var state_24830__$1 = state_24830;
var statearr_24838_24864 = state_24830__$1;
(statearr_24838_24864[(2)] = null);

(statearr_24838_24864[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (2))){
var inst_24807 = (state_24830[(7)]);
var state_24830__$1 = state_24830;
if(cljs.core.truth_(inst_24807)){
var statearr_24839_24865 = state_24830__$1;
(statearr_24839_24865[(1)] = (4));

} else {
var statearr_24840_24866 = state_24830__$1;
(statearr_24840_24866[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (11))){
var inst_24821 = cljs.core.async.close_BANG_(ch);
var state_24830__$1 = state_24830;
var statearr_24841_24867 = state_24830__$1;
(statearr_24841_24867[(2)] = inst_24821);

(statearr_24841_24867[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (9))){
var state_24830__$1 = state_24830;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24842_24868 = state_24830__$1;
(statearr_24842_24868[(1)] = (11));

} else {
var statearr_24843_24869 = state_24830__$1;
(statearr_24843_24869[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (5))){
var inst_24807 = (state_24830[(7)]);
var state_24830__$1 = state_24830;
var statearr_24844_24870 = state_24830__$1;
(statearr_24844_24870[(2)] = inst_24807);

(statearr_24844_24870[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (10))){
var inst_24826 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24845_24871 = state_24830__$1;
(statearr_24845_24871[(2)] = inst_24826);

(statearr_24845_24871[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24831 === (8))){
var inst_24807 = (state_24830[(7)]);
var inst_24817 = cljs.core.next(inst_24807);
var inst_24807__$1 = inst_24817;
var state_24830__$1 = (function (){var statearr_24846 = state_24830;
(statearr_24846[(7)] = inst_24807__$1);

return statearr_24846;
})();
var statearr_24847_24872 = state_24830__$1;
(statearr_24847_24872[(2)] = null);

(statearr_24847_24872[(1)] = (2));


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
});})(c__23954__auto__))
;
return ((function (switch__23828__auto__,c__23954__auto__){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_24851 = [null,null,null,null,null,null,null,null];
(statearr_24851[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_24851[(1)] = (1));

return statearr_24851;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_24830){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_24830);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e24852){if((e24852 instanceof Object)){
var ex__23832__auto__ = e24852;
var statearr_24853_24873 = state_24830;
(statearr_24853_24873[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24830);

return cljs.core.cst$kw$recur;
} else {
throw e24852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__24874 = state_24830;
state_24830 = G__24874;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_24830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_24830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto__))
})();
var state__23956__auto__ = (function (){var statearr_24854 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_24854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto__);

return statearr_24854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto__))
);

return c__23954__auto__;
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
var cs = (function (){var G__25103 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25103) : cljs.core.atom.call(null,G__25103));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25104 = (function (ch,cs,meta25105){
this.ch = ch;
this.cs = cs;
this.meta25105 = meta25105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25106,meta25105__$1){
var self__ = this;
var _25106__$1 = this;
return (new cljs.core.async.t_cljs$core$async25104(self__.ch,self__.cs,meta25105__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25106){
var self__ = this;
var _25106__$1 = this;
return self__.meta25105;
});})(cs))
;


cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async25104.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25107_25331 = self__.cs;
var G__25108_25332 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25107_25331,G__25108_25332) : cljs.core.reset_BANG_.call(null,G__25107_25331,G__25108_25332));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25104.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25105], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25104";

cljs.core.async.t_cljs$core$async25104.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25104");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25104 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25104(ch__$1,cs__$1,meta25105){
return (new cljs.core.async.t_cljs$core$async25104(ch__$1,cs__$1,meta25105));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25104(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23954__auto___25333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___25333,cs,m,dchan,dctr,done){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___25333,cs,m,dchan,dctr,done){
return (function (state_25243){
var state_val_25244 = (state_25243[(1)]);
if((state_val_25244 === (7))){
var inst_25239 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25245_25334 = state_25243__$1;
(statearr_25245_25334[(2)] = inst_25239);

(statearr_25245_25334[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (20))){
var inst_25142 = (state_25243[(7)]);
var inst_25154 = cljs.core.first(inst_25142);
var inst_25155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25154,(0),null);
var inst_25156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25154,(1),null);
var state_25243__$1 = (function (){var statearr_25246 = state_25243;
(statearr_25246[(8)] = inst_25155);

return statearr_25246;
})();
if(cljs.core.truth_(inst_25156)){
var statearr_25247_25335 = state_25243__$1;
(statearr_25247_25335[(1)] = (22));

} else {
var statearr_25248_25336 = state_25243__$1;
(statearr_25248_25336[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (27))){
var inst_25186 = (state_25243[(9)]);
var inst_25184 = (state_25243[(10)]);
var inst_25191 = (state_25243[(11)]);
var inst_25111 = (state_25243[(12)]);
var inst_25191__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25184,inst_25186);
var inst_25192 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25191__$1,inst_25111,done);
var state_25243__$1 = (function (){var statearr_25249 = state_25243;
(statearr_25249[(11)] = inst_25191__$1);

return statearr_25249;
})();
if(cljs.core.truth_(inst_25192)){
var statearr_25250_25337 = state_25243__$1;
(statearr_25250_25337[(1)] = (30));

} else {
var statearr_25251_25338 = state_25243__$1;
(statearr_25251_25338[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (1))){
var state_25243__$1 = state_25243;
var statearr_25252_25339 = state_25243__$1;
(statearr_25252_25339[(2)] = null);

(statearr_25252_25339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (24))){
var inst_25142 = (state_25243[(7)]);
var inst_25161 = (state_25243[(2)]);
var inst_25162 = cljs.core.next(inst_25142);
var inst_25120 = inst_25162;
var inst_25121 = null;
var inst_25122 = (0);
var inst_25123 = (0);
var state_25243__$1 = (function (){var statearr_25253 = state_25243;
(statearr_25253[(13)] = inst_25121);

(statearr_25253[(14)] = inst_25123);

(statearr_25253[(15)] = inst_25122);

(statearr_25253[(16)] = inst_25120);

(statearr_25253[(17)] = inst_25161);

return statearr_25253;
})();
var statearr_25254_25340 = state_25243__$1;
(statearr_25254_25340[(2)] = null);

(statearr_25254_25340[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (39))){
var state_25243__$1 = state_25243;
var statearr_25258_25341 = state_25243__$1;
(statearr_25258_25341[(2)] = null);

(statearr_25258_25341[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (4))){
var inst_25111 = (state_25243[(12)]);
var inst_25111__$1 = (state_25243[(2)]);
var inst_25112 = (inst_25111__$1 == null);
var state_25243__$1 = (function (){var statearr_25259 = state_25243;
(statearr_25259[(12)] = inst_25111__$1);

return statearr_25259;
})();
if(cljs.core.truth_(inst_25112)){
var statearr_25260_25342 = state_25243__$1;
(statearr_25260_25342[(1)] = (5));

} else {
var statearr_25261_25343 = state_25243__$1;
(statearr_25261_25343[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (15))){
var inst_25121 = (state_25243[(13)]);
var inst_25123 = (state_25243[(14)]);
var inst_25122 = (state_25243[(15)]);
var inst_25120 = (state_25243[(16)]);
var inst_25138 = (state_25243[(2)]);
var inst_25139 = (inst_25123 + (1));
var tmp25255 = inst_25121;
var tmp25256 = inst_25122;
var tmp25257 = inst_25120;
var inst_25120__$1 = tmp25257;
var inst_25121__$1 = tmp25255;
var inst_25122__$1 = tmp25256;
var inst_25123__$1 = inst_25139;
var state_25243__$1 = (function (){var statearr_25262 = state_25243;
(statearr_25262[(13)] = inst_25121__$1);

(statearr_25262[(18)] = inst_25138);

(statearr_25262[(14)] = inst_25123__$1);

(statearr_25262[(15)] = inst_25122__$1);

(statearr_25262[(16)] = inst_25120__$1);

return statearr_25262;
})();
var statearr_25263_25344 = state_25243__$1;
(statearr_25263_25344[(2)] = null);

(statearr_25263_25344[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (21))){
var inst_25165 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25267_25345 = state_25243__$1;
(statearr_25267_25345[(2)] = inst_25165);

(statearr_25267_25345[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (31))){
var inst_25191 = (state_25243[(11)]);
var inst_25195 = done(null);
var inst_25196 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25191);
var state_25243__$1 = (function (){var statearr_25268 = state_25243;
(statearr_25268[(19)] = inst_25195);

return statearr_25268;
})();
var statearr_25269_25346 = state_25243__$1;
(statearr_25269_25346[(2)] = inst_25196);

(statearr_25269_25346[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (32))){
var inst_25186 = (state_25243[(9)]);
var inst_25184 = (state_25243[(10)]);
var inst_25183 = (state_25243[(20)]);
var inst_25185 = (state_25243[(21)]);
var inst_25198 = (state_25243[(2)]);
var inst_25199 = (inst_25186 + (1));
var tmp25264 = inst_25184;
var tmp25265 = inst_25183;
var tmp25266 = inst_25185;
var inst_25183__$1 = tmp25265;
var inst_25184__$1 = tmp25264;
var inst_25185__$1 = tmp25266;
var inst_25186__$1 = inst_25199;
var state_25243__$1 = (function (){var statearr_25270 = state_25243;
(statearr_25270[(9)] = inst_25186__$1);

(statearr_25270[(10)] = inst_25184__$1);

(statearr_25270[(20)] = inst_25183__$1);

(statearr_25270[(21)] = inst_25185__$1);

(statearr_25270[(22)] = inst_25198);

return statearr_25270;
})();
var statearr_25271_25347 = state_25243__$1;
(statearr_25271_25347[(2)] = null);

(statearr_25271_25347[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (40))){
var inst_25211 = (state_25243[(23)]);
var inst_25215 = done(null);
var inst_25216 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25211);
var state_25243__$1 = (function (){var statearr_25272 = state_25243;
(statearr_25272[(24)] = inst_25215);

return statearr_25272;
})();
var statearr_25273_25348 = state_25243__$1;
(statearr_25273_25348[(2)] = inst_25216);

(statearr_25273_25348[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (33))){
var inst_25202 = (state_25243[(25)]);
var inst_25204 = cljs.core.chunked_seq_QMARK_(inst_25202);
var state_25243__$1 = state_25243;
if(inst_25204){
var statearr_25274_25349 = state_25243__$1;
(statearr_25274_25349[(1)] = (36));

} else {
var statearr_25275_25350 = state_25243__$1;
(statearr_25275_25350[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (13))){
var inst_25132 = (state_25243[(26)]);
var inst_25135 = cljs.core.async.close_BANG_(inst_25132);
var state_25243__$1 = state_25243;
var statearr_25276_25351 = state_25243__$1;
(statearr_25276_25351[(2)] = inst_25135);

(statearr_25276_25351[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (22))){
var inst_25155 = (state_25243[(8)]);
var inst_25158 = cljs.core.async.close_BANG_(inst_25155);
var state_25243__$1 = state_25243;
var statearr_25277_25352 = state_25243__$1;
(statearr_25277_25352[(2)] = inst_25158);

(statearr_25277_25352[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (36))){
var inst_25202 = (state_25243[(25)]);
var inst_25206 = cljs.core.chunk_first(inst_25202);
var inst_25207 = cljs.core.chunk_rest(inst_25202);
var inst_25208 = cljs.core.count(inst_25206);
var inst_25183 = inst_25207;
var inst_25184 = inst_25206;
var inst_25185 = inst_25208;
var inst_25186 = (0);
var state_25243__$1 = (function (){var statearr_25278 = state_25243;
(statearr_25278[(9)] = inst_25186);

(statearr_25278[(10)] = inst_25184);

(statearr_25278[(20)] = inst_25183);

(statearr_25278[(21)] = inst_25185);

return statearr_25278;
})();
var statearr_25279_25353 = state_25243__$1;
(statearr_25279_25353[(2)] = null);

(statearr_25279_25353[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (41))){
var inst_25202 = (state_25243[(25)]);
var inst_25218 = (state_25243[(2)]);
var inst_25219 = cljs.core.next(inst_25202);
var inst_25183 = inst_25219;
var inst_25184 = null;
var inst_25185 = (0);
var inst_25186 = (0);
var state_25243__$1 = (function (){var statearr_25280 = state_25243;
(statearr_25280[(9)] = inst_25186);

(statearr_25280[(10)] = inst_25184);

(statearr_25280[(20)] = inst_25183);

(statearr_25280[(21)] = inst_25185);

(statearr_25280[(27)] = inst_25218);

return statearr_25280;
})();
var statearr_25281_25354 = state_25243__$1;
(statearr_25281_25354[(2)] = null);

(statearr_25281_25354[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (43))){
var state_25243__$1 = state_25243;
var statearr_25282_25355 = state_25243__$1;
(statearr_25282_25355[(2)] = null);

(statearr_25282_25355[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (29))){
var inst_25227 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25283_25356 = state_25243__$1;
(statearr_25283_25356[(2)] = inst_25227);

(statearr_25283_25356[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (44))){
var inst_25236 = (state_25243[(2)]);
var state_25243__$1 = (function (){var statearr_25284 = state_25243;
(statearr_25284[(28)] = inst_25236);

return statearr_25284;
})();
var statearr_25285_25357 = state_25243__$1;
(statearr_25285_25357[(2)] = null);

(statearr_25285_25357[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (6))){
var inst_25175 = (state_25243[(29)]);
var inst_25174 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25175__$1 = cljs.core.keys(inst_25174);
var inst_25176 = cljs.core.count(inst_25175__$1);
var inst_25177 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_25176) : cljs.core.reset_BANG_.call(null,dctr,inst_25176));
var inst_25182 = cljs.core.seq(inst_25175__$1);
var inst_25183 = inst_25182;
var inst_25184 = null;
var inst_25185 = (0);
var inst_25186 = (0);
var state_25243__$1 = (function (){var statearr_25286 = state_25243;
(statearr_25286[(9)] = inst_25186);

(statearr_25286[(10)] = inst_25184);

(statearr_25286[(29)] = inst_25175__$1);

(statearr_25286[(20)] = inst_25183);

(statearr_25286[(30)] = inst_25177);

(statearr_25286[(21)] = inst_25185);

return statearr_25286;
})();
var statearr_25287_25358 = state_25243__$1;
(statearr_25287_25358[(2)] = null);

(statearr_25287_25358[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (28))){
var inst_25183 = (state_25243[(20)]);
var inst_25202 = (state_25243[(25)]);
var inst_25202__$1 = cljs.core.seq(inst_25183);
var state_25243__$1 = (function (){var statearr_25288 = state_25243;
(statearr_25288[(25)] = inst_25202__$1);

return statearr_25288;
})();
if(inst_25202__$1){
var statearr_25289_25359 = state_25243__$1;
(statearr_25289_25359[(1)] = (33));

} else {
var statearr_25290_25360 = state_25243__$1;
(statearr_25290_25360[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (25))){
var inst_25186 = (state_25243[(9)]);
var inst_25185 = (state_25243[(21)]);
var inst_25188 = (inst_25186 < inst_25185);
var inst_25189 = inst_25188;
var state_25243__$1 = state_25243;
if(cljs.core.truth_(inst_25189)){
var statearr_25291_25361 = state_25243__$1;
(statearr_25291_25361[(1)] = (27));

} else {
var statearr_25292_25362 = state_25243__$1;
(statearr_25292_25362[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (34))){
var state_25243__$1 = state_25243;
var statearr_25293_25363 = state_25243__$1;
(statearr_25293_25363[(2)] = null);

(statearr_25293_25363[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (17))){
var state_25243__$1 = state_25243;
var statearr_25294_25364 = state_25243__$1;
(statearr_25294_25364[(2)] = null);

(statearr_25294_25364[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (3))){
var inst_25241 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25243__$1,inst_25241);
} else {
if((state_val_25244 === (12))){
var inst_25170 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25295_25365 = state_25243__$1;
(statearr_25295_25365[(2)] = inst_25170);

(statearr_25295_25365[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (2))){
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25243__$1,(4),ch);
} else {
if((state_val_25244 === (23))){
var state_25243__$1 = state_25243;
var statearr_25296_25366 = state_25243__$1;
(statearr_25296_25366[(2)] = null);

(statearr_25296_25366[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (35))){
var inst_25225 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25297_25367 = state_25243__$1;
(statearr_25297_25367[(2)] = inst_25225);

(statearr_25297_25367[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (19))){
var inst_25142 = (state_25243[(7)]);
var inst_25146 = cljs.core.chunk_first(inst_25142);
var inst_25147 = cljs.core.chunk_rest(inst_25142);
var inst_25148 = cljs.core.count(inst_25146);
var inst_25120 = inst_25147;
var inst_25121 = inst_25146;
var inst_25122 = inst_25148;
var inst_25123 = (0);
var state_25243__$1 = (function (){var statearr_25298 = state_25243;
(statearr_25298[(13)] = inst_25121);

(statearr_25298[(14)] = inst_25123);

(statearr_25298[(15)] = inst_25122);

(statearr_25298[(16)] = inst_25120);

return statearr_25298;
})();
var statearr_25299_25368 = state_25243__$1;
(statearr_25299_25368[(2)] = null);

(statearr_25299_25368[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (11))){
var inst_25142 = (state_25243[(7)]);
var inst_25120 = (state_25243[(16)]);
var inst_25142__$1 = cljs.core.seq(inst_25120);
var state_25243__$1 = (function (){var statearr_25300 = state_25243;
(statearr_25300[(7)] = inst_25142__$1);

return statearr_25300;
})();
if(inst_25142__$1){
var statearr_25301_25369 = state_25243__$1;
(statearr_25301_25369[(1)] = (16));

} else {
var statearr_25302_25370 = state_25243__$1;
(statearr_25302_25370[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (9))){
var inst_25172 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25303_25371 = state_25243__$1;
(statearr_25303_25371[(2)] = inst_25172);

(statearr_25303_25371[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (5))){
var inst_25118 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_25119 = cljs.core.seq(inst_25118);
var inst_25120 = inst_25119;
var inst_25121 = null;
var inst_25122 = (0);
var inst_25123 = (0);
var state_25243__$1 = (function (){var statearr_25304 = state_25243;
(statearr_25304[(13)] = inst_25121);

(statearr_25304[(14)] = inst_25123);

(statearr_25304[(15)] = inst_25122);

(statearr_25304[(16)] = inst_25120);

return statearr_25304;
})();
var statearr_25305_25372 = state_25243__$1;
(statearr_25305_25372[(2)] = null);

(statearr_25305_25372[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (14))){
var state_25243__$1 = state_25243;
var statearr_25306_25373 = state_25243__$1;
(statearr_25306_25373[(2)] = null);

(statearr_25306_25373[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (45))){
var inst_25233 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25307_25374 = state_25243__$1;
(statearr_25307_25374[(2)] = inst_25233);

(statearr_25307_25374[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (26))){
var inst_25175 = (state_25243[(29)]);
var inst_25229 = (state_25243[(2)]);
var inst_25230 = cljs.core.seq(inst_25175);
var state_25243__$1 = (function (){var statearr_25308 = state_25243;
(statearr_25308[(31)] = inst_25229);

return statearr_25308;
})();
if(inst_25230){
var statearr_25309_25375 = state_25243__$1;
(statearr_25309_25375[(1)] = (42));

} else {
var statearr_25310_25376 = state_25243__$1;
(statearr_25310_25376[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (16))){
var inst_25142 = (state_25243[(7)]);
var inst_25144 = cljs.core.chunked_seq_QMARK_(inst_25142);
var state_25243__$1 = state_25243;
if(inst_25144){
var statearr_25311_25377 = state_25243__$1;
(statearr_25311_25377[(1)] = (19));

} else {
var statearr_25312_25378 = state_25243__$1;
(statearr_25312_25378[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (38))){
var inst_25222 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25313_25379 = state_25243__$1;
(statearr_25313_25379[(2)] = inst_25222);

(statearr_25313_25379[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (30))){
var state_25243__$1 = state_25243;
var statearr_25314_25380 = state_25243__$1;
(statearr_25314_25380[(2)] = null);

(statearr_25314_25380[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (10))){
var inst_25121 = (state_25243[(13)]);
var inst_25123 = (state_25243[(14)]);
var inst_25131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25121,inst_25123);
var inst_25132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25131,(0),null);
var inst_25133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25131,(1),null);
var state_25243__$1 = (function (){var statearr_25315 = state_25243;
(statearr_25315[(26)] = inst_25132);

return statearr_25315;
})();
if(cljs.core.truth_(inst_25133)){
var statearr_25316_25381 = state_25243__$1;
(statearr_25316_25381[(1)] = (13));

} else {
var statearr_25317_25382 = state_25243__$1;
(statearr_25317_25382[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (18))){
var inst_25168 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25318_25383 = state_25243__$1;
(statearr_25318_25383[(2)] = inst_25168);

(statearr_25318_25383[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (42))){
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25243__$1,(45),dchan);
} else {
if((state_val_25244 === (37))){
var inst_25211 = (state_25243[(23)]);
var inst_25202 = (state_25243[(25)]);
var inst_25111 = (state_25243[(12)]);
var inst_25211__$1 = cljs.core.first(inst_25202);
var inst_25212 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25211__$1,inst_25111,done);
var state_25243__$1 = (function (){var statearr_25319 = state_25243;
(statearr_25319[(23)] = inst_25211__$1);

return statearr_25319;
})();
if(cljs.core.truth_(inst_25212)){
var statearr_25320_25384 = state_25243__$1;
(statearr_25320_25384[(1)] = (39));

} else {
var statearr_25321_25385 = state_25243__$1;
(statearr_25321_25385[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25244 === (8))){
var inst_25123 = (state_25243[(14)]);
var inst_25122 = (state_25243[(15)]);
var inst_25125 = (inst_25123 < inst_25122);
var inst_25126 = inst_25125;
var state_25243__$1 = state_25243;
if(cljs.core.truth_(inst_25126)){
var statearr_25322_25386 = state_25243__$1;
(statearr_25322_25386[(1)] = (10));

} else {
var statearr_25323_25387 = state_25243__$1;
(statearr_25323_25387[(1)] = (11));

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
});})(c__23954__auto___25333,cs,m,dchan,dctr,done))
;
return ((function (switch__23828__auto__,c__23954__auto___25333,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23829__auto__ = null;
var cljs$core$async$mult_$_state_machine__23829__auto____0 = (function (){
var statearr_25327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25327[(0)] = cljs$core$async$mult_$_state_machine__23829__auto__);

(statearr_25327[(1)] = (1));

return statearr_25327;
});
var cljs$core$async$mult_$_state_machine__23829__auto____1 = (function (state_25243){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_25243);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e25328){if((e25328 instanceof Object)){
var ex__23832__auto__ = e25328;
var statearr_25329_25388 = state_25243;
(statearr_25329_25388[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25243);

return cljs.core.cst$kw$recur;
} else {
throw e25328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__25389 = state_25243;
state_25243 = G__25389;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23829__auto__ = function(state_25243){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23829__auto____1.call(this,state_25243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23829__auto____0;
cljs$core$async$mult_$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23829__auto____1;
return cljs$core$async$mult_$_state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___25333,cs,m,dchan,dctr,done))
})();
var state__23956__auto__ = (function (){var statearr_25330 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_25330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___25333);

return statearr_25330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___25333,cs,m,dchan,dctr,done))
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
var args25390 = [];
var len__8739__auto___25393 = arguments.length;
var i__8740__auto___25394 = (0);
while(true){
if((i__8740__auto___25394 < len__8739__auto___25393)){
args25390.push((arguments[i__8740__auto___25394]));

var G__25395 = (i__8740__auto___25394 + (1));
i__8740__auto___25394 = G__25395;
continue;
} else {
}
break;
}

var G__25392 = args25390.length;
switch (G__25392) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25390.length)].join('')));

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
var len__8739__auto___25407 = arguments.length;
var i__8740__auto___25408 = (0);
while(true){
if((i__8740__auto___25408 < len__8739__auto___25407)){
args__8746__auto__.push((arguments[i__8740__auto___25408]));

var G__25409 = (i__8740__auto___25408 + (1));
i__8740__auto___25408 = G__25409;
continue;
} else {
}
break;
}

var argseq__8747__auto__ = ((((3) < args__8746__auto__.length))?(new cljs.core.IndexedSeq(args__8746__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8747__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25401){
var map__25402 = p__25401;
var map__25402__$1 = ((((!((map__25402 == null)))?((((map__25402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25402):map__25402);
var opts = map__25402__$1;
var statearr_25404_25410 = state;
(statearr_25404_25410[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__25402,map__25402__$1,opts){
return (function (val){
var statearr_25405_25411 = state;
(statearr_25405_25411[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25402,map__25402__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_25406_25412 = state;
(statearr_25406_25412[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25397){
var G__25398 = cljs.core.first(seq25397);
var seq25397__$1 = cljs.core.next(seq25397);
var G__25399 = cljs.core.first(seq25397__$1);
var seq25397__$2 = cljs.core.next(seq25397__$1);
var G__25400 = cljs.core.first(seq25397__$2);
var seq25397__$3 = cljs.core.next(seq25397__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25398,G__25399,G__25400,seq25397__$3);
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
var cs = (function (){var G__25584 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25584) : cljs.core.atom.call(null,G__25584));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__25585 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25585) : cljs.core.atom.call(null,G__25585));
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
if(typeof cljs.core.async.t_cljs$core$async25586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25586 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25587){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25587 = meta25587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25588,meta25587__$1){
var self__ = this;
var _25588__$1 = this;
return (new cljs.core.async.t_cljs$core$async25586(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25587__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25588){
var self__ = this;
var _25588__$1 = this;
return self__.meta25587;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25589_25755 = self__.cs;
var G__25590_25756 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25589_25755,G__25590_25756) : cljs.core.reset_BANG_.call(null,G__25589_25755,G__25590_25756));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async25586.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25586.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta25587], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25586";

cljs.core.async.t_cljs$core$async25586.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25586");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25586 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25586(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25587){
return (new cljs.core.async.t_cljs$core$async25586(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25587));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25586(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23954__auto___25757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___25757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___25757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25692){
var state_val_25693 = (state_25692[(1)]);
if((state_val_25693 === (7))){
var inst_25607 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25694_25758 = state_25692__$1;
(statearr_25694_25758[(2)] = inst_25607);

(statearr_25694_25758[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (20))){
var inst_25619 = (state_25692[(7)]);
var state_25692__$1 = state_25692;
var statearr_25695_25759 = state_25692__$1;
(statearr_25695_25759[(2)] = inst_25619);

(statearr_25695_25759[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (27))){
var state_25692__$1 = state_25692;
var statearr_25696_25760 = state_25692__$1;
(statearr_25696_25760[(2)] = null);

(statearr_25696_25760[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (1))){
var inst_25594 = (state_25692[(8)]);
var inst_25594__$1 = calc_state();
var inst_25596 = (inst_25594__$1 == null);
var inst_25597 = cljs.core.not(inst_25596);
var state_25692__$1 = (function (){var statearr_25697 = state_25692;
(statearr_25697[(8)] = inst_25594__$1);

return statearr_25697;
})();
if(inst_25597){
var statearr_25698_25761 = state_25692__$1;
(statearr_25698_25761[(1)] = (2));

} else {
var statearr_25699_25762 = state_25692__$1;
(statearr_25699_25762[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (24))){
var inst_25643 = (state_25692[(9)]);
var inst_25652 = (state_25692[(10)]);
var inst_25666 = (state_25692[(11)]);
var inst_25666__$1 = (inst_25643.cljs$core$IFn$_invoke$arity$1 ? inst_25643.cljs$core$IFn$_invoke$arity$1(inst_25652) : inst_25643.call(null,inst_25652));
var state_25692__$1 = (function (){var statearr_25700 = state_25692;
(statearr_25700[(11)] = inst_25666__$1);

return statearr_25700;
})();
if(cljs.core.truth_(inst_25666__$1)){
var statearr_25701_25763 = state_25692__$1;
(statearr_25701_25763[(1)] = (29));

} else {
var statearr_25702_25764 = state_25692__$1;
(statearr_25702_25764[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (4))){
var inst_25610 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25610)){
var statearr_25703_25765 = state_25692__$1;
(statearr_25703_25765[(1)] = (8));

} else {
var statearr_25704_25766 = state_25692__$1;
(statearr_25704_25766[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (15))){
var inst_25637 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25637)){
var statearr_25705_25767 = state_25692__$1;
(statearr_25705_25767[(1)] = (19));

} else {
var statearr_25706_25768 = state_25692__$1;
(statearr_25706_25768[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (21))){
var inst_25642 = (state_25692[(12)]);
var inst_25642__$1 = (state_25692[(2)]);
var inst_25643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25642__$1,cljs.core.cst$kw$solos);
var inst_25644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25642__$1,cljs.core.cst$kw$mutes);
var inst_25645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25642__$1,cljs.core.cst$kw$reads);
var state_25692__$1 = (function (){var statearr_25707 = state_25692;
(statearr_25707[(13)] = inst_25644);

(statearr_25707[(9)] = inst_25643);

(statearr_25707[(12)] = inst_25642__$1);

return statearr_25707;
})();
return cljs.core.async.ioc_alts_BANG_(state_25692__$1,(22),inst_25645);
} else {
if((state_val_25693 === (31))){
var inst_25674 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25674)){
var statearr_25708_25769 = state_25692__$1;
(statearr_25708_25769[(1)] = (32));

} else {
var statearr_25709_25770 = state_25692__$1;
(statearr_25709_25770[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (32))){
var inst_25651 = (state_25692[(14)]);
var state_25692__$1 = state_25692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25692__$1,(35),out,inst_25651);
} else {
if((state_val_25693 === (33))){
var inst_25642 = (state_25692[(12)]);
var inst_25619 = inst_25642;
var state_25692__$1 = (function (){var statearr_25710 = state_25692;
(statearr_25710[(7)] = inst_25619);

return statearr_25710;
})();
var statearr_25711_25771 = state_25692__$1;
(statearr_25711_25771[(2)] = null);

(statearr_25711_25771[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (13))){
var inst_25619 = (state_25692[(7)]);
var inst_25626 = inst_25619.cljs$lang$protocol_mask$partition0$;
var inst_25627 = (inst_25626 & (64));
var inst_25628 = inst_25619.cljs$core$ISeq$;
var inst_25629 = (cljs.core.PROTOCOL_SENTINEL === inst_25628);
var inst_25630 = (inst_25627) || (inst_25629);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25630)){
var statearr_25712_25772 = state_25692__$1;
(statearr_25712_25772[(1)] = (16));

} else {
var statearr_25713_25773 = state_25692__$1;
(statearr_25713_25773[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (22))){
var inst_25651 = (state_25692[(14)]);
var inst_25652 = (state_25692[(10)]);
var inst_25650 = (state_25692[(2)]);
var inst_25651__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25650,(0),null);
var inst_25652__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25650,(1),null);
var inst_25653 = (inst_25651__$1 == null);
var inst_25654 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25652__$1,change);
var inst_25655 = (inst_25653) || (inst_25654);
var state_25692__$1 = (function (){var statearr_25714 = state_25692;
(statearr_25714[(14)] = inst_25651__$1);

(statearr_25714[(10)] = inst_25652__$1);

return statearr_25714;
})();
if(cljs.core.truth_(inst_25655)){
var statearr_25715_25774 = state_25692__$1;
(statearr_25715_25774[(1)] = (23));

} else {
var statearr_25716_25775 = state_25692__$1;
(statearr_25716_25775[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (36))){
var inst_25642 = (state_25692[(12)]);
var inst_25619 = inst_25642;
var state_25692__$1 = (function (){var statearr_25717 = state_25692;
(statearr_25717[(7)] = inst_25619);

return statearr_25717;
})();
var statearr_25718_25776 = state_25692__$1;
(statearr_25718_25776[(2)] = null);

(statearr_25718_25776[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (29))){
var inst_25666 = (state_25692[(11)]);
var state_25692__$1 = state_25692;
var statearr_25719_25777 = state_25692__$1;
(statearr_25719_25777[(2)] = inst_25666);

(statearr_25719_25777[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (6))){
var state_25692__$1 = state_25692;
var statearr_25720_25778 = state_25692__$1;
(statearr_25720_25778[(2)] = false);

(statearr_25720_25778[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (28))){
var inst_25662 = (state_25692[(2)]);
var inst_25663 = calc_state();
var inst_25619 = inst_25663;
var state_25692__$1 = (function (){var statearr_25721 = state_25692;
(statearr_25721[(15)] = inst_25662);

(statearr_25721[(7)] = inst_25619);

return statearr_25721;
})();
var statearr_25722_25779 = state_25692__$1;
(statearr_25722_25779[(2)] = null);

(statearr_25722_25779[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (25))){
var inst_25688 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25723_25780 = state_25692__$1;
(statearr_25723_25780[(2)] = inst_25688);

(statearr_25723_25780[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (34))){
var inst_25686 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25724_25781 = state_25692__$1;
(statearr_25724_25781[(2)] = inst_25686);

(statearr_25724_25781[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (17))){
var state_25692__$1 = state_25692;
var statearr_25725_25782 = state_25692__$1;
(statearr_25725_25782[(2)] = false);

(statearr_25725_25782[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (3))){
var state_25692__$1 = state_25692;
var statearr_25726_25783 = state_25692__$1;
(statearr_25726_25783[(2)] = false);

(statearr_25726_25783[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (12))){
var inst_25690 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25692__$1,inst_25690);
} else {
if((state_val_25693 === (2))){
var inst_25594 = (state_25692[(8)]);
var inst_25599 = inst_25594.cljs$lang$protocol_mask$partition0$;
var inst_25600 = (inst_25599 & (64));
var inst_25601 = inst_25594.cljs$core$ISeq$;
var inst_25602 = (cljs.core.PROTOCOL_SENTINEL === inst_25601);
var inst_25603 = (inst_25600) || (inst_25602);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25603)){
var statearr_25727_25784 = state_25692__$1;
(statearr_25727_25784[(1)] = (5));

} else {
var statearr_25728_25785 = state_25692__$1;
(statearr_25728_25785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (23))){
var inst_25651 = (state_25692[(14)]);
var inst_25657 = (inst_25651 == null);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25657)){
var statearr_25729_25786 = state_25692__$1;
(statearr_25729_25786[(1)] = (26));

} else {
var statearr_25730_25787 = state_25692__$1;
(statearr_25730_25787[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (35))){
var inst_25677 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25677)){
var statearr_25731_25788 = state_25692__$1;
(statearr_25731_25788[(1)] = (36));

} else {
var statearr_25732_25789 = state_25692__$1;
(statearr_25732_25789[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (19))){
var inst_25619 = (state_25692[(7)]);
var inst_25639 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25619);
var state_25692__$1 = state_25692;
var statearr_25733_25790 = state_25692__$1;
(statearr_25733_25790[(2)] = inst_25639);

(statearr_25733_25790[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (11))){
var inst_25619 = (state_25692[(7)]);
var inst_25623 = (inst_25619 == null);
var inst_25624 = cljs.core.not(inst_25623);
var state_25692__$1 = state_25692;
if(inst_25624){
var statearr_25734_25791 = state_25692__$1;
(statearr_25734_25791[(1)] = (13));

} else {
var statearr_25735_25792 = state_25692__$1;
(statearr_25735_25792[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (9))){
var inst_25594 = (state_25692[(8)]);
var state_25692__$1 = state_25692;
var statearr_25736_25793 = state_25692__$1;
(statearr_25736_25793[(2)] = inst_25594);

(statearr_25736_25793[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (5))){
var state_25692__$1 = state_25692;
var statearr_25737_25794 = state_25692__$1;
(statearr_25737_25794[(2)] = true);

(statearr_25737_25794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (14))){
var state_25692__$1 = state_25692;
var statearr_25738_25795 = state_25692__$1;
(statearr_25738_25795[(2)] = false);

(statearr_25738_25795[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (26))){
var inst_25652 = (state_25692[(10)]);
var inst_25659 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25652);
var state_25692__$1 = state_25692;
var statearr_25739_25796 = state_25692__$1;
(statearr_25739_25796[(2)] = inst_25659);

(statearr_25739_25796[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (16))){
var state_25692__$1 = state_25692;
var statearr_25740_25797 = state_25692__$1;
(statearr_25740_25797[(2)] = true);

(statearr_25740_25797[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (38))){
var inst_25682 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25741_25798 = state_25692__$1;
(statearr_25741_25798[(2)] = inst_25682);

(statearr_25741_25798[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (30))){
var inst_25644 = (state_25692[(13)]);
var inst_25643 = (state_25692[(9)]);
var inst_25652 = (state_25692[(10)]);
var inst_25669 = cljs.core.empty_QMARK_(inst_25643);
var inst_25670 = (inst_25644.cljs$core$IFn$_invoke$arity$1 ? inst_25644.cljs$core$IFn$_invoke$arity$1(inst_25652) : inst_25644.call(null,inst_25652));
var inst_25671 = cljs.core.not(inst_25670);
var inst_25672 = (inst_25669) && (inst_25671);
var state_25692__$1 = state_25692;
var statearr_25742_25799 = state_25692__$1;
(statearr_25742_25799[(2)] = inst_25672);

(statearr_25742_25799[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (10))){
var inst_25594 = (state_25692[(8)]);
var inst_25615 = (state_25692[(2)]);
var inst_25616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.cst$kw$solos);
var inst_25617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.cst$kw$mutes);
var inst_25618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.cst$kw$reads);
var inst_25619 = inst_25594;
var state_25692__$1 = (function (){var statearr_25743 = state_25692;
(statearr_25743[(16)] = inst_25616);

(statearr_25743[(7)] = inst_25619);

(statearr_25743[(17)] = inst_25618);

(statearr_25743[(18)] = inst_25617);

return statearr_25743;
})();
var statearr_25744_25800 = state_25692__$1;
(statearr_25744_25800[(2)] = null);

(statearr_25744_25800[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (18))){
var inst_25634 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25745_25801 = state_25692__$1;
(statearr_25745_25801[(2)] = inst_25634);

(statearr_25745_25801[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (37))){
var state_25692__$1 = state_25692;
var statearr_25746_25802 = state_25692__$1;
(statearr_25746_25802[(2)] = null);

(statearr_25746_25802[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (8))){
var inst_25594 = (state_25692[(8)]);
var inst_25612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25594);
var state_25692__$1 = state_25692;
var statearr_25747_25803 = state_25692__$1;
(statearr_25747_25803[(2)] = inst_25612);

(statearr_25747_25803[(1)] = (10));


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
});})(c__23954__auto___25757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23828__auto__,c__23954__auto___25757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23829__auto__ = null;
var cljs$core$async$mix_$_state_machine__23829__auto____0 = (function (){
var statearr_25751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25751[(0)] = cljs$core$async$mix_$_state_machine__23829__auto__);

(statearr_25751[(1)] = (1));

return statearr_25751;
});
var cljs$core$async$mix_$_state_machine__23829__auto____1 = (function (state_25692){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_25692);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e25752){if((e25752 instanceof Object)){
var ex__23832__auto__ = e25752;
var statearr_25753_25804 = state_25692;
(statearr_25753_25804[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25692);

return cljs.core.cst$kw$recur;
} else {
throw e25752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__25805 = state_25692;
state_25692 = G__25805;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23829__auto__ = function(state_25692){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23829__auto____1.call(this,state_25692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23829__auto____0;
cljs$core$async$mix_$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23829__auto____1;
return cljs$core$async$mix_$_state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___25757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23956__auto__ = (function (){var statearr_25754 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_25754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___25757);

return statearr_25754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___25757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25806 = [];
var len__8739__auto___25809 = arguments.length;
var i__8740__auto___25810 = (0);
while(true){
if((i__8740__auto___25810 < len__8739__auto___25809)){
args25806.push((arguments[i__8740__auto___25810]));

var G__25811 = (i__8740__auto___25810 + (1));
i__8740__auto___25810 = G__25811;
continue;
} else {
}
break;
}

var G__25808 = args25806.length;
switch (G__25808) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25806.length)].join('')));

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
var args25814 = [];
var len__8739__auto___25942 = arguments.length;
var i__8740__auto___25943 = (0);
while(true){
if((i__8740__auto___25943 < len__8739__auto___25942)){
args25814.push((arguments[i__8740__auto___25943]));

var G__25944 = (i__8740__auto___25943 + (1));
i__8740__auto___25943 = G__25944;
continue;
} else {
}
break;
}

var G__25816 = args25814.length;
switch (G__25816) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25814.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__25817 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25817) : cljs.core.atom.call(null,G__25817));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7523__auto__,mults){
return (function (p1__25813_SHARP_){
if(cljs.core.truth_((p1__25813_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25813_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25813_SHARP_.call(null,topic)))){
return p1__25813_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25813_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7523__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25818 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25819){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25819 = meta25819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25820,meta25819__$1){
var self__ = this;
var _25820__$1 = this;
return (new cljs.core.async.t_cljs$core$async25818(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25819__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25820){
var self__ = this;
var _25820__$1 = this;
return self__.meta25819;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25821 = self__.mults;
var G__25822 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25821,G__25822) : cljs.core.reset_BANG_.call(null,G__25821,G__25822));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async25818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25818.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25819], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25818";

cljs.core.async.t_cljs$core$async25818.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async25818");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25818 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25819){
return (new cljs.core.async.t_cljs$core$async25818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25819));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25818(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23954__auto___25946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___25946,mults,ensure_mult,p){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___25946,mults,ensure_mult,p){
return (function (state_25894){
var state_val_25895 = (state_25894[(1)]);
if((state_val_25895 === (7))){
var inst_25890 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25896_25947 = state_25894__$1;
(statearr_25896_25947[(2)] = inst_25890);

(statearr_25896_25947[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (20))){
var state_25894__$1 = state_25894;
var statearr_25897_25948 = state_25894__$1;
(statearr_25897_25948[(2)] = null);

(statearr_25897_25948[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (1))){
var state_25894__$1 = state_25894;
var statearr_25898_25949 = state_25894__$1;
(statearr_25898_25949[(2)] = null);

(statearr_25898_25949[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (24))){
var inst_25873 = (state_25894[(7)]);
var inst_25882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25873);
var state_25894__$1 = state_25894;
var statearr_25899_25950 = state_25894__$1;
(statearr_25899_25950[(2)] = inst_25882);

(statearr_25899_25950[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (4))){
var inst_25825 = (state_25894[(8)]);
var inst_25825__$1 = (state_25894[(2)]);
var inst_25826 = (inst_25825__$1 == null);
var state_25894__$1 = (function (){var statearr_25900 = state_25894;
(statearr_25900[(8)] = inst_25825__$1);

return statearr_25900;
})();
if(cljs.core.truth_(inst_25826)){
var statearr_25901_25951 = state_25894__$1;
(statearr_25901_25951[(1)] = (5));

} else {
var statearr_25902_25952 = state_25894__$1;
(statearr_25902_25952[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (15))){
var inst_25867 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25903_25953 = state_25894__$1;
(statearr_25903_25953[(2)] = inst_25867);

(statearr_25903_25953[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (21))){
var inst_25887 = (state_25894[(2)]);
var state_25894__$1 = (function (){var statearr_25904 = state_25894;
(statearr_25904[(9)] = inst_25887);

return statearr_25904;
})();
var statearr_25905_25954 = state_25894__$1;
(statearr_25905_25954[(2)] = null);

(statearr_25905_25954[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (13))){
var inst_25849 = (state_25894[(10)]);
var inst_25851 = cljs.core.chunked_seq_QMARK_(inst_25849);
var state_25894__$1 = state_25894;
if(inst_25851){
var statearr_25906_25955 = state_25894__$1;
(statearr_25906_25955[(1)] = (16));

} else {
var statearr_25907_25956 = state_25894__$1;
(statearr_25907_25956[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (22))){
var inst_25879 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25879)){
var statearr_25908_25957 = state_25894__$1;
(statearr_25908_25957[(1)] = (23));

} else {
var statearr_25909_25958 = state_25894__$1;
(statearr_25909_25958[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (6))){
var inst_25875 = (state_25894[(11)]);
var inst_25873 = (state_25894[(7)]);
var inst_25825 = (state_25894[(8)]);
var inst_25873__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25825) : topic_fn.call(null,inst_25825));
var inst_25874 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25875__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25874,inst_25873__$1);
var state_25894__$1 = (function (){var statearr_25910 = state_25894;
(statearr_25910[(11)] = inst_25875__$1);

(statearr_25910[(7)] = inst_25873__$1);

return statearr_25910;
})();
if(cljs.core.truth_(inst_25875__$1)){
var statearr_25911_25959 = state_25894__$1;
(statearr_25911_25959[(1)] = (19));

} else {
var statearr_25912_25960 = state_25894__$1;
(statearr_25912_25960[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (25))){
var inst_25884 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25913_25961 = state_25894__$1;
(statearr_25913_25961[(2)] = inst_25884);

(statearr_25913_25961[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (17))){
var inst_25849 = (state_25894[(10)]);
var inst_25858 = cljs.core.first(inst_25849);
var inst_25859 = cljs.core.async.muxch_STAR_(inst_25858);
var inst_25860 = cljs.core.async.close_BANG_(inst_25859);
var inst_25861 = cljs.core.next(inst_25849);
var inst_25835 = inst_25861;
var inst_25836 = null;
var inst_25837 = (0);
var inst_25838 = (0);
var state_25894__$1 = (function (){var statearr_25914 = state_25894;
(statearr_25914[(12)] = inst_25838);

(statearr_25914[(13)] = inst_25860);

(statearr_25914[(14)] = inst_25836);

(statearr_25914[(15)] = inst_25835);

(statearr_25914[(16)] = inst_25837);

return statearr_25914;
})();
var statearr_25915_25962 = state_25894__$1;
(statearr_25915_25962[(2)] = null);

(statearr_25915_25962[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (3))){
var inst_25892 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25894__$1,inst_25892);
} else {
if((state_val_25895 === (12))){
var inst_25869 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25916_25963 = state_25894__$1;
(statearr_25916_25963[(2)] = inst_25869);

(statearr_25916_25963[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (2))){
var state_25894__$1 = state_25894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25894__$1,(4),ch);
} else {
if((state_val_25895 === (23))){
var state_25894__$1 = state_25894;
var statearr_25917_25964 = state_25894__$1;
(statearr_25917_25964[(2)] = null);

(statearr_25917_25964[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (19))){
var inst_25875 = (state_25894[(11)]);
var inst_25825 = (state_25894[(8)]);
var inst_25877 = cljs.core.async.muxch_STAR_(inst_25875);
var state_25894__$1 = state_25894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25894__$1,(22),inst_25877,inst_25825);
} else {
if((state_val_25895 === (11))){
var inst_25849 = (state_25894[(10)]);
var inst_25835 = (state_25894[(15)]);
var inst_25849__$1 = cljs.core.seq(inst_25835);
var state_25894__$1 = (function (){var statearr_25918 = state_25894;
(statearr_25918[(10)] = inst_25849__$1);

return statearr_25918;
})();
if(inst_25849__$1){
var statearr_25919_25965 = state_25894__$1;
(statearr_25919_25965[(1)] = (13));

} else {
var statearr_25920_25966 = state_25894__$1;
(statearr_25920_25966[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (9))){
var inst_25871 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25921_25967 = state_25894__$1;
(statearr_25921_25967[(2)] = inst_25871);

(statearr_25921_25967[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (5))){
var inst_25832 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25833 = cljs.core.vals(inst_25832);
var inst_25834 = cljs.core.seq(inst_25833);
var inst_25835 = inst_25834;
var inst_25836 = null;
var inst_25837 = (0);
var inst_25838 = (0);
var state_25894__$1 = (function (){var statearr_25922 = state_25894;
(statearr_25922[(12)] = inst_25838);

(statearr_25922[(14)] = inst_25836);

(statearr_25922[(15)] = inst_25835);

(statearr_25922[(16)] = inst_25837);

return statearr_25922;
})();
var statearr_25923_25968 = state_25894__$1;
(statearr_25923_25968[(2)] = null);

(statearr_25923_25968[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (14))){
var state_25894__$1 = state_25894;
var statearr_25927_25969 = state_25894__$1;
(statearr_25927_25969[(2)] = null);

(statearr_25927_25969[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (16))){
var inst_25849 = (state_25894[(10)]);
var inst_25853 = cljs.core.chunk_first(inst_25849);
var inst_25854 = cljs.core.chunk_rest(inst_25849);
var inst_25855 = cljs.core.count(inst_25853);
var inst_25835 = inst_25854;
var inst_25836 = inst_25853;
var inst_25837 = inst_25855;
var inst_25838 = (0);
var state_25894__$1 = (function (){var statearr_25928 = state_25894;
(statearr_25928[(12)] = inst_25838);

(statearr_25928[(14)] = inst_25836);

(statearr_25928[(15)] = inst_25835);

(statearr_25928[(16)] = inst_25837);

return statearr_25928;
})();
var statearr_25929_25970 = state_25894__$1;
(statearr_25929_25970[(2)] = null);

(statearr_25929_25970[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (10))){
var inst_25838 = (state_25894[(12)]);
var inst_25836 = (state_25894[(14)]);
var inst_25835 = (state_25894[(15)]);
var inst_25837 = (state_25894[(16)]);
var inst_25843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25836,inst_25838);
var inst_25844 = cljs.core.async.muxch_STAR_(inst_25843);
var inst_25845 = cljs.core.async.close_BANG_(inst_25844);
var inst_25846 = (inst_25838 + (1));
var tmp25924 = inst_25836;
var tmp25925 = inst_25835;
var tmp25926 = inst_25837;
var inst_25835__$1 = tmp25925;
var inst_25836__$1 = tmp25924;
var inst_25837__$1 = tmp25926;
var inst_25838__$1 = inst_25846;
var state_25894__$1 = (function (){var statearr_25930 = state_25894;
(statearr_25930[(12)] = inst_25838__$1);

(statearr_25930[(14)] = inst_25836__$1);

(statearr_25930[(15)] = inst_25835__$1);

(statearr_25930[(16)] = inst_25837__$1);

(statearr_25930[(17)] = inst_25845);

return statearr_25930;
})();
var statearr_25931_25971 = state_25894__$1;
(statearr_25931_25971[(2)] = null);

(statearr_25931_25971[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (18))){
var inst_25864 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25932_25972 = state_25894__$1;
(statearr_25932_25972[(2)] = inst_25864);

(statearr_25932_25972[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (8))){
var inst_25838 = (state_25894[(12)]);
var inst_25837 = (state_25894[(16)]);
var inst_25840 = (inst_25838 < inst_25837);
var inst_25841 = inst_25840;
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25841)){
var statearr_25933_25973 = state_25894__$1;
(statearr_25933_25973[(1)] = (10));

} else {
var statearr_25934_25974 = state_25894__$1;
(statearr_25934_25974[(1)] = (11));

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
});})(c__23954__auto___25946,mults,ensure_mult,p))
;
return ((function (switch__23828__auto__,c__23954__auto___25946,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_25938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25938[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_25938[(1)] = (1));

return statearr_25938;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_25894){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_25894);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e25939){if((e25939 instanceof Object)){
var ex__23832__auto__ = e25939;
var statearr_25940_25975 = state_25894;
(statearr_25940_25975[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25894);

return cljs.core.cst$kw$recur;
} else {
throw e25939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__25976 = state_25894;
state_25894 = G__25976;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_25894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_25894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___25946,mults,ensure_mult,p))
})();
var state__23956__auto__ = (function (){var statearr_25941 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_25941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___25946);

return statearr_25941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___25946,mults,ensure_mult,p))
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
var args25977 = [];
var len__8739__auto___25980 = arguments.length;
var i__8740__auto___25981 = (0);
while(true){
if((i__8740__auto___25981 < len__8739__auto___25980)){
args25977.push((arguments[i__8740__auto___25981]));

var G__25982 = (i__8740__auto___25981 + (1));
i__8740__auto___25981 = G__25982;
continue;
} else {
}
break;
}

var G__25979 = args25977.length;
switch (G__25979) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25977.length)].join('')));

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
var args25984 = [];
var len__8739__auto___25987 = arguments.length;
var i__8740__auto___25988 = (0);
while(true){
if((i__8740__auto___25988 < len__8739__auto___25987)){
args25984.push((arguments[i__8740__auto___25988]));

var G__25989 = (i__8740__auto___25988 + (1));
i__8740__auto___25988 = G__25989;
continue;
} else {
}
break;
}

var G__25986 = args25984.length;
switch (G__25986) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25984.length)].join('')));

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
var args25991 = [];
var len__8739__auto___26062 = arguments.length;
var i__8740__auto___26063 = (0);
while(true){
if((i__8740__auto___26063 < len__8739__auto___26062)){
args25991.push((arguments[i__8740__auto___26063]));

var G__26064 = (i__8740__auto___26063 + (1));
i__8740__auto___26063 = G__26064;
continue;
} else {
}
break;
}

var G__25993 = args25991.length;
switch (G__25993) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25991.length)].join('')));

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
var c__23954__auto___26066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___26066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___26066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26032){
var state_val_26033 = (state_26032[(1)]);
if((state_val_26033 === (7))){
var state_26032__$1 = state_26032;
var statearr_26034_26067 = state_26032__$1;
(statearr_26034_26067[(2)] = null);

(statearr_26034_26067[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (1))){
var state_26032__$1 = state_26032;
var statearr_26035_26068 = state_26032__$1;
(statearr_26035_26068[(2)] = null);

(statearr_26035_26068[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (4))){
var inst_25996 = (state_26032[(7)]);
var inst_25998 = (inst_25996 < cnt);
var state_26032__$1 = state_26032;
if(cljs.core.truth_(inst_25998)){
var statearr_26036_26069 = state_26032__$1;
(statearr_26036_26069[(1)] = (6));

} else {
var statearr_26037_26070 = state_26032__$1;
(statearr_26037_26070[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (15))){
var inst_26028 = (state_26032[(2)]);
var state_26032__$1 = state_26032;
var statearr_26038_26071 = state_26032__$1;
(statearr_26038_26071[(2)] = inst_26028);

(statearr_26038_26071[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (13))){
var inst_26021 = cljs.core.async.close_BANG_(out);
var state_26032__$1 = state_26032;
var statearr_26039_26072 = state_26032__$1;
(statearr_26039_26072[(2)] = inst_26021);

(statearr_26039_26072[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (6))){
var state_26032__$1 = state_26032;
var statearr_26040_26073 = state_26032__$1;
(statearr_26040_26073[(2)] = null);

(statearr_26040_26073[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (3))){
var inst_26030 = (state_26032[(2)]);
var state_26032__$1 = state_26032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26032__$1,inst_26030);
} else {
if((state_val_26033 === (12))){
var inst_26018 = (state_26032[(8)]);
var inst_26018__$1 = (state_26032[(2)]);
var inst_26019 = cljs.core.some(cljs.core.nil_QMARK_,inst_26018__$1);
var state_26032__$1 = (function (){var statearr_26041 = state_26032;
(statearr_26041[(8)] = inst_26018__$1);

return statearr_26041;
})();
if(cljs.core.truth_(inst_26019)){
var statearr_26042_26074 = state_26032__$1;
(statearr_26042_26074[(1)] = (13));

} else {
var statearr_26043_26075 = state_26032__$1;
(statearr_26043_26075[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (2))){
var inst_25995 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_25996 = (0);
var state_26032__$1 = (function (){var statearr_26044 = state_26032;
(statearr_26044[(9)] = inst_25995);

(statearr_26044[(7)] = inst_25996);

return statearr_26044;
})();
var statearr_26045_26076 = state_26032__$1;
(statearr_26045_26076[(2)] = null);

(statearr_26045_26076[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (11))){
var inst_25996 = (state_26032[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26032,(10),Object,null,(9));
var inst_26005 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25996) : chs__$1.call(null,inst_25996));
var inst_26006 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25996) : done.call(null,inst_25996));
var inst_26007 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26005,inst_26006);
var state_26032__$1 = state_26032;
var statearr_26046_26077 = state_26032__$1;
(statearr_26046_26077[(2)] = inst_26007);


cljs.core.async.impl.ioc_helpers.process_exception(state_26032__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (9))){
var inst_25996 = (state_26032[(7)]);
var inst_26009 = (state_26032[(2)]);
var inst_26010 = (inst_25996 + (1));
var inst_25996__$1 = inst_26010;
var state_26032__$1 = (function (){var statearr_26047 = state_26032;
(statearr_26047[(7)] = inst_25996__$1);

(statearr_26047[(10)] = inst_26009);

return statearr_26047;
})();
var statearr_26048_26078 = state_26032__$1;
(statearr_26048_26078[(2)] = null);

(statearr_26048_26078[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (5))){
var inst_26016 = (state_26032[(2)]);
var state_26032__$1 = (function (){var statearr_26049 = state_26032;
(statearr_26049[(11)] = inst_26016);

return statearr_26049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26032__$1,(12),dchan);
} else {
if((state_val_26033 === (14))){
var inst_26018 = (state_26032[(8)]);
var inst_26023 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26018);
var state_26032__$1 = state_26032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26032__$1,(16),out,inst_26023);
} else {
if((state_val_26033 === (16))){
var inst_26025 = (state_26032[(2)]);
var state_26032__$1 = (function (){var statearr_26050 = state_26032;
(statearr_26050[(12)] = inst_26025);

return statearr_26050;
})();
var statearr_26051_26079 = state_26032__$1;
(statearr_26051_26079[(2)] = null);

(statearr_26051_26079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (10))){
var inst_26000 = (state_26032[(2)]);
var inst_26001 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26032__$1 = (function (){var statearr_26052 = state_26032;
(statearr_26052[(13)] = inst_26000);

return statearr_26052;
})();
var statearr_26053_26080 = state_26032__$1;
(statearr_26053_26080[(2)] = inst_26001);


cljs.core.async.impl.ioc_helpers.process_exception(state_26032__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26033 === (8))){
var inst_26014 = (state_26032[(2)]);
var state_26032__$1 = state_26032;
var statearr_26054_26081 = state_26032__$1;
(statearr_26054_26081[(2)] = inst_26014);

(statearr_26054_26081[(1)] = (5));


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
});})(c__23954__auto___26066,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23828__auto__,c__23954__auto___26066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_26058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26058[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_26058[(1)] = (1));

return statearr_26058;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_26032){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_26032);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e26059){if((e26059 instanceof Object)){
var ex__23832__auto__ = e26059;
var statearr_26060_26082 = state_26032;
(statearr_26060_26082[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26032);

return cljs.core.cst$kw$recur;
} else {
throw e26059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__26083 = state_26032;
state_26032 = G__26083;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_26032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_26032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___26066,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23956__auto__ = (function (){var statearr_26061 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_26061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___26066);

return statearr_26061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___26066,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26085 = [];
var len__8739__auto___26143 = arguments.length;
var i__8740__auto___26144 = (0);
while(true){
if((i__8740__auto___26144 < len__8739__auto___26143)){
args26085.push((arguments[i__8740__auto___26144]));

var G__26145 = (i__8740__auto___26144 + (1));
i__8740__auto___26144 = G__26145;
continue;
} else {
}
break;
}

var G__26087 = args26085.length;
switch (G__26087) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26085.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23954__auto___26147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___26147,out){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___26147,out){
return (function (state_26119){
var state_val_26120 = (state_26119[(1)]);
if((state_val_26120 === (7))){
var inst_26098 = (state_26119[(7)]);
var inst_26099 = (state_26119[(8)]);
var inst_26098__$1 = (state_26119[(2)]);
var inst_26099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26098__$1,(0),null);
var inst_26100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26098__$1,(1),null);
var inst_26101 = (inst_26099__$1 == null);
var state_26119__$1 = (function (){var statearr_26121 = state_26119;
(statearr_26121[(7)] = inst_26098__$1);

(statearr_26121[(8)] = inst_26099__$1);

(statearr_26121[(9)] = inst_26100);

return statearr_26121;
})();
if(cljs.core.truth_(inst_26101)){
var statearr_26122_26148 = state_26119__$1;
(statearr_26122_26148[(1)] = (8));

} else {
var statearr_26123_26149 = state_26119__$1;
(statearr_26123_26149[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26120 === (1))){
var inst_26088 = cljs.core.vec(chs);
var inst_26089 = inst_26088;
var state_26119__$1 = (function (){var statearr_26124 = state_26119;
(statearr_26124[(10)] = inst_26089);

return statearr_26124;
})();
var statearr_26125_26150 = state_26119__$1;
(statearr_26125_26150[(2)] = null);

(statearr_26125_26150[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26120 === (4))){
var inst_26089 = (state_26119[(10)]);
var state_26119__$1 = state_26119;
return cljs.core.async.ioc_alts_BANG_(state_26119__$1,(7),inst_26089);
} else {
if((state_val_26120 === (6))){
var inst_26115 = (state_26119[(2)]);
var state_26119__$1 = state_26119;
var statearr_26126_26151 = state_26119__$1;
(statearr_26126_26151[(2)] = inst_26115);

(statearr_26126_26151[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26120 === (3))){
var inst_26117 = (state_26119[(2)]);
var state_26119__$1 = state_26119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26119__$1,inst_26117);
} else {
if((state_val_26120 === (2))){
var inst_26089 = (state_26119[(10)]);
var inst_26091 = cljs.core.count(inst_26089);
var inst_26092 = (inst_26091 > (0));
var state_26119__$1 = state_26119;
if(cljs.core.truth_(inst_26092)){
var statearr_26128_26152 = state_26119__$1;
(statearr_26128_26152[(1)] = (4));

} else {
var statearr_26129_26153 = state_26119__$1;
(statearr_26129_26153[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26120 === (11))){
var inst_26089 = (state_26119[(10)]);
var inst_26108 = (state_26119[(2)]);
var tmp26127 = inst_26089;
var inst_26089__$1 = tmp26127;
var state_26119__$1 = (function (){var statearr_26130 = state_26119;
(statearr_26130[(10)] = inst_26089__$1);

(statearr_26130[(11)] = inst_26108);

return statearr_26130;
})();
var statearr_26131_26154 = state_26119__$1;
(statearr_26131_26154[(2)] = null);

(statearr_26131_26154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26120 === (9))){
var inst_26099 = (state_26119[(8)]);
var state_26119__$1 = state_26119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26119__$1,(11),out,inst_26099);
} else {
if((state_val_26120 === (5))){
var inst_26113 = cljs.core.async.close_BANG_(out);
var state_26119__$1 = state_26119;
var statearr_26132_26155 = state_26119__$1;
(statearr_26132_26155[(2)] = inst_26113);

(statearr_26132_26155[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26120 === (10))){
var inst_26111 = (state_26119[(2)]);
var state_26119__$1 = state_26119;
var statearr_26133_26156 = state_26119__$1;
(statearr_26133_26156[(2)] = inst_26111);

(statearr_26133_26156[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26120 === (8))){
var inst_26098 = (state_26119[(7)]);
var inst_26089 = (state_26119[(10)]);
var inst_26099 = (state_26119[(8)]);
var inst_26100 = (state_26119[(9)]);
var inst_26103 = (function (){var cs = inst_26089;
var vec__26094 = inst_26098;
var v = inst_26099;
var c = inst_26100;
return ((function (cs,vec__26094,v,c,inst_26098,inst_26089,inst_26099,inst_26100,state_val_26120,c__23954__auto___26147,out){
return (function (p1__26084_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26084_SHARP_);
});
;})(cs,vec__26094,v,c,inst_26098,inst_26089,inst_26099,inst_26100,state_val_26120,c__23954__auto___26147,out))
})();
var inst_26104 = cljs.core.filterv(inst_26103,inst_26089);
var inst_26089__$1 = inst_26104;
var state_26119__$1 = (function (){var statearr_26134 = state_26119;
(statearr_26134[(10)] = inst_26089__$1);

return statearr_26134;
})();
var statearr_26135_26157 = state_26119__$1;
(statearr_26135_26157[(2)] = null);

(statearr_26135_26157[(1)] = (2));


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
});})(c__23954__auto___26147,out))
;
return ((function (switch__23828__auto__,c__23954__auto___26147,out){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_26139 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26139[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_26139[(1)] = (1));

return statearr_26139;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_26119){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_26119);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e26140){if((e26140 instanceof Object)){
var ex__23832__auto__ = e26140;
var statearr_26141_26158 = state_26119;
(statearr_26141_26158[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26119);

return cljs.core.cst$kw$recur;
} else {
throw e26140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__26159 = state_26119;
state_26119 = G__26159;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_26119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_26119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___26147,out))
})();
var state__23956__auto__ = (function (){var statearr_26142 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_26142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___26147);

return statearr_26142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___26147,out))
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
var args26160 = [];
var len__8739__auto___26209 = arguments.length;
var i__8740__auto___26210 = (0);
while(true){
if((i__8740__auto___26210 < len__8739__auto___26209)){
args26160.push((arguments[i__8740__auto___26210]));

var G__26211 = (i__8740__auto___26210 + (1));
i__8740__auto___26210 = G__26211;
continue;
} else {
}
break;
}

var G__26162 = args26160.length;
switch (G__26162) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26160.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23954__auto___26213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___26213,out){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___26213,out){
return (function (state_26186){
var state_val_26187 = (state_26186[(1)]);
if((state_val_26187 === (7))){
var inst_26168 = (state_26186[(7)]);
var inst_26168__$1 = (state_26186[(2)]);
var inst_26169 = (inst_26168__$1 == null);
var inst_26170 = cljs.core.not(inst_26169);
var state_26186__$1 = (function (){var statearr_26188 = state_26186;
(statearr_26188[(7)] = inst_26168__$1);

return statearr_26188;
})();
if(inst_26170){
var statearr_26189_26214 = state_26186__$1;
(statearr_26189_26214[(1)] = (8));

} else {
var statearr_26190_26215 = state_26186__$1;
(statearr_26190_26215[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26187 === (1))){
var inst_26163 = (0);
var state_26186__$1 = (function (){var statearr_26191 = state_26186;
(statearr_26191[(8)] = inst_26163);

return statearr_26191;
})();
var statearr_26192_26216 = state_26186__$1;
(statearr_26192_26216[(2)] = null);

(statearr_26192_26216[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26187 === (4))){
var state_26186__$1 = state_26186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26186__$1,(7),ch);
} else {
if((state_val_26187 === (6))){
var inst_26181 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
var statearr_26193_26217 = state_26186__$1;
(statearr_26193_26217[(2)] = inst_26181);

(statearr_26193_26217[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26187 === (3))){
var inst_26183 = (state_26186[(2)]);
var inst_26184 = cljs.core.async.close_BANG_(out);
var state_26186__$1 = (function (){var statearr_26194 = state_26186;
(statearr_26194[(9)] = inst_26183);

return statearr_26194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26186__$1,inst_26184);
} else {
if((state_val_26187 === (2))){
var inst_26163 = (state_26186[(8)]);
var inst_26165 = (inst_26163 < n);
var state_26186__$1 = state_26186;
if(cljs.core.truth_(inst_26165)){
var statearr_26195_26218 = state_26186__$1;
(statearr_26195_26218[(1)] = (4));

} else {
var statearr_26196_26219 = state_26186__$1;
(statearr_26196_26219[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26187 === (11))){
var inst_26163 = (state_26186[(8)]);
var inst_26173 = (state_26186[(2)]);
var inst_26174 = (inst_26163 + (1));
var inst_26163__$1 = inst_26174;
var state_26186__$1 = (function (){var statearr_26197 = state_26186;
(statearr_26197[(10)] = inst_26173);

(statearr_26197[(8)] = inst_26163__$1);

return statearr_26197;
})();
var statearr_26198_26220 = state_26186__$1;
(statearr_26198_26220[(2)] = null);

(statearr_26198_26220[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26187 === (9))){
var state_26186__$1 = state_26186;
var statearr_26199_26221 = state_26186__$1;
(statearr_26199_26221[(2)] = null);

(statearr_26199_26221[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26187 === (5))){
var state_26186__$1 = state_26186;
var statearr_26200_26222 = state_26186__$1;
(statearr_26200_26222[(2)] = null);

(statearr_26200_26222[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26187 === (10))){
var inst_26178 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
var statearr_26201_26223 = state_26186__$1;
(statearr_26201_26223[(2)] = inst_26178);

(statearr_26201_26223[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26187 === (8))){
var inst_26168 = (state_26186[(7)]);
var state_26186__$1 = state_26186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26186__$1,(11),out,inst_26168);
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
});})(c__23954__auto___26213,out))
;
return ((function (switch__23828__auto__,c__23954__auto___26213,out){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_26205 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26205[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_26205[(1)] = (1));

return statearr_26205;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_26186){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_26186);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e26206){if((e26206 instanceof Object)){
var ex__23832__auto__ = e26206;
var statearr_26207_26224 = state_26186;
(statearr_26207_26224[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26186);

return cljs.core.cst$kw$recur;
} else {
throw e26206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__26225 = state_26186;
state_26186 = G__26225;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_26186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_26186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___26213,out))
})();
var state__23956__auto__ = (function (){var statearr_26208 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_26208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___26213);

return statearr_26208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___26213,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26235 = (function (f,ch,meta26236){
this.f = f;
this.ch = ch;
this.meta26236 = meta26236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26237,meta26236__$1){
var self__ = this;
var _26237__$1 = this;
return (new cljs.core.async.t_cljs$core$async26235(self__.f,self__.ch,meta26236__$1));
});


cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26237){
var self__ = this;
var _26237__$1 = this;
return self__.meta26236;
});


cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26238 = (function (f,ch,meta26236,_,fn1,meta26239){
this.f = f;
this.ch = ch;
this.meta26236 = meta26236;
this._ = _;
this.fn1 = fn1;
this.meta26239 = meta26239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26240,meta26239__$1){
var self__ = this;
var _26240__$1 = this;
return (new cljs.core.async.t_cljs$core$async26238(self__.f,self__.ch,self__.meta26236,self__._,self__.fn1,meta26239__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26240){
var self__ = this;
var _26240__$1 = this;
return self__.meta26239;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26226_SHARP_){
var G__26241 = (((p1__26226_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26226_SHARP_) : self__.f.call(null,p1__26226_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26241) : f1.call(null,G__26241));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26238.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26236,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26235], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26239], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26238";

cljs.core.async.t_cljs$core$async26238.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26238");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26238 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26238(f__$1,ch__$1,meta26236__$1,___$2,fn1__$1,meta26239){
return (new cljs.core.async.t_cljs$core$async26238(f__$1,ch__$1,meta26236__$1,___$2,fn1__$1,meta26239));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26238(self__.f,self__.ch,self__.meta26236,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7511__auto__ = ret;
if(cljs.core.truth_(and__7511__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7511__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26242 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26242) : self__.f.call(null,G__26242));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26236], null);
});

cljs.core.async.t_cljs$core$async26235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26235";

cljs.core.async.t_cljs$core$async26235.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26235");
});

cljs.core.async.__GT_t_cljs$core$async26235 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26235(f__$1,ch__$1,meta26236){
return (new cljs.core.async.t_cljs$core$async26235(f__$1,ch__$1,meta26236));
});

}

return (new cljs.core.async.t_cljs$core$async26235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26246 = (function (f,ch,meta26247){
this.f = f;
this.ch = ch;
this.meta26247 = meta26247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26248,meta26247__$1){
var self__ = this;
var _26248__$1 = this;
return (new cljs.core.async.t_cljs$core$async26246(self__.f,self__.ch,meta26247__$1));
});


cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26248){
var self__ = this;
var _26248__$1 = this;
return self__.meta26247;
});


cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async26246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26247], null);
});

cljs.core.async.t_cljs$core$async26246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26246";

cljs.core.async.t_cljs$core$async26246.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26246");
});

cljs.core.async.__GT_t_cljs$core$async26246 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26246(f__$1,ch__$1,meta26247){
return (new cljs.core.async.t_cljs$core$async26246(f__$1,ch__$1,meta26247));
});

}

return (new cljs.core.async.t_cljs$core$async26246(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26252 = (function (p,ch,meta26253){
this.p = p;
this.ch = ch;
this.meta26253 = meta26253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26254,meta26253__$1){
var self__ = this;
var _26254__$1 = this;
return (new cljs.core.async.t_cljs$core$async26252(self__.p,self__.ch,meta26253__$1));
});


cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26254){
var self__ = this;
var _26254__$1 = this;
return self__.meta26253;
});


cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26253], null);
});

cljs.core.async.t_cljs$core$async26252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26252";

cljs.core.async.t_cljs$core$async26252.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){
return cljs.core._write(writer__8176__auto__,"cljs.core.async/t_cljs$core$async26252");
});

cljs.core.async.__GT_t_cljs$core$async26252 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26252(p__$1,ch__$1,meta26253){
return (new cljs.core.async.t_cljs$core$async26252(p__$1,ch__$1,meta26253));
});

}

return (new cljs.core.async.t_cljs$core$async26252(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26255 = [];
var len__8739__auto___26299 = arguments.length;
var i__8740__auto___26300 = (0);
while(true){
if((i__8740__auto___26300 < len__8739__auto___26299)){
args26255.push((arguments[i__8740__auto___26300]));

var G__26301 = (i__8740__auto___26300 + (1));
i__8740__auto___26300 = G__26301;
continue;
} else {
}
break;
}

var G__26257 = args26255.length;
switch (G__26257) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26255.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23954__auto___26303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___26303,out){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___26303,out){
return (function (state_26278){
var state_val_26279 = (state_26278[(1)]);
if((state_val_26279 === (7))){
var inst_26274 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
var statearr_26280_26304 = state_26278__$1;
(statearr_26280_26304[(2)] = inst_26274);

(statearr_26280_26304[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26279 === (1))){
var state_26278__$1 = state_26278;
var statearr_26281_26305 = state_26278__$1;
(statearr_26281_26305[(2)] = null);

(statearr_26281_26305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26279 === (4))){
var inst_26260 = (state_26278[(7)]);
var inst_26260__$1 = (state_26278[(2)]);
var inst_26261 = (inst_26260__$1 == null);
var state_26278__$1 = (function (){var statearr_26282 = state_26278;
(statearr_26282[(7)] = inst_26260__$1);

return statearr_26282;
})();
if(cljs.core.truth_(inst_26261)){
var statearr_26283_26306 = state_26278__$1;
(statearr_26283_26306[(1)] = (5));

} else {
var statearr_26284_26307 = state_26278__$1;
(statearr_26284_26307[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26279 === (6))){
var inst_26260 = (state_26278[(7)]);
var inst_26265 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26260) : p.call(null,inst_26260));
var state_26278__$1 = state_26278;
if(cljs.core.truth_(inst_26265)){
var statearr_26285_26308 = state_26278__$1;
(statearr_26285_26308[(1)] = (8));

} else {
var statearr_26286_26309 = state_26278__$1;
(statearr_26286_26309[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26279 === (3))){
var inst_26276 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26278__$1,inst_26276);
} else {
if((state_val_26279 === (2))){
var state_26278__$1 = state_26278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26278__$1,(4),ch);
} else {
if((state_val_26279 === (11))){
var inst_26268 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
var statearr_26287_26310 = state_26278__$1;
(statearr_26287_26310[(2)] = inst_26268);

(statearr_26287_26310[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26279 === (9))){
var state_26278__$1 = state_26278;
var statearr_26288_26311 = state_26278__$1;
(statearr_26288_26311[(2)] = null);

(statearr_26288_26311[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26279 === (5))){
var inst_26263 = cljs.core.async.close_BANG_(out);
var state_26278__$1 = state_26278;
var statearr_26289_26312 = state_26278__$1;
(statearr_26289_26312[(2)] = inst_26263);

(statearr_26289_26312[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26279 === (10))){
var inst_26271 = (state_26278[(2)]);
var state_26278__$1 = (function (){var statearr_26290 = state_26278;
(statearr_26290[(8)] = inst_26271);

return statearr_26290;
})();
var statearr_26291_26313 = state_26278__$1;
(statearr_26291_26313[(2)] = null);

(statearr_26291_26313[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26279 === (8))){
var inst_26260 = (state_26278[(7)]);
var state_26278__$1 = state_26278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26278__$1,(11),out,inst_26260);
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
});})(c__23954__auto___26303,out))
;
return ((function (switch__23828__auto__,c__23954__auto___26303,out){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_26295 = [null,null,null,null,null,null,null,null,null];
(statearr_26295[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_26295[(1)] = (1));

return statearr_26295;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_26278){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_26278);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e26296){if((e26296 instanceof Object)){
var ex__23832__auto__ = e26296;
var statearr_26297_26314 = state_26278;
(statearr_26297_26314[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26278);

return cljs.core.cst$kw$recur;
} else {
throw e26296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__26315 = state_26278;
state_26278 = G__26315;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_26278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_26278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___26303,out))
})();
var state__23956__auto__ = (function (){var statearr_26298 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_26298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___26303);

return statearr_26298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___26303,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26316 = [];
var len__8739__auto___26319 = arguments.length;
var i__8740__auto___26320 = (0);
while(true){
if((i__8740__auto___26320 < len__8739__auto___26319)){
args26316.push((arguments[i__8740__auto___26320]));

var G__26321 = (i__8740__auto___26320 + (1));
i__8740__auto___26320 = G__26321;
continue;
} else {
}
break;
}

var G__26318 = args26316.length;
switch (G__26318) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26316.length)].join('')));

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
var c__23954__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto__){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto__){
return (function (state_26488){
var state_val_26489 = (state_26488[(1)]);
if((state_val_26489 === (7))){
var inst_26484 = (state_26488[(2)]);
var state_26488__$1 = state_26488;
var statearr_26490_26531 = state_26488__$1;
(statearr_26490_26531[(2)] = inst_26484);

(statearr_26490_26531[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (20))){
var inst_26454 = (state_26488[(7)]);
var inst_26465 = (state_26488[(2)]);
var inst_26466 = cljs.core.next(inst_26454);
var inst_26440 = inst_26466;
var inst_26441 = null;
var inst_26442 = (0);
var inst_26443 = (0);
var state_26488__$1 = (function (){var statearr_26491 = state_26488;
(statearr_26491[(8)] = inst_26440);

(statearr_26491[(9)] = inst_26441);

(statearr_26491[(10)] = inst_26442);

(statearr_26491[(11)] = inst_26443);

(statearr_26491[(12)] = inst_26465);

return statearr_26491;
})();
var statearr_26492_26532 = state_26488__$1;
(statearr_26492_26532[(2)] = null);

(statearr_26492_26532[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (1))){
var state_26488__$1 = state_26488;
var statearr_26493_26533 = state_26488__$1;
(statearr_26493_26533[(2)] = null);

(statearr_26493_26533[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (4))){
var inst_26429 = (state_26488[(13)]);
var inst_26429__$1 = (state_26488[(2)]);
var inst_26430 = (inst_26429__$1 == null);
var state_26488__$1 = (function (){var statearr_26494 = state_26488;
(statearr_26494[(13)] = inst_26429__$1);

return statearr_26494;
})();
if(cljs.core.truth_(inst_26430)){
var statearr_26495_26534 = state_26488__$1;
(statearr_26495_26534[(1)] = (5));

} else {
var statearr_26496_26535 = state_26488__$1;
(statearr_26496_26535[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (15))){
var state_26488__$1 = state_26488;
var statearr_26500_26536 = state_26488__$1;
(statearr_26500_26536[(2)] = null);

(statearr_26500_26536[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (21))){
var state_26488__$1 = state_26488;
var statearr_26501_26537 = state_26488__$1;
(statearr_26501_26537[(2)] = null);

(statearr_26501_26537[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (13))){
var inst_26440 = (state_26488[(8)]);
var inst_26441 = (state_26488[(9)]);
var inst_26442 = (state_26488[(10)]);
var inst_26443 = (state_26488[(11)]);
var inst_26450 = (state_26488[(2)]);
var inst_26451 = (inst_26443 + (1));
var tmp26497 = inst_26440;
var tmp26498 = inst_26441;
var tmp26499 = inst_26442;
var inst_26440__$1 = tmp26497;
var inst_26441__$1 = tmp26498;
var inst_26442__$1 = tmp26499;
var inst_26443__$1 = inst_26451;
var state_26488__$1 = (function (){var statearr_26502 = state_26488;
(statearr_26502[(8)] = inst_26440__$1);

(statearr_26502[(9)] = inst_26441__$1);

(statearr_26502[(14)] = inst_26450);

(statearr_26502[(10)] = inst_26442__$1);

(statearr_26502[(11)] = inst_26443__$1);

return statearr_26502;
})();
var statearr_26503_26538 = state_26488__$1;
(statearr_26503_26538[(2)] = null);

(statearr_26503_26538[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (22))){
var state_26488__$1 = state_26488;
var statearr_26504_26539 = state_26488__$1;
(statearr_26504_26539[(2)] = null);

(statearr_26504_26539[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (6))){
var inst_26429 = (state_26488[(13)]);
var inst_26438 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26429) : f.call(null,inst_26429));
var inst_26439 = cljs.core.seq(inst_26438);
var inst_26440 = inst_26439;
var inst_26441 = null;
var inst_26442 = (0);
var inst_26443 = (0);
var state_26488__$1 = (function (){var statearr_26505 = state_26488;
(statearr_26505[(8)] = inst_26440);

(statearr_26505[(9)] = inst_26441);

(statearr_26505[(10)] = inst_26442);

(statearr_26505[(11)] = inst_26443);

return statearr_26505;
})();
var statearr_26506_26540 = state_26488__$1;
(statearr_26506_26540[(2)] = null);

(statearr_26506_26540[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (17))){
var inst_26454 = (state_26488[(7)]);
var inst_26458 = cljs.core.chunk_first(inst_26454);
var inst_26459 = cljs.core.chunk_rest(inst_26454);
var inst_26460 = cljs.core.count(inst_26458);
var inst_26440 = inst_26459;
var inst_26441 = inst_26458;
var inst_26442 = inst_26460;
var inst_26443 = (0);
var state_26488__$1 = (function (){var statearr_26507 = state_26488;
(statearr_26507[(8)] = inst_26440);

(statearr_26507[(9)] = inst_26441);

(statearr_26507[(10)] = inst_26442);

(statearr_26507[(11)] = inst_26443);

return statearr_26507;
})();
var statearr_26508_26541 = state_26488__$1;
(statearr_26508_26541[(2)] = null);

(statearr_26508_26541[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (3))){
var inst_26486 = (state_26488[(2)]);
var state_26488__$1 = state_26488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26488__$1,inst_26486);
} else {
if((state_val_26489 === (12))){
var inst_26474 = (state_26488[(2)]);
var state_26488__$1 = state_26488;
var statearr_26509_26542 = state_26488__$1;
(statearr_26509_26542[(2)] = inst_26474);

(statearr_26509_26542[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (2))){
var state_26488__$1 = state_26488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26488__$1,(4),in$);
} else {
if((state_val_26489 === (23))){
var inst_26482 = (state_26488[(2)]);
var state_26488__$1 = state_26488;
var statearr_26510_26543 = state_26488__$1;
(statearr_26510_26543[(2)] = inst_26482);

(statearr_26510_26543[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (19))){
var inst_26469 = (state_26488[(2)]);
var state_26488__$1 = state_26488;
var statearr_26511_26544 = state_26488__$1;
(statearr_26511_26544[(2)] = inst_26469);

(statearr_26511_26544[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (11))){
var inst_26440 = (state_26488[(8)]);
var inst_26454 = (state_26488[(7)]);
var inst_26454__$1 = cljs.core.seq(inst_26440);
var state_26488__$1 = (function (){var statearr_26512 = state_26488;
(statearr_26512[(7)] = inst_26454__$1);

return statearr_26512;
})();
if(inst_26454__$1){
var statearr_26513_26545 = state_26488__$1;
(statearr_26513_26545[(1)] = (14));

} else {
var statearr_26514_26546 = state_26488__$1;
(statearr_26514_26546[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (9))){
var inst_26476 = (state_26488[(2)]);
var inst_26477 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26488__$1 = (function (){var statearr_26515 = state_26488;
(statearr_26515[(15)] = inst_26476);

return statearr_26515;
})();
if(cljs.core.truth_(inst_26477)){
var statearr_26516_26547 = state_26488__$1;
(statearr_26516_26547[(1)] = (21));

} else {
var statearr_26517_26548 = state_26488__$1;
(statearr_26517_26548[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (5))){
var inst_26432 = cljs.core.async.close_BANG_(out);
var state_26488__$1 = state_26488;
var statearr_26518_26549 = state_26488__$1;
(statearr_26518_26549[(2)] = inst_26432);

(statearr_26518_26549[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (14))){
var inst_26454 = (state_26488[(7)]);
var inst_26456 = cljs.core.chunked_seq_QMARK_(inst_26454);
var state_26488__$1 = state_26488;
if(inst_26456){
var statearr_26519_26550 = state_26488__$1;
(statearr_26519_26550[(1)] = (17));

} else {
var statearr_26520_26551 = state_26488__$1;
(statearr_26520_26551[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (16))){
var inst_26472 = (state_26488[(2)]);
var state_26488__$1 = state_26488;
var statearr_26521_26552 = state_26488__$1;
(statearr_26521_26552[(2)] = inst_26472);

(statearr_26521_26552[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26489 === (10))){
var inst_26441 = (state_26488[(9)]);
var inst_26443 = (state_26488[(11)]);
var inst_26448 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26441,inst_26443);
var state_26488__$1 = state_26488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26488__$1,(13),out,inst_26448);
} else {
if((state_val_26489 === (18))){
var inst_26454 = (state_26488[(7)]);
var inst_26463 = cljs.core.first(inst_26454);
var state_26488__$1 = state_26488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26488__$1,(20),out,inst_26463);
} else {
if((state_val_26489 === (8))){
var inst_26442 = (state_26488[(10)]);
var inst_26443 = (state_26488[(11)]);
var inst_26445 = (inst_26443 < inst_26442);
var inst_26446 = inst_26445;
var state_26488__$1 = state_26488;
if(cljs.core.truth_(inst_26446)){
var statearr_26522_26553 = state_26488__$1;
(statearr_26522_26553[(1)] = (10));

} else {
var statearr_26523_26554 = state_26488__$1;
(statearr_26523_26554[(1)] = (11));

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
});})(c__23954__auto__))
;
return ((function (switch__23828__auto__,c__23954__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23829__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23829__auto____0 = (function (){
var statearr_26527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26527[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23829__auto__);

(statearr_26527[(1)] = (1));

return statearr_26527;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23829__auto____1 = (function (state_26488){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_26488);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e26528){if((e26528 instanceof Object)){
var ex__23832__auto__ = e26528;
var statearr_26529_26555 = state_26488;
(statearr_26529_26555[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26488);

return cljs.core.cst$kw$recur;
} else {
throw e26528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__26556 = state_26488;
state_26488 = G__26556;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23829__auto__ = function(state_26488){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23829__auto____1.call(this,state_26488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23829__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23829__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto__))
})();
var state__23956__auto__ = (function (){var statearr_26530 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_26530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto__);

return statearr_26530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto__))
);

return c__23954__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26557 = [];
var len__8739__auto___26560 = arguments.length;
var i__8740__auto___26561 = (0);
while(true){
if((i__8740__auto___26561 < len__8739__auto___26560)){
args26557.push((arguments[i__8740__auto___26561]));

var G__26562 = (i__8740__auto___26561 + (1));
i__8740__auto___26561 = G__26562;
continue;
} else {
}
break;
}

var G__26559 = args26557.length;
switch (G__26559) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26557.length)].join('')));

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
var args26564 = [];
var len__8739__auto___26567 = arguments.length;
var i__8740__auto___26568 = (0);
while(true){
if((i__8740__auto___26568 < len__8739__auto___26567)){
args26564.push((arguments[i__8740__auto___26568]));

var G__26569 = (i__8740__auto___26568 + (1));
i__8740__auto___26568 = G__26569;
continue;
} else {
}
break;
}

var G__26566 = args26564.length;
switch (G__26566) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26564.length)].join('')));

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
var args26571 = [];
var len__8739__auto___26622 = arguments.length;
var i__8740__auto___26623 = (0);
while(true){
if((i__8740__auto___26623 < len__8739__auto___26622)){
args26571.push((arguments[i__8740__auto___26623]));

var G__26624 = (i__8740__auto___26623 + (1));
i__8740__auto___26623 = G__26624;
continue;
} else {
}
break;
}

var G__26573 = args26571.length;
switch (G__26573) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26571.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23954__auto___26626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___26626,out){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___26626,out){
return (function (state_26597){
var state_val_26598 = (state_26597[(1)]);
if((state_val_26598 === (7))){
var inst_26592 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26599_26627 = state_26597__$1;
(statearr_26599_26627[(2)] = inst_26592);

(statearr_26599_26627[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26598 === (1))){
var inst_26574 = null;
var state_26597__$1 = (function (){var statearr_26600 = state_26597;
(statearr_26600[(7)] = inst_26574);

return statearr_26600;
})();
var statearr_26601_26628 = state_26597__$1;
(statearr_26601_26628[(2)] = null);

(statearr_26601_26628[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26598 === (4))){
var inst_26577 = (state_26597[(8)]);
var inst_26577__$1 = (state_26597[(2)]);
var inst_26578 = (inst_26577__$1 == null);
var inst_26579 = cljs.core.not(inst_26578);
var state_26597__$1 = (function (){var statearr_26602 = state_26597;
(statearr_26602[(8)] = inst_26577__$1);

return statearr_26602;
})();
if(inst_26579){
var statearr_26603_26629 = state_26597__$1;
(statearr_26603_26629[(1)] = (5));

} else {
var statearr_26604_26630 = state_26597__$1;
(statearr_26604_26630[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26598 === (6))){
var state_26597__$1 = state_26597;
var statearr_26605_26631 = state_26597__$1;
(statearr_26605_26631[(2)] = null);

(statearr_26605_26631[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26598 === (3))){
var inst_26594 = (state_26597[(2)]);
var inst_26595 = cljs.core.async.close_BANG_(out);
var state_26597__$1 = (function (){var statearr_26606 = state_26597;
(statearr_26606[(9)] = inst_26594);

return statearr_26606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26597__$1,inst_26595);
} else {
if((state_val_26598 === (2))){
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26597__$1,(4),ch);
} else {
if((state_val_26598 === (11))){
var inst_26577 = (state_26597[(8)]);
var inst_26586 = (state_26597[(2)]);
var inst_26574 = inst_26577;
var state_26597__$1 = (function (){var statearr_26607 = state_26597;
(statearr_26607[(10)] = inst_26586);

(statearr_26607[(7)] = inst_26574);

return statearr_26607;
})();
var statearr_26608_26632 = state_26597__$1;
(statearr_26608_26632[(2)] = null);

(statearr_26608_26632[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26598 === (9))){
var inst_26577 = (state_26597[(8)]);
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26597__$1,(11),out,inst_26577);
} else {
if((state_val_26598 === (5))){
var inst_26577 = (state_26597[(8)]);
var inst_26574 = (state_26597[(7)]);
var inst_26581 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26577,inst_26574);
var state_26597__$1 = state_26597;
if(inst_26581){
var statearr_26610_26633 = state_26597__$1;
(statearr_26610_26633[(1)] = (8));

} else {
var statearr_26611_26634 = state_26597__$1;
(statearr_26611_26634[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26598 === (10))){
var inst_26589 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26612_26635 = state_26597__$1;
(statearr_26612_26635[(2)] = inst_26589);

(statearr_26612_26635[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26598 === (8))){
var inst_26574 = (state_26597[(7)]);
var tmp26609 = inst_26574;
var inst_26574__$1 = tmp26609;
var state_26597__$1 = (function (){var statearr_26613 = state_26597;
(statearr_26613[(7)] = inst_26574__$1);

return statearr_26613;
})();
var statearr_26614_26636 = state_26597__$1;
(statearr_26614_26636[(2)] = null);

(statearr_26614_26636[(1)] = (2));


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
});})(c__23954__auto___26626,out))
;
return ((function (switch__23828__auto__,c__23954__auto___26626,out){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_26618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26618[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_26618[(1)] = (1));

return statearr_26618;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_26597){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_26597);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e26619){if((e26619 instanceof Object)){
var ex__23832__auto__ = e26619;
var statearr_26620_26637 = state_26597;
(statearr_26620_26637[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26597);

return cljs.core.cst$kw$recur;
} else {
throw e26619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__26638 = state_26597;
state_26597 = G__26638;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_26597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_26597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___26626,out))
})();
var state__23956__auto__ = (function (){var statearr_26621 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_26621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___26626);

return statearr_26621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___26626,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26639 = [];
var len__8739__auto___26709 = arguments.length;
var i__8740__auto___26710 = (0);
while(true){
if((i__8740__auto___26710 < len__8739__auto___26709)){
args26639.push((arguments[i__8740__auto___26710]));

var G__26711 = (i__8740__auto___26710 + (1));
i__8740__auto___26710 = G__26711;
continue;
} else {
}
break;
}

var G__26641 = args26639.length;
switch (G__26641) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26639.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23954__auto___26713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___26713,out){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___26713,out){
return (function (state_26679){
var state_val_26680 = (state_26679[(1)]);
if((state_val_26680 === (7))){
var inst_26675 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26681_26714 = state_26679__$1;
(statearr_26681_26714[(2)] = inst_26675);

(statearr_26681_26714[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (1))){
var inst_26642 = (new Array(n));
var inst_26643 = inst_26642;
var inst_26644 = (0);
var state_26679__$1 = (function (){var statearr_26682 = state_26679;
(statearr_26682[(7)] = inst_26644);

(statearr_26682[(8)] = inst_26643);

return statearr_26682;
})();
var statearr_26683_26715 = state_26679__$1;
(statearr_26683_26715[(2)] = null);

(statearr_26683_26715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (4))){
var inst_26647 = (state_26679[(9)]);
var inst_26647__$1 = (state_26679[(2)]);
var inst_26648 = (inst_26647__$1 == null);
var inst_26649 = cljs.core.not(inst_26648);
var state_26679__$1 = (function (){var statearr_26684 = state_26679;
(statearr_26684[(9)] = inst_26647__$1);

return statearr_26684;
})();
if(inst_26649){
var statearr_26685_26716 = state_26679__$1;
(statearr_26685_26716[(1)] = (5));

} else {
var statearr_26686_26717 = state_26679__$1;
(statearr_26686_26717[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (15))){
var inst_26669 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26687_26718 = state_26679__$1;
(statearr_26687_26718[(2)] = inst_26669);

(statearr_26687_26718[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (13))){
var state_26679__$1 = state_26679;
var statearr_26688_26719 = state_26679__$1;
(statearr_26688_26719[(2)] = null);

(statearr_26688_26719[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (6))){
var inst_26644 = (state_26679[(7)]);
var inst_26665 = (inst_26644 > (0));
var state_26679__$1 = state_26679;
if(cljs.core.truth_(inst_26665)){
var statearr_26689_26720 = state_26679__$1;
(statearr_26689_26720[(1)] = (12));

} else {
var statearr_26690_26721 = state_26679__$1;
(statearr_26690_26721[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (3))){
var inst_26677 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26679__$1,inst_26677);
} else {
if((state_val_26680 === (12))){
var inst_26643 = (state_26679[(8)]);
var inst_26667 = cljs.core.vec(inst_26643);
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26679__$1,(15),out,inst_26667);
} else {
if((state_val_26680 === (2))){
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26679__$1,(4),ch);
} else {
if((state_val_26680 === (11))){
var inst_26659 = (state_26679[(2)]);
var inst_26660 = (new Array(n));
var inst_26643 = inst_26660;
var inst_26644 = (0);
var state_26679__$1 = (function (){var statearr_26691 = state_26679;
(statearr_26691[(7)] = inst_26644);

(statearr_26691[(10)] = inst_26659);

(statearr_26691[(8)] = inst_26643);

return statearr_26691;
})();
var statearr_26692_26722 = state_26679__$1;
(statearr_26692_26722[(2)] = null);

(statearr_26692_26722[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (9))){
var inst_26643 = (state_26679[(8)]);
var inst_26657 = cljs.core.vec(inst_26643);
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26679__$1,(11),out,inst_26657);
} else {
if((state_val_26680 === (5))){
var inst_26652 = (state_26679[(11)]);
var inst_26644 = (state_26679[(7)]);
var inst_26647 = (state_26679[(9)]);
var inst_26643 = (state_26679[(8)]);
var inst_26651 = (inst_26643[inst_26644] = inst_26647);
var inst_26652__$1 = (inst_26644 + (1));
var inst_26653 = (inst_26652__$1 < n);
var state_26679__$1 = (function (){var statearr_26693 = state_26679;
(statearr_26693[(11)] = inst_26652__$1);

(statearr_26693[(12)] = inst_26651);

return statearr_26693;
})();
if(cljs.core.truth_(inst_26653)){
var statearr_26694_26723 = state_26679__$1;
(statearr_26694_26723[(1)] = (8));

} else {
var statearr_26695_26724 = state_26679__$1;
(statearr_26695_26724[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (14))){
var inst_26672 = (state_26679[(2)]);
var inst_26673 = cljs.core.async.close_BANG_(out);
var state_26679__$1 = (function (){var statearr_26697 = state_26679;
(statearr_26697[(13)] = inst_26672);

return statearr_26697;
})();
var statearr_26698_26725 = state_26679__$1;
(statearr_26698_26725[(2)] = inst_26673);

(statearr_26698_26725[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (10))){
var inst_26663 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26699_26726 = state_26679__$1;
(statearr_26699_26726[(2)] = inst_26663);

(statearr_26699_26726[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26680 === (8))){
var inst_26652 = (state_26679[(11)]);
var inst_26643 = (state_26679[(8)]);
var tmp26696 = inst_26643;
var inst_26643__$1 = tmp26696;
var inst_26644 = inst_26652;
var state_26679__$1 = (function (){var statearr_26700 = state_26679;
(statearr_26700[(7)] = inst_26644);

(statearr_26700[(8)] = inst_26643__$1);

return statearr_26700;
})();
var statearr_26701_26727 = state_26679__$1;
(statearr_26701_26727[(2)] = null);

(statearr_26701_26727[(1)] = (2));


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
});})(c__23954__auto___26713,out))
;
return ((function (switch__23828__auto__,c__23954__auto___26713,out){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_26705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26705[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_26705[(1)] = (1));

return statearr_26705;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_26679){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_26679);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e26706){if((e26706 instanceof Object)){
var ex__23832__auto__ = e26706;
var statearr_26707_26728 = state_26679;
(statearr_26707_26728[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26679);

return cljs.core.cst$kw$recur;
} else {
throw e26706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__26729 = state_26679;
state_26679 = G__26729;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_26679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_26679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___26713,out))
})();
var state__23956__auto__ = (function (){var statearr_26708 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_26708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___26713);

return statearr_26708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___26713,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26730 = [];
var len__8739__auto___26804 = arguments.length;
var i__8740__auto___26805 = (0);
while(true){
if((i__8740__auto___26805 < len__8739__auto___26804)){
args26730.push((arguments[i__8740__auto___26805]));

var G__26806 = (i__8740__auto___26805 + (1));
i__8740__auto___26805 = G__26806;
continue;
} else {
}
break;
}

var G__26732 = args26730.length;
switch (G__26732) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26730.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23954__auto___26808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23954__auto___26808,out){
return (function (){
var f__23955__auto__ = (function (){var switch__23828__auto__ = ((function (c__23954__auto___26808,out){
return (function (state_26774){
var state_val_26775 = (state_26774[(1)]);
if((state_val_26775 === (7))){
var inst_26770 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26776_26809 = state_26774__$1;
(statearr_26776_26809[(2)] = inst_26770);

(statearr_26776_26809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (1))){
var inst_26733 = [];
var inst_26734 = inst_26733;
var inst_26735 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26774__$1 = (function (){var statearr_26777 = state_26774;
(statearr_26777[(7)] = inst_26735);

(statearr_26777[(8)] = inst_26734);

return statearr_26777;
})();
var statearr_26778_26810 = state_26774__$1;
(statearr_26778_26810[(2)] = null);

(statearr_26778_26810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (4))){
var inst_26738 = (state_26774[(9)]);
var inst_26738__$1 = (state_26774[(2)]);
var inst_26739 = (inst_26738__$1 == null);
var inst_26740 = cljs.core.not(inst_26739);
var state_26774__$1 = (function (){var statearr_26779 = state_26774;
(statearr_26779[(9)] = inst_26738__$1);

return statearr_26779;
})();
if(inst_26740){
var statearr_26780_26811 = state_26774__$1;
(statearr_26780_26811[(1)] = (5));

} else {
var statearr_26781_26812 = state_26774__$1;
(statearr_26781_26812[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (15))){
var inst_26764 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26782_26813 = state_26774__$1;
(statearr_26782_26813[(2)] = inst_26764);

(statearr_26782_26813[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (13))){
var state_26774__$1 = state_26774;
var statearr_26783_26814 = state_26774__$1;
(statearr_26783_26814[(2)] = null);

(statearr_26783_26814[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (6))){
var inst_26734 = (state_26774[(8)]);
var inst_26759 = inst_26734.length;
var inst_26760 = (inst_26759 > (0));
var state_26774__$1 = state_26774;
if(cljs.core.truth_(inst_26760)){
var statearr_26784_26815 = state_26774__$1;
(statearr_26784_26815[(1)] = (12));

} else {
var statearr_26785_26816 = state_26774__$1;
(statearr_26785_26816[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (3))){
var inst_26772 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26774__$1,inst_26772);
} else {
if((state_val_26775 === (12))){
var inst_26734 = (state_26774[(8)]);
var inst_26762 = cljs.core.vec(inst_26734);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26774__$1,(15),out,inst_26762);
} else {
if((state_val_26775 === (2))){
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26774__$1,(4),ch);
} else {
if((state_val_26775 === (11))){
var inst_26738 = (state_26774[(9)]);
var inst_26742 = (state_26774[(10)]);
var inst_26752 = (state_26774[(2)]);
var inst_26753 = [];
var inst_26754 = inst_26753.push(inst_26738);
var inst_26734 = inst_26753;
var inst_26735 = inst_26742;
var state_26774__$1 = (function (){var statearr_26786 = state_26774;
(statearr_26786[(11)] = inst_26754);

(statearr_26786[(7)] = inst_26735);

(statearr_26786[(12)] = inst_26752);

(statearr_26786[(8)] = inst_26734);

return statearr_26786;
})();
var statearr_26787_26817 = state_26774__$1;
(statearr_26787_26817[(2)] = null);

(statearr_26787_26817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (9))){
var inst_26734 = (state_26774[(8)]);
var inst_26750 = cljs.core.vec(inst_26734);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26774__$1,(11),out,inst_26750);
} else {
if((state_val_26775 === (5))){
var inst_26738 = (state_26774[(9)]);
var inst_26735 = (state_26774[(7)]);
var inst_26742 = (state_26774[(10)]);
var inst_26742__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26738) : f.call(null,inst_26738));
var inst_26743 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26742__$1,inst_26735);
var inst_26744 = cljs.core.keyword_identical_QMARK_(inst_26735,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26745 = (inst_26743) || (inst_26744);
var state_26774__$1 = (function (){var statearr_26788 = state_26774;
(statearr_26788[(10)] = inst_26742__$1);

return statearr_26788;
})();
if(cljs.core.truth_(inst_26745)){
var statearr_26789_26818 = state_26774__$1;
(statearr_26789_26818[(1)] = (8));

} else {
var statearr_26790_26819 = state_26774__$1;
(statearr_26790_26819[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (14))){
var inst_26767 = (state_26774[(2)]);
var inst_26768 = cljs.core.async.close_BANG_(out);
var state_26774__$1 = (function (){var statearr_26792 = state_26774;
(statearr_26792[(13)] = inst_26767);

return statearr_26792;
})();
var statearr_26793_26820 = state_26774__$1;
(statearr_26793_26820[(2)] = inst_26768);

(statearr_26793_26820[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (10))){
var inst_26757 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26794_26821 = state_26774__$1;
(statearr_26794_26821[(2)] = inst_26757);

(statearr_26794_26821[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26775 === (8))){
var inst_26738 = (state_26774[(9)]);
var inst_26742 = (state_26774[(10)]);
var inst_26734 = (state_26774[(8)]);
var inst_26747 = inst_26734.push(inst_26738);
var tmp26791 = inst_26734;
var inst_26734__$1 = tmp26791;
var inst_26735 = inst_26742;
var state_26774__$1 = (function (){var statearr_26795 = state_26774;
(statearr_26795[(7)] = inst_26735);

(statearr_26795[(8)] = inst_26734__$1);

(statearr_26795[(14)] = inst_26747);

return statearr_26795;
})();
var statearr_26796_26822 = state_26774__$1;
(statearr_26796_26822[(2)] = null);

(statearr_26796_26822[(1)] = (2));


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
});})(c__23954__auto___26808,out))
;
return ((function (switch__23828__auto__,c__23954__auto___26808,out){
return (function() {
var cljs$core$async$state_machine__23829__auto__ = null;
var cljs$core$async$state_machine__23829__auto____0 = (function (){
var statearr_26800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26800[(0)] = cljs$core$async$state_machine__23829__auto__);

(statearr_26800[(1)] = (1));

return statearr_26800;
});
var cljs$core$async$state_machine__23829__auto____1 = (function (state_26774){
while(true){
var ret_value__23830__auto__ = (function (){try{while(true){
var result__23831__auto__ = switch__23828__auto__(state_26774);
if(cljs.core.keyword_identical_QMARK_(result__23831__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23831__auto__;
}
break;
}
}catch (e26801){if((e26801 instanceof Object)){
var ex__23832__auto__ = e26801;
var statearr_26802_26823 = state_26774;
(statearr_26802_26823[(5)] = ex__23832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26774);

return cljs.core.cst$kw$recur;
} else {
throw e26801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23830__auto__,cljs.core.cst$kw$recur)){
var G__26824 = state_26774;
state_26774 = G__26824;
continue;
} else {
return ret_value__23830__auto__;
}
break;
}
});
cljs$core$async$state_machine__23829__auto__ = function(state_26774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23829__auto____1.call(this,state_26774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23829__auto____0;
cljs$core$async$state_machine__23829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23829__auto____1;
return cljs$core$async$state_machine__23829__auto__;
})()
;})(switch__23828__auto__,c__23954__auto___26808,out))
})();
var state__23956__auto__ = (function (){var statearr_26803 = (f__23955__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23955__auto__.cljs$core$IFn$_invoke$arity$0() : f__23955__auto__.call(null));
(statearr_26803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23954__auto___26808);

return statearr_26803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23956__auto__);
});})(c__23954__auto___26808,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

