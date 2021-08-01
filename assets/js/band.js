$(document).ready(function()
{
    var header = document.getElementById('header');
    var mobileMenu = document.getElementById('mobile-menu');
    var headerHeight = header.clientHeight;// 46px 
    
    // open close Mmenu
    mobileMenu.onclick = function clickMmenu(){
        var isClosed = header.clientHeight === headerHeight;
        if (isClosed){
            header.style.height ='auto'; //height auto xuống
        }
        else{
            header.style.height =null; //trở về hegith cũ (46)

        }
    };

    // auto close Mmenu

    var menuItems =document.querySelectorAll('#nav li a[href*="#"]');
    for (var i = 0; i<menuItems.length; i++){
        var menuItem = menuItems[i];

        menuItem.onclick = function (event){
            // kiểm tra con sau thẻ a là subnav ko?
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(isParentMenu){
                event.preventDefault(); //more thì bỏ hvi mặc dinb (reload)
            }
            else{
                header.style.height =null; // ko phải more thì tự đống menu
            }
        }
    }

    const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')
        function showBuyTickets(){
            modal.classList.add('open')
        }
        function hideBuyTickets(){
            modal.classList.remove('open')
        }
        for(const buyBtn of buyBtns){
            buyBtn.addEventListener('click',showBuyTickets)
        }

        modalClose.addEventListener('click',hideBuyTickets)

        modal.addEventListener('click',hideBuyTickets)

        modalContainer.addEventListener('click', function(event){
            event.stopPropagation()
        })
});




