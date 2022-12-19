AOS.init();

const URLactual = window.location;



function hoverStyle(event) {

    event.addEventListener("mousemove", (e) => {

        const { x, y } = event.getBoundingClientRect();

        event.style.setProperty("--x", e.clientX - x);

        event.style.setProperty("--y", e.clientY - y);

    });

}



var shiny = document.querySelectorAll('.shiny');

shiny.forEach(function (shinyItem) {

    hoverStyle(shinyItem);

});



document.addEventListener("click", (e) => {

    if (e.target.closest("li a")) {

        localStorage.setItem('CatNovedad', "none");

    }

    if (e.target.closest(".formulario button") || e.target.closest("footer .part1 form button")) {

        localStorage.setItem('url-actual', `${URLactual}`);

    }

    if ($('section.thanks-page .top').length > 0) {

        var link = localStorage.getItem("url-actual");

        $('.top a').attr("href", link);

    }

    if (e.target.closest(".menu-mobile")) {

        document.querySelector(".menupage").classList.toggle("open");

    }

    if (e.target.closest(".container-submenu")) {

        const submenu = document.querySelector(".submenu-movil");

        const height = submenu.scrollHeight;

        if (submenu.classList.contains("desplegar")) {

            submenu.classList.remove("desplegar");

            submenu.removeAttribute("style");

        } else {

            submenu.classList.add("desplegar");

            submenu.style.height = (height + 20) + "px";

        }

    }

    if (e.target.closest("li.contacto")) {

        console.log("click en contacto");

    }

    if (e.target.closest(".slider-competenciasAWS .item button")) {
        e.target.parentElement.classList.toggle("mostrar");
    }

    if (e.target.closest(".slider-designacionesMicro .item .name")) {
        e.target.parentElement.parentElement.classList.toggle("mostrar");
    }

})





var formespacio = document.querySelectorAll('.form-group');

var formespacioinput = document.querySelectorAll('.form-input');

var formespacioselect = document.querySelectorAll('form select');



