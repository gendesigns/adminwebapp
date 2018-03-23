import { Component, OnInit } from '@angular/core';

declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#input-id").fileinput({
      uploadUrl: "/file-upload-batch/2",
      showUpload: true,
      showCaption: true,
      browseLabel: 'Selecionar',
      removeClass: 'btn btn-danger',
      uploadClass: 'btn btn-success',
      removeLabel: 'Remover',
      fileActionSettings: {
        showUpload: false,
        removeIcon: '<i class="fas fa-trash"></i>',
        removeClass: 'btn btn-danger btn-tiny',
        removeTitle: 'Remover imagem',
        zoomIcon: '<i class="fas fa-search-plus"></i>',
        zoomClass: 'btn btn-success btn-tiny',
        zoomTitle: 'Ampliar',
      },
      previewZoomButtonIcons: {
        prev: '<i class="fas fa-arrow-left"></i>',
        next: '<i class="fas fa-arrow-right"></i>',
        toggleheader: '<i class="fas fa-arrows-alt-v"></i>',
        fullscreen: '<i class="fas fa-arrows-alt"></i>',
        borderless: '<i class="fas fa-expand"></i>',
        close: '<i class="fas fa-times"></i>'
      },
      previewZoomButtonClasses: {
        prev: 'btn btn-navigate',
        next: 'btn btn-navigate',
        toggleheader: 'btn btn-tiny btn-kv btn-default btn-outline-secondary',
        fullscreen: 'btn btn-tiny btn-kv btn-default btn-outline-secondary',
        borderless: 'btn btn-tiny btn-kv btn-default btn-outline-secondary',
        close: 'btn btn-tiny btn-kv btn-default btn-outline-secondary'
      }
    });

    $("#input-id").on('filepreupload', function (event, data, previewId, index) {
      console.log('File pre upload triggered');
    })

  }
}
