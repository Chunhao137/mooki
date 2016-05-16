$(document).ready(function(){
    $('.search').keypress(function(e){
      if(e.keyCode==13)
      $('.submit').click();
    });
});


var search  = function(){
	$('tr').remove();
	var makerName = $('.search').val().toLowerCase();
    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
	for(var i=0;i<Data.length; i++){
		if(Data[i].maker.toLowerCase().indexOf(makerName)>-1){
			var maker = Data[i].maker;
			var price = Data[i].price;
			var dateSold = Data[i].auction_date;
			var instrument = Data[i].instrument; 
			$('.searchResults').append('<tr><td>'+maker+'</td>'+'<td>'+price+'</td>'+'<td>'+dateSold+'</td>'+'<td>'+instrument+'</td></tr>');
		}
	}

}

var allCellos  = function(){
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="cello"){
				var maker = Data[i].maker;
				var price = Data[i].price;
				var dateSold = Data[i].auction_date;
				var instrument = Data[i].instrument; 
				$('.searchResults').append('<tr><td>'+maker+'</td>'+'<td>'+price+'</td>'+'<td>'+dateSold+'</td>'+'<td>'+instrument+'</td></tr>');
			}
		}

}

var allViolin  = function(){
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="violin"){
				var maker = Data[i].maker;
				var price = Data[i].price;
				var dateSold = Data[i].auction_date;
				var instrument = Data[i].instrument; 
				$('.searchResults').append('<tr><td>'+maker+'</td>'+'<td>'+price+'</td>'+'<td>'+dateSold+'</td>'+'<td>'+instrument+'</td></tr>');
			}
		}

}

var allViola  = function(){
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="viola"){
				var maker = Data[i].maker;
				var price = Data[i].price;
				var dateSold = Data[i].auction_date;
				var instrument = Data[i].instrument; 
				$('.searchResults').append('<tr><td>'+maker+'</td>'+'<td>'+price+'</td>'+'<td>'+dateSold+'</td>'+'<td>'+instrument+'</td></tr>');
			}
		}

}
var allViolaBows  = function(){
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="viola bow"){
				var maker = Data[i].maker;
				var price = Data[i].price;
				var dateSold = Data[i].auction_date;
				var instrument = Data[i].instrument; 
				$('.searchResults').append('<tr><td>'+maker+'</td>'+'<td>'+price+'</td>'+'<td>'+dateSold+'</td>'+'<td>'+instrument+'</td></tr>');
			}
		}

}

var allViolinBows  = function(){
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="violin bow"){
				var maker = Data[i].maker;
				var price = Data[i].price;
				var dateSold = Data[i].auction_date;
				var instrument = Data[i].instrument; 
				$('.searchResults').append('<tr><td>'+maker+'</td>'+'<td>'+price+'</td>'+'<td>'+dateSold+'</td>'+'<td>'+instrument+'</td></tr>');
			}
		}

}

var allCelloBows  = function(){
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="cello bow"){
				var maker = Data[i].maker;
				var price = Data[i].price;
				var dateSold = Data[i].auction_date;
				var instrument = Data[i].instrument; 
				$('.searchResults').append('<tr><td>'+maker+'</td>'+'<td>'+price+'</td>'+'<td>'+dateSold+'</td>'+'<td>'+instrument+'</td></tr>');
			}
		}

}

