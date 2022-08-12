$('#videoModal').on('hidden.bs.modal', function () {
    $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
});