/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' }
        },
        verticalFlip: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(-180deg)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #ff00ff' },
          '50%': { boxShadow: '0 0 20px #ff00ff' }
        },
        heartbeat: {
          'from': {
            transform: 'scale(1)',
            'transform-origin': 'center center',
            'animation-timing-function': 'ease-out'
          },
          '10%': {
            transform: 'scale(0.91)',
            'animation-timing-function': 'ease-in'
          },
          '17%': {
            transform: 'scale(0.98)',
            'animation-timing-function': 'ease-out'
          },
          '33%': {
            transform: 'scale(0.87)',
            'animation-timing-function': 'ease-in'
          },
          '45%': {
            transform: 'scale(1)',
            'animation-timing-function': 'ease-out'
          }
        },
        'slit-in-horizontal': {
          '0%': {
            transform: 'translateZ(-800px) rotateX(90deg)',
            opacity: '0'
          },
          '54%': {
            transform: 'translateZ(-160px) rotateX(87deg)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateZ(0) rotateX(0)'
          }
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0%) rotate(0deg)' },
          '15%':      { transform: 'translateX(-10%) translateY(-10%) rotate(-8deg)' },
          '30%':      { transform: 'translateX(10%) translateY(10%) rotate(6deg)' },
          '45%':      { transform: 'translateX(-8%) rotate(-4deg)' },
          '60%':      { transform: 'translateX(8%) rotate(2deg)' },
          '75%':      { transform: 'translateX(-4%) rotate(-1deg)' },
          '85%':      { transform: 'translateX(2%) rotate(0deg)' }
        },
        spring: {
          '0%':   { transform: 'scaleY(0.7) scaleX(1.2)' },   // compressed spring
          '20%':  { transform: 'scaleY(1.3) scaleX(0.8)' },   // rapid stretch
          '40%':  { transform: 'scaleY(0.85) scaleX(1.07)' }, // first bounce back
          '55%':  { transform: 'scaleY(1.08) scaleX(0.92)' }, // correction
          '70%':  { transform: 'scaleY(0.95) scaleX(1.05)' }, // small bounce
          '85%':  { transform: 'scaleY(1.02) scaleX(0.98)' }, // near rest
          '100%': { transform: 'scaleY(1) scaleX(1)' }        // settled
        },
        java: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '10%':    { transform: 'translateY(1%) rotate(2deg)' },
          '20%':    { transform: 'translateY(-5%) rotate(8deg)' },
          '35%':    { transform: 'translateY(-1%) rotate(-3deg)' },
          '50%':    { transform: 'translateY(0) rotate(6deg)' },
          '65%':    { transform: 'translateY(-10%) rotate(1deg)' },
          '80%':    { transform: 'translateY(-1%) rotate(3deg)' },
          '90%':    { transform: 'translateY(1%) rotate(1deg)' }  // added missing percentage and comma fixed
        },
        flicker: {
          '0%,100%': { opacity: 1 },
          '41.99%': { opacity: 1 },
          '42%': { opacity: 0 },
          '43%': { opacity: 0 },
          '43.01%': { opacity: 1 },
          '45.99%': { opacity: 1 },
          '46%': { opacity: 0 },
          '46.9%': { opacity: 0 },
          '46.91%': { opacity: 1 },
          '51.99%': { opacity: 1 },
          '52%': { opacity: 0 },
          '52.8%': { opacity: 0 },
          '52.81%': { opacity: 1 },
          '55.81%': { opacity: 1 },
          '58%': { opacity: 1 },
          '60%': { opacity: 1 },
          '65%': { opacity: 0 },
          '75%': { opacity: 1 }
        },
        'bounce-in-top': {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: '1',
            'animation-timing-function': 'ease-in'
          },
          '38%': {
            transform: 'translateY(0)',
            opacity: '1',
            'animation-timing-function': 'ease-out'
          },
          '55%': {
            transform: 'translateY(-65px)',
            'animation-timing-function': 'ease-in'
          },
          '72%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          },
          '81%': {
            transform: 'translateY(-28px)',
            'animation-timing-function': 'ease-in'
          },
          '90%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          },
          '95%': {
            transform: 'translateY(-8px)',
            'animation-timing-function': 'ease-in'
          },
          '100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          }
        },
        'bounce-out-top': {
          '0%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          },
          '5%': {
            transform: 'translateY(-30px)',
            'animation-timing-function': 'ease-in'
          },
          '15%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          },
          '25%': {
            transform: 'translateY(-38px)',
            'animation-timing-function': 'ease-in'
          },
          '38%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          },
          '52%': {
            transform: 'translateY(-75px)',
            'animation-timing-function': 'ease-in'
          },
          '70%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          },
          '85%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-800px)',
            opacity: '0'
          }
        },
        'shake-horizontal': {
          '0%,100%': { transform: 'translateX(0)'},
          '10%, 30%, 50%, 70%': { transform: 'translateX(-10px)'},
          '20%, 40%, 60%': { transform: 'translateX(10px)'},
          '80%': { transform: 'translateX(8px)'},
          '90%': { transform: 'translateX(-8px)'}
        },
        'git-branch-pulse': {
          '0%, 100%': { transform: 'scale(1) translateX(0)', opacity: '1' },
          '25%': { transform: 'scale(1.05) translateX(-3%)', opacity: '0.85' },
          '50%': { transform: 'scale(1.1) translateX(3%)', opacity: '1' },
          '75%': { transform: 'scale(1.05) translateX(-3%)', opacity: '0.85' }
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'vertical-flip': 'verticalFlip 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1s infinite alternate both',
        glow: 'glow 1.5s infinite',
        heartbeat: 'heartbeat 1.2s both infinite',
        'slit-in-horizontal': 'slit-in-horizontal 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite alternate both',
        wave: 'wave 1.3s ease-in-out infinite',
        spring: 'spring 1.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite alternate',
        java: 'java 2.1s ease-out infinite alternate',
        flicker: 'flicker 3s ease-out infinite reverse both',
        'bounce-in-top': 'bounce-in-top 3s infinite alternate both',
        'bounce-out-top': 'bounce-out-top 1.2s reverse both',
        'shake-horizontal': 'shake-horizontal 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both',
        'git-branch-pulse': 'git-branch-pulse 2s ease-in-out infinite',
      }
    }
  },
  plugins: []
}
