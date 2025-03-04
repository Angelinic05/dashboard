const totalStartDate = new Date('2025-03-03').getTime();
const totalEndDate = new Date('2025-04-12T23:59:59').getTime(); 
const lote1EndDate = new Date('2025-03-23').getTime();
const lote2EndDate = new Date('2025-04-06').getTime();
const lote3EndDate = new Date('2025-04-09').getTime();
const lote4EndDate = totalEndDate;

function updateProgress() {
    const now = new Date().getTime();

    const lote1Duration = lote1EndDate - totalStartDate;
    const lote2Duration = lote2EndDate - lote1EndDate;
    const lote3Duration = lote3EndDate - lote2EndDate;
    const lote4Duration = lote4EndDate - lote3EndDate;

    const totalDuration = lote1Duration + lote2Duration + lote3Duration + lote4Duration;

    const lote1Percentage = (lote1Duration / totalDuration) * 100;
    const lote2Percentage = (lote2Duration / totalDuration) * 100;
    const lote3Percentage = (lote3Duration / totalDuration) * 100;
    const lote4Percentage = (lote4Duration / totalDuration) * 100;

    document.getElementById('lote1-segment').style.width = lote1Percentage + '%';
    document.getElementById('lote2-segment').style.width = lote2Percentage + '%';
    document.getElementById('lote3-segment').style.width = lote3Percentage + '%';
    document.getElementById('lote4-segment').style.width = lote4Percentage + '%';

    if (now > lote1EndDate) {
        document.getElementById('lote1-segment').classList.add('inactive');
    }
    if (now > lote2EndDate) {
        document.getElementById('lote2-segment').classList.add('inactive');
    }
    if (now > lote3EndDate) {
        document.getElementById('lote3-segment').classList.add('inactive');
    }
    if (now > lote4EndDate) {
        document.getElementById('lote4-segment').classList.add('inactive');
    }

    let currentLoteEnd, loteName;
    if (now <= lote1EndDate) {
        currentLoteEnd = lote1EndDate;
        loteName = 'Lote 1';
    } else if (now <= lote2EndDate) {
        currentLoteEnd = lote2EndDate;
        loteName = 'Lote 2';
    } else if (now <= lote3EndDate) {
        currentLoteEnd = lote3EndDate;
        loteName = 'Lote 3';
    } else {
        currentLoteEnd = lote4EndDate;
        loteName = 'Lote 4';
    }


}

setInterval(updateProgress, 1000);