// var app = new Vue({
//     el: '#app', 
//     data: {
//         message: 'Hola MC' //Mensaje que queremos mostrar
//     }  
// });//Creamos una variable de tipo Vue

// var app = new Vue({
//     el: '#app', 
//     data: {
//         nombre: 'Mari Carmen',
//         apellidos: 'Osuna',
//     }  
// });
//No tocamos DOM. Todo lo que hacemos es cambiar variables. Todos los cambios se verán reflejados en la vista

// var app4 = new Vue({
//     el: '#app-4',
//     data: {
//       todos: [
//         { text: 'Learn JavaScript', titulo: "Aprende JavaScript" },
//         { text: 'Learn Vue', titulo: "Aprende Vue"},
//         { text: 'Build something awesome',titulo: "Aprende Esto es increible" }
//       ],
//       listaVisible: true
//     },
//     methods:
//     {
//         metodo: function(){
//             this.todos.push({text: "Nuevo texto", titulo: "nuevo titulo"})
//         }
//     }
//   })

  var app = new Vue({
    el: '#app',
    data: {
      lista : [
      ],
      texto : '',
      titulo : '',
      todos: [
        { text: 'Learn JavaScript', titulo: 'Aprende JavaScript' },
        { text: 'Learn Vue', titulo: 'Aprende Vue'},
        { text: 'Build something awesome',titulo: 'Aprende Esto es increible' }
      ],
      listaVisible: true
    },
    methods:
    {
        metodo: function(){
            this.todos.push({text: this.texto, titulo: this.titulo});
            this.texto='';
            this.titulo='';
        },

        eliminar: function(index){
          this.todos.splice(index, event.target);
        }
    }
  });



  //   var app = new Vue({
  //     el: '#app', 
  //     data: {
  //         nombre: 'Mari Carmen',
  //     },  
  //       methods:
  //   {
  //       metodo: function(){
  //           // alert("hola")
  //       }
  //   }
  // });