define(['angular', 'components/shared/index'], function (angular) {

    /*Create module. rspeApp must match name in html file*/
    var rspeApp = angular.module('rspeApp', ['powerSchoolModule']);

    //This will create a controller which will be used in our app
    rspeApp.controller('rspeController', ['powerSchoolModule']);

    //This will create a controller which will be used in our app
    rspeApp.controller('rspeController', function ($scope, getService) {

        loadingDialog();

        $scope.District = [];

        getService.getData('/admin/RSPE/scripts/district.json').then(function (retData) {
            retData.pop();
            $scope.District = retData;
            
        });

        $scope.formData = [];

        getService.getData('/admin/RSPE/scripts/form.json').then(function (retData) {
            retData.pop();
            $scope.formData = retData;

        });

        closeLoading();

 
    }); //Close controller

    rspeApp.factory('getService', function ($http) {
        return {
            getData: function (dataFile) {
                //Return promise directly
                return $http.get(dataFile).then(function (result) {
                    return result.data;
                });
            }
        };
    }); //Close Factory

}); //Close define