export default class HomeController {
	constructor($scope, github) {
		$scope.tabs = [
			{name:"Home", state:"home"},
			{name:"Edit Levels", state:"home.create"},
			{name:"Create Objects", state:"home.createObjects"},
			{name:"Enums", state:"home.enumEditor"}
		];
	}
}