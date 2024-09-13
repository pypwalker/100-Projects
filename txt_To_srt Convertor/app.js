const btn = document.querySelector('button');

let upload = document.getElementById('upload')

btn.addEventListener('click', () => {

    let fr = new FileReader();
    
    fr.readAsText(upload.files[0]);
   
    fr.onload = function() {


        let content = fr.result;
        const lines = content.split('\n'); 

        const name = (upload.files[0].name).split('.')[0];
        console.log(name)

        let times =[];
        let texts = [];

        let srtLines = [];
        let index = 1;


        // separate time and text-------then format and push to arrays
        for (let i = 0; i < lines.length; i += 2) {
            let originTime = lines[i].trim();

            let  [minutes, seconds] = originTime.split(':');

            let formatedTime = `00:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')},000`;
             
            times.push(formatedTime)
            texts.push(lines[i+1].trim());
        }

        // Now times and texts are object arrays
        for (let a = 0; a < times.length; a++) {
            srtLines.push(`${index}`)
            srtLines.push(`${times[a]} --> ${times[a + 1]}`)
            srtLines.push(`${texts[a]}`)
            srtLines.push(" ");

            index++
        }

        const srtContent = srtLines.join('\n');

        const fileName = `${name}.srt`;

    // Function to overwrite the file
        function overwriteFile(fileName, content) {
            const blob = new Blob([content], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
        }

    overwriteFile(fileName, srtContent);
   
    }


});