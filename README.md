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
        GRID.column('name'),
        GRID.column('age')
    ]

});
```

## Features

* Sortable
* Pagination
* Formatters
