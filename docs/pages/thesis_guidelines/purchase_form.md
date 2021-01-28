---
title: Purchase Form
parent: Thesis Guidelines
has_children: false
nav_order: 5
---

# Purchase Form

If you need any special equipment for your thesis, you can request that the lab purchases it here.

<form action="https://formspree.io/f/mrgojlwg" method="POST">
    Name:<br><input type="text" name="sname"><br><br>
    Email:<br><input type="email" name="email"><br><br>
    Expected start date of thesis:<br><input type="date" name="start_date"> <br><br>
    Degree of thesis:<br>
    <input type="radio" id="bth" name="degree" value="bth">
        <label for="bth">Bachelor's</label><br><br>
    <input type="radio" id="mth" name="degree" value="mth">
        <label for="mth">Master's</label><br><br>
    URL(s) of product(s):<br><textarea rows="3" cols="50" name="product_url"></textarea><br><br>
    What security tests are you going to do?<br><textarea rows="5" cols="50" name="tests"></textarea><br><br>
    What is your expected result?<br><textarea rows="5" cols="50" name="exp_result"></textarea><br><br>
   <input type="submit" value="Send">
</form>
