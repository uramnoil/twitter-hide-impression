'use strict';

const hideAnalytics = () => {
  var analyticses = document.querySelectorAll("a[href$='/analytics']");
  analyticses.forEach(analytics => analytics.innerHTML = "");
}

const onLoaded = () => {
  const jsInitCheckTimer = setInterval(jsLoaded, 1000);
  function jsLoaded() {
    if (document.querySelector("main") != null) {
      // ^="/[a-zA-Z0-9-_]+/status/[0-9]+/analytics
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