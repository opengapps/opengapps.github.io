document.addEventListener('DOMContentLoaded',function(){window.componentHandler.upgradeDom();try{(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client: "ca-pub-9489060368971640",enable_page_level_ads:true})}catch(e){};for(var iAd=0;iAd<document.getElementsByClassName('adsbygoogle').length;iAd++){try{(window.adsbygoogle||[]).push({});}catch(e){}}});
var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');
if (! dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}
showDialogButton.addEventListener('click', function() {
  dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
  dialog.close();
});
