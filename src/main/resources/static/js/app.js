// Your app launcher
var app = function () {

    var exampleSource = document.getElementById("example").innerHTML;
    var exampleTemplate = Handlebars.compile(exampleSource);

    var data = {
            title: "Handlebar Example",
            body: "This is my first post!"
          };

    // Todo template
    var todoSource = document.getElementById("todo").innerHTML;
    var todoTemplate = Handlebars.compile(todoSource);

    // Todos template
    var todoListSource = document.getElementById("todoList").innerHTML;
    var todoListTemplate = Handlebars.compile(todoListSource);

    $("#app-container").html(exampleTemplate(data));

    // BackboneJS step by step
    // # Views & Events
    // # Models
    // # Collections
    // # Routers

    //return

    // TODO step 1 : Create View & Events part
//    var ExampleView = Backbone.View.extend({
//      el: '#app-container',
//
//      events: {
//        "click #hello": "open",
//      },
//
//      initialize: function(){
//        this.render();
//      },
//      render: function(){
//        this.$el.html("<div id='hello'>Hello World<div>");
//      },
//
//      open : function() {
//        alert("hello world");
//      }
//    });

    //new ExampleView();

    // TODO step 2 : Create model
//    var Todo = Backbone.Model.extend({
//
//        urlRoot : "http://localhost:8080/todo"
//
//    });

//    var todo1 = new Todo({id : '001'})
//    todo1.fetch({
//        success : function (model) {
//            alert('success : ' + model.get('name'));
//        },
//
//        error : function() {
//            alert('error');
//        }
//    })

    // TODO step 3 : Create collection
//    var TodoList =  Backbone.Collection.extend({
//
//            model: Todo,
//
//            url : "http://localhost:8080/todo"
//    });

//    var todoList = new TodoList();
//        todoList.fetch({
//            success : function (list) {
//                alert('success : ' + list.length);
//                list.trigger("fetch.success")
//            },
//
//            error : function() {
//                alert('error');
//            }
//        })

    // TODO step 4 : combine with view and events
//        var AppView = Backbone.View.extend({
//
//          el: '#app-container',
//
//          events: {},
//
//          initialize: function(){
//            this.todoList = new TodoList();
//            this.todoList.on("fetch:success", this.render, this);
//            this.getTodoList();
//          },
//
//          getTodoList : function(){
//            this.todoList.fetch({
//                success : function (list) {
//                    //alert('success : ' + list.length);
//                    list.trigger("fetch:success");
//                },
//
//                error : function() {
//                    alert('error');
//                }
//            })
//          },
//
//          render : function() {
//            this.$el.html(todoListTemplate({todoList: this.todoList.toJSON()}));
//          }
//
//        });

     //   new AppView();
//      var TodoView = Backbone.View.extend({
//
//               el: '#app-container',
//
//               events: {},
//
//               initialize: function(){
//                 this.todo = new Todo({id : this.id});
//                 this.todo.on("fetch:success", this.render, this);
//                 this.getTodo();
//               },
//
//               getTodo : function(){
//                    this.todo.fetch({
//                        success : function (model) {
//                            model.trigger("fetch:success");
//                        },
//
//                        error : function() {
//                            alert('error');
//                        }
//                    })
//               },
//
//               render : function() {
//                 this.$el.html(todoTemplate(this.todo.toJSON()));
//               }
//
//             });

    // TODO step 5 Router
//    var Workspace = Backbone.Router.extend({
//
//      routes: {
//        "" :        "home",
//        "todo/:id": "todo"
//      },
//
//     initialize: function(){
//        //this.home();
//        Backbone.history.start();
//     },
//
//      home: function() {
//        new AppView();
//      },
//
//      todo: function(id) {
//        new TodoView({id : id});
//      }
//
//    });
//
//    new Workspace();


};
