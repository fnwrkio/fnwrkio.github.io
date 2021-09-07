$(function() {
    $("#typed").typed({
        // Change to edit type effect
        strings: ["web developer", "frontend dev", "backend dev", "ui/ux designer", "software engineer", "freelancer"],
        typeSpeed: 90,
        backDelay: 700,
        contentType: "html",
        loop: !0,
        resetCallback: function() { newTyped() }
    }), $(".reset").click(function() { $("#typed").typed("reset") })
});

var color = Chart.helpers.color;
var config = {
    type: 'radar',
    data: {
        labels: [
            'Laravel', 'HTML & CSS', 'JavaScript', 'Ruby', 'ReactJS', ['NuxtJS', 'VueJS'], 'Java'
        ],
        datasets: [{
            label: 'Skill Percentage',
            backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: [
                90,
                99,
                86,
                40,
                60,
                80,
                35
            ]
        }]
    },
    options: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Radar Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    }
};

$('a[data-target^="anchor"]').bind('click', function () {
    let target = $(this).attr('href'),
        bl_top = $(target).offset().top;

    $('body, html').animate({ scrollTop: bl_top - 30 }, 900);

    return false;
});

window.onload = function() {
    window.myRadar = new Chart(document.getElementById('canvas'), config);
};

$(document).on('scroll resize', function () {
    var target = $('footer');
    var targetTop = $(target).offset().top;

    if ($(window).scrollTop() > (targetTop - 700)) {
        $('.social-media-btn').addClass('d-none');
        $('.back-to-top').addClass('d-none');
    } else {
        $('.social-media-btn').removeClass('d-none');
        $('.back-to-top').removeClass('d-none');
    }
});

$('.parallaxie').parallaxie();

var $sections = $('section');
$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    var $currentSection;
    
    $sections.each(function () {
        var divPosition = $(this).offset().top;
        if (divPosition - 100 < currentScroll) {
            $currentSection = $(this);
        }
    });

    if ($currentSection) {
        var id = $currentSection.attr('id');
        $('.social-media-link-list ul li a').removeClass('active');
        $("[href='#" + id + "']").addClass('active');
    }
});

lightGallery(document.getElementById('lightgallery'), {
    download: false,
    share: false,
    hash: true,
});
