'use strict';

function preview(elem, output = '') {
    Array.from(elem.files).map((file) => {
        const blobUrl = window.URL.createObjectURL(file)
        output+=`<img src=${blobUrl}>`
    })   
    elem.nextElementSibling.innerHTML = output
}
