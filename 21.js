
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = 'images/logo.jpg';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  Form1.style.display = 'block';
  NSB.TitleBar_init('TitleBar1','home','About');
  NSB.addProperties(TitleBar1);
  NSB.addProperties(Image1);
  NSB.addProperties(Image2);
  NSB.addProperties(Image3);
  NSB.addProperties(Image4);
  NSB.addProperties(Image5);
  NSB.addProperties(Image6);
  NSB.addProperties(Image7);
  NSB.addProperties(Image8);
  NSB.addProperties(Image9);
  NSB.NavBar_jqm_init('NavBar1','');
  NSB.addProperties(NavBar1);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar1_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);

Image1.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\bathing1.jpg";
  Image10.src = "images\\bathing1.jpg";
return savethefunction_rvar; }

Image2.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\brushing.jpg";
  Image10.src = "images\\brushing.jpg";
return savethefunction_rvar; }

Image3.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\shaving.jpg";
  Image10.src = "images\\shaving.jpg";
return savethefunction_rvar; }

Image4.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\nail.jpg";
  Image10.src = "images\\nail.jpg";
return savethefunction_rvar; }

Image5.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\washing.jpg";
  Image10.src = "images\\washing.jpg";
return savethefunction_rvar; }

Image6.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\ear.jpg";
  Image10.src = "images\\ear.jpg";
return savethefunction_rvar; }

Image7.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\deo.jpg";
  Image10.src = "images\\deo.jpg";
return savethefunction_rvar; }

Image8.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\navel.jpg";
  Image10.src = "images\\navel.jpg";
return savethefunction_rvar; }

Image9.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\hair.jpg";
  Image10.src = "images\\hair.jpg";
return savethefunction_rvar; }

function ChangeForm1() {
    Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
    Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
    setTimeout(form2show,1000);
}
function form2show() {
 //hide form1 and display form2
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form2,'style.display',"block");
  Form2.style.webkitTransform="translateX(0px)";
}

window.addEventListener('load', function() {
  Form2.style.display = 'block';
  NSB.TitleBar_init('TitleBar2','home','About');
  NSB.addProperties(TitleBar2);
  NSB.addProperties(Image10);
  NSB.addProperties(Image1Copy);
  NSB.addProperties(Image2Copy);
  NSB.addProperties(Image3Copy);
  NSB.addProperties(Image4Copy);
  NSB.addProperties(Image5Copy);
  NSB.addProperties(Image6Copy);
  NSB.addProperties(Image9Copy);
  NSB.addProperties(Image8Copy);
  NSB.addProperties(Image7Copy);
  Form2.style.display = 'none';
}, false);
Form2.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form2);
var  BrushingText,BathText,WashingText,HairText, EarText, NavelText, DeoText,ShavingText, NailText;
HairText = "Combing Hair";
NavelText= "Cleaning Navel";
DeoText = "Deodorizing";
ShavingText = "Shaving Mustache";
NailText = "Clipping your Nails";
EarText = "Cleaning your Ear";
WashingText = "Washing";
BathText = "There is no doubt that a good bath cleans and refreshes your body but it can be relaxing for the mind as well. It is important to have a bath everyday in order to maintain good hygiene as well. A bath in the evening or night removes all the dust, grime and sweat that you have gathered throughout day. A bath early in the morning refreshes you and makes you ready for the whole day. Bathing can be made a relaxing and enjoyable experience";
BrushingText = "Brushing your teeth with fluoride toothpaste is essential to good oral health. Not only does brushing your teeth help prevent tooth decay, it also helps prevent gum disease, which is one of the leading causes of tooth loss in adults and has been linked to heart attacks and strokes. Removing tooth stains and avoiding bad breath are added benefits of brushing your teeth.";

TitleBar2.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form2.style.webkitTransitionDuration="1000ms";
    Form2.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form2,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}

Image1Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\bathing1.jpg") {
    Label1.textContent = BathText;
    Video1.src = "images\\bath.3gp";
    ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

Image2Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\brushing.jpg") {
    Label1.textContent = BrushingText;
    Video1.src = "video\\Brushing.3gp";
    ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

Image3Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\shaving.jpg") {
    Label1.textContent = ShavingText;
    Video1.src = "video\\shaving.3gp";
    ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

Image4Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\nail.jpg") {
    Label1.textContent = NailText;
    Video1.src = "video\\nail.3gp";
    ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

Image5Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\washing.jpg") {
    Label1.textContent = WashingText;
    Video1.src = "video\\washing.3gp";
    ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

Image6Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\ear.jpg") {
    Label1.textContent = EarText;
    Video1.src = "video\\ear.3gp";
    ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

Image7Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\deo.jpg") {
    Label1.textContent = DeoText;
    Video1.src = "video\\deo.3gp";
   ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

Image8Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\navel.jpg") {
    Label1.textContent = NavelText;
    Video1.src = "video\\navel.3gp";
    ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

Image9Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\hair.jpg") {
    Label1.textContent = HairText;
    Video1.src = "video\\hair.3gp";
    ChangeForm2();
 } else {
    TitleBar2.onclick("home");
  }
return savethefunction_rvar; }

function ChangeForm2() {
    Form2.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
    Form2.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
    setTimeout(form3show,1000);
}

function form3show() {
 //hide form1 and display form2
  nsbDOMAttr(Form2,'style.display',"none");
  nsbDOMAttr(Form3,'style.display',"block");
  Form3.style.webkitTransform="translateX(0px)";
}

window.addEventListener('load', function() {
  Form3.style.display = 'block';
  NSB.TitleBar_init('TitleBar3','home','Home,Right');
  NSB.addProperties(TitleBar3);
NSB.addProperties(Video1);


  NSB.addProperties(Label1);
  Form3.style.display = 'none';
}, false);
Form3.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form3);

TitleBar3.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form3.style.webkitTransitionDuration="1000ms";
    Form3.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
     Video1.pause();
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form3,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}


window.addEventListener('load', function() {
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


