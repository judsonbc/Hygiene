
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
  Label5.style.lineHeight='40px'; 

  NSB.addProperties(Label5);
  if (false) {
    PictureBox2Copy_ref = new iScroll('PictureBox2Copy_scroller',{bounce:false, zoom:true});
    PictureBox2Copy.refresh=function(){setTimeout(PictureBox2Copy_ref.refresh(),100)};
    NSB.addProperties(PictureBox2Copy,PictureBox2Copy_scroller)}
  else NSB.addProperties(PictureBox2Copy);
  if (false) {
    PictureBox1Copy_ref = new iScroll('PictureBox1Copy_scroller',{bounce:false, zoom:true});
    PictureBox1Copy.refresh=function(){setTimeout(PictureBox1Copy_ref.refresh(),100)};
    NSB.addProperties(PictureBox1Copy,PictureBox1Copy_scroller)}
  else NSB.addProperties(PictureBox1Copy);


  NSB.addProperties(Label6Copy);


  NSB.addProperties(HLevel1);


  NSB.addProperties(Label7Copy);


  NSB.addProperties(Moves1);


  NSB.addProperties(Label9);
  NSB.TitleBar_init('TitleBar4','setup','info');
  NSB.addProperties(TitleBar4);
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
var  Whatw;


TitleBar4.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="setup") {
     ChangeForm(Form5);
  }
  if(choice=="info") {
      ChangeForm(Form4);
  }
return savethefunction_rvar; }


Image1.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\bathing1.jpg";
  Image10.src = "images\\bathing1.jpg";
  Image1Copy.firstChild.src = "images\\shampoo.jpg";
  Image2Copy.firstChild.src = "images\\soap.jpg";
  Image3Copy.firstChild.src = "images\\towel.jpg";
  Image4Copy.firstChild.src = "images\\mirror.jpg";
  Image5Copy.firstChild.src = "images\\brush.jpg";
  Image6Copy.firstChild.src = "images\\toothbrush.jpg";
  TaskTitle.textContent = "Taking a Bath";
  Whatw = 1;
return savethefunction_rvar; }

Image2.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\brushing.jpg";
  Image10.src = "images\\brushing.jpg";
  Image1Copy.firstChild.src = "images\\toothpaste.jpg";
  Image2Copy.firstChild.src = "images\\cottonbuds.jpg";
  Image3Copy.firstChild.src = "images\\towel.jpg";
  Image4Copy.firstChild.src = "images\\mirror.jpg";
  Image5Copy.firstChild.src = "images\\brush.jpg";
  Image6Copy.firstChild.src = "images\\toothbrush.jpg";
  TaskTitle.textContent = "Brushing Teeth";
  Whatw = 2;

return savethefunction_rvar; }

Image3.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\face.jpg";
  Image10.src = "images\\face.jpg";
  Image1Copy.firstChild.src = "images\\shampoo.jpg";
  Image2Copy.firstChild.src = "images\\soap.jpg";
  Image3Copy.firstChild.src = "images\\towel.jpg";
  Image4Copy.firstChild.src = "images\\deo_tool.jpg";
  Image5Copy.firstChild.src = "images\\brush.jpg";
  Image6Copy.firstChild.src = "images\\toothpaste.jpg";
  TaskTitle.textContent = "Washing Face";
  Whatw = 3;

return savethefunction_rvar; }

Image4.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\nail.jpg";
  Image10.src = "images\\nail.jpg";
  Image1Copy.firstChild.src = "images\\nail_tool.jpg";
  Image2Copy.firstChild.src = "images\\soap.jpg";
  Image3Copy.firstChild.src = "images\\towel.jpg";
  Image4Copy.firstChild.src = "images\\ear_tool.jpg";
  Image5Copy.firstChild.src = "images\\brush.jpg";
  Image6Copy.firstChild.src = "images\\toothbrush.jpg";
  TaskTitle.textContent = "Clipping Nails";
  Whatw = 4;
