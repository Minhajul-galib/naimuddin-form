var selectGender = document.querySelector('#select-gender');
var femaleDiseases = document.getElementById('female-diseases');
var maleDiseases = document.getElementById('male-diseases');
var diseasesField = document.getElementById('diseases-field');
diseasesField.style.display = 'none';

selectGender.addEventListener('change', function(e){
    
    var selectValue = e.target.value;
    
    
    if(selectValue == 'male'){
        console.log(femaleDiseases);
        diseasesField.style.display = 'block';
        femaleDiseases.style.display = "none";
        maleDiseases.style.display = 'grid';
    }
    if(selectValue == 'female'){
        diseasesField.style.display = 'block';
        maleDiseases.style.display = 'none';
        femaleDiseases.style.display = "grid";
        
    }

});