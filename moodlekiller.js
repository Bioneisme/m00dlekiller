//just a text under footer
$("#phrase").html("Moodle Killer Project | Support: "
    + "<a href='https://t.me/master_without_servant' class='link-secondary' target='_blank'> <i class='fa fa-telegram '></i> " +
    "Zavr </a>" + " & " + "<wbr/>" + "<a href='https://t.me/bioneis' class='link-secondary' target='_blank'><i class='fa fa-telegram '></i>  " +
    "Bione </a>");

//just head-->title text
$("#version").html("MoodleKiller 4.0");

//just warning text
$( '#wText' ).html("Warning Message" );

//name of subjects in the main_reg
$( '.subj:eq(0)' ).html("Foreign Language 2 (English) | " + "</br>" + "Assel Salkenova" );
$( '.subj:eq(1)' ).html("WEB Technologies 1 (Front End) | " + "<br>" + "Yegemberdiyeva Gulzhan" );
$( '.subj:eq(2)' ).html("Object-Oriented Programming (Java) | " + "</br>" + "Aimukhambetov Olzhas" );
$( '.subj:eq(3)' ).html("Discrete Mathematics | " + "</br>" + "Zhalgas Aidana" );
$( '.subj:eq(4)' ).html("Modern History of Kazakhstan | " + "</br>" + "Mamytova Saule" );
$( '.subj:eq(5)' ).html("Physical Culture | " + "</br>" + "Askapov Sarzhan" );

//name of subjects in the grades page
$( '.gas:eq(0)' ).html("Foreign Language 2 (English) | Assel Salkenova");
$( '.gas:eq(13)' ).html("Foreign Language 2 (English) | Assel Salkenova");

$( '.gas:eq(1)' ).html("WEB Technologies 1 (Front End) | Yegemberdiyeva Gulzhan");
$( '.gas:eq(14)' ).html("WEB Technologies 1 (Front End) | Yegemberdiyeva Gulzhan");

$( '.gas:eq(2)' ).html("Object-Oriented Programming (Java) | Aimukhambetov Olzhas");
$( '.gas:eq(15)' ).html("Object-Oriented Programming (Java) | Aimukhambetov Olzhas");

$( '.gas:eq(3)' ).html("Discrete Mathematics | Zhalgas Aidana");
$( '.gas:eq(16)' ).html("Discrete Mathematics | Zhalgas Aidana");

$( '.gas:eq(4)' ).html("Modern History of Kazakhstan | Mamytova Saule");
$( '.gas:eq(17)' ).html("Modern History of Kazakhstan | Mamytova Saule");

$( '.gas:eq(5)' ).html("Physical Culture | Sarzhan Askapov");
$( '.gas:eq(18)' ).html("Physical Culture | Sarzhan Askapov");

$( '.gas:eq(6)' ).html("Foreign language | Aray Rakhimzhanova");
$( '.gas:eq(19)' ).html("Foreign language | Aray Rakhimzhanova");

$( '.gas:eq(7)' ).html("Information and Communication Technologies | Gulnur Smagulova");
$( '.gas:eq(20)' ).html("Information and Communication Technologies | Gulnur Smagulova");

$( '.gas:eq(8)' ).html("Introduction to Programming (C++) | Askar Khaimuldin");
$( '.gas:eq(21)' ).html("Introduction to Programming (C++) | Askar Khaimuldin");

$( '.gas:eq(9)' ).html("Linear Algebra | Balgaisha Mukanova");
$( '.gas:eq(22)' ).html("Linear Algebra | Balgaisha Mukanova");

$( '.gas:eq(10)' ).html("Cultural studies | Anar Uyzbayeva");
$( '.gas:eq(23)' ).html("Cultural studies | Anar Uyzbayeva");

$( '.gas:eq(11)' ).html("Physical Culture | Sarzhan Askapov");
$( '.gas:eq(24)' ).html("Physical Culture | Sarzhan Askapov");

$( '.gas:eq(12)' ).html("Educational Practice | Gulnur Smagulova");
$( '.gas:eq(25)' ).html("Educational Practice | Gulnur Smagulova");

//warning message for gas in the grades
$(document).ready(function(){
    $('.gas').click(function(){
        pushUpMessage();
    });
});

//hover effects for subject buttons
$(document).ready(function(){
    $(".subj").hover(function(){
        $(this).css({"background-color": "#1177d1", "transition": "background-color 0.2s linear"});
    }, function(){
        $(this).css("background-color", "white");
    });
});

//hover effect for Cources text in the navbar
$( '.courses_text' ).css({"background-color": "#f8f9fa", "color": "black", "border": "1px solid #f8f9fa"});

$(document).ready(function(){
    $('.courses_text').hover(function(){
        $(this).css({"border-raduis": "100px", "border" : "1px solid #0d6efd", "background-color": "#0d6efd", "color":"white",
            "transition": " border-color 0.2s linear", "transition": " background-color 0.2s linear",
            });
    },
        function(){
        $(this).css({"background-color": "#f8f9fa", "color": "black", "border": "1px solid #f8f9fa", "border-raduis": "5px"});
    });
});


//click method for selecting fieldset
$(document).ready(function(){
    $("fieldset").mouseover(function(){
        $(this).css("border-color", "black");
    });
    $("fieldset").mouseout(function(){
        $(this).css("border-color", "#dee2e6");
    });
});

$(document).ready(function(){
    $("fff").mouseover(function(){
        $(this).css("border-color", "black");
    });
    $("fff").mouseout(function(){
        $(this).css("background-color", "#dee2e6");
    });
});

//for snackbar/toast
function pushUpMessage() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    document.getElementById('sound').play();

}



function sendLoadingButton(){
    document.getElementById("sendButton").innerHTML =
        "<span class='spinner-border spinner-border-sm' id='loadingSpinner' role='status' aria-hidden='true'></span>"
        + " Loading...";
    setTimeout(() => {location.reload()}, 1000);
}

function funcError(){
    alert("This function is not working yet :(");
}

function getTimeFirst(date) {
    const tod = new Date(date);
    const time = tod.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const month = tod.toLocaleString('en-us', { month: 'long' });
    const week = tod.toLocaleString('en-us', { weekday: 'long' });

    return week + ", " + tod.getDate() + " " + month + " " + tod.getFullYear() + ", " + time;
}

function getTimeLast() {
    const tod = new Date();
    const time = tod.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const month = tod.toLocaleString('en-us', { month: 'long' });
    const week = tod.toLocaleString('en-us', { weekday: 'long' });

    return week + ", " + tod.getDate() + " " + month + " " + tod.getFullYear() + ", " + time;
}

function getNumberOfDays() {
    const start = new Date("12/22/2021");
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const oneHour = oneDay / 24;

    const diffInTime = now.getTime() - start.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    const diffInHours = Math.round((diffInTime / oneHour) % 24);
    console.log(diffInDays);

    return "(" + diffInDays + " days, " + diffInHours + " hours)";
}

