experts.controller('AnswersCtrl', 
					function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
	$scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.courseId);
	$scope.addAnswer = function() {
		$scope.question.answers.push(
			{
				username: $scope.userName, 
				answerText: $scope.answerText,
				approved: false,
				rating: 0,
				comments: []
			});
	}
	
	$scope.rate = function(answer, value) {
		var index = $scope.question.indexOf(answer);
		$scope.question.answers[index].rating += value;
	}
});