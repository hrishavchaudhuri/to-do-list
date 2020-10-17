//check off specific todos
// const lisStylesDefault={
//     color:"black",
//     textDecoration:"none"
// };
// const lisStyles={
//     color:"gray",
//     textDecoration:"line-through"
// };

$("ul").on("click","li",function(){
    // console.log($(this).css("color"));
    //if li is gray turn it black
    // if($(this).css("color")==="rgb(128, 128, 128)")
    // {
    //     $(this).css(lisStylesDefault);
    // }
    // //else turn it gray
    // else{
    //     $(this).css(lisStyles);
    // }
    //INSTEAD WE WILL DEFINE A CLASS IN CSS & TOGGLE IT
    $(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
    // alert("clicked on delete");
});

$('input[type="text"]').on("keypress",function(event){
    if(event.which===13){
        let newTodo=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +  newTodo +"</li>");

    }
});

$("#plus").click(function(){
    $('input[type="text"]').fadeToggle();
});
