import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
import { HTTP } from '@ionic-native/http/ngx';
const { Filesystem } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private iab: InAppBrowser,
    // private diagnostic: Diagnostic,
    // private fileOpener: FileOpener,
    // private transfer: FileTransfer,
    // private file: File,
    // private http: HTTP
    ) { }

  async iniciar() {
    const browser = this.iab.create('https://sistemashomologacao.suafaculdade.com.br/cdn/pdf.html', '_blank');
    console.log(`Abrindo Browser`);
    browser.on('loadstart').subscribe(
      (data) => {
        console.log("URL É: ", data.url);
        // this.downloadfile(data.url)
      },
      err => {
        console.log("InAppBrowser beforeload Event Error: " + err);
      });
  }

  // private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  //   const reader = new FileReader;
  //   console.log('reader 64');
  //   reader.onerror = reject;
  //   console.log('não foi rejeitado ');
  //   reader.onload = () => {
  //     console.log('on load');
  //     resolve(reader.result);
  //   };
  //   console.log('readas antes');
  //   reader.readAsDataURL(blob);
  //   console.log('readas depois');
  // })

  // downloadfile(url) {
  //   console.log("INSIDE DOWNLOAD FILE", url);

  //   var extension = url.substr(url.length - 4);
  //   if (extension == '.pdf') {
  //     console.log("FILE IS PDF");

  //     const name = url.substr(url.lastIndexOf('/') + 1);
  //     this.diagnostic.requestExternalStorageAuthorization().then(e => {
  //       console.log("é permitido");
  //       this.http.downloadFile(url, {}, {}, '' + name).then(response => {
  //         // prints 200
  //         console.log('success block...', response);
  //       }).catch(err => {
  //         // prints 403
  //         console.log('error block ... ', err.status);
  //         // prints Permission denied
  //         console.log('error block ... ', err.error);
  //       })
  //     }).catch(e => {
  //       console.log("EXTERNAL STORAGE HAS NO PERMISSIon")
  //     })
  //     // this.iab.create(url, '_system');
  //     //this.downloadByUrl(url);

  //     // const fileName = 'timesheet.pdf';
  //     // try {
  //     //   Filesystem.writeFile({
  //     //     path: fileName,
  //     //     data: pdfBase64,
  //     //     directory: FilesystemDirectory.Documents
  //     //     // encoding: FilesystemEncoding.UTF8
  //     //   }).then((writeFileResult) => {
  //     //     Filesystem.getUri({
  //     //         directory: FilesystemDirectory.Documents,
  //     //         path: fileName
  //     //     }).then((getUriResult) => {
  //     //         const path = getUriResult.uri;
  //     //         this.fileOpener.open(path, 'application/pdf')
  //     //         .then(() => console.log('File is opened'))
  //     //         .catch(error => console.log('Error openening file', error));
  //     //     }, (error) => {
  //     //         console.log(error);
  //     //     });
  //     //   });
  //     // } catch (error) {
  //     //   console.error('Unable to write file', error);
  //     // }

  //     // this.diagnostic.requestExternalStorageAuthorization().then(e => {
  //     //   console.log("é permitido");
  //     //   const fileTransfer: FileTransferObject = this.transfer.create();
  //     //   console.log('criado transfer ', this.file.externalDataDirectory);
  //     //   fileTransfer.download(url, this.file.externalDataDirectory + "TestePDF.pdf").then((entry) => {
  //     //     console.log('download complete: ' + entry.toURL());

  //     //     this.fileOpener.open(entry.toURL(), 'application/pdf')
  //     //       .then(() => console.log('File is opened'))
  //     //       .catch(e => console.log('Error openening file', e));

  //     //   }, (error) => {
  //     //     console.log("ERRO WHILE DOWNLOADING", error)
  //     //   });
  //     // }).catch(e => {
  //     //   console.log("EXTERNAL STORAGE HAS NO PERMISSIon")
  //     // })
  //   }
  // }

  // downloadByUrl(url) {
  //   url = 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf';
  //   // this.http.get(url, {}, {
  //   //   responseType: 'blob',
  //   //   observe: 'events'
  //   // }).subscribe(async event => {
  //   //   console.log('subscribe');
  //   //   if(event.type === HttpEventType.Response){
  //   //     console.log('tipo filtrado');
  //   //     const name = url.substr(url.lastIndexOf('/') + 1);
  //   //     console.log(name);
  //   //     const base64 = await this.convertBlobToBase64(event.body) as string;
  //   //     console.log('convertido');

  //   //     const foo = Filesystem.writeFile({
  //   //       path: name,
  //   //       data: base64,
  //   //       directory: FilesystemDirectory.Documents
  //   //       // encoding: FilesystemEncoding.UTF8
  //   //     });

  //   //     console.log("write ", foo);
  //   //   }
  //   // })
  // }

}