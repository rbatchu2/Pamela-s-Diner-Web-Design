function showDescription(descript)
{
    $("#description").html("Description: "+ descript)
}
function hideDescription()
{
   ""
}
function validate()
{
    var txtDob = $("#txtDate").val();
    var dob = new Date(txtDob);
    let phone = $("#zip").val();
    if(dob >= new Date())
    {
        alert("Date of birth not valid. Date has to be before today.")
        return false;
    }
    if(phone.length != 5 && phone.length != 0)
    {
        alert("Zip code is not valid")
        return false;
    }
    if(isNAN(phone))
    {
        alert("Phone number is not valid.")
        return false;
    }
    return true;
}

