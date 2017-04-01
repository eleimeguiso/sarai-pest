import { Pests } from '/imports/api/pests/pests.js';
import { Meteor } from 'meteor/meteor';
import './edit-pest.html';

Template.editPest.onCreated(function () {
	Meteor.subscribe('pests.all');
});

Template.editPestCMS.onRendered(function () {
	$('[data-toggle="tooltip"]').tooltip(); 
});


Template.editPestCMS.helpers({
	getPests(){
		return Pests.find();
	}
});

Template.button.events({
	'click .edit': function(event, template) {
		console.log("EDIT: " + this.id);
		FlowRouter.go('/edit-pest/' + this.id);
	},	

	'click .remove': function(event, template) {
		console.log("DELETE: " + this.id);
	},
});