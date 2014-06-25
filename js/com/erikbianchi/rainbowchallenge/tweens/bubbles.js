(function($)
{

    var b;
    var dx = [];
    var x = [];
    var y = [];
    var a = [];
    var sx = [];
    var sy = [];
    var bh = [];
    var w;
    var h;
    var r = Math.random;

    $.animate = function()
    {
        var l = b.length;
        for (i = 0; i < l; ++i)
        {
            y[i] -= sy[i];
            if (y[i] < -bh[i])
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
        window.requestAnimationFrame($.animate)
    }

    $.init = function(bubbles)
    {
        b = bubbles;
        w = window.innerWidth;
        h = window.innerHeight;

        var l = bubbles.length;
        for (var i = 0; i < l; ++i)
        {
            dx[i] = 0;
            x[i] = r() * ( w - 50 );
            y[i] = Math.floor( r() * (h+300 - h + 1) + h )
            a[i] = Math.random() * 15;
            sx[i] = 0.02 + r() / 10;
            sy[i] = 0.7 + r();
            bh[i] = parseInt(b[i].style.height);
        }


    }

})(namespace("com.erikbianchi.rainbowchallenge.tweens.bubbles"));
