var myApp = angular.module('myApp', ['myApp2']);
var myApp2 = angular.module('myApp2', ['myApp3']);
var myApp3 = angular.module('myApp3', []);

myApp.controller('someCtrl', function($scope) {
	$scope.message = ' Google Inc. została założona w 1998 roku przez dwóch doktorantów Uniwersytetu Stanforda, Amerykanina Larryego Pagea i Rosjanina Siergieja Brina. Opracowali oni nowatorską metodę analizy powiązań hipertekstowych – algorytm BackRub, potem przemianowany na PageRank – którą wykorzystali w swoim prototypie wyszukiwarki internetowej. Przedsiębiorstwo przetrwało załamanie rynku dot-comów i rozwijało się od tego czasu dzięki wsparciu prywatnych inwestorów; w roku 2004 spółka weszła na amerykańską giełdę, i od tej chwili doszło do znacznego przyspieszenia jej ekspansji, zakupu serwisów YouTube, Writely i przejęcia kilku innych mniejszych przedsiębiorstw.' ;
	$scope.message2 = ' Projekt – zbiór aktywności charakteryzujący się następującymi cechami: są ze sobą powiązane w złożony sposób, zmierzają do osiągnięcia celu, często poprzez wytworzenie unikatowego produktu, usługi bądź rezultatu, posiadają zaplanowany z góry początek i koniec. ';
	$scope.message3 = ' Produkt – każdy obiekt rynkowej wymiany oraz wszystko co może być oferowane na rynku. Produktem może być dobro materialne, usługa, miejsce, organizacja bądź idea. ';
});

myApp2.controller("PanelController", function(){
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
    this.isSelected = function(checkTab){
    	return this.tab === checkTab;
    };
});

myApp3.controller('defaultController', function ($scope) {
	var date = new Date();
	$scope.contactForm = {
		date: date };
		$scope.update = function (contact) {
			$scope.contactForm = angular.copy(contact);
		};
	});