
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
  NSB.addProperties(Image1);
  NSB.addProperties(Image2);
  NSB.addProperties(Image3);
  NSB.addProperties(Image4);
  NSB.addProperties(Image5);
  NSB.addProperties(Image6);
  NSB.addProperties(Image7);
  NSB.addProperties(Image8);
  NSB.addProperties(Image9);
  NSB.NavBar_jqm_init('NavBar2','Home, About');
  NSB.addProperties(NavBar2);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar2_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
RadialGauge2_settings={
disabled:false,
width:'232',
height:'152',
theme:'classic',
colorScheme:'scheme01',
 }
$('#RadialGauge2').jqxGauge (RadialGauge2_settings)
NSB.addProperties(RadialGauge2,RadialGauge2_wrapper);
  Label5.style.lineHeight='32px'; 

  NSB.addProperties(Label5);


  NSB.addProperties(Label7);
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
var  ix=createMultiDimArray('3'),iy=createMultiDimArray('3');
ix[1] =40;
ix[2] =127;
ix[3] =200;
iy[1] = 128;
iy[2] =208;
iy[3] =288;
function Main() {
  $("#RadialGauge1").jqxGauge("max" , 150);
 // "max" sets the maxium value of the gauge or full scale deflection
  $("#RadialGauge1").jqxGauge("value" , 0);
 // "value" is the new pointer value for the gauge
  $("#RadialGauge2").jqxGauge("max" , 150);
 // "max" sets the maxium value of the gauge or full scale deflection
  $("#RadialGauge2").jqxGauge("value" , 0);
 // "value" is the new pointer value for the gauge


}

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
  Image10.firstChild.src = "images\\face.jpg";
  Image10.src = "images\\face.jpg";
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
 var  Loc=createMultiDimArray('6,2'), Locs=createMultiDimArray('6');
  for   (x = 1; x  <= 6; x ++) {
      Locs[x] = False;
  }
  Loc[1][1] = 40;
  Loc[1][2] = 264;
  Loc[2][1] = 120;
  Loc[2][2] = 264;
  Loc[3][1] = 200;
  Loc[3][2] = 264;
  Loc[4][1] = 40;
  Loc[4][2] = 344;
  Loc[5][1] = 120;
  Loc[5][2] = 344;
  Loc[6][1] = 200;
  Loc[6][2] = 344;

    Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
    Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2

    y = Math.floor(6 * rnd()) + 1;
   while (Locs[y] ) {
      y = Math.floor(6 * rnd()) + 1;
     }
    Locs[y] = True;
    Image1Copy.Top = Loc[y][2];
    Image1Copy.Left = Loc[y][1];

    y = Math.floor(6 * rnd()) + 1;
   while (Locs[y] ) {
      y = Math.floor(6 * rnd()) + 1;
     }
    Locs[y] = True;
    Image2Copy.Top = Loc[y][2];
    Image2Copy.Left = Loc[y][1];

    y = Math.floor(6 * rnd()) + 1;
   while (Locs[y] ) {
      y = Math.floor(6 * rnd()) + 1;
     }
    Locs[y] = True;
    Image3Copy.Top = Loc[y][2];
    Image3Copy.Left = Loc[y][1];

    y = Math.floor(6 * rnd()) + 1;
   while (Locs[y] ) {
      y = Math.floor(6 * rnd()) + 1;
     }
    Locs[y] = True;
    Image4Copy.Top = Loc[y][2];
    Image4Copy.Left = Loc[y][1];

    y = Math.floor(6 * rnd()) + 1;
   while (Locs[y] ) {
      y = Math.floor(6 * rnd()) + 1;
     }
    Locs[y] = True;
    Image5Copy.Top = Loc[y][2];
    Image5Copy.Left = Loc[y][1];

    y = Math.floor(6 * rnd()) + 1;
   while (Locs[y] ) {
      y = Math.floor(6 * rnd()) + 1;
     }
    Locs[y] = True;
    Image6Copy.Top = Loc[y][2];
    Image6Copy.Left = Loc[y][1];

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
  NSB.addProperties(Image10);
