const soundCloud = document.querySelector('.sound-cloud')
const off = document.querySelector('#off')
const on = document.querySelector('#on')
const myAudio = document.querySelector('#myAudio')

off.addEventListener('click', () => soundTrack('off'))
on.addEventListener('click', () => soundTrack('on'))

const soundTrack = (soundState) => {
  if (soundState === 'off') {
    on.style.display = 'block'
    off.style.display = 'none'
    soundCloud.style.color = '#08fdd8'
    myAudio.play()
  } else if (soundState === 'on') {
    on.style.display = 'none'
    off.style.display = 'block'
    soundCloud.style.color = '#f50057'
    myAudio.pause()
  }
}

// Play music functionality

const btnBars = document.querySelector('.bars')
const btnTimes = document.querySelector('.times')
const SideNav = document.querySelector('.aside')

btnBars.addEventListener('click', () => myFunc('open'))
btnTimes.addEventListener('click', () => myFunc('close'))

const myFunc = (navCondition) => {
  if (navCondition === 'open') {
    SideNav.classList.add('show-nav')
    btnTimes.style.display = 'block'
    btnBars.style.display = 'none'
  } else if (navCondition === 'close') {
    SideNav.classList.remove('show-nav')
    btnTimes.style.display = 'none'
    btnBars.style.display = 'block'
  }
}

// Part 1 javascript functionality ends here
$(document).ready(function () {
  if (
    !$('#myCanvas').tagcanvas(
      {
        textColour: '#08fdd8',
        outlineColour: 'transparent',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
      },
      'tags',
    )
  ) {
    // something went wrong hide the canvas container,
    $('#myCanvasContainer')
  }
})

// Contact section functionality starts here. The FInal part

const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  validateInput()
})

const validateInput = () => {
  let email = emailInput.value
  let textarea = textareaInput.value

  if (!email && !textarea) {
    setError(emailInput.parentElement)
    setError(textareaInput.parentElement)
    showMessage('Please fill in the required inputs')
  } else if (!email && textarea) {
    setError(emailInput.parentElement)
    showMessage("Oops Email can't be empty")
  } else if (!textarea && email) {
    setError(textareaInput.parentElement)
    showMessage('Please provide a message')
  } else if (email && textarea) {
    emailjs.sendForm(
      'service_rvlqach',
      'template_d32ix5s',
      contactForm,
      'lD25U1N6WN3XbKSFV',
    )
    setSuccess(emailInput.parentElement)
    setSuccess(textareaInput.parentElement)
    showMessage('Message sent successfully', 'green')
    textareaInput.value = ''
    emailInput.value = ''
    nameInput.value = ''
    subjectInput.value = ''
  }
}

const setError = (input) => {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  } else {
    input.classList.add('error')
  }
}
const setSuccess = (input) => {
  if (input.classList.contains('error')) {
    input.classList.remove('error')
  } else {
    input.classList.add('success')
  }
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add('message-content')
  divContent.style.backgroundColor = updateColor
  messageDiv.prepend(divContent)

  messageDiv.style.transform = `translate(${(0, 0)}%)`
  setTimeout(() => {
    divContent.classList.add('hide')
    divContent.addEventListener('transitionend', () => {
      divContent.remove()
    })
  }, 5000)
}

// Contact section functionality ends here. The FInal part

// hover effect
const hoverElements = document.getElementsByClassName('alpha');

        for (let i = 0; i<=hoverElements.length; i++)
        {
            hoverElements[i].addEventListener('animationend',function(e){
                hoverElements[i].classList.remove('animated');
            });

            hoverElements[i].addEventListener('mouseover',function(e){
                hoverElements[i].classList.add('animated')
            })
        }
//typewriter effect
const typedElements = document.getElementsByClassName('beta');
        const typedElements2 = document.getElementsByClassName('beta2');
        const typedElements3 = document.getElementsByClassName('beta3');
        const typedElements4 = document.getElementsByClassName('beta4');
        const typedElements5 = document.getElementsByClassName('beta5');
        const typedElements6 = document.getElementsByClassName('beta6');
        const typedElements7 = document.getElementsByClassName('beta7');
        const typedElements8 = document.getElementsByClassName('beta8');
        const typedElements9 = document.getElementsByClassName('beta9');
        for (let i = 0; i <= elements.length; i++) {
            elements[i].addEventListener('animationend', function (e) {
                elements[i].classList.remove('typedAnimated');
            });
            typedElements[i].classList.add('typedAnimated');
            typedElements2[i].classList.add('typedAnimated2');
            typedElements3[i].classList.add('typedAnimated3');
            typedElements4[i].classList.add('typedAnimated4');
            typedElements5[i].classList.add('typedAnimated5');
            typedElements6[i].classList.add('typedAnimated6');
            typedElements7[i].classList.add('typedAnimated7');
            typedElements8[i].classList.add('typedAnimated8');
            typedElements9[i].classList.add('typedAnimated9');
        }
