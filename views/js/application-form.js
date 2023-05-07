(function () {
    function updateCoursesList(data) {
        let courseSelect = document.getElementById("course");
        courseSelect.options = [];
        for (const course of data) {
            var option = document.createElement("option");
            option.text = course.title;
            option.value = course._id;
            courseSelect.options.add(option);
        }
    }


    window.addEventListener('courses', (event) => {
        updateCoursesList(event.detail);
    });


})();

function submitApplicationForm() {
    let form = document.querySelector('.form__cells');
    console.log('A'+ form);
    let xhr = new XMLHttpRequest();
    let data = new FormData(form);

    xhr.open('POST','apply');
    //send the form data
    xhr.send(data);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            form.reset(); //reset form after AJAX success.
        }
    }
}

function selectCourseInApplicationForm(course) {
    let courseSelect = document.getElementById("course");
    courseSelect.value = course;
}