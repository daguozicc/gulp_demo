/**
 * Created by lidongdong on 2018/6/10.
 */
var WindowUtils  = {
  $events : {
    shows: [],
    hides : []
  },
  addListener : function (fn , isHide){
    if (typeof fn == 'function'){
      this.$events[(isHide ? 'hides' : 'shows')].push(fn);
    }
  },
  removeListener : function (fn, isHide) {
    var fns = this.$events[(isHide ? 'hides' : 'shows')];
    for (var i = 0;i < fns.length;i ++) {
      if (fn == fns[i]){
        fns.splice(i,1);
        break;
      }
    }
  },
  init : function () {
    var _that = this;
    document.addEventListener('visibilitychange', function () {
      var isHidden = document.hidden;
      if (document.hidden === undefined){
        console.log('Current browser is not support visible');
        return;
      }
      if (isHidden) {
        for (var i = 0;i < _that.$events.hides.length;i ++) {
          try{
            _that.$events.hides[i]();
          }catch(e){
            console.log('Hide error%o', e);
          }
        }
      } else {
        for (var i = 0;i < _that.$events.shows.length;i ++) {
          try{
            _that.$events.shows[i]();
          }catch(e){
            console.log('Show error%o', e);
          }
        }
      }
    })
  }
};

WindowUtils.init();
WindowUtils.addListener(function(){
  console.log('sho zzzzz');
});