// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader');
goog.require('cljs.core');
goog.require('cljs.tools.reader.impl.commons');
goog.require('goog.string');
goog.require('goog.array');
goog.require('cljs.tools.reader.reader_types');
goog.require('goog.string.StringBuffer');
goog.require('cljs.tools.reader.impl.utils');
goog.require('clojure.string');






cljs.tools.reader.macro_terminating_QMARK_ = (function cljs$tools$reader$macro_terminating_QMARK_(ch){
var G__16491 = ch;
switch (G__16491) {
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
cljs.tools.reader.sb = (new goog.string.StringBuffer());
/**
 * Read in a single logical token from the reader
 */
cljs.tools.reader.read_token = (function cljs$tools$reader$read_token(rdr,initch){
if((initch == null)){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
} else {
cljs.tools.reader.sb.clear();

var ch = initch;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (cljs.tools.reader.macro_terminating_QMARK_(ch)) || ((ch == null))){
if((ch == null)){
} else {
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);
}

return cljs.tools.reader.sb.toString();
} else {
cljs.tools.reader.sb.append(ch);

var G__16493 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__16493;
continue;
}
break;
}
}
});
cljs.tools.reader.read_dispatch = (function cljs$tools$reader$read_dispatch(rdr,_,opts,pending_forms){
var temp__6751__auto__ = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__6751__auto__)){
var ch = temp__6751__auto__;
var temp__6751__auto____$1 = (cljs.tools.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.dispatch_macros.call(null,ch));
if(cljs.core.truth_(temp__6751__auto____$1)){
var dm = temp__6751__auto____$1;
return (dm.cljs$core$IFn$_invoke$arity$4 ? dm.cljs$core$IFn$_invoke$arity$4(rdr,ch,opts,pending_forms) : dm.call(null,rdr,ch,opts,pending_forms));
} else {
var G__16499 = (function (){var G__16503 = rdr;
G__16503.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

return G__16503;
})();
var G__16500 = ch;
var G__16501 = opts;
var G__16502 = pending_forms;
return (cljs.tools.reader.read_tagged.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.read_tagged.cljs$core$IFn$_invoke$arity$4(G__16499,G__16500,G__16501,G__16502) : cljs.tools.reader.read_tagged.call(null,G__16499,G__16500,G__16501,G__16502));
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading character"], 0));
}
});
cljs.tools.reader.read_unmatched_delimiter = (function cljs$tools$reader$read_unmatched_delimiter(rdr,ch,opts,pending_forms){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.tools.reader.read_regex = (function cljs$tools$reader$read_regex(rdr,ch,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch__$1 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch__$1)){
return cljs.core.re_pattern([cljs.core.str(sb)].join(''));
} else {
if((ch__$1 == null)){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading regex"], 0));
} else {
sb.append(ch__$1);

if(("\\" === ch__$1)){
var ch_16504__$2 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_16504__$2 == null)){
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading regex"], 0));
} else {
}

sb.append(ch_16504__$2);
} else {
}

var G__16505 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch__$1 = G__16505;
continue;
}
}
break;
}
});
cljs.tools.reader.char_code = (function cljs$tools$reader$char_code(ch,base){
var code = parseInt(ch,base);
if(cljs.core.truth_(isNaN(code))){
return (-1);
} else {
return code;
}
});
cljs.tools.reader.read_unicode_char = (function cljs$tools$reader$read_unicode_char(var_args){
var args16506 = [];
var len__8739__auto___16509 = arguments.length;
var i__8740__auto___16510 = (0);
while(true){
if((i__8740__auto___16510 < len__8739__auto___16509)){
args16506.push((arguments[i__8740__auto___16510]));

var G__16511 = (i__8740__auto___16510 + (1));
i__8740__auto___16510 = G__16511;
continue;
} else {
}
break;
}

var G__16508 = args16506.length;
switch (G__16508) {
case 4:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16506.length)].join('')));

}
});

cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count(token) === l)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid unicode character: \\"),cljs.core.str(token)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),base);
if((d === (-1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid digit: "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
var G__16513 = (i + (1));
var G__16514 = (d + (uc * base));
i = G__16513;
uc = G__16514;
continue;
}
}
break;
}
});

cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code(initch,base);
while(true){
if((uc === (-1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid digit: "),cljs.core.str(initch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
if(!((i === length))){
var ch = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core.truth_((function (){var or__7523__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.macros.call(null,ch));
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid character length: "),cljs.core.str(i),cljs.core.str(", should be: "),cljs.core.str(length)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code(ch,base);
rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

if((d === (-1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid digit: "),cljs.core.str(ch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_argument], null));
} else {
var G__16515 = (i + (1));
var G__16516 = (d + (uc * base));
i = G__16515;
uc = G__16516;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.read_unicode_char.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.upper_limit = "\uD7FF".charCodeAt((0));
cljs.tools.reader.lower_limit = "\uE000".charCodeAt((0));
cljs.tools.reader.valid_octal_QMARK_ = (function cljs$tools$reader$valid_octal_QMARK_(token,base){
return (parseInt(token,base) <= (255));
});
/**
 * Read in a character literal
 */
cljs.tools.reader.read_char_STAR_ = (function cljs$tools$reader$read_char_STAR_(rdr,backslash,opts,pending_forms){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(!((ch == null))){
var token = (((cljs.tools.reader.macro_terminating_QMARK_(ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)))?[cljs.core.str(ch)].join(''):cljs.tools.reader.read_token(rdr,ch));
var token_len = token.length;
if(((1) === token_len)){
return token.charAt((0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"newline")){
return "\n";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"space")){
return " ";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"tab")){
return "\t";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"backspace")){
return "\b";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"formfeed")){
return "\f";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),(4),(16));
var ic = c.charCodeAt((0));
if(((ic > cljs.tools.reader.upper_limit)) && ((ic < cljs.tools.reader.lower_limit))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid character constant: \\u",c], 0));
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid octal escape sequence length: ",len], 0));
} else {
var offset = (1);
var base = (8);
var uc = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,offset,len,base);
if(cljs.core.not(cljs.tools.reader.valid_octal_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,offset),base))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Octal escape sequence must be in range [0, 377]"], 0));
} else {
return uc;
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unsupported character: \\",token], 0));

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading character"], 0));
}
});
cljs.tools.reader.starting_line_col_info = (function cljs$tools$reader$starting_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rdr.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),((rdr.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.ending_line_col_info = (function cljs$tools$reader$ending_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rdr.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),rdr.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null)], null);
} else {
return null;
}
});
if(typeof cljs.tools.reader.READ_EOF !== 'undefined'){
} else {
cljs.tools.reader.READ_EOF = (new Object());
}
if(typeof cljs.tools.reader.READ_FINISHED !== 'undefined'){
} else {
cljs.tools.reader.READ_FINISHED = (new Object());
}
cljs.tools.reader._STAR_read_delim_STAR_ = false;
cljs.tools.reader.read_delimited_internal = (function cljs$tools$reader$read_delimited_internal(delim,rdr,opts,pending_forms){
var vec__16520 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16520,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16520,(1),null);
var delim__$1 = cljs.tools.reader.impl.utils.char$(delim);
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var form = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms));
if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.core.persistent_BANG_(a);
} else {
if((form === cljs.tools.reader.READ_EOF)){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading",(cljs.core.truth_(start_line)?[cljs.core.str(", starting at line "),cljs.core.str(start_line),cljs.core.str(" and column "),cljs.core.str(start_column)].join(''):null)], 0));
} else {
var G__16523 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,form);
a = G__16523;
continue;
}
}
break;
}
});
/**
 * Reads and returns a collection ended with delim
 */
