	function replSelectBox( name, action ) {
		if ( navigator.userAgent.indexOf("MSIE") > 0 && !window.opera ) {		
			if ( document.getElementById( name ) ) {
				document.getElementById( name ).style.visibility= action;
				var temp = "hidden";
				if ( action == "hidden" ) temp = "visible"; 
				document.getElementById( name + "ph" ).style.visibility = temp;	
		
				var optText = document.getElementById( name ).options[ document.getElementById( name ).selectedIndex ].text;	
				//document.getElementById( name + "text" ).firstChild.nodeValue = optText;		
				document.getElementById( name + "text" ).value = optText;	
			}
		} 
	} 

   ulLiMenu = function(elemId) {
    if ( document.getElementById(elemId)) { // nur für IE, MacIE, Opera
      var navroot = document.getElementById(elemId);
      var lis=navroot.getElementsByTagName("LI"); 

      for (i=0; i<lis.length; i++) { 
        for (j=0; j<lis[i].getElementsByTagName("UL").length; j++){ 

          lis[i].onmouseover=function() {
		  	                  this.getElementsByTagName("UL")[j].style.visibility = 'visible'; 
							   if ( this.id == "n1" || this.id == "n2"  ) {
									replSelectBox( 'selBox1', 'hidden' );	
									replSelectBox( 'selBox2', 'hidden' );										
									replSelectBox( 'selBox3', 'hidden' );										
							   }
                             } 

          lis[i].onmouseout= function() { 
                               this.getElementsByTagName("UL")[j].style.visibility = 'hidden'; 
							   if ( this.id == "n1" || this.id == "n2"  ) {
									replSelectBox( 'selBox1', 'visible' );	
									replSelectBox( 'selBox2', 'visible' );	
									replSelectBox( 'selBox3', 'visible' );										
							   }
                             }
							 
          }
       }
         
      for (i=0; i<lis.length; i++) { // loop LIs 
          for (j=0; j<lis[i].getElementsByTagName("UL").length; j++){ // Loop  in LIs

           lis[i].getElementsByTagName("UL")[j].onmouseover=function(){
                                                               this.parentNode.getElementsByTagName("A")[0].className ="over";
                                                             } 

           lis[i].getElementsByTagName("UL")[j].onmouseout=function(){
                                                             if (this.parentNode.getElementsByTagName("A")[0].id!="aktiv") // Bug(?)fix IE: zurücksetzen von class überschreibt ID-Eigenschaft
                                                               this.parentNode.getElementsByTagName("A")[0].className ="out";
                                                               //alert("mouseouse auf UL")
                                                           } 

        } // ENDE loop in LIs
      }// ENDE loop  LI           

   } // ENDE IE only  

  } // ENDE function  
  

function moreShopMenuLayer( temp ) {
	document.getElementById("moreshopslayer").style.visibility = temp;
	if ( temp == "visible" ) document.getElementById("topnavi").className = 'topnavi';
	else document.getElementById("topnavi").className = '';	
}

moreShopMenu = function(elemId) {
	if ( document.getElementById(elemId) && document.getElementById(elemId + "layer") ) { 
   	var reiter = document.getElementById(elemId);
   	var layer  = document.getElementById(elemId + "layer");		
 		// beim Mouseover ueber MoreShop-Reiter, Layer einblenden
		reiter.onmouseover= function() { moreShopMenuLayer( 'visible' ); } 		
		reiter.onmouseout = function() { moreShopMenuLayer( 'hidden' );  } 			
 		// beim Mouseover ueber Layer, Layer weiterhin einblenden		
		layer.onmouseover= function() { 	moreShopMenuLayer( 'visible' ); } 		 		
		layer.onmouseout = function() { 	moreShopMenuLayer( 'hidden' );  } 			
 		// beim Mouseover ueber Icon, Layer weiterhin einblenden		
		if ( document.getElementById(elemId + "icon") ) {
   		var icon = document.getElementById(elemId + "icon");			
			icon.onmouseover= function()  { 	moreShopMenuLayer( 'visible' ); }														
			icon.onmouseout = function()  { 	moreShopMenuLayer( 'hidden' );  } 		
		}
  } // 
} // ENDE function    
  
  
// Ruecksetzen der Formatierung von 'open opensel' auf 'open' - siehe inc/inc_catalog
function checkCatalogNav() {
	if ( document.getElementById("catalogNav") ) {
		if ( setCat && document.getElementById("setCat") ) {
			document.getElementById("setCat").className = "open opensel";
		}
	}
} // ENDE function
  
  
function init(){
	ulLiMenu("metaNav");
	ulLiMenu("navTop");
	checkCatalogNav(); // beeinflussen der linken Navigation
	moreShopMenu("moreshops"); // merhVielfalt mehrShops - Layer
}


/*
     FILE ARCHIVED ON 03:33:37 Jan 24, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:21:21 Mar 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 86.438 (3)
  esindex: 0.006
  captures_list: 104.773
  CDXLines.iter: 10.663 (3)
  PetaboxLoader3.datanode: 80.137 (4)
  exclusion.robots: 0.211
  exclusion.robots.policy: 0.197
  RedisCDXSource: 4.523
  PetaboxLoader3.resolve: 63.392
  load_resource: 100.59
*/