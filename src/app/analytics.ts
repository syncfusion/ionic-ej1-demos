
export class Analytics {
    timeEST: any;
    timeUTC: any;
    estTimeOffset: any;
    loadTimeOffset: any;
    analyticsLogmodel: any;
    constructor(){
	let today = new Date();
	let uuid = '';
    let pageCount = 1;
	let url = window.location.href;	
	
//for creating new uuid if the client has no uuid cookies
this.loadTimeOffset = today.getTimezoneOffset() * 60000;
this.estTimeOffset = this.ESTTimeOffset();
this.timeUTC = today.getTime() + this.loadTimeOffset;
this.timeEST = (this.timeUTC + this.estTimeOffset)/1;
this.timeEST = new Date(this.timeEST);

//check uuid in browser cookie
if(this.getCookie('_uid') != '')
{
	uuid=this.getCookie('_uid');
}
else
{
	uuid = Math.floor(Math.random() * 1000) + 1 + this.timeEST.toString();
	this.createCookie('_uid',uuid);	
}

//count and stores the number of pages user is visited
if(this.getCookie('_pageCount') != '')
{
	pageCount+=parseInt(this.getCookie('_pageCount'));
	this.createCookie('_pageCount',pageCount);
}
else
{
	this.createCookie('_pageCount',pageCount);
}

//creates the key value pair to be sent for analytics api
this.analyticsLogmodel = {
	UUID : uuid,
	PageUrl : url,
	CurrentTime : today.toLocaleString(),
	PageCount : pageCount,
	Queue : '',
	CustomerIP : window["windowmyip"]
}

this.postRequest(this.analyticsLogmodel);

}
//used to change the client offset to est offset
ESTTimeOffset() {
    var today = new Date();
    var jan = new Date(today.getFullYear(), 0, 1);
    var jul = new Date(today.getFullYear(), 6, 1);
    return (Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) <= today.getTimezoneOffset() ? -4 : -5) * 3600000;
}

//used to create cookie with expiry	
createCookie(cookieName, cookieValue) {
    var d = new Date();
	var expires = '';
	if(cookieName != '_pageCount')
	{
		d.setMonth(d.getMonth() + 24);
		expires = ";expires="+d.toUTCString();
	}
    document.cookie = cookieName + "=" + cookieValue + expires +";domain=.syncfusion.com;path=/";
}

//used to check the given cookie is available or not
getCookie(cookieName) {
    var name = cookieName + "=";
    var cookies = document.cookie.split(';');
    for(var i=0; i<cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0)==' ') cookie = cookie.substring(1);
        if (cookie.indexOf(name) == 0) return cookie.substring(name.length,cookie.length);
    }
    return "";
}

//post ajax request to be sent to analytics api
postRequest(analyticsLogmodel){
    analyticsLogmodel.Queue = "EJ1 - IONIC";
$.ajax({
        type: "post",
        url: "//analytics.syncfusion.com/log/common",
        data: analyticsLogmodel,
		dataType: 'json',
		crossDomain: true
    });    
}
}
