(function () {
    fetch("get_courses").then(response => {          
        return response.json();
    }).then(res => {
        const event = new CustomEvent("courses", { detail: res })
        window.dispatchEvent(event);
        updateUplicationForm(res);
    }).catch(error => {
    });
})();