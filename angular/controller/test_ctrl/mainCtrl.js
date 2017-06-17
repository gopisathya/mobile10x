

app.controller('mainCtrl',function($rootScope, $scope,$timeout){
// this.userState = '';
//         this.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
//             'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
//             'WY').split(' ').map(function (state) { return { abbrev: state }; });
    

$scope.states = ["Tamilnadu","Karnataka","Kerala","Goa"];
      
      $scope.selectedItem;
      $scope.getSelectedText = function() {
        if ($scope.selectedItem !== undefined) {
          return "You have selected: State " + $scope.selectedItem;
        } else {
          return "Please select a state";
        }
      };
  
  // $scope.fun=function(){
  // 	console.log("ok");
  // 	        $timeout($scope.TN=false, 8000);
  // }

})



app.directive('dExpandCollapse', function() {

  return {
          restrict: 'EA',
          link: function(scope, element, attrs){
            
            $(element).click( function() {
            	//var show = "false";
            	$(element).find(".answer").slideToggle('200',function() {            
                    // You may toggle + - icon     
            		$(element).find("span").toggleClass('faqPlus faqMinus');
            	});

            	
            	if($("div.answer:visible").length>1) { 
  // You may toggle + - icon           		    //$(this).parent().find("span.faqMinus").removeClass('faqMinus').addClass('faqPlus');
            		$(this).siblings().find(".answer").slideUp('slow');	
            	}
            	

       		  });

          }
        }



});