MyApp = {

    scroll: {

        init: function () {

            window.addEventListener("scroll", function () {

                if (this.pageYOffset > 60) {

                    document.querySelector("header").classList.add("sticky");

                }

                else {

                    document.querySelector("header").classList.remove("sticky");
                }

            });

        }

    },

    contactpagelabelcontactopage: {

        init: function () {

            const terminos = document.querySelector("#terminos");

            terminos.checked = true;

            $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

            function inputcheck() {

                for (let i = 0; i < formespacioinput.length; i++) {

                    if (!formespacioinput[i].value) {

                        formespacioinput[i].parentElement.parentElement.classList.remove("ok");

                    } else {

                        formespacioinput[i].parentElement.parentElement.classList.add("ok");

                    }

                }

            }



            function validateInput(e) {

                for (let y = 0; y < formespacioinput.length; y++) {

                    if (!formespacioinput[y].value) {

                        formespacioinput[y].parentElement.parentElement.querySelector("span.span-animation").classList.add("falto");

                        formespacioinput[y].parentElement.parentElement.classList.add("error");

                        e.preventDefault();

                    } else {

                        formespacioinput[y].parentElement.parentElement.querySelector("span.span-animation").classList.remove("falto");

                        formespacioinput[y].parentElement.parentElement.classList.remove("error");

                    }

                }

            }



            function validateCheckbox(e) {

                if ($('#terminos').is(':checked')) {

                    document.querySelector(".checkbox-box").classList.remove("falto");

                } else {

                    document.querySelector(".checkbox-box").classList.add("falto");

                    e.preventDefault();

                }

            }

            // wpcf7-select

            function validateSelect(e) {

                var info = document.querySelectorAll("form [validate]");

                // console.log(info);

                for (let y = 0; y < formespacioselect.length; y++) {

                    formespacioselect[y].parentElement.parentElement.parentElement.querySelector("span.span-animation").classList.add("falto");

                    console.log(formespacioselect[y]);

                    if (formespacioselect[y].attributes.validate) {

                        if (formespacioselect[y].attributes.validate.value === "1") {

                            formespacioselect[y].parentElement.parentElement.parentElement.querySelector("span.span-animation").classList.remove("falto");

                        }



                    }

                }

            }



            $('#your-motivo').on('change', () => {

                document.querySelector("#your-motivo").setAttribute("validate", "1");

            });

            $('#your-asunt').on('change', () => {

                document.querySelector("#your-asunt").setAttribute("validate", "1");

            });

            var formespacioinput2 = document.querySelectorAll('.form-input');
            // var formespacioinput2 = document.getElementsByClassName("form-input");

            $('.form-input').on('change', () => {
                formespacioinput2.forEach(element => {
                    if (!element.value == "") {
                        element.parentElement.parentElement.classList.add("ok");
                    } else {
                        element.parentElement.parentElement.classList.remove("ok");
                    }
                });
            });



            // function subirLabel(){
            //     for (let i = 0; i < formespacioinput.length; i++) {                        
            //         if (formespacioinput[i].value == "") {
            //             console.log(formespacioinput[i]);
            //             formespacioinput[i].parentElement.parentElement.classList.add('focusin');
            //             formespacioinput[i].parentElement.parentElement.querySelector("span.span-animation").classList.add("animacion");
            //         }else{
            //             formespacioinput[i].parentElement.parentElement.classList.remove('focusin');
            //             formespacioinput[i].parentElement.parentElement.querySelector("span.span-animation").classList.remove("animacion");
            //         }
            //     //     // formespacioinput[i].addEventListener('focusin', (event) => {
            //     //     //     formespacioinput[i].parentElement.parentElement.classList.add('focusin');
            //     //     //     formespacioinput[i].parentElement.parentElement.querySelector("span.span-animation").classList.add("animacion");  
            //     //     // });
            //     //     // formespacioinput[i].addEventListener('focusout', (event) => {
            //     //     //     formespacioinput[i].parentElement.parentElement.classList.remove('focusin');
            //     //     //     formespacioinput[i].parentElement.parentElement.querySelector("span.span-animation").classList.remove("animacion");
            //     //     //     console.log(formespacioinput[i]);
            //     //     //     if (formespacioinput[i].value) {
            //     //     //         formespacioinput[i].parentElement.parentElement.classList.add('ok');
            //     //     //     }
            //     //     // });
            //     }
            //     // if (e.GetKey(KeyCode.Mouse0)){
            //     //      Debug.Log("Mouse 0 ");
            //     // }
            //     // console.log("sasd");
            //     subirLabel()
            // }

            // subirLabel()

            document.addEventListener("click", function (e) {
                // subirLabel(e)
                //     if (e.which == 1){
                //         console.log("asdasdasdas");
                //    }
                if (e.target.closest(".form-input")) {

                    formespacio.forEach(function (shinyItem) {

                        shinyItem.classList.remove("focusin");

                        shinyItem.querySelector("span.span-animation").classList.remove("animacion");

                    });

                    e.target.parentElement.parentElement.classList.add("focusin");

                    e.target.parentElement.parentElement.querySelector("span.span-animation").classList.add("animacion");

                } else {

                    formespacio.forEach(function (shinyItem) {

                        shinyItem.classList.remove("focusin");

                    });

                }

                if (e.target.closest("form select")) {

                    // console.log(formespacioselect);

                    formespacioselect.forEach(function (shinyItem2) {

                        shinyItem2.parentElement.parentElement.parentElement.classList.remove("open");

                        shinyItem2.parentElement.parentElement.parentElement.classList.remove("focusin");

                        shinyItem2.parentElement.parentElement.parentElement.querySelector("span.span-animation").classList.remove("animacion");

                    });

                    e.target.parentElement.parentElement.parentElement.classList.add("open");

                    e.target.parentElement.parentElement.parentElement.classList.add("focusin");

                    e.target.parentElement.parentElement.parentElement.querySelector("span.span-animation").classList.add("animacion");

                } else {

                    formespacioselect.forEach(function (shinyItem2) {

                        shinyItem2.parentElement.parentElement.parentElement.classList.remove("open");

                    });

                }

                inputcheck()

                if (e.target.closest("form button")) {

                    validateInput(e)

                    validateSelect(e)

                    validateCheckbox(e)

                }
            })
            document.addEventListener("keydown", function (event) {
                if (event.keyCode == 9) {
                    for (let i = 0; i < formespacioinput.length; i++) {
                        formespacioinput[i].addEventListener('focusin', (event) => {
                            formespacioinput[i].parentElement.parentElement.classList.add('focusin');
                            formespacioinput[i].parentElement.parentElement.querySelector("span.span-animation").classList.add("animacion");
                        });
                        formespacioinput[i].addEventListener('focusout', (event) => {
                            formespacioinput[i].parentElement.parentElement.classList.remove('focusin');
                            formespacioinput[i].parentElement.parentElement.querySelector("span.span-animation").classList.remove("animacion");
                            if (formespacioinput[i].value) {
                                formespacioinput[i].parentElement.parentElement.classList.add('ok');
                            }
                        });
                    }
                }
                // if (event.keyCode == 9) {
                //     console.log("");
                // }

            })
        }

    },

    slider_novedades_home: {

        init: function () {

            document.addEventListener("click", function (e) {

                if (e.target.closest(".slider-novedades .item .info a") || e.target.closest(".main-article .category a")) {

                    const titleService = e.target.textContent;

                    localStorage.setItem('CatNovedad', `${titleService}`);

                }

            })

        }

    },

    category: {

        init: function () {

            document.querySelector("#categorias li a").classList.add("select");

            $(`.destacado`).hide();



            /*
            var categoriaNovedad = localStorage.getItem("CatNovedad");

            if (categoriaNovedad == "none") {

                document.querySelector("#categorias li a").classList.add("select");

            }

            let listaTitle = [];

            const enlaces = document.querySelectorAll('#categorias a');

            for (let i = 0; i < enlaces.length; i++) {

                textoitem = enlaces[i].textContent;

                listaTitle.push(textoitem);

            }

            if (listaTitle.includes(categoriaNovedad)) {

                for (let y = 0; y < enlaces.length; y++) {

                    if (categoriaNovedad === enlaces[y].textContent) {

                        document.querySelector("#categorias a").classList.remove("select");

                        enlaces[y].classList.add('select')

                    }

                }

            }



            $('.items-category .item').hide();

            const categoryMain = document.querySelector('#categorias a.select').innerHTML;

            console.log(categoryMain);

            if (categoryMain === "Todo") {

                $(`.item`).show(0);

            } else {

                $(`.item[data-categoria="${categoryMain}"]`).show(0);

            }



            if (categoryMain === "Caso de Ã©xito") {

                $(`.destacado`).show();

            }



            enlaces.forEach((elemento) => {

                elemento.addEventListener('click', (evento) => {

                    evento.preventDefault();

                    enlaces.forEach((enlace) => enlace.classList.remove('select'));

                    evento.target.classList.add('select');

                    var categoria = evento.target.innerHTML; 

                    console.log(categoria);

                    $(`.item`).not(`[data-categoria="${categoria}"]`).hide();

                    $(`.item[data-categoria="${categoria}"]`).show();

                    $(`.destacado`).hide();

                    if (categoria === "Todo") {

                        $(`.item`).show();

                    }

                    if (categoria === "Caso de Ã©xito") {

                        $(`.destacado`).show();

                    }

                })

            })*/

        }

    },

    scrollRedes: {

        init: function () {

            $(document).ready(function (argument) {

                if ($('.scroll').length > 0) {

                    $(".scroll").stick_in_parent({

                        offset_top: 180

                    });

                }

            })

        }

    },

    slider_aliados: {

        init: function () {

            var mediaqueryList = window.matchMedia("(max-width: 768px)");



            if (mediaqueryList.matches) {

                $('.marquee-with-options').marquee({

                    speed: 8000,

                    gap: 50,

                    delayBeforeStart: 0,

                    direction: 'left',

                    duplicated: true,

                });

            } else {

                $('.marquee-with-options').marquee({

                    speed: 30000,

                    gap: 50,

                    delayBeforeStart: 0,

                    direction: 'left',

                    duplicated: true,

                });

            }

        }

    },

    selider_tecnologias: {
        init: function () {
            $('.marquee-with-options').marquee({

                speed: 8000,

                gap: 50,

                delayBeforeStart: 0,

                direction: 'left',

                duplicated: true,

            });
        }
    }

}





