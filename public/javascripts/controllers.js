angular.module('lego')

.controller('appCtrl', function($rootScope, $stateParams, $state, $mdToast,$mdBottomSheet){
	$rootScope.uploads = [{
		title: 'Escher + legos',
		description: "All your escher favorites, rendered using everyone's favorite childhood toys. The links include the descriptions of how each piece was built, and what geometric or camera trickery was involved.",
		image: './images/escher.jpg'
	},{
		title: 'Lego Jack Sparrow',
		description: 'A cool real life scaled Jack Sparrow built with lego.',
		image: './images/jack.jpg'
	},{
		title: 'Wall-E',
		description: 'A Lego WALL-E.',
		image: './images/walle.jpg'
	},{
		title: 'Tiger',
		description: 'Check out this awesome tiger they\'ve made in the zoo!',
		image: './images/tiger.jpg'
	},{
		title: 'Christmas Tree',
		description: 'For Christmas I\'ve made this christmas tree that I am using as decoration.',
		image: './images/christmas.jpg'
	},{
		title: 'Pokeball',
		description: 'Pikachu I choose you!',
		image: './images/pokemon.jpg'
	}];

    $rootScope.hideSheet = function(){
        console.log('test');
        $mdBottomSheet.hide();
    }

    $rootScope.log = function(item){
        console.log(item)
    }

    $rootScope.ideas = [{
        title: 'Eiffeltoren',
        description: 'Een levensgrote eiffeltoren schaal 1:1!',
        image: './images/eiffel.jpeg'
    }];

    $rootScope.categories = ['Movies', 'Buildings', 'People', 'Animals', 'Culture', 'Nature', 'Vehicles', 'Tech', 'Robots', 'Life-size', 'Space', 'Miniature']

    $('#tab1-content').scrollTop(45);

	$rootScope.data = {
      selectedIndex : 0,
      secondLocked : true,
      secondLabel : "Item Two"
    };
    $rootScope.next = function() {
      $rootScope.data.selectedIndex = Math.min($rootScope.data.selectedIndex + 1, 2) ;
    };
    $rootScope.previous = function() {
      $rootScope.data.selectedIndex = Math.max($rootScope.data.selectedIndex - 1, 0);
    };
    $rootScope.postComment = function(item){
    	item.comments = item.comments || [];
    	item.comments.push(item.newComment);
    	item.newComment = "";
    	$mdToast.show({
	      // controller: 'ToastCtrl',
	      template: '<md-toast><span flex>Commet placed!</span></md-toast>',
	      hideDelay: 1000,
	      position: 'top left right'
	    });
    }
    $rootScope.addTag = function(creation){
    	creation.tags = creation.tags || [];
    	creation.tags.push(creation.newTag);
    	creation.newTag = "";
    }
    $rootScope.like = function() {
    	// var sound = new Sound('./music/awesome.mp3', 100, false);
    	// sound.start();
    	// setTimeout(function(){
    	// 	sound.stop();
    	// },3800);
	    // $mdToast.show({
	    //   // controller: 'ToastCtrl',
	    //   template: '<md-toast><span flex>Post liked!</span></md-toast>',
	    //   hideDelay: 1000,
	    //   position: 'top left right'
	    // });
            $mdBottomSheet.show({
              template: '\
 <md-bottom-sheet class="md-list md-has-header" ng-click="hideSheet()">\
  <md-subheader>Like actions</md-subheader>\
  <md-list class="fullWidthButtons">\
    <md-item>\
      <md-button aria-label="Original">Original</md-button>\
    </md-item>\
    <md-item>\
      <md-button aria-label="Pretty">Pretty</md-button>\
    </md-item>\
    <md-item>\
      <md-button aria-label="Complex">Complex</md-button>\
    </md-item>\
    <md-item>\
      <md-button aria-label="Awesome">Awesome</md-button>\
    </md-item>\
  </md-list>\
</md-bottom-sheet>'
            });
    };

    $rootScope.sort = function() {
        // var sound = new Sound('./music/awesome.mp3', 100, false);
        // sound.start();
        // setTimeout(function(){
        //  sound.stop();
        // },3800);
        // $mdToast.show({
        //   // controller: 'ToastCtrl',
        //   template: '<md-toast><span flex>Post liked!</span></md-toast>',
        //   hideDelay: 1000,
        //   position: 'top left right'
        // });
            $mdBottomSheet.show({
              template: '\
 <md-bottom-sheet class="md-list md-has-header">\
  <md-subheader>Order by</md-subheader>\
  <md-list class="fullWidthButtons">\
    <md-item>\
      <md-button aria-label="Originality">Originality</md-button>\
    </md-item>\
    <md-item>\
      <md-button aria-label="Pretty">Prettyness</md-button>\
    </md-item>\
    <md-item>\
      <md-button aria-label="Complex">Complexity</md-button>\
    </md-item>\
    <md-item>\
      <md-button aria-label="Awesome">Awesomeness</md-button>\
    </md-item>\
  </md-list>\
</md-bottom-sheet>'
            });
    };
})

.controller('homeCtrl', function($scope,$timeout, $mdSidenav){
	$scope.toggleLeft = function() {
	    $mdSidenav('left').toggle();
	  };
	  $scope.close = function() {
	    $mdSidenav('left').close();
	  };
	  $scope.toggleRight = function() {
	    $mdSidenav('right').toggle();
	  };
})

.controller('creationCtrl', function($scope, $rootScope, $stateParams){
	$scope.item = $rootScope.uploads[$stateParams.id];	
})

.controller('ideaCtrl', function($scope, $rootScope, $stateParams){
    $scope.item = $rootScope.ideas[$stateParams.id];  
})

.controller('menuCtrl', function($scope, $timeout, $mdSidenav){
	$scope.close = function() {
	    $mdSidenav('left').close();
	  };
})

.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});

function Sound(source,volume,loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}