(function($)
{

    var b;
    var s = 20;
    var dx = [];
    var x = [];
    var y = [];
    var a = [];
    var sx = [];
    var sy = [];
    var w = window.innerWidth;
    var h = window.innerHeight
    var r = Math.random;

    $.animate = function()
    {
        var l = b.length;
        for (i = 0; i < l; ++i)
        {
            y[i] -= sy[i];
            if (y[i] < -200)
            {
                x[i] = r() * (w - a[i] - 30);
                y[i] = h;
                sx[i] = 0.02 + r() / 10;
                sy[i] = 0.7 + r();
            }
            dx[i] += sx[i];

            b[i].style.top = ( y[i] + pageYOffset )+'px';
            b[i].style.left = ( x[i] + a[i] * Math.sin( dx[i] ) + 'px');
        }
        setTimeout($.animate, s);
    }

    $.init = function(bubbles)
    {
        var height = window.innerHeight;
        var l = bubbles.length;

        for (var i = 0; i < l; ++i)
        {
            dx[i] = 0;
            x[i] = r() * ( window.innerWidth - 50 );
            y[i] = Math.floor( r() * (height+300 - height + 1) + height )
            a[i] = Math.random() * 15;
            sx[i] = 0.02 + r() / 10;
            sy[i] = 0.7 + r();
        }

        b = bubbles;
    }

})(namespace("com.erikbianchi.rainbowchallenge.tweens.bubbles"));
