$(()=>{
    // Switch to P5JS page.

    $("#switchPageButton").on("click", ()=>{
        $(location).attr("href", "p5js-screen.html");
    })

    // Sidebar options redirects.

    $("#determinant").on("click", ()=>{
        $("main").load("method-dad.html #methodDadMainContentDeterminant");
    })

    $("#dot").on("click", ()=>{
        $("main").load("method-dad.html #methodDadMainContentDot");
    })

    $("#inverse").on("click", ()=>{
        $("main").load("method-dad.html #methodDadMainContentInverse");
    })

    $("#gauss").on("click", ()=>{
        $("main").load("method-dad.html #methodDadMainContentGauss");
    })

    $("#gaussJordan").on("click", ()=>{
        $("main").load("method-dad.html #methodDadMainContentGaussJordan");
    })

    $("#sum").on("click", ()=>{
        $("main").load("method-dad.html #methodDadMainContentSum");
    })

    $("#times").on("click", ()=>{
        $("main").load("method-dad.html #methodDadMainContentTimes");
    })

    $("#transpose").on("click", ()=>{
        $("main").load("method-dad.html #methodDadMainContentTranspose");
    })

    // Manual option redirection.



    // Redirection of the file option.



    // Redirection to drag and drop tutorial.

    $("#dadTutorialLink").on("click", ()=>{
        $(location).attr("href", "tutorial-dad.html")
    })

    // Redirection to manual data entry tutorial.



    // Result page redirection.



    // Headline redirection.

    $("#pageTitle").on("click", ()=>{
        $(location).attr("href", "index.html");
    })

})