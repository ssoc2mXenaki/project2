
//   [Author] Xenaki Maria

//   [Συναρτήσεις με την javascript]

//   [Description] 
   
//     Σε αυτό το πρόγραμμα κάνουμε χρήση συναρτήσεων με τη javascript με σκοπό τον υπολογισμό της Διακρίνουσας 
//     κα την εύρεση του Χ μιας δευτεροβάθμιας εξίσωσης.


function calc_D(){ //ορίζουμε την αξία των α,β,γ ως δεκαδικούς και κάνουμε τους υπολογισμούς των πράξεων για την κάθε υποπερίπτωση
    
    let a = parseFloat(document.getElementById("value1").value);
    let b = parseFloat(document.getElementById("value2").value);
    let c = parseFloat(document.getElementById("value3").value);
    let d = b*b - 4*a*c;
    let sqd = Math.sqrt(d);
    let x1 = (-b + sqd)/2*a;
    let x2 = (-b - sqd)/2*a;
    let x = (-b)/2*a;

    if (d < 0) {//απαλείφουμε τα αποτελέσματα των γραμμών 2,3 σε περίπτωση που δεν κάνει ο χρήστης Καθαρισμό Πεδίων και δώσει νέο ερώτημα
        document.getElementById("grammi2").innerHTML = " ";
        document.getElementById("grammi3").innerHTML = " ";
        document.getElementById("grammi1").innerHTML = "Η Διακρίνουσα είναι μικρότερη του 0. Η εξίσωση δεν έχει λύση";
    }

   
    else if (d > 0) {
        document.getElementById("grammi1").innerHTML = "Η Διακρίνουσα ισούται με " + d;
        document.getElementById("grammi2").innerHTML = "To x1 ισούται με " + x1;
        document.getElementById("grammi3").innerHTML = "To x2 ισούται με " + x2;
    }

    else if (d == 0) {//απαλείφουμε τα αποτελέσματα της 3ης γραμμής, σε περίπτωση που ο χρήστης δώσει νέο ερώτημα χωρίς να προηγηθεί Καθαρισμός Πεδίων
        document.getElementById("grammi3").innerHTML = " ";
        document.getElementById("grammi1").innerHTML = "Η Διακρίνουσα ισούται με " + d;
        document.getElementById("grammi2").innerHTML = "To x ισούται με " + x;
    }

    else {//εάν ο χρήστης δεν έχει κάνει εισαγωγή αριθμών, εμφανίζεται μήνυμα σφάλματος. Ταυτόχρονα απαλείφουμε τυχόν προηγούμενα αποτελέσματα στις γραμμές 2,3 εάν ο χρήστης δεν κάνει Καθαρισμό Πεδίων
        document.getElementById("grammi2").innerHTML = " ";
        document.getElementById("grammi3").innerHTML = " ";
        document.getElementById("grammi1").innerHTML = "Ελέγξτε τα στοιχεία που εισάγατε.";
    }
}

function clearResults(){ //συνάρτηση καθαρισμού πίνακα αποτελεσμάτων
    document.getElementById("grammi1").innerHTML = " ";
    document.getElementById("grammi2").innerHTML = " ";
    document.getElementById("grammi3").innerHTML = " ";
}