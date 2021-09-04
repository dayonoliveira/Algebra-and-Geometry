$(()=>{

    // Switch to P5JS page.

    $("#switchPageButton").on("click", ()=>{
        $(location).attr("href", "p5js-screen.html");
    })

    // Sidebar options redirects.

    $("#determinant").on("click", ()=>{
        $(location).attr("href", "method-dad.html");
    })

    $("#dot").on("click", ()=>{
        $(location).attr("href", "method-dad.html")
    })

    $("#inverse").on("click", ()=>{
        $(location).attr("href", "method-dad.html")
    })

    $("#gauss").on("click", ()=>{
        $(location).attr("href", "method-dad.html")
    })

    $("#gaussJordan").on("click", ()=>{
        $(location).attr("href", "method-dad.html")
    })

    $("#sum").on("click", ()=>{
        $(location).attr("href", "method-dad.html")
    })

    $("#times").on("click", ()=>{
        $(location).attr("href", "method-dad.html")
    })

    $("#transpose").on("click", ()=>{
        $(location).attr("href", "method-dad.html")
    })

    // Manual option redirection.



    // Redirection of the file option.



    // Redirection to drag and drop tutorial.



    // Redirection to manual data entry tutorial.



    // Result page redirection.



    // Headline redirection.

    $("#pageTitle").on("click", ()=>{
        $(location).attr("href", "index.html");
    })

})