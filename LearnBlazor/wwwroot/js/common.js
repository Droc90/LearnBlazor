window.showToastr = function (type, message)
{
    if (type == "success") {
        toastr.success(message);
    }

    if (type == "error") {
        toastr.error(message);
    }

    if (type == "warning") {
        toastr.warning(message);
    }
}
window.showSwal = function (type, message) {
    if (type == "success") {
        Swal.fire({
            title: "Good job!",
            text: message,
            icon: "success"
        });
    }
    if (type == "error") {
        Swal.fire({
            title: "Task Failed!",
            text: message,
            icon: "error"
        });
    }
    if (type == "warning") {
        Swal.fire({
            icon: 'warning',
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }
}
