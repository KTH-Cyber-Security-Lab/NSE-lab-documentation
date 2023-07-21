function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        text1 = "<a href=\"https://www.kth.se/cs/nse/research/software-systems-architecture-and-security/projects/ethical-hacking-1.914053\">"
        text2 = "+ CVEs</a>"
        obj.innerHTML = text1 + Math.floor(progress * (end - start) + start) + text2;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
  }

window.onload = (event) => {
    const obj = document.getElementById("counterCVE");
    animateValue(obj, 0, 45, 1000);
};