cljs.tools.reader.read_delimited = (function cljs$tools$reader$read_delimited(delim,rdr,opts,pending_forms){
var _STAR_read_delim_STAR_16525 = cljs.tools.reader._STAR_read_delim_STAR_;
cljs.tools.reader._STAR_read_delim_STAR_ = true;

try{return cljs.tools.reader.read_delimited_internal(delim,rdr,opts,pending_forms);
}finally {cljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR_16525;
}});
/**
 * Read in a list, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_list = (function cljs$tools$reader$read_list(rdr,_,opts,pending_forms){
var vec__16532 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532,(1),null);
var the_list = cljs.tools.reader.read_delimited(")",rdr,opts,pending_forms);
var vec__16535 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(1),null);
return cljs.core.with_meta(((cljs.core.empty_QMARK_(the_list))?cljs.core.List.EMPTY:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,the_list)),(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var temp__6753__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__6753__auto__)){
var file = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
/**
 * Read in a vector, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_vector = (function cljs$tools$reader$read_vector(rdr,_,opts,pending_forms){
var vec__16544 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16544,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16544,(1),null);
var the_vector = cljs.tools.reader.read_delimited("]",rdr,opts,pending_forms);
var vec__16547 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16547,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16547,(1),null);
return cljs.core.with_meta(the_vector,(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var temp__6753__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__6753__auto__)){
var file = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
cljs.tools.reader.duplicate_keys_error = (function cljs$tools$reader$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$duplicate_keys_error_$_duplicates(seq){
var iter__8380__auto__ = (function cljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__16676(s__16677){
return (new cljs.core.LazySeq(null,(function (){
var s__16677__$1 = s__16677;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__16677__$1);
if(temp__6753__auto__){
var s__16677__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16677__$2)){
var c__8378__auto__ = cljs.core.chunk_first(s__16677__$2);
var size__8379__auto__ = cljs.core.count(c__8378__auto__);
var b__16679 = cljs.core.chunk_buffer(size__8379__auto__);
if((function (){var i__16678 = (0);
while(true){
if((i__16678 < size__8379__auto__)){
var vec__16688 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8378__auto__,i__16678);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16688,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16688,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__16679,id);

var G__16694 = (i__16678 + (1));
i__16678 = G__16694;
continue;
} else {
var G__16695 = (i__16678 + (1));
i__16678 = G__16695;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16679),cljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__16676(cljs.core.chunk_rest(s__16677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16679),null);
}
} else {
var vec__16691 = cljs.core.first(s__16677__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(1),null);
if((freq > (1))){
return cljs.core.cons(id,cljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__16676(cljs.core.rest(s__16677__$2)));
} else {
var G__16696 = cljs.core.rest(s__16677__$2);
s__16677__$1 = G__16696;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8380__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
/**
 * Read in a map, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_map = (function cljs$tools$reader$read_map(rdr,_,opts,pending_forms){
var vec__16703 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16703,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16703,(1),null);
var the_map = cljs.tools.reader.read_delimited("}",rdr,opts,pending_forms);
var map_count = cljs.core.count(the_map);
var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),the_map);
var key_set = cljs.core.set(ks);
var vec__16706 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16706,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16706,(1),null);
if(cljs.core.odd_QMARK_(map_count)){
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(key_set),cljs.core.count(ks))){
} else {
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([cljs.tools.reader.duplicate_keys_error("Map literal contains duplicate key",ks)], 0));
}

return cljs.core.with_meta((((map_count === (0)))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.to_array(the_map))),(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var temp__6753__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__6753__auto__)){
var file = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
cljs.tools.reader.read_number = (function cljs$tools$reader$read_number(rdr,initch){
var sb = (function (){var G__16711 = (new goog.string.StringBuffer());
G__16711.append(initch);

return G__16711;
})();
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(cljs.core.truth_((function (){var or__7523__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = (cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.macros.call(null,ch));
if(cljs.core.truth_(or__7523__auto____$1)){
return or__7523__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str(sb)].join('');
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

var or__7523__auto__ = cljs.tools.reader.impl.commons.match_number(s);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__16713 = (function (){var G__16712 = sb;
G__16712.append(ch);

return G__16712;
})();
var G__16714 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__16713;
ch = G__16714;
continue;
}
break;
}
});
cljs.tools.reader.escape_char = (function cljs$tools$reader$escape_char(sb,rdr){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var G__16718 = ch;
switch (G__16718) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(((-1) === (function (){var G__16719 = (ch__$1 | (0));
var G__16720 = (16);
return parseInt(G__16719,G__16720);
})())){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid unicode escape: \\u",ch__$1], 0));
} else {
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_(ch)){
var ch__$1 = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Octal escape sequence must be in range [0, 377]"], 0));
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unsupported escape character: \\",ch], 0));
}

}
});
cljs.tools.reader.read_string_STAR_ = (function cljs$tools$reader$read_string_STAR_(reader,_,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if((ch == null)){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading string"], 0));
} else {
var G__16725 = ch;
switch (G__16725) {
case "\\":
var G__16729 = (function (){var G__16726 = sb;
G__16726.append(cljs.tools.reader.escape_char(sb,reader));

return G__16726;
})();
var G__16730 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__16729;
ch = G__16730;
continue;

break;
case "\"":
return [cljs.core.str(sb)].join('');

break;
default:
var G__16731 = (function (){var G__16727 = sb;
G__16727.append(ch);

return G__16727;
})();
var G__16732 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__16731;
ch = G__16732;
continue;

}
}
break;
}
});
cljs.tools.reader.loc_info = (function cljs$tools$reader$loc_info(rdr,line,column){
if((line == null)){
return null;
} else {
var file = cljs.tools.reader.reader_types.get_file_name(rdr);
var filem = (((file == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null));
var vec__16736 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16736,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16736,(1),null);
var lcm = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([filem,lcm], 0));
}
});
cljs.tools.reader.read_symbol = (function cljs$tools$reader$read_symbol(rdr,initch){
var vec__16743 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16743,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16743,(1),null);
var token = cljs.tools.reader.read_token(rdr,initch);
if((token == null)){
return null;
} else {
var G__16746 = token;
switch (G__16746) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return cljs.core.cst$sym$_SLASH_;

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var p = cljs.tools.reader.impl.commons.parse_symbol(token);
if(!((p == null))){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(p.cljs$core$IIndexed$_nth$arity$2(null,(0)),p.cljs$core$IIndexed$_nth$arity$2(null,(1)));
return sym.cljs$core$IWithMeta$_with_meta$arity$2(null,cljs.tools.reader.loc_info(rdr,line,column));
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid token: ",token], 0));
}

}
}
});
/**
 * Map from ns alias to ns, if non-nil, it will be used to resolve read-time
 * ns aliases.
 * 
 * Defaults to nil
 */
