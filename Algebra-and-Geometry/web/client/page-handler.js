$(()=>{

    let lastMethod = ""

    $(".inputMethod").hide()

    // Switch to P5JS page.

    $("#switchPageButton").on("click", ()=>{
        $(location).attr("href", "p5js-screen.html");
    })

    // Sidebar options redirects.

    $("#determinant").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#dadMethod").text("Determinant")
    })

    $("#dot").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#dadMethod").text("Dot")
    })

    $("#inverse").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#dadMethod").text("Inverse")
    })

    $("#gauss").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#dadMethod").text("Gauss")
    })

    $("#gaussJordan").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#dadMethod").text("Gauss-Jordan")
    })

    $("#sum").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#dadMethod").text("Sum")
    })

    $("#times").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#dadMethod").text("Times")
    })

    $("#transpose").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#dadMethod").text("Transpose")
    })

    // Manual option redirection.

    $("#manualChoice").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodDadMainContent").hide()
        $(".inputMethod.methodManualMainContent").show()
        $("#manualMethod").text($("#dadMethod").text())
    })

    // File option redirection.

    $("#fileChoice").on("click", ()=>{
        $(".home").hide()
        $(".inputMethod.methodManualMainContent").hide()
        $(".inputMethod.methodDadMainContent").show()
        $("#manualMethod").text($("#dadMethod").text())
    })


    // Redirection of the file option.



    // Redirection to drag and drop tutorial.

    $("#dadTutorialLink").on("click", ()=>{
        $(location).attr("href", "tutorial-dad.html")
    })

    // Redirection to manual data entry tutorial.
    
    $("#manualTutorialLink").on("click", ()=>{
        $(location).attr("href", "tutorial-manual.html")
    })

    // Result page redirection.



    // Headline redirection.

    $("#pageTitle").on("click", ()=>{
        $(location).attr("href", "index.html");
    })

})