return savethefunction_rvar; }

Image5.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\washing.jpg";
  Image10.src = "images\\washing.jpg";
  Image1Copy.firstChild.src = "images\\shampoo.jpg";
  Image2Copy.firstChild.src = "images\\soap.jpg";
  Image3Copy.firstChild.src = "images\\towel.jpg";
  Image4Copy.firstChild.src = "images\\mirror.jpg";
  Image5Copy.firstChild.src = "images\\brush.jpg";
  Image6Copy.firstChild.src = "images\\toothbrush.jpg";
  TaskTitle.textContent = "Washing Hands";
  Whatw = 5;
return savethefunction_rvar; }

Image6.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\ear.jpg";
  Image10.src = "images\\ear.jpg";
  Image1Copy.firstChild.src = "images\\shampoo.jpg";
  Image2Copy.firstChild.src = "images\\soap.jpg";
  Image3Copy.firstChild.src = "images\\ear_tool.jpg";
  Image4Copy.firstChild.src = "images\\mirror.jpg";
  Image5Copy.firstChild.src = "images\\brush.jpg";
  Image6Copy.firstChild.src = "images\\toothbrush.jpg";
  TaskTitle.textContent = "Cleaning Ears";
  Whatw = 6;
return savethefunction_rvar; }

Image7.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\deo.jpg";
  Image10.src = "images\\deo.jpg";
  Image1Copy.firstChild.src = "images\\deo_tool.jpg";
  Image2Copy.firstChild.src = "images\\soap.jpg";
  Image3Copy.firstChild.src = "images\\towel.jpg";
  Image4Copy.firstChild.src = "images\\nail_tool.jpg";
  Image5Copy.firstChild.src = "images\\toothbrush.jpg";
  Image6Copy.firstChild.src = "images\\toothpaste.jpg";
  TaskTitle.textContent = "Deodorizing";
  Whatw = 7;
return savethefunction_rvar; }

Image8.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\navel.jpg";
  Image10.src = "images\\navel.jpg";
  Image1Copy.firstChild.src = "images\\cottonbuds.jpg";
  Image2Copy.firstChild.src = "images\\soap.jpg";
  Image3Copy.firstChild.src = "images\\nail_tool.jpg";
  Image4Copy.firstChild.src = "images\\mirror.jpg";
  Image5Copy.firstChild.src = "images\\brush.jpg";
  Image6Copy.firstChild.src = "images\\toothbrush.jpg";
  TaskTitle.textContent = "Cleaning Navel";
  Whatw = 8;
return savethefunction_rvar; }

Image9.onclick = function() { savethefunction_rvar="";
  ChangeForm1();
  Image10.firstChild.src = "images\\hair.jpg";
  Image10.src = "images\\hair.jpg";
  Image1Copy.firstChild.src = "images\\ear_tool.jpg";
  Image2Copy.firstChild.src = "images\\soap.jpg";
  Image3Copy.firstChild.src = "images\\towel.jpg";
  Image4Copy.firstChild.src = "images\\mirror.jpg";
  Image5Copy.firstChild.src = "images\\brush.jpg";
  Image6Copy.firstChild.src = "images\\toothbrush.jpg";
  TaskTitle.textContent = "Brushing Hair";
  Whatw = 9;
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
  if (false) {
    PictureBox1_ref = new iScroll('PictureBox1_scroller',{bounce:false, zoom:true});
    PictureBox1.refresh=function(){setTimeout(PictureBox1_ref.refresh(),100)};
    NSB.addProperties(PictureBox1,PictureBox1_scroller)}
  else NSB.addProperties(PictureBox1);


  NSB.addProperties(Label6);


  NSB.addProperties(HLevel);


  NSB.addProperties(TaskTitle);
  if (false) {
    PictureBox2_ref = new iScroll('PictureBox2_scroller',{bounce:false, zoom:true});
    PictureBox2.refresh=function(){setTimeout(PictureBox2_ref.refresh(),100)};
    NSB.addProperties(PictureBox2,PictureBox2_scroller)}
  else NSB.addProperties(PictureBox2);


  NSB.addProperties(Label7);


  NSB.addProperties(Moves);
  Form2.style.display = 'none';
}, false);
Form2.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form2);
var  BrushingText,BathText,WashingText,HairText, EarText, NavelText, DeoText,ShavingText, NailText,HygieneScore;
var  Scor=createMultiDimArray('9,6'), Whatw;

