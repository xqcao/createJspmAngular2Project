/* */ 
"format cjs";
'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var common_tools_1 = require('./common_tools');
var context = lang_1.global;
/**
 * Enabled Angular 2 debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 */
function enableDebugTools(ref) {
    context.ng = new common_tools_1.AngularTools(ref);
}
exports.enableDebugTools = enableDebugTools;
/**
 * Disables Angular 2 tools.
 */
function disableDebugTools() {
    delete context.ng;
}
exports.disableDebugTools = disableDebugTools;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUJSSmVyMUo5LnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci90b29scy90b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXFCLDBCQUEwQixDQUFDLENBQUE7QUFFaEQsNkJBQTJCLGdCQUFnQixDQUFDLENBQUE7QUFFNUMsSUFBSSxPQUFPLEdBQVEsYUFBTSxDQUFDO0FBRTFCOzs7Ozs7Ozs7O0dBVUc7QUFDSCwwQkFBaUMsR0FBaUI7SUFDaEQsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLDJCQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUZlLHdCQUFnQixtQkFFL0IsQ0FBQTtBQUVEOztHQUVHO0FBQ0g7SUFDRSxPQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUZlLHlCQUFpQixvQkFFaEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2xvYmFsfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtDb21wb25lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeSc7XG5pbXBvcnQge0FuZ3VsYXJUb29sc30gZnJvbSAnLi9jb21tb25fdG9vbHMnO1xuXG52YXIgY29udGV4dCA9IDxhbnk+Z2xvYmFsO1xuXG4vKipcbiAqIEVuYWJsZWQgQW5ndWxhciAyIGRlYnVnIHRvb2xzIHRoYXQgYXJlIGFjY2Vzc2libGUgdmlhIHlvdXIgYnJvd3NlcidzXG4gKiBkZXZlbG9wZXIgY29uc29sZS5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAxLiBPcGVuIGRldmVsb3BlciBjb25zb2xlIChlLmcuIGluIENocm9tZSBDdHJsICsgU2hpZnQgKyBqKVxuICogMS4gVHlwZSBgbmcuYCAodXN1YWxseSB0aGUgY29uc29sZSB3aWxsIHNob3cgYXV0by1jb21wbGV0ZSBzdWdnZXN0aW9uKVxuICogMS4gVHJ5IHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHByb2ZpbGVyIGBuZy5wcm9maWxlci50aW1lQ2hhbmdlRGV0ZWN0aW9uKClgXG4gKiAgICB0aGVuIGhpdCBFbnRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZURlYnVnVG9vbHMocmVmOiBDb21wb25lbnRSZWYpOiB2b2lkIHtcbiAgY29udGV4dC5uZyA9IG5ldyBBbmd1bGFyVG9vbHMocmVmKTtcbn1cblxuLyoqXG4gKiBEaXNhYmxlcyBBbmd1bGFyIDIgdG9vbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRGVidWdUb29scygpOiB2b2lkIHtcbiAgZGVsZXRlIGNvbnRleHQubmc7XG59XG4iXX0=