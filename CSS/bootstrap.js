document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    if (!isDropdownButton && e.target.closest('[data-dropdown') !=null) return

    let currenDropdown
    if(isDropdownButton) {
        currenDropdown = e.target.closest('[data-dropdown')
        currenDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdwon => {
        if(dropdwon === )
    })
})