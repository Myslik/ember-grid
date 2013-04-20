Ember Grid
==========

Grid component for Ember.js

## Dependencies

* jQuery
* Twitter Bootstrap
* Handlebars
* Ember.js

## Usage

```javascript
App.PersonsController = GRID.TableController.extend({

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
