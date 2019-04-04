


$('.btn').on('click', function(){
    let value = $('.inpt').val()
    $.get(`/recipes/${value}`, function(res){
        console.log(res)
    })
})
