function show_close(k,me){
    var e = document.getElementById(k) ;
    /*
    if (e.style.display == 'none')
        e.style.display = 'block';
    else
        e.style.display = 'none';
    */
    var buttons = document.getElementsByTagName("div");

    for (var i =0;i<buttons.length;i++){
        if (buttons[i].id != ''){
            if (buttons[i].id==k)
                if (e.style.display == 'none')
                    e.style.display = 'block';
                else
                    e.style.display = 'none';
            else
                buttons[i].style.display = 'none';
        }
    }
    if (me.innerHTML=="高中(108課綱)")
        $('#media').attr('src', "https://12basic.edu.tw/edu-5.php");
    else
        $('#media').attr('src', " ");
};


function embedded_show_close(k){
    var e = document.getElementById(k) ;
    
    if (e.style.display == 'none')
        e.style.display = 'block';
    else
        e.style.display = 'none';
};

function intro_show_close(k){
    var e = document.getElementById(k) ;
    var buttons = $("div.blackboard");
    for (var i =0;i<buttons.length;i++){
        if (buttons[i].id != ''){
            if (buttons[i].id==k)
                if (e.style.display == 'none')
                    e.style.display = 'block';
                else if(e.style.display == 'block') 
                    continue;
                else
                    e.style.display = 'none';
            else
                buttons[i].style.display = 'none';
        }
    }     
    $('#media').attr('src', " ");
};

