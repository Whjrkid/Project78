var img=["https://lh3.googleusercontent.com/proxy/JeSsG2kn2pM0Kv7BuUl2lW572rv9Gf8Ogw_lxRS7m-uf0Sr5cGrcvVzp4o6g50kZu8TMs_71BNpHaVIJGVWVT-EZmOvxTf-PoU5Qs8c-Sw",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIPe0QB0hfNuPF75Zra10dboaSWTucfPJqQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfL7LFH7Xjmc3H-2KQQPhKXlqCw5KLpgYPhg&usqp=CAU",
"https://media.istockphoto.com/vectors/young-indian-business-woman-wearing-traditional-indian-costume-vector-id918643660?k=6&m=918643660&s=612x612&w=0&h=mxV4OhFvVWOPFs_K9S88Cn4qSY4Vyo4lvDQheeWlA-E=",
"https://cdn2.vectorstock.com/i/1000x1000/03/36/indian-woman-vector-34200336.jpg"];
var names=["Anirudh","Ram","Vamsi","Srujana","Rajeshwari"];
var i=0;
function Update(){
    i++;
    var NumberOfFamilyInArray = 4;
    if(i > NumberOfFamilyInArray)
    {
        i = 0;
    }
    var updatedimg= img[i];
    var updatedname= names[i];
    document.getElementById("FamilyMemberImage").src= updatedimg;
    document.getElementById("FamilyMemberName").innerHTML= updatedname;
}