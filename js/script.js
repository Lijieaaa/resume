window.onload=function(){   
    showText('Hi！我叫黎洁,我是一名本科网络工程系大三学生,对前端这个领域充满好奇心的我就像找到了我的菜。于是一入前端深似海，从此节操似路人。一颗喜欢不断探索刨根问底的心让我如今在这条路上越走越远，享受coding，追求完美，有较强的审美力，爱生活爱运动，是个具有文艺气质的二逼青年。',daziji,0,60); 
}  
function showText(text, element, property, time) {
    var i = 0;
    var loop;
    if (property == 0 || property == "innerHTML") loop = setInterval(function() {
        if (i >= text.length || !element || element.innerHTML == undefined) clearInterval(loop);
        element.innerHTML += text.charAt(i++);
    },
    time ? time: 100);
    else if (property == 1 || property == "innerText") loop = setInterval(function() {
        if (i >= text.length || !element || element.innerText == undefined) clearInterval(loop);
        element.innerText += text.charAt(i++);
    },
    time ? time: 100);
    else if (property == 2 || property == "title") loop = setInterval(function() {
        if (i >= text.length || !element || element.title == undefined) clearInterval(loop);
        element.title += text.charAt(i++);
    },
    time ? time: 100);
    else if (property == 3 || property == "value") loop = setInterval(function() {
        if (i >= text.length || !element || element.value == undefined) clearInterval(loop);
        element.value += text.charAt(i++);
    },
    time ? time: 100);
}