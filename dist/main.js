const renderer = new Renderer()

$('.btn').on('click', function(){
    let value = $('.inpt').val()
    $.get(`/recipes/${value}`, function(res){
        console.log(res)
        renderer.render(res)
    })
})

