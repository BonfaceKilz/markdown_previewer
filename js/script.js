var vm = new Vue({
    el: '#app',
    data: {
	rawMarkdown: '',
	renderedMarkdown: ''
    },
    methods: {
	renderPreview: function(){
	    this.$http({
		url: 'https://api.github.com/markdown',
		method: 'POST',
		data: {text: this.rawMarkdown, mode: 'gfm'}
	    }).then(function(response){
		this.renderedMarkdown = response.data;
	    }, function(response){
		console.log(response.data);
	    });
	}
    }
});
