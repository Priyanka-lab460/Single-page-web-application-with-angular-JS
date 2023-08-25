(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.items="";
        $scope.message="";
        $scope.checkLunchMessage={
            "color": ""
        }
        $scope.styleForTextbox={
            border:""
        }
        $scope.checkItems=function(){
            let tochk=$scope.items.split(',');
            tochk.sort();
            let fntochk=tochk.filter(function(item){
                item=item.replaceAll(' ', '');
                return item!=="";
            })
            console.log("items: "+fntochk+" "+fntochk.length);
            if(fntochk.length==0){
                $scope.message="Please enter data first";
                $scope.checkLunchMessage.color="red";
                $scope.styleForTextbox.border="1px solid red";
            } else if(fntochk.length<=3){
                $scope.message="Enjoy!";
                $scope.checkLunchMessage.color="green";
                $scope.styleForTextbox.border="1px solid green";
            } else{
                $scope.message="Too much!";
                $scope.checkLunchMessage.color="green";
                $scope.styleForTextbox.border="1px solid green";
            }
        }
    }
})();