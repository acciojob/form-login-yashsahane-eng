function getFormvalue(event) {
    event.preventDefault();

    const fname = document.querySelector('[name="fname"]').value.trim();
    const lname = document.querySelector('[name="lname"]').value.trim();

    alert(`${fname} ${lname}`.trim());
}