$(document).ready(function () {
document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
};
document.querySelectorAll('#menu > *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
});

    $(function () {
        $("#accordion").accordion();
    });

    $( "#accordion" ).accordion({
        collapsible: true,
        active: false
    });
});