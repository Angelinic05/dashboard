document.addEventListener("DOMContentLoaded", function () {
    const totalStartDate = new Date('2025-03-03T00:00:00').getTime();
    const totalEndDate = new Date('2025-04-12T23:59:59').getTime();
    const lote1EndDate = new Date('2025-03-23T23:59:59').getTime();
    const lote2EndDate = new Date('2025-04-06T23:59:59').getTime();
    const lote3EndDate = new Date('2025-04-09T23:59:59').getTime();
    const lote4EndDate = totalEndDate;

    // 🔹 Imprime todas las fechas iniciales para validación
    console.log("🔍 Fechas de los lotes:");
    console.log("📆 Inicio:", new Date(totalStartDate).toLocaleString());
    console.log("📆 Fin:", new Date(totalEndDate).toLocaleString());
    console.log("📆 Lote 1 Fin:", new Date(lote1EndDate).toLocaleString());
    console.log("📆 Lote 2 Fin:", new Date(lote2EndDate).toLocaleString());
    console.log("📆 Lote 3 Fin:", new Date(lote3EndDate).toLocaleString());
    console.log("📆 Lote 4 Fin:", new Date(lote4EndDate).toLocaleString());

    function updateProgress() {
        const now = new Date().getTime();
        console.log("\n🕒 Fecha actual:", new Date(now).toLocaleString());

        const elapsedTime = now - totalStartDate;
        const totalDuration = totalEndDate - totalStartDate;

        const elapsedDays = (elapsedTime / (1000 * 60 * 60 * 24)).toFixed(2);
        const totalDays = (totalDuration / (1000 * 60 * 60 * 24)).toFixed(2);

        console.log("restantes", elapsedDays, totalDays)
        // 🔥 Calcular el porcentaje de progreso quemado en segundos
        let burnedPercentage = (elapsedTime / totalDuration) * 100;
        burnedPercentage = Math.max(0, Math.min(burnedPercentage, 100));

        // Aplicar la anchura a la barra quemada
        document.getElementById('progress-burned').style.width = burnedPercentage + '%';

        console.log("🔥 Progreso quemado:", burnedPercentage.toFixed(2) + "%");

        // 🔹 Cálculo de los porcentajes de cada lote
        const lote1Duration = (lote1EndDate - totalStartDate);
        const lote2Duration = (lote2EndDate - lote1EndDate);
        const lote3Duration = (lote3EndDate - lote2EndDate);
        const lote4Duration = (lote4EndDate - lote3EndDate);

        const totalDurationLotes = lote1Duration + lote2Duration + lote3Duration + lote4Duration;

        const lote1Percentage = (lote1Duration / totalDurationLotes) * 100;
        const lote2Percentage = (lote2Duration / totalDurationLotes) * 100;
        const lote3Percentage = (lote3Duration / totalDurationLotes) * 100;
        const lote4Percentage = (lote4Duration / totalDurationLotes) * 100;

        document.getElementById('lote1-segment').style.width = lote1Percentage + '%';
        document.getElementById('lote2-segment').style.width = lote2Percentage + '%';
        document.getElementById('lote3-segment').style.width = lote3Percentage + '%';
        document.getElementById('lote4-segment').style.width = lote4Percentage + '%';

        console.log("📊 Distribución de los lotes:");
        console.log("Lote 1:", lote1Percentage.toFixed(2) + "%");
        console.log("Lote 2:", lote2Percentage.toFixed(2) + "%");
        console.log("Lote 3:", lote3Percentage.toFixed(2) + "%");
        console.log("Lote 4:", lote4Percentage.toFixed(2) + "%");

        // 🔍 Determinar en qué lote estamos ahora
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

        console.log("🔄 Lote actual en curso:", loteName);
    }

    setInterval(updateProgress, 1000); // ⏳ Actualiza cada segundo
});
