function dog()
{
    this.name="Jimmy";
    this.color="black";
    this.breed="German Shepherd"
    this.age=10;
    this.getName=function()
    {
        console.log("Name  of the dog is "+this.name);
    }
}
/*
//Creating Object for the function
var d=new dog();
d.getName();*/

//Creating and Exporting the object so that all JS files in this folder can access the properties of the object
module.exports = new dog();

