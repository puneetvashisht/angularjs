 var app = angular.module('myApp')
app.directive('tbThumbnail', function(){
            return {
                templateUrl: 'partial/thumbnail.html',
                scope: {
                   title: '@title'  
                },
                transclude: true

               /* link: function(s, e, a){
                    s.title = a.title
                    s.summary = a.summary
                }*/

            }
        })