(function ()
{

    var GLOBAL_NAMESPACE_ID = "namespace";

    // singleton
    var _globalnamespace = typeof _globalnamespace == "undefined" ? {} : _globalnamespace;


    function namespace(path)
    {
        var o = _globalnamespace;
        var a = path.split(".");

        // super impressive use of the conditional operator
        for (var i = 0; i < a.length; ++i) {
            o = o[a[i]] = typeof o[a[i]] === "undefined" ? {} : o[a[i]];
        }

        return o;
    }


    this[GLOBAL_NAMESPACE_ID] = namespace;

})();