cljs.tools.reader._STAR_alias_map_STAR_ = null;
cljs.tools.reader.resolve_ns = (function cljs$tools$reader$resolve_ns(sym){
var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader._STAR_alias_map_STAR_,sym);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
var temp__6753__auto__ = cljs.core.find_ns(sym);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(ns));
} else {
return null;
}
}
});
cljs.tools.reader.read_keyword = (function cljs$tools$reader$read_keyword(reader,initch,opts,pending_forms){
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch))){
var token = cljs.tools.reader.read_token(reader,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol(token);
if(!((s == null))){
var ns = s.cljs$core$IIndexed$_nth$arity$2(null,(0));
var name = s.cljs$core$IIndexed$_nth$arity$2(null,(1));
if((":" === token.charAt((0)))){
if(!((ns == null))){
var ns__$1 = cljs.tools.reader.resolve_ns(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ns,(1))));
if(!((ns__$1 == null))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns__$1)].join(''),name);
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: :",token], 0));
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core._STAR_ns_STAR_)].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)));
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: :",token], 0));
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: :"], 0));
}
});
/**
 * Returns a function which wraps a reader in a call to sym
 */
cljs.tools.reader.wrapping_reader = (function cljs$tools$reader$wrapping_reader(sym){
return (function (rdr,_,opts,pending_forms){
var x__8452__auto__ = sym;
return cljs.core._conj((function (){var x__8452__auto____$1 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto____$1);
})(),x__8452__auto__);
});
});
/**
 * Read metadata and return the following object with the metadata applied
 */
cljs.tools.reader.read_meta = (function cljs$tools$reader$read_meta(rdr,_,opts,pending_forms){
if((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(rdr)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_(cljs.tools.reader.reader_types.peek_char(rdr))))){
return cljs.tools.reader.reader_types.log_source_STAR_(rdr,(function (){
var vec__16758 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16758,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16758,(1),null);
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol, Keyword, String or Map"], 0));
}

var o = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__7511__auto__ = line;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.seq_QMARK_(o);
} else {
return and__7511__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$line,line,cljs.core.array_seq([cljs.core.cst$kw$column,column], 0)):m);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$)))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m__$1], 0)));
} else {
return cljs.core.reset_meta_BANG_(o,m__$1);
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IMetas"], 0));
}
}));
} else {
var vec__16763 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(1),null);
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol, Keyword, String or Map"], 0));
}

var o = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__7511__auto__ = line;
if(cljs.core.truth_(and__7511__auto__)){
return cljs.core.seq_QMARK_(o);
} else {
return and__7511__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$line,line,cljs.core.array_seq([cljs.core.cst$kw$column,column], 0)):m);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$)))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m__$1], 0)));
} else {
return cljs.core.reset_meta_BANG_(o,m__$1);
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IMetas"], 0));
}
}
});
cljs.tools.reader.read_set = (function cljs$tools$reader$read_set(rdr,_,opts,pending_forms){
var vec__16774 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16774,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16774,(1),null);
var start_column__$1 = (cljs.core.truth_(start_column)?((start_column - (1)) | (0)):null);
var coll = cljs.tools.reader.read_delimited("}",rdr,opts,pending_forms);
var the_set = cljs.core.set(coll);
var vec__16777 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([cljs.tools.reader.duplicate_keys_error("Set literal contains duplicate key",coll)], 0));
}