InitVar();

function InitVar() { savethefunction_rvar="";
    Scor[1][1] = 10; //30
    Scor[1][2] = 10;
    Scor[1][3] = 10;
    Scor[1][4] = -5;
    Scor[1][5] = -5;
    Scor[1][6] = -5;

    Scor[2][1] = 15; //30
    Scor[2][2] = -5;
    Scor[2][3] = -5;
    Scor[2][4] = -5;
    Scor[2][5] = -5;
    Scor[2][6] = 15;

    Scor[3][1] = -5; //20
    Scor[3][2] = 10;
    Scor[3][3] = 10;
    Scor[3][4] = -5;
    Scor[3][5] = -5;
    Scor[3][6] = -5;

    Scor[4][1] = 10; //10
    Scor[4][2] = -5;
    Scor[4][3] = -5;
    Scor[4][4] = -5;
    Scor[4][5] = -5;
    Scor[4][6] = -5;

    Scor[5][1] = -5; //20
    Scor[5][2] = 10;
    Scor[5][3] = 10;
    Scor[5][4] = -5;
    Scor[5][5] = -5;
    Scor[5][6] = -5;

    Scor[6][1] = -5; //10
    Scor[6][2] = -5;
    Scor[6][3] = 10;
    Scor[6][4] = -5;
    Scor[6][5] = -5;
    Scor[6][6] = -5;

    Scor[7][1] = 10; //10
    Scor[7][2] = -5;
    Scor[7][3] = -5;
    Scor[7][4] = -5;
    Scor[7][5] = -5;
    Scor[7][6] = -5;

    Scor[8][1] = 10; //10
    Scor[8][2] = -5;
    Scor[8][3] = -5;
    Scor[8][4] = -5;
    Scor[8][5] = -5;
    Scor[8][6] = -5;

    Scor[9][1] = -5; //20
    Scor[9][2] = -5;
    Scor[9][3] = -5;
    Scor[9][4] = 10;
    Scor[9][5] = 10;
    Scor[9][6] = -5;

    HygieneScore = 0;

return savethefunction_rvar; }

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

  if(Scor[Whatw][1] == 0) {
     return savethefunction_rvar;
 } else {
    HygieneScore = HygieneScore  + Scor[Whatw][1];
    Scor[Whatw][1] = 0;
    HLevel.textContent = HygieneScore  +  " / 160";
    HLevel1.textContent = HygieneScore  +  " / 160";
    Label11.textContent = HygieneScore;
    Moves.textContent  = Moves.textContent - 1;
    Moves1.textContent  = Moves.textContent;
    if(Moves.textContent == 0 ) { ChangeForm(Form3); }
  }
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

  if(Scor[Whatw][2] == 0) {
     return savethefunction_rvar;
 } else {

    HygieneScore = HygieneScore  + Scor[Whatw][2];
    Scor[Whatw][2] = 0;
    HLevel.textContent = HygieneScore  +  " / 160";
    HLevel1.textContent = HygieneScore  +  " / 160";
    Label11.textContent = HygieneScore;
    Moves.textContent  = Moves.textContent - 1;
    Moves1.textContent  = Moves.textContent;
    if(Moves.textContent == 0 ) { ChangeForm(Form3); }
  }
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

  if(Scor[Whatw][3] == 0) {
     return savethefunction_rvar;
 } else {
    HygieneScore = HygieneScore  + Scor[Whatw][3];
    Scor[Whatw][3] = 0;
    HLevel.textContent = HygieneScore  +  " / 160";
    HLevel1.textContent = HygieneScore  +  " / 160";
    Label11.textContent = HygieneScore;
    Moves.textContent  = Moves.textContent - 1;
    Moves1.textContent  = Moves.textContent;
    if(Moves.textContent == 0 ) { ChangeForm(Form3); }
  }
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

  if(Scor[Whatw][4] == 0) {
     return savethefunction_rvar;
 } else {
    HygieneScore = HygieneScore  + Scor[Whatw][4];
    Scor[Whatw][4] = 0;
    HLevel.textContent = HygieneScore  +  " / 160";
    HLevel1.textContent = HygieneScore  +  " / 160";
     Label11.textContent = HygieneScore;
   Moves.textContent  = Moves.textContent - 1;
    Moves1.textContent  = Moves.textContent;
    if(Moves.textContent == 0 ) { ChangeForm(Form3); }
  }
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

  if(Scor[Whatw][5] == 0) {
     return savethefunction_rvar;
 } else {
    HygieneScore = HygieneScore  + Scor[Whatw][5];
    Scor[Whatw][5] = 0;
    HLevel.textContent = HygieneScore  +  " / 160";
    HLevel1.textContent = HygieneScore  +  " / 160";
    Label11.textContent = HygieneScore;
    Moves.textContent  = Moves.textContent - 1;
    Moves1.textContent  = Moves.textContent;
    if(Moves.textContent == 0 ) { ChangeForm(Form3); }
  }
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

  if(Scor[Whatw][6] == 0) {
     return savethefunction_rvar;
 } else {
    HygieneScore = HygieneScore  + Scor[Whatw][6];
    Scor[Whatw][6] = 0;
    HLevel.textContent = HygieneScore  +  " / 160";
    HLevel1.textContent = HygieneScore  +  " / 160";
     Label11.textContent = HygieneScore;
   Moves.textContent  = Moves.textContent - 1;
    Moves1.textContent  = Moves.textContent;
    if(Moves.textContent == 0 ) { ChangeForm(Form3); }
  }
