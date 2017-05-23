;(function(){
    'use strict';
    angular.module('app').controller('promotion-list',['$scope','$http','$state',
        function($scope,$http,$state){

            $scope.maxSize = 5;
            $scope.totalItems = 0;
            $scope.currentPage = 1;
            $scope.pageSize = 10;
            $scope.pageCount = 0;//总页数
            $scope.list = [];

            $scope.getList = function(){
                $http.get('/v1/aut/publish/link',{
                    params:{
                        pageSize:$scope.pageSize,
                        pageIndex:$scope.currentPage,
                    }
                }).then(function(res){
                    console.log('推广链接列表',res);
                    if(!res.data.errMessage){
                        $scope.list = res.data.data.data;
                        $scope.totalItems = res.data.data.rowCount;
                        $scope.pageCount = res.data.data.pageCount;
                        $scope.currentPage = res.data.data.pageIndex;
                    }else{

                    }
                }).catch(function(res){

                });
            };

            $scope.getList();

            $scope.pageChanged = function(){
                console.log("page to "+$scope.currentPage);
                $scope.getList();
            };

            $scope.promotionLetters = function(item){
                var idArr = [item.titleId,item.coverImgId,item.bodyId,item.bottomId,item.link];
                console.log(idArr);
                $state.go('warpper.views.section.promlink',{
                    id:item.bookId,
                    chapterid:item.cid,
                    link:encodeURIComponent(JSON.stringify(idArr))
                },{reload:true});
            };

            $scope.copyLinkSuccess = function(e){
                console.log(e);
                alert('复制成功：'+e.text);
            };

            $scope.copyLinkError = function(e){
                alert('复制失败！');
            };







        }
    ]);
})();
