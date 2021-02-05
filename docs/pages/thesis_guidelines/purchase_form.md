---
title: Purchase Form
parent: Thesis Guidelines
has_children: false
nav_order: 5
---

<style type='text/css'>
#submit_button {
    background-color: #201f23;
    color: #2b79e3;
    border-style: none;
    padding: 0.5% 5%;
}
#submit_button:hover {
    background-color: #17171c;
}


</style>

# Purchase Form

If you need any special equipment for your thesis, you can request that the lab purchases it here.

<form action="https://formspree.io/f/mrgojlwg" method="POST">
    Name:<br><input type="text" name="student_name"><br><br>
    Email:<br><input type="email" name="email"><br><br>
    Expected start date of thesis:<br><input type="date" name="start_date"> <br><br>
    Degree of thesis:<br>
    <input type="radio" id="bth" name="degree" value="bth">
        <label for="bth">Bachelor's</label><br>
    <input type="radio" id="mth" name="degree" value="mth">
        <label for="mth">Master's</label><br><br>
    URL to the product, preferably via <a href="https://www.prisjakt.nu/">prisjakt</a> or <a href="https://www.pricerunner.se/">pricerunner</a> 
    <br><textarea rows="3" cols="50" name="product_url"></textarea><br><br>
    Who is the supervisor of the project?<br><textarea rows="3" cols="50" name="supervisor"></textarea><br><br>
    What is the expected cost of the device?<br><textarea rows="3" cols="50" name="expected_cost"></textarea><br><br>
    Has your supervisor approved of the purchase?<br>
    <input type="radio" id="yes" name="super_approved" value="yes">
        <label for="yes">Yes</label><br>
    <input type="radio" id="no" name="super_approved" value="no">
        <label for="no">No</label><br><br>
   <input type="submit" value="Send" id="submit_button">
</form>
