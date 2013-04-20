Ember Grid
==========

Grid component for Ember.js

Check it out this [demo](http://myslik.github.io/ember-grid/examples/basic/index.html).

## Dependencies

* jQuery
* Twitter Bootstrap
* Handlebars
* Ember.js

## Usage

```javascript
App.PersonsController = GRID.TableController.extend({

    toolbar: [
        GRID.ColumnSelector,
        GRID.Filter
    ],

    columns: [
        GRID.column('name', { header: 'Full name' }),
        GRID.column('age', { formatter: '<strong>{{view.content.age}}</strong>' })
    ]

});
```

## Features

* Sortable
* Pagination
* Formatters
* Column Selection
* Filters
