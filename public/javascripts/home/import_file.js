import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.component('import-btn', {
  template: `
  	<div class="container">
    	<div class="btn-group open"><a class="btn btn-primary" href="#"><i class="fa fa-cog fa-fw"></i></a><a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"></a>
        	<ul class="dropdown-menu">
            	<li><a href="#" data-toggle="modal" data-target="#importModal"><i class="fa fa-pencil fa-fw"></i>Importar kmz</a></li>
        	</ul>
    	</div>
	</div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    file: null
  },
  methods: {
  	onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
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
  	onUpload() {
  		const file = event.target.files[0];
        const formData = new FormData($("#importModal")[0]);
        //const formData = new FormData();
        //formData.append("file", file);
        Vue.http.post(`./upload`, formData)
            .then(res => {
                    //todo ok
            },
            error => {
                    //todo mal :P
            })
  	}
  }
});