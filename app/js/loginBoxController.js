/**
 * Created by LeonZhang on 11/21/15.
 */
$(document).ready(function(){
    $(".testerIco").click(function(){
        $("#providerLoginForm").attr('id','testerLoginForm')
        $("#providerForm").attr('id','providerForm')
        $(".modal-header-provider").attr('class','modal-header-tester')
        $("#testerLoginForm").modal();
    });

    $(".providerIco").click(function(){
        $("#testerLoginForm").attr('id','providerLoginForm')
        $("#testerForm").attr('id','providerForm')
        $(".modal-header-tester").attr('class','modal-header-provider')
        $("#providerLoginForm").modal();
    });
});