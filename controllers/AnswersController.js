experts.controller('AnswersCtrl', 
					function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
	$scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
	
	$scope.addAnswer = function() {
		$scope.question.answers.push(
			{
				userName: $scope.userName, 
				answerText: $scope.answerText,
				approved: false,
				rating: 0,
				comments: []
			}
		);
		
		// Reset input boxes
		$scope.userName = null;
		$scope.answerText = null;
	}
	
	$scope.rate = function(answer, value) {
		var index = $scope.question.indexOf(answer);
		$scope.question.answers[index].rating += value;
	}
});