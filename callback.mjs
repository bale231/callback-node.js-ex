import * as fs from "node:fs"

// Metodo per leggere il file come stringa di testo con codifica UTF-8
fs.readFile("file-0.txt", { encoding: "utf-8" }, function (err, data) {
    if (err) {
        console.error("Errore durante la lettura di file-1.txt:", err);
        return; // Interrompe l'esecuzione del callback in caso di errore
    }

    console.log("Contenuto di file-0.txt:");
    console.log(data);

    // Lettura di file-1.txt *dopo* aver letto file-0.txt (lettura sequenziale)
    fs.readFile("file-1.txt", { encoding: "utf-8" }, function (err, data) {
        if (err) {
            console.error("Errore durante la lettura di file-0.txt:", err);
            return;
        }

        console.log("Contenuto di file-1.txt:");
        console.log(data);
    });
});