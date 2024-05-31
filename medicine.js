
// ===== page alert ===== 

function lgn() {
    var pnmbr = document.getElementById("mnmbr").value
    var pass = document.getElementById("epwd").value

    if (pnmbr == 'vimal' && pass == 'vimal') {
        // alert('You are Logged in successfully')
        Swal.fire({
            title: "WellCome",
            text: "You are Logged in successfully",
            icon: "success",
        }).then(function () {
            window.location = "main-home.html";
        });

        // window.location = 'main-home.html';
        // return false;

    }

    else {

        // alert('Your email and Password are Incorrect try again')
        Swal.fire({
            title: "Sorry",
            text: "Your email and Password are Incorrect try again",
            icon: "error",
        }).then(function () {
            window.location = "index.html";
        });

        // window.location = 'index.html';
        // return false;
    }
}

function closeWin() {

    Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sure"
    }).then((result) => {
        if (result.isConfirmed) {
            let timerInterval;
            Swal.fire({
                title: "Auto close wait",
                html: "I will close in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
            }).then(function () {
                window.location = "index.html";
            });
        }
    });

}

// ========== scroling line =========== 
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// ========== loader Start ===========

var MyLoader;
function MainFunction() {
    MyLoader = setTimeout("Test()", 1000);
}

function Test() {
    document.getElementById("preloader").style = "display:none !important";
    // document.getElementById("load").style = "display:block !important";
}

// ========== Create account submit btn ========== 

function sbmts() {

    Swal.fire({
        icon: "success",
        title: "Congratulations, your account has been successfully created",
        showConfirmButton: false,
        timer: 1500
    }).then(function () {
        window.location = "main-home.html";
    });
}

// ========== dark mode ========== 

$(document).ready(function () {
    
    $("#darkmode-toggle").click(function () {
        $(".login-dexsec").toggleClass("mit");
    });

});
