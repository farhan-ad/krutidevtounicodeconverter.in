function chanakyaunicode()
{
var array_one = new Array("¤","U","¢ð","´ð","ð¸","Ò","¥æò","¸","•¸" , "¹¸" , "»¸" , "Á¸" , "Ç¸" , "É¸" , "È¸" , "Ø¸" , "Ú¸" , "Ù¸" , "A","B","C","D","E","F","G","H","I","J","K","L","M", "N","O","P","Q","R","T","V","W","X","Y","`","a","b","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","žæ","ž","#","%","@","„","¦","¨","¯","µ","º","Cþ","q","Ê","u","g","Ÿæ","Åþ","Çþ","Éþ","^","h","Ð","ý","þ","¥ô","¥æð","¥õ","¥æñ","¥æ","¥","§Z","§ü","§","©","ª","«","¬","­","°ð","°","€", "·", "",  "¹", "‚", "»", "ƒæ", "ƒ", "¾","“","‘","¿","À","”","…","’","Á","Ûæ","Û","†æ","†","Å","Æ","Ç","É","‡æ","‡","ˆ","Ì","‰","Í","Î","¼","Š","Ï","óæ","ó","‹æ","Ù","‹","Œ","Â","","È","Ž","Õ","","Ö","","×","Ä","Ø","Ú","Ë","Ü","¶","Ý","Ã","ß","àæ","³æ","o","³","à","c","á","S","â","ã","±","ÿæ","ÿ","˜æ","˜","™æ","™","üð´","æò","æñ","æ","è","é","ê","ä","å","ë","ì","í","Ô","ñ","ô","õ","¢","´","¡","Ñ","¸","ò","ù","÷","ð","0","1","2","3","4","5","6","7","8","9","®","v","w","x","y","z","{","|","}","~","्ो","्ौ","्ाे", "्ाा","ाे","ाे","ाै","्ा","ंु","ओे","ोे","ाे","ईंं" )   

var array_two = new Array("", "","ð¢", "ð´", "¸ð","'", "ऑ", "फ़्","क़" , "ख़" , "ग़" , "ज़" , "ड़" , "ढ़" , "फ़" , "य़" , "ऱ" , "ऩ" ,"्र","क्च","ष्ट","ष्ठ","श्व","स्न","त्र","॥","ढ्ढ","छ्व","्य","रु","रू","हृ","ह्र","क्क","क्त","क्र","ञ्ज","ङ्क","ङ्ख","ङ्ग","ङ्घ","क्व","ड्ड","ड्ढ","स्र","द्ग","द्घ","द्द","द्ध","द्ब","द्भ","द्म","द्य","द्व","ठ्ठ","श्च","ह्न","ह्म्","ह्य","ह्ल","ह्व","त्त","त्त्","प्त","त्न","ञ्च",
"ल्ल","ष्ट्व","ङ्क्ष","ख्न","द्ब्र","ख्र",
"ष्ट्र","ह्न","ज़्","ह्व","द्द",  
"श्र","ट्र","ड्र","ढ्र",
"ट्ट","द्ध","।","्र","्र",
"ओ","ओ","औ","औ","आ","अ","ईं","ई","इ","उ","ऊ","ऋ","ॠ","ऌ","ऐ","ए",
"क्", "क","ख्","ख","ग्","ग","घ","घ्","ङ",
"च्च्","च्","च","छ","ज्ज्","ज्","ज्","ज","झ","झ्","ञ","ञ्",
"ट","ठ","ड","ढ","ण","ण्",
"त्","त","थ्","थ","द","द","ध्","ध","न्न","न्न्","न","न","न्",
"प्","प","फ्","फ","ब्","ब","भ्","भ","म्","म",
"य्","य","र","ल्","ल","ल","ळ","व्","व",
"श","श","श","श्","श्","ष्","ष","स्","स","ह","ह्",
"क्ष","क्ष्","त्र","त्र्","ज्ञ","ज्ञ्","ðZ",
"ॉ","ौ","ा","ी","ु","ू","ु","ू","ृ","ॄ","ॢ","े","ै","ो","ौ",
"ं","ं","ँ",":","़", "ॅ","ऽ","्","े",
"०","१","२","३","४","५","६","७","८","९",
"0","1","2","3","4","5","6","7","8","9",
"े", "ै", "े","ा","ो","ो","ौ","","ुं","ओ","ो","ो","ईं")   

var array_one_length = array_one.length ;


      var modified_substring = document.getElementById("chanakya_text").value  ;


    var text_size = document.getElementById("chanakya_text").value.length ;

    var processed_text = '' ;  

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 4000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("chanakya_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("chanakya_text").value.substring ( sthiti1, sthiti2 )  ;

    rep_symbols( ) ;

    processed_text += modified_substring ;


      document.getElementById("unicode_text").value = processed_text  ;

   }


 //--------------------------------------------------

 function rep_symbols( )
    {

     if ( modified_substring != "" )  
        {


modified_substring = modified_substring.replace ( /क़/ , "क़" )  ; 
modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;
modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;
modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;
modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;
modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;
modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;
modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;
modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;
modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;


         for(input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )
            {
             idx = 0  ; 
             while (idx != -1 ) 
                {
                 modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                 idx = modified_substring.indexOf( array_one[input_symbol_idx] )

                } 
            } 

   modified_substring = modified_substring.replace( /Z/g , "üं" ) ; 


var position_of_f = modified_substring.indexOf( "ç" )  ;

while ( position_of_f != -1 )  
{
var charecter_right_to_f = modified_substring.charAt( position_of_f + 1 )  ;

modified_substring = modified_substring.replace( "ç" + charecter_right_to_f  ,  charecter_right_to_f + "ि" )  ;

position_of_f = position_of_f + 1  ;

while ( ( modified_substring.charAt( position_of_f + 1 ) == "्" ) & ( position_of_f < modified_substring.length - 1 ) )
{
var string_to_be_replaced = modified_substring.charAt( position_of_f + 1 ) + modified_substring.charAt( position_of_f + 2 )  ;

modified_substring = modified_substring.replace( "ि" + string_to_be_replaced , string_to_be_replaced + "ि" )  ;

position_of_f = position_of_f + 2  ;

}

position_of_f = modified_substring.search( /ç/ , position_of_f + 1 ) ; 
} 

modified_substring = modified_substring.replace( /([कखगघचछजझटठडड़ढढ़णतथदधनपफबभमयरलळवशषसहक्षज्ञ])([ािीुूृेैोौंँ]*)ü/g , "ü$1$2" ) ;

modified_substring = modified_substring.replace( /([कखगघचछजझटठडड़ढढ़णतथदधनपफबभमयरलळवशषसहक्षज्ञ])([्])ü/g , "ü$1$2" ) ;

modified_substring = modified_substring.replace( /ü/g , "र्" ) ;

        }

    } 
}


function cleartext() {

	document.getElementById("unicode_text").value = '';
	document.getElementById("chanakya_text").value = '';

}


function copyclipboard() {

   var copyText = document.querySelector("#unicode_text");
    var copy_btn = document.querySelector("#copy_txt");
   copyText.select();

   copyText.setSelectionRange(0, 99999);

   document.execCommand("copy");

   copy_btn.innerHTML = "Copied Success!";

   setTimeout(function(){
      copy_btn.innerHTML = "Copy";
   },2000)

}




function word(){
      var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementById('unicode_text').value+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'converterplanet.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
    }
    
function sendtowhatsapp()
{
    var texter = document.getElementById("unicode_text").value;
    window.open('https://wa.me/?text='+texter, '_blank');
}