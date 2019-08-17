// User should be able to type in a temperature in Farenheit
//That temperature should be converted to celcius and printed on page
// background color/image should change based on ranges
// -20 => 0 winter
// 0 => 15 spring
// >15 summer

//math for f to c is f - 32 *5/9;
//input in f and we convert to c
function onReady() {

    function conversion(event) {
        event.preventDefault();
        console.log(event);
        const farenheit = parseFloat($('#farenheit').val()).toFixed(2);
        if (!farenheit){
            return;
        }
        let celsius = parseFloat((farenheit - 32) * (5/9)).toFixed(2);
        $('#celsius').html(celsius + "&#8451;");
        $('.pop-up-overlay').removeClass('active');
        if (celsius <= 0){
            $('.pop-up-overlay').addClass('active');
            $('#tintWinter').removeClass('active');
            $('body').css('color', 'blue');
        } else if (celsius > 0 && celsius <= 15) {
            $('.pop-up-overlay').addClass('active');
            $('#tintSpring').removeClass('active');
            $('#tintAutumn').removeClass('active');
            $('body').css('color', 'yellow');
        } else{
            $('.pop-up-overlay').addClass('active');
            $('#tintSummer').removeClass('active');
            $('body').css('color', 'orangered');
        }
    }
    $('#temperature').submit(conversion);
}
$('document').ready(onReady);