// Fixed elements
const elem_fixed_logo = document.querySelector("header .logo")
const elem_fixed_socials = document.querySelector("main .socials")
const elem_fixed_menu = document.querySelector("header .menu")
const elem_fixed_scroll = document.querySelector("main .scroll")

// Main elements
const elem_main_up = document.querySelector("main .iam .up")
const elem_main_title = document.querySelector("main .iam .title")
const elem_main_down = document.querySelector("main .iam .down")

// Projects elements
const elem_projects_imgs = document.querySelector(".projects .wrapper-images")
const elem_projects_title = document.querySelector(".projects .info .wrapper-title")
const elem_projects_text = document.querySelector(".projects .info .details")
const elem_projects_cta = document.querySelector(".projects .info .cta")

// Contact elements
const elem_contact_info = document.querySelector(".contact .info")
const elem_contact_about = document.querySelector(".contact .info .about")
const elem_contact_phone = document.querySelector(".contact .info .phone")
const elem_contact_email = document.querySelector(".contact .info .email")
const elem_contact_form = document.querySelector(".contact .form")

var animation_running = true
console.log (animation_running)

// Animations time
wait_time = 0.5

// Animations initial values for fixed elements
elem_fixed_logo.style.opacity = "0"
elem_fixed_socials.style.opacity = "0"
elem_fixed_menu.style.opacity = "0"
elem_fixed_scroll.style.opacity = "0"

elem_fixed_logo.style.transform = "translateX(-50px)"
elem_fixed_socials.style.transform = "translateX(-50px)"
elem_fixed_menu.style.transform = "translateX(50px)"
elem_fixed_scroll.style.transform = "translateX(50px)"

// Animations initial values for iam
elem_main_up.style.opacity = "0"
elem_main_down.style.opacity = "0"
elem_main_title.style.opacity = "0"

elem_main_up.style.transform = "translateX(-50px)"
elem_main_down.style.transform = "translateX(50px)"
elem_main_title.style.transform = "translateY(50px)"

// Animations initial values for projects
elem_projects_imgs.style.opacity = "0"
elem_projects_title.style.opacity = "0"
elem_projects_text.style.opacity = "0"
elem_projects_cta.style.opacity = "0"

elem_projects_imgs.style.transform = "translateX(-50px)"
elem_projects_title.style.transform = "translateX(50px)"
elem_projects_text.style.transform = "translateX(-50px)"
elem_projects_cta.style.transform = "translateX(50px)"

// Animations initial values for contact
elem_contact_info.style.opacity = "0"
elem_contact_about.style.opacity = "0"
elem_contact_phone.style.opacity = "0"
elem_contact_email.style.opacity = "0"
elem_contact_form.style.opacity = "0"

elem_contact_info.style.transform = "translateXY(50px)"
elem_contact_about.style.transform = "translateX(-50px)"
elem_contact_phone.style.transform = "translateX(-50px)"
elem_contact_email.style.transform = "translateX(-50px)"
elem_contact_form.style.transform = "translateY(-50px)"

