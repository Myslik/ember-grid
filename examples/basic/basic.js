App.IndexRoute = Ember.Route.extend({
    model: function () {
        return App.Person.find();
    },
    setupController: function (controller, model) {
        controller.set('content', model);
    }
});

App.IndexController = GRID.TableController.extend({

    columns: [
        GRID.column('name'),
        GRID.column('age')
    ]

});

App.IndexView = GRID.TableView.extend();
