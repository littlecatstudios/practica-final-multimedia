const dataTabFunction =(event) => {
    const buttons = document.querySelectorAll("button[data-tab]");
    const sections = document.querySelectorAll("section[data-tab]");

    buttons.forEach(button=>button.setAttribute("data-active", "false"));
    sections.forEach(sections=>sections.setAttribute("data-active", "false"));

    event.target.setAttribute("data-active", "true")

    const Atributosimilar = event.target.getAttribute("data-tab");
    const sectionToActivate = document.querySelector(`section[data-tab=${Atributosimilar}]`);

    sectionToActivate.setAttribute("data-active","true");

}
document.addEventListener("click",(event)=>{

    if(event.target.matches("button[data-tab]")){
        dataTabFunction(event)
    }
})