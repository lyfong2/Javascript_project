function calculate(e) {
    let amount = $('#amount').val();
    let percentage = $('#percentage').val();
    let tip = amount * (percentage / 100);
    let total = Number(amount) + tip;

    $('#tip').val(tip.toFixed(2));      // 小數點0.01
    $('#total').val(total.toFixed(2));

} 
