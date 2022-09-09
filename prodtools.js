document.getElementById('generate').addEventListener('click', () => {
    const nameA = document.getElementById('name-archive').value;
    const namefileA = document.getElementById('name-file-archive').value;
    const namefileExt = document.getElementById('name-file-ext').value;
    const generated = document.getElementsByClassName('not-generated');
    let i = 0;

    // console.log(`scp -r ${namefileA}instaler.php espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt} && scp -r ${namefileA}${nameA} espripk-preprod@ssh.cluster030.hosting.ovh.net:${namefileExt}`);

    // if(getComputedStyle(generated).display != "none"){
    //     generated.style.display = "none";
    //   } else {
    //     generated.style.display = "block";
    //   }
    generated.classList.toggle('not-generated--show');

});


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