return cljs.core.with_meta(the_set,(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var temp__6753__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__6753__auto__)){
var file = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column__$1,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
/**
 * Read and discard the first object from rdr
 */
cljs.tools.reader.read_discard = (function cljs$tools$reader$read_discard(rdr,_,opts,pending_forms){
var G__16781 = rdr;
(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(G__16781,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,G__16781,true,null,opts,pending_forms));

return G__16781;
});
cljs.tools.reader.RESERVED_FEATURES = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$none,null], null), null);
cljs.tools.reader.has_feature_QMARK_ = (function cljs$tools$reader$has_feature_QMARK_(rdr,feature,opts){
if((feature instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,feature)) || (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$features),feature));
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([[cljs.core.str("Feature should be a keyword: "),cljs.core.str(feature)].join('')], 0));
}
});
cljs.tools.reader.check_eof_error = (function cljs$tools$reader$check_eof_error(form,rdr,first_line){
if((form === cljs.tools.reader.READ_EOF)){
if((first_line < (0))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading, starting at line ",first_line], 0));
}
} else {
return null;
}
});
cljs.tools.reader.check_reserved_features = (function cljs$tools$reader$check_reserved_features(rdr,form){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.RESERVED_FEATURES,form))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([[cljs.core.str("Feature name "),cljs.core.str(form),cljs.core.str(" is reserved")].join('')], 0));
} else {
return null;
}
});
cljs.tools.reader.check_invalid_read_cond = (function cljs$tools$reader$check_invalid_read_cond(form,rdr,first_line){
if((form === cljs.tools.reader.READ_FINISHED)){
if((first_line < (0))){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["read-cond requires an even number of forms"], 0));
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([[cljs.core.str("read-cond starting on line "),cljs.core.str(first_line),cljs.core.str(" requires an even number of forms")].join('')], 0));
}
} else {
return null;
}
});
/**
 * Read next form and suppress. Return nil or READ_FINISHED.
 */
cljs.tools.reader.read_suppress = (function cljs$tools$reader$read_suppress(first_line,rdr,opts,pending_forms){
var _STAR_suppress_read_STAR_16789 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = true;

try{var form = (function (){var G__16790 = rdr;
var G__16791 = false;
var G__16792 = cljs.tools.reader.READ_EOF;
var G__16793 = ")";
var G__16794 = opts;
var G__16795 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__16790,G__16791,G__16792,G__16793,G__16794,G__16795) : cljs.tools.reader.read_STAR_.call(null,G__16790,G__16791,G__16792,G__16793,G__16794,G__16795));
})();
cljs.tools.reader.check_eof_error(form,rdr,first_line);

if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
return null;
}
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_16789;
}});
if(typeof cljs.tools.reader.NO_MATCH !== 'undefined'){
} else {
cljs.tools.reader.NO_MATCH = (new Object());
}
/**
 * Read next feature. If matched, read next form and return.
 * Otherwise, read and skip next form, returning READ_FINISHED or nil.
 */
cljs.tools.reader.match_feature = (function cljs$tools$reader$match_feature(first_line,rdr,opts,pending_forms){
var feature = (function (){var G__16809 = rdr;
var G__16810 = false;
var G__16811 = cljs.tools.reader.READ_EOF;
var G__16812 = ")";
var G__16813 = opts;
var G__16814 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__16809,G__16810,G__16811,G__16812,G__16813,G__16814) : cljs.tools.reader.read_STAR_.call(null,G__16809,G__16810,G__16811,G__16812,G__16813,G__16814));
})();
cljs.tools.reader.check_eof_error(feature,rdr,first_line);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feature,cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
cljs.tools.reader.check_reserved_features(rdr,feature);

if(cljs.core.truth_(cljs.tools.reader.has_feature_QMARK_(rdr,feature,opts))){
var G__16815 = (function (){var G__16816 = rdr;
var G__16817 = false;
var G__16818 = cljs.tools.reader.READ_EOF;
var G__16819 = ")";
var G__16820 = opts;
var G__16821 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__16816,G__16817,G__16818,G__16819,G__16820,G__16821) : cljs.tools.reader.read_STAR_.call(null,G__16816,G__16817,G__16818,G__16819,G__16820,G__16821));
})();
cljs.tools.reader.check_eof_error(G__16815,rdr,first_line);

cljs.tools.reader.check_invalid_read_cond(G__16815,rdr,first_line);

return G__16815;
} else {
var or__7523__auto__ = cljs.tools.reader.read_suppress(first_line,rdr,opts,pending_forms);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.tools.reader.NO_MATCH;
}
}
}
});
cljs.tools.reader.read_cond_delimited = (function cljs$tools$reader$read_cond_delimited(rdr,splicing,opts,pending_forms){
var first_line = (cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))?cljs.tools.reader.reader_types.get_line_number(rdr):(-1));
var result = (function (){var matched = cljs.tools.reader.NO_MATCH;
var finished = null;
while(true){
if((matched === cljs.tools.reader.NO_MATCH)){
var match = cljs.tools.reader.match_feature(first_line,rdr,opts,pending_forms);
if((match === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
var G__16830 = match;
var G__16831 = null;
matched = G__16830;
finished = G__16831;
continue;
}
} else {
if(!((finished === cljs.tools.reader.READ_FINISHED))){
var G__16832 = matched;
var G__16833 = cljs.tools.reader.read_suppress(first_line,rdr,opts,pending_forms);
matched = G__16832;
finished = G__16833;
continue;
} else {
return matched;

}
}
break;
}
})();
if((result === cljs.tools.reader.READ_FINISHED)){
return rdr;
} else {
if(cljs.core.truth_(splicing)){
if(((!((result == null)))?((((result.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === result.cljs$core$ISequential$)))?true:false):false)){
var G__16827_16834 = pending_forms;
var G__16828_16835 = cljs.core.to_array(result);
var G__16829_16836 = (0);
goog.array.insertArrayAt(G__16827_16834,G__16828_16835,G__16829_16836);

return rdr;
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Spliced form list in read-cond-splicing must implement java.util.List."], 0));
}
} else {
return result;
}
}
});
cljs.tools.reader.read_cond = (function cljs$tools$reader$read_cond(rdr,_,opts,pending_forms){
if(cljs.core.not((function (){var and__7511__auto__ = opts;
if(cljs.core.truth_(and__7511__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preserve,null,cljs.core.cst$kw$allow,null], null), null).call(null,cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return and__7511__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Conditional read not allowed",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$runtime_DASH_exception], null));
} else {
}

var temp__6751__auto__ = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__6751__auto__)){
var ch = temp__6751__auto__;
var splicing = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"@");
var ch__$1 = ((splicing)?rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null):ch);
if(splicing){
if(cljs.core.truth_(cljs.tools.reader._STAR_read_delim_STAR_)){
} else {
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["cond-splice not in list"], 0));
}
} else {
}

