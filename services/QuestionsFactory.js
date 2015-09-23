experts.factory('QuestionsFactory', function QuestionsFactory() {
	var factory = {};
	factory.questions = [];
	factory.addQuestion = function() {
		factory.questions.push(
			{
				userName: factory.userName,
				synopsis: factory.synopsis,
				description: factory.description,
				answered: factory.answered,
				answers: [],
				id: factory.questions.length + 1,
			}
		);
		factory.question.synopsis
	};
	
	return factory;
});