RadialGauge1_settings={
disabled:false,
width:'168',
height:'120',
theme:'classic',
colorScheme:'scheme02',
 }
$('#RadialGauge1').jqxGauge (RadialGauge1_settings)
NSB.addProperties(RadialGauge1,RadialGauge1_wrapper);
  NSB.addProperties(Image1Copy);
  NSB.addProperties(Image2Copy);
  NSB.addProperties(Image3Copy);
  NSB.addProperties(Image4Copy);
  NSB.addProperties(Image5Copy);
  NSB.addProperties(Image6Copy);


  NSB.addProperties(Label3);
  NSB.NavBar_jqm_init('TitleBar2','Home, About');
  NSB.addProperties(TitleBar2);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('TitleBar2_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  $('#Image1Copy').jqxDragDrop({dropTarget:$('#Image10'), data:{}, 
   opacity:.6, revertDuration:400, distance:5, dragZIndex:99999
   ,feedback:'original'
   ,onDragEnd:function(){if(typeof(DragDrop1.onDragEnd)=='function') DragDrop1.onDragEnd()}
   ,onDrag:function(){if(typeof(DragDrop1.onDrag)=='function') DragDrop1.onDrag()}
   ,onDragStart:function(){if(typeof(DragDrop1.onDragStart)=='function') DragDrop1.onDragStart()}
   ,onTargetDrop:function(){console.log('DragDrop1.onTargetDrop:'+typeof(DragDrop1.onTargetDrop));if(typeof(DragDrop1.onTargetDrop)=='function') DragDrop1.onTargetDrop()}
   ,onDropTargetEnter:function(){if(typeof(DragDrop1.onDropTargetEnter)=='function') DragDrop1.onDropTargetEnter()}
   ,onDropTargetLeave:function(){if(typeof(DragDrop1.onDropTargetLeave)=='function') DragDrop1.onDropTargetLeave()}
  });
  $('#Image2Copy').jqxDragDrop({dropTarget:$('#Image10'), data:{}, 
   opacity:.6, revertDuration:400, distance:5, dragZIndex:99999
   ,feedback:'original'
   ,onDragEnd:function(){if(typeof(DragDrop2.onDragEnd)=='function') DragDrop2.onDragEnd()}
   ,onDrag:function(){if(typeof(DragDrop2.onDrag)=='function') DragDrop2.onDrag()}
   ,onDragStart:function(){if(typeof(DragDrop2.onDragStart)=='function') DragDrop2.onDragStart()}
   ,onTargetDrop:function(){console.log('DragDrop2.onTargetDrop:'+typeof(DragDrop2.onTargetDrop));if(typeof(DragDrop2.onTargetDrop)=='function') DragDrop2.onTargetDrop()}
   ,onDropTargetEnter:function(){if(typeof(DragDrop2.onDropTargetEnter)=='function') DragDrop2.onDropTargetEnter()}
   ,onDropTargetLeave:function(){if(typeof(DragDrop2.onDropTargetLeave)=='function') DragDrop2.onDropTargetLeave()}
  });
  $('#Image3Copy').jqxDragDrop({dropTarget:$('#Image10'), data:{}, 
   opacity:.6, revertDuration:400, distance:5, dragZIndex:99999
   ,feedback:'original'
   ,onDragEnd:function(){if(typeof(DragDrop3.onDragEnd)=='function') DragDrop3.onDragEnd()}
   ,onDrag:function(){if(typeof(DragDrop3.onDrag)=='function') DragDrop3.onDrag()}
   ,onDragStart:function(){if(typeof(DragDrop3.onDragStart)=='function') DragDrop3.onDragStart()}
   ,onTargetDrop:function(){console.log('DragDrop3.onTargetDrop:'+typeof(DragDrop3.onTargetDrop));if(typeof(DragDrop3.onTargetDrop)=='function') DragDrop3.onTargetDrop()}
   ,onDropTargetEnter:function(){if(typeof(DragDrop3.onDropTargetEnter)=='function') DragDrop3.onDropTargetEnter()}
   ,onDropTargetLeave:function(){if(typeof(DragDrop3.onDropTargetLeave)=='function') DragDrop3.onDropTargetLeave()}
  });
  $('#Image5Copy').jqxDragDrop({dropTarget:$('#Image10'), data:{}, 
   opacity:.6, revertDuration:400, distance:5, dragZIndex:99999
   ,feedback:'original'
   ,onDragEnd:function(){if(typeof(DragDrop5.onDragEnd)=='function') DragDrop5.onDragEnd()}
   ,onDrag:function(){if(typeof(DragDrop5.onDrag)=='function') DragDrop5.onDrag()}
   ,onDragStart:function(){if(typeof(DragDrop5.onDragStart)=='function') DragDrop5.onDragStart()}
   ,onTargetDrop:function(){console.log('DragDrop5.onTargetDrop:'+typeof(DragDrop5.onTargetDrop));if(typeof(DragDrop5.onTargetDrop)=='function') DragDrop5.onTargetDrop()}
   ,onDropTargetEnter:function(){if(typeof(DragDrop5.onDropTargetEnter)=='function') DragDrop5.onDropTargetEnter()}
   ,onDropTargetLeave:function(){if(typeof(DragDrop5.onDropTargetLeave)=='function') DragDrop5.onDropTargetLeave()}
  });
  $('#Image4Copy').jqxDragDrop({dropTarget:$('#Image10'), data:{}, 
   opacity:.6, revertDuration:400, distance:5, dragZIndex:99999
   ,feedback:'original'
   ,onDragEnd:function(){if(typeof(DragDrop4.onDragEnd)=='function') DragDrop4.onDragEnd()}
   ,onDrag:function(){if(typeof(DragDrop4.onDrag)=='function') DragDrop4.onDrag()}
   ,onDragStart:function(){if(typeof(DragDrop4.onDragStart)=='function') DragDrop4.onDragStart()}
   ,onTargetDrop:function(){console.log('DragDrop4.onTargetDrop:'+typeof(DragDrop4.onTargetDrop));if(typeof(DragDrop4.onTargetDrop)=='function') DragDrop4.onTargetDrop()}
   ,onDropTargetEnter:function(){if(typeof(DragDrop4.onDropTargetEnter)=='function') DragDrop4.onDropTargetEnter()}
   ,onDropTargetLeave:function(){if(typeof(DragDrop4.onDropTargetLeave)=='function') DragDrop4.onDropTargetLeave()}
  });
  $('#Image6Copy').jqxDragDrop({dropTarget:$('#Image10'), data:{}, 
   opacity:.6, revertDuration:400, distance:5, dragZIndex:99999
   ,feedback:'original'
   ,onDragEnd:function(){if(typeof(DragDrop6.onDragEnd)=='function') DragDrop6.onDragEnd()}
   ,onDrag:function(){if(typeof(DragDrop6.onDrag)=='function') DragDrop6.onDrag()}
   ,onDragStart:function(){if(typeof(DragDrop6.onDragStart)=='function') DragDrop6.onDragStart()}
   ,onTargetDrop:function(){console.log('DragDrop6.onTargetDrop:'+typeof(DragDrop6.onTargetDrop));if(typeof(DragDrop6.onTargetDrop)=='function') DragDrop6.onTargetDrop()}
   ,onDropTargetEnter:function(){if(typeof(DragDrop6.onDropTargetEnter)=='function') DragDrop6.onDropTargetEnter()}
   ,onDropTargetLeave:function(){if(typeof(DragDrop6.onDropTargetLeave)=='function') DragDrop6.onDropTargetLeave()}
  });


  NSB.addProperties(Label6);
  Form2.style.display = 'none';
}, false);
Form2.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form2);
var  BrushingText,BathText,WashingText,HairText, EarText, NavelText, DeoText,ShavingText, NailText,HygieneScore;
var  Scor=createMultiDimArray('9,6');