var temp__6751__auto____$1 = ((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch__$1))?cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr):ch__$1);
if(cljs.core.truth_(temp__6751__auto____$1)){
var ch__$2 = temp__6751__auto____$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ch__$2,"(")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("read-cond body must be a list",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$runtime_DASH_exception], null));
} else {
var _STAR_suppress_read_STAR_16838 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = (function (){var or__7523__auto__ = cljs.tools.reader._STAR_suppress_read_STAR_;
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$preserve,cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts));
}
})();

try{if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.tools.reader.impl.utils.reader_conditional(cljs.tools.reader.read_list(rdr,ch__$2,opts,pending_forms),splicing);
} else {
return cljs.tools.reader.read_cond_delimited(rdr,splicing,opts,pending_forms);
}
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_16838;
}}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading character"], 0));
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading character"], 0));
}
});
cljs.tools.reader.arg_env = null;
/**
 * Get a symbol for an anonymous ?argument?
 */
cljs.tools.reader.garg = (function cljs$tools$reader$garg(n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(((((-1) === n))?"rest":[cljs.core.str("p"),cljs.core.str(n)].join(''))),cljs.core.str("__"),cljs.core.str(cljs.tools.reader.impl.utils.next_id()),cljs.core.str("#")].join(''));
});
cljs.tools.reader.read_fn = (function cljs$tools$reader$read_fn(rdr,_,opts,pending_forms){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Nested #()s are not allowed",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
}

var arg_env16846 = cljs.tools.reader.arg_env;
cljs.tools.reader.arg_env = cljs.core.sorted_map();

try{var form = (function (){var G__16847 = (function (){var G__16852 = rdr;
cljs.tools.reader.reader_types.unread(G__16852,"(");

return G__16852;
})();
var G__16848 = true;
var G__16849 = null;
var G__16850 = opts;
var G__16851 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(G__16847,G__16848,G__16849,G__16850,G__16851) : cljs.tools.reader.read_STAR_.call(null,G__16847,G__16848,G__16849,G__16850,G__16851));
})();
var rargs = cljs.core.rseq(cljs.tools.reader.arg_env);
var args = ((rargs)?(function (){var higharg = cljs.core.key(cljs.core.first(rargs));
var args = (function (){var i = (1);
var args = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((i > higharg)){
return cljs.core.persistent_BANG_(args);
} else {
var G__16853 = (i + (1));
var G__16854 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(args,(function (){var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.arg_env,i);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return cljs.tools.reader.garg(i);
}
})());
i = G__16853;
args = G__16854;
continue;
}
break;
}
})();
var args__$1 = (cljs.core.truth_((cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1((-1)) : cljs.tools.reader.arg_env.call(null,(-1))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.cst$sym$_AMPERSAND_,cljs.core.array_seq([(cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1((-1)) : cljs.tools.reader.arg_env.call(null,(-1)))], 0)):args);
return args__$1;
})():cljs.core.PersistentVector.EMPTY);
return cljs.core._conj((function (){var x__8452__auto__ = args;
return cljs.core._conj((function (){var x__8452__auto____$1 = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto____$1);
})(),x__8452__auto__);
})(),cljs.core.cst$sym$fn_STAR_);
}finally {cljs.tools.reader.arg_env = arg_env16846;
}});
/**
 * Registers an argument to the arg-env
 */
