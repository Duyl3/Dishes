var eatTime = 0;
var dishTime = 0;

var updateTime = () => {

    var timer = document.getElementById('timer');

    var curTime = new Date();

    var hours = curTime.getHours();
    var minutes = curTime.getMinutes();
    var seconds = curTime.getSeconds();

    if (hours < 10) {
        minutes = "0" + minutes;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timer.innerText = hours + ":" + minutes + ":" + seconds;

    const diShes = [["https://zira.uz/wp-content/uploads/2019/02/brusketta2-e1549960469202.jpg", "https://ss.sport-express.ru/userfiles/materials/185/1856886/volga.jpg"], ["https://the-challenger.ru/wp-content/uploads/2019/07/Coconut-Curry-Ramen-14_53eecce9451b9929f95b59cd38d60561-800x533.jpg","https://img.iamcook.ru/old/upl/recipes/cat/u6009-90752cd1a6136d829616b4a7408184e2.jpg"], ["https://kulinar-63.ru/images/grilled-chicken-breast-fresh-vegetable-salad-tomatoes-cucumbers-lettuce-leaves-chicken-salad-healthy-food.jpg","https://img.delo-vcusa.ru/2020/07/pesochnyj-pirog-s-malinoj-v-smetannoj-zalivke.jpg"], ["https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036","https://cdn.lifehacker.ru/wp-content/uploads/2020/06/Depositphotos_279044362_xl-2015-1_1591038425.jpg"], ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsgRVVVrwtnPciDSa_8ijaEjouVF0s2T1YQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsgRVVVrwtnPciDSa_8ijaEjouVF0s2T1YQ&usqp=CAU"]];

    var images = document.getElementById('images');
    images.src = diShes[eatTime][dishTime];
 
    var time = document.getElementById("time");

    var findEat = () => {
        eatTime = Number(time.value);
    };

    time.addEventListener("change", findEat);

    var foodType = document.getElementById("foodType");

    var findSel = () => {
        dishTime = Number(foodType.value);
    };

    foodType.addEventListener("change", findSel);

// var clickMe = document.getElementById("clickMe");

// var clickButton = () => {


// }

// clickMe.addEventListener("click", clickButton);

}
var oneSec = 1000;
setInterval(updateTime, oneSec);