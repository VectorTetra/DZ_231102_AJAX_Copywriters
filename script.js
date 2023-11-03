$(function(){
    //let myArray = [];
    let selectedUserId;
    // Отримати список всіх копірайтерів і додати їх в контейнер копірайтерів
    $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
        $(data).each(function(index){
            $('#users_container').append(`<button class="copwr_button" value="${data[index].id}">${data[index].name}</button>`);
            //myArray.push(data[index]);
        });

        // Призначити на всі кнопки обробник події, який дозволяє отримати і відобразити особисті дані 
        // копірайтера
        $('.copwr_button').on( "click", function() {
            $.getJSON(`https://jsonplaceholder.typicode.com/users?id=${$(this).val()}`,function(user)
            {
                $('#trName').text(user[0].name);
                $('#trUsername').text(user[0].username);
                $('#trAddress').text(`${user[0].address.street}, ${user[0].address.city}`);
                $('#trEmail').text(user[0].email);
                $('#trPhone').text(user[0].phone);
                $('#trWebsite').text(user[0].website);
                $('#userInfo').css('display','block');
                // Записуємо ID копірайтера для можливого запиту постів
                selectedUserId = user[0].id;
            })                   
        });

        
    });
    
   
});