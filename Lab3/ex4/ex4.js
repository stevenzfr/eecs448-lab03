document.addEventListener("DOMContentLoaded", () => {
    let red_border = document.querySelector('#red_border')
    let green_border = document.querySelector('#green_border')
    let blue_border = document.querySelector('#blue_border')
    let width_border = document.querySelector('#width')
    let red_background = document.querySelector('#red_back')
    let green_background = document.querySelector('#green_back')
    let blue_background = document.querySelector('#blue_back')
    let p = document.querySelector('#p')

    document.querySelector('#change').addEventListener('click', () => {
        let width = parseInt(width_border.value)
        let red_r = parseInt(red_border.value)
        let green_r = parseInt(green_border.value)
        let blue_r = parseInt(blue_border.value)
        let red_b = parseInt(red_background.value)
        let green_b = parseInt(green_background.value)
        let blue_b = parseInt(blue_background.value)
        css_width = String(width) + 'px'
        p.style.borderWidth = css_width
        css_border_color = 'rgb(' + String(red_r) + ',' + String(green_r) + ',' + String(blue_r) + ')'
        css_background_color = 'rgb(' + String(red_b) + ',' + String(green_b) + ',' + String(blue_b) + ')'
        p.style.borderColor = css_border_color
        p.style.backgroundColor = css_background_color
        console.log(p.style.borderColor)
        console.log(p.style.backgroundColor)
        info = 'Color units are ' + css_border_color + ', ' + css_background_color
        document.querySelector('#info').innerText = info
    })
})