const reviews = [
    {
        id: 1,
        name: 'Zach Hall',
        job: 'designer',
        image: '/images/1.jpg',
        description: 'Hello, my name is Matt Lemanski. I am the creator of Speaking of English, a blog for intermediate English learners who want to become more fluent in the language. I am originally from the United States and I currently live in Germany.',
    },
    {
        id: 2,
        name: 'Ned Montgomery',
        job: 'designer',
        image: '/images/2.png',
        description: 'Hello, my name is Matt Lemanski. I am the creator of Speaking of English, a blog for intermediate English learners who want to become more fluent in the language. I am originally from the United States and I currently live in Germany.',
    },
    {
        id: 3,
        name: 'Marlon Wood',
        job: 'seller',
        image: '/images/3.jpg',
        description: 'Hello, my name is Matt Lemanski. I am the creator of Speaking of English, a blog for intermediate English learners who want to become more fluent in the language. I am originally from the United States and I currently live in Germany.',
    },
    {
        id: 4,
        name: 'Madeline Greenwood',
        job: 'manager',
        image: '/images/4.jpg',
        description: 'Hello, my name is Matt Lemanski. I am the creator of Speaking of English, a blog for intermediate English learners who want to become more fluent in the language. I am originally from the United States and I currently live in Germany.',
    },
    {
        id: 5,
        name: 'Polly Jennings',
        job: 'product manager',
        image: '/images/5.jpg',
        description: 'Hello, my name is Matt Lemanski. I am the creator of Speaking of English, a blog for intermediate English learners who want to become more fluent in the language. I am originally from the United States and I currently live in Germany.',
    },
    {
        id: 6,
        name: 'andrew mead',
        job: 'developer',
        image: '/images/6.jpg',
        description: 'Hello, my name is Matt Lemanski. I am the creator of Speaking of English, a blog for intermediate English learners who want to become more fluent in the language. I am originally from the United States and I currently live in Germany.',
    }
];

const img = document.getElementById('person-image')
const name = document.getElementById('name')
const job = document.getElementById('job')
const info = document.getElementById('info')




let currentItem = 0

const showPerson = (person) => {
    const item = reviews[person]
    img.src = item.image
    name.textContent = item.name
    job.textContent = item.job
    info.textContent = item.description
}

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
    showNextPerson()
    showPrevPerson()
})

const showNextPerson = () => {
    const nextBtn = document.querySelector('.next-btn')
    nextBtn.addEventListener('click', () => {
        currentItem++
        if(currentItem > reviews.length - 1) {
            currentItem = 0
        }
        showPerson(currentItem)
    })
}

const showPrevPerson = () => {
    const prevBtn = document.querySelector('.prev-btn')
    prevBtn.addEventListener('click', () => {
        currentItem--
        if(currentItem < 0) {
            currentItem = reviews.length - 1
        }
        showPerson(currentItem)
    })
}

