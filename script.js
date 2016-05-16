$(document).ready(function(){
    $('.search').keypress(function(e){
      if(e.keyCode==13)
      $('.submit').click();
    });
});


var search  = function(){
	var auctionDataArray = [];
	$('tr').remove();
	var makerName = $('.search').val().toLowerCase();
    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
	for(var i=0;i<Data.length; i++){
		if(Data[i].maker.toLowerCase().indexOf(makerName)>-1){
			var auctionData = {"maker":Data[i].maker, "price":Data[i].price,"dateSold":Data[i].auction_date, "instrument":Data[i].instrument };
			auctionDataArray.push(auctionData);
		}
	}
	auctionDataArray.sort(function(a,b){
		return parseFloat(b.price.replace(/\$|,/g, ''))-parseFloat(a.price.replace(/\$|,/g, ''))
	})
	for(var j=0; j<auctionDataArray.length;j++){
		$('.searchResults').append('<tr><td>'+auctionDataArray[j].maker+'</td>'+'<td>'+auctionDataArray[j].price+'</td>'+'<td>'+auctionDataArray[j].dateSold+'</td>'+'<td>'+auctionDataArray[j].instrument+'</td></tr>');
	}
}

var allCellos  = function(){
	 var auctionDataArray = [];
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="cello"){
				var auctionData = {"maker":Data[i].maker, "price":Data[i].price,"dateSold":Data[i].auction_date, "instrument":Data[i].instrument };
				auctionDataArray.push(auctionData);
			}
		}
		auctionDataArray.sort(function(a,b){
			return parseFloat(b.price.replace(/\$|,/g, ''))-parseFloat(a.price.replace(/\$|,/g, ''))
		})
		for(var j=0; j<auctionDataArray.length;j++){
			$('.searchResults').append('<tr><td>'+auctionDataArray[j].maker+'</td>'+'<td>'+auctionDataArray[j].price+'</td>'+'<td>'+auctionDataArray[j].dateSold+'</td>'+'<td>'+auctionDataArray[j].instrument+'</td></tr>');
		}

}

var allViolin  = function(){
	var auctionDataArray =[];
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="violin"){
				var auctionData = {"maker":Data[i].maker, "price":Data[i].price,"dateSold":Data[i].auction_date, "instrument":Data[i].instrument };
				auctionDataArray.push(auctionData);
			}
		}
		auctionDataArray.sort(function(a,b){
			return parseFloat(b.price.replace(/\$|,/g, ''))-parseFloat(a.price.replace(/\$|,/g, ''))
		})
		for(var j=0; j<auctionDataArray.length;j++){
			$('.searchResults').append('<tr><td>'+auctionDataArray[j].maker+'</td>'+'<td>'+auctionDataArray[j].price+'</td>'+'<td>'+auctionDataArray[j].dateSold+'</td>'+'<td>'+auctionDataArray[j].instrument+'</td></tr>');
		}

}

var allViola  = function(){
	var auctionDataArray =[];
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="viola"){
				var auctionData = {"maker":Data[i].maker, "price":Data[i].price,"dateSold":Data[i].auction_date, "instrument":Data[i].instrument };
				auctionDataArray.push(auctionData);
			}
		}
		auctionDataArray.sort(function(a,b){
			return parseFloat(b.price.replace(/\$|,/g, ''))-parseFloat(a.price.replace(/\$|,/g, ''))
		})
		for(var j=0; j<auctionDataArray.length;j++){
			$('.searchResults').append('<tr><td>'+auctionDataArray[j].maker+'</td>'+'<td>'+auctionDataArray[j].price+'</td>'+'<td>'+auctionDataArray[j].dateSold+'</td>'+'<td>'+auctionDataArray[j].instrument+'</td></tr>');
		}

}
var allViolaBows  = function(){
	var auctionDataArray =[];
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="viola bow"){
				var auctionData = {"maker":Data[i].maker, "price":Data[i].price,"dateSold":Data[i].auction_date, "instrument":Data[i].instrument };
				auctionDataArray.push(auctionData);
			}
		}
		auctionDataArray.sort(function(a,b){
			return parseFloat(b.price.replace(/\$|,/g, ''))-parseFloat(a.price.replace(/\$|,/g, ''))
		})
		for(var j=0; j<auctionDataArray.length;j++){
			$('.searchResults').append('<tr><td>'+auctionDataArray[j].maker+'</td>'+'<td>'+auctionDataArray[j].price+'</td>'+'<td>'+auctionDataArray[j].dateSold+'</td>'+'<td>'+auctionDataArray[j].instrument+'</td></tr>');
		}

}

var allViolinBows  = function(){
	var auctionDataArray =[];
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="violin bow"){
				var auctionData = {"maker":Data[i].maker, "price":Data[i].price,"dateSold":Data[i].auction_date, "instrument":Data[i].instrument };
				auctionDataArray.push(auctionData);
			}
		}
		auctionDataArray.sort(function(a,b){
			return parseFloat(b.price.replace(/\$|,/g, ''))-parseFloat(a.price.replace(/\$|,/g, ''))
		})
		for(var j=0; j<auctionDataArray.length;j++){
			$('.searchResults').append('<tr><td>'+auctionDataArray[j].maker+'</td>'+'<td>'+auctionDataArray[j].price+'</td>'+'<td>'+auctionDataArray[j].dateSold+'</td>'+'<td>'+auctionDataArray[j].instrument+'</td></tr>');
		}
}

var allCelloBows  = function(){
	var auctionDataArray =[];
		$('tr').remove();
	    $('.searchResults').append('<tr><td><b>Maker</b></td><td><b>Price</b></td><td><b>Date Sold</b></td><td><b>Instrument</b></td></tr>')
		for(var i=0;i<Data.length; i++){
			if(Data[i].instrument.toLowerCase()==="cello bow"){
				var auctionData = {"maker":Data[i].maker, "price":Data[i].price,"dateSold":Data[i].auction_date, "instrument":Data[i].instrument };
				auctionDataArray.push(auctionData);
			}
		}
		auctionDataArray.sort(function(a,b){
			return parseFloat(b.price.replace(/\$|,/g, ''))-parseFloat(a.price.replace(/\$|,/g, ''))
		})
		for(var j=0; j<auctionDataArray.length;j++){
			$('.searchResults').append('<tr><td>'+auctionDataArray[j].maker+'</td>'+'<td>'+auctionDataArray[j].price+'</td>'+'<td>'+auctionDataArray[j].dateSold+'</td>'+'<td>'+auctionDataArray[j].instrument+'</td></tr>');
		}
}

