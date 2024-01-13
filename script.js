const popUpMenu = document.getElementById("side-menu");
const fourthChild = document.querySelector('#main-nav > :nth-child(4)');
const displayPopUpMenu = () => {
    popUpMenu.style.display = 'flex';
}
const removePopupMenu = () => {
    popUpMenu.style.display = 'none';
}
popUpMenu.addEventListener('mouseover', displayPopUpMenu);
popUpMenu.addEventListener('mouseout', removePopupMenu);
fourthChild.addEventListener('mouseover', displayPopUpMenu);
fourthChild.addEventListener('mouseout', removePopupMenu);

document.addEventListener("DOMContentLoaded",  () => {
    const skills = document.getElementById("skills");

    function isBottomVisible(element) {
        const myElement = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        return myElement.bottom <= viewportHeight;
    }

    function handleScroll() {
        if (isBottomVisible(skills)) {
            console.log("listening")
            const skillsList = skills.querySelectorAll('.skill');
            skillsList.forEach(skill => {
                const bar = skill.querySelector('.bar');
                bar.style.transition = "all 0.6s linear";
                bar.style.left = "0";
            });
            window.removeEventListener('scroll', handleScroll);
        }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
const content = document.querySelectorAll('.e-time div');
const newYear = new Date(2025, 0, 1, 0, 0, 0);
const now = new Date();
let secondDiff = -1*Math.floor((now.getTime()-newYear.getTime())/1000%60);
let minuteDiff = -1*Math.floor((now.getTime()-newYear.getTime())/(1000*60)%60);
let hourDiff = -1*Math.floor((now.getTime()-newYear.getTime())/(1000*60*60)%24);
let dayDiff = -1*Math.floor((now.getTime()-newYear.getTime())/(1000*60*60*24));
content[2].querySelector('span:nth-child(1)').innerHTML = minuteDiff;
content[1].querySelector('span:nth-child(1)').innerHTML = hourDiff;
content[0].querySelector('span:nth-child(1)').innerHTML = dayDiff;
content[3].querySelector('span:nth-child(1)').innerHTML = secondDiff;
const countDown = () => {
    const now = new Date();
    secondDiff = -1*Math.floor((now.getTime()-newYear.getTime())/1000%60);
    minuteDiff = -1*Math.floor((now.getTime()-newYear.getTime())/(1000*60)%60);
    hourDiff = -1*Math.floor((now.getTime()-newYear.getTime())/(1000*60*60)%24);
    dayDiff = -1*Math.floor((now.getTime()-newYear.getTime())/(1000*60*60*24));
    if(secondDiff-1===59) {
    content[2].querySelector('span:nth-child(1)').innerHTML = minuteDiff;
    }
    if(minuteDiff-1===59) {
    content[1].querySelector('span:nth-child(1)').innerHTML = hourDiff;
    }
    if(hourDiff-1===23) {
    content[0].querySelector('span:nth-child(1)').innerHTML = dayDiff;
    }
    content[3].querySelector('span:nth-child(1)').innerHTML = secondDiff;
    if(now===newYear) {
        clearInterval(countDownDisplayer);
    }
}
const countDownDisplayer = setInterval(countDown, 1000);