cljs.tools.reader.register_arg = (function cljs$tools$reader$register_arg(n){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
var temp__6751__auto__ = (cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1(n) : cljs.tools.reader.arg_env.call(null,n));
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return ret;
} else {
var g = cljs.tools.reader.garg(n);
cljs.tools.reader.arg_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.tools.reader.arg_env,n,g);

return g;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Arg literal not in #()",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
}
});
cljs.tools.reader.read_arg = (function cljs$tools$reader$read_arg(rdr,pct,opts,pending_forms){
if((cljs.tools.reader.arg_env == null)){
return (cljs.tools.reader.read_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.tools.reader.read_symbol.cljs$core$IFn$_invoke$arity$2(rdr,pct) : cljs.tools.reader.read_symbol.call(null,rdr,pct));
} else {
var ch = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (cljs.tools.reader.macro_terminating_QMARK_(ch)) || ((ch == null))){
return cljs.tools.reader.register_arg((1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"&")){
rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.tools.reader.register_arg((-1));
} else {
var n = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(!(cljs.core.integer_QMARK_(n))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Arg literal must be %, %& or %integer",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
return cljs.tools.reader.register_arg(n);
}

}
}
}
});
cljs.tools.reader.gensym_env = null;
cljs.tools.reader.read_unquote = (function cljs$tools$reader$read_unquote(rdr,comma,opts,pending_forms){
var temp__6751__auto__ = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core.truth_(temp__6751__auto__)){
var ch = temp__6751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",ch)){
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing).call(null,(function (){var G__16856 = rdr;
G__16856.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return G__16856;
})(),"@",opts,pending_forms);
} else {
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_unquote).call(null,rdr,"~",opts,pending_forms);
}
} else {
return null;
}
});
cljs.tools.reader.unquote_splicing_QMARK_ = (function cljs$tools$reader$unquote_splicing_QMARK_(form){
return (cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing));
});
cljs.tools.reader.unquote_QMARK_ = (function cljs$tools$reader$unquote_QMARK_(form){
return (cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$clojure$core_SLASH_unquote));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
cljs.tools.reader.expand_list = (function cljs$tools$reader$expand_list(s){
var s__$1 = cljs.core.seq(s);
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first(s__$1);
var ret = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(cljs.tools.reader.unquote_QMARK_(item))?cljs.core._conj((function (){var x__8452__auto__ = cljs.core.second(item);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.cst$sym$clojure$core_SLASH_list):(cljs.core.truth_(cljs.tools.reader.unquote_splicing_QMARK_(item))?cljs.core.second(item):cljs.core._conj((function (){var x__8452__auto__ = (cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1(item) : cljs.tools.reader.syntax_quote_STAR_.call(null,item));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.cst$sym$clojure$core_SLASH_list)
)));
var G__16857 = cljs.core.next(s__$1);
var G__16858 = ret;
s__$1 = G__16857;
r = G__16858;
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(r));
}
break;
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
cljs.tools.reader.flatten_map = (function cljs$tools$reader$flatten_map(form){
var s = cljs.core.seq(form);
var key_vals = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first(s);
var G__16859 = cljs.core.next(s);
var G__16860 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(key_vals,cljs.core.key(e)),cljs.core.val(e));
s = G__16859;
key_vals = G__16860;
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(key_vals));
}
break;
}
});
cljs.tools.reader.register_gensym = (function cljs$tools$reader$register_gensym(sym){
if(cljs.core.not(cljs.tools.reader.gensym_env)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Gensym literal not in syntax-quote",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
}

var or__7523__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.gensym_env,sym);
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
var gs = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(sym),(0),(cljs.core.count(cljs.core.name(sym)) - (1)))),cljs.core.str("__"),cljs.core.str(cljs.tools.reader.impl.utils.next_id()),cljs.core.str("__auto__")].join(''));
cljs.tools.reader.gensym_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.tools.reader.gensym_env,sym,gs);