Scor[1][1] = 10;
Scor[1][2] = 10;
Scor[1][3] = 10;
Scor[1][4] = -5;
Scor[1][5] = -5;
Scor[1][6] = -5;



HygieneScore = 0;

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
  if(choice=="Home") {
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
    Video1.src = "video\\bath.mp4";
    ChangeForm2();
  }
return savethefunction_rvar; }

Image2Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\brushing.jpg") {
    Label1.textContent = BrushingText;
    Video1.src = "video\\brushing.mp4";
    TitleBar2.onclick("Home");
  }
return savethefunction_rvar; }

Image3Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\face.jpg") {
    Label1.textContent = ShavingText;
    Video1.src = "video\\face.mp4";
    TitleBar2.onclick("Home");
  }
return savethefunction_rvar; }

Image4Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\nail.jpg") {
    Label1.textContent = NailText;
    Video1.src = "video\\nail.mp4";
    TitleBar2.onclick("Home");
  }
return savethefunction_rvar; }

Image5Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\washing.jpg") {
    Label1.textContent = WashingText;
    Video1.src = "video\\washing.mp4";
    ChangeForm2();
  }
return savethefunction_rvar; }

Image6Copy.onclick = function() { savethefunction_rvar="";
  if(Image10.src == "images\\ear.jpg") {
    Label1.textContent = EarText;
    Video1.src = "video\\ear.mp4";
    ChangeForm2();
  }
return savethefunction_rvar; }


