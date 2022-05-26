var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" ,  "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg","https://image.shutterstock.com/image-vector/cartoon-grandmother-glasses-old-lady-260nw-1470863963.jpg","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520girl%2F&psig=AOvVaw0Ck8K6lsuLfJ58mwUImkxp&ust=1653641925634000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMiCldLm_PcCFQAAAAAdAAAAABAD"];
var names = ["Family Book","Grandpa", "Dad",  "Sister", "Mom","grandma","me"];
var i = 0;
function update(){
  i++;
  var numbers_of_family_member_in_array = 6;
  if(i > numbers_of_family_member_in_array ){ 
    i = 0; } 
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName; }


