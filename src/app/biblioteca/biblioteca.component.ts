import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UploadService } from '../uploads/shared/upload.service';
import { Upload } from '../uploads/shared/upload';

import { Observable } from 'rxjs/Observable';


declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  public image1: string
  public image2: string
  public image3: string

  private formulario: FormGroup = new FormGroup({
    'image1': new FormControl(null),
    'image2': new FormControl(null),
    'image3': new FormControl(null)
  })


  uploads: Observable<Upload[]>;

  // IMG_PATH: string = 'assets/img/'

  // public images:Array<string> = ['130416.jpg', '130415.jpg', '512607.jpg']
  public items: any
  public imgValue

  constructor( private upSvc: UploadService) { }

  // public img = '130416.jpg';
  // public img1 = '130415.jpg';
  // public img2 = '512607.jpg';

  ngOnInit() {
    //$('#biblioteca').modal('show');
    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe((result) => {
      this.items = result
      // console.log(this.items.length)
    });
    // this.uploads.forEach(item => {
    //   console.log(item)
    // })
    
    
    $(document).on('click', '.btn-save', function () {
      var data_box = $('#biblioteca #data-box').val();
      var img = $("input[name=img]:checked + img").attr('src');
      
      $(`.image[data-box='`+data_box+`']`).html('<img src="' + img + '"/>');
      // $('#image1').val(img);
      // this.imgValue = img
        
      // this.formulario.image1.reset({value: 'olá'})
        
      $('#biblioteca').modal('hide');
    })
  }

}
