<template>
<div>
  <div class="container">
      <div class="btn-group open"><a class="btn btn-primary" href="#"><i class="fa fa-cog fa-fw"></i></a><a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"></a>
          <ul class="dropdown-menu">
              <li><a href="#" data-toggle="modal" data-target="#importModal"><i class="fa fa-pencil fa-fw"></i>Importar kmz</a></li>
          </ul>
      </div>
  </div>
  <div class="modal fade" id="importModal" tabindex="-1" role="dialog" aria-labelledby="importador de archivo" aria-hidden="true">
  <div role="form">
        <form enctype="multipart/form-data" id="importModalForm">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Importador</h5><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                  <div class="modal-body">
                    <div><label for="file">Archivo:</label><br/><input id="file" type="file" @change="onFileChange" name="file" accept=".kmz, .kml" /></div>
                  </div>
              <div class="modal-footer"><button class="btn btn-secondary" type="button" data-dismiss="modal">Cerrar</button><button class="btn btn-primary" type="button" @click="onUpload">Importar</button></div>
              </div>
            </div>
        </form>
    </div>
  </div>
</div>
</template>

<script>
    var FormData = require('form-data');

    module.exports= {
        name:"ImportBtn",
        data (){
            return {
                title:"ACME's Staff List",
                file: null,
            }
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files;
                if (!files.length) {
                  return;
                }
                var ext = files[0].name.split('.').pop();
                if(ext === 'kmz' || ext === 'kml') {
                    this.createFile(files[0]);
                    console.log(e);
                }
                else {
                    this.file = '';
                    this.clearFileInput(document.getElementById('file'));
                }
            },
            createFile(file) {
                this.file = file;
            },
            clearFileInput(ctrl) {
                try {
                    ctrl.value = null;
                } catch(ex) { }
                if (ctrl.value) {
                    ctrl.parentNode.replaceChild(ctrl.cloneNode(true), ctrl);
                }
            },
            onUpload(e) {
                e.preventDefault();
                var self = this;

                var formData = new FormData();//this.gatherFormData();
                //console.log(fromData);
                formData.append('file', this.file, this.file.name);

                for (var value of formData.values()) {
                    console.log(value); 
                }
                //var options = { content: this.file };
                this.$http.post('./upload', formData).then(res => {
                    //todo ok
                    console.log(res);
                    this.hideModal();
                },
                error => {
                    //todo mal :P
                    console.log("error");
                })
            },
            hideModal () {
                //document.getElementById("importModal").modal("hide");
                //document.getElementById("importModal").classList.remove('show');
                //document.getElementById('importModal').hide();
            }
        }
    }

</script>