'use strict';

// インプレッションを非表示にする
const hideAnalytics = () => {
  var analyticses = document.querySelectorAll("a[href$='/analytics']");
  analyticses.forEach(analytics => analytics.remove());
}

// ロード完了時のイベントハンドラ
const onLoaded = () => {
  // 
  const jsInitCheckTimer = setInterval(jsLoaded, 1000);
  // コンテンツのロード完了時のイベントハンドラ
  function jsLoaded() {
    // mainタグがロードされたらintervalを終了する
    if (document.querySelector("main") != null) {
      clearInterval(jsInitCheckTimer);

      const target = document.getElementsByTagName('main')[0];
      //オブザーバーの作成
      var observer = new MutationObserver(hideAnalytics);
      const config = {attributes: true, childList: true, subtree: true};
      //監視の開始
      observer.observe(target, config);
      hideAnalytics()
    } else {
      console.log("waiting...")
    }
  }
} 

window.addEventListener('load', onLoaded, false); 