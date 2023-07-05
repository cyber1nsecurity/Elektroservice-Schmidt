// Event Listener für die Buttons
document.addEventListener('DOMContentLoaded', function() {
    // Button-Elemente auswählen
    var buttons = document.querySelectorAll('.button');

    // Event Listener für jeden Button hinzufügen
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Wert des Buttons speichern
            var selectedValue = button.dataset.value;
            localStorage.setItem('selectedValue', selectedValue);

            // Pfad zur Inhaltsdatei des Quadrats
            var contentPath = button.dataset.content;

            // Ajax-Anfrage, um den Inhalt abzurufen
            var xhr = new XMLHttpRequest();
            xhr.open('GET', contentPath, true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    // Inhalt des Quadrats aktualisieren
                    var square = document.querySelector('.square');
                    square.innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        });
    });
});
