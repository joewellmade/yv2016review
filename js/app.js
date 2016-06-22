$(document).on('click', '.main-house', function(event){
	event.preventDefault();
	$('.main-house').removeClass("inactive-box");
    $('.main-house').addClass("active-box");
    $('.in-maria').removeClass("active-box");
    $('.in-maria').addClass("inactive-box");
	$('#production1').html('<p class="h2">Happy Days</p><div class="credits"><p>By Samuel Becket</p><p>Directed by Natalie Abrahami</p></div><p class="rating"><p class="star">77777</p></p><p class="quote">‘Natalie Abrahamis production is perfectly paced... Stevenson is magnificent’</p><p class="source">Evening Standard</p><p class="photo-credit">Photo by Johan Persson</p>');
	$('.slide-background.slide1').attr('style', 'background-image: url(img/productions/happydays1.jpg) !important');
	$('#production2').html('<p class="h2">The Scottsboro Boys</p><div class="credits"><p>Book by David Thompson</p><p>A Catherine Schreiber, Paula Marie Black and Young Vic production</p><p>Music &amp; Lyrics by John Kander and Fred Ebb</p><p>Direction &amp; Choreography by Susan Stroman</p></div><p class="rating"><p class="star">77777</p></p><p class="quote">‘A shocking, gripping, superbly staged, fabulously well-performed show’</p><p class="source">Mail on Sunday</p><p class="photo-credit">Photo by Johan Personn</p>');
	$('.slide-background.slide2').attr('style', 'background-image: url(img/productions/thescottsboroboys.jpg) !important');
	$('#production3').html('<p class="h2">Golem</p><div class="credits"><p>A 1927 / Young Vic production</p><p>Created by 1927</p><p>Directed &amp; written by Suzanne Andrade</p><p>Film, Animation &amp; Design Paul Barritt</p></div><p class="rating"><p class="star">77777</p></p><p class="quote">‘Groundbreaking with strokes of genius’</p><p class="source">Daily Telegraph</p><p class="photo-credit">Photo by Bernhard Muller</p>');
	$('.slide-background.slide3').attr('style', 'background-image: url(img/productions/golem.jpg) !important');
	$('#production4').html('<p class="h2">A Streetcar Named Desire</p><div class="credits"><p>A Young Vic/Joshua Andrews co-production</p><p>By Tennessee Williams</p><p>Directed by Benedict Andrews</p></div><p class="rating"><p class="star">77777</p></p><p class="quote">‘Benedict Andrews\' version steams off the stage with pain, excitement and clamour’</p><p class="source">The Observer</p><p class="photo-credit">Photo by Johan Persson</p>');
	$('.slide-background.slide4').attr('style', 'background-image: url(img/productions/astreetcarnameddesire.jpg) !important');
	$('#production5').html('<p class="h2">The Valley of Astonishment</p><div class="credits"><p>A C.I.C.T. / Théâtre des Bouffes du Nord production co-produced by Theatre for a New Audience, New York, Les Thé â tres de la ville du Luxembourg; Thé â tre d\'Arras / Tandem Arras Douai; Théâ tre du Gymnase, Marseille; Warwick Arts Centre; Holland Festival, Amsterdam; Attiki Cultural Society, Athènes; Musikfest Bremen; Théâ tre Forum Meyrin, Geneva; C.I.R.T. and Young Vic.</p><p>Directed by Peter Brook and Marie-Hélène Estienne</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘Sublime’</p><p class="source">The Independent</p><p class="photo-credit">Photo by TBC</p>');
	$('.slide-background.slide5').attr('style', 'background-image: url(img/productions/avalleyofastonishment.jpg) !important');
	$('#production6').html('<p class="h2">A View From The Bridge</p><div class="credits"><p>By Arthur Miller</p><p>Directed by Ivo van Hove</p></div><p class="rating"><p class="star">77777</p></p><p class="quote">‘One of the great theatrical productions of the decade. See it.’</p><p class="source">The Times</p><p class="photo-credit">Photo by Jan Versweyveld</p><div class="play_video" style="width:100px"><a href="#"><p class="menu-text">PLAY VIDEO</p></a></div>');
	$('.slide-background.slide6').attr('style', 'background-image: url(img/productions/aviewfromthebridge.jpg) !important');
	if($('#prod7').length){
		$('#production7').html('<p class="h2">A Doll\'s House</p><div class="credits"><p>By Henrik Ibsen</p><p>Directed by Carrie Cracknell</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘There is so much to admire in this marvellous production...Teriffic’</p><p class="source">The Times</p><p class="photo-credit">Photo by Richard Hubert Smith</p>');
		$('.slide-background.slide7').attr('style', 'background-image: url(img/productions/adollshouse.jpg) !important');
		$('#production8').html('<p class="h2">A Season in the Congo</p><div class="credits"><p>By Aimé Césaire</p><p>From a translation by Ralph Manheim</p><p>Directed by Joe Wright</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘Right from the start, we know we\'re in for something special’</p><p class="source">Evening Standard</p><p class="photo-credit">Photo by TBC</p>');
		$('.slide-background.slide8').attr('style', 'background-image: url(img/productions/aseasoninthecongo.jpg) !important');
	}
	else {
		$('<section id="prod7" data-transition-speed="default" data-background="img/productions/adollshouse.jpg" class="production-slide slide-dolls-house"><div id="production7" class="col l6 s12 info"><p class="h2">A Doll\'s House</p><div class="credits"><p>By Henrik Ibsen</p><p>Directed by Carrie Cracknell</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘There is so much to admire in this marvellous production...Teriffic’</p><p class="source">The Times</p><p class="photo-credit">Photo by Richard Hubert Smith</p></div></section>').appendTo('.page2');
		$('<section id="prod8" data-transition-speed="default" data-background="img/productions/aseasoninthecongo.jpg" class="production-slide slide-season-congo"><div id="production8" class="col l6 s12 info"><p class="h2">A Season in the Congo</p><div class="credits"><p>By Aimé Césaire</p><p>From a translation by Ralph Manheim</p><p>Directed by Joe Wright</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘Right from the start, we know we\'re in for something special’</p><p class="source">Evening Standard</p><p class="photo-credit">Photo by TBC</p></div></section>').appendTo('.page2');
	}
});