return gs;
}
});
cljs.tools.reader.add_meta = (function cljs$tools$reader$add_meta(form,ret){
if((function (){var and__7511__auto__ = ((!((form == null)))?((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IWithMeta$)))?true:false):false);
if(and__7511__auto__){
return cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(form),cljs.core.cst$kw$line,cljs.core.array_seq([cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$file,cljs.core.cst$kw$source], 0)));
} else {
return and__7511__auto__;
}
})()){
return cljs.core._conj((function (){var x__8452__auto__ = ret;
return cljs.core._conj((function (){var x__8452__auto____$1 = (function (){var G__16868 = cljs.core.meta(form);
return (cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1(G__16868) : cljs.tools.reader.syntax_quote_STAR_.call(null,G__16868));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto____$1);
})(),x__8452__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta);
} else {
return ret;
}
});
cljs.tools.reader.syntax_quote_coll = (function cljs$tools$reader$syntax_quote_coll(type,coll){
var res = cljs.core._conj((function (){var x__8452__auto__ = cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_concat,cljs.tools.reader.expand_list(coll));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_sequence);
if(cljs.core.truth_(type)){
return cljs.core._conj((function (){var x__8452__auto__ = type;
return cljs.core._conj((function (){var x__8452__auto____$1 = res;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto____$1);
})(),x__8452__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_apply);
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
cljs.tools.reader.map_func = (function cljs$tools$reader$map_func(coll){
if((cljs.core.count(coll) >= (16))){
return cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_array_DASH_map;
}
});
cljs.tools.reader.bool_QMARK_ = (function cljs$tools$reader$bool_QMARK_(x){
return ((x instanceof Boolean)) || (x === true) || (x === false);
});
/**
 * Resolve a symbol s into its fully qualified namespace version
 */
cljs.tools.reader.resolve_symbol = (function cljs$tools$reader$resolve_symbol(s){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("resolve-symbol is not implemented",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,s], null));
});
cljs.tools.reader.syntax_quote_STAR_ = (function cljs$tools$reader$syntax_quote_STAR_(form){
return cljs.tools.reader.add_meta(form,((cljs.core.special_symbol_QMARK_(form))?cljs.core._conj((function (){var x__8452__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.cst$sym$quote):(((form instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__8452__auto__ = (cljs.core.truth_((function (){var and__7511__auto__ = cljs.core.not(cljs.core.namespace(form));
if(and__7511__auto__){
var G__16884 = cljs.core.name(form);
var G__16885 = "#";
return goog.string.endsWith(G__16884,G__16885);
} else {
return and__7511__auto__;
}
})())?cljs.tools.reader.register_gensym(form):(cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1(form) : cljs.tools.reader.resolve_symbol.call(null,form)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.cst$sym$quote):(cljs.core.truth_(cljs.tools.reader.unquote_QMARK_(form))?cljs.core.second(form):(cljs.core.truth_(cljs.tools.reader.unquote_splicing_QMARK_(form))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unquote-splice not in list",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null))})():((cljs.core.coll_QMARK_(form))?((((!((form == null)))?((((form.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IRecord$)))?true:false):false))?form:((cljs.core.map_QMARK_(form))?cljs.tools.reader.syntax_quote_coll(cljs.tools.reader.map_func(form),cljs.tools.reader.flatten_map(form)):((cljs.core.vector_QMARK_(form))?cljs.core._conj((function (){var x__8452__auto__ = cljs.tools.reader.syntax_quote_coll(null,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_vec):((cljs.core.set_QMARK_(form))?cljs.tools.reader.syntax_quote_coll(cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_set,form):(((cljs.core.seq_QMARK_(form)) || (cljs.core.list_QMARK_(form)))?(function (){var seq = cljs.core.seq(form);
if(seq){
return cljs.tools.reader.syntax_quote_coll(null,seq);
} else {
return cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_list);
}
})():(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown Collection type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_operation], null))})()
))))):(cljs.core.truth_((function (){var or__7523__auto__ = (form instanceof cljs.core.Keyword);
if(or__7523__auto__){
return or__7523__auto__;
} else {
var or__7523__auto____$1 = typeof form === 'number';
if(or__7523__auto____$1){
return or__7523__auto____$1;
} else {
var or__7523__auto____$2 = typeof form === 'string';
if(or__7523__auto____$2){
return or__7523__auto____$2;
} else {
var or__7523__auto____$3 = (form == null);
if(or__7523__auto____$3){
return or__7523__auto____$3;
} else {
var or__7523__auto____$4 = cljs.tools.reader.bool_QMARK_(form);
if(cljs.core.truth_(or__7523__auto____$4)){
return or__7523__auto____$4;
} else {
return (form instanceof RegExp);
}
}
}
}
}
})())?form:cljs.core._conj((function (){var x__8452__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8452__auto__);
})(),cljs.core.cst$sym$quote)
)))))));
});
cljs.tools.reader.read_syntax_quote = (function cljs$tools$reader$read_syntax_quote(rdr,backquote,opts,pending_forms){
var gensym_env16888 = cljs.tools.reader.gensym_env;
cljs.tools.reader.gensym_env = cljs.core.PersistentArrayMap.EMPTY;

try{return cljs.tools.reader.syntax_quote_STAR_((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
}finally {cljs.tools.reader.gensym_env = gensym_env16888;
}});
cljs.tools.reader.read_namespaced_map = (function cljs$tools$reader$read_namespaced_map(rdr,_,opts,pending_forms){
var token = cljs.tools.reader.read_token(rdr,cljs.tools.reader.reader_types.read_char(rdr));
var temp__6751__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,":"))?cljs.core.ns_name(cljs.core._STAR_ns_STAR_):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(token)))?(function (){var G__16891 = token;
var G__16891__$1 = (((G__16891 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__16891,(1)));
var G__16891__$2 = (((G__16891__$1 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__16891__$1));
var G__16891__$3 = (((G__16891__$2 == null))?null:cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__16891__$2));
var G__16891__$4 = (((G__16891__$3 == null))?null:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__16891__$3));
if((G__16891__$4 == null)){
return null;
} else {
return cljs.tools.reader.resolve_ns(G__16891__$4);
}
})():(function (){var G__16892 = token;
var G__16892__$1 = (((G__16892 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__16892));
if((G__16892__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__16892__$1);
}
})()
));
if(cljs.core.truth_(temp__6751__auto__)){
var ns = temp__6751__auto__;
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.read_delimited("}",rdr,opts,pending_forms);
if(cljs.core.odd_QMARK_(cljs.core.count(items))){
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

var keys = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),items);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(items));
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys([cljs.core.str(ns)].join(''),keys),vals);
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Namespaced map must specify a map"], 0));
}
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Invalid token used as namespace in namespaced map: ",token], 0));
}
});
cljs.tools.reader.macros = (function cljs$tools$reader$macros(ch){
var G__16894 = ch;
switch (G__16894) {
case "\"":
return cljs.tools.reader.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "'":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$quote);

break;
case "@":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_deref);

break;
case "^":
return cljs.tools.reader.read_meta;

break;
case "`":
return cljs.tools.reader.read_syntax_quote;

break;
case "~":
return cljs.tools.reader.read_unquote;

break;
case "(":
return cljs.tools.reader.read_list;

break;
case ")":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.read_vector;

break;
case "]":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.read_map;

break;
case "}":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.read_char_STAR_;

break;
case "%":
return cljs.tools.reader.read_arg;

break;
case "#":
return cljs.tools.reader.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.dispatch_macros = (function cljs$tools$reader$dispatch_macros(ch){
var G__16897 = ch;
switch (G__16897) {
case "^":
return cljs.tools.reader.read_meta;

break;
case "'":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$var);

break;
case "(":
return cljs.tools.reader.read_fn;

break;
case "{":
return cljs.tools.reader.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader("Unreadable form");

break;
case "=":
return cljs.tools.reader.impl.commons.throwing_reader("read-eval not supported");

break;
case "\"":
return cljs.tools.reader.read_regex;

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.read_discard;

break;
case "?":
return cljs.tools.reader.read_cond;

break;
case ":":
return cljs.tools.reader.read_namespaced_map;

break;
default:
return null;

}
});
cljs.tools.reader.read_tagged = (function cljs$tools$reader$read_tagged(rdr,initch,opts,pending_forms){
var tag = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader tag must be a symbol"], 0));
} else {
}

if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.core.tagged_literal(tag,(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
} else {
var temp__6751__auto__ = (function (){var or__7523__auto__ = (cljs.tools.reader._STAR_data_readers_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader._STAR_data_readers_STAR_.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader._STAR_data_readers_STAR_.call(null,tag));
if(cljs.core.truth_(or__7523__auto__)){
return or__7523__auto__;
} else {
return (cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader.default_data_readers.call(null,tag));
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
var G__16902 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16902) : f.call(null,G__16902));
} else {
var temp__6751__auto____$1 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
if(cljs.core.truth_(temp__6751__auto____$1)){
var f = temp__6751__auto____$1;
var G__16903 = tag;
var G__16904 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16903,G__16904) : f.call(null,G__16903,G__16904));
} else {
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No reader function for tag ",cljs.core.name(tag)], 0));
}
}
}
});
/**
 * Map from reader tag symbols to data reader Vars.
 *   Reader tags without namespace qualifiers are reserved for Clojure.
 *   This light version of tools.reader has no implementation for default
 *   reader tags such as #inst and #uuid.
 */
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * When no data reader is found for a tag and *default-data-reader-fn*
 *   is non-nil, it will be called with two arguments, the tag and the value.
 *   If *default-data-reader-fn* is nil (the default value), an exception
 *   will be thrown for the unknown tag.
 */
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = null;
cljs.tools.reader._STAR_suppress_read_STAR_ = false;
/**
 * Default map of data reader functions provided by Clojure.
 *   May be overridden by binding *data-readers*
 */
