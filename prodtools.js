const generated = document.getElementsByClassName('not-generated')[0];
const generated1 = document.getElementsByClassName('not-generated')[1];
const generated2 = document.getElementsByClassName('not-generated')[2];
const unshow = document.getElementsByClassName('unshow')[0];
const unshow1 = document.getElementsByClassName('unshow')[1];
const unshow2 = document.getElementsByClassName('unshow')[2];
const warning = document.getElementsByClassName('warning')[0];
const warning1 = document.getElementsByClassName('warning')[1];
const warning2 = document.getElementsByClassName('warning')[2];
const labelArchive = document.getElementsByClassName('labelarchive')[0];


document.getElementById('generate').addEventListener('click', () => {

    const nameA = document.getElementById('name-archive').value;
    const namefileA = document.getElementById('name-file-archive').value;
    const namefileExt = document.getElementById('name-file-ext').value;

    const SCP = `scp -r ${namefileA}instaler.php espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt} && scp -r ${namefileA}${nameA} espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt}`;
    
    if (nameA == "" || namefileA == "" || namefileExt == "") {
        if (nameA == "") {
            warning.style.visibility = 'visible';
        } else{
            warning.style.visibility = 'hidden';
        }
        if (namefileA == "") {
            warning1.style.visibility = 'visible';
        } else{
            warning1.style.visibility = 'hidden';
        }
        if (namefileExt == "") {
            warning2.style.visibility = 'visible';
        } else{
            warning2.style.visibility = 'hidden';
        }
    } else{
            labelArchive.style.margin = "auto auto auto 5vw";

            warning.style.display = 'none';

            generated.style.display = 'block';
            generated1.style.display = 'block';
            generated2.style.display = 'block';
            unshow.style.display = 'none';
            unshow1.style.display = 'none';
            unshow2.style.display = 'none';

            document.getElementById('scp').value = SCP;

            const resetButton = document.getElementbyId('return');
            resetButton.style.display = 'block';

        }
    
    // console.log(`scp -r ${namefileA}instaler.php espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt} && scp -r ${namefileA}${nameA} espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt}`);
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