$(document).on('click', '.in-maria', function(event){
	event.preventDefault();
	$('.main-house').removeClass("active-box");
    $('.main-house').addClass("inactive-box");
	$('.in-maria').removeClass("inactive-box");
    $('.in-maria').addClass("active-box");
	$('#production1').html('<p class="h2">Bull</p><div class="credits"><p>By Mike Bartlett</p><p>A Support Wall/Young Vic co-productionDirected by Clare Lizzimore</p></div><p class="rating"><p class="star">77777</p></p><p class="quote">‘Mike Bartlett\'s muscular play is powerful and painful’</p><p class="source">Daily Telegraph</p><p class="photo-credit">Photo by Simon Annand</p>');
	$('.slide-background.slide1').attr('style', 'background-image: url(img/productions/bull.jpg) !important');
	$('#production2').html('<p class="h2">A Harlem Dream</p><div class="credits"><p>A Dance Umbrella / Young Vic co-production Commissioned by Dance Umbrella</p><p>By Ivan Blackstock</p><p>Choreographed and Directed by Ivan Blackstock for BirdGang Dance Company</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘Ivan Blackstock strikes gold with this historical mashup of hip-hop and jazz choreography’</p><p class="source">The Guardian</p><p class="photo-credit">Photo by Chris Nash</p>');
	$('.slide-background.slide2').attr('style', 'background-image: url(img/productions/harlem-dream.jpg) !important; ');
	$('#production3').html('<p class="h2">My Perfect Mind</p><div class="credits"><p>A Told by an Idiot, Young Vic and Theatre Royal Plymouth co-production</p><p>Created by Told By An Idiot</p><p>Written by Kathryn Hunter, Paul Hunter and Edward Petherbridge</p><p>Direction Kathryn Hunter</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘Hilarious, haunting, superbly directed by Kathryn Hunter’</p><p class="source">The Independent</p><p class="photo-credit">Photo by Manuel Harlan</p>');
	$('.slide-background.slide3').attr('style', 'background-image: url(img/productions/my-perfect-mind.jpg) !important');
	$('#production4').html('<p class="h2">Sizwe Banzi is Dead</p><div class="credits"><p>Devised by Athol Fugard, John Kani & Winston Ntshona</p><p>A Young Vic / Eclipse Theatre Company co-production</p><p>Directed by Matthew Xia</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘Xia’s stylishly stark, brilliantly acted production is extraordinary.’</p><p class="source">The Times</p><p class="photo-credit">Photo by Richard Hubert Smith</p>');
	$('.slide-background.slide4').attr('style', 'background-image: url(img/productions/sizwe-banzi.jpg) !important');
	$('#production5').html('<p class="h2">The Events</p><div class="credits"><p>By David Greig</p><p>An Actors Touring Company, Young Vic, Brageteatret & Schauspielhaus Wien co-production</p><p>Directed by Ramin Gray</p></div><p class="rating"><p class="star">7777</p></p><p class="quote">‘Impressive, evocative, superb’</p><p class="source">The Independent</p><p class="photo-credit">Photo by Steven Cummiskey</p>');
	$('.slide-background.slide5').attr('style', 'background-image: url(img/productions/the-events.jpg) !important');
	$('#production6').html('<p class="h2">Trash Cuisine</p><div class="credits"><p>Devised and performed by Belarus Free Theatre</p><p>Directed by Nicolai Khalezin</p></div><p class="rating"><p class="star">77777</p></p><p class="quote">‘SPELLBINDING’</p><p class="source">The Independent</p><p class="photo-credit">Photo by Simon Annand</p>');
	$('.slide-background.slide6').attr('style', 'background-image: url(img/productions/trash-cuisine.jpg) !important');
	$('#prod7').remove();
	$('#prod8').remove();
});

$(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto({
    	animation_speed: 'fast',
    	autoplay: true,
    	default_width: "100%",
    	default_height: "105%",
    	theme: 'dark-square',
    });
});