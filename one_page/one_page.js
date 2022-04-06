var lists = [{
    'href': '#',
    'text': 'Loans'
}, {
    'href': '#',
    'text': 'Finance'
}, {
    'href': '#',
    'text': 'Debt'
}, ];
document.getElementById("login").onclick = function() {
    window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    var html = "";
    lists.forEach(function(item) {
        html += "<a href='" + item['href'] + "'><li>" + item['text'] + "</li></a>";
    });
    var input = document.getElementById("status");
    if (input.value == 0) {
        document.getElementById("one-page-hamburger-input").click();
    }
    document.getElementById("add-list").innerHTML = html;
}
document.getElementById("one-page-hamburger-input").onclick = function(item) {
    document.getElementById("add-list").innerHTML = "";
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
    var input = document.getElementById("status");
    if (input.value == 0) {
        input.value = 1;
    } else {
        input.value = 0;
    }
}