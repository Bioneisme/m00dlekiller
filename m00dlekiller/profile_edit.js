function changeUserDetails() {
    $.getJSON('profile_data.json', function (data) {
        let prof = data.zaur_profile[0];

        document.getElementById("user_hat").innerHTML ="<a onclick='userSubmit()' type='submit'>" +
            "<i class='fa-solid fa-circle-check' style='color: black'></i>";

        document.getElementById("user_details").innerHTML = "<p class='mx-3'>" +
            "<form action='mk_profile' method='post' id='details_form'>" +
            "<input class='form-control form-control-sm' " +
            "type='text' name='description' value='" + prof.description + "'>" +
            "<hr> <div class='row d-flex'>" +
            "          <div class='col-6'>" +
            "            <ul class='list-group list-group-flush'>" +
            "              <li class='list-group-item d-flex'>First Name: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='text' name='first_name' value='" + prof.first_name + "' style='width: 80%'></li>" +
            "              <li class='list-group-item d-flex'>Surname: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='text' name='surname' value='" + prof.surname + "' style='width: 80%'></li>" +
            "              <li class='list-group-item d-flex'>Age: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='number' name='age' value='" + prof.age + "' style='width: 80%'></li>" +
            "              <li class='list-group-item d-flex'>Sex: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='text' name='sex' value='" + prof.sex + "' style='width: 80%'></li>" +
            "              <li class='list-group-item d-flex'>Major: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='text' name='major' value='" + prof.major + "' style='width: 80%'></li>" +
            "            </ul>" +
            "          </div>" +
            "          <div class='col-6'>" +
            "            <ul class='list-group list-group-flush'>" +
            "                <li class='list-group-item d-flex'>Country: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='text' name='country' value='" + prof.country + "' style='width: 80%'></li>" +
            "                <li class='list-group-item d-flex'>City: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='text' name='city' value='" + prof.city + "' style='width: 80%'></li>" +
            "                <li class='list-group-item d-flex'>Email: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='email' name='email' value='" + prof.email + "' style='width: 80%'></li>" +
            "                <li class='list-group-item d-flex'>GitHub: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='text' name='github' value='" + prof.github + "' style='width: 80%'></li>" +
            "                <li class='list-group-item d-flex'>Telegram: <input class='form-control form-control-sm mx-2 d-flex' " +
            "                   type='text' name='telegram' value='" + prof.telegram + "' style='width: 80%'></li>" +
            "            </ul>" +
            "          </div>" +
            "        </div>" + "" +
            "</form>";

    });
}

function changeProjectStatus(){
    $.getJSON('profile_data.json', function (data) {
        let prof = data.zaur_profile[0];

        $('#status_hat').html("<a onclick='statusSubmit()' type='submit'>" +
            "<i class='fa-solid fa-circle-check' style='color: black'></i></a> " +
            "<i class='fa-solid fa-circle-plus' style='color: black'></i>");

        $('#first_fieldset').addClass("px-2 border border-secondary p-3 bg-body rounded");
        $('#first_legend').addClass("float-none").html(
            "<i class='fa-solid fa-trash-can'></i>");
        $('#first_project').html(
            "<input class='form-control form-control-sm d-flex' type='text' " +
            "name='name_1' form='status_form' value='" + prof.name_1 +"'>");
        $('#first_description').html("<textarea class='form-control form-control-sm my-1 d-flex' " +
            "name='description_1' form='status_form'>" + prof.description_1);
        $('#first_progress_set').html("<div class='col-4'> <select name='color_1' " +
            "form='status_form' class='form-select form-select-sm'> " +
            "<option selected value='"+ prof.color_1 +"'>Project Status</option> " +
            "<option value='success'>Finished</option> " +
            "<option value='primary'>In progress</option> " +
            "<option value='secondary'>Frozen</option> " +
            "</select> </div>" +
            "" +
            "<div class='col-3'> <input class='form-control form-control-sm mx-3 d-flex' type='number' placeholder='Width %'" +
            "form='status_form' name='width_1' value='" + prof.width_1 +"'</div>");

        $('#second_fieldset').addClass("px-2 border border-secondary p-3 bg-body rounded");
        $('#second_legend').addClass("float-none").html(
            "<i class='fa-solid fa-trash-can'></i>");
        $('#second_project').html("<input class='form-control form-control-sm d-flex' type='text' " +
            "name='name_2' form='status_form' value='" + prof.name_2 +"'>");
        $('#second_description').html("<textarea class='form-control form-control-sm my-1 d-flex' " +
            "name='description_2' form='status_form'>" + prof.description_2);
        $('#second_progress_set').html("<div class='col-4'> <select name='color_2' " +
            "form='status_form' class='form-select form-select-sm'> " +
            "<option selected value='"+ prof.color_2 +"'>Project Status</option> " +
            "<option value='success'>Finished</option> " +
            "<option value='primary'>In progress</option> " +
            "<option value='secondary'>Frozen</option> " +
            "</select> </div>" +
            "" +
            "<div class='col-3'> <input class='form-control form-control-sm mx-3 d-flex' type='number' placeholder='Width %'" +
            "form='status_form' name='width_2' value='" + prof.width_2 +"'</div>");
        $('#third_fieldset').addClass("px-2 border border-secondary p-3 bg-body rounded");
        $('#third_legend').addClass("float-none").html(
            "<i class='fa-solid fa-trash-can'></i>");
        $('#third_project').html("<input class='form-control form-control-sm d-flex' type='text' " +
            "name='name_3' form='status_form' value='" + prof.name_3 +"'>");
        $('#third_description').html("<textarea class='form-control form-control-sm my-1 d-flex' " +
            "name='description_3' form='status_form'>" + prof.description_3);
        $('#third_progress_set').html("<div class='col-4'> <select name='color_3' " +
            "form='status_form' class='form-select form-select-sm'> " +
            "<option selected value='"+ prof.color_3 +"'>Project Status</option> " +
            "<option value='success'>Finished</option> " +
            "<option value='primary'>In progress</option> " +
            "<option value='secondary'>Frozen</option> " +
            "</select> </div>" +
            "" +
            "<div class='col-3'> <input class='form-control form-control-sm mx-3 d-flex' type='number' placeholder='Width %'" +
            "form='status_form' name='width_3' value='" + prof.width_3 +"'</div>");
    });
}

