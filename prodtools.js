const generated = document.getElementsByClassName('not-generated')[0];
const generated1 = document.getElementsByClassName('not-generated')[1];
const generated2 = document.getElementsByClassName('not-generated')[2];
const unshow = document.getElementsByClassName('unshow')[0];
const unshow1 = document.getElementsByClassName('unshow')[1];
const unshow2 = document.getElementsByClassName('unshow')[2];
// let i = 0;


document.getElementById('generate').addEventListener('click', () => {

    const nameA = document.getElementById('name-archive').value;
    const namefileA = document.getElementById('name-file-archive').value;
    const namefileExt = document.getElementById('name-file-ext').value;
    const inputScp = document.getElementById("scp");

    console.log(`scp -r ${namefileA}instaler.php espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt} && scp -r ${namefileA}${nameA} espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt}`);

    const SCP = `scp -r ${namefileA}instaler.php espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt} && scp -r ${namefileA}${nameA} espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt}`

    generated.style.display = 'block';
    generated1.style.display = 'block';
    generated2.style.display = 'block';
    unshow.style.display = 'none';
    unshow1.style.display = 'none';
    unshow2.style.display = 'none';

    // document.inputScp.value = SCP;
    // alert(inputScp);

    // if (i >= 2) {
    //     navbarlanding.classList.toggle('not-generated--unshow');
    // }

});

const resetButton = document.getElementbyId('return');
resetButton.onclick= reloadPage;

function reloadPage(){
    window.location.reload();
}


// TEST

// document.getElementById('test').addEventListener("click", () => {
//     const generated = document.getElementById('generated');
//     const test = getComputedStyle(generated).display
//     console.log(test);
    // if(getComputedStyle(generated).display != "none"){
    //   generated.style.display = "none";
    // } else {
    //   generated.style.display = "block";
    // }
//   })



//EXEMPLE scp -r /c/Users/Acs/Downloads/installer.php espripk-preprod@ssh.cluster030.hosting.ovh.net:~/experience-industrie-stage && scp -r /c/Users/Acs/Downloads/20220908_experienceindustrie_preprod_161b3a08128444541812_20220908120447_archive.zip espripk-preprod@ssh.cluster030.hosting.ovh.net:~/experience-industrie-stage