// Animation fixed objects
const animm_fixed_logo = anime({
    targets: [elem_fixed_logo],
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_fixed_menu = anime({
    targets: elem_fixed_menu,
    opacity: [0, 1],
    translateX: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_fixed_socials = anime({
    targets: elem_fixed_socials,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_fixed_scroll = anime({
    targets: elem_fixed_scroll,
    opacity: [0, 1],
    translateX: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

// Animations main objects
const anim_main_title = anime({
    targets: elem_main_title,
    opacity: [0, 1],
    translateY: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_main_up = anime({
    targets: elem_main_up,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_main_down = anime({
    targets: elem_main_down,
    opacity: [0, 1],
    translateX: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

// Aimations projects objects
const anim_projects_imgs = anime({
    targets: elem_projects_imgs,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_projects_title = anime({
    targets: elem_projects_title,
    opacity: [0, 1],
    translateX: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_projects_text = anime({
    targets: elem_projects_text,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_projects_cta = anime({
    targets: elem_projects_cta,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

// Animations contacts objects
const anim_contact_info = anime({
    targets: elem_contact_info,
    opacity: [0, 1],
    translateY: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_contact_about = anime({
    targets: elem_contact_about,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_contact_phone = anime({
    targets: elem_contact_phone,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_contact_email = anime({
    targets: elem_contact_email,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_contact_form = anime({
    targets: elem_contact_form,
    opacity: [0, 1],
    translateY: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

function sleep(s) {
    // Wait time
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

function get_display (elem) {
    // Get display status of the current element
    display = document.defaultView.getComputedStyle(elem)["display"]
    return display
}

async function anim_on_load () {
    // Animate fixed elements when page loads

    await sleep(wait_time)

    if (get_display (elem_fixed_logo) != "none") {
        await sleep(wait_time/4)
        animm_fixed_logo.play ()
    }

    if (get_display (elem_fixed_menu) != "none") {
        await sleep(wait_time/4)
        anim_fixed_menu.play ()
    }

    if (get_display (elem_fixed_socials) != "none") {
        await sleep(wait_time/4)
        anim_fixed_socials.play ()
    }

    if (get_display (elem_fixed_scroll) != "none") {
        await sleep(wait_time/4)
        anim_fixed_scroll.play ()
    }
    
    // Show home fade in animations
    await sleep(wait_time)
    await fade_in_main ()

    // Update animation global state
    animation_running = false
}

async function anim_fade_out () {
    // Fade animations for hide elements when page change

    if (last_screen == 1) {
        await fade_out_main ()
    } else if (last_screen == 2) {
        await fade_out_projects ()
    } else if (last_screen == 3) {
        await fade_out_contact ()
    }
}

async function anim_fade_in () {
    // Fade animations for show elements when page change

    if (current_screen == 1) {
        await fade_in_main ()
    } else if (current_screen == 2) {
        await fade_in_projects ()
    } else if (current_screen == 3) {
        await fade_in_contact ()
    }

}

async function fade_in_main () {
    // Main section animation order for fade in

    anim_main_title.play ()

    await sleep(wait_time)
    anim_main_up.play ()
    anim_main_down.play ()

    // Wait to animation end
    await sleep(wait_time*3)

}

async function fade_out_main () {
    // Main section animation order for fade out

    console.log ("out main")

    // Invert animations
    anim_main_title.reverse()
    anim_main_up.reverse()
    anim_main_down.reverse()
    
    await sleep(wait_time/10)
    anim_main_up.play ()
    anim_main_down.play ()
    
    await sleep(wait_time)
    anim_main_title.play ()

    // Reverse animations state
    await sleep(wait_time*3)
    anim_main_title.reverse ()
    anim_main_up.reverse ()
    anim_main_down.reverse ()

}

async function fade_in_projects () {
    // Projects section animation order for fade in

    anim_projects_imgs.play()

    await sleep(wait_time)
    anim_projects_title.play()

    if (get_display (elem_projects_text) != "none") { 
        await sleep(wait_time)
        anim_projects_text.play()
    }

    await sleep(wait_time)
    anim_projects_cta.play()

    await sleep(wait_time*3)
}

async function fade_out_projects () {
    // Projects section animation order for fade out
    
    // Invert animations
    anim_projects_imgs.reverse()
    anim_projects_title.reverse()
    anim_projects_text.reverse()
    anim_projects_cta.reverse()

    await sleep(wait_time/10)
    anim_projects_imgs.play()

    await sleep(wait_time)
    anim_projects_title.play()

    if (get_display (elem_projects_text) != "none") { 
        await sleep(wait_time)
        anim_projects_text.play()
    }

    await sleep(wait_time)
    anim_projects_cta.play()

    
    // Reset animations state
    await sleep(wait_time*3)
    anim_projects_imgs.reverse()
    anim_projects_title.reverse()
    anim_projects_text.reverse()
    anim_projects_cta.reverse()
}


async function fade_in_contact () {
    // Contact section animation order for fade in

    if (get_display (elem_contact_info) != "none") { 
        
        anim_contact_info.play()
        anim_contact_form.play()

        if (get_display (elem_contact_about) != "none") { 
            await sleep(wait_time)
            anim_contact_about.play()
        }
    
        await sleep(wait_time)
        anim_contact_phone.play()
    
        await sleep(wait_time)
        anim_contact_email.play()

    } else {
        anim_contact_form.play()
    }

    await sleep(wait_time*3)

}

async function fade_out_contact () {
    // Contact section animation order for fade out

    // Invert animations
    anim_contact_info.reverse()
    anim_contact_form.reverse()
    anim_contact_about.reverse()
    anim_contact_phone.reverse()
    anim_contact_email.reverse()

    await sleep(wait_time/10)
    if (get_display (elem_contact_info) != "none") { 
        anim_contact_info.play()
    }
    anim_contact_form.play()

    anim_contact_about.play()
    anim_contact_phone.play()
    anim_contact_email.play()

    // Reset animations state
    await sleep(wait_time*3)
    anim_contact_info.reverse()
    anim_contact_form.reverse()
    anim_contact_about.reverse()
    anim_contact_phone.reverse()
    anim_contact_email.reverse()
}

anim_on_load ()