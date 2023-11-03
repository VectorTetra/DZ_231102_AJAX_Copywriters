$(function(){
    //myArray = $('.copwr_button');
    
    // Отримати список всіх копірайтерів і додати їх в контейнер копірайтерів
    $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
        $(data).each(function(index){
            $('#users_container').append(`<button class="copwr_button" value="${data[index].id}">${data[index].name}</button>`);
        })
    });
});