return savethefunction_rvar; }





window.addEventListener('load', function() {
  Form3.style.display = 'block';
  NSB.TitleBar_init('TitleBar3','home','info');
  NSB.addProperties(TitleBar3);
  NSB.NavBar_jqm_init('NavBar1','Restart Game');
  NSB.addProperties(NavBar1);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar1_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()


  NSB.addProperties(Label10);


  NSB.addProperties(Label11);
  Form3.style.display = 'none';
}, false);
Form3.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form3);
NavBar1.onclick = function() { savethefunction_rvar="";
  HLevel.textContent = "0 / 160";
  HLevel1.textContent = "0 / 160";
  Moves.textContent = 15;
  Moves1.textContent = 15;
  ChangeForm(Form2);
  TitleBar2.onclick("Home");
  InitVar();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  Form4.style.display = 'block';
  NSB.TitleBar_init('TitleBar5','home','setup');
  NSB.addProperties(TitleBar5);
  Form4.style.display = 'none';
}, false);
Form4.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form4);
TitleBar5.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    ChangeForm(Form1);
   }
   if(choice=="setup") {
     ChangeForm(Form5);
    }

return savethefunction_rvar; }


window.addEventListener('load', function() {
  Form5.style.display = 'block';
  NSB.TitleBar_init('TitleBar6','home','info');
  NSB.addProperties(TitleBar6);
  Form5.style.display = 'none';
}, false);
Form5.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form5);
TitleBar6.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    ChangeForm(Form1);
   }
   if(choice=="info") {
     ChangeForm(Form4);
    }

return savethefunction_rvar; }



window.addEventListener('load', function() {
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