function ChangeForm2() {
 //    Form2.style.webkitTransitionDuration="1000ms" 'take 1 second to do this.
 //    Form2.style.webkitTransform="translateX(-" & SysInfo(0) & "px)" 'slide left
 //    'Wait for the transition to complete half way before starting form2
 //    SetTimeout(form3show,1000) 
}

DragDrop1.onTargetDrop = function() { savethefunction_rvar="";
  if(Image1Copy.Top > Image10.Height ) {
    Image1Copy.Top = Image10.Height  + 72 - Image1Copy.Height;
 } else {
    if(Image1Copy.Top < 72 ) {
    Image1Copy.Top = Image10.Top;
  }

  }
  if(Image1Copy.Left < Image10.Left) {
    Image1Copy.Left = Image10.Left;
 } else {
    if(Image1Copy.Left > Image10.Width - Image10.Left ) {
      Image1Copy.Left = Image10.Width + Image10.Left - Image1Copy.Width;
    }
  }

  HygieneScore = HygieneScore  + Scor[1][1];
  Scor[1][1] = 0;
  $("#RadialGauge1").jqxGauge("value" , HygieneScore);
  $("#RadialGauge2").jqxGauge("value" , HygieneScore);

return savethefunction_rvar; }

DragDrop2.onTargetDrop = function() { savethefunction_rvar="";
  if(Image2Copy.Top > Image10.Height ) {
    Image2Copy.Top = Image10.Height  + 72 - Image2Copy.Height;
 } else {
    if(Image2Copy.Top < 72 ) {
    Image2Copy.Top = Image10.Top;
  }

  }
  if(Image2Copy.Left < Image10.Left) {
    Image2Copy.Left = Image10.Left;
 } else {
    if(Image2Copy.Left > Image10.Width - Image10.Left ) {
      Image2Copy.Left = Image10.Width + Image10.Left - Image2Copy.Width;
    }
  }

  HygieneScore = HygieneScore  + Scor[1][2];
  Scor[1][2] = 0;
  $("#RadialGauge1").jqxGauge("value" , HygieneScore);
  $("#RadialGauge2").jqxGauge("value" , HygieneScore);

return savethefunction_rvar; }

