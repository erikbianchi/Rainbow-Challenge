(function($)
{

    var STYLE_NAME = "rainbow-fill";
    var PX = "px";

    function draw(width, height)
    {
        height = height * 2;

        var d = this._div = document.createElement("div");
        d.className = STYLE_NAME;
        d.style.width = width + PX;
        d.style.height = height + PX;

        var rect = "rect(0px," + width + "px," + (height / 2) + "px,0px)";
        d.style.clip = rect;

        return d;
    }

    $.FillRainbow = function(width, height)
    {
        this._width = width;
        this._height = height;
        this._div = draw(width, height);
    }

    $.FillRainbow.prototype.getDiv = function()
    {
        return this._div;
    }

    $.FillRainbow.prototype.setPosition = function (x, y)
    {
        this._div.style.left = x + PX;
        this._div.style.top = y + PX;
    }

    $.FillRainbow.prototype.getWidth = function()
    {
        return this._width;
    }

    $.FillRainbow.prototype.getHeight = function()
    {
        return this._height;
    }

})(namespace("com.erikbianchi.rainbowchallenge.shapes.rainbow"));



