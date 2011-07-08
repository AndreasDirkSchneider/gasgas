// create base UI tab and root window
//
var mainWindow = Ti.UI.createWindow({  
    title:'gasgas',
    backgroundColor:'#99aaff',
    height:Ti.Platform.displayCaps.platformHeight,  
    width:Ti.Platform.displayCaps.platformWidth,  
    fullscreen:true,  
    navBarHidden:true
    
});

var gasgasTitleLabel = Ti.UI.createLabel({
	id:'gasgasTitleLabel',
	text:'gasgas',
	color:'#fff',
	font:{
		fontFamily:'Helvetica',
		fontSize:50
	},
	textAlign:'center',
	top:0,
	backgroundColor:'#000',
	height:100,
	width:Ti.Platform.displayCaps.platformWidth
});

var literLabel = Ti.UI.createLabel({
	id:'literLabel',
	text:'Liter: ',
	color:'#000',
	font:{
		fontFamily:'Helvetica',
		fontSize:20
	},
	textAlign:'left',
	top:150,
	left:10,
	height:30
});

var literField = Ti.UI.createTextField({
	id:'literField',
	top:140,
	left:150,
	width:200,
	height:50,
	font:{
		fontFamily:'Helvetica',
		fontSize:20
	},
	keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION 
});

var kmLabel = Ti.UI.createLabel({
	id:'kmLabel',
	text:'Kilometer: ',
	color:'#000',
	font:{
		fontFamily:'Helvetica',
		fontSize:20
	},
	textAlign:'left',
	top:250,
	left:10,
	height:30
});

var kmField = Ti.UI.createTextField({
	id:'kmField',
	top:240,
	left:150,
	width:200,
	height:50,
	font:{
		fontFamily:'Helvetica',
		fontSize:20
	},
	keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION 
});

var calcButton = Ti.UI.createButton({
	id:'calcButton',
	title:'Verbrauch berechnen',
	top:350,
	color:'#fff',
	backgroundColor:'#000',
	height:50,
	width:Ti.Platform.displayCaps.platformWidth/10*8,
	font:{
		fontFamily:'Helvetica',
		fontSize:20
	},
	borderColor:'#fff',
	borderRadius:5,
	borderWidth:2	
});
calcButton.addEventListener('click',function(e)
{
	var resultVerbrauch = (literField.value/kmField.value*100).toFixed(2);
	var resultDialog = Titanium.UI.createAlertDialog({
	    title: 'Verbrauch',
	    message: resultVerbrauch+' l/100km',
	    buttonNames: ['OK']
	});
	resultDialog.show();
	Ti.App.Properties.setString("lastVerbrauch", JSON.stringify(resultVerbrauch));
	updateLastVerbrauch();
});

var lastVerbrauch = Ti.UI.createLabel({
	id:'lastVerbrauch',
	text:'',
	color:'#fff',
	font:{
		fontFamily:'Helvetica',
		fontSize:20
	},
	textAlign:'center',
	top:450,
	left:10,
	height:30
});
function updateLastVerbrauch() {
	var lastVerbrauchVar = JSON.parse(Ti.App.Properties.getString("lastVerbrauch"));
	if (lastVerbrauchVar != null) lastVerbrauch.text='Letzter Verbrauch: '+lastVerbrauchVar+' l/100km';
}
updateLastVerbrauch();

mainWindow.add(gasgasTitleLabel);
mainWindow.add(literLabel);
mainWindow.add(literField);
mainWindow.add(kmLabel);
mainWindow.add(kmField);
mainWindow.add(calcButton);
mainWindow.add(lastVerbrauch);

mainWindow.open();