DragDrop3.onTargetDrop = function() { savethefunction_rvar="";
  if(Image3Copy.Top > Image10.Height ) {
    Image3Copy.Top = Image10.Height  + 72 - Image3Copy.Height;
 } else {
    if(Image3Copy.Top < 72 ) {
    Image3Copy.Top = Image10.Top;
  }

  }
  if(Image3Copy.Left < Image10.Left) {
    Image3Copy.Left = Image10.Left;
 } else {
    if(Image3Copy.Left > Image10.Width - Image10.Left ) {
      Image3Copy.Left = Image10.Width + Image10.Left - Image3Copy.Width;
    }
  }
  HygieneScore = HygieneScore  + Scor[1][3];
  Scor[1][3] = 0;
  $("#RadialGauge1").jqxGauge("value" , HygieneScore);
  $("#RadialGauge2").jqxGauge("value" , HygieneScore);

return savethefunction_rvar; }

DragDrop4.onTargetDrop = function() { savethefunction_rvar="";
  if(Image4Copy.Top > Image10.Height ) {
    Image4Copy.Top = Image10.Height  + 72 - Image4Copy.Height;
 } else {
    if(Image4Copy.Top < 72 ) {
    Image4Copy.Top = Image10.Top;
  }

  }
  if(Image4Copy.Left < Image10.Left) {
    Image4Copy.Left = Image10.Left;
 } else {
    if(Image4Copy.Left > Image10.Width - Image10.Left ) {
      Image4Copy.Left = Image10.Width + Image10.Left - Image4Copy.Width;
    }
  }
  HygieneScore = HygieneScore  + Scor[1][4];
  Scor[1][4] = 0;
  $("#RadialGauge1").jqxGauge("value" , HygieneScore);
  $("#RadialGauge2").jqxGauge("value" , HygieneScore);
return savethefunction_rvar; }

DragDrop5.onTargetDrop = function() { savethefunction_rvar="";
  if(Image5Copy.Top > Image10.Height ) {
    Image5Copy.Top = Image10.Height  + 72 - Image5Copy.Height;
 } else {
    if(Image5Copy.Top < 72 ) {
    Image5Copy.Top = Image10.Top;
  }

  }
  if(Image5Copy.Left < Image10.Left) {
    Image5Copy.Left = Image10.Left;
 } else {
    if(Image5Copy.Left > Image10.Width - Image10.Left ) {
      Image5Copy.Left = Image10.Width + Image10.Left - Image5Copy.Width;
    }
  }
  HygieneScore = HygieneScore  + Scor[1][5];
  Scor[1][5] = 0;
  $("#RadialGauge1").jqxGauge("value" , HygieneScore);
  $("#RadialGauge2").jqxGauge("value" , HygieneScore);

return savethefunction_rvar; }

DragDrop6.onTargetDrop = function() { savethefunction_rvar="";
  if(Image6Copy.Top > Image10.Height ) {
    Image6Copy.Top = Image10.Height  + 72 - Image6Copy.Height;
 } else {
    if(Image6Copy.Top < 72 ) {
    Image6Copy.Top = Image10.Top;
  }

  }
  if(Image6Copy.Left < Image10.Left) {
    Image6Copy.Left = Image10.Left;
 } else {
    if(Image6Copy.Left > Image10.Width - Image10.Left ) {
      Image6Copy.Left = Image10.Width + Image10.Left - Image6Copy.Width;
    }
  }
  HygieneScore = HygieneScore  + Scor[1][6];
  Scor[1][6] = 0;
  $("#RadialGauge1").jqxGauge("value" , HygieneScore);
  $("#RadialGauge2").jqxGauge("value" , HygieneScore);

return savethefunction_rvar; }




window.addEventListener('load', function() {
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


