experts.factory('UtilitiesFactory', function() {
	return {
		findById: function (collection, id) {
			for(var i = 0; i < collection; i++){
				if(collection[i].id == id) {
					return collection[i];
				}
			}
			return null;
		}	
	};
});