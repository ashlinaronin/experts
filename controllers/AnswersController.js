experts.controller('AnswersCtrl', 
					function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
	$scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
	
	$scope.addAnswer = function() {
		$scope.question.answered = true;
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
		// var index = $scope.question.answers.indexOf(answer);
		answer.rating += value;
		// $scope.question.answers[index].rating += value;
	}
	
	$scope.addComment = function(answer, commentText) {
		
		// var index = $scope.question.answers.indexOf(answer);
		var newComment = {description: commentText};
		answer.comments.push(newComment);
		// $scope.question.answers[index].comments.push(newComment);
		$scope.commentText = null;
	}
	
	$scope.approveAnswer = function(answer, value) {
		// var index = $scope.question.answers.indexOf(answer);
		answer.approved = value;
		// $scope.question.answers[index].approved = value;
	}
});