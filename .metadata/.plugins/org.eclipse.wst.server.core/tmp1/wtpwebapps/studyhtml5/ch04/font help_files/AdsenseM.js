(function() {
    var currentM;
    currentM = location.href.split("/")[3]; //<-- // 구분자로 짤라와서
    if(currentM=='m'){
        document.writeln('<sc' + 'ript type="text/javascript">');
        document.writeln('<!--');
        document.writeln('google_ad_client = "ca-pub-8124349176400607";');
        document.writeln('/*adsbygoogle */');
        document.writeln('google_ad_slot = "9558875979";');
        document.writeln('google_ad_width = 336;');
        document.writeln('google_ad_height = 280;');
        document.writeln('//-->');
        document.writeln('</s' + 'cript>');
        document.writeln('<sc' + 'ript type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></s' + 'cript>');
   }
})();
