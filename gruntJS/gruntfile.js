module.exports = function(grunt) {
  // Configuração do Grunt
  grunt.initConfig({
    // Tarefa para compilar LESS para CSS
    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/styles.css": "less/styles.less" // Arquivo de entrada -> saída
        }
      }
    },
    
    // Tarefa para comprimir JavaScript
    uglify: {
      my_target: {
        files: {
          'js/scripts.min.js': ['js/scripts.js'] // Arquivo de entrada -> saída minificada
        }
      }
    },
    
    // Tarefa para observar mudanças nos arquivos
    watch: {
      less: {
        files: ['less/**/*.less'], // Observa todos os arquivos LESS
        tasks: ['less'], // Executa a compilação quando houver mudanças
      },
      js: {
        files: ['js/scripts.js'], // Observa o arquivo JavaScript principal
        tasks: ['uglify'] // Executa a minificação quando houver mudanças
      }
    }
  });

  // Carrega os plugins necessários
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarefa padrão que será executada quando digitar apenas 'grunt' no terminal
  grunt.registerTask('default', ['less', 'uglify']);
};