<script>
function timesUp() {

    myVar = setTimeout(alertFunc, 5000);
}
</script>

<script>
function valueChanged() {
    if (document.getElementById("is_BMW").checked == true) {
        document.getElementById("is_BMW").value = 1;
        document.getElementById("is_Mercedes").value = 0;
    } else {
        document.getElementById("is_BMW").value = 0;
        document.getElementById("is_Mercedes").value = 1;
    }
    console.log(document.getElementById("is_BMW").value);
    console.log(document.getElementById("is_Mercedes").value)
}
</script>