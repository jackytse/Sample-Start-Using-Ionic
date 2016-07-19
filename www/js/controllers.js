angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('TopicsCtrl', function($scope, Topics) {
  $scope.topics = [];
  Topics.all().then(function(data){
    $scope.topics = data;
  })
})

.controller('TopicDetailCtrl', function($scope, $stateParams, Topics) {
  $scope.topic = {};
  $scope.topic = Topics.findById($stateParams.topicId);
  $scope.topic.createedDate = new Date($scope.topic.create_at).getFullYear() + '年' + (new Date($scope.topic.create_at).getMonth() + 1) + '月';
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
