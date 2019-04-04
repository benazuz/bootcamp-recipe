const renderer = new Renderer()

$('.btn').on('click', function(){
    let value = $('.inpt').val()
    $.get(`/recipes/${value}`, function(res){
        console.log(res)
        renderer.render(res)
    })
})

// $('.img').on('click', function(){
//     // let i = $(this).closest('div').find(ingredients[0])
//     // console.log(i)
//     // $('inpt').val('jdfldksjflksadjf')
    
// })

$('body').on('click','img',function(){
    let i = $(this).closest('div').find('li:first')
    console.log(i.text())
})

