'use strict';

// インプレッションを非表示にする
const hideAnalytics = () => {
  // TODO: インプレッションの子孫要素を削除しており表示が崩れているので、一番外側のタグ自体を消したい
  const analyticses = document.querySelectorAll("a[href$='/analytics']");
  analyticses.forEach((analytics) => analytics.parentNode?.remove());
};

// ロード完了時のイベントハンドラ
const onLoaded = () => {
  const intervalId = setInterval(function () {
    // mainタグがロードされたらintervalを終了する
    if (document.querySelector("a[href$='/analytics']") != null) {
      clearInterval(intervalId);
      hideAnalytics();

      const target = document.getElementsByTagName('section')[0];
      // オブザーバーの作成
      const observer = new MutationObserver(hideAnalytics);
      const config = { attributes: true, childList: true, subtree: true };
      // 監視の開始
      observer.observe(target, config);
    } else {
      console.log('waiting...');
    }
  }, 1000);
};

window.addEventListener('load', onLoaded, false);
