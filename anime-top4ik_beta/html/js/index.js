let allComponents = {
    website: JSON.parse(atob('eyJ2ZXIiOiAiMC4xX2FscGhhIn0=')),
    bootstrap: JSON.parse(atob('eyJ2ZXIiOiAiNS4wLjIifQ==')),
    angularjs: JSON.parse(atob('eyJ2ZXIiOiAiMS44LjIifQ=='))
}

 if (navigator.userAgent.includes('Android') || ('iOS')) {
     $('.card').css('width', '90%');
     $('.card').css('margin-left', '1.2em')
}

// alert(navigator.userAgent);
console.log(`template started, version: ${allComponents.website.ver}.\nUse getComponentVer() for showing components versions.`);