if ($('header').length > 0) {

    MyApp.scroll.init();

}



if ($('.home-servicios-interna').length > 0) {

    MyApp.contactpagelabelcontactopage.init();

}



if ($('.trabajo').length > 0) {

    MyApp.contactpagelabelcontactopage.init();

}



if ($('.contact-page').length > 0) {

    MyApp.contactpagelabelcontactopage.init();

}





if ($('.categorias').length > 0) {

    MyApp.category.init();

}



if ($('.main-article .redes').length > 0) {

    MyApp.scrollRedes.init();

}



if ($('.slider-novedades').length > 0 || $('.main-article').length > 0) {

    MyApp.slider_novedades_home.init();

}



if ($('.aliados').length > 0) {

    MyApp.slider_aliados.init();

}

if ($('.tecnologias').length > 0) {

    MyApp.slider_aliados.init();

}

var mediaqueryList = window.matchMedia("(max-width: 425px)");
var textosSlider = document.querySelectorAll('section.competenciasAWS .slider-competenciasAWS .item p');


if (mediaqueryList.matches) {
    for (let i = 0; i < textosSlider.length; i++) {
        textosSlider[i].style.fontSize = '16px'
    }
}


$('.slider-empresas').slick({

    infinite: true,

    speed: 300,

    dots: false,

    autoplay: true,

    slidesToShow: 1,

    slidesToScroll: 1,

    responsive: [

    ]

});



