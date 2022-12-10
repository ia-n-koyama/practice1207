function calcBmi() {
    //BMIを計算します
    //痩せるぞ！
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var bmi = weight / Math.pow(height / 100, 2)
    document.getElementById("bmi").value = bmi
}