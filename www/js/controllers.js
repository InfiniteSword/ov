angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };




  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '日程', id: 1 },
    { title: '活动', id: 2 },
    { title: '记录', id: 3 },
    { title: '成员', id: 4 }
  ];
})


  .controller('SettingsCtrl', function($scope, $state, $stateParams) {

    $scope.showAbout = false;
    $scope.showBgcolor = false;

    // "设置背景"Event
    $scope.setBgcolor = function(index) {
      alert(index);
    }

  })


.controller('PlaylistCtrl', function($scope, $stateParams, $sce) {
    console.log($stateParams.playlistId);
    if($stateParams.playlistId == 1){
      $scope.playlistContent = $sce.trustAsHtml(rc);
      $scope.playlistTitle = '日程';
    } else if($stateParams.playlistId == 2){
      $scope.playlistContent = $sce.trustAsHtml(hd);
      $scope.playlistTitle = '活动';
    } else if($stateParams.playlistId == 3){
      $scope.playlistContent = $sce.trustAsHtml(jl);
      $scope.playlistTitle = '记录';
    } else if($stateParams.playlistId == 4){
      $scope.playlistContent = $sce.trustAsHtml(cy);
      $scope.playlistTitle = '成员';
    }
})

.controller('browseCtrl', function($scope, $stateParams, $sce) {
    $scope.browseContent = $sce.trustAsHtml(jd);
});

var jd = '<div class="card">'+
  '<div class="item item-divider">正在进行的任务：扶五个老奶奶过马路</div>'+
  '<div class="item item-text-wrap">任务要求：不能被讹</div>'+
  '<div class="item item-text-wrap">完成人数：3</div>'+
  '<div class="item item-text-wrap">剩余时间：2天</div>'+
  '</div>'+

  '<div class="card">'+
  '<div class="item item-divider">正在进行的任务：打扫图书馆</div>'+
  '<div class="item item-text-wrap">任务要求：不能给别人带来麻烦</div>'+
  '<div class="item item-text-wrap">完成人数：7</div>'+
  '<div class="item item-text-wrap">剩余时间：1天</div>'+
  '</div>'+

  '<div class="card">'+
  '<div class="item item-divider">已经完成的任务：写完社团APP</div>'+
  '<div class="item item-text-wrap">任务要求：做出安装包</div>'+
  '<div class="item item-text-wrap">完成人数：6</div>'+
  '<div class="item item-text-wrap">剩余时间：已结束</div>'+
  '</div>';

var rc = '<div class="list list-inset">'+
  '<div class="item">周一：中午十二点半例会、A值班</div>'+
  '<div class="item">周二：B值班</div>'+
  '<div class="item">周三：C值班</div>'+
  '<div class="item">周四：晚上七点活动动员、D值班</div>'+
  '<div class="item">周五：发放活动票据、E值班</div>'+
  '<div class="item">周六：部门活动</div>'+
  '<div class="item">周七：休息</div>'+
  '</div>';

var hd = '<div class="list card">'+
  '<div class="item item-avatar">'+
  '<img src="img/fantasy.png">'+
  '<h2>Pretty Hate Machine</h2>'+
  '<p>Nine Inch Nails</p>'+
  '</div>'+
  '<div class="item item-body">'+
  '<img class="full-image" src="img/fantasy.png">'+
  '<p>活动：周末一起看电影（图片与影片无关）</p>'+
  '<p>时间：周六晚7点</p>'+
  '<p>地点：xx会堂</p>'+
  '</div>'+
  '<a class="item item-icon-left assertive" href="#">'+
  '<i class="icon ion-share"></i>'+
  '分享给小伙伴'+
  '</a>'+
  '</div>'+

  '<div class="list card">'+
  '<div class="item item-avatar">'+
  '<img src="img/road.jpg">'+
  '<h2>Pretty Hate Machine</h2>'+
  '<p>Nine Inch Nails</p>'+
  '</div>'+
  '<div class="item item-body">'+
  '<img class="full-image" src="img/road.jpg">'+
  '<p>活动：周末一起看电影（图片与影片无关）</p>'+
  '<p>时间：周六晚7点</p>'+
  '<p>地点：xx会堂</p>'+
  '</div>'+
  '<a class="item item-icon-left assertive" href="#">'+
  '<i class="icon ion-share"></i>'+
  '分享给小伙伴'+
  '</a>'+
  '</div>';

var jl = '<div class="list">'+
  '<a class="item item-thumbnail-left" href="#">'+
  '<img src="img/road.jpg">'+
  '<h2>活动一</h2>'+
  '<p>活动照片</p>'+
  '<p>优秀部员：A</p>'+
  '</a>'+
  '<a class="item item-thumbnail-left" href="#">'+
  '<img src="img/sky.png">'+
  '<h2>活动二</h2>'+
  '<p>活动照片</p>'+
  '<p>优秀部员：C</p>'+
  '</a>'+
  '<a class="item item-thumbnail-left" href="#">'+
  '<img src="img/fantasy.png">'+
  '<h2>活动三</h2>'+
  '<p>活动照片</p>'+
  '<p>优秀部员：A</p>'+
  '</a>'+
  '</div>';

var cy = '<div class="list">'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/ionic.png">'+
  '<h2>S</h2>'+
  '<p>部长</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/road.jpg">'+
  '<h2>A</h2>'+
  '<p>副部长</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/sky.png">'+
  '<h2>B</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/fantasy.png">'+
  '<h2>C</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/road.jpg">'+
  '<h2>D</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/sky.png">'+
  '<h2>E</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/fantasy.png">'+
  '<h2>F</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/road.jpg">'+
  '<h2>G</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/sky.png">'+
  '<h2>H</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/fantasy.png">'+
  '<h2>I</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/road.jpg">'+
  '<h2>J</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/sky.png">'+
  '<h2>K</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '<a class="item item-avatar" href="#">'+
  '<img src="img/fantasy.png">'+
  '<h2>L</h2>'+
  '<p>部员</p>'+
  '</a>'+
  '</div>';
