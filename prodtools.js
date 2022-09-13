const generated = document.getElementsByClassName('not-generated')[0];
const generated1 = document.getElementsByClassName('not-generated')[1];
const generated2 = document.getElementsByClassName('not-generated')[2];
const unshow = document.getElementsByClassName('unshow')[0];
const unshow1 = document.getElementsByClassName('unshow')[1];
const unshow2 = document.getElementsByClassName('unshow')[2];


document.getElementById('generate').addEventListener('click', () => {

    const nameA = document.getElementById('name-archive').value;
    const namefileA = document.getElementById('name-file-archive').value;
    const namefileExt = document.getElementById('name-file-ext').value;

    console.log(`scp -r ${namefileA}instaler.php espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt} && scp -r ${namefileA}${nameA} espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt}`);

    const SCP = `scp -r ${namefileA}instaler.php espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt} && scp -r ${namefileA}${nameA} espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt}`

    generated.style.display = 'block';
    generated1.style.display = 'block';
    generated2.style.display = 'block';
    unshow.style.display = 'none';
    unshow1.style.display = 'none';
    unshow2.style.display = 'none';

    document.getElementById('scp').value = SCP

    const resetButton = document.getElementbyId('return');
    resetButton.style.display = 'block';

});

const resetButton = document.getElementbyId('return');
resetButton.onclick= reloadPage;

function reloadPage(){
    window.location.reload();
}

function copyToClipBoardArchive() {

    const content = document.getElementById('name-archive').value;
    
    navigator.clipboard.writeText(content)

}
function copyToClipBoardSCP() {

    const content = document.getElementById('scp').value;
    
    navigator.clipboard.writeText(content)

}



//EXEMPLE scp -r /c/Users/Acs/Downloads/installer.php espripk-preprod@ssh.cluster030.hosting.ovh.net:~/experience-industrie-stage && scp -r /c/Users/Acs/Downloads/20220908_experienceindustrie_preprod_161b3a08128444541812_20220908120447_archive.zip espripk-preprod@ssh.cluster030.hosting.ovh.net:~/experience-industrie-stage