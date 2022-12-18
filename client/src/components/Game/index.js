import { Howl } from 'howler'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const scoreEl = document.querySelector('#scoreEl')
const startGameBtn = document.querySelector('#startGameBtn')
const modalEl = document.querySelector('#modalEl')
const bigScoreEl = document.querySelector('#bigScoreEl')
const soundOffEl = document.querySelector('#soundOffEl')
const soundOnEl = document.querySelector('#soundOnEl')

const startGameAudio = new Audio('./audio/startGame.mp3')
const endGameAudio = new Audio('./audio/endGame.mp3')
const shootAudio = new Howl({ src: ['./audio/shoot.mp3'] })
const enemyHitAudio = new Howl({ src: ['./audio/enemyHit.mp3'] })
const enemyEliminatedAudio = new Howl({ src: ['./audio/enemyEliminated.mp3'] })
const obtainPowerUpAudio = new Howl({ src: ['./audio/obtainPowerUp.mp3'] })
const backgroundMusicAudio = new Audio('./audio/backgroundMusic.mp3')
backgroundMusicAudio.loop = true

const scene = {
  active: false
}

class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = {
      x: 0,
      y: 0
    }
    this.friction = 0.99
    this.powerUp = ''
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

  update() {
    this.draw()
    this.velocity.x *= this.friction
    this.velocity.y *= this.friction

    if (
      this.x - this.radius + this.velocity.x > 0 &&
      this.x + this.radius + this.velocity.x < canvas.width
    ) {
      this.x = this.x + this.velocity.x
    } else {
      this.velocity.x = 0
    }

    if (
      this.y - this.radius + this.velocity.y > 0 &&
      this.y + this.radius + this.velocity.y < canvas.height
    ) {
      this.y = this.y + this.velocity.y
    } else {
      this.velocity.y = 0
    }
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }

  shoot(mouse, color = 'white') {
    const angle = Math.atan2(mouse.y - this.y, mouse.x - this.x)
    const velocity = {
      x: Math.cos(angle) * 5,
      y: Math.sin(angle) * 5
    }
    projectiles.push(new Projectile(this.x, this.y, 5, color, velocity))
    shootAudio.play()
  }
}

class Projectile {
  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

  update() {
    this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }
}

const powerUpImg = new Image()
powerUpImg.src = './img/lightning.png'

class PowerUp {
  constructor(x, y, velocity) {
    this.x = x
    this.y = y
    this.velocity = velocity
    this.width = 14
    this.height = 18
    this.radians = 0
  }

  draw() {
    c.save()
    c.translate(this.x + this.width / 2, this.y + this.height / 2)
    c.rotate(this.radians)
    c.translate(-this.x - this.width / 2, -this.y - this.height / 2)
    c.drawImage(powerUpImg, this.x, this.y, 14, 18)
    c.restore()
  }

  update() {
    this.radians += 0.002
    this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }
}



