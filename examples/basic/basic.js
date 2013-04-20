App.IndexRoute = Ember.Route.extend({
    model: function () {
        return App.Person.find();
    },
    setupController: function (controller, model) {
        controller.set('content', model);
    }
});

App.IndexController = GRID.TableController.extend({

    toolbar: [
        GRID.ColumnSelector,
        GRID.Filter
    ],

    columns: [
        GRID.column('name', { display: 'always' }),
        GRID.column('age')
    ]

});

App.IndexView = GRID.TableView.extend();
