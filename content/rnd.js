// Random helpers shared by the randomized questions and the Endless Gauntlet.
window.RND = {
  int: function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
  pick: function (a) { return a[Math.floor(Math.random() * a.length)]; },
  shuf: function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; },
  // Builds multiple-choice options: the correct answer first (the app shuffles), plus unique wrong ones.
  opts: function (correct, wrongs) {
    var c = String(correct), seen = [c], n = Number(c), k = 1;
    (wrongs || []).forEach(function (w) { w = String(w); if (seen.indexOf(w) < 0) seen.push(w); });
    while (seen.length < 4 && k < 60) {
      var w = isNaN(n) ? ['None', 'Error', '(nothing)', '0', 'undefined'][k % 5] : String(n + (k % 2 ? 1 : -1) * Math.ceil(k / 2));
      if (seen.indexOf(w) < 0) seen.push(w);
      k++;
    }
    return { options: seen.slice(0, 4), answer: 0 };
  }
};
