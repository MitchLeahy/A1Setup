function addSelectedOnClick(className) {
$(document).ready(function() {
        $(className).on('click', function() {
            $(className).removeClass("selected");
            $(this).addClass("selected");
        });
    });
};
export default addSelectedOnClick;