cljs.tools.reader.default_data_readers = cljs.core.PersistentArrayMap.EMPTY;
cljs.tools.reader.read_STAR__internal = (function cljs$tools$reader$read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
while(true){
if((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(reader)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_(reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null))))){
return cljs.tools.reader.reader_types.log_source_STAR_(reader,(function (){
while(true){
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF"], 0));
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.read_number(reader,ch);
} else {
var f = cljs.tools.reader.macros(ch);
if(!((f == null))){
var res = (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(reader,ch,opts,pending_forms) : f.call(null,reader,ch,opts,pending_forms));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return (cljs.tools.reader.read_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.tools.reader.read_symbol.cljs$core$IFn$_invoke$arity$2(reader,ch) : cljs.tools.reader.read_symbol.call(null,reader,ch));
}

}
}
}
}
}
break;
}
}));
} else {
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.reader_types.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF"], 0));
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.read_number(reader,ch);
} else {
var f = cljs.tools.reader.macros(ch);
if(!((f == null))){
var res = (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(reader,ch,opts,pending_forms) : f.call(null,reader,ch,opts,pending_forms));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return (cljs.tools.reader.read_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.tools.reader.read_symbol.cljs$core$IFn$_invoke$arity$2(reader,ch) : cljs.tools.reader.read_symbol.call(null,reader,ch));
}

}
}
}
}
}
}
break;
}
});
cljs.tools.reader.read_STAR_ = (function cljs$tools$reader$read_STAR_(var_args){
var args16905 = [];
var len__8739__auto___16909 = arguments.length;
var i__8740__auto___16910 = (0);
while(true){
if((i__8740__auto___16910 < len__8739__auto___16909)){
args16905.push((arguments[i__8740__auto___16910]));

var G__16911 = (i__8740__auto___16910 + (1));
i__8740__auto___16910 = G__16911;
continue;
} else {
}
break;
}

var G__16907 = args16905.length;
switch (G__16907) {
case 5:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16905.length)].join('')));

}
});

cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (reader,eof_error_QMARK_,sentinel,opts,pending_forms){
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,eof_error_QMARK_,sentinel,null,opts,pending_forms);
});

cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 = (function (reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
try{return cljs.tools.reader.read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms);
}catch (e16908){if((e16908 instanceof Error)){
var e = e16908;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_(e)){
var d = cljs.core.ex_data(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reader_DASH_exception,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),cljs.core.cst$kw$column,reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null),cljs.core.cst$kw$file,reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(null)], null):null)], 0)),e);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),cljs.core.cst$kw$column,reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null),cljs.core.cst$kw$file,reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(null)], null):null)], 0)),e);
}
} else {
throw e16908;

}
}});

cljs.tools.reader.read_STAR_.cljs$lang$maxFixedArity = 6;

/**
 * Reads the first object from an IPushbackReader or a java.io.PushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true.
 * Otherwise returns sentinel. If no stream is providen, *in* will be used.
 * 
 * Opts is a persistent map with valid keys:
 *  :read-cond - :allow to process reader conditionals, or
 *               :preserve to keep all branches
 *  :features - persistent set of feature keywords for reader conditionals
 *  :eof - on eof, return value unless :eofthrow, then throw.
 *         if not specified, will throw
 * 
 * To read data structures only, use clojure.tools.reader.edn/read
 * 
 * Note that the function signature of clojure.tools.reader/read and
 * clojure.tools.reader.edn/read is not the same for eof-handling
 */
cljs.tools.reader.read = (function cljs$tools$reader$read(var_args){
var args16913 = [];
var len__8739__auto___16919 = arguments.length;
var i__8740__auto___16920 = (0);
while(true){
if((i__8740__auto___16920 < len__8739__auto___16919)){
args16913.push((arguments[i__8740__auto___16920]));

var G__16921 = (i__8740__auto___16920 + (1));
i__8740__auto___16920 = G__16921;
continue;
} else {
}
break;
}

var G__16915 = args16913.length;
switch (G__16915) {
case 1:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16913.length)].join('')));

}
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(reader,true,null);
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__16916,reader){
var map__16917 = p__16916;
var map__16917__$1 = ((((!((map__16917 == null)))?((((map__16917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16917):map__16917);
var opts = map__16917__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16917__$1,cljs.core.cst$kw$eof,cljs.core.cst$kw$eofthrow);
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eof,cljs.core.cst$kw$eofthrow),eof,null,opts,cljs.core.to_array(cljs.core.PersistentVector.EMPTY));
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3 = (function (reader,eof_error_QMARK_,sentinel){
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,eof_error_QMARK_,sentinel,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.to_array(cljs.core.PersistentVector.EMPTY));
});

cljs.tools.reader.read.cljs$lang$maxFixedArity = 3;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * To read data structures only, use clojure.tools.reader.edn/read-string
 * 
 * Note that the function signature of clojure.tools.reader/read-string and
 * clojure.tools.reader.edn/read-string is not the same for eof-handling
 */
cljs.tools.reader.read_string = (function cljs$tools$reader$read_string(var_args){
var args16923 = [];
var len__8739__auto___16926 = arguments.length;
var i__8740__auto___16927 = (0);
while(true){
if((i__8740__auto___16927 < len__8739__auto___16926)){
args16923.push((arguments[i__8740__auto___16927]));

var G__16928 = (i__8740__auto___16927 + (1));
i__8740__auto___16927 = G__16928;
continue;
} else {
}
break;
}

var G__16925 = args16923.length;
switch (G__16925) {
case 1:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16923.length)].join('')));

}
});

cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s);
});

cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__7511__auto__ = s;
if(cljs.core.truth_(and__7511__auto__)){
return !((s === ""));
} else {
return and__7511__auto__;
}
})())){
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(opts,cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
});

cljs.tools.reader.read_string.cljs$lang$maxFixedArity = 2;

