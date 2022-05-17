module.exports = {
  theme: {
    extend: {
        screens:{
          "xs":{'max':"700px"},
        },
        keyframes:{
          rightFlying:{
            'from':{
              'width':'35%',
            },
            'to':{
              'width':'50%',
            }
          },
          backgroundChange:{
            'from':{
              'background-color':'rgb(241 245 249)',
              'opacity': 0.80,
              'border-radius':'2px',
              'box-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
              '--tw-shadow-color': '#6b7280',
            },
            'to':{
              'background-color':'rgb(148 163 184);',
              'opacity': 0.75,
              'border-radius':'8px',
              'box-shadow': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              '--tw-shadow-color': '#111827',
            }
          },
          fontMove:{
            'from':{
              'font-size':'20px',
            },
            'to':{
              'font-size':'40px',
            }
          },
          
        },
        animation:{
          'rightFlying':"rightFlying 3s linear infinite",
          'fontMove':"fontMove 3s linear infinite",
          'backgroundChange':"backgroundChange 3s linear infinite",
        },
        
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}