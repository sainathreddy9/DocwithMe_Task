
var app = angular.module('taskList', []);

                app.controller('taskListController', function($scope) {
                    $scope.tasks = [];
                    $scope.addTask = function() {
                        $scope.errortext = "";
                        let flag = true;
                        console.log($scope.tasks.length)
                        angular.forEach($scope.tasks, function (task, key) {
                            if(task.todoTask === $scope.task.name && task.todoMotivation === $scope.task.motivation){
                                flag = false;
                            }
                        });
                        if(flag) {
                            $scope.tasks.push(
                                {todoTask:$scope.task.name, todoMotivation:$scope.task.motivation, done:false}
                            );
                            $scope.task.name = "";
                            $scope.task.motivation = "";
                            taskname.focus();
                        } else {
                            $scope.errortext = "The task and motivation is already in your tasks list.";
                        }
                    };

                    $scope.removeTask = function() {
                        $scope.errortext = "";
                        var oldList = $scope.tasks;
                        $scope.tasks = [];
                        angular.forEach(oldList, function(x) {
                            if (!x.done) $scope.tasks.push(x);
                        });
                    };
                });