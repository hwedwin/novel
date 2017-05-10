;(function(){
    'use strict';
    angular.module('app').controller('header',['$scope','localStorageService','$http',
        function($scope,localStorageService,$http){

            $scope.userInfo = {
                token: '',
                account: '',
                headIconUrl: '',
                nickName: '',
                level: null,
                phoneNumber: null,
                status: null,
                type: null,
                uid: null,
                pUid: null,
                scale: null
            };

            function getUserInfo(){
                if(!!localStorageService.get('token')){
                    $http.get('/v1/aut/user/info').then(function(res){
                        console.log('userInfo',res);
                        if(!res.data.errMessage){
                            $scope.userInfo = {
                                token: res.data.data.token,
                                account: res.data.data.account,
                                headIconUrl: res.data.data.headIconUrl,
                                nickName: res.data.data.nickName,
                                level: res.data.data.level,
                                phoneNumber: res.data.data.phoneNumber,
                                status: res.data.data.status,
                                type: res.data.data.type,
                                uid: res.data.data.uid,
                                pUid: res.data.data.pUid,
                                scale: res.data.data.scale
                            };
                        }else{
                            $scope.userInfo = {
                                token: '',
                                account: '',
                                headIconUrl: '',
                                nickName: '',
                                level: null,
                                phoneNumber: null,
                                status: null,
                                type: null,
                                uid: null,
                                pUid: null,
                                scale: null
                            };
                        }
                    }).catch(function(res){

                    });
                }
            }
            getUserInfo();

            $scope.$on('warpperlogin', function(event,data) {
                getUserInfo();
        	});

        }
    ]);
})();