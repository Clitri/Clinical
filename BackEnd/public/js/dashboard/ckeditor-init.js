// =================== ckeditor init ==================

$(document).ready(function () {
    function createEditor(id) {
        ClassicEditor.create(document.querySelector(id), {
            cloudServices: {
                tokenUrl: "",
                uploadUrl: "",
            },
        })
            .then((editor) => {
                window.editor = editor;
            })
            .catch((err) => {
            });
    }

    document.querySelectorAll(".ckeditor").forEach((item) => {
        // createEditor(`#${item.id}`);
        ClassicEditor.create(document.querySelector(`#${item.id}`), {
            language: "fa",
            ckfinder: {
                uploadUrl: '/dashboard/ckeditor/upload?_token='+$('meta[name="csrf-token"]').attr("content")
            }
        },{
            alignment: {
                options: [ 'right', 'right' ]
            }} )
            .then( editor => {
            })
            .catch( error => {
            })
        });

});
