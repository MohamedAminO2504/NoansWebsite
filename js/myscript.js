function redirect()
{
    var name = document.getElementById("name").value;
    var subject = "Demande de contact de "+name;
    var corpsMail = document.getElementById("message").value.replace("\n","%0D%0A");
    var mail =      "noanslab@gmail.com <noanslab@gmail.com>";
    window.location.href = "mailto:"+mail+"?subject="+subject+"&body="+corpsMail+"%0D%0A%0D%0Amail: "+mail+"%0D%0A%0D%0A";

}