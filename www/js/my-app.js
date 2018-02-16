// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

var xx;
var s=0;

function clear2(){
	//document.MyForm.resultpole.value=Math.round(valsumm); 	 
	//var variant=document.getElementsByName('1form1');
	document.form_2stor.form_2stor1.value="...."; 
	document.form_2stor.form_2stor2.value="...."; 
	document.form_2stor.form_2stor3.value="...."; 
	//alert(var);
};
function clear1(){
	//document.MyForm.resultpole.value=Math.round(valsumm); 	 
	//var variant=document.getElementsByName('1form1');
	document.form_1stor.form_1stor1.value="...."; 
	document.form_1stor.form_1stor2.value="...."; 
	//alert(var);
};
function clear3(){
	//document.MyForm.resultpole.value=Math.round(valsumm); 	 
	//var variant=document.getElementsByName('1form1');
	document.form_3stor.form_3stor1.value="...."; 
	document.form_3stor.form_3stor2.value="...."; 
	document.form_3stor.form_3stor3.value="...."; 
	//alert(var);
};

function func1(){

var a=Number(document.form_1stor.form_1stor1.value);
var h=Number(document.form_1stor.form_1stor2.value);	
	var numchislo=3;
//Проверка положительность введенных чисел
if (isFinite(a) &&(a>0)){	
if (isFinite(h) &&(h>0)){
    s=(a)*0.5*h;
    if(numchislo=3){
       s=s.toFixed(4); 
				}
					myApp.alert('Площадь треугольника равна '+s);
			}
					else		
			{
					myApp.alert('Введите верное числовое значение. Треугольник с такими сторонами не существует');
			}} 		
				else		
			{
				 myApp.alert('Введите верное числовое значение. Треугольник с такими сторонами не существует');
			}
};

function func3(){

   ////////////////////////////////
		
var xx=0;
var pp=0;	
var qq=0;	
	
var a=Number(document.form_3stor.form_3stor1.value);
var b=Number(document.form_3stor.form_3stor2.value);	
var c=Number(document.form_3stor.form_3stor3.value);
//alert(String(a));
//alert(String(b));
//alert(String(c));	
	
//Проверка на числа
if (isFinite(a) &&(a>0)){
if (isFinite(b) &&(b>0)){
if (isFinite(c) &&(c>0)){
	  //Проверка на существование треугольника          
    if(a<b+c){
		if(b<a+c){
			if(c<a+b){
				xx=(a+b+c)/2;
				pp=a+a;
					xx=xx*(xx-a)*(xx-b)*(xx-c);	
					qq=xx;
					s=Math.sqrt(xx);
					s=s.toFixed(4);				   
				myApp.alert('Площадь треугольника равна '+s);
			}
				else
	{
		myApp.alert('Треугольник с такими сторонами не существует. Введите корректные значения');
	}
		}
			else
	{
		myApp.alert('Треугольник с такими сторонами не существует. Введите корректные значения');
	}
	}
    else{
		myApp.alert('Треугольник с такими сторонами не существует. Введите корректные значения');
	
	};
 }}
	else
	{
	myApp.alert('Треугольник с такими сторонами не существует. Введите корректные значения');
	}
}
	else
	{
	myApp.alert('Треугольник с такими сторонами не существует. Введите корректные значения');
	};

		//////////////
			
};


function func2(){

   ////////////////////////////////		

var a=Number(document.form_2stor.form_2stor1.value);
var b=Number(document.form_2stor.form_2stor2.value);	
var c=Number(document.form_2stor.form_2stor3.value);

	////////////////////////////////
//Проверка на числа
if (isFinite(a) &&(a>0)){
if (isFinite(b) &&(b>0)){
if (isFinite(c) &&(c>0 && c<180)){
	  //Проверка на существование треугольника          

	s=Math.sin(c / 180 * Math.PI);	
	s=(0.5)*(s*a*b);	
	s=s.toFixed(4);
	myApp.alert('Площадь треугольника равна '+s);
			}
    else{
	myApp.alert('Треугольник с такими сторонами не существует. Введите корректные значения');
	};
 }
	else
{
	myApp.alert('Треугольник с такими сторонами не существует. Введите корректные значения');
}
}
	else
{
	myApp.alert('Треугольник с такими сторонами не существует. Введите корректные значения');
}};
 

