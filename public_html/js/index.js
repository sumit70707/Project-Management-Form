/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var jpdbBaseUrl='http://api.login2explore.com:5577';
var jpdbIRL='/api/irl';
var jpdbIML='/api/iml';
var proDBName="COLLEGE-DB";
var proRelationName="PROJECT-TABLE";
var connToken='90934464|-31949223598225846|90962702';

$("#proid").focus();

function saveRecNo2LS(jsonObj){
    var lvData=JSON.parse(jsonObj.data);
    localStorage.setItem("recno",lvData.rec_no);
}

function getProIdAsJsonObj(){
    var proid=$("#proid").val();
    var jsonStr={
        id:proid
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var record=JSON.parse(jsonObj.data).record;
    $("#proname").val(record.name);
    $("#assignedto").val(record.assignedto);
    $("#assigneddate").val(record.assigneddate);
    $("#deadline").val(record.deadline);
    
}

function resetForm(){
    $("#proid").val("");
    $("#proname").val("");
    $("#assignedto").val("");
    $("#assigneddate").val("");
    $("#deadline").val("");
    $("#proid").prop("disabled",false);
    $("#save").prop("disabled",true);
    $("#change").prop("disabled",true);
    $("#reset").prop("disabled",true);
    $("#proid").focus();
}



function validateData(){
    var proid,proname,assignedto,assigneddate,deadline;
    proid=$("#proid").val();
    proname=$("#proname").val();
    assignedto=$("#assignedto").val();
    assigneddate=$("#assigneddate").val();
    deadline= $("#deadline").val();
    
    
    if(proid===''){
        alert("Project ID Missing");
        $("#proid").focus();
        return "";
    }
     if(proname===""){
        alert("Project Name Missing");
        $("#proname").focus();
        return "";
    }
     if(assignedto===""){
        alert("Assigned Name Missing");
        $("#assignedto").focus();
        return "";
    }
     if(assigneddate===''){
        alert("Assigned Date Missing");
        $("#assigneddate").focus();
        return "";
    }
     if(deadline===''){
        alert("Project Deadline Missing");
        $("#deadline").focus();
        return "";
    }
    
    
    
    
    
    
    var jsonStrObj={
        id:proid,
        name:proname,
        assignedto:assignedto,
        assigneddate:assigneddate,
        deadline:deadline
        
    };
    return JSON.stringify(jsonStrObj);
}

function getPro(){
    var proIdJsonObj=getProIdAsJsonObj();
    var getRequest=createGET_BY_KEYRequest(connToken,proDBName,proRelationName,proIdJsonObj);
    jQuery.ajaxSetup({async:false});
    var resJsonObj=executeCommandAtGivenBaseUrl(getRequest,jpdbBaseUrl,jpdbIRL);
    jQuery.ajaxSetup({async:true});
    if(resJsonObj.status===400){
         $("#save").prop("disabled",false);
         $("#reset").prop("disabled",false);
         $("#proname").focus();
    
    }else if(resJsonObj.status===200){
        
        $("#proid").prop("disabled",true);
        fillData(resJsonObj);
        
        $("#change").prop("disabled",false);
        $("#reset").prop("disabled",false);
        $("#proname").focus();
   
    }
}

function saveData(){
    var jsonStrObj=validateData();
    if(jsonStrObj===''){
        return "";
    }
    var putRequest=createPUTRequest(connToken,jsonStrObj,proDBName,proRelationName);
    jQuery.ajaxSetup({async:false});
    var resJsonObj=executeCommandAtGivenBaseUrl(putRequest,jpdbBaseUrl,jpdbIML);
    jQuery.ajaxSetup({async:true});
    resetForm();
    $("#proid").focus();
}

function changeData(){
    $("#change").prop("disabled",true);
    jsonChg=validateData();
    var updateRequest=createUPDATERecordRequest(connToken,jsonChg,proDBName,proRelationName,localStorage.getItem("recno"));
    jQuery.ajaxSetup({async:false});
    var resJsonObj=executeCommandAtGivenBaseUrl(updateRequest,jpdbBaseUrl,jpdbIML);
    jQuery.ajaxSetup({async:true});
    console.log(resJsonObj);
    resetForm();
    $("#proid").focus();
}