$(function () {
    $.getJSON('profile_data.json', function (data) {
        let prof = data.zaur_profile[0];

        $('#description').html(prof.description);
        $('#first_name').html(prof.first_name);
        $('#surname').html(prof.surname);
        $('#age').html(prof.age);
        $('#sex').html(prof.sex);
        $('#major').html(prof.major);
        $('#country').html(prof.country);
        $('#city').html(prof.city);
        $('#email').html("<a href='mailto:" + prof.email + "'>" + prof.email + "</a>");
        $('#github').html("<a href='https://" + prof.github + "'>" + prof.github + "</a>");
        $('#telegram').html("<a href='https://" + prof.telegram + "'>" + prof.telegram + "</a>");
        $('#full_name').html(prof.first_name + " " + prof.surname);
        $('#first_project').html("<h5 class='fw-lighter my-1'>" +
            "<i class='fa-brands fa-github' onclick='document.location='' '></i>&nbsp" +
           prof.name_1 + "</h5>");
        $('#first_description').html(prof.description_1);
        $('#first_progress').html("<div class='progress'>" +
            "<div class='progress-bar bg-" + prof.color_1 + "' role='progressbar' style='width:" +
            prof.width_1 + "%' ></div></div>");
        $('#second_project').html("<h5 class='fw-lighter my-1'>" +
            "<i class='fa-brands fa-github' onclick='document.location='' '></i>&nbsp" +
            prof.name_2 + "</h5>");
        $('#second_description').html(prof.description_2);
        $('#second_progress').html("<div class='progress'>" +
            "<div class='progress-bar bg-" + prof.color_2 + "' role='progressbar' style='width:" +
            prof.width_2 + "%' ></div></div>");
        $('#third_project').html("<h5 class='fw-lighter my-1'>" +
            "<a href='https://github.com/Bioneisme/m00dlekiller'>" +
            "<i class='fa-brands fa-github' style='color: black'></i></a>&nbsp" +
            prof.name_3 + "</h5>");
        $('#third_description').html(prof.description_3);
        $('#third_progress').html("<div class='progress'>" +
            "<div class='progress-bar bg-" + prof.color_3 + "' role='progressbar' style='width:" +
            prof.width_3 + "%' ></div></div>");
    });
});

function userSubmit(){
    $('#details_form').submit();
    setTimeout(() => {location.reload()}, 1000);
}
function statusSubmit(){
    $('#status_form').submit();
    setTimeout(() => {location.reload()}, 1000);
}

document.getElementById('user_details').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        userSubmit();
        setTimeout(() => {location.reload()}, 1000);
    }
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})