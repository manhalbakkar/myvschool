
  function r(n) {
    return Math.floor(n * Math.random());
  }

  function rr(a) {
    return r(a.length);
  }

  function rrr(a) {
    return a[rr(a)];
  }

  function bad_random_password() {
    var N = 8;
    var X = [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      "abcdefghijklmnopqrstuvwxyz".split(""),
      "0123456789".split(""),
      '~!@#$%^&*()_+`-={}|[]\\:";\'<>?,./'.split(''),
      "$%&*@#!_:~".split(""),
    ];
    var s = '';
    var i = N;
    var used = X.map(function(){return false;});
    while (i > 0) {
      var which = rr(X);
      var chars = X[which];
      s += rrr(chars);
      i--;
      if (used[which] && i < X.length) {
        X.splice(which,1);
        used.splice(which,1);
      } else {
        used[which] = true;
      }
    }
    return s;
  }

  (function () {
    var x = document.getElementById('password');
    var a = document.getElementById('another');
    a.onclick = function() {
      x.textContent = bad_random_password();
    };
    a.click();
  })();