$(document).ready(function(){

    var doc = new jsPDF();

    doc.fromHTML($('body').get(0), 15, 15, {
	'width': 170
    });

    doc.output('save', 'filename.pdf');


});
