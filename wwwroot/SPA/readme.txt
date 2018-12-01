(1)assign ajax-target="selector" if you want to partially update the content..
example:<a href="/" ajax-target="selector"></a>		<button href="/" ajax-target="selector"></button>		
	<input href="/" ajax-target="selector"/>   
<form action="/" ajax-target="selector"></form>

(2)assign eval="functionName(parameters....)" if you want to play more with the ajax callBack response(data),status,xmlHttpRequest(request)
example:
	functionName($this,$ajaxTarget,data,request){
		console.log($this); //here, $this is the object seletor which is responsible for click event
		console.log($ajaxTarget); //here, $ajaxTarget is the object seletor from ajax-target's value[example: if ajax-target=".abc" then $ajaxTarget=$('.abc')]
		console.log(data); //here, data is the ajax response..data can be anything like json,string,html,decimal,integer..anything
		console.log(request); //here, request is the xmlHttpRequest of ajax response[to access statusCode write request.status]
	}

(3)assign onClick="functionName(event)" if you want to do something before using this framework's ajax method
example:  <a href="/" onClick="functionName(event)"></a>	<form action="/" onSubmit="functionName(event)"></form>
<script>
	function functionName(event){
		if(confirm('do you really want to delete this?')==false){
			event.stopPropagation();	//it will prevent the further event bidings
			event.preventDefault();		//and it will prevent using this framework's ajax method
		}
	}
</script>

(4)remove data-toggle="modal" while using both modal and this framework side by side..keep the data-target="selector" all time
example: <a href="/" ajax-target="#globalModalContent" data-target="#globalModal"></a>  //here, data-toggle="modal"(attribute) already removed from anchor tag

(5)assign class="stopAjax" if you don't want to use this framework.
example:  <a href="/" class="stopAjax"></a>   <form action="/" class="stopAjax"></form>
