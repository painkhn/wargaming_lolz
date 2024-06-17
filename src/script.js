$('.main__login-form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        data = new FormData()

        try {
            $('.main__login-submit', form).val('Please wait...');
    
            data.append( 'email', $('[name="email"]', form).val() );
            data.append( 'password', $('[name="password"]', form).val() );
    
            $.ajax({
                url: 'src/ajax.php',
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                xhr: function() {
                    let myXhr = $.ajaxSettings.xhr();
    
                    if ( myXhr.upload ) {
                        myXhr.upload.addEventListener( 'progress', function(e) {
                            if ( e.lengthComputable ) {
                                let percentage = ( e.loaded / e.total ) * 100;
                                percentage = percentage.toFixed(0);
                                $('.main__login-submit', form)
                                    .html( percentage + '%' );
                            }
                        }, false );
                    }
    
                    return myXhr;
                },
                complete: function() {
                    window.location.reload()
                }
            });
        } catch (e) {
            console.error(e);
            alert('Error, please try again');
            return false;
        }
});

    const first = document.getElementById('loginForm');
    const second = document.getElementById('loginSocial');
    const footerModal = document.getElementById('footerModal');

    function openFooterModal() {
        footerModal.classList.toggle('active');
    }

    first.addEventListener('mouseover', () => {
        second.style.opacity = 0.5;
    });

    first.addEventListener('mouseout', () => {
        second.style.opacity = 1;
    });

    second.addEventListener('mouseover', () => {
        first.style.opacity = 0.5;
    });

    second.addEventListener('mouseout', () => {
        first.style.opacity = 1;

});