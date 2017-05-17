import 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('makingApples.home', [uirouter])
.config(routing)
.controller('HomeController', HomeController)
.name;