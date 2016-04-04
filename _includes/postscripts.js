function goBackToBlog(){
var back=getUrlParam('back');
if(back=="true"){window.history.back();}
else{location.assign('{{ site.blogurl }}');}}
