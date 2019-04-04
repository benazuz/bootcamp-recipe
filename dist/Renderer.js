class Renderer{

    render(foods){
        $('.container').empty()
        let source = $('#foods-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({foods});
        $('.container').append(newHTML)
    }
    
}

