// Todo create BackboneJS Apps
// # Views
// # Events
// # Models
// # Collections
// # Routers
var app = function () {

    var context = {title: "My New Post", body: "This is my first post!"};
    HandlebarsUtils.downloadTemplate("/backbone-tutorial/static/hbs/todos-view.hbs", "#app-container", context);

};