$('.slider-novedades').slick({

    infinite: true,

    speed: 300,

    dots: false,

    autoplay: true,

    slidesToShow: 3,

    slidesToScroll: 1,

    responsive: [

        {

            breakpoint: 1700,

            settings: {

                slidesToShow: 3,/* 1.94 */

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 1611,

            settings: {

                slidesToShow: 3,/* 1.94 */

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 1441,

            settings: {

                slidesToShow: 3,/* 1.94 */

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 1305,

            settings: {

                slidesToShow: 3,/* 1.94 */

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 1281,

            settings: {

                slidesToShow: 2,/* 1.94 */

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 1167,

            settings: {

                slidesToShow: 2,

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 1025,

            settings: {

                slidesToShow: 2,/* 1.94 */

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 769,

            settings: {

                slidesToShow: 1,/* 1.94 */

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 426,

            settings: {

                slidesToShow: 1,/* 1.94 */

                slidesToScroll: 1,

            }

        }

    ]

});



$('.slider-competencias').slick({

    infinite: true,

    speed: 300,

    dots: false,

    autoplay: true,

    slidesToShow: 3,

    slidesToScroll: 1,

    responsive: [

        {

            breakpoint: 1601,

            settings: {

                slidesToShow: 3,/* 1.94 */

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 1440,

            settings: {

                slidesToShow: 3,

                slidesToScroll: 1,

            }

        }, {

            breakpoint: 1200,

            settings: {

                slidesToShow: 2,

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 769,

            settings: {

                slidesToShow: 2,

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 651,

            settings: {

                slidesToShow: 1,

                slidesToScroll: 1,

            }

        }

    ]

});


$('.slider-competenciasAWS').slick({

    infinite: true,

    speed: 300,

    dots: false,

    autoplay: true,

    slidesToShow: 2,

    slidesToScroll: 1,

    responsive: [
        {

            breakpoint: 836,

            settings: {

                slidesToShow: 1,/* 1.94 */

                slidesToScroll: 1,

            }

        },
    ]

});

$('.slider-certificacionesAWS').slick({

    infinite: true,

    speed: 300,

    dots: false,

    autoplay: true,

    slidesToShow: 5,

    slidesToScroll: 1,

    responsive: [
        {

            breakpoint: 1601,

            settings: {

                slidesToShow: 4,/* 1.94 */

                slidesToScroll: 1,

            }

        },
        {

            breakpoint: 901,

            settings: {

                slidesToShow: 3,/* 1.94 */

                slidesToScroll: 1,

            }

        },
        {

            breakpoint: 601,

            settings: {

                slidesToShow: 2,/* 1.94 */

                slidesToScroll: 1,

            }

        },
    ]

});

$('.contentDesignaciones').slick({

    infinite: true,

    speed: 300,

    dots: false,

    autoplay: true,

    slidesToShow: 3,

    slidesToScroll: 1,

    responsive: [
        {

            breakpoint: 901,

            settings: {

                slidesToShow: 2,/* 1.94 */

                slidesToScroll: 1,

            }

        },
    ]

});

$('.slider-designacionesMicro').slick({

    infinite: true,

    speed: 300,

    dots: false,

    autoplay: true,

    slidesToShow: 3,

    slidesToScroll: 1,

    responsive: [
        {

            breakpoint: 1025,

            settings: {

                slidesToShow: 2,/* 1.94 */

                slidesToScroll: 1,

            }

        },
        {

            breakpoint: 901,

            settings: {

                slidesToShow: 1,/* 1.94 */

                slidesToScroll: 1,

            }

        },
    ]

});


