function show_close(k){
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
    
};

