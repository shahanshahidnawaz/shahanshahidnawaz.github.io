// collapse.js
document.addEventListener('DOMContentLoaded', function () {
    var coll = document.querySelectorAll('.collapsible-header');
    coll.forEach(function (item) {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});