HandlebarsUtils =  {

    // This function will download, compile and execute handlebar template to the target
    // This only for the needs of tutorial
    downloadTemplate : function (path, target, jsonData) {
       var source;
       var template;

       $.ajax({
         url: path,
         cache: true,
         success: function(data) {
           source    = data;
           template  = Handlebars.compile(source);
           $(target).html(template(jsonData));
         }
       });
     }

};

