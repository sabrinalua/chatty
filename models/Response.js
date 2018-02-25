var http = function(status, data, error=0,message=''){
	this.status = status;
	if(error){this.error=error;}
	if(message!=''){this.message=message;}
	if(data){this.data = data;}

};

module.exports = http;